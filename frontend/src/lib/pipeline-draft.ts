import type {
  ConfigPipelineInfo,
  ConfigPipelineStageInfo,
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

export type EditableJob = Omit<SyncJobDefinition, 'executions' | 'stage' | 'stageSequenceOrder'> & {
  editorId: string
  executions: EditableStep[]
}

export type EditableStage = {
  editorId: string
  stageName: string
  jobs: EditableJob[]
}

export type PipelineDraft = {
  folderId: number | null
  pipelineName: string
  stages: EditableStage[]
}

export type DraftValidationField =
  | 'pipelineName'
  | 'stageName'
  | 'stageJobs'
  | 'jobName'
  | 'atomicLevel'
  | 'fetchSize'
  | 'batchSize'
  | 'executions'
  | 'sourceDriver'
  | 'sourceUrl'
  | 'sourceUsername'
  | 'sourcePassword'
  | 'destDriver'
  | 'destUrl'
  | 'destUsername'
  | 'destPassword'
  | 'sql'
  | 'destTable'

export type DraftValidationIssue = {
  message: string
  field?: DraftValidationField
  stageEditorId?: string
  jobEditorId?: string
  stepEditorId?: string
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

export function createBlankStage(index: number): EditableStage {
  return {
    editorId: createEditorId('stage'),
    stageName: `stage${index + 1}`,
    jobs: [],
  }
}

export function pipelineToDraft(config: ConfigPipelineInfo): PipelineDraft {
  const stageInfos = config.stageInfos?.length ? config.stageInfos : groupJobsIntoStageInfos(config.jobs)

  return {
    folderId: config.folderId,
    pipelineName: config.pipelineName,
    stages: stageInfos.map((stageInfo) => ({
      editorId: createEditorId('stage'),
      stageName: stageInfo.stage,
      jobs: stageInfo.jobs.map((job) => ({
        editorId: createEditorId('job'),
        jobName: job.jobName,
        setting: {
          fetchSize: job.setting.fetchSize,
          batchSize: job.setting.batchSize,
          deleteThreshold: job.setting.deleteThreshold,
          atomicLevel: job.setting.atomicLevel,
        },
        database: {
          source: cloneConnection(job.database.source),
          dest: cloneConnection(job.database.dest),
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
    })),
  }
}

export function draftToPayload(draft: PipelineDraft): ConfigPipelineUpsertRequest {
  const normalizedStages = draft.stages.map((stage) => stage.stageName.trim())

  return {
    folderId: draft.folderId,
    pipelineName: draft.pipelineName.trim(),
    stages: normalizedStages,
    jobs: draft.stages.flatMap((stage, stageIndex) =>
      stage.jobs.map((job) => ({
        stage: stage.stageName.trim(),
        stageSequenceOrder: stageIndex,
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
    ),
  }
}

export function collectPipelineDraftIssues(draft: PipelineDraft): DraftValidationIssue[] {
  const issues: DraftValidationIssue[] = []

  if (!draft.pipelineName.trim()) {
    issues.push({ message: 'Pipeline name is required.', field: 'pipelineName' })
  }

  if (draft.stages.length === 0) {
    issues.push({ message: 'At least one stage is required.' })
  }

  const stageNameMap = new Map<string, string[]>()
  draft.stages.forEach((stage) => {
    const normalized = stage.stageName.trim()
    if (!normalized) return
    const current = stageNameMap.get(normalized) ?? []
    current.push(stage.editorId)
    stageNameMap.set(normalized, current)
  })

  stageNameMap.forEach((stageEditorIds, stageName) => {
    if (stageEditorIds.length < 2) return
    stageEditorIds.forEach((stageEditorId) => {
      issues.push({
        message: `Stage "${stageName}" is duplicated.`,
        field: 'stageName',
        stageEditorId,
      })
    })
  })

  draft.stages.forEach((stage, stageIndex) => {
    const stageLabel = `Stage ${stageIndex + 1}`
    if (!stage.stageName.trim()) {
      issues.push({
        message: `${stageLabel}: stage name is required.`,
        field: 'stageName',
        stageEditorId: stage.editorId,
      })
    }

    if (stage.jobs.length === 0) {
      issues.push({
        message: `${stageLabel}: at least one job is required.`,
        field: 'stageJobs',
        stageEditorId: stage.editorId,
      })
    }

    stage.jobs.forEach((job, jobIndex) => {
      const jobLabel = `${stage.stageName || stageLabel} / Job ${jobIndex + 1}`

      if (!job.jobName.trim()) {
        issues.push({
          message: `${jobLabel}: job name is required.`,
          field: 'jobName',
          stageEditorId: stage.editorId,
          jobEditorId: job.editorId,
        })
      }

      if (!job.setting.atomicLevel) {
        issues.push({
          message: `${jobLabel}: atomic level is required.`,
          field: 'atomicLevel',
          stageEditorId: stage.editorId,
          jobEditorId: job.editorId,
        })
      }

      if (job.executions.length === 0) {
        issues.push({
          message: `${jobLabel}: at least one execution step is required.`,
          field: 'executions',
          stageEditorId: stage.editorId,
          jobEditorId: job.editorId,
        })
      }

      job.executions.forEach((execution, stepIndex) => {
        const stepLabel = `${jobLabel} / Step ${stepIndex + 1}`

        if (!execution.sql.trim()) {
          issues.push({
            message: `${stepLabel}: SQL is required.`,
            field: 'sql',
            stageEditorId: stage.editorId,
            jobEditorId: job.editorId,
            stepEditorId: execution.editorId,
          })
        }

        if (needsDestTable(execution.type) && !execution.destTable?.trim()) {
          issues.push({
            message: `${stepLabel}: destination table is required for ${execution.type}.`,
            field: 'destTable',
            stageEditorId: stage.editorId,
            jobEditorId: job.editorId,
            stepEditorId: execution.editorId,
          })
        }

        if (needsFetchSize(execution.type) && !isPositiveNumber(job.setting.fetchSize)) {
          issues.push({
            message: `${jobLabel}: fetch size must be greater than zero for ${execution.type}.`,
            field: 'fetchSize',
            stageEditorId: stage.editorId,
            jobEditorId: job.editorId,
          })
        }

        if (needsBatchSize(execution.type) && !isPositiveNumber(job.setting.batchSize)) {
          issues.push({
            message: `${jobLabel}: batch size must be greater than zero for ${execution.type}.`,
            field: 'batchSize',
            stageEditorId: stage.editorId,
            jobEditorId: job.editorId,
          })
        }

        if (needsSourceConnection(execution.type) && !isConnectionComplete(job.database.source)) {
          collectConnectionFieldIssues({
            issues,
            prefix: `${jobLabel}: source connection`,
            stageEditorId: stage.editorId,
            jobEditorId: job.editorId,
            connection: job.database.source,
            kind: 'source',
          })
        }

        if (needsDestConnection(execution.type) && !isConnectionComplete(job.database.dest)) {
          collectConnectionFieldIssues({
            issues,
            prefix: `${jobLabel}: destination connection`,
            stageEditorId: stage.editorId,
            jobEditorId: job.editorId,
            connection: job.database.dest,
            kind: 'dest',
          })
        }
      })
    })
  })

  const deduped = new Map<string, DraftValidationIssue>()
  issues.forEach((issue) => {
    const key = `${issue.message}|${issue.field ?? ''}|${issue.stageEditorId ?? ''}|${issue.jobEditorId ?? ''}|${issue.stepEditorId ?? ''}`
    if (!deduped.has(key)) {
      deduped.set(key, issue)
    }
  })

  return Array.from(deduped.values())
}

export function validatePipelineDraft(draft: PipelineDraft): string[] {
  return collectPipelineDraftIssues(draft).map((issue) => issue.message)
}

export function countDraftJobs(draft: PipelineDraft | null) {
  return draft?.stages.reduce((total, stage) => total + stage.jobs.length, 0) ?? 0
}

export function countDraftSteps(draft: PipelineDraft | null) {
  return (
    draft?.stages.reduce(
      (total, stage) => total + stage.jobs.reduce((jobTotal, job) => jobTotal + job.executions.length, 0),
      0,
    ) ?? 0
  )
}

export function countConfiguredConnections(draft: PipelineDraft | null, kind: 'source' | 'dest') {
  return (
    draft?.stages.reduce(
      (total, stage) =>
        total + stage.jobs.filter((job) => isConnectionConfigured(job.database[kind])).length,
      0,
    ) ?? 0
  )
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

function groupJobsIntoStageInfos(jobs: SyncJobDefinition[]): ConfigPipelineStageInfo[] {
  const grouped = new Map<number, ConfigPipelineStageInfo>()

  jobs.forEach((job) => {
    const current = grouped.get(job.stageSequenceOrder)
    if (current) {
      current.jobs.push(job)
      return
    }

    grouped.set(job.stageSequenceOrder, {
      stage: job.stage,
      stageSequenceOrder: job.stageSequenceOrder,
      jobs: [job],
    })
  })

  return Array.from(grouped.values()).sort((left, right) => left.stageSequenceOrder - right.stageSequenceOrder)
}

function cloneConnection(connection: ConnectionInfo | null): ConnectionInfo | null {
  if (!connection) return null
  return {
    driver: connection.driver,
    url: connection.url,
    username: connection.username,
    password: connection.password,
  }
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

function collectConnectionFieldIssues({
  issues,
  prefix,
  stageEditorId,
  jobEditorId,
  connection,
  kind,
}: {
  issues: DraftValidationIssue[]
  prefix: string
  stageEditorId: string
  jobEditorId: string
  connection: ConnectionInfo | null
  kind: 'source' | 'dest'
}) {
  const current = connection ?? createBlankConnection()
  const fields: Array<{ key: keyof ConnectionInfo; label: string; field: DraftValidationField }> =
    kind === 'source'
      ? [
          { key: 'driver', label: 'driver', field: 'sourceDriver' },
          { key: 'url', label: 'URL', field: 'sourceUrl' },
          { key: 'username', label: 'username', field: 'sourceUsername' },
          { key: 'password', label: 'password', field: 'sourcePassword' },
        ]
      : [
          { key: 'driver', label: 'driver', field: 'destDriver' },
          { key: 'url', label: 'URL', field: 'destUrl' },
          { key: 'username', label: 'username', field: 'destUsername' },
          { key: 'password', label: 'password', field: 'destPassword' },
        ]

  fields.forEach(({ key, label, field }) => {
    if (current[key].trim()) return
    issues.push({
      message: `${prefix} ${label} is required.`,
      field,
      stageEditorId,
      jobEditorId,
    })
  })
}
