# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Flyway Database Migrations**:
    - `V1__init_batch_metadata.sql`: Initializes Spring Batch internal metadata tables.
    - `V2__init_watermark_record.sql`: Initializes `iris_watermark_record` table for centralized watermark tracking.
- **Centralized Watermark Storage**: Watermarks are now stored in the internal application database using Spring Data JPA, removing the need for external `record` database configuration.
- **At-Least-Once Watermark Protection**: Refactored `ExecutionStepListener` and `CustomJobListener` to ensure watermarks are only persisted to the database when the overall Job is successfully `COMPLETED`.
- **K6 E2E Regression Suite**: Added comprehensive tests under `k6/` to validate API CRUD and Job execution logic before refactoring.
- **Architectural Documentation**: Added detailed documents in `docs/architecture/` covering Core Flow, Design Patterns, Config Model, and Error Handling.

### Fixed
- **SyncConfig API Validation**: Fixed `NullPointerException` and 400 Bad Request errors by adding proper validation for `executions` and database passwords.
- **K6 Mock Payloads**: Updated test files to use compliant `password` values and lowercase `timestamp` enums to match backend expectations.
- **Spring Boot Startup**: Fixed H2 database dependency scope and `application.yaml` indentation to prevent startup failures.

### Changed
- **SyncJobProp Refactoring**: Removed `recordTable` and `database.record` from configuration properties.
- **Job Execution Logic**: Updated synchronization logic to be more robust against transaction rollbacks.
