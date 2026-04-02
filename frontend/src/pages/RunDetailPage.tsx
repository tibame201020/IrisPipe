import { AlertCircle, Clock, Filter, PlayCircle, RefreshCw, RotateCcw, SkipForward, Square, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { StatusBadge } from '../components/StatusBadge'
import { deleteRun, getApiErrorMessage, getRunDetail, rerunRun, resumeRun, stopRun } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import type {
  AtomicLevel,
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunStageInfo,
  PipelineRunStatus,
  StepExecutionInfo,
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
    const timer = setInterval(() => { void loadDetail() }, 3000)
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

  useEffect(() => { setSelectedJobId(null) }, [selectedAttemptId])

  const currentAttemptStepCount = useMemo(() => {
    if (!currentAttempt) return 0
    return currentAttempt.jobs.reduce((total, job) => total + job.stepExecutionInfos.length, 0)
  }, [currentAttempt])

  // Aggregate throughput across all jobs in current attempt
  const attemptTotals = useMemo(() => {
    if (!currentAttempt) return { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 }
    return currentAttempt.jobs.reduce(
      (acc, job) => {
        const jobTotals = job.stepExecutionInfos.reduce(
          (s, step) => ({
            read: s.read + step.readCount,
            write: s.write + step.writeCount,
            commit: s.commit + step.commitCount,
            rollback: s.rollback + step.rollbackCount,
            filter: s.filter + step.filterCount,
            skip: s.skip + step.readSkipCount + step.writeSkipCount + step.processSkipCount,
          }),
          { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 },
        )
        return {
          read: acc.read + jobTotals.read,
          write: acc.write + jobTotals.write,
          commit: acc.commit + jobTotals.commit,
          rollback: acc.rollback + jobTotals.rollback,
          filter: acc.filter + jobTotals.filter,
          skip: acc.skip + jobTotals.skip,
        }
      },
      { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 },
    )
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
      jobs: stage.jobs.map((job) => {
        const jobTotals = job.stepExecutionInfos.reduce(
          (acc, step) => ({
            read: acc.read + step.readCount,
            write: acc.write + step.writeCount,
          }),
          { read: 0, write: 0 },
        )
        return {
          id: String(job.id),
          title: job.jobName,
          status: job.status,
          selected: job.id === selectedJobId,
          onClick: () => setSelectedJobId(job.id),
          onDoubleClick: () => setSelectedJobId(job.id),
          badges: [
            `↓ ${jobTotals.read.toLocaleString()}`,
            `↑ ${jobTotals.write.toLocaleString()}`,
            `${job.stepExecutionInfos.length} steps`,
            job.atomicLevel === 'CHUNK' ? 'CHUNK' : 'JOB',
          ],
        }
      }),
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
    return <div className="p-12"><LoadingState /></div>
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
      {/* ── Toolbar ── */}
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
          {/* Attempt-level throughput summary */}
          {(attemptTotals.read > 0 || attemptTotals.write > 0) && (
            <>
              <span className="badge badge-ghost badge-sm font-mono text-success/80">↓ {attemptTotals.read.toLocaleString()} read</span>
              <span className="badge badge-ghost badge-sm font-mono text-primary/80">↑ {attemptTotals.write.toLocaleString()} write</span>
              {attemptTotals.commit > 0 && (
                <span className="badge badge-ghost badge-sm font-mono text-secondary/80">{attemptTotals.commit.toLocaleString()} commits</span>
              )}
              {attemptTotals.rollback > 0 && (
                <span className="badge badge-error badge-sm font-mono">{attemptTotals.rollback} rollbacks</span>
              )}
              {attemptTotals.skip > 0 && (
                <span className="badge badge-warning badge-sm font-mono">{attemptTotals.skip} skipped</span>
              )}
            </>
          )}
          <span className="text-[10px] font-medium text-base-content/30">
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
        {/* ── Attempt Sidebar ── */}
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
                const totalRead = attempt.jobs.reduce((s, j) => s + j.stepExecutionInfos.reduce((a, st) => a + st.readCount, 0), 0)
                const totalWrite = attempt.jobs.reduce((s, j) => s + j.stepExecutionInfos.reduce((a, st) => a + st.writeCount, 0), 0)

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
                        <div className="mt-2 text-sm font-bold">{attempt.executionKind}</div>
                      </div>
                      <StatusBadge status={attempt.status} subtle />
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-[10px] text-base-content/40">
                      <Clock size={10} />
                      <span>{formatDateTimeLong(attempt.startTime)}</span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-base-content/30">
                      <span>{attempt.stages.length} stages</span>
                      <span>{attempt.jobs.length} jobs</span>
                      <span>{stepCount} steps</span>
                      <span>{formatDuration(attempt.startTime, attempt.endTime)}</span>
                    </div>

                    {/* Attempt throughput mini-bar */}
                    {(totalRead > 0 || totalWrite > 0) && (
                      <div className="mt-3 flex gap-3 text-[10px] font-mono">
                        <span className="text-success/70">↓ {totalRead.toLocaleString()}</span>
                        <span className="text-primary/70">↑ {totalWrite.toLocaleString()}</span>
                      </div>
                    )}
                  </button>
                )
              })}
          </div>
        </aside>

        {/* ── Stage Board Main ── */}
        <main className="relative min-w-0 flex-1 overflow-hidden bg-base-200/40">
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-base-300 bg-base-100 px-5 py-4">
              <div>
                <div className="iris-header">Runtime Stage Board</div>
                <div className="mt-1 text-sm text-base-content/45">
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

      {/* ── Delete Confirm Modal ── */}
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
            <button type="button" onClick={() => setDeleteConfirmOpen(false)}>close</button>
          </form>
        </dialog>
      ) : null}
    </div>
  )
}

