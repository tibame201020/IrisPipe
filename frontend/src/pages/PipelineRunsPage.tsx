import { History, RefreshCw, TimerReset, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { ActionButton, ActionLink } from '../components/ui/Action'
import { SurfaceBox } from '../components/ui/Surface'
import { executePipeline, getApiErrorMessage, getPipelineRuns } from '../lib/api'
import { formatDateTime, formatDuration } from '../lib/date'
import {
  getPipelineStatusMeta,
  isPipelineStatusActive,
  isPipelineStatusResumable,
  summarizePipelineRunHistory,
} from '../lib/pipeline-runtime'
import { usePipelineEvents } from '../lib/usePipelineEvents'
import type { PipelineRunSummaryInfo } from '../types/irispipe'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'

type FilterTab = 'all' | 'active' | 'failed' | 'completed' | 'resumable'

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
      const response = await getPipelineRuns(numericPipelineId, 20, reset ? undefined : beforeRunId)
      setRuns((current) => (reset ? response : [...current, ...response]))
      const lastRun = response[response.length - 1]
      setBeforeRunId(lastRun?.id)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline runs'))
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  function refreshRunHistory() {
    setRuns([])
    setBeforeRunId(undefined)
    void loadRuns(true)
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
    onRunStarted: refreshRunHistory,
    onRunCompleted: refreshRunHistory,
    onRunFailed: refreshRunHistory,
    onRunStopped: refreshRunHistory,
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

  const stats = useMemo(() => summarizePipelineRunHistory(runs), [runs])
  const latestRun = runs[0] ?? null
  const latestStatusMeta = latestRun ? getPipelineStatusMeta(latestRun.status) : null

  const filteredRuns = useMemo(() => {
    switch (filter) {
      case 'active':
        return runs.filter((run) => isPipelineStatusActive(run.status))
      case 'failed':
        return runs.filter((run) => run.status === 'FAILED' || run.status === 'ABANDONED')
      case 'completed':
        return runs.filter((run) => run.status === 'COMPLETED')
      case 'resumable':
        return runs.filter((run) => isPipelineStatusResumable(run.status))
      default:
        return runs
    }
  }, [filter, runs])

  if (loading) return <div className="p-12"><LoadingState /></div>

  if (error && runs.length === 0) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history unavailable"
        description={error}
        action={<ActionLink to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} tone="primary">Back to Explorer</ActionLink>}
      />
    )
  }

  return (
    <div className="iris-page-canvas flex h-full min-h-0 flex-col overflow-hidden">
      <div className="iris-shell-bar flex shrink-0 items-center justify-between gap-3 px-5 py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="iris-inset-panel flex min-w-[280px] items-center gap-2 px-3 py-2">
            {latestRun ? <StatusBadge status={latestRun.status} subtle /> : <span className="badge badge-ghost badge-sm">No runs</span>}
            {latestRun ? <span className="iris-mono-meta">#{latestRun.id}</span> : null}
            <span className="truncate text-[11px] iris-copy">
              {latestStatusMeta ? latestStatusMeta.description : 'This pipeline has not created any run history yet.'}
            </span>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <CompactHistoryMetric label="History" value={stats?.total ?? 0} />
            <CompactHistoryMetric label="In Flight" value={stats?.active ?? 0} tone="info" pulse={(stats?.active ?? 0) > 0} />
            <CompactHistoryMetric label="Resumable" value={stats?.resumable ?? 0} tone="warning" />
            <CompactHistoryMetric label="Avg Runtime" value={stats?.avgLabel ?? '--'} tone="success" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {stats ? (
            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[10px] tabular-nums iris-copy-soft">
                <span className="font-semibold text-base-content/70">{stats.successRate}%</span> success
              </span>
              <span className="text-[10px] iris-copy-faint">|</span>
              <span className="text-[10px] tabular-nums iris-copy-soft">
                avg <span className="font-semibold font-mono text-base-content/70">{stats.avgLabel}</span>
              </span>
            </div>
          ) : null}

          <ActionButton size="xs" tone="icon" square onClick={() => void loadRuns(true)} aria-label="Refresh run history">
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          </ActionButton>

          <ActionButton
            tone="primary"
            onClick={() => void handleExecute()}
            className={executing ? 'iris-execute-ring' : ''}
            disabled={executing}
            title="Start a fresh logical run from the current saved pipeline definition."
          >
            <Zap size={13} className={executing ? 'animate-pulse' : ''} />
            {executing ? 'Launching...' : 'Execute'}
          </ActionButton>
        </div>
      </div>

      <div className="iris-toolbar-band flex shrink-0 items-center justify-between gap-3 px-5 py-2.5">
        <div className="iris-inset-panel flex items-center gap-1.5 px-2 py-1">
          <FilterChip label="All" count={runs.length} active={filter === 'all'} onClick={() => setFilter('all')} />
          {(stats?.active ?? 0) > 0 && (
            <FilterChip label="Active" count={stats?.active ?? 0} active={filter === 'active'} onClick={() => setFilter('active')} pulse />
          )}
          <FilterChip
            label="Failed"
            count={stats?.failed ?? 0}
            active={filter === 'failed'}
            onClick={() => setFilter('failed')}
            variant="error"
          />
          <FilterChip
            label="Completed"
            count={stats?.completed ?? 0}
            active={filter === 'completed'}
            onClick={() => setFilter('completed')}
            variant="success"
          />
          {(stats?.resumable ?? 0) > 0 && (
            <FilterChip
              label="Resumable"
              count={stats?.resumable ?? 0}
              active={filter === 'resumable'}
              onClick={() => setFilter('resumable')}
              variant="warning"
            />
          )}
        </div>

        <div className="text-[10px] iris-copy-soft">
          {filteredRuns.length} visible run{filteredRuns.length === 1 ? '' : 's'}
        </div>
      </div>

      {error ? <div className="shrink-0 border-b border-error/20 bg-error/5 px-5 py-2 text-xs text-error">{error}</div> : null}

      <div className="min-h-0 flex-1 overflow-y-auto">
        {runs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="iris-inset-panel mb-5 p-7">
              <TimerReset size={36} className="text-base-content/30" />
            </div>
            <h3 className="text-lg font-bold">No runs yet</h3>
            <p className="mt-1.5 max-w-xs text-sm text-base-content/50">
              Execute this pipeline to create the first runtime record and stage projection.
            </p>
            <ActionButton
              tone="primary"
              onClick={() => void handleExecute()}
              disabled={executing}
              className={`mt-5 ${executing ? 'iris-execute-ring' : ''}`}
            >
              <Zap size={14} />
              {executing ? 'Launching...' : 'Execute Now'}
            </ActionButton>
          </div>
        ) : filteredRuns.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-sm text-base-content/45">No runs match this semantic filter.</p>
            <ActionButton size="xs" tone="ghost" className="mt-3" onClick={() => setFilter('all')}>Show all</ActionButton>
          </div>
        ) : (
          <div>
            <div
              className="sticky top-0 z-10 grid items-center border-b border-base-200 bg-base-100/96 px-5 py-2 backdrop-blur-sm"
              style={{ gridTemplateColumns: '28px minmax(0,1.9fr) 150px 88px 116px 56px' }}
            >
              <span />
              <span className="iris-kicker">Run</span>
              <span className="iris-kicker">Started</span>
              <span className="iris-kicker">Duration</span>
              <span className="iris-kicker">Status</span>
              <span />
            </div>

            <div className="iris-list-panel">
              {filteredRuns.map((run, index) => (
                <RunRow
                  key={run.id}
                  run={run}
                  isLatest={index === 0 && filter === 'all'}
                  to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                />
              ))}
            </div>

            {beforeRunId ? (
              <div className="flex justify-center px-5 py-4">
                <ActionButton
                  size="xs"
                  tone="ghost"
                  onClick={() => void loadRuns(false)}
                  className="text-base-content/50"
                  disabled={loadingMore}
                >
                  {loadingMore ? <RefreshCw className="animate-spin" size={12} /> : <History size={12} />}
                  Load older runs
                </ActionButton>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

function CompactHistoryMetric({
  label,
  value,
  tone = 'neutral',
  pulse = false,
}: {
  label: string
  value: string | number
  tone?: 'neutral' | 'info' | 'warning' | 'success'
  pulse?: boolean
}) {
  const toneMap = {
    neutral: 'border-base-300 bg-base-100 text-base-content',
    info: 'border-info/20 bg-info/5 text-info',
    warning: 'border-warning/20 bg-warning/5 text-warning',
    success: 'border-success/20 bg-success/5 text-success',
  }

  return (
    <SurfaceBox variant="inset" className={`flex items-center gap-2 px-3 py-2 ${toneMap[tone]}`}>
      {pulse ? <span className="size-1.5 rounded-full bg-current animate-pulse opacity-70" /> : null}
      <span className="iris-kicker">{label}</span>
      <span className="font-mono text-[12px] font-semibold">{value}</span>
    </SurfaceBox>
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
  variant?: 'error' | 'success' | 'warning'
}) {
  const baseClass = active
    ? variant === 'error'
      ? 'border-error/40 bg-error/10 text-error'
      : variant === 'success'
        ? 'border-success/40 bg-success/10 text-success'
        : variant === 'warning'
          ? 'border-warning/40 bg-warning/10 text-warning'
          : 'border-primary/40 bg-primary/10 text-primary'
    : 'border-base-300 bg-base-100 text-base-content/55 hover:border-base-300 hover:text-base-content/80'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[11px] font-semibold transition-all ${baseClass}`}
    >
      {pulse ? <span className="size-1.5 rounded-full bg-info animate-pulse shrink-0" /> : null}
      {label}
      {count > 0 ? (
        <span className={`rounded-sm px-1 py-0 text-[9px] font-bold tabular-nums ${active ? 'bg-current/20' : 'bg-base-200 text-base-content/45'}`}>
          {count}
        </span>
      ) : null}
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
  const statusMeta = getPipelineStatusMeta(run.status)
  const isActive = isPipelineStatusActive(run.status)
  const isResumable = isPipelineStatusResumable(run.status)

  const rowBg = statusMeta.tone === 'error'
    ? 'hover:bg-error/5'
    : statusMeta.tone === 'info'
      ? 'hover:bg-info/5'
      : statusMeta.tone === 'warning'
        ? 'hover:bg-warning/5'
        : 'hover:bg-base-200/40'

  return (
    <Link
      to={to}
      className={`iris-list-row group grid items-center gap-4 px-5 py-2.5 transition-colors ${rowBg} ${isLatest ? 'bg-primary/4' : ''}`}
      style={{ gridTemplateColumns: '28px minmax(0,1.9fr) 150px 88px 116px 56px' }}
    >
      <div className="flex justify-center">
        <span className={`size-1.5 rounded-full ${statusMeta.dotClass} ${isActive ? 'animate-pulse' : ''}`} />
      </div>

      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <span className="font-mono text-[12px] font-semibold tabular-nums text-base-content/78">
            #{run.id}
          </span>
          {isLatest ? (
            <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">
              latest
            </span>
          ) : null}
          {isActive ? (
            <span className="text-[9px] font-black uppercase tracking-widest text-info/75">
              live
            </span>
          ) : null}
          {isResumable ? (
            <span className="text-[9px] font-black uppercase tracking-widest text-warning/80">
              resumable
            </span>
          ) : null}
        </div>
        <div className="mt-0.5 truncate text-[11px] iris-copy" title={statusMeta.description}>
          {statusMeta.description}
        </div>
      </div>

      <span className="truncate font-mono text-[11px] tabular-nums text-base-content/60">
        {formatDateTime(run.startTime ?? run.createdAt)}
      </span>

      <span className="font-mono text-[11px] tabular-nums text-base-content/68">
        {formatDuration(run.startTime ?? run.createdAt, run.endTime)}
      </span>

      <div>
        <StatusBadge status={run.status} subtle mode="text" />
      </div>

      <div className="flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
        <span className="text-[10px] iris-copy-soft">Inspect</span>
      </div>
    </Link>
  )
}
