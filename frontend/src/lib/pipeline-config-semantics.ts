import type { ConfigPipelineInfo, ConnectionInfo } from '../types/irispipe'
import {
  collectPipelineDraftIssues,
  countConfiguredConnections,
  countDraftJobs,
  countDraftSteps,
  createBlankConnection,
  isConnectionComplete,
  pipelineToDraft,
  type DraftValidationField,
  type DraftValidationIssue,
  type EditableJob,
  type EditableStage,
  type PipelineDraft,
} from './pipeline-draft'

export type DraftValidationSummary = {
  pipelineFields: Set<DraftValidationField>
  pipelineMessages: Map<DraftValidationField, string[]>
  stageIssues: Map<string, number>
  jobIssues: Map<string, number>
  stepIssues: Map<string, number>
  stageFieldMessages: Map<string, Map<DraftValidationField, string[]>>
  jobFieldMessages: Map<string, Map<DraftValidationField, string[]>>
  stepFieldMessages: Map<string, Map<DraftValidationField, string[]>>
  jobMessages: Map<string, string[]>
}

export type DraftReadinessSummary = {
  stageCount: number
  jobCount: number
  stepCount: number
  issueCount: number
  readyJobs: number
  warningJobs: number
  sourceConfiguredJobs: number
  destConfiguredJobs: number
  headline: string
  guidance: string
}

export type StageSemanticSummary = {
  issueCount: number
  readyJobs: number
  warningJobs: number
  summary: string
}

export type JobSemanticSummary = {
  state: 'ready' | 'warning' | 'error'
  issueCount: number
  connectionSummary: string
  stepSummary: string
  guidance: string
}

export function summarizeDraftValidation(validationIssues: DraftValidationIssue[]): DraftValidationSummary {
  const pipelineFields = new Set<DraftValidationField>()
  const pipelineMessages = new Map<DraftValidationField, string[]>()
  const stageIssues = new Map<string, number>()
  const jobIssues = new Map<string, number>()
  const stepIssues = new Map<string, number>()
  const stageFieldMessages = new Map<string, Map<DraftValidationField, string[]>>()
  const jobFieldMessages = new Map<string, Map<DraftValidationField, string[]>>()
  const stepFieldMessages = new Map<string, Map<DraftValidationField, string[]>>()
  const jobMessages = new Map<string, string[]>()

  validationIssues.forEach((issue) => {
    if (!issue.stageEditorId && !issue.jobEditorId && !issue.stepEditorId && issue.field) {
      pipelineFields.add(issue.field)
      pushFieldMessage(pipelineMessages, issue.field, issue.message)
    }

    if (issue.stageEditorId) {
      stageIssues.set(issue.stageEditorId, (stageIssues.get(issue.stageEditorId) ?? 0) + 1)
      if (issue.field) {
        pushScopedFieldMessage(stageFieldMessages, issue.stageEditorId, issue.field, issue.message)
      }
    }

    if (issue.jobEditorId) {
      jobIssues.set(issue.jobEditorId, (jobIssues.get(issue.jobEditorId) ?? 0) + 1)
      pushScopedMessage(jobMessages, issue.jobEditorId, issue.message)
      if (issue.field) {
        pushScopedFieldMessage(jobFieldMessages, issue.jobEditorId, issue.field, issue.message)
      }
    }

    if (issue.stepEditorId) {
      stepIssues.set(issue.stepEditorId, (stepIssues.get(issue.stepEditorId) ?? 0) + 1)
      if (issue.field) {
        pushScopedFieldMessage(stepFieldMessages, issue.stepEditorId, issue.field, issue.message)
      }
    }
  })

  return {
    pipelineFields,
    pipelineMessages,
    stageIssues,
    jobIssues,
    stepIssues,
    stageFieldMessages,
    jobFieldMessages,
    stepFieldMessages,
    jobMessages,
  }
}

export function hasPipelineFieldIssue(summary: DraftValidationSummary, field: DraftValidationField) {
  return summary.pipelineFields.has(field)
}

export function getPipelineFieldMessages(summary: DraftValidationSummary, field: DraftValidationField) {
  return summary.pipelineMessages.get(field) ?? []
}

export function getScopedFieldMessages(
  map: Map<string, Map<DraftValidationField, string[]>>,
  id: string,
  field: DraftValidationField,
) {
  return map.get(id)?.get(field) ?? []
}

