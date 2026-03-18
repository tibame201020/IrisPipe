import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';

@Component({
  selector: 'app-pipeline-history-page',
  imports: [StatusChip],
  templateUrl: './pipeline-history-page.html',
  styleUrl: './pipeline-history-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineHistoryPage {
  protected readonly runs = [
    { id: 184, status: 'STARTED', attempts: 2, start: '10:32', end: 'now', async: 'true' },
    { id: 183, status: 'COMPLETED', attempts: 1, start: '09:10', end: '09:12', async: 'true' },
    { id: 182, status: 'FAILED', attempts: 1, start: '08:41', end: '08:44', async: 'false' }
  ];
}
