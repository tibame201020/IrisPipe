import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    queryScalarOrFail,
    resumePipelineRunAndGetSummary,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-resume.yml');
const fileName = 'job-pipeline-resume.yml';
const filePath = pipelineNameFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_resume_source_a (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_resume_source_b (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_resume_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_resume_source_a',
        'TRUNCATE TABLE test_resume_source_b',
        'TRUNCATE TABLE test_resume_dest',
        "INSERT INTO test_resume_source_a VALUES (1, 'A1', '2023-01-01 10:00:00'), (2, 'A2', '2023-01-01 11:00:00')",
        "INSERT INTO test_resume_source_b VALUES (3, 'B3', '2023-01-01 12:00:00'), (4, 'B4', '2023-01-01 13:00:00')",
        "INSERT INTO test_resume_dest VALUES (4, 'B4_BAD', '2023-01-01 13:00:00')",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: failedSummary } = runPipelineAndGetSummary(data.pipelineId);
    const failedDetail = getPipelineRunDetailOrFail(failedSummary.id, 'failed pipeline detail query');
    const destCountAfterFailure = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_resume_dest',
        'CNT',
        'dest count after initial failure',
    );

    check(failedSummary, {
        'Initial pipeline run failed': (item) => item.status === 'FAILED',
    });
    check(failedDetail, {
        'Failed detail exposes two job nodes': (item) => Array.isArray(item.jobs) && item.jobs.length === 2,
        'First job completed before resume': (item) => item.jobs.length === 2 && item.jobs[0].status === 'COMPLETED',
        'Second job failed before resume': (item) => item.jobs.length === 2 && item.jobs[1].status === 'FAILED',
    });
    check(destCountAfterFailure, {
        'Initial failure preserved only completed job output plus conflicting row': (count) => count === 3,
    });

    executeStatementsOrFail([
        'DELETE FROM test_resume_dest WHERE id = 4',
    ]);

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(failedSummary.id);
    const resumedDetail = getPipelineRunDetailOrFail(resumedSummary.id, 'resumed pipeline detail query');
    const destCountAfterResume = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_resume_dest',
        'CNT',
        'dest count after resume',
    );
    const executionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${failedSummary.id}`,
        'CNT',
        'pipeline run execution count',
    );

    check(resumedSummary, {
        'Resume keeps the same pipeline run id': (item) => item.id === failedSummary.id,
        'Resume completes the pipeline run': (item) => item.status === 'COMPLETED',
    });
    check(resumedDetail, {
        'Resumed detail exposes skipped completed job': (item) => item.jobs.length === 2 && item.jobs[0].status === 'SKIPPED',
        'Resumed detail replays the failed job to completion': (item) =>
            item.jobs.length === 2 && item.jobs[1].status === 'COMPLETED',
        'Resumed detail keeps the completed job lineage': (item) =>
            item.jobs.length === 2
            && item.jobs[0].rootJobInstanceId === failedDetail.jobs[0].rootJobInstanceId
            && item.jobs[0].lastJobExecutionId === failedDetail.jobs[0].lastJobExecutionId,
        'Resumed detail creates a new job lineage for the replayed job': (item) =>
            item.jobs.length === 2
            && item.jobs[1].rootJobInstanceId !== failedDetail.jobs[1].rootJobInstanceId
            && item.jobs[1].lastJobExecutionId !== failedDetail.jobs[1].lastJobExecutionId,
    });
    check(destCountAfterResume, {
        'Resume completes all destination rows without rerunning prior job': (count) => count === 4,
    });
    check(executionCount, {
        'Pipeline run keeps two execution attempts after resume': (count) => count === 2,
    });

    deletePipelineRunOrFail(resumedSummary.id, 'resumed pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}
