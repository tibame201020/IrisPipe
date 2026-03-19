import { Outlet, Link, useParams, useSearchParams, Navigate, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { getApiErrorMessage, getPipelineConfig, getPipelineTree } from '../lib/api'
import { findFolderPath } from '../lib/tree'
import type { ConfigPipelineInfo, FolderTreeNodeInfo, PipelineTreeInfo } from '../types/irispipe'
import { Waypoints } from 'lucide-react'

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

    return () => {
      active = false
    }
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

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      <header className="z-30 flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-6 py-3">
        <div className="breadcrumbs text-[13px] text-base-content/50">
          <ul>
            <li><Link to="/pipeline">Root</Link></li>
            {folderPathNodes.map((folder) => (
              <li key={folder.id}>
                <Link to={`/pipeline/folders/${folder.id}`}>{folder.folderName}</Link>
              </li>
            ))}
            <li className="font-bold opacity-100">{pipeline.pipelineName}</li>
          </ul>
        </div>

        <div role="tablist" className="tabs tabs-boxed tabs-sm bg-base-200/60 p-1">
            <Link
              to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
              className={`tab h-8 px-4 ${runsActive ? 'opacity-60' : 'tab-active font-bold'}`}
            >
              Config
            </Link>
            <Link
              to={`/pipeline/items/${pipeline.id}/runs${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
              className={`tab h-8 px-4 ${runsActive ? 'tab-active font-bold' : 'opacity-60'}`}
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
          applyPipeline: (nextPipeline: ConfigPipelineInfo) => {
            setPipeline(nextPipeline)
          },
        } satisfies PipelineWorkspaceContext}
      />
    </div>
  )
}
