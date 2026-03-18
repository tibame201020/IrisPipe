import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RunDetailFacade } from '../../state/run-detail.facade';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { formatTimeRange } from '../../../shared/utils/date-time';
import { ApiDateTimeValue } from '../../../shared/models/sync-pipeline.model';

@Component({
  selector: 'app-run-inspector',
  imports: [StatusChip, AppEmptyState],
  templateUrl: './run-inspector.html',
  styleUrl: './run-inspector.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunInspector {
  protected readonly runDetailFacade = inject(RunDetailFacade);

  protected formatTimeRange(startTime: ApiDateTimeValue | null, endTime: ApiDateTimeValue | null, status: string) {
    return formatTimeRange(startTime, endTime, status === 'STARTED' || status === 'STARTING' || status === 'STOPPING');
  }
}
