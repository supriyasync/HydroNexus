import React, { useEffect, useState } from 'react';
import { Save, Send } from 'lucide-react';
import { readingsApi, settingsApi } from '../../services/api/endpoints.ts';
import { useAuth } from '../../context/AuthContext.tsx';
import { useTelemetry } from '../../context/TelemetryContext.tsx';
import type { DataMode } from '@shared/types/index.ts';

export function SettingsPage() {
  const { user } = useAuth();
  const { refreshTelemetry } = useTelemetry();

  const [dataMode, setDataMode] = useState<DataMode>('DEMO');
  const [liveSensorApiUrl, setLiveSensorApiUrl] = useState('');
  const [pollIntervalMs, setPollIntervalMs] = useState('5000');
  const [networkContext, setNetworkContext] = useState('');

  const [flowDiffThresholdLpm, setFlowDiffThresholdLpm] = useState('18');
  const [flowAnomalyPersistenceSec, setFlowAnomalyPersistenceSec] = useState('15');
  const [staleTimeoutSec, setStaleTimeoutSec] = useState('20');
  const [pressureMinBar, setPressureMinBar] = useState('1.2');
  const [pressureMaxBar, setPressureMaxBar] = useState('4.5');
  const [pressureCriticalMaxBar, setPressureCriticalMaxBar] = useState('6.0');

  const [saving, setSaving] = useState(false);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  // ESP32 Manual Payload Test Harness
  const [testJson, setTestJson] = useState(
    '{\n  "inlet": 146.5,\n  "outlet": 144.2,\n  "pressure": 2.72\n}'
  );
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string } | null>(null);

  useEffect(() => {
    settingsApi.get().then(({ settings, thresholds }) => {
      if (settings) {
        setDataMode(settings.dataMode);
        setLiveSensorApiUrl(settings.liveSensorApiUrl);
        setPollIntervalMs(String(settings.pollIntervalMs));
        setNetworkContext(settings.networkContext);
      }
      if (thresholds) {
        setFlowDiffThresholdLpm(String(thresholds.flowDiffThresholdLpm));
        setFlowAnomalyPersistenceSec(String(thresholds.flowAnomalyPersistenceSec));
        setStaleTimeoutSec(String(thresholds.staleTimeoutSec));
        setPressureMinBar(String(thresholds.pressureMinBar));
        setPressureMaxBar(String(thresholds.pressureMaxBar));
        setPressureCriticalMaxBar(String(thresholds.pressureCriticalMaxBar));
      }
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveFeedback(null);
    setSaveError(null);
    setSaving(true);
    try {
      await settingsApi.update({
        dataMode,
        liveSensorApiUrl: liveSensorApiUrl.trim(),
        pollIntervalMs: Number(pollIntervalMs),
        networkContext: networkContext.trim(),
        flowDiffThresholdLpm: Number(flowDiffThresholdLpm),
        flowAnomalyPersistenceSec: Number(flowAnomalyPersistenceSec),
        staleTimeoutSec: Number(staleTimeoutSec),
        pressureMinBar: Number(pressureMinBar),
        pressureMaxBar: Number(pressureMaxBar),
        pressureCriticalMaxBar: Number(pressureCriticalMaxBar),
      });
      setSaveFeedback('Municipal monitoring configuration saved and applied.');
      await refreshTelemetry();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Unable to save settings.');
    } finally {
      setSaving(false);
    }
  };

  const handleTestEsp32Push = async () => {
    setTestResult(null);
    try {
      const parsed = JSON.parse(testJson);
      const res = await readingsApi.ingestEsp32Sample(parsed);
      setTestResult({
        ok: true,
        msg: `Accepted valid ESP32 payload (Difference: ${res.reading.flowDifference.toFixed(
          2
        )} L/min, Pressure: ${res.reading.pressureBar.toFixed(2)} bar).`,
      });
      await refreshTelemetry();
    } catch (err) {
      setTestResult({
        ok: false,
        msg:
          err instanceof Error
            ? err.message
            : 'Invalid JSON or rejected sensor reading.',
      });
    }
  };

  const mapsConfigured = Boolean((import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '').trim());

  return (
    <div className="space-y-6">
      <form onSubmit={handleSave} className="space-y-6">
        {/* Data Source & ESP32 Endpoint */}
        <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4">
          <div>
            <h2 className="text-base font-semibold text-[#164653]">
              IoT Telemetry Mode & ESP32 Endpoint Configuration
            </h2>
            <p className="text-xs text-[#71817E]">
              Switching to Live Mode polls the configured ESP32 endpoint strictly without
              substituting simulated values on failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1.5">
                Active Data Mode
              </label>
              <select
                value={dataMode}
                onChange={(e) => setDataMode(e.target.value as DataMode)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653]"
              >
                <option value="DEMO">DEMO MODE (Backend Sensor Simulator)</option>
                <option value="LIVE">LIVE MODE (Physical ESP32 REST Endpoint)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1.5">
                Sensor Polling Interval (ms)
              </label>
              <input
                type="number"
                min={2000}
                max={60000}
                step={500}
                value={pollIntervalMs}
                onChange={(e) => setPollIntervalMs(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md text-[#164653]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-[#164653] mb-1.5">
                ESP32 Live Sensor API URL (LIVE_SENSOR_API_URL)
              </label>
              <input
                type="text"
                value={liveSensorApiUrl}
                onChange={(e) => setLiveSensorApiUrl(e.target.value)}
                placeholder="e.g., http://192.168.1.45/api/sensors"
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md text-[#164653]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-[#164653] mb-1.5">
                Municipal Network Context Label
              </label>
              <input
                type="text"
                value={networkContext}
                onChange={(e) => setNetworkContext(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653]"
              />
            </div>
          </div>
        </section>

        {/* Monitoring & Anomaly Thresholds */}
        <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-[#164653]">
              Illustrative Anomaly & Stale-Data Parameters
            </h3>
            <p className="text-xs text-[#71817E]">
              Values are illustrative prototype thresholds and do not represent official IMC
              hydraulic engineering specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Flow Discrepancy Threshold (L/min)
              </label>
              <input
                type="number"
                step="0.5"
                value={flowDiffThresholdLpm}
                onChange={(e) => setFlowDiffThresholdLpm(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Anomaly Persistence Window (sec)
              </label>
              <input
                type="number"
                value={flowAnomalyPersistenceSec}
                onChange={(e) => setFlowAnomalyPersistenceSec(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Stale Data Timeout (sec)
              </label>
              <input
                type="number"
                value={staleTimeoutSec}
                onChange={(e) => setStaleTimeoutSec(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Min Normal Pressure (bar)
              </label>
              <input
                type="number"
                step="0.1"
                value={pressureMinBar}
                onChange={(e) => setPressureMinBar(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Max Normal Pressure (bar)
              </label>
              <input
                type="number"
                step="0.1"
                value={pressureMaxBar}
                onChange={(e) => setPressureMaxBar(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#164653] mb-1">
                Critical Over-Pressure (bar)
              </label>
              <input
                type="number"
                step="0.1"
                value={pressureCriticalMaxBar}
                onChange={(e) => setPressureCriticalMaxBar(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono bg-white border border-[#E7E4DB] rounded-md"
              />
            </div>
          </div>

          {saveError && <div className="text-xs text-[#C64F49]">{saveError}</div>}
          {saveFeedback && <div className="text-xs text-[#168B83]">{saveFeedback}</div>}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#168B83] hover:bg-[#13756E] text-white text-xs font-medium transition-colors disabled:opacity-60"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{saving ? 'Saving...' : 'Save Configuration'}</span>
            </button>
          </div>
        </section>
      </form>

      {/* ESP32 Payload Ingestion Tester & Google Maps Setup */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-[#164653]">
              ESP32 JSON Ingestion Validator (POST /api/readings)
            </h3>
            <p className="text-xs text-[#71817E]">
              Verify backend payload validation and live ingestion behavior directly from the
              console.
            </p>
          </div>
          <textarea
            rows={5}
            value={testJson}
            onChange={(e) => setTestJson(e.target.value)}
            className="w-full p-3 text-xs font-mono bg-white border border-[#E7E4DB] rounded-md text-[#164653]"
          />
          {testResult && (
            <div
              className={`text-xs ${
                testResult.ok ? 'text-[#168B83]' : 'text-[#C64F49]'
              }`}
            >
              {testResult.msg}
            </div>
          )}
          <button
            type="button"
            onClick={handleTestEsp32Push}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#164653] hover:bg-[#168B83] text-white text-xs font-medium"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Test ESP32 Reading</span>
          </button>
        </section>

        <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-3 text-xs">
          <h3 className="text-sm font-semibold text-[#164653]">
            Google Maps & Operator Account Summary
          </h3>
          <div className="p-3 rounded bg-[#F4F2EA] border border-[#E7E4DB] space-y-1">
            <div>
              <strong>Google Maps JS API Status:</strong>{' '}
              <span className={mapsConfigured ? 'text-[#168B83]' : 'text-[#B37E1E]'}>
                {mapsConfigured
                  ? 'VITE_GOOGLE_MAPS_API_KEY Detected'
                  : 'Not Set (Schematic Fallback Active)'}
              </span>
            </div>
            <p className="text-[#71817E] leading-relaxed">
              Enable <strong>Maps JavaScript API</strong> in Google Cloud Console with billing
              active, restrict the key to your website HTTP referrers and Maps JavaScript API,
              and configure <code className="font-mono">VITE_GOOGLE_MAPS_API_KEY</code> in{' '}
              <code className="font-mono">.env</code>.
            </p>
          </div>

          <div className="pt-2 border-t border-[#E7E4DB] space-y-1">
            <div className="font-semibold text-[#164653]">Authenticated IMC Operator</div>
            <div className="text-[#71817E]">
              {user?.fullName} · {user?.designation}
            </div>
            <div className="font-mono text-[#71817E]">
              {user?.email} ({user?.username})
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
