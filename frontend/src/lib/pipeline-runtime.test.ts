import { describe, expect, it } from 'vitest'
import {
  getRunActionDescriptors,
  summarizePipelineRunHistory,
  summarizePipelineStage,
} from './pipeline-runtime'
import type {
  PipelineRunAttemptInfo,
  PipelineRunDetailInfo,
  PipelineRunJobInfo,
  PipelineRunStageInfo,
  PipelineRunSummaryInfo,
} from '../types/irispipe'

function createRunSummary(overrides: Partial<PipelineRunSummaryInfo>): PipelineRunSummaryInfo {
  return {
    id: overrides.id ?? 1,
    pipelineId: overrides.pipelineId ?? 10,
    folderId: overrides.folderId ?? null,
    folderPath: overrides.folderPath ?? '',
    pipelineName: overrides.pipelineName ?? 'pipeline-a',
    status: overrides.status ?? 'COMPLETED',
    createdAt: overrides.createdAt ?? '2026-04-09T10:00:00',
    startTime: overrides.startTime ?? '2026-04-09T10:00:00',
    endTime: overrides.endTime ?? '2026-04-09T10:01:00',
  }
}

function createRunJob(overrides: Partial<PipelineRunJobInfo>): PipelineRunJobInfo {
  return {
    id: overrides.id ?? 101,
    stage: overrides.stage ?? 'extract',
    stageSequenceOrder: overrides.stageSequenceOrder ?? 0,
    sequenceOrder: overrides.sequenceOrder ?? 0,
    jobName: overrides.jobName ?? 'extract-users',
    atomicLevel: overrides.atomicLevel ?? 'JOB',
    status: overrides.status ?? 'COMPLETED',
    rootJobInstanceId: overrides.rootJobInstanceId ?? null,
    lastJobExecutionId: overrides.lastJobExecutionId ?? null,
    createdAt: overrides.createdAt ?? '2026-04-09T10:00:00',
    startTime: overrides.startTime ?? '2026-04-09T10:00:00',
    endTime: overrides.endTime ?? '2026-04-09T10:01:00',
    stepExecutionInfos: overrides.stepExecutionInfos ?? [],
  }
}

function createStage(overrides: Partial<PipelineRunStageInfo>): PipelineRunStageInfo {
  return {
    stage: overrides.stage ?? 'extract',
    stageSequenceOrder: overrides.stageSequenceOrder ?? 0,
    status: overrides.status ?? 'COMPLETED',
    startTime: overrides.startTime ?? '2026-04-09T10:00:00',
    endTime: overrides.endTime ?? '2026-04-09T10:01:00',
    jobs: overrides.jobs ?? [createRunJob({ stage: overrides.stage ?? 'extract' })],
  }
}

function createAttempt(overrides: Partial<PipelineRunAttemptInfo>): PipelineRunAttemptInfo {
  return {
    executionId: overrides.executionId ?? 501,
    executionNo: overrides.executionNo ?? 1,
    executionKind: overrides.executionKind ?? 'INITIAL',
    status: overrides.status ?? 'FAILED',
    requestedAsync: overrides.requestedAsync ?? true,
    startTime: overrides.startTime ?? '2026-04-09T10:00:00',
    endTime: overrides.endTime ?? '2026-04-09T10:01:00',
    stages: overrides.stages ?? [],
    jobs: overrides.jobs ?? [],
  }
}

function createDetail(overrides: Partial<PipelineRunDetailInfo>): PipelineRunDetailInfo {
  return {
    id: overrides.id ?? 99,
    pipelineId: overrides.pipelineId ?? 10,
    folderId: overrides.folderId ?? null,
    folderPath: overrides.folderPath ?? '',
    pipelineName: overrides.pipelineName ?? 'pipeline-a',
    requestedAsync: overrides.requestedAsync ?? true,
    status: overrides.status ?? 'FAILED',
    createdAt: overrides.createdAt ?? '2026-04-09T10:00:00',
    startTime: overrides.startTime ?? '2026-04-09T10:00:00',
    endTime: overrides.endTime ?? '2026-04-09T10:01:00',
    stages: overrides.stages ?? [],
    jobs: overrides.jobs ?? [],
    attempts: overrides.attempts ?? [],
  }
}

describe('pipeline-runtime', () => {
  it('summarizes run history with backend-aligned status buckets', () => {
    const stats = summarizePipelineRunHistory([
      createRunSummary({ id: 1, status: 'COMPLETED', startTime: '2026-04-09T10:00:00', endTime: '2026-04-09T10:02:00' }),
      createRunSummary({ id: 2, status: 'STARTED', startTime: '2026-04-09T10:03:00', endTime: null }),
      createRunSummary({ id: 3, status: 'FAILED', startTime: '2026-04-09T10:05:00', endTime: '2026-04-09T10:06:00' }),
      createRunSummary({ id: 4, status: 'STOPPED', startTime: '2026-04-09T10:07:00', endTime: '2026-04-09T10:08:00' }),
    ])

    expect(stats).not.toBeNull()
    expect(stats?.total).toBe(4)
    expect(stats?.completed).toBe(1)
    expect(stats?.active).toBe(1)
    expect(stats?.resumable).toBe(2)
    expect(stats?.successRate).toBe(25)
    expect(stats?.avgDurationMs).toBeGreaterThan(0)
  })

  it('describes not-run stages as barrier-blocked progress', () => {
    const summary = summarizePipelineStage(createStage({
      status: 'NOT_RUN',
      jobs: [
        createRunJob({ id: 1, status: 'COMPLETED' }),
        createRunJob({ id: 2, status: 'NOT_RUN' }),
      ],
    }))

    expect(summary.summary).toContain('not run')
    expect(summary.blockerLabel).toBe('Blocked by an earlier stage barrier')
  })

  it('enables resume and delete actions for failed runs and points resume at the first incomplete stage', () => {
    const failedStage = createStage({
      stage: 'load',
      stageSequenceOrder: 1,
      status: 'FAILED',
      jobs: [createRunJob({ id: 2, stage: 'load', stageSequenceOrder: 1, status: 'FAILED' })],
    })
    const latestAttempt = createAttempt({
      executionNo: 2,
      executionKind: 'RESUME',
      status: 'FAILED',
      stages: [
        createStage({
          stage: 'extract',
          stageSequenceOrder: 0,
          status: 'COMPLETED',
          jobs: [createRunJob({ id: 1, stage: 'extract', stageSequenceOrder: 0, status: 'COMPLETED' })],
        }),
        failedStage,
      ],
      jobs: failedStage.jobs,
    })
    const detail = createDetail({
      status: 'FAILED',
      attempts: [latestAttempt],
    })

    const actions = getRunActionDescriptors(detail, latestAttempt)

    expect(actions.stop.enabled).toBe(false)
    expect(actions.resume.enabled).toBe(true)
    expect(actions.delete.enabled).toBe(true)
    expect(actions.resume.detail).toContain('stage "load"')
    expect(actions.resume.detail).toContain('Skipped')
  })
})
