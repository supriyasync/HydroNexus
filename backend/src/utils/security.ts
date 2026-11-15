import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.ts';

export interface JwtPayload {
  userId: string;
  email: string;
  username: string;
}

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
}

export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

export function signAuthToken(payload: JwtPayload, rememberSession = false): string {
  return jwt.sign(payload, env.jwtSecret, {
    expiresIn: rememberSession ? '7d' : '12h',
  });
}

export function verifyAuthToken(token: string): JwtPayload {
  return jwt.verify(token, env.jwtSecret) as JwtPayload;
}
