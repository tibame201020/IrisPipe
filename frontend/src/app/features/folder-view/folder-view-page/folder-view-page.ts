import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-folder-view-page',
  imports: [],
  templateUrl: './folder-view-page.html',
  styleUrl: './folder-view-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderViewPage {
  protected readonly folders = [
    { name: 'refunds', items: 3 },
    { name: 'archived', items: 8 }
  ];

  protected readonly pipelines = [
    { name: 'sync-order' },
    { name: 'sync-refund' },
    { name: 'sync-cancel' }
  ];
}
