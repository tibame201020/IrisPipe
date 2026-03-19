import { Handle, Position, type NodeProps, type Node } from '@xyflow/react'
import { Activity, CheckCircle2, CircleDashed, Play, XCircle } from 'lucide-react'
import type { StatusNodeData } from '../../types/graph'

export function StatusNode({ data, selected }: NodeProps<Node<StatusNodeData, 'statusNode'>>) {
  const { status, label, index, stats } = data

  const isRunning = ['STARTING', 'STARTED'].includes(status)
  const isSuccess = status === 'COMPLETED'
  const isError = ['FAILED', 'ABANDONED'].includes(status)
  const isStopped = status === 'STOPPED'

  let statusColorClass = 'border-status-pending/30 bg-status-pending/5 text-status-pending'
  let Icon = CircleDashed

  if (isRunning) {
    statusColorClass = 'border-status-running bg-status-running/10 text-status-running animate-iris-pulse'
    Icon = Play
  } else if (isSuccess) {
    statusColorClass = 'border-status-success bg-status-success/10 text-status-success'
    Icon = CheckCircle2
  } else if (isError) {
    statusColorClass = 'border-status-failed bg-status-failed/10 text-status-failed'
    Icon = XCircle
  } else if (isStopped) {
    statusColorClass = 'border-status-stopped bg-status-stopped/10 text-status-stopped'
    Icon = Activity
  }

  return (
    <div
      className={`group relative flex w-[280px] flex-col overflow-visible rounded-xl border-2 transition-all duration-300 ${statusColorClass} ${
        selected ? 'ring-4 ring-primary/20 scale-[1.02] shadow-2xl' : 'shadow-lg'
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!z-20 !h-3 !w-3 !border-2 !border-current !bg-base-100"
      />
      
      <div className="flex items-center justify-between border-b border-current/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className={`flex h-6 w-6 items-center justify-center rounded-md border border-current/20 bg-current/5`}>
            <Icon size={14} />
          </div>
          <div className="iris-header">Job {index}</div>
        </div>
        <div className="text-[10px] font-bold opacity-60">{status}</div>
      </div>

      <div className="px-4 py-4">
        <div className="truncate text-base font-bold tracking-tight text-base-content">{label}</div>
        
        {stats && (
          <div className={`mt-4 grid gap-2 ${stats.stepCount != null ? 'grid-cols-3' : 'grid-cols-2'}`}>
            <StatItem label="Read" value={stats.read} />
            <StatItem label="Write" value={stats.write} />
            {stats.stepCount != null ? <StatItem label="Steps" value={stats.stepCount} /> : null}
          </div>
        )}
      </div>

      {isRunning && (
        <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-current/10">
          <div className="h-full w-1/3 animate-[iris-progress_1.5s_infinite_linear] bg-current" />
        </div>
      )}

      <Handle
        type="source"
        position={Position.Right}
        className="!z-20 !h-3 !w-3 !border-2 !border-current !bg-base-100"
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
    <div className="rounded-lg border border-current/5 bg-base-content/5 px-2 py-1.5">
      <div className="text-[9px] font-bold uppercase tracking-wider opacity-40">{label}</div>
      <div className="mt-0.5 font-mono text-xs font-bold text-base-content">{value ?? 0}</div>
    </div>
  )
}
