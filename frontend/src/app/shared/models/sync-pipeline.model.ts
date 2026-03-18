import { AtomicLevel } from './sync-config.model';

export type ApiDateTimeValue = string | number[];

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
  | 'UNKNOWN';

export type PipelineRunExecutionKind = 'INITIAL' | 'RESUME';

/**
 * The backend request contract uses the historical JSON field name
 * `useAsyncLaucher`. The frontend model keeps that exact property so request
 * payloads stay wire-compatible.
 */
export interface PipelineExecuteRequest {
  useAsyncLaucher?: boolean | null;
  pipelineId: number;
}

/**
 * The backend request contract uses the historical JSON field name
 * `useAsyncLaucher`. The frontend model keeps that exact property so request
 * payloads stay wire-compatible.
 */
export interface PipelineResumeRequest {
  useAsyncLaucher?: boolean | null;
}

/**
 * The backend request contract uses the historical JSON field name
 * `useAsyncLaucher`. The frontend model keeps that exact property so request
 * payloads stay wire-compatible.
 */
export interface PipelineRerunRequest {
  useAsyncLaucher?: boolean | null;
}

export interface PipelineRunSummaryInfo {
  id: number;
  pipelineId: number;
  folderId: number | null;
  folderPath: string;
  pipelineName: string;
  status: PipelineRunStatus;
  createdAt: ApiDateTimeValue;
  startTime: ApiDateTimeValue | null;
  endTime: ApiDateTimeValue | null;
}

export interface StepExecutionInfo {
  id: number;
  stepName: string;
  status: string;
  exitCode: string;
  startTime: ApiDateTimeValue | null;
  endTime: ApiDateTimeValue | null;
  readCount: number;
  writeCount: number;
  commitCount: number;
  rollbackCount: number;
  filterCount: number;
  readSkipCount: number;
  writeSkipCount: number;
  processSkipCount: number;
  exitDescription: string;
}

export interface PipelineRunJobInfo {
  id: number;
  sequenceOrder: number;
  jobName: string;
  atomicLevel: AtomicLevel | null;
  status: PipelineRunStatus;
  rootJobInstanceId: number | null;
  lastJobExecutionId: number | null;
  createdAt: ApiDateTimeValue;
  startTime: ApiDateTimeValue | null;
  endTime: ApiDateTimeValue | null;
  stepExecutionInfos: StepExecutionInfo[];
}

export interface PipelineRunAttemptInfo {
  executionId: number;
  executionNo: number;
  executionKind: PipelineRunExecutionKind;
  status: PipelineRunStatus;
  requestedAsync: boolean | null;
  startTime: ApiDateTimeValue | null;
  endTime: ApiDateTimeValue | null;
  jobs: PipelineRunJobInfo[];
}

export interface PipelineRunDetailInfo {
  id: number;
  pipelineId: number;
  folderId: number | null;
  folderPath: string;
  pipelineName: string;
  requestedAsync: boolean | null;
  status: PipelineRunStatus;
  createdAt: ApiDateTimeValue;
  startTime: ApiDateTimeValue | null;
  endTime: ApiDateTimeValue | null;
  jobs: PipelineRunJobInfo[];
  attempts: PipelineRunAttemptInfo[];
}
