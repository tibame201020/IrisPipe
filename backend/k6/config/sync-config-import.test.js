import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import { jsonOrFallback } from '../utils/test-helpers.js';
import { namespacedExecutionName } from '../utils/namespace.js';
import {
    deleteConfig,
    getConfigDetail,
    importConfig,
    listConfigs,
    replaceConfigFromImport,
} from '../services/sync-config-api.js';
import {
    createFolder,
    getPipelineTree,
} from '../services/pipeline-folder-api.js';

export const options = singleRunOptions;

const seed = `${Date.now()}`;
const sourceFolderName = `phase12-import-source-${seed}`;
const targetFolderName = `phase12-import-target-${seed}`;
const importedPipelineName = `phase12-import-pipeline-${seed}`;
const replacedPipelineName = `phase12-import-replaced-${seed}`;
const importedYamlContent = open('../testfiles/test-config.yml');
const importedYamlFileName = 'test-config.yml';
const importedJsonFileName = 'import-payload';
const importedJsonJobName = `phase12_import_json_${seed}`;
const importedJsonExecutionName = `phase12_import_exec_${seed}`;
const importedJsonContent = JSON.stringify({
    stages: ['stage1'],
    jobs: [
        {
            stage: 'stage1',
            jobName: importedJsonJobName,
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
                    name: importedJsonExecutionName,
                    sql: 'SELECT 1',
                    destTable: 'test_table',
                },
            ],
        },
    ],
}, null, 2);

function findFolderNode(folders, folderName) {
    for (const folder of folders || []) {
        if (folder.folderName === folderName) {
            return folder;
        }

        const nested = findFolderNode(folder.folders, folderName);
        if (nested) {
            return nested;
        }
    }

    return null;
}

export default function () {
    let response = createFolder(null, sourceFolderName);
    let payload = jsonOrFallback(response, {});
    const sourceFolderId = payload.id;
    check(response, {
        'create source folder status is 200': (res) => res.status === 200,
    });

    response = createFolder(null, targetFolderName);
    payload = jsonOrFallback(response, {});
    const targetFolderId = payload.id;
    check(response, {
        'create target folder status is 200': (res) => res.status === 200,
    });

    response = importConfig(sourceFolderId, importedPipelineName, null, importedYamlFileName, importedYamlContent);
    payload = jsonOrFallback(response, {});
    const pipelineId = payload.id;
    check(response, {
        'import yaml config status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'yaml import returns folder-aware metadata': (body) =>
            Number.isInteger(body.id)
            && body.pipelineName === importedPipelineName
            && body.folderId === sourceFolderId
            && body.folderPath === `/${sourceFolderName}`,
        'yaml import returns parsed jobs': (body) =>
            Array.isArray(body.jobs)
            && body.jobs.length === 1
            && body.jobs[0].jobName === 'k6_test_config',
    });

    response = listConfigs();
    payload = jsonOrFallback(response, []);
    check(response, {
        'list configs after yaml import status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'list configs contains imported pipeline': (items) =>
            Array.isArray(items)
            && items.some((item) =>
                item.id === pipelineId
                && item.pipelineName === importedPipelineName
                && item.folderId === sourceFolderId
                && item.folderPath === `/${sourceFolderName}`),
    });

    response = replaceConfigFromImport(
        pipelineId,
        targetFolderId,
        replacedPipelineName,
        'json',
        importedJsonFileName,
        importedJsonContent,
    );
    payload = jsonOrFallback(response, {});
    check(response, {
        'replace config from json import status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'json import replace updates folder and name': (body) =>
            body.id === pipelineId
            && body.pipelineName === replacedPipelineName
            && body.folderId === targetFolderId
            && body.folderPath === `/${targetFolderName}`
            && !Object.prototype.hasOwnProperty.call(body, 'path')
            && !Object.prototype.hasOwnProperty.call(body, 'fileName'),
        'json import replace updates jobs': (body) =>
            Array.isArray(body.jobs)
            && body.jobs.length === 1
            && body.jobs[0].jobName === importedJsonJobName
            && body.jobs[0].stage === 'stage1'
            && Array.isArray(body.stages)
            && body.stages.length === 1
            && body.stages[0] === 'stage1'
            && body.jobs[0].executions[0].name === namespacedExecutionName(importedJsonExecutionName),
    });

    response = getConfigDetail(pipelineId);
    payload = jsonOrFallback(response, {});
    check(response, {
        'get config detail after replace status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'config detail reflects replaced import payload': (body) =>
            body.pipelineName === replacedPipelineName
            && body.folderId === targetFolderId
            && body.folderPath === `/${targetFolderName}`
            && !Object.prototype.hasOwnProperty.call(body, 'path')
            && body.jobs[0].jobName === importedJsonJobName
            && body.jobs[0].stage === 'stage1'
            && Array.isArray(body.stages)
            && body.stages[0] === 'stage1',
    });

    response = getPipelineTree();
    payload = jsonOrFallback(response, {});
    const sourceFolder = findFolderNode(payload.folders, sourceFolderName);
    const targetFolder = findFolderNode(payload.folders, targetFolderName);
    check(response, {
        'pipeline tree after replace status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'source folder no longer contains moved pipeline': () =>
            sourceFolder !== null
            && Array.isArray(sourceFolder.pipelines)
            && sourceFolder.pipelines.every((item) => item.id !== pipelineId),
        'target folder contains moved pipeline': () =>
            targetFolder !== null
            && Array.isArray(targetFolder.pipelines)
            && targetFolder.pipelines.some((item) =>
                item.id === pipelineId
                && item.pipelineName === replacedPipelineName
                && item.folderPath === `/${targetFolderName}`),
    });

    response = deleteConfig(pipelineId);
    check(response, {
        'delete imported config status is 200 or 204': (res) => res.status === 200 || res.status === 204,
    });

    response = getConfigDetail(pipelineId);
    check(response, {
        'deleted imported config detail returns 400': (res) => res.status === 400,
    });
}
