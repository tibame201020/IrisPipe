import http from 'k6/http';
import { buildApiUrl, getJsonHeaders, getMultipartHeaders } from './api-client.js';

function buildMultipartPayload(fields, fileName, fileContent, fileContentType = 'application/x-yaml') {
    const boundary = `----IrisPipeK6Boundary${Math.random().toString(16).slice(2)}`;
    const parts = [];

    Object.entries(fields).forEach(([key, value]) => {
        if (value === null || value === undefined) {
            return;
        }

        parts.push(`--${boundary}`);
        parts.push(`Content-Disposition: form-data; name="${key}"`);
        parts.push('');
        parts.push(String(value));
    });

    parts.push(`--${boundary}`);
    parts.push(`Content-Disposition: form-data; name="file"; filename="${fileName}"`);
    parts.push(`Content-Type: ${fileContentType}`);
    parts.push('');
    parts.push(fileContent);
    parts.push(`--${boundary}--`);

    return {
        boundary,
        body: parts.join('\r\n'),
    };
}

function requestConfigImport(method, path, folderId, pipelineName, format, fileName, fileContent) {
    const contentType = format === 'json' ? 'application/json' : 'application/x-yaml';
    const { boundary, body } = buildMultipartPayload(
        {
            folderId,
            pipelineName,
            format,
        },
        fileName,
        fileContent,
        contentType,
    );

    return http.request(method, buildApiUrl(path), body, {
        headers: getMultipartHeaders(boundary),
    });
}

function requestConfigJson(method, path, payload) {
    return http.request(method, buildApiUrl(path), JSON.stringify(payload), {
        headers: getJsonHeaders(),
    });
}

export function createConfigFromBody(folderId, pipelineName, jobs) {
    return requestConfigJson('POST', '/sync-config', {
        folderId,
        pipelineName,
        jobs,
    });
}

export function updateConfigFromBody(pipelineId, folderId, pipelineName, jobs) {
    return requestConfigJson('PUT', `/sync-config/${pipelineId}`, {
        folderId,
        pipelineName,
        jobs,
    });
}

export function patchConfigFromBody(pipelineId, folderId, pipelineName, jobs) {
    return requestConfigJson('PATCH', `/sync-config/${pipelineId}`, {
        folderId,
        pipelineName,
        jobs,
    });
}

export function importConfig(folderId, pipelineName, format, fileName, fileContent) {
    return requestConfigImport('POST', '/sync-config/import', folderId, pipelineName, format, fileName, fileContent);
}

export function replaceConfigFromImport(pipelineId, folderId, pipelineName, format, fileName, fileContent) {
    return requestConfigImport(
        'PUT',
        `/sync-config/${pipelineId}/import`,
        folderId,
        pipelineName,
        format,
        fileName,
        fileContent,
    );
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
