import { ArrowRight, History, PlayCircle, RefreshCw, TimerReset, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { StatusBadge } from '../components/StatusBadge'
import { executePipeline, getApiErrorMessage, getPipelineRuns } from '../lib/api'
import { formatDateTime, formatDuration } from '../lib/date'
import type { PipelineRunSummaryInfo } from '../types/irispipe'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'

export function PipelineRunsPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const workspace = useOutletContext<PipelineWorkspaceContext>()
  const navigate = useNavigate()
  const [runs, setRuns] = useState<PipelineRunSummaryInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [beforeRunId, setBeforeRunId] = useState<number | undefined>(undefined)
  const [loadingMore, setLoadingMore] = useState(false)
  const [executing, setExecuting] = useState(false)

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')
  const pipeline = workspace.pipeline

  const definitionLanes = useMemo<StageLaneData[]>(
    () =>
      pipeline.stageInfos.map((stage) => ({
        id: stage.stage,
        title: stage.stage,
        summary: `${stage.jobs.length} jobs`,
        jobs: stage.jobs.map((job) => ({
          id: `${stage.stage}:${job.jobName}`,
          title: job.jobName,
          badges: [`${job.executions.length} steps`, `${job.setting.atomicLevel ?? 'JOB'} atomic`],
          onDoubleClick: () => navigate(`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`),
        })),
      })),
    [navigate, pipeline.folderId, pipeline.id, pipeline.stageInfos],
  )

  async function loadRuns(reset = false) {
    if (reset) {
      setLoading(true)
      setError(null)
    } else {
      setLoadingMore(true)
    }

    try {
      const runsResponse = await getPipelineRuns(numericPipelineId, 12, reset ? undefined : beforeRunId)
      setRuns((current) => (reset ? runsResponse : [...current, ...runsResponse]))
      const lastRun = runsResponse[runsResponse.length - 1]
      setBeforeRunId(lastRun?.id)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline runs'))
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  useEffect(() => {
    if (!Number.isFinite(numericPipelineId)) {
      setError('Invalid pipeline id')
      setLoading(false)
      return
    }

    setRuns([])
    setBeforeRunId(undefined)
    void loadRuns(true)
  }, [numericPipelineId])

  async function handleExecute() {
    if (!pipeline) return
    setExecuting(true)
    try {
      const run = await executePipeline({
        pipelineId: pipeline.id,
        useAsyncLaucher: true,
      })
      navigate(`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`)
    } catch (executeError) {
      setError(getApiErrorMessage(executeError, 'Failed to execute pipeline'))
    } finally {
      setExecuting(false)
    }
  }

  if (loading) {
    return (
      <div className="p-12">
        <LoadingState />
      </div>
    )
  }

  if (error || !pipeline) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history unavailable"
        description={error ?? 'Unable to connect to the runtime history service.'}
        action={
          <Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary">
            Back to Explorer
          </Link>
        }
      />
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-base-300 bg-base-100 px-6 py-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-base-content/55">
          <span className="badge badge-ghost badge-sm">{pipeline.stageInfos.length} stages</span>
          <span className="badge badge-ghost badge-sm">{pipeline.jobs.length} jobs</span>
          <span className="badge badge-ghost badge-sm">{runs.length} runs in view</span>
          <span className="badge badge-ghost badge-sm">
            {runs.filter((run) => run.status === 'COMPLETED').length} completed
          </span>
          <span className="text-[11px] font-medium text-base-content/40">
            The board below reflects the current saved stage topology. Open a run to inspect runtime stage status.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => void loadRuns(true)} className="btn btn-ghost btn-sm btn-square">
            <RefreshCw size={18} className={loading && runs.length === 0 ? 'animate-spin' : ''} />
          </button>
          <button
            type="button"
            onClick={() => void handleExecute()}
            className="btn btn-primary btn-sm gap-2 px-5"
            disabled={executing}
          >
            <Zap size={14} className={executing ? 'animate-pulse' : ''} />
            {executing ? 'Launching...' : 'Execute'}
          </button>
        </div>
      </div>

      {error ? <div className="border-b border-base-300 bg-error/8 px-6 py-3 text-sm text-error">{error}</div> : null}

      <div className="flex-1 overflow-y-auto bg-base-200/40 p-6">
        <div className="mx-auto flex w-full max-w-[1400px] min-h-full flex-col gap-5">
          <section className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-base-300 px-5 py-4">
              <div>
                <div className="iris-header">Current Definition</div>
                <div className="mt-1 text-sm text-base-content/50">
                  Review the saved stage structure before opening a specific run.
                </div>
              </div>
              <Link
                to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                className="btn btn-ghost btn-sm gap-2"
              >
                <PlayCircle size={14} />
                Open Config
              </Link>
            </div>
            <div className="bg-base-200/35">
              <StageLaneBoard
                stages={definitionLanes}
                emptyTitle="No stages"
                emptyDescription="This pipeline does not currently define any stage lanes."
              />
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-base-300 px-5 py-4">
              <div>
                <div className="iris-header">Run History</div>
                <div className="mt-1 text-sm text-base-content/50">
                  Each run preserves runtime status and timing. Open one to inspect stage execution and attempts.
                </div>
              </div>
              <span className="badge badge-ghost badge-sm">{runs.length} loaded</span>
            </div>

            {runs.length === 0 ? (
              <div className="flex flex-col items-center justify-center bg-base-200/20 py-20 text-center">
                <div className="mb-6 rounded-full border border-base-300 bg-base-100 p-6 shadow-sm">
                  <TimerReset size={40} className="text-base-content/10" />
                </div>
                <h3 className="text-xl font-bold">No runs yet</h3>
                <p className="mt-2 max-w-sm text-sm text-base-content/40">
                  Execute this pipeline to create the first runtime history entry.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-base-300">
                {runs.map((run, index) => (
                  <RunHistoryCard
                    key={run.id}
                    run={run}
                    latest={index === 0}
                    to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                    stageCount={pipeline.stageInfos.length}
                  />
                ))}
              </div>
            )}

            {beforeRunId ? (
              <div className="border-t border-base-300 bg-base-200/30 p-5 text-center">
                <button type="button" onClick={() => void loadRuns(false)} className="btn btn-ghost btn-sm gap-2" disabled={loadingMore}>
                  {loadingMore ? <RefreshCw className="animate-spin" size={14} /> : <History size={14} />}
                  Load older runs
                </button>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  )
}

function RunHistoryCard({
  run,
  latest,
  to,
  stageCount,
}: {
  run: PipelineRunSummaryInfo
  latest: boolean
  to: string
  stageCount: number
}) {
  return (
    <Link to={to} className="group block px-5 py-4 transition-colors hover:bg-base-200/35">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-ghost badge-sm">Run #{run.id}</span>
            {latest ? <span className="badge badge-primary badge-sm">Latest</span> : null}
            <StatusBadge status={run.status} subtle />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-base-content/35">
            <span>{stageCount} stages</span>
            <span>Created {formatDateTime(run.createdAt)}</span>
            <span>Duration {formatDuration(run.startTime ?? run.createdAt, run.endTime)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">Status</div>
            <div className="mt-1 text-sm font-semibold">{run.status}</div>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-100 p-3 transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-content">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  )
}
