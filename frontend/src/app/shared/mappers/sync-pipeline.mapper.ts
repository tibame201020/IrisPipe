import {
  PipelineRunAttemptInfo,
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunSummaryInfo,
  StepExecutionInfo,
} from '../models/sync-pipeline.model';
import { asApiDateTimeValue, asArray, asNullableBoolean, asNullableNumber, asNumber, asRecord, asString } from './normalize';

function mapStepExecutionInfo(value: unknown): StepExecutionInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    stepName: asString(source['stepName']),
    status: asString(source['status'], 'UNKNOWN'),
    exitCode: asString(source['exitCode']),
    startTime: asApiDateTimeValue(source['startTime']),
    endTime: asApiDateTimeValue(source['endTime']),
    readCount: asNumber(source['readCount']),
    writeCount: asNumber(source['writeCount']),
    commitCount: asNumber(source['commitCount']),
    rollbackCount: asNumber(source['rollbackCount']),
    filterCount: asNumber(source['filterCount']),
    readSkipCount: asNumber(source['readSkipCount']),
    writeSkipCount: asNumber(source['writeSkipCount']),
    processSkipCount: asNumber(source['processSkipCount']),
    exitDescription: asString(source['exitDescription']),
  };
}

function mapPipelineRunJobInfo(value: unknown): PipelineRunJobInfo {
  const source = asRecord(value);
  const atomicLevel = source['atomicLevel'];

  return {
    id: asNumber(source['id']),
    sequenceOrder: asNumber(source['sequenceOrder']),
    jobName: asString(source['jobName']),
    atomicLevel: atomicLevel === 'JOB' || atomicLevel === 'CHUNK' ? atomicLevel : null,
    status: asString(source['status'], 'UNKNOWN') as PipelineRunJobInfo['status'],
    rootJobInstanceId: asNullableNumber(source['rootJobInstanceId']),
    lastJobExecutionId: asNullableNumber(source['lastJobExecutionId']),
    createdAt: asApiDateTimeValue(source['createdAt']) ?? '',
    startTime: asApiDateTimeValue(source['startTime']),
    endTime: asApiDateTimeValue(source['endTime']),
    stepExecutionInfos: asArray(source['stepExecutionInfos']).map(mapStepExecutionInfo),
  };
}

function mapPipelineRunAttemptInfo(value: unknown): PipelineRunAttemptInfo {
  const source = asRecord(value);

  return {
    executionId: asNumber(source['executionId']),
    executionNo: asNumber(source['executionNo']),
    executionKind: source['executionKind'] === 'RESUME' ? 'RESUME' : 'INITIAL',
    status: asString(source['status'], 'UNKNOWN') as PipelineRunAttemptInfo['status'],
    requestedAsync: asNullableBoolean(source['requestedAsync']),
    startTime: asApiDateTimeValue(source['startTime']),
    endTime: asApiDateTimeValue(source['endTime']),
    jobs: asArray(source['jobs']).map(mapPipelineRunJobInfo),
  };
}

export function mapPipelineRunSummaryInfo(value: unknown): PipelineRunSummaryInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    pipelineId: asNumber(source['pipelineId']),
    folderId: asNullableNumber(source['folderId']),
    folderPath: asString(source['folderPath'], '/'),
    pipelineName: asString(source['pipelineName']),
    status: asString(source['status'], 'UNKNOWN') as PipelineRunSummaryInfo['status'],
    createdAt: asApiDateTimeValue(source['createdAt']) ?? '',
    startTime: asApiDateTimeValue(source['startTime']),
    endTime: asApiDateTimeValue(source['endTime']),
  };
}

export function mapPipelineRunDetailInfo(value: unknown): PipelineRunDetailInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    pipelineId: asNumber(source['pipelineId']),
    folderId: asNullableNumber(source['folderId']),
    folderPath: asString(source['folderPath'], '/'),
    pipelineName: asString(source['pipelineName']),
    requestedAsync: asNullableBoolean(source['requestedAsync']),
    status: asString(source['status'], 'UNKNOWN') as PipelineRunDetailInfo['status'],
    createdAt: asApiDateTimeValue(source['createdAt']) ?? '',
    startTime: asApiDateTimeValue(source['startTime']),
    endTime: asApiDateTimeValue(source['endTime']),
    jobs: asArray(source['jobs']).map(mapPipelineRunJobInfo),
    attempts: asArray(source['attempts']).map(mapPipelineRunAttemptInfo),
  };
}
