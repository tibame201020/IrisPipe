import {
  ConfigPipelineInfo,
  ConfigPipelineSummary,
  ConnectionInfo,
  DatabaseConfig,
  ExecutionStep,
  FolderDeletePreviewFolderInfo,
  FolderDeletePreviewInfo,
  FolderDeletePreviewPipelineInfo,
  FolderInfo,
  FolderTreeNodeInfo,
  JobParameter,
  JobSetting,
  PipelineTreeInfo,
  SummaryInfo,
  SyncJobDefinition,
} from '../models/sync-config.model';
import {
  asArray,
  asBoolean,
  asNullableNumber,
  asNullableString,
  asNumber,
  asRecord,
  asString,
} from './normalize';

function mapConnectionInfo(value: unknown): ConnectionInfo {
  const source = asRecord(value);

  return {
    driver: asNullableString(source['driver']),
    url: asNullableString(source['url']),
    username: asNullableString(source['username']),
    password: asNullableString(source['password']),
  };
}

function mapDatabaseConfig(value: unknown): DatabaseConfig {
  const source = asRecord(value);
  const sourceConfig = source['source'];
  const destConfig = source['dest'];

  return {
    source: sourceConfig == null ? null : mapConnectionInfo(sourceConfig),
    dest: destConfig == null ? null : mapConnectionInfo(destConfig),
  };
}

function mapJobParameter(value: unknown): JobParameter {
  const source = asRecord(value);

  return {
    param: asNullableString(source['param']),
    value: source['value'] ?? null,
    type: (source['type'] === 'general' || source['type'] === 'timestamp') ? source['type'] : null,
  };
}

function mapSummaryInfo(value: unknown): SummaryInfo | null {
  if (value == null) {
    return null;
  }

  const source = asRecord(value);

  return {
    name: asString(source['name']),
    layer: source['layer'] === 'STEP' ? 'STEP' : 'JOB',
    processed: asNumber(source['processed']),
    inserted: asNumber(source['inserted']),
    updated: asNumber(source['updated']),
    deleted: asNumber(source['deleted']),
    total: asNumber(source['total']),
  };
}

function mapExecutionStep(value: unknown): ExecutionStep {
  const source = asRecord(value);
  const type = source['type'];

  return {
    type: type === 'INSERT' || type === 'UPDATE' || type === 'UPSERT' || type === 'DELETE' || type === 'EXECUTE' ? type : null,
    name: asNullableString(source['name']),
    sql: asNullableString(source['sql']),
    destTable: asNullableString(source['destTable']),
    parameters: asArray(source['parameters']).map(mapJobParameter),
    watermarkColumn: asNullableString(source['watermarkColumn']),
    summaryInfo: mapSummaryInfo(source['summaryInfo']),
    executionContext: Object.keys(asRecord(source['executionContext'])).length > 0 ? asRecord(source['executionContext']) : null,
  };
}

function mapJobSetting(value: unknown): JobSetting {
  const source = asRecord(value);
  const atomicLevel = source['atomicLevel'];

  return {
    fetchSize: asNullableNumber(source['fetchSize']),
    batchSize: asNullableNumber(source['batchSize']),
    deleteThreshold: asNullableNumber(source['deleteThreshold']),
    atomicLevel: atomicLevel === 'JOB' || atomicLevel === 'CHUNK' ? atomicLevel : null,
  };
}

function mapSyncJobDefinition(value: unknown): SyncJobDefinition {
  const source = asRecord(value);

  return {
    jobName: asString(source['jobName']),
    executions: asArray(source['executions']).map(mapExecutionStep),
    setting: mapJobSetting(source['setting']),
    database: mapDatabaseConfig(source['database']),
  };
}

export function mapConfigPipelineSummary(value: unknown): ConfigPipelineSummary {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    folderId: asNullableNumber(source['folderId']),
    folderPath: asString(source['folderPath'], '/'),
    pipelineName: asString(source['pipelineName']),
  };
}

export function mapConfigPipelineInfo(value: unknown): ConfigPipelineInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    folderId: asNullableNumber(source['folderId']),
    folderPath: asString(source['folderPath'], '/'),
    pipelineName: asString(source['pipelineName']),
    jobs: asArray(source['jobs']).map(mapSyncJobDefinition),
  };
}

export function mapFolderInfo(value: unknown): FolderInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    parentFolderId: asNullableNumber(source['parentFolderId']),
    folderName: asString(source['folderName']),
    folderPath: asString(source['folderPath'], '/'),
    systemRoot: asBoolean(source['systemRoot']),
  };
}

export function mapFolderTreeNodeInfo(value: unknown): FolderTreeNodeInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    folderName: asString(source['folderName']),
    folderPath: asString(source['folderPath'], '/'),
    folders: asArray(source['folders']).map(mapFolderTreeNodeInfo),
    pipelines: asArray(source['pipelines']).map(mapConfigPipelineSummary),
  };
}

export function mapPipelineTreeInfo(value: unknown): PipelineTreeInfo {
  const source = asRecord(value);

  return {
    folders: asArray(source['folders']).map(mapFolderTreeNodeInfo),
    pipelines: asArray(source['pipelines']).map(mapConfigPipelineSummary),
  };
}

function mapFolderDeletePreviewFolderInfo(value: unknown): FolderDeletePreviewFolderInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    folderName: asString(source['folderName']),
    folderPath: asString(source['folderPath'], '/'),
  };
}

function mapFolderDeletePreviewPipelineInfo(value: unknown): FolderDeletePreviewPipelineInfo {
  const source = asRecord(value);

  return {
    id: asNumber(source['id']),
    folderId: asNullableNumber(source['folderId']),
    folderPath: asString(source['folderPath'], '/'),
    pipelineName: asString(source['pipelineName']),
    hasRunHistory: asBoolean(source['hasRunHistory']),
  };
}

export function mapFolderDeletePreviewInfo(value: unknown): FolderDeletePreviewInfo {
  const source = asRecord(value);

  return {
    folderId: asNumber(source['folderId']),
    folderName: asString(source['folderName']),
    folderPath: asString(source['folderPath'], '/'),
    folderCount: asNumber(source['folderCount']),
    pipelineCount: asNumber(source['pipelineCount']),
    pipelinesWithRunHistory: asNumber(source['pipelinesWithRunHistory']),
    hasBlockers: asBoolean(source['hasBlockers']),
    folders: asArray(source['folders']).map(mapFolderDeletePreviewFolderInfo),
    pipelines: asArray(source['pipelines']).map(mapFolderDeletePreviewPipelineInfo),
    blockingPipelines: asArray(source['blockingPipelines']).map(mapFolderDeletePreviewPipelineInfo),
    truncated: asBoolean(source['truncated']),
  };
}
