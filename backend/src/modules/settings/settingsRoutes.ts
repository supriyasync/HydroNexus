import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../../config/database.ts';
import { requireAuth } from '../../middleware/auth.ts';
import { tickTelemetryOnce } from '../../services/telemetryLoop.ts';

const router = Router();

const UpdateSettingsSchema = z.object({
  dataMode: z.enum(['DEMO', 'LIVE']).optional(),
  demoScenario: z
    .enum([
      'NORMAL',
      'MILD_DISCREPANCY',
      'PRESSURE_SPIKE',
      'PRESSURE_DROP',
      'SENSOR_DISCONNECTED',
      'API_FAILURE',
    ])
    .optional(),
  liveSensorApiUrl: z.string().trim().max(500).optional(),
  pollIntervalMs: z.number().int().min(2000).max(60000).optional(),
  networkContext: z.string().trim().min(3).max(200).optional(),
  pressureMinBar: z.number().min(0).max(20).optional(),
  pressureMaxBar: z.number().min(0.2).max(24).optional(),
  pressureCriticalMaxBar: z.number().min(0.5).max(25).optional(),
  flowDiffThresholdLpm: z.number().min(1).max(10000).optional(),
  flowAnomalyPersistenceSec: z.number().int().min(5).max(3600).optional(),
  staleTimeoutSec: z.number().int().min(5).max(3600).optional(),
});

router.get('/', requireAuth, async (_req, res) => {
  const [settings, thresholds] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: 'default' } }),
    prisma.monitoringThreshold.findUnique({ where: { id: 'default' } }),
  ]);

  res.json({
    settings: settings
      ? { ...settings, updatedAt: settings.updatedAt.toISOString() }
      : null,
    thresholds: thresholds
      ? { ...thresholds, updatedAt: thresholds.updatedAt.toISOString() }
      : null,
  });
});

router.patch('/', requireAuth, async (req, res) => {
  const parsed = UpdateSettingsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message || 'Invalid settings.' });
    return;
  }

  const data = parsed.data;
  if (
    data.pressureMinBar !== undefined &&
    data.pressureMaxBar !== undefined &&
    data.pressureMinBar >= data.pressureMaxBar
  ) {
    res.status(400).json({
      error: 'Minimum pressure threshold must be lower than maximum normal pressure.',
    });
    return;
  }

  const settings = await prisma.applicationSetting.update({
    where: { id: 'default' },
    data: {
      ...(data.dataMode !== undefined ? { dataMode: data.dataMode } : {}),
      ...(data.demoScenario !== undefined ? { demoScenario: data.demoScenario } : {}),
      ...(data.liveSensorApiUrl !== undefined
        ? { liveSensorApiUrl: data.liveSensorApiUrl }
        : {}),
      ...(data.pollIntervalMs !== undefined ? { pollIntervalMs: data.pollIntervalMs } : {}),
      ...(data.networkContext !== undefined ? { networkContext: data.networkContext } : {}),
    },
  });

  const thresholds = await prisma.monitoringThreshold.update({
    where: { id: 'default' },
    data: {
      ...(data.pressureMinBar !== undefined ? { pressureMinBar: data.pressureMinBar } : {}),
      ...(data.pressureMaxBar !== undefined ? { pressureMaxBar: data.pressureMaxBar } : {}),
      ...(data.pressureCriticalMaxBar !== undefined
        ? { pressureCriticalMaxBar: data.pressureCriticalMaxBar }
        : {}),
      ...(data.flowDiffThresholdLpm !== undefined
        ? { flowDiffThresholdLpm: data.flowDiffThresholdLpm }
        : {}),
      ...(data.flowAnomalyPersistenceSec !== undefined
        ? { flowAnomalyPersistenceSec: data.flowAnomalyPersistenceSec }
        : {}),
      ...(data.staleTimeoutSec !== undefined ? { staleTimeoutSec: data.staleTimeoutSec } : {}),
    },
  });

  // Immediately run one telemetry cycle so Live/Demo switches reflect right away
  await tickTelemetryOnce();

  res.json({
    settings: { ...settings, updatedAt: settings.updatedAt.toISOString() },
    thresholds: { ...thresholds, updatedAt: thresholds.updatedAt.toISOString() },
  });
});

export default router;
