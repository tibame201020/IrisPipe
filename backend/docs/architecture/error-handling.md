# Error Handling

## Global exception mapping

`GlobalExceptionHandler` manages REST boundary errors.

| Exception | HTTP status | Behavior |
| --- | --- | --- |
| `ResourceNotFoundException` | `400` | Mapped to 400 for K6 parity (Config/Job not found) |
| `ConfigValidationException` | `400` | Structural or business rule failure in Job definition |
| `ConfigFileException` | `500` | Infrastructure failure during file reading/hashing |
| `CustomJobExecutionException`| `500` | Spring Batch startup failure |
| `IllegalArgumentException` | `400` | Invalid request parameters (e.g. duplicate pipeline path) |

## Exception Roles in Phase 3

### `ResourceNotFoundException`
Now used extensively when a `pipelineId` provided to the API does not exist in the database. It returns a **400 Bad Request** to align with the Phase 1 K6 test expectations, which treat "missing config" as a validation/request error.

### `ConfigValidationException`
Triggered during the **Upload -> Persistence** phase. If the uploaded YAML/JSON is valid YAML but fails IrisPipe's `validate()` logic (e.g. missing `destTable`), this error is returned, and nothing is saved to the DB.

### `ConfigFileException`
Used sparingly for unexpected IO or encryption/hashing errors during the upload process.

## Transactional Scopes

As of Phase 4, IrisPipe supports two transactional scopes via the `atomicLevel` setting:

| Scope | Transaction Boundary | Failure Behavior |
| --- | --- | --- |
| `JOB` | Full job duration (Outer transaction) | Entire job rolls back; no data committed in any step. |
| `CHUNK` | Spring Batch Chunks | Partial success; committed chunks remain in DB; failed chunk rolls back. |

> [!NOTE]
> In `CHUNK` mode, watermarks are currently persistent only after **whole-job success**. Partial commitments during failure will be handled by future **Restart** functionality to avoid redundant processing.
