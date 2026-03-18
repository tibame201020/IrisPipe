import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-app-empty-state',
  imports: [],
  templateUrl: './app-empty-state.html',
  styleUrl: './app-empty-state.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppEmptyState {
  readonly title = input('Nothing here yet');
  readonly description = input('This area will populate when data becomes available.');
}
