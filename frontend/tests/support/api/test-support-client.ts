import { APIRequestContext, expect } from '@playwright/test';

const backendBaseUrl = process.env.PLAYWRIGHT_BACKEND_BASE_URL ?? 'http://127.0.0.1:8080';

export async function executeSql(request: APIRequestContext, sql: string) {
  const response = await request.post(`${backendBaseUrl}/api/v1/test-support/execute`, {
    headers: {
      'Content-Type': 'text/plain',
    },
    data: sql,
  });

  expect(response.ok()).toBeTruthy();
}

export async function querySql<T = Record<string, unknown>>(request: APIRequestContext, sql: string) {
  const response = await request.post(`${backendBaseUrl}/api/v1/test-support/query`, {
    headers: {
      'Content-Type': 'text/plain',
    },
    data: sql,
  });

  expect(response.ok()).toBeTruthy();
  return (await response.json()) as T[];
}
