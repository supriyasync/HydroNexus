import React, { useCallback, useEffect, useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { alertsApi } from '../../services/api/endpoints.ts';
import { useTelemetry } from '../../context/TelemetryContext.tsx';
import { ALERT_CATEGORY_LABELS } from '@shared/constants/index.ts';
import {
  SemanticStatusIndicator,
  formatTimestamp,
} from '../../components/common/StatusLabel.tsx';
import type { AlertDTO, AlertSeverity, AlertStatus } from '@shared/types/index.ts';

const STATUS_FILTERS: Array<{ key: AlertStatus | 'ALL'; label: string }> = [
  { key: 'ALL', label: 'All Statuses' },
  { key: 'NEW', label: 'New' },
  { key: 'UNDER_INVESTIGATION', label: 'Under Investigation' },
  { key: 'RESOLVED', label: 'Resolved' },
  { key: 'DISMISSED', label: 'Dismissed' },
];

const SEVERITY_FILTERS: Array<{ key: AlertSeverity | 'ALL'; label: string }> = [
  { key: 'ALL', label: 'All Severities' },
  { key: 'RED', label: 'Critical (Red)' },
  { key: 'AMBER', label: 'Verification / Warning (Amber)' },
  { key: 'GREEN', label: 'Normal (Green)' },
];

export function AlertCentrePage() {
  const { summary, refreshTelemetry } = useTelemetry();
  const [alerts, setAlerts] = useState<AlertDTO[]>([]);
  const [statusFilter, setStatusFilter] = useState<AlertStatus | 'ALL'>('ALL');
  const [severityFilter, setSeverityFilter] = useState<AlertSeverity | 'ALL'>('ALL');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [noteText, setNoteText] = useState('');
  const [submittingNote, setSubmittingNote] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const loadAlerts = useCallback(async () => {
    try {
      const res = await alertsApi.list({
        status: statusFilter,
        severity: severityFilter,
      });
      setAlerts(res.alerts);
      if (res.alerts.length > 0 && !res.alerts.some((a) => a.id === selectedId)) {
        setSelectedId(res.alerts[0].id);
      }
    } finally {
      setLoading(false);
    }
  }, [statusFilter, severityFilter, selectedId]);

  useEffect(() => {
    loadAlerts();
  }, [loadAlerts, summary?.activeAlertCount]);

  const selectedAlert = alerts.find((a) => a.id === selectedId) ?? null;

  const handleStatusChange = async (newStatus: AlertStatus) => {
    if (!selectedAlert || updatingStatus) return;
    setUpdatingStatus(true);
    try {
      const updated = await alertsApi.updateStatus(selectedAlert.id, newStatus);
      setAlerts((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
      await refreshTelemetry();
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAlert || !noteText.trim() || submittingNote) return;
    setSubmittingNote(true);
    try {
      const createdNote = await alertsApi.addNote(selectedAlert.id, noteText.trim());
      setAlerts((prev) =>
        prev.map((a) =>
          a.id === selectedAlert.id ? { ...a, notes: [createdNote, ...a.notes] } : a
        )
      );
      setNoteText('');
    } finally {
      setSubmittingNote(false);
    }
  };

  const renderSeverity = (sev: AlertSeverity) => {
    if (sev === 'RED') return <SemanticStatusIndicator tone="critical" label="Critical" />;
    if (sev === 'AMBER') return <SemanticStatusIndicator tone="warning" label="Warning" />;
    return <SemanticStatusIndicator tone="normal" label="Normal" />;
  };

  return (
    <div className="space-y-5">
      {/* Filter Bar */}
      <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setStatusFilter(f.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                statusFilter === f.key
                  ? 'bg-[#164653] text-white border-[#164653]'
                  : 'bg-[#F4F2EA] text-[#164653] border-[#E7E4DB] hover:bg-[#D9ECE6]/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as AlertSeverity | 'ALL')}
          className="px-3 py-1.5 text-xs bg-white border border-[#E7E4DB] rounded-md text-[#164653]"
        >
          {SEVERITY_FILTERS.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Master-Detail Investigation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5">
        {/* Alert List */}
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E7E4DB] flex items-center justify-between text-xs">
            <span className="font-semibold text-[#164653]">
              Backend-Generated Alerts ({alerts.length})
            </span>
            <span className="text-[#71817E]">Select an alert to investigate</span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-xs text-[#71817E]">Loading alerts...</div>
          ) : alerts.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#71817E]">
              No alerts match the selected filter criteria.
            </div>
          ) : (
            <div className="divide-y divide-[#E7E4DB] max-h-[600px] overflow-y-auto">
              {alerts.map((a) => {
                const selected = a.id === selectedId;
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setSelectedId(a.id)}
                    className={`w-full text-left p-4 transition-colors space-y-1.5 ${
                      selected ? 'bg-[#D9ECE6]/55' : 'hover:bg-[#F4F2EA]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono text-[#71817E]">
                        {a.alertCode} · {ALERT_CATEGORY_LABELS[a.category]}
                      </span>
                      {renderSeverity(a.severity)}
                    </div>
                    <div className="text-sm font-semibold text-[#164653]">{a.title}</div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#71817E]">
                      <span>{a.facilityName || 'System-wide'}</span>
                      <span className="font-mono tabular-nums">
                        {a.status} · {formatTimestamp(a.detectedAt)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Alert Detail & Investigation Notes */}
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-5 h-fit">
          {!selectedAlert ? (
            <div className="text-xs text-[#71817E] py-8 text-center">
              Select an alert from the queue to inspect sensor snapshots and record
              investigation notes.
            </div>
          ) : (
            <>
              <div className="space-y-2 pb-4 border-b border-[#E7E4DB]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#71817E]">
                    {selectedAlert.alertCode} ·{' '}
                    {selectedAlert.dataSource === 'DEMO'
                      ? 'DEMONSTRATION DATA'
                      : 'LIVE ESP32'}
                  </span>
                  {renderSeverity(selectedAlert.severity)}
                </div>
                <h3 className="text-base font-semibold text-[#164653]">
                  {selectedAlert.title}
                </h3>
                <p className="text-xs text-[#71817E] leading-relaxed">
                  {selectedAlert.description}
                </p>
                <div className="text-[11px] text-[#71817E] font-mono tabular-nums pt-1">
                  Detected: {formatTimestamp(selectedAlert.detectedAt)} · Facility:{' '}
                  {selectedAlert.facilityName || 'Primary Network'}
                </div>
              </div>

              {/* Relevant Sensor Snapshot */}
              {(selectedAlert.inletSnapshot !== null ||
                selectedAlert.pressureSnapshot !== null) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB]">
                    <div className="text-[11px] text-[#71817E]">Inlet</div>
                    <div className="font-mono tabular-nums font-semibold">
                      {selectedAlert.inletSnapshot?.toFixed(1) ?? '—'} L/m
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB]">
                    <div className="text-[11px] text-[#71817E]">Outlet</div>
                    <div className="font-mono tabular-nums font-semibold">
                      {selectedAlert.outletSnapshot?.toFixed(1) ?? '—'} L/m
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB]">
                    <div className="text-[11px] text-[#71817E]">Difference</div>
                    <div className="font-mono tabular-nums font-semibold">
                      {selectedAlert.differenceSnapshot?.toFixed(1) ?? '—'} L/m
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB]">
                    <div className="text-[11px] text-[#71817E]">Pressure</div>
                    <div className="font-mono tabular-nums font-semibold">
                      {selectedAlert.pressureSnapshot?.toFixed(2) ?? '—'} bar
                    </div>
                  </div>
                </div>
              )}

              {/* Investigation Status Workflow */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#164653]">
                  Investigation Status
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {(
                    [
                      { key: 'NEW', label: 'New' },
                      { key: 'UNDER_INVESTIGATION', label: 'Investigating' },
                      { key: 'RESOLVED', label: 'Resolved' },
                      { key: 'DISMISSED', label: 'Dismissed' },
                    ] as Array<{ key: AlertStatus; label: string }>
                  ).map((st) => (
                    <button
                      key={st.key}
                      type="button"
                      disabled={updatingStatus}
                      onClick={() => handleStatusChange(st.key)}
                      className={`px-2 py-1.5 text-xs font-medium rounded border transition-colors ${
                        selectedAlert.status === st.key
                          ? 'bg-[#168B83] text-white border-[#168B83]'
                          : 'bg-[#F4F2EA] text-[#164653] border-[#E7E4DB] hover:bg-[#D9ECE6]/60'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Operator Investigation Notes */}
              <div className="space-y-3 pt-3 border-t border-[#E7E4DB]">
                <div className="text-xs font-semibold text-[#164653]">
                  Investigation Log & Notes
                </div>

                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input
                    type="text"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add field verification or operator note..."
                    className="flex-1 px-3 py-2 text-xs bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                  />
                  <button
                    type="submit"
                    disabled={submittingNote || !noteText.trim()}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#164653] hover:bg-[#168B83] text-white text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    <MessageSquarePlus className="w-3.5 h-3.5" />
                    <span>Log</span>
                  </button>
                </form>

                <div className="space-y-2 max-h-56 overflow-y-auto">
                  {selectedAlert.notes.length === 0 ? (
                    <div className="text-xs text-[#71817E]">
                      No operator notes recorded for this alert yet.
                    </div>
                  ) : (
                    selectedAlert.notes.map((n) => (
                      <div
                        key={n.id}
                        className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB] text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between text-[11px] text-[#71817E]">
                          <strong className="text-[#164653]">{n.authorName}</strong>
                          <span className="font-mono tabular-nums">
                            {formatTimestamp(n.createdAt)}
                          </span>
                        </div>
                        <p className="text-[#164653]">{n.note}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
