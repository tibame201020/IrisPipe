# IrisPipe Product Overview

## 產品定位

**本地端資料同步 Pipeline 引擎 Console**

- 用途：管理 source → destination 資料同步任務，支援多 Stage 並行、Resume/Rerun/Stop
- 使用場景：Local development，開發者自用工具
- 開源目的：展示後端工程能力（系統設計面試作品）

## 技術棧

### Backend
| 項目 | 版本 / 細節 |
|------|------------|
| Framework | Spring Boot 3.5.11 |
| Java | 21（虛擬線程已啟用） |
| 批次引擎 | Spring Batch |
| ORM | Spring Data JPA + Flyway |
| 資料庫（本地） | H2 File（`./h2data/data`） |
| 監控 | Micrometer + Prometheus |
| API 文件 | SpringDoc OpenAPI（Swagger 3） |
| 通訊協定 | REST（目前）；計畫加入 SSE |

### Frontend
| 項目 | 版本 / 細節 |
|------|------------|
| Framework | React 19 |
| Build | Vite 8 |
| 樣式 | TailwindCSS 3 + DaisyUI 4 |
| 圖示 | Lucide React |
| HTTP | Axios |
| 圖表 | @xyflow/react（React Flow） |
| 拖拖放 | @dnd-kit |

## 核心後端概念（必讀）

### 執行模型三層結構
```
PipelineDefinition（配置，不變）
  └─ PipelineRun（邏輯運行，不可變 ID）
       ├─ PipelineRunSnapshot（配置快照，不可變）
       └─ PipelineRunExecution（每次嘗試，可多次）
            └─ PipelineRunExecutionJob（每個 Job 的執行狀態）
```

### 狀態機
```
PENDING → STARTING → STARTED → COMPLETED
                              → FAILED
                              → STOPPED（由 STOPPING 轉入）
                              → ABANDONED

Resume 專用：NOT_RUN / SKIPPED
```

### 三大操作語意
| 操作 | 行為 |
|------|------|
| Resume | 同一 Run，新 Execution 嘗試，跳過已完成 Job |
| Rerun | 從快照克隆，產生全新 Run（保留血緣 ID） |
| Stop | 協作式停止，未來 Stage 標記 NOT_RUN |

### 事務策略（AtomicLevel）
| 等級 | 行為 | 失敗策略 |
|------|------|---------|
| JOB | 整個 Job 一個事務 | 全部回滾，重新執行 |
| CHUNK | 分塊提交 | 部分持久，重新啟動續跑 |

### Stage 執行語意
```
Stage 1（並行）→ 屏障 → Stage 2（並行）→ 屏障 → Stage 3
同 Stage 的 Job 並行，跨 Stage 有序
```

## 現有事件系統（SSE 的接入點）

`PipelineRunLifecycleService` 已有以下 Hook：

| Hook | 時機 |
|------|------|
| `markJobStarted()` | Spring Batch Job 開始時 |
| `markJobFinished()` | Spring Batch Job 結束時（含成功/失敗/停止） |
| `markLaunchFailed()` | Job 啟動失敗時 |
| `markStopRequested()` | 收到停止請求時 |
| `markStopped()` | 執行已停止時 |

這些 Hook 內部已呼叫 `pipelineRunObservationService`（Spring ApplicationEvent），
**SSE 實作只需在這些 Hook 中額外呼叫 `SseEventBroadcaster`**，不需大幅重構。

## 現有 Prometheus 指標（已可用）

由 `PipelineMetricsPublisher` 發布：

| 指標名稱 | 類型 |
|---------|------|
| `irispipe.pipeline.run.triggered` | Counter |
| `irispipe.pipeline.execution.completed` | Counter |
| `irispipe.pipeline.execution.failed` | Counter |
| `irispipe.pipeline.execution.stopped` | Counter |
| `irispipe.pipeline.job.completed` | Counter |
| `irispipe.pipeline.job.failed` | Counter |
| `irispipe.pipeline.job.stopped` | Counter |
| `irispipe.pipeline.runs.active` | Gauge |
| `irispipe.pipeline.executions.active` | Gauge |
| `irispipe.pipeline.execution.duration` | Timer |
| `irispipe.pipeline.job.duration` | Timer |

## 現有 Actuator Endpoints

暴露：`/actuator/health`、`/actuator/metrics`、`/actuator/prometheus`

## 現有前端 API 呼叫清單

所有呼叫統一在 `frontend/src/lib/api.ts`，代理設定 `/api/*` → `http://localhost:8080`。

## 產品迭代 Phases

| Phase | 名稱 | 天數 | 核心價值 |
|-------|------|------|---------|
| 0 | 快速修復 | 1-2 | 消除展示時的破綻 |
| 1 | SSE 即時化 | 3-5 | 產品質感的分水嶺 |
| 2 | Overview 強化 | 2-3 | 指揮中心體驗 |
| 3 | Config UX 轉型 | 5-7 | 降低使用門檻 |
| 4 | 產品打磨 | 3-5 | 完成品質感 |

**優先順序：Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4**
