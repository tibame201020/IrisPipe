import { Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './state/theme'
import { LayoutProvider } from './state/layout'
import { ConsoleLayout } from './layout/ConsoleLayout'
import { OverviewPage } from './pages/OverviewPage'
import { PipelineExplorerPage } from './pages/PipelineExplorerPage'
import { PipelineConfigPage } from './pages/PipelineConfigPage'
import { PipelineRunsPage } from './pages/PipelineRunsPage'
import { RunDetailPage } from './pages/RunDetailPage'
import { SettingsPage } from './pages/SettingsPage'

export default function App() {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <Routes>
          <Route element={<ConsoleLayout />}>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/pipeline" element={<PipelineExplorerPage />} />
            <Route path="/pipeline/folders/:folderId" element={<PipelineExplorerPage />} />
            <Route path="/pipeline/items/:pipelineId/config" element={<PipelineConfigPage />} />
            <Route path="/pipeline/items/:pipelineId/runs" element={<PipelineRunsPage />} />
            <Route path="/pipeline/items/:pipelineId/runs/:runId" element={<RunDetailPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </LayoutProvider>
    </ThemeProvider>
  )
}
