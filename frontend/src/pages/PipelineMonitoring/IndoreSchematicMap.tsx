import { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { FacilityMarkerIcon } from './IndoreGoogleMap.tsx';
import type { FacilityConnectionDTO, FacilityDTO } from '@shared/types/index.ts';

// Bounding box covering Indore metropolitan infrastructure facilities
const BOUNDS = {
  minLat: 22.645,
  maxLat: 22.830,
  minLng: 75.675,
  maxLng: 75.940,
};

function projectCoord(lat: number, lng: number) {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * 900 + 50;
  const y = ((BOUNDS.maxLat - lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * 460 + 40;
  return { x, y };
}

export function IndoreSchematicMap({
  facilities,
  connections,
  selectedFacilityId,
  onSelectFacility,
  onSelectConnection,
}: {
  facilities: FacilityDTO[];
  connections: FacilityConnectionDTO[];
  selectedFacilityId: string | null;
  onSelectFacility: (id: string) => void;
  onSelectConnection: (conn: FacilityConnectionDTO) => void;
}) {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="w-full h-[540px] rounded-md border border-[#E7E4DB] bg-[#F8F6F0] relative overflow-hidden flex flex-col">
      <div className="px-3 py-2 bg-[#FFFEFA] border-b border-[#E7E4DB] flex items-center justify-between text-xs">
        <div className="text-[#164653] font-medium">
          Schematic Fallback Topology View — Indore Coordinate Grid (22.64°–22.83° N,
          75.67°–75.94° E)
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.8, Number((z + 0.2).toFixed(1))))}
            className="p-1.5 rounded border border-[#E7E4DB] bg-[#FFFEFA] text-[#164653] hover:bg-[#F4F2EA]"
            title="Zoom in schematic"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.8, Number((z - 0.2).toFixed(1))))}
            className="p-1.5 rounded border border-[#E7E4DB] bg-[#FFFEFA] text-[#164653] hover:bg-[#F4F2EA]"
            title="Zoom out schematic"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom(1)}
            className="p-1.5 rounded border border-[#E7E4DB] bg-[#FFFEFA] text-[#164653] hover:bg-[#F4F2EA]"
            title="Reset zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto relative">
        <svg
          viewBox="0 0 1000 540"
          className="w-full h-full min-w-[700px] transition-transform duration-150"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
        >
          {/* Subtle geospatial grid lines */}
          {[100, 200, 300, 400].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="1000"
              y2={y}
              stroke="#E7E4DB"
              strokeWidth="1"
            />
          ))}
          {[200, 400, 600, 800].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="540"
              stroke="#E7E4DB"
              strokeWidth="1"
            />
          ))}

          <text x="20" y="28" fill="#71817E" fontSize="11" fontFamily="IBM Plex Mono">
            SCHEMATIC TOPOLOGY FALLBACK · NOT A TILE MAP
          </text>

          {/* Pipeline Connections */}
          {connections.map((c) => {
            const p1 = projectCoord(c.fromLat, c.fromLng);
            const p2 = projectCoord(c.toLat, c.toLng);
            const isHighlighted =
              selectedFacilityId !== null &&
              (c.fromFacilityId === selectedFacilityId || c.toFacilityId === selectedFacilityId);
            const color =
              c.verificationStatus === 'VERIFIED_ROUTE'
                ? '#168B83'
                : c.verificationStatus === 'APPROXIMATE_ROUTE'
                  ? '#164653'
                  : '#D9A441';
            const dash =
              c.verificationStatus === 'SIMULATED_LINK'
                ? '6 5'
                : c.verificationStatus === 'APPROXIMATE_ROUTE'
                  ? '10 6'
                  : undefined;

            return (
              <g
                key={c.id}
                onClick={() => onSelectConnection(c)}
                className="cursor-pointer"
              >
                <line
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke={color}
                  strokeWidth={isHighlighted ? 4.5 : 2.5}
                  strokeDasharray={dash}
                  opacity={isHighlighted ? 1 : 0.8}
                />
              </g>
            );
          })}

          {/* Facility Nodes */}
          {facilities.map((f) => {
            const { x, y } = projectCoord(f.latitude, f.longitude);
            const isSelected = f.id === selectedFacilityId;
            const fill =
              f.type === 'SENSOR_POINT'
                ? '#D9A441'
                : f.type === 'STORAGE_TANK'
                  ? '#168B83'
                  : '#164653';

            return (
              <g
                key={f.id}
                transform={`translate(${x}, ${y})`}
                onClick={() => onSelectFacility(f.id)}
                className="cursor-pointer"
              >
                {isSelected && (
                  <circle r="22" fill="none" stroke="#168B83" strokeWidth="2.5" opacity="0.5" />
                )}
                <circle
                  r="14"
                  fill={fill}
                  stroke={isSelected ? '#168B83' : '#FFFEFA'}
                  strokeWidth="2.5"
                />
                <foreignObject x="-8" y="-8" width="16" height="16">
                  <div className="w-4 h-4 flex items-center justify-center text-white">
                    <FacilityMarkerIcon type={f.type} className="w-3 h-3" />
                  </div>
                </foreignObject>
                <rect
                  x="-65"
                  y="18"
                  width="130"
                  height="20"
                  rx="4"
                  fill="#FFFEFA"
                  stroke="#E7E4DB"
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="32"
                  textAnchor="middle"
                  fill="#164653"
                  fontSize="10"
                  fontWeight="600"
                >
                  {f.name.length > 21 ? `${f.name.slice(0, 19)}…` : f.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
