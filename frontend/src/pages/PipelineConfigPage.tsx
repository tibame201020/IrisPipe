import { ArrowDown, ArrowUp, FileUp, Link2, Plus, Save, Server, Trash2, Waypoints } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { ArrowLeft, ArrowRight, Pencil, X } from 'lucide-react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { SqlEditor } from '../components/SqlEditor'
import { PipelineImportDialog } from '../components/PipelineImportDialog'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import {
  createPipelineConfig,
  getApiErrorMessage,
  getDriverPresets,
  getPipelineConfig,
  importIntoPipelineConfig,
  importPipelineConfig,
  listConnections,
  testConnection,
  updatePipelineConfig,
  type ConnectionDTO,
  type DriverPreset,
} from '../lib/api'
import {
  countDraftJobs,
  createBlankConnection,
  createBlankJob,
  createBlankParameter,
  createBlankStage,
  createBlankStep,
  collectPipelineDraftIssues,
  draftToPayload,
  pipelineToDraft,
  type DraftValidationField,
  type EditableJob,
  type EditableParameter,
  type EditableStage,
  type EditableStep,
  type PipelineDraft,
} from '../lib/pipeline-draft'
import {
  buildDraftReadinessSummary as buildConfigReadinessSummary,
  getJobSemanticSummary as getConfigJobSemanticSummary,
  getStageSemanticSummary as getConfigStageSemanticSummary,
  summarizeDraftValidation as summarizeConfigDraftValidation,
} from '../lib/pipeline-config-semantics'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'
import type { ExecutionType } from '../types/irispipe'

type SelectedItem =
  | { kind: 'stage'; stageEditorId: string }
  | { kind: 'job'; stageEditorId: string; jobEditorId: string }

type EditingJobTarget = { stageEditorId: string; jobEditorId: string }

function buildStepSummary(job: { executions: Array<{ type?: string; name?: string | null }> }): string {
  const count = job.executions.length
  if (count === 0) return 'No steps'
  const types = [...new Set(job.executions.map((s) => s.type ?? 'EXECUTE'))].slice(0, 3).join(' | ')
  return `${count} step${count === 1 ? '' : 's'} | ${types}`
}

