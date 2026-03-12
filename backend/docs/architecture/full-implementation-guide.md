# IrisPipe Full Implementation Guide

This document is a code-first walkthrough of the current IrisPipe backend.

## 1. What IrisPipe is right now

At runtime, IrisPipe is a Spring Boot application that:

1. Reads one config file from the `jobs/` directory.
2. Deserializes the file into `List<SyncJobDefinition>`.
3. Validates each job definition.
4. Builds an in-memory `SyncJobContext` with source and destination JDBC data sources.
5. Converts each configured execution into a Spring Batch `Step` via strategy factory.
6. Launches the assembled Spring Batch `Job`.
7. Stores job metadata in Spring Batch tables.
8. Stores watermark state in the application table `iris_watermark_record` only after the whole job completes successfully.

## 2. Source of truth

The most trustworthy packages for understanding the current implementation are:

- `src/main/java/irispipe/api/*`
- `src/main/java/irispipe/core/*`
- `src/main/java/irispipe/infrastructure/*`
- `src/main/java/irispipe/batch/*`
- `src/main/java/irispipe/model/*`

## 3. Top-level module map

The packages divide responsibilities cleanly:

- **`api`**: REST controllers for config and job management.
- **`batch`**: Spring Batch specific components (listeners, tasklets, writers, builders).
- **`core`**: Core services (JobExecutionService, JobMetadataService) and Strategy Factory.
- **`infrastructure`**: Implementation of providers, persistence (JobConfigService), repositories, and error handling.
- **`model`**: Domain models (`SyncJobDefinition`, `ExecutionStep`) and DTOs.

## 4. Execution Logic

### 4.1 SQL Generation
`SqlSyntaxHelper` provides dynamic SQL generation by analyzing database metadata. It supports correctly quoted identifiers and vendor-specific casing.

### 4.2 UPSERT Strategy
`BatchUpsertWriter` implements a generic "query-then-split" logic to handle updates and inserts in a database-agnostic manner.

### 4.3 Watermark Processing
Watermarks are collected during step execution (`ExecutionStepListener`) and persisted upon successful job completion (`CustomJobListener`).
