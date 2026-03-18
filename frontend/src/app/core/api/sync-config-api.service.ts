import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import {
  ConfigPipelineInfo,
  ConfigPipelineSummary,
  ConfigPipelineUpsertRequest,
} from '../../shared/models/sync-config.model';

@Injectable({
  providedIn: 'root',
})
export class SyncConfigApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  listPipelines(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<ConfigPipelineSummary[]>(`${this.baseUrl}/api/v1/sync-config`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  getPipeline(pipelineId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<ConfigPipelineInfo>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  updatePipeline(
    pipelineId: number | string,
    request: ConfigPipelineUpsertRequest,
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.put<ConfigPipelineInfo>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    });
  }

  importPipeline(
    options: {
      folderId: number | null;
      pipelineName: string;
      format?: 'json' | 'yaml' | 'yml' | null;
      file: File;
    },
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    const formData = new FormData();
    if (options.folderId !== null) {
      formData.set('folderId', String(options.folderId));
    }
    formData.set('pipelineName', options.pipelineName);
    if (options.format) {
      formData.set('format', options.format);
    }
    formData.set('file', options.file);

    return this.http.post<ConfigPipelineInfo>(`${this.baseUrl}/api/v1/sync-config/import`, formData, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  importReplacePipeline(
    pipelineId: number | string,
    options: {
      folderId: number | null;
      pipelineName: string;
      format?: 'json' | 'yaml' | 'yml' | null;
      file: File;
    },
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    const formData = new FormData();
    if (options.folderId !== null) {
      formData.set('folderId', String(options.folderId));
    }
    formData.set('pipelineName', options.pipelineName);
    if (options.format) {
      formData.set('format', options.format);
    }
    formData.set('file', options.file);

    return this.http.put<ConfigPipelineInfo>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}/import`, formData, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  deletePipeline(pipelineId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
