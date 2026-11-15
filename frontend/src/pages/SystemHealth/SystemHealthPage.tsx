import { useCallback, useEffect, useState } from 'react';
import { Cpu, RefreshCw } from 'lucide-react';
import { healthApi } from '../../services/api/endpoints.ts';
import { useTelemetry } from '../../context/TelemetryContext.tsx';
import {
  SemanticStatusIndicator,
  formatTimestamp,
} from '../../components/common/StatusLabel.tsx';
import type { HealthStatus, SystemHealthDTO } from '@shared/types/index.ts';

function renderHealthTone(status: HealthStatus) {
  switch (status) {
    case 'CONNECTED':
      return <SemanticStatusIndicator tone="normal" label="Connected" />;
    case 'DEMO':
      return <SemanticStatusIndicator tone="demo" label="Demo (Simulated)" />;
    case 'STALE':
      return <SemanticStatusIndicator tone="warning" label="Stale" />;
    case 'DISCONNECTED':
      return <SemanticStatusIndicator tone="critical" label="Disconnected" />;
    case 'UNAVAILABLE':
      return <SemanticStatusIndicator tone="critical" label="Unavailable" />;
  }
}

export function SystemHealthPage() {
  const { summary } = useTelemetry();
  const [health, setHealth] = useState<SystemHealthDTO | null>(null);
  const [loading, setLoading] = useState(true);

  const loadHealth = useCallback(async () => {
    try {
      const data = await healthApi.getSystemStatus();
      setHealth(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHealth();
  }, [loadHealth, summary?.latestReading?.id, summary?.mode]);

  return (
    <div className="space-y-6">
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-[#164653]">
            Hardware, Sensor & API Diagnostics
          </h2>
          <p className="text-xs text-[#71817E]">
            Simulated components in Demo Mode are explicitly separated from live physical ESP32
            hardware connectivity.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono text-[#71817E]">
            Mode: <strong className="text-[#164653]">{health?.mode ?? 'DEMO'}</strong> ·
            Overall: <strong className="text-[#164653]">{health?.overallStatus ?? '—'}</strong>
          </span>
          <button
            type="button"
            onClick={loadHealth}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E7E4DB] bg-[#F4F2EA] text-[#164653] font-medium hover:bg-[#D9ECE6]/60"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Re-check</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="p-8 text-center text-xs text-[#71817E]">
          Evaluating system component diagnostics...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {health?.components.map((comp) => (
            <div
              key={comp.key}
              className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 flex flex-col justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-[#71817E]">
                  <span className="font-mono">{comp.category}</span>
                  {comp.isSimulated && (
                    <span className="font-medium text-[#164653]">SIMULATED HARDWARE</span>
                  )}
                </div>
                <div className="text-base font-semibold text-[#164653]">{comp.name}</div>
              </div>

              <div className="py-1">{renderHealthTone(comp.status)}</div>

              <p className="text-xs text-[#71817E] leading-relaxed">
                {comp.diagnosticMessage}
              </p>

              <div className="pt-2 border-t border-[#E7E4DB] text-[11px] text-[#71817E] flex items-center justify-between">
                <span>Last Communication</span>
                <span className="font-mono tabular-nums text-[#164653]">
                  {formatTimestamp(comp.lastCommunicationAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hardware Architecture Reference */}
      <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#168B83]" />
          <h3 className="text-sm font-semibold text-[#164653]">
            Planned ESP32 Field Hardware Architecture
          </h3>
        </div>
        <div className="p-4 rounded-md bg-[#F4F2EA] border border-[#E7E4DB] font-mono text-xs text-[#164653] overflow-x-auto">
          [Inlet Flow Sensor + Outlet Flow Sensor + Pressure Transducer] → [ESP32 Wi-Fi
          Microcontroller] → [REST JSON &#123; "inlet", "outlet", "pressure" &#125;] →
          [HydroNexus Backend + SQLite] → [IMC Operator Console]
        </div>
      </section>
    </div>
  );
}
