export type LocalDateTimeInput = string | number[] | null | undefined

export type PipelineRunStatus =
  | 'PENDING'
  | 'NOT_RUN'
  | 'SKIPPED'
  | 'STARTING'
  | 'STARTED'
  | 'STOPPING'
  | 'STOPPED'
  | 'FAILED'
  | 'COMPLETED'
  | 'ABANDONED'
  | 'UNKNOWN'

export type AtomicLevel = 'JOB' | 'CHUNK'
export type ExecutionType = 'INSERT' | 'UPDATE' | 'UPSERT' | 'DELETE' | 'EXECUTE'
export type SupportType = 'general' | 'timestamp'
export type PipelineExecutionKind = 'INITIAL' | 'RESUME' | 'RERUN'

export interface ConnectionInfo {
  driver: string
  url: string
  username: string
  password: string
}

export interface DatabaseConfig {
  source: ConnectionInfo | null
  dest: ConnectionInfo | null
}

export interface JobSetting {
  fetchSize: number | null
  batchSize: number | null
  deleteThreshold: number | null
  atomicLevel: AtomicLevel | null
}

export interface JobParameter {
  param: string
  value: unknown
  type: SupportType | null
}

export interface ExecutionStep {
  type: ExecutionType
  name: string | null
  sql: string
  destTable: string | null
  parameters: JobParameter[] | null
  watermarkColumn: string | null
  summaryInfo: unknown
  executionContext: Record<string, unknown> | null
}

export interface SyncJobDefinition {
  stage: string
  stageSequenceOrder: number
  jobName: string
  executions: ExecutionStep[]
  setting: JobSetting
  database: DatabaseConfig
}

export interface ConfigPipelineSummary {
  id: number
  folderId: number | null
  folderPath: string
  pipelineName: string
}

export interface ConfigPipelineStageInfo {
  stage: string
  stageSequenceOrder: number
  jobs: SyncJobDefinition[]
}

export interface ConfigPipelineInfo extends ConfigPipelineSummary {
  stages: string[]
  stageInfos: ConfigPipelineStageInfo[]
  jobs: SyncJobDefinition[]
}

export interface ConfigPipelineUpsertRequest {
  folderId: number | null
  pipelineName: string
  stages: string[]
  jobs: SyncJobDefinition[]
}

export interface FolderTreeNodeInfo {
  id: number
  folderName: string
  folderPath: string
  folders: FolderTreeNodeInfo[]
  pipelines: ConfigPipelineSummary[]
}

export interface FolderInfo {
  id: number
  parentFolderId: number | null
  folderName: string
  folderPath: string
  systemRoot: boolean
}

export interface FolderUpsertRequest {
  parentFolderId: number | null
  folderName: string
}

export interface FolderDeletePreviewFolderInfo {
  id: number
  folderName: string
  folderPath: string
}

export interface FolderDeletePreviewPipelineInfo {
  id: number
  folderId: number | null
  folderPath: string
  pipelineName: string
  hasRunHistory: boolean
}

export interface FolderDeletePreviewInfo {
  folderId: number
  folderName: string
  folderPath: string
  folderCount: number
  pipelineCount: number
  pipelinesWithRunHistory: number
  hasBlockers: boolean
  folders: FolderDeletePreviewFolderInfo[]
  pipelines: FolderDeletePreviewPipelineInfo[]
  blockingPipelines: FolderDeletePreviewPipelineInfo[]
  truncated: boolean
}

export interface PipelineTreeInfo {
  folders: FolderTreeNodeInfo[]
  pipelines: ConfigPipelineSummary[]
}

export interface WorkspaceInfo {
  id: number
  workspaceKey: string
  workspaceName: string
  systemDefault: boolean
}

export interface HealthResponse {
  status: string
  components?: Record<string, { status: string; details?: Record<string, unknown> }>
}

export interface PipelineRunSummaryInfo {
  id: number
  pipelineId: number
  folderId: number | null
  folderPath: string
  pipelineName: string
  status: PipelineRunStatus
  createdAt: LocalDateTimeInput
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
}

export interface StepExecutionInfo {
  id: number
  stepName: string
  status: string
  exitCode: string
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
  readCount: number
  writeCount: number
  commitCount: number
  rollbackCount: number
  filterCount: number
  readSkipCount: number
  writeSkipCount: number
  processSkipCount: number
  exitDescription: string | null
}

export interface PipelineRunJobInfo {
  id: number
  stage: string
  stageSequenceOrder: number
  sequenceOrder: number
  jobName: string
  atomicLevel: AtomicLevel
  status: PipelineRunStatus
  rootJobInstanceId: number | null
  lastJobExecutionId: number | null
  createdAt: LocalDateTimeInput
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
  stepExecutionInfos: StepExecutionInfo[]
}

export interface PipelineRunStageInfo {
  stage: string
  stageSequenceOrder: number
  status: PipelineRunStatus
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
  jobs: PipelineRunJobInfo[]
}

export interface PipelineRunAttemptInfo {
  executionId: number
  executionNo: number
  executionKind: PipelineExecutionKind
  status: PipelineRunStatus
  requestedAsync: boolean | null
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
  stages: PipelineRunStageInfo[]
  jobs: PipelineRunJobInfo[]
}

export interface PipelineRunDetailInfo {
  id: number
  pipelineId: number
  folderId: number | null
  folderPath: string
  pipelineName: string
  requestedAsync: boolean | null
  status: PipelineRunStatus
  createdAt: LocalDateTimeInput
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
  stages: PipelineRunStageInfo[]
  jobs: PipelineRunJobInfo[]
  attempts: PipelineRunAttemptInfo[]
}

export interface PipelineExecuteRequest {
  pipelineId: number
  useAsyncLaucher?: boolean
}

export interface PipelineResumeRequest {
  useAsyncLaucher?: boolean
}

export interface PipelineRerunRequest {
  useAsyncLaucher?: boolean
}

export interface ActuatorMetricsListResponse {
  names: string[]
}

export interface ActuatorMetricMeasurement {
  statistic: string
  value: number
}

export interface ActuatorMetricResponse {
  name: string
  description: string | null
  baseUnit: string | null
  measurements: ActuatorMetricMeasurement[]
  availableTags: { tag: string; values: string[] }[]
}
