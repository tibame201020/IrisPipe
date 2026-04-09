import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { SurfaceBox } from './ui/Surface'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <SurfaceBox variant="section" className="mx-auto flex min-h-72 max-w-4xl items-center justify-center border px-6 py-10">
      <div className="text-center">
        <div className="max-w-xl space-y-4">
          <div className="mx-auto flex size-14 items-center justify-center rounded-sm bg-primary/10 text-primary">
            <Icon size={24} />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-base-content/60">{description}</p>
          </div>
          {action}
        </div>
      </div>
    </SurfaceBox>
  )
}
