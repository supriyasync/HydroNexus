import { useCallback, useEffect, useState } from "react";
import {
  Activity,
  ArrowDownToLine,
  ArrowUpFromLine,
  Gauge,
  GitCompareArrows,
  RefreshCw,
} from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTelemetry } from "../../context/TelemetryContext.tsx";
import { readingsApi } from "../../services/api/endpoints.ts";
import {
  SemanticStatusIndicator,
  formatShortTime,
  formatTimestamp,
} from "../../components/common/StatusLabel.tsx";
import type {
  DemoScenario,
  SensorReadingDTO,
  TimeRangeKey,
} from "@shared/types/index.ts";
import type { NavSectionKey } from "../../components/layout/AppShell.tsx";

const SCENARIO_OPTIONS: Array<{ key: DemoScenario; label: string }> = [
  { key: "NORMAL", label: "Normal Baseline" },
  { key: "MILD_DISCREPANCY", label: "Mild Flow Discrepancy" },
  { key: "PRESSURE_SPIKE", label: "Pressure Spike" },
  { key: "PRESSURE_DROP", label: "Pressure Drop" },
  { key: "SENSOR_DISCONNECTED", label: "Sensor Disconnected" },
  { key: "API_FAILURE", label: "API Failure" },
];

export function OverviewPage({
  onNavigate,
}: {
  onNavigate: (section: NavSectionKey) => void;
}) {
  const { summary, settings, apiConnected, triggerScenario, refreshTelemetry } =
    useTelemetry();
  const [range, setRange] = useState<TimeRangeKey>("1h");
  const [history, setHistory] = useState<SensorReadingDTO[]>([]);
  const [loadingChart, setLoadingChart] = useState(true);
  const [scenarioBusy, setScenarioBusy] = useState(false);

  const loadHistory = useCallback(async () => {
    try {
      const res = await readingsApi.getHistory(range);
      setHistory(res.readings);
    } catch {
      // Handled via global apiConnected banner
    } finally {
      setLoadingChart(false);
    }
  }, [range]);

  useEffect(() => {
    loadHistory();
  }, [loadHistory, summary?.latestReading?.id]);

  const reading = summary?.latestReading ?? null;
  const isLiveUnavailable = summary?.mode === "LIVE" && !summary?.liveAvailable;
  const isUnavailable = !reading || isLiveUnavailable;
  const thresholds = summary?.thresholds;

  const flowDiff = reading ? reading.flowDifference : null;
  const flowDiffThreshold = thresholds?.flowDiffThresholdLpm ?? 18;
  const flowAbnormal =
    flowDiff !== null && Math.abs(flowDiff) >= flowDiffThreshold;

  const pressureBar = reading ? reading.pressureBar : null;
  const pressureCritical =
    pressureBar !== null &&
    thresholds &&
    pressureBar >= thresholds.pressureCriticalMaxBar;
  const pressureWarning =
    pressureBar !== null &&
    thresholds &&
    !pressureCritical &&
    (pressureBar > thresholds.pressureMaxBar ||
      pressureBar < thresholds.pressureMinBar);

  const chartData = history.map((r) => ({
    time:
      range === "1h" || range === "24h"
        ? formatShortTime(r.recordedAt)
        : new Date(r.recordedAt).toLocaleDateString("en-IN", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
          }),
    inletFlow: r.inletFlow,
    outletFlow: r.outletFlow,
    flowDifference: r.flowDifference,
  }));

  const handleScenarioClick = async (key: DemoScenario) => {
    setScenarioBusy(true);
    try {
      await triggerScenario(key);
      await loadHistory();
    } finally {
      setScenarioBusy(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* System Status Summary Strip */}
      <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#71817E]">
            <span>
              {settings?.networkContext ||
                "Indore Municipal Corporation Network"}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Source:{" "}
              <strong className="text-[#164653]">
                {summary?.mode === "DEMO"
                  ? "DEMONSTRATION DATA"
                  : "LIVE ESP32 TELEMETRY"}
              </strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              API:{" "}
              <strong
                className={apiConnected ? "text-[#168B83]" : "text-[#C64F49]"}
              >
                {apiConnected ? "Connected" : "Error"}
              </strong>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {summary?.operationalState === "NORMAL" && (
              <SemanticStatusIndicator
                tone={summary.mode === "DEMO" ? "demo" : "normal"}
                label={summary.operationalMessage}
              />
            )}
            {summary?.operationalState === "VERIFICATION_REQUIRED" && (
              <SemanticStatusIndicator
                tone="warning"
                label="Possible anomaly – Verification Required"
              />
            )}
            {summary?.operationalState === "CRITICAL" && (
              <SemanticStatusIndicator
                tone="critical"
                label={summary.operationalMessage}
              />
            )}
            {summary?.operationalState === "UNAVAILABLE" && (
              <SemanticStatusIndicator
                tone="critical"
                label={summary.operationalMessage}
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#71817E]">
          <div>
            <div>Last Successful Data</div>
            <div className="font-mono tabular-nums text-[#164653] font-medium">
              {formatTimestamp(summary?.lastSuccessfulAt)}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              refreshTelemetry();
              loadHistory();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#E7E4DB] bg-[#F4F2EA] text-[#164653] font-medium hover:bg-[#D9ECE6]/60 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>
        </div>
      </section>

      {/* Four Primary Monitoring KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: INLET FLOW */}
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between text-xs text-[#71817E]">
            <span className="font-semibold tracking-wide text-[#164653]">
              INLET FLOW
            </span>
            <ArrowDownToLine className="w-4 h-4 text-[#168B83]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold font-mono tabular-nums text-[#164653]">
              {isUnavailable ? "—" : reading.inletFlow.toFixed(1)}
            </span>
            <span className="text-xs font-mono text-[#71817E]">L/min</span>
          </div>
          <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7E4DB]">
            <SemanticStatusIndicator
              tone={
                isUnavailable
                  ? "critical"
                  : summary?.mode === "DEMO"
                    ? "demo"
                    : "normal"
              }
              label={
                isUnavailable
                  ? "Unavailable"
                  : summary?.mode === "DEMO"
                    ? "Demonstration Data"
                    : "Measured Live"
              }
            />
          </div>
        </div>

        {/* Card 2: OUTLET FLOW */}
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between text-xs text-[#71817E]">
            <span className="font-semibold tracking-wide text-[#164653]">
              OUTLET FLOW
            </span>
            <ArrowUpFromLine className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold font-mono tabular-nums text-[#164653]">
              {isUnavailable ? "—" : reading.outletFlow.toFixed(1)}
            </span>
            <span className="text-xs font-mono text-[#71817E]">L/min</span>
          </div>
          <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7E4DB]">
            <SemanticStatusIndicator
              tone={
                isUnavailable
                  ? "critical"
                  : summary?.mode === "DEMO"
                    ? "demo"
                    : "normal"
              }
              label={
                isUnavailable
                  ? "Unavailable"
                  : summary?.mode === "DEMO"
                    ? "Demonstration Data"
                    : "Measured Live"
              }
            />
          </div>
        </div>

        {/* Card 3: FLOW DIFFERENCE */}
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between text-xs text-[#71817E]">
            <span className="font-semibold tracking-wide text-[#164653]">
              FLOW DIFFERENCE
            </span>
            <GitCompareArrows
              className={`w-4 h-4 ${flowAbnormal ? "text-[#D9A441]" : "text-[#168B83]"}`}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold font-mono tabular-nums text-[#164653]">
              {isUnavailable || flowDiff === null
                ? "—"
                : `${flowDiff >= 0 ? "+" : ""}${flowDiff.toFixed(1)}`}
            </span>
            <span className="text-xs font-mono text-[#71817E]">L/min</span>
          </div>
          <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7E4DB]">
            <SemanticStatusIndicator
              tone={
                isUnavailable ? "muted" : flowAbnormal ? "warning" : "normal"
              }
              label={
                isUnavailable
                  ? "No Active Delta"
                  : flowAbnormal
                    ? "Verification Required"
                    : "Within Threshold"
              }
            />
          </div>
        </div>

        {/* Card 4: PIPELINE PRESSURE */}
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between text-xs text-[#71817E]">
            <span className="font-semibold tracking-wide text-[#164653]">
              PIPELINE PRESSURE
            </span>
            <Gauge
              className={`w-4 h-4 ${
                pressureCritical
                  ? "text-[#C64F49]"
                  : pressureWarning
                    ? "text-[#D9A441]"
                    : "text-[#168B83]"
              }`}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-semibold font-mono tabular-nums text-[#164653]">
              {isUnavailable || pressureBar === null
                ? "—"
                : pressureBar.toFixed(2)}
            </span>
            <span className="text-xs font-mono text-[#71817E]">bar</span>
          </div>
          <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E7E4DB]">
            <SemanticStatusIndicator
              tone={
                isUnavailable
                  ? "critical"
                  : pressureCritical
                    ? "critical"
                    : pressureWarning
                      ? "warning"
                      : "normal"
              }
              label={
                isUnavailable
                  ? "Unavailable"
                  : pressureCritical
                    ? "Critical Pressure"
                    : pressureWarning
                      ? "Outside Normal Band"
                      : "Normal Band"
              }
            />
          </div>
        </div>
      </section>

      {/* Primary Live Inlet vs Outlet Flow Graph */}
      <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#168B83]" />
              <h2 className="text-base font-semibold text-[#164653]">
                Live Inlet vs. Outlet Flow Comparison
              </h2>
            </div>
            <p className="text-xs text-[#71817E] mt-0.5">
              5-second backend telemetry polling · Inlet Flow (Ocean Teal) vs.
              Outlet Flow (Amber) ·{" "}
              {summary?.mode === "DEMO"
                ? "Simulated Demonstration Stream"
                : "Live ESP32 Hardware Stream"}
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-md bg-[#F4F2EA] border border-[#E7E4DB]">
            {(["1h", "24h", "7d", "30d"] as TimeRangeKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setRange(key)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  range === key
                    ? "bg-[#FFFEFA] text-[#164653] border border-[#E7E4DB]"
                    : "text-[#71817E] hover:text-[#164653]"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="h-80 w-full">
          {loadingChart ? (
            <div className="h-full flex items-center justify-center text-xs text-[#71817E]">
              Loading flow telemetry series...
            </div>
          ) : chartData.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-2 text-xs text-[#71817E] border border-dashed border-[#E7E4DB] rounded-md">
              <span>
                No valid readings recorded in the selected {range} window.
              </span>
              {summary?.mode === "LIVE" && (
                <span>
                  Verify ESP32 endpoint connectivity in Settings or switch to
                  Demo Mode.
                </span>
              )}
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 16, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  stroke="#E7E4DB"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="time"
                  tick={{
                    fill: "#71817E",
                    fontSize: 11,
                    fontFamily: "IBM Plex Mono",
                  }}
                  axisLine={{ stroke: "#E7E4DB" }}
                  tickLine={false}
                  minTickGap={28}
                />
                <YAxis
                  tick={{
                    fill: "#71817E",
                    fontSize: 11,
                    fontFamily: "IBM Plex Mono",
                  }}
                  axisLine={false}
                  tickLine={false}
                  unit=" L/m"
                  width={68}
                  domain={["auto", "auto"]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFEFA",
                    borderColor: "#E7E4DB",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontFamily: "IBM Plex Mono",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line
                  type="monotone"
                  dataKey="inletFlow"
                  name="Inlet Flow (L/min)"
                  stroke="#168B83"
                  strokeWidth={2.2}
                  dot={false}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="outletFlow"
                  name="Outlet Flow (L/min)"
                  stroke="#D9A441"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Calculated Flow Difference Below Graph */}
        <div className="pt-3 border-t border-[#E7E4DB] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              Calculated Flow Difference (Inlet − Outlet):{" "}
              <strong className="font-mono tabular-nums text-[#164653]">
                {isUnavailable || flowDiff === null
                  ? "Unavailable"
                  : `${flowDiff.toFixed(2)} L/min`}
              </strong>
            </span>
            <span aria-hidden="true" className="text-[#E7E4DB]">
              |
            </span>
            <span className="text-[#71817E]">
              Illustrative Discrepancy Threshold:{" "}
              <span className="font-mono tabular-nums text-[#164653]">
                {flowDiffThreshold.toFixed(1)} L/min
              </span>{" "}
              for{" "}
              <span className="font-mono tabular-nums text-[#164653]">
                {thresholds?.flowAnomalyPersistenceSec ?? 15}s
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate("pipeline")}
              className="text-[#168B83] font-medium hover:underline"
            >
              Inspect Indore Pipeline Map
            </button>
            <span aria-hidden="true" className="text-[#E7E4DB]">
              ·
            </span>
            <button
              type="button"
              onClick={() => onNavigate("alerts")}
              className="text-[#164653] font-medium hover:underline"
            >
              Open Alert Centre ({summary?.activeAlertCount ?? 0} active)
            </button>
          </div>
        </div>
      </section>

      {/* Demonstration Simulator Scenario Controls */}
      {summary?.mode === "DEMO" && (
        <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-[#164653]">
                Demonstration Simulator Scenario Controls
              </h3>
              <p className="text-xs text-[#71817E]">
                Trigger realistic operational states to verify HydroNexus
                anomaly detection, pressure alerts, and connectivity handling
                during presentation.
              </p>
            </div>
            <span className="text-xs font-mono text-[#71817E]">
              Active: {summary.scenario}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SCENARIO_OPTIONS.map((opt) => {
              const active = summary.scenario === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={scenarioBusy}
                  onClick={() => handleScenarioClick(opt.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                    active
                      ? "bg-[#164653] text-white border-[#164653]"
                      : "bg-[#F4F2EA] text-[#164653] border-[#E7E4DB] hover:bg-[#D9ECE6]/70"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
