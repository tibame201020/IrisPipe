import type { Node, Edge, OnNodesChange, OnEdgesChange, ReactFlowInstance, NodeTypes, EdgeTypes } from '@xyflow/react'
import type { ReactNode } from 'react'
import type { SyncJobDefinition } from './irispipe'

export type StatusNodeData = {
  label: string
  index: number
  status: 'PENDING' | 'STARTING' | 'STARTED' | 'COMPLETED' | 'FAILED' | 'STOPPED' | 'ABANDONED' | string
  stats?: {
    read?: number
    write?: number
    commit?: number
    rollback?: number
    stepCount?: number
  }
}

export type PipelineCanvasProps = {
  nodes: Node[]
  edges: Edge[]
  onNodesChange?: OnNodesChange
  onEdgesChange?: OnEdgesChange
  onNodeClick?: (event: React.MouseEvent, node: Node) => void
  onNodeDoubleClick?: (event: React.MouseEvent, node: Node) => void
  onInit?: (instance: ReactFlowInstance) => void
  nodeTypes?: NodeTypes
  edgeTypes?: EdgeTypes
  fitView?: boolean
  readonly?: boolean
  children?: ReactNode
}

export type PipelineJobNodeData = {
  index: number
  job: SyncJobDefinition
}

export type PipelineJobNode = Node<PipelineJobNodeData, 'pipelineJob'>
