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
  return (
    <div
      className={`rounded-2xl border-2 bg-base-100 p-6 transition-all duration-300 group overflow-visible ${
        selected ? 'border-primary shadow-2xl scale-[1.05] z-50' : 'border-base-300 shadow-sm opacity-90'
      }`}
      style={{ width: `${NODE_WIDTH}px` }}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!left-0 !z-20 !h-3 !w-3 !-translate-x-1/2 !border-2 !border-primary !bg-base-100"
      />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Box size={20} />
          </div>
          <div className="iris-header">JOB {data.index + 1}</div>
        </div>
        <Grip size={16} className="text-base-content/20 group-hover:text-primary transition-colors cursor-grab active:cursor-grabbing" />
      </div>

      <div className="truncate text-xl font-bold tracking-tight mb-4">{data.job.jobName}</div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-2 bg-base-200/50 rounded-xl border border-base-300/30">
           <div className="text-[9px] font-black opacity-30 uppercase tracking-widest mb-1">Scope</div>
           <div className="text-xs font-bold">{data.job.setting.atomicLevel || 'JOB'}</div>
        </div>
        <div className="p-2 bg-base-200/50 rounded-xl border border-base-300/30">
           <div className="text-[9px] font-black opacity-30 uppercase tracking-widest mb-1">Steps</div>
           <div className="text-xs font-bold">{data.job.executions.length}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
         <div className="flex -space-x-2">
            {[1, 2, 3].slice(0, data.job.executions.length).map((i) => (
              <div key={i} className="size-5 rounded-full border-2 border-base-100 bg-base-200 flex items-center justify-center">
                 <div className="size-1.5 rounded-full bg-primary/40" />
              </div>
            ))}
         </div>
         <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">Pipeline Job</span>
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
        nodesConnectable={!readonly}
        elementsSelectable={true}
        className="iris-canvas"
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{
          type: 'audit',
          animated: false,
          style: {
            stroke: '#6f7cff',
            strokeWidth: 1.5,
            opacity: 0.9,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 14,
            height: 14,
            color: '#6f7cff',
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
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)]" />
    </div>
  )
}
