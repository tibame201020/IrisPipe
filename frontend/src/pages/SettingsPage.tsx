import { Check, Palette } from 'lucide-react'
import { useTheme } from '../state/theme'
import { availableThemes } from '../state/theme.constants'

export function SettingsPage() {
  const { themeName, setThemeName } = useTheme()

  return (
    <div className="h-full overflow-y-auto">
      <div className="card rounded-none border-x-0 border-y border-base-300 bg-base-100 shadow-none">
        <div className="card-body gap-6 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Active theme</div>
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-box bg-primary/10 text-primary">
                  <Palette size={20} />
                </div>
                <div>
                  <div className="text-2xl font-semibold capitalize">{themeName}</div>
                  <div className="text-sm text-base-content/55">Applied immediately to the whole console</div>
                </div>
              </div>
            </div>

            <span className="text-xs font-mono uppercase tracking-[0.18em] text-base-content/45">
              {availableThemes.length} themes
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {availableThemes.map((theme) => {
              const selected = theme === themeName

              return (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setThemeName(theme)}
                  data-theme={theme}
                  className={`btn h-auto min-h-0 w-full justify-start border border-base-300 bg-base-100 px-3 py-3 normal-case shadow-none ${
                    selected ? 'border-primary bg-primary/5 text-primary hover:bg-primary/10' : 'hover:bg-base-200'
                  }`}
                >
                  <div className="flex w-full items-start gap-3 text-left">
                    <div className="mt-0.5 flex gap-0.5">
                      <div className="h-6 w-1.5 rounded-sm bg-primary" />
                      <div className="h-6 w-1.5 rounded-sm bg-secondary" />
                      <div className="h-6 w-1.5 rounded-sm bg-accent" />
                      <div className="h-6 w-1.5 rounded-sm bg-neutral" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-sm font-semibold capitalize">{theme}</span>
                        {selected ? <Check size={12} className="shrink-0" /> : null}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-base-content/45">DaisyUI preset</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
