declare namespace google {
  namespace maps {
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface IconSequence {
      icon?: {
        path: string;
        strokeOpacity?: number;
        scale?: number;
        strokeColor?: string;
      };
      offset?: string;
      repeat?: string;
    }

    interface PolylineOptions {
      path?: LatLngLiteral[];
      geodesic?: boolean;
      strokeColor?: string;
      strokeOpacity?: number;
      strokeWeight?: number;
      icons?: IconSequence[];
      map?: unknown;
    }

    class Polyline {
      constructor(opts?: PolylineOptions);
      addListener(eventName: string, handler: () => void): unknown;
      setMap(map: unknown | null): void;
    }
  }
}
