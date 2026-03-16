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

const yamlContent = open('../testfiles/job-pipeline-resume-chunk.yml');
const fileName = 'job-pipeline-resume-chunk.yml';
const filePath = pipelineNameFor(fileName);

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_resume_chunk_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_resume_chunk_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_resume_chunk_source',
        'TRUNCATE TABLE test_resume_chunk_dest',
        [
            "INSERT INTO test_resume_chunk_source VALUES",
            "(1, 'A', '2023-01-01 10:00:00')",
            ", (2, 'B', '2023-01-01 11:00:00')",
            ", (3, 'C', '2023-01-01 12:00:00')",
            ", (4, 'D', '2023-01-01 13:00:00')",
        ].join(' '),
        "INSERT INTO test_resume_chunk_dest VALUES (4, 'D_EXISTING', '2023-01-01 13:00:00')",
        "DELETE FROM iris_watermark_record WHERE execution_name = 'k6_pipeline_resume_chunk_insert'",
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    const { summary: failedSummary } = runPipelineAndGetSummary(data.pipelineId);
    const failedDetail = getPipelineRunDetailOrFail(failedSummary.id, 'chunk failed pipeline detail query');
    const failedDestCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_resume_chunk_dest',
        'CNT',
        'chunk dest count after initial failure',
    );
    const failedWatermarkCount = queryScalarOrFail(
        "SELECT COUNT(*) AS CNT FROM iris_watermark_record WHERE execution_name = 'k6_pipeline_resume_chunk_insert'",
        'CNT',
        'chunk watermark count after initial failure',
    );

    check(failedSummary, {
        'Chunk resume initial pipeline run failed': (item) => item.status === 'FAILED',
    });
    check(failedDetail, {
        'Chunk failed detail exposes one job node': (item) => Array.isArray(item.jobs) && item.jobs.length === 1,
        'Chunk failed detail keeps failed status': (item) => item.jobs.length === 1 && item.jobs[0].status === 'FAILED',
    });
    check(failedDestCount, {
        'Chunk failed run kept only committed first chunk rows plus existing row': (count) => count === 3,
    });
    check(failedWatermarkCount, {
        'Chunk failed run did not persist watermark': (count) => count === 0,
    });

    executeStatementsOrFail([
        'DELETE FROM test_resume_chunk_dest WHERE id = 4',
    ]);

    const { summary: resumedSummary } = resumePipelineRunAndGetSummary(failedSummary.id);
    const resumedDetail = getPipelineRunDetailOrFail(resumedSummary.id, 'chunk resumed pipeline detail query');
    const resumedDestCount = queryScalarOrFail(
        'SELECT COUNT(*) AS CNT FROM test_resume_chunk_dest',
        'CNT',
        'chunk dest count after resume',
    );
    const resumedWatermarkCount = queryScalarOrFail(
        "SELECT COUNT(*) AS CNT FROM iris_watermark_record WHERE execution_name = 'k6_pipeline_resume_chunk_insert'",
        'CNT',
        'chunk watermark count after resume',
    );
    const executionCount = queryScalarOrFail(
        `SELECT COUNT(*) AS CNT FROM iris_pipeline_run_execution WHERE pipeline_run_id = ${failedSummary.id}`,
        'CNT',
        'chunk pipeline run execution count',
    );

    check(resumedSummary, {
        'Chunk resume keeps the same pipeline run id': (item) => item.id === failedSummary.id,
        'Chunk resume completes the pipeline run': (item) => item.status === 'COMPLETED',
    });
    check(resumedDetail, {
        'Chunk resumed detail completed the failed node': (item) => item.jobs.length === 1 && item.jobs[0].status === 'COMPLETED',
        'Chunk resumed detail keeps the same root job instance id': (item) =>
            item.jobs.length === 1 && item.jobs[0].rootJobInstanceId === failedDetail.jobs[0].rootJobInstanceId,
        'Chunk resumed detail creates a new job execution id': (item) =>
            item.jobs.length === 1 && item.jobs[0].lastJobExecutionId !== failedDetail.jobs[0].lastJobExecutionId,
    });
    check(resumedDestCount, {
        'Chunk restart completed remaining rows without replaying committed chunk': (count) => count === 4,
    });
    check(resumedWatermarkCount, {
        'Chunk restart persisted watermark after successful completion': (count) => count === 1,
    });
    check(executionCount, {
        'Chunk restart stored two execution attempts': (count) => count === 2,
    });

    deletePipelineRunOrFail(resumedSummary.id, 'chunk resumed pipeline run delete');
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}
