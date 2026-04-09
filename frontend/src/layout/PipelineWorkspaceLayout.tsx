import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, Navigate, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Layers3, PlayCircle, Waypoints } from 'lucide-react'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { getApiErrorMessage, getPipelineConfig, getPipelineTree, getRecentRuns } from '../lib/api'
import { formatDuration } from '../lib/date'
import { findFolderPath } from '../lib/tree'
import type { ConfigPipelineInfo, FolderTreeNodeInfo, PipelineRunSummaryInfo, PipelineTreeInfo } from '../types/irispipe'

export type PipelineWorkspaceContext = {
  pipeline: ConfigPipelineInfo
  tree: PipelineTreeInfo | null
  folderPathNodes: FolderTreeNodeInfo[]
  refreshWorkspace: () => Promise<void>
  applyPipeline: (nextPipeline: ConfigPipelineInfo) => void
  setDirty: (dirty: boolean) => void
  lastRun?: PipelineRunSummaryInfo
}

export function PipelineWorkspaceLayout() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [pipeline, setPipeline] = useState<ConfigPipelineInfo | null>(null)
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dirty, setDirty] = useState(false)
  const [lastRun, setLastRun] = useState<PipelineRunSummaryInfo | undefined>()

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')

  const loadWorkspace = useCallback(async () => {
    if (!Number.isFinite(numericPipelineId)) {
      setError('Invalid pipeline id')
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const [pipelineResponse, treeResponse] = await Promise.all([
        getPipelineConfig(numericPipelineId),
        getPipelineTree(),
      ])
      setPipeline(pipelineResponse)
      setTree(treeResponse)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline workspace'))
    } finally {
      setLoading(false)
    }
  }, [numericPipelineId])

  useEffect(() => {
    let active = true

    if (!Number.isFinite(numericPipelineId)) {
      setError('Invalid pipeline id')
      setLoading(false)
      return
    }

    void (async () => {
      setLoading(true)
      setError(null)

      try {
        const [pipelineResponse, treeResponse] = await Promise.all([
          getPipelineConfig(numericPipelineId),
          getPipelineTree(),
        ])
        if (!active) return
        setPipeline(pipelineResponse)
        setTree(treeResponse)
      } catch (loadError) {
        if (!active) return
        setError(getApiErrorMessage(loadError, 'Failed to load pipeline workspace'))
      } finally {
        if (active) setLoading(false)
      }
    })()

    return () => {
      active = false
    }
  }, [numericPipelineId])

  useEffect(() => {
    if (!Number.isFinite(numericPipelineId)) return

    getRecentRuns(1)
      .then((runs) => {
        const match = runs.find((run) => run.pipelineId === numericPipelineId)
        if (match) setLastRun(match)
      })
      .catch(() => {})
  }, [numericPipelineId])

  const folderPathNodes = useMemo(() => {
    if (!tree || !pipeline?.folderId) return []
    return findFolderPath(tree, pipeline.folderId)
  }, [tree, pipeline?.folderId])

  if (loading) return <div className="p-12"><LoadingState /></div>

  if (error || !pipeline) {
    return (
      <EmptyState
        icon={Waypoints}
        title="Pipeline workspace unavailable"
        description={error ?? 'Unable to load pipeline workspace.'}
        action={<Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary">Back to Explorer</Link>}
      />
    )
  }

  if (location.pathname === `/pipeline/items/${pipeline.id}`) {
    return <Navigate to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`} replace />
  }

  const runsActive = location.pathname.includes(`/pipeline/items/${pipeline.id}/runs`)
  const totalJobs = pipeline.jobs.length
  const totalStages = pipeline.stages.length
  const runsHref = `/pipeline/items/${pipeline.id}/runs${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`
  const configHref = `/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`

  return (
    <div className="iris-page-canvas flex h-full min-h-0 flex-col overflow-hidden">
      <header className="iris-shell-bar relative z-20 shrink-0">
        <div className="flex items-center gap-3 px-5 py-2.5">
          <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden">
            <Link to="/pipeline" className="shrink-0 text-[11px] text-base-content/45 transition-colors hover:text-primary">
              Root
            </Link>
            {folderPathNodes.map((folder) => (
              <span key={folder.id} className="flex shrink-0 items-center gap-1.5">
                <span className="text-[11px] text-base-content/35">/</span>
                <Link to={`/pipeline/folders/${folder.id}`} className="text-[11px] text-base-content/45 transition-colors hover:text-primary">
                  {folder.folderName}
                </Link>
              </span>
            ))}
            <span className="text-[11px] text-base-content/35">/</span>
            <h1 className="min-w-0 truncate text-[14px] font-bold tracking-tight" title={pipeline.pipelineName}>
              {pipeline.pipelineName}
            </h1>
            {dirty ? (
              <span className="badge badge-warning badge-xs shrink-0" title="Unsaved changes">
                unsaved
              </span>
            ) : null}
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 md:flex">
            <span className="flex items-center gap-1 rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-bold text-primary/70">
              <Layers3 size={10} />
              {totalStages}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-base-200 px-2.5 py-0.5 text-[10px] font-bold text-base-content/45">
              <PlayCircle size={10} />
              {totalJobs}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-0 border-t border-base-300/40 bg-base-200/15 px-5">
          <div className="flex items-center">
            <Link
              to={configHref}
              className={`-mb-px flex items-center gap-1.5 border-b-2 px-3 py-2 text-[13px] font-semibold transition-all duration-150 ${
                !runsActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-base-content/40 hover:border-base-300 hover:text-base-content'
              }`}
            >
              Config
            </Link>
            <Link
              to={runsHref}
              className={`-mb-px flex items-center gap-1.5 border-b-2 px-3 py-2 text-[13px] font-semibold transition-all duration-150 ${
                runsActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-base-content/40 hover:border-base-300 hover:text-base-content'
              }`}
            >
              Runs
            </Link>
          </div>

          {lastRun ? (
            <Link
              to={`${runsHref.split('?')[0]}/${lastRun.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
              className="flex shrink-0 items-center gap-1.5 rounded-md border border-base-300 bg-base-100 px-2.5 py-0.5 text-[10px] transition-colors hover:border-primary/30 hover:bg-primary/5"
              title={`Last run: #${lastRun.id}`}
            >
              <span className="text-base-content/40">last run</span>
              <StatusBadge status={lastRun.status} subtle mode="text" />
              <span className="font-mono text-base-content/40">
                {formatDuration(lastRun.startTime ?? lastRun.createdAt, lastRun.endTime)}
              </span>
            </Link>
          ) : null}
        </div>
      </header>

      <Outlet
        context={{
          pipeline,
          tree,
          folderPathNodes,
          refreshWorkspace: loadWorkspace,
          applyPipeline: (nextPipeline: ConfigPipelineInfo) => {
            setPipeline(nextPipeline)
          },
          setDirty,
          lastRun,
        } satisfies PipelineWorkspaceContext}
      />
    </div>
  )
}
