export interface ConfigPipelineSummary {
  id: number;
  folderId: number | null;
  folderPath: string;
  pipelineName: string;
}

export interface FolderTreeNodeInfo {
  id: number;
  folderName: string;
  folderPath: string;
  folders: FolderTreeNodeInfo[];
  pipelines: ConfigPipelineSummary[];
}

export interface PipelineTreeInfo {
  folders: FolderTreeNodeInfo[];
  pipelines: ConfigPipelineSummary[];
}
