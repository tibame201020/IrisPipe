import http from 'k6/http';
import { BASE_URL } from './api-client.js';

export function executeSql(sql) {
    return http.post(`${BASE_URL}/test-support/execute`, sql, {
        headers: { 'Content-Type': 'text/plain' },
    });
}

export function querySql(sql) {
    return http.post(`${BASE_URL}/test-support/query`, sql, {
        headers: { 'Content-Type': 'text/plain' },
    });
}
