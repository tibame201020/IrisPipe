import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import {
  PipelineExecuteRequest,
  PipelineResumeRequest,
  PipelineRerunRequest,
  PipelineRunDetailInfo,
  PipelineRunSummaryInfo,
} from '../../shared/models/sync-pipeline.model';

@Injectable({
  providedIn: 'root',
})
export class SyncPipelineApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = appEnvironment.apiBaseUrl;

  executePipeline(request: PipelineExecuteRequest, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.post<PipelineRunSummaryInfo>(`${this.baseUrl}/api/v1/sync-pipeline`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    });
  }

  resumePipeline(
    pipelineRunId: number | string,
    request: PipelineResumeRequest = {},
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.post<PipelineRunSummaryInfo>(`${this.baseUrl}/api/v1/sync-pipeline/${pipelineRunId}/resume`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    });
  }

  rerunPipeline(
    pipelineRunId: number | string,
    request: PipelineRerunRequest = {},
    workspaceKey: string = appEnvironment.defaultWorkspaceKey
  ) {
    return this.http.post<PipelineRunSummaryInfo>(`${this.baseUrl}/api/v1/sync-pipeline/${pipelineRunId}/rerun`, request, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey, 'Content-Type': 'application/json' })
    });
  }

  stopPipeline(pipelineRunId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.post<PipelineRunSummaryInfo>(`${this.baseUrl}/api/v1/sync-pipeline/${pipelineRunId}/stop`, null, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  recentRuns(workspaceKey: string = appEnvironment.defaultWorkspaceKey, limit: number = 20) {
    return this.http.get<PipelineRunSummaryInfo[]>(`${this.baseUrl}/api/v1/sync-pipeline/recent`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey }),
      params: new HttpParams().set('limit', limit)
    });
  }

  pipelineHistory(pipelineId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey, limit: number = 20) {
    return this.http.get<PipelineRunSummaryInfo[]>(`${this.baseUrl}/api/v1/sync-pipeline`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey }),
      params: new HttpParams().set('pipelineId', pipelineId).set('limit', limit)
    });
  }

  runDetail(pipelineRunId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.get<PipelineRunDetailInfo>(`${this.baseUrl}/api/v1/sync-pipeline/${pipelineRunId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }

  deletePipelineRun(pipelineRunId: number | string, workspaceKey: string = appEnvironment.defaultWorkspaceKey) {
    return this.http.delete<void>(`${this.baseUrl}/api/v1/sync-pipeline/${pipelineRunId}`, {
      headers: new HttpHeaders({ 'X-Iris-Workspace-Key': workspaceKey })
    });
  }
}
