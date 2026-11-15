export type DataMode = 'DEMO' | 'LIVE';

export type DemoScenario =
  | 'NORMAL'
  | 'MILD_DISCREPANCY'
  | 'PRESSURE_SPIKE'
  | 'PRESSURE_DROP'
  | 'SENSOR_DISCONNECTED'
  | 'API_FAILURE';

export type ProvenanceStatus =
  | 'VERIFIED_PUBLIC'
  | 'APPROXIMATE_PUBLIC'
  | 'DEMONSTRATION';

export type ConnectionVerificationStatus =
  | 'VERIFIED_ROUTE'
  | 'APPROXIMATE_ROUTE'
  | 'SIMULATED_LINK';

export type FacilityType =
  | 'RESERVOIR'
  | 'STORAGE_TANK'
  | 'TREATMENT_PLANT'
  | 'PUMPING_STATION'
  | 'DISTRIBUTION_NODE'
  | 'PIPELINE_JUNCTION'
  | 'SENSOR_POINT';

export type OperationalStatus =
  | 'OPERATIONAL'
  | 'MONITORING'
  | 'MAINTENANCE'
  | 'OFFLINE';

export type AlertCategory =
  | 'NORMAL_OPERATION'
  | 'ABNORMAL_FLOW_DIFFERENCE'
  | 'UNUSUAL_PRESSURE_VARIATION'
  | 'POSSIBLE_LEAKAGE_VERIFICATION_REQUIRED'
  | 'SENSOR_DISCONNECTED'
  | 'ESP32_DISCONNECTED'
  | 'API_CONNECTION_LOST'
  | 'STALE_SENSOR_DATA'
  | 'INVALID_SENSOR_READINGS';

export type AlertSeverity = 'GREEN' | 'AMBER' | 'RED';

export type AlertStatus =
  | 'NEW'
  | 'UNDER_INVESTIGATION'
  | 'RESOLVED'
  | 'DISMISSED';

export type HealthStatus =
  | 'CONNECTED'
  | 'DISCONNECTED'
  | 'DEMO'
  | 'UNAVAILABLE'
  | 'STALE';

export type TimeRangeKey = '1h' | '24h' | '7d' | '30d';

export type ValueClassification =
  | 'MEASURED'
  | 'CALCULATED'
  | 'ESTIMATED'
  | 'DEMONSTRATION';

export interface MunicipalUserDTO {
  id: string;
  email: string;
  username: string;
  fullName: string;
  designation: string;
  department: string;
  createdAt: string;
}

export interface AuthResponseDTO {
  token: string;
  user: MunicipalUserDTO;
}

export interface SensorReadingDTO {
  id: string;
  facilityId: string;
  facilityName?: string;
  inletFlow: number;
  outletFlow: number;
  flowDifference: number;
  pressureBar: number;
  dataSource: 'DEMO' | 'LIVE_ESP32';
  valueLabel: ValueClassification;
  isValid: boolean;
  isStale: boolean;
  recordedAt: string;
}

export interface ReadingsSummaryDTO {
  mode: DataMode;
  scenario: DemoScenario;
  liveAvailable: boolean;
  liveError: string | null;
  lastSuccessfulAt: string | null;
  isStale: boolean;
  latestReading: SensorReadingDTO | null;
  operationalState: 'NORMAL' | 'VERIFICATION_REQUIRED' | 'CRITICAL' | 'UNAVAILABLE';
  operationalMessage: string;
  thresholds: MonitoringThresholdDTO;
  activeAlertCount: number;
}

export interface SensorDTO {
  id: string;
  sensorCode: string;
  name: string;
  kind: 'INLET_FLOW' | 'OUTLET_FLOW' | 'PRESSURE' | 'LEVEL';
  unit: string;
  status: HealthStatus;
  isSimulated: boolean;
  lastReadingAt: string | null;
}

export interface FacilityDTO {
  id: string;
  code: string;
  name: string;
  type: FacilityType;
  locality: string;
  latitude: number;
  longitude: number;
  capacityMld: number | null;
  storageCapacityLiters: number | null;
  currentStorageLiters: number | null;
  operationalStatus: OperationalStatus;
  provenanceStatus: ProvenanceStatus;
  sourceReference: string;
  description: string;
  sensors: SensorDTO[];
  latestReading: SensorReadingDTO | null;
  activeAlertsCount: number;
}

export interface FacilityConnectionDTO {
  id: string;
  fromFacilityId: string;
  toFacilityId: string;
  fromFacilityName: string;
  toFacilityName: string;
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
  pipelineLabel: string;
  diameterMm: number | null;
  verificationStatus: ConnectionVerificationStatus;
  sourceReference: string;
  notes: string | null;
}

export interface FacilityDetailDTO extends FacilityDTO {
  upstreamConnections: FacilityConnectionDTO[];
  downstreamConnections: FacilityConnectionDTO[];
  recentReadings: SensorReadingDTO[];
  relatedAlerts: AlertDTO[];
}

export interface AlertNoteDTO {
  id: string;
  alertId: string;
  authorName: string;
  note: string;
  createdAt: string;
}

export interface AlertDTO {
  id: string;
  alertCode: string;
  category: AlertCategory;
  severity: AlertSeverity;
  status: AlertStatus;
  title: string;
  description: string;
  facilityId: string | null;
  facilityName: string | null;
  inletSnapshot: number | null;
  outletSnapshot: number | null;
  differenceSnapshot: number | null;
  pressureSnapshot: number | null;
  dataSource: 'DEMO' | 'LIVE_ESP32';
  detectedAt: string;
  updatedAt: string;
  notes: AlertNoteDTO[];
}

export interface MonitoringThresholdDTO {
  id: string;
  pressureMinBar: number;
  pressureMaxBar: number;
  pressureCriticalMaxBar: number;
  flowDiffThresholdLpm: number;
  flowAnomalyPersistenceSec: number;
  staleTimeoutSec: number;
  isIllustrative: boolean;
  updatedAt: string;
}

export interface ApplicationSettingDTO {
  id: string;
  dataMode: DataMode;
  demoScenario: DemoScenario;
  liveSensorApiUrl: string;
  pollIntervalMs: number;
  networkContext: string;
  updatedAt: string;
}

export interface SystemComponentHealthDTO {
  key: string;
  name: string;
  category: 'SENSOR' | 'HARDWARE' | 'BACKEND' | 'FRONTEND';
  status: HealthStatus;
  isSimulated: boolean;
  lastCommunicationAt: string | null;
  diagnosticMessage: string;
}

export interface SystemHealthDTO {
  mode: DataMode;
  overallStatus: 'HEALTHY' | 'DEGRADED' | 'DISCONNECTED' | 'DEMO';
  checkedAt: string;
  components: SystemComponentHealthDTO[];
}

export interface InsightsVolumePointDTO {
  bucketLabel: string;
  timestamp: string;
  inletVolumeLiters: number;
  outletVolumeLiters: number;
  discrepancyVolumeLiters: number;
  avgPressureBar: number;
  sampleCount: number;
}

export interface InsightsSummaryDTO {
  range: TimeRangeKey;
  mode: DataMode;
  classification: ValueClassification;
  totalInletVolumeLiters: number;
  totalOutletVolumeLiters: number;
  estimatedDiscrepancyLiters: number;
  discrepancyPercentage: number;
  averagePressureBar: number;
  validSamplesCount: number;
  monitoredDurationMinutes: number;
  storageUtilizationPercent: number | null;
  totalStorageCapacityLiters: number;
  totalCurrentStorageLiters: number;
  methodologyNote: string;
  series: InsightsVolumePointDTO[];
}