export function buildDraftReadinessSummary(
  draft: PipelineDraft,
  validationSummary?: DraftValidationSummary,
): DraftReadinessSummary {
  const issues = validationSummary
    ? Array.from(validationSummary.pipelineMessages.values()).flat().length
      + Array.from(validationSummary.stageIssues.values()).reduce((sum, count) => sum + count, 0)
      + Array.from(validationSummary.jobIssues.values()).reduce((sum, count) => sum + count, 0)
      + Array.from(validationSummary.stepIssues.values()).reduce((sum, count) => sum + count, 0)
    : collectPipelineDraftIssues(draft).length

  const allJobs = draft.stages.flatMap((stage) => stage.jobs)
  const jobStates = allJobs.map((job) => getJobSemanticSummary(job, validationSummary))
  const readyJobs = jobStates.filter((job) => job.state === 'ready').length
  const warningJobs = jobStates.filter((job) => job.state !== 'ready').length

  const stageCount = draft.stages.length
  const jobCount = countDraftJobs(draft)
  const stepCount = countDraftSteps(draft)
  const sourceConfiguredJobs = countConfiguredConnections(draft, 'source')
  const destConfiguredJobs = countConfiguredConnections(draft, 'dest')

  let headline = 'Config needs work'
  let guidance = 'Resolve validation issues and complete required connections before you execute this pipeline.'

  if (issues === 0 && jobCount > 0) {
    headline = 'Config is runnable'
    guidance = 'Stage order is explicit, jobs can be parallelized inside each lane, and required inputs are present.'
  } else if (issues === 0 && jobCount === 0) {
    headline = 'Structure started'
    guidance = 'Add jobs and execution steps before creating a runnable pipeline.'
  } else if (issues <= 3) {
    headline = 'Config is close'
    guidance = 'The pipeline skeleton is in place, but a few missing fields still block a safe run.'
  }

  return {
    stageCount,
    jobCount,
    stepCount,
    issueCount: issues,
    readyJobs,
    warningJobs,
    sourceConfiguredJobs,
    destConfiguredJobs,
    headline,
    guidance,
  }
}

export function getStageSemanticSummary(stage: EditableStage, validationSummary: DraftValidationSummary): StageSemanticSummary {
  const issueCount = validationSummary.stageIssues.get(stage.editorId) ?? 0
  const jobStates = stage.jobs.map((job) => getJobSemanticSummary(job, validationSummary))
  const readyJobs = jobStates.filter((job) => job.state === 'ready').length
  const warningJobs = jobStates.length - readyJobs

  let summary = `${readyJobs}/${Math.max(stage.jobs.length, 1)} jobs ready`
  if (issueCount > 0) {
    summary = `${issueCount} validation issue${issueCount === 1 ? '' : 's'}`
  } else if (stage.jobs.length === 0) {
    summary = 'No jobs yet'
  } else if (warningJobs > 0) {
    summary = `${warningJobs} job${warningJobs === 1 ? '' : 's'} still need connection or step work`
  }

  return {
    issueCount,
    readyJobs,
    warningJobs,
    summary,
  }
}

export function getJobSemanticSummary(
  job: EditableJob,
  validationSummary?: DraftValidationSummary,
): JobSemanticSummary {
  const issueCount = validationSummary?.jobIssues.get(job.editorId) ?? 0
  const source = job.database.source ?? createBlankConnection()
  const dest = job.database.dest ?? createBlankConnection()
  const sourceReady = isConnectionCompleteOrBlank(source, true)
  const destReady = isConnectionCompleteOrBlank(dest, false)

  const stepSummary = buildJobStepSummary(job.executions.length)
  const connectionSummary = buildConnectionSummary(job.database.source, job.database.dest)

  if (issueCount > 0) {
    return {
      state: 'error',
      issueCount,
      connectionSummary,
      stepSummary,
      guidance: `${issueCount} validation issue${issueCount === 1 ? '' : 's'} need to be resolved.`,
    }
  }

  if (!sourceReady || !destReady || job.executions.length === 0) {
    return {
      state: 'warning',
      issueCount,
      connectionSummary,
      stepSummary,
      guidance: 'Review steps and required source/destination connections before running this job.',
    }
  }

  return {
    state: 'ready',
    issueCount,
    connectionSummary,
    stepSummary,
    guidance: 'This job has the minimum shape required for execution.',
  }
}

export function getPipelineConfigSemanticSummary(config: ConfigPipelineInfo) {
  const draft = pipelineToDraft(config)
  const issues = collectPipelineDraftIssues(draft)
  const validationSummary = summarizeDraftValidation(issues)
  return {
    draft,
    issues,
    validationSummary,
    readiness: buildDraftReadinessSummary(draft, validationSummary),
  }
}

function isConnectionCompleteOrBlank(connection: ConnectionInfo, source: boolean) {
  const hasAnyValue = [connection.driver, connection.url, connection.username, connection.password]
    .some((value) => value.trim().length > 0)

  if (!hasAnyValue) {
    return source
  }

  return isConnectionComplete(connection)
}

function buildJobStepSummary(stepCount: number) {
  if (stepCount === 0) return 'No execution steps'
  if (stepCount === 1) return '1 execution step'
  return `${stepCount} execution steps`
}

function buildConnectionSummary(source: ConnectionInfo | null, dest: ConnectionInfo | null) {
  const sourceLabel = source?.driver ? `src:${source.driver.split('.').pop()}` : 'src:none'
  const destLabel = dest?.driver ? `dest:${dest.driver.split('.').pop()}` : 'dest:none'
  return `${sourceLabel} | ${destLabel}`
}

function pushScopedMessage(map: Map<string, string[]>, id: string, message: string) {
  const current = map.get(id) ?? []
  current.push(message)
  map.set(id, Array.from(new Set(current)))
}

function pushFieldMessage(map: Map<DraftValidationField, string[]>, field: DraftValidationField, message: string) {
  const current = map.get(field) ?? []
  current.push(message)
  map.set(field, Array.from(new Set(current)))
}

function pushScopedFieldMessage(
  map: Map<string, Map<DraftValidationField, string[]>>,
  id: string,
  field: DraftValidationField,
  message: string,
) {
  const scoped = map.get(id) ?? new Map<DraftValidationField, string[]>()
  const current = scoped.get(field) ?? []
  current.push(message)
  scoped.set(field, Array.from(new Set(current)))
  map.set(id, scoped)
}
