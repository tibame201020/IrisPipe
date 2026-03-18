import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RunDetailFacade } from '../../state/run-detail.facade';
import { StatusChip } from '../../../shared/components/status-chip/status-chip';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';

@Component({
  selector: 'app-run-inspector',
  imports: [StatusChip, AppEmptyState],
  templateUrl: './run-inspector.html',
  styleUrl: './run-inspector.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RunInspector {
  protected readonly runDetailFacade = inject(RunDetailFacade);
}
