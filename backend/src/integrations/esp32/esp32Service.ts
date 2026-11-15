import { z } from 'zod';
import { SANITY_LIMITS } from '@shared/constants/index.ts';

export const Esp32PayloadSchema = z.object({
  inlet: z.number().finite().min(0).max(SANITY_LIMITS.MAX_FLOW_LPM),
  outlet: z.number().finite().min(0).max(SANITY_LIMITS.MAX_FLOW_LPM),
  pressure: z.number().finite().min(0).max(SANITY_LIMITS.MAX_PRESSURE_BAR),
});

export type Esp32Payload = z.infer<typeof Esp32PayloadSchema>;

export interface LiveFetchResult {
  ok: boolean;
  payload?: Esp32Payload;
  errorType?: 'API_CONNECTION_LOST' | 'INVALID_SENSOR_READINGS' | 'ESP32_NOT_CONFIGURED';
  errorMessage?: string;
}

export function validateEsp32Payload(raw: unknown): {
  valid: boolean;
  data?: Esp32Payload;
  error?: string;
} {
  const parsed = Esp32PayloadSchema.safeParse(raw);
  if (!parsed.success) {
    const issueMsg = parsed.error.issues
      .map((i) => `${i.path.join('.') || 'payload'}: ${i.message}`)
      .join('; ');
    return { valid: false, error: `Invalid ESP32 sensor payload (${issueMsg})` };
  }
  return { valid: true, data: parsed.data };
}

export async function fetchFromLiveEsp32Endpoint(url: string): Promise<LiveFetchResult> {
  const trimmed = url.trim();
  if (!trimmed) {
    return {
      ok: false,
      errorType: 'ESP32_NOT_CONFIGURED',
      errorMessage: 'LIVE_SENSOR_API_URL is not configured. Set the ESP32 endpoint URL in Settings.',
    };
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(trimmed);
  } catch {
    return {
      ok: false,
      errorType: 'API_CONNECTION_LOST',
      errorMessage: 'Configured Live Sensor API URL is not a valid HTTP/HTTPS URL.',
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);

  try {
    const response = await fetch(parsedUrl.toString(), {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });

    if (!response.ok) {
      return {
        ok: false,
        errorType: 'API_CONNECTION_LOST',
        errorMessage: `Live ESP32 endpoint returned HTTP ${response.status} ${response.statusText}.`,
      };
    }

    const json = await response.json();
    const validation = validateEsp32Payload(json);
    if (!validation.valid || !validation.data) {
      return {
        ok: false,
        errorType: 'INVALID_SENSOR_READINGS',
        errorMessage: validation.error || 'Malformed JSON from ESP32 endpoint.',
      };
    }

    return { ok: true, payload: validation.data };
  } catch (err) {
    const message =
      err instanceof Error && err.name === 'AbortError'
        ? 'Connection to ESP32 sensor endpoint timed out after 3.5 seconds.'
        : err instanceof Error
          ? `Unable to reach ESP32 sensor endpoint: ${err.message}`
          : 'Unknown network error contacting ESP32 sensor endpoint.';

    return {
      ok: false,
      errorType: 'API_CONNECTION_LOST',
      errorMessage: message,
    };
  } finally {
    clearTimeout(timeout);
  }
}
