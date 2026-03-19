import {
  FileJson2,
  Folder,
  FolderPlus,
  FolderTree,
  FolderOpen,
  PencilLine,
  RefreshCw,
  Trash2,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import {
  createFolder,
  deleteFolder,
  deletePipelineConfig,
  getApiErrorMessage,
  getFolderDeletePreview,
  getPipelineTree,
  updateFolder,
} from '../lib/api'
import { buildExplorerLocation, findFolderPath, getFolderChildren, sortExplorerItems } from '../lib/tree'
import type {
  ConfigPipelineSummary,
  FolderDeletePreviewInfo,
  FolderTreeNodeInfo,
  PipelineTreeInfo,
} from '../types/irispipe'

export function PipelineExplorerPage() {
  const { folderId } = useParams()
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [actionError, setActionError] = useState<string | null>(null)
  const [folderNameDraft, setFolderNameDraft] = useState('')
  const [createFolderOpen, setCreateFolderOpen] = useState(false)
  const [createFolderSubmitting, setCreateFolderSubmitting] = useState(false)
  const [renamingFolder, setRenamingFolder] = useState<FolderTreeNodeInfo | null>(null)
  const [renameSubmitting, setRenameSubmitting] = useState(false)
  const [deleteFolderTarget, setDeleteFolderTarget] = useState<FolderTreeNodeInfo | null>(null)
  const [deleteFolderPreview, setDeleteFolderPreview] = useState<FolderDeletePreviewInfo | null>(null)
  const [deleteFolderPreviewLoading, setDeleteFolderPreviewLoading] = useState(false)
  const [deleteFolderSubmitting, setDeleteFolderSubmitting] = useState(false)
  const [deletePipelineTarget, setDeletePipelineTarget] = useState<ConfigPipelineSummary | null>(null)
  const [deletePipelineSubmitting, setDeletePipelineSubmitting] = useState(false)
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
  const currentPath = numericFolderId ? findFolderPath(tree, numericFolderId) : []
  const folders = sortExplorerItems(current.folders, 'folderName')
  const pipelines = sortExplorerItems(current.pipelines, 'pipelineName')

  async function handleCreateFolder() {
    const folderName = folderNameDraft.trim()
    if (!folderName) {
      setActionError('Folder name can not be blank')
      return false
    }

    setCreateFolderSubmitting(true)
    setActionError(null)
    try {
      await createFolder({
        parentFolderId: numericFolderId ?? null,
        folderName,
      })
      setFolderNameDraft('')
      await loadTree()
      return true
    } catch (createError) {
      setActionError(getApiErrorMessage(createError, 'Failed to create folder'))
      return false
    } finally {
      setCreateFolderSubmitting(false)
    }
  }

  async function handleRenameFolder() {
    if (!renamingFolder) {
      return false
    }

    const folderName = folderNameDraft.trim()
    if (!folderName) {
      setActionError('Folder name can not be blank')
      return false
    }

    setRenameSubmitting(true)
    setActionError(null)
    try {
      await updateFolder(renamingFolder.id, {
        parentFolderId: numericFolderId ?? null,
        folderName,
      })
      setRenamingFolder(null)
      setFolderNameDraft('')
      await loadTree()
      return true
    } catch (renameError) {
      setActionError(getApiErrorMessage(renameError, 'Failed to rename folder'))
      return false
    } finally {
      setRenameSubmitting(false)
    }
  }

  async function openDeleteFolder(folder: FolderTreeNodeInfo) {
    setDeleteFolderTarget(folder)
    setDeleteFolderPreview(null)
    setDeleteFolderPreviewLoading(true)
    setActionError(null)

    try {
      const preview = await getFolderDeletePreview(folder.id)
      setDeleteFolderPreview(preview)
    } catch (previewError) {
      setActionError(getApiErrorMessage(previewError, 'Failed to load folder delete preview'))
    } finally {
      setDeleteFolderPreviewLoading(false)
    }
  }

  async function handleDeleteFolder() {
    if (!deleteFolderTarget || !deleteFolderPreview) {
      return
    }

    setDeleteFolderSubmitting(true)
    setActionError(null)
    try {
      const recursive = deleteFolderPreview.folderCount > 1 || deleteFolderPreview.pipelineCount > 0
      await deleteFolder(deleteFolderTarget.id, recursive)
      setDeleteFolderTarget(null)
      setDeleteFolderPreview(null)
      await loadTree()
    } catch (deleteError) {
      setActionError(getApiErrorMessage(deleteError, 'Failed to delete folder'))
    } finally {
      setDeleteFolderSubmitting(false)
    }
  }

  async function handleDeletePipeline() {
    if (!deletePipelineTarget) {
      return
    }

    setDeletePipelineSubmitting(true)
    setActionError(null)
    try {
      await deletePipelineConfig(deletePipelineTarget.id)
      setDeletePipelineTarget(null)
      await loadTree()
    } catch (deleteError) {
      setActionError(getApiErrorMessage(deleteError, 'Failed to delete pipeline'))
    } finally {
      setDeletePipelineSubmitting(false)
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-base-200/50">
      <div className="flex shrink-0 flex-col border-b border-base-300 bg-base-100 px-8 py-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="iris-header">Explorer</div>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">Pipeline Explorer</h1>
            <div className="mt-3 breadcrumbs text-[13px] text-base-content/50">
              <ul className="flex items-center gap-1">
                <li>
                  <Link to="/pipeline" className="hover:text-primary transition-colors">Root</Link>
                </li>
                {currentPath.map((folder) => (
                  <li key={folder.id}>
                    <Link to={buildExplorerLocation(folder.id)} className="hover:text-primary transition-colors">
                      {folder.folderName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" className="btn btn-ghost btn-sm h-10 gap-2 border-base-300" onClick={() => void loadTree()}>
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <div className="h-6 w-px bg-base-300 mx-1" />
            <button
              type="button"
              className="btn btn-ghost btn-sm h-10 gap-2 border-base-300"
              onClick={() => {
                setCreateFolderOpen(true)
                setFolderNameDraft('')
                setActionError(null)
              }}
            >
              <FolderPlus size={14} />
              New Folder
            </button>
            <Link
              to={`/pipeline/new/config${numericFolderId ? `?folderId=${numericFolderId}` : ''}`}
              className="btn btn-primary btn-sm h-10 gap-2 px-5"
            >
              <FileJson2 size={14} />
              New Pipeline
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ExplorerStat label="Total Items" value={folders.length + pipelines.length} />
          <ExplorerStat label="Sub-folders" value={folders.length} />
          <ExplorerStat label="Pipelines Here" value={pipelines.length} />
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-8 py-8">
        {actionError ? <div className="alert alert-error mb-6 shadow-sm">{actionError}</div> : null}

        {folders.length === 0 && pipelines.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-base-300 bg-base-100/50">
            <div className="rounded-full bg-base-200 p-4 text-base-content/20">
              <FolderTree size={48} />
            </div>
            <div className="mt-4 text-lg font-semibold">This directory is empty</div>
            <div className="mt-1 text-sm text-base-content/50">Start by creating a new folder or pipeline config.</div>
          </div>
        ) : (
          <div className="grid gap-4">
            {folders.length > 0 && (
              <div className="mb-2">
                <div className="iris-header mb-4 px-1">Directories</div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {folders.map((folder) => (
                    <FolderItem 
                      key={folder.id} 
                      folder={folder} 
                      onRename={() => {
                        setRenamingFolder(folder)
                        setFolderNameDraft(folder.folderName)
                        setActionError(null)
                      }}
                      onDelete={() => void openDeleteFolder(folder)}
                    />
                  ))}
                </div>
              </div>
            )}

            {pipelines.length > 0 && (
              <div className="mt-4">
                <div className="iris-header mb-4 px-1">Pipeline Definitions</div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {pipelines.map((pipeline) => (
                    <PipelineItem 
                      key={pipeline.id} 
                      pipeline={pipeline} 
                      onDelete={() => setDeletePipelineTarget(pipeline)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <NameDialog
        open={createFolderOpen}
        title="Create folder"
        label="Folder name"
        value={folderNameDraft}
        submitting={createFolderSubmitting}
        submitLabel={createFolderSubmitting ? 'Creating...' : 'Create folder'}
        onChange={setFolderNameDraft}
        onClose={() => {
          setCreateFolderOpen(false)
          setFolderNameDraft('')
        }}
        onSubmit={async () => {
          const created = await handleCreateFolder()
          if (created) {
            setCreateFolderOpen(false)
          }
        }}
      />

      <NameDialog
        open={Boolean(renamingFolder)}
        title="Rename folder"
        label="Folder name"
        value={folderNameDraft}
        submitting={renameSubmitting}
        submitLabel={renameSubmitting ? 'Saving...' : 'Save'}
        onChange={setFolderNameDraft}
        onClose={() => {
          setRenamingFolder(null)
          setFolderNameDraft('')
        }}
        onSubmit={async () => {
          const renamed = await handleRenameFolder()
          if (renamed) {
            setRenamingFolder(null)
          }
        }}
      />

      <ConfirmDialog
        open={Boolean(deletePipelineTarget)}
        title="Delete pipeline"
        description={
          deletePipelineTarget
            ? `Delete ${deletePipelineTarget.pipelineName}. This cannot be undone from the explorer.`
            : ''
        }
        confirmLabel={deletePipelineSubmitting ? 'Deleting...' : 'Delete pipeline'}
        confirmDisabled={deletePipelineSubmitting}
        onClose={() => setDeletePipelineTarget(null)}
        onConfirm={async () => {
          await handleDeletePipeline()
        }}
      />

      <ConfirmDialog
        open={Boolean(deleteFolderTarget)}
        title="Delete folder"
        description={renderDeleteFolderDescription(deleteFolderTarget, deleteFolderPreview, deleteFolderPreviewLoading)}
        confirmLabel={deleteFolderSubmitting ? 'Deleting...' : 'Delete folder'}
        confirmDisabled={
          deleteFolderPreviewLoading || deleteFolderSubmitting || deleteFolderPreview?.hasBlockers === true
        }
        warning={
          deleteFolderPreview?.hasBlockers
            ? `Delete is blocked. ${deleteFolderPreview.pipelinesWithRunHistory} pipeline(s) in this subtree have run history.`
            : undefined
        }
        onClose={() => {
          setDeleteFolderTarget(null)
          setDeleteFolderPreview(null)
        }}
        onConfirm={async () => {
          await handleDeleteFolder()
        }}
      />
    </div>
  )
}

function renderFolderSummary(folderCount: number, pipelineCount: number) {
  const folderLabel = folderCount === 1 ? 'folder' : 'folders'
  const pipelineLabel = pipelineCount === 1 ? 'pipeline' : 'pipelines'

  return `${folderCount} ${folderLabel} / ${pipelineCount} ${pipelineLabel}`
}

function ExplorerStat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="iris-card px-5 py-4">
      <div className="iris-header">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  )
}

function FolderItem({ 
  folder, 
  onRename, 
  onDelete 
}: { 
  folder: FolderTreeNodeInfo; 
  onRename: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="iris-card group flex items-center justify-between p-4 bg-base-100">
      <Link to={buildExplorerLocation(folder.id)} className="flex min-w-0 flex-1 items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-warning/10 text-warning transition-transform group-hover:scale-110">
          <Folder size={20} fill="currentColor" fillOpacity={0.2} />
        </div>
        <div className="min-w-0">
          <div className="truncate text-base font-bold text-base-content">{folder.folderName}</div>
          <div className="mt-0.5 truncate text-[12px] font-medium text-base-content/40">
            {renderFolderSummary(folder.folders.length, folder.pipelines.length)}
          </div>
        </div>
      </Link>
      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <button type="button" className="btn btn-ghost btn-sm btn-square" onClick={onRename}>
          <PencilLine size={14} />
        </button>
        <button type="button" className="btn btn-ghost btn-sm btn-square text-error" onClick={onDelete}>
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  )
}

function PipelineItem({ 
  pipeline, 
  onDelete 
}: { 
  pipeline: ConfigPipelineSummary;
  onDelete: () => void;
}) {
  return (
    <div className="iris-card group flex items-center justify-between p-4 bg-base-100 border-primary/10">
      <Link 
        to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`} 
        className="flex min-w-0 flex-1 items-center gap-4"
      >
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
          <FileJson2 size={20} />
        </div>
        <div className="min-w-0">
          <div className="truncate text-base font-bold text-base-content">{pipeline.pipelineName}</div>
          <div className="mt-0.5 truncate text-[12px] font-medium text-base-content/40">
            Pipeline definition
          </div>
        </div>
      </Link>
      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Link 
          to={`/pipeline/items/${pipeline.id}/runs${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
          className="btn btn-ghost btn-sm btn-square"
        >
          <FolderOpen size={14} />
        </Link>
        <button type="button" className="btn btn-ghost btn-sm btn-square text-error" onClick={onDelete}>
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  )
}

function renderDeleteFolderDescription(
  folder: FolderTreeNodeInfo | null,
  preview: FolderDeletePreviewInfo | null,
  loading: boolean,
) {
  if (!folder) {
    return ''
  }

  if (loading) {
    return `Loading delete preview for ${folder.folderName}...`
  }

  if (!preview) {
    return `Delete ${folder.folderName}.`
  }

  return `Delete ${preview.folderName}. This subtree contains ${preview.folderCount} folder(s) and ${preview.pipelineCount} pipeline(s).`
}

interface NameDialogProps {
  open: boolean
  title: string
  label: string
  value: string
  submitting: boolean
  submitLabel: string
  onChange: (value: string) => void
  onClose: () => void
  onSubmit: () => Promise<void>
}

function NameDialog({ open, title, label, value, submitting, submitLabel, onChange, onClose, onSubmit }: NameDialogProps) {
  if (!open) {
    return null
  }

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box p-0 overflow-hidden rounded-2xl border border-base-300 shadow-2xl">
        <div className="bg-base-200 px-6 py-4 border-b border-base-300">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">{title}</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="form-control">
              <label className="label py-0 mb-2" htmlFor="entity-name-input">
                <span className="label-text font-bold text-base-content/60">{label}</span>
              </label>
              <input
                id="entity-name-input"
                type="text"
                className="input input-bordered w-full font-bold focus:border-primary"
                value={value}
                autoFocus
                onChange={(event) => onChange(event.target.value)}
              />
            </div>
          </div>
          <div className="modal-action mt-8">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary px-8" onClick={() => void onSubmit()} disabled={submitting}>
              {submitLabel}
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-base-300/60 backdrop-blur-sm">
        <button type="button" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  )
}

interface ConfirmDialogProps {
  open: boolean
  title: string
  description: string
  confirmLabel: string
  confirmDisabled?: boolean
  warning?: string
  onClose: () => void
  onConfirm: () => Promise<void>
}

function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  confirmDisabled = false,
  warning,
  onClose,
  onConfirm,
}: ConfirmDialogProps) {
  if (!open) {
    return null
  }

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box p-0 overflow-hidden rounded-2xl border border-base-300 shadow-2xl">
        <div className="bg-error/10 px-6 py-4 border-b border-error/20">
          <h3 className="text-sm font-bold uppercase tracking-widest text-error">{title}</h3>
        </div>
        <div className="p-6">
          <p className="text-base font-medium leading-relaxed text-base-content/80">{description}</p>
          {warning ? <div className="alert alert-warning mt-4 p-3 text-sm font-bold">{warning}</div> : null}
          <div className="modal-action mt-8">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-error px-8" onClick={() => void onConfirm()} disabled={confirmDisabled}>
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-base-300/60 backdrop-blur-sm">
        <button type="button" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  )
}
