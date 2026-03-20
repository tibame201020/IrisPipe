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

const yamlContent = open('../testfiles/job-pipeline-stage-fail-resume.yml');
const fileName = 'job-pipeline-stage-fail-resume.yml';
const filePath = pipelineNameFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stage_fail_resume_source_a (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_fail_resume_source_b (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_fail_resume_source_c (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_fail_resume_dest_a (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_fail_resume_dest_b (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_fail_resume_dest_c (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stage_fail_resume_source_a',
        'TRUNCATE TABLE test_stage_fail_resume_source_b',
        'TRUNCATE TABLE test_stage_fail_resume_source_c',
        'TRUNCATE TABLE test_stage_fail_resume_dest_a',
        'TRUNCATE TABLE test_stage_fail_resume_dest_b',
        'TRUNCATE TABLE test_stage_fail_resume_dest_c',
        "INSERT INTO test_stage_fail_resume_source_a VALUES (1, 'A1', '2023-01-01 10:00:00'), (2, 'A2', '2023-01-01 11:00:00')",
        [
            "INSERT INTO test_stage_fail_resume_source_b VALUES",
            "(3, 'B3', '2023-01-01 12:00:00')",
            ", (4, 'B4', '2023-01-01 13:00:00')",
            ", (5, 'B5', '2023-01-01 14:00:00')",
            ", (6, 'B6', '2023-01-01 15:00:00')",
        ].join(' '),
        "INSERT INTO test_stage_fail_resume_source_c VALUES (7, 'C7', '2023-01-01 16:00:00'), (8, 'C8', '2023-01-01 17:00:00')",
        "INSERT INTO test_stage_fail_resume_dest_b VALUES (6, 'B6_EXISTING', '2023-01-01 15:00:00')",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: failedSummary } = runPipelineAndGetSummary(data.pipelineId);
    const failedDetail = getPipelineRunDetailOrFail(failedSummary.id, 'stage fail/resume failed detail query');
    const failedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_fail_resume_dest_a',
        'CNT',
        'stage fail/resume dest_a count after failure',
    );
    const failedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_fail_resume_dest_b',
        'CNT',
        'stage fail/resume dest_b count after failure',
    );
    const failedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_fail_resume_dest_c',
        'CNT',
        'stage fail/resume dest_c count after failure',
    );

    check(failedSummary, {
        'stage fail/resume initial run fails': (item) => item.status === 'FAILED',
    });
    check(failedDetail, {
        'stage fail/resume stage projection shows same-stage fail barrier': (item) =>
            Array.isArray(item.stages)
            && item.stages.length === 2
            && item.stages[0].status === 'FAILED'
            && item.stages[0].jobs.length === 2
            && item.stages[0].jobs[0].status === 'COMPLETED'
            && item.stages[0].jobs[1].status === 'FAILED'
            && item.stages[1].status === 'NOT_RUN',
    });
    check(failedDestACount, {
        'stage fail/resume keeps completed same-stage JOB output before resume': (count) => count === 2,
    });
    check(failedDestBCount, {
        'stage fail/resume keeps only the pre-seeded conflict row before resume': (count) => count === 1,
    });
    check(failedDestCCount, {
        'stage fail/resume blocks downstream stage before resume': (count) => count === 0,
    });

    executeStatementsOrFail([
        'DELETE FROM test_stage_fail_resume_dest_b WHERE id = 6',
    ]);

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(failedSummary.id);
    const resumedDetail = getPipelineRunDetailOrFail(failedSummary.id, 'stage fail/resume resumed detail query');
    const resumedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_fail_resume_dest_a',
        'CNT',
        'stage fail/resume dest_a count after resume',
    );
    const resumedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_fail_resume_dest_b',
        'CNT',
        'stage fail/resume dest_b count after resume',
    );
    const resumedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_fail_resume_dest_c',
        'CNT',
        'stage fail/resume dest_c count after resume',
    );

    check(resumedSummary, {
        'stage fail/resume completes on resume': (item) => item.id === failedSummary.id && item.status === 'COMPLETED',
    });
    check(resumedDetail, {
        'stage fail/resume latest attempt skips completed same-stage branch and continues downstream stage': (item) =>
            item.status === 'COMPLETED'
            && item.attempts.length >= 2
            && item.attempts[item.attempts.length - 1].stages[0].status === 'COMPLETED'
            && item.attempts[item.attempts.length - 1].stages[0].jobs[0].status === 'SKIPPED'
            && item.attempts[item.attempts.length - 1].stages[0].jobs[1].status === 'COMPLETED'
            && item.attempts[item.attempts.length - 1].stages[1].status === 'COMPLETED'
            && item.attempts[item.attempts.length - 1].stages[1].jobs[0].status === 'COMPLETED',
    });
    check(resumedDestACount, {
        'stage fail/resume does not rerun completed same-stage branch': (count) => count === 2,
    });
    check(resumedDestBCount, {
        'stage fail/resume completes failed same-stage branch after recovery': (count) => count === 4,
    });
    check(resumedDestCCount, {
        'stage fail/resume advances to downstream stage after recovery': (count) => count === 2,
    });

    deletePipelineRunOrFail(resumedSummary.id, 'stage fail/resume pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}
