import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app-skeleton',
  imports: [],
  templateUrl: './app-skeleton.html',
  styleUrl: './app-skeleton.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSkeleton {}
