import { Router } from 'express';
import { prisma } from '../../config/database.ts';
import { requireAuth } from '../../middleware/auth.ts';
import { runtimeTelemetryState } from '../../services/telemetryLoop.ts';
import type { DataMode, HealthStatus, SystemComponentHealthDTO } from '@shared/types/index.ts';

const router = Router();

// Public backend health check (http://localhost:5000/api/health)
router.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      service: 'hydronexus-backend',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(503).json({
      status: 'error',
      service: 'hydronexus-backend',
      database: 'disconnected',
      timestamp: new Date().toISOString(),
    });
  }
});

router.get('/system/status', requireAuth, async (_req, res) => {
  const [settings, thresholds] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: 'default' } }),
    prisma.monitoringThreshold.findUnique({ where: { id: 'default' } }),
  ]);

  const mode = (settings?.dataMode || 'DEMO') as DataMode;
  const staleSec = thresholds?.staleTimeoutSec ?? 20;
  const targetSource = mode === 'LIVE' ? 'LIVE_ESP32' : 'DEMO';

  const latest = await prisma.sensorReading.findFirst({
    where: { dataSource: targetSource, isValid: true },
    orderBy: { recordedAt: 'desc' },
  });

  const isStale = latest
    ? (Date.now() - latest.recordedAt.getTime()) / 1000 > staleSec
    : true;

  const isDemo = mode === 'DEMO';
  const lastComm = latest?.recordedAt.toISOString() ?? null;

  let sensorStatus: HealthStatus = isDemo ? 'DEMO' : 'UNAVAILABLE';
  let esp32Status: HealthStatus = isDemo ? 'DEMO' : 'DISCONNECTED';
  let apiStatus: HealthStatus = 'CONNECTED';

  if (isDemo) {
    if (runtimeTelemetryState.demoError) {
      sensorStatus = runtimeTelemetryState.sensorStatus;
      esp32Status = runtimeTelemetryState.esp32Status;
      apiStatus = runtimeTelemetryState.apiStatus;
    } else if (isStale) {
      sensorStatus = 'STALE';
    }
  } else {
    if (runtimeTelemetryState.liveAvailable && !isStale) {
      sensorStatus = 'CONNECTED';
      esp32Status = 'CONNECTED';
      apiStatus = 'CONNECTED';
    } else if (runtimeTelemetryState.liveAvailable && isStale) {
      sensorStatus = 'STALE';
      esp32Status = 'STALE';
      apiStatus = 'CONNECTED';
    } else {
      sensorStatus = 'UNAVAILABLE';
      esp32Status = 'DISCONNECTED';
      apiStatus = 'UNAVAILABLE';
    }
  }

  const components: SystemComponentHealthDTO[] = [
    {
      key: 'inlet_flow_sensor',
      name: 'Inlet Flow Sensor',
      category: 'SENSOR',
      status: sensorStatus,
      isSimulated: isDemo,
      lastCommunicationAt: lastComm,
      diagnosticMessage: isDemo
        ? runtimeTelemetryState.demoError ||
          'Simulated turbine inlet flow channel generating gradual demonstration readings.'
        : sensorStatus === 'CONNECTED'
          ? 'Receiving valid live inlet flow measurements (L/min).'
          : runtimeTelemetryState.liveError || 'Live inlet flow sensor unavailable.',
    },
    {
      key: 'outlet_flow_sensor',
      name: 'Outlet Flow Sensor',
      category: 'SENSOR',
      status: sensorStatus,
      isSimulated: isDemo,
      lastCommunicationAt: lastComm,
      diagnosticMessage: isDemo
        ? runtimeTelemetryState.demoError ||
          'Simulated turbine outlet flow channel active for discrepancy calculation.'
        : sensorStatus === 'CONNECTED'
          ? 'Receiving valid live outlet flow measurements (L/min).'
          : runtimeTelemetryState.liveError || 'Live outlet flow sensor unavailable.',
    },
    {
      key: 'pressure_sensor',
      name: 'Pressure Sensor',
      category: 'SENSOR',
      status: sensorStatus,
      isSimulated: isDemo,
      lastCommunicationAt: lastComm,
      diagnosticMessage: isDemo
        ? runtimeTelemetryState.demoError ||
          'Simulated pipeline pressure transducer reporting in bar.'
        : sensorStatus === 'CONNECTED'
          ? 'Receiving valid live pipeline pressure measurements (bar).'
          : runtimeTelemetryState.liveError || 'Live pressure transducer unavailable.',
    },
    {
      key: 'esp32_controller',
      name: 'ESP32 Controller',
      category: 'HARDWARE',
      status: esp32Status,
      isSimulated: isDemo,
      lastCommunicationAt: isDemo
        ? lastComm
        : runtimeTelemetryState.lastSuccessfulLiveAt,
      diagnosticMessage: isDemo
        ? 'Hardware microcontroller is simulated in Demo Mode. Switch to Live Mode when physical ESP32 is online.'
        : esp32Status === 'CONNECTED'
          ? `ESP32 Wi-Fi telemetry active at ${settings?.liveSensorApiUrl || 'configured endpoint'}.`
          : runtimeTelemetryState.liveError ||
            'ESP32 endpoint unreachable or not configured.',
    },
    {
      key: 'api_connection',
      name: 'API Connection',
      category: 'BACKEND',
      status: apiStatus,
      isSimulated: false,
      lastCommunicationAt: runtimeTelemetryState.lastPollAttemptAt || new Date().toISOString(),
      diagnosticMessage:
        apiStatus === 'CONNECTED'
          ? `HydroNexus Express + SQLite REST API responding normally (poll interval: ${settings?.pollIntervalMs ?? 5000}ms).`
          : runtimeTelemetryState.liveError ||
            runtimeTelemetryState.demoError ||
            'Upstream sensor API connection unavailable.',
    },
    {
      key: 'dashboard_connection',
      name: 'Dashboard Connection',
      category: 'FRONTEND',
      status: 'CONNECTED',
      isSimulated: false,
      lastCommunicationAt: new Date().toISOString(),
      diagnosticMessage: 'Authenticated municipal operator session active.',
    },
  ];

  const overallStatus = isDemo
    ? runtimeTelemetryState.demoError
      ? 'DEGRADED'
      : 'DEMO'
    : runtimeTelemetryState.liveAvailable
      ? isStale
        ? 'DEGRADED'
        : 'HEALTHY'
      : 'DISCONNECTED';

  res.json({
    mode,
    overallStatus,
    checkedAt: new Date().toISOString(),
    components,
  });
});

export default router;
