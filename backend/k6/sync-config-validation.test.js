import { check } from 'k6';
import { createConfig } from './services/sync-config-api.js';

// Read payload from file
const yamlContent = open('./testfiles/test-config-invalid-format.yml');
const fileName = 'test-config-invalid-format.yml';
const filePath = 'k6-tests/' + fileName;

export default function () {
    // 1. Create Malformed Config
    let res = createConfig(filePath, fileName, yamlContent);
    // Config creation should either fail validation returning 400 Bad Request, or be accepted if validation is weak. 
    // We expect a robust system to throw 400 Bad Request.
    // If the system currently accepts it due to missing validation, it will get a 201/200, but we assert for 400 to mark coverage gaps.
    check(res, { 'Create malformed config fails validation (400)': (r) => r.status === 400 });
}
