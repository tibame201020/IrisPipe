import http from 'k6/http';
import { buildApiUrl, getJsonHeaders, getMultipartHeaders, withWorkspaceOptions } from './api-client.js';
import { namespaceImportedConfigContent, namespaceJobs } from '../utils/namespace.js';

function normalizeStageName(job, index) {
    return job.stage || job.stageName || `stage${index + 1}`;
}

function resolveStages(payloadStages, jobs = []) {
    if (Array.isArray(payloadStages) && payloadStages.length > 0) {
        return payloadStages;
    }

    const orderedStages = [];
    jobs.forEach((job, index) => {
        const stage = normalizeStageName(job, index);
        if (!orderedStages.includes(stage)) {
            orderedStages.push(stage);
        }
    });
    return orderedStages;
}

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

function requestConfigImport(method, path, folderId, pipelineName, format, fileName, fileContent, workspaceKey = null) {
    const contentType = format === 'json' ? 'application/json' : 'application/x-yaml';
    const namespacedContent = namespaceImportedConfigContent(fileContent, format);
    const { boundary, body } = buildMultipartPayload(
        {
            folderId,
            pipelineName,
            format,
        },
        fileName,
        namespacedContent,
        contentType,
    );

    return http.request(method, buildApiUrl(path), body, {
        headers: getMultipartHeaders(boundary, workspaceKey),
    });
}

function requestConfigJson(method, path, payload, workspaceKey = null) {
    const normalizedJobs = (payload.jobs || []).map((job, index) => ({
        ...job,
        stage: normalizeStageName(job, index),
    }));
    const namespacedPayload = {
        ...payload,
        stages: resolveStages(payload.stages, normalizedJobs),
        jobs: namespaceJobs(normalizedJobs),
    };

    return http.request(method, buildApiUrl(path), JSON.stringify(namespacedPayload), {
        headers: getJsonHeaders(workspaceKey),
    });
}

export function createConfigFromBody(folderId, pipelineName, jobs, workspaceKey = null) {
    return requestConfigJson('POST', '/sync-config', {
        folderId,
        pipelineName,
        jobs,
    }, workspaceKey);
}

export function updateConfigFromBody(pipelineId, folderId, pipelineName, jobs, workspaceKey = null) {
    return requestConfigJson('PUT', `/sync-config/${pipelineId}`, {
        folderId,
        pipelineName,
        jobs,
    }, workspaceKey);
}

export function patchConfigFromBody(pipelineId, folderId, pipelineName, jobs, workspaceKey = null) {
    return requestConfigJson('PATCH', `/sync-config/${pipelineId}`, {
        folderId,
        pipelineName,
        jobs,
    }, workspaceKey);
}

export function importConfig(folderId, pipelineName, format, fileName, fileContent, workspaceKey = null) {
    return requestConfigImport('POST', '/sync-config/import', folderId, pipelineName, format, fileName, fileContent, workspaceKey);
}

export function replaceConfigFromImport(
    pipelineId,
    folderId,
    pipelineName,
    format,
    fileName,
    fileContent,
    workspaceKey = null,
) {
    return requestConfigImport(
        'PUT',
        `/sync-config/${pipelineId}/import`,
        folderId,
        pipelineName,
        format,
        fileName,
        fileContent,
        workspaceKey,
    );
}

export function getConfigDetail(pipelineId, workspaceKey = null) {
    return http.get(buildApiUrl(`/sync-config/${pipelineId}`), withWorkspaceOptions({}, workspaceKey));
}

export function listConfigs(workspaceKey = null) {
    return http.get(buildApiUrl('/sync-config'), withWorkspaceOptions({}, workspaceKey));
}

export function deleteConfig(pipelineId, workspaceKey = null) {
    return http.del(buildApiUrl(`/sync-config/${pipelineId}`), null, withWorkspaceOptions({}, workspaceKey));
}
