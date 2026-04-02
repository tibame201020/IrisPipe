import { Activity, FolderTree, Home, PanelLeftClose, PanelLeftOpen, Settings2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useLayout } from '../state/layout'

const navItems = [
  { to: '/overview', icon: Home, label: 'Overview', description: 'Engine landing' },
  { to: '/pipeline', icon: FolderTree, label: 'Pipeline', description: 'Explorer & runs' },
  { to: '/settings', icon: Settings2, label: 'Settings', description: 'Appearance' },
]

export function ConsoleSidebar() {
  const { sidebarCollapsed, toggleSidebar } = useLayout()

  return (
    <aside
      className={`flex h-full flex-col border-r border-base-300 bg-base-100 transition-[width] duration-300 ease-in-out shrink-0 ${
        sidebarCollapsed ? 'w-[64px]' : 'w-[240px]'
      }`}
    >
      {/* ── Logo ── */}
      <div className={`flex items-center gap-3 border-b border-base-300 ${sidebarCollapsed ? 'justify-center px-0 py-4' : 'px-5 py-4'}`}>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content shadow-sm">
          <Activity size={18} strokeWidth={2.5} />
        </div>
        {!sidebarCollapsed && (
          <div className="min-w-0 overflow-hidden">
            <div className="truncate text-[15px] font-bold tracking-tight leading-tight">IrisPipe</div>
            <div className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-base-content/35">
              Operator Console
            </div>
          </div>
        )}
      </div>

      {/* ── Nav ── */}
      <nav className="flex-1 overflow-y-auto py-3">
        {!sidebarCollapsed && (
          <div className="px-4 pb-2 text-[9px] font-black uppercase tracking-[0.22em] text-base-content/25">Navigation</div>
        )}
        <ul className="space-y-0.5 px-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to}>
                {({ isActive }) => (
                  <div
                    className={`iris-nav-active flex w-full items-center rounded-lg py-2.5 transition-all duration-150 ${
                      sidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3'
                    } ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-base-content/55 hover:bg-base-200/70 hover:text-base-content'
                    }`}
                    style={isActive && !sidebarCollapsed ? undefined : undefined}
                  >
                    {/* Active left bar */}
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r-sm bg-primary"
                        style={{ position: 'absolute' }}
                      />
                    )}
                    <item.icon
                      size={18}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={`shrink-0 ${sidebarCollapsed ? 'mx-auto' : ''}`}
                    />
                    {!sidebarCollapsed && (
                      <div className="min-w-0">
                        <div className="truncate text-sm leading-tight">{item.label}</div>
                        <div className={`truncate text-[10px] leading-none mt-0.5 ${isActive ? 'text-primary/60' : 'text-base-content/35'}`}>
                          {item.description}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Collapse Toggle ── */}
      <div className="border-t border-base-300 p-2">
        <button
          type="button"
          onClick={toggleSidebar}
          className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[11px] font-semibold text-base-content/40 transition-colors hover:bg-base-200 hover:text-base-content/70 ${
            sidebarCollapsed ? 'justify-center' : ''
          }`}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed
            ? <PanelLeftOpen size={16} />
            : <><PanelLeftClose size={16} /><span>Collapse</span></>
          }
        </button>
      </div>
    </aside>
  )
}
