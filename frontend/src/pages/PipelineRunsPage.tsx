import {
  ArrowRight,
  CheckCircle2,
  Clock,
  History,
  RefreshCw,
  TimerReset,
  TrendingUp,
  XCircle,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
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

  // ── Statistics
  const stats = useMemo(() => {
    if (runs.length === 0) return null
    const completed = runs.filter((r) => r.status === 'COMPLETED').length
    const failed = runs.filter((r) => r.status === 'FAILED').length
    const stopped = runs.filter((r) => r.status === 'STOPPED').length
    const active = runs.filter((r) => ['STARTED', 'STARTING'].includes(r.status)).length
    const successRate = runs.length > 0 ? Math.round((completed / runs.length) * 100) : 0
    // Average duration for finished runs
    const finishedWithTime = runs.filter((r) => r.startTime && r.endTime)
    const avgDurationMs = finishedWithTime.length > 0
      ? finishedWithTime.reduce((sum, r) => {
          const toMs = (v: typeof r.startTime) => {
            if (!v) return 0
            if (typeof v === 'string') return new Date(v).getTime()
            if (Array.isArray(v)) return new Date(...(v as [number, number, number, number, number, number, number])).getTime()
            return Number(v)
          }
          return sum + (toMs(r.endTime) - toMs(r.startTime))
        }, 0) / finishedWithTime.length
      : null
    const avgDurationLabel = avgDurationMs !== null
      ? avgDurationMs < 60000
        ? `${Math.round(avgDurationMs / 1000)}s`
        : `${Math.round(avgDurationMs / 60000)}m`
      : '—'
    return { completed, failed, stopped, active, successRate, avgDurationLabel }
  }, [runs])

  if (loading) {
    return <div className="p-12"><LoadingState /></div>
  }

  if (error && runs.length === 0) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history unavailable"
        description={error}
        action={
          <Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary">
            Back to Explorer
          </Link>
        }
      />
    )
  }

  const activeRuns = runs.filter((r) => ['STARTED', 'STARTING'].includes(r.status))
  const inactiveRuns = runs.filter((r) => !['STARTED', 'STARTING'].includes(r.status))

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      {/* ── Toolbar ── */}
      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-base-300 bg-base-100 px-6 py-3">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-base-content/45">
          <span className="badge badge-ghost badge-sm">{runs.length} runs loaded</span>
          {stats && (
            <>
              <span className="badge badge-ghost badge-sm text-success/70">{stats.completed} completed</span>
              {stats.failed > 0 && <span className="badge badge-ghost badge-sm text-error/70">{stats.failed} failed</span>}
              {stats.active > 0 && (
                <span className="badge badge-info badge-sm animate-pulse">{stats.active} running</span>
              )}
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => void loadRuns(true)} className="btn btn-ghost btn-sm btn-square">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <button
            type="button"
            onClick={() => void handleExecute()}
            className={`btn btn-primary btn-sm h-9 gap-2 px-5 font-bold ${executing ? 'iris-execute-ring' : ''}`}
            disabled={executing}
          >
            <Zap size={14} className={executing ? 'animate-pulse' : ''} />
            {executing ? 'Launching...' : 'Execute'}
          </button>
        </div>
      </div>

      {error && <div className="shrink-0 border-b border-error/20 bg-error/5 px-6 py-2 text-sm text-error">{error}</div>}

      <div className="min-h-0 flex-1 overflow-y-auto">
        {/* ── Stats Bar ── */}
        {stats && runs.length > 0 && (
          <div className="border-b border-base-300 bg-base-100">
            <div className="grid grid-cols-2 divide-x divide-base-300 md:grid-cols-4">
              <StatCell
                icon={<TrendingUp size={16} className="text-primary" />}
                label="Success Rate"
                value={`${stats.successRate}%`}
                barPct={stats.successRate}
                barColor="bg-primary"
              />
              <StatCell
                icon={<CheckCircle2 size={16} className="text-success" />}
                label="Completed"
                value={String(stats.completed)}
                barPct={runs.length > 0 ? (stats.completed / runs.length) * 100 : 0}
                barColor="bg-success"
              />
              <StatCell
                icon={<XCircle size={16} className="text-error" />}
                label="Failed"
                value={String(stats.failed)}
                barPct={runs.length > 0 ? (stats.failed / runs.length) * 100 : 0}
                barColor="bg-error"
              />
              <StatCell
                icon={<Clock size={16} className="text-base-content/40" />}
                label="Avg Duration"
                value={stats.avgDurationLabel}
                barPct={0}
                barColor="bg-base-content/20"
                noBar
              />
            </div>
          </div>
        )}

        {runs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6 rounded-2xl border border-base-300 bg-base-200/50 p-8">
              <TimerReset size={40} className="text-base-content/15" />
            </div>
            <h3 className="text-xl font-bold">No runs yet</h3>
            <p className="mt-2 max-w-sm text-sm text-base-content/40">
              Execute this pipeline to create the first runtime history entry.
            </p>
            <button
              type="button"
              onClick={() => void handleExecute()}
              disabled={executing}
              className={`btn btn-primary mt-6 gap-2 ${executing ? 'iris-execute-ring' : ''}`}
            >
              <Zap size={16} />
              {executing ? 'Launching...' : 'Execute Now'}
            </button>
          </div>
        ) : (
          <div className="px-6 py-6 space-y-6">
            {/* Active runs */}
            {activeRuns.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-2 rounded-full bg-info animate-pulse shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-base-content/40">
                    Active ({activeRuns.length})
                  </span>
                </div>
                <div className="space-y-2">
                  {activeRuns.map((run, i) => (
                    <RunCard
                      key={run.id}
                      run={run}
                      latest={i === 0 && runs.indexOf(run) === 0}
                      to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* History */}
            <section>
              {activeRuns.length > 0 && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-base-content/40">
                    History ({inactiveRuns.length})
                  </span>
                </div>
              )}
              <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm divide-y divide-base-300">
                {inactiveRuns.map((run) => (
                  <RunCard
                    key={run.id}
                    run={run}
                    latest={runs.indexOf(run) === 0}
                    to={`/pipeline/items/${pipeline.id}/runs/${run.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                    rowMode
                  />
                ))}
              </div>
            </section>

            {/* Load more */}
            {beforeRunId && (
              <div className="flex justify-center pt-2 pb-4">
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
        )}
      </div>
    </div>
  )
}

// ─── Stat Cell ───────────────────────────────────────────────────────────────

function StatCell({
  icon,
  label,
  value,
  barPct,
  barColor,
  noBar = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  barPct: number
  barColor: string
  noBar?: boolean
}) {
  return (
    <div className="flex flex-col gap-2 px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/35">{label}</span>
        </div>
        <span className="text-xl font-bold font-mono">{value}</span>
      </div>
      {!noBar && (
        <div className="h-1 w-full overflow-hidden rounded-full bg-base-300/50">
          <div
            className={`h-full rounded-full iris-bar-fill ${barColor}`}
            style={{ '--bar-target-width': `${barPct}%` } as React.CSSProperties}
          />
        </div>
      )}
    </div>
  )
}

// ─── Run Card ─────────────────────────────────────────────────────────────────

function RunCard({
  run,
  latest,
  to,
  rowMode = false,
}: {
  run: PipelineRunSummaryInfo
  latest: boolean
  to: string
  rowMode?: boolean
}) {
  const isFailed = run.status === 'FAILED'
  const isCompleted = run.status === 'COMPLETED'
  const isActive = ['STARTED', 'STARTING'].includes(run.status)

  const accentClass = isFailed
    ? 'iris-run-failed'
    : isActive
    ? 'iris-run-active'
    : isCompleted
    ? 'iris-run-completed'
    : ''

  if (rowMode) {
    return (
      <Link
        to={to}
        className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-base-200/35 ${accentClass}`}
      >
        {/* Status dot + run info */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className={`size-2.5 shrink-0 rounded-full ${
            isFailed ? 'bg-error' : isActive ? 'bg-info animate-pulse' : isCompleted ? 'bg-success' : 'bg-base-content/30'
          }`} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-sm">Run #{run.id}</span>
              {latest && <span className="badge badge-primary badge-xs">Latest</span>}
              <StatusBadge status={run.status} subtle />
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-base-content/30">
              <span>{formatDateTime(run.createdAt)}</span>
              <span>{formatDuration(run.startTime ?? run.createdAt, run.endTime)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ArrowRight size={15} className="text-base-content/25 group-hover:text-primary transition-colors" />
        </div>
      </Link>
    )
  }

  // Card mode (for active runs)
  return (
    <Link
      to={to}
      className={`group block rounded-2xl border border-base-300 bg-base-100 px-5 py-4 transition-all hover:border-primary/30 hover:shadow-md ${accentClass}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-base">Run #{run.id}</span>
            {latest && <span className="badge badge-primary badge-sm">Latest</span>}
            <StatusBadge status={run.status} subtle />
            {isActive && <span className="text-[10px] font-black uppercase tracking-widest text-info/70 animate-pulse">● Live</span>}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-base-content/30">
            <span>Started {formatDateTime(run.startTime ?? run.createdAt)}</span>
            <span>{formatDuration(run.startTime ?? run.createdAt, run.endTime)}</span>
          </div>
        </div>
        <div className="shrink-0 rounded-xl border border-base-300 p-2.5 transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-content">
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  )
}
