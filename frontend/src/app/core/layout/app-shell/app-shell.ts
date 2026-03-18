import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellHeader } from '../shell-header/shell-header';
import { ShellSidebar } from '../shell-sidebar/shell-sidebar';
import { RunInspector } from '../run-inspector/run-inspector';
import { ShellStatusBar } from '../shell-status-bar/shell-status-bar';
import { WorkspaceFacade } from '../../state/workspace.facade';
import { TreeFacade } from '../../state/tree.facade';
import { HealthFacade } from '../../state/health.facade';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, ShellHeader, ShellSidebar, RunInspector, ShellStatusBar],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShell implements OnInit, OnDestroy {
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly treeFacade = inject(TreeFacade);
  private readonly healthFacade = inject(HealthFacade);

  private readonly workspaceTreeSync = effect(() => {
    this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
  });

  ngOnInit() {
    this.workspaceFacade.loadCurrentWorkspace();
    this.healthFacade.startPolling();
  }

  ngOnDestroy() {
    this.healthFacade.stopPolling();
    this.workspaceTreeSync.destroy();
  }
}
