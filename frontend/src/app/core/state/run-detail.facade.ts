import { Injectable, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { appEnvironment } from '../config/app-environment';
import { SyncPipelineApiService } from '../api/sync-pipeline-api.service';
import {
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunSummaryInfo,
  PipelineRunStatus,
  StepExecutionInfo,
} from '../../shared/models/sync-pipeline.model';
import { WorkspaceFacade } from './workspace.facade';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class RunDetailFacade {
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly toastService = inject(ToastService);
  private pollHandle: ReturnType<typeof setInterval> | null = null;

  readonly selectedRunId = signal<number | null>(null);
  readonly detail = signal<PipelineRunDetailInfo | null>(null);
  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly isActionPending = signal(false);
  readonly pendingAction = signal<'stop' | 'resume' | 'rerun' | 'delete' | null>(null);
  readonly actionError = signal<string | null>(null);
  readonly actionMessage = signal<string | null>(null);

  readonly hasSelectedRun = computed(() => this.selectedRunId() !== null);
  readonly selectedRunStatus = computed<PipelineRunStatus | 'IDLE'>(
    () => this.detail()?.status ?? (this.selectedRunId() === null ? 'IDLE' : 'UNKNOWN')
  );
  readonly canStop = computed(() => this.isStoppableStatus(this.selectedRunStatus()));
  readonly canResume = computed(() => this.isResumableStatus(this.selectedRunStatus()));
  readonly canRerun = computed(() => this.selectedRunId() !== null && !this.isActionPending());
  readonly canDelete = computed(() => this.isDeletableStatus(this.selectedRunStatus()));
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
    this.actionError.set(null);
    this.actionMessage.set(null);

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

  async stopRun() {
    const runId = this.selectedRunId();
    if (runId === null || !this.canStop()) {
      return null;
    }

    return this.executeAction(
      'stop',
      () => this.syncPipelineApi.stopPipeline(runId, this.workspaceFacade.workspaceKey()),
      'Stop requested for the selected run.',
      async () => {
        this.refresh();
      }
    );
  }

  async resumeRun() {
    const runId = this.selectedRunId();
    if (runId === null || !this.canResume()) {
      return null;
    }

    return this.executeAction(
      'resume',
      () => this.syncPipelineApi.resumePipeline(runId, {}, this.workspaceFacade.workspaceKey()),
      'Resume requested for the selected run.',
      async () => {
        this.refresh();
      }
    );
  }

  async rerunRun() {
    const runId = this.selectedRunId();
    if (runId === null || !this.canRerun()) {
      return null;
    }

    return this.executeAction(
      'rerun',
      () => this.syncPipelineApi.rerunPipeline(runId, {}, this.workspaceFacade.workspaceKey()),
      'Created a new rerun from the selected run.',
      async (summary) => {
        this.selectRun(summary.id);
      }
    );
  }

  async deleteRun() {
    const runId = this.selectedRunId();
    if (runId === null || !this.canDelete()) {
      return false;
    }

    this.isActionPending.set(true);
    this.pendingAction.set('delete');
    this.actionError.set(null);
    this.actionMessage.set(null);

    try {
      await firstValueFrom(this.syncPipelineApi.deletePipelineRun(runId, this.workspaceFacade.workspaceKey()));
      this.stopPolling();
      this.selectedRunId.set(null);
      this.detail.set(null);
      this.actionMessage.set('Deleted the selected run.');
      this.toastService.success('Deleted the selected run.');
      return true;
    } catch {
      this.actionError.set('Failed to delete the selected run.');
      this.toastService.error('Failed to delete the selected run.');
      return false;
    } finally {
      this.isActionPending.set(false);
      this.pendingAction.set(null);
    }
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

  private isStoppableStatus(status: PipelineRunStatus | 'IDLE') {
    return status === 'STARTING' || status === 'STARTED' || status === 'STOPPING';
  }

  private isResumableStatus(status: PipelineRunStatus | 'IDLE') {
    return status === 'FAILED' || status === 'STOPPED' || status === 'ABANDONED' || status === 'UNKNOWN';
  }

  private isDeletableStatus(status: PipelineRunStatus | 'IDLE') {
    return status === 'COMPLETED'
      || status === 'FAILED'
      || status === 'STOPPED'
      || status === 'ABANDONED'
      || status === 'UNKNOWN';
  }

  private async executeAction(
    actionType: 'stop' | 'resume' | 'rerun',
    action: () => ReturnType<SyncPipelineApiService['executePipeline']>,
    successMessage: string,
    onSuccess: (summary: PipelineRunSummaryInfo) => Promise<void> | void
  ) {
    this.isActionPending.set(true);
    this.pendingAction.set(actionType);
    this.actionError.set(null);
    this.actionMessage.set(null);

    try {
      const summary = await firstValueFrom(action());
      await onSuccess(summary);
      this.actionMessage.set(successMessage);
      this.toastService.success(successMessage);
      return summary;
    } catch {
      this.actionError.set('Failed to update the selected run.');
      this.toastService.error('Failed to update the selected run.');
      return null;
    } finally {
      this.isActionPending.set(false);
      this.pendingAction.set(null);
    }
  }
}
