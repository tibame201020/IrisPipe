/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--theme-font)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--theme-mono-font)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        status: {
          pending: 'hsl(var(--status-pending) / <alpha-value>)',
          running: 'hsl(var(--status-running) / <alpha-value>)',
          success: 'hsl(var(--status-success) / <alpha-value>)',
          failed: 'hsl(var(--status-failed) / <alpha-value>)',
          stopped: 'hsl(var(--status-stopped) / <alpha-value>)',
          abandoned: 'hsl(var(--status-abandoned) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'dracula',
      'autumn',
    ],
    darkTheme: 'dark',
  },
}
