# IrisPipe Frontend v2 — Design Spec

**Date:** 2026-04-13
**Status:** Approved, ready for implementation
**Author:** Brainstorming session (Claude + user)

---

## 1. Goals

IrisPipe 是面試用的展示作品，後端已完整。本次重設計目標：

- 呈現 **Slate Editorial** 視覺風格，展示工程師的產品品味
- 六個頁面完全重建，視覺一致性高
- 文件足夠詳盡，任何 AI agent 可無歧義地實作

面試定位：**Data Engineering / Product-Technical Lead**，強調系統思考、資訊架構清晰、資料流一目了然。

---

## 2. Implementation Strategy

### 方案：新資料夾 + 原子替換（Plan B）

1. 在 repo 根目錄建立 `/frontend-v2/` 作為獨立開發目錄
2. 完成後執行 `mv frontend frontend-backup && mv frontend-v2 frontend`
3. 開發期間舊前端完整保留，無干擾

### 直接複用（原封不動 copy 至 frontend-v2/src/）

| 來源 | 目的 |
|---|---|
| `frontend/src/lib/api.ts` | 所有 API 呼叫，不修改 |
| `frontend/src/lib/usePipelineEvents.ts` | SSE real-time hook，不修改 |
| `frontend/src/types/irispipe.ts` | Domain 型別，不修改 |
| `frontend/vite.config.ts` | Proxy 設定，不修改 |
| `frontend/package.json` | 依賴，不修改 |
| `frontend/tsconfig*.json` | TypeScript 設定，不修改 |

### 完全重寫

```
frontend-v2/
  index.html
  src/
    main.tsx
    App.tsx
    index.css          ← design tokens + global styles
    components/
      ui/              ← 原子元件（Button, Badge, Card, Input 等）
      layout/          ← 殼（ConsoleLayout, Sidebar, Header）
      pipeline/        ← Domain 元件（StageLaneBoard, JobCard, StepCard 等）
    pages/             ← 六個頁面
    lib/               ← 複用的 api.ts, usePipelineEvents.ts
    types/             ← 複用的 irispipe.ts
    state/             ← ThemeProvider, LayoutProvider（重寫，簡化）
    tailwind.config.cjs
    postcss.config.cjs
```

---

## 3. Tech Stack

沿用現有，不引入新工具：

| 項目 | 版本 | 說明 |
|---|---|---|
| React | 19 | 沿用 |
| React Router | v7 | 沿用，路由結構不變 |
| Vite | 8 | 沿用 |
| TailwindCSS | 3 | 沿用 |
| DaisyUI | 4 | 沿用，透過 custom theme 套用 Slate Editorial 色系 |
| axios | 1 | 沿用，api.ts 不動 |
| @dnd-kit/core + sortable | 6/10 | 沿用，Config 頁 DnD |
| CodeMirror 6 | 6 | 沿用，SQL editor |
| lucide-react | 最新 | 沿用，icon |
| vitest | 4 | 沿用，unit test |

**不引入**：Zustand、React Query、任何新的 CSS-in-JS 或 animation library。

---

## 4. Design System

### 4.1 字型

**Fira Code**，全站唯一字型，包含 UI 文字、標籤、SQL。

