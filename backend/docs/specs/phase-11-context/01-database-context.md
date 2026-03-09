# Phase 11-1: DatabaseContext

## 受測類別

- **Class**: `custom.tibame201020.IrisPipe.context.DatabaseContext`
- **Source**: `src/main/java/custom/tibame201020/IrisPipe/context/DatabaseContext.java`

## 策略: A. 純邏輯測試

> 建構子只做欄位初始化，`close()` 只做型別判斷後關閉。
> 可用 H2 DataSource 作為真實物件來建構，不需 Mockito。

## 類別概述

封裝 `DataSource` + `JdbcTemplate` + `NamedParameterJdbcTemplate` + `TransactionManager`。
`close()` 對 `HikariDataSource` 類型做關閉。

## 測試檔案

- **Path**: `src/test/java/custom/tibame201020/IrisPipe/context/DatabaseContextTest.java`

## 測試方式

```java
// 使用真實的 HikariDataSource
HikariDataSource ds = new HikariDataSource();
ds.setJdbcUrl("jdbc:h2:mem:contexttest");
ds.setUsername("sa");
ds.setPassword("");

DatabaseContext context = new DatabaseContext(ds, 100);
```

## Test Cases

### 1. `constructor_initializesAllFields`
建構後 `getJdbcTemplate()`, `getNamedParameterJdbcTemplate()`, `getTransactionManager()` 均非 null

### 2. `close_hikariDataSource_closesPool`
建構後呼叫 `close()` → `ds.isClosed()` == true

### 3. `close_nonHikariDataSource_doesNotThrow`
使用 `SimpleDriverDataSource`（非 Hikari）→ `close()` 不拋例外

### 4. `getDataSource_returnsSameInstance`
`getDataSource()` 回傳建構時傳入的同一個 DataSource
