import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface PipelineJobSlabProps extends HTMLAttributes<HTMLElement> {
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  leading?: ReactNode
  headerAside?: ReactNode
  selected?: boolean
  interactive?: boolean
  dragging?: boolean
  dropTarget?: boolean
  className?: string
  leadingClassName?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export const PipelineJobSlab = forwardRef<HTMLElement, PipelineJobSlabProps>(function PipelineJobSlab(
  {
    header,
    children,
    footer,
    leading,
    headerAside,
    selected = false,
    interactive = false,
    dragging = false,
    dropTarget = false,
    className,
    leadingClassName,
    headerClassName,
    bodyClassName,
    footerClassName,
    ...props
  },
  ref,
) {
  return (
    <article
      ref={ref}
      className={cn(
        'group/pipeline-job relative flex overflow-hidden transition-all duration-150',
        selected ? 'ring-1 ring-primary/12' : '',
        dropTarget ? 'ring-2 ring-primary/15' : '',
        dragging ? 'opacity-80' : '',
        interactive ? 'cursor-pointer' : 'cursor-default',
        className,
      )}
      {...props}
    >
      {dropTarget ? <div className="absolute inset-x-2 -top-[1.5px] h-[2px] rounded-full bg-primary" /> : null}
      {leading ? <div className={cn('w-[3px] shrink-0 self-stretch', leadingClassName)}>{leading}</div> : null}

      {header ? (
        <>
          <div className="min-w-0 flex-1 px-3 py-2.5">
            <div className={cn('flex items-start gap-1.5', headerClassName)}>
              <div className="min-w-0 flex-1">{header}</div>
              {headerAside ? <div className="mt-0.5 flex shrink-0 items-center gap-1">{headerAside}</div> : null}
            </div>

            {children ? <div className={cn('min-w-0', bodyClassName)}>{children}</div> : null}
          </div>

          {footer ? (
            <div
              className={cn(
                'shrink-0 px-1.5 py-1.5',
                footerClassName,
              )}
            >
              {footer}
            </div>
          ) : null}
        </>
      ) : (
        children
      )}
    </article>
  )
})

PipelineJobSlab.displayName = 'PipelineJobSlab'