```html
<!-- index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

```js
// tailwind.config.cjs
theme: {
  extend: {
    fontFamily: {
      sans: ['Fira Code', 'monospace'],
      mono: ['Fira Code', 'monospace'],
    }
  }
}
```

### 4.2 DaisyUI Custom Theme：`irispipe`

```js
// tailwind.config.cjs
daisyui: {
  themes: [{
    irispipe: {
      "primary":          "#6366f1",   // indigo — CTA, accent, active state
      "primary-content":  "#ffffff",
      "secondary":        "#94a3b8",   // slate — secondary text
      "accent":           "#22c55e",   // green — success
      "neutral":          "#272f42",   // card / panel background
      "neutral-content":  "#e2e8f0",
      "base-100":         "#1e2433",   // 頁面主背景
      "base-200":         "#161d2e",   // sidebar / header / topbar
      "base-300":         "#0f1320",   // 最深層背景（SQL editor, log box）
      "base-content":     "#e2e8f0",   // 主要文字
      "info":             "#38bdf8",
      "info-content":     "#0f172a",
      "success":          "#22c55e",
      "success-content":  "#0f172a",
      "warning":          "#f59e0b",
      "warning-content":  "#0f172a",
      "error":            "#ef4444",
      "error-content":    "#ffffff",
    }
  }],
  darkMode: false,
}
```

```js
// tailwind.config.cjs plugins
plugins: [require('daisyui')]
```

### 4.3 語意色票（Status Colors）

Pipeline 執行狀態對應的色彩，統一透過 utility class 套用：

| Status | Text color | Background | Border |
|---|---|---|---|
| COMPLETED | `#22c55e` | `rgba(34,197,94,0.08)` | `rgba(34,197,94,0.3)` |
| STARTED / STARTING | `#f59e0b` | `rgba(245,158,11,0.08)` | `rgba(245,158,11,0.3)` |
| STOPPING | `#f59e0b` | `rgba(245,158,11,0.05)` | `rgba(245,158,11,0.2)` |
| FAILED | `#ef4444` | `rgba(239,68,68,0.1)` | `rgba(239,68,68,0.4)` |
| STOPPED | `#94a3b8` | `rgba(148,163,184,0.05)` | `#2d3a50` |
| PENDING / NOT_RUN | `#64748b` | transparent | `#2d3a50` |
| SKIPPED | `#64748b` | transparent | `#2d3a50` |

在 `index.css` 定義為 CSS custom properties 供元件使用。

### 4.4 排版 Scale

```
text-2xl (24px) + font-semibold → 頁面標題、Run 標題
text-lg  (18px) + font-semibold → Pipeline 名稱
text-base(16px) + font-semibold → Section 標題
text-sm  (14px) + font-normal  → Body text、Job 名稱
text-xs  (12px) + font-medium  → Meta、時間戳、route 描述
9-10px   + tracking-wide       → Label（uppercase）
```

### 4.5 間距與 Border Radius

```
card padding:      p-3 (12px) 或 p-4 (16px)
card radius:       rounded-lg (8px)
button radius:     rounded-md (6px)
badge radius:      rounded-full
border color:      #2d3a50（neutral border）/ #3d4d65（hover/active border）
card border:       1px solid #2d3a50
panel shadow:      0 4px 24px rgba(0,0,0,0.4)
```

### 4.6 全域佈局殼

```
左側 sidebar：   44px 固定寬，bg-base-200，icon nav
頂部 topbar：    44px 固定高，bg-base-200，breadcrumb + action
主內容區：       flex-1，overflow 由各頁自行控制
```

---

## 5. Routing（不變）

```tsx
// App.tsx — 路由結構與現有完全相同
<Route element={<ConsoleLayout />}>
  <Route path="/"                                    → redirect /overview />
  <Route path="/overview"                            → OverviewPage />
  <Route path="/pipeline"                            → PipelineExplorerPage />
  <Route path="/pipeline/folders/:folderId"          → PipelineExplorerPage />
  <Route path="/pipeline/new/config"                 → PipelineConfigPage />
  <Route path="/pipeline/items/:pipelineId"          → PipelineWorkspaceLayout>
    <Route path="config"                             → PipelineConfigPage />
    <Route path="runs"                               → PipelineRunsLayout>
      <Route index                                   → PipelineRunsPage />
      <Route path=":runId"                           → RunDetailPage />
    </Route>
  </Route>
  <Route path="/settings"                            → SettingsPage />
</Route>
```

---

## 6. Component Library

### 6.1 ui/ 原子元件

每個元件只接受明確 props，不做內部 API 呼叫。

#### `StatusBadge`

```tsx
// props
type StatusBadgeProps = {
  status: PipelineRunStatus
  size?: 'sm' | 'md'  // default: 'md'
}
// 渲染：● COMPLETED / ● RUNNING / ● FAILED 等
// 圓點顏色 + 文字顏色 + 背景色全部由 status 決定
```

#### `DurationText`

