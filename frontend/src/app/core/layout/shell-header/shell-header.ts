import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkspaceFacade } from '../../state/workspace.facade';

@Component({
  selector: 'app-shell-header',
  imports: [],
  templateUrl: './shell-header.html',
  styleUrl: './shell-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellHeader {
  protected readonly workspaceFacade = inject(WorkspaceFacade);
}
