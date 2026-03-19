import {
  Activity,
  ArrowRight,
  Database,
  FolderTree,
  Layers3,
  PlayCircle,
  Radar,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { getApiErrorMessage, getHealth, getPipelineTree, getRecentRuns } from '../lib/api'
import { formatDateTime } from '../lib/date'
import { countTreeStats } from '../lib/tree'
import type { HealthResponse, PipelineRunSummaryInfo, PipelineTreeInfo } from '../types/irispipe'

export function OverviewPage() {
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [recentRuns, setRecentRuns] = useState<PipelineRunSummaryInfo[]>([])
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const [treeResponse, recentResponse, healthResponse] = await Promise.all([
        getPipelineTree(),
        getRecentRuns(10),
        getHealth(),
      ])
      setTree(treeResponse)
      setRecentRuns(recentResponse)
      setHealth(healthResponse)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load overview'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void load()
    const timer = setInterval(() => {
      void load()
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  if (loading && !tree) return <div className="p-12"><LoadingState /></div>

  if (error || !tree || !health) {
    return (
      <EmptyState
        icon={ShieldCheck}
        title="Overview unavailable"
        description={error ?? 'Unable to connect to the IrisPipe backend.'}
        action={<button onClick={() => void load()} className="btn btn-primary">Retry</button>}
      />
    )
  }

  const stats = countTreeStats(tree)
  const activeRuns = recentRuns.filter((run) => ['STARTING', 'STARTED'].includes(run.status))

  return (
    <div className="flex h-full flex-col overflow-hidden bg-base-200/50">
      <div className="flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-8 py-6">
        <div>
          <div className="iris-header">Overview</div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Backend Overview</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="iris-card flex items-center gap-3 px-4 py-2 bg-success/5 border-success/20">
            <div className="size-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-bold text-success uppercase tracking-widest">Backend {health.status}</span>
          </div>
          <Link to="/pipeline" className="btn btn-primary px-6 gap-2">
            Open Explorer
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={FolderTree}
            label="Namespace Hierarchy"
            value={stats.folderCount}
            subValue="Folders Organized"
            color="text-warning"
          />
          <MetricCard
            icon={Layers3}
            label="Pipeline Inventory"
            value={stats.pipelineCount}
            subValue="Configured Entities"
            color="text-primary"
          />
          <MetricCard
            icon={Activity}
            label="Active Operations"
            value={activeRuns.length}
            subValue="Runs in Progress"
            color="text-success"
          />
          <MetricCard
            icon={Database}
            label="Backend Health"
            value={health.status}
            subValue="Actuator health endpoint"
            color="text-secondary"
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <section className="iris-card p-0 flex flex-col bg-base-100 xl:col-span-2 overflow-hidden border-base-300">
            <div className="px-6 py-4 border-b border-base-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radar size={18} className="text-primary" />
                <h2 className="text-sm font-black uppercase tracking-widest opacity-50">Active Runs</h2>
              </div>
              <span className="badge badge-sm font-bold bg-primary/10 text-primary border-0">{activeRuns.length} Active</span>
            </div>

            <div className="p-6">
              {activeRuns.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-base-200/30 rounded-2xl border-2 border-dashed border-base-300">
                  <div className="p-4 bg-base-100 rounded-full mb-4 shadow-sm">
                    <Zap size={32} className="text-base-content/20" />
                  </div>
                  <h3 className="text-lg font-bold">No Active Runs</h3>
                  <p className="text-sm text-base-content/50 max-w-xs mx-auto mt-1">
                    There are no pipelines executing at the moment. Use the explorer to launch a run.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeRuns.map((run) => (
                    <Link
                      key={run.id}
                      to={`/pipeline/items/${run.pipelineId}/runs/${run.id}${run.folderId ? `?folderId=${run.folderId}` : ''}`}
                      className="iris-card group flex items-center justify-between p-4 bg-base-200/30 hover:bg-base-200 transition-all border-base-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-success/10 text-success rounded-xl animate-iris-pulse">
                          <PlayCircle size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-base">{run.pipelineName}</div>
                          <div className="text-[11px] font-medium opacity-40 uppercase tracking-widest">
                            Run #{run.id}{run.folderPath ? ` • ${run.folderPath}` : ''}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <StatusBadge status={run.status} />
                        <span className="text-[10px] font-mono opacity-40">{formatDateTime(run.startTime ?? run.createdAt)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="iris-card p-0 bg-base-100 border-base-300 overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-base-300 flex items-center gap-2">
              <History size={18} className="text-secondary" />
              <h2 className="text-sm font-black uppercase tracking-widest opacity-50">Recent Runs</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {recentRuns.slice(0, 8).map((run) => (
                <Link
                  key={run.id}
                  to={`/pipeline/items/${run.pipelineId}/runs/${run.id}${run.folderId ? `?folderId=${run.folderId}` : ''}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-base-200 transition-colors"
                >
                  <div className={`size-2 shrink-0 rounded-full ${run.status === 'COMPLETED' ? 'bg-success' : 'bg-error'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-sm font-bold">{run.pipelineName}</div>
                    <div className="text-[10px] opacity-40">{formatDateTime(run.startTime ?? run.createdAt)}</div>
                  </div>
                  <StatusBadge status={run.status} subtle />
                </Link>
              ))}
            </div>
            <div className="p-4 border-t border-base-300 bg-base-200/30">
              <Link to="/pipeline" className="btn btn-ghost btn-sm w-full gap-2">
                Open Explorer
                <ChevronRight size={14} />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  subValue,
  color,
}: {
  icon: any,
  label: string,
  value: string | number,
  subValue: string,
  color: string
}) {
  return (
    <div className="iris-card p-6 bg-base-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl bg-base-200/50 ${color}`}>
          <Icon size={20} />
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">{label}</div>
      </div>
      <div className="text-3xl font-bold tracking-tight mb-1">{value}</div>
      <div className="text-xs font-medium opacity-40 uppercase tracking-widest">{subValue}</div>
    </div>
  )
}

const History = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" />
  </svg>
)

const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)
