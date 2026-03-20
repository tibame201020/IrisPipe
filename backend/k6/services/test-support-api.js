import http from 'k6/http';
import { buildApiUrl, getTextHeaders } from './api-client.js';
import { namespaceSql } from '../utils/namespace.js';

export function executeStatement(sql) {
    return http.post(buildApiUrl('/test-support/execute'), namespaceSql(sql), {
        headers: getTextHeaders(),
    });
}

export function querySql(sql) {
    return http.post(buildApiUrl('/test-support/query'), namespaceSql(sql), {
        headers: getTextHeaders(),
    });
}
