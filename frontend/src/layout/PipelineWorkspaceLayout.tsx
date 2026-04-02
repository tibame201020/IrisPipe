import { Outlet, Link, useParams, useSearchParams, Navigate, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { getApiErrorMessage, getPipelineConfig, getPipelineTree } from '../lib/api'
import { findFolderPath } from '../lib/tree'
import type { ConfigPipelineInfo, FolderTreeNodeInfo, PipelineTreeInfo } from '../types/irispipe'
import { Layers3, PlayCircle, Waypoints } from 'lucide-react'

export type PipelineWorkspaceContext = {
  pipeline: ConfigPipelineInfo
  tree: PipelineTreeInfo | null
  folderPathNodes: FolderTreeNodeInfo[]
  refreshWorkspace: () => Promise<void>
  applyPipeline: (nextPipeline: ConfigPipelineInfo) => void
}

export function PipelineWorkspaceLayout() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [pipeline, setPipeline] = useState<ConfigPipelineInfo | null>(null)
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
    if (!Number.isFinite(numericPipelineId)) {
      setError('Invalid pipeline id')
      setLoading(false)
      return
    }
    let active = true
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
    return () => { active = false }
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

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      {/* ── Premium Pipeline Header ── */}
      <header className="z-30 shrink-0 border-b border-base-300 bg-base-100">
        {/* Top row: Pipeline identity */}
        <div className="flex items-center justify-between gap-4 px-6 pt-4 pb-3">
          {/* Left: breadcrumb + name */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-[11px] text-base-content/35 font-medium mb-1">
              <Link to="/pipeline" className="hover:text-primary transition-colors">Root</Link>
              {folderPathNodes.map((folder) => (
                <span key={folder.id} className="flex items-center gap-1.5">
                  <span>/</span>
                  <Link to={`/pipeline/folders/${folder.id}`} className="hover:text-primary transition-colors">
                    {folder.folderName}
                  </Link>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold tracking-tight truncate">{pipeline.pipelineName}</h1>
              {/* Stage / Job summary chips */}
              <div className="hidden md:flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-[11px] font-bold text-primary/80">
                  <Layers3 size={11} />
                  {totalStages} stages
                </span>
                <span className="flex items-center gap-1 rounded-full bg-base-200 px-3 py-1 text-[11px] font-bold text-base-content/50">
                  <PlayCircle size={11} />
                  {totalJobs} jobs
                </span>
                {pipeline.folderId && pipeline.folderPath && (
                  <span className="truncate max-w-[160px] rounded-full bg-base-200 px-3 py-1 text-[10px] font-medium text-base-content/35">
                    {pipeline.folderPath}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Config / Runs underline tabs */}
        <div className="flex items-center gap-0 border-t border-base-300/50 px-6 bg-base-200/20">
          <Link
            to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all duration-150 border-b-2 -mb-px ${
              !runsActive
                ? 'border-primary text-primary'
                : 'border-transparent text-base-content/45 hover:text-base-content hover:border-base-300'
            }`}
          >
            Config
          </Link>
          <Link
            to={`/pipeline/items/${pipeline.id}/runs${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all duration-150 border-b-2 -mb-px ${
              runsActive
                ? 'border-primary text-primary'
                : 'border-transparent text-base-content/45 hover:text-base-content hover:border-base-300'
            }`}
          >
            Runs
          </Link>
        </div>
      </header>

      <Outlet
        context={{
          pipeline,
          tree,
          folderPathNodes,
          refreshWorkspace: loadWorkspace,
          applyPipeline: (nextPipeline: ConfigPipelineInfo) => { setPipeline(nextPipeline) },
        } satisfies PipelineWorkspaceContext}
      />
    </div>
  )
}
