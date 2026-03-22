# Pipeline Family Manual Demo

這套 fixture 用來手動驗證 IrisPipe 的 pipeline family：

- `Pipeline Explorer`
- `Pipeline Config`
- `Runs`
- `Run Detail`

命名全部使用 `manual_demo_*`，刻意避開 `k6_*` 與 `test_*`。

## 檔案

- `manual_demo_seed.sql`
  - 建立所有手動測試需要的 source / destination tables
  - 重建 success / stop / fail 三組 demo 資料
  - 會刻意刪除 `manual_demo_fail_stage2_missing_dest`，保留 fail/resume 情境
- `manual_demo_fix_fail.sql`
  - 在 fail/resume 情境中建立缺失的 destination table
- `manual_demo_stage_success.yml`
  - 4 stages
  - stage1 與 stage3 都有同 stage parallel jobs
- `manual_demo_stage_stop_resume.yml`
  - 4 stages
  - stage2 內含一個慢速 CHUNK job，可用來手動測 stop / resume
- `manual_demo_stage_fail_resume.yml`
  - 3 stages
  - stage2 內一個 job 會成功、一個 job 會因缺 table 失敗
- `manual_demo_prepare_data.yml`
  - 用 `EXECUTE` steps 建表、truncate、灌資料
  - 適合想完全從前端 / API 內完成 demo data bootstrap 的情境

## 推薦驗證順序

1. 執行 `manual_demo_seed.sql`
2. 匯入三條 pipeline
3. 依序驗證：
   - `manual_demo_stage_success`
   - `manual_demo_stage_stop_resume`
   - `manual_demo_stage_fail_resume`

## 匯入方式

### 前端

1. 打開 `Pipeline Explorer`
2. 點 `Import File`
3. 分別匯入：
   - `manual_demo_prepare_data.yml`
   - `manual_demo_stage_success.yml`
   - `manual_demo_stage_stop_resume.yml`
   - `manual_demo_stage_fail_resume.yml`

建議 pipeline 名稱：

- `manual_demo_stage_success`
- `manual_demo_stage_stop_resume`
- `manual_demo_stage_fail_resume`
- `manual_demo_prepare_data`

### curl

在這個資料夾底下，可直接用：

```powershell
curl.exe -X POST "http://localhost:8080/api/v1/sync-config/import" `
  -F "pipelineName=manual_demo_prepare_data" `
  -F "format=yaml" `
  -F "file=@manual_demo_prepare_data.yml"

curl.exe -X POST "http://localhost:8080/api/v1/sync-config/import" `
  -F "pipelineName=manual_demo_stage_success" `
  -F "format=yaml" `
  -F "file=@manual_demo_stage_success.yml"

curl.exe -X POST "http://localhost:8080/api/v1/sync-config/import" `
  -F "pipelineName=manual_demo_stage_stop_resume" `
  -F "format=yaml" `
  -F "file=@manual_demo_stage_stop_resume.yml"

curl.exe -X POST "http://localhost:8080/api/v1/sync-config/import" `
  -F "pipelineName=manual_demo_stage_fail_resume" `
  -F "format=yaml" `
  -F "file=@manual_demo_stage_fail_resume.yml"
```

## 情境說明

### 1. manual_demo_stage_success

目的：

- 驗證 stage-first pipeline board
- 驗證同 stage parallel jobs
- 驗證 cross-stage barrier

預期：

- `stage1` 會先完成兩個 job
- `stage2` 之後才開始
- `stage3` 會再出現兩個平行 job
- `stage4` 最後產出 report

### 2. manual_demo_stage_stop_resume

目的：

- 驗證 `stop`
- 驗證 `resume on stop`
- 驗證同 stage 內 completed job 不會因 resume 被重跑

預期：

- `stage1` 很快完成
- `stage2` 有一個慢速 CHUNK job 與一個較快 job
- 在 `stage2` 中途按 `Stop`
- `stage3` 應維持 `NOT_RUN`
- `Resume` 後，只會從 incomplete stage 繼續

### 3. manual_demo_stage_fail_resume

目的：

- 驗證同 stage 一個 job 成功、另一個 job 失敗
- 驗證 failure 不會放行到下一 stage
- 驗證 `resume on fail`

預期：

- `stage1` 完成
- `stage2` 內：
  - `manual_demo_fail_join_ok` 會成功
  - `manual_demo_fail_join_missing_dest` 會失敗
- `stage3` 應維持 `NOT_RUN`
- 執行 `manual_demo_fix_fail.sql` 後按 `Resume`
- pipeline 應可進入 `stage3`

## 執行 SQL

這些 SQL 是以預設本機 H2 `jdbc:h2:./h2data/data` 為前提。

如果你的 server 也是用預設設定，可以用任何能連到同一個 H2 檔案的工具執行：

- IntelliJ Database tool window
- H2 Console
- DBeaver

若你要重置整套 demo，重新執行 `manual_demo_seed.sql` 即可。

## 純 pipeline 方式建立資料

如果你希望連 demo data 都由 IrisPipe pipeline 建立，可以先匯入並執行：

- `manual_demo_prepare_data.yml`

這條 pipeline 會用 `EXECUTE` steps：

- 建立或重建 `manual_demo_*` tables
- truncate 既有資料
- 填入 success / stop / fail 三組 source data
- 刻意刪除 `manual_demo_fail_stage2_missing_dest`，保留 fail/resume 情境

注意：

- 這條資料準備 pipeline 假設 source / destination 都指向預設本機 H2 `jdbc:h2:./h2data/data`
- 如果你的執行環境不是同一個 H2 檔案，請改用 `manual_demo_seed.sql`
