# Error Handling

## Global exception mapping

`GlobalExceptionHandler` is the REST boundary for application errors.

| Exception | HTTP status | Response shape |
| --- | --- | --- |
| `ResourceNotFoundException` | `404` | `{ "message": "[resource] ..." }` |
| `MethodArgumentNotValidException` | `400` | `{ "field": "error" }` |
| `ResponseStatusException` | status from exception | `{ "message": "..." }` |
| `ConfigValidationException` | `400` | `{ "jobName": "...", "executionName": "...", "message": "..." }` |
| `General.GeneralException` | `400` or `500` | `{ "message": "..." }` |
| `CustomJobExecutionException` | `500` | `{ "message": "jobName: ..., error: ..." }` |
| `ConfigFileException` | `400` | `{ "message": "..." }` |
| other `RuntimeException` | `500` | `{ "message": "..." }` |

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

Raised when a config file cannot be loaded, validated, written, or deleted.

Typical causes:

- unsupported file type
- invalid path such as `..`
- invalid file content
- missing target file during delete

### `CustomJobExecutionException`

Raised when Spring Batch job startup fails inside `JobExecutionService`.

### `ResourceNotFoundException`

Raised by metadata operations such as deleting a job execution that does not exist.

## Practical API expectations

- Config upload validation failures should return `400`.
- Metadata lookups or deletes for missing jobs should return `404`.
- Unexpected runtime failures still fall back to `500`.

These are the behaviors the K6 suite and future API documentation should assume.
