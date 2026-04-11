# IrisPipe Pipeline Family Redesign Spec

## 0. 範圍與證據基線

這份文件基於以下可驗證來源整理，不把口述需求直接當成現況事實：

- domain brief：
  `frontend/docs/IRISPIPE_PIPELINE_DOMAIN_BRIEF.md`
- 現行頁面實作：
  `frontend/src/pages/PipelineConfigPage.tsx`
  `frontend/src/pages/PipelineRunsPage.tsx`
  `frontend/src/pages/RunDetailPage.tsx`
- 現行共用元件與樣式：
  `frontend/src/components/StageLaneBoard.tsx`
  `frontend/src/components/StatusBadge.tsx`
  `frontend/src/components/ui/Surface.tsx`
  `frontend/src/index.css`
- 主題限制：
  `frontend/src/state/theme.constants.ts`
  `frontend/tailwind.config.cjs`
- 可用真實畫面：
  `tmp-pipeline-config.png`

限制說明：

- 使用者原先提到的 3 張本地圖檔不存在，無法直接檢視。
- workspace 中可找到 `tmp-pipeline-config.png`，可作為 Config 現況截圖證據。
- `tmp-pipeline-runs.png` 與 `tmp-pipeline-run-detail.png` 目前是瀏覽器拒絕連線畫面，不是產品 UI，因此 Runs / Run Detail 的現況診斷以程式實作為主。

---

## 1. 現況問題診斷

### 1.1 Family 層級問題

- `Config / Runs / Run Detail` 已共享部分 shell class，但資訊層級仍不一致。`Config` 強調 topology，`Runs` 偏 ledger，`Run Detail` 偏 board + inspector，三者缺少統一的「pipeline identity + current state + next action」骨架。
- family header 目前存在，但缺少穩定的第一資訊列。使用者在三頁之間切換時，會重新學一次各頁的重點區域。
- runtime 語意已在 `pipeline-runtime.ts` 做得很完整，但頁面沒有把這組 domain 語意提升成一致的 UI hierarchy，導致很多資訊只存在於 badge / tooltip /右側 inspector，而不是主閱讀流。

### 1.2 Config 現況問題

來自真實截圖 `tmp-pipeline-config.png` 與 `PipelineConfigPage.tsx` / `StageLaneBoard.tsx`：

- 畫面橫向空白過大。stage lanes 只佔左上角一段，剩餘大面積空白沒有提供額外導航、縮放、概覽或落點提示，造成「資料少」與「設計未完成」的錯覺。
- topology 的主要閱讀線不夠強。stage connector 很細，`THEN` 文案太小，stage barrier 語意存在但不夠明確。
- stage 與 job 的層級關係有呈現，但 stage header、job card、右側 overview 三者都在搶資訊主角，沒有形成清楚的主次。
- 右側 `Pipeline Overview` 固定佔寬，會壓縮 topology 可讀面積；但其內容大多是 summary，不是當下主要工作區。
- job workspace 目前是「直接替換整個主區」，不是與 topology 並存。這會造成編輯時失去 stage flow 上下文，尤其在跨 stage 移動 job、檢查平行度、確認順序時成本偏高。
- stage / job actions 主要依賴 hover 顯示 icon-only toolbar。可發現性不足，且 hover 才顯示會讓桌機滑鼠使用者與鍵盤使用者的感知不同。
- Config readiness 做得很用心，但現在主要停留在右側 summary tiles 與小 badge，沒有真正回饋到 topology 本身的閱讀節點。
- job card 的資訊密度不足以支撐編輯決策。使用者需要來回點開 inspector 或 workspace 才知道 connection readiness、step 組成、atomic level 是否合理。

### 1.3 Runs 現況問題

來自 `PipelineRunsPage.tsx`：

