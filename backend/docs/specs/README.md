# Test Specifications — Overview

> 每個 Phase 對應一個獨立的測試規格檔案，供 Google Jules 非同步撰寫。

## 核心原則：輕量優先

> **選擇最輕的工具完成測試。能用純 JUnit 5 就不用 Mockito；能用 embedded DB 就不用 mock JDBC chain。**

### 測試策略分類

| 分類 | 適用場景 | 工具 | 範例類別 |
|---|---|---|---|
| **A. 純邏輯測試** | POJO / record / enum / 驗證邏輯 / 例外類別 | JUnit 5 + AssertJ **only** | SummaryInfo, SimpleEnum, SyncJobProp, SyncJob, CollectionHelper, 所有 exception classes |
| **B. 實體 I/O 測試** | 檔案讀寫、序列化反序列化 | JUnit 5 + `@TempDir` + 真實 ObjectMapper | JsonFileProvider, YamlFileProvider |
| **C. 嵌入式 DB 測試** | 涉及 JDBC / SQL 的元件 | JUnit 5 + H2 in-memory DB | ExecutionRecordService, BatchBeanBuilder, DeleteTasklet |
| **D. 輕量 Mock 測試** | 委派呼叫 / 交互驗證 / 無法用真實物件 | Mockito（**僅必要時**） | JobConfigService, BatchInsertWriter, BatchUpsertWriter, JobExecutionService |

### 判斷流程

```
測試對象有外部相依嗎？
├── 沒有 → A. 純 JUnit 5 (不使用 Mockito)
└── 有 → 相依的是什麼？
    ├── 檔案系統 → B. @TempDir + 真實物件
    ├── 資料庫 (JDBC) → C. H2 embedded DB
    └── 其他 Spring Bean → 能用真實物件嗎？
        ├── 能 → 用真實物件
        └── 不能 (建構成本高/有副作用) → D. Mockito
```

### 常見陷阱

| 類別 | 問題 | 解法 |
|---|---|---|
| `SyncJobProp.Execution` | Java record，不能 mock | 使用真實 instance（**本來就不該 mock**） |
| `SyncJobContext` | Java record，不能 mock | 使用真實 instance |
| `SummaryInfo` | `AtomicLong` 欄位 | 直接 `new SummaryInfo(...)`，驗證 `.get()` |
| `SqlSyntaxHelper` | 建構子需真實 JDBC Connection | 用 **H2**（已有 `SqlSyntaxHelperTest` 範例可參考） |
| `BatchUpdateWriter` | extends `JdbcBatchItemWriter` | `processUpdateCounts()` 是純邏輯，直接呼叫即可 |

### 不需測試的元件

| Package | Reason |
|---|---|
| `batch/entity/` (7 files) | Spring Batch 內建 metadata JPA entities |
| `batch/repo/` (6 files) | Spring Batch 內建 metadata JPA repos |
| `batch/config/BatchConfig.java` | Spring Configuration，無業務邏輯 |
| `config/BeanConfig.java` | Spring Configuration，無業務邏輯 |
| Endpoints / Controllers | 尚未實作 |

### 已存在的測試

- `SqlSyntaxHelperTest.java` — 29 tests ✅ (使用 H2 embedded DB)
- `IrisPipeApplicationTests.java` — Spring Boot boot test ✅

---

## Phase Index

| Phase | Target | Strategy | Tests | Difficulty |
|---|---|---|---|---|
| [1-1](./phase-01-data/01-summary-info.md) | SummaryInfo | A. 純邏輯 | 3 | ⭐ |
| [1-2](./phase-01-data/02-simple-enum.md) | SimpleEnum | A. 純邏輯 | 4 | ⭐ |
| [1-3](./phase-01-data/03-batch-job-execution-record.md) | BatchJobExecutionRecord | A. 純邏輯 | 2 | ⭐ |
| [1-4](./phase-01-data/04-sync-job.md) | SyncJob | A. 純邏輯 | 4 | ⭐ |
| [1-5](./phase-01-data/05-sync-job-prop.md) | SyncJobProp | A. 純邏輯 | ~18 | ⭐⭐ |
| [2-1](./phase-02-utility/01-collection-helper.md) | CollectionHelper | A. 純邏輯 | 6 | ⭐ |
| [3-1](./phase-03-error/01-config-validation-exception.md) | ConfigValidationException | A. 純邏輯 | 4 | ⭐ |
| [3-2](./phase-03-error/02-custom-job-execution-exception.md) | CustomJobExecutionException | A. 純邏輯 | 2 | ⭐ |
| [3-3](./phase-03-error/03-config-file-exception.md) | ConfigFileException | A. 純邏輯 | 1 | ⭐ |
| [3-4](./phase-03-error/04-general.md) | General | A. 純邏輯 | 3 | ⭐ |
| [4-1](./phase-04-provider/01-json-file-provider.md) | JsonFileProvider | B. @TempDir | 9 | ⭐⭐ |
| [4-2](./phase-04-provider/02-yaml-file-provider.md) | YamlFileProvider | B. @TempDir | 9 | ⭐⭐ |
| [5-1](./phase-05-service/01-job-config-service.md) | JobConfigService | D. Mock | 5 | ⭐⭐ |
| [5-2](./phase-05-service/02-execution-record-service.md) | ExecutionRecordService | C. H2 DB | 8 | ⭐⭐ |
| [6-1](./phase-06-error-handler/01-global-exception-handler.md) | GlobalExceptionHandler | A/D. 直接呼叫 | 7 | ⭐⭐ |
| [7-1](./phase-07-writer/01-batch-insert-writer.md) | BatchInsertWriter | D. Mock Writer | 3 | ⭐⭐ |
| [7-2](./phase-07-writer/02-batch-update-writer.md) | BatchUpdateWriter | A. 純邏輯 | 4 | ⭐ |
| [7-3](./phase-07-writer/03-batch-upsert-writer.md) | BatchUpsertWriter | C+D. H2+Mock | 7 | ⭐⭐⭐ |
| [8-1](./phase-08-tasklet/01-execute-tasklet.md) | ExecuteTasklet | C. H2 DB | 3 | ⭐⭐ |
| [8-2](./phase-08-tasklet/02-delete-tasklet.md) | DeleteTasklet | C. H2 DB | 4 | ⭐⭐ |
| [9-1](./phase-09-listener/01-custom-job-listener.md) | CustomJobListener | D. Mock TX | 6 | ⭐⭐⭐ |
| [9-2](./phase-09-listener/02-execution-step-listener.md) | ExecutionStepListener | D. Mock | 6 | ⭐⭐ |
| [10-1](./phase-10-builder/01-batch-bean-builder.md) | BatchBeanBuilder | C. H2 DB | 5 | ⭐⭐ |
| [11-1](./phase-11-context/01-database-context.md) | DatabaseContext | A. 純邏輯 | 4 | ⭐ |
| [11-2](./phase-11-context/02-sync-job-context.md) | SyncJobContext | A. 純邏輯 | 3 | ⭐ |
| [12-1](./phase-12-factory/01-sync-job-context-factory.md) | SyncJobContextFactory | C+D. H2+Mock | 7 | ⭐⭐⭐ |
| [12-2](./phase-12-factory/02-sync-job-factory.md) | SyncJobFactory | C. H2 DB | 8 | ⭐⭐⭐ |
| [13-1](./phase-13-service-integration/01-job-execution-service.md) | JobExecutionService | D. Mock | 5 | ⭐⭐⭐ |

**Total: 27 phases, ~148 test cases**
