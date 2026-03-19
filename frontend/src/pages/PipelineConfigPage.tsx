import '@xyflow/react/dist/style.css'
import { useEdgesState, useNodesState, type Edge, type ReactFlowInstance } from '@xyflow/react'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Database,
  FolderTree,
  Plus,
  Save,
  Server,
  Settings,
  Shapes,
  Trash2,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PipelineCanvas } from '../components/GraphEngine/PipelineCanvas'
import {
  createPipelineConfig,
  getApiErrorMessage,
  getPipelineTree,
  updatePipelineConfig,
} from '../lib/api'
import {
  createBlankConnection,
  createBlankJob,
  createBlankParameter,
  createBlankStep,
  draftToPayload,
  isConnectionConfigured,
  pipelineToDraft,
  type EditableJob,
  type EditableParameter,
  type EditableStep,
  type PipelineDraft,
  validatePipelineDraft,
} from '../lib/pipeline-draft'
import { findFolderPath } from '../lib/tree'
import type { PipelineJobNode } from '../types/graph'
import type { AtomicLevel, ConfigPipelineInfo, ExecutionType, PipelineTreeInfo } from '../types/irispipe'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'

const INITIAL_NODE_X = 160
const INITIAL_NODE_Y = 220
const NODE_SPACING = 420

const EXECUTION_TYPES: ExecutionType[] = ['INSERT', 'UPDATE', 'UPSERT', 'DELETE', 'EXECUTE']
const ATOMIC_LEVELS: AtomicLevel[] = ['JOB', 'CHUNK']

