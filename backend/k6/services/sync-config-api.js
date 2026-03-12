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

function requestConfig(method, path, filePath, fileName, fileContent) {
    const { boundary, body } = buildMultipartPayload(filePath, fileName, fileContent);

    return http.request(method, buildApiUrl(path), body, {
        headers: getMultipartHeaders(boundary),
    });
}

export function createConfig(filePath, fileName, fileContent) {
    return requestConfig('POST', '/sync-config', filePath, fileName, fileContent);
}

export function updateConfig(pipelineId, filePath, fileName, fileContent) {
    return requestConfig('PUT', `/sync-config/${pipelineId}`, filePath, fileName, fileContent);
}

export function patchConfig(pipelineId, filePath, fileName, fileContent) {
    return requestConfig('PATCH', `/sync-config/${pipelineId}`, filePath, fileName, fileContent);
}

export function getConfigDetail(pipelineId) {
    return http.get(buildApiUrl(`/sync-config/${pipelineId}`));
}

export function listConfigs() {
    return http.get(buildApiUrl('/sync-config'));
}

export function deleteConfig(pipelineId) {
    return http.del(buildApiUrl(`/sync-config/${pipelineId}`));
}
