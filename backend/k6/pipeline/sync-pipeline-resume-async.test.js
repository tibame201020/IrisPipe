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
    waitForPipelineCompletion,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-resume.yml');
const fileName = 'job-pipeline-resume.yml';
const filePath = pipelineNameFor(`async-${fileName}`);

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
    executeStatementsOrFail([
        'DELETE FROM test_resume_dest WHERE id = 4',
    ]);

    const { summary: resumeSummary } = resumePipelineRunAndGetSummary(failedSummary.id, true);
    const completedSummary = waitForPipelineCompletion(resumeSummary.id, 'COMPLETED', 10, 0.2);
    const resumedDetail = getPipelineRunDetailOrFail(resumeSummary.id, 'async resumed pipeline detail query');
    const executionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${failedSummary.id}`,
        'CNT',
        'async pipeline run execution count',
    );

    check(resumeSummary, {
        'Async resume keeps the same pipeline run id': (item) => item.id === failedSummary.id,
        'Async resume returns a valid in-flight status': (item) =>
            ['STARTING', 'STARTED', 'COMPLETED'].includes(item.status),
    });
    check(completedSummary, {
        'Async resume eventually completes the pipeline run': (item) => item.status === 'COMPLETED',
    });
    check(resumedDetail, {
        'Async resume detail marks requestedAsync as true': (item) => item.requestedAsync === true,
        'Async resume detail shows skipped completed job': (item) => item.jobs.length === 2 && item.jobs[0].status === 'SKIPPED',
        'Async resume detail shows replayed failed job completed': (item) =>
            item.jobs.length === 2 && item.jobs[1].status === 'COMPLETED',
    });
    check(executionCount, {
        'Async resume still creates a second execution attempt': (count) => count === 2,
    });

    deletePipelineRunOrFail(resumeSummary.id, 'async resumed pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}
