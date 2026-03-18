import { ConfigPipelineUpsertRequest } from '../models/sync-config.model';

function toToken(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  return normalized || 'pipeline';
}

export function buildStarterPipelineRequest(
  folderId: number | null,
  pipelineName: string
): ConfigPipelineUpsertRequest {
  const token = toToken(pipelineName);

  return {
    folderId,
    pipelineName: pipelineName.trim(),
    jobs: [
      {
        jobName: `${token}_job`,
        executions: [
          {
            type: 'EXECUTE',
            name: `${token}_step`,
            sql: 'select 1',
            destTable: null,
            parameters: [],
            watermarkColumn: null,
            summaryInfo: null,
            executionContext: null,
          },
        ],
        setting: {
          fetchSize: 100,
          batchSize: 100,
          deleteThreshold: null,
          atomicLevel: 'JOB',
        },
        database: {
          source: {
            driver: 'org.example.Driver',
            url: 'jdbc:placeholder://source',
            username: 'username',
            password: 'password',
          },
          dest: {
            driver: 'org.example.Driver',
            url: 'jdbc:placeholder://dest',
            username: 'username',
            password: 'password',
          },
        },
      },
    ],
  };
}