- Runs 已經被定義為 execution history 工作面，這是對的；但版面還是偏「列表 + 一些統計」，缺少明確的 run operations narrative。
- header 同時放 latest signal、history metrics、success rate、execute。資訊都對，但優先順序不夠集中，使用者第一眼不一定知道「現在最新 run 是否健康」以及「下一步應該看哪一筆」。
- list row 只呈現 `run id / time / duration / status`，對於 domain 很關鍵的 `attempt existence`、`execution kind`、`resumable reason` 沒有進主列表。
- filter chips 目前只按 status family 切，沒有按時間群組、風險群組、最近一次失敗、最近一次 resumable 等工作流導向分組。
- `Execute` 是主 CTA，但與歷史列表的關係還不夠緊。執行新 run 前，頁面沒有明確提醒會建立新的 logical run。
- list row 的 hover 文案只有 `Inspect`，訊息價值太低。對 operator 來說，應該更明確指出進入後能看什麼。

### 1.4 Run Detail 現況問題

來自 `RunDetailPage.tsx`：

- `attempt` 目前只是上方一排 pills。可以切，但不足以說清楚 attempt timeline，也不足以表達 `INITIAL / RESUME / RERUN` 之間的因果與承接關係。
- board 與 logs 是 tab 切換，而且切到 logs 會完全失去 board context。對除錯流程來說，理想狀態是保留 run / attempt context，不應把主要結構整個切掉。
- `Run Overview` 與 `JobRuntimeInspector` 共用同一個右側 rail，基本方向正確，但現在太像二選一面板，沒有形成「總覽固定、細節疊加」的關係。
- top action 群組把 `stop / resume / rerun / delete` 放在同一串小按鈕裡，雖然有 disabled 與 confirm，但高風險操作的權重差異不夠明確。
- stage board 雖能表達 stage-first domain，但還不夠強調 barrier。使用者看得出 stage 先後，卻不一定看得出「哪一個 stage 是 blocker」。
- job inspector 已顯示 I/O、transaction、skip/filter、step detail，資訊其實足夠，但觸發點過於依賴選取 job；缺少在 board 上就能快速掃描異常的能力。
- logs 現在是單純 log list，沒有和 selected attempt、selected stage、selected job 形成聯動，排錯效率仍有限。

### 1.5 視覺與狀態系統問題

來自 `StageLaneBoard.tsx`、`StatusBadge.tsx`、`index.css`：

- 目前已大量使用 semantic tokens，方向正確；但不同資訊層級都用了很多 glass / inset / gradient，造成「面板都像重點」。
- active、selected、hover、drag 的狀態樣式都有，但規則分散在元件內，沒有明確一套 state contract。
- topology mode 與 runtime mode 的 stage/job 卡片共用同一元件，但語意差異沒有擴大到足夠明顯。兩者看起來像同一版稍作變色，而不是「編輯視角」與「執行視角」。
- loading / empty / disabled 都有各自樣式，但未形成 family 一致規則，實作容易逐頁漂移。

---

## 2. 整體設計原則

### 2.1 One Family, Three Lenses

- `Config`、`Runs`、`Run Detail` 必須是同一個 pipeline workspace 的三個視角，不是三個不同產品。
- 三頁都維持相同的 family shell：
  `identity row -> context row -> workspace -> inspector`

### 2.2 Stage-First, Job-Operable

- pipeline 最重要的 domain 語意是 stage sequence 與 stage barrier。
- UI 主結構先讓人讀懂 stage flow，再讓人落到 job。
- job 是主要操作單位，但不應搶走 stage flow 的主敘事。

### 2.3 Summary 永遠服務主工作流

- summary tiles 只在幫助判斷下一步時出現，不應為了「看起來完整」而固定佔位。
- 摘要資訊要回饋到主要畫面本身，而不是只存在右側面板。

### 2.4 編輯與觀察並存

- Config 不應在進入 job workspace 時丟失 topology。
- Run Detail 不應在看 logs 時丟失 attempt / stage context。

### 2.5 狀態是第一層資訊

- runtime status、readiness status、action availability 都必須在主畫面第一屏可讀。
- tooltip 只能補充說明，不能承擔主要語意。

### 2.6 危險操作必須被解釋

- `stop / resume / rerun / delete` 都屬高風險或高成本操作。
- UI 不只要顯示是否可按，還要說明其後果與作用範圍。

### 2.7 Semantic Tokens Only

- 所有主題相依顏色一律走 daisyUI semantic tokens。
- `primary` 只用於主要選取與主要 CTA。
- `info / success / warning / error` 只用於語意狀態，不做裝飾色。

---

## 3. 最推薦主方案

