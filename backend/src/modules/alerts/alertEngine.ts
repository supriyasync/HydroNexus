import { prisma } from '../../config/database.ts';
import type { AlertCategory, AlertSeverity } from '@shared/types/index.ts';

async function createAlertIfNotRecentlyOpen(params: {
  category: AlertCategory;
  severity: AlertSeverity;
  title: string;
  description: string;
  facilityId: string | null;
  inletSnapshot?: number | null;
  outletSnapshot?: number | null;
  differenceSnapshot?: number | null;
  pressureSnapshot?: number | null;
  dataSource: 'DEMO' | 'LIVE_ESP32';
}): Promise<void> {
  const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
  const existing = await prisma.alert.findFirst({
    where: {
      category: params.category,
      status: { in: ['NEW', 'UNDER_INVESTIGATION'] },
      detectedAt: { gte: twoMinutesAgo },
    },
  });

  if (existing) {
    return;
  }

  const count = await prisma.alert.count();
  const alertCode = `IMC-ALT-${1001 + count}`;

  await prisma.alert.create({
    data: {
      alertCode,
      category: params.category,
      severity: params.severity,
      status: 'NEW',
      title: params.title,
      description: params.description,
      facilityId: params.facilityId,
      inletSnapshot: params.inletSnapshot ?? null,
      outletSnapshot: params.outletSnapshot ?? null,
      differenceSnapshot: params.differenceSnapshot ?? null,
      pressureSnapshot: params.pressureSnapshot ?? null,
      dataSource: params.dataSource,
    },
  });
}

export async function evaluateReadingForAlerts(params: {
  facilityId: string;
  inletFlow: number;
  outletFlow: number;
  flowDifference: number;
  pressureBar: number;
  dataSource: 'DEMO' | 'LIVE_ESP32';
}): Promise<void> {
  const thresholds = await prisma.monitoringThreshold.findUnique({ where: { id: 'default' } });
  if (!thresholds) return;

  const sourceTag = params.dataSource === 'DEMO' ? '[DEMONSTRATION DATA] ' : '';

  // 1. Flow Discrepancy Persistence Check (Inlet - Outlet)
  if (Math.abs(params.flowDifference) >= thresholds.flowDiffThresholdLpm) {
    const windowStart = new Date(Date.now() - thresholds.flowAnomalyPersistenceSec * 1000);
    const windowReadings = await prisma.sensorReading.findMany({
      where: {
        facilityId: params.facilityId,
        isValid: true,
        recordedAt: { gte: windowStart },
      },
      orderBy: { recordedAt: 'asc' },
    });

    const allExceed =
      windowReadings.length >= 2 &&
      windowReadings.every((r) => Math.abs(r.flowDifference) >= thresholds.flowDiffThresholdLpm);

    if (allExceed) {
      await createAlertIfNotRecentlyOpen({
        category: 'POSSIBLE_LEAKAGE_VERIFICATION_REQUIRED',
        severity: 'AMBER',
        title: 'Possible anomaly – Verification Required',
        description: `${sourceTag}Sustained inlet-outlet flow difference of ${params.flowDifference.toFixed(
          2
        )} L/min persisted for at least ${thresholds.flowAnomalyPersistenceSec}s (illustrative threshold: ${thresholds.flowDiffThresholdLpm} L/min). Field verification is required before confirming physical leakage.`,
        facilityId: params.facilityId,
        inletSnapshot: params.inletFlow,
        outletSnapshot: params.outletFlow,
        differenceSnapshot: params.flowDifference,
        pressureSnapshot: params.pressureBar,
        dataSource: params.dataSource,
      });
    } else {
      await createAlertIfNotRecentlyOpen({
        category: 'ABNORMAL_FLOW_DIFFERENCE',
        severity: 'AMBER',
        title: 'Transient Flow Difference Observed',
        description: `${sourceTag}Flow difference of ${params.flowDifference.toFixed(
          2
        )} L/min exceeded illustrative threshold (${thresholds.flowDiffThresholdLpm} L/min). Monitoring persistence duration.`,
        facilityId: params.facilityId,
        inletSnapshot: params.inletFlow,
        outletSnapshot: params.outletFlow,
        differenceSnapshot: params.flowDifference,
        pressureSnapshot: params.pressureBar,
        dataSource: params.dataSource,
      });
    }
  }

  // 2. Pressure Threshold Evaluation (never use red for minor warning)
  if (params.pressureBar >= thresholds.pressureCriticalMaxBar) {
    await createAlertIfNotRecentlyOpen({
      category: 'UNUSUAL_PRESSURE_VARIATION',
      severity: 'RED',
      title: 'Critical Pipeline Over-Pressure Detected',
      description: `${sourceTag}Measured pressure (${params.pressureBar.toFixed(
        2
      )} bar) reached or exceeded critical safety ceiling (${thresholds.pressureCriticalMaxBar} bar). Immediate valve inspection advised.`,
      facilityId: params.facilityId,
      inletSnapshot: params.inletFlow,
      outletSnapshot: params.outletFlow,
      differenceSnapshot: params.flowDifference,
      pressureSnapshot: params.pressureBar,
      dataSource: params.dataSource,
    });
  } else if (
    params.pressureBar > thresholds.pressureMaxBar ||
    params.pressureBar < thresholds.pressureMinBar
  ) {
    const direction = params.pressureBar > thresholds.pressureMaxBar ? 'above' : 'below';
    await createAlertIfNotRecentlyOpen({
      category: 'UNUSUAL_PRESSURE_VARIATION',
      severity: 'AMBER',
      title: 'Unusual Pressure Variation',
      description: `${sourceTag}Pipeline pressure (${params.pressureBar.toFixed(
        2
      )} bar) moved ${direction} the illustrative normal operating band (${thresholds.pressureMinBar}–${thresholds.pressureMaxBar} bar).`,
      facilityId: params.facilityId,
      inletSnapshot: params.inletFlow,
      outletSnapshot: params.outletFlow,
      differenceSnapshot: params.flowDifference,
      pressureSnapshot: params.pressureBar,
      dataSource: params.dataSource,
    });
  }
}

export async function recordConnectivityAlert(params: {
  category:
    | 'SENSOR_DISCONNECTED'
    | 'ESP32_DISCONNECTED'
    | 'API_CONNECTION_LOST'
    | 'STALE_SENSOR_DATA'
    | 'INVALID_SENSOR_READINGS';
  title: string;
  description: string;
  facilityId: string | null;
  dataSource: 'DEMO' | 'LIVE_ESP32';
}): Promise<void> {
  const severity: AlertSeverity =
    params.category === 'STALE_SENSOR_DATA' ? 'AMBER' : 'RED';
  await createAlertIfNotRecentlyOpen({
    category: params.category,
    severity,
    title: params.title,
    description: params.description,
    facilityId: params.facilityId,
    dataSource: params.dataSource,
  });
}
