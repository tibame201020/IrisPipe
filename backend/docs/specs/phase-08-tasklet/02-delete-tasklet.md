# Phase 8-2: DeleteTasklet

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.tasklet.DeleteTasklet`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/tasklet/DeleteTasklet.java`

## 策略: C. 嵌入式 DB (H2)

> `DeleteTasklet` 內部建構 `SqlSyntaxHelper`（需真實 JDBC metadata），用 H2 實際建表遠比 deep mock JDBC chain 簡單。
> 參考 `SqlSyntaxHelperTest.java` 的 H2 設定模式。

## 類別概述

刪除 Tasklet 流程：
1. `new SqlSyntaxHelper(destTable, jdbc)` → 取得 `deleteSql`
2. COUNT 待刪除筆數
3. Threshold 保護 (`threshold != -1 && count > threshold` → 拋出)
4. Streaming query + batch delete

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/tasklet/DeleteTaskletTest.java`

## H2 設定

```java
private static HikariDataSource dataSource;

@BeforeAll
static void setupDatabase() {
    dataSource = new HikariDataSource();
    dataSource.setJdbcUrl("jdbc:h2:mem:deletetest;DB_CLOSE_DELAY=-1");
    dataSource.setUsername("sa");
    dataSource.setPassword("");

    JdbcTemplate jdbc = new JdbcTemplate(dataSource);
    jdbc.execute("CREATE TABLE TARGET_TABLE (ID INT PRIMARY KEY, NAME VARCHAR(50))");
}

@BeforeEach
void insertTestData() {
    JdbcTemplate jdbc = new JdbcTemplate(dataSource);
    jdbc.execute("DELETE FROM TARGET_TABLE");
    jdbc.execute("INSERT INTO TARGET_TABLE VALUES (1, 'a')");
    jdbc.execute("INSERT INTO TARGET_TABLE VALUES (2, 'b')");
    jdbc.execute("INSERT INTO TARGET_TABLE VALUES (3, 'c')");
}
```

建構 `SyncJobContext` 時使用真實 `DatabaseContext(dataSource, 100)`:
```java
DatabaseContext destContext = new DatabaseContext(dataSource, 100);
SyncJobContext context = new SyncJobContext(null, destContext, null, syncJob, summaryInfo);
```

## ⚠️ 注意事項

- `Execution` 是 record，需用真實 instance
- `syncJob.getSetting().deleteThreshold()` / `batchSize()` 需有值
- `execution.sql()` 是 SELECT 查詢，用來取得待刪除資料
- Mock `StepContribution` 和 `ChunkContext`（這兩個在 tasklet 中沒有被使用，所以 mock 或 null 即可）

## Test Cases

### 1. `execute_belowThreshold_completesSuccessfully`
表中 3 筆, threshold=10 → `RepeatStatus.FINISHED`

### 2. `execute_exceedsThreshold_throwsCustomJobExecutionException`
表中 3 筆, threshold=2 → `CustomJobExecutionException`

### 3. `execute_thresholdMinusOne_disablesCheck`
表中 3 筆, threshold=-1 → 正常執行（不檢查）

### 4. `execute_zeroRecords_completesSuccessfully`
清空表, threshold=10 → `RepeatStatus.FINISHED`
