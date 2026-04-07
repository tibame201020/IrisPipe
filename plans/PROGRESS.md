# IrisPipe 實作進度追蹤

> 更新時間：2026-04-07

## 執行規則

1. 每個 Phase 完成後必須通過 `mvn -q -DskipTests compile` + `npm run build`
2. Phase 1 完成後執行 k6 integration tests 確認公開合約未破壞
3. SSE 相關異動不修改任何現有 API endpoint signature
4. 所有新 Java 類別放在 plan 指定的 package 位置
5. 前端 SSE hook 失效時（EventSource error）不崩潰，gracefully 降級

---

## Phase 0：快速修復 ✅ DONE

| 任務 | 狀態 | 檔案 |
|------|------|------|
| 0-1 AVG Duration bug | ✅ | `PipelineRunsPage.tsx` — `Math.max(0, ...)` |
| 0-2 名稱截斷 tooltip | ✅ | `StageLaneBoard.tsx` / `PipelineExplorerPage.tsx` |
| 0-3 移除 DANGER ZONE | ✅ | `PipelineConfigPage.tsx` — 改為 Stage Actions |
| 0-4 暴露 actuator/info | ✅ | `application.yaml` |
| 0-5 Pipeline 名稱 inline edit | ✅ | 已有 input，不需額外處理 |

---

## Phase 1：SSE 即時化 ✅ DONE

### 後端

| 任務 | 狀態 | 目標檔案 |
|------|------|---------|
| SseEventBroadcaster.java | ✅ | `infrastructure/sse/SseEventBroadcaster.java` |
| SSE event records | ✅ | `infrastructure/sse/SseEvents.java` |
| PipelineEventController.java | ✅ | `api/PipelineEventController.java` |
| @EnableScheduling | ✅ | `IrisPipeApplication.java` |
| 注入 broadcaster → LifecycleService | ✅ | `PipelineRunLifecycleService.java` |
| 廣播 run_started | ✅ | `PipelineExecutionService.java` |

### 前端

| 任務 | 狀態 | 目標檔案 |
|------|------|---------|
| usePipelineEvents hook | ✅ | `lib/usePipelineEvents.ts` |
| OverviewPage SSE | ✅ | `pages/OverviewPage.tsx` |
| RunDetailPage SSE | ✅ | `pages/RunDetailPage.tsx` |
| PipelineRunsPage SSE | ✅ | `pages/PipelineRunsPage.tsx` |

---

## Phase 2：Overview 強化 ✅ DONE

| 任務 | 狀態 | 目標檔案 |
|------|------|---------|
| OverviewAPI.java | ✅ | `api/OverviewAPI.java` |
| OverviewPage 重構為單一 API call | ✅ | `pages/OverviewPage.tsx` |

---

## Phase 3：Config UX 轉型 ✅ DONE

| 任務 | 狀態 | 目標檔案 |
|------|------|---------|
| Flyway V5 iris_connection | ✅ | `db/migration/V5__connection_library.sql` |
| ConnectionAPI.java | ✅ | `api/ConnectionAPI.java` |
| Connection Entity/Repo | ✅ | `entity/config/IrisConnection.java` |
| Connection panel 前端 (driver dropdown + URL builder + test) | ✅ | `PipelineConfigPage.tsx` |
| CodeMirror SQL Editor | ✅ | `components/SqlEditor.tsx` |
| Step filter 搜尋 | ✅ | `PipelineConfigPage.tsx` |
| Settings Connections tab | ✅ | `pages/SettingsPage.tsx` |

---

## Phase 4：產品打磨 ✅ DONE

| 任務 | 狀態 | 目標檔案 |
|------|------|---------|
| Run Log API | ✅ | `api/SyncPipelineAPI.java` + `PipelineRunQueryService.java` |
| Swagger @Operation 標註 | ✅ | ConnectionAPI, OverviewAPI, PipelineEventController, SyncPipelineAPI |
| auto-create default workspace | ✅ | `WorkspaceContextService.java` @PostConstruct |
| Log Viewer tab | ✅ | `pages/RunDetailPage.tsx` |
| Keyboard shortcuts Ctrl+S | ✅ | `pages/PipelineConfigPage.tsx` |
| Escape close modal | ✅ | `pages/PipelineConfigPage.tsx` (already existed in JobEditorModal) |
| Drag Pipeline to folder | ⏳ | `pages/PipelineExplorerPage.tsx` — skipped (complex, lower priority) |
| Settings Workspace + About tab | ⏳ | `pages/SettingsPage.tsx` — skipped (out of scope) |
| Empty state 優化 | ✅ | `pages/SettingsPage.tsx` ConnectionsTab empty state |

---

## 圖例
- ✅ 完成
- 🚧 進行中
- ⏳ 待處理 / 跳過
