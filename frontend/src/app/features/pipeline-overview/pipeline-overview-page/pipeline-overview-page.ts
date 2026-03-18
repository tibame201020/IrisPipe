import { ChangeDetectionStrategy, Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription, forkJoin } from 'rxjs';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { SyncConfigApiService } from '../../../core/api/sync-config-api.service';
import { SyncPipelineApiService } from '../../../core/api/sync-pipeline-api.service';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { ToastService } from '../../../core/state/toast.service';
import { PipelineRunEventsService } from '../../../core/state/pipeline-run-events.service';
import { ConfigPipelineInfo } from '../../../shared/models/sync-config.model';
import { PipelineRunSummaryInfo } from '../../../shared/models/sync-pipeline.model';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { AppPageTabs, AppPageTab } from '../../../shared/components/app-page-tabs/app-page-tabs';
import { AppPageToolbar } from '../../../shared/components/app-page-toolbar/app-page-toolbar';
import { formatDateTime, formatTimeRange } from '../../../shared/utils/date-time';

@Component({
  selector: 'app-pipeline-overview-page',
  imports: [StatusChip, RouterLink, AppEmptyState, AppSkeleton, AppPageTabs, AppPageToolbar],
  templateUrl: './pipeline-overview-page.html',
  styleUrl: './pipeline-overview-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineOverviewPage implements OnDestroy {
  private static readonly MUTATION_REFRESH_WINDOW_MS = 10_000;
  private static readonly MUTATION_REFRESH_INTERVAL_MS = 2_000;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly syncConfigApi = inject(SyncConfigApiService);
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly toastService = inject(ToastService);
  private readonly pipelineRunEvents = inject(PipelineRunEventsService);
  private mutationRefreshHandle: ReturnType<typeof setInterval> | null = null;
  private mutationRefreshWindowHandle: ReturnType<typeof setTimeout> | null = null;

  protected readonly pipelineId = signal<number | null>(null);
  protected readonly pipeline = signal<ConfigPipelineInfo | null>(null);
  protected readonly recentRuns = signal<PipelineRunSummaryInfo[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly loadError = signal<string | null>(null);
  protected readonly isExecuting = signal(false);
  protected readonly executeError = signal<string | null>(null);
  protected readonly tabs = computed<AppPageTab[]>(() => {
    const pipelineId = this.pipelineId();
    if (pipelineId === null) {
      return [];
    }

    return [
      { label: 'Overview', commands: ['/pipelines', pipelineId], exact: true },
      { label: 'Config', commands: ['/pipelines', pipelineId, 'config'] },
      { label: 'Runs', commands: ['/pipelines', pipelineId, 'runs'] },
    ];
  });

  private readonly routeSub = this.route.paramMap.subscribe((params) => {
    const rawPipelineId = params.get('pipelineId');
    const pipelineId = rawPipelineId === null ? null : Number(rawPipelineId);
    this.pipelineId.set(Number.isFinite(pipelineId) ? pipelineId : null);
    this.loadOverview();
  });
  private readonly runEventSub: Subscription = this.pipelineRunEvents.events$.subscribe((event) => {
    if (event.pipelineId !== this.pipelineId()) {
      return;
    }

    this.triggerMutationRefresh();
  });

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.runEventSub.unsubscribe();
    this.clearMutationRefreshWindow();
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
        this.pipelineRunEvents.emitFromSummary('execute', summary);
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

  private triggerMutationRefresh() {
    this.loadOverview();
    this.clearMutationRefreshWindow();

    this.mutationRefreshHandle = globalThis.setInterval(() => {
      this.loadOverview();
    }, PipelineOverviewPage.MUTATION_REFRESH_INTERVAL_MS);

    this.mutationRefreshWindowHandle = globalThis.setTimeout(() => {
      this.clearMutationRefreshWindow();
    }, PipelineOverviewPage.MUTATION_REFRESH_WINDOW_MS);
  }

  private clearMutationRefreshWindow() {
    if (this.mutationRefreshHandle !== null) {
      globalThis.clearInterval(this.mutationRefreshHandle);
      this.mutationRefreshHandle = null;
    }
    if (this.mutationRefreshWindowHandle !== null) {
      globalThis.clearTimeout(this.mutationRefreshWindowHandle);
      this.mutationRefreshWindowHandle = null;
    }
  }
}