```tsx
// props
type DurationTextProps = {
  startTime: LocalDateTimeInput
  endTime: LocalDateTimeInput
  className?: string
}
// 計算並顯示 "1m 45s" / "< 1s" 等
```

#### `RelativeTime`

```tsx
// 顯示 "3 min ago" / "Apr 13 · 14:02"
type RelativeTimeProps = {
  value: LocalDateTimeInput
  mode?: 'relative' | 'absolute'  // default: 'relative'
}
```

#### `Button`

```tsx
// 包裝 DaisyUI btn，確保 Fira Code font
type ButtonProps = {
  variant?: 'primary' | 'ghost' | 'danger' | 'outline'
  size?: 'sm' | 'md'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}
```

#### `CounterBox`

```tsx
// 顯示 read/write/skip/rollback 等數字
type CounterBoxProps = {
  label: string
  value: number
  highlight?: boolean   // green color if true
  danger?: boolean      // red color if true
}
```

### 6.2 layout/ 殼元件

#### `ConsoleLayout`

```
┌─────────────────────────────────┐
│ ConsoleSidebar (44px)           │
│  icon: ⊞ → /overview           │
│  icon: ≡ → /pipeline            │
│  icon: ⚙ → /settings           │
│  ─────── bottom ──────          │
│  ENGINE status dot              │
├─────────────────────────────────┤
│ ConsoleHeader (44px)            │
│  breadcrumb / page title        │
│  global actions                 │
├─────────────────────────────────┤
│ <Outlet />                      │
└─────────────────────────────────┘
```

`ConsoleSidebar`：固定 44px，icon 從 lucide-react，active 狀態 `bg-primary`。底部顯示 engine 健康狀態小點（綠/紅），呼叫 `GET /actuator/health`。

`ConsoleHeader`：44px，顯示當前頁面 breadcrumb。`PipelineWorkspaceLayout` 會覆寫此 header 加入 pipeline 名稱與 config/runs tab。

#### `PipelineWorkspaceLayout`

包裝單一 pipeline 的兩個子頁（config / runs）：

```
topbar: [breadcrumb] / [pipeline name] | [config tab] [runs tab] | [actions]
<Outlet />
```

- `config` tab → `/pipeline/items/:id/config`
- `runs` tab → `/pipeline/items/:id/runs`
- actions 根據子頁不同（config 頁：Save + Execute；runs 頁：無）

### 6.3 pipeline/ Domain 元件

#### `StageLaneBoard`（Config 用，topology mode）

```
canvas（dot-grid 背景）
  Stage Panel 1 ──→── Stage Panel 2 ──→── Stage Panel 3 ──→── [+ add stage]
```

**Stage Panel 結構：**
```
┌─ top border: 3px solid primary ─────────────────┐
│ [⠿] STAGE N  · [name]                           │  ← header（可拖曳整欄）
│ ‖ X jobs run in parallel                        │  ← hint bar
│ ┌─ Job Card ────────────────────────────────┐   │
│ │ [⠿] job_name                      [●]    │   │  ← job card（可拖曳）
│ │ source → dest                            │   │
│ │ ▼ STEPS · N                              │   │
│ │   [1] SELECT  order summary text        │   │
│ │   [2] INSERT  dest table name            │   │
│ └───────────────────────────────────────────┘   │
│ [+ add job]                                     │
└─────────────────────────────────────────────────┘
```

**DnD 行為：**
- Stage Panel header grip → `onMoveStage(draggedStageId, targetStageId)` → 更新 `stageSequenceOrder`
- Job Card grip → `onMoveJob(jobId, srcStageId, destStageId)` → 改變 job 的 `stage` 與 `stageSequenceOrder`

**Canvas：**
- 背景：`bg-base-100` + dot grid（`radial-gradient` CSS）
- Stage panel：`bg-[#131929]`、`border border-[#3d4d65]`、`border-t-[3px] border-t-primary`、`rounded-lg`、`shadow-xl`
- Stage 間連接箭頭：`→` + `seq.` label，顏色 `#3d4d65`

