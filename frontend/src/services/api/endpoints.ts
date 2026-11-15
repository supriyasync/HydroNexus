import { apiRequest } from "./client.ts";
import type {
  AlertDTO,
  AlertNoteDTO,
  AlertStatus,
  ApplicationSettingDTO,
  AuthResponseDTO,
  DataMode,
  DemoScenario,
  FacilityConnectionDTO,
  FacilityDTO,
  FacilityDetailDTO,
  InsightsSummaryDTO,
  MonitoringThresholdDTO,
  MunicipalUserDTO,
  ReadingsSummaryDTO,
  SensorReadingDTO,
  SystemHealthDTO,
  TimeRangeKey,
} from "@shared/types/index.ts";

export const authApi = {
  login: (identifier: string, password: string, rememberSession: boolean) =>
    apiRequest<AuthResponseDTO>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ identifier, password, rememberSession }),
    }),
  setupAdmin: (payload: {
    setupKey: string;
    email: string;
    username: string;
    password: string;
    fullName: string;
    designation: string;
  }) =>
    apiRequest<AuthResponseDTO>("/auth/setup", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  me: () => apiRequest<MunicipalUserDTO>("/auth/me"),
  logout: () => apiRequest<{ ok: boolean }>("/auth/logout", { method: "POST" }),
};

export const readingsApi = {
  getSummary: () => apiRequest<ReadingsSummaryDTO>("/readings/summary"),
  getLatest: () =>
    apiRequest<{ mode: DataMode; reading: SensorReadingDTO | null }>(
      "/readings/latest",
    ),
  getHistory: (range: TimeRangeKey, facilityId?: string) =>
    apiRequest<{
      range: TimeRangeKey;
      mode: DataMode;
      readings: SensorReadingDTO[];
    }>(
      `/readings/history?range=${range}${facilityId ? `&facilityId=${encodeURIComponent(facilityId)}` : ""}`,
    ),
  ingestEsp32Sample: (payload: {
    inlet: number;
    outlet: number;
    pressure: number;
  }) =>
    apiRequest<{ ok: boolean; reading: SensorReadingDTO }>("/readings", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  triggerDemoScenario: (scenario: DemoScenario) =>
    apiRequest<{ ok: boolean; demoScenario: DemoScenario }>(
      "/readings/simulate-scenario",
      {
        method: "POST",
        body: JSON.stringify({ scenario }),
      },
    ),
};

export const infrastructureApi = {
  getFacilities: () =>
    apiRequest<{ facilities: FacilityDTO[] }>("/infrastructure/facilities"),
  getFacilityDetail: (id: string) =>
    apiRequest<FacilityDetailDTO>(`/infrastructure/facilities/${id}`),
  getConnections: () =>
    apiRequest<{ connections: FacilityConnectionDTO[] }>(
      "/infrastructure/connections",
    ),
  getSummary: () =>
    apiRequest<{
      totalFacilities: number;
      totalConnections: number;
      provenanceBreakdown: {
        verifiedPublic: number;
        approximatePublic: number;
        demonstration: number;
      };
    }>("/infrastructure/summary"),
};

export const alertsApi = {
  list: (params?: { status?: string; severity?: string }) => {
    const query = new URLSearchParams();
    if (params?.status && params.status !== "ALL")
      query.set("status", params.status);
    if (params?.severity && params.severity !== "ALL")
      query.set("severity", params.severity);
    const qs = query.toString();
    return apiRequest<{ alerts: AlertDTO[] }>(`/alerts${qs ? `?${qs}` : ""}`);
  },
  updateStatus: (id: string, status: AlertStatus) =>
    apiRequest<AlertDTO>(`/alerts/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  addNote: (id: string, note: string) =>
    apiRequest<AlertNoteDTO>(`/alerts/${id}/notes`, {
      method: "POST",
      body: JSON.stringify({ note }),
    }),
};

export const pressureApi = {
  getLatest: () =>
    apiRequest<{
      mode: DataMode;
      pressureBar: number | null;
      recordedAt: string | null;
      isStale: boolean;
      thresholds: MonitoringThresholdDTO | null;
    }>("/pressure/latest"),
  getHistory: (range: TimeRangeKey) =>
    apiRequest<{
      range: TimeRangeKey;
      mode: DataMode;
      points: Array<{
        id: string;
        pressureBar: number;
        dataSource: string;
        recordedAt: string;
      }>;
    }>(`/pressure/history?range=${range}`),
  getThresholds: () =>
    apiRequest<MonitoringThresholdDTO>("/pressure/thresholds"),
  updateThresholds: (payload: {
    pressureMinBar: number;
    pressureMaxBar: number;
    pressureCriticalMaxBar: number;
    flowDiffThresholdLpm?: number;
    flowAnomalyPersistenceSec?: number;
    staleTimeoutSec?: number;
  }) =>
    apiRequest<MonitoringThresholdDTO>("/pressure/thresholds", {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};

export const insightsApi = {
  getSummary: (range: TimeRangeKey) =>
    apiRequest<InsightsSummaryDTO>(`/insights/summary?range=${range}`),
};

export const healthApi = {
  getSystemStatus: () => apiRequest<SystemHealthDTO>("/system/status"),
};

export const settingsApi = {
  get: () =>
    apiRequest<{
      settings: ApplicationSettingDTO | null;
      thresholds: MonitoringThresholdDTO | null;
    }>("/settings"),
  update: (payload: {
    dataMode?: DataMode;
    demoScenario?: DemoScenario;
    liveSensorApiUrl?: string;
    pollIntervalMs?: number;
    networkContext?: string;
    pressureMinBar?: number;
    pressureMaxBar?: number;
    pressureCriticalMaxBar?: number;
    flowDiffThresholdLpm?: number;
    flowAnomalyPersistenceSec?: number;
    staleTimeoutSec?: number;
  }) =>
    apiRequest<{
      settings: ApplicationSettingDTO;
      thresholds: MonitoringThresholdDTO;
    }>("/settings", {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};
