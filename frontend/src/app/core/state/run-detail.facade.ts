import { Injectable, computed, inject, signal } from '@angular/core';
import { appEnvironment } from '../config/app-environment';
import { SyncPipelineApiService } from '../api/sync-pipeline-api.service';
import {
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunStatus,
  StepExecutionInfo,
} from '../../shared/models/sync-pipeline.model';
import { WorkspaceFacade } from './workspace.facade';

@Injectable({
  providedIn: 'root',
})
export class RunDetailFacade {
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private pollHandle: ReturnType<typeof setInterval> | null = null;

  readonly selectedRunId = signal<number | null>(null);
  readonly detail = signal<PipelineRunDetailInfo | null>(null);
  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);

  readonly hasSelectedRun = computed(() => this.selectedRunId() !== null);
  readonly selectedRunStatus = computed<PipelineRunStatus | 'IDLE'>(
    () => this.detail()?.status ?? (this.selectedRunId() === null ? 'IDLE' : 'UNKNOWN')
  );
  readonly attempts = computed(() => this.detail()?.attempts ?? []);
  readonly latestJobs = computed(() => this.detail()?.jobs ?? []);
  readonly focusedJob = computed<PipelineRunJobInfo | null>(() => {
    const jobs = this.latestJobs();
    return (
      jobs.find((job) => this.isActiveStatus(job.status) || job.status === 'FAILED') ??
      jobs.find((job) => job.stepExecutionInfos.length > 0) ??
      jobs[0] ??
      null
    );
  });
  readonly focusedJobSteps = computed<StepExecutionInfo[]>(() => this.focusedJob()?.stepExecutionInfos ?? []);

  selectRun(runId: number | null) {
    if (runId === this.selectedRunId()) {
      if (runId !== null && this.detail() === null && !this.isLoading()) {
        this.loadSelectedRun();
      }
      return;
    }

    this.stopPolling();
    this.selectedRunId.set(runId);
    this.loadError.set(null);

    if (runId === null) {
      this.detail.set(null);
      this.isLoading.set(false);
      return;
    }

    this.loadSelectedRun();
  }

  refresh() {
    if (this.selectedRunId() === null) {
      return;
    }
    this.loadSelectedRun();
  }

  stopPolling() {
    if (this.pollHandle === null) {
      return;
    }

    globalThis.clearInterval(this.pollHandle);
    this.pollHandle = null;
  }

  private loadSelectedRun() {
    const runId = this.selectedRunId();
    if (runId === null) {
      return;
    }

    this.isLoading.set(true);
    this.loadError.set(null);

    this.syncPipelineApi.runDetail(runId, this.workspaceFacade.workspaceKey()).subscribe({
      next: (detail) => {
        this.detail.set(detail);
        this.syncPollingForStatus(detail.status);
      },
      error: () => {
        this.loadError.set('Failed to load pipeline run detail.');
        if (this.detail() === null) {
          this.stopPolling();
        }
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }

  private syncPollingForStatus(status: PipelineRunStatus) {
    if (!this.isActiveStatus(status)) {
      this.stopPolling();
      return;
    }

    if (this.pollHandle !== null) {
      return;
    }

    this.pollHandle = globalThis.setInterval(() => {
      if (this.selectedRunId() === null) {
        this.stopPolling();
        return;
      }
      this.loadSelectedRun();
    }, appEnvironment.polling.activeRunMs);
  }

  private isActiveStatus(status: PipelineRunStatus) {
    return status === 'STARTING' || status === 'STARTED' || status === 'STOPPING';
  }
}