### 主方案 A：Stage-First Workspace Shell

這是我最推薦的方案。

- Config：
  中央固定保留 topology canvas，job workspace 以底部 dock 打開，右側 rail 保持 contextual inspector。
- Runs：
  採用「latest run hero strip + execution ledger list」，列表仍是核心，但第一屏先回答現在發生什麼、下一步應看哪筆。
- Run Detail：
  採用「attempt timeline strip + stage board + persistent overview rail + optional job inspector overlay」，避免在 logs / board 之間做整頁切換。

這個方案的核心價值：

- stage flow 永遠可見。
- job editing 與 runtime debugging 都保留全局上下文。
- family shell 可高度共用。
- 可直接映射現有 `StageLaneBoard`、`StatusBadge`、`SurfaceBox`、`PipelineWorkspaceLayout`，重構成本低於全面推翻。

### 相較目前畫面的主要差異

- 目前 Config 在編輯 job 時會替換主區；主方案改為 topology 常駐、job workspace 底部展開。
- 目前 right rail 長時間佔用 Config 空間；主方案把 summary rail 收斂成 contextual rail，避免 summary 搶走 canvas。
- 目前 Runs 把重要資訊平均分散在 header 與表格；主方案把「最新狀態、可恢復、執行入口」集中成 hero strip。
- 目前 Run Detail 的 attempt 只是 pills；主方案把 attempt 改成明確時間序列，並把 `INITIAL / RESUME / RERUN` 的承接關係顯示出來。
- 目前 Run Detail 的 logs 與 board 二擇一；主方案改為 board 為主、logs 為輔助面板或可切半視圖。

---

## 4. Config / Runs / Run Detail 的資訊架構與版面策略

### 4.1 Config

#### 目標

- 先看懂 stage flow。
- 快速判斷哪個 stage / job 尚未 ready。
- 在不離開 topology 的前提下編輯 job。

#### 資訊架構

- identity row
  pipeline 名稱、folder path、dirty state、save status
- context row
  `Config / Runs` family tabs、pipeline readiness summary、global actions
- main workspace
  topology canvas
- right rail
  contextual inspector
  預設是 pipeline overview
  選 stage 時是 stage inspector
  選 job 時是 job summary inspector
- bottom dock
  job workspace
  只在明確進入編輯時展開

#### 版面策略

- desktop
  `main canvas 1fr + right rail 320px`
  bottom dock 高度 44% 到 56% 可調
- laptop 小寬度
  right rail 可 collapse 成 icon rail
  bottom dock 保留
- mobile / narrow
  topology 改為單欄 stage stack
  inspector 與 job workspace 改為 full-screen sheet

#### 版面規格

- stage lane 寬度：
  `280px` 基準，可在 `264px ~ 320px` 間伸縮
- stage lane 間距：
  `24px`
- stage connector 區寬：
  `40px`
- right rail：
  `320px`
- bottom dock：
  最小 `340px`，預設 `420px`

#### Config 主畫面內容優先順序

- 第一層：
  stage sequence、selected stage/job、pipeline readiness、save/import/add stage
- 第二層：
  job readiness、step count、connection hints、atomic level
- 第三層：
  validation 文案、說明性 guidance、進階設定

### 4.2 Runs

#### 目標

- 一眼知道最新 run 狀態。
- 一眼知道是否有 active / failed / resumable。
- 快速進入最值得看的 run detail。

#### 資訊架構

- identity row
  pipeline 名稱、folder path、family tabs
- hero strip
  latest run、latest status description、execute CTA、resumable summary
- context row
  filters、history metrics、sort / grouping
- ledger list
  run rows
- side drawer 可選
  quick preview of selected run

#### 版面策略

- hero strip 不是 KPI dashboard，而是 operator cue strip。
- list 仍然是主角，hero strip 只回答：
  現在最新狀態是什麼？
  有沒有要處理的異常？
  下一步該執行還是該進 detail？

#### Run row 結構

- leading signal
  status dot
- identity block
  `#run id`、latest 標記、resumable / active 標記
- semantic block
  執行狀態描述
- attempt block
  latest attempt kind、attempt count
- time block
  started at、duration
- action affordance
  `Open Detail`

#### 分組策略

