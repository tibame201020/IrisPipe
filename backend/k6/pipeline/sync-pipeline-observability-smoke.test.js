import { check, sleep } from 'k6';
import {
    getActuatorHealth,
    getActuatorMetric,
    getActuatorMetrics,
    getActuatorPrometheus,
} from '../services/management-api.js';
import { singleRunOptions } from '../utils/test-options.js';
import {
    pipelineNameFor,
    deletePipelineRunOrFail,
    ensureConfigDeleted,
    ensureConfigUploaded,
    executeStatementsOrFail,
    jsonOrFallback,
    responseSummary,
    runPipelineAndGetSummary,
    waitForPipelineCompletion,
} from '../utils/test-helpers.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/job-pipeline-rerun-v1.yml');
const fileName = 'job-pipeline-observability-smoke.yml';
const filePath = pipelineNameFor(fileName);
const expectedMetricNames = [
    'irispipe.pipeline.run.triggered',
    'irispipe.pipeline.execution.completed',
    'irispipe.pipeline.job.completed',
    'irispipe.pipeline.runs.active',
    'irispipe.pipeline.executions.active',
    'irispipe.pipeline.execution.duration',
    'irispipe.pipeline.job.duration',
];

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_rerun_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_rerun_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_rerun_source',
        'TRUNCATE TABLE test_rerun_dest',
        [
            "INSERT INTO test_rerun_source VALUES",
            "(1, 'A', TIMESTAMP '2023-01-01 10:00:00')",
            ", (2, 'B', TIMESTAMP '2023-01-01 11:00:00')",
            ", (3, 'C', TIMESTAMP '2023-01-01 12:00:00')",
        ].join(' '),
    ]);

    const pipeline = ensureConfigUploaded(filePath, fileName, yamlContent);
    return { pipelineId: pipeline.id };
}

