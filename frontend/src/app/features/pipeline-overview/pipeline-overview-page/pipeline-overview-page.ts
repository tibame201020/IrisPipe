import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { SyncConfigApiService } from '../../../core/api/sync-config-api.service';
import { SyncPipelineApiService } from '../../../core/api/sync-pipeline-api.service';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { ToastService } from '../../../core/state/toast.service';
import { ConfigPipelineInfo } from '../../../shared/models/sync-config.model';
import { PipelineRunSummaryInfo } from '../../../shared/models/sync-pipeline.model';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { formatDateTime, formatTimeRange } from '../../../shared/utils/date-time';

@Component({
  selector: 'app-pipeline-overview-page',
  imports: [StatusChip, RouterLink, RouterLinkActive, AppEmptyState, AppSkeleton],
  templateUrl: './pipeline-overview-page.html',
  styleUrl: './pipeline-overview-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineOverviewPage implements OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly syncConfigApi = inject(SyncConfigApiService);
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly toastService = inject(ToastService);

  protected readonly pipelineId = signal<number | null>(null);
  protected readonly pipeline = signal<ConfigPipelineInfo | null>(null);
  protected readonly recentRuns = signal<PipelineRunSummaryInfo[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly loadError = signal<string | null>(null);
  protected readonly isExecuting = signal(false);
  protected readonly executeError = signal<string | null>(null);

  private readonly routeSub = this.route.paramMap.subscribe((params) => {
    const rawPipelineId = params.get('pipelineId');
    const pipelineId = rawPipelineId === null ? null : Number(rawPipelineId);
    this.pipelineId.set(Number.isFinite(pipelineId) ? pipelineId : null);
    this.loadOverview();
  });

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  protected refresh() {
    this.loadOverview();
  }

  protected inspectRun(runId: number) {
    void this.router.navigate(['/runs', runId]);
  }

  protected executePipeline() {
    const pipelineId = this.pipelineId();
    if (pipelineId === null) {
      return;
    }

    this.isExecuting.set(true);
    this.executeError.set(null);

    this.syncPipelineApi.executePipeline(
      {
        pipelineId,
        useAsyncLaucher: false,
      },
      this.workspaceFacade.workspaceKey()
    ).subscribe({
      next: (summary) => {
        this.toastService.success('Pipeline execution started.');
        void this.router.navigate(['/runs', summary.id]);
      },
      error: () => {
        this.executeError.set('Failed to execute pipeline.');
        this.toastService.error('Failed to execute pipeline.');
        this.isExecuting.set(false);
      },
      complete: () => {
        this.isExecuting.set(false);
      }
    });
  }

  protected formatDateTime(value: string | number[] | null) {
    return formatDateTime(value);
  }

  protected formatTimeRange(startTime: string | number[] | null, endTime: string | number[] | null, status: string) {
    return formatTimeRange(startTime, endTime, status === 'STARTED' || status === 'STARTING' || status === 'STOPPING');
  }

  private loadOverview() {
    const pipelineId = this.pipelineId();
    if (pipelineId === null) {
      this.pipeline.set(null);
      this.recentRuns.set([]);
      this.loadError.set('Missing pipeline id.');
      return;
    }

    this.isLoading.set(true);
    this.loadError.set(null);

    forkJoin({
      pipeline: this.syncConfigApi.getPipeline(pipelineId, this.workspaceFacade.workspaceKey()),
      recentRuns: this.syncPipelineApi.pipelineHistory(pipelineId, this.workspaceFacade.workspaceKey(), 5),
    }).subscribe({
      next: ({ pipeline, recentRuns }) => {
        this.pipeline.set(pipeline);
        this.recentRuns.set(recentRuns);
      },
      error: () => {
        this.pipeline.set(null);
        this.recentRuns.set([]);
        this.loadError.set('Failed to load pipeline overview.');
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