export function PipelineConfigPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const workspace = useOutletContext<PipelineWorkspaceContext | undefined>()

  const [draft, setDraft] = useState<PipelineDraft | null>(null)
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null)
  const [editingJobTarget, setEditingJobTarget] = useState<EditingJobTarget | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [importDialogOpen, setImportDialogOpen] = useState(false)
  const [importSubmitting, setImportSubmitting] = useState(false)
  const [importError, setImportError] = useState<string | null>(null)

  const numericPipelineId = Number(pipelineId)
  const createMode = !Number.isFinite(numericPipelineId)
  const folderId = searchParams.get('folderId')
  const targetFolderId = folderId ? Number(folderId) : null

  useEffect(() => {
    let active = true

    async function load() {
      if (createMode) {
        const nextDraft: PipelineDraft = {
          folderId: Number.isFinite(targetFolderId) ? targetFolderId : null,
          pipelineName: '',
          stages: [createBlankStage(0)],
        }

        if (!active) return
        setDraft(nextDraft)
        setSelectedItem({ kind: 'stage', stageEditorId: nextDraft.stages[0].editorId })
        setError(null)
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      try {
        const pipelineResponse =
          workspace?.pipeline?.id === numericPipelineId
            ? workspace.pipeline
            : await getPipelineConfig(numericPipelineId)

        if (!active) return

        const nextDraft = pipelineToDraft(pipelineResponse)
        setDraft(nextDraft)

        const firstStage = nextDraft.stages[0]
        setSelectedItem(firstStage ? { kind: 'stage', stageEditorId: firstStage.editorId } : null)
      } catch (loadError) {
        if (!active) return
        setError(getApiErrorMessage(loadError, 'Failed to load pipeline config'))
      } finally {
        if (active) setLoading(false)
      }
    }

    void load()

    return () => {
      active = false
    }
  }, [createMode, numericPipelineId, targetFolderId, workspace?.pipeline])

  const selectedStage = useMemo(() => {
    if (!draft || !selectedItem) return null
    return draft.stages.find((candidate) => candidate.editorId === selectedItem.stageEditorId) ?? null
  }, [draft, selectedItem])

  const selectedJob = useMemo(() => {
    if (!selectedStage || !selectedItem || selectedItem.kind !== 'job') return null
    return selectedStage.jobs.find((candidate) => candidate.editorId === selectedItem.jobEditorId) ?? null
  }, [selectedItem, selectedStage])

  const editingStage = useMemo(() => {
    if (!draft || !editingJobTarget) return null
    return draft.stages.find((candidate) => candidate.editorId === editingJobTarget.stageEditorId) ?? null
  }, [draft, editingJobTarget])

  const editingJob = useMemo(() => {
    if (!editingStage || !editingJobTarget) return null
    return editingStage.jobs.find((candidate) => candidate.editorId === editingJobTarget.jobEditorId) ?? null
  }, [editingStage, editingJobTarget])

  useEffect(() => {
    if (!editingJobTarget) return
    if (!editingStage || !editingJob) {
      setEditingJobTarget(null)
    }
  }, [editingJob, editingJobTarget, editingStage])

  const validationIssues = useMemo(() => (draft ? collectPipelineDraftIssues(draft) : []), [draft])
  const issues = useMemo(() => validationIssues.map((issue) => issue.message), [validationIssues])
  const draftJobCount = countDraftJobs(draft)
  const validationSummary = useMemo(() => summarizeConfigDraftValidation(validationIssues), [validationIssues])
  const draftReadiness = useMemo(() => (draft ? buildConfigReadinessSummary(draft, validationSummary) : null), [draft, validationSummary])

  useEffect(() => {
    if (selectedItem?.kind !== 'stage') return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  // Ctrl+S / Cmd+S ??save
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault()
        void handleSave()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [draft, saving])

  const stageLanes = useMemo<StageLaneData[]>(() => {
    if (!draft) return []
    return draft.stages.map((stage, stageIndex) => {
      const stageSemantic = getConfigStageSemanticSummary(stage, validationSummary)
      return {
        id: stage.editorId,
        title: stage.stageName || `stage${stageIndex + 1}`,
        selected: selectedStage?.editorId === stage.editorId && selectedItem?.kind === 'stage',
        onClick: () => setSelectedItem({ kind: 'stage', stageEditorId: stage.editorId }),
        summary: stageSemantic.summary,
        issuesCount: stageSemantic.issueCount,
        toolbar: (
        <>
          <button
            type="button"
            className="btn btn-ghost btn-xs"
            title="Add stage to the right"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              insertStageAfter(stage.editorId)
            }}
          >
            <Plus size={13} />
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-xs"
            title="Add job"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              updateStage(stage.editorId, (currentStage) => {
                const nextJob = createBlankJob(currentStage.jobs.length)
                openJobEditor(stage.editorId, nextJob.editorId)
                return {
                  ...currentStage,
                  jobs: [...currentStage.jobs, nextJob],
                }
              })
            }}
          >
            <Plus size={13} />
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-xs text-error"
            title="Delete stage"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              removeStageById(stage.editorId)
            }}
          >
            <Trash2 size={13} />
          </button>
        </>
        ),
        jobs: stage.jobs.map((job) => {
          const jobSemantic = getConfigJobSemanticSummary(job, validationSummary)
          const validationStatus: 'ok' | 'warning' | 'error' =
            jobSemantic.state === 'error' ? 'error' : jobSemantic.state === 'warning' ? 'warning' : 'ok'

          return ({
          id: job.editorId,
          title: job.jobName || 'Untitled job',
          selected: selectedJob?.editorId === job.editorId,
          onClick: () => setSelectedItem({ kind: 'job', stageEditorId: stage.editorId, jobEditorId: job.editorId }),
          onDoubleClick: () => openJobEditor(stage.editorId, job.editorId),
          issuesCount: jobSemantic.issueCount,
          validationStatus,
          subtitle: jobSemantic.connectionSummary,
          stepSummary: buildStepSummary(job),
          badges: [`${job.setting.atomicLevel ?? 'JOB'}`],
          toolbar: (
          <>
            <button
              type="button"
              className="btn btn-ghost btn-xs"
              title="Edit job"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                openJobEditor(stage.editorId, job.editorId)
              }}
            >
              <Pencil size={13} />
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-xs text-error"
              title="Delete job"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                removeJobFromStage(stage.editorId, job.editorId)
              }}
            >
              <Trash2 size={13} />
            </button>
          </>
          ),
        })}),
      }
    })
  }, [
    draft,
    openJobEditor,
    removeJobFromStage,
    removeStageById,
    selectedItem?.kind,
    selectedStage?.editorId,
    selectedJob?.editorId,
    insertStageAfter,
  ])

  function updateDraft(recipe: (current: PipelineDraft) => PipelineDraft) {
    setDraft((current) => (current ? recipe(current) : current))
    workspace?.setDirty(true)
  }

  function insertStageAfter(stageEditorId?: string) {
    let nextStageId: string | null = null

    updateDraft((current) => {
      const insertIndex =
        stageEditorId == null
          ? current.stages.length
          : (() => {
              const currentIndex = current.stages.findIndex((stage) => stage.editorId === stageEditorId)
              return currentIndex < 0 ? current.stages.length : currentIndex + 1
            })()

      const nextStage = createBlankStage(insertIndex)
      nextStageId = nextStage.editorId
      const nextStages = [...current.stages]
      nextStages.splice(insertIndex, 0, nextStage)

      return {
        ...current,
        stages: nextStages,
      }
    })

    if (nextStageId) {
      setSelectedItem({ kind: 'stage', stageEditorId: nextStageId })
    }
  }

  function removeStageById(stageEditorId: string) {
    let nextSelectedStageId: string | null = null

    updateDraft((current) => {
      const currentIndex = current.stages.findIndex((stage) => stage.editorId === stageEditorId)
      if (currentIndex < 0) return current

      const remainingStages = current.stages.filter((stage) => stage.editorId !== stageEditorId)
      const nextStages = remainingStages.length > 0 ? remainingStages : [createBlankStage(0)]
      const preferredStage = remainingStages[currentIndex] ?? remainingStages[currentIndex - 1] ?? nextStages[0]
      nextSelectedStageId = preferredStage?.editorId ?? null

      return {
        ...current,
        stages: nextStages,
      }
    })

    setEditingJobTarget((current) => (current?.stageEditorId === stageEditorId ? null : current))
    if (nextSelectedStageId) {
      setSelectedItem({ kind: 'stage', stageEditorId: nextSelectedStageId })
    } else {
      setSelectedItem(null)
    }
  }

  function openJobEditor(stageEditorId: string, jobEditorId: string) {
    setSelectedItem({ kind: 'job', stageEditorId, jobEditorId })
    setEditingJobTarget({ stageEditorId, jobEditorId })
  }

  function updateStage(stageEditorId: string, recipe: (stage: EditableStage) => EditableStage) {
    updateDraft((current) => ({
      ...current,
      stages: current.stages.map((stage) => (stage.editorId === stageEditorId ? recipe(stage) : stage)),
    }))
  }

  function updateJob(stageEditorId: string, jobEditorId: string, recipe: (job: EditableJob) => EditableJob) {
    updateStage(stageEditorId, (stage) => ({
      ...stage,
      jobs: stage.jobs.map((job) => (job.editorId === jobEditorId ? recipe(job) : job)),
    }))
  }

  function updateStep(
    stageEditorId: string,
    jobEditorId: string,
    stepEditorId: string,
    recipe: (step: EditableStep) => EditableStep,
  ) {
    updateJob(stageEditorId, jobEditorId, (job) => ({
      ...job,
      executions: job.executions.map((step) => (step.editorId === stepEditorId ? recipe(step) : step)),
    }))
  }

  function updateParameter(
    stageEditorId: string,
    jobEditorId: string,
    stepEditorId: string,
    parameterEditorId: string,
    recipe: (parameter: EditableParameter) => EditableParameter,
  ) {
    updateStep(stageEditorId, jobEditorId, stepEditorId, (step) => ({
      ...step,
      parameters: step.parameters.map((parameter) =>
        parameter.editorId === parameterEditorId ? recipe(parameter) : parameter,
      ),
    }))
  }

  function moveJobById(draggedJobId: string, sourceStageId: string, targetStageId: string, targetJobId?: string) {
    updateDraft((current) => {
      const sourceStageIndex = current.stages.findIndex((stage) => stage.editorId === sourceStageId)
      const targetStageIndex = current.stages.findIndex((stage) => stage.editorId === targetStageId)
      if (sourceStageIndex < 0 || targetStageIndex < 0) return current

      const sourceStage = current.stages[sourceStageIndex]
      const draggedJobIndex = sourceStage.jobs.findIndex((job) => job.editorId === draggedJobId)
      if (draggedJobIndex < 0) return current

      if (sourceStageId === targetStageId && (!targetJobId || targetJobId === draggedJobId)) {
        return current
      }

      const draggedJob = sourceStage.jobs[draggedJobIndex]
      const nextStages = current.stages.map((stage) => ({
        ...stage,
        jobs: [...stage.jobs],
      }))

      nextStages[sourceStageIndex].jobs.splice(draggedJobIndex, 1)

      const targetJobs = nextStages[targetStageIndex].jobs
      const targetIndex =
        targetJobId == null ? targetJobs.length : targetJobs.findIndex((job) => job.editorId === targetJobId)

      if (targetIndex < 0) {
        targetJobs.push(draggedJob)
      } else {
        targetJobs.splice(targetIndex, 0, draggedJob)
      }

      setSelectedItem({ kind: 'job', stageEditorId: targetStageId, jobEditorId: draggedJobId })

      return {
        ...current,
        stages: nextStages,
      }
    })
  }

  function moveJobToStage(stageEditorId: string, jobEditorId: string, targetStageId: string) {
    updateDraft((current) => {
      if (targetStageId === stageEditorId) return current
      const sourceStage = current.stages.find((stage) => stage.editorId === stageEditorId)
      const movedJob = sourceStage?.jobs.find((job) => job.editorId === jobEditorId)
      if (!sourceStage || !movedJob) return current

      const nextStages = current.stages.map((stage) => {
        if (stage.editorId === stageEditorId) {
          return {
            ...stage,
            jobs: stage.jobs.filter((job) => job.editorId !== jobEditorId),
          }
        }
        if (stage.editorId === targetStageId) {
          return {
            ...stage,
            jobs: [...stage.jobs, movedJob],
          }
        }
        return stage
      })

      setSelectedItem({ kind: 'job', stageEditorId: targetStageId, jobEditorId })
      setEditingJobTarget({ stageEditorId: targetStageId, jobEditorId })
      return {
        ...current,
        stages: nextStages,
      }
    })
  }

  function removeJobFromStage(stageEditorId: string, jobEditorId: string) {
    updateStage(stageEditorId, (stage) => ({
      ...stage,
      jobs: stage.jobs.filter((job) => job.editorId !== jobEditorId),
    }))
    setEditingJobTarget((current) => (current?.jobEditorId === jobEditorId ? null : current))
    setSelectedItem({ kind: 'stage', stageEditorId })
  }

  function addStepToJob(stageEditorId: string, jobEditorId: string) {
    let nextStepEditorId: string | null = null
    updateJob(stageEditorId, jobEditorId, (job) => {
      const nextStep = createBlankStep('EXECUTE')
      nextStepEditorId = nextStep.editorId
      return {
        ...job,
        executions: [...job.executions, nextStep],
      }
    })
    return nextStepEditorId
  }

  function removeStepFromJob(stageEditorId: string, jobEditorId: string, stepEditorId: string) {
    updateJob(stageEditorId, jobEditorId, (job) => ({
      ...job,
      executions: job.executions.filter((step) => step.editorId !== stepEditorId),
    }))
  }

  function moveStageById(draggedStageId: string, targetStageId: string) {
    updateDraft((current) => {
      const currentIndex = current.stages.findIndex((stage) => stage.editorId === draggedStageId)
      const targetIndex = current.stages.findIndex((stage) => stage.editorId === targetStageId)
      if (currentIndex < 0 || targetIndex < 0 || currentIndex === targetIndex) return current

      return {
        ...current,
        stages: moveArrayItem(current.stages, currentIndex, targetIndex),
      }
    })
  }

  function moveStepInJob(stageEditorId: string, jobEditorId: string, stepEditorId: string, direction: -1 | 1) {
    updateJob(stageEditorId, jobEditorId, (job) => {
      const currentIndex = job.executions.findIndex((step) => step.editorId === stepEditorId)
      const targetIndex = currentIndex + direction
      if (currentIndex < 0 || targetIndex < 0 || targetIndex >= job.executions.length) return job
      return {
        ...job,
        executions: moveArrayItem(job.executions, currentIndex, targetIndex),
      }
    })
  }


  function addParameterToStep(stageEditorId: string, jobEditorId: string, stepEditorId: string) {
    updateStep(stageEditorId, jobEditorId, stepEditorId, (step) => ({
      ...step,
      parameters: [...step.parameters, createBlankParameter()],
    }))
  }

  function removeParameterFromStep(stageEditorId: string, jobEditorId: string, stepEditorId: string, parameterEditorId: string) {
    updateStep(stageEditorId, jobEditorId, stepEditorId, (step) => ({
      ...step,
      parameters: step.parameters.filter((parameter) => parameter.editorId !== parameterEditorId),
    }))
  }

  async function handleSave() {
    if (!draft) return

    const validationIssues = collectPipelineDraftIssues(draft).map((issue) => issue.message)
    if (validationIssues.length > 0) {
      setError(validationIssues[0])
      return
    }

    setSaving(true)
    setError(null)

    try {
      const payload = draftToPayload(draft)
      const saved = createMode
        ? await createPipelineConfig(payload)
        : await updatePipelineConfig(numericPipelineId, payload)

      workspace?.applyPipeline(saved)
      await workspace?.refreshWorkspace()

      if (createMode) {
        navigate(`/pipeline/items/${saved.id}/config${saved.folderId ? `?folderId=${saved.folderId}` : ''}`, {
          replace: true,
        })
        return
      }

      setDraft(pipelineToDraft(saved))
      workspace?.setDirty(false)
    } catch (saveError) {
      setError(getApiErrorMessage(saveError, 'Failed to save pipeline config'))
    } finally {
      setSaving(false)
    }
  }

  async function handleImport(payload: { pipelineName: string; file: File; format?: string }) {
    if (!draft) return

    const currentDraft = draft
    setImportSubmitting(true)
    setImportError(null)
    setError(null)

    try {
      const imported = createMode
        ? await importPipelineConfig({
            folderId: currentDraft.folderId,
            pipelineName: payload.pipelineName,
            file: payload.file,
            format: payload.format,
          })
        : await importIntoPipelineConfig(numericPipelineId, {
            folderId: currentDraft.folderId,
            pipelineName: payload.pipelineName,
            file: payload.file,
            format: payload.format,
          })

      workspace?.applyPipeline(imported)
      await workspace?.refreshWorkspace()
      setDraft(pipelineToDraft(imported))
      setImportDialogOpen(false)

      if (createMode) {
        navigate(`/pipeline/items/${imported.id}/config${imported.folderId ? `?folderId=${imported.folderId}` : ''}`, {
          replace: true,
        })
      }
    } catch (importLoadError) {
      setImportError(getApiErrorMessage(importLoadError, 'Failed to import pipeline config'))
    } finally {
      setImportSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="p-12">
        <LoadingState />
      </div>
    )
  }

  if (error && !draft) {
    return (
      <EmptyState
        icon={Waypoints}
        title="Pipeline config unavailable"
        description={error}
        action={
          <Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} className="btn btn-primary">
            Back to Explorer
          </Link>
        }
      />
    )
  }

  if (!draft || !draftReadiness) return null

  const stageOptions = draft.stages.map((stage) => ({
    label: stage.stageName || 'Untitled stage',
    value: stage.editorId,
  }))

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-200/20">
      {createMode ? (
        <div className="flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-6 py-3">
          <div className="breadcrumbs text-[13px] text-base-content/50">
            <ul>
              <li>
                <Link to="/pipeline">Root</Link>
              </li>
              {Number.isFinite(targetFolderId) ? (
                <li>
                  <Link to={`/pipeline/folders/${targetFolderId}`}>Folder #{targetFolderId}</Link>
                </li>
              ) : null}
              <li className="font-semibold text-base-content">New Pipeline</li>
            </ul>
          </div>
          <span className="badge badge-ghost badge-sm">Draft</span>
        </div>
      ) : null}

      <div className="flex shrink-0 items-center justify-between gap-4 border-b border-base-300 bg-base-100 px-6 py-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-base-content/55">
          <span className="badge badge-ghost badge-sm">{draft.stages.length} stages</span>
          <span className="badge badge-ghost badge-sm">{draftJobCount} jobs</span>
          <span className={`badge badge-sm ${draftReadiness.issueCount > 0 ? 'badge-warning' : 'badge-success'}`}>
            {draftReadiness.issueCount > 0 ? `${draftReadiness.issueCount} issues` : 'Runnable'}
          </span>
          <span className="text-[11px] font-medium text-base-content/40">
            {draftReadiness.guidance}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-ghost btn-sm gap-2"
            onClick={() => {
              setImportDialogOpen(true)
              setImportError(null)
              setError(null)
            }}
          >
            <FileUp size={14} />
            Import File
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm gap-2"
            onClick={() => {
              insertStageAfter()
            }}
          >
            <Plus size={14} />
            Add Stage
          </button>
          <button type="button" className="btn btn-primary btn-sm gap-2" disabled={saving} onClick={() => void handleSave()}>
            <Save size={14} />
            {saving ? 'Saving...' : createMode ? 'Create Pipeline' : 'Save Pipeline'}
          </button>
        </div>
      </div>

      {error ? <div className="border-b border-base-300 bg-error/8 px-6 py-3 text-sm text-error">{error}</div> : null}

      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        <main className="min-w-0 flex-1 overflow-hidden bg-base-200/40">
          <StageLaneBoard
            stages={stageLanes}
            emptyTitle="No stages"
            emptyDescription="Add the first stage to begin defining this pipeline."
            onMoveStage={moveStageById}
            onMoveJob={moveJobById}
          />
        </main>

        <aside className="flex w-[320px] shrink-0 flex-col border-l border-base-300 bg-base-100">
          <div className="border-b border-base-300 px-5 py-4">
            <div className="iris-header">Pipeline Summary</div>
            <div className="mt-2">
              <label className="form-control">
                <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">
                  Pipeline Name
                </span>
                <input
                  type="text"
                  className={getControlClass(
                    hasPipelineFieldIssue(validationSummary, 'pipelineName'),
                    'input input-bordered w-full',
                  )}
                  value={draft.pipelineName}
                  onChange={(event) => {
                    setDraft((current) => (current ? { ...current, pipelineName: event.target.value } : current))
                    workspace?.setDirty(true)
                  }}
                  placeholder="pipeline_name"
                />
                <FieldMessages messages={getPipelineFieldMessages(validationSummary, 'pipelineName')} />
              </label>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
            <div className="grid grid-cols-2 gap-3">
              <SummaryTile label="Stages" value={draftReadiness.stageCount} />
              <SummaryTile label="Jobs Ready" value={`${draftReadiness.readyJobs}/${draftReadiness.jobCount}`} />
              <SummaryTile label="Steps" value={draftReadiness.stepCount} />
              <SummaryTile label="Issues" value={draftReadiness.issueCount} />
              <SummaryTile label="Source Conn" value={draftReadiness.sourceConfiguredJobs} />
              <SummaryTile label="Dest Conn" value={draftReadiness.destConfiguredJobs} />
            </div>

            <div className={`mt-6 rounded-2xl border p-4 ${
              draftReadiness.issueCount === 0
                ? 'border-success/20 bg-success/5'
                : draftReadiness.issueCount <= 3
                  ? 'border-warning/20 bg-warning/5'
                  : 'border-error/20 bg-error/5'
            }`}>
              <div className={`iris-header ${
                draftReadiness.issueCount === 0
                  ? 'text-success'
                  : draftReadiness.issueCount <= 3
                    ? 'text-warning'
                    : 'text-error'
              }`}>
                {draftReadiness.headline}
              </div>
              <div className="mt-2 text-xs text-base-content/60">{draftReadiness.guidance}</div>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                <span className="badge badge-ghost badge-sm">{draftReadiness.stageCount} stage lanes</span>
                <span className="badge badge-ghost badge-sm">{draftReadiness.jobCount} runtime jobs</span>
                <span className="badge badge-ghost badge-sm">{draftReadiness.warningJobs} jobs still need review</span>
              </div>
            </div>

            {issues.length > 0 ? (
              <div className="mt-6 rounded-2xl border border-warning/30 bg-warning/8 p-4">
                <div className="iris-header text-warning">Validation Issues</div>
                <div className="mt-2 text-xs text-warning/80">
                  Badges on stage lanes and job cards show where fixes are needed.
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {issues.slice(0, 6).map((issue) => (
                    <li key={issue} className="leading-relaxed text-warning">{issue}</li>
                  ))}
                </ul>
                {issues.length > 6 ? <div className="mt-3 text-xs font-medium text-warning/80">+ {issues.length - 6} more issues</div> : null}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-success/20 bg-success/5 p-4 text-sm text-success">
                No validation issues
              </div>
            )}
          </div>
        </aside>

        {selectedStage && selectedItem?.kind === 'stage' ? (
          <StageEditorDrawer
            stage={selectedStage}
            stageIndex={draft.stages.findIndex((stage) => stage.editorId === selectedStage.editorId)}
            stageCount={draft.stages.length}
            issueCount={validationSummary.stageIssues.get(selectedStage.editorId) ?? 0}
            validation={validationSummary}
            onDismiss={() => setSelectedItem(null)}
            onChange={(recipe) => updateStage(selectedStage.editorId, recipe)}
            onMoveStage={(direction) =>
              updateDraft((current) => {
                const currentIndex = current.stages.findIndex((stage) => stage.editorId === selectedStage.editorId)
                const targetIndex = currentIndex + direction
                if (currentIndex < 0 || targetIndex < 0 || targetIndex >= current.stages.length) return current
                return {
                  ...current,
                  stages: moveArrayItem(current.stages, currentIndex, targetIndex),
                }
              })
            }
            onRemoveStage={() => removeStageById(selectedStage.editorId)}
            onAddJob={() =>
              updateStage(selectedStage.editorId, (stage) => {
                const nextJob = createBlankJob(stage.jobs.length)
                openJobEditor(selectedStage.editorId, nextJob.editorId)
                return {
                  ...stage,
                  jobs: [...stage.jobs, nextJob],
                }
              })
            }
          />
        ) : null}
      </div>

      {editingStage && editingJob ? (
        <JobEditorModal
          stage={editingStage}
          job={editingJob}
          stageOptions={stageOptions}
          validation={validationSummary}
          onClose={() => setEditingJobTarget(null)}
          onChange={(recipe) => updateJob(editingStage.editorId, editingJob.editorId, recipe)}
          onMoveToStage={(targetStageId) => moveJobToStage(editingStage.editorId, editingJob.editorId, targetStageId)}
          onRemoveJob={() => removeJobFromStage(editingStage.editorId, editingJob.editorId)}
          onAddStep={() => addStepToJob(editingStage.editorId, editingJob.editorId)}
          onUpdateStep={(stepEditorId, recipe) => updateStep(editingStage.editorId, editingJob.editorId, stepEditorId, recipe)}
          onRemoveStep={(stepEditorId) => removeStepFromJob(editingStage.editorId, editingJob.editorId, stepEditorId)}
          onMoveStep={(stepEditorId, direction) => moveStepInJob(editingStage.editorId, editingJob.editorId, stepEditorId, direction)}
          onAddParameter={(stepEditorId) => addParameterToStep(editingStage.editorId, editingJob.editorId, stepEditorId)}
          onUpdateParameter={(stepEditorId, parameterEditorId, recipe) =>
            updateParameter(editingStage.editorId, editingJob.editorId, stepEditorId, parameterEditorId, recipe)
          }
          onRemoveParameter={(stepEditorId, parameterEditorId) =>
            removeParameterFromStep(editingStage.editorId, editingJob.editorId, stepEditorId, parameterEditorId)
          }
        />
      ) : null}

      <PipelineImportDialog
        open={importDialogOpen}
        title={createMode ? 'Import pipeline' : 'Replace from file'}
        description={
          createMode
            ? 'Create a new pipeline definition from a JSON or YAML file.'
            : 'Replace the current pipeline definition from a JSON or YAML file. This overwrites the saved backend config with the imported content.'
        }
        submitLabel={createMode ? 'Import pipeline' : 'Replace definition'}
        initialPipelineName={draft.pipelineName}
        submitting={importSubmitting}
        error={importError}
        onClose={() => {
          setImportDialogOpen(false)
          setImportError(null)
        }}
        onSubmit={handleImport}
      />
    </div>
  )
}

