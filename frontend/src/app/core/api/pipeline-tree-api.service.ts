import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';

@Injectable({
  providedIn: 'root',
})
export class PipelineTreeApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  getTree(workspaceKey = appEnvironment.defaultWorkspaceKey) {
    return this.http.get(`${this.baseUrl}/api/v1/pipeline-tree`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
