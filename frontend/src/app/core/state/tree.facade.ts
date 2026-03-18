import { computed, Injectable, inject, signal } from '@angular/core';
import { PipelineTreeApiService } from '../api/pipeline-tree-api.service';
import { ConfigPipelineSummary, FolderTreeNodeInfo } from '../../shared/models/pipeline-tree.model';

@Injectable({
  providedIn: 'root',
})
export class TreeFacade {
  private readonly pipelineTreeApi = inject(PipelineTreeApiService);

  readonly selectedFolderId = signal<string | null>(null);
  readonly selectedPipelineId = signal<string | null>(null);
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
}