function StageEditorPanel({
  stage,
  stageIndex,
  stageCount,
  issueCount,
  validation,
  onDismiss,
  onChange,
  onMoveStage,
  onRemoveStage,
  onAddJob,
}: {
  stage: EditableStage
  stageIndex: number
  stageCount: number
  issueCount: number
  validation: DraftValidationSummary
  onDismiss: () => void
  onChange: (recipe: (stage: EditableStage) => EditableStage) => void
  onMoveStage: (direction: -1 | 1) => void
  onRemoveStage: () => void
  onAddJob: () => void
}) {
  const stageNameErrors = getFieldMessages(validation.stageFieldMessages, stage.editorId, 'stageName')
  const stageJobErrors = getFieldMessages(validation.stageFieldMessages, stage.editorId, 'stageJobs')

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-base-300 px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-ghost badge-sm">Stage {stageIndex + 1}</span>
              {issueCount > 0 ? <span className="badge badge-warning badge-sm">{issueCount} issues</span> : null}
            </div>
            <div className="mt-3 truncate text-xl font-bold">{stage.stageName || 'Untitled stage'}</div>
            <div className="mt-1 text-sm text-base-content/50">
              Jobs inside this stage execute in parallel. Reorder lanes horizontally to change pipeline flow.
            </div>
          </div>
          <button type="button" className="btn btn-ghost btn-sm btn-square shrink-0" aria-label="Close stage editor" onClick={onDismiss}>
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="space-y-5">
          <div className="rounded-2xl border border-base-300 bg-base-200/20 p-4">
            <div className="iris-header">Stage Settings</div>
            <label className="form-control mt-4">
              <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Stage Name</span>
              <input
                type="text"
                className={getControlClass(stageNameErrors.length > 0, 'input input-bordered w-full')}
                value={stage.stageName}
                onChange={(event) => onChange((current) => ({ ...current, stageName: event.target.value }))}
                placeholder="stage1"
              />
              <FieldMessages messages={stageNameErrors} />
            </label>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button type="button" className="btn btn-ghost btn-sm" disabled={stageIndex === 0} onClick={() => onMoveStage(-1)}>
                <ArrowLeft size={14} />
                Move Left
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                disabled={stageIndex >= stageCount - 1}
                onClick={() => onMoveStage(1)}
              >
                Move Right
                <ArrowRight size={14} />
              </button>
              <button type="button" className="btn btn-primary btn-sm gap-2" onClick={onAddJob}>
                <Plus size={14} />
                Add Job
              </button>
              <span className="text-xs text-base-content/40">
                {stageCount > 1 ? `Lane ${stageIndex + 1} of ${stageCount}` : 'Single stage pipeline'}
              </span>
            </div>
            <FieldMessages messages={stageJobErrors} className="mt-3" />
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
            <div className="iris-header">Stage Actions</div>
            <div className="mt-2 text-sm text-base-content/55">
              Removing a stage also removes the jobs defined inside it.
            </div>
            <div className="mt-4">
              <button type="button" className="btn btn-ghost btn-sm text-error" onClick={onRemoveStage}>
                <Trash2 size={14} />
                Delete Stage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StageEditorDrawer(props: Omit<Parameters<typeof StageEditorPanel>[0], 'onDismiss'> & { onDismiss: () => void }) {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex justify-end">
      <aside className="pointer-events-auto animate-iris-slide-in-right relative h-full w-[420px] max-w-[92vw] border-l border-base-300 bg-base-100 shadow-2xl">
        <StageEditorPanel {...props} />
      </aside>
    </div>
  )
}

