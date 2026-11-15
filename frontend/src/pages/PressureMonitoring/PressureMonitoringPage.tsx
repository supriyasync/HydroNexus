import React, { useCallback, useEffect, useState } from 'react';
import { Gauge, Save } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { pressureApi } from '../../services/api/endpoints.ts';
import { useTelemetry } from '../../context/TelemetryContext.tsx';
import {
  SemanticStatusIndicator,
  formatShortTime,
  formatTimestamp,
} from '../../components/common/StatusLabel.tsx';
import type { MonitoringThresholdDTO, TimeRangeKey } from '@shared/types/index.ts';

export function PressureMonitoringPage() {
  const { summary, refreshTelemetry } = useTelemetry();
  const [range, setRange] = useState<TimeRangeKey>('1h');
  const [points, setPoints] = useState<
    Array<{ id: string; pressureBar: number; dataSource: string; recordedAt: string }>
  >([]);
  const [thresholds, setThresholds] = useState<MonitoringThresholdDTO | null>(null);
  const [minBar, setMinBar] = useState('1.2');
  const [maxBar, setMaxBar] = useState('4.5');
  const [critBar, setCritBar] = useState('6.0');
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const loadPressure = useCallback(async () => {
    try {
      const [histRes, threshRes] = await Promise.all([
        pressureApi.getHistory(range),
        pressureApi.getThresholds(),
      ]);
      setPoints(histRes.points);
      setThresholds(threshRes);
      setMinBar(String(threshRes.pressureMinBar));
      setMaxBar(String(threshRes.pressureMaxBar));
      setCritBar(String(threshRes.pressureCriticalMaxBar));
    } catch {
      // Handled gracefully
    }
  }, [range]);

  useEffect(() => {
    loadPressure();
  }, [loadPressure, summary?.latestReading?.id]);

  const currentPressure = summary?.latestReading?.pressureBar ?? null;
  const isLiveUnavailable = summary?.mode === 'LIVE' && !summary?.liveAvailable;

  const isCritical =
    currentPressure !== null &&
    thresholds &&
    currentPressure >= thresholds.pressureCriticalMaxBar;
  const isWarning =
    currentPressure !== null &&
    thresholds &&
    !isCritical &&
    (currentPressure > thresholds.pressureMaxBar ||
      currentPressure < thresholds.pressureMinBar);

  const handleSaveThresholds = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveMessage(null);
    setSaveError(null);
    const pMin = Number(minBar);
    const pMax = Number(maxBar);
    const pCrit = Number(critBar);

    if (Number.isNaN(pMin) || Number.isNaN(pMax) || Number.isNaN(pCrit)) {
      setSaveError('Please enter valid numeric values in bar.');
      return;
    }

    setSaving(true);
    try {
      const updated = await pressureApi.updateThresholds({
        pressureMinBar: pMin,
        pressureMaxBar: pMax,
        pressureCriticalMaxBar: pCrit,
      });
      setThresholds(updated);
      setSaveMessage('Illustrative pressure thresholds saved to database.');
      await refreshTelemetry();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Unable to save thresholds.');
    } finally {
      setSaving(false);
    }
  };

  const chartData = points.map((p) => ({
    time: formatShortTime(p.recordedAt),
    pressureBar: p.pressureBar,
  }));

  return (
    <div className="space-y-6">
      {/* Current Pressure Readout & Threshold Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#71817E]">
            <span className="font-semibold text-[#164653]">CURRENT PIPELINE PRESSURE</span>
            <Gauge className="w-4 h-4 text-[#168B83]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold font-mono tabular-nums text-[#164653]">
              {isLiveUnavailable || currentPressure === null
                ? '—'
                : currentPressure.toFixed(2)}
            </span>
            <span className="text-sm font-mono text-[#71817E]">bar</span>
          </div>
          <div className="pt-2 border-t border-[#E7E4DB] space-y-1 text-xs">
            <SemanticStatusIndicator
              tone={
                isLiveUnavailable || currentPressure === null
                  ? 'critical'
                  : isCritical
                    ? 'critical'
                    : isWarning
                      ? 'warning'
                      : 'normal'
              }
              label={
                isLiveUnavailable || currentPressure === null
                  ? 'Pressure Data Unavailable'
                  : isCritical
                    ? 'Critical Pressure Exceeded'
                    : isWarning
                      ? 'Outside Illustrative Normal Range'
                      : 'Within Illustrative Normal Range'
              }
            />
            <div className="text-[#71817E]">
              Last updated:{' '}
              <span className="font-mono tabular-nums">
                {formatTimestamp(summary?.latestReading?.recordedAt)}
              </span>
            </div>
          </div>
        </div>

        {/* Threshold Configuration Form */}
        <form
          onSubmit={handleSaveThresholds}
          className="lg:col-span-2 bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-semibold text-[#164653]">
                Illustrative Pressure Operating Thresholds
              </h2>
              <p className="text-xs text-[#71817E]">
                Configured thresholds are illustrative operational parameters for prototype
                alerting until official IMC engineering limits are supplied.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Min Normal (bar)
              </label>
              <input
                type="number"
                step="0.1"
                value={minBar}
                onChange={(e) => setMinBar(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Max Normal (bar)
              </label>
              <input
                type="number"
                step="0.1"
                value={maxBar}
                onChange={(e) => setMaxBar(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Critical High (bar)
              </label>
              <input
                type="number"
                step="0.1"
                value={critBar}
                onChange={(e) => setCritBar(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
              />
            </div>
          </div>

          {saveError && (
            <div className="text-xs text-[#C64F49]">{saveError}</div>
          )}
          {saveMessage && (
            <div className="text-xs text-[#168B83]">{saveMessage}</div>
          )}

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#168B83] hover:bg-[#13756E] text-white text-xs font-medium transition-colors disabled:opacity-60"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saving ? 'Saving...' : 'Save Thresholds'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Pressure Trend Chart */}
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-[#164653]">
              Pipeline Pressure Trend (bar)
            </h3>
            <p className="text-xs text-[#71817E]">
              Shaded Seafoam band indicates illustrative normal operating pressure range (
              {thresholds?.pressureMinBar ?? 1.2}–{thresholds?.pressureMaxBar ?? 4.5} bar).
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-md bg-[#F4F2EA] border border-[#E7E4DB]">
            {(['1h', '24h', '7d', '30d'] as TimeRangeKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setRange(key)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  range === key
                    ? 'bg-[#FFFEFA] text-[#164653] border border-[#E7E4DB]'
                    : 'text-[#71817E] hover:text-[#164653]'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="h-80 w-full">
          {chartData.length === 0 ? (
            <div className="h-full flex items-center justify-center text-xs text-[#71817E] border border-dashed border-[#E7E4DB] rounded-md">
              No valid pressure readings recorded in this period.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#E7E4DB" strokeDasharray="3 3" vertical={false} />
                {thresholds && (
                  <ReferenceArea
                    y1={thresholds.pressureMinBar}
                    y2={thresholds.pressureMaxBar}
                    fill="#D9ECE6"
                    fillOpacity={0.45}
                  />
                )}
                <XAxis
                  dataKey="time"
                  tick={{ fill: '#71817E', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                  minTickGap={28}
                />
                <YAxis
                  tick={{ fill: '#71817E', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                  unit=" bar"
                  width={68}
                  domain={[0, 'auto']}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFEFA',
                    borderColor: '#E7E4DB',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontFamily: 'IBM Plex Mono',
                  }}
                />
                {thresholds && (
                  <>
                    <ReferenceLine
                      y={thresholds.pressureMaxBar}
                      stroke="#D9A441"
                      strokeDasharray="4 4"
                    />
                    <ReferenceLine
                      y={thresholds.pressureMinBar}
                      stroke="#D9A441"
                      strokeDasharray="4 4"
                    />
                    <ReferenceLine
                      y={thresholds.pressureCriticalMaxBar}
                      stroke="#C64F49"
                      strokeDasharray="3 3"
                    />
                  </>
                )}
                <Line
                  type="monotone"
                  dataKey="pressureBar"
                  name="Pressure (bar)"
                  stroke="#164653"
                  strokeWidth={2.2}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
