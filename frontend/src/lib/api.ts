import axios from 'axios'
import type {
  ActuatorMetricResponse,
  ActuatorMetricsListResponse,
  ConfigPipelineInfo,
  ConfigPipelineUpsertRequest,
  FolderDeletePreviewInfo,
  FolderInfo,
  FolderUpsertRequest,
  HealthResponse,
  PipelineExecuteRequest,
  PipelineResumeRequest,
  PipelineRerunRequest,
  PipelineRunDetailInfo,
  PipelineRunSummaryInfo,
  PipelineTreeInfo,
} from '../types/irispipe'

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function getHealth() {
  const response = await http.get<HealthResponse>('/actuator/health')
  return response.data
}

export async function getActuatorMetricsList() {
  const response = await http.get<ActuatorMetricsListResponse>('/actuator/metrics')
  return response.data
}

export async function getActuatorMetric(name: string) {
  const response = await http.get<ActuatorMetricResponse>(`/actuator/metrics/${name}`)
  return response.data
}

export async function getPipelineTree() {
  const response = await http.get<PipelineTreeInfo>('/api/v1/pipeline-tree')
  return response.data
}

export async function getPipelineConfig(pipelineId: number) {
  const response = await http.get<ConfigPipelineInfo>(`/api/v1/sync-config/${pipelineId}`)
  return response.data
}

export async function createPipelineConfig(payload: ConfigPipelineUpsertRequest) {
  const response = await http.post<ConfigPipelineInfo>('/api/v1/sync-config', payload)
  return response.data
}