function JobEditorModal({
  onClose,
  ...props
}: Omit<JobEditorPanelProps, 'onDismiss' | 'dismissLabel'> & {
  onClose: () => void
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-base-300/60 backdrop-blur-[2px] transition-all" onClick={onClose}>
      <div
        className="h-[94vh] max-h-[1400px] w-[98vw] max-w-none overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-0 shadow-2xl ring-1 ring-base-content/5"
        onClick={(event) => event.stopPropagation()}
      >
        <JobEditorPanel {...props} onDismiss={onClose} />
      </div>
    </div>
  )
}

type JobEditorPanelProps = {
  stage: EditableStage
  job: EditableJob
  stageOptions: { label: string; value: string }[]
  validation: DraftValidationSummary
  onChange: (recipe: (job: EditableJob) => EditableJob) => void
  onMoveToStage: (targetStageId: string) => void
  onRemoveJob: () => void
  onAddStep: () => string | null
  onUpdateStep: (stepEditorId: string, recipe: (step: EditableStep) => EditableStep) => void
  onRemoveStep: (stepEditorId: string) => void
  onMoveStep: (stepEditorId: string, direction: -1 | 1) => void
  onAddParameter: (stepEditorId: string) => void
  onUpdateParameter: (
    stepEditorId: string,
    parameterEditorId: string,
    recipe: (parameter: EditableParameter) => EditableParameter,
  ) => void
  onRemoveParameter: (stepEditorId: string, parameterEditorId: string) => void
  onDismiss: () => void
}

