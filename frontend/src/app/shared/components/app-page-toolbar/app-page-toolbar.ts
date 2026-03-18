import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-toolbar',
  imports: [],
  templateUrl: './app-page-toolbar.html',
  styleUrl: './app-page-toolbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPageToolbar {
  @Input() eyebrow: string | null = null;
  @Input({ required: true }) title = '';
  @Input() subtitle: string | null = null;
}
