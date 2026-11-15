import { useCallback, useEffect, useMemo, useState } from "react";
import { Compass, Info, RotateCcw, Search, X } from "lucide-react";
import { infrastructureApi } from "../../services/api/endpoints.ts";
import { IndoreGoogleMap } from "./IndoreGoogleMap.tsx";
import { IndoreSchematicMap } from "./IndoreSchematicMap.tsx";
import { FacilityDetailDrawer } from "./FacilityDetailDrawer.tsx";
import { IndoreLeafletMap } from "./IndoreLeafletMap.tsx";
import {
  CONNECTION_VERIFICATION_LABELS,
  FACILITY_TYPE_LABELS,
  INDORE_CENTER,
} from "@shared/constants/index.ts";
import { ProvenanceText } from "../../components/common/StatusLabel.tsx";
import type {
  FacilityConnectionDTO,
  FacilityDTO,
  FacilityDetailDTO,
  FacilityType,
} from "@shared/types/index.ts";

const CATEGORY_FILTERS: Array<{ key: FacilityType | "ALL"; label: string }> = [
  { key: "ALL", label: "All Infrastructure" },
  { key: "RESERVOIR", label: "Reservoirs" },
  { key: "TREATMENT_PLANT", label: "Treatment Plants" },
  { key: "STORAGE_TANK", label: "Storage Tanks (OHT)" },
  { key: "PUMPING_STATION", label: "Pumping Stations" },
  { key: "DISTRIBUTION_NODE", label: "Distribution Nodes" },
  { key: "SENSOR_POINT", label: "Sensor Points" },
];

