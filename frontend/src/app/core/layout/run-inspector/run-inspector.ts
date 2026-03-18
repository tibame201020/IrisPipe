import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RunDetailFacade } from '../../state/run-detail.facade';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppConfirmDialog } from '../../../shared/components/app-confirm-dialog/app-confirm-dialog';
import { formatTimeRange } from '../../../shared/utils/date-time';
import { ApiDateTimeValue } from '../../../shared/models/sync-pipeline.model';

@Component({
  selector: 'app-run-inspector',
  imports: [StatusChip, AppEmptyState, AppConfirmDialog],
  templateUrl: './run-inspector.html',
  styleUrl: './run-inspector.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunInspector {
  private readonly router = inject(Router);
  protected readonly runDetailFacade = inject(RunDetailFacade);
  protected readonly showDeleteConfirm = signal(false);

  protected formatTimeRange(startTime: ApiDateTimeValue | null, endTime: ApiDateTimeValue | null, status: string) {
    return formatTimeRange(startTime, endTime, status === 'STARTED' || status === 'STARTING' || status === 'STOPPING');
  }

  protected async stopRun() {
    await this.runDetailFacade.stopRun();
  }

  protected async resumeRun() {
    await this.runDetailFacade.resumeRun();
  }

  protected async rerunRun() {
    const summary = await this.runDetailFacade.rerunRun();
    if (summary) {
      await this.router.navigate(['/runs', summary.id]);
    }
  }

  protected openDeleteConfirm() {
    this.showDeleteConfirm.set(true);
  }

  protected closeDeleteConfirm() {
    this.showDeleteConfirm.set(false);
  }

  protected async deleteRun() {
    const deleted = await this.runDetailFacade.deleteRun();
    if (!deleted) {
      this.showDeleteConfirm.set(false);
      return;
    }

    this.showDeleteConfirm.set(false);
    await this.router.navigate(['/recent']);
  }
}