**Right Panel（Job Detail）：**
點擊 Job Card 後滑入右側 panel（`width: 290px`）：
```
breadcrumb: Stage N · name / job_name
─────────────────────────────
JOB NAME input
─── SOURCE CONNECTION ───────
CONNECTION dropdown（from connection library）
─── DESTINATION CONNECTION ──
CONNECTION dropdown
─── STEPS · N ───────────────
Step 1: [type] + CodeMirror SQL editor
Step 2: [type] + CodeMirror SQL editor
[+ add step]
─────────────────────────────
[Duplicate]  [Delete Job]
```

**Validation dot 規則：**
- `#22c55e`（綠）：job 有完整 source/dest/SQL
- `#f59e0b`（黃）：部分設定缺失
- `#ef4444`（紅）：必填欄位空白

**Legend Bar（topbar 下方固定列）：**
```
PIPELINE STRUCTURE · [STAGE] runs sequentially → [JOBS] run in parallel ‖ [STEPS] execute in order ↓ · drag ⠿ to reorganize
```

#### `StageLaneBoard`（Run Detail 用，runtime mode）

Stage 節點顯示執行狀態與時間，不可拖曳，點擊 stage 節點可 filter 左側 job list。

---

## 7. Page Specs

### 7.1 Overview Page

**路由：** `/overview`
**API 呼叫：**
- `GET /api/v1/overview/summary` → engine stats + catalog + run stats + recentRuns
- `GET /api/v1/events/runs`（SSE）→ real-time run 狀態更新

**版型：**
```
TopBar: "Overview" | ENGINE ONLINE ●

3-stat row（flex）:
  [PIPELINES · N]  [IN FLIGHT · N]  [SUCCESS RATE · N%]
  left border: primary / warning / success

RECENT RUNS section:
  [accent-bar] [pipeline name]  [status badge]  [duration] [relative time]
  每列可點擊 → navigate to RunDetailPage
  SSE 收到事件時 re-fetch 最新 5 筆
```

**State：** local `useState`，mount 時 fetch，SSE 事件觸發 re-fetch。

---

### 7.2 Pipeline Explorer Page

**路由：** `/pipeline`、`/pipeline/folders/:folderId`
**API 呼叫：**
- `GET /api/v1/pipeline-tree` → 資料夾樹 + pipeline 列表

**版型：**
```
TopBar: "Pipelines" | [+ New Pipeline]

雙欄 layout（flex）:
  左欄（120px fixed）: Folder tree
    / root
      📁 folder-name（點擊 → navigate /pipeline/folders/:id）
        📁 nested-folder
    點擊 folder → 右欄顯示該 folder 的 pipeline
    右鍵/hover action：Rename / Delete

  右欄（flex-1）: Pipeline list
    section header: "PIPELINES · N"
    每列:
      [accent-bar primary] [pipeline name] [N stages] [last status badge] [last run time] [▶ Execute] [→ open]
    [+ New Pipeline in this folder]（底部）
```

**Folder CRUD：**
- 新增 folder：inline input in tree
- Rename：inline edit on double-click
- Delete：呼叫 `GET /delete-preview` → 顯示確認 modal（含 blocking pipelines 警告）

**Pipeline 新建：** 點 `+ New Pipeline` → navigate `/pipeline/new/config`

---

### 7.3 Pipeline Config Page

**路由：** `/pipeline/new/config`（新建）、`/pipeline/items/:pipelineId/config`（編輯）
**API 呼叫：**
- 新建：`POST /api/v1/sync-config`
- 編輯：`GET /api/v1/sync-config/:id`（mount）、`PUT /api/v1/sync-config/:id`（save）
- `GET /api/v1/connections`（connection library dropdown 用）
- `POST /api/v1/sync-pipeline`（Execute 按鈕）

**版型：**

```
PipelineWorkspaceLayout TopBar:
  breadcrumb | pipeline name（可 inline edit）| [config] [runs] tabs | [unsaved ●] [Save] [▶ Execute]

Legend Bar（固定）:
  PIPELINE STRUCTURE · STAGE seq → JOBS parallel ‖ STEPS in order ↓ · drag ⠿

Kanban Canvas（flex-1，overflow-x: auto，dot-grid bg）:
  [Stage Panel] → [Stage Panel] → ... → [+ add stage]

Right Detail Panel（290px，滑入）:
  Job 設定表單（見 StageLaneBoard 規格）
```

