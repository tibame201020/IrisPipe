import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface PipelineOverviewRailProps extends HTMLAttributes<HTMLElement> {
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export const PipelineOverviewRail = forwardRef<HTMLElement, PipelineOverviewRailProps>(function PipelineOverviewRail(
  {
    header,
    children,
    footer,
    className,
    headerClassName,
    bodyClassName,
    footerClassName,
    ...props
  },
  ref,
) {
  return (
    <aside
      ref={ref}
      className={cn('flex h-full min-h-0 w-[336px] shrink-0 flex-col border-l bg-base-100', className)}
      {...props}
    >
      {header ? (
        <div className={cn('shrink-0 border-b border-base-300/60 px-5 py-4', headerClassName)}>
          {header}
        </div>
      ) : null}
      <div className={cn('min-h-0 flex-1 overflow-y-auto px-5 py-5', bodyClassName)}>
        {children}
      </div>
      {footer ? (
        <div className={cn('shrink-0 border-t border-base-300/60 px-5 py-4', footerClassName)}>
          {footer}
        </div>
      ) : null}
    </aside>
  )
})

PipelineOverviewRail.displayName = 'PipelineOverviewRail'
