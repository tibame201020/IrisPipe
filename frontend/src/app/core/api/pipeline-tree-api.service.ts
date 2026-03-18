import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { appEnvironment } from '../config/app-environment';
import { PipelineTreeInfo } from '../../shared/models/pipeline-tree.model';
import { mapPipelineTreeInfo } from '../../shared/mappers/sync-config.mapper';

@Injectable({
  providedIn: 'root',
})
export class PipelineTreeApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  getTree(workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<unknown>(`${this.baseUrl}/api/v1/pipeline-tree`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    }).pipe(map(mapPipelineTreeInfo));
  }
}
