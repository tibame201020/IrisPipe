import { parseLocalDateTime } from './date'
import type {
  PipelineExecutionKind,
  PipelineRunAttemptInfo,
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunStageInfo,
  PipelineRunStatus,
  PipelineRunSummaryInfo,
  StepExecutionInfo,
} from '../types/irispipe'

type RuntimeStatus = PipelineRunStatus | 'UP' | 'DOWN'

export type PipelineStatusTone = 'success' | 'error' | 'warning' | 'info' | 'neutral'

export type PipelineStatusMeta = {
  status: RuntimeStatus | string
  label: string
  tone: PipelineStatusTone
  badgeClass: string
  textClass: string
  dotClass: string
  description: string
  isActive: boolean
  isTerminal: boolean
  isFailure: boolean
  isResumable: boolean
}

export type RunActionKey = 'stop' | 'resume' | 'rerun' | 'delete'

export type RunActionDescriptor = {
  key: RunActionKey
  label: string
  confirmTitle: string
  detail: string
  enabled: boolean
  disabledReason?: string
}

type StatusMetaInput = Omit<PipelineStatusMeta, 'status'>

const PIPELINE_STATUS_META: Record<RuntimeStatus, StatusMetaInput> = {
  UP: {
    label: 'Healthy',
    tone: 'success',
    badgeClass: 'badge-success',
    textClass: 'text-success',
    dotClass: 'bg-success',
    description: 'The backend reports a healthy engine state.',
    isActive: false,
    isTerminal: true,
    isFailure: false,
    isResumable: false,
  },
  DOWN: {
    label: 'Unavailable',
    tone: 'error',
    badgeClass: 'badge-error',
    textClass: 'text-error',
    dotClass: 'bg-error',
    description: 'The backend health endpoint reports a failure.',
    isActive: false,
    isTerminal: true,
    isFailure: true,
    isResumable: false,
  },
  STARTING: {
    label: 'Starting',
    tone: 'info',
    badgeClass: 'badge-info',
    textClass: 'text-info',
    dotClass: 'bg-info',
    description: 'The attempt exists and Spring Batch is spinning up work.',
    isActive: true,
    isTerminal: false,
    isFailure: false,
    isResumable: false,
  },
  STARTED: {
    label: 'Running',
    tone: 'info',
    badgeClass: 'badge-info',
    textClass: 'text-info',
    dotClass: 'bg-info',
    description: 'Jobs inside the current stage are actively executing.',
    isActive: true,
    isTerminal: false,
    isFailure: false,
    isResumable: false,
  },
  STOPPING: {
    label: 'Stopping',
    tone: 'warning',
    badgeClass: 'badge-warning',
    textClass: 'text-warning',
    dotClass: 'bg-warning',
    description: 'A stop request is in flight; later stages may settle as Not Run.',
    isActive: true,
    isTerminal: false,
    isFailure: false,
    isResumable: false,
  },
  STOPPED: {
    label: 'Stopped',
    tone: 'warning',
    badgeClass: 'badge-warning',
    textClass: 'text-warning',
    dotClass: 'bg-warning',
    description: 'Execution stopped before the full stage graph completed.',
    isActive: false,
    isTerminal: true,
    isFailure: true,
    isResumable: true,
  },
  FAILED: {
    label: 'Failed',
    tone: 'error',
    badgeClass: 'badge-error',
    textClass: 'text-error',
    dotClass: 'bg-error',
    description: 'A job or stage failed and halted downstream progress.',
    isActive: false,
    isTerminal: true,
    isFailure: true,
    isResumable: true,
  },
  COMPLETED: {
    label: 'Completed',
    tone: 'success',
    badgeClass: 'badge-success',
    textClass: 'text-success',
    dotClass: 'bg-success',
    description: 'All required stages completed successfully.',
    isActive: false,
    isTerminal: true,
    isFailure: false,
    isResumable: false,
  },
  PENDING: {
    label: 'Pending',
    tone: 'neutral',
    badgeClass: 'badge-ghost',
    textClass: 'text-base-content/60',
    dotClass: 'bg-base-content/45',
    description: 'The job is registered but not launched yet.',
    isActive: false,
    isTerminal: false,
    isFailure: false,
    isResumable: false,
  },
  UNKNOWN: {
    label: 'Unknown',
    tone: 'neutral',
    badgeClass: 'badge-ghost',
    textClass: 'text-base-content/60',
    dotClass: 'bg-base-content/45',
    description: 'The engine could not determine a stable terminal status.',
    isActive: false,
    isTerminal: true,
    isFailure: true,
    isResumable: true,
  },
  NOT_RUN: {
    label: 'Not Run',
    tone: 'neutral',
    badgeClass: 'badge-ghost',
    textClass: 'text-base-content/60',
    dotClass: 'bg-base-content/35',
    description: 'The stage or job never launched, usually because an earlier barrier failed or stopped.',
    isActive: false,
    isTerminal: true,
    isFailure: false,
    isResumable: false,
  },
  SKIPPED: {
    label: 'Skipped',
    tone: 'neutral',
    badgeClass: 'badge-ghost',
    textClass: 'text-base-content/60',
    dotClass: 'bg-base-content/45',
    description: 'The job was intentionally carried forward during resume because a prior attempt already completed it.',
    isActive: false,
    isTerminal: true,
    isFailure: false,
    isResumable: false,
  },
  ABANDONED: {
    label: 'Abandoned',
    tone: 'error',
    badgeClass: 'badge-error',
    textClass: 'text-error',
    dotClass: 'bg-error',
    description: 'The run entered a terminal failure state and did not complete normally.',
    isActive: false,
    isTerminal: true,
    isFailure: true,
    isResumable: true,
  },
}

