export interface HealthComponentInfo {
  status: string;
  components?: Record<string, HealthComponentInfo>;
  details?: Record<string, unknown>;
}

export interface HealthInfo extends HealthComponentInfo {
  groups?: string[];
}
