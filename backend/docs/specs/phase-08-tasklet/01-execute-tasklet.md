# Phase 8-1: ExecuteTasklet

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.tasklet.ExecuteTasklet`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/tasklet/ExecuteTasklet.java`

## 策略: C. 嵌入式 DB (H2)

> `ExecuteTasklet` 在 `TransactionTemplate` 內呼叫 `NamedParameterJdbcTemplate.execute()`。
> 用 H2 建表後直接執行比 mock TransactionTemplate + JDBC 簡單得多。

## 類別概述

通用 SQL 執行 Tasklet，在交易內執行指定的 SQL。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/tasklet/ExecuteTaskletTest.java`

## H2 設定

```java
private static HikariDataSource dataSource;

@BeforeAll
static void setupDatabase() {
    dataSource = new HikariDataSource();
    dataSource.setJdbcUrl("jdbc:h2:mem:executetest;DB_CLOSE_DELAY=-1");
    dataSource.setUsername("sa");
    dataSource.setPassword("");

    JdbcTemplate jdbc = new JdbcTemplate(dataSource);
    jdbc.execute("CREATE TABLE EXEC_TABLE (ID INT PRIMARY KEY, STATUS VARCHAR(20))");
    jdbc.execute("INSERT INTO EXEC_TABLE VALUES (1, 'ACTIVE')");
}
```

使用真實 `DatabaseContext`:
```java
DatabaseContext destContext = new DatabaseContext(dataSource, 100);
SyncJobContext context = new SyncJobContext(null, destContext, null, syncJob, summaryInfo);
```

## Test Cases

### 1. `execute_validSql_returnsFinished`
SQL: `UPDATE EXEC_TABLE SET STATUS = 'DONE' WHERE ID = 1` → `RepeatStatus.FINISHED`，驗證資料實際被更新

### 2. `execute_withParameters_appliesCorrectly`
SQL: `UPDATE EXEC_TABLE SET STATUS = :status WHERE ID = :id`，parameters: `[status=DONE, id=1]` → 驗證 STATUS 變為 DONE

### 3. `execute_noParameters_executesSuccessfully`
SQL: `UPDATE EXEC_TABLE SET STATUS = 'RESET'`（無 named params）→ 正常執行
