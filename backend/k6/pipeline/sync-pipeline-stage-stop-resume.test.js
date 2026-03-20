import { check, sleep } from 'k6';
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
    stopPipelineRunAndGetSummary,
    waitForPipelineStatus,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-stage-stop-resume.yml');
const fileName = 'job-pipeline-stage-stop-resume.yml';
const filePath = pipelineNameFor(fileName);
const firstRows = 200;
const middleRows = Number.parseInt(__ENV.IRISPIPE_STAGE_STOP_RESUME_ROWS || '4000', 10);
const finalRows = 3;

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_stage_stop_resume_source_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_stop_resume_source_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_stop_resume_source_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_stop_resume_dest_a (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_stop_resume_dest_b (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_stage_stop_resume_dest_c (id BIGINT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_stage_stop_resume_source_a',
        'TRUNCATE TABLE test_stage_stop_resume_source_b',
        'TRUNCATE TABLE test_stage_stop_resume_source_c',
        'TRUNCATE TABLE test_stage_stop_resume_dest_a',
        'TRUNCATE TABLE test_stage_stop_resume_dest_b',
        'TRUNCATE TABLE test_stage_stop_resume_dest_c',
        [
            'INSERT INTO test_stage_stop_resume_source_a (id, name, update_time)',
            `SELECT X, 'A-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-01-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${firstRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stage_stop_resume_source_b (id, name, update_time)',
            `SELECT X, 'B-' || X, DATEADD('SECOND', X, TIMESTAMP '2023-02-01 00:00:00')`,
            `FROM SYSTEM_RANGE(1, ${middleRows})`,
        ].join(' '),
        [
            'INSERT INTO test_stage_stop_resume_source_c VALUES',
            "(1, 'C-1', TIMESTAMP '2023-03-01 00:00:01')",
            ", (2, 'C-2', TIMESTAMP '2023-03-01 00:00:02')",
            ", (3, 'C-3', TIMESTAMP '2023-03-01 00:00:03')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary } = runPipelineAndGetSummary(data.pipelineId, true);
    waitForPipelineStatus(summary.id, ['STARTED'], 30, 0.2);

    const stopWindow = waitForStopWindow(firstRows, middleRows, 30, 0.1);

    const { summary: stopRequestedSummary } = stopPipelineRunAndGetSummary(summary.id);
    const stoppedSummary = waitForPipelineStatus(summary.id, ['STOPPED'], 60, 0.5);
    const stoppedDetail = getPipelineRunDetailOrFail(summary.id, 'stage stop/resume stopped detail query');
    const stoppedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_a',
        'CNT',
        'stage stop/resume dest_a count after stop',
    );
    const stoppedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_b',
        'CNT',
        'stage stop/resume dest_b count after stop',
    );
    const stoppedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_c',
        'CNT',
        'stage stop/resume dest_c count after stop',
    );

    check(stopWindow, {
        'stage stop/resume reaches a stable same-stage stop window': (item) =>
            item.destACount === firstRows
            && item.destBCount > 0
            && item.destBCount < middleRows
            && item.destCCount === 0,
    });
    check(stopWindow.destBCount, {
        'stage stop/resume keeps partial same-stage CHUNK progress before stop': (count) => count > 0 && count < middleRows,
    });
    check(stopRequestedSummary, {
        'stage stop/resume stop request keeps the same run id': (item) => item.id === summary.id,
    });
    check(stoppedSummary, {
        'stage stop/resume pipeline reaches STOPPED': (item) => item.status === 'STOPPED',
    });
    check(stoppedDetail, {
        'stage stop/resume stage projection keeps stage1 STOPPED and stage2 NOT_RUN': (item) =>
            item.stages[0].status === 'STOPPED'
            && item.stages[1].status === 'NOT_RUN',
        'stage stop/resume job projection keeps completed same-stage branch and stopped branch': (item) =>
            item.stages[0].jobs[0].status === 'COMPLETED'
            && item.stages[0].jobs[1].status === 'STOPPED',
    });
    check(stoppedDestACount, {
        'stage stop/resume keeps completed same-stage JOB output': (count) => count === firstRows,
    });
    check(stoppedDestBCount, {
        'stage stop/resume keeps partial CHUNK output before resume': (count) => count > 0 && count < middleRows,
    });
    check(stoppedDestCCount, {
        'stage stop/resume keeps downstream stage untouched before resume': (count) => count === 0,
    });

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(summary.id, false);
    const resumedDetail = getPipelineRunDetailOrFail(summary.id, 'stage stop/resume resumed detail query');
    const resumedDestACount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_a',
        'CNT',
        'stage stop/resume dest_a count after resume',
    );
    const resumedDestBCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_b',
        'CNT',
        'stage stop/resume dest_b count after resume',
    );
    const resumedDestCCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_c',
        'CNT',
        'stage stop/resume dest_c count after resume',
    );

    check(resumedSummary, {
        'stage stop/resume completes on resume': (item) => item.id === summary.id && item.status === 'COMPLETED',
    });
    check(resumedDetail, {
        'stage stop/resume latest attempt keeps same-stage completed branch skipped': (item) =>
            item.status === 'COMPLETED'
            && item.attempts.length >= 2
            && item.attempts[item.attempts.length - 1].stages[0].jobs[0].status === 'SKIPPED'
            && item.attempts[item.attempts.length - 1].stages[0].jobs[1].status === 'COMPLETED'
            && item.attempts[item.attempts.length - 1].stages[1].jobs[0].status === 'COMPLETED',
    });
    check(resumedDestACount, {
        'stage stop/resume does not rerun completed same-stage branch': (count) => count === firstRows,
    });
    check(resumedDestBCount, {
        'stage stop/resume completes the interrupted same-stage branch': (count) => count === middleRows,
    });
    check(resumedDestCCount, {
        'stage stop/resume executes downstream stage after recovery': (count) => count === finalRows,
    });

    deletePipelineRunOrFail(summary.id, 'stage stop/resume pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function waitForStopWindow(firstStageCompletedRows, slowStageTotalRows, timeoutSeconds = 30, intervalSeconds = 0.1) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const destACount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_a',
            'CNT',
            'stage stop/resume stage1 branch A count while polling stop window',
        );
        const destBCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_b',
            'CNT',
            'stage stop/resume stage1 branch B count while polling stop window',
        );
        const destCCount = queryScalarOrFail(
            'SELECT COUNT(*) AS CNT FROM test_stage_stop_resume_dest_c',
            'CNT',
            'stage stop/resume stage2 count while polling stop window',
        );

        if (destACount === firstStageCompletedRows && destBCount > 0 && destBCount < slowStageTotalRows && destCCount === 0) {
            return { destACount, destBCount, destCCount };
        }
        sleep(intervalSeconds);
    }

    throw new Error('Timed out waiting for stage stop/resume to reach a stable stop window');
}
