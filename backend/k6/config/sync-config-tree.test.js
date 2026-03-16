import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    deletePipelineRunOrFail,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    hasNoLegacyPathFields,
    jsonOrFallback,
    runPipelineAndGetSummary,
    waitForPipelineCompletion,
} from '../utils/test-helpers.js';
import { createConfigFromBody, getConfigDetail } from '../services/sync-config-api.js';
import {
    createFolder,
    deleteFolder,
    getFolderDeletePreview,
    getPipelineTree,
    updateFolder,
} from '../services/pipeline-folder-api.js';

export const options = singleRunOptions;

const seed = `${Date.now()}`;
const rootFolderName = `phase12-root-${seed}`;
const childFolderName = `phase12-child-${seed}`;
const renamedChildFolderName = `phase12-child-renamed-${seed}`;
const pipelineName = `phase12-pipeline-${seed}`;

const syncJobs = [
    {
        jobName: `phase12_job_${seed}`,
        executions: [
            {
                type: 'EXECUTE',
                sql: 'TRUNCATE TABLE test_dest',
            },
            {
                type: 'INSERT',
                name: `phase12_insert_${seed}`,
                sql: 'SELECT * FROM test_source WHERE update_time > :_LAST_UPDATE ORDER BY update_time ASC',
                destTable: 'test_dest',
                watermarkColumn: 'UPDATE_TIME',
                parameters: [
                    {
                        param: '_LAST_UPDATE',
                        type: 'timestamp',
                        value: '1970-01-01 00:00:00',
                    },
                ],
            },
        ],
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
    },
];

function findFolderNode(folders, folderName) {
    for (const folder of folders || []) {
        if (folder.folderName === folderName) {
            return folder;
        }

        const childFolder = findFolderNode(folder.folders, folderName);
        if (childFolder) {
            return childFolder;
        }
    }

    return null;
}

export function setup() {
    executeStatementsOrFail([
        'CREATE TABLE IF NOT EXISTS test_source (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'CREATE TABLE IF NOT EXISTS test_dest (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)',
        'TRUNCATE TABLE test_source',
        'TRUNCATE TABLE test_dest',
        "INSERT INTO test_source VALUES (1, 'A', '2023-01-01 10:00:00'), (2, 'B', '2023-01-01 11:00:00')",
        `DELETE FROM iris_watermark_record WHERE execution_name = 'phase12_insert_${seed}'`,
    ]);

    return {};
}

