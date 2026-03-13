import { check, sleep } from 'k6';

import { createConfig, deleteConfig, listConfigs } from '../services/sync-config-api.js';
import {
    deletePipelineRun,
    executePipeline,
    getPipelineRunDetail,
    getPipelineRunsByIds,
} from '../services/sync-pipeline-api.js';
import { executeStatement, querySql } from '../services/test-support-api.js';

const configPathPrefix = __ENV.IRISPIPE_CONFIG_PREFIX || `${Date.now()}`;

export function configPathFor(fileName) {
    return `k6-tests/${configPathPrefix}-${fileName}`;
}

export function responseSummary(response) {
    return `status=${response.status}, body=${response.body}`;
}

export function jsonOrFallback(response, fallback = null) {
    try {
        return response.json();
    } catch (error) {
        return fallback;
    }
}

export function ensureConfigUploaded(filePath, fileName, fileContent) {
    const existingPipeline = findConfigByPath(filePath);
    if (existingPipeline) {
        ensureConfigDeleted(existingPipeline.id);
    }

    const response = createConfig(filePath, fileName, fileContent);
    const payload = jsonOrFallback(response, {});
    const uploaded = check(response, {
        [`upload ${fileName} succeeded`]: (res) => res.status === 200,
    });
    const hasPipelineId = check(payload, {
        [`upload ${fileName} returns pipeline id`]: (body) =>
            body && Number.isInteger(body.id) && body.id > 0,
    });

    if (!uploaded || !hasPipelineId) {
        throw new Error(`Failed to upload config ${fileName}: ${responseSummary(response)}`);
    }

    return payload;
}

export function ensureConfigDeleted(pipelineId) {
    if (!pipelineId) {
        return;
    }

    const response = deleteConfig(pipelineId);
    check(response, {
        [`delete pipeline ${pipelineId} succeeded`]: (res) => res.status === 200 || res.status === 204,
    });
}

export function executeStatementsOrFail(statements) {
    statements
        .map((statement) => statement.trim())
        .filter((statement) => statement.length > 0)
        .forEach((statement, index) => {
            const response = executeStatement(statement);
            const executed = check(response, {
                [`statement ${index + 1} executed`]: (res) => res.status === 200,
            });

            if (!executed) {
                throw new Error(`Failed to execute SQL statement ${index + 1}: ${responseSummary(response)}`);
            }
        });
}

export function runPipelineAndGetSummary(pipelineId, useAsyncLaucher = false) {
    const response = executePipeline(pipelineId, useAsyncLaucher);
    const requestAccepted = check(response, {
        'sync-pipeline request succeeded': (res) => res.status === 200,
    });

    if (!requestAccepted) {
        throw new Error(`Failed to execute pipeline ${pipelineId}: ${responseSummary(response)}`);
    }

    const summary = jsonOrFallback(response, {});
    const hasPipelineRunId = check(summary, {
        'pipeline execution returned a pipeline run summary': (item) =>
            item && Number.isInteger(item.id) && item.id > 0,
    });

    if (!hasPipelineRunId) {
        throw new Error(`Unexpected pipeline execution payload for pipeline ${pipelineId}: ${response.body}`);
    }

    return {
        response,
        summary,
    };
}

export function findConfigByPath(filePath) {
    const response = listConfigs();
    const listed = check(response, {
        'list configs succeeded during lookup': (res) => res.status === 200,
    });

    if (!listed) {
        throw new Error(`Failed to list configs while looking up ${filePath}: ${responseSummary(response)}`);
    }

    const pipelines = jsonOrFallback(response, []);
    return pipelines.find((pipeline) => pipeline.path === filePath) || null;
}

export function getPipelineRunsOrFail(pipelineRunIds, label = 'pipeline summary query') {
    const response = getPipelineRunsByIds(pipelineRunIds);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch pipeline summaries for ${pipelineRunIds}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, []);
}

export function getPipelineRunDetailOrFail(pipelineRunId, label = 'pipeline detail query') {
    const response = getPipelineRunDetail(pipelineRunId);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch pipeline detail for ${pipelineRunId}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, {});
}

export function deletePipelineRunOrFail(pipelineRunId, label = 'pipeline run delete') {
    const response = deletePipelineRun(pipelineRunId);
    const deleted = check(response, {
        [`${label} succeeded`]: (res) => res.status === 204,
    });

    if (!deleted) {
        throw new Error(`Failed to delete pipeline run ${pipelineRunId}: ${responseSummary(response)}`);
    }
}

export function waitForPipelineCompletion(pipelineRunId, expectedStatus = 'COMPLETED', timeoutSeconds = 10, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const summaries = getPipelineRunsOrFail([pipelineRunId], `poll pipeline ${pipelineRunId}`);
        if (summaries.length > 0 && summaries[0].status === expectedStatus) {
            return summaries[0];
        }

        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for pipeline ${pipelineRunId} to reach status ${expectedStatus}`);
}

export function queryRowsOrFail(sql, label = 'query') {
    const response = querySql(sql);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to query SQL for ${label}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, []);
}

export function queryScalarOrFail(sql, columnName, label = 'scalar query') {
    const rows = queryRowsOrFail(sql, label);
    const hasValue = check(rows, {
        [`${label} returned a row`]: (items) => Array.isArray(items) && items.length > 0,
    });

    if (!hasValue) {
        throw new Error(`Query for ${label} returned no rows: ${sql}`);
    }

    return rows[0][columnName];
}
