import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SurfaceVariant = 'section' | 'list' | 'inset' | 'glass' | 'glassSoft' | 'glassBand' | 'shell' | 'empty'

const surfaceClassMap: Record<SurfaceVariant, string> = {
  section: 'iris-section-panel',
  list: 'iris-list-panel',
  inset: 'iris-inset-panel',
  glass: 'iris-glass',
  glassSoft: 'iris-glass-soft',
  glassBand: 'iris-glass-band',
  shell: 'iris-family-shell',
  empty: 'iris-empty-panel',
}

type SurfaceBoxProps<T extends ElementType> = {
  as?: T
  variant?: SurfaceVariant
  className?: string
  children: ReactNode
}

export function SurfaceBox<T extends ElementType = 'div'>({
  as,
  variant = 'section',
  className,
  children,
  ...props
}: SurfaceBoxProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SurfaceBoxProps<T>>) {
  const Comp = as ?? 'div'
  return (
    <Comp className={cn(surfaceClassMap[variant], className)} {...props}>
      {children}
    </Comp>
  )
}

export function PanelHeader({
  icon,
  kicker,
  title,
  detail,
  aside,
  className,
}: {
  icon?: ReactNode
  kicker?: string
  title?: ReactNode
  detail?: ReactNode
  aside?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex items-start justify-between gap-3 border-b border-base-300/60 px-4 py-3.5', className)}>
      <div className="min-w-0">
        {kicker ? (
          <div className="flex items-center gap-2">
            {icon}
            <div className="iris-kicker">{kicker}</div>
          </div>
        ) : icon ? (
          <div className="flex items-center gap-2">{icon}</div>
        ) : null}
        {title ? <div className="mt-1 min-w-0 text-sm font-semibold text-base-content">{title}</div> : null}
        {detail ? <div className="mt-1 text-[11px] iris-copy">{detail}</div> : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  )
}

type SummaryTone = 'neutral' | 'primary' | 'success' | 'warning' | 'info' | 'error'

const summaryToneClassMap: Record<SummaryTone, string> = {
  neutral: 'border-base-300/80 bg-base-100/88 text-base-content',
  primary: 'border-primary/18 bg-primary/6 text-primary',
  success: 'border-success/18 bg-success/6 text-success',
  warning: 'border-warning/18 bg-warning/6 text-warning',
  info: 'border-info/18 bg-info/6 text-info',
  error: 'border-error/18 bg-error/6 text-error',
}

export function SummaryTile({
  kicker,
  value,
  detail,
  icon,
  pulse = false,
  tone = 'neutral',
  className,
  valueClassName,
}: {
  kicker: string
  value: ReactNode
  detail: ReactNode
  icon?: ReactNode
  pulse?: boolean
  tone?: SummaryTone
  className?: string
  valueClassName?: string
}) {
  return (
    <SurfaceBox variant="glassSoft" className={cn('px-4 py-3.5', summaryToneClassMap[tone], className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon}
          <div className="iris-kicker">{kicker}</div>
        </div>
        {pulse ? <span className="size-2 rounded-full bg-current opacity-70 animate-pulse" /> : null}
      </div>
      <div className={cn('mt-2 text-lg font-bold tracking-tight', tone === 'neutral' ? 'text-base-content' : '', valueClassName)}>
        {value}
      </div>
      <div className={cn('mt-1 text-[11px]', tone === 'neutral' ? 'iris-copy' : 'text-current/75')}>
        {detail}
      </div>
    </SurfaceBox>
  )
}
