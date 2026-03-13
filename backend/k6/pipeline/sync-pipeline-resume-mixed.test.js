import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    configPathFor,
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

const yamlContent = open('../testfiles/job-pipeline-resume-mixed.yml');
const fileName = 'job-pipeline-resume-mixed.yml';
const filePath = configPathFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_mixed_source_a (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_mixed_source_b (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_mixed_source_c (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_mixed_dest_a (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_mixed_dest_b (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_mixed_dest_c (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_mixed_source_a',
        'TRUNCATE TABLE test_mixed_source_b',
        'TRUNCATE TABLE test_mixed_source_c',
        'TRUNCATE TABLE test_mixed_dest_a',
        'TRUNCATE TABLE test_mixed_dest_b',
        'TRUNCATE TABLE test_mixed_dest_c',
        "INSERT INTO test_mixed_source_a VALUES (1, 'A1', '2023-01-01 10:00:00'), (2, 'A2', '2023-01-01 11:00:00')",
        [
            "INSERT INTO test_mixed_source_b VALUES",
            "(3, 'B3', '2023-01-01 12:00:00')",
            ", (4, 'B4', '2023-01-01 13:00:00')",
            ", (5, 'B5', '2023-01-01 14:00:00')",
            ", (6, 'B6', '2023-01-01 15:00:00')",
        ].join(' '),
        "INSERT INTO test_mixed_source_c VALUES (7, 'C7', '2023-01-01 16:00:00'), (8, 'C8', '2023-01-01 17:00:00')",
        "INSERT INTO test_mixed_dest_b VALUES (6, 'B6_EXISTING', '2023-01-01 15:00:00')",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: failedSummary } = runPipelineAndGetSummary(data.pipelineId);
    const failedDetail = getPipelineRunDetailOrFail(failedSummary.id, 'mixed failed pipeline detail query');
    const destACountAfterFailure = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_mixed_dest_a',
        'CNT',
        'mixed dest_a count after initial failure',
    );
    const destBCountAfterFailure = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_mixed_dest_b',
        'CNT',
        'mixed dest_b count after initial failure',
    );
    const destCCountAfterFailure = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_mixed_dest_c',
        'CNT',
        'mixed dest_c count after initial failure',
    );

    check(failedSummary, {
        'Mixed pipeline initial run failed': (item) => item.status === 'FAILED',
    });
    check(failedDetail, {
        'Mixed failed detail exposes three job nodes': (item) => Array.isArray(item.jobs) && item.jobs.length === 3,
        'Mixed failed detail keeps completed JOB node': (item) => item.jobs.length === 3 && item.jobs[0].status === 'COMPLETED',
        'Mixed failed detail keeps failed CHUNK node': (item) => item.jobs.length === 3 && item.jobs[1].status === 'FAILED',
        'Mixed failed detail marks downstream JOB node as NOT_RUN': (item) => item.jobs.length === 3 && item.jobs[2].status === 'NOT_RUN',
    });
    check(destACountAfterFailure, {
        'Mixed pipeline kept completed JOB output before resume': (count) => count === 2,
    });
    check(destBCountAfterFailure, {
        'Mixed pipeline kept committed CHUNK progress before resume': (count) => count === 3,
    });
    check(destCCountAfterFailure, {
        'Mixed pipeline did not run downstream JOB before resume': (count) => count === 0,
    });

    executeStatementsOrFail([
        'DELETE FROM test_mixed_dest_b WHERE id = 6',
    ]);

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(failedSummary.id);
    const resumedDetail = getPipelineRunDetailOrFail(resumedSummary.id, 'mixed resumed pipeline detail query');
    const destACountAfterResume = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_mixed_dest_a',
        'CNT',
        'mixed dest_a count after resume',
    );
    const destBCountAfterResume = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_mixed_dest_b',
        'CNT',
        'mixed dest_b count after resume',
    );
    const destCCountAfterResume = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_mixed_dest_c',
        'CNT',
        'mixed dest_c count after resume',
    );

    check(resumedSummary, {
        'Mixed resume keeps the same pipeline run id': (item) => item.id === failedSummary.id,
        'Mixed resume completes the pipeline run': (item) => item.status === 'COMPLETED',
    });
    check(resumedDetail, {
        'Mixed resume skips the completed JOB node': (item) => item.jobs.length === 3 && item.jobs[0].status === 'SKIPPED',
        'Mixed resume restarts the failed CHUNK node': (item) => item.jobs.length === 3 && item.jobs[1].status === 'COMPLETED',
        'Mixed resume runs the downstream JOB node': (item) => item.jobs.length === 3 && item.jobs[2].status === 'COMPLETED',
        'Mixed resume preserves upstream JOB lineage': (item) =>
            item.jobs.length === 3
            && item.jobs[0].rootJobInstanceId === failedDetail.jobs[0].rootJobInstanceId
            && item.jobs[0].lastJobExecutionId === failedDetail.jobs[0].lastJobExecutionId,
        'Mixed resume keeps CHUNK root lineage but updates execution id': (item) =>
            item.jobs.length === 3
            && item.jobs[1].rootJobInstanceId === failedDetail.jobs[1].rootJobInstanceId
            && item.jobs[1].lastJobExecutionId !== failedDetail.jobs[1].lastJobExecutionId,
        'Mixed resume creates downstream JOB execution lineage': (item) =>
            item.jobs.length === 3
            && Number.isInteger(item.jobs[2].rootJobInstanceId)
            && item.jobs[2].rootJobInstanceId > 0
            && Number.isInteger(item.jobs[2].lastJobExecutionId)
            && item.jobs[2].lastJobExecutionId > 0,
    });
    check(destACountAfterResume, {
        'Mixed resume did not rerun the completed JOB node': (count) => count === 2,
    });
    check(destBCountAfterResume, {
        'Mixed resume completed the CHUNK node from checkpoint': (count) => count === 4,
    });
    check(destCCountAfterResume, {
        'Mixed resume executed downstream JOB nodes after recovery': (count) => count === 2,
    });

    deletePipelineRunOrFail(resumedSummary.id, 'mixed resumed pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}
