import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { appEnvironment } from '../config/app-environment';
import { FolderInfo, FolderUpsertRequest } from '../../shared/models/sync-config.model';
import { mapFolderInfo } from '../../shared/mappers/sync-config.mapper';

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
    return this.http.post<unknown>(`${this.baseUrl}/api/v1/pipeline-folders`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    }).pipe(map(mapFolderInfo));
  }

  updateFolder(
    folderId: number | string,
    request: FolderUpsertRequest,
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.put<unknown>(`${this.baseUrl}/api/v1/pipeline-folders/${folderId}`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    }).pipe(map(mapFolderInfo));
  }
}
