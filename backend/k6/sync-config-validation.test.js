import { check } from 'k6';
import { singleRunOptions } from './utils/test-options.js';
import { jsonOrFallback } from './utils/test-helpers.js';
import { createConfig } from './services/sync-config-api.js';

export const options = singleRunOptions;

const yamlContent = open('./testfiles/test-config-invalid-format.yml');
const fileName = 'test-config-invalid-format.yml';
const filePath = `k6-tests/${fileName}`;

export default function () {
    const response = createConfig(filePath, fileName, yamlContent);
    const payload = jsonOrFallback(response, {});

    check(response, {
        'Create malformed config fails validation (400)': (res) => res.status === 400,
    });
    check(payload, {
        'Validation response contains an error message': (body) =>
            typeof body.message === 'string' && body.message.length > 0,
    });
}
