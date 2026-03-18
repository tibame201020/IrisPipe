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