export default function () {
    let response = createFolder(null, rootFolderName);
    let payload = jsonOrFallback(response, {});
    const rootFolderId = payload.id;
    check(response, {
        'create root folder status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'root folder has id': (body) => Number.isInteger(body.id) && body.id > 0,
        'root folder path is rooted': (body) => body.folderPath === `/${rootFolderName}`,
    });

    response = createFolder(rootFolderId, childFolderName);
    payload = jsonOrFallback(response, {});
    const childFolderId = payload.id;
    check(response, {
        'create child folder status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'child folder path nests under root': (body) => body.folderPath === `/${rootFolderName}/${childFolderName}`,
    });

    response = createConfigFromBody(childFolderId, pipelineName, syncJobs);
    payload = jsonOrFallback(response, {});
    const pipelineId = payload.id;
    check(response, {
        'create config from json status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'config json create returns folder metadata': (body) =>
            body.pipelineName === pipelineName
            && body.folderId === childFolderId
            && body.folderPath === `/${rootFolderName}/${childFolderName}`,
        'config json create no longer exposes path/fileName fields': (body) => hasNoLegacyPathFields(body),
    });

    response = getPipelineTree();
    payload = jsonOrFallback(response, {});
    const rootFolder = findFolderNode(payload.folders, rootFolderName);
    const childFolder = findFolderNode(payload.folders, childFolderName);
    check(response, {
        'pipeline tree status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'tree contains created root folder': () => rootFolder !== null,
        'tree contains created child folder': () => childFolder !== null,
        'tree nests pipeline under child folder': () =>
            childFolder !== null
            && Array.isArray(childFolder.pipelines)
            && childFolder.pipelines.some((pipeline) => pipeline.id === pipelineId && pipeline.pipelineName === pipelineName),
    });

    response = updateFolder(childFolderId, rootFolderId, renamedChildFolderName);
    payload = jsonOrFallback(response, {});
    check(response, {
        'rename child folder status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'renamed child folder path updated': (body) =>
            body.folderPath === `/${rootFolderName}/${renamedChildFolderName}`,
    });

    response = getConfigDetail(pipelineId);
    payload = jsonOrFallback(response, {});
    check(response, {
        'config detail status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'config detail reflects renamed folder path': (body) =>
            body.pipelineName === pipelineName
            && body.folderPath === `/${rootFolderName}/${renamedChildFolderName}`,
        'config detail in tree flow no longer exposes path/fileName fields': (body) => hasNoLegacyPathFields(body),
    });

    const { summary } = runPipelineAndGetSummary(pipelineId);
    waitForPipelineCompletion(summary.id, 'COMPLETED', 10, 0.2);
    const runDetail = getPipelineRunDetailOrFail(summary.id, 'phase12 runtime detail');

    check(summary, {
        'runtime summary includes pipeline metadata': (item) =>
            item.pipelineName === pipelineName
            && item.folderPath === `/${rootFolderName}/${renamedChildFolderName}`,
        'runtime summary in tree flow no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });
    check(runDetail, {
        'runtime detail includes pipeline metadata': (item) =>
            item.pipelineName === pipelineName
            && item.folderPath === `/${rootFolderName}/${renamedChildFolderName}`,
        'runtime detail in tree flow no longer exposes path/fileName fields': (item) => hasNoLegacyPathFields(item),
    });

    response = getFolderDeletePreview(rootFolderId, 100);
    payload = jsonOrFallback(response, {});
    check(response, {
        'delete preview status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'delete preview reports blocker after run history exists': (body) =>
            body.folderCount === 2
            && body.pipelineCount === 1
            && body.pipelinesWithRunHistory === 1
            && body.hasBlockers === true,
        'delete preview lists affected folders': (body) =>
            Array.isArray(body.folders)
            && body.folders.length === 2
            && body.folders.some((folder) => folder.id === rootFolderId && folder.folderPath === `/${rootFolderName}`)
            && body.folders.some((folder) => folder.id === childFolderId && folder.folderPath === `/${rootFolderName}/${renamedChildFolderName}`),
        'delete preview lists affected pipelines and blocker details': (body) =>
            Array.isArray(body.pipelines)
            && body.pipelines.length === 1
            && body.pipelines[0].id === pipelineId
            && body.pipelines[0].pipelineName === pipelineName
            && body.pipelines[0].folderId === childFolderId
            && body.pipelines[0].folderPath === `/${rootFolderName}/${renamedChildFolderName}`
            && body.pipelines[0].hasRunHistory === true
            && Array.isArray(body.blockingPipelines)
            && body.blockingPipelines.length === 1
            && body.blockingPipelines[0].id === pipelineId,
        'delete preview detail no longer exposes path/fileName fields': (body) =>
            Array.isArray(body.pipelines)
            && body.pipelines.every((pipeline) => hasNoLegacyPathFields(pipeline))
            && Array.isArray(body.folders),
    });

    response = getFolderDeletePreview(rootFolderId, 1);
    payload = jsonOrFallback(response, {});
    check(payload, {
        'delete preview supports truncation for GUI dialogs': (body) =>
            body.folderCount === 2
            && body.pipelineCount === 1
            && body.truncated === true
            && Array.isArray(body.folders)
            && body.folders.length === 1,
    });

    response = deleteFolder(rootFolderId, true);
    check(response, {
        'recursive delete is blocked while run history exists': (res) => res.status === 409,
    });

    deletePipelineRunOrFail(summary.id, 'phase12 pipeline run delete');

    response = getFolderDeletePreview(rootFolderId, 100);
    payload = jsonOrFallback(response, {});
    check(payload, {
        'delete preview clears blockers after run delete': (body) =>
            body.pipelinesWithRunHistory === 0
            && body.hasBlockers === false
            && Array.isArray(body.blockingPipelines)
            && body.blockingPipelines.length === 0,
    });

    response = deleteFolder(rootFolderId, true);
    check(response, {
        'recursive delete succeeds after run delete': (res) => res.status === 204,
    });

    response = getPipelineTree();
    payload = jsonOrFallback(response, {});
    check(payload, {
        'tree no longer contains deleted root folder': (body) => findFolderNode(body.folders, rootFolderName) === null,
    });
}
