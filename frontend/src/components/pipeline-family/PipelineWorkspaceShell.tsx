import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { SurfaceBox } from '../ui/Surface'
import { PIPELINE_FAMILY_WORKSPACE_LABEL } from './ui-contract'

export type PipelineWorkspaceShellTab = {
  key: string
  label: ReactNode
  href?: string
  onClick?: () => void
  active?: boolean
  icon?: ReactNode
  badge?: ReactNode
  disabled?: boolean
  title?: string
  ariaLabel?: string
}

export type PipelineWorkspaceShellIdentity = {
  breadcrumb?: ReactNode
  title: ReactNode
  detail?: ReactNode
  chips?: ReactNode
}

export type PipelineWorkspaceShellProps = {
  identity: PipelineWorkspaceShellIdentity
  tabs: PipelineWorkspaceShellTab[]
  workspaceLabel?: ReactNode
  contextStrip?: ReactNode
  primaryActions?: ReactNode
  main?: ReactNode
  children?: ReactNode
  inspector?: ReactNode
  drawer?: ReactNode
  footer?: ReactNode
  className?: string
  bodyClassName?: string
  mainClassName?: string
  inspectorClassName?: string
  drawerClassName?: string
}

export function PipelineWorkspaceShell({
  identity,
  tabs,
  workspaceLabel = PIPELINE_FAMILY_WORKSPACE_LABEL,
  contextStrip,
  primaryActions,
  main,
  children,
  inspector,
  drawer,
  footer,
  className,
  bodyClassName,
  mainClassName,
  inspectorClassName,
  drawerClassName,
}: PipelineWorkspaceShellProps) {
  return (
    <div className={cn('iris-page-canvas flex h-full min-h-0 flex-col overflow-hidden', className)}>
      <SurfaceBox variant="shell" className="shrink-0">
        <div className="flex flex-wrap items-start justify-between gap-4 px-5 py-3.5">
          <div className="min-w-0 flex-1">
            {identity.breadcrumb ? <div className="iris-mono-meta truncate">{identity.breadcrumb}</div> : null}
            <div className="mt-1 flex flex-wrap items-center gap-2">{identity.chips}</div>
            <div className="mt-2 min-w-0 text-[14px] font-bold tracking-tight text-base-content">
              {identity.title}
            </div>
            {identity.detail ? <div className="mt-1 max-w-4xl text-sm iris-copy">{identity.detail}</div> : null}
          </div>

          {primaryActions ? <div className="flex flex-wrap items-center gap-2">{primaryActions}</div> : null}
        </div>

        <div className="iris-family-context flex items-center justify-between gap-3 px-5 py-2.5">
          <div className="flex min-w-0 items-center gap-1 overflow-x-auto">{tabs.map((tab) => renderTab(tab))}</div>
          {workspaceLabel ? <div className="hidden shrink-0 text-[10px] iris-copy-soft md:block">{workspaceLabel}</div> : null}
        </div>

        {contextStrip ? <div className="px-5 py-3">{contextStrip}</div> : null}
      </SurfaceBox>

      <div className={cn('iris-workspace-shell flex min-h-0 flex-1 flex-row overflow-hidden', bodyClassName)}>
        <main className={cn('min-h-0 min-w-0 flex-1 overflow-hidden', mainClassName)}>
          {main ?? children}
        </main>

        {inspector ? (
          <aside className={cn('iris-inspector-rail flex w-[336px] shrink-0 flex-col border-l', inspectorClassName)}>
            {inspector}
          </aside>
        ) : null}
      </div>

      {drawer ? (
        <div className={cn('iris-workspace-dock shrink-0', drawerClassName)}>
          {drawer}
        </div>
      ) : null}

      {footer ? <div className="shrink-0">{footer}</div> : null}
    </div>
  )
}

function renderTab(tab: PipelineWorkspaceShellTab) {
  const baseClass = cn(
    '-mb-px flex items-center gap-1.5 border-b-2 px-3 py-2 text-[13px] font-semibold transition-all duration-150',
    tab.active
      ? 'border-primary text-primary'
      : 'border-transparent text-base-content/40 hover:border-base-300 hover:text-base-content',
    tab.disabled && 'pointer-events-none opacity-40',
  )

  const content = (
    <>
      {tab.icon ? <span className="shrink-0">{tab.icon}</span> : null}
      <span className="truncate">{tab.label}</span>
      {tab.badge ? <span className="shrink-0">{tab.badge}</span> : null}
    </>
  )

  if (tab.href) {
    return (
      <Link
        key={tab.key}
        to={tab.href}
        aria-label={tab.ariaLabel}
        aria-current={tab.active ? 'page' : undefined}
        aria-disabled={tab.disabled || undefined}
        title={tab.title}
        className={baseClass}
        onClick={(event) => {
          if (tab.disabled) {
            event.preventDefault()
            event.stopPropagation()
            return
          }
          tab.onClick?.()
        }}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      key={tab.key}
      type="button"
      aria-label={tab.ariaLabel}
      aria-pressed={tab.active || undefined}
      title={tab.title}
      disabled={tab.disabled}
      className={baseClass}
      onClick={tab.onClick}
    >
      {content}
    </button>
  )
}
