import type { ReactNode } from 'react'

interface PageToolbarProps {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
}

export function PageToolbar({ eyebrow, title, description, actions }: PageToolbarProps) {
  return (
    <div className="border-b border-base-300 bg-base-100 px-6 py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-2">
          {eyebrow ? <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{eyebrow}</div> : null}
          <div className="space-y-1">
            <h1 className="card-title text-3xl font-semibold tracking-tight">{title}</h1>
            {description ? <p className="max-w-3xl text-sm leading-6 text-base-content/65">{description}</p> : null}
          </div>
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
    </div>
  )
}
