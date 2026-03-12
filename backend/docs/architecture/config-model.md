# Configuration Model

## Root object

Each config file resolves to a `List<SyncJobDefinition>`.

```java
@Data
public class SyncJobDefinition {
    String jobName;
    List<ExecutionStep> executions;
    JobSetting setting;
    DatabaseConfig database;
}
```

## Setting

```java
record JobSetting(
    Integer fetchSize,
    Integer batchSize,
    Integer deleteThreshold,
    AtomicLevel atomicLevel
) {}
```

Notes:

- `fetchSize` is required for `INSERT`, `UPDATE`, and `UPSERT`.
- `batchSize` is required for `INSERT`, `UPDATE`, `UPSERT`, and `DELETE`.
- `deleteThreshold` is used only by `DELETE`.
- `atomicLevel` is required by validation and must be either `JOB` or `CHUNK`.
- The current runtime still behaves like job-scoped orchestration even when `atomicLevel` is set to `CHUNK`.

## Database

```java
record DatabaseConfig(
    ConnectionInfo source,
    ConnectionInfo dest
) {}
```

```java
record ConnectionInfo(
    String driver,
    String url,
    String username,
    String password
) {}
```

All four connection fields are required when the corresponding database is needed by the execution type.

## Execution

```java
record ExecutionStep(
    ExecutionType type,
    String name,
    String sql,
    String destTable,
    List<JobParameter> parameters,
    String watermarkColumn,
    SummaryInfo summaryInfo,
    Map<String, Object> executionContext
) {}
```

Validation rules:

- `sql` must not be blank.
- Every named SQL parameter must appear in `parameters`.
- `destTable` is required for `INSERT`, `UPDATE`, `UPSERT`, and `DELETE`.
- `watermarkColumn` is optional.

Important runtime detail:

- `watermarkColumn` must match the column label returned by the JDBC reader.
- In the local H2-based K6 fixtures, that means using `UPDATE_TIME` instead of `update_time`.

## Parameters

```java
record JobParameter(
    String param,
    Object value,
    SupportType type
) {}
```

`SupportType` currently supports:

- `general`
- `timestamp`

`timestamp` values are converted with `Timestamp.valueOf(...)`.

## Execution types

| Type | Source DB | Dest DB | Notes |
| --- | --- | --- | --- |
| `INSERT` | required | required | chunk reader plus insert writer |
| `UPDATE` | required | required | chunk reader plus custom update writer |
| `UPSERT` | required | required | chunk reader plus mixed insert and update writer |
| `DELETE` | not used | required | tasklet with delete threshold guard |
| `EXECUTE` | not used | required | tasklet for arbitrary destination SQL |

## Example YAML

```yaml
- jobName: example_job
  executions:
    - type: INSERT
      name: load_orders
      sql: select * from source_orders where update_time > :_LAST_UPDATE order by update_time asc
      destTable: target_orders
      watermarkColumn: UPDATE_TIME
      parameters:
        - param: _LAST_UPDATE
          type: timestamp
          value: "1970-01-01 00:00:00"
  setting:
    fetchSize: 100
    batchSize: 100
    deleteThreshold: -1
    atomicLevel: JOB
  database:
    source:
      driver: org.h2.Driver
      url: jdbc:h2:./h2data/data
      username: sa
      password: "sa"
    dest:
      driver: org.h2.Driver
      url: jdbc:h2:./h2data/data
      username: sa
      password: "sa"
```

## Removed legacy fields

The current config model does not include:

- `recordTable`
- `database.record`

Watermarks are stored internally through `ExecutionRecordService` and `iris_watermark_record`.
