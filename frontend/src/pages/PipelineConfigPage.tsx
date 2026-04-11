import { ArrowDown, ArrowUp, FileUp, Link2, Plus, Save, Server, Trash2, Waypoints } from 'lucide-react'
import { ArrowLeft, ArrowRight, Pencil, X, Zap } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { SqlEditor } from '../components/SqlEditor'
import { PipelineImportDialog } from '../components/PipelineImportDialog'
import { LoadingState } from '../components/LoadingState'
import { StageLaneBoard, type StageLaneData } from '../components/StageLaneBoard'
import { PipelineContextStrip } from '../components/pipeline-family/PipelineContextStrip'
import { PipelineOverviewRail } from '../components/pipeline-family/PipelineOverviewRail'
import { ActionButton, ActionLink } from '../components/ui/Action'
import { PanelHeader, SummaryTile as SharedSummaryTile, SurfaceBox } from '../components/ui/Surface'
import {
  createPipelineConfig,
  executePipeline,
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
  return `${count} step${count === 1 ? '' : 's'}`
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
  const [executing, setExecuting] = useState(false)
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
        setSelectedItem(null)
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
        setSelectedItem(null)
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
          <ActionButton
            size="xs"
            tone="icon"
            square
            title="Insert stage to the right"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              insertStageAfter(stage.editorId)
            }}
          >
            <Waypoints size={13} />
          </ActionButton>
          <ActionButton
            size="xs"
            tone="icon"
            square
            title="Add job to this stage"
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
          </ActionButton>
          <ActionButton
            size="xs"
            tone="dangerGhost"
            square
            title="Delete this stage"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation()
              removeStageById(stage.editorId)
            }}
          >
            <Trash2 size={13} />
          </ActionButton>
        </>
        ),
        emptyAction: (
          <ActionButton
            size="xs"
            tone="primary"
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
            <Plus size={12} />
            Add Job
          </ActionButton>
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
          stepSummary: buildStepSummary(job),
          toolbar: (
          <>
            <ActionButton
              size="xs"
              tone="icon"
              square
              title="Open job workspace"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                openJobEditor(stage.editorId, job.editorId)
              }}
            >
              <Pencil size={13} />
            </ActionButton>
            <ActionButton
              size="xs"
              tone="dangerGhost"
              square
              title="Delete job"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                removeJobFromStage(stage.editorId, job.editorId)
              }}
            >
              <Trash2 size={13} />
            </ActionButton>
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

  async function handleExecute() {
    if (createMode || !workspace?.pipeline?.id) return

    setExecuting(true)
    setError(null)

    try {
      const run = await executePipeline({ pipelineId: workspace.pipeline.id, useAsyncLaucher: true })
      navigate(`/pipeline/items/${workspace.pipeline.id}/runs/${run.id}${workspace.pipeline.folderId ? `?folderId=${workspace.pipeline.folderId}` : ''}`)
    } catch (executeError) {
      setError(getApiErrorMessage(executeError, 'Failed to execute pipeline'))
    } finally {
      setExecuting(false)
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
          <ActionLink to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'} tone="primary">
            Back to Explorer
          </ActionLink>
        }
      />
    )
  }

  if (!draft || !draftReadiness) return null

  const stageOptions = draft.stages.map((stage) => ({
    label: stage.stageName || 'Untitled stage',
    value: stage.editorId,
  }))
  const jobWorkspaceActive = Boolean(editingStage && editingJob)
  const inspectorModeLabel =
    selectedItem?.kind === 'job'
      ? 'Job inspector'
      : selectedItem?.kind === 'stage'
        ? 'Stage inspector'
        : 'Pipeline overview'
  const inspectorTitle =
    selectedItem?.kind === 'job'
      ? selectedJob?.jobName || 'Untitled job'
      : selectedItem?.kind === 'stage'
        ? selectedStage?.stageName || 'Untitled stage'
        : draft.pipelineName || (createMode ? 'New pipeline' : 'Pipeline config')
  const inspectorDetail =
    selectedItem?.kind === 'job'
      ? selectedStage
        ? `Selected job inside ${selectedStage.stageName || 'untitled stage'}.`
        : 'Selected job context.'
      : selectedItem?.kind === 'stage'
        ? 'Selected stage context for lane-level edits.'
        : draftReadiness.guidance
  const contextSelectionValue =
    selectedItem?.kind === 'job'
      ? selectedJob?.jobName || 'Job'
      : selectedItem?.kind === 'stage'
        ? selectedStage?.stageName || 'Stage'
        : 'Pipeline'
  const contextSelectionDetail =
    selectedItem?.kind === 'job'
      ? 'Selected job'
      : selectedItem?.kind === 'stage'
        ? 'Selected stage'
        : 'No selection'

  return (
    <div className="iris-page-canvas flex h-full min-h-0 flex-col overflow-hidden">
      {createMode ? (
        <div className="shrink-0 px-5 pt-4">
          <div className="flex items-center justify-between gap-3 rounded-[var(--iris-radius-section)] border border-base-300/60 bg-base-100/60 px-4 py-2.5">
            <div className="breadcrumbs min-w-0 text-[11px] text-base-content/52">
              <ul>
                <li>
                  <Link to="/pipeline">Explorer</Link>
                </li>
                {Number.isFinite(targetFolderId) ? (
                  <li>
                    <Link to={`/pipeline/folders/${targetFolderId}`}>Folder #{targetFolderId}</Link>
                  </li>
                ) : null}
                <li className="font-semibold text-base-content">New pipeline</li>
              </ul>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <ActionLink tone="ghost" to="/pipeline">
                Back to Explorer
              </ActionLink>
              {Number.isFinite(targetFolderId) ? (
                <ActionLink tone="ghost" to={`/pipeline/folders/${targetFolderId}`}>
                  Folder #{targetFolderId}
                </ActionLink>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <div className="shrink-0 px-5 pt-4">
        <PipelineContextStrip
          eyebrow={createMode ? 'Draft config' : 'Config workspace'}
          title={draft.pipelineName || (createMode ? 'New pipeline' : 'Pipeline config')}
          detail={
            selectedItem
              ? `${inspectorDetail} ${draftReadiness.headline}`
              : draftReadiness.guidance
          }
          metrics={[
            {
              label: 'Stages',
              value: draft.stages.length,
              detail: 'Topology lanes',
              tone: 'neutral',
            },
            {
              label: 'Jobs',
              value: draftJobCount,
              detail: 'Draft jobs',
              tone: 'neutral',
            },
            {
              label: 'Issues',
              value: draftReadiness.issueCount,
              detail: draftReadiness.issueCount > 0 ? 'Validation findings' : 'Runnable',
              tone: draftReadiness.issueCount > 0 ? 'warning' : 'success',
            },
            {
              label: 'Context',
              value: contextSelectionValue,
              detail: contextSelectionDetail,
              tone: selectedItem ? 'primary' : 'neutral',
            },
          ]}
          actions={(
            <>
              <ActionButton
                tone="toolbar"
                onClick={() => {
                  setImportDialogOpen(true)
                  setImportError(null)
                  setError(null)
                }}
              >
                <FileUp size={14} />
                Import File
              </ActionButton>
              <ActionButton
                tone="ghost"
                onClick={() => {
                  insertStageAfter()
                }}
              >
                <Plus size={14} />
                Add Stage
              </ActionButton>
              {!createMode ? (
                <ActionButton
                  tone="outline"
                  className="border-success/30 text-success hover:bg-success/8"
                  disabled={executing || draftReadiness.issueCount > 0}
                  title={draftReadiness.issueCount > 0 ? 'Resolve validation blockers before executing this pipeline.' : 'Start a fresh logical run from the current saved pipeline definition.'}
                  onClick={() => void handleExecute()}
                >
                  <Zap size={14} className={executing ? 'animate-pulse' : ''} />
                  {executing ? 'Launching...' : 'Execute'}
                </ActionButton>
              ) : null}
              <ActionButton tone="primary" disabled={saving} onClick={() => void handleSave()}>
                <Save size={14} />
                {saving ? 'Saving...' : createMode ? 'Create Pipeline' : 'Save Pipeline'}
              </ActionButton>
            </>
          )}
        />
      </div>

      {error ? <div className="border-b border-base-300 bg-error/8 px-6 py-3 text-sm text-error">{error}</div> : null}

      <div className="iris-workspace-shell relative flex min-h-0 flex-1 overflow-hidden">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <main className="min-h-0 flex-1 overflow-hidden">
            <StageLaneBoard
              mode="topology"
              stages={stageLanes}
              emptyTitle="No stages"
              emptyDescription="Add the first stage to begin defining this pipeline."
              onMoveStage={moveStageById}
              onMoveJob={moveJobById}
            />
          </main>

          <div
            className={`iris-workspace-dock shrink-0 overflow-hidden transition-[height] duration-200 ${
              jobWorkspaceActive && editingStage && editingJob ? 'h-[360px] xl:h-[420px]' : 'h-[56px]'
            }`}
          >
            {jobWorkspaceActive && editingStage && editingJob ? (
              <JobWorkspacePanel
                stage={editingStage}
                job={editingJob}
                stageOptions={stageOptions}
                validation={validationSummary}
                onDismiss={() => setEditingJobTarget(null)}
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
            ) : (
              <CollapsedJobWorkspaceHint
                selectedStageName={selectedStage?.stageName}
                selectedJobName={selectedJob?.jobName}
                onOpenSelectedJob={
                  selectedStage && selectedJob ? () => openJobEditor(selectedStage.editorId, selectedJob.editorId) : undefined
                }
              />
            )}
          </div>
        </div>

        <PipelineOverviewRail
          widthClassName="w-[300px] xl:w-[316px]"
          headerClassName="px-4 py-3"
          bodyClassName="px-4 py-4"
          header={(
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="iris-kicker">{inspectorModeLabel}</div>
                  <div className="mt-1 truncate text-sm font-semibold text-base-content">{inspectorTitle}</div>
                  <div className="mt-1 text-[11px] iris-copy">{inspectorDetail}</div>
                </div>
                {selectedItem ? (
                  <span className="badge badge-primary badge-sm shrink-0">{selectedItem.kind}</span>
                ) : (
                  <span className="badge badge-ghost badge-sm shrink-0">Overview</span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="badge badge-ghost badge-sm">{draftReadiness.headline}</span>
                <span className="badge badge-ghost badge-sm">Context only</span>
              </div>
            </div>
          )}
        >
          {selectedStage && selectedItem?.kind === 'stage' ? (
            <StageEditorPanel
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
          ) : selectedStage && selectedJob && selectedItem?.kind === 'job' ? (
            <JobInspectorPanel
              job={selectedJob}
              validation={validationSummary}
              onOpenEditor={() => openJobEditor(selectedStage.editorId, selectedJob.editorId)}
              onRemoveJob={() => removeJobFromStage(selectedStage.editorId, selectedJob.editorId)}
              onDismiss={() => setSelectedItem(null)}
            />
          ) : (
            <PipelineOverviewInspector
              draft={draft}
              draftReadiness={draftReadiness}
              validation={validationSummary}
              issues={issues}
              onPipelineNameChange={(value) => {
                setDraft((current) => (current ? { ...current, pipelineName: value } : current))
                workspace?.setDirty(true)
              }}
            />
          )}
        </PipelineOverviewRail>
      </div>

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

function CollapsedJobWorkspaceHint({
  selectedStageName,
  selectedJobName,
  onOpenSelectedJob,
}: {
  selectedStageName?: string
  selectedJobName?: string
  onOpenSelectedJob?: () => void
}) {
  return (
    <div className="flex h-full items-center justify-between gap-3 px-4">
      <div className="min-w-0">
        <div className="iris-kicker">Job Workspace Dock</div>
        <div className="mt-1 truncate text-sm font-semibold text-base-content/78">
          {selectedJobName
            ? `${selectedJobName} is selected`
            : 'Select a job node to open the workspace'}
        </div>
        <div className="mt-0.5 truncate text-[11px] iris-copy-soft">
          {selectedJobName && selectedStageName
            ? `Keep topology visible while editing ${selectedStageName}.`
            : 'Topology stays visible while the editor opens from the bottom dock.'}
        </div>
      </div>
      {onOpenSelectedJob ? (
        <ActionButton tone="ghost" onClick={onOpenSelectedJob}>
          <Pencil size={13} />
          Open Workspace
        </ActionButton>
      ) : null}
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
      <div className="flex items-center justify-end gap-2 border-b border-base-300/60 px-5 py-3">
        {issueCount > 0 ? <span className="badge badge-warning badge-sm">{issueCount} issues</span> : null}
        <ActionButton size="sm" tone="icon" square className="shrink-0" aria-label="Close stage editor" onClick={onDismiss}>
          <X size={16} />
        </ActionButton>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="space-y-5">
          <SurfaceBox variant="section" className="p-4">
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
              <ActionButton tone="ghost" disabled={stageIndex === 0} onClick={() => onMoveStage(-1)}>
                <ArrowLeft size={14} />
                Move Left
              </ActionButton>
              <ActionButton
                tone="ghost"
                disabled={stageIndex >= stageCount - 1}
                onClick={() => onMoveStage(1)}
              >
                Move Right
                <ArrowRight size={14} />
              </ActionButton>
              <ActionButton tone="primary" onClick={onAddJob}>
                <Plus size={14} />
                Add Job
              </ActionButton>
              <span className="text-xs text-base-content/40">
                {stageCount > 1 ? `Lane ${stageIndex + 1} of ${stageCount}` : 'Single stage pipeline'}
              </span>
            </div>
            <FieldMessages messages={stageJobErrors} className="mt-3" />
          </SurfaceBox>

          <SurfaceBox variant="section" className="p-4">
            <div className="iris-header">Stage Actions</div>
            <div className="mt-2 text-sm text-base-content/55">
              Removing a stage also removes the jobs defined inside it.
            </div>
            <div className="mt-4">
              <ActionButton tone="dangerGhost" onClick={onRemoveStage}>
                <Trash2 size={14} />
                Delete Stage
              </ActionButton>
            </div>
          </SurfaceBox>
        </div>
      </div>
    </div>
  )
}

function PipelineOverviewInspector({
  draft,
  draftReadiness,
  validation,
  issues,
  onPipelineNameChange,
}: {
  draft: PipelineDraft
  draftReadiness: NonNullable<ReturnType<typeof buildConfigReadinessSummary>>
  validation: DraftValidationSummary
  issues: string[]
  onPipelineNameChange: (value: string) => void
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <SurfaceBox variant="section" className="p-4">
          <div className="iris-header">Pipeline Name</div>
          <label className="form-control mt-3">
            <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">Pipeline Name</span>
            <input
              type="text"
              className={getControlClass(hasPipelineFieldIssue(validation, 'pipelineName'), 'input input-bordered w-full')}
              value={draft.pipelineName}
              onChange={(event) => onPipelineNameChange(event.target.value)}
              placeholder="pipeline_name"
            />
            <FieldMessages messages={getPipelineFieldMessages(validation, 'pipelineName')} />
          </label>
        </SurfaceBox>

        <div className="grid grid-cols-2 gap-2.5">
          <SharedSummaryTile kicker="Stages" value={draftReadiness.stageCount} detail="Stage lanes" tone="neutral" className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Jobs Ready" value={`${draftReadiness.readyJobs}/${draftReadiness.jobCount}`} detail="Runnable jobs" tone="success" className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Steps" value={draftReadiness.stepCount} detail="Configured steps" tone="neutral" className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Issues" value={draftReadiness.issueCount} detail="Validation findings" tone={draftReadiness.issueCount > 0 ? 'warning' : 'success'} className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Source Conn" value={draftReadiness.sourceConfiguredJobs} detail="Source ready" tone="info" className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Dest Conn" value={draftReadiness.destConfiguredJobs} detail="Destination ready" tone="info" className="px-3 py-2.5" />
        </div>

        <div
          className={`iris-section-panel mt-4 p-4 ${
            draftReadiness.issueCount === 0
              ? 'border-success/20 bg-success/5'
              : draftReadiness.issueCount <= 3
                ? 'border-warning/20 bg-warning/5'
                : 'border-error/20 bg-error/5'
          }`}
        >
          <div
            className={`iris-header ${
              draftReadiness.issueCount === 0
                ? 'text-success'
                : draftReadiness.issueCount <= 3
                  ? 'text-warning'
                  : 'text-error'
            }`}
          >
            {draftReadiness.headline}
          </div>
          <div className="mt-2 text-[11px] iris-copy">{draftReadiness.guidance}</div>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
            <span className="badge badge-ghost badge-sm">{draftReadiness.stageCount} stage lanes</span>
            <span className="badge badge-ghost badge-sm">{draftReadiness.jobCount} runtime jobs</span>
            <span className="badge badge-ghost badge-sm">{draftReadiness.warningJobs} jobs still need review</span>
          </div>
        </div>

        {issues.length > 0 ? (
          <div className="iris-section-panel mt-4 border-warning/30 bg-warning/8 p-4">
            <div className="iris-header text-warning">Validation Issues</div>
            <div className="mt-2 text-[11px] text-warning/80">
              Badges on stage lanes and job cards show where fixes are needed.
            </div>
            <ul className="mt-3 space-y-2 text-[13px]">
              {issues.slice(0, 6).map((issue) => (
                <li key={issue} className="leading-relaxed text-warning">
                  {issue}
                </li>
              ))}
            </ul>
            {issues.length > 6 ? (
              <div className="mt-3 text-xs font-medium text-warning/80">+ {issues.length - 6} more issues</div>
            ) : null}
          </div>
        ) : (
          <div className="iris-section-panel mt-4 border-success/20 bg-success/5 p-4 text-sm text-success">
            No validation issues
          </div>
        )}
      </div>
    </div>
  )
}

function JobInspectorPanel({
  job,
  validation,
  onOpenEditor,
  onRemoveJob,
  onDismiss,
}: {
  job: EditableJob
  validation: DraftValidationSummary
  onOpenEditor: () => void
  onRemoveJob: () => void
  onDismiss: () => void
}) {
  const semantic = getConfigJobSemanticSummary(job, validation)
  const jobMessages = validation.jobMessages.get(job.editorId) ?? []

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-end gap-2 border-b border-base-300/60 px-5 py-3">
        <span className={`badge badge-sm ${semantic.issueCount > 0 ? 'badge-warning' : 'badge-success'}`}>
          {semantic.issueCount > 0 ? `${semantic.issueCount} issues` : 'Ready to edit'}
        </span>
        <ActionButton size="sm" tone="icon" square className="shrink-0" aria-label="Close inspector" onClick={onDismiss}>
          <X size={16} />
        </ActionButton>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <div className="grid grid-cols-2 gap-2.5">
          <SharedSummaryTile kicker="Atomic" value={job.setting.atomicLevel ?? 'JOB'} detail="Execution level" tone="neutral" className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Steps" value={job.executions.length} detail="Job steps" tone="neutral" className="px-3 py-2.5" />
          <SharedSummaryTile kicker="State" value={semantic.state} detail="Semantic state" tone={semantic.state === 'error' ? 'error' : semantic.state === 'warning' ? 'warning' : 'success'} className="px-3 py-2.5" />
          <SharedSummaryTile kicker="Connections" value={semantic.connectionSummary} detail="Connection wiring" tone="info" className="px-3 py-2.5" />
        </div>

        <SurfaceBox variant="section" className="mt-4 p-4">
          <div className="iris-header">Selected Job</div>
          <div className="mt-3 space-y-2 text-sm text-base-content/60">
            <div>{semantic.connectionSummary}</div>
            <div>{semantic.stepSummary}</div>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <ActionButton tone="primary" onClick={onOpenEditor}>
                <Pencil size={14} />
                Open Job Workspace
              </ActionButton>
              <ActionButton tone="dangerGhost" onClick={onRemoveJob}>
                <Trash2 size={14} />
                Delete Job
              </ActionButton>
            </div>
          </div>
        </SurfaceBox>

        {jobMessages.length > 0 ? (
          <div className="iris-section-panel mt-4 border-warning/30 bg-warning/8 p-4">
            <div className="iris-header text-warning">Job Issues</div>
            <ul className="mt-3 space-y-2 text-[13px]">
              {jobMessages.slice(0, 5).map((message) => (
                <li key={message} className="leading-relaxed text-warning">
                  {message}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

type JobWorkspacePanelProps = {
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

function JobWorkspacePanel({
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
}: JobWorkspacePanelProps) {
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
  const filteredSteps = job.executions.filter((step) =>
    stepFilter.trim() === ''
      ? true
      : (step.name ?? '').toLowerCase().includes(stepFilter.trim().toLowerCase()),
  )
  const jobSemantic = getConfigJobSemanticSummary(job, validation)
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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onDismiss()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onDismiss])

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      <div className="iris-family-shell flex shrink-0 items-center gap-3 px-4 py-3">
        <button type="button" className="btn btn-ghost btn-sm gap-2" onClick={onDismiss}>
          <ArrowLeft size={14} />
          Close workspace
        </button>
        <span className="badge badge-primary badge-sm font-semibold">{stage.stageName || 'Stage'}</span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-bold">{job.jobName || 'Untitled job'}</div>
          <div className="truncate text-[11px] iris-copy-soft">{jobSemantic.connectionSummary}</div>
        </div>
        <div className="iris-signal-strip hidden items-center gap-2 px-3 py-1.5 md:flex">
          <span className="badge badge-ghost badge-sm">{job.executions.length} steps</span>
          <span className={`badge badge-sm ${jobSemantic.issueCount > 0 ? 'badge-warning' : 'badge-success'}`}>
            {jobSemantic.issueCount > 0 ? `${jobSemantic.issueCount} issues` : 'Ready to edit'}
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 overflow-hidden iris-workspace-shell">
        <aside className="iris-inspector-rail w-[320px] shrink-0 overflow-y-auto border-r">
          <div className="space-y-4 px-4 py-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <SharedSummaryTile
                kicker="Stage"
                value={stage.stageName || 'Unnamed'}
                detail={jobSemantic.connectionSummary}
                tone="primary"
                className="px-3.5 py-3"
                valueClassName="text-base"
              />
              <SharedSummaryTile
                kicker="Atomic"
                value={job.setting.atomicLevel ?? 'JOB'}
                detail={jobSemantic.stepSummary}
                tone={jobSemantic.issueCount > 0 ? 'warning' : 'success'}
                className="px-3.5 py-3"
                valueClassName="text-base"
              />
            </div>

            <div className="iris-section-panel overflow-hidden">
              <PanelHeader kicker="Job Identity" title="Core semantics" detail="Name, atomic level, and placement determine how this job behaves at runtime." />
              <div className="space-y-4 p-4">
              <label className="form-control mt-4">
                <span className="mb-2 iris-kicker">Job Name</span>
                <input
                  type="text"
                  className={getControlClass(jobNameErrors.length > 0, 'input input-bordered w-full')}
                  value={job.jobName}
                  onChange={(event) => onChange((current) => ({ ...current, jobName: event.target.value }))}
                  placeholder="job_name"
                />
                <FieldMessages messages={jobNameErrors} />
              </label>
              <label className="form-control mt-4">
                <span className="mb-2 iris-kicker">Atomic Level</span>
                <select
                  className={getControlClass(atomicLevelErrors.length > 0, 'select select-bordered w-full')}
                  value={job.setting.atomicLevel ?? 'JOB'}
                  onChange={(event) =>
                    onChange((current) => ({
                      ...current,
                      setting: { ...current.setting, atomicLevel: event.target.value as EditableJob['setting']['atomicLevel'] },
                    }))
                  }
                >
                  <option value="JOB">JOB</option>
                  <option value="CHUNK">CHUNK</option>
                </select>
                <FieldMessages messages={atomicLevelErrors} />
              </label>
              </div>
            </div>

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

            <div className="iris-section-panel overflow-hidden">
              <PanelHeader kicker="Batch Settings" detail="Tune fetch, batch, and delete thresholds for this job only." />
              <div className="grid grid-cols-2 gap-2 p-4">
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

            <div className="iris-section-panel overflow-hidden">
              <PanelHeader kicker="Stage Placement" detail="Move this job across topology lanes without leaving the workspace." />
              <div className="space-y-2 p-4">
                <select
                  className="select select-bordered w-full"
                  value={stage.editorId}
                  onChange={(event) => onMoveToStage(event.target.value)}
                >
                  {stageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm flex-1"
                    disabled={!previousStage}
                    onClick={() => previousStage && onMoveToStage(previousStage.value)}
                  >
                    <ArrowLeft size={12} />
                    Prev
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm flex-1"
                    disabled={!nextStage}
                    onClick={() => nextStage && onMoveToStage(nextStage.value)}
                  >
                    Next
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            <div className="iris-section-panel overflow-hidden border-error/20 bg-error/5">
              <PanelHeader kicker="Job Actions" detail="This removes the job from its stage lane and topology." className="border-error/20" />
              <div className="p-4">
                <FieldMessages messages={executionsErrors} className="mb-3" />
                <ActionButton
                  tone="dangerGhost"
                  className="w-full justify-start"
                  onClick={onRemoveJob}
                >
                  <Trash2 size={13} />
                  Delete Job
                </ActionButton>
              </div>
            </div>
          </div>
        </aside>

        <aside className="iris-inspector-rail flex w-[276px] shrink-0 flex-col border-r">
          <div className="iris-editor-toolbar px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="iris-header">Step Navigator</div>
                <div className="mt-1 text-xs iris-copy-soft">
                  {job.executions.length} total · {jobSemantic.stepSummary}
                </div>
              </div>
              <ActionButton size="xs" tone="primary" onClick={handleAddStep}>
                <Plus size={11} />
                Add
              </ActionButton>
            </div>
            <input
              type="text"
              placeholder="Filter steps..."
              className="input input-sm input-bordered mt-3 w-full"
              value={stepFilter}
              onChange={(event) => setStepFilter(event.target.value)}
            />
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
            {filteredSteps.length === 0 ? (
              <div className="iris-empty-panel px-4 py-4 text-center text-[11px] text-base-content/45">
                No steps match this filter.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredSteps.map((step, index) => {
                  const stepIssues = validation.stepIssues.get(step.editorId) ?? 0
                  const isSelected = selectedStep?.editorId === step.editorId
                  const originalIndex = job.executions.findIndex((candidate) => candidate.editorId === step.editorId)
                  return (
                    <button
                      key={step.editorId}
                      type="button"
                      className={`iris-step-nav-item w-full px-3 py-3 text-left transition-all ${
                        isSelected
                          ? 'border-primary/35 bg-primary/6 shadow-sm'
                          : stepIssues > 0
                            ? 'border-warning/35 bg-warning/8'
                            : 'hover:border-primary/20 hover:bg-base-100'
                      }`}
                      onClick={() => setSelectedStepEditorId(step.editorId)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="truncate text-[12px] font-semibold text-base-content/82">
                            {step.name?.trim() || `Step ${originalIndex + 1}`}
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px] iris-copy-soft">
                            <span>{step.type}</span>
                            <span>·</span>
                            <span>{step.sql.length} chars</span>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-1.5">
                          {stepIssues > 0 ? <span className="badge badge-warning badge-xs">{stepIssues}</span> : null}
                          <span className="iris-mono-meta">#{index + 1}</span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </aside>

        <section className="min-w-0 flex-1 overflow-hidden bg-base-100">
          {selectedStep ? (
            <InlineStepEditor
              step={selectedStep}
              stepIndex={job.executions.findIndex((candidate) => candidate.editorId === selectedStep.editorId)}
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
            <div className="flex h-full items-center justify-center px-6 text-sm text-base-content/45">
              No steps yet. Add a step to start defining this job.
            </div>
          )}
        </section>
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
      <div className="iris-editor-toolbar flex shrink-0 flex-wrap items-center gap-2 px-4 py-3">
        <div className="iris-signal-strip flex items-center gap-2 px-2 py-1.5">
          <span className="badge badge-ghost badge-sm">Step {stepIndex + 1}</span>
          <select
            className="select select-xs select-bordered w-[118px] shrink-0"
            value={step.type}
            onChange={(event) => onChange((current) => ({ ...current, type: event.target.value as ExecutionType }))}
          >
            <option value="EXECUTE">EXECUTE</option>
            <option value="INSERT">INSERT</option>
            <option value="UPDATE">UPDATE</option>
            <option value="UPSERT">UPSERT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <span className="shrink-0 font-mono text-[10px] iris-copy-soft">{step.sql.length} chars</span>
          {issueCount > 0 ? <span className="badge badge-warning badge-xs shrink-0">{issueCount}</span> : null}
        </div>
        <input
          type="text"
          className="input input-sm input-bordered min-w-[220px] flex-1"
          value={step.name ?? ''}
          placeholder="step name"
          onChange={(event) => onChange((current) => ({ ...current, name: event.target.value }))}
        />
        <div className="flex items-center gap-1">
          <ActionButton size="xs" tone="ghost" disabled={stepIndex === 0} onClick={() => onMove(-1)}>
            <ArrowUp size={11} />
            Up
          </ActionButton>
          <ActionButton size="xs" tone="ghost" disabled={stepIndex >= stepCount - 1} onClick={() => onMove(1)}>
            <ArrowDown size={11} />
            Down
          </ActionButton>
          <ActionButton size="xs" tone="dangerGhost" onClick={onRemove}>
            <Trash2 size={11} />
            Remove
          </ActionButton>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto space-y-4 p-4">
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

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-base-content/35">
              Parameters{step.parameters.length > 0 ? ` (${step.parameters.length})` : ''}
            </span>
            <ActionButton size="xs" tone="ghost" onClick={onAddParameter}>
              <Plus size={11} />
              Add
            </ActionButton>
          </div>
          {step.parameters.length === 0 ? (
            <div className="iris-empty-panel px-4 py-4 text-center text-[11px] text-base-content/45">
              No parameters
            </div>
          ) : (
            <div className="iris-list-panel divide-y divide-base-300/60">
              {step.parameters.map((parameter) => (
                <div
                  key={parameter.editorId}
                  className="grid items-center gap-2 px-3 py-3"
                  style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) 110px auto' }}
                >
                  <label className="form-control">
                    <span className="mb-1 iris-kicker">Name</span>
                    <input
                      type="text"
                      className="input input-bordered input-xs"
                      placeholder="name"
                      value={parameter.param}
                      onChange={(event) => onUpdateParameter(parameter.editorId, (current) => ({ ...current, param: event.target.value }))}
                    />
                  </label>
                  <label className="form-control">
                    <span className="mb-1 iris-kicker">Value</span>
                    <input
                      type="text"
                      className="input input-bordered input-xs"
                      placeholder="value"
                      value={String(parameter.value ?? '')}
                      onChange={(event) => onUpdateParameter(parameter.editorId, (current) => ({ ...current, value: event.target.value }))}
                    />
                  </label>
                  <label className="form-control">
                    <span className="mb-1 iris-kicker">Type</span>
                    <select
                      className="select select-bordered select-xs"
                      value={parameter.type ?? 'general'}
                      onChange={(event) => onUpdateParameter(parameter.editorId, (current) => ({ ...current, type: event.target.value as EditableParameter['type'] }))}
                    >
                      <option value="general">general</option>
                      <option value="timestamp">timestamp</option>
                    </select>
                  </label>
                  <ActionButton size="xs" tone="dangerGhost" className="mt-4" onClick={() => onRemoveParameter(parameter.editorId)}>
                    <Trash2 size={11} />
                    Remove
                  </ActionButton>
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
    <div className={`iris-section-panel overflow-hidden shadow-sm transition-colors ${hasErrors ? 'border-warning/50' : 'border-base-300/60'}`}>
      <div className={`flex items-center justify-between border-b px-4 py-3 ${hasErrors ? 'bg-warning/5 border-warning/20' : 'bg-base-200/34 border-base-300/60'}`}>
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
              <ul tabIndex={0} className="dropdown-content z-10 menu menu-xs w-52 border border-base-300 bg-base-100 p-2 shadow-lg">
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


