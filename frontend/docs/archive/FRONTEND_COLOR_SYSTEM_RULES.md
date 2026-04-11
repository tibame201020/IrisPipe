# IrisPipe Frontend Color System Rules

## 目標

這份規則定義 IrisPipe 前端的色彩語意，不只給 `pipeline family` 用，而是整個 frontend 都要遵守。

核心原則只有一句：

`色彩先表達語意，再表達美感。`

不要把顏色當作臨時補強手段。先決定這個區塊是：

- 工作面
- 結構群組
- 目前焦點
- 系統狀態
- 高風險操作

再決定要用哪組 daisyUI token。

## 1. Token 分工

### `base-*` = 工作面與閱讀面

用在：

- page canvas
- 主要內容區
- 表單
- editor
- list row
- modal content

規則：

- `base-100` 是主要內容面
- `base-200` 是次層表面
- `base-300` 是輕分隔、hover、未選取弱邊界
- 文字一律配 `base-content`

### `neutral` = 結構群組與框架邊界

用在：

- sidebar 群組
- shell 內的結構分區
- inspector rail
- topology stage lane
- 非語意狀態的明確群組邊界

規則：

- `neutral` 不代表壞或警告，它代表「這裡是一個獨立結構」
- 結構邊界優先從 `neutral` 派生，不要一直用 `base-content` 透明度硬試
- 群組 header 與群組 body 可以都來自 `neutral`，但 header 應更重

### `primary` = 主要焦點與主操作

用在：

- selected
- active tab
- main CTA
- 目前工作中的節點

規則：

- `primary` 只給「現在最重要的東西」
- 不要拿 `primary` 當一般邊界色
- selected state 只能加強，不應改變 layout

### `secondary` / `accent` = 次級強調

用在：

- 次要但需要被看見的強調
- 補充型 highlight
- 非主要流程的醒目提示

規則：

- `secondary` 比 `primary` 低一級
- `accent` 用在局部亮點，不用來承擔整體結構
- 不要拿 `accent` 當大面積背景

### `info / success / warning / error` = 系統狀態

只用在：

- run status
- job status
- validation state
- destructive action
- alerts / inline feedback

規則：

- 這四組只代表狀態，不代表一般 UI 分區
- runtime board 可以用狀態色輔助 stage / job
- config topology 不能用狀態色取代結構邊界

## 2. 邊界規則

### 一般內容區

- 主要表面：`base-*`
- 一般邊界：由 `base-content` 透明度派生

### 結構群組

- 群組背景：由 `neutral` 派生
- 群組 header：由 `neutral` 再加重
- 群組邊界：由 `neutral` 派生，不用 `primary`

### 選取態

- 邊界與 ring 才能轉成 `primary`
- 背景只做輕量 `primary` tint
- 不可新增會推動內容的控制列或區塊

### 狀態態

- 成功：`success`
- 失敗：`error`
- 進行中：`info`
- 停止 / 等待處理：`warning`

## 3. Pipeline Family 特別規則

### Topology mode

- canvas = `base-*`
- stage lane = `neutral`
- selected stage = `primary`
- job node = `base-*`
- connector = `neutral`

也就是：

- pipeline flow 的骨架靠 `neutral`
- 目前焦點靠 `primary`
- 不是反過來

### Runtime mode

- stage / job 結構仍先靠 `base-*` 與 `neutral`
- 狀態色只疊加在 runtime 語意上

## 4. 不該做的事

- 不要用 `primary` 去畫所有邊界
- 不要把 `success / error` 當一般區塊背景
- 不要只靠 `base-content/xx` 透明度試圖做出結構層級
- 不要每頁自己發明一套顏色語意
- 不要在 dark theme 才額外寫另一套固定色

## 5. 實作規則

- 優先用 daisyUI token：`primary`、`secondary`、`accent`、`neutral`、`base-*`、`info`、`success`、`warning`、`error`
- 如果需要自定 token，只能從這些 daisyUI token 派生
- 結構 token 應放在 `frontend/src/index.css`
- 頁面元件只能使用既有 token，不要自行發明固定色

## 6. 目前的全域結構 token

目前 `frontend/src/index.css` 已開始收斂這組 token：

- `--theme-structure-shell-bg`
- `--theme-structure-group-bg`
- `--theme-structure-group-header-bg`
- `--theme-structure-group-edge`

以及對應 class：

- `iris-structure-group`
- `iris-structure-group-header`

之後新的群組型 UI 應優先沿用這套，而不是重寫自己的 border/background 語法。
