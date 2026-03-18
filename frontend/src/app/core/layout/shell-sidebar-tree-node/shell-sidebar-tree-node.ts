import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ConfigPipelineSummary, FolderTreeNodeInfo } from '../../../shared/models/pipeline-tree.model';

@Component({
  selector: 'app-shell-sidebar-tree-node',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './shell-sidebar-tree-node.html',
  styleUrl: './shell-sidebar-tree-node.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellSidebarTreeNode {
  readonly folder = input.required<FolderTreeNodeInfo>();
  readonly depth = input(0);

  protected trackFolder(index: number, childFolder: FolderTreeNodeInfo) {
    return childFolder.id ?? index;
  }

  protected trackPipeline(index: number, pipeline: ConfigPipelineSummary) {
    return pipeline.id ?? index;
  }
}
