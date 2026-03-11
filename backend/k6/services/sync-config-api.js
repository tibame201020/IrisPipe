import http from 'k6/http';
import { buildApiUrl, getMultipartHeaders } from './api-client.js';

function buildMultipartPayload(filePath, fileName, fileContent) {
    const boundary = `----IrisPipeK6Boundary${Math.random().toString(16).slice(2)}`;
    const parts = [
        `--${boundary}`,
        'Content-Disposition: form-data; name="path"',
        '',
        filePath,
        `--${boundary}`,
        `Content-Disposition: form-data; name="file"; filename="${fileName}"`,
        'Content-Type: application/x-yaml',
        '',
        fileContent,
        `--${boundary}--`,
    ];

    return {
        boundary,
        body: parts.join('\r\n'),
    };
}

function requestConfig(method, filePath, fileName, fileContent) {
    const { boundary, body } = buildMultipartPayload(filePath, fileName, fileContent);

    return http.request(method, buildApiUrl('/sync-config'), body, {
        headers: getMultipartHeaders(boundary),
    });
}

export function createConfig(filePath, fileName, fileContent) {
    return requestConfig('POST', filePath, fileName, fileContent);
}

export function updateConfig(filePath, fileName, fileContent) {
    return requestConfig('PUT', filePath, fileName, fileContent);
}

export function patchConfig(filePath, fileName, fileContent) {
    return requestConfig('PATCH', filePath, fileName, fileContent);
}

export function getConfigDetail(filePath) {
    return http.get(buildApiUrl('/sync-config', { path: filePath }));
}

export function listConfigs() {
    return http.get(buildApiUrl('/sync-config'));
}

export function deleteConfig(filePath) {
    return http.del(buildApiUrl('/sync-config', { path: filePath }));
}
