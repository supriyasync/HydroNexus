# Indore Water Infrastructure Sources & Data Provenance

All infrastructure records seeded in HydroNexus distinguish verified public data, approximate public localities, and demonstration-only telemetry nodes.

## 1. Sourced Indore Water Supply Assets

| Code | Facility | Provenance | Coordinates | Public Source Notes |
| --- | --- | --- | --- | --- |
| `IND-RES-01` | Yashwant Sagar Reservoir | `VERIFIED_PUBLIC` | `22.8093° N, 75.6944° E` | Gambhir River reservoir (~26 km west of Indore). Installed ~38–45 MLD; typical seasonal yield ~27–30 MLD. (Sources: Indore Smart City, CSE India, Wikipedia) |
| `IND-RES-02` | Bilawali Tank & Pumping Station | `VERIFIED_PUBLIC` | `22.6640° N, 75.8827° E` | Local surface water source (~5 km south). Installed ~9 MLD; seasonal yield ~4 MLD. (Sources: Indore Smart City, CSE India) |
| `IND-WTP-01` | Deodharan Water Treatment Plant | `APPROXIMATE_PUBLIC` | `22.7745° N, 75.7480° E` | Documented as treating raw water from Yashwant Sagar; exact plant boundary coordinates are approximate. (Source: CSE India) |
| `IND-PMP-01` | Narmada Feeder Terminal — Bijalpur Zone | `APPROXIMATE_PUBLIC` | `22.6658° N, 75.8382° E` | Represents city-entry bulk supply pumped from Jalud on the Narmada River (~415–540 MLD across Phases I–III). Placed at Bijalpur locality for Indore city map framing. (Sources: IMC, Indore Smart City) |
| `IND-OHT-01` | Subhash Chowk Overhead Tank (OHT) | `APPROXIMATE_PUBLIC` | `22.7192° N, 75.8539° E` | Smart City ABD water supply OHT; locality coordinates used; tank volume is illustrative. (Source: Indore Smart City) |
| `IND-OHT-02` | Chhatribagh Overhead Tank (OHT) | `APPROXIMATE_PUBLIC` | `22.7102° N, 75.8501° E` | Smart City ABD water supply OHT; locality coordinates used; tank volume is illustrative. (Source: Indore Smart City) |
| `IND-OHT-03` | Jinsi Hat Overhead Tank | `DEMONSTRATION` | `22.7248° N, 75.8452° E` | Named in Smart City ABD records; exact GPS coordinates and capacities are demonstration placeholders. |
| `IND-NOD-01` | Rajendra Nagar Distribution Junction | `DEMONSTRATION` | `22.6697° N, 75.8290° E` | Demonstration zonal distribution node using Rajendra Nagar locality coordinates. |
| `IND-SEN-01` | Bijli Nagar ESP32 Pilot Sensor Node | `DEMONSTRATION` | `22.7161° N, 75.9175° E` | Primary IoT telemetry pilot node for Demo simulator and future ESP32 JSON ingestion. |

## 2. Thresholds & Conservation Calculations

- All pressure and flow discrepancy thresholds are **illustrative operational defaults** until official IMC engineering limits are provided.
- Water volume totals are computed via discrete trapezoidal integration across actual timestamp intervals (`Sum(Average Flow Rate × Δt_min)`), never by multiplying one instantaneous reading by 24 hours.
- Flow discrepancies trigger **"Possible anomaly – Verification Required"** and never claim confirmed physical pipe leakage without field inspection.
