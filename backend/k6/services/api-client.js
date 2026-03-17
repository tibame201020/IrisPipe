export const BASE_URL = __ENV.IRISPIPE_BASE_URL || 'http://localhost:8080/api/v1';
export const WORKSPACE_HEADER = 'X-Iris-Workspace-Key';

function resolveWorkspaceKey(workspaceKey = null) {
    return workspaceKey ?? __ENV.IRISPIPE_WORKSPACE_KEY ?? null;
}

function applyWorkspaceHeader(headers = {}, workspaceKey = null) {
    const resolvedWorkspaceKey = resolveWorkspaceKey(workspaceKey);
    if (!resolvedWorkspaceKey) {
        return headers;
    }

    return {
        ...headers,
        [WORKSPACE_HEADER]: resolvedWorkspaceKey,
    };
}

export function buildApiUrl(path, query = {}) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const searchParams = [];

    Object.entries(query).forEach(([key, value]) => {
        if (value === null || value === undefined) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach((item) => {
                searchParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
            });
            return;
        }

        searchParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });

    if (searchParams.length === 0) {
        return `${BASE_URL}${normalizedPath}`;
    }

    return `${BASE_URL}${normalizedPath}?${searchParams.join('&')}`;
}

export function getJsonHeaders(workspaceKey = null) {
    return applyWorkspaceHeader({
        'Content-Type': 'application/json',
    }, workspaceKey);
}

export function getTextHeaders(workspaceKey = null) {
    return applyWorkspaceHeader({
        'Content-Type': 'text/plain',
    }, workspaceKey);
}

export function getMultipartHeaders(boundary, workspaceKey = null) {
    return applyWorkspaceHeader({
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
    }, workspaceKey);
}

export function withWorkspaceOptions(options = {}, workspaceKey = null) {
    const headers = applyWorkspaceHeader(options.headers || {}, workspaceKey);
    return {
        ...options,
        headers,
    };
}
