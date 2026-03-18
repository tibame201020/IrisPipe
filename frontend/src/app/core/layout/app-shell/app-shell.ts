import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ShellHeader } from '../shell-header/shell-header';
import { ShellSidebar } from '../shell-sidebar/shell-sidebar';
import { RunInspector } from '../run-inspector/run-inspector';
import { ShellStatusBar } from '../shell-status-bar/shell-status-bar';
import { WorkspaceFacade } from '../../state/workspace.facade';
import { TreeFacade } from '../../state/tree.facade';
import { HealthFacade } from '../../state/health.facade';
import { filter } from 'rxjs';

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
  private readonly router = inject(Router);

  private readonly workspaceTreeSync = effect(() => {
    this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
  });
  private readonly routerSub = this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event) => {
      this.syncSelectionFromUrl((event as NavigationEnd).urlAfterRedirects);
    });

  ngOnInit() {
    this.workspaceFacade.loadCurrentWorkspace();
    this.healthFacade.startPolling();
    this.syncSelectionFromUrl(this.router.url);
  }

  ngOnDestroy() {
    this.healthFacade.stopPolling();
    this.workspaceTreeSync.destroy();
    this.routerSub.unsubscribe();
  }

  private syncSelectionFromUrl(url: string) {
    const folderMatch = url.match(/^\/folders\/(\d+)$/);
    if (folderMatch) {
      this.treeFacade.selectFolder(Number(folderMatch[1]));
      return;
    }

    const pipelineMatch = url.match(/^\/pipelines\/(\d+)(?:\/.*)?$/);
    if (pipelineMatch) {
      this.treeFacade.selectPipeline(Number(pipelineMatch[1]));
      return;
    }

    this.treeFacade.clearSelection();
  }
}
