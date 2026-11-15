import { Router } from "express";
import { z } from "zod";
import { prisma } from "../../config/database.ts";
import { requireAuth } from "../../middleware/auth.ts";
import { validateEsp32Payload } from "../../integrations/esp32/esp32Service.ts";
import {
  evaluateReadingForAlerts,
  recordConnectivityAlert,
} from "../alerts/alertEngine.ts";
import {
  getPrimaryPilotFacilityId,
  runtimeTelemetryState,
  tickTelemetryOnce,
} from "../../services/telemetryLoop.ts";
import type {
  DataMode,
  DemoScenario,
  SensorReadingDTO,
  TimeRangeKey,
} from "@shared/types/index.ts";

const router = Router();

function getRangeWindowStart(range: TimeRangeKey): Date {
  const now = Date.now();
  switch (range) {
    case "1h":
      return new Date(now - 60 * 60 * 1000);
    case "24h":
      return new Date(now - 24 * 60 * 60 * 1000);
    case "7d":
      return new Date(now - 7 * 24 * 60 * 60 * 1000);
    case "30d":
      return new Date(now - 30 * 24 * 60 * 60 * 1000);
    default:
      return new Date(now - 60 * 60 * 1000);
  }
}

function formatReading(
  row: {
    id: string;
    facilityId: string;
    inletFlow: number;
    outletFlow: number;
    flowDifference: number;
    pressureBar: number;
    dataSource: string;
    isValid: boolean;
    recordedAt: Date | string;
    facility?: { name: string } | null;
  },
  staleTimeoutSec: number,
): SensorReadingDTO {
  const recDate =
    typeof row.recordedAt === "string"
      ? new Date(row.recordedAt)
      : row.recordedAt;
  const ageSec = (Date.now() - recDate.getTime()) / 1000;
  const isStale = ageSec > staleTimeoutSec;
  const dataSource = row.dataSource === "LIVE_ESP32" ? "LIVE_ESP32" : "DEMO";
  return {
    id: row.id,
    facilityId: row.facilityId,
    facilityName: row.facility?.name,
    inletFlow: row.inletFlow,
    outletFlow: row.outletFlow,
    flowDifference: row.flowDifference,
    pressureBar: row.pressureBar,
    dataSource,
    valueLabel: dataSource === "DEMO" ? "DEMONSTRATION" : "MEASURED",
    isValid: row.isValid,
    isStale,
    recordedAt: recDate.toISOString(),
  };
}

router.get("/latest", requireAuth, async (_req, res) => {
  const [settings, thresholds] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: "default" } }),
    prisma.monitoringThreshold.findUnique({ where: { id: "default" } }),
  ]);
  const mode = (settings?.dataMode || "DEMO") as DataMode;
  const targetSource = mode === "LIVE" ? "LIVE_ESP32" : "DEMO";
  const latest = await prisma.sensorReading.findFirst({
    where: { dataSource: targetSource, isValid: true },
    orderBy: { recordedAt: "desc" },
    include: { facility: { select: { name: true } } },
  });
  res.json({
    mode,
    reading: latest
      ? formatReading(latest, thresholds?.staleTimeoutSec ?? 20)
      : null,
  });
});

