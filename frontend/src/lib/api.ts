import axios from 'axios'
import type {
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

export async function updatePipelineConfig(pipelineId: number, payload: ConfigPipelineUpsertRequest) {
  const response = await http.put<ConfigPipelineInfo>(`/api/v1/sync-config/${pipelineId}`, payload)
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
