import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { SurfaceBox } from '../ui/Surface'

type ContextTone = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'

export type PipelineContextStripMetric = {
  label: ReactNode
  value: ReactNode
  detail?: ReactNode
  icon?: ReactNode
  tone?: ContextTone
}

export type PipelineContextStripProps = {
  eyebrow?: ReactNode
  title?: ReactNode
  detail?: ReactNode
  metrics?: PipelineContextStripMetric[]
  actions?: ReactNode
  className?: string
  children?: ReactNode
}

const metricToneClassMap: Record<ContextTone, string> = {
  neutral: 'border-base-300/80 bg-base-100 text-base-content',
  primary: 'border-primary/20 bg-primary/8 text-primary',
  secondary: 'border-secondary/20 bg-secondary/8 text-secondary',
  accent: 'border-accent/20 bg-accent/8 text-accent',
  info: 'border-info/20 bg-info/8 text-info',
  success: 'border-success/20 bg-success/8 text-success',
  warning: 'border-warning/20 bg-warning/10 text-warning',
  error: 'border-error/20 bg-error/8 text-error',
}

export function PipelineContextStrip({
  eyebrow,
  title,
  detail,
  metrics = [],
  actions,
  className,
  children,
}: PipelineContextStripProps) {
  return (
    <SurfaceBox variant="inset" className={cn('px-4 py-3.5', className)}>
      <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div className="min-w-0 flex-1">
          {eyebrow ? <div className="iris-kicker">{eyebrow}</div> : null}
          {title ? <div className={cn('min-w-0 text-sm font-semibold text-base-content', eyebrow ? 'mt-1' : '')}>{title}</div> : null}
          {detail ? <div className="mt-1 text-[11px] iris-copy">{detail}</div> : null}
        </div>

        {actions ? <div className="flex flex-wrap items-center gap-2 xl:justify-end">{actions}</div> : null}
      </div>

      {metrics.length > 0 ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={`${typeof metric.label === 'string' ? metric.label : index}`}
              className={cn('flex items-start gap-2 border px-3 py-2.5', metricToneClassMap[metric.tone ?? 'neutral'])}
              style={{ borderRadius: 'var(--iris-radius-inset)' }}
            >
              {metric.icon ? <div className="mt-0.5 shrink-0">{metric.icon}</div> : null}
              <div className="min-w-0">
                <div className="iris-kicker">{metric.label}</div>
                <div className="mt-1 text-sm font-semibold">{metric.value}</div>
                {metric.detail ? <div className="mt-0.5 text-[11px] opacity-75">{metric.detail}</div> : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {children ? <div className="mt-3">{children}</div> : null}
    </SurfaceBox>
  )
}
