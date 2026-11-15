import type {
  AlertCategory,
  FacilityType,
  ProvenanceStatus,
  ConnectionVerificationStatus,
} from '../types/index.ts';

export const INDORE_CENTER = {
  lat: 22.7196,
  lng: 75.8577,
} as const;

export const INDORE_DEFAULT_ZOOM = 12;

export const FACILITY_TYPE_LABELS: Record<FacilityType, string> = {
  RESERVOIR: 'Water Reservoir',
  STORAGE_TANK: 'Water Storage Tank (OHT/ESR)',
  TREATMENT_PLANT: 'Water Treatment Plant',
  PUMPING_STATION: 'Pumping Station',
  DISTRIBUTION_NODE: 'Distribution Access Point',
  PIPELINE_JUNCTION: 'Pipeline Junction',
  SENSOR_POINT: 'Sensor Monitoring Point',
};

export const PROVENANCE_LABELS: Record<ProvenanceStatus, string> = {
  VERIFIED_PUBLIC: 'Verified Public Record',
  APPROXIMATE_PUBLIC: 'Approximate Public Locality',
  DEMONSTRATION: 'Demonstration Record',
};

export const CONNECTION_VERIFICATION_LABELS: Record<ConnectionVerificationStatus, string> = {
  VERIFIED_ROUTE: 'Verified Transmission Route',
  APPROXIMATE_ROUTE: 'Approximate Corridor',
  SIMULATED_LINK: 'Simulated Demonstration Link',
};

export const ALERT_CATEGORY_LABELS: Record<AlertCategory, string> = {
  NORMAL_OPERATION: 'Normal Operation',
  ABNORMAL_FLOW_DIFFERENCE: 'Abnormal Flow Difference',
  UNUSUAL_PRESSURE_VARIATION: 'Unusual Pressure Variation',
  POSSIBLE_LEAKAGE_VERIFICATION_REQUIRED: 'Possible Anomaly – Verification Required',
  SENSOR_DISCONNECTED: 'Sensor Disconnected',
  ESP32_DISCONNECTED: 'ESP32 Disconnected',
  API_CONNECTION_LOST: 'API Connection Lost',
  STALE_SENSOR_DATA: 'Stale Sensor Data',
  INVALID_SENSOR_READINGS: 'Invalid Sensor Readings',
};

export const SANITY_LIMITS = {
  MAX_FLOW_LPM: 500000,
  MAX_PRESSURE_BAR: 25,
} as const;