- 預設按時間倒序
- 可切：
  `All`
  `Active`
  `Failed`
  `Completed`
  `Resumable`
- 可追加次級 grouping：
  `Today`
  `Last 7 days`
  `Older`

### 4.3 Run Detail

#### 目標

- 先看懂這個 run 的當前狀態與 attempt timeline。
- 再看目前 active / failed stage 與 job。
- 最後進入 job metrics / logs / step failure 證據。

#### 資訊架構

- identity row
  run id、effective status、created/start/end、back to runs
- attempt timeline strip
  attempt chips 改為明確序列
- action group
  stop / resume / rerun / delete
- main board
  stage board
- right rail
  persistent run overview
- overlay inspector
  selected job runtime inspector
- bottom log drawer
  logs / event stream / exit descriptions

#### 版面策略

- `Run Overview` 不應因選 job 而消失，應維持在 right rail。
- `JobRuntimeInspector` 應作為從右側滑出的第二層 overlay，覆蓋在 overview 之上，關閉後回到 overview。
- logs 不應吃掉整個主畫面，改為底部 drawer 或右下 split panel。
- stage board 上要直接可掃到：
  active stage
  failed stage
  blocked downstream stage
  skipped-on-resume stage

#### Attempt timeline 結構

- item 內容：
  `Attempt #n`
  `INITIAL / RESUME / RERUN`
  status
  start-end
  若為 latest 額外標示 `current`
- 連線文案：
  `resume from stage X`
  `rerun from snapshot`

---

## 5. Stage / Job / Run / Attempt / Action / Status 的元件規則

### 5.1 Stage

#### Config variant

- 元件名稱建議：
  `PipelineStageLane`
- 結構：
  lane shell
  lane header
  lane body
  optional footer
- header 內容：
  stage index、stage name、job count、issue count、lane actions
- body 內容：
  job slabs
  empty slot CTA
- footer 內容：
  readiness summary 或 barrier note

#### Runtime variant

- 保留相同骨架，但 header 加入 stage status 與 progress。
- 若 stage 為 blocker：
  header 顯示 `Blocked downstream` 或 `Current active barrier`。

#### 規則

- stage 是 flow container，不是大卡片 dashboard。
- selected stage 以 border / ring 呈現，不以大面積填色搶主畫面。
- stage actions 不應只依賴 hover；在 selected 或 focus-within 時必須常駐。

### 5.2 Job

#### Config variant

- 元件名稱建議：
  `PipelineJobSlab`
- 必備欄位：
  job name
  step count
  connection summary
  readiness state
- 可選欄位：
  atomic level
  issue count

#### Runtime variant

- 必備欄位：
  job name
  status
  duration
  read/write summary
  first error line
- 可選欄位：
  atomic level badge
  wait time

#### 規則

- job 永遠是 compact slab，不是二次 panel。
- 左側 semantic bar 是快速掃描工具，不是唯一狀態來源；仍需搭配 dot / badge / text。
- topology job slab 最大顯示 3 行資訊。
- runtime job slab 最大顯示 4 行資訊。
- 超出的細節一律進 inspector，不在卡片內堆字。

### 5.3 Run

- 元件名稱建議：
  `RunLedgerRow`
- 必備欄位：
  run id、latest status、latest attempt kind、attempt count、start time、duration
- 若 resumable：
  row 內必須顯示原因型文案
  例如：
  `Failed at stage transform; resumable`
- latest row 預設有較高層級背景，但不能蓋過 status 色。

### 5.4 Attempt

- 元件名稱建議：
  `AttemptTimelineItem`
- 規則：
  以時間序由左到右
  `INITIAL` 是起點
  `RESUME` 必須顯示 resume 起點 stage
  `RERUN` 必須顯示 new logical execution from snapshot
- selected attempt 要有主選取狀態。
- latest attempt 與 selected attempt 是兩個獨立標記，不能混為一談。

### 5.5 Action

- 分三層：
  primary、secondary、danger
- `Execute`、`Resume` 只可有一個當下 primary。
- `Rerun` 是 secondary，不應與 `Resume` 同權重。
- `Delete` 永遠 danger，且不與其他操作共色。
- `Stop` 屬 danger-secondary：
  視覺低於 delete，但高於普通 secondary。