export function PipelineMonitoringPage({
  mapsQuotaExceeded,
}: {
  mapsQuotaExceeded: boolean;
}) {
  const canUseGoogleMaps = true;
  const [viewMode, setViewMode] = useState<"google" | "schematic">("google");
  const [facilities, setFacilities] = useState<FacilityDTO[]>([]);
  const [connections, setConnections] = useState<FacilityConnectionDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const [categoryFilter, setCategoryFilter] = useState<FacilityType | "ALL">(
    "ALL",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFacilityId, setSelectedFacilityId] = useState<string | null>(
    null,
  );
  const [selectedDetail, setSelectedDetail] =
    useState<FacilityDetailDTO | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [selectedConnection, setSelectedConnection] =
    useState<FacilityConnectionDTO | null>(null);
  const [resetSignal, setResetSignal] = useState(0);

  useEffect(() => {
    Promise.all([
      infrastructureApi.getFacilities(),
      infrastructureApi.getConnections(),
    ])
      .then(([fRes, cRes]) => {
        setFacilities(fRes.facilities);
        setConnections(cRes.connections);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSelectFacility = useCallback(async (id: string) => {
    setSelectedFacilityId(id);
    setSelectedConnection(null);
    setLoadingDetail(true);
    try {
      const detail = await infrastructureApi.getFacilityDetail(id);
      setSelectedDetail(detail);
    } catch {
      setSelectedDetail(null);
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const handleClearSelection = () => {
    setSelectedFacilityId(null);
    setSelectedDetail(null);
    setSelectedConnection(null);
  };

  const handleResetCityView = () => {
    handleClearSelection();
    setResetSignal((n) => n + 1);
  };

  const filteredFacilities = useMemo(() => {
    return facilities.filter((f) => {
      const matchesCategory =
        categoryFilter === "ALL" || f.type === categoryFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.locality.toLowerCase().includes(q) ||
        f.code.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [facilities, categoryFilter, searchQuery]);

  const filteredConnections = useMemo(() => {
    const visibleIds = new Set(filteredFacilities.map((f) => f.id));
    return connections.filter(
      (c) => visibleIds.has(c.fromFacilityId) && visibleIds.has(c.toFacilityId),
    );
  }, [connections, filteredFacilities]);

  const effectiveView = canUseGoogleMaps ? viewMode : "schematic";

  return (
    <div className="space-y-5">
      {/* Header & Search Controls */}
      <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[#164653]">
              Indore Water Infrastructure Geographical View
            </h2>
            <p className="text-xs text-[#71817E]">
              Centered on Indore, Madhya Pradesh ({INDORE_CENTER.lat}° N,{" "}
              {INDORE_CENTER.lng}° E) · Sourced public records are strictly
              distinguished from approximate and demonstration nodes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {canUseGoogleMaps && (
              <div className="inline-flex p-0.5 rounded-md border border-[#E7E4DB] bg-[#F4F2EA] text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode("google")}
                  className={`px-2.5 py-1 rounded font-medium ${
                    viewMode === "google"
                      ? "bg-[#164653] text-white"
                      : "text-[#71817E] hover:text-[#164653]"
                  }`}
                >
                  Live Map View
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("schematic")}
                  className={`px-2.5 py-1 rounded font-medium ${
                    viewMode === "schematic"
                      ? "bg-[#164653] text-white"
                      : "text-[#71817E] hover:text-[#164653]"
                  }`}
                >
                  Schematic View
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={handleResetCityView}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E7E4DB] bg-[#F4F2EA] text-xs font-medium text-[#164653] hover:bg-[#D9ECE6]/60"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Full-City View</span>
            </button>

            {selectedFacilityId && (
              <button
                type="button"
                onClick={handleClearSelection}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#E7E4DB] bg-[#FFFEFA] text-xs font-medium text-[#71817E] hover:text-[#164653]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Selection</span>
              </button>
            )}
          </div>
        </div>

        {/* Search + Category Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#E7E4DB]">
          <div className="relative min-w-[220px] flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 text-[#71817E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search facility, locality, or code..."
              className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#71817E]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setCategoryFilter(cat.key)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                  categoryFilter === cat.key
                    ? "bg-[#168B83] text-white border-[#168B83]"
                    : "bg-[#F4F2EA] text-[#164653] border-[#E7E4DB] hover:bg-[#D9ECE6]/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Maps API Key Missing Notice (graceful, preserves full layout) */}
      {!canUseGoogleMaps && (
        <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-start gap-2.5 text-[#164653]">
            <Info className="w-4 h-4 text-[#168B83] shrink-0 mt-0.5" />
            <div>
              <strong>
                Google Maps API Key Not Configured in Frontend Environment:
              </strong>{" "}
              Displaying the clearly labelled{" "}
              <strong>Schematic Topology Fallback View</strong> (projected from
              real Indore coordinates). Set{" "}
              <code className="font-mono bg-[#F4F2EA] px-1 py-0.5 rounded">
                VITE_GOOGLE_MAPS_API_KEY
              </code>{" "}
              in{" "}
              <code className="font-mono bg-[#F4F2EA] px-1 py-0.5 rounded">
                .env
              </code>{" "}
              to enable live Google Maps tiles.
            </div>
          </div>
        </div>
      )}

      {/* Map Canvas + Facility Detail Drawer Grid */}
      <div
        className={`grid gap-5 ${
          selectedFacilityId
            ? "grid-cols-1 lg:grid-cols-[1fr_390px]"
            : "grid-cols-1"
        }`}
      >
        <div className="space-y-3">
          {loading ? (
            <div className="h-[540px] bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg flex items-center justify-center text-xs text-[#71817E]">
              Loading Indore water infrastructure records...
            </div>
          ) : effectiveView === "google" ? (
            <IndoreLeafletMap
              facilities={filteredFacilities}
              connections={filteredConnections}
              selectedFacilityId={selectedFacilityId}
              resetSignal={resetSignal}
              onSelectFacility={handleSelectFacility}
              onSelectConnection={setSelectedConnection}
            />
          ) : (
            <IndoreSchematicMap
              facilities={filteredFacilities}
              connections={filteredConnections}
              selectedFacilityId={selectedFacilityId}
              onSelectFacility={handleSelectFacility}
              onSelectConnection={setSelectedConnection}
            />
          )}

          {/* Selected Pipeline Connection Inspector */}
          {selectedConnection && (
            <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-4 flex flex-wrap items-start justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-semibold text-[#164653]">
                  Pipeline Link: {selectedConnection.pipelineLabel}
                </div>
                <div className="text-[#71817E]">
                  {selectedConnection.fromFacilityName} →{" "}
                  {selectedConnection.toFacilityName} ·{" "}
                  <strong className="text-[#164653]">
                    {
                      CONNECTION_VERIFICATION_LABELS[
                        selectedConnection.verificationStatus
                      ]
                    }
                  </strong>
                  {selectedConnection.diameterMm
                    ? ` · Nominal Dia: ${selectedConnection.diameterMm} mm`
                    : ""}
                </div>
                <div className="text-[11px] text-[#71817E]">
                  Source: {selectedConnection.sourceReference}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedConnection(null)}
                className="text-[#71817E] hover:text-[#164653]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Map Legend */}
          <div className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-3.5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#71817E]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-[#164653]">
                Pipeline Legend:
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-5 h-0.5 bg-[#168B83] inline-block" />
                <span>Verified Transmission Route</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-5 border-t-2 border-dashed border-[#164653] inline-block" />
                <span>Approximate Corridor</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-5 border-t-2 border-dotted border-[#D9A441] inline-block" />
                <span>Simulated Demonstration Link</span>
              </span>
            </div>
            <div className="font-mono tabular-nums">
              Showing {filteredFacilities.length} facilities ·{" "}
              {filteredConnections.length} connections
            </div>
          </div>
        </div>

        {selectedFacilityId && (
          <FacilityDetailDrawer
            facility={selectedDetail}
            loading={loadingDetail}
            onClose={handleClearSelection}
            onSelectFacility={handleSelectFacility}
          />
        )}
      </div>

      {/* Directory Table Below Map for Quick Inspection */}
      <section className="bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg overflow-hidden">
        <div className="px-5 py-3.5 border-b border-[#E7E4DB] flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#164653]">
            Indore Infrastructure Provenance Directory
          </h3>
          <span className="text-xs text-[#71817E]">
            Click any row to inspect facility details
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#F4F2EA] text-[#71817E] border-b border-[#E7E4DB]">
              <tr>
                <th className="py-2.5 px-4 font-medium">Code</th>
                <th className="py-2.5 px-4 font-medium">Facility Name</th>
                <th className="py-2.5 px-4 font-medium">Category</th>
                <th className="py-2.5 px-4 font-medium">Coordinates</th>
                <th className="py-2.5 px-4 font-medium">Data Provenance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4DB]">
              {filteredFacilities.map((f) => (
                <tr
                  key={f.id}
                  onClick={() => handleSelectFacility(f.id)}
                  className={`cursor-pointer transition-colors ${
                    f.id === selectedFacilityId
                      ? "bg-[#D9ECE6]/60"
                      : "hover:bg-[#F4F2EA]/70"
                  }`}
                >
                  <td className="py-2.5 px-4 font-mono tabular-nums text-[#164653] font-medium">
                    {f.code}
                  </td>
                  <td className="py-2.5 px-4 font-medium text-[#164653]">
                    {f.name}
                  </td>
                  <td className="py-2.5 px-4 text-[#71817E]">
                    {FACILITY_TYPE_LABELS[f.type]}
                  </td>
                  <td className="py-2.5 px-4 font-mono tabular-nums text-[#71817E]">
                    {f.latitude.toFixed(4)}° N, {f.longitude.toFixed(4)}° E
                  </td>
                  <td className="py-2.5 px-4">
                    <ProvenanceText status={f.provenanceStatus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
