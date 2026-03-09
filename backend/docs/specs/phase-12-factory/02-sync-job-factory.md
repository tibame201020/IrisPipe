# Phase 12-2: SyncJobFactory

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.factory.SyncJobFactory`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/factory/SyncJobFactory.java`

## 策略: C. 嵌入式 DB (H2)

> `createXxxStep()` 內部 `new SqlSyntaxHelper(destTable, jdbc)` 需要真實 JDBC metadata。
> 用 H2 建表讓 SqlSyntaxHelper 自然運作，避免 deep mock JDBC chain。
> **Mock 僅用在 `JobRepository`**（Spring Batch 內部需求）和 `ExecutionRecordService`。

## 類別概述

根據 `SyncJobContext` 中的 Execution 類型，組裝 Spring Batch `Job`。
包含 5 個 `createXxxStep()` 方法和 1 個 `createBatchJob()` 入口。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/factory/SyncJobFactoryTest.java`

## H2 設定

```java
private static HikariDataSource dataSource;

@BeforeAll
static void setupDatabase() {
    dataSource = new HikariDataSource();
    dataSource.setJdbcUrl("jdbc:h2:mem:factorytest;DB_CLOSE_DELAY=-1");
    dataSource.setUsername("sa");
    dataSource.setPassword("");

    JdbcTemplate jdbc = new JdbcTemplate(dataSource);
    jdbc.execute("CREATE TABLE MY_TABLE (ID INT PRIMARY KEY, NAME VARCHAR(50), STATUS VARCHAR(20))");
}
```

## 混合策略

| 依賴 | 策略 |
|---|---|
| SqlSyntaxHelper | 透過 H2 真實 metadata（**不 mock**） |
| DatabaseContext | 真實 `new DatabaseContext(dataSource, 100)` |
| BatchBeanBuilder | 真實 instance（**不 mock**） |
| JobRepository | Mock（Spring Batch 內部需求，只有 `JobBuilderFactory` 需要） |
| ExecutionRecordService | Mock（避免建構 record DB） |

## Test Cases

### 1. `createBatchJob_insertExecution_createsJob`
一個 INSERT execution → `Job` 非 null

### 2. `createBatchJob_updateExecution_createsJob`

### 3. `createBatchJob_upsertExecution_createsJob`

### 4. `createBatchJob_deleteExecution_createsJob`

### 5. `createBatchJob_executeExecution_createsJob`

### 6. `createBatchJob_multipleExecutions_createsMultipleSteps`
3 個不同 execution → Job 包含 3 個 step

### 7. `createBatchJob_setsJobListener`
驗證 Job 有 listener

### 8. `createBatchJob_setsRunIdIncrementer`
驗證 Job 有 incrementer
