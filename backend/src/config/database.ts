import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PrismaClient as PrismaClientType } from '../generated/prisma/index.js';
import './env.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const candidatePaths = [
  path.resolve(__dirname, '../generated/prisma/index.js'),
  path.resolve(__dirname, '../src/generated/prisma/index.js'),
];
const prismaClientEntry = candidatePaths.find((p) => fs.existsSync(p));
if (!prismaClientEntry) {
  throw new Error(
    `Generated Prisma Client not found. Run "npm --workspace=backend run prisma:generate". Checked: ${candidatePaths.join(', ')}`
  );
}

const { PrismaClient } = require(prismaClientEntry) as {
  PrismaClient: new (options?: ConstructorParameters<typeof PrismaClientType>[0]) => PrismaClientType;
};

declare global {
  var __hydroPrisma: PrismaClientType | undefined;
}

export const prisma: PrismaClientType =
  globalThis.__hydroPrisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.__hydroPrisma = prisma;
}
