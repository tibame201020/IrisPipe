import { check, sleep } from 'k6';

import { deleteConfig, importConfig, listConfigs, replaceConfigFromImport } from '../services/sync-config-api.js';
import {
    deletePipelineRun,
    executePipeline,
    getPipelineRunDetail,
    getPipelineRunsByPipelineId,
    getPipelineRunsByIds,
    getRecentPipelineRuns,
    rerunPipeline,
    resumePipeline,
    stopPipeline,
} from '../services/sync-pipeline-api.js';
import { executeStatement, querySql } from '../services/test-support-api.js';

const pipelineNamePrefix = __ENV.IRISPIPE_PIPELINE_NAME_PREFIX || `${Date.now()}`;

export function pipelineNameFor(fileName) {
    return `k6-${pipelineNamePrefix}-${fileName}`.replace(/[\\/\s]+/g, '-');
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

export function hasNoLegacyPathFields(item) {
    return item
        && !Object.prototype.hasOwnProperty.call(item, 'path')
        && !Object.prototype.hasOwnProperty.call(item, 'fileName')
        && !Object.prototype.hasOwnProperty.call(item, 'configPath');
}

export function ensureConfigUploaded(pipelineName, fileName, fileContent, workspaceKey = null) {
    const existingPipeline = findConfigByPipelineName(pipelineName, '/', workspaceKey);
    if (existingPipeline) {
        ensureConfigDeleted(existingPipeline.id, workspaceKey);
    }

    const response = importConfig(null, pipelineName, null, fileName, fileContent, workspaceKey);
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

export function ensureConfigUpdated(pipelineId, pipelineName, fileName, fileContent, workspaceKey = null) {
    const response = replaceConfigFromImport(pipelineId, null, pipelineName, null, fileName, fileContent, workspaceKey);
    const updated = check(response, {
        [`update ${fileName} succeeded`]: (res) => res.status === 200,
    });
    const payload = jsonOrFallback(response, {});

    if (!updated) {
        throw new Error(`Failed to update config ${fileName}: ${responseSummary(response)}`);
    }

    return payload;
}

export function ensureConfigDeleted(pipelineId, workspaceKey = null) {
    if (!pipelineId) {
        return;
    }

    const response = deleteConfig(pipelineId, workspaceKey);
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

export function runPipelineAndGetSummary(pipelineId, useAsyncLaucher = false, workspaceKey = null) {
    const response = executePipeline(pipelineId, useAsyncLaucher, workspaceKey);
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

export function resumePipelineRunAndGetSummary(pipelineRunId, useAsyncLaucher = false, workspaceKey = null) {
    const response = resumePipeline(pipelineRunId, useAsyncLaucher, workspaceKey);
    const requestAccepted = check(response, {
        'sync-pipeline resume request succeeded': (res) => res.status === 200,
    });

    if (!requestAccepted) {
        throw new Error(`Failed to resume pipeline run ${pipelineRunId}: ${responseSummary(response)}`);
    }

    const summary = jsonOrFallback(response, {});
    const hasPipelineRunId = check(summary, {
        'pipeline resume returned a pipeline run summary': (item) =>
            item && Number.isInteger(item.id) && item.id > 0,
    });

    if (!hasPipelineRunId) {
        throw new Error(`Unexpected pipeline resume payload for run ${pipelineRunId}: ${response.body}`);
    }

    return {
        response,
        summary,
    };
}

export function rerunPipelineRunAndGetSummary(pipelineRunId, useAsyncLaucher = false, workspaceKey = null) {
    const response = rerunPipeline(pipelineRunId, useAsyncLaucher, workspaceKey);
    const requestAccepted = check(response, {
        'sync-pipeline rerun request succeeded': (res) => res.status === 200,
    });

    if (!requestAccepted) {
        throw new Error(`Failed to rerun pipeline run ${pipelineRunId}: ${responseSummary(response)}`);
    }

    const summary = jsonOrFallback(response, {});
    const hasPipelineRunId = check(summary, {
        'pipeline rerun returned a pipeline run summary': (item) =>
            item && Number.isInteger(item.id) && item.id > 0,
    });

    if (!hasPipelineRunId) {
        throw new Error(`Unexpected pipeline rerun payload for run ${pipelineRunId}: ${response.body}`);
    }

    return {
        response,
        summary,
    };
}

export function stopPipelineRunAndGetSummary(pipelineRunId, workspaceKey = null) {
    const response = stopPipeline(pipelineRunId, workspaceKey);
    const requestAccepted = check(response, {
        'sync-pipeline stop request succeeded': (res) => res.status === 200,
    });

    if (!requestAccepted) {
        throw new Error(`Failed to stop pipeline run ${pipelineRunId}: ${responseSummary(response)}`);
    }

    const summary = jsonOrFallback(response, {});
    const hasPipelineRunId = check(summary, {
        'pipeline stop returned a pipeline run summary': (item) =>
            item && Number.isInteger(item.id) && item.id > 0,
    });

    if (!hasPipelineRunId) {
        throw new Error(`Unexpected pipeline stop payload for run ${pipelineRunId}: ${response.body}`);
    }

    return {
        response,
        summary,
    };
}

export function findConfigByPipelineName(pipelineName, folderPath = '/', workspaceKey = null) {
    const response = listConfigs(workspaceKey);
    const listed = check(response, {
        'list configs succeeded during lookup': (res) => res.status === 200,
    });

    if (!listed) {
        throw new Error(`Failed to list configs while looking up ${pipelineName}: ${responseSummary(response)}`);
    }

    const pipelines = jsonOrFallback(response, []);
    return pipelines.find((pipeline) =>
        pipeline.pipelineName === pipelineName && pipeline.folderPath === folderPath) || null;
}

export function getPipelineRunsOrFail(pipelineRunIds, label = 'pipeline summary query', workspaceKey = null) {
    const response = getPipelineRunsByIds(pipelineRunIds, workspaceKey);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch pipeline summaries for ${pipelineRunIds}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, []);
}

export function getPipelineRunHistoryOrFail(
    pipelineId,
    limit = null,
    beforeRunId = null,
    label = 'pipeline history query',
    workspaceKey = null,
) {
    const response = getPipelineRunsByPipelineId(pipelineId, limit, beforeRunId, workspaceKey);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch pipeline history for ${pipelineId}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, []);
}

export function getRecentPipelineRunsOrFail(limit = null, beforeRunId = null, label = 'recent pipeline query', workspaceKey = null) {
    const response = getRecentPipelineRuns(limit, beforeRunId, workspaceKey);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch recent pipeline runs: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, []);
}

export function getPipelineRunDetailOrFail(pipelineRunId, label = 'pipeline detail query', workspaceKey = null) {
    const response = getPipelineRunDetail(pipelineRunId, workspaceKey);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch pipeline detail for ${pipelineRunId}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, {});
}

