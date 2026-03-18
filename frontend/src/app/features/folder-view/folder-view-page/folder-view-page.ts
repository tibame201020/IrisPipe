import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TreeFacade } from '../../../core/state/tree.facade';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';

@Component({
  selector: 'app-folder-view-page',
  imports: [AppEmptyState],
  templateUrl: './folder-view-page.html',
  styleUrl: './folder-view-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderViewPage {
  private readonly router = inject(Router);
  protected readonly treeFacade = inject(TreeFacade);
  private readonly workspaceFacade = inject(WorkspaceFacade);

  protected readonly selectedFolder = this.treeFacade.selectedFolder;
  protected readonly subfolders = computed(() => this.selectedFolder()?.folders ?? []);
  protected readonly pipelines = computed(() => this.selectedFolder()?.pipelines ?? []);
  protected readonly folderStats = computed(() => ({
    folderCount: this.subfolders().length,
    pipelineCount: this.pipelines().length,
  }));

  protected refresh() {
    this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
  }

  protected openFolder(folderId: number) {
    void this.router.navigate(['/folders', folderId]);
  }

  protected openPipeline(pipelineId: number) {
    void this.router.navigate(['/pipelines', pipelineId]);
  }
}
