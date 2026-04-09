export const availableThemes = [
  'light',
  'dark',
  'dracula',
  'autumn',
] as const

export type ThemeName = (typeof availableThemes)[number]
