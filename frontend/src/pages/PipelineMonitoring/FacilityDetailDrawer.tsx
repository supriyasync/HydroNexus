import { X } from 'lucide-react';
import {
  CONNECTION_VERIFICATION_LABELS,
  FACILITY_TYPE_LABELS,
} from '@shared/constants/index.ts';
import {
  ProvenanceText,
  SemanticStatusIndicator,
  formatTimestamp,
} from '../../components/common/StatusLabel.tsx';
import type { FacilityDetailDTO } from '@shared/types/index.ts';

export function FacilityDetailDrawer({
  facility,
  loading,
  onClose,
  onSelectFacility,
}: {
  facility: FacilityDetailDTO | null;
  loading: boolean;
  onClose: () => void;
  onSelectFacility: (id: string) => void;
}) {
  if (!facility && !loading) return null;

  const utilization =
    facility?.storageCapacityLiters && facility.currentStorageLiters !== null
      ? ((facility.currentStorageLiters / facility.storageCapacityLiters) * 100).toFixed(1)
      : null;

  const availableLiters =
    facility?.storageCapacityLiters && facility.currentStorageLiters !== null
      ? facility.storageCapacityLiters - facility.currentStorageLiters
      : null;

  return (
    <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-5 space-y-5 h-fit">
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E7E4DB]">
        {loading || !facility ? (
          <div className="text-xs text-[#71817E]">Loading facility dossier...</div>
        ) : (
          <div>
            <div className="text-xs text-[#71817E] font-mono">
              {facility.code} · {FACILITY_TYPE_LABELS[facility.type]}
            </div>
            <h3 className="text-base font-semibold text-[#164653] mt-0.5">
              {facility.name}
            </h3>
            <div className="mt-1">
              <ProvenanceText status={facility.provenanceStatus} />
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded border border-[#E7E4DB] text-[#71817E] hover:text-[#164653]"
          aria-label="Close facility panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {facility && !loading && (
        <div className="space-y-5 text-xs">
          {/* General Information */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#164653]">General Information</h4>
            <dl className="grid grid-cols-2 gap-y-2 gap-x-3">
              <dt className="text-[#71817E]">Location</dt>
              <dd className="text-[#164653] font-medium">{facility.locality}</dd>
              <dt className="text-[#71817E]">Coordinates</dt>
              <dd className="font-mono tabular-nums text-[#164653]">
                {facility.latitude.toFixed(4)}° N, {facility.longitude.toFixed(4)}° E
              </dd>
              <dt className="text-[#71817E]">Operational Status</dt>
              <dd>
                <SemanticStatusIndicator
                  tone={facility.operationalStatus === 'OPERATIONAL' ? 'normal' : 'warning'}
                  label={facility.operationalStatus}
                />
              </dd>
              {facility.capacityMld !== null && (
                <>
                  <dt className="text-[#71817E]">Public Rated Capacity</dt>
                  <dd className="font-mono tabular-nums text-[#164653]">
                    {facility.capacityMld.toFixed(1)} MLD
                  </dd>
                </>
              )}
            </dl>
            <p className="text-[#71817E] leading-relaxed pt-1">{facility.description}</p>
            <div className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB] text-[11px] text-[#71817E]">
              <strong className="text-[#164653]">Source Reference:</strong>{' '}
              {facility.sourceReference}
            </div>
          </div>

          {/* Water Storage Information (only shown if supported by facility) */}
          {facility.storageCapacityLiters !== null &&
            facility.currentStorageLiters !== null && (
              <div className="space-y-2 pt-3 border-t border-[#E7E4DB]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[#164653]">
                    Water Storage Information (Illustrative)
                  </h4>
                  <span className="font-mono tabular-nums font-semibold text-[#168B83]">
                    {utilization}% utilized
                  </span>
                </div>
                <div className="w-full h-2 bg-[#F4F2EA] rounded-full overflow-hidden border border-[#E7E4DB]">
                  <div
                    className="h-full bg-[#168B83]"
                    style={{ width: `${Math.min(100, Number(utilization || 0))}%` }}
                  />
                </div>
                <dl className="grid grid-cols-2 gap-y-1.5 gap-x-3 pt-1">
                  <dt className="text-[#71817E]">Total Capacity</dt>
                  <dd className="font-mono tabular-nums text-[#164653]">
                    {facility.storageCapacityLiters.toLocaleString('en-IN')} L
                  </dd>
                  <dt className="text-[#71817E]">Current Stored</dt>
                  <dd className="font-mono tabular-nums text-[#164653]">
                    {facility.currentStorageLiters.toLocaleString('en-IN')} L
                  </dd>
                  <dt className="text-[#71817E]">Available Headroom</dt>
                  <dd className="font-mono tabular-nums text-[#164653]">
                    {availableLiters?.toLocaleString('en-IN')} L
                  </dd>
                </dl>
              </div>
            )}

          {/* Operational Information (shown if facility has active sensor telemetry) */}
          {facility.latestReading ? (
            <div className="space-y-2 pt-3 border-t border-[#E7E4DB]">
              <h4 className="font-semibold text-[#164653]">
                Operational Telemetry ({facility.latestReading.valueLabel})
              </h4>
              <dl className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                <dt className="text-[#71817E]">Inlet Flow</dt>
                <dd className="font-mono tabular-nums text-[#164653]">
                  {facility.latestReading.inletFlow.toFixed(2)} L/min
                </dd>
                <dt className="text-[#71817E]">Outlet Flow</dt>
                <dd className="font-mono tabular-nums text-[#164653]">
                  {facility.latestReading.outletFlow.toFixed(2)} L/min
                </dd>
                <dt className="text-[#71817E]">Flow Difference</dt>
                <dd className="font-mono tabular-nums text-[#164653]">
                  {facility.latestReading.flowDifference.toFixed(2)} L/min
                </dd>
                <dt className="text-[#71817E]">Pipeline Pressure</dt>
                <dd className="font-mono tabular-nums text-[#164653]">
                  {facility.latestReading.pressureBar.toFixed(2)} bar
                </dd>
                <dt className="text-[#71817E]">Last Updated</dt>
                <dd className="font-mono tabular-nums text-[#164653]">
                  {formatTimestamp(facility.latestReading.recordedAt)}
                </dd>
              </dl>
            </div>
          ) : (
            <div className="space-y-1 pt-3 border-t border-[#E7E4DB]">
              <h4 className="font-semibold text-[#164653]">Operational Telemetry</h4>
              <p className="text-[#71817E]">
                No direct live flow/pressure transducer bound to this facility yet.
              </p>
            </div>
          )}

          {/* Connectivity & Sensors */}
          <div className="space-y-2 pt-3 border-t border-[#E7E4DB]">
            <h4 className="font-semibold text-[#164653]">Pipeline Connectivity</h4>
            {facility.upstreamConnections.length === 0 &&
            facility.downstreamConnections.length === 0 ? (
              <p className="text-[#71817E]">No mapped pipeline connections recorded.</p>
            ) : (
              <div className="space-y-2">
                {facility.upstreamConnections.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onSelectFacility(c.fromFacilityId)}
                    className="w-full text-left p-2 rounded border border-[#E7E4DB] bg-[#F4F2EA]/70 hover:bg-[#D9ECE6]/50 transition-colors"
                  >
                    <div className="font-medium text-[#164653]">
                      Upstream: {c.fromFacilityName}
                    </div>
                    <div className="text-[11px] text-[#71817E]">
                      {c.pipelineLabel} · {CONNECTION_VERIFICATION_LABELS[c.verificationStatus]}
                    </div>
                  </button>
                ))}
                {facility.downstreamConnections.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onSelectFacility(c.toFacilityId)}
                    className="w-full text-left p-2 rounded border border-[#E7E4DB] bg-[#F4F2EA]/70 hover:bg-[#D9ECE6]/50 transition-colors"
                  >
                    <div className="font-medium text-[#164653]">
                      Downstream: {c.toFacilityName}
                    </div>
                    <div className="text-[11px] text-[#71817E]">
                      {c.pipelineLabel} · {CONNECTION_VERIFICATION_LABELS[c.verificationStatus]}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {facility.sensors.length > 0 && (
              <div className="pt-2 space-y-1.5">
                <div className="font-medium text-[#164653]">Associated Sensors</div>
                {facility.sensors.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between text-[11px] py-1 border-b border-[#E7E4DB] last:border-b-0"
                  >
                    <span className="text-[#164653]">
                      {s.name} ({s.sensorCode})
                    </span>
                    <span className="font-mono text-[#71817E]">
                      {s.status} {s.isSimulated ? '(Sim)' : ''}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Alerts */}
          <div className="space-y-2 pt-3 border-t border-[#E7E4DB]">
            <h4 className="font-semibold text-[#164653]">Related Alerts</h4>
            {facility.relatedAlerts.length === 0 ? (
              <p className="text-[#71817E]">No alerts logged for this facility.</p>
            ) : (
              <div className="space-y-1.5">
                {facility.relatedAlerts.slice(0, 4).map((a) => (
                  <div
                    key={a.id}
                    className="p-2 rounded border border-[#E7E4DB] bg-[#F4F2EA]/50 space-y-0.5"
                  >
                    <div className="flex items-center justify-between font-medium text-[#164653]">
                      <span>{a.title}</span>
                      <span className="font-mono text-[10px]">{a.status}</span>
                    </div>
                    <div className="text-[11px] text-[#71817E]">
                      {formatTimestamp(a.detectedAt)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