**Stage Panel 互動細節：**
- Stage 名稱可 inline edit（click → input）
- Stage 刪除：hover 顯示 ✕，需確認（若有 jobs 則警告）
- Job Card 刪除：right panel 底部 Delete Job 按鈕

**Save 行為：**
- 將當前 kanban state 轉換為 `ConfigPipelineUpsertRequest`（`stages[]` + `jobs[]`）
- 呼叫 POST（新建）或 PUT（編輯）
- 成功後清除 unsaved 標記，navigate 至 `/pipeline/items/:id/config`

**Execute 行為：**
- 若有 unsaved changes → 先 Save 再 Execute
- 呼叫 `POST /api/v1/sync-pipeline { pipelineId, useAsyncLaucher: true }`
- 成功後 navigate 至 `/pipeline/items/:id/runs`

**Local State 結構：**
```ts
type ConfigState = {
  pipelineName: string
  folderId: number | null
  stages: StageState[]  // ordered by stageSequenceOrder
  isDirty: boolean
  selectedJobId: string | null  // controls right panel visibility
}

type StageState = {
  id: string          // local uuid（新建 stage 用）
  name: string
  jobs: JobState[]
}

type JobState = {
  id: string          // local uuid
  jobName: string
  database: DatabaseConfig
  executions: ExecutionStep[]
  setting: JobSetting
}
```

---

### 7.4 Pipeline Runs Page

**路由：** `/pipeline/items/:pipelineId/runs`
**API 呼叫：**
- `GET /api/v1/sync-pipeline?pipelineId=:id&limit=20` → run list
- `GET /api/v1/events/runs`（SSE）→ 有新 run 時 prepend 到 list

**版型：**
```
PipelineWorkspaceLayout TopBar:
  breadcrumb | pipeline name | [config] [runs] tabs

Filter bar:
  [status filter: ALL / COMPLETED / FAILED / STOPPED / IN FLIGHT]
  （client-side filter）

Run list:
  每列（點擊 → RunDetailPage）:
    [accent-bar（status color）] #run-id | [status badge] | [duration] | [N attempts] | [date time] | [Rerun] [Delete]

  Infinite scroll / Load more：beforeRunId cursor-based pagination
```

---

### 7.5 Run Detail Page

**路由：** `/pipeline/items/:pipelineId/runs/:runId`
**API 呼叫：**
- `GET /api/v1/sync-pipeline/:runId` → PipelineRunDetailInfo
- `GET /api/v1/sync-pipeline/:runId/logs` → RunLogEntry[]
- `GET /api/v1/events/runs/:runId`（SSE）→ real-time job status 更新

**版型（三區）：**

```
Zone 1 - Run Header（固定）:
  [breadcrumb: pipeline / runs / #N] [run name] [status badge]
  [Started] [Ended] [Duration] [Attempts count]
  [actions: Resume（if FAILED/STOPPED）/ Stop（if RUNNING）/ Rerun / Delete]

Zone 2 - Stage Timeline + Attempt Tabs（固定）:
  左：Attempt tabs（縱排）
    #1 INITIAL [status]
    #2 RESUME  [status]   ← 點擊切換 attempt
  右：Stage flow（橫排）
    [Stage 1 ✓] → [Stage 2 ✗（selected）] → [Stage 3 —]
    每個 stage node 顯示：name、duration、job 狀態摘要

Zone 3 - Job List + Step Detail（flex，flex-1）:
  左 Panel（280px）：Job list
    section label per stage（顯示所有 stages 的 jobs）
    Job Item:
      [3px left border（status color）] [status badge] [job name]
      [duration] [atomicLevel] [error hint]
      [step pills: step_1 ✓ / step_2 ✗ / step_3 —]
    點擊 job → 右側 step detail

  右 Panel（flex-1）：Step Detail
    breadcrumb: Stage N · name / job_name / FAILED at step N
    Step cards（垂直排列）:
      ┌─ Step N · step_name · TYPE ─── [status] ─── [duration] ─┐
      │ Counters: [READ N] [WRITE N] [SKIP N] [ROLLBACK N]       │
      │ EXIT DESCRIPTION:                                         │
      │   ┌────────────────────────────────────────────────────┐ │
      │   │ 完整 exitDescription 文字（scrollable, monospace）  │ │
      │   └────────────────────────────────────────────────────┘ │
      └─────────────────────────────────────────────────────────┘
```

