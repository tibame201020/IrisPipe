import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { PipelineTreeInfo } from '../../shared/models/pipeline-tree.model';

@Injectable({
  providedIn: 'root',
})
export class PipelineTreeApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  getTree(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<PipelineTreeInfo>(`${this.baseUrl}/api/v1/pipeline-tree`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
