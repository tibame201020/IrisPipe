import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

interface LayoutContextValue {
  sidebarCollapsed: boolean
  toggleSidebar: () => void
}

const LayoutContext = createContext<LayoutContextValue | null>(null)
const STORAGE_KEY = 'irispipe-console-sidebar'

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return window.localStorage.getItem(STORAGE_KEY) === 'collapsed'
  })

  const value = useMemo(
    () => ({
      sidebarCollapsed,
      toggleSidebar: () =>
        setSidebarCollapsed((current) => {
          const next = !current
          window.localStorage.setItem(STORAGE_KEY, next ? 'collapsed' : 'expanded')
          return next
        }),
    }),
    [sidebarCollapsed],
  )

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
}

export function useLayout() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within LayoutProvider')
  }

  return context
}
