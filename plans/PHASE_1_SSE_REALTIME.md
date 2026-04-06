# Phase 1：SSE 即時化

**估計工時：3-5 天**
**目標：讓 Pipeline 執行過程可以即時視覺化，這是產品質感的分水嶺**

---

## 架構決策：為何選 SSE 而非 WebSocket

| 面向 | SSE | WebSocket |
|------|-----|-----------|
| 方向 | 單向（server → client）| 雙向 |
| 適用場景 | Pipeline 狀態推播（完全單向）| 聊天、協作 |
| Spring MVC 支援 | 原生 `SseEmitter`，**零新依賴** | 需加 `spring-boot-starter-websocket` |
| Java 21 虛擬線程 | 長連接成本極低 | 同樣低，但實作複雜 |
| 前端 | 瀏覽器原生 `EventSource` | 需 `ws` 或手動實作 |
| 重連 | 瀏覽器自動重連 | 需手動實作 |
| 結論 | ✅ 選擇此方案 | ❌ 過度設計 |

---

## 後端實作

### 1. SseEventBroadcaster（新增 Bean）

**位置：** `backend/src/main/java/irispipe/infrastructure/sse/SseEventBroadcaster.java`

```java
@Component
public class SseEventBroadcaster {

    // 全局訂閱者（/api/v1/events/runs）
    private final CopyOnWriteArrayList<SseEmitter> globalEmitters = new CopyOnWriteArrayList<>();

    // 單 Run 訂閱者（/api/v1/events/runs/{runId}）
    private final ConcurrentHashMap<Long, CopyOnWriteArrayList<SseEmitter>> runEmitters = new ConcurrentHashMap<>();

    public SseEmitter subscribeGlobal() {
        SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
        globalEmitters.add(emitter);
        emitter.onCompletion(() -> globalEmitters.remove(emitter));
        emitter.onTimeout(() -> globalEmitters.remove(emitter));
        emitter.onError(e -> globalEmitters.remove(emitter));
        return emitter;
    }

    public SseEmitter subscribeRun(Long runId) {
        SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
        runEmitters.computeIfAbsent(runId, k -> new CopyOnWriteArrayList<>()).add(emitter);
        emitter.onCompletion(() -> removeRunEmitter(runId, emitter));
        emitter.onTimeout(() -> removeRunEmitter(runId, emitter));
        emitter.onError(e -> removeRunEmitter(runId, emitter));
        return emitter;
    }

    // 廣播給全局 + 指定 runId 的訂閱者
    public void broadcast(Long runId, String eventName, Object data) {
        String json = toJson(data);
        SseEmitter.SseEventBuilder event = SseEmitter.event()
                .name(eventName)
                .data(json);
        sendToAll(globalEmitters, event);
        List<SseEmitter> runSpecific = runEmitters.getOrDefault(runId, new CopyOnWriteArrayList<>());
        sendToAll(runSpecific, event);
    }

    // 心跳（防止連線超時，每 30 秒由 @Scheduled 觸發）
    public void sendHeartbeat() {
        SseEmitter.SseEventBuilder event = SseEmitter.event().name("heartbeat").data("{}");
        sendToAll(globalEmitters, event);
        runEmitters.values().forEach(emitters -> sendToAll(emitters, event));
    }

    private void sendToAll(List<SseEmitter> emitters, SseEmitter.SseEventBuilder event) {
        List<SseEmitter> dead = new ArrayList<>();
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(event);
            } catch (Exception e) {
                dead.add(emitter);
            }
        }
        emitters.removeAll(dead);
    }

    private void removeRunEmitter(Long runId, SseEmitter emitter) {
        CopyOnWriteArrayList<SseEmitter> list = runEmitters.get(runId);
        if (list != null) {
            list.remove(emitter);
            if (list.isEmpty()) runEmitters.remove(runId);
        }
    }

    private String toJson(Object data) {
        // 使用 ObjectMapper，注入即可
    }
}
```

### 2. PipelineEventController（新增 Controller）

**位置：** `backend/src/main/java/irispipe/api/PipelineEventController.java`

```java
@RestController
@RequestMapping("/api/v1/events")
public class PipelineEventController {

    private final SseEventBroadcaster broadcaster;

    @GetMapping(value = "/runs", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter subscribeAllRuns() {
        return broadcaster.subscribeGlobal();
    }

    @GetMapping(value = "/runs/{runId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter subscribeRun(@PathVariable Long runId) {
        return broadcaster.subscribeRun(runId);
    }
}
```

### 3. 心跳排程

**在 `IrisPipeApplication.java` 或任意 `@Configuration` 加入：**

```java
@EnableScheduling  // 確保已啟用
```

**在 `SseEventBroadcaster` 加入：**

```java
@Scheduled(fixedDelay = 30_000)
public void sendHeartbeat() {
    // 實作如上
}
```

### 4. 橋接 PipelineRunLifecycleService → SseEventBroadcaster

**在 `PipelineRunLifecycleService` 注入 `SseEventBroadcaster`，在各 Hook 呼叫廣播：**

```java
// markJobStarted() 末尾加入：
broadcaster.broadcast(pipelineRunId, "job_started", new JobStartedEvent(
    runId, executionId, jobName, stageName, LocalDateTime.now()
));

// markJobFinished() 末尾加入：
broadcaster.broadcast(pipelineRunId, "job_finished", new JobFinishedEvent(
    runId, executionId, jobName, status, read, write, commits, LocalDateTime.now()
));

// markLaunchFailed() 末尾加入：
broadcaster.broadcast(pipelineRunId, "run_failed", new RunFailedEvent(runId));

// markStopped() 末尾加入：
broadcaster.broadcast(pipelineRunId, "run_stopped", new RunStoppedEvent(runId));
```

