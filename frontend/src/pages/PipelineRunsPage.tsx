import { History, RefreshCw, TimerReset, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { executePipeline, getApiErrorMessage, getPipelineRuns } from '../lib/api'
import { formatDateTime, formatDuration } from '../lib/date'
import { usePipelineEvents } from '../lib/usePipelineEvents'
import type { PipelineRunSummaryInfo } from '../types/irispipe'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'

type FilterTab = 'all' | 'active' | 'failed' | 'completed'

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
  const [filter, setFilter] = useState<FilterTab>('all')

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
      const runsResponse = await getPipelineRuns(numericPipelineId, 20, reset ? undefined : beforeRunId)
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

  usePipelineEvents({
    onRunStarted: () => { setRuns([]); setBeforeRunId(undefined); void loadRuns(true) },
    onRunCompleted: () => { setRuns([]); setBeforeRunId(undefined); void loadRuns(true) },
    onRunFailed: () => { setRuns([]); setBeforeRunId(undefined); void loadRuns(true) },
    onRunStopped: () => { setRuns([]); setBeforeRunId(undefined); void loadRuns(true) },
  })

  async function handleExecute() {
    if (!pipeline) return
    setExecuting(true)
    setError(null)
    try {
      const run = await executePipeline({ pipelineId: pipeline.id, useAsyncLaucher: true })
      navigate(`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`)
    } catch (executeError) {
      setError(getApiErrorMessage(executeError, 'Failed to execute pipeline'))
      setExecuting(false)
    }
  }

  const stats = useMemo(() => {
    if (runs.length === 0) return null
    const completed = runs.filter((r) => r.status === 'COMPLETED').length
    const failed = runs.filter((r) => r.status === 'FAILED').length
    const active = runs.filter((r) => ['STARTED', 'STARTING'].includes(r.status)).length
    const successRate = runs.length > 0 ? Math.round((completed / runs.length) * 100) : 0
    const finishedWithTime = runs.filter((r) => r.startTime && r.endTime)
    const avgDurationMs = finishedWithTime.length > 0
      ? finishedWithTime.reduce((sum, r) => {
          const toMs = (v: typeof r.startTime) => {
            if (!v) return 0
            if (typeof v === 'string') return new Date(v).getTime()
            if (Array.isArray(v)) return new Date(...(v as [number, number, number, number, number, number, number])).getTime()
            return Number(v)
          }
          return sum + Math.max(0, toMs(r.endTime) - toMs(r.startTime))
        }, 0) / finishedWithTime.length
      : null
    const avgLabel = avgDurationMs !== null
      ? avgDurationMs < 60000 ? `${Math.round(avgDurationMs / 1000)}s` : `${Math.round(avgDurationMs / 60000)}m`
      : '—'
    return { completed, failed, active, successRate, avgLabel }
  }, [runs])

  const filteredRuns = useMemo(() => {
    if (filter === 'active') return runs.filter((r) => ['STARTED', 'STARTING'].includes(r.status))
    if (filter === 'failed') return runs.filter((r) => r.status === 'FAILED')
    if (filter === 'completed') return runs.filter((r) => r.status === 'COMPLETED')
    return runs
  }, [runs, filter])

  const activeCount = runs.filter((r) => ['STARTED', 'STARTING'].includes(r.status)).length

  if (loading) return <div className="p-12"><LoadingState /></div>

  if (error && runs.length === 0) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history unavailable"
        description={error}
        action={<Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary">Back to Explorer</Link>}
      />
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      {/* Filter bar */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-base-300 bg-base-100 px-5 py-2">
        <div className="flex items-center gap-1.5">
          {/* Filter chips */}
          <FilterChip label="All" count={runs.length} active={filter === 'all'} onClick={() => setFilter('all')} />
          {activeCount > 0 && (
            <FilterChip label="Active" count={activeCount} active={filter === 'active'} onClick={() => setFilter('active')} pulse />
          )}
          <FilterChip
            label="Failed"
            count={runs.filter((r) => r.status === 'FAILED').length}
            active={filter === 'failed'}
            onClick={() => setFilter('failed')}
            variant="error"
          />
          <FilterChip
            label="Completed"
            count={runs.filter((r) => r.status === 'COMPLETED').length}
            active={filter === 'completed'}
            onClick={() => setFilter('completed')}
            variant="success"
          />
        </div>

        {/* Stats summary + actions */}
        <div className="flex items-center gap-3">
          {stats && (
            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[10px] text-base-content/35 tabular-nums">
                <span className="font-semibold text-base-content/55">{stats.successRate}%</span> success
              </span>
              <span className="text-[10px] text-base-content/25">·</span>
              <span className="text-[10px] text-base-content/35 tabular-nums">
                avg <span className="font-semibold font-mono text-base-content/55">{stats.avgLabel}</span>
              </span>
            </div>
          )}
          <button type="button" onClick={() => void loadRuns(true)} className="btn btn-ghost btn-xs btn-square">
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          </button>
          <button
            type="button"
            onClick={() => void handleExecute()}
            className={`btn btn-primary btn-sm gap-1.5 ${executing ? 'iris-execute-ring' : ''}`}
            disabled={executing}
          >
            <Zap size={13} className={executing ? 'animate-pulse' : ''} />
            {executing ? 'Launching…' : 'Execute'}
          </button>
        </div>
      </div>

      {error && <div className="shrink-0 border-b border-error/20 bg-error/5 px-5 py-2 text-xs text-error">{error}</div>}

      {/* Timeline */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {runs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-5 rounded-xl border border-base-300 bg-base-200/40 p-7">
              <TimerReset size={36} className="text-base-content/15" />
            </div>
            <h3 className="text-lg font-bold">No runs yet</h3>
            <p className="mt-1.5 max-w-xs text-sm text-base-content/40">Execute this pipeline to create the first run record.</p>
            <button
              type="button"
              onClick={() => void handleExecute()}
              disabled={executing}
              className={`btn btn-primary btn-sm mt-5 gap-2 ${executing ? 'iris-execute-ring' : ''}`}
            >
              <Zap size={14} />
              {executing ? 'Launching…' : 'Execute Now'}
            </button>
          </div>
        ) : filteredRuns.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-sm text-base-content/40">No runs match this filter.</p>
            <button type="button" className="btn btn-ghost btn-xs mt-3" onClick={() => setFilter('all')}>Show all</button>
          </div>
        ) : (
          <div>
            {/* Column header */}
            <div className="sticky top-0 z-10 grid items-center border-b border-base-200 bg-base-100/95 px-5 py-1.5 backdrop-blur-sm"
              style={{ gridTemplateColumns: '28px 1fr 140px 90px 80px 28px' }}>
              <span />
              <span className="text-[9px] font-black uppercase tracking-widest text-base-content/25">Run</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-base-content/25">Started</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-base-content/25">Duration</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-base-content/25">Status</span>
              <span />
            </div>

            <div className="divide-y divide-base-200/70">
              {filteredRuns.map((run, i) => (
                <RunRow
                  key={run.id}
                  run={run}
                  isLatest={i === 0 && filter === 'all'}
                  to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                />
              ))}
            </div>

            {beforeRunId && (
              <div className="flex justify-center px-5 py-4">
                <button
                  type="button"
                  onClick={() => void loadRuns(false)}
                  className="btn btn-ghost btn-xs gap-1.5 text-base-content/40"
                  disabled={loadingMore}
                >
                  {loadingMore ? <RefreshCw className="animate-spin" size={12} /> : <History size={12} />}
                  Load older runs
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function FilterChip({
  label,
  count,
  active,
  onClick,
  pulse = false,
  variant,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
  pulse?: boolean
  variant?: 'error' | 'success'
}) {
  const baseClass = active
    ? variant === 'error'
      ? 'border-error/40 bg-error/10 text-error'
      : variant === 'success'
        ? 'border-success/40 bg-success/10 text-success'
        : 'border-primary/40 bg-primary/10 text-primary'
    : 'border-base-300 bg-base-100 text-base-content/45 hover:border-base-300 hover:text-base-content/70'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold transition-all ${baseClass}`}
    >
      {pulse && <span className="size-1.5 rounded-full bg-info animate-pulse shrink-0" />}
      {label}
      {count > 0 && (
        <span className={`rounded-full px-1 py-0 text-[9px] font-bold tabular-nums ${active ? 'bg-current/20' : 'bg-base-200 text-base-content/40'}`}>
          {count}
        </span>
      )}
    </button>
  )
}

function RunRow({
  run,
  isLatest,
  to,
}: {
  run: PipelineRunSummaryInfo
  isLatest: boolean
  to: string
}) {
  const isActive = ['STARTED', 'STARTING'].includes(run.status)
  const isFailed = run.status === 'FAILED'
  const isCompleted = run.status === 'COMPLETED'

  const dotClass = isActive
    ? 'bg-info animate-pulse'
    : isFailed
      ? 'bg-error'
      : isCompleted
        ? 'bg-success'
        : 'bg-base-content/20'

  const rowBg = isFailed
    ? 'hover:bg-error/5'
    : isActive
      ? 'hover:bg-info/5'
      : 'hover:bg-base-200/30'

  return (
    <Link
      to={to}
      className={`group grid items-center gap-4 px-5 py-2.5 transition-colors ${rowBg}`}
      style={{ gridTemplateColumns: '28px 1fr 140px 90px 80px 28px' }}
    >
      {/* Status dot */}
      <div className="flex justify-center">
        <span className={`size-1.5 rounded-full ${dotClass}`} />
      </div>

      {/* Run ID + latest badge */}
      <div className="flex min-w-0 items-center gap-2">
        <span className="font-mono text-[12px] font-semibold tabular-nums text-base-content/70">
          #{run.id}
        </span>
        {isLatest && (
          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">
            latest
          </span>
        )}
        {isActive && (
          <span className="text-[9px] font-black uppercase tracking-widest text-info/70">
            live
          </span>
        )}
      </div>

      {/* Timestamp */}
      <span className="truncate font-mono text-[11px] tabular-nums text-base-content/40">
        {formatDateTime(run.startTime ?? run.createdAt)}
      </span>

      {/* Duration */}
      <span className="font-mono text-[11px] tabular-nums text-base-content/50">
        {formatDuration(run.startTime ?? run.createdAt, run.endTime)}
      </span>

      {/* Status badge */}
      <div>
        <StatusBadge status={run.status} subtle mode="text" />
      </div>

      {/* Arrow */}
      <div className="flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
        <span className="text-[10px] text-base-content/30">›</span>
      </div>
    </Link>
  )
}