router.get("/history", requireAuth, async (req, res) => {
  const rangeParam = String(req.query.range || "1h") as TimeRangeKey;
  const facilityIdParam = req.query.facilityId
    ? String(req.query.facilityId)
    : undefined;
  const range: TimeRangeKey = ["1h", "24h", "7d", "30d"].includes(rangeParam)
    ? rangeParam
    : "1h";
  const since = getRangeWindowStart(range);
  const [settings, thresholds] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: "default" } }),
    prisma.monitoringThreshold.findUnique({ where: { id: "default" } }),
  ]);
  const mode = (settings?.dataMode || "DEMO") as DataMode;
  const targetSource = mode === "LIVE" ? "LIVE_ESP32" : "DEMO";

  // If a facilityId was requested, make sure it exists, or fallback to primary
  let targetFacilityId = facilityIdParam;
  if (!targetFacilityId) {
    targetFacilityId = (await getPrimaryPilotFacilityId()) || undefined;
  }

  let rows = await prisma.sensorReading.findMany({
    where: {
      dataSource: targetSource,
      isValid: true,
      recordedAt: { gte: since },
      ...(targetFacilityId ? { facilityId: targetFacilityId } : {}),
    },
    orderBy: { recordedAt: "asc" },
    take: 240,
    include: { facility: { select: { name: true } } },
  });

  // Always generate rich demo time-series data on the fly if rows are empty in DEMO mode
  if (rows.length === 0 && mode === "DEMO" && targetFacilityId) {
    const facilityObj = await prisma.facility.findUnique({
      where: { id: targetFacilityId },
      select: { name: true },
    });
    const now = Date.now();
    const count = range === "1h" ? 20 : range === "24h" ? 48 : 60;
    const intervalMs =
      (range === "1h" ? 3600000 : range === "24h" ? 86400000 : 604800000) /
      count;
    const syntheticRows = [];
    for (let i = count; i >= 1; i--) {
      const recordedAt = new Date(now - i * intervalMs);
      const seedVal = (i * 17 + targetFacilityId.charCodeAt(0)) % 30;
      const inlet = Number((140 + seedVal + Math.sin(i / 5) * 6).toFixed(2));
      const outlet = Number((inlet - (2.2 + Math.cos(i / 4) * 0.5)).toFixed(2));
      const flowDifference = Number((inlet - outlet).toFixed(2));
      const pressureBar = Number((2.5 + Math.sin(i / 6) * 0.25).toFixed(2));
      syntheticRows.push({
        id: `syn-${targetFacilityId}-${i}`,
        facilityId: targetFacilityId,
        inletFlow: inlet,
        outletFlow: outlet,
        flowDifference,
        pressureBar,
        dataSource: "DEMO",
        isValid: true,
        recordedAt,
        facility: { name: facilityObj?.name || "Indore Facility Node" },
      });
    }
    rows = syntheticRows;
  }

  const staleSec = thresholds?.staleTimeoutSec ?? 20;
  res.json({
    range,
    mode,
    readings: rows.map((r) => formatReading(r, staleSec)),
  });
});

router.get("/summary", requireAuth, async (_req, res) => {
  const [settings, thresholds, activeAlertCount] = await Promise.all([
    prisma.applicationSetting.findUnique({ where: { id: "default" } }),
    prisma.monitoringThreshold.findUnique({ where: { id: "default" } }),
    prisma.alert.count({
      where: { status: { in: ["NEW", "UNDER_INVESTIGATION"] } },
    }),
  ]);
  const mode = (settings?.dataMode || "DEMO") as DataMode;
  const scenario = (settings?.demoScenario || "NORMAL") as DemoScenario;
  const targetSource = mode === "LIVE" ? "LIVE_ESP32" : "DEMO";
  const staleSec = thresholds?.staleTimeoutSec ?? 20;
  const latestRow = await prisma.sensorReading.findFirst({
    where: { dataSource: targetSource, isValid: true },
    orderBy: { recordedAt: "desc" },
    include: { facility: { select: { name: true } } },
  });
  const latestReading = latestRow ? formatReading(latestRow, staleSec) : null;
  const isStale = latestReading ? latestReading.isStale : true;
  let operationalState:
    | "NORMAL"
    | "VERIFICATION_REQUIRED"
    | "CRITICAL"
    | "UNAVAILABLE" = "NORMAL";
  let operationalMessage = "System operating within illustrative thresholds.";
  if (mode === "LIVE" && !runtimeTelemetryState.liveAvailable) {
    operationalState = "UNAVAILABLE";
    operationalMessage =
      runtimeTelemetryState.liveError ||
      "Live Data Unavailable – ESP32 endpoint unreachable or unconfigured.";
  } else if (mode === "DEMO" && runtimeTelemetryState.demoError) {
    operationalState = "CRITICAL";
    operationalMessage = runtimeTelemetryState.demoError;
  } else if (!latestReading || isStale) {
    operationalState = "UNAVAILABLE";
    operationalMessage =
      "Readings are stale or unavailable beyond configured timeout.";
  } else if (thresholds) {
    if (latestReading.pressureBar >= thresholds.pressureCriticalMaxBar) {
      operationalState = "CRITICAL";
      operationalMessage = "Critical pipeline pressure level exceeded.";
    } else if (
      Math.abs(latestReading.flowDifference) >=
        thresholds.flowDiffThresholdLpm ||
      latestReading.pressureBar > thresholds.pressureMaxBar ||
      latestReading.pressureBar < thresholds.pressureMinBar
    ) {
      operationalState = "VERIFICATION_REQUIRED";
      operationalMessage = "Possible anomaly – Verification Required.";
    } else if (mode === "DEMO") {
      operationalMessage =
        "Demonstration telemetry operating within illustrative normal range.";
    } else {
      operationalMessage =
        "Live ESP32 telemetry operating within illustrative normal range.";
    }
  }
  res.json({
    mode,
    scenario,
    liveAvailable:
      mode === "LIVE" ? runtimeTelemetryState.liveAvailable : false,
    liveError: mode === "LIVE" ? runtimeTelemetryState.liveError : null,
    lastSuccessfulAt:
      mode === "LIVE"
        ? runtimeTelemetryState.lastSuccessfulLiveAt ||
          latestReading?.recordedAt ||
          null
        : runtimeTelemetryState.lastSuccessfulDemoAt ||
          latestReading?.recordedAt ||
          null,
    isStale,
    latestReading,
    operationalState,
    operationalMessage,
    thresholds: thresholds
      ? {
          ...thresholds,
          updatedAt: thresholds.updatedAt.toISOString(),
        }
      : null,
    activeAlertCount,
  });
});

