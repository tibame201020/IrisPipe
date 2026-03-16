import http from 'k6/http';
import { buildApiUrl, getJsonHeaders } from './api-client.js';

function requestFolder(method, path, payload = null, query = {}) {
    return http.request(method, buildApiUrl(path, query), payload == null ? null : JSON.stringify(payload), {
        headers: payload == null ? undefined : getJsonHeaders(),
    });
}

export function getPipelineTree() {
    return http.get(buildApiUrl('/pipeline-tree'));
}

export function createFolder(parentFolderId, folderName) {
    return requestFolder('POST', '/pipeline-folders', {
        parentFolderId,
        folderName,
    });
}

export function updateFolder(folderId, parentFolderId, folderName) {
    return requestFolder('PUT', `/pipeline-folders/${folderId}`, {
        parentFolderId,
        folderName,
    });
}

export function getFolderDeletePreview(folderId) {
    return http.get(buildApiUrl(`/pipeline-folders/${folderId}/delete-preview`));
}

export function deleteFolder(folderId, recursive = false) {
    return requestFolder('DELETE', `/pipeline-folders/${folderId}`, null, {
        recursive,
    });
}
