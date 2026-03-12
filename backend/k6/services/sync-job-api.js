import http from 'k6/http';
import { buildApiUrl, getJsonHeaders } from './api-client.js';

export function executeJob(pipelineId, useAsyncLaucher = false) {
    const payload = JSON.stringify({
        pipelineId: pipelineId,
        useAsyncLaucher: useAsyncLaucher,
    });

    return http.post(buildApiUrl('/sync-job'), payload, {
        headers: getJsonHeaders(),
    });
}

export function getJobSummariesByIds(jobIds) {
    return http.get(buildApiUrl('/sync-job', { ids: jobIds }));
}

export function getJobDetail(jobId) {
    return http.get(buildApiUrl(`/sync-job/${jobId}`));
}

export function deleteJobMetadata(jobId) {
    return http.del(buildApiUrl(`/sync-job/${jobId}`));
}
