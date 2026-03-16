import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import { hasNoLegacyPathFields, jsonOrFallback, pipelineNameFor } from '../utils/test-helpers.js';
import {
    createConfigFromBody,
    updateConfigFromBody,
    patchConfigFromBody,
    getConfigDetail,
    listConfigs,
    deleteConfig,
} from '../services/sync-config-api.js';

export const options = singleRunOptions;

const initialPipelineName = pipelineNameFor('test-config-v1');
const updatedPipelineName = pipelineNameFor('test-config-v2');
const patchedPipelineName = pipelineNameFor('test-config-v3');
const initialJobs = [
    {
        jobName: 'k6_test_config_v1',
        setting: {
            fetchSize: 100,
            batchSize: 100,
            atomicLevel: 'JOB',
        },
        database: {
            source: {
                driver: 'org.h2.Driver',
                url: 'jdbc:h2:./h2data/data',
                username: 'sa',
                password: 'sa',
            },
            dest: {
                driver: 'org.h2.Driver',
                url: 'jdbc:h2:./h2data/data',
                username: 'sa',
                password: 'sa',
            },
        },
        executions: [
            {
                type: 'INSERT',
                name: 'test_exec_v1',
                sql: 'SELECT 1',
                destTable: 'test_table',
            },
        ],
    },
];
const updatedJobs = [
    {
        jobName: 'k6_test_config_v2',
        setting: {
            fetchSize: 200,
            batchSize: 200,
            atomicLevel: 'JOB',
        },
        database: {
            source: {
                driver: 'org.h2.Driver',
                url: 'jdbc:h2:./h2data/data',
                username: 'sa',
                password: 'sa',
            },
            dest: {
                driver: 'org.h2.Driver',
                url: 'jdbc:h2:./h2data/data',
                username: 'sa',
                password: 'sa',
            },
        },
        executions: [
            {
                type: 'INSERT',
                name: 'test_exec_v2',
                sql: 'SELECT 2',
                destTable: 'test_table_v2',
            },
        ],
    },
];
const patchedJobs = [
    {
        jobName: 'k6_test_config_v3',
        setting: {
            fetchSize: 300,
            batchSize: 300,
            atomicLevel: 'JOB',
        },
        database: {
            source: {
                driver: 'org.h2.Driver',
                url: 'jdbc:h2:./h2data/data',
                username: 'sa',
                password: 'sa',
            },
            dest: {
                driver: 'org.h2.Driver',
                url: 'jdbc:h2:./h2data/data',
                username: 'sa',
                password: 'sa',
            },
        },
        executions: [
            {
                type: 'INSERT',
                name: 'test_exec_v3',
                sql: 'SELECT 3',
                destTable: 'test_table_v3',
            },
        ],
    },
];

export default function () {
    let response = createConfigFromBody(null, initialPipelineName, initialJobs);
    let payload = jsonOrFallback(response, {});
    const pipelineId = payload.id;
    check(response, {
        'create config status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'create config response returns pipeline id': (body) => Number.isInteger(body.id) && body.id > 0,
        'create config response returns root pipeline metadata': (body) =>
            body.pipelineName === initialPipelineName
            && body.folderId === null
            && body.folderPath === '/',
        'create config response no longer exposes path/fileName fields': (body) => hasNoLegacyPathFields(body),
    });

    response = getConfigDetail(pipelineId);
    payload = jsonOrFallback(response, {});
    check(response, {
        'get config detail status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'config detail returns requested pipeline id': (body) => body.id === pipelineId,
        'config detail returns uploaded job': (body) =>
            Array.isArray(body.jobs) && body.jobs.length === 1 && body.jobs[0].jobName === 'k6_test_config_v1',
        'config detail keeps root metadata without hidden root id': (body) =>
            body.pipelineName === initialPipelineName
            && body.folderId === null
            && body.folderPath === '/',
        'config detail no longer exposes path/fileName fields': (body) => hasNoLegacyPathFields(body),
    });

    response = listConfigs();
    payload = jsonOrFallback(response, []);
    check(response, {
        'list configs status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'list configs includes uploaded pipeline': (pipelines) =>
            Array.isArray(pipelines)
            && pipelines.some((pipeline) =>
                pipeline.id === pipelineId
                && pipeline.pipelineName === initialPipelineName
                && pipeline.folderId === null
                && pipeline.folderPath === '/'),
        'list configs no longer exposes path/fileName fields': (pipelines) =>
            Array.isArray(pipelines) && pipelines.every((pipeline) => hasNoLegacyPathFields(pipeline)),
    });

    response = updateConfigFromBody(pipelineId, null, updatedPipelineName, updatedJobs);
    payload = jsonOrFallback(response, {});
    check(response, {
        'update config status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'update config renames pipeline and replaces jobs': (body) =>
            body.pipelineName === updatedPipelineName
            && body.folderId === null
            && body.folderPath === '/'
            && body.jobs[0].jobName === 'k6_test_config_v2',
        'update config response no longer exposes path/fileName fields': (body) => hasNoLegacyPathFields(body),
    });

    response = patchConfigFromBody(pipelineId, null, patchedPipelineName, patchedJobs);
    payload = jsonOrFallback(response, {});
    check(response, {
        'patch config status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'patch config keeps root contract and latest payload': (body) =>
            body.pipelineName === patchedPipelineName
            && body.folderId === null
            && body.folderPath === '/'
            && body.jobs[0].jobName === 'k6_test_config_v3',
        'patch config response no longer exposes path/fileName fields': (body) => hasNoLegacyPathFields(body),
    });

    response = deleteConfig(pipelineId);
    check(response, {
        'delete config status is 200 or 204': (res) => res.status === 200 || res.status === 204,
    });

    response = getConfigDetail(pipelineId);
    check(response, {
        'deleted config detail returns 400': (res) => res.status === 400,
    });
}
