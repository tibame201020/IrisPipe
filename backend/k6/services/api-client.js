export const BASE_URL = 'http://localhost:8080/api/v1';

export function getHeaders() {
    return {
        'Content-Type': 'application/json',
    };
}

export function getMultipartHeaders(boundary) {
    return {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
    };
}
