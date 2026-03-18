import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkspaceFacade } from '../../state/workspace.facade';
import { HealthFacade } from '../../state/health.facade';
import { RunDetailFacade } from '../../state/run-detail.facade';
import { TreeFacade } from '../../state/tree.facade';

@Component({
  selector: 'app-shell-status-bar',
  imports: [],
  templateUrl: './shell-status-bar.html',
  styleUrl: './shell-status-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellStatusBar {
  protected readonly workspaceFacade = inject(WorkspaceFacade);
  protected readonly healthFacade = inject(HealthFacade);
  protected readonly treeFacade = inject(TreeFacade);
  protected readonly runDetailFacade = inject(RunDetailFacade);
}
