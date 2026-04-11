import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface PipelineStageColumnProps extends HTMLAttributes<HTMLElement> {
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  selected?: boolean
  interactive?: boolean
  dragging?: boolean
  dropTarget?: boolean
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export const PipelineStageColumn = forwardRef<HTMLElement, PipelineStageColumnProps>(function PipelineStageColumn(
  {
    header,
    children,
    footer,
    selected = false,
    interactive = false,
    dragging = false,
    dropTarget = false,
    className,
    headerClassName,
    bodyClassName,
    footerClassName,
    ...props
  },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn(
        'group/pipeline-stage relative flex w-[300px] shrink-0 flex-col overflow-hidden transition-all duration-150',
        selected ? 'ring-1 ring-primary/15' : '',
        dropTarget ? 'ring-2 ring-primary/20' : '',
        dragging ? 'opacity-80' : '',
        interactive ? 'cursor-pointer' : '',
        className,
      )}
      {...props}
    >
      {header ? (
        <>
          <div className={cn('shrink-0 px-4 py-3', headerClassName)}>
            {header}
          </div>
          <div className={cn('min-h-0 flex-1 overflow-y-auto px-3 py-3', bodyClassName)}>
            {children}
          </div>
          {footer ? (
            <div className={cn('shrink-0 px-4 py-3', footerClassName)}>
              {footer}
            </div>
          ) : null}
        </>
      ) : (
        children
      )}
    </section>
  )
})

PipelineStageColumn.displayName = 'PipelineStageColumn'
