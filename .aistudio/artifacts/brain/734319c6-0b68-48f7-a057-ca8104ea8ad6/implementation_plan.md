# HydroNexus — Intelligent Water Management Platform (Indore Municipal Corporation)

HydroNexus is an IoT-enabled municipal water infrastructure monitoring platform engineered exclusively for Indore Municipal Corporation (IMC). It unifies geographical water-network visibility across Indore, real-time inlet/outlet flow and pressure telemetry, backend anomaly detection, alert investigation workflows, and historical water-conservation analytics into a single locally runnable application.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and product choices have been locked in from your responses, alongside one interactive provisioning step that will run at the start of execution.

- **Confirmed Workspace Structure**: Strict npm workspaces monorepo separating the React frontend workspace, Express/Prisma backend workspace, and shared TypeScript contracts, started together by a single root command.
- **Confirmed Admin Provisioning**: A pre-seeded IMC municipal operator account (`operator@indoreimc.gov.in`) for immediate demonstration access, paired with a provisioning-key-protected admin setup flow for controlled operator onboarding.
- **Confirmed Demo Simulator Behavior**: Gradual, realistic baseline telemetry (5-second polling interval) enhanced with operator-triggered scenario controls (Normal Operation, Mild Flow Discrepancy, Pressure Spike, Sensor Disconnected, and API Failure) to support live engineering demonstrations.
- **Runtime Port Alignment (AI Studio Preview vs. Local VS Code)**: The backend API server runs on port `5000`, while the frontend workspace runs Vite on port `3000` with `/api` proxying to `http://127.0.0.1:5000` so the AI Studio preview iframe works immediately (configurable to port `5173` via `FRONTEND_PORT` for standalone local VS Code runs).
- **Google Maps Platform Key Provisioning**: Immediately after you approve this plan, the Google Maps Platform setup modal will be presented so you can enable a Maps API key. If you choose not to enable a key yet, the Pipeline Monitoring module preserves its full layout and automatically renders a clearly labelled **Schematic Fallback View** without crashing.

---

### 1. Overview & Core Concept

- **What It Does**: Provides IMC operators with a centralized control console to monitor incoming and outgoing water flow (`L/min`), flow discrepancies (`Inlet − Outlet`), pipeline pressure (`bar`), facility storage utilization, and system connectivity across Indore's water supply network.
- **Target Audience / Persona**: Municipal Administrators and Water Operations Engineers at Indore Municipal Corporation (single-tenant municipal access; no public citizen portals or multi-city switching).
- **Key Value**: Connects geographical infrastructure records (with explicit data provenance) directly to live or simulated ESP32 IoT sensor streams, automated persistence-checked anomaly alerts, and time-integrated conservation metrics while maintaining strict technical honesty between measured, calculated, estimated, and demonstration data.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Authentication & Session Gate**: Operator lands on the IMC Login screen (with email/username, show/hide password toggle, remember-session control, and authorized admin setup modal), authenticates via JWT, and enters the Overview Dashboard.
  2. **Live Operations Overview**: Operator immediately inspects connection telemetry (Live vs. Demo mode, API health, last-received timestamp), four primary metric cards (Inlet Flow, Outlet Flow, Flow Difference, Pipeline Pressure), and the dual-series Inlet vs. Outlet interactive time-series chart with time-range filters and Demo scenario triggers.
  3. **Geographical Pipeline Monitoring**: Operator explores Indore (`22.7196° N, 75.8577° E`) via Google Maps (using `@vis.gl/react-google-maps` and `AdvancedMarkerElement`) or the labelled schematic fallback, filters by facility category, searches facilities, and clicks any node or pipeline polyline to inspect capacity, operational telemetry, upstream/downstream links, provenance badges, and related alerts in a slide-over detail drawer.
  4. **Pressure, Alerts & Diagnostics**: Operator tunes illustrative pressure thresholds in Pressure Monitoring, investigates and updates alert statuses (`New` → `Under Investigation` → `Resolved` / `Dismissed`) with persisted notes in the Alert Centre, and audits hardware/API link health in System Health.
  5. **Conservation Insights & Configuration**: Operator analyzes time-integrated volume (`Sum(Rate × Δt_min)`) and discrepancy trends across `1h`, `24h`, `7d`, and `30d` windows in Water Insights, and manages Demo/Live mode switching, ESP32 endpoint URL, polling intervals, and stale-data timeouts in Settings.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Calm, credible municipal infrastructure operations console—high clarity, zero neon/cyberpunk clutter, restrained single-elevation hairline surfaces, and clean typographic hierarchy.
  - *Color Palette & Tokens*:
    - `--background`: Warm Ivory (`#F4F2EA`) as the dominant neutral canvas (60%)
    - `--surface`: Soft White (`#FFFEFA`) with subtle `#E7E4DB` hairline borders for structural panels (30%)
    - `--sidebar`: Deep Ocean (`#164653`) for the fixed/collapsible left navigation rail and high-contrast headings
    - `--primary`: Ocean Teal (`#168B83`) for active controls, inlet flow series, and primary actions (10%)
    - `--accent-soft`: Seafoam (`#D9ECE6`) for subtle selected states
    - `--warning`: Amber (`#D9A441`) for outlet flow contrast, warnings, and verification-required anomalies
    - `--danger`: Coral Red (`#C64F49`) reserved strictly for critical hardware/system failures (never minor discrepancies)
    - `--muted`: Muted Slate (`#71817E`) for secondary labels and unboxed typographic metadata separators (`·`, `/`)
  - *Typography & Tabular Discipline*: `DM Sans` for interface copy and headings; `IBM Plex Mono` with `tabular-nums` strictly enforced on all sensor values, timestamps, coordinates, and discrepancy calculations to prevent layout jitter during 5-second updates.
  - *Component Styling & Layout*: Collapsible 256px Deep Ocean left sidebar + compact single-row top bar (section title, connection & mode indicator, last data timestamp, operator logout) + responsive main viewport designed cleanly for 1440px laptop screens down to tablet/mobile viewports. Zero decorative pill-badge sandwiches or pulsing status dots on static headings; status colors always paired with explicit text labels (`DEMONSTRATION DATA`, `Possible anomaly – Verification Required`, `LIVE DATA UNAVAILABLE`).

