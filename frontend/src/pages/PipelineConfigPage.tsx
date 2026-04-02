import { ArrowDown, ArrowUp, FileUp, Link2, Plus, Save, Server, Trash2, Waypoints } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core'
import { sortableKeyboardCoordinates, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ArrowLeft, ArrowRight, Pencil, X } from 'lucide-react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { PipelineImportDialog } from '../components/PipelineImportDialog'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import {
  createPipelineConfig,
  getApiErrorMessage,
  getPipelineConfig,
  importIntoPipelineConfig,
  importPipelineConfig,
  updatePipelineConfig,
} from '../lib/api'
import {
  countDraftJobs,
  countDraftSteps,
  createBlankConnection,
  createBlankJob,
  createBlankParameter,
  createBlankStage,
  createBlankStep,
  collectPipelineDraftIssues,
  draftToPayload,
  pipelineToDraft,
  type DraftValidationField,
  type DraftValidationIssue,
  type EditableJob,
  type EditableParameter,
  type EditableStage,
  type EditableStep,
  type PipelineDraft,
} from '../lib/pipeline-draft'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'
import type { ExecutionType } from '../types/irispipe'

type SelectedItem =
  | { kind: 'stage'; stageEditorId: string }
  | { kind: 'job'; stageEditorId: string; jobEditorId: string }

