# Phase 4：產品打磨

**估計工時：3-5 天**
**目標：讓 IrisPipe 看起來是一個「完成的產品」，而不是 side project**

---

## 後端實作

### 4-1. Run Log API（新增）

**問題：** `CustomJobListener.afterJob()` 內已有豐富的 step execution summary log（SQL、參數、read/write/filter/skip/commit/rollback 統計），但這些資訊只在 backend console log 裡，前端無法存取。

**位置：** `backend/src/main/java/irispipe/api/SyncPipelineAPI.java`（擴充現有 controller）

```
GET /api/v1/sync-pipeline/{runId}/logs?executionId={executionId}&jobName={jobName}
```

**Response：**

```json
{
  "runId": 63,
  "executionId": 101,
  "jobName": "k6_pipeline_job_stage1",
  "entries": [
    {
      "stepName": "insert_orders",
      "type": "INSERT",
      "sql": "SELECT id, customer_name, amount FROM source_orders WHERE ...",
      "destTable": "dest_orders",
      "status": "COMPLETED",
      "readCount": 6000,
      "writeCount": 6000,
      "filterCount": 0,
      "skipCount": 0,
      "commitCount": 1200,
      "rollbackCount": 0,
      "startTime": "2026-04-02T09:14:53",
      "endTime": "2026-04-02T09:14:54",
      "durationMs": 850
    },
    {
      "stepName": "update_customers",
      "type": "UPDATE",
      "sql": "SELECT id, name, email FROM source_customers",
      "destTable": "dest_customers",
      "status": "COMPLETED",
      "readCount": 6003,
      "writeCount": 6003,
      "filterCount": 0,
      "skipCount": 0,
      "commitCount": 1202,
      "rollbackCount": 0,
      "startTime": "2026-04-02T09:14:54",
      "endTime": "2026-04-02T09:14:54",
      "durationMs": 620
    }
  ]
}
```

**資料來源：**
- Step execution 統計資訊已經保存在 Spring Batch metadata tables（`BATCH_STEP_EXECUTION`）
- SQL 和 destTable 資訊可從 `PipelineRunSnapshot` 中的 step definition 取得
- 或者：在 `CustomJobListener.afterJob()` 中將 summary 寫入新表 `iris_pipeline_run_log`

**建議方案：** 直接從 Spring Batch metadata join PipelineRunSnapshot，不新增表。

```java
// 實作思路：
// 1. 從 PipelineRunExecutionJob 取得 rootJobInstanceId
// 2. 用 rootJobInstanceId 查 BatchJobExecution → BatchStepExecution
// 3. 從 BatchStepExecution 取得 readCount, writeCount, commitCount 等
// 4. 從 PipelineRunSnapshot 的 step definition 取得 SQL, type, destTable
// 5. 合併回傳
```

### 4-2. Swagger API 文檔完善

**現狀：** 已有 `springdoc-openapi-starter-webmvc-ui` 依賴，但 API 缺少描述。

**任務：** 為所有 Controller 的 endpoint 加上 `@Operation`、`@ApiResponse` 註解。

```java
@Operation(summary = "Execute a pipeline",
    description = "Creates a new pipeline run and launches it synchronously or asynchronously")
@ApiResponse(responseCode = "200", description = "Pipeline run created and launched")
@PostMapping
public ResponseEntity<PipelineRunDTO> execute(@RequestBody ExecuteRequest request) { ... }
```

**優先標註的 Controller：**
1. `SyncPipelineAPI` — 核心執行控制
2. `SyncConfigAPI` — 配置 CRUD
3. `PipelineEventController` — SSE（Phase 1 新增）
4. `ConnectionAPI` — Connection Library（Phase 3 新增）

**Swagger UI 入口：** `http://localhost:8080/swagger-ui.html`

### 4-3. 應用啟動時自動建立 Default Workspace

**問題：** 目前需要手動透過 API 建立 Workspace。

**改動位置：** `backend/src/main/java/irispipe/infrastructure/service/workspace/WorkspaceContextService.java`

在應用啟動時（`@PostConstruct` 或 `ApplicationRunner`），檢查 default workspace 是否存在，不存在就自動建立。

---

## 前端實作

### 4-4. Run Detail Log Viewer（核心視覺增值）

**位置：** `frontend/src/pages/RunDetailPage.tsx` — Job Detail 面板新增 tab

**現狀：** 點擊 Job 節點只看到 step execution 的統計數字。

**改為：** 加入 「Logs」 tab，顯示結構化的 step 執行日誌。

