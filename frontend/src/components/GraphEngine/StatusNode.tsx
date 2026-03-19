import { Handle, Position, type NodeProps, type Node } from '@xyflow/react'
import { Activity, CheckCircle2, CircleDashed, Play, XCircle } from 'lucide-react'
import type { StatusNodeData } from '../../types/graph'
import { StatusBadge } from '../StatusBadge'

export function StatusNode({ data, selected }: NodeProps<Node<StatusNodeData, 'statusNode'>>) {
  const { status, label, index, stats } = data

  const isRunning = ['STARTING', 'STARTED'].includes(status)
  const isSuccess = status === 'COMPLETED'
  const isError = ['FAILED', 'ABANDONED'].includes(status)
  const isStopped = status === 'STOPPED'

  let statusColorClass = 'text-status-pending'
  let accentClass = 'bg-status-pending'
  let Icon = CircleDashed

  if (isRunning) {
    statusColorClass = 'text-status-running'
    accentClass = 'bg-status-running'
    Icon = Play
  } else if (isSuccess) {
    statusColorClass = 'text-status-success'
    accentClass = 'bg-status-success'
    Icon = CheckCircle2
  } else if (isError) {
    statusColorClass = 'text-status-failed'
    accentClass = 'bg-status-failed'
    Icon = XCircle
  } else if (isStopped) {
    statusColorClass = 'text-status-stopped'
    accentClass = 'bg-status-stopped'
    Icon = Activity
  }

  return (
    <div
      className={`group relative flex w-[280px] flex-col overflow-visible rounded-xl border bg-base-100 transition-all duration-300 ${
        selected ? 'border-primary shadow-xl ring-4 ring-primary/10' : 'border-base-300 shadow-sm'
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${accentClass}`} />

      <Handle
        type="target"
        position={Position.Left}
        className="!left-0 !z-30 !h-3 !w-3 !-translate-x-1/2 !border-2 !border-current !bg-base-100"
      />
      
      <div className="flex items-start justify-between gap-3 px-4 pb-3 pt-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className={`flex h-7 w-7 items-center justify-center rounded-lg border border-current/20 bg-current/5 ${statusColorClass}`}>
              <Icon size={14} />
            </div>
            <div className="iris-header">Job {index}</div>
          </div>
          <div className="mt-3 truncate text-base font-bold tracking-tight text-base-content" title={label}>
            {label}
          </div>
        </div>
        <div className="shrink-0">
          <StatusBadge status={status} subtle />
        </div>
      </div>

      {stats ? (
        <div className="grid grid-cols-3 gap-2 px-4 pb-4">
          <StatItem label="Read" value={stats.read} />
          <StatItem label="Write" value={stats.write} />
          <StatItem label="Steps" value={stats.stepCount} />
        </div>
      ) : null}

      {isRunning ? (
        <div className="absolute bottom-0 left-4 right-4 h-[2px] overflow-hidden rounded-full bg-current/10">
          <div className={`h-full w-1/3 animate-[iris-progress_1.5s_infinite_linear] ${accentClass}`} />
        </div>
      ) : null}

      <Handle
        type="source"
        position={Position.Right}
        className="!right-0 !z-30 !h-3 !w-3 !translate-x-1/2 !border-2 !border-current !bg-base-100"
      />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes iris-progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}} />
    </div>
  )
}

function StatItem({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-lg border border-base-300 bg-base-200/40 px-2.5 py-2">
      <div className="text-[9px] font-bold uppercase tracking-wider opacity-40">{label}</div>
      <div className="mt-1 font-mono text-xs font-bold text-base-content">{value ?? 0}</div>
    </div>
  )
}
