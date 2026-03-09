# Phase 7-2: BatchUpdateWriter

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.batch.writer.BatchUpdateWriter`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/batch/writer/BatchUpdateWriter.java`

## 策略: A. 純邏輯測試

> `processUpdateCounts(int[])` 是純計數邏輯，不涉及 I/O，**不需要 Mockito**。

## 類別概述

繼承 `JdbcBatchItemWriter`，重寫 `processUpdateCounts()` 追蹤更新筆數。
核心測試點只在這個 protected 方法的計數邏輯。

## 重點方法

```java
@Override
protected void processUpdateCounts(int[] updateCounts) {
    summaryInfo.processed.addAndGet(updateCounts.length);
    long affectedRows = Arrays.stream(updateCounts).filter(count -> count != 0).count();
    summaryInfo.updated.addAndGet(affectedRows);
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/batch/writer/BatchUpdateWriterTest.java`

## 測試方式

建立一個 test subclass 來曝露 `processUpdateCounts()`：

```java
// 測試用子類別，僅為了曝露 protected 方法
class TestableBatchUpdateWriter extends BatchUpdateWriter {
    TestableBatchUpdateWriter(SummaryInfo summaryInfo) {
        // 傳入最小化的參數
        super("TEST_TABLE", summaryInfo, mockDataSource, "UPDATE TEST_TABLE SET col = ? WHERE id = ?");
    }

    public void testProcessUpdateCounts(int[] counts) {
        processUpdateCounts(counts);
    }
}
```

或使用 **同 package 測試**（測試類別放同一 package），即可直接呼叫 protected 方法。

## Test Cases

### 1. `processUpdateCounts_allUpdated_countsCorrectly`
`[1, 1, 1]` → `processed=3, updated=3`

### 2. `processUpdateCounts_someNotUpdated_countsCorrectly`
`[1, 0, 1]` → `processed=3, updated=2`

### 3. `processUpdateCounts_noneUpdated_countsCorrectly`
`[0, 0, 0]` → `processed=3, updated=0`

### 4. `processUpdateCounts_emptyArray_countsZero`
`[]` → `processed=0, updated=0`
