import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface AppPageTab {
  label: string;
  commands: readonly (string | number)[];
  exact?: boolean;
  testId?: string;
}

@Component({
  selector: 'app-page-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-page-tabs.html',
  styleUrl: './app-page-tabs.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPageTabs {
  @Input({ required: true }) tabs: AppPageTab[] = [];
}
