import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { ActionButton } from './Action'
import { SurfaceBox } from './Surface'

type DialogTone = 'default' | 'danger'

export function DialogShell({
  open,
  title,
  description,
  onClose,
  footer,
  maxWidthClassName = 'max-w-lg',
  tone = 'default',
  children,
}: {
  open: boolean
  title: ReactNode
  description?: ReactNode
  onClose: () => void
  footer?: ReactNode
  maxWidthClassName?: string
  tone?: DialogTone
  children: ReactNode
}) {
  if (!open) return null

  return (
    <div className="iris-scrim fixed inset-0 z-50 flex items-center justify-center">
      <SurfaceBox variant="glass" className={cn('mx-4 flex w-full flex-col overflow-hidden border shadow-2xl', maxWidthClassName)}>
        <div className={cn(
          'flex items-start justify-between gap-4 border-b px-5 py-4',
          tone === 'danger'
            ? 'border-error/20 bg-error/5'
            : 'border-base-300',
        )}>
          <div className="min-w-0">
            <div className={cn('text-base font-bold', tone === 'danger' ? 'text-error' : 'text-base-content')}>
              {title}
            </div>
            {description ? <div className="mt-1 text-sm iris-copy">{description}</div> : null}
          </div>
          <ActionButton size="xs" tone="icon" square onClick={onClose} aria-label="Close dialog">
            <X size={12} />
          </ActionButton>
        </div>

        <div className="flex flex-col gap-4 p-5 overflow-y-auto">
          {children}
        </div>

        {footer ? (
          <div className="flex items-center justify-end gap-2 border-t border-base-300 px-5 py-3">
            {footer}
          </div>
        ) : null}
      </SurfaceBox>
    </div>
  )
}
