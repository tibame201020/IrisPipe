import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, Navigate, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Layers3, PlayCircle, Waypoints } from 'lucide-react'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { PipelineContextStrip } from '../components/pipeline-family/PipelineContextStrip'
import { PipelineWorkspaceShell } from '../components/pipeline-family/PipelineWorkspaceShell'
import { PIPELINE_FAMILY_WORKSPACE_LABEL } from '../components/pipeline-family/ui-contract'
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
  const latestRunHref = lastRun ? `${runsHref.split('?')[0]}/${lastRun.id}${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}` : undefined
  const breadcrumb = (
    <span>
      <Link to="/pipeline" className="text-base-content/50 hover:text-primary">Root</Link>
      {folderPathNodes.map((folder) => (
        <span key={folder.id}>
          {' / '}
          <Link to={`/pipeline/folders/${folder.id}`} className="text-base-content/50 hover:text-primary">{folder.folderName}</Link>
        </span>
      ))}
      {' / '}
      <span className="text-base-content/70">{pipeline.pipelineName}</span>
    </span>
  )

  return (
    <PipelineWorkspaceShell
      workspaceLabel={PIPELINE_FAMILY_WORKSPACE_LABEL}
      identity={{
        breadcrumb,
        title: pipeline.pipelineName,
        detail: 'Config and runtime belong to the same pipeline family workspace.',
        chips: (
          <>
            {dirty ? <span className="badge badge-warning badge-xs">unsaved</span> : null}
            <span className="iris-signal-strip inline-flex items-center gap-1 rounded-sm px-2.5 py-1 text-[10px] font-bold text-primary/70">
              <Layers3 size={10} />{totalStages}
            </span>
            <span className="iris-signal-strip inline-flex items-center gap-1 rounded-sm px-2.5 py-1 text-[10px] font-bold text-base-content/55">
              <PlayCircle size={10} />{totalJobs}
            </span>
            {lastRun && latestRunHref ? (
              <Link
                to={latestRunHref}
                className="iris-glass-band inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] transition-colors hover:border-primary/30 hover:bg-primary/5"
                title={`Last run: #${lastRun.id}`}
              >
                <span className="text-base-content/48">last run</span>
                <StatusBadge status={lastRun.status} subtle mode="text" />
                <span className="font-mono text-base-content/48">{formatDuration(lastRun.startTime ?? lastRun.createdAt, lastRun.endTime)}</span>
              </Link>
            ) : null}
          </>
        ),
      }}
      tabs={[
        { key: 'config', label: 'Config', href: configHref, active: !runsActive },
        { key: 'runs', label: 'Runs', href: runsHref, active: runsActive },
      ]}
      contextStrip={(
        <PipelineContextStrip
          eyebrow="Pipeline family"
          title="Workspace context"
          detail="Stage order is explicit; jobs may parallelize inside each stage lane."
        />
      )}
      main={(
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
      )}
    />
  )
}
