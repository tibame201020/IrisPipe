# Phase 1-1: SummaryInfo

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.data.SummaryInfo`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/data/SummaryInfo.java`

## 策略: A. 純邏輯測試

> 純 POJO，不涉及 I/O，**不需要 Mockito**。使用 JUnit 5 + AssertJ only。

## 類別概述

使用 `AtomicLong` 追蹤 Job/Step 執行期間的計數摘要。
包含 `processed`、`inserted`、`updated`、`deleted`、`total` 五個計數器。
建構時需提供 `name`（名稱）和 `layer`（`SummaryInfoLayer.JOB` 或 `STEP`）。

## 類別原始碼

```java
@Data
public class SummaryInfo {
    public final String name;
    public final SimpleEnum.SummaryInfoLayer layer;
    public final AtomicLong processed = new AtomicLong(0);
    public final AtomicLong inserted = new AtomicLong(0);
    public final AtomicLong updated = new AtomicLong(0);
    public final AtomicLong deleted = new AtomicLong(0);
    public final AtomicLong total = new AtomicLong(0);

    public SummaryInfo(String name, SimpleEnum.SummaryInfoLayer layer) {
        this.name = name;
        this.layer = layer;
    }
}
```

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/data/SummaryInfoTest.java`

## 相依

- `SimpleEnum.SummaryInfoLayer`（列舉值，可直接使用）

## Mock 策略

無需 mock，純 POJO 測試。

## Test Cases

### 1. `constructor_shouldInitializeAllCountersToZero`

**行為**: 建構 `SummaryInfo` 後，所有 5 個 AtomicLong 計數器應為 0。

```java
SummaryInfo info = new SummaryInfo("test", SimpleEnum.SummaryInfoLayer.STEP);
assertEquals(0, info.processed.get());
assertEquals(0, info.inserted.get());
assertEquals(0, info.updated.get());
assertEquals(0, info.deleted.get());
assertEquals(0, info.total.get());
```

### 2. `constructor_shouldSetNameAndLayer`

**行為**: 驗證 `name` 和 `layer` 被正確設定。

```java
SummaryInfo info = new SummaryInfo("myJob", SimpleEnum.SummaryInfoLayer.JOB);
assertEquals("myJob", info.name);
assertEquals(SimpleEnum.SummaryInfoLayer.JOB, info.layer);
```

### 3. `atomicCounters_shouldSupportConcurrentUpdates`

**行為**: 多執行緒同時對 `processed` 做 `addAndGet`，最終值應等於各執行緒貢獻總和。

```java
SummaryInfo info = new SummaryInfo("test", SimpleEnum.SummaryInfoLayer.STEP);
int threads = 10;
int incrementsPerThread = 1000;
ExecutorService executor = Executors.newFixedThreadPool(threads);

for (int i = 0; i < threads; i++) {
    executor.submit(() -> {
        for (int j = 0; j < incrementsPerThread; j++) {
            info.processed.addAndGet(1);
        }
    });
}

executor.shutdown();
executor.awaitTermination(5, TimeUnit.SECONDS);
assertEquals(threads * incrementsPerThread, info.processed.get());
```
