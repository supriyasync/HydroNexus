import { createApp } from './app.ts';
import { env } from './config/env.ts';
import { prisma } from './config/database.ts';
import { seedDatabase } from './prisma/seed.ts';
import { startTelemetryScheduler, stopTelemetryScheduler } from './services/telemetryLoop.ts';

async function bootstrap() {
  await prisma.$connect();
  await seedDatabase();

  const app = createApp();
  const server = app.listen(env.port, '0.0.0.0', () => {
    console.log(`HydroNexus Backend listening on http://localhost:${env.port}`);
  });

  await startTelemetryScheduler();

  const shutdown = async () => {
    stopTelemetryScheduler();
    server.close();
    await prisma.$disconnect();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

bootstrap().catch((err) => {
  console.error('Failed to start HydroNexus Backend:', err);
  process.exit(1);
});
