# Pipeline Family Redesign Priorities

本文件整合以下來源，作為下一輪 `pipeline family` 重構的執行基準：

- `PIPELINE_FAMILY_FINAL_SPEC.md`
- 兩位資深 UI/UX reviewer 的獨立 review
- 目前實作畫面與 codebase 現況

目的不是再補零碎樣式，而是把 IrisPipe frontend 拉回「展示 backend pipeline 使用方式」的產品目標。

---

## 1. 核心問題

目前 `pipeline family` 的主要問題不是資訊不足，而是 **視覺秩序不足**。

具體表現：

1. `Config` 還沒有成為「一眼看懂 pipeline flow」的 workspace。
2. `stage / job / canvas` 的結構邊界不夠硬，特別是在暗色主題。
3. controls 分層不夠清楚，主要閱讀線常被 icon 與次級操作打斷。
4. `Runs` 與 `Run Detail` 雖已有較完整的 domain 語意，但仍有資訊區彼此競爭的風險。

一句話總結：

> frontend 已經有 backend 語意，但還沒有把語意轉成足夠清楚的視覺秩序。

---

## 2. 重構原則

### 2.1 先看 flow，再看 data，再看 controls

每一頁都必須有一個明確主視角：

- `Config`: stage flow
- `Runs`: run ledger
- `Run Detail`: attempt timeline + stage board

任何 summary、inspector、toolbar、drawer 都不能壓過主視角。

### 2.2 結構色與狀態色分離

- `neutral / base-*`：結構邊界與表面層次
- `primary`：目前焦點、selected context
- `success / warning / error / info`：runtime 狀態與語意提示

禁止再用 runtime 狀態色去承擔主要結構邊界。

### 2.3 主表面只留必要操作

主視圖上只保留「最常用且與目前閱讀直接相關」的操作。

其餘操作：

- 收進 contextual inspector
- 收進 kebab menu
- 或放入 secondary action row

### 2.4 Selected 必須是整體狀態，不是細邊框

`selected / active / focus / hover / drag / disabled` 必須有一致 contract。

`selected` 至少同時影響：

- surface
- border or ring
- content emphasis

不能只靠一條細 border。

### 2.5 暗色主題要以未選取狀態為基準驗證

light theme 容易看清楚，不代表 dark / dracula 也清楚。

驗證標準應為：

- 未選取 stage 是否可辨識
- 未選取 job 是否可辨識
- connector 是否可讀
- panel 與 canvas 是否不融在一起

---

## 3. 頁面優先順序

### Priority 1: Config

原因：

- 這是最核心的 backend 使用入口
- 也是目前 UI/UX 問題最明顯的一頁
- 若 `Config` 沒有先收穩，整個 family 的視覺語法都會漂

### Priority 2: Runs

原因：

- Runs 是 family 的歷史與決策入口
- 必須從 dashboard 傾向收回 ledger 主導

### Priority 3: Run Detail

原因：

- 資訊量最大
- 應建立明確的閱讀順序，而不是同時並列多個強區塊

---

## 4. Config 重構計畫

## 4.1 目標

讓使用者在 1 到 2 秒內理解：

1. pipeline 有幾個 stage
2. flow 從哪裡到哪裡
3. 每個 stage 有哪些 job
4. 選到某個 stage / job 之後，該去哪裡改

## 4.2 必改項

### A. topology 成為主角

- 壓低右側 inspector 的視覺權重
- 讓中央 topology 有更強的結構存在感
- bottom dock 保留功能，但視覺上是附屬工作區

### B. stage 邊界重做

stage 必須是清楚的結構單位，不是淡淡的 grouping。

應具備：

- 穩定的 column boundary
- 明確 header/body 分層
- 暗色主題下也能在未選取狀態辨識

### C. stage header 降噪

目前 stage badge、名稱、計數、toolbar 太擠。

應改成：

