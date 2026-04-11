import { getPipelineStatusMeta } from '../lib/pipeline-runtime'

interface StatusBadgeProps {
  status: string
  subtle?: boolean
  mode?: 'badge' | 'text'
}

export function StatusBadge({ status, subtle = false, mode = 'badge' }: StatusBadgeProps) {
  const meta = getPipelineStatusMeta(status)
  const tone = meta.tone

  if (mode === 'text') {
    return (
      <span
        className={`iris-pipeline-state-runtime iris-pipeline-status-tone inline-flex items-center gap-1.5 font-semibold uppercase tracking-[0.18em] ${subtle ? 'text-xs' : 'text-sm'}`}
        data-kind="runtime"
        data-tone={tone}
        title={meta.description}
      >
        <span className="size-1.5 rounded-full bg-current opacity-70" />
        {meta.label}
      </span>
    )
  }

  return (
    <span
      className={`badge iris-pipeline-state-runtime iris-pipeline-status-badge gap-1.5 font-semibold uppercase tracking-[0.18em] ${subtle ? 'badge-sm' : ''}`}
      data-kind="runtime"
      data-tone={tone}
      title={meta.description}
    >
      <span className="size-1.5 rounded-full bg-current opacity-70" />
      {meta.label}
    </span>
  )
}
