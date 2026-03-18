import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { appEnvironment } from '../config/app-environment';
import {
  ConfigPipelineInfo,
  ConfigPipelineSummary,
  ConfigPipelineUpsertRequest,
} from '../../shared/models/sync-config.model';
import { mapConfigPipelineInfo, mapConfigPipelineSummary } from '../../shared/mappers/sync-config.mapper';

@Injectable({
  providedIn: 'root',
})
export class SyncConfigApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  createPipeline(
    request: ConfigPipelineUpsertRequest,
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.post<unknown>(`${this.baseUrl}/api/v1/sync-config`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    }).pipe(map(mapConfigPipelineInfo));
  }

  listPipelines(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<unknown[]>(`${this.baseUrl}/api/v1/sync-config`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    }).pipe(map((pipelines) => pipelines.map(mapConfigPipelineSummary)));
  }

  getPipeline(pipelineId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<unknown>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    }).pipe(map(mapConfigPipelineInfo));
  }

  updatePipeline(
    pipelineId: number | string,
    request: ConfigPipelineUpsertRequest,
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.put<unknown>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    }).pipe(map(mapConfigPipelineInfo));
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

    return this.http.post<unknown>(`${this.baseUrl}/api/v1/sync-config/import`, formData, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    }).pipe(map(mapConfigPipelineInfo));
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

    return this.http.put<unknown>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}/import`, formData, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    }).pipe(map(mapConfigPipelineInfo));
  }

  deletePipeline(pipelineId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
