import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { insightsApi } from '../../services/api/endpoints.ts';
import { useTelemetry } from '../../context/TelemetryContext.tsx';
import type { InsightsSummaryDTO, TimeRangeKey } from '@shared/types/index.ts';

export function WaterInsightsPage() {
  const { summary: telemetrySummary } = useTelemetry();
  const [range, setRange] = useState<TimeRangeKey>('24h');
  const [insights, setInsights] = useState<InsightsSummaryDTO | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    insightsApi
      .getSummary(range)
      .then((data) => setInsights(data))
      .finally(() => setLoading(false));
  }, [range, telemetrySummary?.mode]);

  return (
    <div className="space-y-6">
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-[#164653]">
            Volumetric Integration & Conservation Insights
          </h2>
          <p className="text-xs text-[#71817E]">
            Integrated from valid timestamped readings · Classification:{' '}
            <strong className="text-[#164653]">
              {insights?.classification ?? 'DEMONSTRATION'}
            </strong>
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
                  ? 'bg-[#164653] text-white'
                  : 'text-[#71817E] hover:text-[#164653]'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Volumetric KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-1">
          <div className="text-xs text-[#71817E]">
            Total Integrated Inlet Volume ({insights?.classification ?? 'DEMO'})
          </div>
          <div className="text-2xl font-semibold font-mono tabular-nums text-[#164653]">
            {loading || !insights
              ? '—'
              : insights.totalInletVolumeLiters.toLocaleString('en-IN')}{' '}
            <span className="text-xs font-normal text-[#71817E]">L</span>
          </div>
          <div className="text-[11px] text-[#71817E] font-mono tabular-nums">
            Over {insights?.monitoredDurationMinutes ?? 0} monitored minutes
          </div>
        </div>

        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-1">
          <div className="text-xs text-[#71817E]">
            Total Integrated Outlet Volume ({insights?.classification ?? 'DEMO'})
          </div>
          <div className="text-2xl font-semibold font-mono tabular-nums text-[#164653]">
            {loading || !insights
              ? '—'
              : insights.totalOutletVolumeLiters.toLocaleString('en-IN')}{' '}
            <span className="text-xs font-normal text-[#71817E]">L</span>
          </div>
          <div className="text-[11px] text-[#71817E] font-mono tabular-nums">
            {insights?.validSamplesCount ?? 0} valid samples integrated
          </div>
        </div>

        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-1">
          <div className="text-xs text-[#71817E]">Estimated Discrepancy Volume</div>
          <div className="text-2xl font-semibold font-mono tabular-nums text-[#D9A441]">
            {loading || !insights
              ? '—'
              : insights.estimatedDiscrepancyLiters.toLocaleString('en-IN')}{' '}
            <span className="text-xs font-normal text-[#71817E]">L</span>
          </div>
          <div className="text-[11px] text-[#71817E] font-mono tabular-nums">
            {insights?.discrepancyPercentage ?? 0}% of integrated inlet
          </div>
        </div>

        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-1">
          <div className="text-xs text-[#71817E]">Network Storage Utilization (Illustrative)</div>
          <div className="text-2xl font-semibold font-mono tabular-nums text-[#168B83]">
            {loading || !insights || insights.storageUtilizationPercent === null
              ? '—'
              : `${insights.storageUtilizationPercent}%`}
          </div>
          <div className="text-[11px] text-[#71817E] font-mono tabular-nums">
            {insights
              ? `${(insights.totalCurrentStorageLiters / 1_000_000).toFixed(2)} / ${(
                  insights.totalStorageCapacityLiters / 1_000_000
                ).toFixed(2)} ML`
              : ''}
          </div>
        </div>
      </div>

      {/* Inlet vs Outlet Integrated Volume Chart */}
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-[#164653]">
              Integrated Water Volume Comparison (Litres)
            </h3>
            <p className="text-xs text-[#71817E]">
              Calculated via trapezoidal discrete summation across actual interval gaps.
            </p>
          </div>
        </div>

        <div className="h-80 w-full">
          {loading ? (
            <div className="h-full flex items-center justify-center text-xs text-[#71817E]">
              Integrating volumetric series...
            </div>
          ) : !insights || insights.series.length === 0 ? (
            <div className="h-full flex items-center justify-center text-xs text-[#71817E] border border-dashed border-[#E7E4DB] rounded-md">
              No valid volumetric samples available in this range.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={insights.series}
                margin={{ top: 10, right: 16, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#E7E4DB" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="bucketLabel"
                  tick={{ fill: '#71817E', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                />
                <YAxis
                  tick={{ fill: '#71817E', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                  width={70}
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
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar
                  dataKey="inletVolumeLiters"
                  name="Inlet Volume (L)"
                  fill="#168B83"
                  radius={[3, 3, 0, 0]}
                />
                <Bar
                  dataKey="outletVolumeLiters"
                  name="Outlet Volume (L)"
                  fill="#D9A441"
                  radius={[3, 3, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Methodology & Honesty Disclosure */}
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 text-xs text-[#71817E] space-y-2">
        <div className="font-semibold text-[#164653]">
          Calculation Methodology & Reporting Standards
        </div>
        <p className="leading-relaxed">
          {insights?.methodologyNote ||
            'Volume (litres) = Sum of (Flow rate × Time interval in minutes) across valid consecutive readings.'}
        </p>
        <p className="leading-relaxed">
          HydroNexus never extrapolates a single instantaneous flow measurement across an entire
          24-hour day, and never reports unverified physical water savings or financial recovery
          without confirmed field verification.
        </p>
      </div>
    </div>
  );
}
