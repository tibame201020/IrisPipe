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
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  protected readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly router = inject(Router);
  private pollHandle: ReturnType<typeof setInterval> | null = null;

  protected readonly runs = signal<PipelineRunSummaryInfo[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly loadError = signal<string | null>(null);
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
    this.loadRecentRuns();
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

  private loadRecentRuns() {
    this.isLoading.set(true);
    this.loadError.set(null);

    this.syncPipelineApi.recentRuns(this.workspaceFacade.workspaceKey()).subscribe({
      next: (runs) => {
        this.runs.set(runs);
      },
      error: () => {
        this.loadError.set('Failed to load recent pipeline runs.');
        this.runs.set([]);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  private startPolling() {
    if (this.pollHandle !== null) {
      return;
    }

    this.pollHandle = globalThis.setInterval(() => {
      this.loadRecentRuns();
    }, appEnvironment.polling.recentMs);
  }
}
