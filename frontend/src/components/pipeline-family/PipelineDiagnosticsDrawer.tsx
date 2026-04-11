import type { HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { cn } from '../../lib/cn'

export interface PipelineDiagnosticsDrawerProps extends HTMLAttributes<HTMLElement> {
  header: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export const PipelineDiagnosticsDrawer = forwardRef<HTMLElement, PipelineDiagnosticsDrawerProps>(
  function PipelineDiagnosticsDrawer(
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
      <section
        ref={ref}
        className={cn('shrink-0 overflow-hidden border-t border-base-300/60 bg-base-100', className)}
        {...props}
      >
        <div className={cn('flex items-center justify-between gap-3 border-b border-base-300/60 px-4 py-3', headerClassName)}>
          {header}
        </div>
        <div className={cn('h-[248px] overflow-y-auto px-4 py-4', bodyClassName)}>
          {children}
        </div>
        {footer ? (
          <div className={cn('border-t border-base-300/60 px-4 py-3', footerClassName)}>
            {footer}
          </div>
        ) : null}
      </section>
    )
  },
)

PipelineDiagnosticsDrawer.displayName = 'PipelineDiagnosticsDrawer'
