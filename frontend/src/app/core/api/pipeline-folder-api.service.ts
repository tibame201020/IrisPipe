import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { FolderInfo, FolderUpsertRequest } from '../../shared/models/sync-config.model';

@Injectable({
  providedIn: 'root',
})
export class PipelineFolderApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  createFolder(
    request: FolderUpsertRequest,
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.post<FolderInfo>(`${this.baseUrl}/api/v1/pipeline-folders`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    });
  }
}
