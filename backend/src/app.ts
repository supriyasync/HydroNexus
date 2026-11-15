import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { env } from './config/env.ts';
import authRoutes from './modules/authentication/authRoutes.ts';
import readingsRoutes from './modules/readings/readingsRoutes.ts';
import infrastructureRoutes from './modules/infrastructure/infrastructureRoutes.ts';
import alertsRoutes from './modules/alerts/alertsRoutes.ts';
import pressureRoutes from './modules/pressure/pressureRoutes.ts';
import insightsRoutes from './modules/insights/insightsRoutes.ts';
import healthRoutes from './modules/systemHealth/healthRoutes.ts';
import settingsRoutes from './modules/settings/settingsRoutes.ts';

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use(express.json({ limit: '1mb' }));

  app.use('/api/auth', authRoutes);
  app.use('/api/readings', readingsRoutes);
  app.use('/api/infrastructure', infrastructureRoutes);
  app.use('/api/alerts', alertsRoutes);
  app.use('/api/pressure', pressureRoutes);
  app.use('/api/insights', insightsRoutes);
  app.use('/api/settings', settingsRoutes);
  app.use('/api', healthRoutes);

  app.use('/api/*', (_req, res) => {
    res.status(404).json({ error: 'HydroNexus API endpoint not found.' });
  });

  if (env.nodeEnv === 'production' && fs.existsSync(env.frontendDistDir)) {
    app.use(express.static(env.frontendDistDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(env.frontendDistDir, 'index.html'));
    });
  }

  app.use(
    (
      err: Error,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      console.error('Unhandled backend error:', err);
      res.status(500).json({ error: 'Internal municipal monitoring server error.' });
    }
  );

  return app;
}
