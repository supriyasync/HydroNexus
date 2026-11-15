import { prisma } from '../config/database.ts';
import { env } from '../config/env.ts';
import { hashPassword } from '../utils/security.ts';

export async function seedDatabase(): Promise<void> {
  // 1. Pre-seeded Municipal Operator Account
  const existingAdmin = await prisma.municipalUser.findUnique({
    where: { email: 'operator@indoreimc.gov.in' },
  });

  if (!existingAdmin) {
    const passwordHash = await hashPassword('HydroNexus@IMC2026');
    await prisma.municipalUser.create({
      data: {
        email: 'operator@indoreimc.gov.in',
        username: 'imc_operator',
        passwordHash,
        fullName: 'Arvind Deshmukh',
        designation: 'Executive Engineer (Water Works)',
        department: 'Indore Municipal Corporation (IMC) Water Works',
      },
    });
  }

  // 2. Default Application Settings & Illustrative Thresholds
  await prisma.applicationSetting.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      dataMode: env.defaultDataMode,
      demoScenario: 'NORMAL',
      liveSensorApiUrl: env.defaultLiveSensorUrl,
      pollIntervalMs: env.defaultPollIntervalMs,
      networkContext: 'Indore Municipal Corporation (IMC) — Primary Distribution Monitoring Prototype',
    },
  });

  await prisma.monitoringThreshold.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      pressureMinBar: 1.2,
      pressureMaxBar: 4.5,
      pressureCriticalMaxBar: 6.0,
      flowDiffThresholdLpm: 18.0,
      flowAnomalyPersistenceSec: 15,
      staleTimeoutSec: 20,
      isIllustrative: true,
    },
  });

  // 3. Indore Municipal Water Infrastructure Facilities (with strict provenance)
  const existingFacilities = await prisma.facility.count();
  if (existingFacilities === 0) {
    const facilitiesData = [
      {
        code: 'IND-RES-01',
        name: 'Yashwant Sagar Reservoir',
        type: 'RESERVOIR',
        locality: 'Gambhir River Basin (~26 km West of Indore)',
        latitude: 22.8093,
        longitude: 75.6944,
        capacityMld: 45.0,
        storageCapacityLiters: 45000000,
        currentStorageLiters: 29250000,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'VERIFIED_PUBLIC',
        sourceReference: 'Indore Smart City / CSE India / Wikipedia (22.8093° N, 75.6944° E; installed ~38–45 MLD, seasonal yield ~27–30 MLD)',
        description:
          'Historic dam reservoir on the Gambhir River supplying raw water toward Deodharan WTP. Installed capacity ~38–45 MLD; live tank level telemetry shown here is illustrative demonstration data.',
      },
      {
        code: 'IND-WTP-01',
        name: 'Deodharan Water Treatment Plant',
        type: 'TREATMENT_PLANT',
        locality: 'Deodharan Corridor, West Indore',
        latitude: 22.7745,
        longitude: 75.7480,
        capacityMld: 45.0,
        storageCapacityLiters: 12000000,
        currentStorageLiters: 8800000,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'APPROXIMATE_PUBLIC',
        sourceReference: 'CSE India Urban Water Profile — Indore (treats raw water from Yashwant Sagar; approximate corridor coordinates)',
        description:
          'Treatment facility documented as processing raw water conveyed from Yashwant Sagar Reservoir. Plant coordinates and clear-water sump volume are approximate/illustrative for demonstration.',
      },
      {
        code: 'IND-RES-02',
        name: 'Bilawali Tank & Pumping Station',
        type: 'RESERVOIR',
        locality: 'Bilawali Lake Area, South Indore',
        latitude: 22.6640,
        longitude: 75.8827,
        capacityMld: 9.0,
        storageCapacityLiters: 9000000,
        currentStorageLiters: 4200000,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'VERIFIED_PUBLIC',
        sourceReference: 'Indore Smart City / CSE India (22.6640° N, 75.8827° E; designed ~9 MLD, seasonal ~4 MLD)',
        description:
          'Local surface water storage body serving supplementary IMC supply (~9 MLD installed capacity). Current operational flow telemetry is simulated.',
      },
      {
        code: 'IND-PMP-01',
        name: 'Narmada Feeder Terminal — Bijalpur Zone',
        type: 'PUMPING_STATION',
        locality: 'Bijalpur / Southern Bulk Feeder Entry, Indore',
        latitude: 22.6658,
        longitude: 75.8382,
        capacityMld: 415.0,
        storageCapacityLiters: null,
        currentStorageLiters: null,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'APPROXIMATE_PUBLIC',
        sourceReference: 'IMC / Indore Smart City — Narmada Water Supply Project (bulk intake pumped from Jalud; Bijalpur locality coordinates 22.6658° N, 75.8382° E)',
        description:
          'Representative city-entry monitoring point for bulk Narmada water pumped from Jalud (~415–540 MLD across Phases I–III). Placed at Bijalpur locality for Indore city-level map framing.',
      },
      {
        code: 'IND-OHT-01',
        name: 'Subhash Chowk Overhead Tank (OHT)',
        type: 'STORAGE_TANK',
        locality: 'Subhash Chowk / Rajwada Core Zone, Indore',
        latitude: 22.7192,
        longitude: 75.8539,
        capacityMld: null,
        storageCapacityLiters: 2500000,
        currentStorageLiters: 1850000,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'APPROXIMATE_PUBLIC',
        sourceReference: 'Indore Smart City ABD Water Supply Documentation (Subhash Chowk OHT; locality coordinates 22.7192° N, 75.8539° E; tank volume illustrative)',
        description:
          'Elevated Storage Reservoir / Overhead Tank documented under Smart City Area-Based Development (ABD) for core city gravity distribution. Tank capacity and level figures are illustrative.',
      },
      {
        code: 'IND-OHT-02',
        name: 'Chhatribagh Overhead Tank (OHT)',
        type: 'STORAGE_TANK',
        locality: 'Chhatribagh Zone, Central Indore',
        latitude: 22.7102,
        longitude: 75.8501,
        capacityMld: null,
        storageCapacityLiters: 2000000,
        currentStorageLiters: 1460000,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'APPROXIMATE_PUBLIC',
        sourceReference: 'Indore Smart City ABD Water Supply Documentation (Chhatribagh OHT; locality coordinates 22.7102° N, 75.8501° E; tank volume illustrative)',
        description:
          'Elevated distribution tank documented under Indore Smart City ABD water supply upgrades. Volumetric level figures are demonstration values.',
      },
      {
        code: 'IND-OHT-03',
        name: 'Jinsi Hat Overhead Tank (Demo Marker)',
        type: 'STORAGE_TANK',
        locality: 'Jinsi Hat Area, Indore',
        latitude: 22.7248,
        longitude: 75.8452,
        capacityMld: null,
        storageCapacityLiters: 1800000,
        currentStorageLiters: 1320000,
        operationalStatus: 'MONITORING',
        provenanceStatus: 'DEMONSTRATION',
        sourceReference: 'Indore Smart City ABD Reference (Jinsi Hat OHT named in Smart City docs; exact coordinates & capacity marked as Demonstration)',
        description:
          'Named in Smart City ABD water supply records; exact GPS coordinates and storage figures are modelled as a demonstration record pending municipal GIS survey.',
      },
      {
        code: 'IND-NOD-01',
        name: 'Rajendra Nagar Distribution Junction (Demo)',
        type: 'DISTRIBUTION_NODE',
        locality: 'Rajendra Nagar, South-West Indore',
        latitude: 22.6697,
        longitude: 75.8290,
        capacityMld: null,
        storageCapacityLiters: null,
        currentStorageLiters: null,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'DEMONSTRATION',
        sourceReference: 'HydroNexus Demonstration Record (Rajendra Nagar locality coordinates 22.6697° N, 75.8290° E)',
        description:
          'Demonstration pipeline distribution node representing zonal pressure-balancing and flow-split telemetry in South-West Indore.',
      },
      {
        code: 'IND-SEN-01',
        name: 'Bijli Nagar ESP32 Pilot Sensor Node (Primary)',
        type: 'SENSOR_POINT',
        locality: 'Bijli Nagar / Bicholi Hapsi Road Corridor, East Indore',
        latitude: 22.7161,
        longitude: 75.9175,
        capacityMld: null,
        storageCapacityLiters: null,
        currentStorageLiters: null,
        operationalStatus: 'OPERATIONAL',
        provenanceStatus: 'DEMONSTRATION',
        sourceReference: 'HydroNexus Primary ESP32 Hardware Integration Node (Bijli Nagar locality 22.7161° N, 75.9175° E)',
        description:
          'Primary IoT telemetry target for the ESP32 + Inlet/Outlet Flow + Pressure sensor kit. Receives live hardware JSON payloads in Live Mode or realistic simulated readings in Demo Mode.',
      },
    ];

    const createdMap: Record<string, string> = {};
    for (const f of facilitiesData) {
      const created = await prisma.facility.create({ data: f });
      createdMap[f.code] = created.id;
    }

    // 4. Pipeline Connections (differentiating Verified / Approximate / Simulated)
    const connections = [
      {
        fromFacilityId: createdMap['IND-RES-01'],
        toFacilityId: createdMap['IND-WTP-01'],
        pipelineLabel: 'Yashwant Sagar – Deodharan Raw Water Main',
        diameterMm: 900,
        verificationStatus: 'APPROXIMATE_ROUTE',
        sourceReference: 'CSE India Indore Water Profile (raw water conveyed from Yashwant Sagar to Deodharan WTP; path geometry approximate)',
        notes: 'Illustrative straight-line corridor between verified reservoir and approximate WTP location.',
      },
      {
        fromFacilityId: createdMap['IND-WTP-01'],
        toFacilityId: createdMap['IND-OHT-03'],
        pipelineLabel: 'West Zone Clear Water Feeder (Simulated)',
        diameterMm: 750,
        verificationStatus: 'SIMULATED_LINK',
        sourceReference: 'HydroNexus Demonstration Topology',
        notes: 'Simulated demonstration feeder linking western treatment capacity to central OHT network.',
      },
      {
        fromFacilityId: createdMap['IND-PMP-01'],
        toFacilityId: createdMap['IND-NOD-01'],
        pipelineLabel: 'Narmada Southern Entry Corridor',
        diameterMm: 1200,
        verificationStatus: 'APPROXIMATE_ROUTE',
        sourceReference: 'IMC / Indore Smart City Narmada Transmission Documentation',
        notes: 'Represents bulk entry flow heading north toward central Indore distribution tanks.',
      },
      {
        fromFacilityId: createdMap['IND-NOD-01'],
        toFacilityId: createdMap['IND-OHT-02'],
        pipelineLabel: 'South–Central Trunk Feeder (Simulated)',
        diameterMm: 900,
        verificationStatus: 'SIMULATED_LINK',
        sourceReference: 'HydroNexus Demonstration Topology',
        notes: 'Demonstration connection illustrating distribution feeding into Chhatribagh OHT.',
      },
      {
        fromFacilityId: createdMap['IND-OHT-02'],
        toFacilityId: createdMap['IND-OHT-01'],
        pipelineLabel: 'Smart City ABD Core Interconnect',
        diameterMm: 600,
        verificationStatus: 'APPROXIMATE_ROUTE',
        sourceReference: 'Indore Smart City ABD Water Supply Network Overview',
        notes: 'Approximate core-city distribution interconnection between Chhatribagh and Subhash Chowk OHTs.',
      },
      {
        fromFacilityId: createdMap['IND-RES-02'],
        toFacilityId: createdMap['IND-SEN-01'],
        pipelineLabel: 'East Corridor IoT Pilot Line (Simulated)',
        diameterMm: 450,
        verificationStatus: 'SIMULATED_LINK',
        sourceReference: 'HydroNexus Pilot Sensor Network Demonstration',
        notes: 'Simulated pipeline corridor feeding the Bijli Nagar ESP32 monitoring test point.',
      },
    ];

    for (const c of connections) {
      await prisma.facilityConnection.create({ data: c });
    }

    // 5. Sensors on Pilot Node & Key Facilities
    const primaryFacilityId = createdMap['IND-SEN-01'];
    const sensorSpecs = [
      {
        sensorCode: 'SNS-IND-INLET-01',
        name: 'Primary Inlet Turbine Flow Sensor',
        kind: 'INLET_FLOW',
        unit: 'L/min',
        status: 'DEMO',
        isSimulated: true,
        facilityId: primaryFacilityId,
      },
      {
        sensorCode: 'SNS-IND-OUTLET-01',
        name: 'Primary Outlet Turbine Flow Sensor',
        kind: 'OUTLET_FLOW',
        unit: 'L/min',
        status: 'DEMO',
        isSimulated: true,
        facilityId: primaryFacilityId,
      },
      {
        sensorCode: 'SNS-IND-PRESS-01',
        name: 'Pipeline Pressure Transducer',
        kind: 'PRESSURE',
        unit: 'bar',
        status: 'DEMO',
        isSimulated: true,
        facilityId: primaryFacilityId,
      },
      {
        sensorCode: 'SNS-OHT-SUBHASH-LVL',
        name: 'Subhash Chowk OHT Ultrasonic Level',
        kind: 'LEVEL',
        unit: '%',
        status: 'DEMO',
        isSimulated: true,
        facilityId: createdMap['IND-OHT-01'],
      },
    ];

    const now = new Date();
    for (const s of sensorSpecs) {
      await prisma.sensor.create({
        data: { ...s, lastReadingAt: now },
      });
    }

    // 6. Seed 90 historical simulated readings (past 90 minutes, 1 per minute) for rich charts & insights
    const readingsToInsert = [];
    for (let i = 90; i >= 1; i--) {
      const recordedAt = new Date(now.getTime() - i * 60 * 1000);
      const wave = Math.sin(i / 10) * 6.5;
      const inlet = Number((142.0 + wave + Math.cos(i / 5) * 1.4).toFixed(2));
      const outlet = Number((inlet - (2.4 + Math.sin(i / 7) * 0.9)).toFixed(2));
      const diff = Number((inlet - outlet).toFixed(2));
      const pressure = Number((2.65 + Math.sin(i / 12) * 0.22).toFixed(2));

      readingsToInsert.push({
        facilityId: primaryFacilityId,
        inletFlow: inlet,
        outletFlow: outlet,
        flowDifference: diff,
        pressureBar: pressure,
        dataSource: 'DEMO',
        isValid: true,
        recordedAt,
      });
    }

    await prisma.sensorReading.createMany({ data: readingsToInsert });

    // 7. Initial Alerts (showing realistic historical investigation + normal operational status)
    const alert1 = await prisma.alert.create({
      data: {
        alertCode: 'IMC-ALT-1001',
        category: 'NORMAL_OPERATION',
        severity: 'GREEN',
        status: 'RESOLVED',
        title: 'Baseline Demonstration Telemetry Initialized',
        description:
          'HydroNexus pilot node IND-SEN-01 operating within illustrative normal thresholds under Demonstration Mode.',
        facilityId: primaryFacilityId,
        inletSnapshot: 142.4,
        outletSnapshot: 140.1,
        differenceSnapshot: 2.3,
        pressureSnapshot: 2.68,
        dataSource: 'DEMO',
        detectedAt: new Date(now.getTime() - 75 * 60 * 1000),
      },
    });

    await prisma.alertNote.create({
      data: {
        alertId: alert1.id,
        authorName: 'Arvind Deshmukh',
        note: 'Verified simulated baseline calibration curves for IMC project review.',
      },
    });

    const alert2 = await prisma.alert.create({
      data: {
        alertCode: 'IMC-ALT-1002',
        category: 'POSSIBLE_LEAKAGE_VERIFICATION_REQUIRED',
        severity: 'AMBER',
        status: 'UNDER_INVESTIGATION',
        title: 'Possible anomaly – Verification Required (Subhash Chowk Corridor)',
        description:
          'Demonstration discrepancy event: sustained inlet-outlet difference observed during evening demand transition. Field inspection required before confirming physical loss.',
        facilityId: createdMap['IND-OHT-01'],
        inletSnapshot: 148.5,
        outletSnapshot: 126.2,
        differenceSnapshot: 22.3,
        pressureSnapshot: 2.35,
        dataSource: 'DEMO',
        detectedAt: new Date(now.getTime() - 28 * 60 * 1000),
      },
    });

    await prisma.alertNote.create({
      data: {
        alertId: alert2.id,
        authorName: 'Arvind Deshmukh',
        note: 'Dispatched ward valve-check note; verifying whether scheduled evening distribution draw caused temporary split.',
      },
    });
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => {
      console.log('HydroNexus database seeded successfully.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Failed to seed HydroNexus database:', err);
      process.exit(1);
    });
}