export async function importPipelineConfig(payload: {
  folderId?: number | null
  pipelineName: string
  file: File
  format?: string
}) {
  const formData = new FormData()
  formData.append('pipelineName', payload.pipelineName)
  formData.append('file', payload.file)
  if (payload.folderId != null) formData.append('folderId', String(payload.folderId))
  if (payload.format) formData.append('format', payload.format)

  const response = await http.post<ConfigPipelineInfo>('/api/v1/sync-config/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export async function updatePipelineConfig(pipelineId: number, payload: ConfigPipelineUpsertRequest) {
  const response = await http.put<ConfigPipelineInfo>(`/api/v1/sync-config/${pipelineId}`, payload)
  return response.data
}

export async function importIntoPipelineConfig(
  pipelineId: number,
  payload: {
    folderId?: number | null
    pipelineName: string
    file: File
    format?: string
  },
) {
  const formData = new FormData()
  formData.append('pipelineName', payload.pipelineName)
  formData.append('file', payload.file)
  if (payload.folderId != null) formData.append('folderId', String(payload.folderId))
  if (payload.format) formData.append('format', payload.format)

  const response = await http.put<ConfigPipelineInfo>(`/api/v1/sync-config/${pipelineId}/import`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export async function deletePipelineConfig(pipelineId: number) {
  await http.delete(`/api/v1/sync-config/${pipelineId}`)
}

export async function createFolder(payload: FolderUpsertRequest) {
  const response = await http.post<FolderInfo>('/api/v1/pipeline-folders', payload)
  return response.data
}

export async function updateFolder(folderId: number, payload: FolderUpsertRequest) {
  const response = await http.put<FolderInfo>(`/api/v1/pipeline-folders/${folderId}`, payload)
  return response.data
}

export async function getFolderDeletePreview(folderId: number, limit = 10) {
  const response = await http.get<FolderDeletePreviewInfo>(`/api/v1/pipeline-folders/${folderId}/delete-preview`, {
    params: {
      limit,
    },
  })
  return response.data
}

export async function deleteFolder(folderId: number, recursive = false) {
  await http.delete(`/api/v1/pipeline-folders/${folderId}`, {
    params: {
      recursive,
    },
  })
}

export async function getOverviewSummary() {
  const response = await http.get<{
    engine: { status: string; uptimeSeconds: number; jvmMemoryMb: number; jvmMemoryTotalMb: number; jvmMemoryPercent: number; activeBatchJobs: number }
    catalog: { totalFolders: number; totalPipelines: number }
    runs: { activeCount: number; last10Total: number; last10Completed: number; last10Failed: number; last10Stopped: number; last10InFlight: number; successRate: number; avgDurationSeconds: number | null }
    recentRuns: PipelineRunSummaryInfo[]
  }>('/api/v1/overview/summary')
  return response.data
}

export async function getRecentRuns(limit = 6, beforeRunId?: number) {
  const response = await http.get<PipelineRunSummaryInfo[]>('/api/v1/sync-pipeline/recent', {
    params: {
      limit,
      beforeRunId,
    },
  })
  return response.data
}

export async function getPipelineRuns(pipelineId: number, limit = 20, beforeRunId?: number) {
  const response = await http.get<PipelineRunSummaryInfo[]>('/api/v1/sync-pipeline', {
    params: {
      pipelineId,
      limit,
      beforeRunId,
    },
  })
  return response.data
}

export async function getRunDetail(runId: number) {
  const response = await http.get<PipelineRunDetailInfo>(`/api/v1/sync-pipeline/${runId}`)
  return response.data
}

export async function executePipeline(payload: PipelineExecuteRequest) {
  const response = await http.post<PipelineRunSummaryInfo>('/api/v1/sync-pipeline', payload)
  return response.data
}

export async function stopRun(runId: number) {
  const response = await http.post<PipelineRunSummaryInfo>(`/api/v1/sync-pipeline/${runId}/stop`)
  return response.data
}

export async function resumeRun(runId: number, payload: PipelineResumeRequest = { useAsyncLaucher: true }) {
  const response = await http.post<PipelineRunSummaryInfo>(`/api/v1/sync-pipeline/${runId}/resume`, payload)
  return response.data
}

export async function rerunRun(runId: number, payload: PipelineRerunRequest = { useAsyncLaucher: true }) {
  const response = await http.post<PipelineRunSummaryInfo>(`/api/v1/sync-pipeline/${runId}/rerun`, payload)
  return response.data
}

export async function deleteRun(runId: number) {
  await http.delete(`/api/v1/sync-pipeline/${runId}`)
}

export type RunLogEntry = {
  level: 'INFO' | 'ERROR'
  timestamp: string | null
  message: string
}

export async function getRunLogs(runId: number) {
  const response = await http.get<RunLogEntry[]>(`/api/v1/sync-pipeline/${runId}/logs`)
  return response.data
}

// ─── Connection Library ──────────────────────────────────────────────────────

export type ConnectionDTO = {
  id: number
  name: string
  driver: string
  url: string
  username: string
  createdAt: string
  updatedAt: string
}

export type ConnectionUpsertRequest = {
  name: string
  driver: string
  url: string
  username: string
  password: string
}

export type ConnectionTestRequest = {
  driver: string
  url: string
  username: string
  password: string
}

export type ConnectionTestResult = {
  success: boolean
  message: string
  serverInfo: string | null
  latencyMs: number | null
}

export type DriverPreset = {
  name: string
  driverClass: string
  urlTemplate: string
  urlPlaceholders: { key: string; label: string; example: string }[]
  defaultPort: number | null
  testable: boolean
}

export async function listConnections() {
  const response = await http.get<ConnectionDTO[]>('/api/v1/connections')
  return response.data
}

export async function createConnection(payload: ConnectionUpsertRequest) {
  const response = await http.post<ConnectionDTO>('/api/v1/connections', payload)
  return response.data
}

export async function updateConnection(id: number, payload: ConnectionUpsertRequest) {
  const response = await http.put<ConnectionDTO>(`/api/v1/connections/${id}`, payload)
  return response.data
}

export async function deleteConnection(id: number) {
  await http.delete(`/api/v1/connections/${id}`)
}

export async function testConnection(payload: ConnectionTestRequest) {
  const response = await http.post<ConnectionTestResult>('/api/v1/connections/test', payload)
  return response.data
}

export async function getDriverPresets() {
  const response = await http.get<DriverPreset[]>('/api/v1/connections/drivers')
  return response.data
}

export function getApiErrorMessage(error: unknown, fallback = 'Request failed') {
  if (axios.isAxiosError(error)) {
    const responseMessage =
      (error.response?.data as { message?: string; detail?: string } | undefined)?.message ??
      (error.response?.data as { message?: string; detail?: string } | undefined)?.detail
    return responseMessage ?? error.message ?? fallback
  }

  if (error instanceof Error) {
    return error.message
  }

  return fallback
}
