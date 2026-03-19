import {
  Activity,
  ArrowRight,
  History,
  PlayCircle,
  RefreshCw,
  TimerReset,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
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

  if (loading) return <div className="p-12"><LoadingState /></div>

  if (error || !pipeline) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history unavailable"
        description={error ?? 'Unable to connect to the runtime history service.'}
        action={<Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary">Back to Explorer</Link>}
      />
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      <div className="flex shrink-0 items-center justify-end border-b border-base-300 bg-base-100 px-8 py-4">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => void loadRuns(true)} className="btn btn-ghost btn-sm btn-square">
            <RefreshCw size={18} className={loading && !runs.length ? 'animate-spin' : ''} />
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

      <div className="flex-1 overflow-y-auto bg-base-200/50 p-8">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 mb-8">
             <div className="iris-card p-6 bg-base-100 flex items-center justify-between border-base-300">
                <div>
                  <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-1">Runs In View</div>
                  <div className="text-2xl font-bold">{runs.length}</div>
                </div>
                <div className="p-3 bg-secondary/10 text-secondary rounded-xl"><History size={20} /></div>
             </div>
             <div className="iris-card p-6 bg-base-100 flex items-center justify-between border-base-300">
                <div>
                  <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-1">Completed In View</div>
                  <div className="text-2xl font-bold">{runs.filter((run) => run.status === 'COMPLETED').length}</div>
                </div>
                <div className="p-3 bg-success/10 text-success rounded-xl"><Activity size={20} /></div>
             </div>
             <div className="iris-card p-6 bg-base-100 flex items-center justify-between border-base-300 shadow-xl shadow-primary/5">
                <div className="flex-1">
                  <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-1">Latest Status</div>
                  <div className="mt-1">
                    {runs.length > 0 ? <StatusBadge status={runs[0].status} /> : <span className="text-sm font-bold opacity-20 italic">No Activity</span>}
                  </div>
                </div>
                <div className="p-3 bg-primary/10 text-primary rounded-xl"><PlayCircle size={20} /></div>
             </div>
          </div>

          {/* Runs Table/List */}
          <div className="iris-card p-0 bg-base-100 border-base-300 overflow-hidden shadow-xl">
            <div className="px-8 py-4 border-b border-base-300 bg-base-200/30 flex items-center gap-2">
              <History size={16} className="text-primary" />
              <h2 className="text-xs font-black uppercase tracking-widest opacity-50">Run History</h2>
            </div>

            {runs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-base-200/20 text-center">
                 <div className="p-6 bg-base-100 rounded-full mb-6 shadow-sm border border-base-300">
                    <TimerReset size={40} className="text-base-content/10" />
                 </div>
                 <h3 className="text-xl font-bold">No runs yet</h3>
                 <p className="text-sm text-base-content/40 max-w-sm mt-2">
                   Execute this pipeline to create the first run history entry.
                 </p>
              </div>
            ) : (
              <div className="divide-y divide-base-300">
                {runs.map((run) => (
                  <Link
                    key={run.id}
                    to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                    className="flex items-center justify-between px-8 py-5 hover:bg-base-200/50 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black opacity-30 tracking-[0.2em]">RUN ID</span>
                          <span className="font-mono font-bold text-lg"># {run.id}</span>
                       </div>
                       <div className="h-8 w-[1px] bg-base-300" />
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black opacity-30 tracking-[0.2em]">TIMESTAMP</span>
                          <span className="text-sm font-bold">{formatDateTime(run.createdAt)}</span>
                       </div>
                       <div className="hidden sm:flex flex-col">
                          <span className="text-[10px] font-black opacity-30 tracking-[0.2em]">DURATION</span>
                          <span className="text-sm font-mono font-bold">{formatDuration(run.startTime ?? run.createdAt, run.endTime)}</span>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                       <StatusBadge status={run.status} />
                       <div className="p-2 rounded-lg bg-base-200 group-hover:bg-primary group-hover:text-primary-content transition-all border border-base-300">
                          <ArrowRight size={16} />
                       </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {beforeRunId && (
              <div className="p-6 bg-base-200/30 text-center">
                <button 
                  type="button" 
                  onClick={() => void loadRuns(false)} 
                  className="btn btn-ghost btn-sm gap-2" 
                  disabled={loadingMore}
                >
                  {loadingMore ? <RefreshCw className="animate-spin" size={14} /> : <History size={14} />}
                  Load older runs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
