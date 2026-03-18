import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RunDetailFacade } from '../../../core/state/run-detail.facade';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppPageToolbar } from '../../../shared/components/app-page-toolbar/app-page-toolbar';
import { formatDateTime } from '../../../shared/utils/date-time';
import { ApiDateTimeValue } from '../../../shared/models/sync-pipeline.model';

@Component({
  selector: 'app-run-detail-focus-page',
  imports: [StatusChip, AppEmptyState, RouterLink, AppPageToolbar],
  templateUrl: './run-detail-focus-page.html',
  styleUrl: './run-detail-focus-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunDetailFocusPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly runDetailFacade = inject(RunDetailFacade);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const rawRunId = params.get('pipelineRunId');
      const runId = rawRunId === null ? null : Number(rawRunId);
      this.runDetailFacade.selectRun(Number.isFinite(runId) ? runId : null);
    });
  }

  protected formatDateTime(value: ApiDateTimeValue | null) {
    return formatDateTime(value);
  }
}
