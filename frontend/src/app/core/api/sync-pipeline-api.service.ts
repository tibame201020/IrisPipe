import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';

@Injectable({
  providedIn: 'root',
})
export class SyncPipelineApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  recentRuns(workspaceKey = appEnvironment.defaultWorkspaceKey, limit = 20) {
    return this.http.get(`${this.baseUrl}/api/v1/sync-pipeline/recent`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey }),
      params: new HttpParams().set('limit', limit)
    });
  }

  pipelineHistory(pipelineId: number | string, workspaceKey = appEnvironment.defaultWorkspaceKey, limit = 20) {
    return this.http.get(`${this.baseUrl}/api/v1/sync-pipeline`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey }),
      params: new HttpParams().set('pipelineId', pipelineId).set('limit', limit)
    });
  }

  runDetail(pipelineRunId: number | string, workspaceKey = appEnvironment.defaultWorkspaceKey) {
    return this.http.get(`${this.baseUrl}/api/v1/sync-pipeline/${pipelineRunId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
