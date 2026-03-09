# Phase 7-1: BatchInsertWriter

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.writer.BatchInsertWriter`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/writer/BatchInsertWriter.java`

## 策略: D. 輕量 Mock

> 委派 `JdbcBatchItemWriter`，mock writer 驗證委派和計數邏輯。

## 類別概述

實作 `ItemWriter<Map<String, Object>>`，委派給 `JdbcBatchItemWriter` 執行寫入。
建構時呼叫 `writer.afterPropertiesSet()`。
`write()` 後累加 `summaryInfo.inserted`。

## 類別原始碼

```java
public class BatchInsertWriter implements ItemWriter<Map<String, Object>> {
    private final JdbcBatchItemWriter<Map<String, Object>> writer;
    private final String destTable;
    private final SummaryInfo summaryInfo;

    public BatchInsertWriter(JdbcBatchItemWriter<Map<String, Object>> writer, String destTable, SummaryInfo summaryInfo) {
        writer.afterPropertiesSet();
        this.writer = writer;
        this.destTable = destTable;
        this.summaryInfo = summaryInfo;
    }

    @Override
    public void write(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        writer.write(chunk);
        summaryInfo.inserted.addAndGet(chunk.size());
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/writer/BatchInsertWriterTest.java`

## Mock 策略

- `@Mock JdbcBatchItemWriter<Map<String, Object>> mockWriter`
- 使用 **真實 `SummaryInfo`**

⚠️ 建構子呼叫 `writer.afterPropertiesSet()`，mock 的 `mockWriter` 呼叫 `afterPropertiesSet()` 預設不做事，所以安全。

## Test Cases

### 1. `write_delegatesToInternalWriter`
建立含 2 筆資料的 Chunk → 呼叫 `batchInsertWriter.write(chunk)` → `verify(mockWriter).write(chunk)` 被呼叫 1 次

### 2. `write_updatesInsertedCount`
chunk size = 3 → `summaryInfo.inserted.get()` == 3

### 3. `write_multipleChunks_accumulatesCount`
第一次 write chunk(2) → inserted=2
第二次 write chunk(5) → inserted=7
