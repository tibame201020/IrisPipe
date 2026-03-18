import { mapPipelineRunDetailInfo, mapPipelineRunSummaryInfo } from './sync-pipeline.mapper';

describe('sync-pipeline mapper', () => {
  it('maps summary payloads with LocalDateTime arrays and root folder fallback', () => {
    const summary = mapPipelineRunSummaryInfo({
      id: 42,
      pipelineId: 9,
      folderId: null,
      pipelineName: 'orders-sync',
      status: 'COMPLETED',
      createdAt: [2026, 3, 18, 10, 30, 0],
      startTime: [2026, 3, 18, 10, 31, 0],
      endTime: [2026, 3, 18, 10, 32, 0],
    });

    expect(summary.folderPath).toBe('/');
    expect(summary.createdAt).toEqual([2026, 3, 18, 10, 30, 0]);
    expect(summary.status).toBe('COMPLETED');
  });

  it('maps attempts, jobs, and step summaries from detail payloads', () => {
    const detail = mapPipelineRunDetailInfo({
      id: 100,
      pipelineId: 12,
      folderId: 3,
      folderPath: '/orders',
      pipelineName: 'orders-sync',
      requestedAsync: true,
      status: 'STARTED',
      createdAt: [2026, 3, 18, 11, 0, 0],
      startTime: [2026, 3, 18, 11, 0, 10],
      endTime: null,
      jobs: [
        {
          id: 200,
          sequenceOrder: 1,
          jobName: 'extract-order',
          atomicLevel: 'CHUNK',
          status: 'STARTED',
          rootJobInstanceId: 501,
          lastJobExecutionId: 601,
          createdAt: [2026, 3, 18, 11, 0, 0],
          startTime: [2026, 3, 18, 11, 0, 10],
          endTime: null,
          stepExecutionInfos: [
            {
              id: 300,
              stepName: 'step_extract',
              status: 'STARTED',
              exitCode: 'EXECUTING',
              startTime: [2026, 3, 18, 11, 0, 15],
              endTime: null,
              readCount: 10,
              writeCount: 0,
              commitCount: 0,
              rollbackCount: 0,
              filterCount: 0,
              readSkipCount: 0,
              writeSkipCount: 0,
              processSkipCount: 0,
              exitDescription: '',
            },
          ],
        },
      ],
      attempts: [
        {
          executionId: 401,
          executionNo: 1,
          executionKind: 'INITIAL',
          status: 'STARTED',
          requestedAsync: true,
          startTime: [2026, 3, 18, 11, 0, 10],
          endTime: null,
          jobs: [],
        },
      ],
    });

    expect(detail.attempts.length).toBe(1);
    expect(detail.jobs.length).toBe(1);
    expect(detail.jobs[0].stepExecutionInfos[0].stepName).toBe('step_extract');
    expect(detail.attempts[0].executionKind).toBe('INITIAL');
    expect(detail.jobs[0].atomicLevel).toBe('CHUNK');
  });
});