router.post("/", requireAuth, async (req, res) => {
  const validation = validateEsp32Payload(req.body);
  const facilityId = await getPrimaryPilotFacilityId();
  if (!validation.valid || !validation.data) {
    await recordConnectivityAlert({
      category: "INVALID_SENSOR_READINGS",
      title: "Invalid Sensor Payload Rejected",
      description: validation.error || "Malformed telemetry JSON rejected.",
      facilityId,
      dataSource: "LIVE_ESP32",
    });
    res.status(400).json({ error: validation.error });
    return;
  }
  if (!facilityId) {
    res.status(500).json({ error: "No pilot monitoring facility found." });
    return;
  }
  const { inlet, outlet, pressure } = validation.data;
  const flowDifference = Number((inlet - outlet).toFixed(2));
  const now = new Date();
  const created = await prisma.sensorReading.create({
    data: {
      facilityId,
      inletFlow: inlet,
      outletFlow: outlet,
      flowDifference,
      pressureBar: pressure,
      dataSource: "LIVE_ESP32",
      isValid: true,
      recordedAt: now,
    },
  });
  await prisma.sensor.updateMany({
    where: { facilityId },
    data: { status: "CONNECTED", isSimulated: false, lastReadingAt: now },
  });
  runtimeTelemetryState.liveAvailable = true;
  runtimeTelemetryState.liveError = null;
  runtimeTelemetryState.lastSuccessfulLiveAt = now.toISOString();
  await evaluateReadingForAlerts({
    facilityId,
    inletFlow: inlet,
    outletFlow: outlet,
    flowDifference,
    pressureBar: pressure,
    dataSource: "LIVE_ESP32",
  });
  res.status(201).json({
    ok: true,
    reading: formatReading(created, 20),
  });
});

const ScenarioSchema = z.object({
  scenario: z.enum([
    "NORMAL",
    "MILD_DISCREPANCY",
    "PRESSURE_SPIKE",
    "PRESSURE_DROP",
    "SENSOR_DISCONNECTED",
    "API_FAILURE",
  ]),
});

router.post("/simulate-scenario", requireAuth, async (req, res) => {
  const parsed = ScenarioSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Unsupported demonstration scenario." });
    return;
  }
  const updated = await prisma.applicationSetting.update({
    where: { id: "default" },
    data: {
      dataMode: "DEMO",
      demoScenario: parsed.data.scenario,
    },
  });
  await tickTelemetryOnce();
  res.json({
    ok: true,
    demoScenario: updated.demoScenario,
  });
});

export default router;
