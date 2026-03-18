import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { SyncPipelineApiService } from '../../../core/api/sync-pipeline-api.service';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { ApiDateTimeValue, PipelineRunSummaryInfo } from '../../../shared/models/sync-pipeline.model';
import { appEnvironment } from '../../../core/config/app-environment';
import { formatDateTime, formatTimeRange } from '../../../shared/utils/date-time';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';

@Component({
  selector: 'app-recent-activity-page',
  imports: [StatusChip, AppEmptyState, AppSkeleton],
  templateUrl: './recent-activity-page.html',
  styleUrl: './recent-activity-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentActivityPage implements OnInit, OnDestroy {
  private static readonly PAGE_SIZE = 5;
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  protected readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly router = inject(Router);
  private pollHandle: ReturnType<typeof setInterval> | null = null;

  protected readonly runs = signal<PipelineRunSummaryInfo[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly isLoadingMore = signal(false);
  protected readonly loadError = signal<string | null>(null);
  protected readonly hasMore = signal(false);
  protected readonly hasRuns = computed(() => this.runs().length > 0);

  ngOnInit() {
    this.loadRecentRuns();
    this.startPolling();
  }

  ngOnDestroy() {
    if (this.pollHandle !== null) {
      globalThis.clearInterval(this.pollHandle);
    }
  }

  protected refresh() {
    this.loadRecentRuns({ reset: true, mergeWithExisting: this.runs().length > RecentActivityPage.PAGE_SIZE });
  }

  protected inspectRun(runId: number) {
    void this.router.navigate(['/runs', runId]);
  }

  protected loadMore() {
    const beforeRunId = this.runs().at(-1)?.id ?? null;
    if (beforeRunId === null || this.isLoadingMore() || !this.hasMore()) {
      return;
    }

    this.loadRecentRuns({
      reset: false,
      beforeRunId,
      loadingMore: true,
      mergeWithExisting: true,
    });
  }

  protected formatDateTime(value: ApiDateTimeValue | null) {
    return formatDateTime(value);
  }

  protected formatTimeRange(startTime: ApiDateTimeValue | null, endTime: ApiDateTimeValue | null, status: string) {
    return formatTimeRange(startTime, endTime, status === 'STARTED' || status === 'STARTING' || status === 'STOPPING');
  }

  private loadRecentRuns(options: {
    reset: boolean;
    beforeRunId?: number | null;
    loadingMore?: boolean;
    mergeWithExisting?: boolean;
  } = {
    reset: true,
  }) {
    if (options.loadingMore) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.loadError.set(null);

    this.syncPipelineApi.recentRuns(
      this.workspaceFacade.workspaceKey(),
      RecentActivityPage.PAGE_SIZE,
      options.beforeRunId
    ).subscribe({
      next: (runs) => {
        this.hasMore.set(runs.length === RecentActivityPage.PAGE_SIZE);
        if (options.mergeWithExisting) {
          this.runs.set(this.mergeRuns(this.runs(), runs, options.reset));
          return;
        }

        this.runs.set(runs);
      },
      error: () => {
        this.loadError.set('Failed to load recent pipeline runs.');
        if (options.reset) {
          this.runs.set([]);
        }
      },
      complete: () => {
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      }
    });
  }

  private startPolling() {
    if (this.pollHandle !== null) {
      return;
    }

    this.pollHandle = globalThis.setInterval(() => {
      this.loadRecentRuns({ reset: true, mergeWithExisting: this.runs().length > RecentActivityPage.PAGE_SIZE });
    }, appEnvironment.polling.recentMs);
  }

  private mergeRuns(
    existingRuns: PipelineRunSummaryInfo[],
    incomingRuns: PipelineRunSummaryInfo[],
    reset: boolean
  ) {
    const combined = reset
      ? [...incomingRuns, ...existingRuns]
      : [...existingRuns, ...incomingRuns];
    const uniqueRuns = new Map<number, PipelineRunSummaryInfo>();

    for (const run of combined) {
      if (!uniqueRuns.has(run.id)) {
        uniqueRuns.set(run.id, run);
      }
    }

    return [...uniqueRuns.values()];
  }
}
