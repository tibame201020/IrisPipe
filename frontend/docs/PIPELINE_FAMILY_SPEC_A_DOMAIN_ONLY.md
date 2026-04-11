# IrisPipe Pipeline Family Spec A

角色：Senior UIUX with IrisPipe Pipeline Domain  
來源限制：僅依據 canonical domain brief，不引用 current view，不引用其他 repo 區域作為 domain 真理。

---

## 1. Family 定位

- 視覺方向：`industrial operations console`
- 產品主語意：`stage-first orchestration`、`logical run / attempt` 分層、`snapshot-bound run detail`
- family shell 固定為三層：
  - `Identity Row`
  - `Context Row`
  - `Main Workspace`
- `pipeline family` 是同一 workspace 的三個視角：
  - `Config`
  - `Runs`
  - `Run Detail`
- `step` 永遠不能與 `stage`、`job` 在主視圖同級競爭。

---

## 2. Family / Domain Invariants

以下 invariant 在後續 UI 重構中不可被破壞：

1. `Config` 永遠是 current config 視角。
2. `Runs` 永遠是 logical run history 視角。
3. `Run Detail` 永遠是單一 logical run 下的 snapshot-bound attempt/runtime 視角。
4. `execute` 建立新 logical run。
5. `rerun` 建立新 logical run，但沿用舊 run snapshot。
6. `resume` 不建立新 logical run，只在既有 run 下建立新 attempt。
7. run 與 attempt 必須永久分層，不可互相替代。
8. `stage-first flow` 是主結構，不可退化成任意 DAG editor。
9. stage 之間是 barrier/sequence，不是任意 dependency graph。
10. `job` 是 stage 內的主要工作單元，但不是 stage 的替代主結構。
11. `step` 是 job 內部單元，不可升格為 family-level 主節點。
12. runtime status 是執行語意，不是結構語意。
13. `selected` 與 `runtime status` 必須雙軌存在，不可互相覆蓋。
14. `snapshot` 視角與 `current config` 視角必須清楚區分。
15. `SKIPPED` 與 `NOT_RUN` 在 resume 語境下不可被誤讀為 failure。

---

## 3. 視角邊界與不可混層規則

### 3.1 Config

`Config` 只回答：

- stage flow 長相
- stage barrier 與順序
- job 屬於哪個 stage
- pipeline readiness
- 目前選到哪個 stage/job
- job 編輯上下文

`Config` 不回答：

- logical run history
- attempt timeline
- runtime diagnostics
- 某次 run 的 status board

### 3.2 Runs

`Runs` 只回答：

- 最近有哪些 logical run
- 哪些 run 失敗、進行中、可 resume
- 每筆 run 的 latest attempt 摘要
- 哪筆 run 值得打開 detail

`Runs` 不回答：

- current config 細節
- runtime board
- step-level diagnostics

### 3.3 Run Detail

`Run Detail` 只回答：

- 單一 logical run 的內容
- 目前查看中的 attempt
- attempt timeline
- runtime board
- stage/job/step diagnostics

`Run Detail` 不回答：

- current config 編輯
- 其他 logical run 的內容
- latest attempt 與 currently viewed attempt 的模糊混寫

### 3.4 不可混層規則

1. `Config` 不得把 current config 與 snapshot 混成同一主視角。
2. `Runs` 不得把 attempt 當成與 run 同級的 ledger 主列。
3. `Run Detail` 不得把 latest attempt 與 currently viewed attempt 混為一談。
4. 任一頁都不得把 `step` 拉升成與 `job` 或 `stage` 同級的主導航對象。

---

## 4. Selection Model 與 Hierarchy Guardrails

### 4.1 Selection Model

- 每頁同時只有一個 primary selection。
- `Config`：
  - primary selection 只能是 `stage` 或 `job`
- `Runs`：
  - primary selection 只能是 `run`
- `Run Detail`：
  - page-bound primary selection 是 `attempt`
  - board 內可再有 diagnostics target selection，但必須屬於目前選取的 attempt

### 4.2 Hierarchy Guardrails

- `stage` 是 pipeline flow 的主結構單位
- `job` 永遠隸屬於某一個 stage
- `step` 永遠隸屬於某一個 job
- `step` 不是 pipeline graph node
- `job` 不可脫離 stage 被表達為獨立 lane
- `stage` 不可被弱化成單純容器裝飾

### 4.3 不可越級規則

