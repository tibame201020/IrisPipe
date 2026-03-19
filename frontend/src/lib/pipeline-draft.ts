import type {
  ConfigPipelineInfo,
  ConfigPipelineUpsertRequest,
  ConnectionInfo,
  ExecutionStep,
  ExecutionType,
  JobParameter,
  SyncJobDefinition,
} from '../types/irispipe'

let editorIdCounter = 0

function createEditorId(prefix: string) {
  editorIdCounter += 1
  return `${prefix}-${editorIdCounter}`
}

export type EditableParameter = JobParameter & {
  editorId: string
}

export type EditableStep = Omit<ExecutionStep, 'parameters'> & {
  editorId: string
  parameters: EditableParameter[]
}

export type EditableJob = Omit<SyncJobDefinition, 'executions'> & {
  editorId: string
  executions: EditableStep[]
}

export type PipelineDraft = {
  folderId: number | null
  pipelineName: string
  jobs: EditableJob[]
}

export function createBlankConnection(): ConnectionInfo {
  return {
    driver: '',
    url: '',
    username: '',
    password: '',
  }
}

export function createBlankParameter(): EditableParameter {
  return {
    editorId: createEditorId('param'),
    param: '',
    value: '',
    type: 'general',
  }
}

export function createBlankStep(type: ExecutionType = 'EXECUTE'): EditableStep {
  return {
    editorId: createEditorId('step'),
    type,
    name: '',
    sql: '',
    destTable: null,
    parameters: [],
    watermarkColumn: null,
    summaryInfo: null,
    executionContext: null,
  }
}

export function createBlankJob(index: number): EditableJob {
  return {
    editorId: createEditorId('job'),
    jobName: `job_${index + 1}`,
    executions: [createBlankStep('EXECUTE')],
    setting: {
      fetchSize: null,
      batchSize: null,
      deleteThreshold: null,
      atomicLevel: 'JOB',
    },
    database: {
      source: null,
      dest: null,
    },
  }
}

export function pipelineToDraft(config: ConfigPipelineInfo): PipelineDraft {
  return {
    folderId: config.folderId,
    pipelineName: config.pipelineName,
    jobs: config.jobs.map((job) => ({
      editorId: createEditorId('job'),
      jobName: job.jobName,
      setting: {
        fetchSize: job.setting.fetchSize,
        batchSize: job.setting.batchSize,
        deleteThreshold: job.setting.deleteThreshold,
        atomicLevel: job.setting.atomicLevel,
      },
      database: {
        source: job.database.source
          ? {
              driver: job.database.source.driver,
              url: job.database.source.url,
              username: job.database.source.username,
              password: job.database.source.password,
            }
          : null,
        dest: job.database.dest
          ? {
              driver: job.database.dest.driver,
              url: job.database.dest.url,
              username: job.database.dest.username,
              password: job.database.dest.password,
            }
          : null,
      },
      executions: job.executions.map((execution) => ({
        editorId: createEditorId('step'),
        type: execution.type,
        name: execution.name,
        sql: execution.sql,
        destTable: execution.destTable,
        parameters: (execution.parameters ?? []).map((parameter) => ({
          editorId: createEditorId('param'),
          param: parameter.param,
          value: parameter.value,
          type: parameter.type ?? 'general',
        })),
        watermarkColumn: execution.watermarkColumn,
        summaryInfo: execution.summaryInfo,
        executionContext: execution.executionContext,
      })),
    })),
  }
}

export function draftToPayload(draft: PipelineDraft): ConfigPipelineUpsertRequest {
  return {
    folderId: draft.folderId,
    pipelineName: draft.pipelineName.trim(),
    jobs: draft.jobs.map((job) => ({
      jobName: job.jobName.trim(),
      setting: {
        fetchSize: normalizeNumber(job.setting.fetchSize),
        batchSize: normalizeNumber(job.setting.batchSize),
        deleteThreshold: normalizeNumber(job.setting.deleteThreshold),
        atomicLevel: job.setting.atomicLevel,
      },
      database: {
        source: normalizeConnection(job.database.source),
        dest: normalizeConnection(job.database.dest),
      },
      executions: job.executions.map((execution) => ({
        type: execution.type,
        name: execution.name?.trim() || null,
        sql: execution.sql.trim(),
        destTable: execution.destTable?.trim() || null,
        parameters: execution.parameters
          .filter((parameter) => parameter.param.trim().length > 0)
          .map((parameter) => ({
            param: parameter.param.trim(),
            value: parameter.value,
            type: parameter.type,
          })),
        watermarkColumn: execution.watermarkColumn?.trim() || null,
        summaryInfo: execution.summaryInfo ?? null,
        executionContext: execution.executionContext ?? null,
      })),
    })),
  }
}