**Step Detail 設計規則：**
- exitDescription box 背景 `bg-base-300`（最深）
- FAILED step 的 exitDescription box 加紅色 border
- COMPLETED step 的 exitDescription 顯示 `#22c55e` 文字
- NOT_RUN / SKIPPED step card 整體 opacity 0.5

**SSE 行為：**
- 訂閱 `/api/v1/events/runs/:runId`
- 收到 `job_started` / `job_finished` → 重新 fetch run detail（`GET /api/v1/sync-pipeline/:runId`）
- 收到 `run_completed` / `run_failed` / `run_stopped` → re-fetch + 更新 action buttons

---

### 7.6 Settings Page（Connection Library）

**路由：** `/settings`
**API 呼叫：**
- `GET /api/v1/connections` → ConnectionDTO[]
- `POST /api/v1/connections`（新增）
- `PUT /api/v1/connections/:id`（編輯）
- `DELETE /api/v1/connections/:id`（刪除）
- `POST /api/v1/connections/test`（測試連線）
- `GET /api/v1/connections/drivers` → DriverPreset[]（用於 driver 選擇）

**版型：**
```
TopBar: "Settings" | [+ Add Connection]

Connection list:
  每列：
    [status dot（green=可連/yellow=未測試）] [name]
    [driver short name] [url]
    [Edit] [Delete]

Add / Edit Modal（或 right panel）:
  Connection Name
  Driver（dropdown，from DriverPreset list）
  URL（根據 DriverPreset.urlTemplate 顯示填寫提示）
  Username
  Password（type="password"）
  [Test Connection] → 顯示 latencyMs / error message
  [Save]
```

---

## 8. State Management

全部使用 React local state + Context，不引入外部 store：

| 狀態類型 | 方式 |
|---|---|
| 頁面資料（API response）| `useState` + `useEffect` in page component |
| Config 頁的 kanban state | `useState` in PipelineConfigPage，往下傳 props |
| Real-time 更新 | `usePipelineEvents` hook（已有），觸發 re-fetch |
| Theme / Layout | `ThemeProvider` / `LayoutProvider` context（簡化現有）|
| Selected job in Config | `useState` in PipelineConfigPage，控制 right panel |
| Selected attempt in Run Detail | `useState` in RunDetailPage |

---

## 9. Key Interaction Patterns

### 9.1 DnD in Config Page

使用 `@dnd-kit/core` + `@dnd-kit/sortable`（已有依賴）。

- `DragOverlay` 顯示拖曳中的 stage panel 或 job card ghost
- Stage 拖曳：`horizontalListSortingStrategy`（欄之間）
- Job 拖曳：跨 stage 需自定義 collision detection（drop 到 stage panel → 加入該 stage）
- 拖曳結束更新 local state（不立即 save），`isDirty = true`

### 9.2 Connection Dropdown in Job Config

1. Mount 時呼叫 `GET /api/v1/connections`
2. 顯示 `[connection name] (driver short)` 選項
3. 選取後自動填入 driver / url / username（password 不填，需手動輸入）
4. 也允許手動輸入（不使用 connection library）

### 9.3 SSE Real-time

```ts
// RunDetailPage
usePipelineEvents({
  onJobStarted: () => refetchRunDetail(),
  onJobFinished: () => refetchRunDetail(),
  onRunCompleted: () => refetchRunDetail(),
  onRunFailed: () => refetchRunDetail(),
  onRunStopped: () => refetchRunDetail(),
}, runId)
```

### 9.4 Attempt 切換（Run Detail）