function JobEditorPanel({
  stage,
  job,
  stageOptions,
  validation,
  onChange,
  onMoveToStage,
  onRemoveJob,
  onAddStep,
  onUpdateStep,
  onRemoveStep,
  onMoveStep,
  onAddParameter,
  onUpdateParameter,
  onRemoveParameter,
  onDismiss,
}: JobEditorPanelProps) {
  const sourceConfigured = Boolean(job.database.source)
  const destConfigured = Boolean(job.database.dest)
  const currentStageIndex = stageOptions.findIndex((option) => option.value === stage.editorId)
  const previousStage = currentStageIndex > 0 ? stageOptions[currentStageIndex - 1] : null
  const nextStage = currentStageIndex >= 0 && currentStageIndex < stageOptions.length - 1 ? stageOptions[currentStageIndex + 1] : null
  const [selectedStepEditorId, setSelectedStepEditorId] = useState<string | null>(job.executions[0]?.editorId ?? null)
  const [stepFilter, setStepFilter] = useState('')

  useEffect(() => {
    if (job.executions.length === 0) {
      setSelectedStepEditorId(null)
      return
    }

    if (!selectedStepEditorId || !job.executions.some((step) => step.editorId === selectedStepEditorId)) {
      setSelectedStepEditorId(job.executions[0].editorId)
    }
  }, [job.executions, selectedStepEditorId])

  const selectedStep = job.executions.find((step) => step.editorId === selectedStepEditorId) ?? job.executions[0] ?? null
  const jobNameErrors = getFieldMessages(validation.jobFieldMessages, job.editorId, 'jobName')
  const atomicLevelErrors = getFieldMessages(validation.jobFieldMessages, job.editorId, 'atomicLevel')
  const fetchSizeErrors = getFieldMessages(validation.jobFieldMessages, job.editorId, 'fetchSize')
  const batchSizeErrors = getFieldMessages(validation.jobFieldMessages, job.editorId, 'batchSize')
  const executionsErrors = getFieldMessages(validation.jobFieldMessages, job.editorId, 'executions')
  const sourceErrors = {
    driver: getFieldMessages(validation.jobFieldMessages, job.editorId, 'sourceDriver'),
    url: getFieldMessages(validation.jobFieldMessages, job.editorId, 'sourceUrl'),
    username: getFieldMessages(validation.jobFieldMessages, job.editorId, 'sourceUsername'),
    password: getFieldMessages(validation.jobFieldMessages, job.editorId, 'sourcePassword'),
  }
  const destErrors = {
    driver: getFieldMessages(validation.jobFieldMessages, job.editorId, 'destDriver'),
    url: getFieldMessages(validation.jobFieldMessages, job.editorId, 'destUrl'),
    username: getFieldMessages(validation.jobFieldMessages, job.editorId, 'destUsername'),
    password: getFieldMessages(validation.jobFieldMessages, job.editorId, 'destPassword'),
  }

  function handleAddStep() {
    const nextStepEditorId = onAddStep()
    if (nextStepEditorId) {
      setSelectedStepEditorId(nextStepEditorId)
    }
  }

  function handleRemoveStep(stepEditorId: string) {
    const currentIndex = job.executions.findIndex((step) => step.editorId === stepEditorId)
    const nextSelected =
      job.executions[currentIndex + 1]?.editorId ??
      job.executions[currentIndex - 1]?.editorId ??
      null

    onRemoveStep(stepEditorId)

    if (selectedStepEditorId === stepEditorId) {
      setSelectedStepEditorId(nextSelected)
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      {/* Compact header ??job name + stage + atomic level + close */}
      <div className="flex shrink-0 items-center gap-2.5 border-b border-base-300 bg-base-200/40 px-4 py-3">
        <span className="shrink-0 badge badge-primary badge-sm font-semibold" title={stage.stageName}>{stage.stageName}</span>
        <input
          type="text"
          className={getControlClass(jobNameErrors.length > 0, 'input input-sm flex-1 min-w-0 font-semibold')}
          value={job.jobName}
          onChange={(event) => onChange((current) => ({ ...current, jobName: event.target.value }))}
          placeholder="job_name"
        />
        <select
          className={getControlClass(atomicLevelErrors.length > 0, 'select select-sm select-bordered w-[110px] shrink-0')}
          value={job.setting.atomicLevel ?? 'JOB'}
          onChange={(event) => onChange((current) => ({ ...current, setting: { ...current.setting, atomicLevel: event.target.value as EditableJob['setting']['atomicLevel'] } }))}
        >
          <option value="JOB">JOB</option>
          <option value="CHUNK">CHUNK</option>
        </select>
        <button type="button" className="btn btn-ghost btn-sm btn-square shrink-0" aria-label="Close editor" onClick={onDismiss}>
          <X size={16} />
        </button>
      </div>

      {/* 2-column body */}
      <div className="flex min-h-0 flex-1 divide-x divide-base-300 overflow-hidden">

        {/* LEFT ??Connections + Settings */}
        <div className="w-[300px] shrink-0 overflow-y-auto divide-y divide-base-300">
          {/* Source connection */}
          <div className="p-4">
            <div className="mb-3 text-[10px] font-black uppercase tracking-widest text-base-content/35 flex items-center gap-2">
              <Server size={11} />Source Node
            </div>
            <ConnectionPanel
              title="Source Node"
              icon={Server}
              configured={sourceConfigured}
              connection={job.database.source}
              errors={sourceErrors}
              onChange={(connection) => onChange((current) => ({ ...current, database: { ...current.database, source: connection } }))}
            />
          </div>

          {/* Dest connection */}
          <div className="p-4">
            <div className="mb-3 text-[10px] font-black uppercase tracking-widest text-base-content/35 flex items-center gap-2">
              <Link2 size={11} />Destination Node
            </div>
            <ConnectionPanel
              title="Destination Node"
              icon={Link2}
              configured={destConfigured}
              connection={job.database.dest}
              errors={destErrors}
              onChange={(connection) => onChange((current) => ({ ...current, database: { ...current.database, dest: connection } }))}
            />
          </div>

          {/* Settings */}
          <div className="p-4 space-y-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-base-content/35">Batch Settings</div>
            <div className="grid grid-cols-2 gap-2">
              <NumberField
                label="Fetch Size"
                value={job.setting.fetchSize}
                errors={fetchSizeErrors}
                onChange={(value) => onChange((current) => ({ ...current, setting: { ...current.setting, fetchSize: value } }))}
              />
              <NumberField
                label="Batch Size"
                value={job.setting.batchSize}
                errors={batchSizeErrors}
                onChange={(value) => onChange((current) => ({ ...current, setting: { ...current.setting, batchSize: value } }))}
              />
              <NumberField
                label="Delete Threshold"
                value={job.setting.deleteThreshold}
                onChange={(value) => onChange((current) => ({ ...current, setting: { ...current.setting, deleteThreshold: value } }))}
              />
            </div>
          </div>

          {/* Stage movement */}
          <div className="p-4 space-y-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-base-content/35">Stage</div>
            <select
              className="select select-bordered select-sm w-full"
              value={stage.editorId}
              onChange={(event) => onMoveToStage(event.target.value)}
            >
              {stageOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <button
                type="button"
                className="btn btn-outline btn-xs border-base-300 flex-1"
                disabled={!previousStage}
                onClick={() => previousStage && onMoveToStage(previousStage.value)}
              >
                <ArrowLeft size={12} />Prev
              </button>
              <button
                type="button"
                className="btn btn-outline btn-xs border-base-300 flex-1"
                disabled={!nextStage}
                onClick={() => nextStage && onMoveToStage(nextStage.value)}
              >
                Next<ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Delete */}
          <div className="p-4">
            <FieldMessages messages={executionsErrors} className="mb-2" />
            <button
              type="button"
              className="btn btn-ghost btn-sm w-full text-error hover:bg-error/10"
              onClick={onRemoveJob}
            >
              <Trash2 size={13} />Delete Job
            </button>
          </div>
        </div>

        {/* RIGHT ??Step pills + inline editor */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {/* Step pills bar */}
          <div className="flex shrink-0 items-center gap-1.5 overflow-x-auto border-b border-base-300 bg-base-100 px-4 py-2.5">
            {job.executions.map((step, i) => {
              const stepIssues = validation.stepIssues.get(step.editorId) ?? 0
              const isSelected = selectedStep?.editorId === step.editorId
              const hidden = stepFilter.trim() !== '' && !(step.name ?? '').toLowerCase().includes(stepFilter.toLowerCase())
              return (
                <button
                  key={step.editorId}
                  type="button"
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold transition-all ${hidden ? 'opacity-40' : ''} ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-content'
                      : stepIssues > 0
                        ? 'border-warning/50 bg-warning/10 text-warning hover:bg-warning/20'
                        : 'border-base-300 bg-base-100 text-base-content/55 hover:border-primary/30 hover:text-base-content'
                  }`}
                  onClick={() => setSelectedStepEditorId(step.editorId)}
                >
                  {stepIssues > 0 ? <span className="size-1.5 rounded-full bg-warning shrink-0" /> : null}
                  {step.name?.trim() || `Step ${i + 1}`}
                </button>
              )
            })}
            <button
              type="button"
              className="flex shrink-0 items-center gap-1 rounded-full border border-dashed border-base-300 px-3 py-1 text-[11px] text-base-content/50 transition-colors hover:border-primary/30 hover:text-primary"
              onClick={handleAddStep}
            >
              <Plus size={11} />Add
            </button>
            <div className="ml-auto shrink-0">
              <input
                type="text"
                placeholder="Filter steps..."
                className="input input-xs input-bordered w-28"
                value={stepFilter}
                onChange={(e) => setStepFilter(e.target.value)}
              />
            </div>
          </div>

          {/* Inline step editor */}
          {selectedStep ? (
            <InlineStepEditor
              step={selectedStep}
              stepIndex={job.executions.findIndex((c) => c.editorId === selectedStep.editorId)}
              stepCount={job.executions.length}
              issueCount={validation.stepIssues.get(selectedStep.editorId) ?? 0}
              validation={validation}
              onChange={(recipe) => onUpdateStep(selectedStep.editorId, recipe)}
              onRemove={() => handleRemoveStep(selectedStep.editorId)}
              onMove={(direction) => onMoveStep(selectedStep.editorId, direction)}
              onAddParameter={() => onAddParameter(selectedStep.editorId)}
              onUpdateParameter={(paramId, recipe) => onUpdateParameter(selectedStep.editorId, paramId, recipe)}
              onRemoveParameter={(paramId) => onRemoveParameter(selectedStep.editorId, paramId)}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-base-content/45">
              No steps. Add one above.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


function InlineStepEditor({
  step,
  stepIndex,
  stepCount,
  issueCount,
  validation,
  onChange,
  onRemove,
  onMove,
  onAddParameter,
  onUpdateParameter,
  onRemoveParameter,
}: {
  step: EditableStep
  stepIndex: number
  stepCount: number
  issueCount: number
  validation: DraftValidationSummary
  onChange: (recipe: (step: EditableStep) => EditableStep) => void
  onRemove: () => void
  onMove: (direction: -1 | 1) => void
  onAddParameter: () => void
  onUpdateParameter: (parameterEditorId: string, recipe: (parameter: EditableParameter) => EditableParameter) => void
  onRemoveParameter: (parameterEditorId: string) => void
}) {
  const sqlErrors = getFieldMessages(validation.stepFieldMessages, step.editorId, 'sql')
  const destTableErrors = getFieldMessages(validation.stepFieldMessages, step.editorId, 'destTable')

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      {/* Step meta row */}
      <div className="flex shrink-0 items-center gap-2 border-b border-base-300 bg-base-200/20 px-4 py-2">
        <select
          className="select select-xs select-bordered w-[110px] shrink-0"
          value={step.type}
          onChange={(event) => onChange((current) => ({ ...current, type: event.target.value as ExecutionType }))}
        >
          <option value="EXECUTE">EXECUTE</option>
          <option value="INSERT">INSERT</option>
          <option value="UPDATE">UPDATE</option>
          <option value="UPSERT">UPSERT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          type="text"
          className="input input-xs input-bordered min-w-0 flex-1"
          value={step.name ?? ''}
          placeholder="step name"
          onChange={(event) => onChange((current) => ({ ...current, name: event.target.value }))}
        />
        <span className="shrink-0 font-mono text-[10px] text-base-content/40">{step.sql.length}c</span>
        {issueCount > 0 ? <span className="badge badge-warning badge-xs shrink-0">{issueCount}</span> : null}
        <button type="button" className="btn btn-ghost btn-xs shrink-0" disabled={stepIndex === 0} onClick={() => onMove(-1)}><ArrowUp size={11} /></button>
        <button type="button" className="btn btn-ghost btn-xs shrink-0" disabled={stepIndex >= stepCount - 1} onClick={() => onMove(1)}><ArrowDown size={11} /></button>
        <button type="button" className="btn btn-ghost btn-xs shrink-0 text-error" onClick={onRemove}><Trash2 size={11} /></button>
      </div>

      {/* Scrollable body */}
      <div className="min-h-0 flex-1 overflow-y-auto p-4 space-y-4">
        {/* SQL Editor */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-base-content/45">SQL</span>
            {sqlErrors.length > 0 ? <FieldMessages messages={sqlErrors} /> : null}
          </div>
          <SqlEditor
            value={step.sql}
            onChange={(value) => onChange((current) => ({ ...current, sql: value }))}
            minHeight="260px"
          />
        </div>

        {/* Target + Watermark */}
        <div className="grid grid-cols-2 gap-3">
          <label className="form-control">
            <span className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-base-content/35">Dest Table</span>
            <input
              type="text"
              className={getControlClass(destTableErrors.length > 0, 'input input-bordered input-sm')}
              value={step.destTable ?? ''}
              placeholder="dest_table"
              onChange={(event) => onChange((current) => ({ ...current, destTable: event.target.value || null }))}
            />
            <FieldMessages messages={destTableErrors} />
          </label>
          <label className="form-control">
            <span className="mb-1.5 text-[10px] font-black uppercase tracking-widest text-base-content/35">Watermark Column</span>
            <input
              type="text"
              className="input input-bordered input-sm"
              value={step.watermarkColumn ?? ''}
              placeholder="updated_at"
              onChange={(event) => onChange((current) => ({ ...current, watermarkColumn: event.target.value || null }))}
            />
          </label>
        </div>

        {/* Parameters */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-base-content/35">
              Parameters{step.parameters.length > 0 ? ` (${step.parameters.length})` : ''}
            </span>
            <button type="button" className="btn btn-ghost btn-xs gap-1" onClick={onAddParameter}>
              <Plus size={11} />Add
            </button>
          </div>
          {step.parameters.length === 0 ? (
            <div className="rounded-lg border border-dashed border-base-300 px-4 py-4 text-center text-[11px] text-base-content/45">
              No parameters
            </div>
          ) : (
            <div className="space-y-2">
              {step.parameters.map((parameter) => (
                <div
                  key={parameter.editorId}
                  className="grid gap-2 rounded-lg border border-base-300 bg-base-100 p-2.5"
                  style={{ gridTemplateColumns: '1fr 1fr 100px auto' }}
                >
                  <input
                    type="text"
                    className="input input-bordered input-xs"
                    placeholder="name"
                    value={parameter.param}
                    onChange={(event) => onUpdateParameter(parameter.editorId, (current) => ({ ...current, param: event.target.value }))}
                  />
                  <input
                    type="text"
                    className="input input-bordered input-xs"
                    placeholder="value"
                    value={String(parameter.value ?? '')}
                    onChange={(event) => onUpdateParameter(parameter.editorId, (current) => ({ ...current, value: event.target.value }))}
                  />
                  <select
                    className="select select-bordered select-xs"
                    value={parameter.type ?? 'general'}
                    onChange={(event) => onUpdateParameter(parameter.editorId, (current) => ({ ...current, type: event.target.value as EditableParameter['type'] }))}
                  >
                    <option value="general">general</option>
                    <option value="timestamp">timestamp</option>
                  </select>
                  <button type="button" className="btn btn-ghost btn-xs text-error" onClick={() => onRemoveParameter(parameter.editorId)}>
                    <Trash2 size={11} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ConnectionPanel({
  title,
  icon: Icon,
  configured,
  connection,
  errors,
  onChange,
}: {
  title: string
  icon: typeof Server
  configured: boolean
  connection: EditableJob['database']['source']
  errors?: Partial<Record<'driver' | 'url' | 'username' | 'password', string[]>>
  onChange: (connection: EditableJob['database']['source']) => void
}) {
  const currentConnection = connection ?? createBlankConnection()
  const hasErrors = Boolean(errors?.driver?.length || errors?.url?.length || errors?.username?.length || errors?.password?.length)

  const [presets, setPresets] = useState<DriverPreset[]>([])
  const [savedConns, setSavedConns] = useState<ConnectionDTO[]>([])
  const [urlPlaceholders, setUrlPlaceholders] = useState<Record<string, string>>({})
  const [testState, setTestState] = useState<'idle' | 'loading' | 'ok' | 'fail'>('idle')
  const [testMsg, setTestMsg] = useState('')

  useEffect(() => {
    getDriverPresets().then(setPresets).catch(() => {})
    listConnections().then(setSavedConns).catch(() => {})
  }, [])

  // When driver changes, auto-select matching preset and reset placeholders
  const selectedPreset = presets.find((p) => p.driverClass === currentConnection.driver) ?? null

  function applyPreset(preset: DriverPreset) {
    const newPlaceholders: Record<string, string> = {}
    preset.urlPlaceholders.forEach((ph) => {
      newPlaceholders[ph.key] = ph.example
    })
    setUrlPlaceholders(newPlaceholders)
    const url = buildUrl(preset.urlTemplate, newPlaceholders)
    onChange({ ...currentConnection, driver: preset.driverClass, url })
  }

  function buildUrl(template: string, values: Record<string, string>) {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '')
  }

  function handlePlaceholderChange(key: string, value: string) {
    const next = { ...urlPlaceholders, [key]: value }
    setUrlPlaceholders(next)
    if (selectedPreset) {
      onChange({ ...currentConnection, url: buildUrl(selectedPreset.urlTemplate, next) })
    }
  }

  function loadFromLibrary(conn: ConnectionDTO) {
    onChange({ ...currentConnection, driver: conn.driver, url: conn.url, username: conn.username, password: '' })
    setUrlPlaceholders({})
  }

  async function handleTest() {
    setTestState('loading')
    setTestMsg('')
    try {
      const result = await testConnection({
        driver: currentConnection.driver,
        url: currentConnection.url,
        username: currentConnection.username,
        password: currentConnection.password,
      })
      setTestState(result.success ? 'ok' : 'fail')
      setTestMsg(result.message + (result.serverInfo ? ` | ${result.serverInfo}` : '') + (result.latencyMs != null ? ` (${result.latencyMs}ms)` : ''))
    } catch {
      setTestState('fail')
      setTestMsg('Request failed')
    }
  }

  return (
    <div className={`rounded-lg border shadow-sm overflow-hidden transition-colors ${hasErrors ? 'border-warning/50' : 'border-base-300'}`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-2.5 border-b ${hasErrors ? 'bg-warning/5 border-warning/20' : 'bg-base-200/40 border-base-300'}`}>
        <div className="flex items-center gap-2">
          <Icon size={14} className="opacity-60" />
          <div className="text-[13px] font-bold tracking-wide">{title}</div>
        </div>
        <div className="flex items-center gap-2">
          {savedConns.length > 0 && (
            <div className="dropdown dropdown-end">
              <button type="button" tabIndex={0} className="btn btn-xs btn-ghost gap-1 font-semibold">
                <Link2 size={11} /> Load
              </button>
              <ul tabIndex={0} className="dropdown-content z-10 menu menu-xs p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300">
                {savedConns.map((c) => (
                  <li key={c.id}>
                    <button type="button" className="text-xs" onClick={() => loadFromLibrary(c)}>
                      <span className="font-semibold truncate">{c.name}</span>
                      <span className="text-base-content/40 font-mono text-[10px]">{c.driver.split('.').pop()}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <span className={`badge badge-xs font-semibold tracking-wider ${hasErrors ? 'badge-warning' : configured ? 'badge-success' : 'badge-ghost'}`}>
            {hasErrors ? 'Needs config' : configured ? 'Ready' : 'Optional'}
          </span>
        </div>
      </div>

      <div className={`flex flex-col divide-y divide-base-300 bg-base-100 ${hasErrors ? 'bg-warning/5' : ''}`}>
        {/* Driver selector */}
        <div className="px-4 py-2 flex items-center gap-4 hover:bg-base-200/20 transition-colors">
          <div className="text-[10px] font-black uppercase tracking-widest text-base-content/40 w-16 shrink-0">Driver</div>
          <div className="flex-1 min-w-0 flex items-center gap-2">
            {presets.length > 0 ? (
              <select
                className="select select-ghost select-sm h-7 text-sm font-mono flex-1 min-w-0 px-1"
                value={selectedPreset?.driverClass ?? '__custom__'}
                onChange={(e) => {
                  const preset = presets.find((p) => p.driverClass === e.target.value)
                  if (preset) applyPreset(preset)
                  else onChange({ ...currentConnection, driver: '', url: '' })
                }}
              >
                <option value="__custom__">Custom</option>
                {presets.filter((p) => p.driverClass).map((p) => (
                  <option key={p.driverClass} value={p.driverClass}>{p.name}</option>
                ))}
              </select>
            ) : null}
            {(!selectedPreset || selectedPreset.name === 'Custom') && (
              <input
                type="text"
                className={getControlClass(Boolean(errors?.driver?.length), 'input input-ghost input-sm h-7 flex-1 text-sm font-mono px-1')}
                placeholder="com.mysql.cj.jdbc.Driver"
                value={currentConnection.driver}
                onChange={(e) => onChange({ ...currentConnection, driver: e.target.value })}
              />
            )}
          </div>
          <FieldMessages messages={errors?.driver} />
        </div>

        {/* URL builder: placeholders if preset selected, else manual input */}
        {selectedPreset && selectedPreset.name !== 'Custom' ? (
          <div className="px-4 py-2 flex flex-col gap-2 hover:bg-base-200/20 transition-colors">
            <div className="text-[10px] font-black uppercase tracking-widest text-base-content/40">Connection</div>
            <div className="flex flex-wrap gap-2">
              {selectedPreset.urlPlaceholders.map((ph) => (
                <div key={ph.key} className="flex items-center gap-1 flex-1 min-w-[120px]">
                  <span className="text-[10px] font-semibold text-base-content/50 w-14 shrink-0">{ph.label}</span>
                  <input
                    type="text"
                    className="input input-ghost input-sm h-7 flex-1 text-sm font-mono px-1"
                    placeholder={ph.example}
                    value={urlPlaceholders[ph.key] ?? ''}
                    onChange={(e) => handlePlaceholderChange(ph.key, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-base-content/40 truncate" title={currentConnection.url}>
              {currentConnection.url || <span className="italic">URL will appear here</span>}
            </div>
            <FieldMessages messages={errors?.url} />
          </div>
        ) : (
          <div className="px-4 py-2 flex items-center gap-4 hover:bg-base-200/20 transition-colors">
            <div className="text-[10px] font-black uppercase tracking-widest text-base-content/40 w-16 shrink-0">URL</div>
            <div className="flex-1 min-w-0">
              <input
                type="text"
                className={getControlClass(Boolean(errors?.url?.length), 'input input-ghost input-sm h-7 w-full text-sm font-mono px-1')}
                placeholder="jdbc:mysql://localhost:3306/mydb"
                value={currentConnection.url}
                onChange={(e) => onChange({ ...currentConnection, url: e.target.value })}
              />
              <FieldMessages messages={errors?.url} />
            </div>
          </div>
        )}

        {/* User / Pass */}
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-base-300">
          <div className="flex-1 px-4 py-2 flex items-center gap-4 hover:bg-base-200/20 transition-colors">
            <div className="text-[10px] font-black uppercase tracking-widest text-base-content/40 w-16 shrink-0">User</div>
            <div className="flex-1 min-w-0">
              <input type="text" className={getControlClass(Boolean(errors?.username?.length), 'input input-ghost input-sm h-7 w-full text-sm px-1')} placeholder="root" value={currentConnection.username} onChange={(e) => onChange({ ...currentConnection, username: e.target.value })} />
              <FieldMessages messages={errors?.username} />
            </div>
          </div>
          <div className="flex-1 px-4 py-2 flex items-center gap-4 hover:bg-base-200/20 transition-colors">
            <div className="text-[10px] font-black uppercase tracking-widest text-base-content/40 w-16 shrink-0">Pass</div>
            <div className="flex-1 min-w-0">
              <input
                type="password"
                className={getControlClass(Boolean(errors?.password?.length), 'input input-ghost input-sm h-7 w-full text-sm px-1')}
                placeholder="Enter password"
                value={currentConnection.password}
                onChange={(e) => onChange({ ...currentConnection, password: e.target.value })}
              />
              <FieldMessages messages={errors?.password} />
            </div>
          </div>
        </div>

        {/* Test Connection */}
        <div className="px-4 py-2 flex items-center gap-3">
          <button
            type="button"
            className="btn btn-xs btn-outline gap-1"
            disabled={testState === 'loading' || !currentConnection.driver || !currentConnection.url}
            onClick={handleTest}
          >
            {testState === 'loading' ? <span className="loading loading-spinner loading-xs" /> : <Waypoints size={11} />}
            Test Connection
          </button>
          {testMsg && (
            <span className={`text-[11px] font-mono ${testState === 'ok' ? 'text-success' : 'text-error'}`}>{testMsg}</span>
          )}
        </div>
      </div>
    </div>
  )
}

type DraftValidationSummary = {
  pipelineFields: Set<DraftValidationField>
  pipelineMessages: Map<DraftValidationField, string[]>
  stageIssues: Map<string, number>
  jobIssues: Map<string, number>
  stepIssues: Map<string, number>
  stageFieldMessages: Map<string, Map<DraftValidationField, string[]>>
  jobFieldMessages: Map<string, Map<DraftValidationField, string[]>>
  stepFieldMessages: Map<string, Map<DraftValidationField, string[]>>
  jobMessages: Map<string, string[]>
}

function getFieldMessages(
  map: Map<string, Map<DraftValidationField, string[]>>,
  id: string,
  field: DraftValidationField,
) {
  return map.get(id)?.get(field) ?? []
}

function hasPipelineFieldIssue(summary: DraftValidationSummary, field: DraftValidationField) {
  return summary.pipelineFields.has(field)
}

function getPipelineFieldMessages(summary: DraftValidationSummary, field: DraftValidationField) {
  return summary.pipelineMessages.get(field) ?? []
}

function getControlClass(hasError: boolean, baseClass: string) {
  return hasError ? `${baseClass} border-warning focus:border-warning focus:outline-warning` : baseClass
}

function FieldMessages({
  messages,
  className = 'mt-2',
}: {
  messages?: string[]
  className?: string
}) {
  if (!messages || messages.length === 0) return null

  return (
    <div className={`${className} space-y-1`}>
      {messages.map((message) => (
        <div key={message} className="text-xs text-warning">
          {message}
        </div>
      ))}
    </div>
  )
}

function SummaryTile({
  label,
  value,
}: {
  label: string
  value: string | number | null
}) {
  return (
    <div className="rounded-xl border border-base-300 bg-base-100 px-4 py-3">
      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      <div className="mt-1 truncate text-sm font-semibold">{value ?? '-'}</div>
    </div>
  )
}

function NumberField({
  label,
  value,
  errors,
  onChange,
}: {
  label: string
  value: number | null
  errors?: string[]
  onChange: (value: number | null) => void
}) {
  return (
    <label className="form-control">
      <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">{label}</span>
      <input
        type="number"
        className={getControlClass(Boolean(errors?.length), 'input input-bordered w-full')}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value === '' ? null : Number(event.target.value))}
      />
      <FieldMessages messages={errors} />
    </label>
  )
}

function moveArrayItem<T>(items: T[], fromIndex: number, toIndex: number) {
  const next = [...items]
  const [item] = next.splice(fromIndex, 1)
  next.splice(toIndex, 0, item)
  return next
}