```
Job: k6_pipeline_job_stage1
──────────────────────────────────
[Steps]  [Logs]

┌─ Step 1: insert_orders ───── COMPLETED ─── 850ms ─┐
│ Type: INSERT                                       │
│ SQL:  SELECT id, customer_name, amount              │
│       FROM source_orders WHERE ...                  │
│ Dest: dest_orders                                   │
│                                                     │
│  Read    Write   Filter  Skip   Commit  Rollback    │
│  6,000   6,000   0       0      1,200   0           │
└─────────────────────────────────────────────────────┘

┌─ Step 2: update_customers ── COMPLETED ─── 620ms ─┐
│ Type: UPDATE                                       │
│ SQL:  SELECT id, name, email FROM source_customers  │
│ Dest: dest_customers                                │
│                                                     │
│  Read    Write   Filter  Skip   Commit  Rollback    │
│  6,003   6,003   0       0      1,202   0           │
└─────────────────────────────────────────────────────┘
```

**SQL 顯示：** 使用 CodeMirror readonly 模式（Phase 3 已安裝），或簡單的 `<pre>` + monospace font。

### 4-5. Pipeline Explorer：拖拽移動 Pipeline 到資料夾

**位置：** `frontend/src/pages/PipelineExplorerPage.tsx`

**現狀：** Pipeline 和 Folder 的組織只能透過刪除再建立。

**改動：** 利用已有的 `@dnd-kit`，支援 Pipeline 卡片拖拽到左側 Folder Tree 的節點上。

**互動：**
1. 使用者拖拽 Pipeline 卡片 → 移到左側 Folder Tree 的某資料夾上
2. 顯示高亮 drop zone
3. 放開 → 呼叫 `PUT /api/v1/sync-config/{id}` 更新 folderId
4. 重新整理 Explorer

**後端：** 現有 `PUT /api/v1/sync-config/{id}` 應已支援更新 folderId，確認即可。

### 4-6. 鍵盤快捷鍵

**全局快捷鍵（在 `ConsoleLayout` 層級監聽）：**

| 快捷鍵 | 動作 |
|--------|------|
| `Ctrl+S` / `Cmd+S` | 儲存 Pipeline（Config 頁面） |
| `Escape` | 關閉 Modal / 取消編輯 |
| `Ctrl+K` / `Cmd+K` | 開啟全局搜尋（未來功能預留） |

**實作：**

```tsx
// frontend/src/hooks/useKeyboardShortcuts.ts
export function useKeyboardShortcuts(shortcuts: Record<string, () => void>) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = [
        e.ctrlKey || e.metaKey ? 'mod' : '',
        e.shiftKey ? 'shift' : '',
        e.key.toLowerCase(),
      ].filter(Boolean).join('+')

      if (shortcuts[key]) {
        e.preventDefault()
        shortcuts[key]()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [shortcuts])
}
```

### 4-7. Settings 頁面擴充

**現有：** 只有 Appearance（主題切換）

**新增：**

```
Settings
├── Appearance（現有）
│   └── 主題切換
├── Connections（Phase 3 新增）
│   └── Connection Library 管理
├── Workspace（新增）
│   ├── 當前 Workspace 名稱
│   ├── Workspace Key（X-Iris-Workspace-Key）
│   └── 切換 Workspace
└── About（新增）
    ├── 版本號（from /actuator/info）
    ├── Backend URL
    └── GitHub 連結（開源後）
```

### 4-8. 空狀態優化

**各頁面的空狀態應該引導使用者下一步：**

**Explorer 空資料夾：**
```
No pipelines in this folder yet.
[+ New Pipeline]  [📥 Import from file]
```

**Run History 無執行：**
```
This pipeline hasn't been executed yet.
[▶ Execute Now]
```

**Overview 零 Pipeline：**
```
Welcome to IrisPipe!
Get started by creating your first pipeline.
[Open Explorer →]
```

### 4-9. Loading 與 Error 狀態統一

**現有：** `LoadingState.tsx` 和 `EmptyState.tsx` 已存在但使用不一致。

**任務：**
- 所有頁面的 loading 統一使用 `<LoadingState />`
- 所有 API 錯誤統一使用 toast notification（DaisyUI alert）
- 連線中斷時顯示 banner「Backend disconnected, retrying...」

---

## 驗收標準

- [ ] Run Detail Job 面板有「Logs」tab，顯示 step 執行日誌
- [ ] Log 中的 SQL 有語法高亮或 monospace 顯示
- [ ] Swagger UI（`/swagger-ui.html`）所有 endpoint 有描述
- [ ] Pipeline 可拖拽移動到不同資料夾
- [ ] `Ctrl+S` 在 Config 頁面可儲存 Pipeline
- [ ] `Escape` 可關閉 Modal
- [ ] Settings 有 Workspace 和 About tab
- [ ] 所有空狀態頁面有引導提示
- [ ] 應用啟動自動建立 default workspace
- [ ] Loading 和 Error 狀態統一且一致