- 預設顯示最新 attempt（`attempts[attempts.length - 1]`）
- 點擊 attempt tab → 切換顯示該 attempt 的 `stages` 和 `jobs`
- Stage timeline 和 job list 都跟著更新

---

## 10. LocalDateTimeInput Parsing

`LocalDateTimeInput = string | number[] | null | undefined`

Java 後端序列化 `LocalDateTime` 為 `number[]`，格式為：
`[year, month, day, hour, minute, second, nanosecond]`（月份從 1 開始）

所有需要顯示時間的元件（`DurationText`、`RelativeTime`）必須先透過以下 utility 轉換：

```ts
// src/lib/datetime.ts
export function parseLocalDateTime(value: LocalDateTimeInput): Date | null {
  if (!value) return null
  if (typeof value === 'string') return new Date(value)
  if (Array.isArray(value) && value.length >= 6) {
    // [year, month(1-based), day, hour, minute, second, nano?]
    return new Date(value[0], value[1] - 1, value[2], value[3], value[4], value[5])
  }
  return null
}

export function formatDuration(start: LocalDateTimeInput, end: LocalDateTimeInput): string {
  const s = parseLocalDateTime(start)
  const e = parseLocalDateTime(end)
  if (!s || !e) return '—'
  const ms = e.getTime() - s.getTime()
  if (ms < 1000) return '< 1s'
  const sec = Math.floor(ms / 1000)
  if (sec < 60) return `${sec}s`
  return `${Math.floor(sec / 60)}m ${sec % 60}s`
}
```

此 utility 需作為 `frontend-v2/src/lib/datetime.ts` 新建，不在複用清單內。

---

## 11. Error Handling

所有 API 呼叫使用 `getApiErrorMessage(error)` 取得錯誤訊息（`api.ts` 已有），在頁面頂部以 `alert alert-error`（DaisyUI）顯示。

Loading state 使用 DaisyUI `loading loading-spinner`，positioned in the center of the content area。

---

## 12. File Checklist（實作時需建立的檔案）

```
frontend-v2/
  index.html
  tailwind.config.cjs
  postcss.config.cjs
  vite.config.ts        ← copy from frontend/
  package.json          ← copy from frontend/
  tsconfig.json         ← copy from frontend/
  tsconfig.app.json     ← copy from frontend/
  tsconfig.node.json    ← copy from frontend/
  src/
    main.tsx
    App.tsx
    index.css
    vite-env.d.ts       ← copy
    lib/
      api.ts            ← copy
      usePipelineEvents.ts ← copy
      datetime.ts       ← 新建（見 Section 10）
    types/
      irispipe.ts       ← copy
    state/
      theme.tsx
      layout.tsx
    components/
      ui/
        StatusBadge.tsx
        DurationText.tsx
        RelativeTime.tsx
        Button.tsx
        CounterBox.tsx
      layout/
        ConsoleLayout.tsx
        ConsoleSidebar.tsx
        ConsoleHeader.tsx
        PipelineWorkspaceLayout.tsx
        PipelineRunsLayout.tsx
      pipeline/
        StageLaneBoard.tsx        ← 全新，config + runtime 兩 mode
        StagePanel.tsx            ← config mode stage 欄
        JobCard.tsx               ← config mode job card（含 steps preview）
        JobDetailPanel.tsx        ← config mode right panel
        RunStageTimeline.tsx      ← run detail stage flow
        RunJobList.tsx            ← run detail job list
        StepCard.tsx              ← run detail step card（含 exitDescription）
    pages/
      OverviewPage.tsx
      PipelineExplorerPage.tsx
      PipelineConfigPage.tsx
      PipelineRunsPage.tsx
      RunDetailPage.tsx
      SettingsPage.tsx
```

---

## 13. Scope Boundaries（明確不做）

- 不實作 dark/light mode toggle（全程 Slate Editorial dark）
- 不實作 workspace 切換 UI（backend 支援但 UI 用 default workspace）
- 不加 unit test（現有 vitest setup 保留，測試留後續）
- 不實作 log streaming（`/api/v1/sync-pipeline/:runId/logs` 目前為 best-effort）
- 不做行動裝置 RWD（桌面工具，min-width 1280px 假設）
