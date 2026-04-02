import {
  ChevronDown,
  ChevronRight,
  FileJson2,
  FileUp,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderTree,
  PencilLine,
  PlayCircle,
  RefreshCw,
  Settings2,
  Trash2,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PipelineImportDialog } from '../components/PipelineImportDialog'
import {
  createFolder,
  deleteFolder,
  deletePipelineConfig,
  getApiErrorMessage,
  getFolderDeletePreview,
  getPipelineTree,
  importPipelineConfig,
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
  const navigate = useNavigate()
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
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
  const [importDialogOpen, setImportDialogOpen] = useState(false)
  const [importSubmitting, setImportSubmitting] = useState(false)
  const [importError, setImportError] = useState<string | null>(null)
  const [expandedFolders, setExpandedFolders] = useState<Set<number>>(new Set())
  const numericFolderId = folderId ? Number(folderId) : null

  async function loadTree(options?: { initial?: boolean }) {
    const initial = options?.initial ?? tree == null
    if (initial) { setLoading(true); setError(null) }
    else setRefreshing(true)
    try {
      const response = await getPipelineTree()
      setTree(response)
      setActionError(null)
    } catch (loadError) {
      const message = getApiErrorMessage(loadError, 'Failed to load pipeline explorer')
      if (initial || tree == null) setError(message)
      else setActionError(message)
    } finally {
      if (initial) setLoading(false)
      else setRefreshing(false)
    }
  }

  useEffect(() => {
    if (!tree) void loadTree({ initial: true })
  }, [tree])

  // Auto-expand path to current folder
  useEffect(() => {
    if (!tree || !numericFolderId) return
    const path = findFolderPath(tree, numericFolderId)
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      path.forEach((f) => next.add(f.id))
      next.add(numericFolderId)
      return next
    })
  }, [tree, numericFolderId])

  if (loading) return <div className="p-12"><LoadingState /></div>

  if (error || !tree) {
    return (
      <EmptyState
        icon={FolderTree}
        title="Pipeline explorer is unavailable"
        description={error ?? 'The folder tree could not be resolved from the backend.'}
        action={
          <button type="button" onClick={() => void loadTree({ initial: true })} className="btn btn-primary px-5">
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
    if (!folderName) { setActionError('Folder name can not be blank'); return false }
    setCreateFolderSubmitting(true); setActionError(null)
    try {
      await createFolder({ parentFolderId: numericFolderId ?? null, folderName })
      setFolderNameDraft('')
      await loadTree({ initial: false })
      return true
    } catch (createError) { setActionError(getApiErrorMessage(createError, 'Failed to create folder')); return false }
    finally { setCreateFolderSubmitting(false) }
  }

  async function handleRenameFolder() {
    if (!renamingFolder) return false
    const folderName = folderNameDraft.trim()
    if (!folderName) { setActionError('Folder name can not be blank'); return false }
    setRenameSubmitting(true); setActionError(null)
    try {
      await updateFolder(renamingFolder.id, { parentFolderId: numericFolderId ?? null, folderName })
      setRenamingFolder(null); setFolderNameDraft('')
      await loadTree({ initial: false })
      return true
    } catch (renameError) { setActionError(getApiErrorMessage(renameError, 'Failed to rename folder')); return false }
    finally { setRenameSubmitting(false) }
  }

  async function openDeleteFolder(folder: FolderTreeNodeInfo) {
    setDeleteFolderTarget(folder); setDeleteFolderPreview(null); setDeleteFolderPreviewLoading(true); setActionError(null)
    try {
      const preview = await getFolderDeletePreview(folder.id)
      setDeleteFolderPreview(preview)
    } catch (previewError) { setActionError(getApiErrorMessage(previewError, 'Failed to load folder delete preview')) }
    finally { setDeleteFolderPreviewLoading(false) }
  }

  async function handleDeleteFolder() {
    if (!deleteFolderTarget || !deleteFolderPreview) return
    setDeleteFolderSubmitting(true); setActionError(null)
    try {
      const recursive = deleteFolderPreview.folderCount > 1 || deleteFolderPreview.pipelineCount > 0
      await deleteFolder(deleteFolderTarget.id, recursive)
      setDeleteFolderTarget(null); setDeleteFolderPreview(null)
      await loadTree({ initial: false })
    } catch (deleteError) { setActionError(getApiErrorMessage(deleteError, 'Failed to delete folder')) }
    finally { setDeleteFolderSubmitting(false) }
  }

  async function handleDeletePipeline() {
    if (!deletePipelineTarget) return
    setDeletePipelineSubmitting(true); setActionError(null)
    try {
      await deletePipelineConfig(deletePipelineTarget.id)
      setDeletePipelineTarget(null)
      await loadTree({ initial: false })
    } catch (deleteError) { setActionError(getApiErrorMessage(deleteError, 'Failed to delete pipeline')) }
    finally { setDeletePipelineSubmitting(false) }
  }

  async function handleImportPipeline(payload: { pipelineName: string; file: File; format?: string }) {
    setImportSubmitting(true); setImportError(null); setActionError(null)
    try {
      const imported = await importPipelineConfig({ folderId: numericFolderId, pipelineName: payload.pipelineName, file: payload.file, format: payload.format })
      await loadTree({ initial: false })
      setImportDialogOpen(false)
      navigate(`/pipeline/items/${imported.id}/config${imported.folderId ? `?folderId=${imported.folderId}` : ''}`)
    } catch (importLoadError) { setImportError(getApiErrorMessage(importLoadError, 'Failed to import pipeline config')) }
    finally { setImportSubmitting(false) }
  }

  function toggleFolder(id: number) {
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex h-full min-h-0 overflow-hidden bg-base-100">
      {/* ── Left: Tree Sidebar ── */}
      <aside className="flex w-[240px] shrink-0 flex-col border-r border-base-300 bg-base-200/30 overflow-hidden">
        <div className="flex items-center justify-between border-b border-base-300 px-4 py-3">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-base-content/35">Workspace</span>
          <button
            type="button"
            className="btn btn-ghost btn-xs btn-square"
            onClick={() => void loadTree({ initial: false })}
            aria-label="Refresh"
          >
            <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {/* Root */}
          <Link
            to="/pipeline"
            className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
              !numericFolderId ? 'bg-primary/10 text-primary font-semibold' : 'text-base-content/60 hover:bg-base-200 hover:text-base-content'
            }`}
          >
            <FolderTree size={14} className="shrink-0" />
            <span className="truncate">Root</span>
            <span className="ml-auto text-[10px] text-base-content/30">
              {tree.folders.length + tree.pipelines.length}
            </span>
          </Link>

          {/* Folder tree */}
          {tree.folders.map((folder) => (
            <FolderTreeItem
              key={folder.id}
              folder={folder}
              depth={0}
              currentFolderId={numericFolderId}
              expandedFolders={expandedFolders}
              onToggle={toggleFolder}
            />
          ))}
        </nav>

        {/* Sidebar actions */}
        <div className="shrink-0 border-t border-base-300 p-3 space-y-1">
          <button
            type="button"
            className="btn btn-ghost btn-xs w-full justify-start gap-2 text-base-content/55"
            onClick={() => { setCreateFolderOpen(true); setFolderNameDraft(''); setActionError(null) }}
          >
            <FolderPlus size={13} />
            New Folder
          </button>
          <Link
            to={`/pipeline/new/config${numericFolderId ? `?folderId=${numericFolderId}` : ''}`}
            className="btn btn-ghost btn-xs w-full justify-start gap-2 text-base-content/55"
          >
            <FileJson2 size={13} />
            New Pipeline
          </Link>
        </div>
      </aside>

      {/* ── Right: Main Content ── */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Content Toolbar */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-base-300 bg-base-100 px-6 py-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm min-w-0">
            <Link to="/pipeline" className="text-base-content/40 hover:text-primary transition-colors font-medium">
              Root
            </Link>
            {currentPath.map((folder) => (
              <span key={folder.id} className="flex items-center gap-1.5">
                <span className="text-base-content/20">/</span>
                <Link
                  to={buildExplorerLocation(folder.id)}
                  className="text-base-content/40 hover:text-primary transition-colors font-medium truncate"
                >
                  {folder.folderName}
                </Link>
              </span>
            ))}
            {currentPath.length > 0 && (
              <span className="flex items-center gap-1.5">
                <span className="text-base-content/20">/</span>
                <span className="font-semibold text-base-content truncate">
                  {currentPath[currentPath.length - 1]?.folderName}
                </span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="btn btn-ghost btn-sm gap-2 border-base-300"
              onClick={() => { setImportDialogOpen(true); setImportError(null); setActionError(null) }}
            >
              <FileUp size={14} />
              Import
            </button>
            <Link
              to={`/pipeline/new/config${numericFolderId ? `?folderId=${numericFolderId}` : ''}`}
              className="btn btn-primary btn-sm gap-2 px-4"
            >
              <FileJson2 size={14} />
              New Pipeline
            </Link>
          </div>
        </div>

        {/* Error banner */}
        {actionError && (
          <div className="shrink-0 border-b border-error/20 bg-error/5 px-6 py-2 text-sm text-error">
            {actionError}
          </div>
        )}

        {/* Content grid */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
          {folders.length === 0 && pipelines.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-base-300 bg-base-200/20">
              <FolderTree size={40} className="text-base-content/10 mb-4" />
              <div className="text-base font-semibold">Empty directory</div>
              <div className="mt-1 text-sm text-base-content/40">
                Create a folder or new pipeline to get started.
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Folders */}
              {folders.length > 0 && (
                <div>
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-base-content/30">
                    Directories ({folders.length})
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {folders.map((folder) => (
                      <FolderCard
                        key={folder.id}
                        folder={folder}
                        onRename={() => { setRenamingFolder(folder); setFolderNameDraft(folder.folderName); setActionError(null) }}
                        onDelete={() => void openDeleteFolder(folder)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Pipelines */}
              {pipelines.length > 0 && (
                <div>
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-base-content/30">
                    Pipeline Definitions ({pipelines.length})
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {pipelines.map((pipeline) => (
                      <PipelineCard
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
      </div>

      {/* ── Dialogs ── */}
      <NameDialog
        open={createFolderOpen}
        title="Create folder"
        label="Folder name"
        value={folderNameDraft}
        submitting={createFolderSubmitting}
        submitLabel={createFolderSubmitting ? 'Creating...' : 'Create folder'}
        onChange={setFolderNameDraft}
        onClose={() => { setCreateFolderOpen(false); setFolderNameDraft('') }}
        onSubmit={async () => { const created = await handleCreateFolder(); if (created) setCreateFolderOpen(false) }}
      />

      <NameDialog
        open={Boolean(renamingFolder)}
        title="Rename folder"
        label="Folder name"
        value={folderNameDraft}
        submitting={renameSubmitting}
        submitLabel={renameSubmitting ? 'Saving...' : 'Save'}
        onChange={setFolderNameDraft}
        onClose={() => { setRenamingFolder(null); setFolderNameDraft('') }}
        onSubmit={async () => { const renamed = await handleRenameFolder(); if (renamed) setRenamingFolder(null) }}
      />

      <ConfirmDialog
        open={Boolean(deletePipelineTarget)}
        title="Delete pipeline"
        description={deletePipelineTarget ? `Delete ${deletePipelineTarget.pipelineName}. This cannot be undone.` : ''}
        confirmLabel={deletePipelineSubmitting ? 'Deleting...' : 'Delete pipeline'}
        confirmDisabled={deletePipelineSubmitting}
        onClose={() => setDeletePipelineTarget(null)}
        onConfirm={async () => { await handleDeletePipeline() }}
      />

      <ConfirmDialog
        open={Boolean(deleteFolderTarget)}
        title="Delete folder"
        description={renderDeleteFolderDescription(deleteFolderTarget, deleteFolderPreview, deleteFolderPreviewLoading)}
        confirmLabel={deleteFolderSubmitting ? 'Deleting...' : 'Delete folder'}
        confirmDisabled={deleteFolderPreviewLoading || deleteFolderSubmitting || deleteFolderPreview?.hasBlockers === true}
        warning={
          deleteFolderPreview?.hasBlockers
            ? `Delete is blocked. ${deleteFolderPreview.pipelinesWithRunHistory} pipeline(s) in this subtree have run history.`
            : undefined
        }
        onClose={() => { setDeleteFolderTarget(null); setDeleteFolderPreview(null) }}
        onConfirm={async () => { await handleDeleteFolder() }}
      />

      <PipelineImportDialog
        open={importDialogOpen}
        title="Import pipeline"
        description="Create a new pipeline definition from a JSON or YAML file."
        submitLabel="Import pipeline"
        initialPipelineName=""
        submitting={importSubmitting}
        error={importError}
        onClose={() => { setImportDialogOpen(false); setImportError(null) }}
        onSubmit={handleImportPipeline}
      />
    </div>
  )
}

// ─── Tree Sidebar Item ────────────────────────────────────────────────────────

function FolderTreeItem({
  folder,
  depth,
  currentFolderId,
  expandedFolders,
  onToggle,
}: {
  folder: FolderTreeNodeInfo
  depth: number
  currentFolderId: number | null
  expandedFolders: Set<number>
  onToggle: (id: number) => void
}) {
  const navigate = useNavigate()
  const isActive = currentFolderId === folder.id
  const isExpanded = expandedFolders.has(folder.id)
  const hasChildren = folder.folders.length > 0

  return (
    <div>
      <div
        className={`group flex items-center gap-1.5 py-1.5 pr-3 text-sm transition-colors cursor-pointer ${
          isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-base-content/55 hover:bg-base-200 hover:text-base-content'
        }`}
        style={{ paddingLeft: `${(depth + 1) * 12 + 4}px` }}
        onClick={() => {
          navigate(buildExplorerLocation(folder.id))
          onToggle(folder.id)
        }}
      >
        <button
          type="button"
          className="shrink-0 p-0.5"
          onClick={(e) => { e.stopPropagation(); onToggle(folder.id) }}
        >
          {hasChildren
            ? (isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />)
            : <span className="inline-block w-3" />
          }
        </button>
        {isActive ? (
          <FolderOpen size={13} className="shrink-0" />
        ) : (
          <Folder size={13} className="shrink-0" />
        )}
        <Link
          to={buildExplorerLocation(folder.id)}
          className="flex-1 min-w-0 truncate"
          onClick={(e) => e.stopPropagation()}
        >
          {folder.folderName}
        </Link>
        {folder.pipelines.length > 0 && (
          <span className="text-[10px] text-base-content/25 shrink-0">{folder.pipelines.length}</span>
        )}
      </div>

      {isExpanded && folder.folders.map((child) => (
        <FolderTreeItem
          key={child.id}
          folder={child}
          depth={depth + 1}
          currentFolderId={currentFolderId}
          expandedFolders={expandedFolders}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

// ─── Folder Card ─────────────────────────────────────────────────────────────

function FolderCard({
  folder,
  onRename,
  onDelete,
}: {
  folder: FolderTreeNodeInfo
  onRename: () => void
  onDelete: () => void
}) {
  return (
    <div className="iris-card iris-pipeline-card iris-folder-card group flex flex-col gap-3 bg-base-100 p-4 hover:shadow-sm transition-shadow">
      <Link to={buildExplorerLocation(folder.id)} className="flex items-start gap-3 min-w-0 flex-1">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-warning/10 text-warning transition-transform group-hover:scale-105">
          <Folder size={18} fill="currentColor" fillOpacity={0.15} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-bold text-base-content">{folder.folderName}</div>
          <div className="mt-1 text-[11px] text-base-content/40">
            {folder.folders.length > 0 && <span>{folder.folders.length} folders · </span>}
            {folder.pipelines.length} pipeline{folder.pipelines.length !== 1 ? 's' : ''}
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <button type="button" className="btn btn-ghost btn-xs btn-square" onClick={onRename} title="Rename">
          <PencilLine size={13} />
        </button>
        <button type="button" className="btn btn-ghost btn-xs btn-square text-error" onClick={onDelete} title="Delete">
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  )
}

// ─── Pipeline Card ────────────────────────────────────────────────────────────

function PipelineCard({
  pipeline,
  onDelete,
}: {
  pipeline: ConfigPipelineSummary
  onDelete: () => void
}) {
  return (
    <div className="iris-card iris-pipeline-card group flex flex-col gap-3 bg-base-100 p-4 hover:shadow-sm transition-shadow">
      <Link
        to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
        className="flex items-start gap-3 min-w-0 flex-1"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
          <FileJson2 size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-bold text-base-content">{pipeline.pipelineName}</div>
          <div className="mt-1 text-[11px] text-base-content/40 truncate">
            {pipeline.folderPath || 'Root'}
          </div>
        </div>
      </Link>

      {/* Quick action row - visible on hover */}
      <div className="flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex items-center gap-1">
          <Link
            to={`/pipeline/items/${pipeline.id}/config${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
            className="btn btn-ghost btn-xs gap-1"
            title="Open Config"
          >
            <Settings2 size={12} />
            Config
          </Link>
          <Link
            to={`/pipeline/items/${pipeline.id}/runs${pipeline.folderId ? `?folderId=${pipeline.folderId}` : ''}`}
            className="btn btn-ghost btn-xs gap-1"
            title="View Runs"
          >
            <PlayCircle size={12} />
            Runs
          </Link>
        </div>
        <button type="button" className="btn btn-ghost btn-xs btn-square text-error" onClick={onDelete} title="Delete">
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function renderDeleteFolderDescription(
  folder: FolderTreeNodeInfo | null,
  preview: FolderDeletePreviewInfo | null,
  loading: boolean,
) {
  if (!folder) return ''
  if (loading) return `Loading delete preview for ${folder.folderName}...`
  if (!preview) return `Delete ${folder.folderName}.`
  return `Delete ${preview.folderName}. This subtree contains ${preview.folderCount} folder(s) and ${preview.pipelineCount} pipeline(s).`
}

// ─── Dialogs ─────────────────────────────────────────────────────────────────

function NameDialog({
  open, title, label, value, submitting, submitLabel, onChange, onClose, onSubmit,
}: {
  open: boolean; title: string; label: string; value: string; submitting: boolean; submitLabel: string
  onChange: (value: string) => void; onClose: () => void; onSubmit: () => Promise<void>
}) {
  if (!open) return null
  return (
    <dialog open className="modal modal-open">
      <div className="modal-box p-0 overflow-hidden rounded-2xl border border-base-300 shadow-2xl max-w-sm">
        <div className="border-b border-base-300 bg-base-200/50 px-6 py-4">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">{title}</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="form-control">
            <label className="label py-0 mb-2" htmlFor="entity-name-input">
              <span className="label-text font-semibold text-base-content/60">{label}</span>
            </label>
            <input
              id="entity-name-input"
              type="text"
              className="input input-bordered w-full focus:border-primary"
              value={value}
              autoFocus
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') void onSubmit() }}
            />
          </div>
          <div className="modal-action mt-6">
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary px-8" onClick={() => void onSubmit()} disabled={submitting}>
              {submitLabel}
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-base-300/60 backdrop-blur-sm">
        <button type="button" onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}

function ConfirmDialog({
  open, title, description, confirmLabel, confirmDisabled = false, warning, onClose, onConfirm,
}: {
  open: boolean; title: string; description: string; confirmLabel: string
  confirmDisabled?: boolean; warning?: string; onClose: () => void; onConfirm: () => Promise<void>
}) {
  if (!open) return null
  return (
    <dialog open className="modal modal-open">
      <div className="modal-box p-0 overflow-hidden rounded-2xl border border-base-300 shadow-2xl max-w-sm">
        <div className="border-b border-error/20 bg-error/8 px-6 py-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-error">{title}</h3>
        </div>
        <div className="p-6">
          <p className="text-base font-medium leading-relaxed text-base-content/80">{description}</p>
          {warning && <div className="alert alert-warning mt-4 p-3 text-sm font-bold">{warning}</div>}
          <div className="modal-action mt-6">
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-error px-8" onClick={() => void onConfirm()} disabled={confirmDisabled}>
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-base-300/60 backdrop-blur-sm">
        <button type="button" onClick={onClose}>close</button>
      </form>
    </dialog>
  )
}