export function deletePipelineRunOrFail(pipelineRunId, label = 'pipeline run delete', workspaceKey = null) {
    const response = deletePipelineRun(pipelineRunId, workspaceKey);
    const deleted = check(response, {
        [`${label} succeeded`]: (res) => res.status === 204,
    });

    if (!deleted) {
        throw new Error(`Failed to delete pipeline run ${pipelineRunId}: ${responseSummary(response)}`);
    }
}

export function waitForPipelineCompletion(
    pipelineRunId,
    expectedStatus = 'COMPLETED',
    timeoutSeconds = 10,
    intervalSeconds = 0.2,
    workspaceKey = null,
) {
    return waitForPipelineStatus(pipelineRunId, [expectedStatus], timeoutSeconds, intervalSeconds, workspaceKey);
}

export function waitForPipelineStatus(
    pipelineRunId,
    expectedStatuses,
    timeoutSeconds = 10,
    intervalSeconds = 0.2,
    workspaceKey = null,
) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const summaries = getPipelineRunsOrFail([pipelineRunId], `poll pipeline ${pipelineRunId}`, workspaceKey);
        if (summaries.length > 0 && expectedStatuses.includes(summaries[0].status)) {
            return summaries[0];
        }

        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for pipeline ${pipelineRunId} to reach one of ${expectedStatuses.join(', ')}`);
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
