import {
  ArrowRight,
  FileJson2,
  Folder,
  FolderTree,
  Layers3,
  RefreshCw,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PageToolbar } from '../components/PageToolbar'
import { getApiErrorMessage, getPipelineTree } from '../lib/api'
import { buildExplorerLocation, countTreeStats, findFolderPath, getFolderChildren, sortExplorerItems } from '../lib/tree'
import type { PipelineTreeInfo } from '../types/irispipe'

export function PipelineExplorerPage() {
  const { folderId } = useParams()
  const navigate = useNavigate()
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const numericFolderId = folderId ? Number(folderId) : null

  async function loadTree() {
    setLoading(true)
    setError(null)

    try {
      const response = await getPipelineTree()
      setTree(response)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline explorer'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadTree()
  }, [folderId])

  if (loading) {
    return (
      <div className="space-y-6">
        <PageToolbar eyebrow="Pipeline" title="Explorer" description="Navigate folders and pipeline definitions as a nested workspace explorer." />
        <LoadingState />
      </div>
    )
  }

  if (error || !tree) {
    return (
      <EmptyState
        icon={FolderTree}
        title="Pipeline explorer is unavailable"
        description={error ?? 'The folder tree could not be resolved from the backend.'}
        action={
          <button type="button" onClick={() => void loadTree()} className="btn btn-primary px-5">
            Retry
          </button>
        }
      />
    )
  }

  const current = getFolderChildren(tree, numericFolderId)
  const stats = countTreeStats(tree)
  const breadcrumb = numericFolderId ? findFolderPath(tree, numericFolderId) : []
  const folders = sortExplorerItems(current.folders, 'folderName')
  const pipelines = sortExplorerItems(current.pipelines, 'pipelineName')

  return (
    <div className="space-y-6">
      <PageToolbar
        eyebrow="Pipeline"
        title={current.folderPath === '/' ? 'Workspace explorer' : current.folderName}
        description="A nested folder-and-pipeline registry. Selecting a pipeline hands the whole surface over to that pipeline workspace."
        actions={
          <button type="button" onClick={() => void loadTree()} className="btn border-base-300 bg-base-100">
            <RefreshCw size={16} />
            Refresh
          </button>
        }
      />

      <div className="breadcrumbs rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm shadow-sm">
        <ul>
          <li>
            <Link to="/pipeline">Root</Link>
          </li>
          {breadcrumb.map((folder) => (
            <li key={folder.id}>
              <Link to={buildExplorerLocation(folder.id)}>{folder.folderName}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ExplorerSummary icon={Folder} label="Folders" value={stats.folderCount} description="Explorer hierarchy" />
        <ExplorerSummary icon={Layers3} label="Pipelines" value={stats.pipelineCount} description="Ready to execute" />
        <ExplorerSummary
          icon={FolderTree}
          label="Current path"
          value={folders.length + pipelines.length}
          description={`${current.folderPath} contains ${folders.length} folders and ${pipelines.length} pipelines`}
        />
      </div>

      <div className="card min-h-[34rem] rounded-box border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Explorer contents</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">{current.folderPath}</h2>
          </div>
          {numericFolderId ? (
            <button type="button" className="btn btn-ghost px-4" onClick={() => navigate(-1)}>
              Back
            </button>
          ) : null}
        </div>

        {folders.length === 0 && pipelines.length === 0 ? (
            <div className="flex min-h-72 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40">
            <div className="text-center">
              <div className="text-lg font-medium">This folder is empty</div>
              <div className="mt-2 text-sm text-base-content/55">
                The backend registry has no child folders or pipelines at this level yet.
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {folders.map((folder) => (
              <Link
                key={folder.id}
                to={buildExplorerLocation(folder.id)}
                className="flex items-center justify-between rounded-box border border-base-300 bg-base-100 px-5 py-4 transition-colors hover:bg-base-200"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-box bg-warning/10 text-warning">
                    <Folder size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold">{folder.folderName}</div>
                    <div className="truncate text-sm text-base-content/55">{folder.folderPath}</div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-base-content/35" />
              </Link>
            ))}

            {pipelines.map((pipeline) => (
              <Link
                key={pipeline.id}
                to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                className="flex items-center justify-between rounded-box border border-base-300 bg-base-100 px-5 py-4 transition-colors hover:bg-base-200"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-box bg-primary/10 text-primary">
                    <FileJson2 size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold">{pipeline.pipelineName}</div>
                    <div className="truncate text-sm text-base-content/55">{pipeline.folderPath}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-base-content/50">
                  <span>Open pipeline</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

function ExplorerSummary({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: typeof Folder
  label: string
  value: number
  description: string
}) {
  return (
    <div className="stats rounded-box border border-base-300 bg-base-100 shadow-sm">
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
