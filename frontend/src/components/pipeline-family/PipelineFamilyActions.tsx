import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type PipelineFamilyActionsProps = {
  primary?: ReactNode
  secondary?: ReactNode
  danger?: ReactNode
  utility?: ReactNode
  className?: string
}

export function PipelineFamilyActions({
  primary,
  secondary,
  danger,
  utility,
  className,
}: PipelineFamilyActionsProps) {
  return (
    <div className={cn('iris-signal-strip flex flex-wrap items-center gap-1 px-1 py-1', className)}>
      {secondary}
      {primary}
      {danger}
      {utility}
    </div>
  )
}