export function PipelineConfigPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const workspace = useOutletContext<PipelineWorkspaceContext | undefined>()
  const isDraft = !pipelineId

  const [draftTree, setDraftTree] = useState<PipelineTreeInfo | null>(null)
  const [draft, setDraft] = useState<PipelineDraft | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [saveAttempted, setSaveAttempted] = useState(false)
  const [saving, setSaving] = useState(false)
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState<PipelineJobNode>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

  const flowRef = useRef<ReactFlowInstance<PipelineJobNode, Edge> | null>(null)

  const numericFolderId = Number(searchParams.get('folderId')) || null
  const config: ConfigPipelineInfo | null = isDraft ? null : workspace?.pipeline ?? null
  const tree: PipelineTreeInfo | null = isDraft ? draftTree : workspace?.tree ?? null

  const folderPathNodes = useMemo(() => {
    if (isDraft) {
      if (!tree || !numericFolderId) return []
      return findFolderPath(tree, numericFolderId)
    }

    return workspace?.folderPathNodes ?? []
  }, [isDraft, tree, numericFolderId, workspace?.folderPathNodes])

  const jobs = draft?.jobs ?? []
  const selectedJob = jobs.find((job) => job.editorId === selectedJobId) ?? null

  const configuredSourceCount = useMemo(
    () => jobs.filter((job) => isConnectionConfigured(job.database.source)).length,
    [jobs],
  )
  const configuredDestCount = useMemo(
    () => jobs.filter((job) => isConnectionConfigured(job.database.dest)).length,
    [jobs],
  )
  const executionStepCount = useMemo(
    () => jobs.reduce((total, job) => total + job.executions.length, 0),
    [jobs],
  )
  const validationIssues = useMemo(() => (draft ? validatePipelineDraft(draft) : []), [draft])

  useEffect(() => {
    if (!isDraft) return

    let active = true
    void (async () => {
      setLoading(true)
      setError(null)
      try {
        const treeResponse = await getPipelineTree()
        if (!active) return
        setDraftTree(treeResponse)
        setDraft((current) =>
          current ?? { folderId: numericFolderId ?? null, pipelineName: 'New Pipeline', jobs: [] },
        )
      } catch (loadError) {
        if (!active) return
        setError(getApiErrorMessage(loadError, 'Failed to load pipeline definition workspace'))
      } finally {
        if (active) setLoading(false)
      }
    })()

    return () => {
      active = false
    }
  }, [isDraft, numericFolderId])

  useEffect(() => {
    if (isDraft) return
    if (!workspace?.pipeline) return

    setDraft(pipelineToDraft(workspace.pipeline))
    setSelectedJobId(null)
    setSaveError(null)
    setSaveAttempted(false)
    setLoading(false)
  }, [isDraft, workspace?.pipeline])

  useEffect(() => {
    if (!draft) {
      setNodes([])
      setEdges([])
      return
    }

    setNodes((currentNodes) => buildLinearNodes(draft.jobs, currentNodes, selectedJobId))
    setEdges(buildLinearEdges(draft.jobs))
  }, [draft, selectedJobId, setEdges, setNodes])

  useEffect(() => {
    if (!selectedJobId) return
    if (jobs.some((job) => job.editorId === selectedJobId)) return
    setSelectedJobId(null)
  }, [jobs, selectedJobId])

  useEffect(() => {
    if (!flowRef.current || jobs.length === 0) return
    const timer = setTimeout(() => {
      flowRef.current?.fitView({ padding: 0.32, duration: 450 })
    }, 100)
    return () => clearTimeout(timer)
  }, [jobs.length])

  function updateDraft(updater: (current: PipelineDraft) => PipelineDraft) {
    setDraft((current) => (current ? updater(current) : current))
  }

  function updateJob(editorId: string, updater: (job: EditableJob) => EditableJob) {
    updateDraft((current) => ({
      ...current,
      jobs: current.jobs.map((job) => (job.editorId === editorId ? updater(job) : job)),
    }))
  }

  function updateStep(jobId: string, stepId: string, updater: (step: EditableStep) => EditableStep) {
    updateJob(jobId, (job) => ({
      ...job,
      executions: job.executions.map((step) => (step.editorId === stepId ? updater(step) : step)),
    }))
  }

  function updateConnection(
    jobId: string,
    kind: 'source' | 'dest',
    field: keyof NonNullable<EditableJob['database']['source']>,
    value: string,
  ) {
    updateJob(jobId, (job) => ({
      ...job,
      database: {
        ...job.database,
        [kind]: job.database[kind]
          ? { ...job.database[kind], [field]: value }
          : { ...createBlankConnection(), [field]: value },
      },
    }))
  }

  function toggleConnection(jobId: string, kind: 'source' | 'dest', enabled: boolean) {
    updateJob(jobId, (job) => ({
      ...job,
      database: { ...job.database, [kind]: enabled ? createBlankConnection() : null },
    }))
  }

  function addJob() {
    const nextJob = createBlankJob(jobs.length)
    updateDraft((current) => ({ ...current, jobs: [...current.jobs, nextJob] }))
    setSelectedJobId(nextJob.editorId)
    setSaveAttempted(false)
    setSaveError(null)
  }

  function removeJob(editorId: string) {
    updateDraft((current) => ({ ...current, jobs: current.jobs.filter((job) => job.editorId !== editorId) }))
    if (selectedJobId === editorId) setSelectedJobId(null)
  }

  function moveJob(editorId: string, direction: -1 | 1) {
    updateDraft((current) => {
      const index = current.jobs.findIndex((job) => job.editorId === editorId)
      const nextIndex = index + direction
      if (index < 0 || nextIndex < 0 || nextIndex >= current.jobs.length) return current

      const nextJobs = [...current.jobs]
      const [moved] = nextJobs.splice(index, 1)
      nextJobs.splice(nextIndex, 0, moved)

      return { ...current, jobs: nextJobs }
    })
  }

  function addStep(jobId: string, type: ExecutionType = 'EXECUTE') {
    updateJob(jobId, (job) => ({ ...job, executions: [...job.executions, createBlankStep(type)] }))
  }

  function removeStep(jobId: string, stepId: string) {
    updateJob(jobId, (job) => ({
      ...job,
      executions: job.executions.filter((step) => step.editorId !== stepId),
    }))
  }

  function moveStep(jobId: string, stepId: string, direction: -1 | 1) {
    updateJob(jobId, (job) => {
      const index = job.executions.findIndex((step) => step.editorId === stepId)
      const nextIndex = index + direction
      if (index < 0 || nextIndex < 0 || nextIndex >= job.executions.length) return job

      const nextSteps = [...job.executions]
      const [moved] = nextSteps.splice(index, 1)
      nextSteps.splice(nextIndex, 0, moved)

      return { ...job, executions: nextSteps }
    })
  }

  function addParameter(jobId: string, stepId: string) {
    updateStep(jobId, stepId, (step) => ({ ...step, parameters: [...step.parameters, createBlankParameter()] }))
  }

  function updateParameter(jobId: string, stepId: string, parameterId: string, updater: (parameter: EditableParameter) => EditableParameter) {
    updateStep(jobId, stepId, (step) => ({
      ...step,
      parameters: step.parameters.map((parameter) =>
        parameter.editorId === parameterId ? updater(parameter) : parameter,
      ),
    }))
  }

  function removeParameter(jobId: string, stepId: string, parameterId: string) {
    updateStep(jobId, stepId, (step) => ({
      ...step,
      parameters: step.parameters.filter((parameter) => parameter.editorId !== parameterId),
    }))
  }

  function resetDraft() {
    if (isDraft) {
      setDraft({ folderId: numericFolderId ?? null, pipelineName: 'New Pipeline', jobs: [] })
    } else if (workspace?.pipeline) {
      setDraft(pipelineToDraft(workspace.pipeline))
    }

    setSelectedJobId(null)
    setSaveAttempted(false)
    setSaveError(null)
  }

  async function handleSave() {
    if (!draft) return

    const issues = validatePipelineDraft(draft)
    setSaveAttempted(true)
    setSaveError(null)

    if (issues.length > 0) {
      setSaveError(issues[0])
      return
    }

    setSaving(true)
    try {
      const payload = draftToPayload(draft)

      if (isDraft) {
        const created = await createPipelineConfig(payload)
        navigate(`/pipeline/items/${created.id}/config${created.folderId ? `?folderId=${created.folderId}` : ''}`, {
          replace: true,
        })
        return
      }

      if (!config) {
        throw new Error('Pipeline workspace is missing.')
      }

      const updated = await updatePipelineConfig(config.id, payload)
      workspace?.applyPipeline(updated)
      setDraft(pipelineToDraft(updated))
      setSaveAttempted(false)
      setSelectedJobId(null)
    } catch (saveActionError) {
      setSaveError(getApiErrorMessage(saveActionError, 'Failed to save pipeline definition'))
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="p-12">
        <LoadingState />
      </div>
    )
  }

  if (error || !draft) {
    return (
      <EmptyState
        icon={FolderTree}
        title="Pipeline config unavailable"
        description={error ?? 'Unable to load the pipeline definition workspace.'}
        action={
          <Link to={numericFolderId ? `/pipeline/folders/${numericFolderId}` : '/pipeline'} className="btn btn-primary">
            Back to Explorer
          </Link>
        }
      />
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      {isDraft ? (
        <header className="z-30 flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-6 py-3">
          <div className="breadcrumbs text-[13px] text-base-content/50">
            <ul>
              <li><Link to="/pipeline">Root</Link></li>
              {folderPathNodes.map((folder) => (
                <li key={folder.id}>
                  <Link to={`/pipeline/folders/${folder.id}`}>{folder.folderName}</Link>
                </li>
              ))}
              <li className="font-bold opacity-100">New Pipeline</li>
            </ul>
          </div>

          <div role="tablist" className="tabs tabs-boxed tabs-sm bg-base-200/60 p-1">
            <span className="tab tab-active h-8 px-4 font-bold">Config</span>
            <span className="tab h-8 cursor-not-allowed px-4 opacity-40">Runs</span>
          </div>
        </header>
      ) : null}

      <div className="relative flex min-h-0 flex-1">
        <main className="relative flex-1 bg-base-200/40">
          <div className="absolute left-4 right-4 top-4 z-20 space-y-3">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-base-300 bg-base-100/90 px-4 py-3 shadow-sm backdrop-blur">
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="flex min-w-0 max-w-xl flex-1 items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Shapes size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">
                      Pipeline Definition
                    </div>
                    <input
                      value={draft.pipelineName}
                      onChange={(event) => setDraft((current) => (current ? { ...current, pipelineName: event.target.value } : current))}
                      className="mt-1 w-full border-0 bg-transparent p-0 text-lg font-bold outline-none placeholder:text-base-content/25"
                      placeholder="Pipeline name"
                    />
                  </div>
                </div>

                <div className="hidden items-center gap-3 xl:flex">
                  <ContextMetric label="Jobs" value={jobs.length} />
                  <ContextDivider />
                  <ContextMetric label="Steps" value={executionStepCount} />
                  <ContextDivider />
                  <ContextMetric label="Source" value={`${configuredSourceCount}/${jobs.length || 0}`} />
                  <ContextDivider />
                  <ContextMetric label="Dest" value={`${configuredDestCount}/${jobs.length || 0}`} />
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button type="button" className="btn btn-ghost btn-sm h-10 gap-2" onClick={resetDraft}>
                  Reset
                </button>
                <button type="button" className="btn btn-ghost btn-sm h-10 gap-2" onClick={addJob}>
                  <Plus size={14} />
                  Add Job
                </button>
                <button type="button" className="btn btn-primary btn-sm h-10 gap-2 px-5" onClick={() => void handleSave()} disabled={saving}>
                  <Save size={14} />
                  {saving ? 'Saving...' : isDraft ? 'Create Pipeline' : 'Save Changes'}
                </button>
              </div>
            </div>

            {saveError || (saveAttempted && validationIssues.length > 0) ? (
              <div className="rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={16} className="mt-0.5 shrink-0 text-warning" />
                  <div className="space-y-1">
                    <div className="font-semibold text-warning-content/90">
                      {saveError ?? 'Pipeline definition is not ready to save.'}
                    </div>
                    {validationIssues.slice(0, 4).map((issue) => (
                      <div key={issue} className="text-xs text-base-content/70">{issue}</div>
                    ))}
                    {validationIssues.length > 4 ? (
                      <div className="text-xs text-base-content/55">+ {validationIssues.length - 4} more validation issue(s)</div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="h-full w-full">
            <PipelineCanvas
              nodes={nodes as any}
              edges={edges}
              onNodesChange={onNodesChange as any}
              onEdgesChange={onEdgesChange as any}
              onNodeClick={(_, node) => setSelectedJobId((node as any).id)}
              onNodeDoubleClick={(_, node) => setSelectedJobId((node as any).id)}
              onInit={(instance) => {
                flowRef.current = instance as any
              }}
              readonly={false}
              fitView
            >
              {jobs.length === 0 ? (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                  <div className="pointer-events-auto rounded-2xl border border-dashed border-primary/40 bg-base-100/95 px-8 py-7 text-center shadow-xl backdrop-blur">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Plus size={28} />
                    </div>
                    <div className="text-lg font-bold">Add first job</div>
                    <div className="mt-2 text-sm text-base-content/55">
                      Start the linear pipeline definition by creating the first job node.
                    </div>
                    <button type="button" className="btn btn-primary btn-sm mt-5 gap-2" onClick={addJob}>
                      <Plus size={14} />
                      Add Job
                    </button>
                  </div>
                </div>
              ) : null}
            </PipelineCanvas>
          </div>
        </main>

        <aside
          className={`z-20 flex w-[520px] flex-col border-l border-base-300 bg-base-100 transition-transform duration-300 ease-out ${
            selectedJob ? 'translate-x-0' : 'absolute right-0 translate-x-full'
          }`}
        >
          {selectedJob ? (
            <>
              <div className="flex items-center justify-between border-b border-base-300 bg-base-200/30 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                    <Settings size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">Job Editor</div>
                    <div className="text-lg font-bold">{selectedJob.jobName || 'Untitled Job'}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                    onClick={() => moveJob(selectedJob.editorId, -1)}
                    disabled={jobs.findIndex((job) => job.editorId === selectedJob.editorId) === 0}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm btn-square"
                    onClick={() => moveJob(selectedJob.editorId, 1)}
                    disabled={jobs.findIndex((job) => job.editorId === selectedJob.editorId) === jobs.length - 1}
                  >
                    <ArrowRight size={16} />
                  </button>
                  <button type="button" className="btn btn-ghost btn-sm btn-square text-error" onClick={() => removeJob(selectedJob.editorId)}>
                    <Trash2 size={16} />
                  </button>
                  <button type="button" className="btn btn-ghost btn-sm btn-square" onClick={() => setSelectedJobId(null)}>
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <section>
                    <div className="iris-header mb-3">Job Summary</div>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Job Name">
                        <input
                          value={selectedJob.jobName}
                          onChange={(event) => updateJob(selectedJob.editorId, (job) => ({ ...job, jobName: event.target.value }))}
                          className="input input-bordered input-sm w-full"
                        />
                      </Field>

                      <Field label="Atomic Level">
                        <select
                          value={selectedJob.setting.atomicLevel ?? 'JOB'}
                          onChange={(event) =>
                            updateJob(selectedJob.editorId, (job) => ({
                              ...job,
                              setting: { ...job.setting, atomicLevel: event.target.value as AtomicLevel },
                            }))
                          }
                          className="select select-bordered select-sm w-full"
                        >
                          {ATOMIC_LEVELS.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Fetch Size">
                        <input
                          value={selectedJob.setting.fetchSize ?? ''}
                          onChange={(event) =>
                            updateJob(selectedJob.editorId, (job) => ({
                              ...job,
                              setting: { ...job.setting, fetchSize: parseNumberInput(event.target.value) },
                            }))
                          }
                          className="input input-bordered input-sm w-full"
                          inputMode="numeric"
                        />
                      </Field>
                      <Field label="Batch Size">
                        <input
                          value={selectedJob.setting.batchSize ?? ''}
                          onChange={(event) =>
                            updateJob(selectedJob.editorId, (job) => ({
                              ...job,
                              setting: { ...job.setting, batchSize: parseNumberInput(event.target.value) },
                            }))
                          }
                          className="input input-bordered input-sm w-full"
                          inputMode="numeric"
                        />
                      </Field>
                      <Field label="Delete Threshold">
                        <input
                          value={selectedJob.setting.deleteThreshold ?? ''}
                          onChange={(event) =>
                            updateJob(selectedJob.editorId, (job) => ({
                              ...job,
                              setting: { ...job.setting, deleteThreshold: parseNumberInput(event.target.value) },
                            }))
                          }
                          className="input input-bordered input-sm w-full"
                          inputMode="numeric"
                        />
                      </Field>
                      <Field label="Execution Count">
                        <div className="rounded-xl border border-base-300 bg-base-200/50 px-3 py-2 text-sm font-semibold">
                          {selectedJob.executions.length}
                        </div>
                      </Field>
                    </div>
                  </section>

                  <section>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="iris-header">Connectivity</div>
                      <div className="flex items-center gap-2 text-xs text-base-content/45">
                        <Server size={12} />
                        Source / Destination
                      </div>
                    </div>
                    <div className="space-y-4">
                      <ConnectionEditor
                        label="Source"
                        icon={Server}
                        enabled={Boolean(selectedJob.database.source)}
                        connection={selectedJob.database.source}
                        onToggle={(enabled) => toggleConnection(selectedJob.editorId, 'source', enabled)}
                        onChange={(field, value) => updateConnection(selectedJob.editorId, 'source', field, value)}
                      />
                      <div className="relative z-10 -my-1 flex justify-center">
                        <div className="rounded-full bg-primary p-1 text-primary-content shadow-md">
                          <ChevronRight size={12} className="rotate-90" />
                        </div>
                      </div>
                      <ConnectionEditor
                        label="Destination"
                        icon={Database}
                        enabled={Boolean(selectedJob.database.dest)}
                        connection={selectedJob.database.dest}
                        onToggle={(enabled) => toggleConnection(selectedJob.editorId, 'dest', enabled)}
                        onChange={(field, value) => updateConnection(selectedJob.editorId, 'dest', field, value)}
                      />
                    </div>
                  </section>

                  <section>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="iris-header">Execution Steps</div>
                      <button type="button" className="btn btn-ghost btn-sm gap-2" onClick={() => addStep(selectedJob.editorId)}>
                        <Plus size={14} />
                        Add Step
                      </button>
                    </div>
                    <div className="space-y-4">
                      {selectedJob.executions.map((step, index) => (
                        <div key={step.editorId} className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="rounded-lg bg-base-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/45">
                                Step {index + 1}
                              </div>
                              <span className="badge badge-ghost badge-sm">{step.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                className="btn btn-ghost btn-sm btn-square"
                                onClick={() => moveStep(selectedJob.editorId, step.editorId, -1)}
                                disabled={index === 0}
                              >
                                <ArrowLeft size={14} />
                              </button>
                              <button
                                type="button"
                                className="btn btn-ghost btn-sm btn-square"
                                onClick={() => moveStep(selectedJob.editorId, step.editorId, 1)}
                                disabled={index === selectedJob.executions.length - 1}
                              >
                                <ArrowRight size={14} />
                              </button>
                              <button
                                type="button"
                                className="btn btn-ghost btn-sm btn-square text-error"
                                onClick={() => removeStep(selectedJob.editorId, step.editorId)}
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <Field label="Type">
                              <select
                                value={step.type}
                                onChange={(event) =>
                                  updateStep(selectedJob.editorId, step.editorId, (currentStep) => ({
                                    ...currentStep,
                                    type: event.target.value as ExecutionType,
                                  }))
                                }
                                className="select select-bordered select-sm w-full"
                              >
                                {EXECUTION_TYPES.map((type) => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </Field>
                            <Field label="Name">
                              <input
                                value={step.name ?? ''}
                                onChange={(event) =>
                                  updateStep(selectedJob.editorId, step.editorId, (currentStep) => ({
                                    ...currentStep,
                                    name: event.target.value,
                                  }))
                                }
                                className="input input-bordered input-sm w-full"
                              />
                            </Field>
                            <div className="col-span-2">
                              <Field label="SQL">
                                <textarea
                                  value={step.sql}
                                  onChange={(event) =>
                                    updateStep(selectedJob.editorId, step.editorId, (currentStep) => ({
                                      ...currentStep,
                                      sql: event.target.value,
                                    }))
                                  }
                                  rows={5}
                                  className="textarea textarea-bordered w-full resize-y font-mono text-xs"
                                />
                              </Field>
                            </div>
                            <Field label="Destination Table">
                              <input
                                value={step.destTable ?? ''}
                                onChange={(event) =>
                                  updateStep(selectedJob.editorId, step.editorId, (currentStep) => ({
                                    ...currentStep,
                                    destTable: event.target.value,
                                  }))
                                }
                                className="input input-bordered input-sm w-full"
                              />
                            </Field>
                            <Field label="Watermark Column">
                              <input
                                value={step.watermarkColumn ?? ''}
                                onChange={(event) =>
                                  updateStep(selectedJob.editorId, step.editorId, (currentStep) => ({
                                    ...currentStep,
                                    watermarkColumn: event.target.value,
                                  }))
                                }
                                className="input input-bordered input-sm w-full"
                              />
                            </Field>
                          </div>
                          <div className="mt-4 rounded-xl border border-base-300 bg-base-200/20 p-3">
                            <div className="mb-3 flex items-center justify-between">
                              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">Parameters</div>
                              <button type="button" className="btn btn-ghost btn-xs gap-1" onClick={() => addParameter(selectedJob.editorId, step.editorId)}>
                                <Plus size={12} />
                                Add
                              </button>
                            </div>
                            {step.parameters.length === 0 ? (
                              <div className="rounded-lg border border-dashed border-base-300 bg-base-100 px-3 py-4 text-xs text-base-content/45">
                                No named parameters configured.
                              </div>
                            ) : (
                              <div className="space-y-2">
                                {step.parameters.map((parameter) => (
                                  <div key={parameter.editorId} className="grid grid-cols-[1.2fr_1fr_120px_40px] gap-2">
                                    <input
                                      value={parameter.param}
                                      onChange={(event) =>
                                        updateParameter(selectedJob.editorId, step.editorId, parameter.editorId, (currentParameter) => ({
                                          ...currentParameter,
                                          param: event.target.value,
                                        }))
                                      }
                                      className="input input-bordered input-sm"
                                      placeholder="param"
                                    />
                                    <input
                                      value={String(parameter.value ?? '')}
                                      onChange={(event) =>
                                        updateParameter(selectedJob.editorId, step.editorId, parameter.editorId, (currentParameter) => ({
                                          ...currentParameter,
                                          value: event.target.value,
                                        }))
                                      }
                                      className="input input-bordered input-sm"
                                      placeholder="value"
                                    />
                                    <select
                                      value={parameter.type ?? 'general'}
                                      onChange={(event) =>
                                        updateParameter(selectedJob.editorId, step.editorId, parameter.editorId, (currentParameter) => ({
                                          ...currentParameter,
                                          type: event.target.value as EditableParameter['type'],
                                        }))
                                      }
                                      className="select select-bordered select-sm"
                                    >
                                      <option value="general">general</option>
                                      <option value="timestamp">timestamp</option>
                                    </select>
                                    <button
                                      type="button"
                                      className="btn btn-ghost btn-sm btn-square text-error"
                                      onClick={() => removeParameter(selectedJob.editorId, step.editorId, parameter.editorId)}
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </>
          ) : null}
        </aside>
      </div>
    </div>
  )
}

function ContextDivider() {
  return <div className="h-8 w-px bg-base-300" />
}

function ContextMetric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      <div className="mt-1 text-xs font-semibold">{value}</div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">{label}</div>
      {children}
    </label>
  )
}

function ConnectionEditor({
  label,
  icon: Icon,
  enabled,
  connection,
  onToggle,
  onChange,
}: {
  label: string
  icon: typeof Server
  enabled: boolean
  connection: EditableJob['database']['source']
  onToggle: (enabled: boolean) => void
  onChange: (field: keyof NonNullable<EditableJob['database']['source']>, value: string) => void
}) {
  return (
    <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-base-200 p-2 text-base-content/55">
            <Icon size={14} />
          </div>
          <div>
            <div className="text-xs font-semibold">{label}</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-base-content/35">{enabled ? 'Configured' : 'Disabled'}</div>
          </div>
        </div>
        <input type="checkbox" className="toggle toggle-sm toggle-primary" checked={enabled} onChange={(event) => onToggle(event.target.checked)} />
      </div>

      {enabled && connection ? (
        <div className="grid grid-cols-2 gap-3">
          <Field label="Driver">
            <input value={connection.driver} onChange={(event) => onChange('driver', event.target.value)} className="input input-bordered input-sm w-full" />
          </Field>
          <Field label="Username">
            <input value={connection.username} onChange={(event) => onChange('username', event.target.value)} className="input input-bordered input-sm w-full" />
          </Field>
          <div className="col-span-2">
            <Field label="URL">
              <input value={connection.url} onChange={(event) => onChange('url', event.target.value)} className="input input-bordered input-sm w-full font-mono text-xs" />
            </Field>
          </div>
          <div className="col-span-2">
            <Field label="Password">
              <input type="password" value={connection.password} onChange={(event) => onChange('password', event.target.value)} className="input input-bordered input-sm w-full" />
            </Field>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-base-300 bg-base-200/20 px-3 py-4 text-sm text-base-content/45">
          No connection configured
        </div>
      )}
    </div>
  )
}

function parseNumberInput(value: string) {
  if (!value.trim()) return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function buildLinearNodes(jobs: EditableJob[], currentNodes: PipelineJobNode[], selectedJobId: string | null): PipelineJobNode[] {
  const currentPositions = new Map(currentNodes.map((node) => [node.id, node.position]))
  return jobs.map((job, index) => ({
    id: job.editorId,
    type: 'pipelineJob',
    position: currentPositions.get(job.editorId) ?? { x: INITIAL_NODE_X + index * NODE_SPACING, y: INITIAL_NODE_Y },
    data: { index, job },
    selected: job.editorId === selectedJobId,
    draggable: true,
  }))
}

function buildLinearEdges(jobs: EditableJob[]): Edge[] {
  return jobs.slice(0, -1).map((job, index) => ({
    id: `edge-${job.editorId}-${jobs[index + 1].editorId}`,
    source: job.editorId,
    target: jobs[index + 1].editorId,
    type: 'audit',
  }))
}
