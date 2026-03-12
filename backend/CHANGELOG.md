# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added
- Reusable K6 helpers in `k6/utils/` for shared setup, config cleanup, SQL assertions, and job metadata polling.
- Coverage for the current sync-job metadata APIs in the K6 suite.
- New K6 test scenarios for **Composite Primary Key UPSERT** and **System Variable (Watermark)** persistence.
- `server.bat` to start the backend from the repository root on Windows.

### Changed
- K6 API clients now target the current REST contract and support `IRISPIPE_BASE_URL`.
- `run-tests.ps1` now runs every suite in sequence, including new composite PK and watermark tests, and exits non-zero on failure.
- K6 fixtures now use `UPDATE_TIME` as `watermarkColumn` for consistency with JDBC metadata.
- Local runtime defaults now enable Spring virtual threads and set the embedded H2 password to `sa`.
- Maintained documentation has been refreshed around the current implementation.

### Fixed
- **Critical Bug**: `BatchUpsertWriter` now correctly handles named-to-positional parameter conversion for the "exists check" query, preventing `JdbcSQLSyntaxErrorException` on composite PK UPSERTs.
- `SyncJobFactory` now fills only missing destination columns with `null` before processing.
- K6 config CRUD coverage now asserts actual response payloads, including `PATCH` behavior.

### Removed
- Legacy design snapshots under `backend/docs/specs/`.
- `backend/docs/jules/TASK_QUEUE.md`.
