import { useEffect } from 'react';
import {
  APIProvider,
  AdvancedMarker,
  Map as GoogleMap,
  useMap,
} from '@vis.gl/react-google-maps';
import {
  Activity,
  Cog,
  Database,
  Droplets,
  Filter,
  GitFork,
  Layers,
} from 'lucide-react';
import { INDORE_CENTER, INDORE_DEFAULT_ZOOM } from '@shared/constants/index.ts';
import type {
  FacilityConnectionDTO,
  FacilityDTO,
  FacilityType,
} from '@shared/types/index.ts';

function getMarkerColors(type: FacilityType, selected: boolean) {
  if (selected) {
    return { bg: '#168B83', border: '#164653', text: '#FFFFFF' };
  }
  switch (type) {
    case 'RESERVOIR':
      return { bg: '#164653', border: '#D9ECE6', text: '#FFFFFF' };
    case 'STORAGE_TANK':
      return { bg: '#168B83', border: '#FFFEFA', text: '#FFFFFF' };
    case 'TREATMENT_PLANT':
      return { bg: '#2C6E7A', border: '#FFFEFA', text: '#FFFFFF' };
    case 'PUMPING_STATION':
      return { bg: '#3B5962', border: '#FFFEFA', text: '#FFFFFF' };
    case 'DISTRIBUTION_NODE':
    case 'PIPELINE_JUNCTION':
      return { bg: '#71817E', border: '#FFFEFA', text: '#FFFFFF' };
    case 'SENSOR_POINT':
      return { bg: '#D9A441', border: '#164653', text: '#164653' };
    default:
      return { bg: '#164653', border: '#FFFEFA', text: '#FFFFFF' };
  }
}

export function FacilityMarkerIcon({
  type,
  className = 'w-3.5 h-3.5',
}: {
  type: FacilityType;
  className?: string;
}) {
  switch (type) {
    case 'RESERVOIR':
      return <Droplets className={className} />;
    case 'STORAGE_TANK':
      return <Database className={className} />;
    case 'TREATMENT_PLANT':
      return <Filter className={className} />;
    case 'PUMPING_STATION':
      return <Cog className={className} />;
    case 'DISTRIBUTION_NODE':
      return <GitFork className={className} />;
    case 'PIPELINE_JUNCTION':
      return <Layers className={className} />;
    case 'SENSOR_POINT':
      return <Activity className={className} />;
    default:
      return <Droplets className={className} />;
  }
}

function MapCameraSync({
  selectedFacility,
  resetSignal,
}: {
  selectedFacility: FacilityDTO | null;
  resetSignal: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    if (selectedFacility) {
      map.panTo({
        lat: selectedFacility.latitude,
        lng: selectedFacility.longitude,
      });
      const currentZoom = map.getZoom() ?? INDORE_DEFAULT_ZOOM;
      if (currentZoom < 13) {
        map.setZoom(13);
      }
    }
  }, [map, selectedFacility]);

  useEffect(() => {
    if (!map || resetSignal === 0) return;
    map.panTo(INDORE_CENTER);
    map.setZoom(INDORE_DEFAULT_ZOOM);
  }, [map, resetSignal]);

  return null;
}

function PipelinePolylines({
  connections,
  selectedFacilityId,
  onSelectConnection,
}: {
  connections: FacilityConnectionDTO[];
  selectedFacilityId: string | null;
  onSelectConnection: (conn: FacilityConnectionDTO) => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (!map || typeof google === 'undefined' || !google.maps) return;

    const createdLines: google.maps.Polyline[] = connections.map((c) => {
      const isHighlighted =
        selectedFacilityId !== null &&
        (c.fromFacilityId === selectedFacilityId || c.toFacilityId === selectedFacilityId);

      const isSimulated = c.verificationStatus === 'SIMULATED_LINK';
      const isApprox = c.verificationStatus === 'APPROXIMATE_ROUTE';

      const strokeColor =
        c.verificationStatus === 'VERIFIED_ROUTE'
          ? '#168B83'
          : isApprox
            ? '#164653'
            : '#D9A441';

      const line = new google.maps.Polyline({
        path: [
          { lat: c.fromLat, lng: c.fromLng },
          { lat: c.toLat, lng: c.toLng },
        ],
        geodesic: true,
        strokeColor,
        strokeOpacity: isSimulated || isApprox ? 0 : isHighlighted ? 1 : 0.85,
        strokeWeight: isHighlighted ? 5 : 3,
        icons:
          isSimulated || isApprox
            ? [
                {
                  icon: {
                    path: 'M 0,-1 0,1',
                    strokeOpacity: isHighlighted ? 1 : 0.85,
                    scale: isHighlighted ? 3.2 : 2.4,
                    strokeColor,
                  },
                  offset: '0',
                  repeat: isSimulated ? '12px' : '18px',
                },
              ]
            : undefined,
        map,
      });

      line.addListener('click', () => onSelectConnection(c));
      return line;
    });

    return () => {
      createdLines.forEach((line) => line.setMap(null));
    };
  }, [map, connections, selectedFacilityId, onSelectConnection]);

  return null;
}

export function IndoreGoogleMap({
  apiKey,
  facilities,
  connections,
  selectedFacilityId,
  resetSignal,
  onSelectFacility,
  onSelectConnection,
}: {
  apiKey: string;
  facilities: FacilityDTO[];
  connections: FacilityConnectionDTO[];
  selectedFacilityId: string | null;
  resetSignal: number;
  onSelectFacility: (id: string) => void;
  onSelectConnection: (conn: FacilityConnectionDTO) => void;
}) {
  const selectedFacility =
    facilities.find((f) => f.id === selectedFacilityId) ?? null;

  return (
    <div className="w-full h-[540px] rounded-md overflow-hidden border border-[#E7E4DB] relative">
      <APIProvider apiKey={apiKey} language="en" region="IN">
        <GoogleMap
          mapId="DEMO_MAP_ID"
          defaultCenter={INDORE_CENTER}
          defaultZoom={INDORE_DEFAULT_ZOOM}
          gestureHandling="greedy"
          streetViewControl={false}
          mapTypeControl={true}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{ width: '100%', height: '100%' }}
        >
          <MapCameraSync
            selectedFacility={selectedFacility}
            resetSignal={resetSignal}
          />
          <PipelinePolylines
            connections={connections}
            selectedFacilityId={selectedFacilityId}
            onSelectConnection={onSelectConnection}
          />
          {facilities.map((facility) => {
            const isSelected = facility.id === selectedFacilityId;
            const colors = getMarkerColors(facility.type, isSelected);
            return (
              <AdvancedMarker
                key={facility.id}
                position={{ lat: facility.latitude, lng: facility.longitude }}
                title={`${facility.name} (${facility.code})`}
                onClick={() => onSelectFacility(facility.id)}
              >
                <div
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md shadow-sm transition-transform cursor-pointer"
                  style={{
                    backgroundColor: colors.bg,
                    border: `2px solid ${colors.border}`,
                    color: colors.text,
                    transform: isSelected ? 'scale(1.12)' : 'scale(1)',
                  }}
                >
                  <FacilityMarkerIcon type={facility.type} className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] font-medium whitespace-nowrap max-w-[130px] truncate">
                    {facility.code}
                  </span>
                </div>
              </AdvancedMarker>
            );
          })}
        </GoogleMap>
      </APIProvider>
    </div>
  );
}
