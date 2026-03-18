import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { SyncPipelineApiService } from '../../../core/api/sync-pipeline-api.service';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { ApiDateTimeValue, PipelineRunSummaryInfo } from '../../../shared/models/sync-pipeline.model';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { formatDateTime, formatTimeRange } from '../../../shared/utils/date-time';

@Component({
  selector: 'app-pipeline-history-page',
  imports: [StatusChip, RouterLink, RouterLinkActive, AppEmptyState, AppSkeleton],
  templateUrl: './pipeline-history-page.html',
  styleUrl: './pipeline-history-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineHistoryPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly syncPipelineApi = inject(SyncPipelineApiService);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly router = inject(Router);

  protected readonly pipelineId = signal<number | null>(null);
  protected readonly runs = signal<PipelineRunSummaryInfo[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly loadError = signal<string | null>(null);
  protected readonly hasRuns = computed(() => this.runs().length > 0);
  protected readonly pipelineName = computed(() => this.runs()[0]?.pipelineName ?? (this.pipelineId() ? `Pipeline #${this.pipelineId()}` : 'Pipeline History'));
  protected readonly folderPath = computed(() => this.runs()[0]?.folderPath ?? '/');

  private readonly routeSub = this.route.paramMap.subscribe((params) => {
    const rawPipelineId = params.get('pipelineId');
    const pipelineId = rawPipelineId === null ? null : Number(rawPipelineId);
    this.pipelineId.set(Number.isFinite(pipelineId) ? pipelineId : null);
    this.loadHistory();
  });

  ngOnInit() {
    this.loadHistory();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  protected refresh() {
    this.loadHistory();
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

  private loadHistory() {
    const pipelineId = this.pipelineId();
    if (pipelineId === null) {
      this.runs.set([]);
      this.loadError.set('Missing pipeline id.');
      return;
    }

    this.isLoading.set(true);
    this.loadError.set(null);

    this.syncPipelineApi.pipelineHistory(pipelineId, this.workspaceFacade.workspaceKey()).subscribe({
      next: (runs) => {
        this.runs.set(runs);
      },
      error: () => {
        this.loadError.set('Failed to load pipeline history.');
        this.runs.set([]);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
