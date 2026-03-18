import { APIRequestContext, expect } from '@playwright/test';

export interface FolderInfo {
  id: number;
  parentFolderId: number | null;
  folderName: string;
  folderPath: string;
  systemRoot: boolean;
}

interface ImportPipelineOptions {
  folderId: number | null;
  pipelineName: string;
  fileName: string;
  fileContent: string;
  format?: 'yaml' | 'json';
}

interface ExecutePipelineOptions {
  pipelineId: number;
  useAsyncLaucher?: boolean;
}

interface PipelineControlOptions {
  useAsyncLaucher?: boolean;
}

const backendBaseUrl = process.env.PLAYWRIGHT_BACKEND_BASE_URL ?? 'http://127.0.0.1:8080';

function workspaceHeaders(workspaceKey = 'default') {
  return {
    'X-Iris-Workspace-Key': workspaceKey,
  };
}

export async function createFolder(
  request: APIRequestContext,
  folderName: string,
  parentFolderId: number | null = null,
  workspaceKey = 'default',
) {
  const response = await request.post(`${backendBaseUrl}/api/v1/pipeline-folders`, {
    headers: workspaceHeaders(workspaceKey),
    data: {
      parentFolderId,
      folderName,
    },
  });

  expect(response.ok()).toBeTruthy();
  return (await response.json()) as FolderInfo;
}

export async function importPipelineConfig(
  request: APIRequestContext,
  options: ImportPipelineOptions,
  workspaceKey = 'default',
) {
  const response = await request.post(`${backendBaseUrl}/api/v1/sync-config/import`, {
    headers: workspaceHeaders(workspaceKey),
    multipart: {
      folderId: options.folderId ?? '',
      pipelineName: options.pipelineName,
      format: options.format ?? 'yaml',
      file: {
        name: options.fileName,
        mimeType: options.format === 'json' ? 'application/json' : 'application/x-yaml',
        buffer: Buffer.from(options.fileContent),
      },
    },
  });

  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function executePipeline(
  request: APIRequestContext,
  options: ExecutePipelineOptions,
  workspaceKey = 'default',
) {
  const response = await request.post(`${backendBaseUrl}/api/v1/sync-pipeline`, {
    headers: {
      ...workspaceHeaders(workspaceKey),
      'Content-Type': 'application/json',
    },
    data: {
      pipelineId: options.pipelineId,
      useAsyncLaucher: options.useAsyncLaucher ?? false,
    },
  });

  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function resumePipelineRun(
  request: APIRequestContext,
  pipelineRunId: number,
  options: PipelineControlOptions = {},
  workspaceKey = 'default',
) {
  const response = await request.post(`${backendBaseUrl}/api/v1/sync-pipeline/${pipelineRunId}/resume`, {
    headers: {
      ...workspaceHeaders(workspaceKey),
      'Content-Type': 'application/json',
    },
    data: {
      useAsyncLaucher: options.useAsyncLaucher ?? false,
    },
  });

  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function rerunPipelineRun(
  request: APIRequestContext,
  pipelineRunId: number,
  options: PipelineControlOptions = {},
  workspaceKey = 'default',
) {
  const response = await request.post(`${backendBaseUrl}/api/v1/sync-pipeline/${pipelineRunId}/rerun`, {
    headers: {
      ...workspaceHeaders(workspaceKey),
      'Content-Type': 'application/json',
    },
    data: {
      useAsyncLaucher: options.useAsyncLaucher ?? false,
    },
  });

  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function stopPipelineRun(request: APIRequestContext, pipelineRunId: number, workspaceKey = 'default') {
  const response = await request.post(`${backendBaseUrl}/api/v1/sync-pipeline/${pipelineRunId}/stop`, {
    headers: workspaceHeaders(workspaceKey),
  });

  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function deletePipelineRun(request: APIRequestContext, pipelineRunId: number, workspaceKey = 'default') {
  const response = await request.delete(`${backendBaseUrl}/api/v1/sync-pipeline/${pipelineRunId}`, {
    headers: workspaceHeaders(workspaceKey),
  });

  expect(response.status()).toBe(204);
}

export async function getPipelineRunDetail(
  request: APIRequestContext,
  pipelineRunId: number,
  workspaceKey = 'default',
) {
  const response = await request.get(`${backendBaseUrl}/api/v1/sync-pipeline/${pipelineRunId}`, {
    headers: workspaceHeaders(workspaceKey),
  });

  expect(response.ok()).toBeTruthy();
  return response.json();
}

export async function waitForPipelineRunStatus(
  request: APIRequestContext,
  pipelineRunId: number,
  expectedStatuses: string[],
  options: {
    timeoutMs?: number;
    intervalMs?: number;
    workspaceKey?: string;
  } = {},
) {
  const timeoutMs = options.timeoutMs ?? 60_000;
  const intervalMs = options.intervalMs ?? 500;
  const workspaceKey = options.workspaceKey ?? 'default';
  const start = Date.now();

  while (Date.now() - start <= timeoutMs) {
    const detail = await getPipelineRunDetail(request, pipelineRunId, workspaceKey);
    if (expectedStatuses.includes(detail.status)) {
      return detail;
    }

    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }

  throw new Error(
    `Timed out waiting for run ${pipelineRunId} to reach one of [${expectedStatuses.join(', ')}] within ${timeoutMs}ms.`,
  );
}
