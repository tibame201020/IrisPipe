import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import {
    deletePipelineRunOrFail,
    executeStatementsOrFail,
    getPipelineRunDetailOrFail,
    getPipelineRunHistoryOrFail,
    getPipelineRunsOrFail,
    getRecentPipelineRunsOrFail,
    hasNoLegacyPathFields,
    jsonOrFallback,
    responseSummary,
    runPipelineAndGetSummary,
} from '../utils/test-helpers.js';
import { createConfigFromBody, getConfigDetail, listConfigs } from '../services/sync-config-api.js';
import { createFolder, deleteFolder, getPipelineTree } from '../services/pipeline-folder-api.js';
import {
    getPipelineRunDetail,
    getPipelineRunsByIds,
    getPipelineRunsByPipelineId,
} from '../services/sync-pipeline-api.js';
import { createWorkspace, getCurrentWorkspace, listWorkspaces } from '../services/workspace-api.js';

export const options = singleRunOptions;

const seed = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
const workspaceKeyA = `wsa-${seed}`;
const workspaceKeyB = `wsb-${seed}`;
const workspaceNameA = `Workspace A ${seed}`;
const workspaceNameB = `Workspace B ${seed}`;
const sharedFolderName = `shared-${seed}`;
const sharedPipelineName = `pipeline-${seed}`;
const sourceTableA = `ws_src_a_${seed}`;
const sourceTableB = `ws_src_b_${seed}`;
const destTableA = `ws_dest_a_${seed}`;
const destTableB = `ws_dest_b_${seed}`;
const executionNameA = `ws_insert_a_${seed}`;
const executionNameB = `ws_insert_b_${seed}`;

export function setup() {
    executeStatementsOrFail([
        `CREATE TABLE IF NOT EXISTS ${sourceTableA} (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)`,
        `CREATE TABLE IF NOT EXISTS ${sourceTableB} (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)`,
        `CREATE TABLE IF NOT EXISTS ${destTableA} (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)`,
        `CREATE TABLE IF NOT EXISTS ${destTableB} (id INT PRIMARY KEY, name VARCHAR(255), update_time TIMESTAMP)`,
        `TRUNCATE TABLE ${sourceTableA}`,
        `TRUNCATE TABLE ${sourceTableB}`,
        `TRUNCATE TABLE ${destTableA}`,
        `TRUNCATE TABLE ${destTableB}`,
        `INSERT INTO ${sourceTableA} VALUES (1, 'A1', '2023-01-01 10:00:00'), (2, 'A2', '2023-01-01 11:00:00')`,
        `INSERT INTO ${sourceTableB} VALUES (1, 'B1', '2023-01-01 12:00:00'), (2, 'B2', '2023-01-01 13:00:00')`,
        `DELETE FROM iris_watermark_record WHERE execution_name = '${executionNameA}'`,
        `DELETE FROM iris_watermark_record WHERE execution_name = '${executionNameB}'`,
    ]);

    return {};
}

