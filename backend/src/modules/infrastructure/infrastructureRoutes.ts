import { Router } from 'express';
import { prisma } from '../../config/database.ts';
import { requireAuth } from '../../middleware/auth.ts';
import type { FacilityConnectionDTO, HealthStatus } from '@shared/types/index.ts';

const router = Router();

function formatConnection(c: {
  id: string;
  fromFacilityId: string;
  toFacilityId: string;
  pipelineLabel: string;
  diameterMm: number | null;
  verificationStatus: string;
  sourceReference: string;
  notes: string | null;
  fromFacility: { name: string; latitude: number; longitude: number };
  toFacility: { name: string; latitude: number; longitude: number };
}): FacilityConnectionDTO {
  return {
    id: c.id,
    fromFacilityId: c.fromFacilityId,
    toFacilityId: c.toFacilityId,
    fromFacilityName: c.fromFacility.name,
    toFacilityName: c.toFacility.name,
    fromLat: c.fromFacility.latitude,
    fromLng: c.fromFacility.longitude,
    toLat: c.toFacility.latitude,
    toLng: c.toFacility.longitude,
    pipelineLabel: c.pipelineLabel,
    diameterMm: c.diameterMm,
    verificationStatus: c.verificationStatus as FacilityConnectionDTO['verificationStatus'],
    sourceReference: c.sourceReference,
    notes: c.notes,
  };
}

router.get('/facilities', requireAuth, async (_req, res) => {
  const [facilities, settings, thresholds] = await Promise.all([
    prisma.facility.findMany({
      include: {
        sensors: true,
        alerts: {
          where: { status: { in: ['NEW', 'UNDER_INVESTIGATION'] } },
          select: { id: true },
        },
      },
      orderBy: { code: 'asc' },
    }),
    prisma.applicationSetting.findUnique({ where: { id: 'default' } }),
    prisma.monitoringThreshold.findUnique({ where: { id: 'default' } }),
  ]);

  const targetSource = settings?.dataMode === 'LIVE' ? 'LIVE_ESP32' : 'DEMO';
  const staleSec = thresholds?.staleTimeoutSec ?? 20;

  const result = await Promise.all(
    facilities.map(async (f) => {
      const latestReading = await prisma.sensorReading.findFirst({
        where: { facilityId: f.id, dataSource: targetSource, isValid: true },
        orderBy: { recordedAt: 'desc' },
      });

      const isStale = latestReading
        ? (Date.now() - latestReading.recordedAt.getTime()) / 1000 > staleSec
        : true;

      return {
        id: f.id,
        code: f.code,
        name: f.name,
        type: f.type,
        locality: f.locality,
        latitude: f.latitude,
        longitude: f.longitude,
        capacityMld: f.capacityMld,
        storageCapacityLiters: f.storageCapacityLiters,
        currentStorageLiters: f.currentStorageLiters,
        operationalStatus: f.operationalStatus,
        provenanceStatus: f.provenanceStatus,
        sourceReference: f.sourceReference,
        description: f.description,
        sensors: f.sensors.map((s) => ({
          id: s.id,
          sensorCode: s.sensorCode,
          name: s.name,
          kind: s.kind,
          unit: s.unit,
          status: s.status as HealthStatus,
          isSimulated: s.isSimulated,
          lastReadingAt: s.lastReadingAt?.toISOString() ?? null,
        })),
        latestReading: latestReading
          ? {
              id: latestReading.id,
              facilityId: latestReading.facilityId,
              facilityName: f.name,
              inletFlow: latestReading.inletFlow,
              outletFlow: latestReading.outletFlow,
              flowDifference: latestReading.flowDifference,
              pressureBar: latestReading.pressureBar,
              dataSource: latestReading.dataSource,
              valueLabel:
                latestReading.dataSource === 'DEMO' ? 'DEMONSTRATION' : 'MEASURED',
              isValid: latestReading.isValid,
              isStale,
              recordedAt: latestReading.recordedAt.toISOString(),
            }
          : null,
        activeAlertsCount: f.alerts.length,
      };
    })
  );

  res.json({ facilities: result });
});