**在 `PipelineExecutionService.execute()` 呼叫後加入：**
```java
broadcaster.broadcast(runId, "run_started", new RunStartedEvent(
    runId, pipelineId, pipelineName
));
```

### 5. SSE 事件 Payload 設計

```java
// run_started
record RunStartedEvent(Long runId, Long pipelineId, String pipelineName, LocalDateTime startedAt) {}

// job_started
record JobStartedEvent(Long runId, Long executionId, String jobName, String stageName, LocalDateTime startedAt) {}

// job_finished
record JobFinishedEvent(
    Long runId, Long executionId, String jobName, String stageName,
    String status,  // COMPLETED / FAILED / STOPPED
    Long readCount, Long writeCount, Long commitCount,
    LocalDateTime finishedAt
) {}

// run_completed
record RunCompletedEvent(
    Long runId, String status,
    Long totalReadCount, Long totalWriteCount, Long totalCommitCount,
    long durationSeconds, LocalDateTime finishedAt
) {}

// run_failed
record RunFailedEvent(Long runId, String errorMessage, LocalDateTime failedAt) {}

// run_stopped
record RunStoppedEvent(Long runId, LocalDateTime stoppedAt) {}

// heartbeat：空 payload {}
```

### 6. CORS 設定（本地開發）

若前端 port 4206 和後端 8080 不同，需設定 CORS：

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/v1/events/**")
                .allowedOrigins("http://localhost:4206")
                .allowedMethods("GET");
    }
}
```

---

## 前端實作

### 1. SSE Client Hook（新增）

**位置：** `frontend/src/lib/usePipelineEvents.ts`

```typescript
export function usePipelineEvents(runId?: number) {
  const url = runId ? `/api/v1/events/runs/${runId}` : '/api/v1/events/runs'

  useEffect(() => {
    const source = new EventSource(url)

    source.addEventListener('run_started', (e) => {
      const data = JSON.parse(e.data)
      // 更新狀態
    })

    source.addEventListener('job_started', (e) => {
      const data = JSON.parse(e.data)
      // 更新 Stage Board 節點狀態為 STARTED
    })

    source.addEventListener('job_finished', (e) => {
      const data = JSON.parse(e.data)
      // 更新 Stage Board 節點狀態、累加 throughput
    })

    source.addEventListener('run_completed', (e) => {
      const data = JSON.parse(e.data)
      // 更新 Run 狀態、停止動畫
    })

    source.addEventListener('heartbeat', () => {
      // 保持連線，可選：更新 lastHeartbeat 時間戳
    })

    source.onerror = () => {
      // EventSource 會自動重連，可顯示 "Reconnecting..." 狀態
    }

    return () => source.close()
  }, [url])
}
```

### 2. OverviewPage 改動

- 移除 15 秒 setInterval
- 改用 `usePipelineEvents()`（無 runId → 訂閱全局 stream）
- Active Runs 區塊收到 `run_started` 事件 → 即時新增卡片
- Active Runs 區塊收到 `run_completed/failed/stopped` → 即時移除卡片，加入 Recent Runs

### 3. RunDetailPage 改動

- 移除 3 秒 setInterval
- 改用 `usePipelineEvents(runId)`
- Stage Board 節點：
  - 收到 `job_started` → 節點從 `PENDING` 變 `STARTED`（加上 spinning indicator）
  - 收到 `job_finished` → 節點變 `COMPLETED`（綠色）或 `FAILED`（紅色）
- Throughput 數字：
  - 收到 `job_finished` → read/write/commits 數字即時累加（可加數字滾動動畫）

### 4. PipelineRunsPage 改動

- 收到 `run_started` 事件 → 在列表頂部即時插入新 Run 卡片（STARTED 狀態）
- 收到 `run_completed/failed/stopped` → 即時更新對應 Run 的狀態

---

## Vite Proxy 設定確認

`frontend/vite.config.ts` 中需確認 SSE 路徑也有代理：

```typescript
proxy: {
  '/api': {
    target: process.env.IRISPIPE_BACKEND_URL || 'http://127.0.0.1:8080',
    changeOrigin: true,
  },
  '/actuator': {
    target: process.env.IRISPIPE_BACKEND_URL || 'http://127.0.0.1:8080',
    changeOrigin: true,
  },
}
```

`/api/v1/events/*` 已在 `/api` 代理範圍內，無需額外設定。

---

## 驗收標準

- [ ] `GET /api/v1/events/runs` 回傳 `Content-Type: text/event-stream`
- [ ] `GET /api/v1/events/runs/{runId}` 回傳 run 特定事件
- [ ] 每 30 秒自動發送 heartbeat
- [ ] 瀏覽器斷線後 EventSource 自動重連
- [ ] 執行 Pipeline 時，Run Detail Stage Board 節點即時變色（無需手動 refresh）
- [ ] 執行 Pipeline 時，Overview Active Runs 即時出現新卡片
- [ ] Pipeline 完成時，Active Runs 即時消失，Recent Runs 即時更新
- [ ] 多個瀏覽器 Tab 同時訂閱不互相影響
