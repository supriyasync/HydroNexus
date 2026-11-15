import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { INDORE_CENTER, INDORE_DEFAULT_ZOOM } from "@shared/constants/index.ts";
import type {
  FacilityConnectionDTO,
  FacilityDTO,
  FacilityType,
} from "@shared/types/index.ts";

function MapController({
  center,
  zoom,
  selectedFacility,
}: {
  center: [number, number];
  zoom: number;
  selectedFacility: FacilityDTO | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (selectedFacility) {
      map.setView([selectedFacility.latitude, selectedFacility.longitude], 14);
    } else {
      map.setView(center, zoom);
    }
  }, [map, center, zoom, selectedFacility]);
  return null;
}

const getCustomIcon = (type: FacilityType, isSelected: boolean) => {
  const bg = isSelected
    ? "#168B83"
    : type === "SENSOR_POINT"
      ? "#D9A441"
      : "#164653";
  const border = isSelected ? "#164653" : "#FFFEFA";
  const html = `
    <div style="
      background-color: ${bg};
      border: 2px solid ${border};
      color: #FFFFFF;
      border-radius: 6px;
      padding: 4px 6px;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      transform: ${isSelected ? "scale(1.15)" : "scale(1)"};
      transition: transform 0.2s;
    ">
      ${type.substring(0, 3)}
    </div>
  `;
  return L.divIcon({
    html,
    className: "custom-leaflet-icon",
    iconSize: [40, 24],
    iconAnchor: [20, 12],
  });
};

export function IndoreLeafletMap({
  facilities,
  connections,
  selectedFacilityId,
  resetSignal,
  onSelectFacility,
  onSelectConnection,
}: {
  facilities: FacilityDTO[];
  connections: FacilityConnectionDTO[];
  selectedFacilityId: string | null;
  resetSignal: number;
  onSelectFacility: (id: string) => void;
  onSelectConnection: (conn: FacilityConnectionDTO) => void;
}) {
  const selectedFacility =
    facilities.find((f) => f.id === selectedFacilityId) ?? null;
  const center: [number, number] = [INDORE_CENTER.lat, INDORE_CENTER.lng];

  return (
    <div className="w-full h-[540px] rounded-md overflow-hidden border border-[#E7E4DB] relative z-0">
      <MapContainer
        center={center}
        zoom={INDORE_DEFAULT_ZOOM}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
      >
        <MapController
          center={center}
          zoom={INDORE_DEFAULT_ZOOM}
          selectedFacility={selectedFacility}
        />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {connections.map((c) => {
          const isHighlighted =
            selectedFacilityId !== null &&
            (c.fromFacilityId === selectedFacilityId ||
              c.toFacilityId === selectedFacilityId);
          const isSimulated = c.verificationStatus === "SIMULATED_LINK";
          const isApprox = c.verificationStatus === "APPROXIMATE_ROUTE";
          const color =
            c.verificationStatus === "VERIFIED_ROUTE"
              ? "#168B83"
              : isApprox
                ? "#164653"
                : "#D9A441";

          return (
            <Polyline
              key={c.id}
              positions={[
                [c.fromLat, c.fromLng],
                [c.toLat, c.toLng],
              ]}
              pathOptions={{
                color,
                weight: isHighlighted ? 5 : 3,
                opacity: isHighlighted ? 1 : 0.8,
                dashArray: isSimulated
                  ? "6, 6"
                  : isApprox
                    ? "10, 8"
                    : undefined,
              }}
              eventHandlers={{
                click: () => onSelectConnection(c),
              }}
            />
          );
        })}

        {facilities.map((f) => {
          const isSelected = f.id === selectedFacilityId;
          return (
            <Marker
              key={f.id}
              position={[f.latitude, f.longitude]}
              icon={getCustomIcon(f.type, isSelected)}
              eventHandlers={{
                click: () => onSelectFacility(f.id),
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
