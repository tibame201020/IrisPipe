import http from 'k6/http';
import { buildApiUrl, getJsonHeaders } from './api-client.js';

export function executePipeline(pipelineId, useAsyncLaucher = false) {
    const payload = JSON.stringify({
        pipelineId: pipelineId,
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(buildApiUrl('/sync-pipeline'), payload, {
        headers: getJsonHeaders(),
    });
}

export function getPipelineRunsByIds(pipelineRunIds) {
    return http.get(buildApiUrl('/sync-pipeline', { ids: pipelineRunIds }));
}

export function getPipelineRunDetail(pipelineRunId) {
    return http.get(buildApiUrl(`/sync-pipeline/${pipelineRunId}`));
}

export function resumePipeline(pipelineRunId, useAsyncLaucher = false) {
    const payload = JSON.stringify({
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(buildApiUrl(`/sync-pipeline/${pipelineRunId}/resume`), payload, {
        headers: getJsonHeaders(),
    });
}

export function rerunPipeline(pipelineRunId, useAsyncLaucher = false) {
    const payload = JSON.stringify({
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(buildApiUrl(`/sync-pipeline/${pipelineRunId}/rerun`), payload, {
        headers: getJsonHeaders(),
    });
}

export function deletePipelineRun(pipelineRunId) {
    return http.del(buildApiUrl(`/sync-pipeline/${pipelineRunId}`));
}

export function stopPipeline(pipelineRunId) {
    return http.post(buildApiUrl(`/sync-pipeline/${pipelineRunId}/stop`), null, {
        headers: getJsonHeaders(),
    });
}
