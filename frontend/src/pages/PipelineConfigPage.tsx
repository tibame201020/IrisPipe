import '@xyflow/react/dist/style.css'
import {
  useEdgesState,
  useNodesState,
  type Edge,
  type ReactFlowInstance,
} from '@xyflow/react'
import { PipelineCanvas } from '../components/GraphEngine/PipelineCanvas'
import {
  Box,
  ChevronRight,
  Cpu,
  Database,
  Layout,
  Settings,
  Waypoints,
  X
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { getApiErrorMessage, getPipelineConfig, getPipelineTree } from '../lib/api'
import { findFolderPath } from '../lib/tree'
import type { ConfigPipelineInfo, PipelineTreeInfo, SyncJobDefinition } from '../types/irispipe'
import type { PipelineJobNode } from '../types/graph'


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
    if (!tree || !numericFolderId) return []
    return findFolderPath(tree, numericFolderId)
  }, [tree, numericFolderId])
  
  const jobs = useMemo(() => config?.jobs ?? [], [config?.jobs])
  const selectedJob = selectedJobIndex == null ? null : jobs[selectedJobIndex] ?? null

  async function loadConfig() {
    setLoading(true)
    setError(null)
    try {
      if (!isDraft) {
        const response = await getPipelineConfig(numericPipelineId)
        setConfig(response)
      }
      const treeResponse = await getPipelineTree()
      setTree(treeResponse)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline config'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadConfig()
  }, [isDraft, numericPipelineId])

  useEffect(() => {
    if (jobs.length === 0) {
      setSelectedJobIndex(null)
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
      flowRef.current?.fitView({ padding: 0.4, duration: 800 })
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
      <header className="flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-8 py-4 z-30">
        <div className="flex items-center gap-6">
          <div className="breadcrumbs text-sm opacity-50">
            <ul>
              <li><Link to="/pipeline">Root</Link></li>
              {folderPathNodes.map((f) => (
                <li key={f.id}><Link to={`/pipeline/folders/${f.id}`}>{f.folderName}</Link></li>
              ))}
              <li className="font-bold opacity-100">{isDraft ? 'New Pipeline' : config?.pipelineName}</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div role="tablist" className="tabs tabs-boxed bg-base-200/50 p-1 mr-4">
            <button className="tab tab-active btn-sm h-8 px-4 font-bold">Config</button>
            {!isDraft && (
              <Link to={`/pipeline/items/${config?.id}/runs`} className="tab btn-sm h-8 px-4 opacity-50">Runs</Link>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-0 relative">
        <main className="flex-1 relative bg-base-200/50">
          <div className="absolute top-6 left-6 z-20 pointer-events-none">
             <div className="iris-glass border-primary/10 p-5 rounded-2xl pointer-events-auto shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-primary/10 text-primary rounded-lg"><Waypoints size={16} /></div>
                   <div className="iris-header">Pipeline Definition</div>
                </div>
                <p className="text-xs text-base-content/50 leading-relaxed max-w-[240px]">
                  Jobs come from the current pipeline definition. Dragging only changes the local canvas layout.
                </p>
             </div>
          </div>

          <div className="h-full w-full">
            <PipelineCanvas
              nodes={nodes as any}
              edges={edges}
              onNodesChange={onNodesChange as any}
              onEdgesChange={onEdgesChange as any}
              onNodeClick={(_, node) => setSelectedJobIndex((node as any).data.index)}
              onInit={(instance) => { flowRef.current = instance as any }}
              readonly={false}
              fitView={true}
            />
          </div>
        </main>

        <aside className={`w-[450px] border-l border-base-300 bg-base-100 flex flex-col z-20 transition-transform duration-500 ease-in-out ${
          selectedJob ? 'translate-x-0' : 'translate-x-full absolute right-0'
        }`}>
          {selectedJob ? (
            <>
              <div className="px-8 py-6 border-b border-base-300 flex items-center justify-between bg-base-200/30">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-base-content text-base-100 rounded-xl"><Settings size={18} /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Inspector</div>
                    <div className="text-lg font-bold">Job Details</div>
                  </div>
                </div>
                <button onClick={() => setSelectedJobIndex(null)} className="btn btn-ghost btn-sm btn-square">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                <div>
                  <h3 className="iris-header mb-4 flex items-center gap-2">
                    <Layout size={14} /> Basic Information
                  </h3>
                  <div className="iris-card p-4 bg-base-200/40">
                    <label className="text-[10px] font-bold opacity-30 uppercase tracking-widest block mb-2">Internal Name</label>
                    <div className="font-mono text-sm font-bold">{selectedJob.jobName}</div>
                  </div>
                </div>

                <div>
                   <h3 className="iris-header mb-4 flex items-center gap-2">
                    <Cpu size={14} /> Execution Context
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <PropertyBox label="Atomic" value={selectedJob.setting.atomicLevel || 'JOB'} />
                     <PropertyBox label="Batch" value={selectedJob.setting.batchSize || 'Default'} />
                     <PropertyBox label="Fetch" value={selectedJob.setting.fetchSize || 'Default'} />
                     <PropertyBox label="Steps" value={selectedJob.executions.length} />
                  </div>
                </div>

                <div>
                   <h3 className="iris-header mb-4 flex items-center gap-2">
                    <Database size={14} /> Connectivity
                  </h3>
                  <div className="space-y-4">
                    <ConnectionBox type="SOURCE" conn={selectedJob.database.source} />
                    <div className="flex justify-center -my-2 relative z-10">
                       <div className="p-1 bg-primary text-primary-content rounded-full shadow-lg"><ChevronRight size={12} className="rotate-90" /></div>
                    </div>
                    <ConnectionBox type="DESTINATION" conn={selectedJob.database.dest} />
                  </div>
                </div>

                <div>
                   <h3 className="iris-header mb-4 flex items-center gap-2">
                    <Box size={14} /> Logical Steps
                  </h3>
                  <div className="space-y-3">
                    {selectedJob.executions.map((step, idx) => (
                      <div key={idx} className="iris-card bg-base-100 p-4 border-base-300">
                         <div className="flex items-center justify-between mb-3">
                            <span className="badge badge-sm font-black tracking-widest">{step.type}</span>
                            <span className="text-[10px] font-mono opacity-40">STEP {idx + 1}</span>
                         </div>
                         <div className="text-sm font-bold mb-2">{step.name || 'Anonymous Step'}</div>
                         <div className="bg-base-200 p-3 rounded-lg overflow-x-auto">
                            <code className="text-[10px] font-mono text-primary whitespace-pre">{step.sql}</code>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </>
          ) : null}
        </aside>
      </div>
    </div>
  )
}

// End of Inspector logic

function PropertyBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="iris-card p-4 bg-base-100 border-base-300">
      <div className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-sm font-bold">{value}</div>
    </div>
  )
}

function ConnectionBox({ type, conn }: { type: string, conn: any }) {
  return (
    <div className="iris-card p-5 bg-base-100 border-base-300 relative overflow-hidden">
       <div className="absolute top-0 right-0 p-3 opacity-[0.03] select-none pointer-events-none">
          <Database size={64} />
       </div>
       <div className="text-[10px] font-black tracking-[0.2em] text-primary mb-3">{type} ENDPOINT</div>
       <div className="space-y-2">
          <div className="flex justify-between items-center bg-base-200/50 px-3 py-2 rounded-lg">
             <span className="text-[10px] font-bold opacity-40">Driver</span>
             <span className="text-xs font-mono font-bold">{conn?.driver || 'Built-in'}</span>
          </div>
          <div className="text-[10px] font-mono opacity-60 truncate bg-base-200/50 px-3 py-2 rounded-lg break-all">
             {conn?.url || 'jdbc:null:connection'}
          </div>
       </div>
    </div>
  )
}

const INITIAL_NODE_X = 100
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
