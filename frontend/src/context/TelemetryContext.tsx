import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { readingsApi, settingsApi } from '../services/api/endpoints.ts';
import { useAuth } from './AuthContext.tsx';
import type {
  ApplicationSettingDTO,
  DataMode,
  DemoScenario,
  ReadingsSummaryDTO,
} from '@shared/types/index.ts';

interface TelemetryContextValue {
  summary: ReadingsSummaryDTO | null;
  settings: ApplicationSettingDTO | null;
  apiConnected: boolean;
  isLoading: boolean;
  error: string | null;
  refreshTelemetry: () => Promise<void>;
  switchMode: (mode: DataMode) => Promise<void>;
  triggerScenario: (scenario: DemoScenario) => Promise<void>;
}

const TelemetryContext = createContext<TelemetryContextValue | null>(null);

export function TelemetryProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [summary, setSummary] = useState<ReadingsSummaryDTO | null>(null);
  const [settings, setSettings] = useState<ApplicationSettingDTO | null>(null);
  const [apiConnected, setApiConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshTelemetry = useCallback(async () => {
    if (!user) return;
    try {
      const [sumData, setData] = await Promise.all([
        readingsApi.getSummary(),
        settingsApi.get(),
      ]);
      setSummary(sumData);
      setSettings(setData.settings);
      setApiConnected(true);
      setError(null);
    } catch (err) {
      setApiConnected(false);
      setError(err instanceof Error ? err.message : 'Unable to reach HydroNexus backend API.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      setSummary(null);
      setSettings(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    refreshTelemetry();

    const intervalMs = Math.max(2000, settings?.pollIntervalMs ?? 5000);
    const timer = setInterval(refreshTelemetry, intervalMs);
    return () => clearInterval(timer);
  }, [user, refreshTelemetry, settings?.pollIntervalMs]);

  const switchMode = useCallback(
    async (mode: DataMode) => {
      await settingsApi.update({ dataMode: mode });
      await refreshTelemetry();
    },
    [refreshTelemetry]
  );

  const triggerScenario = useCallback(
    async (scenario: DemoScenario) => {
      await readingsApi.triggerDemoScenario(scenario);
      await refreshTelemetry();
    },
    [refreshTelemetry]
  );

  return (
    <TelemetryContext.Provider
      value={{
        summary,
        settings,
        apiConnected,
        isLoading,
        error,
        refreshTelemetry,
        switchMode,
        triggerScenario,
      }}
    >
      {children}
    </TelemetryContext.Provider>
  );
}

export function useTelemetry(): TelemetryContextValue {
  const ctx = useContext(TelemetryContext);
  if (!ctx) throw new Error('useTelemetry must be used inside TelemetryProvider');
  return ctx;
}
