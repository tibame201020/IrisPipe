# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added
- Reusable K6 helpers in `k6/utils/` for shared setup, config cleanup, SQL assertions, and job metadata polling.
- Coverage for the current sync-job metadata APIs in the K6 suite:
  - `GET /api/v1/sync-job?ids=...`
  - `GET /api/v1/sync-job/{jobId}`
  - `DELETE /api/v1/sync-job/{jobId}`
- `server.bat` to start the backend from the repository root on Windows.

### Changed
- K6 API clients now target the current REST contract and support `IRISPIPE_BASE_URL`.
- `run-tests.ps1` now fails fast when the backend is unavailable, runs every suite in sequence, and exits non-zero when any suite fails.
- K6 fixtures now use `UPDATE_TIME` as `watermarkColumn` so the YAML matches the column labels returned by the H2/JDBC reader.
- Local runtime defaults now enable Spring virtual threads and set the embedded H2 password to `sa`.
- Maintained documentation has been refreshed around the current implementation. Legacy snapshots under `docs/specs/` and `docs/jules/TASK_QUEUE.md` were removed.

### Fixed
- `SyncJobFactory` now fills only missing destination columns with `null` before INSERT, UPDATE, and UPSERT processing, instead of overwriting existing values.
- K6 config CRUD coverage now asserts the actual response payloads returned by the current API, including `PATCH` behavior and post-delete validation.
- K6 job execution coverage now validates returned job summaries instead of relying on removed legacy endpoints.

### Removed
- Legacy design snapshots under `backend/docs/specs/`.
- `backend/docs/jules/TASK_QUEUE.md`.
