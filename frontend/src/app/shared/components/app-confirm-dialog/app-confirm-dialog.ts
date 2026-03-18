import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-app-confirm-dialog',
  imports: [],
  templateUrl: './app-confirm-dialog.html',
  styleUrl: './app-confirm-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppConfirmDialog {
  readonly title = input('Confirm action');
  readonly message = input('Review this action before continuing.');
}
