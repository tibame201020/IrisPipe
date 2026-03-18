import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';

@Component({
  selector: 'app-recent-activity-page',
  imports: [StatusChip],
  templateUrl: './recent-activity-page.html',
  styleUrl: './recent-activity-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentActivityPage {
  protected readonly runs = [
    { id: 184, status: 'STARTED', pipeline: 'sync-order', start: '10:32', end: 'now' },
    { id: 183, status: 'COMPLETED', pipeline: 'sync-stock', start: '09:10', end: '09:12' },
    { id: 182, status: 'FAILED', pipeline: 'sync-refund', start: '08:41', end: '08:44' }
  ];
}
