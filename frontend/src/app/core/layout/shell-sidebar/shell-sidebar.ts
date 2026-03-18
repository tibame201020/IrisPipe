import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WorkspaceFacade } from '../../state/workspace.facade';
import { TreeFacade } from '../../state/tree.facade';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { ShellSidebarTreeNode } from '../shell-sidebar-tree-node/shell-sidebar-tree-node';

@Component({
  selector: 'app-shell-sidebar',
  imports: [RouterLink, RouterLinkActive, AppEmptyState, AppSkeleton, ShellSidebarTreeNode],
  templateUrl: './shell-sidebar.html',
  styleUrl: './shell-sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellSidebar {
  protected readonly workspaceFacade = inject(WorkspaceFacade);
  protected readonly treeFacade = inject(TreeFacade);
}