#### Action placement

- Config：
  `Save Pipeline` primary
  `Import File` secondary
  `Add Stage` secondary
- Runs：
  `Execute` primary
  `Refresh` secondary
- Run Detail：
  `Resume` 或 `Stop` 視情境可成 primary
  `Rerun` secondary
  `Delete` danger

### 5.6 Status

- 統一元件：
  `StatusBadge`
- 組成：
  dot + label + optional assistive text
- 規則：
  `badge` 用於局部語意
  `text mode` 用於密度高區域
  大區塊狀態不要只靠 badge，要搭配文字敘述

#### Status mapping

- `STARTING / STARTED`
  `info`
- `COMPLETED`
  `success`
- `STOPPING / STOPPED`
  `warning`
- `FAILED / ABANDONED`
  `error`
- `PENDING / NOT_RUN / SKIPPED / UNKNOWN`
  `neutral` 或 `base-*`

---

## 6. Hover / Active / Selected / Focus / Drag / Disabled / Loading / Empty State 規則

### 6.1 Hover

- hover 只做強調，不改變 layout。
- hover 可以顯示次要 action，但不得造成 header 高度改變或 card reflow。
- hover 背景變化幅度控制在單一 semantic layer：
  `bg-base-200/40`
  `bg-primary/6`
  `bg-info/6`

### 6.2 Active

- active 用於按下中、切換中、暫時操作中。
- 視覺表現：
  輕微壓下
  邊框增強
  不做大幅 scale
- 對 operator 工具而言，`active:scale-95` 只能保留在 button，不應套用到大卡片與 list row。

### 6.3 Selected

- selected 是最重要的局部狀態，必須明確區別於 hover。
- 規則：
  `border-primary/40 + ring-1~2 + bg-primary/5`
- selected item 的 action 區常駐顯示。

### 6.4 Focus

- keyboard focus 一律明確可見。
- 用 `ring-primary/35` 或 `outline-primary`，不可只靠 border 微變化。
- stage、job、run row、attempt item 都必須可被 tab focus。

### 6.5 Drag

- 拖曳中的原件：
  降低原位 opacity
  overlay 使用 `bg-base-100/95 + border-primary/40 + shadow-xl`
- drop target：
  只顯示一個插入線或 stage body highlight
  不要同時整片發光又顯示多個 `Drop here`
- stage drag 與 job drag 必須視覺分離。

### 6.6 Disabled

- disabled 不只降 opacity，還要明確說明原因。
- 高風險 action 的 disabled reason 要可見於 tooltip 或 inline helper。
- disabled action 仍保留語意色階，但降低對比，不可完全灰化成不可辨識。

### 6.7 Loading

- loading 分三種：
  page loading
  section loading
  inline action loading
- page loading：
  skeleton + structural placeholder
- section loading：
  保留版面，局部 shimmer
- inline action loading：
  spinner + verb change
  例如：
  `Saving...`
  `Launching...`
  `Stopping...`

### 6.8 Empty State

- empty state 要說清楚缺什麼、下一步做什麼。
- Config empty：
  `No stages yet`
  CTA `Add Stage`
- Runs empty：
  `No runs yet`
  CTA `Execute Pipeline`
- Run Detail empty：
  `No stage projection`
  解釋是尚未 materialize 或該 attempt 無資料

---

## 7. 動畫原則

### 7.1 可接受動畫

- hover emphasis：
  `120ms ~ 160ms`
- selected / active transition：
  `160ms ~ 200ms`
- panel / drawer / overlay：
  `180ms ~ 240ms`
- in-flight pulse：
  `1.6s ~ 2s`，僅限 active status dot 或 execute ring

### 7.2 不可接受動畫

- 造成 layout shift 的 hover 展開
- 在 stage lane / run row 上使用大幅 scale
- 長時間、無資訊價值的裝飾 motion
- 同一屏同時多處 pulse，讓使用者無法判斷哪裡是真正 active

### 7.3 動畫規則

- motion 必須服務「狀態變化」而非「好看」。
- stage / job 狀態切換時，優先做 color and opacity transition，不做位置跳動。
- bottom dock / inspector overlay 使用短距 slide + fade 即可。
- logs 新資料進來時，只做細微 fade-in 或 highlight，不自動捲動搶焦點。

