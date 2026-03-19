import '@xyflow/react/dist/style.css'
import {
  useEdgesState,
  useNodesState,
  type Edge,
  type ReactFlowInstance,
} from '@xyflow/react'
import {
  ChevronRight,
  Database,
  Settings,
  Shapes,
  Waypoints,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useOutletContext, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PipelineCanvas } from '../components/GraphEngine/PipelineCanvas'
import { getApiErrorMessage, getPipelineTree } from '../lib/api'
import { findFolderPath } from '../lib/tree'
import type { PipelineJobNode } from '../types/graph'
import type { ConfigPipelineInfo, PipelineTreeInfo, SyncJobDefinition } from '../types/irispipe'
import type { PipelineWorkspaceContext } from '../layout/PipelineWorkspaceLayout'

export function PipelineConfigPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const workspace = useOutletContext<PipelineWorkspaceContext | undefined>()
  const isDraft = !pipelineId

  const [draftTree, setDraftTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [inspectedJobIndex, setInspectedJobIndex] = useState<number | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState<PipelineJobNode>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

  const flowRef = useRef<ReactFlowInstance<PipelineJobNode, Edge> | null>(null)

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')
  const numericFolderId = folderId ? Number(folderId) : null
  const config: ConfigPipelineInfo | null = isDraft ? null : workspace?.pipeline ?? null
  const tree: PipelineTreeInfo | null = isDraft ? draftTree : workspace?.tree ?? null

  const folderPathNodes = useMemo(() => {
    if (!tree || !numericFolderId) return []
    return findFolderPath(tree, numericFolderId)
  }, [tree, numericFolderId])

  const jobs = useMemo(() => config?.jobs ?? [], [config?.jobs])
  const selectedJob = inspectedJobIndex == null ? null : jobs[inspectedJobIndex] ?? null
  const configuredSourceCount = useMemo(() => jobs.filter((job) => Boolean(job.database.source)).length, [jobs])
  const configuredDestCount = useMemo(() => jobs.filter((job) => Boolean(job.database.dest)).length, [jobs])
  const executionStepCount = useMemo(() => jobs.reduce((total, job) => total + job.executions.length, 0), [jobs])

  async function loadConfig() {
    setLoading(true)
    setError(null)
    try {
      if (isDraft) {
        const treeResponse = await getPipelineTree()
        setDraftTree(treeResponse)
      }
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline config'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isDraft) {
      void loadConfig()
      return
    }

    if (workspace?.pipeline) {
      setLoading(false)
      setError(null)
    }
  }, [isDraft, numericPipelineId, workspace?.pipeline])

  useEffect(() => {
    if (jobs.length === 0) {
      setInspectedJobIndex(null)
      if (nodes.length > 0) setNodes([])
      if (edges.length > 0) setEdges([])
      return
    }

    setNodes((currentNodes) => {
      const nextNodes = buildLinearNodes(jobs, currentNodes)
      if (currentNodes.length === nextNodes.length && currentNodes.length > 0) return currentNodes
      return nextNodes
    })
    setEdges(buildLinearEdges(jobs))
  }, [jobs, setNodes, setEdges])

  useEffect(() => {
    if (!flowRef.current || jobs.length === 0) return
    const timer = setTimeout(() => {
      flowRef.current?.fitView({ padding: 0.35, duration: 600 })
    }, 100)
    return () => clearTimeout(timer)
  }, [jobs.length])

  if (loading) return <div className="p-12"><LoadingState /></div>

  if (!isDraft && (error || !config)) {
    return (
      <EmptyState
        icon={Waypoints}
        title="Pipeline config unavailable"
        description={error ?? 'Unable to retrieve the pipeline definition.'}
        action={<Link to="/pipeline" className="btn btn-primary">Back to Explorer</Link>}
      />
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      {isDraft ? (
        <header className="z-30 flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-8 py-4">
          <div className="breadcrumbs text-sm opacity-50">
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
        </header>
      ) : null}

      <div className="relative flex min-h-0 flex-1">
        <main className="relative flex-1 bg-base-200/50">
          <div className="absolute left-6 right-6 top-6 z-20">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-base-300 bg-base-100/90 px-3 py-2 shadow-sm backdrop-blur">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-ghost badge-sm gap-2">
                  <Shapes size={12} />
                  Definition Canvas
                </span>
                <ContextMetric label="Jobs" value={jobs.length} />
                <ContextDivider />
                <ContextMetric label="Steps" value={executionStepCount} />
                <ContextDivider />
                <ContextMetric label="Source" value={`${configuredSourceCount}/${jobs.length || 0}`} />
                <ContextDivider />
                <ContextMetric label="Dest" value={`${configuredDestCount}/${jobs.length || 0}`} />
              </div>
              <span className="text-[11px] text-base-content/40">
                Double-click a job to inspect its definition.
              </span>
            </div>
          </div>

          <div className="h-full w-full">
            <PipelineCanvas
              nodes={nodes as any}
              edges={edges}
              onNodesChange={onNodesChange as any}
              onEdgesChange={onEdgesChange as any}
              onNodeDoubleClick={(_, node) => {
                const index = (node as any).data.index as number
                setInspectedJobIndex(index)
              }}
              onInit={(instance) => {
                flowRef.current = instance as any
              }}
              readonly={false}
              fitView
            />
          </div>
        </main>

        <aside
          className={`z-20 flex w-[450px] flex-col border-l border-base-300 bg-base-100 transition-transform duration-300 ease-out ${
            selectedJob ? 'translate-x-0' : 'absolute right-0 translate-x-full'
          }`}
        >
          {selectedJob ? (
            <>
              <div className="flex items-center justify-between border-b border-base-300 bg-base-200/30 px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-base-content p-2.5 text-base-100">
                    <Settings size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Definition</div>
                    <div className="text-lg font-bold">{selectedJob.jobName}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setInspectedJobIndex(null)}
                  className="btn btn-ghost btn-sm btn-square"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="space-y-8">
                  <section>
                    <div className="iris-header mb-4">Job Summary</div>
                    <div className="grid grid-cols-2 gap-4">
                      <PropertyBox label="Job Name" value={selectedJob.jobName} mono />
                      <PropertyBox label="Atomic" value={selectedJob.setting.atomicLevel || 'JOB'} />
                      <PropertyBox label="Executions" value={selectedJob.executions.length} />
                      <PropertyBox
                        label="Fetch / Batch"
                        value={`${selectedJob.setting.fetchSize ?? '-'} / ${selectedJob.setting.batchSize ?? '-'}`}
                        mono
                      />
                    </div>
                  </section>

                  <section>
                    <div className="iris-header mb-4">Connectivity</div>
                    <div className="grid grid-cols-2 gap-4">
                      <PropertyBox label="Source" value={selectedJob.database.source ? 'Configured' : 'Missing'} />
                      <PropertyBox label="Destination" value={selectedJob.database.dest ? 'Configured' : 'Missing'} />
                    </div>

                    <div className="mt-4 space-y-4">
                      <ConnectionBox type="SOURCE" conn={selectedJob.database.source} />
                      <div className="relative z-10 -my-2 flex justify-center">
                        <div className="rounded-full bg-primary p-1 text-primary-content shadow-lg">
                          <ChevronRight size={12} className="rotate-90" />
                        </div>
                      </div>
                      <ConnectionBox type="DESTINATION" conn={selectedJob.database.dest} />
                    </div>
                  </section>

                  <section>
                    <div className="iris-header mb-4">Execution Steps</div>
                    <div className="space-y-3">
                      {selectedJob.executions.map((step, idx) => (
                        <div key={idx} className="iris-card border-base-300 bg-base-100 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <span className="badge badge-sm font-black tracking-widest">{step.type}</span>
                            <span className="text-[10px] font-mono opacity-40">STEP {idx + 1}</span>
                          </div>
                          <div className="mb-2 text-sm font-bold">{step.name || 'Anonymous Step'}</div>
                          <div className="mb-3 grid grid-cols-2 gap-3">
                            <PropertyBox label="Dest Table" value={step.destTable || '-'} />
                            <PropertyBox label="Parameters" value={step.parameters?.length ?? 0} />
                          </div>
                          <div className="overflow-x-auto rounded-lg bg-base-200 p-3">
                            <code className="whitespace-pre-wrap break-all text-[10px] font-mono text-primary">{step.sql}</code>
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

function ContextMetric({
  label,
  value,
}: {
  label: string
  value: string | number
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-base-content/35">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  )
}

function PropertyBox({
  label,
  value,
  mono = false,
}: {
  label: string
  value: string | number
  mono?: boolean
}) {
  return (
    <div className="iris-card border-base-300 bg-base-100 p-4">
      <div className="mb-1 text-[10px] font-black uppercase tracking-widest opacity-30">{label}</div>
      <div className={`text-sm font-bold ${mono ? 'font-mono' : ''}`}>{value}</div>
    </div>
  )
}

function ConnectionBox({
  type,
  conn,
}: {
  type: string
  conn: SyncJobDefinition['database']['source']
}) {
  return (
    <div className="iris-card relative overflow-hidden border-base-300 bg-base-100 p-5">
      <div className="pointer-events-none absolute right-0 top-0 select-none p-3 opacity-[0.03]">
        <Database size={64} />
      </div>
      <div className="mb-3 text-[10px] font-black tracking-[0.2em] text-primary">{type} ENDPOINT</div>
      {conn ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-base-200/50 px-3 py-2">
            <span className="text-[10px] font-bold opacity-40">Driver</span>
            <span className="text-xs font-mono font-bold">{conn.driver || 'Built-in'}</span>
          </div>
          <div className="break-all rounded-lg bg-base-200/50 px-3 py-2 text-[10px] font-mono opacity-60">
            {conn.url || 'jdbc:null:connection'}
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-base-300 bg-base-200/30 px-3 py-4 text-sm text-base-content/45">
          No connection configured
        </div>
      )}
    </div>
  )
}

const INITIAL_NODE_X = 140
const INITIAL_NODE_Y = 200
const NODE_SPACING = 380

function buildLinearNodes(jobs: SyncJobDefinition[], currentNodes: PipelineJobNode[]): PipelineJobNode[] {
  const currentPositions = new Map(currentNodes.map((node) => [node.id, node.position]))
  return jobs.map((job, index) => ({
    id: `job-${index}`,
    type: 'pipelineJob',
    position: currentPositions.get(`job-${index}`) ?? { x: INITIAL_NODE_X + index * NODE_SPACING, y: INITIAL_NODE_Y },
    data: { index, job },
    draggable: true,
  }))
}

function buildLinearEdges(jobs: SyncJobDefinition[]): Edge[] {
  return jobs.slice(0, -1).map((_, index) => ({
    id: `edge-${index}-${index + 1}`,
    source: `job-${index}`,
    target: `job-${index + 1}`,
    type: 'audit',
  }))
}
