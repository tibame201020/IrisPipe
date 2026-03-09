# Phase 11-2: SyncJobContext

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.context.SyncJobContext`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/context/SyncJobContext.java`

## 策略: A. 純邏輯測試

> `SyncJobContext` 是 Java record，`close()` 只做 null 檢查後呼叫子 context 的 close()。
> 可用真實 `DatabaseContext`（H2）來測試，不需 Mockito。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/context/SyncJobContextTest.java`

## 測試方式

```java
HikariDataSource ds1 = new HikariDataSource();
ds1.setJdbcUrl("jdbc:h2:mem:source");
ds1.setUsername("sa");

HikariDataSource ds2 = new HikariDataSource();
ds2.setJdbcUrl("jdbc:h2:mem:dest");
ds2.setUsername("sa");

DatabaseContext source = new DatabaseContext(ds1, 100);
DatabaseContext dest = new DatabaseContext(ds2, 100);
SyncJobContext context = new SyncJobContext(source, dest, null, syncJob, summaryInfo);
```

## Test Cases

### 1. `close_closesSourceAndDestContexts`
呼叫 `close()` → `ds1.isClosed()` && `ds2.isClosed()` == true

### 2. `close_nullSourceContext_noException`
`new SyncJobContext(null, dest, null, ...)` → `close()` 不拋例外

### 3. `close_nullDestContext_noException`
`new SyncJobContext(source, null, null, ...)` → `close()` 不拋例外
