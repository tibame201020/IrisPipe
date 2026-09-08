// Render only fully verified CI measurements; never substitute expected values.
import fs from 'node:fs';
const [input, output = 'quarto/atomic-chunk.qmd'] = process.argv.slice(2);
const report = JSON.parse(fs.readFileSync(input, 'utf8'));
if (!report.completed || !report.assertions.length || report.assertions.some(x => !x.passed)) throw new Error('Incomplete or failed run');
const normal = report.results.filter(x => x.scenario === 'normal');
const recovery = report.results.filter(x => x.scenario === 'conflict_resume');
if (normal.length !== report.sizes.length * report.repeats * 2 || recovery.length !== 2) throw new Error('Missing matrix cells');
const fmt = n => Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 });
const content = `---
title: "Atomic Job and Chunk: CI measurements"
---

## Scope / 測試範圍

This is an INSERT benchmark and recovery check on a GitHub-hosted runner using **local H2**, not Oracle or a commercial-tool comparison. Source, destination and Spring Batch metadata share one database file. There is no database network transfer.

這份結果比較同一 CI 環境的 JOB 與 CHUNK。數字包含執行協調與交易提交，不代表 Oracle 實務吞吐或正式環境容量。

- [Measured CI run](${report.run_url})
- Tested commit: [${report.source_sha}](https://github.com/tibame201020/IrisPipe/commit/${report.source_sha})
- Generated: ${report.generated_at}
- Environment: ${report.environment}
- Source schema: ${report.columns} columns (BIGINT primary key, three numeric payload fields, seven VARCHAR fields), generated deterministic short values. Destination has the same primary key, no secondary indexes.
- fetchSize / batchSize: ${report.fetch_size} / ${report.batch_size}. In this INSERT path batchSize also sets Spring Batch chunk size. JOB shares the destination transaction across the job; CHUNK commits each chunk.
- One k6 VU, one job at a time. One 10,000-row warmup per mode, excluded. Three measured repetitions, with mode order alternating. Source data seeded once per size, destination truncated before each run. Cache is not flushed.
- Timing: ${report.timing}
- Verification occurs after each measured operation: final status, row count, primary-key sum, and comparison of all payload columns against the source. No time threshold is used to disguise correctness failures.

## INSERT measurements / 搬移測試

Each row is an individual run. Average throughput is rows divided by end-to-end elapsed seconds, **not peak throughput**.

| Rows | Mode | Repeat | Elapsed seconds | Average rows/s |
|---:|---|---:|---:|---:|
${normal.map(x => `| ${fmt(x.rows)} | ${x.mode} | ${x.repeat} | ${fmt(x.elapsed_ms / 1000)} | ${fmt(x.rows_per_second)} |`).join('\n')}

## Conflict and Resume / 失敗與恢復

A pre-existing destination row with key 4,500 causes a primary-key conflict inside the third 2,000-row chunk. The source contains 10,000 rows. We inspect committed rows after failure, delete only the conflicting fixture row, and Resume the same logical run. Repair time is excluded.

| Mode | Rows retained after failure, including conflict row | Failure seconds | Resume seconds | Total processing seconds | Same Spring Batch JobInstance | Final verification |
|---|---:|---:|---:|---:|---|---|
${recovery.map(x => `| ${x.mode} | ${fmt(x.retained_including_conflict)} | ${fmt(x.failure_ms / 1000)} | ${fmt(x.resume_ms / 1000)} | ${fmt(x.total_processing_ms / 1000)} | ${x.same_job_instance ? 'Yes' : 'No'} | PASS |`).join('\n')}

JOB must retain only the pre-existing row after failure, then replay the failed job using a new JobInstance. CHUNK must retain the 4,000-row committed prefix plus the pre-existing row, then restart the same JobInstance. Both must create a new JobExecution and finish with all 10,000 correct rows. Retained primary keys also make an accidental CHUNK replay fail instead of silently duplicating data.

JOB 適合目的端寫入需要全成或全退的工作。CHUNK 允許保留已提交資料，恢復時接續處理。這是不同的交易需求，不能只用吞吐量判斷哪個模式較好。

## Limits / 未涵蓋範圍

${report.not_tested.map(x => '- ' + x).join('\n')}

In particular, a handled SQL failure does **not** establish recovery after SIGKILL. Crash-time transaction rollback and application status reconciliation need separate tests. This matrix also does not test watermark behavior; existing regression suites cover that separately.

Runner hardware details and the backend log are in the CI artifact named \`atomic-chunk-matrix\`. The committed JSON preserves every measured row and assertion. Results describe this tested commit, not an automatically verified claim about later revisions.

## Reproduce

Run the **Atomic Chunk Matrix** workflow manually. Download its artifact and render a complete passing report with:

\`\`\`sh
node backend/k6/render-matrix-report.mjs path/to/atomic-chunk-results.json quarto/atomic-chunk.qmd
\`\`\`

The existing Pages workflow publishes documentation changes after they reach main. Failed or partial matrix runs must not replace the published snapshot.
`;
fs.writeFileSync(output, content);
