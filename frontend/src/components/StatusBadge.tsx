import type { PipelineRunStatus } from '../types/irispipe'

interface StatusBadgeProps {
  status: string
  subtle?: boolean
  mode?: 'badge' | 'text'
}

const statusClassMap: Record<string, string> = {
  UP: 'badge-success',
  DOWN: 'badge-error',
  STARTED: 'badge-info',
  STARTING: 'badge-info',
  STOPPING: 'badge-warning',
  STOPPED: 'badge-warning',
  FAILED: 'badge-error',
  COMPLETED: 'badge-success',
  PENDING: 'badge-ghost',
  UNKNOWN: 'badge-ghost',
  NOT_RUN: 'badge-ghost',
  SKIPPED: 'badge-ghost',
  ABANDONED: 'badge-error',
}

const textClassMap: Record<string, string> = {
  UP: 'text-success',
  DOWN: 'text-error',
  STARTED: 'text-info',
  STARTING: 'text-info',
  STOPPING: 'text-warning',
  STOPPED: 'text-warning',
  FAILED: 'text-error',
  COMPLETED: 'text-success',
  PENDING: 'text-base-content/55',
  UNKNOWN: 'text-base-content/55',
  NOT_RUN: 'text-base-content/55',
  SKIPPED: 'text-base-content/55',
  ABANDONED: 'text-error',
}

export function StatusBadge({ status, subtle = false, mode = 'badge' }: StatusBadgeProps) {
  const textClass = textClassMap[status as PipelineRunStatus] ?? 'text-base-content/55'

  if (mode === 'text') {
    return (
      <span className={`inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.18em] ${subtle ? 'text-xs' : 'text-sm'} ${textClass}`}>
        <span className="size-1.5 rounded-full bg-current opacity-70" />
        {status}
      </span>
    )
  }

  const badgeClass = statusClassMap[status as PipelineRunStatus] ?? 'badge-ghost'

  return (
    <span className={`badge gap-1.5 border-0 font-semibold uppercase tracking-[0.18em] ${badgeClass} ${subtle ? 'badge-sm' : ''}`}>
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  )
}
