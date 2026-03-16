import { check } from 'k6';
import { singleRunOptions } from '../utils/test-options.js';
import { jsonOrFallback, pipelineNameFor } from '../utils/test-helpers.js';
import { importConfig } from '../services/sync-config-api.js';

export const options = singleRunOptions;

const yamlContent = open('../testfiles/test-config-invalid-format.yml');
const fileName = 'test-config-invalid-format.yml';
const pipelineName = pipelineNameFor(fileName);

export default function () {
    const response = importConfig(null, pipelineName, null, fileName, yamlContent);
    const payload = jsonOrFallback(response, {});

    check(response, {
        'Create malformed config fails validation (400)': (res) => res.status === 400,
    });
    check(payload, {
        'Validation response contains an error message': (body) =>
            typeof body.message === 'string' && body.message.length > 0,
    });
}