1. 不可直接從 pipeline level 選到 step 並跳過 job context。
2. 不可在 topology/runtime board 上把 step 畫成與 stage/job 同級。
3. 不可把 job 的局部細節回寫成 stage 的主語意。
4. 不可把 stage 的 flow 順序下放成 job-to-job 任意 dependency graph。

---

## 5. Run Detail 的 Snapshot-Bound 視角

`Run Detail` 是 snapshot-bound 視角，不是 current config 視角。

### 5.1 定義

- 頁面綁定到單一 logical run。
- 該 run 可有多個 attempts。
- 當下只能有一個「目前查看中的 attempt」。
- 目前查看中的 attempt 不等於 latest attempt，除非頁面明示兩者相同。

### 5.2 表達規則

- 頁首必須同時可辨識：
  - `run identity`
  - `attempt identity`
  - `attempt kind`
  - `snapshot context`
- 若使用者正在看較早的 attempt，頁面必須明講。
- `rerun` 與 `resume` 在 `Run Detail` 都必須被表達為 snapshot 視角，不可讓人以為是在看 current config。
- 若 current config 與該 run snapshot 已分歧，頁面必須明示 `snapshot drift`。

### 5.3 ASCII 語意示意

```text
--------------------------------------------------+
| Run Detail                                      |
| run = R-184                                     |
| viewing attempt = A-3 (RESUME)                  |
| snapshot = S-184                                |
| current config = different context              |
--------------------------------------------------+
```

---

## 6. Config 中 Stage Header 的語意定義

`Config` 中 stage header 的「狀態摘要」不能是 runtime status。

### 6.1 只能承載

- stage identity
- 在 flow 中的順序
- 該 stage 內 job 數量
- 該 stage 是否為目前選取上下文
- 該 stage 對 pipeline readiness 的貢獻或缺口摘要

### 6.2 不得承載

- `PENDING`
- `STARTED`
- `COMPLETED`
- `FAILED`
- `STOPPED`
- `SKIPPED`
- `NOT_RUN`
- attempt-specific runtime 結果

### 6.3 規則

- `Config` 的 stage header 是 structure/readiness/context。
- `Run Detail` 的 stage 區塊才是 runtime/attempt-bound status。
- 不可用同一個視覺符號同時代表 config readiness 與 runtime result。

---

## 7. Domain-Level Content Semantics

### 7.1 resume

- 語意：在既有 logical run 下建立新的 attempt。
- 不得寫成「重跑整條 pipeline」。
- 應能讓人理解 upstream 可能 `SKIPPED`，downstream 可能 `NOT_RUN`。

### 7.2 rerun

- 語意：建立新的 logical run，但沿用舊 run snapshot。
- 不得寫成「用最新 config 再跑一次」。

### 7.3 skipped

- 語意：在該 attempt 中被略過。
- 在 resume 語境下，常代表 upstream 已完成而本次未重做。
- 不得視覺上等同 `FAILED` 或 disabled。

### 7.4 not_run

- 語意：在該 attempt 中尚未執行。
- 常見於 downstream 尚未到達。
- 不得等同 skipped 或 completed。

### 7.5 blocked

- 語意：輔助判讀，表示目前受阻。
- 不是主 runtime status。
- 必須作為 flag/annotation，而非取代主狀態名稱。

### 7.6 current config

- 語意：目前可編輯、當前存在的 pipeline config。
- 只應在 `Config` 成為主視角。

### 7.7 snapshot

- 語意：run 執行時建立的 config snapshot。
- 在 `Run Detail` 必須被清楚標記為 runtime 的依據。

### 7.8 snapshot drift

- 語意：current config 與某個 run snapshot 已分歧。
- UI 必須表達「你正在看 snapshot，不是 current config」。
- 不得暗示 drift 已被自動合併。

---

## 8. Family Shell 與三頁主角

### 8.1 Family Shell

```text
+----------------------------------------------------------------------------------+
| Identity Row: Workspace / Folder / Pipeline identity / Family status             |
+----------------------------------------------------------------------------------+
| Context Row: Config | Runs | Run Detail                                          |
+----------------------------------------------------------------------------------+
| Page-specific workspace                                                           |
+----------------------------------------------------------------------------------+
```

### 8.2 每頁唯一主角

- `Config`：stage-first topology workspace
- `Runs`：operations ledger
- `Run Detail`：snapshot-bound runtime board

低層元件不可壓過高層主角。

