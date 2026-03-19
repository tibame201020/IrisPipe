import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const backendTarget = process.env.IRISPIPE_BACKEND_URL ?? 'http://127.0.0.1:8080'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@xyflow/react')) {
            return 'graph'
          }
          if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('/react/')) {
            return 'react'
          }
          if (id.includes('axios') || id.includes('lucide-react')) {
            return 'vendor'
          }
          return undefined
        },
      },
    },
  },
  server: {
    port: 4206,
    strictPort: true,
    proxy: {
      '/api': backendTarget,
      '/actuator': backendTarget,
    },
  },
})
