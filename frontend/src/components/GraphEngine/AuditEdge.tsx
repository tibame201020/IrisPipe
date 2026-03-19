import { BaseEdge, getBezierPath, type EdgeProps } from '@xyflow/react'

export function AuditEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{ ...style, stroke: '#3b82f6', strokeWidth: 3, opacity: 0.6 }}
      className="audit-edge-path"
    />
  )
}
