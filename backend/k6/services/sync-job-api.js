import http from 'k6/http';
import { BASE_URL, getHeaders } from './api-client.js';

export function executeJob(configPath, useAsyncLaucher = false) {
    const payload = JSON.stringify({
        configPath: configPath,
        useAsyncLaucher: useAsyncLaucher
    });

    return http.post(`${BASE_URL}/sync-job/execute`, payload, {
        headers: getHeaders(),
    });
}

export function getJobExecutions() {
    return http.get(`${BASE_URL}/sync-job/executions`);
}
