import http from 'k6/http';
import { buildApiUrl, getJsonHeaders, withWorkspaceOptions } from './api-client.js';

function requestFolder(method, path, payload = null, query = {}, workspaceKey = null) {
    return http.request(method, buildApiUrl(path, query), payload == null ? null : JSON.stringify(payload), {
        headers: payload == null ? withWorkspaceOptions({}, workspaceKey).headers : getJsonHeaders(workspaceKey),
    });
}

export function getPipelineTree(workspaceKey = null) {
    return http.get(buildApiUrl('/pipeline-tree'), withWorkspaceOptions({}, workspaceKey));
}

export function createFolder(parentFolderId, folderName, workspaceKey = null) {
    return requestFolder('POST', '/pipeline-folders', {
        parentFolderId,
        folderName,
    }, {}, workspaceKey);
}

export function updateFolder(folderId, parentFolderId, folderName, workspaceKey = null) {
    return requestFolder('PUT', `/pipeline-folders/${folderId}`, {
        parentFolderId,
        folderName,
    }, {}, workspaceKey);
}

export function getFolderDeletePreview(folderId, limit = null, workspaceKey = null) {
    return http.get(
        buildApiUrl(`/pipeline-folders/${folderId}/delete-preview`, { limit }),
        withWorkspaceOptions({}, workspaceKey),
    );
}

export function deleteFolder(folderId, recursive = false, workspaceKey = null) {
    return requestFolder('DELETE', `/pipeline-folders/${folderId}`, null, {
        recursive,
    }, workspaceKey);
}
