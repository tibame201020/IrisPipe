import { check } from 'k6';
import { createConfig, updateConfig, getConfigDetail, listConfigs, deleteConfig } from './services/sync-config-api.js';

// Read the static payload from external file
const yamlContent = open('./testfiles/test-config.yml');

export default function () {
    const fileName = 'test-config.yml';
    const filePath = 'k6-tests/' + fileName;

    // 1. Create Config
    let res = createConfig(filePath, fileName, yamlContent);
    check(res, { 'create config status is 201 or 200': (r) => r.status === 201 || r.status === 200 });

    // 2. Get Config Detail
    res = getConfigDetail(filePath);
    check(res, { 'get config detail status is 200': (r) => r.status === 200 });

    // 3. List Configs
    res = listConfigs();
    check(res, { 'list configs status is 200': (r) => r.status === 200 });

    // 4. Update Config (PUT)
    res = updateConfig(filePath, fileName, yamlContent);
    check(res, { 'update config status is 200 or 201': (r) => r.status === 200 || r.status === 201 });

    // 5. Delete Config
    res = deleteConfig(filePath);
    check(res, { 'delete config status is 204 or 200': (r) => r.status === 204 || r.status === 200 });
}
