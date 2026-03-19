import '@xyflow/react/dist/style.css'

import {
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type NodeProps,
  type ReactFlowInstance,
} from '@xyflow/react'
import { Grip, RefreshCw, Waypoints, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { getApiErrorMessage, getPipelineConfig, getPipelineTree } from '../lib/api'
import { findFolderPath } from '../lib/tree'
import type { ConfigPipelineInfo, PipelineTreeInfo, SyncJobDefinition } from '../types/irispipe'

type PipelineJobNodeData = {
  index: number
  job: SyncJobDefinition
}

type PipelineJobNode = Node<PipelineJobNodeData, 'pipelineJob'>

const INITIAL_NODE_X = 180
const INITIAL_NODE_Y = 220
const NODE_WIDTH = 270
const NODE_SPACING = 360
const EDGE_COLOR = '#94a3b8'

const flowStyles: CSSProperties = {
  backgroundColor: 'hsl(var(--b1))',
  backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--b3) / 0.72) 1px, transparent 0)',
  backgroundSize: '24px 24px',
}

const nodeTypes = {
  pipelineJob: PipelineJobNodeCard,
}

export function PipelineConfigPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const isDraft = !pipelineId

  const [config, setConfig] = useState<ConfigPipelineInfo | null>(null)
  const [tree, setTree] = useState<PipelineTreeInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedJobIndex, setSelectedJobIndex] = useState<number | null>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState<PipelineJobNode>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

  const flowRef = useRef<ReactFlowInstance<PipelineJobNode, Edge> | null>(null)

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')
  const numericFolderId = folderId ? Number(folderId) : null

  const folderPathNodes = useMemo(() => {
    if (!tree || !numericFolderId) {
      return []
    }

    return findFolderPath(tree, numericFolderId)
  }, [tree, numericFolderId])

  const jobs = config?.jobs ?? []
  const selectedJob = selectedJobIndex == null ? null : jobs[selectedJobIndex] ?? null

  async function loadTree() {
    try {
      const response = await getPipelineTree()
      setTree(response)
    } catch {
      setTree(null)
    }
  }

  async function loadConfig() {
    setLoading(true)
    setError(null)

    try {
      const response = await getPipelineConfig(numericPipelineId)
      setConfig(response)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline config'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadTree()

    if (isDraft) {
      setLoading(false)
      setError(null)
      setConfig(null)
      setSelectedJobIndex(null)
      setNodes([])
      setEdges([])
      return
    }

    if (!Number.isFinite(numericPipelineId)) {
      setError('Invalid pipeline id')
      setLoading(false)
      return
    }

    void loadConfig()
  }, [isDraft, numericPipelineId, setEdges, setNodes])

  useEffect(() => {
    if (jobs.length === 0) {
      setSelectedJobIndex(null)
      setNodes([])
      setEdges([])
      return
    }

    setNodes((currentNodes) => buildLinearNodes(jobs, currentNodes))
    setEdges(buildLinearEdges(jobs))

    if (selectedJobIndex != null && !jobs[selectedJobIndex]) {
      setSelectedJobIndex(null)
    }
  }, [jobs, selectedJobIndex, setEdges, setNodes])

  useEffect(() => {
    if (!flowRef.current || jobs.length === 0) {
      return
    }

    const rafId = window.requestAnimationFrame(() => {
      flowRef.current?.fitView({
        padding: 0.3,
        duration: 320,
        maxZoom: 1.1,
      })
    })

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [jobs.length])

  if (loading) {
    return (
      <div className="space-y-4">
        <LoadingState cards={3} />
      </div>
    )
  }

  if (!isDraft && (error || !config)) {
    const explorerLink = folderId ? `/pipeline/folders/${folderId}` : '/pipeline'

    return (
      <EmptyState
        icon={Waypoints}
        title="Pipeline payload is unavailable"
        description={error ?? 'The backend did not return a pipeline config payload.'}
        action={
          <Link to={explorerLink} className="btn btn-primary px-5">
            Back to explorer
          </Link>
        }
      />
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="card min-h-0 flex-1 rounded-none border-x-0 border-y-0 bg-base-100 shadow-none">
        <div className="card-body min-h-0 p-0">
          <div className="grid gap-4 border-b border-base-300 px-4 py-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
            <div className="breadcrumbs text-sm text-base-content/65">
              <ul>
                <li>
                  <Link to="/pipeline">Root</Link>
                </li>
                {folderPathNodes.map((folder) => (
                  <li key={folder.id}>
                    <Link to={`/pipeline/folders/${folder.id}`}>{folder.folderName}</Link>
                  </li>
                ))}
                <li>{isDraft ? 'New pipeline' : config?.pipelineName}</li>
              </ul>
            </div>

            <div role="tablist" className="tabs tabs-boxed mx-auto bg-base-200/70 p-1">
              <button type="button" role="tab" className="tab tab-active">
                Config
              </button>
              {isDraft ? (
                <button type="button" role="tab" className="tab tab-disabled" disabled>
                  Runs
                </button>
              ) : (
                <Link
                  role="tab"
                  to={`/pipeline/items/${config!.id}/runs${config!.folderId ? `?folderId=${config!.folderId}` : ''}`}
                  className="tab"
                >
                  Runs
                </Link>
              )}
            </div>

            <div className="flex justify-start lg:justify-end">
              {!isDraft ? (
                <button type="button" onClick={() => void loadConfig()} className="btn btn-ghost px-4">
                  <RefreshCw size={16} />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
              ) : null}
            </div>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <div
              className={`pointer-events-none absolute inset-x-6 top-6 z-20 transition-all duration-300 ease-out ${
                selectedJob ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
              }`}
            >
              {selectedJob ? (
                <div className="pointer-events-auto mx-auto w-full max-w-5xl rounded-box border border-base-300 bg-base-100/95 shadow-xl backdrop-blur">
                  <div className="max-h-[24rem] overflow-auto px-5 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
                          Job settings
                        </div>
                        <h2 className="mt-1 text-2xl font-semibold tracking-tight">{selectedJob.jobName}</h2>
                        <p className="mt-2 text-sm text-base-content/65">
                          This panel is still a direct presentation of fetched backend payload. The canvas is only a
                          workflow surface on top of the same linear job chain.
                        </p>
                      </div>
                      <button type="button" className="btn btn-ghost btn-sm btn-square" onClick={() => setSelectedJobIndex(null)}>
                        <X size={16} />
                      </button>
                    </div>

                    <div className="mt-5 grid gap-3 xl:grid-cols-4">
                      <MetadataRow label="Atomic level" value={selectedJob.setting.atomicLevel ?? '-'} />
                      <MetadataRow label="Fetch size" value={formatNullable(selectedJob.setting.fetchSize)} />
                      <MetadataRow label="Batch size" value={formatNullable(selectedJob.setting.batchSize)} />
                      <MetadataRow label="Executions" value={String(selectedJob.executions.length)} />
                    </div>

                    <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                      <div className="space-y-3">
                        <JsonBlock title="Source" value={selectedJob.database.source} />
                        <JsonBlock title="Destination" value={selectedJob.database.dest} />
                      </div>
                      <JsonBlock title="Selected job payload" value={selectedJob} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="h-full w-full">
              <ReactFlow<PipelineJobNode, Edge>
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeDoubleClick={(_, node) => setSelectedJobIndex(node.data.index)}
                onInit={(instance) => {
                  flowRef.current = instance
                }}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.35}
                maxZoom={1.8}
                nodesDraggable
                nodesConnectable={false}
                elementsSelectable
                edgesFocusable={false}
                edgesReconnectable={false}
                fitViewOptions={{
                  padding: 0.22,
                  maxZoom: 1,
                }}
                proOptions={{ hideAttribution: true }}
                defaultEdgeOptions={{
                  type: 'default',
                  animated: false,
                  style: {
                    strokeWidth: 1.5,
                    stroke: EDGE_COLOR,
                    strokeLinecap: 'round',
                  },
                  markerEnd: {
                    type: MarkerType.ArrowClosed,
                    width: 12,
                    height: 12,
                    color: EDGE_COLOR,
                  },
                }}
                className="bg-base-100"
                style={flowStyles}
              >
                <Background variant={BackgroundVariant.Dots} gap={24} size={1.4} color="hsl(var(--b3) / 0.72)" />
              </ReactFlow>

              {jobs.length === 0 ? (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="pointer-events-auto btn btn-outline min-h-[5rem] border-dashed px-8 text-base font-medium"
                  >
                    Add first job
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PipelineJobNodeCard({ data, selected }: NodeProps<PipelineJobNode>) {
  return (
    <div
      className={`rounded-box border bg-base-100 px-2.5 py-2.5 shadow-sm transition-all ${
        selected ? 'border-primary shadow-xl ring-2 ring-primary/20' : 'border-base-300'
      }`}
      style={{ width: `${NODE_WIDTH}px` }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!h-2.5 !w-2.5 !border-2 !border-slate-400 !bg-base-100"
        isConnectable={false}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
            Job {data.index + 1}
          </div>
          <div className="mt-1 truncate text-sm font-semibold">{data.job.jobName}</div>
        </div>
        <Grip size={14} className="mt-1 shrink-0 text-base-content/35" />
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        <NodeMetric label="Atomic" value={data.job.setting.atomicLevel ?? '-'} />
        <NodeMetric label="Steps" value={String(data.job.executions.length)} />
      </div>

      <div className="mt-2.5 text-[10px] text-base-content/50">
        Double-click to inspect
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!h-2.5 !w-2.5 !border-2 !border-slate-400 !bg-base-100"
        isConnectable={false}
      />
    </div>
  )
}

function NodeMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-200/55 px-2 py-1.5">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content/45">{label}</div>
      <div className="mt-1 truncate text-[11px] font-medium">{value}</div>
    </div>
  )
}

function MetadataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-200/40 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{label}</div>
      <div className="mt-1 break-all text-sm font-medium">{value}</div>
    </div>
  )
}

function JsonBlock({ title, value }: { title: string; value: unknown }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-100">
      <div className="border-b border-base-300 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
        {title}
      </div>
      <div className="overflow-auto px-4 py-3">
        <pre className="font-mono text-xs leading-6 text-base-content/80">{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  )
}

function buildLinearNodes(jobs: SyncJobDefinition[], currentNodes: PipelineJobNode[]): PipelineJobNode[] {
  const currentPositions = new Map(currentNodes.map((node) => [node.id, node.position]))

  return jobs.map((job, index) => ({
    id: `job-${index}`,
    type: 'pipelineJob',
    position:
      currentPositions.get(`job-${index}`) ?? {
        x: INITIAL_NODE_X + index * NODE_SPACING,
        y: INITIAL_NODE_Y,
      },
    data: {
      index,
      job,
    },
    draggable: true,
  }))
}

function buildLinearEdges(jobs: SyncJobDefinition[]): Edge[] {
  return jobs.slice(0, -1).map((_, index) => ({
    id: `edge-${index}-${index + 1}`,
    source: `job-${index}`,
    target: `job-${index + 1}`,
    type: 'default',
  }))
}

function formatNullable(value: number | null) {
  return value == null ? '-' : String(value)
}