export type PipelineRunHistoryStats = {
  total: number
  active: number
  failed: number
  completed: number
  stopped: number
  resumable: number
  terminal: number
  successRate: number
  avgDurationMs: number | null
  avgLabel: string
}

export type JobStepTotals = {
  read: number
  write: number
  commit: number
  rollback: number
  filter: number
  skip: number
}

export type StageProgressSummary = {
  completedJobs: number
  failedJobs: number
  activeJobs: number
  skippedJobs: number
  notRunJobs: number
  pendingJobs: number
  totalJobs: number
  summary: string
  progressLabel: string
  blockerLabel: string | null
}

export type AttemptProgressSummary = {
  completedStages: number
  activeStages: number
  failedStages: number
  notRunStages: number
  skippedStages: number
  totalStages: number
  headline: string
  detail: string
}

export function getPipelineStatusMeta(status: string): PipelineStatusMeta {
  const known = PIPELINE_STATUS_META[status as RuntimeStatus]
  if (known) {
    return {
      status,
      ...known,
    }
  }

  return {
    status,
    label: status,
    tone: 'neutral',
    badgeClass: 'badge-ghost',
    textClass: 'text-base-content/60',
    dotClass: 'bg-base-content/45',
    description: 'No semantic mapping is registered for this status yet.',
    isActive: false,
    isTerminal: false,
    isFailure: false,
    isResumable: false,
  }
}

export function isPipelineStatusActive(status: string) {
  return getPipelineStatusMeta(status).isActive
}

export function isPipelineStatusTerminal(status: string) {
  return getPipelineStatusMeta(status).isTerminal
}

export function isPipelineStatusFailure(status: string) {
  return getPipelineStatusMeta(status).isFailure
}

export function isPipelineStatusResumable(status: string) {
  return getPipelineStatusMeta(status).isResumable
}

export function canStopPipelineStatus(status: string) {
  return status === 'STARTING' || status === 'STARTED' || status === 'STOPPING'
}

export function canDeletePipelineStatus(status: string) {
  return status === 'COMPLETED' || status === 'FAILED' || status === 'STOPPED' || status === 'ABANDONED' || status === 'UNKNOWN'
}

export function summarizePipelineRunHistory(runs: PipelineRunSummaryInfo[]): PipelineRunHistoryStats | null {
  if (runs.length === 0) return null

  const completed = runs.filter((run) => run.status === 'COMPLETED').length
  const failed = runs.filter((run) => run.status === 'FAILED' || run.status === 'ABANDONED').length
  const stopped = runs.filter((run) => run.status === 'STOPPED').length
  const active = runs.filter((run) => isPipelineStatusActive(run.status)).length
  const resumable = runs.filter((run) => isPipelineStatusResumable(run.status)).length
  const terminal = runs.filter((run) => isPipelineStatusTerminal(run.status)).length
  const successRate = runs.length > 0 ? Math.round((completed / runs.length) * 100) : 0

  const completedDurations = runs
    .map((run) => getDurationMs(run.startTime, run.endTime))
    .filter((value): value is number => value != null)

  const avgDurationMs = completedDurations.length > 0
    ? completedDurations.reduce((sum, value) => sum + value, 0) / completedDurations.length
    : null

  return {
    total: runs.length,
    active,
    failed,
    completed,
    stopped,
    resumable,
    terminal,
    successRate,
    avgDurationMs,
    avgLabel: formatDurationLabel(avgDurationMs),
  }
}

export function getStepExecutionTotals(step: StepExecutionInfo): JobStepTotals {
  return {
    read: step.readCount,
    write: step.writeCount,
    commit: step.commitCount,
    rollback: step.rollbackCount,
    filter: step.filterCount,
    skip: step.readSkipCount + step.writeSkipCount + step.processSkipCount,
  }
}

