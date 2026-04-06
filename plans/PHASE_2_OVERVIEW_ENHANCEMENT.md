# Phase 2：Overview 強化

**估計工時：2-3 天**
**目標：將 Overview 從「多個獨立 API call 拼湊的看板」變成「單一資料源的指揮中心」**

---

## 後端實作

### 新增聚合 API

**位置：** `backend/src/main/java/irispipe/api/OverviewAPI.java`（新增）

```
GET /api/v1/overview/summary
```

**職責：** 一次回傳 Overview 頁面所需的所有資料，替代目前前端的多個獨立 API call。

**Response Payload：**

```json
{
  "engine": {
    "status": "UP",
    "uptimeSeconds": 5180,
    "uptimeFormatted": "1h 26m",
    "jvmMemoryMb": 236,
    "jvmMemoryTotalMb": 5016,
    "jvmMemoryPercent": 4,
    "activeBatchJobs": 0
  },
  "catalog": {
    "totalFolders": 4,
    "totalPipelines": 2
  },
  "runs": {
    "activeCount": 0,
    "last6Total": 6,
    "last6Completed": 4,
    "last6Failed": 2,
    "last6Stopped": 0,
    "last6InFlight": 0,
    "successRate": 67,
    "avgDurationSeconds": 1
  },
  "recentRuns": [
    {
      "runId": 90,
      "pipelineId": 56,
      "pipelineName": "ync-job-pipeline-stop",
      "status": "FAILED",
      "isLatest": true,
      "startTime": "2026-04-02T11:47:00",
      "endTime": "2026-04-02T11:47:00",
      "durationSeconds": 0
    }
  ]
}
```

**實作位置：**

- `OverviewAPI.java` → 注入以下服務：
  - `ManagementEndpointService`（讀取 JVM metrics from Micrometer）
  - `PipelineFolderService`（取得資料夾總數）
  - `PipelineConfigService`（取得 Pipeline 總數）
  - `PipelineRunQueryService`（取得 Active/Recent Runs 統計）

**注意：** `avgDurationSeconds` 必須過濾掉 null/負值後再計算平均，這也同時修了 Phase 0 的 bug。

---

### 暴露 `/actuator/info`（延續 Phase 0-4）

在 `application.yaml` 加入：

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus,info
  info:
    app:
      name: IrisPipe
      version: "@project.version@"
      description: Local Pipeline Engine Console
```

在 `pom.xml` build 區段加入（自動注入版本號）：

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      <executions>
        <execution>
          <goals>
            <goal>build-info</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```

---

## 前端實作

### OverviewPage 重構

**改動策略：**

1. 初始載入：呼叫 `GET /api/v1/overview/summary`（單一 call，替代目前 5+ 個 call）
2. 即時更新：訂閱 SSE `/api/v1/events/runs`（Phase 1 完成後）
   - SSE 事件觸發時，只更新 `runs` 區塊的數字，不需要重新 fetch 全部資料
3. Engine Vitals：改為 30 秒輪詢（JVM metrics 不需即時，降低 backend 負載）

**新增 Overview 內容：**

```
Active Runs 區塊（有執行中時）：
├─ 顯示即時 mini Stage Board 縮略圖（Stage 狀態色塊）
├─ 點擊可跳轉到 Run Detail
└─ 顯示已執行時間（elapsed time，即時遞增）

Engine Vitals 新增：
└─ Active Batch Jobs（來自 Micrometer gauge irispipe.pipeline.executions.active）

應用資訊區塊（新增，使用 /actuator/info）：
├─ 版本號
└─ 啟動時間
```

**移除的複雜度：**
- 目前 OverviewPage 有多個 `Promise.allSettled` 平行 fetch
- 統一改為單一 `GET /api/v1/overview/summary` + 錯誤邊界

---

## Active Runs Mini Stage Board（視覺核心）

這是 Phase 2 最重要的視覺改善：當有 Pipeline 正在執行時，Overview 的 Active Runs 卡片顯示一個**迷你版 Stage Board**。

```
Active Runs（1 Active）
┌─────────────────────────────────────────────────────┐
│ ▶ ync-job-pipeline-stop      ● STARTED   2m 35s ago │
│                                                      │
│ [bootstrap ✓] → [success-fixtures ▌] → [fail-fix ·] │
│                                                      │
│  ↓ 12,003 read  ↑ 9,050 write  2,100 commits        │
│                                                 →    │
└─────────────────────────────────────────────────────┘
```

Stage 狀態色塊說明：
- `✓` COMPLETED（綠色）
- `▌` STARTED/RUNNING（藍色 + pulse animation）
- `·` PENDING（灰色）
- `✗` FAILED（紅色）

SSE 驅動：收到 `job_finished` 事件 → 對應 Stage 的 Job 色塊更新

---

## 驗收標準

- [ ] Overview 頁面只發送一個 API call（`/api/v1/overview/summary`）
- [ ] `avgDurationSeconds` 不再回傳負值
- [ ] 有執行中的 Pipeline 時，Active Runs 卡片顯示 mini Stage Board
- [ ] Stage Board 色塊透過 SSE 即時更新（Phase 1 完成後）
- [ ] Elapsed time 計數器正常遞增
- [ ] `/actuator/info` 可存取並顯示版本號
- [ ] Engine Vitals 加入 Active Batch Jobs 數字
