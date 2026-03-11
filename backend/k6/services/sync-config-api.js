import http from 'k6/http';
import { BASE_URL, getMultipartHeaders } from './api-client.js';

export function createConfig(filePath, fileName, fileContent) {
    const boundary = '----WebKitFormBoundary7bMgGAs75rD5qQvR';
    const payload = `--${boundary}\r\nContent-Disposition: form-data; name="path"\r\n\r\n${filePath}\r\n--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${fileName}"\r\nContent-Type: application/x-yaml\r\n\r\n${fileContent}\r\n--${boundary}--`;

    return http.post(`${BASE_URL}/sync-config`, payload, {
        headers: getMultipartHeaders(boundary),
    });
}

export function updateConfig(filePath, fileName, fileContent) {
    const boundary = '----WebKitFormBoundary7bMgGAs75rD5qQvR';
    const payload = `--${boundary}\r\nContent-Disposition: form-data; name="path"\r\n\r\n${filePath}\r\n--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${fileName}"\r\nContent-Type: application/x-yaml\r\n\r\n${fileContent}\r\n--${boundary}--`;

    return http.put(`${BASE_URL}/sync-config`, payload, {
        headers: getMultipartHeaders(boundary),
    });
}

export function getConfigDetail(filePath) {
    return http.get(`${BASE_URL}/sync-config/detail?path=${filePath}`);
}

export function listConfigs() {
    return http.get(`${BASE_URL}/sync-config`);
}

export function deleteConfig(filePath) {
    return http.del(`${BASE_URL}/sync-config?path=${filePath}`);
}
