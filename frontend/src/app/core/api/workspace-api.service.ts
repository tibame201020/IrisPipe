import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { WorkspaceInfo } from '../../shared/models/workspace.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  listWorkspaces() {
    return this.http.get<WorkspaceInfo[]>(`${this.baseUrl}/api/v1/workspaces`);
  }

  currentWorkspace(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<WorkspaceInfo>(`${this.baseUrl}/api/v1/workspaces/current`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
