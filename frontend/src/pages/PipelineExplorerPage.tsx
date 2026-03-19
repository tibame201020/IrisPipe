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
    <div className="flex h-full min-h-0 flex-col">
      <div className="card flex min-h-0 flex-1 rounded-box border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body flex min-h-0 flex-1 flex-col p-6">
          <div className="mb-5 flex shrink-0 items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
                Explorer contents
              </div>
              <div className="mt-2 breadcrumbs text-sm text-base-content/65">
                <ul>
                  <li>
                    <Link to="/pipeline" className="hover:text-base-content">
                      Root
                    </Link>
                  </li>
                  {currentPath.map((folder) => (
                    <li key={folder.id}>
                      <Link to={buildExplorerLocation(folder.id)} className="hover:text-base-content">
                        {folder.folderName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{current.folderName}</h2>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <button type="button" className="btn btn-ghost px-4" onClick={() => void loadTree()}>
                <RefreshCw size={16} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                type="button"
                className="btn btn-ghost px-4"
                onClick={() => {
                  setCreateFolderOpen(true)
                  setFolderNameDraft('')
                  setActionError(null)
                }}
              >
                <FolderPlus size={16} />
                <span className="hidden sm:inline">New folder</span>
              </button>
              <Link
                to={`/pipeline/new/config${numericFolderId ? `?folderId=${numericFolderId}` : ''}`}
                className="btn btn-primary px-4"
              >
                <FileJson2 size={16} />
                <span className="hidden sm:inline">New pipeline</span>
              </Link>
            </div>
          </div>

          {actionError ? <div className="alert alert-error mb-4 shrink-0">{actionError}</div> : null}

          {folders.length === 0 && pipelines.length === 0 ? (
            <div className="flex min-h-0 flex-1 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40">
              <div className="text-center">
                <div className="text-lg font-medium">This folder is empty</div>
                <div className="mt-2 text-sm text-base-content/55">
                  The backend registry has no child folders or pipelines at this level yet.
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-0 flex-1 overflow-y-auto pr-1">
              <div className="space-y-3">
                {folders.map((folder) => (
                  <div
                    key={folder.id}
                    className="flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-5 py-4 transition-colors hover:bg-base-200"
                  >
                    <Link to={buildExplorerLocation(folder.id)} className="flex min-w-0 flex-1 items-center gap-4">
                      <div className="flex size-11 items-center justify-center rounded-box bg-warning/10 text-warning">
                        <Folder size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold">{folder.folderName}</div>
                        <div className="truncate text-sm text-base-content/55">
                          {renderFolderSummary(folder.folders.length, folder.pipelines.length)}
                        </div>
                      </div>
                    </Link>
                    <div className="flex shrink-0 items-center gap-2">
                      <Link to={buildExplorerLocation(folder.id)} className="btn btn-ghost btn-sm px-3">
                        <FolderOpen size={15} />
                        <span className="hidden md:inline">Open</span>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm px-3"
                        onClick={() => {
                          setRenamingFolder(folder)
                          setFolderNameDraft(folder.folderName)
                          setActionError(null)
                        }}
                      >
                        <PencilLine size={15} />
                        <span className="hidden md:inline">Rename</span>
                      </button>
                      <button type="button" className="btn btn-ghost btn-sm px-3 text-error" onClick={() => void openDeleteFolder(folder)}>
                        <Trash2 size={15} />
                        <span className="hidden md:inline">Delete</span>
                      </button>
                    </div>
                  </div>
                ))}

                {pipelines.map((pipeline) => (
                  <div
                    key={pipeline.id}
                    className="flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-5 py-4 transition-colors hover:bg-base-200"
                  >
                    <Link
                      to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                      className="flex min-w-0 flex-1 items-center gap-4"
                    >
                      <div className="flex size-11 items-center justify-center rounded-box bg-primary/10 text-primary">
                        <FileJson2 size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold">{pipeline.pipelineName}</div>
                        <div className="truncate text-sm text-base-content/55">{pipeline.folderPath}</div>
                      </div>
                    </Link>
                    <div className="flex shrink-0 items-center gap-2">
                      <Link
                        to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
                        className="btn btn-ghost btn-sm px-3"
                      >
                        <PencilLine size={15} />
                        <span className="hidden md:inline">Edit</span>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm px-3 text-error"
                        onClick={() => setDeletePipelineTarget(pipeline)}
                      >
                        <Trash2 size={15} />
                        <span className="hidden md:inline">Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
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
      <div className="modal-box">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-4 space-y-2">
          <label className="text-sm font-medium" htmlFor="entity-name-input">
            {label}
          </label>
          <input
            id="entity-name-input"
            type="text"
            className="input input-bordered w-full"
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
        <div className="modal-action">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={() => void onSubmit()} disabled={submitting}>
            {submitLabel}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
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
      <div className="modal-box">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-base-content/70">{description}</p>
        {warning ? <div className="alert alert-warning mt-4">{warning}</div> : null}
        <div className="modal-action">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn btn-error" onClick={() => void onConfirm()} disabled={confirmDisabled}>
            {confirmLabel}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  )
}