---

## 9. Config / Runs / Run Detail 的 Family 章法

### 9.1 Config

```text
+----------------------------------------------------------------------------------+
| Identity Row: Pipeline / View=Config / Current Config                            |
| Context Row : readiness | selected stage/job | stage flow summary                |
+--------------------------------------+-----------------------------+-------------+
| Topology Workspace                   | Contextual Inspector        |             |
| [Stage 01] -> [Stage 02] -> [Stage] | selected stage/job summary  |             |
|  job A                              | barrier/readiness/meta      |             |
|  job B                              |                             |             |
+----------------------------------------------------------------------------------+
| Job Workspace Dock: selected job details / steps / parameters / query            |
+----------------------------------------------------------------------------------+
```

### 9.2 Runs

```text
+----------------------------------------------------------------------------------+
| Identity Row: Pipeline / View=Runs                                               |
| Context Row : logical run history | filter by status/resumable                   |
+---------------------------------------------------------------+------------------+
| Operations Ledger                                             | Overview Rail    |
| Run 184  latest=RESUME#3  FAILED   resumable                  | selected run     |
| Run 183  latest=INITIAL#1 COMPLETED                           | latest attempt   |
| Run 182  latest=RERUN#1 STARTED                               | snapshot context |
| Run 181  latest=INITIAL#2 STOPPED  resumable                  | next best action |
+---------------------------------------------------------------+------------------+
```

### 9.3 Run Detail

```text
+----------------------------------------------------------------------------------+
| Identity Row: Pipeline / View=Run Detail / Snapshot                              |
| Hero Summary: Run 184 | Attempt RESUME#3 | FAILED | resumable                    |
+---------------------------------------------------------------+------------------+
| Attempt Timeline: INITIAL#1 -> RESUME#2 -> RESUME#3           | Overview Rail    |
+---------------------------------------------------------------+------------------+
| Runtime Board                                                                    |
| [Stage 01 COMPLETED] -> [Stage 02 SKIPPED] -> [Stage 03 FAILED] -> [Stage 04 NR]|
|   job rows with status                                                           |
+----------------------------------------------------------------------------------+
| Diagnostics Drawer: selected target / logs / metrics / steps                     |
+----------------------------------------------------------------------------------+
```

---

## 10. 視覺與互動的 Domain Guardrails

- `selected` 一律走 `primary` ring/surface，不借用 success/error。
- runtime 語意一律走 semantic badge/marker，不取代 selection。
- `hover` 不能造成 reflow。
- `focus` 永遠獨立於 selected。
- `disabled` 不能像消失。
- `loading` 要保留最終幾何。
- `danger actions` 要與一般 actions 分群。

---

## 11. 這份 Spec 的用途

這份 A spec 是 family/domain contract，不是 implementation UI kit。

它負責固定：

- 哪些視角不能混
- 哪些詞不能亂用
- 哪些 hierarchy 不可打破
- 哪些 invariant 是後續重構不能破壞的

它不負責：

- component 尺寸表
- token 對照表
- asset manifest
- engineering handoff 細節

---

## 12. Focused Revision: Runs Overview Rail 定位修正

`Runs` 的 `overview rail` 不是 family/domain invariant，不屬於必須被保留的結構要求。

### 12.1 真正的 invariant

`Runs` 頁面只有以下幾點屬於 invariant：

1. `Runs` 必須是 `logical run history` 的視角。
2. `Runs` 的本質必須是 `operations ledger`，不是 dashboard。
3. `Runs` 必須優先回答：
   - 最近有哪些 logical run
   - 哪些 run 失敗、進行中、可 resume
   - 每個 run 的 latest attempt 是什麼
   - 應該打開哪一筆看細節

### 12.2 對先前 wireframe 的修正

本文件凡提到 `Runs` 右側 `overview rail` 的描述與 wireframe，均降級為非強制示意。

它只能被視為某一種可能的版面承載方式，不構成 invariant，也不應被解讀為 family-level 必備區塊。

### 12.3 若後續仍採用 rail

若後續實作採用 `overview rail`，其最小語意責任只能是：

- 輔助當前所選 run 的摘要判讀
- 提供低權重 contextual summary

它不得：

- 承接 dashboard 任務
- 展開 runtime board
- 稀釋 ledger 作為主視角的地位

若不採用 `overview rail`，只要 `Runs` 仍完整滿足上述 invariant，即不違反 A spec。
