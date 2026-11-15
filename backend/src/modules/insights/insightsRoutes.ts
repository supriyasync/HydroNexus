import { Router } from 'express';
import { prisma } from '../../config/database.ts';
import { requireAuth } from '../../middleware/auth.ts';
import type { DataMode, InsightsVolumePointDTO, TimeRangeKey } from '@shared/types/index.ts';

const router = Router();

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
      return new Date(now - 24 * 60 * 60 * 1000);
  }
}

async function computeIntegratedInsights(range: TimeRangeKey) {
  const since = getRangeStart(range);
  const [settings, facilities] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: 'default' } }),
    prisma.facility.findMany({
      select: { storageCapacityLiters: true, currentStorageLiters: true },
    }),
  ]);

  const mode = (settings?.dataMode || 'DEMO') as DataMode;
  const targetSource = mode === 'LIVE' ? 'LIVE_ESP32' : 'DEMO';

  const readings = await prisma.sensorReading.findMany({
    where: {
      dataSource: targetSource,
      isValid: true,
      recordedAt: { gte: since },
    },
    orderBy: { recordedAt: 'asc' },
  });

  let totalInletVolumeLiters = 0;
  let totalOutletVolumeLiters = 0;
  let totalMonitoredMinutes = 0;
  let pressureSum = 0;

  const bucketDictionary: Record<
    string,
    {
      timestamp: string;
      inletVolume: number;
      outletVolume: number;
      discrepancyVolume: number;
      pressureSum: number;
      count: number;
    }
  > = {};

  for (let i = 0; i < readings.length; i++) {
    const curr = readings[i];
    pressureSum += curr.pressureBar;

    // Discrete time interval integration: Volume = Flow Rate (L/min) * Δt (min)
    // Cap gap at 5 minutes so offline periods are never artificially extrapolated.
    let deltaMinutes = 0;
    if (i > 0) {
      const prev = readings[i - 1];
      const rawDeltaMin = (curr.recordedAt.getTime() - prev.recordedAt.getTime()) / 60000;
      deltaMinutes = Math.max(0, Math.min(5, rawDeltaMin));
    } else if (readings.length > 1) {
      const next = readings[1];
      const rawDeltaMin = (next.recordedAt.getTime() - curr.recordedAt.getTime()) / 60000;
      deltaMinutes = Math.max(0, Math.min(5, rawDeltaMin));
    }

    const avgInlet =
      i > 0 ? (curr.inletFlow + readings[i - 1].inletFlow) / 2 : curr.inletFlow;
    const avgOutlet =
      i > 0 ? (curr.outletFlow + readings[i - 1].outletFlow) / 2 : curr.outletFlow;

    const segInletVol = avgInlet * deltaMinutes;
    const segOutletVol = avgOutlet * deltaMinutes;
    const segDiscrepancyVol = segInletVol - segOutletVol;

    totalInletVolumeLiters += segInletVol;
    totalOutletVolumeLiters += segOutletVol;
    totalMonitoredMinutes += deltaMinutes;

    const bucketDate = new Date(curr.recordedAt);
    if (range === '1h') {
      bucketDate.setMinutes(Math.floor(bucketDate.getMinutes() / 5) * 5, 0, 0);
    } else if (range === '24h') {
      bucketDate.setMinutes(0, 0, 0);
    } else {
      bucketDate.setHours(0, 0, 0, 0);
    }

    const bucketKey = bucketDate.toISOString();
    if (!bucketDictionary[bucketKey]) {
      bucketDictionary[bucketKey] = {
        timestamp: bucketKey,
        inletVolume: 0,
        outletVolume: 0,
        discrepancyVolume: 0,
        pressureSum: 0,
        count: 0,
      };
    }

    bucketDictionary[bucketKey].inletVolume += segInletVol;
    bucketDictionary[bucketKey].outletVolume += segOutletVol;
    bucketDictionary[bucketKey].discrepancyVolume += segDiscrepancyVol;
    bucketDictionary[bucketKey].pressureSum += curr.pressureBar;
    bucketDictionary[bucketKey].count += 1;
  }

  const series: InsightsVolumePointDTO[] = Object.values(bucketDictionary)
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
    .map((b) => {
      const d = new Date(b.timestamp);
      const bucketLabel =
        range === '1h' || range === '24h'
          ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : d.toLocaleDateString([], { month: 'short', day: 'numeric' });
      return {
        bucketLabel,
        timestamp: b.timestamp,
        inletVolumeLiters: Number(b.inletVolume.toFixed(1)),
        outletVolumeLiters: Number(b.outletVolume.toFixed(1)),
        discrepancyVolumeLiters: Number(b.discrepancyVolume.toFixed(1)),
        avgPressureBar: Number((b.pressureSum / b.count).toFixed(2)),
        sampleCount: b.count,
      };
    });

  const estimatedDiscrepancyLiters = totalInletVolumeLiters - totalOutletVolumeLiters;
  const discrepancyPercentage =
    totalInletVolumeLiters > 0
      ? (estimatedDiscrepancyLiters / totalInletVolumeLiters) * 100
      : 0;

  let totalStorageCapacityLiters = 0;
  let totalCurrentStorageLiters = 0;
  for (const f of facilities) {
    if (f.storageCapacityLiters && f.currentStorageLiters !== null) {
      totalStorageCapacityLiters += f.storageCapacityLiters;
      totalCurrentStorageLiters += f.currentStorageLiters;
    }
  }

  const storageUtilizationPercent =
    totalStorageCapacityLiters > 0
      ? Number(((totalCurrentStorageLiters / totalStorageCapacityLiters) * 100).toFixed(1))
      : null;

  return {
    range,
    mode,
    classification: mode === 'DEMO' ? ('DEMONSTRATION' as const) : ('CALCULATED' as const),
    totalInletVolumeLiters: Number(totalInletVolumeLiters.toFixed(1)),
    totalOutletVolumeLiters: Number(totalOutletVolumeLiters.toFixed(1)),
    estimatedDiscrepancyLiters: Number(estimatedDiscrepancyLiters.toFixed(1)),
    discrepancyPercentage: Number(discrepancyPercentage.toFixed(2)),
    averagePressureBar:
      readings.length > 0 ? Number((pressureSum / readings.length).toFixed(2)) : 0,
    validSamplesCount: readings.length,
    monitoredDurationMinutes: Number(totalMonitoredMinutes.toFixed(1)),
    storageUtilizationPercent,
    totalStorageCapacityLiters,
    totalCurrentStorageLiters,
    methodologyNote:
      'Discrete numerical integration: Volume (L) = Σ(Average Flow Rate [L/min] × Δt [min]) across actual valid reading intervals (capped at 5 min per gap). Flow discrepancy does not confirm physical pipe leakage without field inspection.',
    series,
  };
}

