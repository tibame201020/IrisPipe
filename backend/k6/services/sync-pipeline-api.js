import http from 'k6/http';
import { buildApiUrl, getJsonHeaders, withWorkspaceOptions } from './api-client.js';

const syncRequestTimeout = __ENV.IRISPIPE_SYNC_REQUEST_TIMEOUT || '10m';

function buildExecutionRequestOptions(useAsyncLaucher = false, workspaceKey = null) {
    const options = {
        headers: getJsonHeaders(workspaceKey),
    };

    if (!useAsyncLaucher) {
        options.timeout = syncRequestTimeout;
    }

    return options;
}

export function executePipeline(pipelineId, useAsyncLaucher = false, workspaceKey = null) {
    const payload = JSON.stringify({
        pipelineId: pipelineId,
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(buildApiUrl('/sync-pipeline'), payload, buildExecutionRequestOptions(useAsyncLaucher, workspaceKey));
}

export function getPipelineRunsByIds(pipelineRunIds, workspaceKey = null) {
    return http.get(buildApiUrl('/sync-pipeline', { ids: pipelineRunIds }), withWorkspaceOptions({}, workspaceKey));
}

export function getPipelineRunsByPipelineId(pipelineId, limit = null, beforeRunId = null, workspaceKey = null) {
    return http.get(buildApiUrl('/sync-pipeline', {
        pipelineId,
        limit,
        beforeRunId,
    }), withWorkspaceOptions({}, workspaceKey));
}

export function getRecentPipelineRuns(limit = null, beforeRunId = null, workspaceKey = null) {
    return http.get(buildApiUrl('/sync-pipeline/recent', {
        limit,
        beforeRunId,
    }), withWorkspaceOptions({}, workspaceKey));
}

export function getPipelineRunDetail(pipelineRunId, workspaceKey = null) {
    return http.get(buildApiUrl(`/sync-pipeline/${pipelineRunId}`), withWorkspaceOptions({}, workspaceKey));
}

export function resumePipeline(pipelineRunId, useAsyncLaucher = false, workspaceKey = null) {
    const payload = JSON.stringify({
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(
        buildApiUrl(`/sync-pipeline/${pipelineRunId}/resume`),
        payload,
        buildExecutionRequestOptions(useAsyncLaucher, workspaceKey),
    );
}

export function rerunPipeline(pipelineRunId, useAsyncLaucher = false, workspaceKey = null) {
    const payload = JSON.stringify({
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(
        buildApiUrl(`/sync-pipeline/${pipelineRunId}/rerun`),
        payload,
        buildExecutionRequestOptions(useAsyncLaucher, workspaceKey),
    );
}

export function deletePipelineRun(pipelineRunId, workspaceKey = null) {
    return http.del(buildApiUrl(`/sync-pipeline/${pipelineRunId}`), null, withWorkspaceOptions({}, workspaceKey));
}

export function stopPipeline(pipelineRunId, workspaceKey = null) {
    return http.post(buildApiUrl(`/sync-pipeline/${pipelineRunId}/stop`), null, {
        headers: getJsonHeaders(workspaceKey),
    });
}
