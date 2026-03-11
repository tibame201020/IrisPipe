import { check, sleep } from 'k6';

import { deleteConfig, updateConfig } from '../services/sync-config-api.js';
import {
    deleteJobMetadata,
    executeJob,
    getJobDetail,
    getJobSummariesByIds,
} from '../services/sync-job-api.js';
import { executeStatement, querySql } from '../services/test-support-api.js';

export function configPathFor(fileName) {
    return `k6-tests/${fileName}`;
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
    const response = updateConfig(filePath, fileName, fileContent);
    const uploaded = check(response, {
        [`upload ${fileName} succeeded`]: (res) => res.status === 200,
    });

    if (!uploaded) {
        throw new Error(`Failed to upload config ${fileName}: ${responseSummary(response)}`);
    }

    return response;
}

export function ensureConfigDeleted(filePath) {
    const response = deleteConfig(filePath);
    check(response, {
        [`delete ${filePath} succeeded`]: (res) => res.status === 200 || res.status === 204,
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

export function runJobAndGetSummary(configPath, useAsyncLaucher = false) {
    const response = executeJob(configPath, useAsyncLaucher);
    const requestAccepted = check(response, {
        'sync-job request succeeded': (res) => res.status === 200,
    });

    if (!requestAccepted) {
        throw new Error(`Failed to execute job with config ${configPath}: ${responseSummary(response)}`);
    }

    const summaries = jsonOrFallback(response, []);
    const hasSingleSummary = check(summaries, {
        'job execution returned one summary': (items) => Array.isArray(items) && items.length === 1,
    });

    if (!hasSingleSummary) {
        throw new Error(`Unexpected job execution payload for ${configPath}: ${response.body}`);
    }

    return {
        response,
        summary: summaries[0],
        summaries,
    };
}

export function getJobSummariesOrFail(jobIds, label = 'job summary query') {
    const response = getJobSummariesByIds(jobIds);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch job summaries for ${jobIds}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, []);
}

export function getJobDetailOrFail(jobId, label = 'job detail query') {
    const response = getJobDetail(jobId);
    const queried = check(response, {
        [`${label} succeeded`]: (res) => res.status === 200,
    });

    if (!queried) {
        throw new Error(`Failed to fetch job detail for ${jobId}: ${responseSummary(response)}`);
    }

    return jsonOrFallback(response, {});
}

export function deleteJobMetadataOrFail(jobId, label = 'job metadata delete') {
    const response = deleteJobMetadata(jobId);
    const deleted = check(response, {
        [`${label} succeeded`]: (res) => res.status === 204,
    });

    if (!deleted) {
        throw new Error(`Failed to delete job metadata for ${jobId}: ${responseSummary(response)}`);
    }
}

export function waitForJobCompletion(jobId, expectedStatus = 'COMPLETED', timeoutSeconds = 10, intervalSeconds = 0.2) {
    const maxAttempts = Math.ceil(timeoutSeconds / intervalSeconds);

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const summaries = getJobSummariesOrFail([jobId], `poll job ${jobId}`);
        if (summaries.length > 0 && summaries[0].status === expectedStatus) {
            return summaries[0];
        }

        sleep(intervalSeconds);
    }

    throw new Error(`Timed out waiting for job ${jobId} to reach status ${expectedStatus}`);
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
