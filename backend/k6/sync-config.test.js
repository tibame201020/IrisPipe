import { check } from 'k6';
import { singleRunOptions } from './utils/test-options.js';
import { jsonOrFallback } from './utils/test-helpers.js';
import {
    createConfig,
    updateConfig,
    patchConfig,
    getConfigDetail,
    listConfigs,
    deleteConfig,
} from './services/sync-config-api.js';

export const options = singleRunOptions;

const yamlContent = open('./testfiles/test-config.yml');
const fileName = 'test-config.yml';
const filePath = `k6-tests/${fileName}`;
const normalizedListPath = filePath.replace(/\//g, '\\');

export default function () {
    let response = createConfig(filePath, fileName, yamlContent);
    let payload = jsonOrFallback(response, {});
    check(response, {
        'create config status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'create config response returns requested path': (body) => body.path === filePath,
        'create config response returns file name': (body) => body.fileName === fileName,
    });

    response = getConfigDetail(filePath);
    payload = jsonOrFallback(response, {});
    check(response, {
        'get config detail status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'config detail returns uploaded job': (body) =>
            Array.isArray(body.jobs) && body.jobs.length === 1 && body.jobs[0].jobName === 'k6_test_config',
    });

    response = listConfigs();
    payload = jsonOrFallback(response, []);
    check(response, {
        'list configs status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'list configs includes uploaded file': (files) =>
            Array.isArray(files) && (files.includes(filePath) || files.includes(normalizedListPath)),
    });

    response = updateConfig(filePath, fileName, yamlContent);
    check(response, {
        'update config status is 200': (res) => res.status === 200,
    });

    response = patchConfig(filePath, fileName, yamlContent);
    check(response, {
        'patch config status is 200': (res) => res.status === 200,
    });

    response = deleteConfig(filePath);
    check(response, {
        'delete config status is 200 or 204': (res) => res.status === 200 || res.status === 204,
    });

    response = getConfigDetail(filePath);
    check(response, {
        'deleted config detail returns 400': (res) => res.status === 400,
    });
}