export default function () {
    let folderIdA = null;
    let folderIdB = null;
    let pipelineIdA = null;
    let pipelineIdB = null;
    let pipelineRunIdA = null;
    let pipelineRunIdB = null;

    const currentWorkspaceResponse = getCurrentWorkspace();
    const currentWorkspacePayload = jsonOrFallback(currentWorkspaceResponse, {});
    check(currentWorkspaceResponse, {
        'default workspace resolves without header': (res) => res.status === 200,
    });
    check(currentWorkspacePayload, {
        'default workspace key is returned when header is absent': (body) => body.workspaceKey === 'default',
    });

    let response = createWorkspace(workspaceKeyA, workspaceNameA);
    let payload = jsonOrFallback(response, {});
    check(response, {
        'create workspace A status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'workspace A is created with requested key': (body) =>
            Number.isInteger(body.id) && body.id > 0 && body.workspaceKey === workspaceKeyA,
    });

    response = createWorkspace(workspaceKeyB, workspaceNameB);
    payload = jsonOrFallback(response, {});
    check(response, {
        'create workspace B status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'workspace B is created with requested key': (body) =>
            Number.isInteger(body.id) && body.id > 0 && body.workspaceKey === workspaceKeyB,
    });

    response = listWorkspaces();
    payload = jsonOrFallback(response, []);
    check(response, {
        'list workspaces status is 200': (res) => res.status === 200,
    });
    check(payload, {
        'list workspaces contains default and created workspaces': (items) =>
            Array.isArray(items)
            && items.some((item) => item.workspaceKey === 'default')
            && items.some((item) => item.workspaceKey === workspaceKeyA)
            && items.some((item) => item.workspaceKey === workspaceKeyB),
    });

    response = getCurrentWorkspace(workspaceKeyA);
    payload = jsonOrFallback(response, {});
    check(payload, {
        'workspace header resolves current workspace A': (body) => body.workspaceKey === workspaceKeyA,
    });

    response = getCurrentWorkspace(workspaceKeyB);
    payload = jsonOrFallback(response, {});
    check(payload, {
        'workspace header resolves current workspace B': (body) => body.workspaceKey === workspaceKeyB,
    });

    try {
        response = createFolder(null, sharedFolderName, workspaceKeyA);
        payload = jsonOrFallback(response, {});
        folderIdA = payload.id;
        check(response, {
            'workspace A folder create status is 200': (res) => res.status === 200,
        });
        check(payload, {
            'workspace A top-level folder hides hidden root parent id': (body) =>
                Number.isInteger(body.id) && body.parentFolderId === null && body.folderPath === `/${sharedFolderName}`,
        });

        response = createFolder(null, sharedFolderName, workspaceKeyB);
        payload = jsonOrFallback(response, {});
        folderIdB = payload.id;
        check(response, {
            'workspace B folder create status is 200': (res) => res.status === 200,
        });
        check(payload, {
            'workspace B may reuse same folder name in different workspace': (body) =>
                Number.isInteger(body.id) && body.id !== folderIdA && body.folderPath === `/${sharedFolderName}`,
        });

        response = createConfigFromBody(folderIdA, sharedPipelineName, buildJobs('a', sourceTableA, destTableA, executionNameA), workspaceKeyA);
        payload = jsonOrFallback(response, {});
        pipelineIdA = payload.id;
        check(response, {
            'workspace A config create status is 200': (res) => res.status === 200,
        });
        check(payload, {
            'workspace A config keeps folder metadata and pure pipeline contract': (body) =>
                Number.isInteger(body.id)
                && body.pipelineName === sharedPipelineName
                && body.folderId === folderIdA
                && body.folderPath === `/${sharedFolderName}`
                && hasNoLegacyPathFields(body),
        });

        response = createConfigFromBody(folderIdB, sharedPipelineName, buildJobs('b', sourceTableB, destTableB, executionNameB), workspaceKeyB);
        payload = jsonOrFallback(response, {});
        pipelineIdB = payload.id;
        check(response, {
            'workspace B config create status is 200': (res) => res.status === 200,
        });
        check(payload, {
            'workspace B may reuse same pipeline name in same logical path of another workspace': (body) =>
                Number.isInteger(body.id)
                && body.id !== pipelineIdA
                && body.pipelineName === sharedPipelineName
                && body.folderId === folderIdB
                && body.folderPath === `/${sharedFolderName}`
                && hasNoLegacyPathFields(body),
        });

        const configsA = jsonOrFallback(listConfigs(workspaceKeyA), []);
        const configsB = jsonOrFallback(listConfigs(workspaceKeyB), []);
        check(configsA, {
            'workspace A config list only returns workspace A pipeline': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === pipelineIdA
                && items[0].pipelineName === sharedPipelineName
                && hasNoLegacyPathFields(items[0]),
        });
        check(configsB, {
            'workspace B config list only returns workspace B pipeline': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === pipelineIdB
                && items[0].pipelineName === sharedPipelineName
                && hasNoLegacyPathFields(items[0]),
        });

        const treeA = jsonOrFallback(getPipelineTree(workspaceKeyA), {});
        const treeB = jsonOrFallback(getPipelineTree(workspaceKeyB), {});
        const folderNodeA = findFolderNode(treeA.folders, sharedFolderName);
        const folderNodeB = findFolderNode(treeB.folders, sharedFolderName);
        check(treeA, {
            'workspace A tree only shows workspace A folder and pipeline': () =>
                folderNodeA !== null
                && Array.isArray(folderNodeA.pipelines)
                && folderNodeA.pipelines.length === 1
                && folderNodeA.pipelines[0].id === pipelineIdA,
        });
        check(treeB, {
            'workspace B tree only shows workspace B folder and pipeline': () =>
                folderNodeB !== null
                && Array.isArray(folderNodeB.pipelines)
                && folderNodeB.pipelines.length === 1
                && folderNodeB.pipelines[0].id === pipelineIdB,
        });

        pipelineRunIdA = runPipelineAndGetSummary(pipelineIdA, false, workspaceKeyA).summary.id;
        pipelineRunIdB = runPipelineAndGetSummary(pipelineIdB, false, workspaceKeyB).summary.id;

        const historyA = getPipelineRunHistoryOrFail(pipelineIdA, 10, null, 'workspace A history query', workspaceKeyA);
        const historyB = getPipelineRunHistoryOrFail(pipelineIdB, 10, null, 'workspace B history query', workspaceKeyB);
        const recentA = getRecentPipelineRunsOrFail(10, null, 'workspace A recent query', workspaceKeyA);
        const recentB = getRecentPipelineRunsOrFail(10, null, 'workspace B recent query', workspaceKeyB);
        const detailA = getPipelineRunDetailOrFail(pipelineRunIdA, 'workspace A detail query', workspaceKeyA);
        const detailB = getPipelineRunDetailOrFail(pipelineRunIdB, 'workspace B detail query', workspaceKeyB);

        check(historyA, {
            'workspace A history only contains workspace A run': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === pipelineRunIdA
                && items[0].pipelineId === pipelineIdA
                && hasNoLegacyPathFields(items[0]),
        });
        check(historyB, {
            'workspace B history only contains workspace B run': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === pipelineRunIdB
                && items[0].pipelineId === pipelineIdB
                && hasNoLegacyPathFields(items[0]),
        });
        check(recentA, {
            'workspace A recent feed is isolated': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === pipelineRunIdA
                && items[0].pipelineId === pipelineIdA
                && hasNoLegacyPathFields(items[0]),
        });
        check(recentB, {
            'workspace B recent feed is isolated': (items) =>
                Array.isArray(items)
                && items.length === 1
                && items[0].id === pipelineRunIdB
                && items[0].pipelineId === pipelineIdB
                && hasNoLegacyPathFields(items[0]),
        });
        check(detailA, {
            'workspace A run detail stays in workspace A scope': (item) =>
                item.id === pipelineRunIdA
                && item.pipelineId === pipelineIdA
                && item.pipelineName === sharedPipelineName
                && item.folderPath === `/${sharedFolderName}`
                && hasNoLegacyPathFields(item),
        });
        check(detailB, {
            'workspace B run detail stays in workspace B scope': (item) =>
                item.id === pipelineRunIdB
                && item.pipelineId === pipelineIdB
                && item.pipelineName === sharedPipelineName
                && item.folderPath === `/${sharedFolderName}`
                && hasNoLegacyPathFields(item),
        });

        response = getConfigDetail(pipelineIdA, workspaceKeyB);
        check(response, {
            'cross-workspace config detail is rejected': (res) => res.status === 400,
        });

        response = getPipelineRunDetail(pipelineRunIdA, workspaceKeyB);
        check(response, {
            'cross-workspace run detail is rejected': (res) => res.status === 400,
        });

        response = getPipelineRunsByPipelineId(pipelineIdA, 10, null, workspaceKeyB);
        check(response, {
            'cross-workspace history query is rejected': (res) => res.status === 400,
        });

        response = getPipelineRunsByIds([pipelineRunIdA], workspaceKeyB);
        payload = jsonOrFallback(response, []);
        check(response, {
            'cross-workspace ids lookup still returns 200': (res) => res.status === 200,
        });
        check(payload, {
            'cross-workspace ids lookup does not leak hidden runs': (items) => Array.isArray(items) && items.length === 0,
        });

        const visibleRunsA = getPipelineRunsOrFail([pipelineRunIdA], 'workspace A ids lookup', workspaceKeyA);
        const visibleRunsB = getPipelineRunsOrFail([pipelineRunIdB], 'workspace B ids lookup', workspaceKeyB);
        check(visibleRunsA, {
            'workspace A ids lookup still finds workspace A run': (items) =>
                Array.isArray(items) && items.length === 1 && items[0].id === pipelineRunIdA,
        });
        check(visibleRunsB, {
            'workspace B ids lookup still finds workspace B run': (items) =>
                Array.isArray(items) && items.length === 1 && items[0].id === pipelineRunIdB,
        });
    } finally {
        safeDeletePipelineRun(pipelineRunIdA, workspaceKeyA);
        safeDeletePipelineRun(pipelineRunIdB, workspaceKeyB);
        safeDeleteFolder(folderIdA, workspaceKeyA);
        safeDeleteFolder(folderIdB, workspaceKeyB);
    }
}

