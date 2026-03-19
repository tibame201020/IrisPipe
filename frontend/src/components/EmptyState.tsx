import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="hero min-h-72 rounded-box border border-base-300 bg-base-100 shadow-sm">
      <div className="hero-content text-center">
        <div className="max-w-xl space-y-4">
          <div className="mx-auto flex size-14 items-center justify-center rounded-box bg-primary/10 text-primary">
            <Icon size={24} />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-base-content/60">{description}</p>
          </div>
          {action}
        </div>
      </div>
    </div>
  )
}
