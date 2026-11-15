import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../../config/database.ts';
import { requireAuth, type AuthenticatedRequest } from '../../middleware/auth.ts';

const router = Router();

const UpdateStatusSchema = z.object({
  status: z.enum(['NEW', 'UNDER_INVESTIGATION', 'RESOLVED', 'DISMISSED']),
});

const AddNoteSchema = z.object({
  note: z.string().trim().min(2, 'Investigation note cannot be empty.').max(1000),
});

router.get('/', requireAuth, async (req, res) => {
  const statusFilter = req.query.status ? String(req.query.status) : undefined;
  const severityFilter = req.query.severity ? String(req.query.severity) : undefined;

  const alerts = await prisma.alert.findMany({
    where: {
      ...(statusFilter && statusFilter !== 'ALL' ? { status: statusFilter } : {}),
      ...(severityFilter && severityFilter !== 'ALL' ? { severity: severityFilter } : {}),
    },
    include: {
      facility: { select: { name: true } },
      notes: { orderBy: { createdAt: 'desc' } },
    },
    orderBy: { detectedAt: 'desc' },
    take: 100,
  });

  res.json({
    alerts: alerts.map((a) => ({
      ...a,
      facilityName: a.facility?.name ?? null,
      detectedAt: a.detectedAt.toISOString(),
      updatedAt: a.updatedAt.toISOString(),
      notes: a.notes.map((n) => ({
        ...n,
        createdAt: n.createdAt.toISOString(),
      })),
    })),
  });
});

router.get('/:id', requireAuth, async (req, res) => {
  const alert = await prisma.alert.findUnique({
    where: { id: String(req.params.id) },
    include: {
      facility: { select: { name: true } },
      notes: { orderBy: { createdAt: 'desc' } },
    },
  });

  if (!alert) {
    res.status(404).json({ error: 'Alert not found.' });
    return;
  }

  res.json({
    ...alert,
    facilityName: alert.facility?.name ?? null,
    detectedAt: alert.detectedAt.toISOString(),
    updatedAt: alert.updatedAt.toISOString(),
    notes: alert.notes.map((n) => ({
      ...n,
      createdAt: n.createdAt.toISOString(),
    })),
  });
});

router.patch('/:id/status', requireAuth, async (req: AuthenticatedRequest, res) => {
  const parsed = UpdateStatusSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid investigation status value.' });
    return;
  }

  const alertId = String(req.params.id);
  const existing = await prisma.alert.findUnique({ where: { id: alertId } });
  if (!existing) {
    res.status(404).json({ error: 'Alert not found.' });
    return;
  }

  const updated = await prisma.alert.update({
    where: { id: alertId },
    data: { status: parsed.data.status },
    include: {
      facility: { select: { name: true } },
      notes: { orderBy: { createdAt: 'desc' } },
    },
  });

  await prisma.alertNote.create({
    data: {
      alertId,
      authorName: req.user!.fullName,
      note: `Status updated from ${existing.status} to ${parsed.data.status}.`,
    },
  });

  const refreshed = await prisma.alert.findUnique({
    where: { id: alertId },
    include: {
      facility: { select: { name: true } },
      notes: { orderBy: { createdAt: 'desc' } },
    },
  });

  res.json({
    ...refreshed!,
    facilityName: updated.facility?.name ?? null,
    detectedAt: refreshed!.detectedAt.toISOString(),
    updatedAt: refreshed!.updatedAt.toISOString(),
    notes: refreshed!.notes.map((n) => ({
      ...n,
      createdAt: n.createdAt.toISOString(),
    })),
  });
});

router.post('/:id/notes', requireAuth, async (req: AuthenticatedRequest, res) => {
  const parsed = AddNoteSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message || 'Invalid note.' });
    return;
  }

  const alertId = String(req.params.id);
  const existing = await prisma.alert.findUnique({ where: { id: alertId } });
  if (!existing) {
    res.status(404).json({ error: 'Alert not found.' });
    return;
  }

  const note = await prisma.alertNote.create({
    data: {
      alertId,
      authorName: req.user!.fullName,
      note: parsed.data.note,
    },
  });

  res.status(201).json({
    ...note,
    createdAt: note.createdAt.toISOString(),
  });
});

export default router;
