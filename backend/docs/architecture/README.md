# IrisPipe Backend — Architecture Documentation

> A Spring Batch-based **data synchronization pipeline** that reads from a source database
> and writes (INSERT / UPDATE / UPSERT / DELETE / EXECUTE) to a destination database.
> Jobs are defined declaratively via JSON or YAML configuration files.

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Spring Boot 3.x + Spring Batch 5.x |
| Database Access | Spring JDBC (`JdbcTemplate`, `NamedParameterJdbcTemplate`) |
| Connection Pool | HikariCP |
| Build Tool | Maven |
| Java Version | 21+ (record, switch expression, text block) |
| Serialization | Jackson (JSON + YAML via `YAMLFactory`) |
| Metadata ORM | Spring Data JPA (僅供 Spring Batch metadata) |
| Code Generation | Lombok (`@Data`, `@Getter`) |

## Package Structure

```
custom.tibame201020.IrisPipe
├── IrisPipeApplication.java          # Spring Boot entry point
│
├── batch/                            # Spring Batch 核心元件
│   ├── builder/
│   │   └── BatchBeanBuilder.java     # 組裝 Reader / Writer 的 Builder
│   ├── config/
│   │   └── BatchConfig.java          # 非同步 JobLauncher + ThreadPool
│   ├── entity/                       # Spring Batch metadata JPA entities (7 files)
│   ├── repo/                         # Spring Batch metadata JPA repos (6 files)
│   ├── listener/
│   │   ├── CustomJobListener.java    # Job listener（原子交易 + 摘要輸出）
│   │   └── ExecutionStepListener.java # Step listener（watermark 寫回 + readCount）
│   ├── tasklet/
│   │   ├── DeleteTasklet.java        # 刪除 Tasklet（含 threshold 保護）
│   │   └── ExecuteTasklet.java       # 通用 SQL 執行 Tasklet
│   └── writer/
│       ├── BatchInsertWriter.java    # INSERT 委派 + 計數
│       ├── BatchUpdateWriter.java    # UPDATE (extends JdbcBatchItemWriter) + updateCounts 追蹤
│       └── BatchUpsertWriter.java    # UPSERT = 先查主鍵 → 分流 insert/update
│
├── config/
│   └── BeanConfig.java               # ObjectMapper (JSON + YAML) Bean
│
├── context/
│   ├── DatabaseContext.java           # DataSource + JdbcTemplate + TxManager 封裝 (AutoCloseable)
│   └── SyncJobContext.java            # record: source/dest/record 三組 DatabaseContext + SyncJob + SummaryInfo
│
├── data/
│   ├── BatchJobExecutionRecord.java   # Watermark 紀錄 POJO
│   ├── SimpleEnum.java                # GeneralStatus / SystemProvideVariable / SummaryInfoLayer
│   ├── SummaryInfo.java               # AtomicLong 計數器群組
│   ├── SyncJob.java                   # Job 定義 POJO (含 validate())
│   └── SyncJobProp.java               # ExecutionType / Setting / Database / ConnectionInfo / Parameter / Execution / SupportType
│
├── error/
│   ├── exception/
│   │   ├── ConfigFileException.java
│   │   ├── ConfigValidationException.java
│   │   ├── CustomJobExecutionException.java
│   │   └── General.java               # GeneralException + GeneralExceptionResponse
│   └── handler/
│       └── GlobalExceptionHandler.java # @RestControllerAdvice
│
├── factory/
│   ├── SyncJobContextFactory.java     # 建立 DatabaseContext + 渲染系統變數 → SyncJobContext
│   └── SyncJobFactory.java            # ExecutionType → Spring Batch Job/Step 組裝
│
├── provider/
│   ├── FileProvider.java              # 介面
│   ├── JsonFileProvider.java          # JSON 實作
│   └── YamlFileProvider.java          # YAML 實作
│
├── service/
│   ├── ExecutionRecordService.java    # Watermark CRUD (fetchValue / saveWatermark)
│   ├── JobConfigService.java          # 設定檔 → List<SyncJob>
│   └── JobExecutionService.java       # 驗證 → context → job → launch
│
└── utility/
    ├── CollectionHelper.java          # flatternArray 遞迴攤平
    └── SqlSyntaxHelper.java           # DatabaseMetaData → INSERT/UPDATE/DELETE/EXISTS SQL
```

## Component Details

各元件細節請參閱下列文件：

| Document | Content |
|---|---|
| [core-flow.md](./core-flow.md) | Job 執行管線完整流程圖 |
| [design-patterns.md](./design-patterns.md) | 5 大設計模式深度解析 |
| [config-model.md](./config-model.md) | SyncJobProp 設定模型規格 |
| [error-handling.md](./error-handling.md) | 例外類別層級 + HTTP 回應映射 |