---

## 8. 基於 daisyUI semantic tokens 的 light / dark / dracula / autumn 色彩規則

### 8.1 共通語意映射

- app canvas：
  `base-200`
- primary surfaces：
  `base-100`
- secondary surfaces：
  `base-200`
- structural separators：
  `base-300`
- primary selection / main CTA：
  `primary`
- structural grouping：
  `neutral`
- active runtime：
  `info`
- success：
  `success`
- warning / stop / resumable：
  `warning`
- failure / delete / abandoned：
  `error`

### 8.2 Surface usage

- family shell：
  `bg-base-100`
- context strip：
  `bg-base-100` 疊 `border-base-300`
- topology canvas：
  `bg-base-200`
- stage lane shell：
  `bg-base-100`
- job slab：
  `bg-base-100`
- summary / inset：
  `bg-base-200`

### 8.3 Foreground rules

- 放在語意色面上的文字必須配對 `*-content`
- 例如：
  selected attempt item
  `bg-primary text-primary-content`
- 狀態 badge 若使用 `badge-success` 類型，也要保證使用 success content 對比

### 8.4 Theme-specific rules

#### light

- 以 `base-100 / base-200 / base-300` 建立層次即可，不需要額外提高飽和度。
- connector 與 divider 以 `neutral` 或 `base-content/弱透明` 表達，避免太淡而消失。

#### dark

- stage lane、job slab、inspector rail 的層次差要比 light 明顯一級，否則整片容易糊成一塊。
- `info`、`success`、`warning`、`error` 只做點狀強調，不做大片底色。

#### dracula

- `primary` 飽和度高，不能濫用在所有結構線上。
- 選取態用 `primary`，結構線與 topology connector 回到 `neutral` / `base-300`。
- `error` 與 `warning` 已足夠亮，避免再疊高透明背景造成雜訊。

#### autumn

- `warning` 與整體暖色系接近，容易與普通結構色混淆。
- 在 autumn 中：
  `warning` 只保留給 stop / resumable / attention
  `primary` 承擔 selected
  結構背景堅持用 `base-*`

### 8.5 明確禁止

- 禁止 `text-gray-*`
- 禁止 `bg-white`
- 禁止 raw hex 當作主題相依表面色
- 禁止用固定灰階完成 topology、list row、inspector 的層次

---

## 9. ASCII Wireframe

### 9.1 Config 主方案

```text
+--------------------------------------------------------------------------------------+
| Pipeline / test                                               Dirty  Save Pipeline   |
| [Config] [Runs]   Runnable: 4/4 jobs ready   Import   Add Stage                      |
+--------------------------------------------------------------------------------------+
|                                   TOPOLOGY CANVAS                          | Context  |
|                                                                            |          |
| +-----------+     +-----------+     +-----------+                          | Pipeline |
| | Stage 1   | --> | Stage 2   | --> | Stage 3   |                          | Overview |
| | bootstrap |     | sync-core |     | publish   |                          | or       |
| | 2 jobs    |     | 4 jobs    |     | 1 job     |                          | Stage /  |
| |-----------|     |-----------|     |-----------|                          | Job      |
| | job A     |     | job C     |     | job G     |                          | Summary  |
| | job B     |     | job D     |     |           |                          |          |
| |           |     | job E     |     |           |                          |          |
| |           |     | job F     |     |           |                          |          |
| +-----------+     +-----------+     +-----------+                          |          |
|                                                                                      |
+--------------------------------------------------------------------------------------+
| JOB WORKSPACE DOCK                                                                    |
| test.sync-core.job D                                                                  |
| [Steps] [Connections] [Batch] [Placement]                                             |
| +----------------------+------------------------------------------------------------+ |
| | Step Nav             | Step Editor                                                | |
| | 1 EXECUTE            | SQL                                                        | |
| | 2 UPSERT             | ...                                                        | |
| | 3 DELETE             | Parameters / watermark / dest table                        | |
| +----------------------+------------------------------------------------------------+ |
+--------------------------------------------------------------------------------------+
```

### 9.2 Runs 主方案

