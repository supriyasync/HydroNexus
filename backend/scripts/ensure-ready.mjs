import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendDir = path.resolve(__dirname, '..');

const prismaEntry = path.join(backendDir, 'src', 'generated', 'prisma', 'index.js');
const dbFile = path.join(backendDir, 'prisma', 'hydronexus.db');

if (!fs.existsSync(prismaEntry)) {
  execSync('npx prisma generate --schema=prisma/schema.prisma', {
    cwd: backendDir,
    stdio: 'inherit',
  });
}

if (!fs.existsSync(dbFile)) {
  execSync('npx prisma db push --schema=prisma/schema.prisma --skip-generate', {
    cwd: backendDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: process.env.DATABASE_URL || 'file:./hydronexus.db',
    },
  });
}
