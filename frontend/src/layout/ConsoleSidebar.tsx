import { FolderTree, Home, PanelLeftClose, PanelLeftOpen, Settings2, Workflow } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useLayout } from '../state/layout'

const navItems = [
  {
    to: '/overview',
    icon: Home,
    label: 'Overview',
    description: 'Engine landing',
  },
  {
    to: '/pipeline',
    icon: FolderTree,
    label: 'Pipeline',
    description: 'Explorer and runs',
  },
  {
    to: '/settings',
    icon: Settings2,
    label: 'Settings',
    description: 'Theme and appearance',
  },
]

export function ConsoleSidebar() {
  const { sidebarCollapsed, toggleSidebar } = useLayout()

  return (
    <aside
      className={`flex h-full flex-col border-r border-base-300 bg-base-100 transition-[width] duration-300 ${
        sidebarCollapsed ? 'w-24' : 'w-72'
      }`}
    >
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-box bg-primary text-primary-content">
          <Workflow size={22} />
        </div>
        {!sidebarCollapsed ? (
          <div className="overflow-hidden">
            <div className="truncate text-lg font-semibold tracking-tight">IrisPipe</div>
            <div className="truncate text-sm text-base-content/55">Operator Console</div>
          </div>
        ) : null}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to}>
                {({ isActive }) => (
                  <div
                    className={`flex w-full items-center rounded-box py-3 transition-colors ${
                      sidebarCollapsed ? 'justify-center px-0' : 'gap-3 px-4'
                    } ${
                      isActive
                        ? 'border border-primary/20 bg-primary/10 text-primary'
                        : 'border border-transparent text-base-content/65 hover:bg-base-200 hover:text-base-content'
                    }`}
                  >
                    <item.icon size={20} className={`shrink-0 ${sidebarCollapsed ? 'mx-auto' : ''}`} />
                    {!sidebarCollapsed ? (
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold">{item.label}</div>
                        <div className={`truncate text-xs ${isActive ? 'text-primary/70' : 'text-base-content/45'}`}>
                          {item.description}
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-base-300 p-3">
        <button
          type="button"
          onClick={toggleSidebar}
          className={`btn btn-ghost w-full rounded-box normal-case text-base-content/60 hover:bg-base-200 hover:text-base-content ${
            sidebarCollapsed ? 'justify-center px-0' : 'justify-start px-4'
          }`}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          {!sidebarCollapsed ? <span>Collapse sidebar</span> : null}
        </button>
      </div>
    </aside>
  )
}
