# Backend Context

## 專案結構

```
backend/src/main/java/irispipe/
├── IrisPipeApplication.java
├── api/                          REST 控制器
│   ├── PipelineFolderAPI.java
│   ├── SyncConfigAPI.java        Pipeline 配置 CRUD
│   ├── SyncPipelineAPI.java      Pipeline 執行控制
│   ├── TestSupportAPI.java
│   ├── WorkspaceAPI.java
│   └── validation/
├── batch/                        Spring Batch 整合
│   ├── builder/BatchBeanBuilder.java
│   ├── listener/
│   │   ├── CustomJobListener.java   ← 生命週期 Hook 入口
│   │   └── ExecutionStepListener.java
│   ├── strategy/                 INSERT/UPDATE/UPSERT/DELETE/EXECUTE
│   ├── tasklet/
│   └── writer/
├── core/                         核心領域服務
│   └── service/
│       ├── PipelineExecutionService.java  ← 執行外觀
│       ├── PipelineRunLaunchService.java  ← Stage 編排 + Batch 橋接
│       ├── PipelineRunCommandService.java
│       └── PipelineRunQueryService.java
├── infrastructure/               基礎設施層
│   ├── entity/
│   │   ├── config/              Pipeline 配置實體
│   │   └── runtime/             執行時實體（Run/Execution/Job/Snapshot）
│   ├── repo/                    JPA Repositories
│   └── service/
│       ├── config/              配置 CRUD 服務
│       ├── folder/              資料夾樹服務
│       ├── runtime/
│       │   ├── PipelineRunLifecycleService.java  ← SSE Hook 位置
│       │   ├── PipelineRunObservationService.java
│       │   ├── PipelineRunProjectionService.java
│       │   ├── PipelineRunSnapshotService.java
│       │   └── PipelineRunStatusPolicy.java
│       └── workspace/
├── model/                        領域模型（DTO / Value Object）
│   ├── SyncJobDefinition.java
│   ├── ExecutionStep.java
│   ├── PipelineRunStatus.java    ← 狀態機列舉
│   └── AtomicLevel.java
└── observability/
    ├── PipelineMetricsPublisher.java
    ├── PipelineMetricNames.java
    └── event/
        ├── PipelineRunTriggeredObservationEvent.java
        ├── PipelineExecutionObservationEvent.java
        └── PipelineJobObservationEvent.java
```

## 現有 REST API

### SyncPipelineAPI（執行控制）
```
POST   /api/v1/sync-pipeline                    → 新建執行（execute）
POST   /api/v1/sync-pipeline/{runId}/resume     → Resume
POST   /api/v1/sync-pipeline/{runId}/rerun      → Rerun
POST   /api/v1/sync-pipeline/{runId}/stop       → Stop
DELETE /api/v1/sync-pipeline/{runId}            → 刪除 Run
GET    /api/v1/sync-pipeline/{runId}            → Run 詳情（含 Attempt 時間線）
GET    /api/v1/sync-pipeline?pipelineId=...     → Pipeline Run 歷史
GET    /api/v1/sync-pipeline/recent             → 近期所有 Runs
```

### SyncConfigAPI（配置 CRUD）
```
GET    /api/v1/sync-config/{id}                 → 配置詳情
POST   /api/v1/sync-config                      → 新建配置
PUT    /api/v1/sync-config/{id}                 → 更新配置
DELETE /api/v1/sync-config/{id}                 → 刪除配置
POST   /api/v1/sync-config/import               → 匯入（YAML/JSON）
PUT    /api/v1/sync-config/{id}/import          → 匯入並覆蓋
```

### PipelineFolderAPI（資料夾）
```
GET    /api/v1/pipeline-tree                    → 完整樹狀結構
POST   /api/v1/pipeline-folders                 → 新建資料夾
PUT    /api/v1/pipeline-folders/{id}            → 重命名
GET    /api/v1/pipeline-folders/{id}/delete-preview → 刪除預覽
DELETE /api/v1/pipeline-folders/{id}            → 刪除
```

### WorkspaceAPI
```
GET    /api/v1/workspaces                       → 列出 Workspace
POST   /api/v1/workspaces                       → 新建 Workspace
```

### Actuator
```
GET    /actuator/health
GET    /actuator/metrics
GET    /actuator/prometheus
```

## 重要：CustomJobListener 是 SSE 最乾淨的接入點

```java
// CustomJobListener.java
@Override
public void beforeJob(JobExecution jobExecution) {
    // 這裡呼叫 markJobStarted()
    // → 在此注入 SseEventBroadcaster.emitJobStarted()
}

@Override
public void afterJob(JobExecution jobExecution) {
    // 這裡呼叫 markJobFinished()
    // → 在此注入 SseEventBroadcaster.emitJobFinished()
}
```

或更細粒度：直接在 `PipelineRunLifecycleService` 的各 mark*() 方法內注入。

## application.yaml 關鍵配置

```yaml
spring:
  application:
    name: IrisPipe
  threads:
    virtual:
      enabled: true              # Java 21 虛擬線程，SSE 連接幾乎零成本
  datasource:
    url: jdbc:h2:./h2data/data;AUTO_SERVER=TRUE;DB_CLOSE_DELAY=-1
    username: sa
    password: sa
  batch:
    job:
      enabled: false             # 不自動啟動 Batch Job

management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus
```

## pom.xml 重要依賴（無 WebFlux/WebSocket）

- `spring-boot-starter-web`（Spring MVC，支援 SseEmitter）
- `spring-boot-starter-batch`
- `spring-boot-starter-data-jpa`
- `spring-boot-starter-actuator`
- `micrometer-registry-prometheus`
- `springdoc-openapi-starter-webmvc-ui:2.1.0`
- `h2`（runtime）
- `lombok`
- `commons-io:2.21.0`

**沒有 WebFlux、沒有 WebSocket 依賴** → SSE 用 `SseEmitter`（Spring MVC 原生），不需加新依賴。

## 資料庫遷移版本

| Flyway 版本 | 內容 |
|------------|------|
| V1 | Spring Batch 中繼資料表 |
| V2 | WatermarkRecord 表 |
| V3 | 核心架構（workspace、folder、config、runtime） |
| V4 | Stage 支援（stage_name, stage_sequence_order） |

## 待新增 API（各 Phase 規格見對應文件）

| Phase | 新增 API |
|-------|---------|
| 1 | `GET /api/v1/events/runs`（全局 SSE stream） |
| 1 | `GET /api/v1/events/runs/{runId}`（單 Run SSE stream） |
| 2 | `GET /api/v1/overview/summary`（Overview 聚合資料） |
| 3 | `POST /api/v1/connections/test`（測試 DB 連線） |
| 3 | `GET /api/v1/connections/drivers`（Driver 預設清單） |
| 4 | `GET /api/v1/runs/{runId}/logs`（Step 執行 log） |
