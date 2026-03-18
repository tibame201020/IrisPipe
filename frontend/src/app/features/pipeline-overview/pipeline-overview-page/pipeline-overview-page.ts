import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';

@Component({
  selector: 'app-pipeline-overview-page',
  imports: [StatusChip],
  templateUrl: './pipeline-overview-page.html',
  styleUrl: './pipeline-overview-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineOverviewPage {
  protected readonly recentRuns = [
    { id: 184, status: 'STARTED' },
    { id: 183, status: 'COMPLETED' },
    { id: 182, status: 'FAILED' }
  ];
}