router.get('/summary', requireAuth, async (req, res) => {
  const rangeParam = String(req.query.range || '24h') as TimeRangeKey;
  const range: TimeRangeKey = ['1h', '24h', '7d', '30d'].includes(rangeParam) ? rangeParam : '24h';
  const summary = await computeIntegratedInsights(range);
  res.json(summary);
});

router.get('/volume', requireAuth, async (req, res) => {
  const rangeParam = String(req.query.range || '24h') as TimeRangeKey;
  const range: TimeRangeKey = ['1h', '24h', '7d', '30d'].includes(rangeParam) ? rangeParam : '24h';
  const summary = await computeIntegratedInsights(range);
  res.json({
    range: summary.range,
    mode: summary.mode,
    totalInletVolumeLiters: summary.totalInletVolumeLiters,
    totalOutletVolumeLiters: summary.totalOutletVolumeLiters,
    series: summary.series,
  });
});

router.get('/discrepancy', requireAuth, async (req, res) => {
  const rangeParam = String(req.query.range || '24h') as TimeRangeKey;
  const range: TimeRangeKey = ['1h', '24h', '7d', '30d'].includes(rangeParam) ? rangeParam : '24h';
  const summary = await computeIntegratedInsights(range);
  res.json({
    range: summary.range,
    mode: summary.mode,
    estimatedDiscrepancyLiters: summary.estimatedDiscrepancyLiters,
    discrepancyPercentage: summary.discrepancyPercentage,
    methodologyNote: summary.methodologyNote,
    series: summary.series,
  });
});

export default router;
