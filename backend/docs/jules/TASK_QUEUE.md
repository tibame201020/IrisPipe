# Task Queue — Unit Test Phases

> Jules 每次執行時，從此檔案取得下一個未完成的任務。
>
> - `[ ]` = 待領取
> - `[/]` = 進行中
> - `[x]` = 已完成
>
> 策略: **A**=純邏輯 | **B**=@TempDir | **C**=H2 DB | **D**=Mock

---

## Phase 1: Data Models

- [x] **1-1** `SummaryInfo` **(A)** — [spec](../specs/phase-01-data/01-summary-info.md) → 3 tests
- [ ] **1-2** `SimpleEnum` **(A)** — [spec](../specs/phase-01-data/02-simple-enum.md) → 4 tests
- [ ] **1-3** `BatchJobExecutionRecord` **(A)** — [spec](../specs/phase-01-data/03-batch-job-execution-record.md) → 2 tests
- [ ] **1-4** `SyncJob` **(A)** — [spec](../specs/phase-01-data/04-sync-job.md) → 4 tests
- [ ] **1-5** `SyncJobProp` **(A)** — [spec](../specs/phase-01-data/05-sync-job-prop.md) → ~18 tests

## Phase 2: Utility

- [ ] **2-1** `CollectionHelper` **(A)** — [spec](../specs/phase-02-utility/01-collection-helper.md) → 6 tests

## Phase 3: Error / Exception

- [ ] **3-1** `ConfigValidationException` **(A)** — [spec](../specs/phase-03-error/01-config-validation-exception.md) → 4 tests
- [ ] **3-2** `CustomJobExecutionException` **(A)** — [spec](../specs/phase-03-error/02-custom-job-execution-exception.md) → 2 tests
- [ ] **3-3** `ConfigFileException` **(A)** — [spec](../specs/phase-03-error/03-config-file-exception.md) → 1 test
- [ ] **3-4** `General` **(A)** — [spec](../specs/phase-03-error/04-general.md) → 3 tests

## Phase 4: Provider

- [ ] **4-1** `JsonFileProvider` **(B)** — [spec](../specs/phase-04-provider/01-json-file-provider.md) → 9 tests
- [ ] **4-2** `YamlFileProvider` **(B)** — [spec](../specs/phase-04-provider/02-yaml-file-provider.md) → 9 tests

## Phase 5: Service

- [ ] **5-1** `JobConfigService` **(D)** — [spec](../specs/phase-05-service/01-job-config-service.md) → 5 tests
- [ ] **5-2** `ExecutionRecordService` **(C)** — [spec](../specs/phase-05-service/02-execution-record-service.md) → 8 tests

## Phase 6: Error Handler

- [ ] **6-1** `GlobalExceptionHandler` **(A+D)** — [spec](../specs/phase-06-error-handler/01-global-exception-handler.md) → 7 tests

## Phase 7: Batch Writers

- [ ] **7-1** `BatchInsertWriter` **(D)** — [spec](../specs/phase-07-writer/01-batch-insert-writer.md) → 3 tests
- [ ] **7-2** `BatchUpdateWriter` **(A)** — [spec](../specs/phase-07-writer/02-batch-update-writer.md) → 4 tests
- [ ] **7-3** `BatchUpsertWriter` **(C+D)** — [spec](../specs/phase-07-writer/03-batch-upsert-writer.md) → 7 tests

## Phase 8: Batch Tasklets

- [ ] **8-1** `ExecuteTasklet` **(C)** — [spec](../specs/phase-08-tasklet/01-execute-tasklet.md) → 3 tests
- [ ] **8-2** `DeleteTasklet` **(C)** — [spec](../specs/phase-08-tasklet/02-delete-tasklet.md) → 4 tests

## Phase 9: Batch Listeners

- [ ] **9-1** `CustomJobListener` **(D)** — [spec](../specs/phase-09-listener/01-custom-job-listener.md) → 6 tests
- [ ] **9-2** `ExecutionStepListener` **(D)** — [spec](../specs/phase-09-listener/02-execution-step-listener.md) → 6 tests

## Phase 10: Batch Builder

- [ ] **10-1** `BatchBeanBuilder` **(C)** — [spec](../specs/phase-10-builder/01-batch-bean-builder.md) → 5 tests

## Phase 11: Context

- [ ] **11-1** `DatabaseContext` **(A)** — [spec](../specs/phase-11-context/01-database-context.md) → 4 tests
- [ ] **11-2** `SyncJobContext` **(A)** — [spec](../specs/phase-11-context/02-sync-job-context.md) → 3 tests

## Phase 12: Factory

- [ ] **12-1** `SyncJobContextFactory` **(C+D)** — [spec](../specs/phase-12-factory/01-sync-job-context-factory.md) → 7 tests
- [ ] **12-2** `SyncJobFactory` **(C)** — [spec](../specs/phase-12-factory/02-sync-job-factory.md) → 8 tests

## Phase 13: Service Integration

- [ ] **13-1** `JobExecutionService` **(D)** — [spec](../specs/phase-13-service-integration/01-job-execution-service.md) → 5 tests

---

**Total: 27 tasks, ~148 test cases**

| Strategy | Count | Description |
|---|---|---|
| A | 14 | 純邏輯（不用 Mockito） |
| B | 2 | @TempDir + 真實 ObjectMapper |
| C | 5 | H2 embedded DB |
| C+D | 3 | H2 + 最少 Mock |
| D | 3 | 輕量 Mock（僅委派驗證） |
