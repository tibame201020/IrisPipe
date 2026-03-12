# Changelog

All notable changes to this project are documented in this file.

## [Phase 2: Architecture & Naming Alignment] - 2026-03-12

### Added
- **Modular Architecture**: Restructured backend into `api`, `batch`, `core`, `infrastructure`, and `model` packages.
- **Spring Boot DevTools**: Integrated for hot-reload support to accelerate development cycles.
- **Global Exception Handling**: Implemented `GlobalExceptionHandler` with standardized RESTful error responses.
- **Path Normalization**: Added cross-platform path separator normalization (backslash to forward slash).
- **Documentation Alignment**: Refreshed `docs/architecture/` to be 1:1 with the refactored code (including `SyncJobDefinition` and modularized flow).

### Changed
- **Package Re-structuring**: Migrated legacy `custom.tibame201020.IrisPipe` structure to a clean `irispipe` root.
- **Naming Alignment**: Consistently renamed classes to reflect domain language:
  - `SyncJob` -> `SyncJobDefinition`
  - `Execution` -> `ExecutionStep`
  - `Database` -> `DatabaseConfig`
- **Semantic Optimization**: Fixed typographical errors across the codebase (`rooPath` -> `rootPath`, `endTIme` -> `endTime`, etc.).
- **API Contract Restoration**: Restored `path`, `filepath`, and `configPath` field names in API DTOs to maintain perfect logical parity with Phase 1 K6 tests.
- **Qualifier Injection**: Used `@Qualifier` to resolve ambiguous `ObjectMapper` bean injection in file providers.

### Fixed
- **NPE in SyncJobDefinition**: Added null safety checks for the `executions` list during validation.
- **YAML Deserialization**: Explicitly typed `TypeReference` in `JobConfigService` to fix parsing issues.
- **API Contract Compatibility**: Used `@JsonProperty("useAsyncLaucher")` to support legacy K6 naming while using optimized internal naming.

---

## [Phase 1: Verification & K6 Protection] - 2026-03-11

### Added
- Reusable K6 helpers in `k6/utils/` for shared setup, config cleanup, SQL assertions, and job metadata polling.
- Coverage for the current sync-job metadata APIs in the K6 suite.
- New K6 test scenarios for **Composite Primary Key UPSERT** and **System Variable (Watermark)** persistence.

### Fixed
- **Critical Bug**: `BatchUpsertWriter` now correctly handles named-to-positional parameter conversion for the "exists check" query, preventing `JdbcSQLSyntaxErrorException` on composite PK UPSERTs.
