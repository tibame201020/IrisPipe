import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';

@Injectable({
  providedIn: 'root',
})
export class SyncConfigApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  listPipelines(workspaceKey = appEnvironment.defaultWorkspaceKey) {
    return this.http.get(`${this.baseUrl}/api/v1/sync-config`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  getPipeline(pipelineId: number | string, workspaceKey = appEnvironment.defaultWorkspaceKey) {
    return this.http.get(`${this.baseUrl}/api/v1/sync-config/${pipelineId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
