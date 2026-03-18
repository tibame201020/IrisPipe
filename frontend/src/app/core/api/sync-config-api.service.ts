import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { ConfigPipelineInfo, ConfigPipelineSummary } from '../../shared/models/sync-config.model';

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
}
