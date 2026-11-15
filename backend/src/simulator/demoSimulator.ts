import type { DemoScenario } from '@shared/types/index.ts';

interface SimulatorState {
  inlet: number;
  outlet: number;
  pressure: number;
  step: number;
}

const state: SimulatorState = {
  inlet: 144.2,
  outlet: 141.6,
  pressure: 2.68,
  step: 0,
};

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function moveToward(current: number, target: number, maxDelta: number): number {
  const diff = target - current;
  if (Math.abs(diff) <= maxDelta) return target;
  return current + Math.sign(diff) * maxDelta;
}

export interface SimulatedSample {
  ok: boolean;
  inlet?: number;
  outlet?: number;
  pressure?: number;
  errorType?: 'SENSOR_DISCONNECTED' | 'API_FAILURE';
  errorMessage?: string;
}

export function generateDemoSample(scenario: DemoScenario): SimulatedSample {
  state.step += 1;
  const microDrift = Math.sin(state.step * 0.35) * 0.8 + Math.cos(state.step * 0.17) * 0.4;

  if (scenario === 'SENSOR_DISCONNECTED') {
    return {
      ok: false,
      errorType: 'SENSOR_DISCONNECTED',
      errorMessage: 'Simulated sensor timeout: Pilot flow/pressure transducers not responding.',
    };
  }

  if (scenario === 'API_FAILURE') {
    return {
      ok: false,
      errorType: 'API_FAILURE',
      errorMessage: 'Simulated telemetry gateway failure: Unable to reach sensor ingestion endpoint.',
    };
  }

  const targetInlet = 145.0 + Math.sin(state.step * 0.12) * 5.0 + microDrift;
  let targetGap = 2.4 + Math.sin(state.step * 0.2) * 0.5;
  let targetPressure = 2.65 + Math.sin(state.step * 0.15) * 0.18;

  if (scenario === 'MILD_DISCREPANCY') {
    targetGap = 24.5 + Math.sin(state.step * 0.25) * 1.5;
    targetPressure = 2.28 + Math.sin(state.step * 0.2) * 0.08;
  } else if (scenario === 'PRESSURE_SPIKE') {
    targetPressure = 5.15 + Math.sin(state.step * 0.25) * 0.15;
  } else if (scenario === 'PRESSURE_DROP') {
    targetPressure = 0.86 + Math.sin(state.step * 0.25) * 0.06;
  }

  state.inlet = Number(clamp(moveToward(state.inlet, targetInlet, 2.2), 40, 500).toFixed(2));
  const desiredOutlet = Math.max(0, state.inlet - targetGap);
  state.outlet = Number(clamp(moveToward(state.outlet, desiredOutlet, 4.5), 0, state.inlet).toFixed(2));
  state.pressure = Number(clamp(moveToward(state.pressure, targetPressure, 0.45), 0.1, 10.0).toFixed(2));

  return {
    ok: true,
    inlet: state.inlet,
    outlet: state.outlet,
    pressure: state.pressure,
  };
}
