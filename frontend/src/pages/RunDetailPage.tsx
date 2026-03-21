import { Clock, PlayCircle, RefreshCw, RotateCcw, Square, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { StatusBadge } from '../components/StatusBadge'
import { deleteRun, getApiErrorMessage, getRunDetail, rerunRun, resumeRun, stopRun } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import type {
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunStageInfo,
  PipelineRunStatus,
} from '../types/irispipe'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'

export function RunDetailPage() {
  const { pipelineId, runId } = useParams()
  const navigate = useNavigate()
  const workspace = useOutletContext<PipelineWorkspaceContext>()

  const [detail, setDetail] = useState<PipelineRunDetailInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pendingAction, setPendingAction] = useState<string | null>(null)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [selectedAttemptId, setSelectedAttemptId] = useState<number | null>(null)
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)

  const numericPipelineId = Number(pipelineId)
  const numericRunId = Number(runId)
  const folderId = workspace.pipeline.folderId

  async function loadDetail() {
    setLoading(true)
    setError(null)
    try {
      const response = await getRunDetail(numericRunId)
      setDetail(response)
      if (response.attempts.length > 0 && selectedAttemptId === null) {
        setSelectedAttemptId(response.attempts[response.attempts.length - 1].executionId)
      }
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load run detail'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!Number.isFinite(numericRunId) || !Number.isFinite(numericPipelineId)) {
      setError('Invalid run route')
      setLoading(false)
      return
    }
    void loadDetail()
  }, [numericPipelineId, numericRunId])

  useEffect(() => {
    if (!detail) return
    const isRunning = ['STARTING', 'STARTED'].includes(detail.status)
    if (!isRunning) return

    const timer = setInterval(() => {
      void loadDetail()
    }, 3000)

    return () => clearInterval(timer)
  }, [detail?.status])

  const latestAttempt = useMemo(() => {
    if (!detail || detail.attempts.length === 0) return null
    return detail.attempts[detail.attempts.length - 1]
  }, [detail])

  const currentAttempt = useMemo(() => {
    if (!detail || detail.attempts.length === 0) return null
    return detail.attempts.find((attempt) => attempt.executionId === selectedAttemptId) ?? latestAttempt
  }, [detail, latestAttempt, selectedAttemptId])

  useEffect(() => {
    setSelectedJobId(null)
  }, [selectedAttemptId])

  const currentAttemptStepCount = useMemo(() => {
    if (!currentAttempt) return 0
    return currentAttempt.jobs.reduce((total, job) => total + job.stepExecutionInfos.length, 0)
  }, [currentAttempt])

  const selectedJob = useMemo(() => {
    if (!currentAttempt || !selectedJobId) return null
    return currentAttempt.jobs.find((job) => job.id === selectedJobId) ?? null
  }, [currentAttempt, selectedJobId])

  const stageLanes = useMemo<StageLaneData[]>(() => {
    if (!currentAttempt) return []

    return currentAttempt.stages.map((stage) => ({
      id: stage.stage,
      title: stage.stage,
      status: stage.status,
      summary: buildStageSummary(stage),
      jobs: stage.jobs.map((job) => ({
        id: String(job.id),
        title: job.jobName,
        status: job.status,
        selected: job.id === selectedJobId,
        onClick: () => setSelectedJobId(job.id),
        onDoubleClick: () => setSelectedJobId(job.id),
        badges: [
          `Read ${sumStepMetric(job, 'readCount')}`,
          `Write ${sumStepMetric(job, 'writeCount')}`,
          `${job.stepExecutionInfos.length} steps`,
        ],
      })),
    }))
  }, [currentAttempt, selectedJobId])

  async function runAction(actionName: string, action: () => Promise<unknown>) {
    setPendingAction(actionName)
    setError(null)
    try {
      await action()
      if (actionName === 'delete') {
        navigate(`/pipeline/items/${numericPipelineId}/runs${folderId ? `?folderId=${folderId}` : ''}`)
        return
      }
      await loadDetail()
    } catch (actionError) {
      setError(getApiErrorMessage(actionError, `Failed to ${actionName} run`))
    } finally {
      setPendingAction(null)
    }
  }

  if (loading && !detail) {
    return (
      <div className="p-12">
        <LoadingState />
      </div>
    )
  }

  if (error || !detail) {
    return (
      <EmptyState
        icon={PlayCircle}
        title="Run detail unavailable"
        description={error ?? 'The run could not be found.'}
        action={
          <Link
            to={`/pipeline/items/${numericPipelineId}/runs${folderId ? `?folderId=${folderId}` : ''}`}
            className="btn btn-primary"
          >
            Back to runs
          </Link>
        }
      />
    )
  }

  const canStop = ['STARTING', 'STARTED'].includes(detail.status)
  const canResume = ['FAILED', 'STOPPED'].includes(detail.status)
  const canRerun = ['FAILED', 'STOPPED', 'COMPLETED', 'ABANDONED'].includes(detail.status)

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-base-300 bg-base-100 px-6 py-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-base-content/55">
          <span className="badge badge-ghost badge-sm">Run #{detail.id}</span>
          <StatusBadge status={currentAttempt?.status ?? detail.status} subtle />
          <span className="badge badge-ghost badge-sm">{currentAttempt?.executionKind ?? '-'}</span>
          <span className="badge badge-ghost badge-sm">{currentAttempt?.stages.length ?? 0} stages</span>
          <span className="badge badge-ghost badge-sm">{currentAttempt?.jobs.length ?? 0} jobs</span>
          <span className="badge badge-ghost badge-sm">{currentAttemptStepCount} steps</span>
          <span className="badge badge-ghost badge-sm">
            {currentAttempt?.requestedAsync == null ? '-' : currentAttempt.requestedAsync ? 'Async' : 'Sync'}
          </span>
          <span className="text-[11px] font-medium text-base-content/40">
            Same-stage jobs run in parallel. Future stages stay blocked until the current stage converges.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-base-200/50 p-1">
            <button
              type="button"
              disabled={!canStop || !!pendingAction}
              className="btn btn-ghost btn-sm h-9 text-error"
              onClick={() => void runAction('stop', () => stopRun(detail.id))}
            >
              <Square size={14} />
              Stop
            </button>
            <button
              type="button"
              disabled={!canResume || !!pendingAction}
              className="btn btn-ghost btn-sm h-9"
              onClick={() => void runAction('resume', () => resumeRun(detail.id))}
            >
              <PlayCircle size={14} />
              Resume
            </button>
            <button
              type="button"
              disabled={!canRerun || !!pendingAction}
              className="btn btn-ghost btn-sm h-9"
              onClick={() => void runAction('rerun', () => rerunRun(detail.id))}
            >
              <RotateCcw size={14} />
              Rerun
            </button>
            <button
              type="button"
              disabled={!!pendingAction}
              className="btn btn-ghost btn-sm h-9 text-error"
              onClick={() => setDeleteConfirmOpen(true)}
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
          <button type="button" onClick={() => void loadDetail()} className="btn btn-ghost btn-sm btn-square">
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {error ? <div className="border-b border-base-300 bg-error/8 px-6 py-3 text-sm text-error">{error}</div> : null}

      <div className="flex min-h-0 flex-1">
        <aside className="flex w-[300px] shrink-0 flex-col border-r border-base-300 bg-base-100">
          <div className="border-b border-base-300 px-5 py-4">
            <div className="iris-header">Attempt History</div>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <SummaryTile label="Status" value={detail.status} />
              <SummaryTile label="Attempts" value={detail.attempts.length} />
              <SummaryTile label="Duration" value={formatDuration(detail.startTime || detail.createdAt, detail.endTime)} mono />
              <SummaryTile label="Created" value={formatDateTimeLong(detail.createdAt)} />
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {detail.attempts
              .slice()
              .reverse()
              .map((attempt) => {
                const isLatest = attempt.executionId === latestAttempt?.executionId
                const isSelected = attempt.executionId === currentAttempt?.executionId
                const stepCount = attempt.jobs.reduce((count, job) => count + job.stepExecutionInfos.length, 0)

                return (
                  <button
                    key={attempt.executionId}
                    type="button"
                    className={`w-full rounded-xl border p-4 text-left transition-all ${
                      isSelected
                        ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20'
                        : 'border-base-300 bg-base-100 hover:border-primary/30 hover:bg-base-200/30'
                    }`}
                    onClick={() => setSelectedAttemptId(attempt.executionId)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="badge badge-ghost badge-sm">Attempt #{attempt.executionNo}</span>
                          {isLatest ? <span className="badge badge-primary badge-sm">Latest</span> : null}
                        </div>
                        <div className="mt-3 text-base font-bold">{attempt.executionKind}</div>
                      </div>
                      <StatusBadge status={attempt.status} subtle />
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[11px] text-base-content/45">
                      <Clock size={11} />
                      <span>{formatDateTimeLong(attempt.startTime)}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-base-content/35">
                      <span>{attempt.stages.length} stages</span>
                      <span>{attempt.jobs.length} jobs</span>
                      <span>{stepCount} steps</span>
                      <span>{attempt.requestedAsync == null ? '-' : attempt.requestedAsync ? 'Async' : 'Sync'}</span>
                      <span>{formatDuration(attempt.startTime, attempt.endTime)}</span>
                    </div>
                  </button>
                )
              })}
          </div>
        </aside>

        <main className="relative min-w-0 flex-1 overflow-hidden bg-base-200/40">
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-base-300 bg-base-100 px-5 py-4">
              <div>
                <div className="iris-header">Runtime Stage Board</div>
                <div className="mt-1 text-sm text-base-content/50">
                  Inspect stage convergence, parallel jobs, and the current attempt runtime state.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-ghost badge-sm">{currentAttempt?.executionKind ?? '-'}</span>
                <span className="badge badge-ghost badge-sm">{currentAttempt?.stages.length ?? 0} stages</span>
                <span className="badge badge-ghost badge-sm">{currentAttempt?.jobs.length ?? 0} jobs</span>
                <span className="badge badge-ghost badge-sm">{currentAttemptStepCount} steps</span>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden">
              <StageLaneBoard
                stages={stageLanes}
                emptyTitle="No attempt stages"
                emptyDescription="This attempt did not materialize any runtime stage projection."
              />
            </div>
          </div>

          {selectedJob ? (
            <JobRuntimeDrawer job={selectedJob} onClose={() => setSelectedJobId(null)} />
          ) : null}
        </main>
      </div>

      {deleteConfirmOpen ? (
        <dialog open className="modal modal-open">
          <div className="modal-box max-w-md border border-base-300">
            <h3 className="text-lg font-bold">Delete Run</h3>
            <p className="mt-3 text-sm text-base-content/65">
              Delete run #{detail.id}. This only removes the selected run. It does not purge the whole pipeline history.
            </p>
            {error ? <div className="alert alert-error mt-4 text-sm">{error}</div> : null}
            <div className="modal-action">
              <button type="button" className="btn btn-ghost" onClick={() => setDeleteConfirmOpen(false)}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-error"
                disabled={pendingAction === 'delete'}
                onClick={async () => {
                  await runAction('delete', () => deleteRun(detail.id))
                  setDeleteConfirmOpen(false)
                }}
              >
                {pendingAction === 'delete' ? 'Deleting...' : 'Delete Run'}
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button type="button" onClick={() => setDeleteConfirmOpen(false)}>
              close
            </button>
          </form>
        </dialog>
      ) : null}
    </div>
  )
}

