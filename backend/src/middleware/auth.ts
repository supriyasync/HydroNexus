import type { Request, Response, NextFunction } from 'express';
import { verifyAuthToken, type JwtPayload } from '../utils/security.ts';
import { prisma } from '../config/database.ts';

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload & { fullName: string };
}

export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Authentication required. Please sign in as an IMC municipal operator.' });
      return;
    }

    const token = authHeader.slice(7).trim();
    const decoded = verifyAuthToken(token);

    const dbUser = await prisma.municipalUser.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, username: true, fullName: true, isActive: true },
    });

    if (!dbUser || !dbUser.isActive) {
      res.status(401).json({ error: 'Operator session is invalid or inactive.' });
      return;
    }

    req.user = {
      userId: dbUser.id,
      email: dbUser.email,
      username: dbUser.username,
      fullName: dbUser.fullName,
    };
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired municipal session token.' });
  }
}
