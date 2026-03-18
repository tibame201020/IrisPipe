import { computed, Injectable, inject, signal } from '@angular/core';
import { PipelineTreeApiService } from '../api/pipeline-tree-api.service';
import { ConfigPipelineSummary, FolderTreeNodeInfo } from '../../shared/models/pipeline-tree.model';

@Injectable({
  providedIn: 'root',
})
export class TreeFacade {
  private readonly pipelineTreeApi = inject(PipelineTreeApiService);

  readonly selectedFolderId = signal<number | null>(null);
  readonly selectedPipelineId = signal<number | null>(null);
  readonly rootFolders = signal<FolderTreeNodeInfo[]>([]);
  readonly rootPipelines = signal<ConfigPipelineSummary[]>([]);
  readonly isLoading = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly hasTreeData = computed(() => this.rootFolders().length > 0 || this.rootPipelines().length > 0);
  readonly firstFolderId = computed(() => this.rootFolders()[0]?.id ?? null);
  readonly firstPipelineId = computed(() => {
    const rootPipeline = this.rootPipelines()[0];
    if (rootPipeline) {
      return rootPipeline.id;
    }

    return this.findFirstPipelineId(this.rootFolders()) ?? null;
  });
  readonly selectedFolder = computed<FolderTreeNodeInfo | null>(() => {
    const selectedFolderId = this.selectedFolderId();
    if (selectedFolderId === null) {
      return null;
    }

    return this.findFolderById(this.rootFolders(), selectedFolderId) ?? null;
  });
  readonly selectedPipeline = computed<ConfigPipelineSummary | null>(() => {
    const selectedPipelineId = this.selectedPipelineId();
    if (selectedPipelineId === null) {
      return null;
    }

    return this.findPipelineById(selectedPipelineId) ?? null;
  });

  loadTree(workspaceKey: string) {
    this.isLoading.set(true);
    this.loadError.set(null);

    this.pipelineTreeApi.getTree(workspaceKey).subscribe({
      next: (tree) => {
        this.rootFolders.set(tree.folders);
        this.rootPipelines.set(tree.pipelines);
      },
      error: () => {
        this.loadError.set('Failed to load pipeline tree.');
        this.rootFolders.set([]);
        this.rootPipelines.set([]);
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  selectFolder(folderId: number | null) {
    this.selectedFolderId.set(folderId);
    if (folderId !== null) {
      this.selectedPipelineId.set(null);
    }
  }

  selectPipeline(pipelineId: number | null) {
    this.selectedPipelineId.set(pipelineId);
    if (pipelineId === null) {
      return;
    }

    const pipelineLocation = this.findPipelineLocation(this.rootFolders(), pipelineId);
    this.selectedFolderId.set(pipelineLocation?.folderId ?? null);
  }

  clearSelection() {
    this.selectedFolderId.set(null);
    this.selectedPipelineId.set(null);
  }

  private findFirstPipelineId(folders: FolderTreeNodeInfo[]): number | undefined {
    for (const folder of folders) {
      const firstLocalPipeline = folder.pipelines[0]?.id;
      if (firstLocalPipeline !== undefined) {
        return firstLocalPipeline;
      }

      const nestedPipeline = this.findFirstPipelineId(folder.folders);
      if (nestedPipeline !== undefined) {
        return nestedPipeline;
      }
    }

    return undefined;
  }

  private findFolderById(folders: FolderTreeNodeInfo[], folderId: number): FolderTreeNodeInfo | null {
    for (const folder of folders) {
      if (folder.id === folderId) {
        return folder;
      }

      const nested = this.findFolderById(folder.folders, folderId);
      if (nested !== null) {
        return nested;
      }
    }

    return null;
  }

  private findPipelineById(pipelineId: number): ConfigPipelineSummary | undefined {
    const rootPipeline = this.rootPipelines().find((pipeline) => pipeline.id === pipelineId);
    if (rootPipeline) {
      return rootPipeline;
    }

    return this.findPipelineInFolders(this.rootFolders(), pipelineId);
  }

  private findPipelineInFolders(folders: FolderTreeNodeInfo[], pipelineId: number): ConfigPipelineSummary | undefined {
    for (const folder of folders) {
      const localPipeline = folder.pipelines.find((pipeline) => pipeline.id === pipelineId);
      if (localPipeline) {
        return localPipeline;
      }

      const nested = this.findPipelineInFolders(folder.folders, pipelineId);
      if (nested) {
        return nested;
      }
    }

    return undefined;
  }

  private findPipelineLocation(
    folders: FolderTreeNodeInfo[],
    pipelineId: number,
    parentFolderId: number | null = null
  ): { folderId: number | null; pipeline: ConfigPipelineSummary } | null {
    for (const folder of folders) {
      const localPipeline = folder.pipelines.find((pipeline) => pipeline.id === pipelineId);
      if (localPipeline) {
        return { folderId: folder.id, pipeline: localPipeline };
      }

      const nested = this.findPipelineLocation(folder.folders, pipelineId, folder.id);
      if (nested !== null) {
        return nested;
      }
    }

    const rootPipeline = parentFolderId === null
      ? this.rootPipelines().find((pipeline) => pipeline.id === pipelineId)
      : undefined;

    return rootPipeline ? { folderId: null, pipeline: rootPipeline } : null;
  }
}