type EditingJobTarget = { stageEditorId: string; jobEditorId: string }

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
  const draftStepCount = countDraftSteps(draft)
  const validationSummary = useMemo(() => summarizeDraftValidation(validationIssues), [validationIssues])

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

  const stageLanes = useMemo<StageLaneData[]>(() => {
    if (!draft) return []
    return draft.stages.map((stage, stageIndex) => ({
      id: stage.editorId,
      title: stage.stageName || `stage${stageIndex + 1}`,
      selected: selectedStage?.editorId === stage.editorId && selectedItem?.kind === 'stage',
      onClick: () => setSelectedItem({ kind: 'stage', stageEditorId: stage.editorId }),
      summary: validationSummary.stageIssues.get(stage.editorId)
        ? `${validationSummary.stageIssues.get(stage.editorId)} validation issues`
        : undefined,
      issuesCount: validationSummary.stageIssues.get(stage.editorId) ?? 0,
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
      jobs: stage.jobs.map((job) => ({
        id: job.editorId,
        title: job.jobName || 'Untitled job',
        selected: selectedJob?.editorId === job.editorId,
        onClick: () => setSelectedItem({ kind: 'job', stageEditorId: stage.editorId, jobEditorId: job.editorId }),
        onDoubleClick: () => openJobEditor(stage.editorId, job.editorId),
        issuesCount: validationSummary.jobIssues.get(job.editorId) ?? 0,
        badges: [
          `${job.executions.length} steps`,
          `${job.setting.atomicLevel ?? 'JOB'} atomic`,
          job.database.source && job.database.dest ? 'connections ready' : 'connection setup',
        ],
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
      })),
    }))
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

  function reorderStepInJob(stageEditorId: string, jobEditorId: string, draggedStepId: string, targetStepId?: string) {
    updateJob(stageEditorId, jobEditorId, (job) => {
      const currentIndex = job.executions.findIndex((step) => step.editorId === draggedStepId)
      if (currentIndex < 0) return job
      const targetIndex =
        targetStepId == null ? job.executions.length - 1 : job.executions.findIndex((step) => step.editorId === targetStepId)
      if (targetIndex < 0 || currentIndex === targetIndex) return job
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

  if (!draft) return null

  const stageOptions = draft.stages.map((stage) => ({
    label: stage.stageName || 'Untitled stage',
    value: stage.editorId,
  }))

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
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
          {issues.length > 0 ? <span className="badge badge-warning badge-sm">{issues.length} issues</span> : null}
          <span className="text-[11px] font-medium text-base-content/40">Jobs in the same stage run in parallel. Drag cards to reorganize, double-click a job to edit.</span>
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
                  onChange={(event) =>
                    setDraft((current) => (current ? { ...current, pipelineName: event.target.value } : current))
                  }
                  placeholder="pipeline_name"
                />
                <FieldMessages messages={getPipelineFieldMessages(validationSummary, 'pipelineName')} />
              </label>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
            <div className="grid grid-cols-2 gap-3">
              <SummaryTile label="Stages" value={draft.stages.length} />
              <SummaryTile label="Jobs" value={draftJobCount} />
              <SummaryTile label="Steps" value={draftStepCount} />
              <SummaryTile label="Issues" value={issues.length} />
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
          onReorderStep={(draggedStepId, targetStepId) => reorderStepInJob(editingStage.editorId, editingJob.editorId, draggedStepId, targetStepId)}
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

          <div className="rounded-2xl border border-error/20 bg-error/5 p-4">
            <div className="iris-header text-error">Danger Zone</div>
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
  onReorderStep: (draggedStepId: string, targetStepId?: string) => void
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
  onReorderStep,
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
  const stepSensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

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

  function handleStepDragEnd(event: DragEndEvent) {
    if (!event.over || event.active.id === event.over.id) return
    onReorderStep(String(event.active.id), String(event.over.id))
    setSelectedStepEditorId(String(event.active.id))
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
      <div className="flex items-start justify-between gap-4 border-b border-base-300 bg-base-200/50 px-6 py-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-sm truncate font-semibold">{stage.stageName}</span>
            <span className="badge badge-ghost badge-sm font-medium">{job.executions.length} steps</span>
            <span className="badge badge-ghost badge-sm font-medium">{job.setting.atomicLevel ?? 'JOB'} atomic</span>
          </div>
          <div className="mt-2 truncate text-2xl font-bold tracking-tight">{job.jobName || 'Untitled job'}</div>
          <div className="mt-1 text-[13px] text-base-content/50">Edit job settings, reorder steps, and configure SQL operations without leaving the stage board context.</div>
        </div>
        <button type="button" className="btn btn-ghost btn-sm btn-square shrink-0 hover:bg-base-300" aria-label="Close editor" onClick={onDismiss}>
          <X size={18} />
        </button>
      </div>

      <div className="grid min-h-0 flex-1 gap-0 xl:grid-cols-[minmax(320px,0.85fr)_minmax(320px,0.75fr)_minmax(480px,1.4fr)] divide-y xl:divide-y-0 xl:divide-x divide-base-300">
        <section className="flex min-h-0 flex-col overflow-hidden bg-base-100">
          <div className="border-b border-base-300 bg-base-200/30 px-5 py-4">
            <div className="iris-header">Job Settings</div>
            <div className="mt-1 text-xs text-base-content/50">Define runtime behavior and data connections.</div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-5">
            <div className="space-y-6">
              <div className="rounded-xl border border-base-300 bg-base-100 shadow-sm p-4">
                <label className="form-control">
                  <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Job Name</span>
                  <input
                    type="text"
                    className={getControlClass(jobNameErrors.length > 0, 'input input-bordered w-full')}
                    value={job.jobName}
                    onChange={(event) => onChange((current) => ({ ...current, jobName: event.target.value }))}
                    placeholder="job_name"
                  />
                  <FieldMessages messages={jobNameErrors} />
                </label>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <label className="form-control">
                    <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Stage</span>
                    <select className="select select-bordered focus:border-primary" value={stage.editorId} onChange={(event) => onMoveToStage(event.target.value)}>
                      {stageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="form-control">
                    <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Atomic Level</span>
                    <select
                      className={getControlClass(atomicLevelErrors.length > 0, 'select select-bordered focus:border-primary')}
                      value={job.setting.atomicLevel ?? 'JOB'}
                      onChange={(event) =>
                        onChange((current) => ({
                          ...current,
                          setting: {
                            ...current.setting,
                            atomicLevel: event.target.value as EditableJob['setting']['atomicLevel'],
                          },
                        }))
                      }
                    >
                      <option value="JOB">JOB</option>
                      <option value="CHUNK">CHUNK</option>
                    </select>
                    <FieldMessages messages={atomicLevelErrors} />
                  </label>

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
                    onChange={(value) =>
                      onChange((current) => ({ ...current, setting: { ...current.setting, deleteThreshold: value } }))
                    }
                  />
                </div>

                <div className="mt-5 pt-5 border-t border-base-300">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">Stage Movement</div>
                  <div className="mt-1 text-xs text-base-content/50">
                    Jobs inside the same stage execute in parallel. Reordering within a stage only changes presentation order.
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-outline border-base-300 btn-sm hover:bg-base-200 hover:border-base-300"
                      disabled={!previousStage}
                      onClick={() => previousStage && onMoveToStage(previousStage.value)}
                    >
                      <ArrowLeft size={14} />
                      Prev Stage
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline border-base-300 btn-sm hover:bg-base-200 hover:border-base-300"
                      disabled={!nextStage}
                      onClick={() => nextStage && onMoveToStage(nextStage.value)}
                    >
                      Next Stage
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <ConnectionPanel
                  title="Source Node"
                  icon={Server}
                  configured={sourceConfigured}
                  connection={job.database.source}
                  errors={sourceErrors}
                  onChange={(connection) => onChange((current) => ({ ...current, database: { ...current.database, source: connection } }))}
                />
                <ConnectionPanel
                  title="Destination Node"
                  icon={Link2}
                  configured={destConfigured}
                  connection={job.database.dest}
                  errors={destErrors}
                  onChange={(connection) => onChange((current) => ({ ...current, database: { ...current.database, dest: connection } }))}
                />
              </div>

              <div className="pt-2">
                <FieldMessages messages={executionsErrors} className="mb-3" />
                <button type="button" className="btn btn-ghost btn-sm text-error bg-error/5 hover:bg-error/10 w-full" onClick={onRemoveJob}>
                  <Trash2 size={14} />
                  Delete Job
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden bg-base-100">
          <div className="border-b border-base-300 bg-base-200/30 px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="iris-header">Execution Steps</div>
                <div className="mt-1 text-xs text-base-content/50">Navigator. Select a step to edit details.</div>
              </div>
              <button type="button" className="btn btn-primary btn-sm gap-2" onClick={handleAddStep}>
                <Plus size={14} />
                Add Step
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <DndContext sensors={stepSensors} collisionDetection={closestCenter} onDragEnd={handleStepDragEnd}>
              <SortableContext items={job.executions.map((step) => step.editorId)} strategy={verticalListSortingStrategy}>
                <div className="space-y-3">
                  {job.executions.map((step, index) => (
                    <ExecutionStepListItem
                      key={step.editorId}
                      step={step}
                      stepIndex={index}
                      issueCount={validation.stepIssues.get(step.editorId) ?? 0}
                      selected={selectedStep?.editorId === step.editorId}
                      onSelect={() => setSelectedStepEditorId(step.editorId)}
                      onRemove={() => handleRemoveStep(step.editorId)}
                      onMove={(direction) => onMoveStep(step.editorId, direction)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100">
          {selectedStep ? (
            <ExecutionStepEditorPanel
              step={selectedStep}
              stepIndex={job.executions.findIndex((candidate) => candidate.editorId === selectedStep.editorId)}
              stepCount={job.executions.length}
              issueCount={validation.stepIssues.get(selectedStep.editorId) ?? 0}
              validation={validation}
              onChange={(recipe) => onUpdateStep(selectedStep.editorId, recipe)}
              onRemove={() => handleRemoveStep(selectedStep.editorId)}
              onMove={(direction) => onMoveStep(selectedStep.editorId, direction)}
              onAddParameter={() => onAddParameter(selectedStep.editorId)}
              onUpdateParameter={(parameterEditorId, recipe) => onUpdateParameter(selectedStep.editorId, parameterEditorId, recipe)}
              onRemoveParameter={(parameterEditorId) => onRemoveParameter(selectedStep.editorId, parameterEditorId)}
            />
          ) : (
            <div className="flex h-full min-h-[320px] items-center justify-center px-6 text-center text-sm text-base-content/45">
              Select a step to edit its SQL, destination table, watermark, and parameters.
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function ExecutionStepListItem({
  step,
  stepIndex,
  issueCount,
  selected,
  onSelect,
  onRemove,
  onMove,
}: {
  step: EditableStep
  stepIndex: number
  issueCount: number
  selected: boolean
  onSelect: () => void
  onRemove: () => void
  onMove: (direction: -1 | 1) => void
}) {
  const { setNodeRef, transform, transition, isDragging, isOver, attributes, listeners } = useSortable({
    id: step.editorId,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`group/step rounded-xl border px-4 py-4 transition-all duration-150 ${
        selected
          ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20'
          : issueCount > 0
            ? 'border-warning/50 bg-warning/5 hover:border-warning/70'
            : 'border-base-300 bg-base-100 hover:border-primary/30 hover:bg-base-200/30'
      } ${isOver ? 'border-primary/60 bg-primary/6 ring-2 ring-primary/20 shadow-md' : ''} cursor-grab active:cursor-grabbing`}
      title="Drag to reorder steps"
    >
      {isOver ? <div className="mb-3 h-[3px] rounded-full bg-primary shadow-[0_0_0_1px_hsl(var(--p)/0.2)]" /> : null}
      <div className="flex items-start justify-between gap-3">
        <div
          className="min-w-0 flex-1 cursor-pointer text-left"
          onClick={onSelect}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              onSelect()
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">
            <span>Step {stepIndex + 1}</span>
            {issueCount > 0 ? <span className="badge badge-warning badge-xs">{issueCount}</span> : null}
          </div>
          <div className="mt-1 truncate text-sm font-semibold">{step.name?.trim() || 'Untitled step'}</div>
          <div className="mt-2 flex items-center gap-2 text-xs text-base-content/45">
            <span className="badge badge-ghost badge-sm">{step.type}</span>
            {step.destTable ? <span className="truncate">{step.destTable}</span> : null}
          </div>
        </div>

        <div
          className="flex translate-y-0.5 items-center gap-1 opacity-0 transition-all duration-150 group-hover/step:translate-y-0 group-hover/step:opacity-100 group-focus-within/step:translate-y-0 group-focus-within/step:opacity-100"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => event.stopPropagation()}
        >
          <button type="button" className="btn btn-ghost btn-xs" onClick={() => onMove(-1)}>
            <ArrowUp size={12} />
          </button>
          <button type="button" className="btn btn-ghost btn-xs" onClick={() => onMove(1)}>
            <ArrowDown size={12} />
          </button>
          <button type="button" className="btn btn-ghost btn-xs text-error" onClick={onRemove}>
            <Trash2 size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

function ExecutionStepEditorPanel({
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
  const [activeTab, setActiveTab] = useState<'sql' | 'target' | 'parameters'>('sql')
  const sqlErrors = getFieldMessages(validation.stepFieldMessages, step.editorId, 'sql')
  const destTableErrors = getFieldMessages(validation.stepFieldMessages, step.editorId, 'destTable')
  const sqlIssueCount = sqlErrors.length
  const targetIssueCount = destTableErrors.length

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-base-300 bg-base-200/30 px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="iris-header">Step {stepIndex + 1}</div>
            <div className="mt-1 text-xs text-base-content/50">Edit SQL statement and target mappings.</div>
          </div>
          <div className="flex items-center gap-1">
            {issueCount > 0 ? <span className="badge badge-warning badge-sm mr-1">{issueCount} issues</span> : null}
            <button type="button" className="btn btn-ghost btn-xs" disabled={stepIndex === 0} onClick={() => onMove(-1)}>
              <ArrowUp size={12} />
            </button>
            <button type="button" className="btn btn-ghost btn-xs" disabled={stepIndex >= stepCount - 1} onClick={() => onMove(1)}>
              <ArrowDown size={12} />
            </button>
            <button type="button" className="btn btn-ghost btn-xs text-error" onClick={onRemove}>
              <Trash2 size={12} />
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="rounded-xl border border-base-300 bg-base-200/20 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="iris-header">Identity</div>
                <div className="mt-1 text-xs text-base-content/45">Define the execution type and stable step name first.</div>
              </div>
              <span className="badge badge-ghost badge-sm">{step.type}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="form-control">
                <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Type</span>
                <select
                  className="select select-bordered"
                  value={step.type}
                  onChange={(event) => onChange((current) => ({ ...current, type: event.target.value as ExecutionType }))}
                >
                  <option value="EXECUTE">EXECUTE</option>
                  <option value="INSERT">INSERT</option>
                  <option value="UPDATE">UPDATE</option>
                  <option value="UPSERT">UPSERT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </label>

              <label className="form-control">
                <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Name</span>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={step.name ?? ''}
                  onChange={(event) => onChange((current) => ({ ...current, name: event.target.value }))}
                />
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-200/20 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="iris-header">Step Detail</div>
                <div className="mt-1 text-xs text-base-content/45">Switch between SQL, target mapping, and parameters without leaving the selected step.</div>
              </div>
              <div className="tabs tabs-boxed bg-base-100 p-1">
                <button
                  type="button"
                  className={`tab tab-sm ${activeTab === 'sql' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('sql')}
                >
                  SQL
                  {sqlIssueCount > 0 ? <span className="ml-1 badge badge-warning badge-xs">{sqlIssueCount}</span> : null}
                </button>
                <button
                  type="button"
                  className={`tab tab-sm ${activeTab === 'target' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('target')}
                >
                  Target
                  {targetIssueCount > 0 ? <span className="ml-1 badge badge-warning badge-xs">{targetIssueCount}</span> : null}
                </button>
                <button
                  type="button"
                  className={`tab tab-sm ${activeTab === 'parameters' ? 'tab-active' : ''}`}
                  onClick={() => setActiveTab('parameters')}
                >
                  Parameters
                  {step.parameters.length > 0 ? <span className="ml-1 badge badge-ghost badge-xs">{step.parameters.length}</span> : null}
                </button>
              </div>
            </div>

            {activeTab === 'sql' ? (
              <div className="mt-4 flex flex-col h-[600px] max-h-max">
                <label className="form-control flex-1 flex flex-col min-h-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">SQL Statement</span>
                    <span className="text-[10px] text-base-content/30 font-mono">{step.sql.length} chars</span>
                  </div>
                  <textarea
                    className={getControlClass(sqlErrors.length > 0, 'iris-code-area flex-1 w-full p-4 resize-none focus:outline-primary/50')}
                    value={step.sql}
                    onChange={(event) => onChange((current) => ({ ...current, sql: event.target.value }))}
                    placeholder="SELECT * FROM source_table"
                    spellCheck={false}
                  />
                  <FieldMessages messages={sqlErrors} />
                </label>
              </div>
            ) : null}

            {activeTab === 'target' ? (
              <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-2">
                <label className="form-control">
                  <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Destination Table</span>
                  <input
                    type="text"
                    className={getControlClass(destTableErrors.length > 0, 'input input-bordered w-full')}
                    value={step.destTable ?? ''}
                    onChange={(event) => onChange((current) => ({ ...current, destTable: event.target.value || null }))}
                  />
                  <FieldMessages messages={destTableErrors} />
                </label>

                <label className="form-control">
                  <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Watermark Column</span>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={step.watermarkColumn ?? ''}
                    onChange={(event) => onChange((current) => ({ ...current, watermarkColumn: event.target.value || null }))}
                  />
                </label>
              </div>
            ) : null}

            {activeTab === 'parameters' ? (
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-base-content/45">Maintain named parameters for this step in one place.</div>
                  <button type="button" className="btn btn-ghost btn-xs gap-1" onClick={onAddParameter}>
                    <Plus size={12} />
                    Add
                  </button>
                </div>

                <div className="mt-3 space-y-3">
                  {step.parameters.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-base-300 bg-base-100 px-4 py-5 text-center text-xs text-base-content/45">
                      No parameters
                    </div>
                  ) : (
                    step.parameters.map((parameter) => (
                      <div
                        key={parameter.editorId}
                        className="grid grid-cols-1 gap-2 rounded-lg border border-base-300 bg-base-100 p-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_120px_auto]"
                      >
                        <input
                          type="text"
                          className="input input-bordered input-sm"
                          placeholder="name"
                          value={parameter.param}
                          onChange={(event) =>
                            onUpdateParameter(parameter.editorId, (current) => ({ ...current, param: event.target.value }))
                          }
                        />
                        <input
                          type="text"
                          className="input input-bordered input-sm"
                          placeholder="value"
                          value={String(parameter.value ?? '')}
                          onChange={(event) =>
                            onUpdateParameter(parameter.editorId, (current) => ({ ...current, value: event.target.value }))
                          }
                        />
                        <select
                          className="select select-bordered select-sm"
                          value={parameter.type ?? 'general'}
                          onChange={(event) =>
                            onUpdateParameter(parameter.editorId, (current) => ({
                              ...current,
                              type: event.target.value as EditableParameter['type'],
                            }))
                          }
                        >
                          <option value="general">general</option>
                          <option value="timestamp">timestamp</option>
                        </select>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm text-error md:justify-self-end"
                          onClick={() => onRemoveParameter(parameter.editorId)}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : null}
          </div>
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

  return (
    <div className={`rounded-xl border shadow-sm overflow-hidden transition-colors ${hasErrors ? 'border-warning/50' : 'border-base-300'}`}>
      <div className={`flex items-center justify-between px-4 py-3 border-b ${hasErrors ? 'bg-warning/5 border-warning/20' : 'bg-base-200/40 border-base-300'}`}>
        <div className="flex items-center gap-2.5">
          <div className="opacity-60">
            <Icon size={15} />
          </div>
          <div className="text-sm font-bold tracking-wide">{title}</div>
        </div>
        <span className={`badge badge-sm font-semibold tracking-wider ${hasErrors ? 'badge-warning' : configured ? 'badge-success' : 'badge-ghost'}`}>
          {hasErrors ? 'Needs config' : configured ? 'Ready' : 'Optional'}
        </span>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-px bg-base-300 p-px ${hasErrors ? 'bg-warning/20' : ''}`}>
        <div className="bg-base-100 p-3 flex flex-col justify-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-base-content/35 mb-1.5">Driver</div>
          <input type="text" className={getControlClass(Boolean(errors?.driver?.length), 'input input-ghost input-sm px-1.5 h-7 w-full text-sm font-mono')} placeholder="com.mysql.cj.jdbc.Driver" value={currentConnection.driver} onChange={(event) => onChange({ ...currentConnection, driver: event.target.value })} />
          <FieldMessages messages={errors?.driver} />
        </div>
        <div className="bg-base-100 p-3 flex flex-col justify-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-base-content/35 mb-1.5">URL</div>
          <input type="text" className={getControlClass(Boolean(errors?.url?.length), 'input input-ghost input-sm px-1.5 h-7 w-full text-sm font-mono')} placeholder="jdbc:mysql://..." value={currentConnection.url} onChange={(event) => onChange({ ...currentConnection, url: event.target.value })} />
          <FieldMessages messages={errors?.url} />
        </div>
        <div className="bg-base-100 p-3 flex flex-col justify-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-base-content/35 mb-1.5">Username</div>
          <input type="text" className={getControlClass(Boolean(errors?.username?.length), 'input input-ghost input-sm px-1.5 h-7 w-full text-sm')} placeholder="root" value={currentConnection.username} onChange={(event) => onChange({ ...currentConnection, username: event.target.value })} />
          <FieldMessages messages={errors?.username} />
        </div>
        <div className="bg-base-100 p-3 flex flex-col justify-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-base-content/35 mb-1.5">Password</div>
          <input type="password" className={getControlClass(Boolean(errors?.password?.length), 'input input-ghost input-sm px-1.5 h-7 w-full text-sm')} placeholder="••••••••" value={currentConnection.password} onChange={(event) => onChange({ ...currentConnection, password: event.target.value })} />
          <FieldMessages messages={errors?.password} />
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

function summarizeDraftValidation(validationIssues: DraftValidationIssue[]): DraftValidationSummary {
  const pipelineFields = new Set<DraftValidationField>()
  const pipelineMessages = new Map<DraftValidationField, string[]>()
  const stageIssues = new Map<string, number>()
  const jobIssues = new Map<string, number>()
  const stepIssues = new Map<string, number>()
  const stageFieldMessages = new Map<string, Map<DraftValidationField, string[]>>()
  const jobFieldMessages = new Map<string, Map<DraftValidationField, string[]>>()
  const stepFieldMessages = new Map<string, Map<DraftValidationField, string[]>>()
  const jobMessages = new Map<string, string[]>()

  validationIssues.forEach((issue) => {
    if (!issue.stageEditorId && !issue.jobEditorId && !issue.stepEditorId && issue.field) {
      pipelineFields.add(issue.field)
      pushFieldMessage(pipelineMessages, issue.field, issue.message)
    }

    if (issue.stageEditorId) {
      stageIssues.set(issue.stageEditorId, (stageIssues.get(issue.stageEditorId) ?? 0) + 1)
      if (issue.field) {
        pushScopedFieldMessage(stageFieldMessages, issue.stageEditorId, issue.field, issue.message)
      }
    }

    if (issue.jobEditorId) {
      jobIssues.set(issue.jobEditorId, (jobIssues.get(issue.jobEditorId) ?? 0) + 1)
      pushScopedMessage(jobMessages, issue.jobEditorId, issue.message)
      if (issue.field) {
        pushScopedFieldMessage(jobFieldMessages, issue.jobEditorId, issue.field, issue.message)
      }
    }

    if (issue.stepEditorId) {
      stepIssues.set(issue.stepEditorId, (stepIssues.get(issue.stepEditorId) ?? 0) + 1)
      if (issue.field) {
        pushScopedFieldMessage(stepFieldMessages, issue.stepEditorId, issue.field, issue.message)
      }
    }
  })

  return {
    pipelineFields,
    pipelineMessages,
    stageIssues,
    jobIssues,
    stepIssues,
    stageFieldMessages,
    jobFieldMessages,
    stepFieldMessages,
    jobMessages,
  }
}

function pushScopedMessage(map: Map<string, string[]>, id: string, message: string) {
  const current = map.get(id) ?? []
  current.push(message)
  map.set(id, Array.from(new Set(current)))
}

function pushFieldMessage(map: Map<DraftValidationField, string[]>, field: DraftValidationField, message: string) {
  const current = map.get(field) ?? []
  current.push(message)
  map.set(field, Array.from(new Set(current)))
}

function pushScopedFieldMessage(
  map: Map<string, Map<DraftValidationField, string[]>>,
  id: string,
  field: DraftValidationField,
  message: string,
) {
  const scoped = map.get(id) ?? new Map<DraftValidationField, string[]>()
  const current = scoped.get(field) ?? []
  current.push(message)
  scoped.set(field, Array.from(new Set(current)))
  map.set(id, scoped)
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