router.get('/facilities/:id', requireAuth, async (req, res) => {
  const facilityId = String(req.params.id);
  const [facility, settings, thresholds] = await Promise.all([
    prisma.facility.findUnique({
      where: { id: facilityId },
      include: {
        sensors: true,
        alerts: {
          include: { notes: { orderBy: { createdAt: 'desc' } } },
          orderBy: { detectedAt: 'desc' },
          take: 10,
        },
        outgoingConnections: {
          include: {
            fromFacility: { select: { name: true, latitude: true, longitude: true } },
            toFacility: { select: { name: true, latitude: true, longitude: true } },
          },
        },
        incomingConnections: {
          include: {
            fromFacility: { select: { name: true, latitude: true, longitude: true } },
            toFacility: { select: { name: true, latitude: true, longitude: true } },
          },
        },
      },
    }),
    prisma.applicationSetting.findUnique({ where: { id: 'default' } }),
    prisma.monitoringThreshold.findUnique({ where: { id: 'default' } }),
  ]);

  if (!facility) {
    res.status(404).json({ error: 'Facility not found.' });
    return;
  }

  const targetSource = settings?.dataMode === 'LIVE' ? 'LIVE_ESP32' : 'DEMO';
  const staleSec = thresholds?.staleTimeoutSec ?? 20;

  const recentRows = await prisma.sensorReading.findMany({
    where: { facilityId: facility.id, dataSource: targetSource, isValid: true },
    orderBy: { recordedAt: 'desc' },
    take: 24,
  });

  const recentReadings = recentRows.reverse().map((r) => ({
    id: r.id,
    facilityId: r.facilityId,
    facilityName: facility.name,
    inletFlow: r.inletFlow,
    outletFlow: r.outletFlow,
    flowDifference: r.flowDifference,
    pressureBar: r.pressureBar,
    dataSource: r.dataSource === 'LIVE_ESP32' ? 'LIVE_ESP32' : 'DEMO',
    valueLabel: r.dataSource === 'DEMO' ? 'DEMONSTRATION' : 'MEASURED',
    isValid: r.isValid,
    isStale: (Date.now() - r.recordedAt.getTime()) / 1000 > staleSec,
    recordedAt: r.recordedAt.toISOString(),
  }));

  res.json({
    id: facility.id,
    code: facility.code,
    name: facility.name,
    type: facility.type,
    locality: facility.locality,
    latitude: facility.latitude,
    longitude: facility.longitude,
    capacityMld: facility.capacityMld,
    storageCapacityLiters: facility.storageCapacityLiters,
    currentStorageLiters: facility.currentStorageLiters,
    operationalStatus: facility.operationalStatus,
    provenanceStatus: facility.provenanceStatus,
    sourceReference: facility.sourceReference,
    description: facility.description,
    sensors: facility.sensors.map((s) => ({
      id: s.id,
      sensorCode: s.sensorCode,
      name: s.name,
      kind: s.kind,
      unit: s.unit,
      status: s.status as HealthStatus,
      isSimulated: s.isSimulated,
      lastReadingAt: s.lastReadingAt?.toISOString() ?? null,
    })),
    latestReading: recentReadings[recentReadings.length - 1] ?? null,
    activeAlertsCount: facility.alerts.filter((a) =>
      ['NEW', 'UNDER_INVESTIGATION'].includes(a.status)
    ).length,
    upstreamConnections: facility.incomingConnections.map(formatConnection),
    downstreamConnections: facility.outgoingConnections.map(formatConnection),
    recentReadings,
    relatedAlerts: facility.alerts.map((a) => ({
      ...a,
      facilityName: facility.name,
      detectedAt: a.detectedAt.toISOString(),
      updatedAt: a.updatedAt.toISOString(),
      notes: a.notes.map((n) => ({
        ...n,
        createdAt: n.createdAt.toISOString(),
      })),
    })),
  });
});

router.get('/facilities/:id/connections', requireAuth, async (req, res) => {
  const facilityId = String(req.params.id);
  const connections = await prisma.facilityConnection.findMany({
    where: { OR: [{ fromFacilityId: facilityId }, { toFacilityId: facilityId }] },
    include: {
      fromFacility: { select: { name: true, latitude: true, longitude: true } },
      toFacility: { select: { name: true, latitude: true, longitude: true } },
    },
  });

  res.json({ connections: connections.map(formatConnection) });
});

router.get('/connections', requireAuth, async (_req, res) => {
  const connections = await prisma.facilityConnection.findMany({
    include: {
      fromFacility: { select: { name: true, latitude: true, longitude: true } },
      toFacility: { select: { name: true, latitude: true, longitude: true } },
    },
  });

  res.json({ connections: connections.map(formatConnection) });
});

router.get('/summary', requireAuth, async (_req, res) => {
  const [totalFacilities, totalConnections, verifiedCount, approxCount, demoCount] =
    await Promise.all([
      prisma.facility.count(),
      prisma.facilityConnection.count(),
      prisma.facility.count({ where: { provenanceStatus: 'VERIFIED_PUBLIC' } }),
      prisma.facility.count({ where: { provenanceStatus: 'APPROXIMATE_PUBLIC' } }),
      prisma.facility.count({ where: { provenanceStatus: 'DEMONSTRATION' } }),
    ]);

  res.json({
    totalFacilities,
    totalConnections,
    provenanceBreakdown: {
      verifiedPublic: verifiedCount,
      approximatePublic: approxCount,
      demonstration: demoCount,
    },
  });
});

export default router;
