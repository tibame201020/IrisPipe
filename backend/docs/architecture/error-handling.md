# Error Handling

## Global exception mapping

`GlobalExceptionHandler` is the REST boundary for application errors.

| Exception | HTTP status | Response shape |
| --- | --- | --- |
| `ResourceNotFoundException` | `400` | `{ "error": "Resource Not Found", "message": "...", "resource": "..." }` |
| `ConfigValidationException` | `400` | `{ "error": "Config Validation Error", "message": "[Job: ..., Execution: ...] ..." }` |
| `ConfigFileException` | `500` | `{ "error": "Config File Error", "message": "..." }` |
| `CustomJobExecutionException` | `500` | `{ "error": "Job Execution Error", "message": "..." }` |
| `IllegalArgumentException` | `400` | `{ "error": "Illegal Argument", "message": "..." }` |

## Exception roles

### `ConfigValidationException`

Raised when a parsed job config is structurally valid JSON or YAML, but fails IrisPipe-specific validation.

Typical causes:

- blank `jobName`
- missing `destTable`
- missing named SQL parameters
- missing `atomicLevel`
- missing connection credentials

### `ConfigFileException`

Raised when a config file cannot be loaded, validated, written, or deleted due to severe infrastructure issues (e.g., IO failures).

### `CustomJobExecutionException`

Raised when Spring Batch job startup fails inside `JobExecutionService`.

### `ResourceNotFoundException`

Raised by metadata operations or config retrieval when the requested resource does not exist. Currently mapped to `400` for K6 compatibility.

## Practical API expectations

- Config upload validation failures should return `400`.
- Metadata lookups or deletes for missing jobs should return `400` (to match existing K6 E2E expectations).
- Unexpected runtime failures still fall back to `500`.

These are the behaviors the K6 suite and future API documentation should assume.