export function getJobStepTotals(job: Pick<PipelineRunJobInfo, 'stepExecutionInfos'>): JobStepTotals {
  return job.stepExecutionInfos.reduce<JobStepTotals>(
    (acc, step) => {
      const totals = getStepExecutionTotals(step)
      return {
        read: acc.read + totals.read,
        write: acc.write + totals.write,
        commit: acc.commit + totals.commit,
        rollback: acc.rollback + totals.rollback,
        filter: acc.filter + totals.filter,
        skip: acc.skip + totals.skip,
      }
    },
    { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 },
  )
}

export function getAttemptStepTotals(attempt: Pick<PipelineRunAttemptInfo, 'jobs'>): JobStepTotals {
  return attempt.jobs.reduce<JobStepTotals>(
    (acc, job) => {
      const totals = getJobStepTotals(job)
      return {
        read: acc.read + totals.read,
        write: acc.write + totals.write,
        commit: acc.commit + totals.commit,
        rollback: acc.rollback + totals.rollback,
        filter: acc.filter + totals.filter,
        skip: acc.skip + totals.skip,
      }
    },
    { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 },
  )
}

export function extractRunJobErrorLine(job: Pick<PipelineRunJobInfo, 'stepExecutionInfos'>) {
  const failedStep = job.stepExecutionInfos.find(
    (step) => step.exitDescription && step.exitDescription.trim().length > 0 && step.exitCode !== 'COMPLETED',
  )
  return failedStep?.exitDescription ? failedStep.exitDescription.split('\n')[0].slice(0, 120) : undefined
}

export function summarizePipelineStage(stage: PipelineRunStageInfo): StageProgressSummary {
  const totalJobs = stage.jobs.length
  const completedJobs = stage.jobs.filter((job) => job.status === 'COMPLETED').length
  const failedJobs = stage.jobs.filter((job) => job.status === 'FAILED' || job.status === 'ABANDONED').length
  const activeJobs = stage.jobs.filter((job) => isPipelineStatusActive(job.status)).length
  const skippedJobs = stage.jobs.filter((job) => job.status === 'SKIPPED').length
  const notRunJobs = stage.jobs.filter((job) => job.status === 'NOT_RUN').length
  const pendingJobs = stage.jobs.filter((job) => job.status === 'PENDING').length

  let summary = `${completedJobs}/${Math.max(totalJobs, 1)} completed`
  let blockerLabel: string | null = null

  if (failedJobs > 0) {
    summary = `${failedJobs} failed, ${completedJobs} completed`
    blockerLabel = 'Failed inside this stage'
  } else if (activeJobs > 0) {
    summary = `${activeJobs} running, ${completedJobs} completed`
    blockerLabel = 'Current active stage'
  } else if (notRunJobs > 0) {
    summary = `${notRunJobs} not run, ${completedJobs} completed`
    blockerLabel = 'Blocked by an earlier stage barrier'
  } else if (skippedJobs > 0) {
    summary = `${skippedJobs} skipped, ${completedJobs} completed`
    blockerLabel = 'Prefix jobs were reused during resume'
  } else if (pendingJobs > 0) {
    summary = `${pendingJobs} pending, ${completedJobs} completed`
    blockerLabel = 'Waiting to launch'
  }

  return {
    completedJobs,
    failedJobs,
    activeJobs,
    skippedJobs,
    notRunJobs,
    pendingJobs,
    totalJobs,
    summary,
    progressLabel: `${completedJobs}/${totalJobs || 0}`,
    blockerLabel,
  }
}

export function summarizeAttemptProgress(attempt: PipelineRunAttemptInfo): AttemptProgressSummary {
  const totalStages = attempt.stages.length
  const completedStages = attempt.stages.filter((stage) => stage.status === 'COMPLETED').length
  const activeStages = attempt.stages.filter((stage) => isPipelineStatusActive(stage.status)).length
  const failedStages = attempt.stages.filter((stage) => stage.status === 'FAILED' || stage.status === 'ABANDONED').length
  const notRunStages = attempt.stages.filter((stage) => stage.status === 'NOT_RUN').length
  const skippedStages = attempt.stages.filter((stage) => stage.status === 'SKIPPED').length

  const kindLabel = getAttemptKindLabel(attempt.executionKind)
  const headline = `${kindLabel} attempt #${attempt.executionNo}`

  let detail = `${completedStages}/${Math.max(totalStages, 1)} stages completed`
  if (failedStages > 0) {
    detail = `${failedStages} stage failed; downstream stages may be blocked`
  } else if (activeStages > 0) {
    detail = `${activeStages} active stage${activeStages === 1 ? '' : 's'} executing now`
  } else if (notRunStages > 0) {
    detail = `${notRunStages} stage${notRunStages === 1 ? '' : 's'} never launched after a barrier stop`
  } else if (skippedStages > 0) {
    detail = `${skippedStages} stage${skippedStages === 1 ? '' : 's'} contain reused jobs from an earlier attempt`
  }

  return {
    completedStages,
    activeStages,
    failedStages,
    notRunStages,
    skippedStages,
    totalStages,
    headline,
    detail,
  }
}

