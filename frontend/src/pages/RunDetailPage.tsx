import { AlertCircle, BarChart3, FileText, Filter, List, PlayCircle, RefreshCw, RotateCcw, SkipForward, Square, Trash2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { PipelineAttemptTimeline } from '../components/pipeline-family/PipelineAttemptTimeline'
import { PipelineDiagnosticsDrawer } from '../components/pipeline-family/PipelineDiagnosticsDrawer'
import { PipelineFamilyActions } from '../components/pipeline-family/PipelineFamilyActions'
import { PipelineOverviewRail } from '../components/pipeline-family/PipelineOverviewRail'
import { PIPELINE_FAMILY_CONTEXT_DETAIL, PIPELINE_FAMILY_RAIL_WIDTH, PIPELINE_FAMILY_TERMS } from '../components/pipeline-family/ui-contract'
import { StatusBadge } from '../components/StatusBadge'
import { ActionButton, ActionLink } from '../components/ui/Action'
import { DialogShell } from '../components/ui/DialogShell'
import { SummaryTile as SemanticSummaryTile, SurfaceBox } from '../components/ui/Surface'
import { deleteRun, getApiErrorMessage, getRunDetail, getRunLogs, rerunRun, resumeRun, stopRun, type RunLogEntry } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import {
  extractRunJobErrorLine,
  findResumeTargetStage,
  getAttemptKindLabel,
  getAttemptStepTotals,
  getJobStepTotals,
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
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null)
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)
  const [diagnosticsTab, setDiagnosticsTab] = useState<'logs' | 'metrics' | 'steps'>('logs')
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

  usePipelineEvents({
    onJobStarted: () => void loadDetail(),
    onJobFinished: () => void loadDetail(),
    onRunCompleted: () => void loadDetail(),
    onRunFailed: () => void loadDetail(),
    onRunStopped: () => void loadDetail(),
  }, Number.isFinite(numericRunId) ? numericRunId : undefined)

  useEffect(() => {
    if (!detail) return
    if (!isPipelineStatusActive(detail.status)) return

    const timer = setInterval(() => { void loadDetail() }, 5000)
    return () => clearInterval(timer)
  }, [detail?.status])

  const latestAttempt = useMemo(() => {
    if (!detail || detail.attempts.length === 0) return null
    return detail.attempts[detail.attempts.length - 1]
  }, [detail])

  const selectedAttempt = useMemo(() => {
    if (!detail || detail.attempts.length === 0) return null
    return detail.attempts.find((attempt) => attempt.executionId === selectedAttemptId) ?? latestAttempt
  }, [detail, latestAttempt, selectedAttemptId])

  useEffect(() => {
    if (!Number.isFinite(numericRunId) || diagnosticsTab !== 'logs' || logs !== null || logsLoading) return

    let active = true
    setLogsLoading(true)
    getRunLogs(numericRunId)
      .then((entries) => {
        if (active) setLogs(entries)
      })
      .catch(() => {
        if (active) setLogs([])
      })
      .finally(() => {
        if (active) setLogsLoading(false)
      })

    return () => {
      active = false
    }
  }, [diagnosticsTab, logs, logsLoading, numericRunId])

  const selectedAttemptTotals = useMemo(() => {
    if (!selectedAttempt) return { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 }
    return getAttemptStepTotals(selectedAttempt)
  }, [selectedAttempt])
  const selectedJob = useMemo(() => {
    if (!selectedAttempt || !selectedJobId) return null
    return selectedAttempt.jobs.find((job) => job.id === selectedJobId) ?? null
  }, [selectedAttempt, selectedJobId])
  const selectedStage = useMemo(() => {
    if (!selectedAttempt || !selectedStageId) return null
    return selectedAttempt.stages.find((stage) => stage.stage === selectedStageId) ?? null
  }, [selectedAttempt, selectedStageId])
  const selectedJobTotals = useMemo(() => {
    if (!selectedJob) return { read: 0, write: 0, commit: 0, rollback: 0, filter: 0, skip: 0 }
    return getJobStepTotals(selectedJob)
  }, [selectedJob])
  const stageLanes = useMemo<StageLaneData[]>(() => {
    if (!selectedAttempt) return []

    return selectedAttempt.stages.map((stage) => {
      const stageSummary = summarizePipelineStage(stage)

      return {
        id: stage.stage,
        title: stage.stage,
        status: stage.status,
        selected: stage.stage === selectedStageId,
        onClick: () => {
          setSelectedStageId(stage.stage)
          setSelectedJobId(null)
        },
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
            onClick: () => {
              setSelectedStageId(stage.stage)
              setSelectedJobId(job.id)
            },
            onDoubleClick: () => {
              setSelectedStageId(stage.stage)
              setSelectedJobId(job.id)
            },
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
  }, [selectedAttempt, selectedJobId, selectedStageId])

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

  useEffect(() => {
    setSelectedStageId(null)
    setSelectedJobId(null)
  }, [selectedAttemptId, selectedAttempt?.executionId])

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

  const selectedAttemptStatus = selectedAttempt ? getRunEffectiveStatus(detail, selectedAttempt) : detail.status
  const selectedAttemptStatusMeta = getPipelineStatusMeta(selectedAttemptStatus)
  const selectedAttemptProgress = selectedAttempt ? summarizeAttemptProgress(selectedAttempt) : null
  const resumeTargetStage = findResumeTargetStage(detail.attempts[detail.attempts.length - 1] ?? null)
  const actionDescriptors = getRunActionDescriptors(detail, selectedAttempt)
  const selectedJobSummary = selectedJob
    ? {
        title: selectedJob.jobName,
        stage: selectedJob.stage,
        status: selectedJob.status,
        atomicLevel: selectedJob.atomicLevel,
        stepCount: selectedJob.stepExecutionInfos.length,
      }
    : null
  const selectedStageSummary = selectedStage
    ? {
        title: selectedStage.stage,
        status: selectedStage.status,
        jobCount: selectedStage.jobs.length,
        summary: summarizePipelineStage(selectedStage).summary,
      }
    : null

  return (
    <div className="iris-page-canvas flex h-full min-h-0 flex-col overflow-hidden">
      <div className="iris-family-shell shrink-0 px-5 py-4">
        <SurfaceBox variant="section" className="iris-family-hero flex flex-col gap-4 px-4 py-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[13px] font-bold tabular-nums">#{detail.id}</span>
                <StatusBadge status={selectedAttemptStatus} subtle />
                <span className="badge badge-ghost badge-sm">
                  {selectedAttempt ? `${getAttemptKindLabel(selectedAttempt.executionKind)} attempt` : 'No attempt'}
                </span>
                {selectedAttempt?.executionId === latestAttempt?.executionId ? (
                  <span className="badge badge-primary badge-sm">latest</span>
                ) : null}
                {selectedStageSummary && !selectedJobSummary ? <span className="badge badge-secondary badge-sm">selected stage</span> : null}
                {selectedJobSummary ? <span className="badge badge-info badge-sm">selected job</span> : null}
              </div>

              <div className="mt-3 text-lg font-bold tracking-tight text-base-content">
                {selectedAttempt ? `Attempt #${selectedAttempt.executionNo}` : 'No attempt selected'}
              </div>
              <div className="mt-1 max-w-3xl text-sm iris-copy">
                {selectedAttemptStatusMeta.description}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] iris-copy-soft">
                <span>Created {formatDateTimeLong(detail.createdAt)}</span>
                <span className="iris-copy-faint">|</span>
                <span>Duration {formatDuration(detail.startTime ?? detail.createdAt, detail.endTime)}</span>
                {resumeTargetStage ? (
                  <>
                    <span className="iris-copy-faint">|</span>
                    <span className="text-warning">Resume target: {resumeTargetStage.stage}</span>
                  </>
                ) : null}
                {selectedStageSummary ? (
                  <>
                    <span className="iris-copy-faint">|</span>
                    <span>Stage: {selectedStageSummary.title}</span>
                  </>
                ) : null}
                {selectedJobSummary ? (
                  <>
                    <span className="iris-copy-faint">|</span>
                    <span>Job: {selectedJobSummary.title}</span>
                  </>
                ) : null}
              </div>
            </div>

            <div className="flex w-full max-w-lg flex-col gap-2 sm:w-auto">
              <div className="grid grid-cols-2 gap-2">
                <SemanticSummaryTile kicker="Attempts" value={String(detail.attempts.length)} detail={`${PIPELINE_FAMILY_TERMS.run} timeline`} />
                <SemanticSummaryTile
                  kicker="Stage Progress"
                  value={selectedAttemptProgress ? `${selectedAttemptProgress.completedStages}/${selectedAttemptProgress.totalStages}` : '0/0'}
                  detail={selectedAttemptProgress?.headline ?? 'No stage projection'}
                  />
                <SemanticSummaryTile
                  kicker="Read"
                  value={selectedAttemptTotals.read.toLocaleString()}
                  detail="Current attempt"
                  tone="success"
                />
                <SemanticSummaryTile
                  kicker="Write"
                  value={selectedAttemptTotals.write.toLocaleString()}
                  detail="Current attempt"
                  tone="info"
                />
              </div>

              <PipelineFamilyActions
                secondary={(
                  <>
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
                  </>
                )}
                danger={(
                  <>
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
                      tone="dangerGhost"
                      disabled={!actionDescriptors.delete.enabled || !!pendingAction}
                      title={actionDescriptors.delete.enabled ? actionDescriptors.delete.detail : actionDescriptors.delete.disabledReason}
                      onClick={() => setConfirmAction('delete')}
                    >
                      <Trash2 size={12} />
                    </ActionButton>
                  </>
                )}
                utility={(
                  <ActionButton size="xs" tone="icon" square onClick={() => void loadDetail()}>
                    <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
                  </ActionButton>
                )}
              />
            </div>
          </div>

          <PipelineAttemptTimeline
            attempts={detail.attempts}
            selectedAttemptId={selectedAttempt?.executionId ?? null}
            latestAttemptId={latestAttempt?.executionId ?? null}
            onSelect={setSelectedAttemptId}
          />
        </SurfaceBox>
      </div>

      {error ? <div className="shrink-0 border-b border-error/20 bg-error/5 px-5 py-2 text-xs text-error">{error}</div> : null}

      <main className="iris-workspace-shell relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden px-5 pb-4 xl:flex-row">
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
            <SurfaceBox variant="section" className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-base-300/60 px-4 py-3">
                <div className="min-w-0">
                  <div className="iris-header">Selected Attempt Runtime Board</div>
                  <div className="mt-1 text-sm font-semibold text-base-content/84">
                    {selectedAttempt ? `Attempt #${selectedAttempt.executionNo} · ${getAttemptKindLabel(selectedAttempt.executionKind)}` : 'No attempt selected'}
                  </div>
                  <div className="mt-1 text-[11px] iris-copy">
                    {PIPELINE_FAMILY_CONTEXT_DETAIL.runDetail}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] iris-copy-soft">
                  <span className="badge badge-ghost badge-sm">{selectedAttemptStatusMeta.label}</span>
                  <span className="badge badge-ghost badge-sm">{selectedAttempt?.jobs.length ?? 0} jobs</span>
                  <span className="badge badge-ghost badge-sm">{selectedAttemptProgress?.headline ?? 'No progress summary'}</span>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-hidden">
                <StageLaneBoard
                  stages={stageLanes}
                  emptyTitle="No attempt stages"
                  emptyDescription={`This attempt did not materialize any runtime ${PIPELINE_FAMILY_TERMS.stageProjection}.`}
                />
              </div>
            </SurfaceBox>
          </div>

          <PipelineOverviewRail
            className={PIPELINE_FAMILY_RAIL_WIDTH.detail}
            header={(
              <div>
                <div className="iris-header">Run Overview</div>
                <div className="mt-2 text-sm font-semibold text-base-content/82">
                  {selectedAttempt ? `${getAttemptKindLabel(selectedAttempt.executionKind)} #${selectedAttempt.executionNo}` : 'No attempt'}
                </div>
                <div className="mt-1 text-[11px] iris-copy">
                  {selectedAttemptStatusMeta.description}
                </div>
              </div>
            )}
          >
            <SemanticSummaryTile
              kicker="Runtime"
              value={selectedAttemptStatusMeta.label}
              detail={selectedAttempt?.endTime
                ? `Ended ${formatDateTimeLong(selectedAttempt.endTime)}`
                : selectedAttempt?.startTime
                  ? `Started ${formatDateTimeLong(selectedAttempt.startTime)}`
                  : `Created ${formatDateTimeLong(detail.createdAt)}`}
              tone={selectedAttemptStatusMeta.tone === 'neutral' ? 'neutral' : selectedAttemptStatusMeta.tone}
            />
            <SemanticSummaryTile
              kicker="Stage Progress"
              value={selectedAttemptProgress ? `${selectedAttemptProgress.completedStages}/${selectedAttemptProgress.totalStages}` : '0/0'}
              detail={selectedAttemptProgress?.detail ?? 'No stage projection'}
            />
            <SemanticSummaryTile
              kicker="Resume Path"
              value={resumeTargetStage ? resumeTargetStage.stage : 'No pending resume'}
              detail={resumeTargetStage
                ? 'Resume creates a new attempt from the first incomplete stage and replays earlier completed jobs as skipped.'
                : 'No resumable stage is pending right now.'}
            />

            {selectedJobSummary ? (
              <div className="iris-section-panel px-4 py-3">
                <div className="iris-header">Selected Job</div>
                <div className="mt-1 text-sm font-semibold text-base-content/82">{selectedJobSummary.title}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] iris-copy-soft">
                  <span className="badge badge-ghost badge-xs">Stage {selectedJobSummary.stage}</span>
                  <span className="badge badge-ghost badge-xs">{selectedJobSummary.stepCount} steps</span>
                  <AtomicLevelBadge level={selectedJobSummary.atomicLevel} />
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                  <SemanticSummaryTile kicker="Read" value={selectedJobTotals.read.toLocaleString()} detail="Selected job" tone="success" />
                  <SemanticSummaryTile kicker="Write" value={selectedJobTotals.write.toLocaleString()} detail="Selected job" tone="info" />
                </div>
              </div>
            ) : selectedStageSummary ? (
              <div className="iris-section-panel px-4 py-3">
                <div className="iris-header">Selected Stage</div>
                <div className="mt-1 text-sm font-semibold text-base-content/82">{selectedStageSummary.title}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] iris-copy-soft">
                  <StatusBadge status={selectedStageSummary.status} subtle />
                  <span className="badge badge-ghost badge-xs">{selectedStageSummary.jobCount} jobs</span>
                </div>
                <div className="mt-3 text-[11px] iris-copy">{selectedStageSummary.summary}</div>
              </div>
            ) : (
              <div className="iris-empty-panel px-4 py-4 text-[11px] iris-copy">
                Select a stage or job from the runtime board to inspect scoped diagnostics.
              </div>
            )}

            <div className="iris-section-panel px-4 py-3">
              <div className="iris-header">Stage Semantics</div>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                <span className="badge badge-ghost badge-sm">Parallel inside a stage</span>
                <span className="badge badge-ghost badge-sm">Barrier between stages</span>
                <span className="badge badge-ghost badge-sm">Skipped means reused on resume</span>
                <span className="badge badge-ghost badge-sm">Not Run means blocked downstream</span>
              </div>
            </div>
          </PipelineOverviewRail>
        </div>

        <PipelineDiagnosticsDrawer
          className="mx-5 mb-4"
          bodyHeightClassName="h-[320px]"
          header={(
            <>
                <div>
                  <div className="iris-header">Diagnostics Drawer</div>
                  <div className="mt-1 text-xs iris-copy-soft">
                    Logs remain run-scoped; metrics and step evidence follow the selected attempt and selected job.
                  </div>
                </div>
              <div className="iris-signal-strip flex items-center gap-1 px-1 py-1">
                <ActionButton size="xs" tone="ghost" className={diagnosticsTab === 'logs' ? 'text-primary' : ''} onClick={() => setDiagnosticsTab('logs')}>
                  <FileText size={12} />Logs
                </ActionButton>
                <ActionButton size="xs" tone="ghost" className={diagnosticsTab === 'metrics' ? 'text-primary' : ''} onClick={() => setDiagnosticsTab('metrics')}>
                  <BarChart3 size={12} />Metrics
                </ActionButton>
                <ActionButton size="xs" tone="ghost" className={diagnosticsTab === 'steps' ? 'text-primary' : ''} onClick={() => setDiagnosticsTab('steps')}>
                  <List size={12} />Step Detail
                </ActionButton>
              </div>
            </>
          )}
        >
          <div className="space-y-4">
            {selectedJobSummary ? (
              <div className="iris-section-panel px-4 py-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="iris-header">Selected Job Context</div>
                    <div className="mt-1 truncate text-sm font-semibold text-base-content/82">{selectedJobSummary.title}</div>
                    <div className="mt-1 text-[11px] iris-copy-soft">
                      Stage {selectedJobSummary.stage} · {selectedJobSummary.stepCount} step{selectedJobSummary.stepCount === 1 ? '' : 's'}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge status={selectedJobSummary.status} subtle />
                    <AtomicLevelBadge level={selectedJobSummary.atomicLevel} />
                  </div>
                </div>
              </div>
            ) : selectedStageSummary ? (
              <div className="iris-section-panel px-4 py-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="iris-header">Selected Stage Context</div>
                    <div className="mt-1 truncate text-sm font-semibold text-base-content/82">{selectedStageSummary.title}</div>
                    <div className="mt-1 text-[11px] iris-copy-soft">
                      {selectedStageSummary.jobCount} job{selectedStageSummary.jobCount === 1 ? '' : 's'} in this stage
                    </div>
                  </div>
                  <StatusBadge status={selectedStageSummary.status} subtle />
                </div>
              </div>
            ) : null}

            {diagnosticsTab === 'logs' ? (
              logsLoading ? (
                <div className="flex justify-center py-10"><span className="loading loading-spinner loading-sm opacity-40" /></div>
              ) : !logs || logs.length === 0 ? (
                <div className="py-10 text-center text-base-content/40">No log entries available</div>
              ) : (
                <div className="space-y-3">
                  <div className="iris-inset-panel px-3 py-2 text-[11px] iris-copy-soft">
                    Log entries are scoped to the logical run. Switching attempts does not filter this stream.
                  </div>
                  <div className="iris-list-panel">
                    {logs.map((entry, index) => (
                      <div
                        key={`${entry.timestamp ?? 'log'}-${index}`}
                        className={`iris-list-row flex items-start gap-3 px-3 py-2 ${entry.level === 'ERROR' ? 'bg-error/5 text-error/80' : 'hover:bg-base-200/40'}`}
                      >
                        <span className={`w-12 shrink-0 text-[10px] font-bold uppercase tracking-wider ${entry.level === 'ERROR' ? 'text-error' : 'text-base-content/40'}`}>
                          {entry.level}
                        </span>
                        <span className="shrink-0 tabular-nums text-base-content/40">
                          {entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString() : '--:--:--'}
                        </span>
                        <span className="flex-1 break-all font-mono text-[11px]">{entry.message}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ) : diagnosticsTab === 'metrics' ? (
              <div className="grid gap-3 md:grid-cols-4">
                <SemanticSummaryTile kicker="Read" value={selectedAttemptTotals.read.toLocaleString()} detail="Current attempt" tone="success" />
                <SemanticSummaryTile kicker="Write" value={selectedAttemptTotals.write.toLocaleString()} detail="Current attempt" tone="info" />
                <SemanticSummaryTile kicker="Rollback" value={selectedAttemptTotals.rollback.toLocaleString()} detail="Current attempt" tone={selectedAttemptTotals.rollback > 0 ? 'error' : 'neutral'} />
                <SemanticSummaryTile kicker="Skip/Filter" value={`${selectedAttemptTotals.skip + selectedAttemptTotals.filter}`} detail="Current attempt" tone={selectedAttemptTotals.skip + selectedAttemptTotals.filter > 0 ? 'warning' : 'neutral'} />
                <div className="iris-section-panel px-4 py-4 md:col-span-4">
                  <div className="iris-header">Attempt Summary</div>
                  <div className="mt-2 text-sm text-base-content/80">{selectedAttemptProgress?.headline ?? 'No attempt summary'}</div>
                  <div className="mt-1 text-[11px] iris-copy">{selectedAttemptProgress?.detail ?? 'No runtime projection is available for this attempt.'}</div>
                </div>
              </div>
            ) : selectedJob ? (
              <div className="space-y-3">
                {selectedJob.stepExecutionInfos.map((step, index) => (
                  <StepDetailCard key={step.id} step={step} index={index} />
                ))}
              </div>
            ) : selectedStageSummary ? (
              <div className="iris-empty-panel px-4 py-8 text-center text-sm text-base-content/45">
                Stage selected. Pick a job in this stage to inspect step-level evidence.
              </div>
            ) : (
              <div className="iris-empty-panel px-4 py-8 text-center text-sm text-base-content/45">
                Select a stage or job from the board to inspect diagnostics.
              </div>
            )}
          </div>
        </PipelineDiagnosticsDrawer>
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

function StepDetailCard({ step, index }: { step: StepExecutionInfo; index: number }) {
  const totalSkip = step.readSkipCount + step.writeSkipCount + step.processSkipCount
  const hasIssues = step.rollbackCount > 0 || totalSkip > 0

  return (
    <div className={`iris-section-panel overflow-hidden ${hasIssues ? 'border-warning/30 bg-warning/5' : 'bg-base-100'}`}>
      <div className={`flex items-start justify-between gap-3 px-4 py-3 ${hasIssues ? 'bg-warning/5' : 'bg-base-200/30'}`}>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-base-content/40">Step {index + 1}</span>
            {hasIssues ? <span className="badge badge-warning badge-xs">Issues</span> : null}
          </div>
          <div className="mt-0.5 truncate text-sm font-semibold">{step.stepName}</div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {step.startTime && step.endTime ? (
            <span className="text-[10px] font-mono text-base-content/40">{formatDuration(step.startTime, step.endTime)}</span>
          ) : null}
          <StatusBadge status={step.status as PipelineRunStatus} subtle />
        </div>
      </div>

      <div className="grid gap-2 px-4 py-3 sm:grid-cols-4">
        <StepStat label="Read" value={step.readCount} />
        <StepStat label="Write" value={step.writeCount} />
        <StepStat label="Commit" value={step.commitCount} />
        <StepStat label="Rollback" value={step.rollbackCount} tone={step.rollbackCount > 0 ? 'error' : 'neutral'} />
      </div>

      {step.filterCount > 0 || totalSkip > 0 ? (
        <div className="grid gap-2 px-4 pb-3 sm:grid-cols-4">
          {step.filterCount > 0 ? <StepStat label="Filter" value={step.filterCount} /> : null}
          {step.readSkipCount > 0 ? <StepStat label="RdSkip" value={step.readSkipCount} tone="warning" /> : null}
          {step.writeSkipCount > 0 ? <StepStat label="WrSkip" value={step.writeSkipCount} tone="warning" /> : null}
          {step.processSkipCount > 0 ? <StepStat label="PrSkip" value={step.processSkipCount} tone="warning" /> : null}
        </div>
      ) : null}

      {step.exitDescription && step.exitDescription.trim().length > 0 && step.exitCode !== 'COMPLETED' ? (
        <div className="iris-inset-panel mx-4 mb-4 flex items-start gap-2 border-error/15 bg-error/5 px-3 py-2">
          <AlertCircle size={13} className="mt-0.5 shrink-0 text-error" />
          <div className="break-all font-mono text-[11px] leading-relaxed text-error/80">
            {step.exitDescription}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function StepStat({
  label,
  value,
  tone = 'neutral',
}: {
  label: string
  value: number
  tone?: 'neutral' | 'warning' | 'error'
}) {
  const toneClass = tone === 'warning'
    ? 'text-warning'
    : tone === 'error'
      ? 'text-error'
      : 'text-base-content/82'

  return (
    <div className="rounded-[var(--iris-radius-inset)] border border-base-300/60 bg-base-100 px-2 py-2 text-center">
      <div className={`font-mono text-base font-bold ${toneClass}`}>{value.toLocaleString()}</div>
      <div className="text-[9px] font-black uppercase tracking-[0.14em] text-base-content/40">{label}</div>
    </div>
  )
}

function AtomicLevelBadge({ level }: { level: AtomicLevel }) {
  return (
    <span
      className={`badge badge-sm font-semibold ${
        level === 'CHUNK'
          ? 'border-secondary/20 bg-secondary/10 text-secondary'
          : 'border-primary/20 bg-primary/10 text-primary'
      }`}
    >
      {level === 'CHUNK' ? <><SkipForward size={10} className="mr-1" />CHUNK</> : <><Filter size={10} className="mr-1" />JOB</>}
    </span>
  )
}
