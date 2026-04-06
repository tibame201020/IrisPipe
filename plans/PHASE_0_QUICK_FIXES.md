# Phase 0：快速修復

**估計工時：1-2 天**
**目標：消除展示時的破綻，確保 demo 不翻車**

---

## 任務清單

### 0-1. 修 AVG Duration 計算 Bug（後端）

**問題描述：**
Run History 和 Overview 的 AVG DURATION 顯示 `-149910s`。
推測是 `startTime` 或 `endTime` 為 null 時的時間差計算未做保護。

**定位範圍：**
- `PipelineRunQueryService.java` 中計算 duration 的地方
- 前端 `date.ts` 或 `PipelineRunsPage.tsx` 中的 duration 計算

**修復策略：**
1. 後端：若 `startTime` 或 `endTime` 為 null，duration 回傳 null
2. 前端：收到 null 或負數 duration → 顯示 `—`（破折號），不顯示錯誤數字

**前端保護（frontend/src/lib/date.ts 或使用處）：**
```typescript
function formatDuration(seconds: number | null): string {
  if (seconds === null || seconds === undefined || seconds < 0) return '—'
  if (seconds === 0) return '< 1s'
  // ... 正常格式化
}
```

---

### 0-2. Job/Stage 名稱截斷加 Tooltip（前端）

**問題描述：**
Stage Lane Board 中 Job 名稱如 `manual_demo_prepare_sche...`、`k6_pipeli...` 被截斷，hover 無法看到全名。

**修復位置：**
- `frontend/src/components/StageLaneBoard.tsx`
- Job 節點的名稱 `<span>` 元素

**修復方式：**
為所有截斷文字的元素加上原生 `title` attribute 或 DaisyUI tooltip：

```tsx
// 方式一：原生 title（最簡單）
<span title={job.jobName} className="truncate">
  {job.jobName}
</span>

// 方式二：DaisyUI tooltip
<div className="tooltip tooltip-bottom" data-tip={job.jobName}>
  <span className="truncate">{job.jobName}</span>
</div>
```

**同樣適用位置：**
- Run Detail 頁面的 Runtime Stage Board Job 節點
- Pipeline Explorer 的 Pipeline 卡片名稱

---

### 0-3. 移除「DANGER ZONE」標籤（前端）

**問題描述：**
Stage 設定 Panel 底部有「DANGER ZONE」區域（紅色標題），措辭過於戲劇化，面試時不雅觀。

**修復位置：**
- `frontend/src/pages/PipelineConfigPage.tsx`（Stage 設定面板部分）

**修復方式：**
將「DANGER ZONE」改為「Stage Actions」或直接移除標題，保留刪除按鈕功能。

---

### 0-4. 暴露 `/actuator/info`（後端）

**問題描述：**
目前 Actuator 只暴露 health/metrics/prometheus，沒有 `/info`，Overview 頁面無法顯示應用版本。

**修復位置：**
`backend/src/main/resources/application.yaml`

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus,info   # 加入 info
  info:
    app:
      name: IrisPipe
      version: 1.0.0
      description: Local Pipeline Engine Console
```

也可在 `pom.xml` 設定 `build-info` plugin 自動注入 build 時間。

---

### 0-5. Pipeline 名稱 Inline Edit（前端）

**問題描述：**
Config 頁面的 Pipeline 名稱顯示為靜態文字，使用者不知道可以點擊修改。

**修復位置：**
`frontend/src/pages/PipelineConfigPage.tsx` — Pipeline 名稱 Header 部分

**修復方式：**
```tsx
// 點擊名稱進入編輯模式
const [isEditingName, setIsEditingName] = useState(false)

{isEditingName ? (
  <input
    autoFocus
    className="input input-bordered text-2xl font-bold"
    value={draft.pipelineName}
    onChange={e => updateDraftName(e.target.value)}
    onBlur={() => setIsEditingName(false)}
    onKeyDown={e => e.key === 'Enter' && setIsEditingName(false)}
  />
) : (
  <h1
    className="text-2xl font-bold cursor-pointer hover:underline"
    title="Click to edit name"
    onClick={() => setIsEditingName(true)}
  >
    {draft.pipelineName}
  </h1>
)}
```

---

## 驗收標準

- [ ] AVG Duration 不再顯示負數，null 或負值顯示 `—`
- [ ] 所有被截斷的 Job/Stage 名稱在 hover 時能看到完整名稱
- [ ] Config 頁面無「DANGER ZONE」字樣
- [ ] `/actuator/info` 可存取並回傳應用資訊
- [ ] Pipeline 名稱可點擊編輯
