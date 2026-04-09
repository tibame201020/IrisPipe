import { Check, Palette, Wifi, WifiOff } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getApiErrorMessage, getHealth } from '../lib/api'
import { useTheme } from '../state/theme'
import { availableThemes } from '../state/theme.constants'

export function ConsoleHeader() {
  const location = useLocation()
  const { themeName, setThemeName } = useTheme()
  const [healthStatus, setHealthStatus] = useState<'UP' | 'DOWN' | 'CHECKING'>('CHECKING')

  useEffect(() => {
    let active = true
    const loadHealth = async () => {
      try {
        const response = await getHealth()
        if (!active) return
        setHealthStatus(response.status === 'UP' ? 'UP' : 'DOWN')
      } catch (error) {
        if (!active) return
        setHealthStatus('DOWN')
        getApiErrorMessage(error, '')
      }
    }
    void loadHealth()
    const timer = window.setInterval(() => void loadHealth(), 15000)
    return () => { active = false; window.clearInterval(timer) }
  }, [])

  const isUp = healthStatus === 'UP'
  const isChecking = healthStatus === 'CHECKING'

  return (
    <header className="flex h-[52px] shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-5 gap-4">
      {/* ── Left: Breadcrumb path label ── */}
      <div className="min-w-0 flex-1">
        <PageLabel pathname={location.pathname} />
      </div>

      {/* ── Right: Controls ── */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Backend health indicator */}
        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors ${
            isChecking
              ? 'bg-base-200 text-base-content/40'
              : isUp
              ? 'bg-success/10 text-success'
              : 'bg-error/10 text-error'
          }`}
        >
          {isChecking ? (
            <span className="size-1.5 rounded-full bg-base-content/30 animate-pulse" />
          ) : isUp ? (
            <Wifi size={12} strokeWidth={2.5} />
          ) : (
            <WifiOff size={12} strokeWidth={2.5} />
          )}
          <span className="hidden sm:inline">{isChecking ? 'Connecting' : isUp ? 'Connected' : 'Offline'}</span>
        </div>

        {/* Theme picker */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-sm h-8 gap-1.5 rounded-full border border-base-300 bg-base-100 px-3 text-[11px] font-semibold uppercase tracking-wider hover:bg-base-200"
          >
            <Palette size={13} />
            <span className="capitalize hidden sm:inline">{themeName}</span>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[100] mt-2 w-56 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-2xl"
          >
            <div className="px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-base-content/40">
              Theme
            </div>
            <ul className="max-h-72 space-y-0.5 overflow-y-auto p-1">
              {availableThemes.map((theme) => (
                <li key={theme}>
                  <button
                    type="button"
                    onClick={() => setThemeName(theme)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${
                      themeName === theme
                        ? 'bg-primary/10 text-primary'
                        : 'text-base-content/60 hover:bg-base-200 hover:text-base-content'
                    }`}
                    data-theme={theme}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-0.5">
                        <div className="h-3 w-1.5 rounded-sm bg-primary" />
                        <div className="h-3 w-1.5 rounded-sm bg-secondary" />
                        <div className="h-3 w-1.5 rounded-sm bg-accent" />
                      </div>
                      <span className="capitalize">{theme}</span>
                    </div>
                    {themeName === theme && <Check size={12} />}
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

function PageLabel({ pathname }: { pathname: string }) {
  const segments = buildPageSegments(pathname)
  if (segments.length === 0) return null

  return (
    <div className="flex items-center gap-1.5 text-sm min-w-0">
      {segments.map((seg, i) => (
        <span key={i} className="flex items-center gap-1.5 min-w-0">
          {i > 0 && <span className="text-base-content/35 shrink-0">/</span>}
          <span
            className={`truncate ${
              i === segments.length - 1
                ? 'font-semibold text-base-content'
                : 'text-base-content/50 font-medium'
            }`}
          >
            {seg}
          </span>
        </span>
      ))}
    </div>
  )
}

function buildPageSegments(pathname: string): string[] {
  if (pathname.startsWith('/pipeline/items/') && pathname.includes('/runs/')) {
    return ['Pipeline', 'Runs', 'Run Detail']
  }
  if (pathname.startsWith('/pipeline/items/') && pathname.endsWith('/runs')) {
    return ['Pipeline', 'Run History']
  }
  if (pathname.startsWith('/pipeline/items/') && pathname.endsWith('/config')) {
    return ['Pipeline', 'Config Editor']
  }
  if (pathname.startsWith('/pipeline/new/config')) {
    return ['Pipeline', 'New Pipeline']
  }
  if (pathname.startsWith('/pipeline/folders/')) {
    return ['Pipeline', 'Explorer']
  }
  if (pathname.startsWith('/pipeline')) {
    return ['Pipeline', 'Explorer']
  }
  if (pathname.startsWith('/settings')) {
    return ['Settings']
  }
  return ['Overview']
}