```text
+--------------------------------------------------------------------------------------+
| Pipeline / test / Runs                                                 Execute Run   |
| Latest: Run #104 FAILED at stage transform     Resumable from transform              |
+--------------------------------------------------------------------------------------+
| [All] [Active 1] [Failed 3] [Completed 18] [Resumable 2]    24 visible runs         |
+--------------------------------------------------------------------------------------+
| Run      Semantic Summary                     Attempt        Started      Duration     |
|--------------------------------------------------------------------------------------|
| #104     Failed at stage transform            RESUME x3      10:42:12     4m 12s  >  |
| #103     Completed all 4 stages               INITIAL x1     09:10:01     2m 44s  >  |
| #102     Stopped before stage publish         INITIAL x1     08:33:18     1m 20s  >  |
| #101     Completed all 4 stages               RERUN x2       07:59:02     2m 40s  >  |
+--------------------------------------------------------------------------------------+
```

### 9.3 Run Detail 主方案

```text
+--------------------------------------------------------------------------------------+
| Run #104   FAILED   4m 12s                                  Resume   Rerun   Delete  |
| Attempt Timeline:  [#1 INITIAL completed] -> [#2 RESUME failed] -> [#3 RESUME live] |
+--------------------------------------------------------------------------------------+
|                                      STAGE BOARD                           | Overview |
| +-----------+     +-----------+     +-----------+                          | Status   |
| | Stage 1   | --> | Stage 2   | --> | Stage 3   |                          | Progress |
| | Completed |     | Failed    |     | Not Run   |                          | Resume   |
| |-----------|     |-----------|     |-----------|                          | Semantics|
| | job A ok  |     | job C ok  |     | job G --  |                          |          |
| | job B ok  |     | job D err |     |           |                          |          |
| +-----------+     +-----------+     +-----------+                          |          |
+--------------------------------------------------------------------------------------+
| LOG DRAWER                                                                            |
| [All Logs] [Selected Job] [Errors Only]                                               |
| 10:43:01 ERROR job D failed ...                                                       |
| 10:43:00 INFO  step upsert ...                                                        |
+--------------------------------------------------------------------------------------+
```

---

## 10. 工程落地建議

### 10.1 建議沿用並重構的現有元件

- `PipelineWorkspaceLayout`
  保留 family shell 骨架
- `StageLaneBoard`
  升級成明確的 topology/runtime 雙 variant
- `StatusBadge`
  保留，但補上 size / density / assistive text contract
- `SurfaceBox`
  保留，減少無差別 glass 使用

### 10.2 優先重構順序

1. 先重構 family shell，統一 header / context / workspace / inspector 架構。
2. 再重構 `StageLaneBoard`，把 stage/job 視覺語意明確分成 config/runtime 兩套。
3. 將 Config job workspace 改成 bottom dock，不再替換主區。
4. 將 Run Detail logs 改成 drawer / split panel，保留 stage board。
5. 最後才微調 motion、glass、secondary summary styling。

### 10.3 驗收標準

- 使用者能在 3 秒內指出 pipeline stage flow。
- 使用者能在 5 秒內找到最新失敗 run 與 resumable run。
- 使用者能在 Run Detail 第一屏判斷目前是看哪個 attempt、失敗在哪個 stage、下一個可做動作是什麼。
- light / dark / dracula / autumn 四個主題都可辨識 selected、active、warning、error。
- hover 不造成 layout shift。
- Config 編輯 job 時，仍可看見 topology 與 stage sequence。

---

## 11. 結論

IrisPipe pipeline family 最適合的方向，不是把三頁各自做得更漂亮，而是把它們收斂成同一個 stage-first operator workspace。

最推薦主方案是：
`Stage-First Workspace Shell`

理由很直接：

- 它最符合 domain brief 的 `stage sequence + stage barrier + job operability`。
- 它能保留目前已經存在的 `StageLaneBoard`、`StatusBadge`、semantic token 基礎。
- 它同時修正目前 Config 的上下文斷裂、Runs 的語意鬆散、Run Detail 的切屏式除錯問題。

若要一句話總結與目前畫面的差異：

- 現況是「頁面各自成立，但缺少同一套 runtime 操作語言」。
- 新方案是「三頁共享同一個 pipeline workspace 語言，只是觀看鏡頭不同」。
