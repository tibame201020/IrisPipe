import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import { configPathFor, jsonOrFallback } from '../utils/test-helpers.js';
import {
    createConfig,
    updateConfig,
    patchConfig,
    getConfigDetail,
    listConfigs,
    deleteConfig,
} from '../services/sync-config-api.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/test-config.yml');
const fileName = 'test-config.yml';
const filePath = configPathFor(fileName);
const normalizedListPath = filePath.replace(/\//g, '\\');

export default function () {
    let response = createConfig(filePath, fileName, yamlContent);
    let payload = jsonOrFallback(response, {});
    const pipelineId = payload.id;
    check(response, {
        'create config status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'create config response returns pipeline id': (body) => Number.isInteger(body.id) && body.id > 0,
        'create config response returns requested path': (body) => body.path === filePath,
        'create config response returns file name': (body) => body.fileName === fileName,
    });

    response = getConfigDetail(pipelineId);
    payload = jsonOrFallback(response, {});
    check(response, {
        'get config detail status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'config detail returns requested pipeline id': (body) => body.id === pipelineId,
        'config detail returns uploaded job': (body) =>
            Array.isArray(body.jobs) && body.jobs.length === 1 && body.jobs[0].jobName === 'k6_test_config',
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
                && (pipeline.path === filePath || pipeline.path === normalizedListPath)
                && pipeline.fileName === fileName),
    });

    response = updateConfig(pipelineId, filePath, fileName, yamlContent);
    check(response, {
        'update config status is 200': (res) => res.status === 200,
    });

    response = patchConfig(pipelineId, filePath, fileName, yamlContent);
    check(response, {
        'patch config status is 200': (res) => res.status === 200,
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
