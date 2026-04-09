import { describe, expect, it } from 'vitest'
import {
  buildDraftReadinessSummary,
  getJobSemanticSummary,
  summarizeDraftValidation,
} from './pipeline-config-semantics'
import {
  collectPipelineDraftIssues,
  createBlankConnection,
  type EditableJob,
  type PipelineDraft,
} from './pipeline-draft'

function createCompleteDraft(): PipelineDraft {
  return {
    folderId: null,
    pipelineName: 'orders-sync',
    stages: [
      {
        editorId: 'stage-1',
        stageName: 'extract',
        jobs: [
          {
            editorId: 'job-1',
            jobName: 'sync-orders',
            setting: {
              fetchSize: 500,
              batchSize: 200,
              deleteThreshold: null,
              atomicLevel: 'JOB',
            },
            database: {
              source: {
                driver: 'org.postgresql.Driver',
                url: 'jdbc:postgresql://localhost:5432/source',
                username: 'reader',
                password: 'secret',
              },
              dest: {
                driver: 'org.postgresql.Driver',
                url: 'jdbc:postgresql://localhost:5432/dest',
                username: 'writer',
                password: 'secret',
              },
            },
            executions: [
              {
                editorId: 'step-1',
                type: 'INSERT',
                name: 'load-orders',
                sql: 'select * from orders',
                destTable: 'orders_copy',
                parameters: [],
                watermarkColumn: null,
                summaryInfo: null,
                executionContext: null,
              },
            ],
          },
        ],
      },
    ],
  }
}

function createIncompleteJob(): EditableJob {
  return {
    editorId: 'job-2',
    jobName: 'sync-customers',
    setting: {
      fetchSize: null,
      batchSize: null,
      deleteThreshold: null,
      atomicLevel: 'JOB',
    },
    database: {
      source: createBlankConnection(),
      dest: createBlankConnection(),
    },
    executions: [],
  }
}

describe('pipeline-config-semantics', () => {
  it('marks a fully configured draft as runnable', () => {
    const draft = createCompleteDraft()
    const validation = summarizeDraftValidation(collectPipelineDraftIssues(draft))
    const readiness = buildDraftReadinessSummary(draft, validation)

    expect(readiness.headline).toBe('Config is runnable')
    expect(readiness.issueCount).toBe(0)
    expect(readiness.readyJobs).toBe(1)
    expect(readiness.warningJobs).toBe(0)
  })

  it('surfaces blocking validation work for incomplete drafts', () => {
    const draft: PipelineDraft = {
      folderId: null,
      pipelineName: 'broken-sync',
      stages: [
        {
          editorId: 'stage-2',
          stageName: 'load',
          jobs: [createIncompleteJob()],
        },
      ],
    }
    const issues = collectPipelineDraftIssues(draft)
    const readiness = buildDraftReadinessSummary(draft, summarizeDraftValidation(issues))

    expect(readiness.issueCount).toBeGreaterThan(0)
    expect(readiness.headline).toBe('Config is close')
    expect(readiness.warningJobs).toBe(1)
  })

  it('classifies job cards with validation issues as error state', () => {
    const draft: PipelineDraft = {
      folderId: null,
      pipelineName: 'error-sync',
      stages: [
        {
          editorId: 'stage-3',
          stageName: 'stage-a',
          jobs: [createIncompleteJob()],
        },
      ],
    }
    const validationSummary = summarizeDraftValidation(collectPipelineDraftIssues(draft))
    const summary = getJobSemanticSummary(draft.stages[0].jobs[0], validationSummary)

    expect(summary.state).toBe('error')
    expect(summary.issueCount).toBeGreaterThan(0)
    expect(summary.guidance).toContain('validation issue')
  })
})
