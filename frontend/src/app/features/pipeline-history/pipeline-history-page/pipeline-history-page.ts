import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { SyncPipelineApiService } from '../../../core/api/sync-pipeline-api.service';
import { PipelineRunEventsService } from '../../../core/state/pipeline-run-events.service';
import { RunDetailFacade } from '../../../core/state/run-detail.facade';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { ApiDateTimeValue, PipelineRunSummaryInfo } from '../../../shared/models/sync-pipeline.model';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { AppPageTabs, AppPageTab } from '../../../shared/components/app-page-tabs/app-page-tabs';
import { AppPageToolbar } from '../../../shared/components/app-page-toolbar/app-page-toolbar';
import { formatDateTime, formatTimeRange } from '../../../shared/utils/date-time';

@Component({
  selector: 'app-pipeline-history-page',
  imports: [StatusChip, RouterLink, AppEmptyState, AppSkeleton, AppPageTabs, AppPageToolbar],
  templateUrl: './pipeline-history-page.html',
  styleUrl: './pipeline-history-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineHistoryPage implements OnInit, OnDestroy {
  private static readonly PAGE_SIZE = 5;
  private static readonly MUTATION_REFRESH_WINDOW_MS = 10_000;
  private static readonly MUTATION_REFRESH_INTERVAL_MS = 2_000;
  private readonly route = inject(ActivatedRoute);
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  private readonly pipelineRunEvents = inject(PipelineRunEventsService);
  private readonly runDetailFacade = inject(RunDetailFacade);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly router = inject(Router);
  private mutationRefreshHandle: ReturnType<typeof setInterval> | null = null;
  private mutationRefreshWindowHandle: ReturnType<typeof setTimeout> | null = null;

  protected readonly pipelineId = signal<number | null>(null);
  protected readonly runs = signal<PipelineRunSummaryInfo[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly isLoadingMore = signal(false);
  protected readonly loadError = signal<string | null>(null);
  protected readonly hasMore = signal(false);
  protected readonly hasRuns = computed(() => this.runs().length > 0);
  protected readonly pipelineName = computed(() => this.runs()[0]?.pipelineName ?? (this.pipelineId() ? `Pipeline #${this.pipelineId()}` : 'Pipeline History'));
  protected readonly folderPath = computed(() => this.runs()[0]?.folderPath ?? '/');
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
    this.loadHistory();
  });
  private readonly runEventSub: Subscription = this.pipelineRunEvents.events$.subscribe((event) => {
    if (event.pipelineId !== this.pipelineId()) {
      return;
    }

    this.triggerMutationRefresh();
  });
  private readonly inspectorRefreshEffect = effect(() => {
    const pipelineId = this.pipelineId();
    const detail = this.runDetailFacade.detail();
    const pendingAction = this.runDetailFacade.pendingAction();
    const status = this.runDetailFacade.selectedRunStatus();

    if (pipelineId === null || detail === null || detail.pipelineId !== pipelineId) {
      return;
    }

    if (pendingAction !== null || status !== 'IDLE') {
      this.triggerMutationRefresh();
    }
  });

  ngOnInit() {
    this.loadHistory();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.runEventSub.unsubscribe();
    this.inspectorRefreshEffect.destroy();
    this.clearMutationRefreshWindow();
  }

  protected refresh() {
    this.loadHistory({ reset: true });
  }

  protected loadMore() {
    const pipelineId = this.pipelineId();
    const beforeRunId = this.runs().at(-1)?.id ?? null;
    if (pipelineId === null || beforeRunId === null || this.isLoadingMore() || !this.hasMore()) {
      return;
    }

    this.loadHistory({
      reset: false,
      beforeRunId,
      loadingMore: true,
    });
  }

  protected inspectRun(runId: number) {
    void this.router.navigate(['/runs', runId]);
  }

  protected formatDateTime(value: ApiDateTimeValue | null) {
    return formatDateTime(value);
  }

  protected formatTimeRange(startTime: ApiDateTimeValue | null, endTime: ApiDateTimeValue | null, status: string) {
    return formatTimeRange(startTime, endTime, status === 'STARTED' || status === 'STARTING' || status === 'STOPPING');
  }

  private loadHistory(options: {
    reset: boolean;
    beforeRunId?: number | null;
    loadingMore?: boolean;
  } = {
    reset: true,
  }) {
    const pipelineId = this.pipelineId();
    if (pipelineId === null) {
      this.runs.set([]);
      this.loadError.set('Missing pipeline id.');
      this.hasMore.set(false);
      return;
    }

    if (options.loadingMore) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);

    this.syncPipelineApi.pipelineHistory(
      pipelineId,
      this.workspaceFacade.workspaceKey(),
      PipelineHistoryPage.PAGE_SIZE,
      options.beforeRunId
    )
      .pipe(finalize(() => {
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }))
      .subscribe({
      next: (runs) => {
        this.hasMore.set(runs.length === PipelineHistoryPage.PAGE_SIZE);
        this.runs.set(options.reset ? runs : [...this.runs(), ...runs]);
      },
      error: () => {
        this.loadError.set('Failed to load pipeline history.');
        if (options.reset) {
          this.runs.set([]);
        }
      }
    });
  }

  private triggerMutationRefresh() {
    this.loadHistory({ reset: true });
    this.clearMutationRefreshWindow();

    this.mutationRefreshHandle = globalThis.setInterval(() => {
      this.loadHistory({ reset: true });
    }, PipelineHistoryPage.MUTATION_REFRESH_INTERVAL_MS);

    this.mutationRefreshWindowHandle = globalThis.setTimeout(() => {
      this.clearMutationRefreshWindow();
    }, PipelineHistoryPage.MUTATION_REFRESH_WINDOW_MS);
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