- 第一閱讀線：stage 名稱
- 第二閱讀線：job 數 / readiness 摘要
- 次級操作：獨立區塊，不打斷 stage 名稱

### D. job row 收斂

job row 應像「可操作 node」，不是「資訊清單項」。

只保留：

- job name
- step count
- issue hint
- 一個主要操作入口

其餘操作收斂到：

- inspector
- kebab menu

### E. controls 分層

禁止 stage / job 表面同時堆滿 icon-only controls。

規則：

- 主表面：1 個主操作
- 次要操作：menu
- 破壞性操作：inspector or confirm flow

### F. connector 強化

stage connector 必須在 light / dark / dracula 都清楚。

它的任務不是裝飾，而是幫助快速讀出 flow。

---

## 5. Runs 重構計畫

## 5.1 目標

讓使用者快速理解：

1. 最近有哪些 logical runs
2. 哪些是 active / failed / resumable
3. 最新 attempt 屬於什麼類型
4. 該打開哪一筆進一步處理

## 5.2 必改項

### A. hero strip 降權

hero 只保留最必要資訊：

- latest run summary
- execute CTA
- resumable hint

不再讓 metric tiles 搶過 ledger。

### B. ledger 成為絕對主體

row 必須先讓人讀到：

- status
- run id
- attempt context
- timeline
- next action

### C. filter strip 簡化

filter chips 保留，但視覺降噪。

避免：

- chips 與 hero 搶主體
- chips 看起來像第二組 dashboard

---

## 6. Run Detail 重構計畫

## 6.1 目標

讓使用者快速理解：

1. 這一筆 run 的目前狀態
2. 這是第幾次 attempt
3. 問題卡在哪個 stage / job
4. 下一步該看 logs、metrics 還是 steps

## 6.2 必改項

### A. 建立單一閱讀順序

推薦順序：

1. hero summary
2. attempt timeline
3. stage board
4. diagnostics
5. overview rail

不得讓多個區塊同時爭奪主視角。

### B. stage board 保持主體

run detail 的 board 要比 rail 與 drawer 更重要。

### C. diagnostics drawer 降為次級分析區

logs / metrics / steps 應明確是「深入分析」，不是主敘事。

### D. overview rail 收斂

右側 rail 應保留 run context 與 actions，但不能把主體拉走。

---

## 7. 色彩與狀態規則

## 7.1 結構色

- canvas：最低層背景
- shell：family chrome
- panel：section / inspector / dock
- stage：主要結構群組
- job：次級操作節點

都必須使用 daisyUI semantic token 衍生，不再用固定色。

## 7.2 狀態色

- `success`：completed / healthy
- `warning`：needs attention / resumable / risky
- `error`：failed / destructive
- `info`：running / informational progress

## 7.3 state contract

### hover

- 只輕微提升表面與邊界
- 不造成 layout shift

### selected

- surface + border/ring + emphasis 一起變

### focus

- 與 selected 不同
- 必須對鍵盤使用者清楚

### disabled

- 要看得出不可用，但仍是 control

---

## 8. 驗證方式

每一輪實作後，都要用真實頁面驗證，而不是只看 JSX。

必要檢查：

1. `Config`
   - 第一眼是否能看出 stage flow
   - stage 邊界是否清楚
   - controls 是否過多

2. `Runs`
   - ledger 是否壓過 hero
   - row 是否一眼看懂

3. `Run Detail`
   - 閱讀順序是否清楚
   - board 是否仍為主體

4. themes
   - light
   - dark
   - dracula
   - autumn

---

## 9. 下一輪執行順序

1. `Config`
   - stage boundary
   - stage header hierarchy
   - job row simplification
   - controls layering
   - connector clarity

2. `Runs`
   - hero strip reduction
   - ledger emphasis
   - filter simplification

3. `Run Detail`
   - reading order cleanup
   - board emphasis
   - drawer / rail reduction

這份文件就是下一輪實作的基準。若後續畫面與本文件衝突，以本文件優先，而不是以既有畫面優先。