function buildJobs(jobSuffix, sourceTable, destTable, executionName) {
    return [
        {
            stage: 'stage1',
            jobName: `workspace_job_${jobSuffix}_${seed}`,
            executions: [
                {
                    type: 'EXECUTE',
                    sql: `TRUNCATE TABLE ${destTable}`,
                },
                {
                    type: 'INSERT',
                    name: executionName,
                    sql: `SELECT * FROM ${sourceTable} WHERE update_time > :_LAST_UPDATE ORDER BY update_time ASC`,
                    destTable,
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
}

function findFolderNode(folders, folderName) {
    for (const folder of folders || []) {
        if (folder.folderName === folderName) {
            return folder;
        }

        const nestedFolder = findFolderNode(folder.folders, folderName);
        if (nestedFolder) {
            return nestedFolder;
        }
    }

    return null;
}

function safeDeletePipelineRun(pipelineRunId, workspaceKey) {
    if (!pipelineRunId) {
        return;
    }

    try {
        deletePipelineRunOrFail(pipelineRunId, `workspace run ${pipelineRunId} delete`, workspaceKey);
    } catch (error) {
        console.error(`Failed to delete pipeline run ${pipelineRunId}: ${error.message}`);
    }
}

function safeDeleteFolder(folderId, workspaceKey) {
    if (!folderId) {
        return;
    }

    const response = deleteFolder(folderId, true, workspaceKey);
    if (response.status !== 204) {
        throw new Error(`Failed to delete folder ${folderId}: ${responseSummary(response)}`);
    }
}
