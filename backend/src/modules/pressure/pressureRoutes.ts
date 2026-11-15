import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../../config/database.ts';
import { requireAuth } from '../../middleware/auth.ts';
import type { DataMode, TimeRangeKey } from '@shared/types/index.ts';

const router = Router();

const ThresholdSchema = z
  .object({
    pressureMinBar: z.number().min(0).max(20),
    pressureMaxBar: z.number().min(0.2).max(24),
    pressureCriticalMaxBar: z.number().min(0.5).max(25),
    flowDiffThresholdLpm: z.number().min(1).max(10000).optional(),
    flowAnomalyPersistenceSec: z.number().int().min(5).max(3600).optional(),
    staleTimeoutSec: z.number().int().min(5).max(3600).optional(),
  })
  .refine((d) => d.pressureMinBar < d.pressureMaxBar, {
    message: 'Minimum normal pressure must be less than maximum normal pressure.',
  })
  .refine((d) => d.pressureMaxBar <= d.pressureCriticalMaxBar, {
    message: 'Critical pressure ceiling must be greater than or equal to maximum normal pressure.',
  });

function getRangeStart(range: TimeRangeKey): Date {
  const now = Date.now();
  switch (range) {
    case '1h':
      return new Date(now - 60 * 60 * 1000);
    case '24h':
      return new Date(now - 24 * 60 * 60 * 1000);
    case '7d':
      return new Date(now - 7 * 24 * 60 * 60 * 1000);
    case '30d':
      return new Date(now - 30 * 24 * 60 * 60 * 1000);
    default:
      return new Date(now - 60 * 60 * 1000);
  }
}

router.get('/latest', requireAuth, async (_req, res) => {
  const [settings, thresholds] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: 'default' } }),
    prisma.monitoringThreshold.findUnique({ where: { id: 'default' } }),
  ]);

  const mode = (settings?.dataMode || 'DEMO') as DataMode;
  const targetSource = mode === 'LIVE' ? 'LIVE_ESP32' : 'DEMO';

  const latest = await prisma.sensorReading.findFirst({
    where: { dataSource: targetSource, isValid: true },
    orderBy: { recordedAt: 'desc' },
  });

  const staleSec = thresholds?.staleTimeoutSec ?? 20;
  const isStale = latest
    ? (Date.now() - latest.recordedAt.getTime()) / 1000 > staleSec
    : true;

  res.json({
    mode,
    pressureBar: latest?.pressureBar ?? null,
    recordedAt: latest?.recordedAt.toISOString() ?? null,
    isStale,
    thresholds: thresholds
      ? { ...thresholds, updatedAt: thresholds.updatedAt.toISOString() }
      : null,
  });
});

router.get('/history', requireAuth, async (req, res) => {
  const rangeParam = String(req.query.range || '1h') as TimeRangeKey;
  const range: TimeRangeKey = ['1h', '24h', '7d', '30d'].includes(rangeParam) ? rangeParam : '1h';
  const since = getRangeStart(range);

  const settings = await prisma.applicationSetting.findUnique({ where: { id: 'default' } });
  const mode = (settings?.dataMode || 'DEMO') as DataMode;
  const targetSource = mode === 'LIVE' ? 'LIVE_ESP32' : 'DEMO';

  const rows = await prisma.sensorReading.findMany({
    where: {
      dataSource: targetSource,
      isValid: true,
      recordedAt: { gte: since },
    },
    orderBy: { recordedAt: 'asc' },
    take: 240,
    select: {
      id: true,
      pressureBar: true,
      dataSource: true,
      recordedAt: true,
    },
  });

  res.json({
    range,
    mode,
    points: rows.map((r) => ({
      id: r.id,
      pressureBar: r.pressureBar,
      dataSource: r.dataSource,
      recordedAt: r.recordedAt.toISOString(),
    })),
  });
});

router.get('/thresholds', requireAuth, async (_req, res) => {
  const thresholds = await prisma.monitoringThreshold.findUnique({ where: { id: 'default' } });
  if (!thresholds) {
    res.status(404).json({ error: 'Threshold configuration not found.' });
    return;
  }

  res.json({
    ...thresholds,
    updatedAt: thresholds.updatedAt.toISOString(),
  });
});

router.patch('/thresholds', requireAuth, async (req, res) => {
  const parsed = ThresholdSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message || 'Invalid thresholds.' });
    return;
  }

  const updated = await prisma.monitoringThreshold.update({
    where: { id: 'default' },
    data: {
      pressureMinBar: parsed.data.pressureMinBar,
      pressureMaxBar: parsed.data.pressureMaxBar,
      pressureCriticalMaxBar: parsed.data.pressureCriticalMaxBar,
      ...(parsed.data.flowDiffThresholdLpm !== undefined
        ? { flowDiffThresholdLpm: parsed.data.flowDiffThresholdLpm }
        : {}),
      ...(parsed.data.flowAnomalyPersistenceSec !== undefined
        ? { flowAnomalyPersistenceSec: parsed.data.flowAnomalyPersistenceSec }
        : {}),
      ...(parsed.data.staleTimeoutSec !== undefined
        ? { staleTimeoutSec: parsed.data.staleTimeoutSec }
        : {}),
    },
  });

  res.json({
    ...updated,
    updatedAt: updated.updatedAt.toISOString(),
  });
});

export default router;
