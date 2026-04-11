# Pipeline Family Reframe Plan

## 目標

這份文件定義 IrisPipe `pipeline family` 的統一 UI/UX 語法，範圍包含：

- `PipelineWorkspaceLayout`
- `PipelineConfigPage`
- `PipelineRunsPage`
- `RunDetailPage`
- `PipelineExplorerPage`
- `OverviewPage`

核心原則不是把每一頁做成同樣的版，而是讓它們使用同一套 family shell、workspace、inspector、signal strip、lane、tile 語法。

## 核心判斷

### 1. `pipeline family` 是 operator workspace，不是 dashboard 集合

這組頁面服務的是「定義 pipeline、啟動 pipeline、理解 runtime、追蹤歷史」這條操作鏈，而不是把 backend 能力切成幾個互不相干的頁面。

因此 family 需要共享：

- pipeline identity
- contextual navigation
- runtime context
- action hierarchy
- inspector 語法

### 2. `stage` 不是 card，應該是 lane

`stage` 的角色是 orchestration lane，負責表達順序、平行度與 runtime barrier，不應該長成厚重內容卡片。

採用規則：

- `stage = lane / strip / flow container`
- lane header 只放 lane identity、issues、stage actions、reorder grip
- lane body 承載 job tiles，不再有第二層厚重 card chrome

### 3. `job` 不是純 pill，但也不該維持 card-in-card

`job` 仍要承載：

- name
- issue indicator
- atomic level
- step summary
- connection hint

因此最佳形式是：

- `job = compact tile / slab`
- 比 card 輕，但比 pill 有更多資訊密度

### 4. `Config` 必須分成兩種模式

`Config` 不能再同時把 pipeline summary、stage editor、job editor、step editor 都放在首屏搶畫面。

正式模式：

- `Topology mode`
  - 主體是 stage lanes
  - 右側是單一 inspector
- `Job workspace mode`
  - 主體是 step editor
  - 左側是 job setup inspector
  - 中間是 step navigator

## Family Shell 規則

### Shell 結構

- 第一層：family identity
- 第二層：page context / tabs / local filters
- 第三層：workspace body

### 共同元件語法

- `iris-family-shell`
  - family 頂部標頭
- `iris-family-context`
  - family 第二層上下文帶
- `iris-signal-strip`
  - 短訊號、filters、attempt tabs、status chips 容器
- `iris-workspace-shell`
  - 主要內容畫布底層
- `iris-inspector-rail`
  - 右側或左側的輔助資訊帶

## Config 規則

### Topology Mode

- stage lanes 是畫布主體
- lane 之間使用 flow connector，而不是卡片牆
- stage action 不能只靠 hover 或 icon-only
- empty lane 必須有明確 `Add Job` CTA

### Job Workspace Mode

- job workspace 是獨立工作模式，不是 modal 疊層
- 左側：job semantics / connections / batch / placement
- 中間：step navigator
- 右側：single active step editor

### Step Editor

- step toolbar 要優先表達 step identity、type、move/remove actions
- parameter list 應該是 editable list，不是鬆散小碎卡
- step navigator 要優先支援掃描與切換，不是堆資訊

## Runs / Run Detail 規則

### Runs

- 定位是 operations ledger
- 上方只保留 latest status、history signals、primary execute action
- filters 使用 signal strip，不再像 KPI dashboard

### Run Detail

- 主體是 stage board
- 右側是 run / attempt / selected job inspector
- logs 與 board 同層切換，不另開 overlay

## Explorer / Overview 規則

### Explorer

- 左側 tree 是 navigator，不是內容牆
- 右側主體優先顯示當前 scope 與 definitions
- readiness / runtime signals 只做 summary，不搶主列表

### Overview

- 保留 glass 與 signal 質感，但只用於 shell、summary、attention
- 主工作內容仍使用清晰實體面

## 視覺規則

### 邊界優先序

1. 間距
2. 底色層差
3. inset / elevation
4. 線條

### 圓角

- 只保留小弧度
- 不使用大圓角或過度膨脹的 pill card

### Glass 使用位置

允許：

- family shell
- dialogs
- signal strips
- summary tiles
- attention blocks

避免：

- 主編輯面
- 主列表全文區
- SQL / step editor 主畫布

## 已落地的實作方向

- family shell 收斂到 `PipelineWorkspaceLayout`、`Runs`、`Run Detail`、`Explorer`、`Overview`
- `StageLaneBoard` 已改成 lane + compact tile 語法
- `Config` 已拆成 topology 與 job workspace 兩種工作模式
- `step navigator / step editor / parameter list` 已改成更明確的主從關係

## 後續延伸原則

之後若要新增 family 相關頁面或新元件，優先沿用以下語法：

- shell：`iris-family-shell`
- context：`iris-family-context`
- strip：`iris-signal-strip`
- workspace：`iris-workspace-shell`
- inspector：`iris-inspector-rail`
- lane：`iris-lane-shell`
- tile：`iris-job-tile`
- navigator item：`iris-step-nav-item`
