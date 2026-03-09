# Phase 7-3: BatchUpsertWriter

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.writer.BatchUpsertWriter`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/writer/BatchUpsertWriter.java`

## 策略: C+D (H2 for SqlSyntaxHelper + Mock for insert/update writers)

> SqlSyntaxHelper 用 H2 建表取 metadata，insert/update writer 用 mock 驗證委派邏輯。

## 類別概述

UPSERT 策略 writer。先透過 `queryIdentifierList()` 查詢 chunk 中哪些主鍵已存在於目標表，再依據結果分流到 insert 或 update writer。

核心方法:
- `write(chunk)` — 公開入口
- `queryIdentifierList(chunk)` — 查詢已存在的主鍵
- `insertChunk(items)` / `updateChunk(items)` — 分別呼叫 insert/update writer
- `generateCompositePkIdentifier(item, primaryKeys)` — 組合主鍵識別字串

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/writer/BatchUpsertWriterTest.java`

## Mock 策略

- `@Mock JdbcBatchItemWriter<Map<String, Object>> insertWriter`
- `@Mock JdbcBatchItemWriter<Map<String, Object>> updateWriter`
- `@Mock JdbcTemplate queryTemplate`
- **SqlSyntaxHelper**: mock (因為建構子需 JDBC Connection)，使用 `ReflectionTestUtils.setField()` 設定 `primaryColumns`

⚠️ **關鍵注意事項**:
1. 建構子呼叫 `insertWriter.afterPropertiesSet()` 和 `updateWriter.afterPropertiesSet()`
2. `queryTemplate.query(sql, rowMapper, params.toArray())` 的 `toArray()` 回傳 `Object[]`，mock 時需用 `Mockito.any(Object[].class)` 或 `doReturn(...).when(queryTemplate).query(anyString(), any(RowMapper.class), any())`
3. `sqlSyntaxHelper` 的 fields（`primaryColumns`）需用 `ReflectionTestUtils` 注入

## Test Cases

### 1. `write_allExist_callsUpdateWriterOnly`
chunk 3 筆，queryIdentifierList 回傳 3 個 identifier → `updateWriter.write()` 1 次，`insertWriter.write()` 0 次

### 2. `write_noneExist_callsInsertWriterOnly`
chunk 3 筆，queryIdentifierList 回傳空 list → `insertWriter.write()` 1 次，`updateWriter.write()` 0 次

### 3. `write_mixed_callsBothWriters`
chunk 3 筆，queryIdentifierList 回傳 1 個 identifier → 兩者各 1 次

### 4. `write_allExist_updatesProcessedAndUpdatedCounts`
`summaryInfo.processed` 和 `summaryInfo.updated` 正確

### 5. `write_noneExist_updatesProcessedAndInsertedCounts`
`summaryInfo.processed` 和 `summaryInfo.inserted` 正確

### 6. `write_mixed_updatesAllCountsCorrectly`
processed / updated / inserted 依比例正確

### 7. `write_emptyChunk_noWriterCalled`
空 chunk → 兩者都不被呼叫
