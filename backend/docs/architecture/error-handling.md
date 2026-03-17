# Error Handling

## 1. REST Exception Mapping

`GlobalExceptionHandler` is the controller-facing error boundary.

Current mappings:

| Exception type | HTTP status | Typical source |
| --- | --- | --- |
| `MethodArgumentNotValidException` | `400` | invalid request body |
| `HandlerMethodValidationException` | `400` | invalid query/path/header parameters |
| `ConstraintViolationException` | `400` | Jakarta validation failure |
| `HttpMessageNotReadableException` | `400` | unreadable JSON |
| `MissingServletRequestParameterException` | `400` | missing query param |
| `MissingServletRequestPartException` | `400` | missing multipart part |
| `MethodArgumentTypeMismatchException` | `400` | invalid request parameter type |
| `ResourceNotFoundException` | `400` | missing pipeline, run, folder, or workspace in current scope |
| `ConfigValidationException` | `400` | invalid pipeline config semantics |
| `IllegalArgumentException` | `400` | invalid operation for current state |
| `ConflictException` | `409` | uniqueness conflict or delete blocker |
| `ConfigFileException` | `500` | import parsing or conversion failure |
| `IllegalStateException` | `500` | unexpected server-side state |
| fallback `Exception` | `500` | unhandled server exception |

## 2. Validation Layers

Validation is intentionally layered.

### Request Binding Validation

Controller request DTOs and request params use Spring validation for:

- `@NotNull`
- `@NotBlank`
- `@Positive`
- `@Pattern`
- `@Min`
- `@Max`

This catches malformed client input before service execution.

### Request-Policy Validation

Shallow domain validation still happens in policy services.

Examples:

- pipeline name normalization
- import format resolution
- non-empty job lists
- folder name normalization

### Deep Config Validation

`SyncJobDefinition.validate()` and nested model validation handle:

- execution-step correctness
- parameter completeness
- database config completeness
- atomic-level requirements

This layer intentionally lives inside the config model, not in the controller DTO boundary.

## 3. Runtime Failure Semantics

Not every runtime failure becomes an HTTP 500.

For pipeline execution:

- request problems are reported as transport-level errors
- execution failures are usually persisted into runtime state

Typical terminal runtime states:

- `FAILED`
- `STOPPED`
- `COMPLETED`
- `ABANDONED`
- `UNKNOWN`

Clients are expected to observe run outcome primarily through run detail and run history, not through transport exceptions.

## 4. Control Validation

### Resume

Resume is rejected when:

- the run does not exist in the current workspace
- the run has no snapshot
- the latest attempt is not resumable
- no failed, stopped, or resumable `NOT_RUN` node can be found

### Rerun

Rerun is rejected when:

- the source run does not exist in the current workspace
- the source snapshot does not exist

### Stop

Stop is rejected when the latest execution is not in:

- `STARTING`
- `STARTED`
- `STOPPING`

### Run Delete

Run delete is rejected when the latest execution is still in-flight.

### Config Delete

Config delete is rejected when run lineage already exists for that pipeline.

### Folder Recursive Delete

Recursive folder delete is rejected when the subtree contains pipelines with run history.

## 5. Runtime Projection on Failure

When runtime work fails or stops:

1. execution-job rows are updated
2. execution rows are updated
3. latest projections on logical run-job rows are synchronized
4. latest projection on logical run row is synchronized
5. downstream pending nodes in the attempt become `NOT_RUN` when needed

This keeps summary, recent, history, and detail responses readable even when failure happens mid-pipeline.

## 6. Current Boundaries

The backend still does not expose:

- realtime runtime log streaming
- dashboard-specific aggregate API
- tracing-specific failure surfaces

Those are product or observability follow-up concerns, not current controller error-handling responsibilities.