- **Interactive Feedback & Motion**:
  - Subtle `150ms` cubic-bezier transitions on drawer openings, mode switches, and tab filters.
  - Explicit loading skeletons, empty states, and non-silent error banners (e.g., strict `Live Data Unavailable` banner with last valid reading timestamp when Live Mode cannot reach the ESP32 endpoint).

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1 — Strict Live/Demo Isolation & Stale-Data Integrity**:
  - *Chosen Approach*: Mode state (`DEMO` vs. `LIVE`) is persisted in the backend database and enforced at the ingestion/polling layer. Switching to `LIVE` attempts real HTTP fetches from `LIVE_SENSOR_API_URL`, validates strict JSON schema and sanity bounds, and on failure surfaces `Live Data Unavailable` while marking older readings as stale.
  - *Why*: Guarantees simulated demonstration readings are never silently presented as real ESP32 hardware measurements—a core technical honesty requirement.
  - *Alternatives Considered*: Client-side automatic fallback to mock values on fetch error (rejected because it violates hardware telemetry integrity).

- **Decision 2 — Persistence-Window Anomaly Detection vs. Single-Sample Alerts**:
  - *Chosen Approach*: The backend evaluates `Inlet − Outlet` against a configurable flow discrepancy threshold *and* checks whether the condition persists across the configured duration window with fresh, valid timestamps before generating a `"Possible anomaly – Verification Required"` alert.
  - *Why*: Avoids false alarms from transient pressure/flow fluctuations and never prematurely claims confirmed physical pipe leakage.
  - *Alternatives Considered*: Instantaneous threshold alerting on single readings (rejected due to noisy false positives).

- **Decision 3 — Sourced Indore Infrastructure with Explicit Provenance**:
  - *Chosen Approach*: Seed Indore facilities researched from IMC, Indore Smart City, and Madhya Pradesh water supply documentation (Narmada Jalud intake/pumping, Yashwant Sagar Reservoir, Deodharan WTP, Bilawali Tank, Subhash Chowk OHT, Chhatribagh OHT, Jinsi Hat OHT) alongside clearly marked demonstration monitoring nodes, storing `provenanceStatus` (`VERIFIED_PUBLIC`, `APPROXIMATE_PUBLIC`, `DEMONSTRATION`) and `sourceReference` on every facility and pipeline connection.
  - *Why*: Prevents fabrication of municipal asset names, capacities, or coordinates while giving operators a complete, inspectable network topology.
  - *Alternatives Considered*: Generic placeholder nodes or unverified synthetic capacities (rejected per strict data ethics).

- **Decision 4 — SQLite + Prisma ORM in Strict Workspace Monorepo**:
  - *Chosen Approach*: Use Prisma ORM backed by a local SQLite file inside the backend workspace, with clean service/repository boundaries and shared TypeScript contracts.
  - *Why*: Runs immediately in Visual Studio Code on any laptop with zero external database server installation while keeping schema migration to PostgreSQL straightforward.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **System Architecture & Component Hierarchy**:

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                        HydroNexus Monorepo (npm workspaces)                │
├────────────────────────────────────────────────────────────────────────────┤
│  SHARED WORKSPACE                                                          │
│  [ Domain Types ] · [ API Contracts ] · [ Provenance & Alert Enums ]       │
└───────────────────────────────┬──────────────────────────┬─────────────────┘
                                │                          │
