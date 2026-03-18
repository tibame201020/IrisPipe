import { ApiDateTimeValue } from '../models/sync-pipeline.model';

export function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null ? value as Record<string, unknown> : {};
}

export function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? value as T[] : [];
}

export function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

export function asNullableString(value: unknown) {
  return typeof value === 'string' ? value : null;
}

export function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

export function asNullableNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

export function asBoolean(value: unknown, fallback = false) {
  return typeof value === 'boolean' ? value : fallback;
}

export function asNullableBoolean(value: unknown) {
  return typeof value === 'boolean' ? value : null;
}

export function asApiDateTimeValue(value: unknown): ApiDateTimeValue | null {
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value) && value.every((item) => typeof item === 'number')) {
    return value as number[];
  }

  return null;
}
