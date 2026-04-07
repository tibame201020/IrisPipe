import { AlertCircle, Filter, List, PlayCircle, RefreshCw, RotateCcw, SkipForward, Square, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { StatusBadge } from '../components/StatusBadge'
import { deleteRun, getApiErrorMessage, getRunDetail, getRunLogs, rerunRun, resumeRun, stopRun, type RunLogEntry } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import { usePipelineEvents } from '../lib/usePipelineEvents'
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
  const [mainTab, setMainTab] = useState<'board' | 'logs'>('board')
  const [logs, setLogs] = useState<RunLogEntry[] | null>(null)
  const [logsLoading, setLogsLoading] = useState(false)

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

  // SSE: instant reload on job/run events for this specific run
  usePipelineEvents({
    onJobStarted: () => void loadDetail(),
    onJobFinished: () => void loadDetail(),
    onRunCompleted: () => void loadDetail(),
    onRunFailed: () => void loadDetail(),
    onRunStopped: () => void loadDetail(),
  }, Number.isFinite(numericRunId) ? numericRunId : undefined)

  // Fallback polling: 5 s while run is in-flight (SSE handles instant updates)
  useEffect(() => {
    if (!detail) return
    const isRunning = ['STARTING', 'STARTED'].includes(detail.status)
    if (!isRunning) return
    const timer = setInterval(() => { void loadDetail() }, 5000)
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
        // Build error line from first failed step's exitDescription
        const failedStep = job.stepExecutionInfos.find(
          (s) => s.exitDescription && s.exitDescription.trim().length > 0 && s.exitCode !== 'COMPLETED',
        )
        const errorLine = failedStep?.exitDescription
          ? failedStep.exitDescription.split('\n')[0].slice(0, 80)
          : undefined

        return {
          id: String(job.id),
          title: job.jobName,
          status: job.status,
          selected: job.id === selectedJobId,
          onClick: () => setSelectedJobId(job.id),
          onDoubleClick: () => setSelectedJobId(job.id),
          subtitle: (jobTotals.read > 0 || jobTotals.write > 0)
            ? `↓ ${jobTotals.read.toLocaleString()}  ↑ ${jobTotals.write.toLocaleString()}`
            : undefined,
          stepSummary: `${job.stepExecutionInfos.length} step${job.stepExecutionInfos.length !== 1 ? 's' : ''} · ${job.atomicLevel}`,
          duration: formatDuration(job.startTime, job.endTime),
          waitTime: job.createdAt && job.startTime ? formatDuration(job.createdAt, job.startTime) : undefined,
          errorLine,
          badges: [job.atomicLevel],
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
      {/* ── Header row 1: Run ID + status + attempt pills + throughput + actions ── */}
      <div className="flex shrink-0 items-center gap-3 border-b border-base-300 bg-base-100 px-5 py-2.5">
        {/* Left: run ID + status */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-mono text-[13px] font-bold tabular-nums">#{detail.id}</span>
          <StatusBadge status={currentAttempt?.status ?? detail.status} subtle />
        </div>

        <div className="h-4 w-px shrink-0 bg-base-300" />

        {/* Attempt pills */}
        <div className="flex items-center gap-1 overflow-x-auto">
          {detail.attempts.map((attempt) => {
            const isSelected = attempt.executionId === currentAttempt?.executionId
            const isLatest = attempt.executionId === latestAttempt?.executionId
            return (
              <button
                key={attempt.executionId}
                type="button"
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-all ${
                  isSelected
                    ? 'border-primary bg-primary text-primary-content'
                    : 'border-base-300 bg-base-100 text-base-content/45 hover:border-primary/30 hover:text-base-content'
                }`}
                onClick={() => setSelectedAttemptId(attempt.executionId)}
              >
                {isLatest && <span className="size-1.5 shrink-0 rounded-full bg-current opacity-60" />}
                #{attempt.executionNo} {attempt.executionKind}
              </button>
            )
          })}
        </div>

        <div className="h-4 w-px shrink-0 bg-base-300" />

        {/* Throughput summary */}
        {(attemptTotals.read > 0 || attemptTotals.write > 0) && (
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <span className="font-mono text-[11px] text-success/70">↓ {attemptTotals.read.toLocaleString()}</span>
            <span className="font-mono text-[11px] text-primary/70">↑ {attemptTotals.write.toLocaleString()}</span>
            {attemptTotals.rollback > 0 && (
              <span className="font-mono text-[11px] text-error/70">{attemptTotals.rollback} rb</span>
            )}
          </div>
        )}

        {/* Duration + created (compact) */}
        <div className="hidden shrink-0 items-center gap-2 text-[10px] text-base-content/30 xl:flex">
          <span className="font-mono">{formatDuration(detail.startTime ?? detail.createdAt, detail.endTime)}</span>
          <span>·</span>
          <span>{formatDateTimeLong(detail.createdAt)}</span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            disabled={!canStop || !!pendingAction}
            className="btn btn-ghost btn-xs text-error"
            onClick={() => void runAction('stop', () => stopRun(detail.id))}
          >
            <Square size={12} />Stop
          </button>
          <button
            type="button"
            disabled={!canResume || !!pendingAction}
            className="btn btn-ghost btn-xs"
            onClick={() => void runAction('resume', () => resumeRun(detail.id))}
          >
            <PlayCircle size={12} />Resume
          </button>
          <button
            type="button"
            disabled={!canRerun || !!pendingAction}
            className="btn btn-ghost btn-xs"
            onClick={() => void runAction('rerun', () => rerunRun(detail.id))}
          >
            <RotateCcw size={12} />Rerun
          </button>
          <button
            type="button"
            disabled={!!pendingAction}
            className="btn btn-ghost btn-xs text-error"
            onClick={() => setDeleteConfirmOpen(true)}
          >
            <Trash2 size={12} />
          </button>
          <button type="button" onClick={() => void loadDetail()} className="btn btn-ghost btn-xs btn-square">
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* ── Header row 2: Board / Logs tab ── */}
      <div className="flex shrink-0 items-center gap-0 border-b border-base-300 bg-base-200/15 px-5">
        <button
          type="button"
          className={`flex items-center gap-1.5 border-b-2 px-3 py-2 text-[13px] font-semibold transition-all -mb-px ${
            mainTab === 'board'
              ? 'border-primary text-primary'
              : 'border-transparent text-base-content/40 hover:text-base-content hover:border-base-300'
          }`}
          onClick={() => setMainTab('board')}
        >
          <Filter size={12} />Stage Board
        </button>
        <button
          type="button"
          className={`flex items-center gap-1.5 border-b-2 px-3 py-2 text-[13px] font-semibold transition-all -mb-px ${
            mainTab === 'logs'
              ? 'border-primary text-primary'
              : 'border-transparent text-base-content/40 hover:text-base-content hover:border-base-300'
          }`}
          onClick={() => {
            setMainTab('logs')
            if (logs === null && !logsLoading) {
              setLogsLoading(true)
              getRunLogs(numericRunId).then(setLogs).catch(() => setLogs([])).finally(() => setLogsLoading(false))
            }
          }}
        >
          <List size={12} />Logs
        </button>
      </div>

      {error ? <div className="shrink-0 border-b border-error/20 bg-error/5 px-5 py-2 text-xs text-error">{error}</div> : null}

      {/* ── Main content ── */}
      <main className="relative min-w-0 flex-1 overflow-hidden bg-base-200/30">
        {mainTab === 'board' ? (
          <StageLaneBoard
            stages={stageLanes}
            emptyTitle="No attempt stages"
            emptyDescription="This attempt did not materialize any runtime stage projection."
          />
        ) : (
          <div className="h-full overflow-y-auto px-5 py-4 font-mono text-xs">
            {logsLoading ? (
              <div className="flex justify-center py-10"><span className="loading loading-spinner loading-sm opacity-40" /></div>
            ) : !logs || logs.length === 0 ? (
              <div className="py-10 text-center text-base-content/30">No log entries available</div>
            ) : (
              <div className="flex flex-col gap-0.5">
                {logs.map((entry, idx) => (
                  <div key={idx} className={`flex items-start gap-3 rounded px-2 py-0.5 ${entry.level === 'ERROR' ? 'bg-error/5 text-error/80' : 'hover:bg-base-200/40'}`}>
                    <span className={`w-12 shrink-0 text-[10px] font-bold uppercase tracking-wider ${entry.level === 'ERROR' ? 'text-error' : 'text-base-content/30'}`}>{entry.level}</span>
                    <span className="shrink-0 tabular-nums text-base-content/30">
                      {entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString() : '--:--:--'}
                    </span>
                    <span className="flex-1 break-all">{entry.message}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {mainTab === 'board' && selectedJob ? (
          <JobRuntimeDrawer job={selectedJob} onClose={() => setSelectedJobId(null)} />
        ) : null}
      </main>

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
