# HydroNexus — IMC Intelligent Water Management Platform

**Exclusive Municipal Deployment:** Indore Municipal Corporation (IMC), Madhya Pradesh, India.

HydroNexus connects Indore's geographical water infrastructure records, real-time or simulated IoT sensor telemetry (inlet flow, outlet flow, and pipeline pressure), persistence-checked anomaly alerts, and time-integrated conservation analytics into a single modular TypeScript monorepo.

---

## Monorepo Architecture

- `frontend/` — React 19, Vite, TypeScript, Tailwind CSS v4, Recharts, Lucide React, `@vis.gl/react-google-maps`
- `backend/` — Node.js, Express, TypeScript, Prisma ORM (SQLite), JWT + bcryptjs, Zod validation, Demo Simulator, ESP32 REST integration
- `shared/` — Shared TypeScript domain contracts, types, and Indore constants
- `docs/` — Public infrastructure source provenance documentation

---

## Local Setup in Visual Studio Code

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```bash
cp .env.example .env
```

Key variables:
- `PORT=5000` (Backend Express API port)
- `FRONTEND_PORT=3000` (Default for preview; use `npm run dev:local` for port `5173`)
- `DATABASE_URL="file:./hydronexus.db"`
- `JWT_SECRET` & `ADMIN_SETUP_KEY`
- `VITE_GOOGLE_MAPS_API_KEY` (Optional; Pipeline Monitoring provides an interactive Schematic Fallback View if omitted)

### 3. Initialize & Seed SQLite Database (Prisma)

```bash
npm run db:setup
```

### 4. Run Frontend & Backend Together

- Default unified dev server (`backend` on `:5000`, `frontend` on `:3000` with `/api` proxy):
  ```bash
  npm run dev
  ```
- Local VS Code standard ports (`backend` on `:5000`, `frontend` on `:5173`):
  ```bash
  npm run dev:local
  ```

Backend health check: `http://localhost:5000/api/health`

---

## Pre-Seeded Municipal Operator Credentials

- **Email / Username:** `operator@indoreimc.gov.in` / `imc_operator`
- **Password:** `HydroNexus@IMC2026`
- **Provisioning Key (`ADMIN_SETUP_KEY`):** `IMC-HYDRONEXUS-SETUP-2026`

---

## Google Maps API Configuration

1. Create or select a Google Cloud project with billing enabled.
2. Enable **Maps JavaScript API**.
3. Create an API key and restrict it to:
   - **Application restrictions:** HTTP referrers (`http://localhost:5173/*`, `http://localhost:3000/*`, and your deployed domain).
   - **API restrictions:** Maps JavaScript API.
4. Set `VITE_GOOGLE_MAPS_API_KEY` in `.env` and restart the dev server.

If no key is configured, HydroNexus never crashes and renders the labelled **Schematic Topology Fallback View** using Indore coordinates.

---

## ESP32 Hardware Integration Contract

Expected JSON payload (both for `LIVE_SENSOR_API_URL` polling and `POST /api/readings`):

```json
{
  "inlet": 146.5,
  "outlet": 144.2,
  "pressure": 2.72
}
```

Switching to **Live Mode** queries the configured endpoint strictly. If unreachable or invalid, the dashboard displays **Live Data Unavailable** and never substitutes simulated readings.

---

## Troubleshooting

- **Prisma client not generated:** Run `npm --workspace=backend run prisma:generate`.
- **Reset local SQLite database:** Delete `backend/prisma/hydronexus.db` and run `npm run db:setup`.
- **Maps quota or referrer error:** Check `VITE_GOOGLE_MAPS_API_KEY` HTTP referrer restrictions in Google Cloud Console; the Schematic Fallback View remains available.