┌───────────────────────────────▼──────────┐  ┌────────────▼─────────────────┐
│  FRONTEND WORKSPACE (React + Vite + TW)  │  │  BACKEND WORKSPACE (Express) │
│                                          │  │                              │
│  ┌─ Auth Gate (JWT + Setup Provisioning) │  │  ┌─ Auth Middleware (JWT)    │
│  ├─ App Shell (Sidebar + Top Bar)        │  │  ├─ REST API Controllers     │
│  └─ 8 Functional Modules:                │  │  │  (/auth, /readings,       │
│     • Overview (4 Cards + Live Chart)    │  │  │   /infrastructure,        │
│     • Pipeline Map (Google Maps /        │◄─┼──┤   /alerts, /pressure,     │
│       Schematic Fallback + Drawer)       │  │  │   /insights, /health,     │
│     • Flow Analysis (Detailed History)   │  │  │   /settings)              │
│     • Pressure Monitoring (Thresholds)   │  │  ├─ Anomaly & Alert Engine   │
│     • Alert Centre (Notes & Workflow)    │  │  ├─ Demo Sensor Simulator    │
│     • System Health (Component Audit)    │  │  ├─ ESP32 Live Poller/Ingest │
│     • Water Insights (∫ Rate × Δt)       │  │  └─ Prisma ORM ──► SQLite DB │
│     • Settings (Mode, ESP32 URL, Limits) │  │                              │
└──────────────────────────────────────────┘  └──────────────┬───────────────┘
                                                             │ HTTP / Wi-Fi
                                              ┌──────────────▼───────────────┐
                                              │ Future ESP32 Microcontroller │
                                              │ { inlet, outlet, pressure }  │
                                              └──────────────────────────────┘
```

- **Data Model & State (Prisma + SQLite)**:
  - `MunicipalUser`: Operator credentials (`email`, `username`, `passwordHash` via bcrypt, `fullName`, `designation`), `rememberSession` token validity.
  - `Facility`: Indore water assets (`code`, `name`, `type`, `locality`, `latitude`, `longitude`, `capacityMld`, `storageCapacityLiters`, `currentStorageLiters`, `operationalStatus`, `provenanceStatus`, `sourceReference`, `notes`).
  - `FacilityConnection`: Directed topology edges (`fromFacilityId`, `toFacilityId`, `pipelineDiameterMm`, `verificationStatus` [`VERIFIED_ROUTE`, `APPROXIMATE_ROUTE`, `SIMULATED_LINK`], `sourceReference`).
  - `Sensor`: Hardware/simulated sensors bound to facilities (`sensorCode`, `kind` [`INLET_FLOW`, `OUTLET_FLOW`, `PRESSURE`, `LEVEL`], `isSimulated`).
  - `SensorReading`: Time-series measurements (`facilityId`, `inletFlow`, `outletFlow`, `flowDifference`, `pressureBar`, `dataSource` [`DEMO`, `LIVE_ESP32`], `isValid`, `recordedAt`).
  - `Alert` & `AlertNote`: Backend-generated anomalies (`category`, `severity` [`GREEN`, `AMBER`, `RED`], `status` [`NEW`, `UNDER_INVESTIGATION`, `RESOLVED`, `DISMISSED`], `facilityId`, `readingSnapshot`, `detectedAt`) with ordered operator investigation notes.
  - `MonitoringThreshold` & `ApplicationSetting`: Persistent operational thresholds (pressure min/max, flow anomaly difference threshold, persistence duration, stale-data timeout, `dataMode`, `liveSensorApiUrl`, `pollIntervalMs`).

- **Interactive Component & State Mapping**:
  - *Mode & Simulator Controls*: Top bar / Settings / Overview scenario selector calls `PATCH /api/settings` or `POST /api/readings/simulate-scenario`, immediately adjusting backend simulator state or initiating strict live ESP32 polling; all views reflect `DEMO` vs. `LIVE` provenance badges.
  - *Overview & Flow Charts*: React polling hook (synced to `pollIntervalMs`, default 5000ms) queries `GET /api/readings/latest` and `GET /api/readings/history?range=...`, computing live delta and rendering interactive Recharts dual-line tooltips.
  - *Pipeline Map & Facility Drawer*: Loads `GET /api/infrastructure/facilities` and `GET /api/infrastructure/connections`; category chips and search query filter markers and polylines client-side; clicking a marker fetches `GET /api/infrastructure/facilities/:id` and `GET /api/infrastructure/facilities/:id/connections` to populate the slide-over inspection drawer.
  - *Alert Workflow*: Selecting an alert opens its detail panel; changing status dispatches `PATCH /api/alerts/:id/status` and submitting a note dispatches `POST /api/alerts/:id/notes`, persisting immediately to SQLite.
  - *Water Insights Integration*: Backend computes discrete volume integration across actual timestamp deltas (`Σ(rate × Δt_minutes)`) over `1h`, `24h`, `7d`, and `30d` windows, labeling every aggregate as `Measured`, `Calculated`, `Estimated`, or `Demonstration`.

- **Key Integrations**:
  - **Google Maps JavaScript API (`@vis.gl/react-google-maps`)**: Uses `VITE_GOOGLE_MAPS_API_KEY`, `AdvancedMarkerElement` with custom SVG glyphs per facility type, `Polyline` overlays styled by verification status, and full-city reset (`22.7196, 75.8577`), paired with a resilient schematic map fallback when unconfigured.
  - **ESP32 REST Endpoint**: Accepts/fetches `{ "inlet": number, "outlet": number, "pressure": number }`, validates numeric non-negative sanity limits and freshness, and rejects malformed payloads without corrupting historical state.
