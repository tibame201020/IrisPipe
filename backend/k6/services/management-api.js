import http from 'k6/http';
import { BASE_URL } from './api-client.js';

function buildManagementUrl(path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const managementBaseUrl = BASE_URL.replace(/\/api\/v1\/?$/, '');
    return `${managementBaseUrl}${normalizedPath}`;
}

export function getActuatorHealth() {
    return http.get(buildManagementUrl('/actuator/health'));
}

export function getActuatorMetrics() {
    return http.get(buildManagementUrl('/actuator/metrics'));
}

export function getActuatorMetric(metricName) {
    return http.get(buildManagementUrl(`/actuator/metrics/${metricName}`));
}

export function getActuatorPrometheus() {
    return http.get(buildManagementUrl('/actuator/prometheus'));
}
