import { prisma } from '../config/database.ts';
import { generateDemoSample } from '../simulator/demoSimulator.ts';
import { fetchFromLiveEsp32Endpoint } from '../integrations/esp32/esp32Service.ts';
import {
  evaluateReadingForAlerts,
  recordConnectivityAlert,
} from '../modules/alerts/alertEngine.ts';
import type { DataMode, DemoScenario } from '@shared/types/index.ts';

interface RuntimeTelemetryState {
  liveAvailable: boolean;
  liveError: string | null;
  lastSuccessfulLiveAt: string | null;
  lastSuccessfulDemoAt: string | null;
  demoError: string | null;
  sensorStatus: 'CONNECTED' | 'DISCONNECTED' | 'DEMO' | 'UNAVAILABLE' | 'STALE';
  esp32Status: 'CONNECTED' | 'DISCONNECTED' | 'DEMO' | 'UNAVAILABLE' | 'STALE';
  apiStatus: 'CONNECTED' | 'DISCONNECTED' | 'DEMO' | 'UNAVAILABLE' | 'STALE';
  lastPollAttemptAt: string | null;
}

export const runtimeTelemetryState: RuntimeTelemetryState = {
  liveAvailable: false,
  liveError: null,
  lastSuccessfulLiveAt: null,
  lastSuccessfulDemoAt: null,
  demoError: null,
  sensorStatus: 'DEMO',
  esp32Status: 'DEMO',
  apiStatus: 'DEMO',
  lastPollAttemptAt: null,
};

let timerHandle: ReturnType<typeof setTimeout> | null = null;
let isTickRunning = false;

export async function getPrimaryPilotFacilityId(): Promise<string | null> {
  const pilot = await prisma.facility.findUnique({ where: { code: 'IND-SEN-01' } });
  if (pilot) return pilot.id;
  const first = await prisma.facility.findFirst();
  return first?.id ?? null;
}

