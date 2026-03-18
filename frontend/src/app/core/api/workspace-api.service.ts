import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { appEnvironment } from '../config/app-environment';
import { WorkspaceInfo } from '../../shared/models/workspace.model';
import { mapWorkspaceInfo } from '../../shared/mappers/workspace.mapper';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  listWorkspaces() {
    return this.http.get<unknown[]>(`${this.baseUrl}/api/v1/workspaces`).pipe(
      map((workspaces) => workspaces.map(mapWorkspaceInfo))
    );
  }

  currentWorkspace(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<unknown>(`${this.baseUrl}/api/v1/workspaces/current`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    }).pipe(map(mapWorkspaceInfo));
  }
}