// ─── Job Runtime Drawer ───────────────────────────────────────────────────────

function JobRuntimeDrawer({ job, onClose }: { job: PipelineRunJobInfo; onClose: () => void }) {
  const totals = job.stepExecutionInfos.reduce(
    (acc, step) => ({
      read: acc.read + step.readCount,
      write: acc.write + step.writeCount,
      commit: acc.commit + step.commitCount,
      rollback: acc.rollback + step.rollbackCount,
      filter: acc.filter + step.filterCount,
      readSkip: acc.readSkip + step.readSkipCount,
      writeSkip: acc.writeSkip + step.writeSkipCount,
      processSkip: acc.processSkip + step.processSkipCount,
    }),
    { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, readSkip: 0, writeSkip: 0, processSkip: 0 },
  )
  const totalSkip = totals.readSkip + totals.writeSkip + totals.processSkip
  const maxIO = Math.max(totals.read, totals.write, 1)
  const maxTxn = Math.max(totals.commit, totals.rollback, 1)

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex justify-end animate-iris-slide-in-right">
      <aside className="pointer-events-auto h-full w-[460px] max-w-[92vw] border-l border-base-300 bg-base-100 shadow-2xl flex flex-col">
        {/* Drawer Header */}
        <div className="flex items-start justify-between gap-4 border-b border-base-300 px-5 py-4 shrink-0">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-ghost badge-sm">Job #{job.sequenceOrder + 1}</span>
              <StatusBadge status={job.status} subtle />
              <AtomicLevelBadge level={job.atomicLevel} />
            </div>
            <div className="mt-2 truncate text-xl font-bold">{job.jobName}</div>
            {job.startTime && (
              <div className="mt-1 text-xs text-base-content/40 font-mono">
                {formatDateTimeLong(job.startTime)}
                {job.endTime && <span className="ml-2 text-base-content/30">· {formatDuration(job.startTime, job.endTime)}</span>}
              </div>
            )}
          </div>
          <button type="button" className="btn btn-ghost btn-sm btn-square shrink-0" onClick={onClose} aria-label="Close job details">
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* ── I/O Throughput Section ── */}
          <div className="mb-5">
            <SectionLabel>I/O Throughput</SectionLabel>
            <div className="mt-2 space-y-3">
              <ThroughputBar label="Read" value={totals.read} max={maxIO} color="success" icon="↓" />
              <ThroughputBar label="Write" value={totals.write} max={maxIO} color="primary" icon="↑" />
            </div>
          </div>

          {/* ── Transaction Section ── */}
          <div className="mb-5">
            <SectionLabel>Transactions</SectionLabel>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <SummaryTile label="Commit" value={totals.commit} mono highlight={totals.commit > 0 ? 'success' : undefined} />
              <SummaryTile label="Rollback" value={totals.rollback} mono highlight={totals.rollback > 0 ? 'error' : undefined} />
            </div>
            {(totals.commit > 0 || totals.rollback > 0) && (
              <div className="mt-2">
                <ThroughputBar label="Commit" value={totals.commit} max={maxTxn} color="success" compact />
                <ThroughputBar label="Rollback" value={totals.rollback} max={maxTxn} color="error" compact />
              </div>
            )}
          </div>

          {/* ── Skip / Filter Section (only show if non-zero) ── */}
          {(totals.filter > 0 || totalSkip > 0) && (
            <div className="mb-5">
              <SectionLabel>Skip & Filter</SectionLabel>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {totals.filter > 0 && <SummaryTile label="Filter" value={totals.filter} mono />}
                {totals.readSkip > 0 && <SummaryTile label="Read Skip" value={totals.readSkip} mono highlight="warning" />}
                {totals.writeSkip > 0 && <SummaryTile label="Write Skip" value={totals.writeSkip} mono highlight="warning" />}
                {totals.processSkip > 0 && <SummaryTile label="Process Skip" value={totals.processSkip} mono highlight="warning" />}
              </div>
            </div>
          )}

          {/* ── Step Details ── */}
          <div>
            <SectionLabel>{job.stepExecutionInfos.length} Step{job.stepExecutionInfos.length !== 1 ? 's' : ''}</SectionLabel>
            <div className="mt-2 space-y-3">
              {job.stepExecutionInfos.map((step, idx) => (
                <StepDetailCard key={step.id} step={step} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

// ─── Step Detail Card ─────────────────────────────────────────────────────────

function StepDetailCard({ step, index }: { step: StepExecutionInfo; index: number }) {
  const totalSkip = step.readSkipCount + step.writeSkipCount + step.processSkipCount
  const hasIssues = step.rollbackCount > 0 || totalSkip > 0

  return (
    <div className={`rounded-xl border bg-base-100 overflow-hidden ${hasIssues ? 'border-warning/30' : 'border-base-300'}`}>
      {/* Step Header */}
      <div className={`px-4 py-3 flex items-center justify-between gap-3 ${hasIssues ? 'bg-warning/5' : 'bg-base-200/30'}`}>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-base-content/30">Step {index + 1}</span>
            {hasIssues && <span className="badge badge-warning badge-xs">Issues</span>}
          </div>
          <div className="truncate text-sm font-semibold mt-0.5">{step.stepName}</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {step.startTime && step.endTime && (
            <span className="text-[10px] font-mono text-base-content/30">{formatDuration(step.startTime, step.endTime)}</span>
          )}
          <StatusBadge status={step.status as PipelineRunStatus} subtle />
        </div>
      </div>

      {/* Step Counters */}
      <div className="px-4 py-3">
        <div className="grid grid-cols-4 gap-2">
          <MiniCounter label="Read" value={step.readCount} />
          <MiniCounter label="Write" value={step.writeCount} />
          <MiniCounter label="Commit" value={step.commitCount} />
          <MiniCounter label="Rollback" value={step.rollbackCount} highlight={step.rollbackCount > 0 ? 'error' : undefined} />
        </div>

        {(step.filterCount > 0 || totalSkip > 0) && (
          <div className="mt-2 grid grid-cols-4 gap-2">
            {step.filterCount > 0 && <MiniCounter label="Filter" value={step.filterCount} />}
            {step.readSkipCount > 0 && <MiniCounter label="RdSkip" value={step.readSkipCount} highlight="warning" />}
            {step.writeSkipCount > 0 && <MiniCounter label="WrSkip" value={step.writeSkipCount} highlight="warning" />}
            {step.processSkipCount > 0 && <MiniCounter label="PrSkip" value={step.processSkipCount} highlight="warning" />}
          </div>
        )}

        {/* Exit description (only show if not empty / not COMPLETED) */}
        {step.exitDescription && step.exitDescription.trim().length > 0 && step.exitCode !== 'COMPLETED' && (
          <div className="mt-3 rounded-lg bg-error/5 border border-error/15 px-3 py-2 flex gap-2 items-start">
            <AlertCircle size={13} className="text-error shrink-0 mt-0.5" />
            <div className="text-[11px] font-mono text-error/80 break-all leading-relaxed">
              {step.exitDescription}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Sub Components ───────────────────────────────────────────────────────────

function ThroughputBar({
  label,
  value,
  max,
  color,
  icon,
  compact = false,
}: {
  label: string
  value: number
  max: number
  color: 'success' | 'primary' | 'error' | 'warning'
  icon?: string
  compact?: boolean
}) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0
  const barMap = { success: 'bg-success', primary: 'bg-primary', error: 'bg-error', warning: 'bg-warning' }
  const textMap = { success: 'text-success', primary: 'text-primary', error: 'text-error', warning: 'text-warning' }

  if (compact) {
    return (
      <div className="flex items-center gap-3 py-1">
        <span className="text-[10px] uppercase tracking-widest text-base-content/35 w-14 shrink-0">{label}</span>
        <div className="flex-1 h-1 rounded-full bg-base-300/50 overflow-hidden">
          <div
            className={`h-full rounded-full iris-bar-fill ${barMap[color]}`}
            style={{ '--bar-target-width': `${pct}%` } as React.CSSProperties}
          />
        </div>
        <span className={`text-[10px] font-mono w-16 text-right ${textMap[color]}`}>{value.toLocaleString()}</span>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-base-300 bg-base-100 px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className={`text-sm font-bold ${textMap[color]}`}>{icon}</span>}
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">{label}</span>
        </div>
        <span className={`text-lg font-bold font-mono ${textMap[color]}`}>{value.toLocaleString()}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-base-300/50 overflow-hidden">
        <div
          className={`h-full rounded-full iris-bar-fill ${barMap[color]}`}
          style={{ '--bar-target-width': `${pct}%` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

function MiniCounter({
  label,
  value,
  highlight,
}: {
  label: string
  value: number
  highlight?: 'error' | 'warning' | 'success'
}) {
  const colorMap = {
    error: 'text-error',
    warning: 'text-warning',
    success: 'text-success',
  }
  return (
    <div className="text-center">
      <div className={`text-base font-bold font-mono ${highlight ? colorMap[highlight] : ''}`}>{value.toLocaleString()}</div>
      <div className="text-[9px] font-black uppercase tracking-[0.14em] text-base-content/30">{label}</div>
    </div>
  )
}

function AtomicLevelBadge({ level }: { level: AtomicLevel }) {
  return (
    <span className={`badge badge-sm font-semibold ${
      level === 'CHUNK'
        ? 'bg-secondary/10 text-secondary border-secondary/20'
        : 'bg-primary/10 text-primary border-primary/20'
    }`}>
      {level === 'CHUNK' ? <><SkipForward size={10} className="mr-1" />CHUNK</> : <><Filter size={10} className="mr-1" />JOB</>}
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-base-content/35">{children}</div>
  )
}

// ─── Shared Tiles ─────────────────────────────────────────────────────────────

function SummaryTile({
  label,
  value,
  mono = false,
  highlight,
}: {
  label: string
  value: string | number
  mono?: boolean
  highlight?: 'success' | 'error' | 'warning'
}) {
  const colorMap = { success: 'text-success', error: 'text-error', warning: 'text-warning' }
  return (
    <div className="rounded-xl border border-base-300 bg-base-100 px-4 py-3">
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      <div className={`mt-1 text-sm font-semibold ${mono ? 'font-mono' : ''} ${highlight ? colorMap[highlight] : ''}`}>{value}</div>
    </div>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildStageSummary(stage: PipelineRunStageInfo) {
  const completedJobs = stage.jobs.filter((job) => job.status === 'COMPLETED').length
  const failedJobs = stage.jobs.filter((job) => job.status === 'FAILED').length
  const stoppedJobs = stage.jobs.filter((job) => job.status === 'STOPPED').length

  if (failedJobs > 0) return `${failedJobs} failed, ${completedJobs} completed`
  if (stoppedJobs > 0) return `${stoppedJobs} stopped, ${completedJobs} completed`
  return `${completedJobs}/${stage.jobs.length} completed`
}
