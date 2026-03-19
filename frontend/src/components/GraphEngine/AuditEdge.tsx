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
      style={{
        ...style,
        stroke: '#6f7cff',
        strokeWidth: 1.5,
        opacity: 0.88,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      className="audit-edge-path"
    />
  )
}
