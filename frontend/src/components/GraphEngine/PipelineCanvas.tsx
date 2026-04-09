import {
  Background,
  BackgroundVariant,
  ReactFlow,
  type ReactFlowInstance,
  MarkerType,
  type NodeTypes,
  type EdgeTypes,
  Handle,
  Position,
  type NodeProps,
} from '@xyflow/react'
import {
  Box,
  Grip,
  Link2,
  PlayCircle,
  Server,
} from 'lucide-react'
import type { PipelineJobNode } from '../../types/graph'
import '@xyflow/react/dist/style.css'
import { useRef, useEffect, useMemo } from 'react'
import { StatusNode } from './StatusNode'
import { AuditEdge } from './AuditEdge'
import type { PipelineCanvasProps } from '../../types/graph'

const defaultNodeTypes: NodeTypes = {
  statusNode: StatusNode,
  pipelineJob: PipelineJobNodeCard,
}

const defaultEdgeTypes: EdgeTypes = {
  audit: AuditEdge,
}

const NODE_WIDTH = 280

function PipelineJobNodeCard({ data, selected }: NodeProps<PipelineJobNode>) {
  const sourceConfigured = Boolean(data.job.database.source)
  const destConfigured = Boolean(data.job.database.dest)

  return (
    <div
      className={`group overflow-visible rounded-2xl border bg-base-100 p-5 transition-all duration-300 ${
        selected ? 'z-50 border-primary shadow-xl ring-4 ring-primary/10' : 'border-base-300 shadow-sm'
      }`}
      style={{ width: `${NODE_WIDTH}px` }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!left-0 !z-20 !h-3 !w-3 !-translate-x-1/2 !border-2 !border-primary !bg-base-100"
      />

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Box size={20} />
          </div>
          <div className="iris-header">JOB {data.index + 1}</div>
        </div>
        <Grip size={16} className="text-base-content/35 group-hover:text-primary transition-colors cursor-grab active:cursor-grabbing" />
      </div>

      <div className="mb-4 truncate text-lg font-bold tracking-tight" title={data.job.jobName}>
        {data.job.jobName}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-base-300/50 bg-base-200/40 p-2">
           <div className="mb-1 text-[9px] font-black uppercase tracking-widest text-base-content/40">Atomic</div>
           <div className="text-xs font-bold">{data.job.setting.atomicLevel || 'JOB'}</div>
        </div>
        <div className="rounded-xl border border-base-300/50 bg-base-200/40 p-2">
           <div className="mb-1 text-[9px] font-black uppercase tracking-widest text-base-content/40">Executions</div>
           <div className="text-xs font-bold">{data.job.executions.length}</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-base-300/50 bg-base-200/20 px-3 py-2">
          <Server size={13} className={sourceConfigured ? 'text-success' : 'text-base-content/40'} />
          <div className="min-w-0">
            <div className="text-[9px] font-black uppercase tracking-widest text-base-content/40">Source</div>
            <div className="truncate text-[11px] font-semibold">{sourceConfigured ? 'Configured' : 'Missing'}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-base-300/50 bg-base-200/20 px-3 py-2">
          <Link2 size={13} className={destConfigured ? 'text-success' : 'text-base-content/40'} />
          <div className="min-w-0">
            <div className="text-[9px] font-black uppercase tracking-widest text-base-content/40">Dest</div>
            <div className="truncate text-[11px] font-semibold">{destConfigured ? 'Configured' : 'Missing'}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-base-300/60 pt-3">
        <div className="flex items-center gap-2 text-[11px] text-base-content/45">
          <PlayCircle size={12} />
          <span>Click to edit</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">Definition</span>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="!right-0 !z-20 !h-3 !w-3 !translate-x-1/2 !border-2 !border-primary !bg-base-100"
      />
    </div>
  )
}

export function PipelineCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onNodeClick,
  onNodeDoubleClick,
  onInit,
  nodeTypes = {},
  edgeTypes = {},
  fitView = true,
  readonly = true,
  children,
}: PipelineCanvasProps) {
  const mergedNodeTypes = useMemo(() => ({ ...defaultNodeTypes, ...nodeTypes }), [nodeTypes])
  const mergedEdgeTypes = useMemo(() => ({ ...defaultEdgeTypes, ...edgeTypes }), [edgeTypes])
  const flowRef = useRef<ReactFlowInstance | null>(null)

  useEffect(() => {
    if (fitView && flowRef.current && nodes.length > 0) {
      flowRef.current.fitView({ padding: 0.2, duration: 400 })
    }
  }, [nodes.length, fitView])

  return (
    <div className="h-full w-full bg-base-100 overflow-hidden relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onInit={(instance) => {
          flowRef.current = instance
          onInit?.(instance)
        }}
        nodeTypes={mergedNodeTypes}
        edgeTypes={mergedEdgeTypes}
        fitView={fitView}
        minZoom={0.2}
        maxZoom={1.5}
        nodesDraggable={!readonly}
        nodesConnectable={false}
        elementsSelectable={true}
        className="iris-canvas"
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{
          type: 'audit',
          animated: false,
          style: {
            stroke: 'hsl(var(--p))',
            strokeWidth: 1.5,
            opacity: 0.9,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 14,
            height: 14,
            color: 'hsl(var(--p))',
          },
        }}
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1} 
          color="hsl(var(--bc) / 0.1)" 
        />
        {children}
      </ReactFlow>
      
      {/* Visual Overlay for Canvas Depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: 'inset 0 0 80px hsl(var(--bc) / 0.06)' }}
      />
    </div>
  )
}
