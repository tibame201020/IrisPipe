import { ArrowRight, PlayCircle, RefreshCw, TimerReset } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PageToolbar } from '../components/PageToolbar'
import { StatusBadge } from '../components/StatusBadge'
import { executePipeline, getApiErrorMessage, getPipelineConfig, getPipelineRuns } from '../lib/api'
import { formatDateTime, formatDuration } from '../lib/date'
import type { ConfigPipelineInfo, PipelineRunSummaryInfo } from '../types/irispipe'

export function PipelineRunsPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [pipeline, setPipeline] = useState<ConfigPipelineInfo | null>(null)
  const [runs, setRuns] = useState<PipelineRunSummaryInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [beforeRunId, setBeforeRunId] = useState<number | undefined>(undefined)
  const [loadingMore, setLoadingMore] = useState(false)
  const [executing, setExecuting] = useState(false)

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')

  async function loadRuns(reset = false) {
    if (reset) {
      setLoading(true)
      setError(null)
    } else {
      setLoadingMore(true)
    }

    try {
      const [pipelineResponse, runsResponse] = await Promise.all([
        getPipelineConfig(numericPipelineId),
        getPipelineRuns(numericPipelineId, 12, reset ? undefined : beforeRunId),
      ])

      setPipeline(pipelineResponse)
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
    if (!pipeline) {
      return
    }

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
      <div className="space-y-6">
        <PageToolbar eyebrow="Runs" title="Loading pipeline runs" description="Building the runtime history from the backend run history endpoint." />
        <LoadingState cards={4} />
      </div>
    )
  }

  if (error || !pipeline) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history is unavailable"
        description={error ?? 'The backend did not return the pipeline run history.'}
        action={
          <Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary px-5">
            Back to explorer
          </Link>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="breadcrumbs border-b border-base-300 bg-base-100 px-6 py-4 text-sm">
        <ul>
          <li>
            <Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'}>Explorer</Link>
          </li>
          <li>
            <Link to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}>{pipeline.pipelineName}</Link>
          </li>
          <li>Runs</li>
        </ul>
      </div>

      <PageToolbar
        eyebrow="Pipeline runs"
        title={`${pipeline.pipelineName} runtime`}
        description="List first, detail second. Each row opens a dedicated run surface with control actions and attempt timelines."
        actions={
          <>
            <Link
              to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
              className="btn border-base-300 bg-base-100"
            >
              Open config
            </Link>
            <button type="button" onClick={() => void loadRuns(true)} className="btn border-base-300 bg-base-100">
              <RefreshCw size={16} />
              Refresh
            </button>
            <button type="button" onClick={() => void handleExecute()} className="btn btn-primary px-5" disabled={executing}>
              <PlayCircle size={16} />
              {executing ? 'Executing...' : 'Execute pipeline'}
            </button>
          </>
        }
      />

      {error ? <div className="alert alert-error">{error}</div> : null}

      <div className="card min-h-[32rem] rounded-none border-x-0 border-b-0 border-t border-base-300 bg-base-100 shadow-none">
        <div className="card-body p-6">
        {runs.length === 0 ? (
            <div className="flex min-h-72 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40">
            <div className="text-center">
              <div className="text-lg font-medium">No runs yet</div>
              <div className="mt-2 text-sm text-base-content/55">
                Execute the pipeline to populate this history surface.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {runs.map((run) => (
              <Link
                key={run.id}
                to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                className="grid gap-4 rounded-box border border-base-300 bg-base-100 px-5 py-4 transition-colors hover:bg-base-200/70 lg:grid-cols-[minmax(0,1.3fr)_auto_auto_auto]"
              >
                <div className="min-w-0">
                  <div className="truncate text-base font-semibold">Run #{run.id}</div>
                  <div className="truncate text-sm text-base-content/55">{run.folderPath}</div>
                </div>
                <div className="text-sm text-base-content/60">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Created</div>
                  <div className="mt-1">{formatDateTime(run.createdAt)}</div>
                </div>
                <div className="text-sm text-base-content/60">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Duration</div>
                  <div className="mt-1">{formatDuration(run.startTime ?? run.createdAt, run.endTime)}</div>
                </div>
                <div className="flex items-center justify-between gap-3 lg:justify-end">
                  <StatusBadge status={run.status} />
                  <ArrowRight size={16} className="text-base-content/35" />
                </div>
              </Link>
            ))}

            <div className="pt-4">
              <button type="button" onClick={() => void loadRuns(false)} className="btn border-base-300 bg-base-100" disabled={loadingMore || !beforeRunId}>
                {loadingMore ? 'Loading...' : 'Load older runs'}
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
