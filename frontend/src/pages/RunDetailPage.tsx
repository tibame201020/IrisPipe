import {
  Clock,
  History,
  Info,
  Layers,
  PlayCircle,
  RefreshCw,
  RotateCcw,
  Square,
  Trash2,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import type { Edge, Node } from '@xyflow/react'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { PipelineCanvas } from '../components/GraphEngine/PipelineCanvas'
import {
  deleteRun,
  getApiErrorMessage,
  getRunDetail,
  rerunRun,
  resumeRun,
  stopRun,
} from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import type { StatusNodeData } from '../types/graph'
import type {
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
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

  const selectedJob = useMemo(() => {
    if (!currentAttempt || !selectedJobId) return null
    return currentAttempt.jobs.find((job) => job.id === selectedJobId) ?? null
  }, [currentAttempt, selectedJobId])

  const currentAttemptStepCount = useMemo(() => {
    if (!currentAttempt) return 0
    return currentAttempt.jobs.reduce((total, job) => total + job.stepExecutionInfos.length, 0)
  }, [currentAttempt])

  const { graphNodes, graphEdges } = useMemo(() => {
    if (!currentAttempt) {
      return { graphNodes: [], graphEdges: [] }
    }

    const nodes: Node<StatusNodeData>[] = currentAttempt.jobs.map((job, index) => ({
      id: `job-${job.id}`,
      type: 'statusNode',
      position: { x: index * 350, y: 140 },
      data: {
        label: job.jobName,
        index: job.sequenceOrder + 1,
        status: job.status,
        stats: job.stepExecutionInfos.reduce(
          (acc, step) => ({
            read: (acc.read || 0) + step.readCount,
            write: (acc.write || 0) + step.writeCount,
            stepCount: (acc.stepCount || 0) + 1,
          }),
          { read: 0, write: 0, stepCount: 0 },
        ),
      },
    }))

    const edges: Edge[] = []
    for (let index = 0; index < nodes.length - 1; index += 1) {
      edges.push({
        id: `edge-${index}`,
        source: nodes[index].id,
        target: nodes[index + 1].id,
        type: 'audit',
      })
    }

    return { graphNodes: nodes, graphEdges: edges }
  }, [currentAttempt])

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

  if (loading && !detail) return <div className="p-12"><LoadingState /></div>

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
  const viewingLatestAttempt = currentAttempt?.executionId === latestAttempt?.executionId

  return (
      <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-200/30">
      <div className="flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-6 py-3">
        <div className="min-w-0">
          <div className="breadcrumbs text-[13px] text-base-content/45">
            <ul>
              <li>
                <Link to={`/pipeline/items/${numericPipelineId}/runs${folderId ? `?folderId=${folderId}` : ''}`}>
                  Run History
                </Link>
              </li>
              <li className="font-semibold text-base-content">Run #{detail.id}</li>
            </ul>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-base-content/55">
            <span className="font-semibold">{workspace.pipeline.pipelineName}</span>
            <span>&bull;</span>
            <StatusBadge status={detail.status} mode="text" />
            <span>&bull;</span>
            <span>{currentAttempt?.executionKind ?? 'Attempt'}</span>
            <span>&bull;</span>
            <span>Attempt #{currentAttempt?.executionNo ?? '-'}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
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
          </div>
          <button type="button" onClick={() => void loadDetail()} className="btn btn-ghost btn-sm btn-square">
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="flex w-72 flex-col border-r border-base-300 bg-base-100">
          <div className="border-b border-base-300 px-5 py-5">
            <div className="iris-header">Run Summary</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <SummaryTile label="Status" value={detail.status} />
              <SummaryTile label="Duration" value={formatDuration(detail.startTime || detail.createdAt, detail.endTime)} mono />
              <SummaryTile label="Attempts" value={detail.attempts.length} />
              <SummaryTile label="Created" value={formatDateTimeLong(detail.createdAt)} />
            </div>
          </div>

          <div className="border-b border-base-300 px-5 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History size={16} className="text-primary" />
                <span className="iris-header">Attempts</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-base-content/40">
                {detail.attempts.length} total
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {detail.attempts.slice().reverse().map((attempt) => {
              const isLatest = attempt.executionId === latestAttempt?.executionId
              const isSelected = attempt.executionId === currentAttempt?.executionId
              const stepCount = attempt.jobs.reduce((count, job) => count + job.stepExecutionInfos.length, 0)

              return (
                <button
                  key={attempt.executionId}
                  type="button"
                  className={`w-full rounded-xl border p-3 text-left transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-base-300 bg-base-100 hover:border-primary/30 hover:bg-base-200/30'
                  }`}
                  onClick={() => setSelectedAttemptId(attempt.executionId)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-bold">{attempt.executionKind}</div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">
                          Attempt #{attempt.executionNo}
                        </span>
                        {isLatest ? <span className="badge badge-ghost badge-sm">Latest</span> : null}
                        <StatusBadge status={attempt.status} subtle />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-[11px] text-base-content/45">
                    <div className="flex items-center gap-2">
                      <Clock size={11} />
                      {formatDateTimeLong(attempt.startTime)}
                    </div>
                    <span className="font-mono">{formatDuration(attempt.startTime, attempt.endTime)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-base-content/35">
                    <span>{attempt.jobs.length} jobs</span>
                    <span>{stepCount} steps</span>
                    <span>{attempt.requestedAsync == null ? '-' : attempt.requestedAsync ? 'Async' : 'Sync'}</span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="border-t border-base-300 bg-base-200/30 p-3">
            <button
              type="button"
              className="btn btn-ghost btn-sm w-full gap-2 text-error"
              onClick={() => void runAction('delete', () => deleteRun(detail.id))}
            >
              <Trash2 size={14} />
              Delete Run
            </button>
          </div>
        </aside>

        <main className="relative min-w-0 flex-1 bg-base-200/50">
          <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="badge badge-lg gap-2 border border-base-300 bg-base-100 px-4">
                <Layers size={14} />
                <span className="font-semibold">Attempt #{currentAttempt?.executionNo}</span>
              </div>
              {currentAttempt ? <StatusBadge status={currentAttempt.status} subtle /> : null}
              {!viewingLatestAttempt ? <span className="badge badge-warning gap-2"><Info size={12} />Earlier attempt</span> : null}
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-base-300 bg-base-100/90 px-3 py-2 shadow-sm backdrop-blur">
              <ContextMetric label="Kind" value={currentAttempt?.executionKind ?? '-'} />
              <ContextDivider />
              <ContextMetric label="Jobs" value={currentAttempt?.jobs.length ?? 0} />
              <ContextDivider />
              <ContextMetric label="Steps" value={currentAttemptStepCount} />
              <ContextDivider />
              <ContextMetric
                label="Mode"
                value={
                  currentAttempt?.requestedAsync == null
                    ? '-'
                    : currentAttempt.requestedAsync
                      ? 'Async'
                      : 'Sync'
                }
              />
              <ContextDivider />
              <ContextMetric
                label="Duration"
                value={formatDuration(currentAttempt?.startTime, currentAttempt?.endTime)}
              />
            </div>
          </div>

          <div className="absolute inset-0 min-h-0">
            <PipelineCanvas
              nodes={graphNodes}
              edges={graphEdges}
              onNodeClick={(_, node) => setSelectedJobId(Number(node.id.split('-')[1]))}
            />
          </div>

          {selectedJob ? (
            <aside className="absolute right-0 top-0 z-20 h-full w-[340px] border-l border-base-300 bg-base-100 shadow-2xl">
              <div className="border-b border-base-300 px-5 py-5">
                <div className="iris-header">Job Details</div>
                <div className="mt-2 text-lg font-bold">{selectedJob.jobName}</div>
                <div className="mt-2 text-sm text-base-content/55">
                  Details for the selected job in the current attempt.
                </div>
              </div>

              <div className="h-[calc(100%-101px)] overflow-y-auto p-5">
                <JobDetailsPanel job={selectedJob} onClose={() => setSelectedJobId(null)} />
              </div>
            </aside>
          ) : null}
        </main>
      </div>
    </div>
  )
}

function ContextDivider() {
  return <div className="h-8 w-px bg-base-300" />
}

function ContextMetric({
  label,
  value,
}: {
  label: string
  value: string | number
}) {
  return (
    <div className="text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      <div className="mt-1 text-xs font-semibold">{value}</div>
    </div>
  )
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
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      <div className={`mt-1 text-sm font-semibold ${mono ? 'font-mono' : ''}`}>{value}</div>
    </div>
  )
}

function JobDetailsPanel({
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
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        <SummaryTile label="Sequence" value={job.sequenceOrder + 1} />
        <SummaryTile label="Status" value={job.status} />
        <SummaryTile label="Steps" value={job.stepExecutionInfos.length} />
        <SummaryTile label="Atomic" value={job.atomicLevel} />
      </div>

      <div>
        <div className="iris-header mb-3">Step Totals</div>
        <div className="grid grid-cols-2 gap-3">
          <SummaryTile label="Read" value={totals.read} mono />
          <SummaryTile label="Write" value={totals.write} mono />
          <SummaryTile label="Commit" value={totals.commit} mono />
          <SummaryTile label="Rollback" value={totals.rollback} mono />
        </div>
      </div>

      <div>
        <div className="iris-header mb-3">Step Details</div>
        <div className="space-y-3">
          {job.stepExecutionInfos.map((step) => (
            <div key={step.id} className="rounded-xl border border-base-300 bg-base-100 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold">{step.stepName}</div>
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

      <button type="button" className="btn btn-ghost btn-sm w-full" onClick={onClose}>
        Close Details
      </button>
    </div>
  )
}