function JobRuntimeDrawer({
  job,
  onClose,
}: {
  job: PipelineRunJobInfo
  onClose: () => void
}) {
  const totals = job.stepExecutionInfos.reduce(
    (acc, step) => ({
      read: acc.read + step.readCount,
      write: acc.write + step.writeCount,
      commit: acc.commit + step.commitCount,
      rollback: acc.rollback + step.rollbackCount,
    }),
    { read: 0, write: 0, commit: 0, rollback: 0 },
  )

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex justify-end">
      <aside className="pointer-events-auto h-full w-[420px] max-w-[92vw] border-l border-base-300 bg-base-100 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-base-300 px-5 py-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-ghost badge-sm">Job #{job.sequenceOrder + 1}</span>
              <StatusBadge status={job.status} subtle />
            </div>
            <div className="mt-3 truncate text-xl font-bold">{job.jobName}</div>
            <div className="mt-1 text-sm text-base-content/50">Inspect runtime step counters for the selected job.</div>
          </div>
          <button type="button" className="btn btn-ghost btn-sm btn-square shrink-0" onClick={onClose} aria-label="Close job details">
            <X size={16} />
          </button>
        </div>

        <div className="h-[calc(100%-96px)] overflow-y-auto px-5 py-5">
          <div className="grid grid-cols-2 gap-3">
            <SummaryTile label="Atomic" value={job.atomicLevel} />
            <SummaryTile label="Steps" value={job.stepExecutionInfos.length} />
            <SummaryTile label="Read" value={totals.read} mono />
            <SummaryTile label="Write" value={totals.write} mono />
            <SummaryTile label="Commit" value={totals.commit} mono />
            <SummaryTile label="Rollback" value={totals.rollback} mono />
          </div>

          <div className="mt-6">
            <div className="iris-header">Step Details</div>
            <div className="mt-3 space-y-3">
              {job.stepExecutionInfos.map((step) => (
                <div key={step.id} className="rounded-xl border border-base-300 bg-base-100 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{step.stepName}</div>
                      <div className="mt-1 text-xs text-base-content/45">{step.exitCode}</div>
                    </div>
                    <StatusBadge status={step.status as PipelineRunStatus} subtle />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <SummaryTile label="Read" value={step.readCount} mono />
                    <SummaryTile label="Write" value={step.writeCount} mono />
                    <SummaryTile label="Commit" value={step.commitCount} mono />
                    <SummaryTile label="Rollback" value={step.rollbackCount} mono />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

function buildStageSummary(stage: PipelineRunStageInfo) {
  const completedJobs = stage.jobs.filter((job) => job.status === 'COMPLETED').length
  const failedJobs = stage.jobs.filter((job) => job.status === 'FAILED').length
  const stoppedJobs = stage.jobs.filter((job) => job.status === 'STOPPED').length

  if (failedJobs > 0) return `${failedJobs} failed, ${completedJobs} completed`
  if (stoppedJobs > 0) return `${stoppedJobs} stopped, ${completedJobs} completed`
  return `${completedJobs}/${stage.jobs.length} completed`
}

function sumStepMetric(job: PipelineRunJobInfo, field: 'readCount' | 'writeCount') {
  return job.stepExecutionInfos.reduce((total, step) => total + step[field], 0)
}

function SummaryTile({
  label,
  value,
  mono = false,
}: {
  label: string
  value: string | number
  mono?: boolean
}) {
  return (
    <div className="rounded-xl border border-base-300 bg-base-100 px-4 py-3">
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      <div className={`mt-1 text-sm font-semibold ${mono ? 'font-mono' : ''}`}>{value}</div>
    </div>
  )
}
