# Phase 1-3: BatchJobExecutionRecord

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.data.BatchJobExecutionRecord`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/data/BatchJobExecutionRecord.java`

## 策略: A. 純邏輯測試

> Lombok `@Data` POJO，純 getter/setter，**不需要 Mockito**。

## 類別概述

Watermark 紀錄的 POJO，使用 Lombok `@Data`。

## 類別原始碼

```java
@Data
public class BatchJobExecutionRecord {
    private String executionName;
    private String tableName;
    private String watermarkColumn;
    private String lastValue;
    private Timestamp lastStartTime;
    private Timestamp lastEndTime;
    private Timestamp lastUpdateTime;
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/data/BatchJobExecutionRecordTest.java`

## Mock 策略

無需 mock。

## Test Cases

### 1. `setterGetter_shouldWorkCorrectly`
設定所有欄位後，getter 回傳相同值。

### 2. `defaultValues_shouldBeNull`
初始化後所有欄位為 null。
