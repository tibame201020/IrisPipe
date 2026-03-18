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
import { buildStarterPipelineRequest } from '../../../shared/utils/pipeline-starter';

@Component({
  selector: 'app-folder-view-page',
  imports: [FormsModule, AppEmptyState],
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
  protected readonly actionMessage = signal<string | null>(null);
  protected readonly showCreateFolderDialog = signal(false);
  protected readonly showCreatePipelineDialog = signal(false);
  protected readonly showImportPipelineDialog = signal(false);
  protected readonly activeMenu = signal<{ type: 'folder' | 'pipeline'; id: number } | null>(null);
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
    this.activeMenu.set(null);
    void this.router.navigate(['/folders', folderId]);
  }

  protected openPipeline(pipelineId: number) {
    this.activeMenu.set(null);
    void this.router.navigate(['/pipelines', pipelineId]);
  }

  protected toggleFolderMenu(folderId: number) {
    const activeMenu = this.activeMenu();
    if (activeMenu?.type === 'folder' && activeMenu.id === folderId) {
      this.activeMenu.set(null);
      return;
    }

    this.activeMenu.set({ type: 'folder', id: folderId });
  }

  protected togglePipelineMenu(pipelineId: number) {
    const activeMenu = this.activeMenu();
    if (activeMenu?.type === 'pipeline' && activeMenu.id === pipelineId) {
      this.activeMenu.set(null);
      return;
    }

    this.activeMenu.set({ type: 'pipeline', id: pipelineId });
  }

  protected isFolderMenuOpen(folderId: number) {
    const activeMenu = this.activeMenu();
    return activeMenu?.type === 'folder' && activeMenu.id === folderId;
  }

  protected isPipelineMenuOpen(pipelineId: number) {
    const activeMenu = this.activeMenu();
    return activeMenu?.type === 'pipeline' && activeMenu.id === pipelineId;
  }

  protected startRenameFolder(folderId: number, folderName: string) {
    this.activeMenu.set(null);
    this.renamingFolderId.set(folderId);
    this.renameFolderName.set(folderName);
    this.actionError.set(null);
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
    } catch {
      this.actionError.set('Failed to rename folder.');
      this.toastService.error('Failed to rename folder.');
    } finally {
      this.isActionPending.set(false);
    }
  }

  protected openPipelineOverview(pipelineId: number) {
    this.activeMenu.set(null);
    void this.router.navigate(['/pipelines', pipelineId]);
  }

  protected openPipelineConfig(pipelineId: number) {
    this.activeMenu.set(null);
    void this.router.navigate(['/pipelines', pipelineId, 'config']);
  }

  protected openPipelineHistory(pipelineId: number) {
    this.activeMenu.set(null);
    void this.router.navigate(['/pipelines', pipelineId, 'runs']);
  }

  protected openCreateFolderDialog() {
    this.createFolderName.set('');
    this.actionError.set(null);
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
    this.actionMessage.set(null);
    this.showImportPipelineDialog.set(true);
  }

  protected openCreatePipelineDialog() {
    this.createPipelineName.set('');
    this.actionError.set(null);
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
    } catch {
      this.actionError.set('Failed to create folder.');
      this.toastService.error('Failed to create folder.');
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
    } catch {
      this.actionError.set('Failed to create pipeline.');
      this.toastService.error('Failed to create pipeline.');
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
    } catch {
      this.actionError.set('Failed to import pipeline.');
      this.toastService.error('Failed to import pipeline.');
    } finally {
      this.isActionPending.set(false);
    }
  }
}
