import { Outlet } from 'react-router-dom'
import { ConsoleHeader } from './ConsoleHeader'
import { ConsoleSidebar } from './ConsoleSidebar'

export function ConsoleLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-base-200">
      <ConsoleSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <ConsoleHeader />
        <main className="iris-page-canvas min-h-0 flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
