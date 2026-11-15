import { useEffect, useState, useMemo } from "react";
import {
  Download,
  ChevronRight,
  Activity,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  readingsApi,
  infrastructureApi,
} from "../../services/api/endpoints.ts";
import { useTelemetry } from "../../context/TelemetryContext.tsx";
import {
  formatShortTime,
  formatTimestamp,
} from "../../components/common/StatusLabel.tsx";
import type {
  SensorReadingDTO,
  TimeRangeKey,
  FacilityDTO,
} from "@shared/types/index.ts";

export function FlowAnalysisPage() {
  const { summary } = useTelemetry();
  const [range, setRange] = useState<TimeRangeKey>("24h");
  const [readings, setReadings] = useState<SensorReadingDTO[]>([]);
  const [facilities, setFacilities] = useState<FacilityDTO[]>([]);
  const [loading, setLoading] = useState(true);

  // Selection State
  const [selectedLocality, setSelectedLocality] = useState<string>("");
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    Promise.all([
      readingsApi.getHistory(range, selectedFacilityId),
      infrastructureApi.getFacilities(),
    ])
      .then(([readingsRes, facilitiesRes]) => {
        setReadings(readingsRes.readings);
        setFacilities(facilitiesRes.facilities);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [range, selectedFacilityId, summary?.latestReading?.id]);

  // Group facilities by Locality into Zones
  const zones = useMemo(() => {
    const map = new Map<string, FacilityDTO[]>();
    facilities.forEach((f) => {
      const loc = f.locality.split(",")[0].trim();
      if (!map.has(loc)) map.set(loc, []);
      map.get(loc)!.push(f);
    });
    return Array.from(map.entries()).map(([name, points], index) => ({
      id: `IMC-Z0${index + 1}`,
      name,
      points,
      description:
        points[0]?.description ||
        `Municipal distribution access points for ${name}.`,
    }));
  }, [facilities]);

  const currentPoints = useMemo(() => {
    return zones.find((z) => z.name === selectedLocality)?.points || [];
  }, [zones, selectedLocality]);

  const filteredReadings = useMemo(() => {
    if (!selectedFacilityId) return [];
    return readings.filter((r) => r.facilityId === selectedFacilityId);
  }, [readings, selectedFacilityId]);

  const thresholdLpm = summary?.thresholds?.flowDiffThresholdLpm ?? 18;
  const maxDiff = filteredReadings.reduce(
    (acc, r) => Math.max(acc, Math.abs(r.flowDifference)),
    0,
  );
  const avgInlet =
    filteredReadings.length > 0
      ? filteredReadings.reduce((s, r) => s + r.inletFlow, 0) /
        filteredReadings.length
      : 0;
  const avgOutlet =
    filteredReadings.length > 0
      ? filteredReadings.reduce((s, r) => s + r.outletFlow, 0) /
        filteredReadings.length
      : 0;

  const chartData = filteredReadings.map((r) => ({
    time: formatShortTime(r.recordedAt),
    flowDifference: r.flowDifference,
    inletFlow: r.inletFlow,
    outletFlow: r.outletFlow,
  }));

  const exportCsv = () => {
    const header =
      "Timestamp,Source,Classification,Inlet_L_min,Outlet_L_min,Difference_L_min,Pressure_bar\n";
    const rows = filteredReadings
      .map(
        (r) =>
          `${r.recordedAt},${r.dataSource},${r.valueLabel},${r.inletFlow},${r.outletFlow},${r.flowDifference},${r.pressureBar}`,
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hydronexus-flow-analysis-${range}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* 1. SELECTION CARD */}
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-semibold text-[#164653]">
              Select Indore Location & Monitoring Access Point
            </h2>
            <p className="text-xs text-[#71817E] mt-0.5">
              Step 1: Choose an Indore water zone. Step 2: Select the specific
              access point to stream telemetry.
            </p>
          </div>
          {(selectedLocality || selectedFacilityId) && (
            <button
              type="button"
              onClick={() => {
                setSelectedLocality("");
                setSelectedFacilityId("");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E7E4DB] bg-[#F4F2EA] text-xs font-medium text-[#164653] hover:bg-[#D9ECE6]/60 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Change Selection</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div>
            <label className="block text-[11px] font-bold text-[#168B83] uppercase tracking-wide mb-2">
              1. Indore Location / Zone
            </label>
            <select
              value={selectedLocality}
              onChange={(e) => {
                setSelectedLocality(e.target.value);
                setSelectedFacilityId("");
              }}
              className="w-full px-3 py-2.5 text-sm bg-[#F4F2EA]/50 border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83] transition-all"
            >
              <option value="">-- Select an Indore location --</option>
              {zones.map((z) => (
                <option key={z.name} value={z.name}>
                  {z.name} ({z.id})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#168B83] uppercase tracking-wide mb-2">
              2. Access Point At Location
            </label>
            <select
              value={selectedFacilityId}
              onChange={(e) => setSelectedFacilityId(e.target.value)}
              disabled={!selectedLocality}
              className="w-full px-3 py-2.5 text-sm bg-[#F4F2EA]/50 border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83] transition-all disabled:opacity-50"
            >
              <option value="">
                {selectedLocality
                  ? `-- Choose from ${currentPoints.length} access points --`
                  : "-- First select an Indore location --"}
              </option>
              {currentPoints.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.code})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 2. STEP 1: ZONE SELECTION CARDS (Shown if no locality is chosen) */}
      {!selectedLocality && (
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-[#164653]">
              Step 1: Choose an Indore Distribution Zone
            </h3>
            <p className="text-xs text-[#71817E]">
              Select a location below to reveal its monitored pipeline access
              points.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {zones.map((zone) => (
              <button
                key={zone.name}
                type="button"
                onClick={() => setSelectedLocality(zone.name)}
                className="text-left p-4 rounded-lg border border-[#E7E4DB] bg-white hover:border-[#168B83] hover:shadow-sm transition-all"
              >
                <div className="text-xs font-mono text-[#71817E] mb-2 flex justify-between items-center">
                  <span>{zone.id}</span>
                  <ChevronRight className="w-4 h-4 text-[#168B83]" />
                </div>
                <div className="text-sm font-semibold text-[#164653] mb-1.5">
                  {zone.name}
                </div>
                <div className="text-[11px] text-[#71817E] mb-4 line-clamp-2 leading-relaxed">
                  {zone.description}
                </div>
                <div className="text-[11px] font-medium text-[#168B83] bg-[#D9ECE6]/50 inline-flex px-2 py-1 rounded">
                  {zone.points.length} Access Point
                  {zone.points.length > 1 ? "s" : ""}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. STEP 2: NEARBY ACCESS POINT CARDS (Shown when Locality is selected, but no specific access point yet)[cite: 10] */}
      {selectedLocality && !selectedFacilityId && (
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4 shadow-sm animate-in fade-in duration-300">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-[#164653]">
              Step 2: Select an Access Point in {selectedLocality}[cite: 10]
            </h3>
            <p className="text-xs text-[#71817E]">
              Pick a monitoring node to inspect real-time flow, pressure, and
              telemetry diagnostics.[cite: 10]
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {currentPoints.map((point) => (
              <div
                key={point.id}
                onClick={() => setSelectedFacilityId(point.id)}
                className="text-left p-4 rounded-lg border border-[#E7E4DB] bg-white hover:border-[#168B83] hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#71817E]">
                    <span className="font-semibold text-[#164653]">
                      {point.code}
                    </span>
                    <span>{point.type.replace("_", " ")}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#164653]">
                    {point.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#71817E]">
                    {point.latitude.toFixed(4)}° N, {point.longitude.toFixed(4)}
                    ° E[cite: 10]
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#E7E4DB] text-xs">
                  <span className="text-[#168B83] font-medium">
                    Normal Operation[cite: 10]
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#164653] font-semibold hover:underline">
                    Inspect <ArrowRight className="w-3.5 h-3.5" />
                    [cite: 10]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. FLOW ANALYSIS DASHBOARD (Shown ONLY when both Zone and Access Point are selected) */}
      {selectedFacilityId && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#168B83] flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-[#164653]">
                  {facilities.find((f) => f.id === selectedFacilityId)?.name ||
                    "Access Point"}
                </h2>
                <p className="text-xs text-[#71817E]">
                  Live telemetry stream and historical discrepancy tracking.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-md bg-[#FFFEFA] border border-[#E7E4DB]">
                {(["1h", "24h", "7d", "30d"] as TimeRangeKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRange(key)}
                    className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                      range === key
                        ? "bg-[#164653] text-white"
                        : "text-[#71817E] hover:text-[#164653]"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={exportCsv}
                disabled={filteredReadings.length === 0}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#E7E4DB] bg-[#FFFEFA] text-xs font-medium text-[#164653] hover:bg-[#D9ECE6]/50 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            </div>
          </div>

          {/* Summary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 shadow-sm">
              <div className="text-xs text-[#71817E]">
                Mean Inlet Flow ({range})
              </div>
              <div className="mt-1 text-2xl font-semibold font-mono tabular-nums text-[#164653]">
                {avgInlet.toFixed(2)}{" "}
                <span className="text-xs font-normal">L/min</span>
              </div>
            </div>
            <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 shadow-sm">
              <div className="text-xs text-[#71817E]">
                Mean Outlet Flow ({range})
              </div>
              <div className="mt-1 text-2xl font-semibold font-mono tabular-nums text-[#164653]">
                {avgOutlet.toFixed(2)}{" "}
                <span className="text-xs font-normal">L/min</span>
              </div>
            </div>
            <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 shadow-sm">
              <div className="text-xs text-[#71817E]">
                Peak Flow Discrepancy ({range})
              </div>
              <div className="mt-1 text-2xl font-semibold font-mono tabular-nums text-[#D9A441]">
                {maxDiff.toFixed(2)}{" "}
                <span className="text-xs font-normal text-[#71817E]">
                  L/min
                </span>
              </div>
            </div>
          </div>

          {/* Discrepancy Area Graph */}
          <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#164653]">
                Flow Difference Time Series (L/min)
              </h3>
              <span className="text-xs text-[#71817E] font-mono">
                Illustrative Threshold: {thresholdLpm} L/min
              </span>
            </div>
            <div className="h-72 w-full">
              {loading ? (
                <div className="h-full flex items-center justify-center text-xs text-[#71817E]">
                  Loading discrepancy history...
                </div>
              ) : chartData.length === 0 ? (
                <div className="h-full flex flex-col gap-2 items-center justify-center text-xs text-[#71817E] border border-dashed border-[#E7E4DB] rounded-md bg-[#F4F2EA]/30">
                  <span className="font-medium text-[#164653]">
                    No Telemetry Data Available
                  </span>
                  <span>
                    This specific access point has not recorded flow samples in
                    the selected {range} window.
                  </span>
                  {summary?.mode === "DEMO" && (
                    <span className="text-[11px] mt-1">
                      (Note: Demo mode simulator primarily targets Bijli Nagar
                      ESP32 Pilot)
                    </span>
                  )}
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
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
                      minTickGap={28}
                    />
                    <YAxis
                      tick={{
                        fill: "#71817E",
                        fontSize: 11,
                        fontFamily: "IBM Plex Mono",
                      }}
                      unit=" L/m"
                      width={68}
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
                    <ReferenceLine
                      y={thresholdLpm}
                      stroke="#D9A441"
                      strokeDasharray="4 4"
                      label={{
                        value: "Anomaly Threshold",
                        fill: "#B37E1E",
                        fontSize: 11,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="flowDifference"
                      name="Flow Difference (L/min)"
                      stroke="#168B83"
                      fill="#D9ECE6"
                      strokeWidth={2}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Recent Valid Readings Table */}
          {filteredReadings.length > 0 && (
            <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg overflow-hidden shadow-sm">
              <div className="px-5 py-3.5 border-b border-[#E7E4DB] flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#164653]">
                  Recent Validated Readings Log
                </h3>
                <span className="text-xs text-[#71817E]">
                  Showing latest 25 samples
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#F4F2EA] text-[#71817E] border-b border-[#E7E4DB]">
                    <tr>
                      <th className="py-2.5 px-4 font-medium">Timestamp</th>
                      <th className="py-2.5 px-4 font-medium">
                        Classification
                      </th>
                      <th className="py-2.5 px-4 font-medium text-right">
                        Inlet (L/min)
                      </th>
                      <th className="py-2.5 px-4 font-medium text-right">
                        Outlet (L/min)
                      </th>
                      <th className="py-2.5 px-4 font-medium text-right">
                        Difference (L/min)
                      </th>
                      <th className="py-2.5 px-4 font-medium text-right">
                        Pressure (bar)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7E4DB]">
                    {[...filteredReadings]
                      .reverse()
                      .slice(0, 25)
                      .map((r) => (
                        <tr key={r.id} className="hover:bg-[#F4F2EA]/60">
                          <td className="py-2.5 px-4 font-mono tabular-nums text-[#164653]">
                            {formatTimestamp(r.recordedAt)}
                          </td>
                          <td className="py-2.5 px-4 text-[#71817E]">
                            {r.valueLabel}
                          </td>
                          <td className="py-2.5 px-4 text-right font-mono tabular-nums">
                            {r.inletFlow.toFixed(2)}
                          </td>
                          <td className="py-2.5 px-4 text-right font-mono tabular-nums">
                            {r.outletFlow.toFixed(2)}
                          </td>
                          <td
                            className={`py-2.5 px-4 text-right font-mono tabular-nums font-medium ${
                              Math.abs(r.flowDifference) >= thresholdLpm
                                ? "text-[#B37E1E]"
                                : "text-[#164653]"
                            }`}
                          >
                            {r.flowDifference.toFixed(2)}
                          </td>
                          <td className="py-2.5 px-4 text-right font-mono tabular-nums">
                            {r.pressureBar.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
