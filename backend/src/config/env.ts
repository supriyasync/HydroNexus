import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../..');
const backendDir = path.resolve(__dirname, '../..');

dotenv.config({ path: path.join(rootDir, '.env') });

const defaultDbPath = path.join(backendDir, 'prisma', 'hydronexus.db');

export const env = {
  port: Number(process.env.BACKEND_PORT || 5000),
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || `file:${defaultDbPath}`,
  jwtSecret: process.env.JWT_SECRET || 'hydronexus-imc-dev-jwt-secret-key',
  adminSetupKey: process.env.ADMIN_SETUP_KEY || 'IMC-HYDRONEXUS-SETUP-2026',
  defaultDataMode: (process.env.DATA_MODE === 'LIVE' ? 'LIVE' : 'DEMO') as 'DEMO' | 'LIVE',
  defaultLiveSensorUrl: process.env.LIVE_SENSOR_API_URL || '',
  defaultPollIntervalMs: Number(process.env.POLL_INTERVAL_MS || 5000),
  frontendDistDir: path.join(rootDir, 'frontend', 'dist'),
};

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = env.databaseUrl;
}
