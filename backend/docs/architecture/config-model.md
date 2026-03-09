# Configuration Model — SyncJobProp

## 概覽

IrisPipe 的 Job 定義完全透過設定檔（JSON 或 YAML）驅動。
`SyncJobProp` 是所有設定相關型別的容器介面。

---

## SyncJob (Root Object)

```java
@Data
public class SyncJob {
    String jobName;                          // 必要，不可為 blank
    List<SyncJobProp.Execution> executions;  // 必要，至少一個
    SyncJobProp.Setting setting;             // 依 ExecutionType 而定
    SyncJobProp.Database database;           // 依 ExecutionType 而定
}
```

### validate() 行為

1. `jobName` blank → `ConfigValidationException("", "", "jobName can not be blank")`
2. 每個 `execution.validate(setting, database)`:
   - 成功 → 繼續
   - 失敗 → `ConfigValidationException(jobName, executionName, e.getMessage())`
   - `executionName` 為 blank 時使用 `"on type " + execution.type()`

---

## Setting (record)

```java
record Setting(
    Integer fetchSize,       // Reader 的 JDBC fetch size
    Integer batchSize,       // Writer 的 batch commit size
    Integer deleteThreshold, // Delete 保護閾值 (-1 = 不限制)
    String recordTable       // Watermark 紀錄表名稱
) {}
```

---

## Database (record)

```java
record Database(
    ConnectionInfo source,  // 來源資料庫
    ConnectionInfo dest,    // 目標資料庫
    ConnectionInfo record   // Watermark 紀錄資料庫 (可選)
) {}
```

## ConnectionInfo (record)

```java
record ConnectionInfo(
    String driver,    // JDBC driver class name
    String url,       // JDBC URL
    String username,
    String password
) {
    public void validate() {
        // 全部欄位不可為 blank
    }
}
```

---

## Execution (record)

```java
record Execution(
    ExecutionType type,              // INSERT / UPDATE / UPSERT / DELETE / EXECUTE
    String name,                     // 執行名稱 (可選)
    String sql,                      // 查詢 SQL / 刪除 SQL / 執行 SQL
    String destTable,                // 目標表名
    List<Parameter> parameters,      // SQL 參數
    String watermarkColumn,          // watermark 欄位 (可選)
    SummaryInfo summaryInfo,         // 執行摘要 (由 Factory 注入，設定檔不填)
    Map<String, Object> executionContext  // 執行期上下文 (由 Factory 注入)
) {}
```

### parameters() 方法

```java
public List<Parameter> parameters() {
    if (null == parameters) {
        return new ArrayList<>();  // null-safe
    }
    return parameters;
}
```

### validate() 方法

1. `sql` blank → `IllegalArgumentException`
2. 解析 SQL 中的 named parameters，若 parameters 列表缺少對應值 → `IllegalArgumentException("lost parameter config: xxx")`
3. 呼叫 `type.validate(setting, database, this)` → 依類型驗證

---

## ExecutionType (enum with validation)

每個列舉值都有自己的 `validate(setting, database, execution)` 實作：

### INSERT / UPDATE / UPSERT（驗證邏輯相同）

| 驗證項目 | 失敗訊息 |
|---|---|
| 有 `recordTable` 但 `database.record` 為 null | `database record must config` |
| 有 `recordTable` 時呼叫 `record.validate()` | (由 ConnectionInfo 拋出) |
| `execution.destTable` blank | `must config destTable` |
| `setting.fetchSize` null 或 0 | `setting fetchSize must config, and not allow zero` |
| `setting.batchSize` null 或 0 | `setting batchSize must config, and not allow zero` |
| `database.source` null | `database source must config` |
| 呼叫 `source.validate()` | (由 ConnectionInfo 拋出)  |
| `database.dest` null | `database source must config` ⚠️ (訊息有 typo，寫的是 source) |
| 呼叫 `dest.validate()` | (由 ConnectionInfo 拋出) |

### DELETE

| 驗證項目 | 失敗訊息 |
|---|---|
| `execution.destTable` blank | `must config destTable` |
| `setting.batchSize` null 或 0 | `setting batchSize must config, and not allow zero` |
| `database.dest` null | `database source must config` |
| 呼叫 `dest.validate()` | (由 ConnectionInfo 拋出) |

### EXECUTE

| 驗證項目 | 失敗訊息 |
|---|---|
| `database.dest` null | `database source must config` |
| 呼叫 `dest.validate()` | (由 ConnectionInfo 拋出) |

---

## Parameter (record)

```java
record Parameter(
    String param,        // 參數名稱
    Object value,        // 參數值
    SupportType type     // 型別轉換策略 (可選，預設 general)
) {
    public Object getRenderedValue() {
        if (null == type) {
            return SupportType.general.renderClass(value);
        }
        return type.renderClass(value);
    }
}
```

---

## SupportType (enum)

```java
enum SupportType {
    general {
        public Object renderClass(Object val) {
            return val;  // 原值回傳
        }
    },
    timestamp {
        public Object renderClass(Object val) {
            return Timestamp.valueOf(val.toString());  // String → Timestamp
        }
    }
}
```

---

## 設定檔範例 (JSON)

```json
[
  {
    "jobName": "sync_users",
    "setting": {
      "fetchSize": 1000,
      "batchSize": 500,
      "deleteThreshold": -1,
      "recordTable": "sync_record"
    },
    "database": {
      "source": {
        "driver": "com.mysql.cj.jdbc.Driver",
        "url": "jdbc:mysql://source:3306/db",
        "username": "reader",
        "password": "pass"
      },
      "dest": {
        "driver": "org.postgresql.Driver",
        "url": "jdbc:postgresql://dest:5432/db",
        "username": "writer",
        "password": "pass"
      },
      "record": {
        "driver": "org.postgresql.Driver",
        "url": "jdbc:postgresql://dest:5432/db",
        "username": "writer",
        "password": "pass"
      }
    },
    "executions": [
      {
        "type": "UPSERT",
        "name": "sync_users_upsert",
        "sql": "SELECT * FROM users WHERE updated_at > :_LAST_WATERMARK",
        "destTable": "users",
        "watermarkColumn": "updated_at",
        "parameters": [
          {
            "param": "_LAST_WATERMARK",
            "value": "2000-01-01 00:00:00",
            "type": "timestamp"
          }
        ]
      }
    ]
  }
]
```
