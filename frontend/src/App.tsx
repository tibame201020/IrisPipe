import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './state/theme'
import { LayoutProvider } from './state/layout'
import { ConsoleLayout } from './layout/ConsoleLayout'
import { PipelineWorkspaceLayout } from './layout/PipelineWorkspaceLayout'

const OverviewPage = lazy(() => import('./pages/OverviewPage').then((module) => ({ default: module.OverviewPage })))
const PipelineExplorerPage = lazy(() => import('./pages/PipelineExplorerPage').then((module) => ({ default: module.PipelineExplorerPage })))
const PipelineConfigPage = lazy(() => import('./pages/PipelineConfigPage').then((module) => ({ default: module.PipelineConfigPage })))
const PipelineRunsPage = lazy(() => import('./pages/PipelineRunsPage').then((module) => ({ default: module.PipelineRunsPage })))
const RunDetailPage = lazy(() => import('./pages/RunDetailPage').then((module) => ({ default: module.RunDetailPage })))
const SettingsPage = lazy(() => import('./pages/SettingsPage').then((module) => ({ default: module.SettingsPage })))

function RouteLoadingFallback() {
  return (
    <div className="flex h-screen items-center justify-center bg-base-100">
      <span className="loading loading-spinner loading-lg text-primary" />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route element={<ConsoleLayout />}>
              <Route path="/" element={<Navigate to="/overview" replace />} />
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/pipeline" element={<PipelineExplorerPage />} />
              <Route path="/pipeline/folders/:folderId" element={<PipelineExplorerPage />} />
              <Route path="/pipeline/new/config" element={<PipelineConfigPage />} />
              <Route path="/pipeline/items/:pipelineId" element={<PipelineWorkspaceLayout />}>
                <Route path="config" element={<PipelineConfigPage />} />
                <Route path="runs" element={<PipelineRunsPage />} />
                <Route path="runs/:runId" element={<RunDetailPage />} />
              </Route>
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </LayoutProvider>
    </ThemeProvider>
  )
}
