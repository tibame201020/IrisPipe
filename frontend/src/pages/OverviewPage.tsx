import {
  Activity,
  AlertTriangle,
  ArrowRight,
  FolderTree,
  Layers3,
  PlayCircle,
  Radar,
  Server,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import {
  getApiErrorMessage,
  getOverviewSummary,
} from '../lib/api'
import { formatDateTime } from '../lib/date'
import {
  getPipelineStatusMeta,
  isPipelineStatusActive,
  isPipelineStatusFailure,
  isPipelineStatusResumable,
  summarizePipelineRunHistory,
} from '../lib/pipeline-runtime'
import { usePipelineEvents } from '../lib/usePipelineEvents'
import type { PipelineRunSummaryInfo } from '../types/irispipe'

type OverviewData = Awaited<ReturnType<typeof import('../lib/api').getOverviewSummary>>

export function OverviewPage() {
  const [data, setData] = useState<OverviewData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const summary = await getOverviewSummary()
      setData(summary)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load overview'))
    } finally {
      setLoading(false)
    }
  }

  // SSE: instantly reload on any run event
  usePipelineEvents({
    onRunStarted: () => void load(),
    onRunCompleted: () => void load(),
    onRunFailed: () => void load(),
    onRunStopped: () => void load(),
  })

  useEffect(() => {
    void load()
    // Fallback polling at 30 s (SSE handles instant updates for run events)
    const timer = setInterval(() => { void load() }, 30000)
    return () => clearInterval(timer)
  }, [])

  if (loading && !data) return <div className="p-12"><LoadingState /></div>

  if (error || !data) {
    return (
      <EmptyState
        icon={ShieldCheck}
        title="Overview unavailable"
        description={error ?? 'Unable to connect to the IrisPipe backend.'}
        action={<button onClick={() => void load()} className="btn btn-primary">Retry</button>}
      />
    )
  }

  const { engine, catalog, runs, recentRuns } = data
  const activeRuns = recentRuns.filter((run) => isPipelineStatusActive(run.status))
  const recentStats = summarizePipelineRunHistory(recentRuns)
  const resumableRuns = recentRuns.filter((run) => isPipelineStatusResumable(run.status))
  const attentionRuns = recentRuns.filter((run) =>
    isPipelineStatusActive(run.status)
    || isPipelineStatusFailure(run.status)
    || isPipelineStatusResumable(run.status),
  ).slice(0, 6)
  const healthIsUp = engine.status === 'UP'
  const jvmPercent = engine.jvmMemoryPercent >= 0 ? engine.jvmMemoryPercent : null
  const uptime = engine.uptimeSeconds >= 0 ? engine.uptimeSeconds : null
  const activeBatchJobs = engine.activeBatchJobs

  return (
    <div className="iris-page-canvas flex h-full flex-col overflow-hidden">
      {/* ?�?� Header ?�?� */}
      <div className="iris-shell-bar flex shrink-0 items-center justify-between px-8 py-5">
        <div>
          <div className="iris-header">IrisPipe Engine</div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">Pipeline Overview</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className={`iris-inset-panel flex items-center gap-3 px-4 py-2 ${healthIsUp ? 'bg-success/5 border-success/25' : 'bg-error/5 border-error/25'}`}>
            <div className={`size-2 rounded-full ${healthIsUp ? 'bg-success animate-pulse' : 'bg-error'}`} />
            <span className={`text-xs font-bold uppercase tracking-widest ${healthIsUp ? 'text-success' : 'text-error'}`}>
              Backend {engine.status}
            </span>
          </div>
          <Link to="/pipeline" className="btn btn-primary btn-sm px-5 gap-2">
            Open Explorer
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-7 py-5">
        {/* ?�?� Top KPI Row ?�?� */}
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={FolderTree}
            label="Folders"
            value={catalog.totalFolders}
            subValue="Explorer tree"
            accent="warning"
          />
          <MetricCard
            icon={Layers3}
            label="Pipelines"
            value={catalog.totalPipelines}
            subValue="Configured definitions"
            accent="primary"
          />
          <MetricCard
            icon={Activity}
            label="Active Runs"
            value={activeRuns.length}
            subValue="In-flight right now"
            accent="success"
            pulse={activeRuns.length > 0}
          />
          <SuccessRateCard successRate={runs.successRate} total={runs.last10Total} failed={runs.last10Failed} />
        </div>

        {/* ?�?� Engine Vitals Row ?�?� */}
        {(jvmPercent != null || uptime != null || activeBatchJobs != null) && (
          <div className="mb-5">
            <div className="iris-section-panel overflow-hidden p-0 iris-scan-container">
              <div className="flex items-center gap-2 border-b border-base-300 px-5 py-3">
                <Server size={15} className="text-secondary" />
                <h2 className="iris-kicker">Engine Vitals</h2>
                <span className="ml-auto badge badge-ghost badge-sm">Live via /actuator</span>
              </div>
              <div className="grid grid-cols-2 gap-0 divide-x divide-base-300 sm:grid-cols-2 lg:grid-cols-4">
                {jvmPercent != null && (
                  <VitalCell
                    label="JVM Memory"
                    value={`${engine.jvmMemoryMb} MB`}
                    sub={`${jvmPercent}% of ${engine.jvmMemoryTotalMb} MB`}
                    bar={jvmPercent}
                    barColor={jvmPercent > 85 ? 'error' : jvmPercent > 65 ? 'warning' : 'success'}
                  />
                )}
                {uptime != null && (
                  <VitalCell
                    label="Process Uptime"
                    value={formatUptime(uptime)}
                    sub="Since last restart"
                  />
                )}
                <VitalCell
                  label="Active Batch Jobs"
                  value={String(activeBatchJobs)}
                  sub="Spring Batch scheduler"
                  pulse={activeBatchJobs > 0}
                />
              </div>
            </div>
          </div>
        )}


        {/* ?�?� Main Content Row ?�?� */}
        <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
          <section className="iris-section-panel flex flex-col overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-base-300 px-5 py-4">
              <div className="flex items-center gap-2">
                <Radar size={16} className="text-primary" />
                <h2 className="iris-kicker">Active Runs</h2>
              </div>
              <span className={`badge badge-sm border-0 font-bold ${activeRuns.length > 0 ? 'bg-success/10 text-success' : 'bg-base-200 text-base-content/40'}`}>
                {activeRuns.length} Active
              </span>
            </div>
            <div className="p-4">
              {activeRuns.length === 0 ? (
                <div className="iris-empty-panel flex min-h-[240px] flex-col items-center justify-center py-8 text-center">
                  <div className="mb-3 rounded-md bg-base-100 p-4 shadow-sm">
                    <Zap size={28} className="text-base-content/15" />
                  </div>
                  <h3 className="text-base font-bold">No Active Runs</h3>
                  <p className="mx-auto mt-1 max-w-sm text-sm iris-copy">
                    No pipelines are executing right now. New starts will appear here as soon as the backend launches them.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {activeRuns.map((run) => (
                    <ActiveRunCard key={run.id} run={run} />
                  ))}
                </div>
              )}
            </div>
          </section>

          <div className="space-y-5">
            <section className="iris-section-panel overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-base-300 px-5 py-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} className="text-warning" />
                  <h2 className="iris-kicker">Operational Attention</h2>
                </div>
                <span className={`badge badge-sm border-0 font-bold ${attentionRuns.length > 0 ? 'bg-warning/10 text-warning' : 'bg-base-200 text-base-content/40'}`}>
                  {attentionRuns.length} flagged
                </span>
              </div>
              <div className="divide-y divide-base-300/60">
                <AttentionSummaryRow label="Resumable Runs" value={resumableRuns.length} detail="Stopped or failed runs that can create a resume attempt" tone="warning" />
                <AttentionSummaryRow label="Recent Failures" value={recentStats?.failed ?? 0} detail="Failed or abandoned logical runs in the current overview window" tone="error" />
                <AttentionSummaryRow label="Runtime Success" value={`${recentStats?.successRate ?? 0}%`} detail={recentStats ? `${recentStats.completed}/${recentStats.total} completed runs` : 'No runtime history yet'} tone="success" />
              </div>
              <div className="border-t border-base-300 bg-base-200/20 px-4 py-4">
                {attentionRuns.length === 0 ? (
                  <div className="text-sm iris-copy">No runs currently need operator attention.</div>
                ) : (
                  <div className="space-y-2">
                    {attentionRuns.map((run) => (
                      <AttentionRunRow key={run.id} run={run} />
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section className="iris-section-panel flex flex-col overflow-hidden p-0">
              <div className="flex items-center gap-2 border-b border-base-300 px-5 py-4">
                <HistoryIcon size={16} className="text-secondary" />
                <h2 className="iris-kicker">Recent Runs</h2>
              </div>
              <div className="flex-1 divide-y divide-base-300/60 overflow-y-auto">
                {recentRuns.slice(0, 10).map((run) => (
                  <RecentRunRow key={run.id} run={run} />
                ))}
                {recentRuns.length === 0 && (
                  <div className="py-10 text-center text-sm text-base-content/45">No recent runs</div>
                )}
              </div>
              <div className="border-t border-base-300 bg-base-200/30 p-4">
                <Link to="/pipeline" className="btn btn-ghost btn-sm w-full gap-2">
                  Open Explorer
                  <ChevronRightIcon size={14} />
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* ?�?� Run Throughput Stats ?�?� */}
        {recentRuns.length > 0 && (
          <div className="mt-5">
            <RunThroughputPanel runs={recentRuns} />
          </div>
        )}
      </div>
    </div>
  )
}

// ?�?�?� Components ?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�

function MetricCard({
  icon: Icon,
  label,
  value,
  subValue,
  accent,
  pulse = false,
}: {
  icon: React.ElementType
  label: string
  value: string | number
  subValue: string
  accent: 'primary' | 'success' | 'warning' | 'error' | 'secondary'
  pulse?: boolean
}) {
  const accentMap = {
    primary: 'bg-primary/8 text-primary border-primary/15',
    success: 'bg-success/8 text-success border-success/15',
    warning: 'bg-warning/8 text-warning border-warning/15',
    error: 'bg-error/8 text-error border-error/15',
    secondary: 'bg-secondary/8 text-secondary border-secondary/15',
  }
  const iconColor = {
    primary: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    secondary: 'text-secondary',
  }

  return (
    <div className={`iris-section-panel border px-4 py-4 ${accentMap[accent]}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className={`rounded-sm border border-current/10 bg-base-100/60 p-2 ${iconColor[accent]}`}>
          <Icon size={18} />
        </div>
        {pulse && <div className={`size-2 rounded-full ${iconColor[accent].replace('text-', 'bg-')} animate-pulse`} />}
      </div>
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      <div className="mt-1 iris-kicker">{label}</div>
      <div className="mt-2 text-[11px] iris-copy">{subValue}</div>
    </div>
  )
}

function SuccessRateCard({ successRate, total, failed }: { successRate: number; total: number; failed: number }) {
  const prevRate = useRef(successRate)
  useEffect(() => { prevRate.current = successRate }, [successRate])

  const color = successRate >= 80 ? 'success' : successRate >= 50 ? 'warning' : 'error'
  const colorMap = {
    success: { bar: 'bg-success', text: 'text-success', border: 'border-success/15', bg: 'bg-success/8' },
    warning: { bar: 'bg-warning', text: 'text-warning', border: 'border-warning/15', bg: 'bg-warning/8' },
    error: { bar: 'bg-error', text: 'text-error', border: 'border-error/15', bg: 'bg-error/8' },
  }
  const c = colorMap[color]

  return (
    <div className={`iris-section-panel border px-4 py-4 ${c.border} ${c.bg} flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <div className={`rounded-sm border border-current/10 bg-base-100/60 p-2 ${c.text}`}>
          <TrendingUp size={18} />
        </div>
        {total > 0 && (
          <span className="iris-mono-meta uppercase tracking-wider">
            {total} recent
          </span>
        )}
      </div>
      <div>
        <div className={`text-3xl font-bold tracking-tight ${c.text}`}>{successRate}%</div>
        <div className="mt-1 iris-kicker">Success Rate</div>
      </div>
      {total > 0 && (
        <div>
          <div className="h-1.5 w-full rounded-full bg-base-300/60 overflow-hidden">
            <div
              className={`h-full rounded-full iris-bar-fill ${c.bar}`}
              style={{ '--bar-target-width': `${successRate}%` } as React.CSSProperties}
            />
          </div>
          {failed > 0 && (
            <div className="mt-1.5 text-[10px] font-semibold text-error/75">{failed} failed in recent batch</div>
          )}
        </div>
      )}
    </div>
  )
}

function VitalCell({
  label,
  value,
  sub,
  bar,
  barColor,
  pulse,
  statusColor,
}: {
  label: string
  value: string
  sub: string
  bar?: number
  barColor?: 'success' | 'warning' | 'error'
  pulse?: boolean
  statusColor?: 'success' | 'error'
}) {
  const barColorMap = {
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
  }
  const statusDotMap = {
    success: 'bg-success',
    error: 'bg-error',
  }

  return (
    <div className="p-5 flex flex-col gap-2">
      <div className="iris-kicker">{label}</div>
      <div className="flex items-center gap-2">
        {statusColor && (
          <div className={`size-2 rounded-full ${statusDotMap[statusColor]} ${statusColor === 'success' ? 'animate-pulse' : ''}`} />
        )}
        {pulse && !statusColor && (
          <div className="size-2 rounded-full bg-primary animate-pulse" />
        )}
        <div className="text-lg font-bold tracking-tight">{value}</div>
      </div>
      <div className="text-[10px] iris-copy">{sub}</div>
      {bar != null && barColor && (
        <div className="h-1 w-full rounded-full bg-base-300/50 overflow-hidden mt-1">
          <div
            className={`h-full rounded-full iris-bar-fill ${barColorMap[barColor]}`}
            style={{ '--bar-target-width': `${Math.min(bar, 100)}%` } as React.CSSProperties}
          />
        </div>
      )}
    </div>
  )
}


function RunThroughputPanel({ runs }: { runs: PipelineRunSummaryInfo[] }) {
  const completed = runs.filter(r => r.status === 'COMPLETED').length
  const failed = runs.filter(r => r.status === 'FAILED').length
  const stopped = runs.filter(r => r.status === 'STOPPED').length
  const inFlight = runs.filter(r => isPipelineStatusActive(r.status)).length

  return (
    <div className="iris-section-panel overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b border-base-300 px-5 py-3">
        <Activity size={15} className="text-primary" />
        <h2 className="iris-kicker">Run Breakdown</h2>
        <span className="ml-auto iris-mono-meta uppercase tracking-wider">Last {runs.length} runs</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-base-300/50">
        <ThroughputCell label="Completed" value={completed} total={runs.length} color="success" />
        <ThroughputCell label="Failed" value={failed} total={runs.length} color="error" />
        <ThroughputCell label="Stopped" value={stopped} total={runs.length} color="warning" />
        <ThroughputCell label="In-Flight" value={inFlight} total={runs.length} color="primary" pulse={inFlight > 0} />
      </div>
    </div>
  )
}

function ThroughputCell({
  label,
  value,
  total,
  color,
  pulse,
}: {
  label: string
  value: number
  total: number
  color: 'success' | 'error' | 'warning' | 'primary'
  pulse?: boolean
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0
  const barMap = { success: 'bg-success', error: 'bg-error', warning: 'bg-warning', primary: 'bg-primary' }
  const textMap = { success: 'text-success', error: 'text-error', warning: 'text-warning', primary: 'text-primary' }

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/45">{label}</div>
        {pulse && <div className="size-1.5 rounded-full bg-primary animate-pulse" />}
      </div>
      <div className={`text-2xl font-bold ${textMap[color]}`}>{value}</div>
      <div className="text-[10px] text-base-content/40 mb-2">{pct}% of total</div>
      <div className="h-1 w-full rounded-full bg-base-300/50 overflow-hidden">
        <div
          className={`h-full rounded-full iris-bar-fill ${barMap[color]}`}
          style={{ '--bar-target-width': `${pct}%` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

function AttentionSummaryRow({
  label,
  value,
  detail,
  tone,
}: {
  label: string
  value: string | number
  detail: string
  tone: 'success' | 'warning' | 'error'
}) {
  const toneClass = tone === 'success'
    ? 'text-success'
    : tone === 'warning'
      ? 'text-warning'
      : 'text-error'

  return (
    <div className="px-5 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="iris-kicker">{label}</div>
        <div className={`text-sm font-bold ${toneClass}`}>{value}</div>
      </div>
      <div className="mt-1 text-[11px] iris-copy">{detail}</div>
    </div>
  )
}

function AttentionRunRow({ run }: { run: PipelineRunSummaryInfo }) {
  const statusMeta = getPipelineStatusMeta(run.status)
  const active = isPipelineStatusActive(run.status)

  return (
    <Link
      to={`/pipeline/items/${run.pipelineId}/runs/${run.id}${run.folderId ? `?folderId=${run.folderId}` : ''}`}
      className="iris-inset-panel flex items-start gap-3 bg-base-100 px-3 py-3 transition-colors hover:border-primary/20 hover:bg-base-100/88"
    >
      <span className={`mt-1 size-2 shrink-0 rounded-full ${statusMeta.dotClass} ${active ? 'animate-pulse' : ''}`} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <div className="truncate text-sm font-semibold">{run.pipelineName}</div>
          <StatusBadge status={run.status} subtle mode="text" />
        </div>
        <div className="mt-1 text-[11px] iris-copy">{statusMeta.description}</div>
        <div className="mt-1 iris-mono-meta">
          #{run.id} | {formatDateTime(run.startTime ?? run.createdAt)}
        </div>
      </div>
    </Link>
  )
}

function ActiveRunCard({ run }: { run: PipelineRunSummaryInfo }) {
  const statusMeta = getPipelineStatusMeta(run.status)
  return (
    <Link
      to={`/pipeline/items/${run.pipelineId}/runs/${run.id}${run.folderId ? `?folderId=${run.folderId}` : ''}`}
      className="iris-inset-panel group flex items-center justify-between gap-4 px-4 py-3 hover:border-success/25 hover:bg-base-100/84"
    >
      <div className="flex items-center gap-4">
        <div className="animate-iris-pulse rounded-sm bg-success/10 p-2.5 text-success shrink-0">
          <PlayCircle size={18} />
        </div>
        <div>
          <div className="font-bold text-sm">{run.pipelineName}</div>
          <div className="mt-0.5 iris-kicker">
            {`Run #${run.id}${run.folderPath ? ` | ${run.folderPath}` : ''}`}
          </div>
          <div className="mt-1 text-[11px] iris-copy">{statusMeta.description}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <StatusBadge status={run.status} />
        <span className="iris-mono-meta">{formatDateTime(run.startTime ?? run.createdAt)}</span>
      </div>
    </Link>
  )
}

function RecentRunRow({ run }: { run: PipelineRunSummaryInfo }) {
  const statusMeta = getPipelineStatusMeta(run.status)
  const isActive = isPipelineStatusActive(run.status)
  return (
    <Link
      to={`/pipeline/items/${run.pipelineId}/runs/${run.id}${run.folderId ? `?folderId=${run.folderId}` : ''}`}
      className="flex items-center gap-3 px-5 py-3 hover:bg-base-200/50 transition-colors"
    >
      <div className={`size-2 shrink-0 rounded-full ${
        run.status === 'COMPLETED' ? 'bg-success' :
        run.status === 'FAILED' ? 'bg-error' :
        isActive ? 'bg-primary animate-pulse' :
        'bg-base-content/20'
      }`} />
      <div className="flex-1 min-w-0">
        <div className="truncate text-sm font-semibold">{run.pipelineName}</div>
        <div className="mt-0.5 truncate text-[11px] iris-copy">{statusMeta.description}</div>
        <div className="iris-mono-meta">{formatDateTime(run.startTime ?? run.createdAt)}</div>
      </div>
      <StatusBadge status={run.status} subtle />
    </Link>
  )
}

// ?�?�?� Helpers ?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�?�

function formatUptime(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${Math.round(seconds % 60)}s`
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return `${h}h ${m}m`
}

const HistoryIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" />
  </svg>
)

const ChevronRightIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)
