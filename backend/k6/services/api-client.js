export const BASE_URL = __ENV.IRISPIPE_BASE_URL || 'http://localhost:8080/api/v1';

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

export function getJsonHeaders() {
    return {
        'Content-Type': 'application/json',
    };
}

export function getTextHeaders() {
    return {
        'Content-Type': 'text/plain',
    };
}

export function getMultipartHeaders(boundary) {
    return {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
    };
}
