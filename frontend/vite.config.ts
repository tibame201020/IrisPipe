import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const backendTarget = process.env.IRISPIPE_BACKEND_URL ?? 'http://127.0.0.1:8080'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4206,
    strictPort: true,
    proxy: {
      '/api': backendTarget,
      '/actuator': backendTarget,
    },
  },
})
