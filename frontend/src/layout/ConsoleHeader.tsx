import { Activity, Check, Palette } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getApiErrorMessage, getHealth } from '../lib/api'
import { StatusBadge } from '../components/StatusBadge'
import { availableThemes, useTheme } from '../state/theme'

function resolveTitle(pathname: string) {
  if (pathname.startsWith('/pipeline/items/') && pathname.includes('/runs/')) {
    return 'Run detail'
  }
  if (pathname.startsWith('/pipeline/items/') && pathname.endsWith('/runs')) {
    return 'Pipeline runs'
  }
  if (pathname.startsWith('/pipeline/items/') && pathname.endsWith('/config')) {
    return 'Pipeline config'
  }
  if (pathname.startsWith('/pipeline')) {
    return 'Pipeline'
  }
  if (pathname.startsWith('/settings')) {
    return 'Settings'
  }

  return 'Overview'
}

export function ConsoleHeader() {
  const location = useLocation()
  const { themeName, setThemeName } = useTheme()
  const [healthStatus, setHealthStatus] = useState('UP')
  const [healthMessage, setHealthMessage] = useState('Backend control surface is responding')

  useEffect(() => {
    let active = true

    const loadHealth = async () => {
      try {
        const response = await getHealth()
        if (!active) {
          return
        }

        setHealthStatus(response.status)
        setHealthMessage('Backend control surface is responding')
      } catch (error) {
        if (!active) {
          return
        }

        setHealthStatus('DOWN')
        setHealthMessage(getApiErrorMessage(error, 'Backend health is unavailable'))
      }
    }

    loadHealth()
    const timer = window.setInterval(loadHealth, 15000)

    return () => {
      active = false
      window.clearInterval(timer)
    }
  }, [])

  const title = resolveTitle(location.pathname)

  return (
    <header className="navbar h-20 border-b border-base-300 bg-base-100 px-6">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="tooltip tooltip-bottom" data-tip={healthMessage}>
          <div className="btn btn-ghost btn-sm border border-base-300 bg-base-100 px-4 hover:bg-base-200">
            <Activity size={16} className="text-primary" />
            <StatusBadge status={healthStatus} subtle mode="text" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-sm gap-2 border border-base-300 bg-base-100 normal-case shadow-none hover:bg-base-200">
            <Palette size={16} />
            <span className="uppercase">{themeName}</span>
          </label>
          <div tabIndex={0} className="dropdown-content z-[100] mt-3 w-64 border border-base-300 bg-base-100 p-2 shadow-2xl">
            <ul className="menu max-h-80 flex-nowrap gap-px overflow-y-auto p-1">
              <li className="menu-title px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Available themes</li>
              {availableThemes.map((theme) => (
                <li key={theme}>
                  <button
                    type="button"
                    onClick={() => setThemeName(theme)}
                    className={`flex items-center justify-between px-4 py-3 text-xs font-bold transition-colors ${
                      themeName === theme ? 'bg-primary/10 text-primary' : 'opacity-70 hover:bg-base-200 hover:opacity-100'
                    }`}
                    data-theme={theme}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        <div className="h-3 w-1.5 rounded-sm bg-primary" />
                        <div className="h-3 w-1.5 rounded-sm bg-secondary" />
                        <div className="h-3 w-1.5 rounded-sm bg-accent" />
                      </div>
                      <span className="capitalize">{theme}</span>
                    </div>
                    {themeName === theme ? <Check size={12} /> : null}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