export function findResumeTargetStage(attempt: PipelineRunAttemptInfo | null) {
  if (!attempt) return null

  return attempt.stages.find((stage) => stage.status !== 'COMPLETED' && stage.status !== 'SKIPPED')
    ?? (attempt.status === 'STOPPED' ? attempt.stages[0] ?? null : null)
}

export function getRunEffectiveStatus(
  detail: Pick<PipelineRunDetailInfo, 'status'>,
  attempt: Pick<PipelineRunAttemptInfo, 'status'> | null,
) {
  return attempt?.status ?? detail.status
}

export function getRunActionDescriptors(
  detail: PipelineRunDetailInfo,
  attempt: PipelineRunAttemptInfo | null,
): Record<RunActionKey, RunActionDescriptor> {
  const effectiveStatus = getRunEffectiveStatus(detail, attempt)
  const latestAttempt = detail.attempts[detail.attempts.length - 1] ?? null
  const resumeTargetStage = findResumeTargetStage(latestAttempt)
  const nextAttemptNo = (latestAttempt?.executionNo ?? 0) + 1

  return {
    stop: {
      key: 'stop',
      label: 'Stop Attempt',
      confirmTitle: 'Stop Current Attempt',
      detail: `Send a stop request to the active attempt. Jobs already completed stay persisted, and later stages can settle as Not Run once the barrier closes.`,
      enabled: canStopPipelineStatus(effectiveStatus),
      disabledReason: 'Only in-flight attempts can be stopped.',
    },
    resume: {
      key: 'resume',
      label: 'Resume Run',
      confirmTitle: 'Create Resume Attempt',
      detail: resumeTargetStage
        ? `Create attempt #${nextAttemptNo} as a RESUME run starting from stage "${resumeTargetStage.stage}". Jobs already completed before that barrier are replayed as Skipped.`
        : `Create attempt #${nextAttemptNo} as a RESUME run from the first incomplete stage. Previously completed prefix jobs are marked Skipped.`,
      enabled: isPipelineStatusResumable(effectiveStatus),
      disabledReason: 'Only failed, stopped, abandoned, or unknown attempts can be resumed.',
    },
    rerun: {
      key: 'rerun',
      label: 'Rerun Snapshot',
      confirmTitle: 'Create New Rerun',
      detail: 'Create a brand-new logical run from this run snapshot. This does not reread the latest pipeline config from the editor.',
      enabled: true,
    },
    delete: {
      key: 'delete',
      label: 'Delete Run',
      confirmTitle: 'Delete Logical Run',
      detail: 'Delete this logical run and every stored attempt beneath it. The pipeline definition remains available in the catalog.',
      enabled: canDeletePipelineStatus(effectiveStatus),
      disabledReason: 'Only terminal runs can be deleted.',
    },
  }
}

export function formatDurationLabel(durationMs: number | null) {
  if (durationMs == null) return '--'
  if (durationMs < 1000) return `${Math.round(durationMs)}ms`
  if (durationMs < 60_000) return `${Math.round(durationMs / 1000)}s`
  if (durationMs < 3_600_000) {
    const minutes = Math.floor(durationMs / 60_000)
    const seconds = Math.round((durationMs % 60_000) / 1000)
    return `${minutes}m ${seconds}s`
  }
  const hours = Math.floor(durationMs / 3_600_000)
  const minutes = Math.round((durationMs % 3_600_000) / 60_000)
  return `${hours}h ${minutes}m`
}

export function getDurationMs(start: PipelineRunSummaryInfo['startTime'], end: PipelineRunSummaryInfo['endTime']) {
  const startDate = parseLocalDateTime(start)
  const endDate = parseLocalDateTime(end)
  if (!startDate || !endDate) return null
  return Math.max(endDate.getTime() - startDate.getTime(), 0)
}

export function getAttemptDurationMs(attempt: Pick<PipelineRunAttemptInfo, 'startTime' | 'endTime'>) {
  const startDate = parseLocalDateTime(attempt.startTime)
  const endDate = parseLocalDateTime(attempt.endTime)
  if (!startDate) return null
  return Math.max((endDate ?? new Date()).getTime() - startDate.getTime(), 0)
}

export function getAttemptKindLabel(kind: PipelineExecutionKind) {
  switch (kind) {
    case 'INITIAL':
      return 'Initial'
    case 'RESUME':
      return 'Resume'
    case 'RERUN':
      return 'Rerun'
    default:
      return kind
  }
}
