import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../../config/database.ts';
import { env } from '../../config/env.ts';
import { hashPassword, signAuthToken, verifyPassword } from '../../utils/security.ts';
import { requireAuth, type AuthenticatedRequest } from '../../middleware/auth.ts';

const router = Router();

const LoginSchema = z.object({
  identifier: z.string().trim().min(2, 'Email or username is required.'),
  password: z.string().min(1, 'Password is required.'),
  rememberSession: z.boolean().optional().default(false),
});

const SetupAdminSchema = z.object({
  setupKey: z.string().min(1, 'Provisioning key is required.'),
  email: z.string().email('Valid municipal email is required.'),
  username: z.string().trim().min(3, 'Username must be at least 3 characters.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  fullName: z.string().trim().min(2, 'Full name is required.'),
  designation: z.string().trim().optional().default('Municipal Water Operator'),
});

router.post('/login', async (req, res) => {
  const parsed = LoginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message || 'Invalid login input.' });
    return;
  }

  const { identifier, password, rememberSession } = parsed.data;
  const user = await prisma.municipalUser.findFirst({
    where: {
      OR: [{ email: identifier.toLowerCase() }, { username: identifier }],
    },
  });

  if (!user || !user.isActive) {
    res.status(401).json({ error: 'Invalid municipal operator credentials.' });
    return;
  }

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) {
    res.status(401).json({ error: 'Invalid municipal operator credentials.' });
    return;
  }

  const token = signAuthToken(
    { userId: user.id, email: user.email, username: user.username },
    rememberSession
  );

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      fullName: user.fullName,
      designation: user.designation,
      department: user.department,
      createdAt: user.createdAt.toISOString(),
    },
  });
});

router.post('/setup', async (req, res) => {
  const parsed = SetupAdminSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message || 'Invalid setup input.' });
    return;
  }

  const { setupKey, email, username, password, fullName, designation } = parsed.data;
  if (setupKey !== env.adminSetupKey) {
    res.status(403).json({
      error: 'Invalid municipal provisioning key. Contact IMC system administration.',
    });
    return;
  }

  const existing = await prisma.municipalUser.findFirst({
    where: { OR: [{ email: email.toLowerCase() }, { username }] },
  });
  if (existing) {
    res.status(409).json({ error: 'An operator with this email or username already exists.' });
    return;
  }

  const passwordHash = await hashPassword(password);
  const created = await prisma.municipalUser.create({
    data: {
      email: email.toLowerCase(),
      username,
      passwordHash,
      fullName,
      designation,
    },
  });

  const token = signAuthToken({
    userId: created.id,
    email: created.email,
    username: created.username,
  });

  res.status(201).json({
    token,
    user: {
      id: created.id,
      email: created.email,
      username: created.username,
      fullName: created.fullName,
      designation: created.designation,
      department: created.department,
      createdAt: created.createdAt.toISOString(),
    },
  });
});

router.post('/logout', (_req, res) => {
  res.json({ ok: true, message: 'Municipal operator session terminated.' });
});

router.get('/me', requireAuth, async (req: AuthenticatedRequest, res) => {
  const user = await prisma.municipalUser.findUnique({
    where: { id: req.user!.userId },
    select: {
      id: true,
      email: true,
      username: true,
      fullName: true,
      designation: true,
      department: true,
      createdAt: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: 'Operator account not found.' });
    return;
  }

  res.json({
    ...user,
    createdAt: user.createdAt.toISOString(),
  });
});

export default router;