export async function tickTelemetryOnce(): Promise<void> {
  if (isTickRunning) return;
  isTickRunning = true;
  runtimeTelemetryState.lastPollAttemptAt = new Date().toISOString();

  try {
    const settings = await prisma.applicationSetting.findUnique({ where: { id: 'default' } });
    if (!settings) return;

    const facilityId = await getPrimaryPilotFacilityId();
    if (!facilityId) return;

    const mode = settings.dataMode as DataMode;
    const scenario = settings.demoScenario as DemoScenario;

    if (mode === 'DEMO') {
      const sample = generateDemoSample(scenario);

      if (!sample.ok) {
        runtimeTelemetryState.demoError = sample.errorMessage ?? 'Simulated connectivity error';
        runtimeTelemetryState.sensorStatus =
          sample.errorType === 'SENSOR_DISCONNECTED' ? 'DISCONNECTED' : 'DEMO';
        runtimeTelemetryState.esp32Status =
          sample.errorType === 'API_FAILURE' ? 'DISCONNECTED' : 'DEMO';
        runtimeTelemetryState.apiStatus =
          sample.errorType === 'API_FAILURE' ? 'UNAVAILABLE' : 'CONNECTED';

        await prisma.sensor.updateMany({
          where: { facilityId },
          data: { status: runtimeTelemetryState.sensorStatus },
        });

        await recordConnectivityAlert({
          category:
            sample.errorType === 'SENSOR_DISCONNECTED'
              ? 'SENSOR_DISCONNECTED'
              : 'API_CONNECTION_LOST',
          title:
            sample.errorType === 'SENSOR_DISCONNECTED'
              ? 'Simulated Sensor Disconnected'
              : 'Simulated API Connection Lost',
          description: `[DEMONSTRATION DATA] ${sample.errorMessage}`,
          facilityId,
          dataSource: 'DEMO',
        });
        return;
      }

      const inletFlow = sample.inlet!;
      const outletFlow = sample.outlet!;
      const pressureBar = sample.pressure!;
      const flowDifference = Number((inletFlow - outletFlow).toFixed(2));
      const now = new Date();

      await prisma.sensorReading.create({
        data: {
          facilityId,
          inletFlow,
          outletFlow,
          flowDifference,
          pressureBar,
          dataSource: 'DEMO',
          isValid: true,
          recordedAt: now,
        },
      });

      await prisma.sensor.updateMany({
        where: { facilityId },
        data: { status: 'DEMO', isSimulated: true, lastReadingAt: now },
      });

      runtimeTelemetryState.demoError = null;
      runtimeTelemetryState.lastSuccessfulDemoAt = now.toISOString();
      runtimeTelemetryState.sensorStatus = 'DEMO';
      runtimeTelemetryState.esp32Status = 'DEMO';
      runtimeTelemetryState.apiStatus = 'CONNECTED';

      await evaluateReadingForAlerts({
        facilityId,
        inletFlow,
        outletFlow,
        flowDifference,
        pressureBar,
        dataSource: 'DEMO',
      });
    } else {
      // STRICT LIVE MODE: Attempt real fetch from configured ESP32 endpoint; NEVER substitute Demo data
      const liveResult = await fetchFromLiveEsp32Endpoint(settings.liveSensorApiUrl);

      if (!liveResult.ok || !liveResult.payload) {
        runtimeTelemetryState.liveAvailable = false;
        runtimeTelemetryState.liveError =
          liveResult.errorMessage ?? 'Live sensor API is unavailable.';
        runtimeTelemetryState.sensorStatus = 'UNAVAILABLE';
        runtimeTelemetryState.esp32Status = 'DISCONNECTED';
        runtimeTelemetryState.apiStatus = 'UNAVAILABLE';

        await prisma.sensor.updateMany({
          where: { facilityId },
          data: { status: 'UNAVAILABLE', isSimulated: false },
        });

        await recordConnectivityAlert({
          category:
            liveResult.errorType === 'INVALID_SENSOR_READINGS'
              ? 'INVALID_SENSOR_READINGS'
              : 'API_CONNECTION_LOST',
          title:
            liveResult.errorType === 'INVALID_SENSOR_READINGS'
              ? 'Invalid Live ESP32 Sensor Payload Rejected'
              : 'Live Sensor API Connection Unavailable',
          description: liveResult.errorMessage ?? 'Unable to fetch live ESP32 readings.',
          facilityId,
          dataSource: 'LIVE_ESP32',
        });
        return;
      }

      const { inlet, outlet, pressure } = liveResult.payload;
      const flowDifference = Number((inlet - outlet).toFixed(2));
      const now = new Date();

      await prisma.sensorReading.create({
        data: {
          facilityId,
          inletFlow: inlet,
          outletFlow: outlet,
          flowDifference,
          pressureBar: pressure,
          dataSource: 'LIVE_ESP32',
          isValid: true,
          recordedAt: now,
        },
      });

      await prisma.sensor.updateMany({
        where: { facilityId },
        data: { status: 'CONNECTED', isSimulated: false, lastReadingAt: now },
      });

      runtimeTelemetryState.liveAvailable = true;
      runtimeTelemetryState.liveError = null;
      runtimeTelemetryState.lastSuccessfulLiveAt = now.toISOString();
      runtimeTelemetryState.sensorStatus = 'CONNECTED';
      runtimeTelemetryState.esp32Status = 'CONNECTED';
      runtimeTelemetryState.apiStatus = 'CONNECTED';

      await evaluateReadingForAlerts({
        facilityId,
        inletFlow: inlet,
        outletFlow: outlet,
        flowDifference,
        pressureBar: pressure,
        dataSource: 'LIVE_ESP32',
      });
    }
  } catch (err) {
    console.error('Telemetry loop error:', err);
  } finally {
    isTickRunning = false;
  }
}

export async function startTelemetryScheduler(): Promise<void> {
  if (timerHandle) clearTimeout(timerHandle);

  const scheduleNext = async () => {
    await tickTelemetryOnce();
    let intervalMs = 5000;
    try {
      const settings = await prisma.applicationSetting.findUnique({ where: { id: 'default' } });
      if (settings?.pollIntervalMs) {
        intervalMs = Math.max(2000, Math.min(60000, settings.pollIntervalMs));
      }
    } catch {
      intervalMs = 5000;
    }
    timerHandle = setTimeout(scheduleNext, intervalMs);
  };

  timerHandle = setTimeout(scheduleNext, 1200);
}

export function stopTelemetryScheduler(): void {
  if (timerHandle) {
    clearTimeout(timerHandle);
    timerHandle = null;
  }
}
