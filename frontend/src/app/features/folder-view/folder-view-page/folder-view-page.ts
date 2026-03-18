import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PipelineFolderApiService } from '../../../core/api/pipeline-folder-api.service';
import { SyncConfigApiService } from '../../../core/api/sync-config-api.service';
import { TreeFacade } from '../../../core/state/tree.facade';
import { ToastService } from '../../../core/state/toast.service';
import { WorkspaceFacade } from '../../../core/state/workspace.facade';
import { AppEmptyState } from '../../../shared/components/app-empty-state/app-empty-state';
import { AppSkeleton } from '../../../shared/components/app-skeleton/app-skeleton';
import { AppPageToolbar } from '../../../shared/components/app-page-toolbar/app-page-toolbar';
import { AppRowActionMenu, AppRowActionMenuItem } from '../../../shared/components/app-row-action-menu/app-row-action-menu';
import { extractApiErrorInfo } from '../../../shared/utils/api-error';
import { buildStarterPipelineRequest } from '../../../shared/utils/pipeline-starter';

@Component({
  selector: 'app-folder-view-page',
  imports: [FormsModule, AppEmptyState, AppSkeleton, AppPageToolbar, AppRowActionMenu],
  templateUrl: './folder-view-page.html',
  styleUrl: './folder-view-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderViewPage {
  private readonly router = inject(Router);
  private readonly pipelineFolderApi = inject(PipelineFolderApiService);
  private readonly syncConfigApi = inject(SyncConfigApiService);
  protected readonly treeFacade = inject(TreeFacade);
  private readonly workspaceFacade = inject(WorkspaceFacade);
  private readonly toastService = inject(ToastService);

  protected readonly isActionPending = signal(false);
  protected readonly actionError = signal<string | null>(null);
  protected readonly actionErrorDetails = signal<string[]>([]);
  protected readonly actionMessage = signal<string | null>(null);
  protected readonly showCreateFolderDialog = signal(false);
  protected readonly showCreatePipelineDialog = signal(false);
  protected readonly showImportPipelineDialog = signal(false);
  protected readonly renamingFolderId = signal<number | null>(null);
  protected readonly renameFolderName = signal('');
  protected readonly createFolderName = signal('');
  protected readonly createPipelineName = signal('');
  protected readonly importPipelineName = signal('');
  protected readonly importFile = signal<File | null>(null);
  protected readonly importFileName = signal('');

  protected readonly selectedFolder = this.treeFacade.selectedFolder;
  protected readonly subfolders = computed(() => this.selectedFolder()?.folders ?? []);
  protected readonly pipelines = computed(() => this.selectedFolder()?.pipelines ?? []);
  protected readonly folderStats = computed(() => ({
    folderCount: this.subfolders().length,
    pipelineCount: this.pipelines().length,
  }));
  protected readonly canCreateFolder = computed(() => {
    return !this.isActionPending() && this.createFolderName().trim().length > 0;
  });
  protected readonly canImportPipeline = computed(() => {
    return !this.isActionPending()
      && this.importPipelineName().trim().length > 0
      && this.importFile() !== null;
  });
  protected readonly canCreatePipeline = computed(() => {
    return !this.isActionPending() && this.createPipelineName().trim().length > 0;
  });

  protected refresh() {
    this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
  }

  protected openFolder(folderId: number) {
    void this.router.navigate(['/folders', folderId]);
  }

  protected openPipeline(pipelineId: number) {
    void this.router.navigate(['/pipelines', pipelineId]);
  }

  protected startRenameFolder(folderId: number, folderName: string) {
    this.renamingFolderId.set(folderId);
    this.renameFolderName.set(folderName);
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);
  }

  protected cancelRenameFolder() {
    this.renamingFolderId.set(null);
    this.renameFolderName.set('');
  }

  protected async submitRenameFolder(parentFolderId: number | null) {
    const folderId = this.renamingFolderId();
    const folderName = this.renameFolderName().trim();
    if (folderId === null || folderName.length === 0) {
      return;
    }

    this.isActionPending.set(true);
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);

    try {
      await firstValueFrom(this.pipelineFolderApi.updateFolder(folderId, {
        parentFolderId,
        folderName,
      }, this.workspaceFacade.workspaceKey()));
      this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
      this.renamingFolderId.set(null);
      this.renameFolderName.set('');
      this.actionMessage.set('Folder renamed.');
      this.toastService.success('Folder renamed.');
    } catch (error) {
      const apiError = extractApiErrorInfo(error, 'Failed to rename folder.');
      this.actionError.set(apiError.message);
      this.actionErrorDetails.set(apiError.details);
      this.toastService.error(apiError.message);
    } finally {
      this.isActionPending.set(false);
    }
  }

  protected openPipelineOverview(pipelineId: number) {
    void this.router.navigate(['/pipelines', pipelineId]);
  }

  protected openPipelineConfig(pipelineId: number) {
    void this.router.navigate(['/pipelines', pipelineId, 'config']);
  }

  protected openPipelineHistory(pipelineId: number) {
    void this.router.navigate(['/pipelines', pipelineId, 'runs']);
  }

  protected openCreateFolderDialog() {
    this.createFolderName.set('');
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);
    this.showCreateFolderDialog.set(true);
  }

  protected closeCreateFolderDialog() {
    this.showCreateFolderDialog.set(false);
  }

  protected openImportPipelineDialog() {
    this.importPipelineName.set('');
    this.importFile.set(null);
    this.importFileName.set('');
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);
    this.showImportPipelineDialog.set(true);
  }

  protected openCreatePipelineDialog() {
    this.createPipelineName.set('');
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);
    this.showCreatePipelineDialog.set(true);
  }

  protected closeCreatePipelineDialog() {
    this.showCreatePipelineDialog.set(false);
  }

  protected closeImportPipelineDialog() {
    this.showImportPipelineDialog.set(false);
  }

  protected openImportPicker(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  protected handleImportFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.importFile.set(file);
    this.importFileName.set(file?.name ?? '');
  }

  protected async createFolder() {
    const selectedFolder = this.selectedFolder();
    if (!selectedFolder || !this.canCreateFolder()) {
      return;
    }

    this.isActionPending.set(true);
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);

    try {
      const folder = await firstValueFrom(this.pipelineFolderApi.createFolder({
        parentFolderId: selectedFolder.id,
        folderName: this.createFolderName().trim(),
      }, this.workspaceFacade.workspaceKey()));
      this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
      this.showCreateFolderDialog.set(false);
      this.actionMessage.set('Folder created.');
      this.toastService.success('Folder created.');
      await this.router.navigate(['/folders', folder.id]);
    } catch (error) {
      const apiError = extractApiErrorInfo(error, 'Failed to create folder.');
      this.actionError.set(apiError.message);
      this.actionErrorDetails.set(apiError.details);
      this.toastService.error(apiError.message);
    } finally {
      this.isActionPending.set(false);
    }
  }

  protected async createPipeline() {
    const selectedFolder = this.selectedFolder();
    const pipelineName = this.createPipelineName().trim();
    if (!selectedFolder || !this.canCreatePipeline()) {
      return;
    }

    this.isActionPending.set(true);
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);

    try {
      const pipeline = await firstValueFrom(this.syncConfigApi.createPipeline(
        buildStarterPipelineRequest(selectedFolder.id, pipelineName),
        this.workspaceFacade.workspaceKey()
      ));
      this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
      this.showCreatePipelineDialog.set(false);
      this.actionMessage.set('Starter pipeline created.');
      this.toastService.success('Starter pipeline created.');
      await this.router.navigate(['/pipelines', pipeline.id, 'config']);
    } catch (error) {
      const apiError = extractApiErrorInfo(error, 'Failed to create pipeline.');
      this.actionError.set(apiError.message);
      this.actionErrorDetails.set(apiError.details);
      this.toastService.error(apiError.message);
    } finally {
      this.isActionPending.set(false);
    }
  }

  protected async importPipeline() {
    const selectedFolder = this.selectedFolder();
    const file = this.importFile();
    if (!selectedFolder || !file || !this.canImportPipeline()) {
      return;
    }

    const lowerName = file.name.toLowerCase();
    const format = lowerName.endsWith('.json') ? 'json' : lowerName.endsWith('.yml') || lowerName.endsWith('.yaml') ? 'yaml' : null;

    this.isActionPending.set(true);
    this.actionError.set(null);
    this.actionErrorDetails.set([]);
    this.actionMessage.set(null);

    try {
      const pipeline = await firstValueFrom(this.syncConfigApi.importPipeline({
        folderId: selectedFolder.id,
        pipelineName: this.importPipelineName().trim(),
        format,
        file,
      }, this.workspaceFacade.workspaceKey()));
      this.treeFacade.loadTree(this.workspaceFacade.workspaceKey());
      this.showImportPipelineDialog.set(false);
      this.actionMessage.set('Pipeline imported.');
      this.toastService.success('Pipeline imported.');
      await this.router.navigate(['/pipelines', pipeline.id]);
    } catch (error) {
      const apiError = extractApiErrorInfo(error, 'Failed to import pipeline.');
      this.actionError.set(apiError.message);
      this.actionErrorDetails.set(apiError.details);
      this.toastService.error(apiError.message);
    } finally {
      this.isActionPending.set(false);
    }
  }

  protected folderMenuItems(folderId: number, folderName: string): AppRowActionMenuItem[] {
    return [
      { label: 'Open Folder', onSelect: () => this.openFolder(folderId) },
      { label: 'Rename', onSelect: () => this.startRenameFolder(folderId, folderName) },
    ];
  }

  protected pipelineMenuItems(pipelineId: number): AppRowActionMenuItem[] {
    return [
      { label: 'Open Overview', onSelect: () => this.openPipelineOverview(pipelineId) },
      { label: 'Open Config', onSelect: () => this.openPipelineConfig(pipelineId) },
      { label: 'Open Runs', onSelect: () => this.openPipelineHistory(pipelineId) },
    ];
  }
}