export default function (data) {
    let pipelineRunId = null;
    const baselineRunTriggeredCount = readMetricValue('irispipe.pipeline.run.triggered', 'COUNT');
    const baselineExecutionCompletedCount = readMetricValue('irispipe.pipeline.execution.completed', 'COUNT');
    const baselineJobCompletedCount = readMetricValue('irispipe.pipeline.job.completed', 'COUNT');
    const baselineRunsActive = readMetricValue('irispipe.pipeline.runs.active', 'VALUE');
    const baselineExecutionsActive = readMetricValue('irispipe.pipeline.executions.active', 'VALUE');

    try {
        const { summary } = runPipelineAndGetSummary(data.pipelineId);
        pipelineRunId = summary.id;
        const completedSummary = waitForPipelineCompletion(pipelineRunId, 'COMPLETED', 15, 0.2);

        const healthResponse = getActuatorHealth();
        const metricsResponse = getActuatorMetrics();
        const runTriggeredMetricResponse = getActuatorMetric('irispipe.pipeline.run.triggered');
        const executionCompletedMetricResponse = getActuatorMetric('irispipe.pipeline.execution.completed');
        const jobCompletedMetricResponse = getActuatorMetric('irispipe.pipeline.job.completed');
        const runsActiveMetricResponse = getActuatorMetric('irispipe.pipeline.runs.active');
        const executionsActiveMetricResponse = getActuatorMetric('irispipe.pipeline.executions.active');
        const executionDurationMetricResponse = getActuatorMetric('irispipe.pipeline.execution.duration');
        const jobDurationMetricResponse = getActuatorMetric('irispipe.pipeline.job.duration');
        const prometheusResponse = getActuatorPrometheus();

        const health = jsonOrFallback(healthResponse, {});
        const metrics = jsonOrFallback(metricsResponse, {});
        const runTriggeredMetric = jsonOrFallback(runTriggeredMetricResponse, {});
        const executionCompletedMetric = jsonOrFallback(executionCompletedMetricResponse, {});
        const jobCompletedMetric = jsonOrFallback(jobCompletedMetricResponse, {});
        const runsActiveMetric = jsonOrFallback(runsActiveMetricResponse, {});
        const executionsActiveMetric = jsonOrFallback(executionsActiveMetricResponse, {});
        const executionDurationMetric = jsonOrFallback(executionDurationMetricResponse, {});
        const jobDurationMetric = jsonOrFallback(jobDurationMetricResponse, {});
        const runsActiveRecovered = waitForMetricValue(
            'irispipe.pipeline.runs.active',
            'VALUE',
            baselineRunsActive,
            10,
            0.2,
        );
        const executionsActiveRecovered = waitForMetricValue(
            'irispipe.pipeline.executions.active',
            'VALUE',
            baselineExecutionsActive,
            10,
            0.2,
        );

        const smokeChecksPassed = check(completedSummary, {
            'Observability smoke pipeline completes before probing actuator': (item) => item.status === 'COMPLETED',
        }) && check(healthResponse, {
            'Actuator health endpoint is reachable': (res) => res.status === 200,
        }) && check(health, {
            'Actuator health reports UP': (body) => body && body.status === 'UP',
        }) && check(metricsResponse, {
            'Actuator metrics endpoint is reachable': (res) => res.status === 200,
        }) && check(metrics, {
            'Actuator metrics lists expected IrisPipe runtime meters': (body) =>
                Array.isArray(body.names) && expectedMetricNames.every((metricName) => body.names.includes(metricName)),
        }) && check(runTriggeredMetricResponse, {
            'Run-triggered metric endpoint is reachable': (res) => res.status === 200,
        }) && check(runTriggeredMetric, {
            'Run-triggered metric reports one additional logical run': (body) =>
                getMeasurementValue(body, 'COUNT') >= baselineRunTriggeredCount + 1,
        }) && check(executionCompletedMetric, {
            'Execution-completed metric reports one additional completed attempt': (body) =>
                getMeasurementValue(body, 'COUNT') >= baselineExecutionCompletedCount + 1,
        }) && check(jobCompletedMetric, {
            'Job-completed metric reports additional completed jobs': (body) =>
                getMeasurementValue(body, 'COUNT') >= baselineJobCompletedCount + 1,
        }) && check(runsActiveRecovered, {
            'Runs-active gauge returns to its baseline after completion': (value) =>
                value === baselineRunsActive,
        }) && check(executionsActiveRecovered, {
            'Executions-active gauge returns to its baseline after completion': (value) =>
                value === baselineExecutionsActive,
        }) && check(executionDurationMetric, {
            'Execution-duration timer reports at least one observation': (body) =>
                getMeasurementValue(body, 'COUNT') >= 1,
        }) && check(jobDurationMetric, {
            'Job-duration timer reports at least one observation': (body) =>
                getMeasurementValue(body, 'COUNT') >= 1,
        }) && check(prometheusResponse, {
            'Actuator prometheus endpoint is reachable': (res) => res.status === 200,
        }) && check(prometheusResponse.body, {
            'Prometheus scrape contains IrisPipe counters, gauges, and timers': (body) =>
                typeof body === 'string'
                && body.includes('irispipe_pipeline_run_triggered_total')
                && body.includes('irispipe_pipeline_execution_completed_total')
                && body.includes('irispipe_pipeline_job_completed_total')
                && body.includes('irispipe_pipeline_runs_active')
                && body.includes('irispipe_pipeline_execution_duration_seconds_count')
                && body.includes('irispipe_pipeline_job_duration_seconds_count'),
        });

        if (!smokeChecksPassed) {
            throw new Error([
                `health=${responseSummary(healthResponse)}`,
                `metrics=${responseSummary(metricsResponse)}`,
                `prometheus=${responseSummary(prometheusResponse)}`,
            ].join(' | '));
        }
    } finally {
        safeDeletePipelineRun(pipelineRunId, 'observability smoke pipeline run delete');
    }
}

export function teardown(data) {
    ensureConfigDeleted(data && data.pipelineId);
}

function getMeasurementValue(metric, statistic) {
    if (!metric || !Array.isArray(metric.measurements)) {
        return -1;
    }

    const measurement = metric.measurements.find((item) => item.statistic === statistic);
    return measurement ? measurement.value : -1;
}

function safeDeletePipelineRun(pipelineRunId, label) {
    if (!pipelineRunId) {
        return;
    }

    try {
        deletePipelineRunOrFail(pipelineRunId, label);
    } catch (error) {
        console.error(`Failed to delete pipeline run ${pipelineRunId}: ${error.message}`);
    }
}

function readMetricValue(metricName, statistic) {
    const response = getActuatorMetric(metricName);
    const metric = jsonOrFallback(response, {});
    return getMeasurementValue(metric, statistic);
}

function waitForMetricValue(metricName, statistic, expectedValue, timeoutSeconds = 10, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const currentValue = readMetricValue(metricName, statistic);
        if (currentValue === expectedValue) {
            return currentValue;
        }
        sleep(intervalSeconds);
    }

    return Number.NaN;
}
