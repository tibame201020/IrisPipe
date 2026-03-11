import http from 'k6/http';
import { buildApiUrl, getTextHeaders } from './api-client.js';

export function executeStatement(sql) {
    return http.post(buildApiUrl('/test-support/execute'), sql, {
        headers: getTextHeaders(),
    });
}

export function querySql(sql) {
    return http.post(buildApiUrl('/test-support/query'), sql, {
        headers: getTextHeaders(),
    });
}
