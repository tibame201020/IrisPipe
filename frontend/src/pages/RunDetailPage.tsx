import { AlertCircle, Filter, List, PlayCircle, RefreshCw, RotateCcw, SkipForward, Square, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { StatusBadge } from '../components/StatusBadge'
import { ActionButton, ActionLink } from '../components/ui/Action'
import { DialogShell } from '../components/ui/DialogShell'
import { SummaryTile as SemanticSummaryTile } from '../components/ui/Surface'
import { deleteRun, getApiErrorMessage, getRunDetail, getRunLogs, rerunRun, resumeRun, stopRun, type RunLogEntry } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import {
  extractRunJobErrorLine,
  findResumeTargetStage,
  getAttemptKindLabel,
  getAttemptStepTotals,
  getPipelineStatusMeta,
  getRunActionDescriptors,
  getRunEffectiveStatus,
  isPipelineStatusActive,
  summarizeAttemptProgress,
  summarizePipelineStage,
  type RunActionKey,
} from '../lib/pipeline-runtime'
import { usePipelineEvents } from '../lib/usePipelineEvents'
import type {
  AtomicLevel,
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
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
  const [confirmAction, setConfirmAction] = useState<RunActionKey | null>(null)
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
    const isRunning = isPipelineStatusActive(detail.status)
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

  const attemptTotals = useMemo(() => {
    if (!currentAttempt) return { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 }
    return getAttemptStepTotals(currentAttempt)
  }, [currentAttempt])

  const selectedJob = useMemo(() => {
    if (!currentAttempt || !selectedJobId) return null
    return currentAttempt.jobs.find((job) => job.id === selectedJobId) ?? null
  }, [currentAttempt, selectedJobId])

  const stageLanes = useMemo<StageLaneData[]>(() => {
    if (!currentAttempt) return []
    return currentAttempt.stages.map((stage) => {
      const stageSummary = summarizePipelineStage(stage)
      return {
        id: stage.stage,
        title: stage.stage,
        status: stage.status,
        summary: stageSummary.summary,
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
          subtitle: (jobTotals.read > 0 || jobTotals.write > 0)
            ? `Read ${jobTotals.read.toLocaleString()} | Write ${jobTotals.write.toLocaleString()}`
            : undefined,
          stepSummary: `${job.stepExecutionInfos.length} step${job.stepExecutionInfos.length !== 1 ? 's' : ''} | ${job.atomicLevel}`,
          duration: formatDuration(job.startTime, job.endTime),
          waitTime: job.createdAt && job.startTime ? formatDuration(job.createdAt, job.startTime) : undefined,
          errorLine: extractRunJobErrorLine(job),
          badges: [job.atomicLevel],
        }
      }),
      }
    })
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
          <ActionLink
            to={`/pipeline/items/${numericPipelineId}/runs${folderId ? `?folderId=${folderId}` : ''}`}
            tone="primary"
          >
            Back to runs
          </ActionLink>
        }
      />
    )
  }

  const effectiveStatus = getRunEffectiveStatus(detail, currentAttempt)
  const effectiveStatusMeta = getPipelineStatusMeta(effectiveStatus)
  const attemptSummary = currentAttempt ? summarizeAttemptProgress(currentAttempt) : null
  const resumeTargetStage = findResumeTargetStage(detail.attempts[detail.attempts.length - 1] ?? null)
  const actionDescriptors = getRunActionDescriptors(detail, currentAttempt)

  return (
    <div className="iris-page-canvas flex h-full min-h-0 flex-col overflow-hidden">
      <div className="iris-family-shell flex shrink-0 flex-wrap items-center gap-3 px-5 py-3">
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-mono text-[13px] font-bold tabular-nums">#{detail.id}</span>
          <StatusBadge status={effectiveStatus} subtle />
          <span className="text-[10px] iris-copy-soft">{formatDuration(detail.startTime ?? detail.createdAt, detail.endTime)}</span>
        </div>

        <div className="iris-signal-strip flex min-w-0 items-center gap-1 overflow-x-auto px-1 py-1">
          {detail.attempts.map((attempt) => {
            const isSelected = attempt.executionId === currentAttempt?.executionId
            const isLatest = attempt.executionId === latestAttempt?.executionId
            return (
              <button
                key={attempt.executionId}
                type="button"
                className={`flex shrink-0 items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[11px] font-semibold transition-all ${
                  isSelected
                    ? 'border-primary bg-primary text-primary-content'
                    : 'border-base-300 bg-base-100 text-base-content/55 hover:border-primary/30 hover:text-base-content'
                }`}
                onClick={() => setSelectedAttemptId(attempt.executionId)}
              >
                {isLatest ? <span className="size-1.5 shrink-0 rounded-full bg-current opacity-60" /> : null}
                #{attempt.executionNo} {attempt.executionKind}
              </button>
            )
          })}
        </div>

        <div className="iris-signal-strip flex shrink-0 items-center gap-1 px-1 py-1">
          <ActionButton size="xs" tone="ghost" className={mainTab === 'board' ? 'text-primary' : ''} onClick={() => setMainTab('board')}>
            <Filter size={12} />Board
          </ActionButton>
          <ActionButton
            size="xs"
            tone="ghost"
            className={mainTab === 'logs' ? 'text-primary' : ''}
            onClick={() => {
              setMainTab('logs')
              if (logs === null && !logsLoading) {
                setLogsLoading(true)
                getRunLogs(numericRunId).then(setLogs).catch(() => setLogs([])).finally(() => setLogsLoading(false))
              }
            }}
          >
            <List size={12} />Logs
          </ActionButton>
        </div>

        {(attemptTotals.read > 0 || attemptTotals.write > 0) ? (
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <span className="font-mono text-[11px] text-success/70">R {attemptTotals.read.toLocaleString()}</span>
            <span className="font-mono text-[11px] text-primary/70">W {attemptTotals.write.toLocaleString()}</span>
            {attemptTotals.rollback > 0 ? (
              <span className="font-mono text-[11px] text-error/70">{attemptTotals.rollback} rb</span>
            ) : null}
          </div>
        ) : null}

        <div className="flex-1" />

        <div className="hidden shrink-0 items-center gap-2 text-[10px] iris-copy-soft xl:flex">
          <span>{formatDateTimeLong(detail.createdAt)}</span>
        </div>

        <div className="iris-signal-strip flex shrink-0 items-center gap-1 px-1 py-1">
          <ActionButton
            size="xs"
            tone="dangerGhost"
            disabled={!actionDescriptors.stop.enabled || !!pendingAction}
            title={actionDescriptors.stop.enabled ? actionDescriptors.stop.detail : actionDescriptors.stop.disabledReason}
            onClick={() => setConfirmAction('stop')}
          >
            <Square size={12} />Stop
          </ActionButton>
          <ActionButton
            size="xs"
            tone="ghost"
            disabled={!actionDescriptors.resume.enabled || !!pendingAction}
            title={actionDescriptors.resume.enabled ? actionDescriptors.resume.detail : actionDescriptors.resume.disabledReason}
            onClick={() => setConfirmAction('resume')}
          >
            <PlayCircle size={12} />Resume
          </ActionButton>
          <ActionButton
            size="xs"
            tone="ghost"
            disabled={!actionDescriptors.rerun.enabled || !!pendingAction}
            title={actionDescriptors.rerun.detail}
            onClick={() => setConfirmAction('rerun')}
          >
            <RotateCcw size={12} />Rerun
          </ActionButton>
          <ActionButton
            size="xs"
            tone="dangerGhost"
            disabled={!actionDescriptors.delete.enabled || !!pendingAction}
            title={actionDescriptors.delete.enabled ? actionDescriptors.delete.detail : actionDescriptors.delete.disabledReason}
            onClick={() => setConfirmAction('delete')}
          >
            <Trash2 size={12} />
          </ActionButton>
          <ActionButton size="xs" tone="icon" square onClick={() => void loadDetail()}>
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          </ActionButton>
        </div>
      </div>

      {error ? <div className="shrink-0 border-b border-error/20 bg-error/5 px-5 py-2 text-xs text-error">{error}</div> : null}

      <main className="iris-workspace-shell relative flex min-h-0 flex-1 overflow-hidden">
        <section className="min-w-0 flex-1 overflow-hidden">
          {mainTab === 'board' ? (
            <div className="h-full">
              <StageLaneBoard
                stages={stageLanes}
                emptyTitle="No attempt stages"
                emptyDescription="This attempt did not materialize any runtime stage projection."
              />
            </div>
          ) : (
            <div className="h-full overflow-y-auto px-5 py-4 font-mono text-xs">
              {logsLoading ? (
                <div className="flex justify-center py-10"><span className="loading loading-spinner loading-sm opacity-40" /></div>
              ) : !logs || logs.length === 0 ? (
                <div className="py-10 text-center text-base-content/40">No log entries available</div>
              ) : (
                <div className="iris-list-panel">
                  {logs.map((entry, idx) => (
                    <div key={idx} className={`iris-list-row flex items-start gap-3 px-3 py-2 ${entry.level === 'ERROR' ? 'bg-error/5 text-error/80' : 'hover:bg-base-200/40'}`}>
                      <span className={`w-12 shrink-0 text-[10px] font-bold uppercase tracking-wider ${entry.level === 'ERROR' ? 'text-error' : 'text-base-content/40'}`}>{entry.level}</span>
                      <span className="shrink-0 tabular-nums text-base-content/40">
                        {entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString() : '--:--:--'}
                      </span>
                      <span className="flex-1 break-all">{entry.message}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <aside className="iris-inspector-rail flex w-[352px] shrink-0 flex-col border-l">
          {mainTab === 'board' && selectedJob ? (
            <JobRuntimeInspector job={selectedJob} onClose={() => setSelectedJobId(null)} />
          ) : (
            <RunOverviewInspector
              detail={detail}
              currentAttempt={currentAttempt}
              effectiveStatusMeta={effectiveStatusMeta}
              attemptSummary={attemptSummary}
              resumeTargetStage={resumeTargetStage}
            />
          )}
        </aside>
      </main>

      {confirmAction ? (
        <DialogShell
          open={Boolean(confirmAction)}
          title={actionDescriptors[confirmAction].confirmTitle}
          description={actionDescriptors[confirmAction].detail}
          tone={confirmAction === 'delete' || confirmAction === 'stop' ? 'danger' : 'default'}
          maxWidthClassName="max-w-md"
          onClose={() => setConfirmAction(null)}
          footer={(
            <>
              <ActionButton tone="ghost" onClick={() => setConfirmAction(null)}>Cancel</ActionButton>
              <ActionButton
                tone={confirmAction === 'delete' || confirmAction === 'stop' ? 'danger' : 'primary'}
                disabled={pendingAction === confirmAction}
                onClick={async () => {
                  if (confirmAction === 'stop') {
                    await runAction('stop', () => stopRun(detail.id))
                  } else if (confirmAction === 'resume') {
                    await runAction('resume', () => resumeRun(detail.id))
                  } else if (confirmAction === 'rerun') {
                    await runAction('rerun', () => rerunRun(detail.id))
                  } else {
                    await runAction('delete', () => deleteRun(detail.id))
                  }
                  setConfirmAction(null)
                }}
              >
                {pendingAction === confirmAction ? 'Working...' : actionDescriptors[confirmAction].label}
              </ActionButton>
            </>
          )}
        >
          {error ? <div className="alert alert-error text-sm">{error}</div> : null}
        </DialogShell>
      ) : null}
    </div>
  )
}

function SemanticCard({
  label,
  value,
  detail,
  tone,
}: {
  label: string
  value: string
  detail: string
  tone?: 'success' | 'error' | 'warning' | 'info' | 'neutral'
}) {
  const toneClass = tone === 'success'
    ? 'success'
    : tone === 'error'
      ? 'error'
      : tone === 'warning'
        ? 'warning'
        : tone === 'info'
          ? 'info'
          : 'neutral'

  return (
    <SemanticSummaryTile
      kicker={label}
      value={value}
      detail={detail}
      tone={toneClass}
      className="px-4 py-3.5"
      valueClassName="text-base text-base-content/82"
    />
  )
}

function RunOverviewInspector({
  detail,
  currentAttempt,
  effectiveStatusMeta,
  attemptSummary,
  resumeTargetStage,
}: {
  detail: PipelineRunDetailInfo
  currentAttempt: PipelineRunDetailInfo['attempts'][number] | null
  effectiveStatusMeta: ReturnType<typeof getPipelineStatusMeta>
  attemptSummary: ReturnType<typeof summarizeAttemptProgress> | null
  resumeTargetStage: ReturnType<typeof findResumeTargetStage>
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="iris-shell-bar border-b-0 px-5 py-4">
        <div className="iris-header">Run Overview</div>
        <div className="mt-2 text-sm font-semibold text-base-content/82">
          {currentAttempt ? `${getAttemptKindLabel(currentAttempt.executionKind)} #${currentAttempt.executionNo}` : 'No attempt'}
        </div>
        <div className="mt-1 text-[11px] iris-copy">
          {effectiveStatusMeta.description}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="space-y-3">
          <SemanticCard
            label="Runtime"
            value={effectiveStatusMeta.label}
            detail={currentAttempt?.endTime
              ? `Ended ${formatDateTimeLong(currentAttempt.endTime)}`
              : currentAttempt?.startTime
                ? `Started ${formatDateTimeLong(currentAttempt.startTime)}`
                : `Created ${formatDateTimeLong(detail.createdAt)}`}
            tone={effectiveStatusMeta.tone}
          />
          <SemanticCard
            label="Stage Progress"
            value={attemptSummary ? `${attemptSummary.completedStages}/${attemptSummary.totalStages}` : '0/0'}
            detail={attemptSummary?.headline ?? 'No stage projection'}
          />
          <SemanticCard
            label="Resume Path"
            value={resumeTargetStage ? resumeTargetStage.stage : 'No pending resume'}
            detail={resumeTargetStage
              ? 'Resume creates a new attempt from the first incomplete stage and replays earlier completed jobs as Skipped.'
              : 'No resumable stage is pending right now.'}
          />
        </div>

        <div className="iris-section-panel mt-4 p-4">
          <div className="iris-header">Stage Semantics</div>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
            <span className="badge badge-ghost badge-sm">Parallel inside a stage</span>
            <span className="badge badge-ghost badge-sm">Barrier between stages</span>
            <span className="badge badge-ghost badge-sm">Skipped means reused on resume</span>
            <span className="badge badge-ghost badge-sm">Not Run means blocked downstream</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Job runtime inspector

function JobRuntimeInspector({ job, onClose }: { job: PipelineRunJobInfo; onClose: () => void }) {
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
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-start justify-between gap-4 border-b border-base-300 px-5 py-4 shrink-0">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-ghost badge-sm">Job #{job.sequenceOrder + 1}</span>
              <StatusBadge status={job.status} subtle />
              <AtomicLevelBadge level={job.atomicLevel} />
            </div>
            <div className="mt-2 truncate text-xl font-bold">{job.jobName}</div>
            {job.startTime && (
              <div className="mt-1 text-xs text-base-content/50 font-mono">
                {formatDateTimeLong(job.startTime)}
                {job.endTime && <span className="ml-2 text-base-content/30">| {formatDuration(job.startTime, job.endTime)}</span>}
              </div>
            )}
          </div>
          <button type="button" className="btn btn-ghost btn-sm btn-square shrink-0" onClick={onClose} aria-label="Close job details">
            <X size={16} />
          </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        <div className="mb-5">
            <SectionLabel>I/O Throughput</SectionLabel>
            <div className="mt-2 space-y-3">
              <ThroughputBar label="Read" value={totals.read} max={maxIO} color="success" icon="R" />
              <ThroughputBar label="Write" value={totals.write} max={maxIO} color="primary" icon="W" />
            </div>
          </div>

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

        <div>
            <SectionLabel>{job.stepExecutionInfos.length} Step{job.stepExecutionInfos.length !== 1 ? 's' : ''}</SectionLabel>
            <div className="mt-2 space-y-3">
              {job.stepExecutionInfos.map((step, idx) => (
                <StepDetailCard key={step.id} step={step} index={idx} />
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

// Step detail card

function StepDetailCard({ step, index }: { step: StepExecutionInfo; index: number }) {
  const totalSkip = step.readSkipCount + step.writeSkipCount + step.processSkipCount
  const hasIssues = step.rollbackCount > 0 || totalSkip > 0

  return (
    <div className={`iris-section-panel overflow-hidden ${hasIssues ? 'border-warning/30 bg-warning/5' : 'bg-base-100'}`}>
      <div className={`px-4 py-3 flex items-center justify-between gap-3 ${hasIssues ? 'bg-warning/5' : 'bg-base-200/30'}`}>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-base-content/40">Step {index + 1}</span>
            {hasIssues && <span className="badge badge-warning badge-xs">Issues</span>}
          </div>
          <div className="truncate text-sm font-semibold mt-0.5">{step.stepName}</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {step.startTime && step.endTime && (
            <span className="text-[10px] font-mono text-base-content/40">{formatDuration(step.startTime, step.endTime)}</span>
          )}
          <StatusBadge status={step.status as PipelineRunStatus} subtle />
        </div>
      </div>

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

        {step.exitDescription && step.exitDescription.trim().length > 0 && step.exitCode !== 'COMPLETED' && (
          <div className="iris-inset-panel mt-3 flex items-start gap-2 border-error/15 bg-error/5 px-3 py-2">
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

// Subcomponents

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
        <span className="text-[10px] uppercase tracking-widest text-base-content/45 w-14 shrink-0">{label}</span>
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
    <div className="iris-section-panel px-4 py-3">
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
      <div className="text-[9px] font-black uppercase tracking-[0.14em] text-base-content/40">{label}</div>
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
    <div className="text-[10px] font-black uppercase tracking-[0.22em] text-base-content/45">{children}</div>
  )
}

// Shared tiles

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
    <div className="iris-glass-soft px-4 py-3">
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/45">{label}</div>
      <div className={`mt-1 text-sm font-semibold ${mono ? 'font-mono' : ''} ${highlight ? colorMap[highlight] : ''}`}>{value}</div>
    </div>
  )
}

// Helpers


