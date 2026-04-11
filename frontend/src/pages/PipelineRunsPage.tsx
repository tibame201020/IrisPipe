import { RefreshCw, TimerReset, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { PipelineContextStrip } from '../components/pipeline-family/PipelineContextStrip'
import { PipelineOverviewRail } from '../components/pipeline-family/PipelineOverviewRail'
import { PipelineRunsLedger } from '../components/pipeline-family/PipelineRunsLedger'
import { PipelineWorkspaceShell } from '../components/pipeline-family/PipelineWorkspaceShell'
import { StatusBadge } from '../components/StatusBadge'
import { ActionButton, ActionLink } from '../components/ui/Action'
import { executePipeline, getApiErrorMessage, getPipelineRuns, getRunDetail } from '../lib/api'
import { formatDateTime, formatDuration } from '../lib/date'
import {
  getPipelineStatusMeta,
  isPipelineStatusActive,
  isPipelineStatusResumable,
  summarizePipelineRunHistory,
} from '../lib/pipeline-runtime'
import { usePipelineEvents } from '../lib/usePipelineEvents'
import type { PipelineRunDetailInfo, PipelineRunSummaryInfo } from '../types/irispipe'
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
  const [runDetailsById, setRunDetailsById] = useState<Record<number, PipelineRunDetailInfo>>({})

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')
  const pipeline = workspace.pipeline
  const pipelineBaseId = pipeline?.id ?? numericPipelineId
  const folderQuery = pipeline?.folderId ?? folderId

  async function loadRuns(reset = false) {
    if (reset) {
      setLoading(true)
      setError(null)
      setRunDetailsById({})
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
    setRunDetailsById({})
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
    setRunDetailsById({})
    void loadRuns(true)
  }, [numericPipelineId])

  useEffect(() => {
    const targetRuns = runs.slice(0, 10)
    const missingIds = targetRuns.map((run) => run.id).filter((id) => !runDetailsById[id])
    if (missingIds.length === 0) return

    let active = true
    void Promise.allSettled(missingIds.map((id) => getRunDetail(id))).then((results) => {
      if (!active) return
      setRunDetailsById((current) => {
        const next = { ...current }
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            next[missingIds[index]] = result.value
          }
        })
        return next
      })
    })

    return () => {
      active = false
    }
  }, [runs, runDetailsById])

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
      navigate(`/pipeline/items/${pipeline.id}/runs/${run.id}${folderQuery ? `?folderId=${folderQuery}` : ''}`)
    } catch (executeError) {
      setError(getApiErrorMessage(executeError, 'Failed to execute pipeline'))
    } finally {
      setExecuting(false)
    }
  }

  const stats = useMemo(() => summarizePipelineRunHistory(runs), [runs])
  const latestRun = runs[0] ?? null
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

  const visibleRun = filteredRuns[0] ?? latestRun
  const visibleRunDetail = visibleRun ? runDetailsById[visibleRun.id] : undefined
  const visibleAttempts = visibleRunDetail?.attempts ?? []
  const visibleLatestAttempt = visibleAttempts[visibleAttempts.length - 1] ?? null
  const visibleRunStatusMeta = visibleRun ? getPipelineStatusMeta(visibleRun.status) : null

  if (!Number.isFinite(numericPipelineId)) {
    return (
      <EmptyState
        icon={TimerReset}
        title="Run history unavailable"
        description="Invalid pipeline id"
        action={<ActionLink to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} tone="primary">Back to Explorer</ActionLink>}
      />
    )
  }

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

  const visibleCountLabel = `${filteredRuns.length} visible run${filteredRuns.length === 1 ? '' : 's'}`
  const activeFilterLabel =
    filter === 'all'
      ? 'All runs'
      : filter === 'active'
        ? 'In flight'
        : filter === 'failed'
          ? 'Failed'
          : filter === 'completed'
            ? 'Completed'
            : 'Resumable'

  const shellDetail = latestRun
    ? `Latest run #${latestRun.id} · ${stats?.total ?? 0} total records · ${visibleCountLabel}`
    : 'Execute this pipeline to create the first logical run.'

  const runHref = (run: PipelineRunSummaryInfo) =>
    `/pipeline/items/${pipelineBaseId}/runs/${run.id}${folderQuery ? `?folderId=${folderQuery}` : ''}`

  return (
    <PipelineWorkspaceShell
      identity={{
        breadcrumb: pipeline ? `Pipeline / ${pipeline.pipelineName}` : 'Pipeline / Runs',
        title: 'Runs',
        detail: shellDetail,
        chips: latestRun ? (
          <>
            <StatusBadge status={latestRun.status} subtle />
            <span className="badge badge-ghost badge-sm">Logical run history</span>
            <span className="badge badge-ghost badge-sm">{activeFilterLabel}</span>
          </>
        ) : (
          <span className="badge badge-ghost badge-sm">No runs yet</span>
        ),
      }}
      tabs={[
        {
          key: 'config',
          label: 'Config',
          href: `/pipeline/items/${pipelineBaseId}${folderQuery ? `?folderId=${folderQuery}` : ''}`,
        },
        {
          key: 'runs',
          label: 'Runs',
          active: true,
        },
        {
          key: 'detail',
          label: 'Run Detail',
          href: latestRun ? runHref(latestRun) : undefined,
          disabled: !latestRun,
        },
      ]}
      primaryActions={
        <>
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
        </>
      }
      contextStrip={
        <PipelineContextStrip
          eyebrow="Operations ledger"
          title="Logical run history"
          detail="Run rows are the primary surface. Use detail view for attempt timelines, runtime boards, and diagnostics."
          actions={
            <div className="text-[10px] iris-copy-soft">
              {filteredRuns.length} visible {filter === 'all' ? 'of all runs' : `in ${activeFilterLabel.toLowerCase()} view`}
            </div>
          }
        >
          <div className="flex flex-wrap items-center gap-1.5">
            <FilterChip label="All" count={runs.length} active={filter === 'all'} onClick={() => setFilter('all')} />
            {(stats?.active ?? 0) > 0 ? (
              <FilterChip label="Active" count={stats?.active ?? 0} active={filter === 'active'} onClick={() => setFilter('active')} />
            ) : null}
            <FilterChip label="Failed" count={stats?.failed ?? 0} active={filter === 'failed'} onClick={() => setFilter('failed')} variant="error" />
            <FilterChip label="Completed" count={stats?.completed ?? 0} active={filter === 'completed'} onClick={() => setFilter('completed')} variant="success" />
            {(stats?.resumable ?? 0) > 0 ? (
              <FilterChip label="Resumable" count={stats?.resumable ?? 0} active={filter === 'resumable'} onClick={() => setFilter('resumable')} variant="warning" />
            ) : null}
          </div>
        </PipelineContextStrip>
      }
      mainClassName="min-h-0"
      inspector={
        <PipelineOverviewRail
          widthClassName="w-[320px]"
          className="hidden xl:flex"
          header={
            <div className="space-y-1">
              <div className="iris-kicker">Context rail</div>
              <div className="text-sm font-semibold text-base-content">Selected run context</div>
              <div className="text-[11px] iris-copy">This panel stays secondary. The ledger remains the main reading surface.</div>
            </div>
          }
          footer={
            <ActionLink
              to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'}
              tone="ghost"
              size="xs"
              className="w-full justify-center"
            >
              Back to Explorer
            </ActionLink>
          }
        >
          <div className="space-y-4">
            {visibleRun ? (
              <div className="iris-inset-panel px-4 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="iris-kicker">Focused run</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold tabular-nums text-base-content">#{visibleRun.id}</span>
                      <StatusBadge status={visibleRunStatusMeta?.status ?? visibleRun.status} subtle />
                    </div>
                    <div className="mt-1 text-[11px] iris-copy-soft">{visibleRun.folderPath}</div>
                  </div>
                  {visibleRunDetail ? (
                    <div className="text-right">
                      <div className="text-[10px] iris-copy-soft">Attempts</div>
                      <div className="font-mono text-sm font-semibold text-base-content">{visibleRunDetail.attempts.length}</div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-3 grid gap-2 text-[11px] iris-copy">
                  <div className="flex items-center justify-between gap-3">
                    <span>Started</span>
                    <span className="font-mono tabular-nums text-base-content/72">
                      {formatDateTime(visibleRun.startTime ?? visibleRun.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Duration</span>
                    <span className="font-mono tabular-nums text-base-content/72">
                      {formatDuration(visibleRun.startTime ?? visibleRun.createdAt, visibleRun.endTime)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Latest attempt</span>
                    <span className="font-mono tabular-nums text-base-content/72">
                      {visibleLatestAttempt ? `#${visibleLatestAttempt.executionNo} ${visibleLatestAttempt.executionKind}` : 'Loading'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Resume posture</span>
                    <span className="text-right text-warning">
                      {isPipelineStatusResumable(visibleRun.status) ? 'Resumable' : 'Not resumable'}
                    </span>
                  </div>
                </div>

                {visibleLatestAttempt ? (
                  <div className="mt-3 border-t border-base-300/60 pt-3 text-[11px] iris-copy-soft">
                    {visibleLatestAttempt.status === 'STOPPED' || isPipelineStatusResumable(visibleRun.status)
                      ? 'This run can branch into a resume attempt from the first incomplete stage.'
                      : 'Open the detail view for the attempt timeline and runtime board.'}
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="space-y-2 text-[11px] iris-copy">
              <p>Rows are ordered by recency. The latest run is highlighted, but the list is the source of truth.</p>
              <p>Filter chips only narrow the ledger. They do not replace the history scan.</p>
            </div>
          </div>
        </PipelineOverviewRail>
      }
    >
      <div className="flex h-full min-h-0 flex-col gap-4 overflow-y-auto px-5 pb-5 pt-4">
        {error ? <div className="shrink-0 border-b border-error/20 bg-error/5 px-5 py-2 text-xs text-error">{error}</div> : null}

        {runs.length === 0 ? (
          loading ? (
            <PipelineRunsLedger
              runs={[]}
              detailsById={runDetailsById}
              loading
              buildRunHref={runHref}
            />
          ) : (
            <div className="flex min-h-[56vh] flex-col items-center justify-center py-24 text-center">
              <div className="iris-inset-panel mb-5 p-7">
                <TimerReset size={36} className="text-base-content/30" />
              </div>
              <h3 className="text-lg font-bold">No runs yet</h3>
              <p className="mt-1.5 max-w-xs text-sm text-base-content/50">
                Execute this pipeline to create the first logical run and ledger entry.
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
          )
        ) : filteredRuns.length === 0 ? (
          <div className="flex min-h-[56vh] flex-col items-center justify-center py-20 text-center">
            <p className="text-sm text-base-content/45">No runs match this semantic filter.</p>
            <ActionButton size="xs" tone="ghost" className="mt-3" onClick={() => setFilter('all')}>
              Show all
            </ActionButton>
          </div>
        ) : (
          <PipelineRunsLedger
            runs={filteredRuns}
            detailsById={runDetailsById}
            latestRunId={latestRun?.id}
            buildRunHref={runHref}
            hasMore={Boolean(beforeRunId)}
            loadingMore={loadingMore}
            onLoadMore={() => void loadRuns(false)}
            footer={<div className="text-[10px] iris-copy-soft">{filteredRuns.length} visible run{filteredRuns.length === 1 ? '' : 's'}</div>}
          />
        )}
      </div>
    </PipelineWorkspaceShell>
  )
}

function FilterChip({
  label,
  count,
  active,
  onClick,
  variant,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
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
      {label}
      {count > 0 ? (
        <span className={`rounded-sm px-1 py-0 text-[9px] font-bold tabular-nums ${active ? 'bg-current/20' : 'bg-base-200 text-base-content/45'}`}>
          {count}
        </span>
      ) : null}
    </button>
  )
}
