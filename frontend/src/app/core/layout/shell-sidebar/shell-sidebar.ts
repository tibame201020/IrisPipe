import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WorkspaceFacade } from '../../state/workspace.facade';

@Component({
  selector: 'app-shell-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './shell-sidebar.html',
  styleUrl: './shell-sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellSidebar {
  protected readonly workspaceFacade = inject(WorkspaceFacade);
}
