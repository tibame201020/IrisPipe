import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface PipelineOverviewRailProps extends HTMLAttributes<HTMLElement> {
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  widthClassName?: string
  shellClassName?: string
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
    widthClassName,
    shellClassName,
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
      className={cn('iris-inspector-rail flex h-full min-h-0 shrink-0 flex-col border-l', widthClassName ?? 'w-[336px]', shellClassName, className)}
      {...props}
    >
      {header ? (
        <div className={cn('sticky top-0 z-10 shrink-0 border-b border-base-300/35 bg-inherit px-5 py-4 backdrop-blur-sm', headerClassName)}>
          {header}
        </div>
      ) : null}
      <div className={cn('iris-family-scroll-rail min-h-0 flex-1 overflow-y-auto px-5 py-5', bodyClassName)}>
        {children}
      </div>
      {footer ? (
        <div className={cn('sticky bottom-0 z-10 shrink-0 border-t border-base-300/35 bg-inherit px-5 py-4 backdrop-blur-sm', footerClassName)}>
          {footer}
        </div>
      ) : null}
    </aside>
  )
})

PipelineOverviewRail.displayName = 'PipelineOverviewRail'
