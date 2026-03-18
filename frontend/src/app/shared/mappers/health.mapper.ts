import { HealthComponentInfo, HealthInfo } from '../models/health.model';
import { asArray, asRecord, asString } from './normalize';

function mapHealthComponentInfo(value: unknown): HealthComponentInfo {
  const source = asRecord(value);
  const componentEntries = Object.entries(asRecord(source['components']));

  return {
    status: asString(source['status'], 'UNKNOWN'),
    components: componentEntries.length > 0
      ? Object.fromEntries(componentEntries.map(([key, component]) => [key, mapHealthComponentInfo(component)]))
      : undefined,
    details: Object.keys(asRecord(source['details'])).length > 0 ? asRecord(source['details']) : undefined,
  };
}

export function mapHealthInfo(value: unknown): HealthInfo {
  const source = asRecord(value);
  const base = mapHealthComponentInfo(source);

  return {
    ...base,
    groups: asArray<string>(source['groups']).filter((group) => typeof group === 'string'),
  };
}
