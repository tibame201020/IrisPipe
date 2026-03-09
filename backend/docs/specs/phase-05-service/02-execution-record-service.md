# Phase 5-2: ExecutionRecordService

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.service.ExecutionRecordService`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/service/ExecutionRecordService.java`

## 策略: C. 嵌入式 DB (H2)

> 此服務直接操作 `NamedParameterJdbcTemplate`，用 H2 建真實表比 mock JDBC 更簡單、更能驗證實際 SQL 正確性。

## 類別概述

Watermark CRUD 服務。`fetchValue()` 讀取歷史紀錄、`saveWatermark()` 新增或更新紀錄。
內含 3 個 private SQL 產生方法。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/service/ExecutionRecordServiceTest.java`

## H2 設定

```java
private static HikariDataSource dataSource;
private static NamedParameterJdbcTemplate jdbcTemplate;
private ExecutionRecordService service;

@BeforeAll
static void setupDatabase() {
    dataSource = new HikariDataSource();
    dataSource.setJdbcUrl("jdbc:h2:mem:recordtest;DB_CLOSE_DELAY=-1");
    dataSource.setUsername("sa");
    dataSource.setPassword("");
    jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);

    JdbcTemplate jdbc = new JdbcTemplate(dataSource);
    jdbc.execute("""
        CREATE TABLE sync_record (
            execution_name VARCHAR(100),
            table_name VARCHAR(100),
            watermark_column VARCHAR(100),
            last_value VARCHAR(255),
            last_start_time TIMESTAMP,
            last_end_time TIMESTAMP,
            last_update_time TIMESTAMP,
            PRIMARY KEY (execution_name, table_name, watermark_column)
        )
    """);
}

@BeforeEach
void setUp() {
    service = new ExecutionRecordService();
    // 清除資料
    new JdbcTemplate(dataSource).execute("DELETE FROM sync_record");
}

@AfterAll
static void tearDown() {
    dataSource.close();
}
```

## Test Cases

### 1. `fetchValue_existingRecord_LAST_WATERMARK_returnsLastValue`
先 INSERT 一筆紀錄 → `fetchValue(..., _LAST_WATERMARK)` 回傳 `last_value` 欄位值

### 2. `fetchValue_existingRecord_LAST_START_returnsTimestamp`
→ 回傳 `last_start_time`

### 3. `fetchValue_existingRecord_LAST_END_returnsTimestamp`
→ 回傳 `last_end_time`

### 4. `fetchValue_existingRecord_LAST_UPDATE_returnsTimestamp`
→ 回傳 `last_update_time`

### 5. `fetchValue_noRecord_returnsNull`
不 INSERT → 回傳 null

### 6. `saveWatermark_newRecord_insertsRow`
首次呼叫 → 查詢確認新增一筆

### 7. `saveWatermark_existingRecord_updatesRow`
先 saveWatermark → 再 saveWatermark → 查詢確認只有一筆且值已更新

### 8. `saveWatermark_passesAllFieldsCorrectly`
驗證寫入的 7 個欄位值都正確
