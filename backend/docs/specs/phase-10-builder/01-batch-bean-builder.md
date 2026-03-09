# Phase 10-1: BatchBeanBuilder

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.builder.BatchBeanBuilder`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/builder/BatchBeanBuilder.java`

## 策略: C. 嵌入式 DB (H2)

> `BatchBeanBuilder` 建立 `JdbcCursorItemReader` 和 `JdbcBatchItemWriter`，需要真實 DataSource。
> 用 H2 建表後直接呼叫 builder，驗證建出的 reader/writer 能正常運作。

## 類別概述

`@Component`，responsible for creating Spring Batch `JdbcCursorItemReader` and `JdbcBatchItemWriter`。
處理 named parameter 解析、PreparedStatementSetter 建構。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/builder/BatchBeanBuilderTest.java`

## H2 設定

```java
private static HikariDataSource dataSource;
private BatchBeanBuilder builder;

@BeforeAll
static void setupDatabase() {
    dataSource = new HikariDataSource();
    dataSource.setJdbcUrl("jdbc:h2:mem:buildertest;DB_CLOSE_DELAY=-1");
    dataSource.setUsername("sa");
    dataSource.setPassword("");

    JdbcTemplate jdbc = new JdbcTemplate(dataSource);
    jdbc.execute("CREATE TABLE BUILDER_TABLE (ID INT PRIMARY KEY, NAME VARCHAR(50), STATUS VARCHAR(20))");
    jdbc.execute("INSERT INTO BUILDER_TABLE VALUES (1, 'Alice', 'ACTIVE')");
    jdbc.execute("INSERT INTO BUILDER_TABLE VALUES (2, 'Bob', 'INACTIVE')");
}

@BeforeEach
void setUp() {
    builder = new BatchBeanBuilder();
}
```

## Test Cases

### 1. `creatJdbcCursorItemReader_noParams_buildsAndReadsData`
SQL: `SELECT * FROM BUILDER_TABLE` → reader 建立成功，`reader.open(...)` + `reader.read()` 回傳資料

### 2. `creatJdbcCursorItemReader_withParams_filtersCorrectly`
SQL: `SELECT * FROM BUILDER_TABLE WHERE STATUS = :status`，params: `[status=ACTIVE]` → 只讀到 1 筆

### 3. `creatJdbcCursorItemReader_readerNameContainsPrefix`
驗證 reader name 以 `"reader-"` 開頭

### 4. `createJdbcBatchItemWriter_buildsSuccessfully`
SQL: `INSERT INTO BUILDER_TABLE VALUES (:ID, :NAME, :STATUS)` → writer 不為 null

### 5. `createJdbcBatchItemWriter_writesDataCorrectly`
實際用 writer 寫入一筆資料 → 查表驗證資料存在
