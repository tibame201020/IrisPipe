export type AtomicLevel = 'JOB' | 'CHUNK';

export type ExecutionType = 'INSERT' | 'UPDATE' | 'UPSERT' | 'DELETE' | 'EXECUTE';

export type SupportType = 'general' | 'timestamp';

export type SummaryInfoLayer = 'JOB' | 'STEP';

export interface ConnectionInfo {
  driver: string | null;
  url: string | null;
  username: string | null;
  password: string | null;
}

export interface DatabaseConfig {
  source: ConnectionInfo | null;
  dest: ConnectionInfo | null;
}

export interface JobParameter {
  param: string | null;
  value: unknown;
  type: SupportType | null;
}

export interface SummaryInfo {
  name: string;
  layer: SummaryInfoLayer;
  processed: number;
  inserted: number;
  updated: number;
  deleted: number;
  total: number;
}

export interface ExecutionStep {
  type: ExecutionType | null;
  name: string | null;
  sql: string | null;
  destTable: string | null;
  parameters: JobParameter[] | null;
  watermarkColumn: string | null;
  summaryInfo: SummaryInfo | null;
  executionContext: Record<string, unknown> | null;
}

export interface JobSetting {
  fetchSize: number | null;
  batchSize: number | null;
  deleteThreshold: number | null;
  atomicLevel: AtomicLevel | null;
}

export interface SyncJobDefinition {
  jobName: string;
  executions: ExecutionStep[];
  setting: JobSetting;
  database: DatabaseConfig;
}

export interface ConfigPipelineUpsertRequest {
  folderId: number | null;
  pipelineName: string;
  jobs: SyncJobDefinition[];
}

export interface FolderUpsertRequest {
  parentFolderId: number | null;
  folderName: string;
}

export interface ConfigPipelineSummary {
  id: number;
  folderId: number | null;
  folderPath: string;
  pipelineName: string;
}

export interface ConfigPipelineInfo {
  id: number;
  folderId: number | null;
  folderPath: string;
  pipelineName: string;
  jobs: SyncJobDefinition[];
}

export interface FolderInfo {
  id: number;
  parentFolderId: number | null;
  folderName: string;
  folderPath: string;
  systemRoot: boolean;
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

export interface FolderDeletePreviewFolderInfo {
  id: number;
  folderName: string;
  folderPath: string;
}

export interface FolderDeletePreviewPipelineInfo {
  id: number;
  folderId: number | null;
  folderPath: string;
  pipelineName: string;
  hasRunHistory: boolean;
}

export interface FolderDeletePreviewInfo {
  folderId: number;
  folderName: string;
  folderPath: string;
  folderCount: number;
  pipelineCount: number;
  pipelinesWithRunHistory: number;
  hasBlockers: boolean;
  folders: FolderDeletePreviewFolderInfo[];
  pipelines: FolderDeletePreviewPipelineInfo[];
  blockingPipelines: FolderDeletePreviewPipelineInfo[];
  truncated: boolean;
}
