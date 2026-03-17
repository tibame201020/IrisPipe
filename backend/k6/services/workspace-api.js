import http from 'k6/http';
import { buildApiUrl, getJsonHeaders, withWorkspaceOptions } from './api-client.js';

export function listWorkspaces(workspaceKey = null) {
    return http.get(buildApiUrl('/workspaces'), withWorkspaceOptions({}, workspaceKey));
}

export function getCurrentWorkspace(workspaceKey = null) {
    return http.get(buildApiUrl('/workspaces/current'), withWorkspaceOptions({}, workspaceKey));
}

export function createWorkspace(workspaceKey, workspaceName) {
    return http.post(
        buildApiUrl('/workspaces'),
        JSON.stringify({
            workspaceKey,
            workspaceName,
        }),
        {
            headers: getJsonHeaders(),
        },
    );
}
