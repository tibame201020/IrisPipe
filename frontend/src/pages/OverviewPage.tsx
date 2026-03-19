import {
  ArrowRight,
  FolderTree,
  Layers3,
  PlayCircle,
  Radar,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PageToolbar } from '../components/PageToolbar'
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

  useEffect(() => {
    let active = true

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const [treeResponse, recentResponse, healthResponse] = await Promise.all([
          getPipelineTree(),
          getRecentRuns(6),
          getHealth(),
        ])

        if (!active) {
          return
        }

        setTree(treeResponse)
        setRecentRuns(recentResponse)
        setHealth(healthResponse)
      } catch (loadError) {
        if (!active) {
          return
        }

        setError(getApiErrorMessage(loadError, 'Failed to load overview'))
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    void load()
    return () => {
      active = false
    }
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <PageToolbar
          eyebrow="Overview"
          title="Operator landing"
          description="Derived summary now. Backend aggregate surface can plug in later without changing the shell."
          actions={
            <Link to="/pipeline" className="btn btn-primary px-5">
              Open explorer
              <ArrowRight size={16} />
            </Link>
          }
        />
        <LoadingState cards={6} />
      </div>
    )
  }

  if (error || !tree || !health) {
    return (
      <EmptyState
        icon={ShieldCheck}
        title="Overview is unavailable"
        description={error ?? 'The backend did not return the overview data needed to build the landing page.'}
        action={
          <Link to="/pipeline" className="btn btn-primary px-5">
            Go to explorer
          </Link>
        }
      />
    )
  }

  const stats = countTreeStats(tree)
  const activeRunCount = recentRuns.filter((run) =>
    ['STARTING', 'STARTED', 'STOPPING'].includes(run.status),
  ).length

  return (
    <div className="space-y-6">
      <PageToolbar
        eyebrow="Overview"
        title="Operator landing"
        description="Present the backend as an execution engine first. Summary cards stay strong even before a dedicated aggregate endpoint exists."
        actions={
          <Link to="/pipeline" className="btn btn-primary px-5">
            Open explorer
            <ArrowRight size={16} />
          </Link>
        }
      />

      <div className="grid gap-4 xl:grid-cols-12">
        <section className="card rounded-none border border-base-300 bg-base-100 shadow-none xl:col-span-4">
          <div className="card-body space-y-4 p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-box bg-primary/10 text-primary">
                <Layers3 size={20} />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Pipeline engine</div>
                <div className="text-3xl font-semibold">{stats.pipelineCount}</div>
              </div>
            </div>
            <p className="text-sm leading-6 text-base-content/60">
              Stored definitions that can be configured, executed, rerun, resumed, stopped, and inspected from one console.
            </p>
          </div>
        </section>

        <section className="card rounded-none border border-base-300 bg-base-100 shadow-none xl:col-span-4">
          <div className="card-body space-y-4 p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-box bg-success/10 text-success">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Backend</div>
                <div className="mt-1">
                  <StatusBadge status={health.status} mode="text" />
                </div>
              </div>
            </div>
            <p className="text-sm leading-6 text-base-content/60">
              Health is coming from the real actuator endpoint, not a local mock or front-end only signal.
            </p>
          </div>
        </section>

        <section className="card rounded-none border border-base-300 bg-base-100 shadow-none xl:col-span-4">
          <div className="card-body space-y-4 p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-box bg-secondary/10 text-secondary">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Quick entry</div>
                <div className="text-2xl font-semibold">Continue operating</div>
              </div>
            </div>
            <p className="text-sm leading-6 text-base-content/60">
              Jump back into the explorer and hand the whole surface over to one pipeline when needed.
            </p>
            <Link to="/pipeline" className="btn btn-primary px-5">
              Open pipeline explorer
            </Link>
          </div>
        </section>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryTile icon={FolderTree} label="Folders" value={stats.folderCount} description="Nested explorer structure" />
        <SummaryTile icon={Layers3} label="Pipelines" value={stats.pipelineCount} description="Local engine definitions" />
        <SummaryTile icon={PlayCircle} label="Recent runs" value={recentRuns.length} description="Last six logical runs" />
        <SummaryTile icon={Radar} label="Active runs" value={activeRunCount} description="Derived from current run states" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,1fr)]">
        <section className="card min-h-[28rem] rounded-none border border-base-300 bg-base-100 shadow-none">
          <div className="card-body p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Recent activity</div>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Latest pipeline runs</h2>
            </div>
            <Link to="/pipeline" className="btn btn-ghost px-4">
              View explorer
            </Link>
          </div>

          {recentRuns.length === 0 ? (
            <div className="flex min-h-64 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40">
              <div className="text-center">
                <div className="text-lg font-medium">No pipeline runs yet</div>
                <div className="mt-2 text-sm text-base-content/55">
                  Execute a pipeline to turn the runtime surfaces into live operational views.
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {recentRuns.map((run) => (
                <Link
                  key={run.id}
                  to={`/pipeline/items/${run.pipelineId}/runs/${run.id}${run.folderId ? `?folderId=${run.folderId}` : ''}`}
                  className="flex items-center justify-between gap-4 rounded-box border border-base-300 bg-base-100 px-5 py-4 transition-colors hover:bg-base-200/70"
                >
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold">{run.pipelineName}</div>
                    <div className="truncate text-sm text-base-content/55">
                      {run.folderPath} / run #{run.id}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <StatusBadge status={run.status} />
                    <div className="text-right text-sm text-base-content/55">{formatDateTime(run.startTime ?? run.createdAt)}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          </div>
        </section>

        <section className="card rounded-none border border-base-300 bg-base-100 shadow-none">
          <div className="card-body p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Engine strengths</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">What this console is surfacing</h2>
            <div className="mt-6 space-y-4">
            {[
              'Folder-aware pipeline registry instead of path-bound config files.',
              'Logical run history with rerun, resume, stop, and delete controls.',
              'Attempt timelines and latest job projections straight from runtime state.',
              'A workflow-oriented config surface that stays close to the backend model.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 size-2.5 shrink-0 rounded-full bg-primary" />
                <p className="text-sm leading-6 text-base-content/65">{item}</p>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function SummaryTile({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: typeof FolderTree
  label: string
  value: number
  description: string
}) {
  return (
    <div className="stats rounded-none border border-base-300 bg-base-100 shadow-none">
      <div className="stat">
        <div className="mb-3 flex size-11 items-center justify-center rounded-box bg-base-200 text-primary">
          <Icon size={18} />
        </div>
        <div className="stat-title text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{label}</div>
        <div className="stat-value text-4xl font-semibold text-base-content">{value}</div>
        <div className="stat-desc mt-2 text-sm text-base-content/55">{description}</div>
      </div>
    </div>
  )
}
