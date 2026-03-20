const rawNamespace = (__ENV.IRISPIPE_K6_NAMESPACE || '').trim();
const normalizedNamespace = rawNamespace
    ? rawNamespace.replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').toLowerCase()
    : '';

const tableIdentifierPattern = /\b(?:test_[A-Za-z0-9_]+|source_composite|dest_composite|source_watermark|dest_watermark)\b/g;
const executionNamePattern = /\b(?:k6_[A-Za-z0-9_]+|phase12_[A-Za-z0-9_]+)\b/g;

export function hasNamespace() {
    return normalizedNamespace.length > 0;
}

export function namespacedTableName(name) {
    if (!hasNamespace() || !name) {
        return name;
    }

    return `${name}_${normalizedNamespace}`;
}

export function namespacedExecutionName(name) {
    if (!hasNamespace() || !name) {
        return name;
    }

    return `${name}_${normalizedNamespace}`;
}

export function namespaceSql(sql) {
    if (!hasNamespace() || !sql) {
        return sql;
    }

    return sql
        .replace(tableIdentifierPattern, (identifier) => namespacedTableName(identifier))
        .replace(executionNamePattern, (identifier) => namespacedExecutionName(identifier));
}

function namespaceExecutionYamlLine(line) {
    const executionNameMatch = line.match(/^(\s*name:\s*)(['"]?)([^'"\r\n]+)\2(\s*)$/);
    if (executionNameMatch) {
        return `${executionNameMatch[1]}${executionNameMatch[2]}${namespacedExecutionName(executionNameMatch[3].trim())}${executionNameMatch[2]}${executionNameMatch[4]}`;
    }

    const sqlMatch = line.match(/^(\s*sql:\s*)(['"]?)([^'"\r\n]+)\2(\s*)$/);
    if (sqlMatch) {
        return `${sqlMatch[1]}${sqlMatch[2]}${namespaceSql(sqlMatch[3].trim())}${sqlMatch[2]}${sqlMatch[4]}`;
    }

    const destTableMatch = line.match(/^(\s*destTable:\s*)(['"]?)([^'"\r\n]+)\2(\s*)$/);
    if (destTableMatch) {
        return `${destTableMatch[1]}${destTableMatch[2]}${namespacedTableName(destTableMatch[3].trim())}${destTableMatch[2]}${destTableMatch[4]}`;
    }

    return line;
}

function namespaceYamlContent(fileContent) {
    return fileContent
        .split(/\r?\n/)
        .map(namespaceExecutionYamlLine)
        .join('\n');
}

export function namespaceJobs(jobs = []) {
    if (!hasNamespace() || !Array.isArray(jobs)) {
        return jobs;
    }

    return jobs.map((job) => ({
        ...job,
        executions: Array.isArray(job.executions)
            ? job.executions.map((execution) => ({
                ...execution,
                name: execution.name ? namespacedExecutionName(execution.name) : execution.name,
                sql: execution.sql ? namespaceSql(execution.sql) : execution.sql,
                destTable: execution.destTable ? namespacedTableName(execution.destTable) : execution.destTable,
            }))
            : job.executions,
    }));
}

export function namespaceImportedConfigContent(fileContent, format = null) {
    if (!hasNamespace() || !fileContent) {
        return fileContent;
    }

    const trimmedContent = fileContent.trim();
    const isJsonPayload = format === 'json' || trimmedContent.startsWith('[') || trimmedContent.startsWith('{');

    if (isJsonPayload) {
        const parsed = JSON.parse(fileContent);
        return JSON.stringify(namespaceJobs(parsed), null, 2);
    }

    return namespaceYamlContent(fileContent);
}
