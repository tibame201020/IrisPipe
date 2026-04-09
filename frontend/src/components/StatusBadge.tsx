import { getPipelineStatusMeta } from '../lib/pipeline-runtime'

interface StatusBadgeProps {
  status: string
  subtle?: boolean
  mode?: 'badge' | 'text'
}

export function StatusBadge({ status, subtle = false, mode = 'badge' }: StatusBadgeProps) {
  const meta = getPipelineStatusMeta(status)

  if (mode === 'text') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.18em] ${subtle ? 'text-xs' : 'text-sm'} ${meta.textClass}`}
        title={meta.description}
      >
        <span className="size-1.5 rounded-full bg-current opacity-70" />
        {meta.label}
      </span>
    )
  }

  return (
    <span
      className={`badge gap-1.5 border-0 font-semibold uppercase tracking-[0.18em] ${meta.badgeClass} ${subtle ? 'badge-sm' : ''}`}
      title={meta.description}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {meta.label}
    </span>
  )
}