export function validatePipelineDraft(draft: PipelineDraft): string[] {
  const issues: string[] = []

  if (!draft.pipelineName.trim()) {
    issues.push('Pipeline name is required.')
  }

  if (draft.jobs.length === 0) {
    issues.push('At least one job is required.')
  }

  draft.jobs.forEach((job, jobIndex) => {
    const jobLabel = `Job ${jobIndex + 1}`

    if (!job.jobName.trim()) {
      issues.push(`${jobLabel}: job name is required.`)
    }

    if (!job.setting.atomicLevel) {
      issues.push(`${jobLabel}: atomic level is required.`)
    }

    if (job.executions.length === 0) {
      issues.push(`${jobLabel}: at least one execution step is required.`)
    }

    job.executions.forEach((execution, stepIndex) => {
      const stepLabel = `${jobLabel} / Step ${stepIndex + 1}`

      if (!execution.sql.trim()) {
        issues.push(`${stepLabel}: SQL is required.`)
      }

      if (needsDestTable(execution.type) && !execution.destTable?.trim()) {
        issues.push(`${stepLabel}: destination table is required for ${execution.type}.`)
      }

      if (needsFetchSize(execution.type) && !isPositiveNumber(job.setting.fetchSize)) {
        issues.push(`${jobLabel}: fetch size must be greater than zero for ${execution.type}.`)
      }

      if (needsBatchSize(execution.type) && !isPositiveNumber(job.setting.batchSize)) {
        issues.push(`${jobLabel}: batch size must be greater than zero for ${execution.type}.`)
      }

      if (needsSourceConnection(execution.type) && !isConnectionComplete(job.database.source)) {
        issues.push(`${jobLabel}: a complete source connection is required for ${execution.type}.`)
      }

      if (needsDestConnection(execution.type) && !isConnectionComplete(job.database.dest)) {
        issues.push(`${jobLabel}: a complete destination connection is required for ${execution.type}.`)
      }
    })
  })

  return Array.from(new Set(issues))
}

export function isConnectionComplete(connection: ConnectionInfo | null) {
  if (!connection) return false
  return [connection.driver, connection.url, connection.username, connection.password].every(
    (value) => value.trim().length > 0,
  )
}

export function isConnectionConfigured(connection: ConnectionInfo | null) {
  if (!connection) return false
  return [connection.driver, connection.url, connection.username, connection.password].some(
    (value) => value.trim().length > 0,
  )
}

function normalizeConnection(connection: ConnectionInfo | null): ConnectionInfo | null {
  if (!connection) return null

  const normalized = {
    driver: connection.driver.trim(),
    url: connection.url.trim(),
    username: connection.username.trim(),
    password: connection.password.trim(),
  }

  if (!normalized.driver && !normalized.url && !normalized.username && !normalized.password) {
    return null
  }

  return normalized
}

function normalizeNumber(value: number | null) {
  if (value == null || Number.isNaN(value)) return null
  return value
}

function isPositiveNumber(value: number | null) {
  return typeof value === 'number' && value > 0
}

function needsDestTable(type: ExecutionType) {
  return type === 'INSERT' || type === 'UPDATE' || type === 'UPSERT' || type === 'DELETE'
}

function needsFetchSize(type: ExecutionType) {
  return type === 'INSERT' || type === 'UPDATE' || type === 'UPSERT'
}

function needsBatchSize(type: ExecutionType) {
  return type === 'INSERT' || type === 'UPDATE' || type === 'UPSERT' || type === 'DELETE'
}

function needsSourceConnection(type: ExecutionType) {
  return type === 'INSERT' || type === 'UPDATE' || type === 'UPSERT'
}

function needsDestConnection(type: ExecutionType) {
  return type === 'INSERT' || type === 'UPDATE' || type === 'UPSERT' || type === 'DELETE' || type === 'EXECUTE'
}
