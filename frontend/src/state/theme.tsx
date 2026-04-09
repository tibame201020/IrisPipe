import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { availableThemes, type ThemeName } from './theme.constants'

interface ThemeContextValue {
  themeName: ThemeName
  setThemeName: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const STORAGE_KEY = 'irispipe-console-theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeNameState] = useState<ThemeName>(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return availableThemes.includes(stored as ThemeName) ? (stored as ThemeName) : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeName)
    window.localStorage.setItem(STORAGE_KEY, themeName)
  }, [themeName])

  const value = useMemo(
    () => ({
      themeName,
      setThemeName: (theme: ThemeName) => setThemeNameState(theme),
    }),
    [themeName],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
