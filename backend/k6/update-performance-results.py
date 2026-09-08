#!/usr/bin/env python3
"""Merge k6 benchmark reports and render Quarto markdown fragments."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def fmt_ms(value):
    return "—" if value is None else f"{value:g} ms"


def fmt_rps(value):
    return "—" if value is None else f"{value:g} rows/s"


def db_label(pair: str) -> str:
    return {
        "h2-h2": "H2 → H2",
        "postgres-h2": "PostgreSQL → H2",
    }.get(pair, pair)


def transaction_groups(case: dict):
    rows = int(case.get("row_count") or 0)
    batch = int(case.get("batch_size") or 0)
    if case.get("atomic_level") == "JOB":
        return 1
    if batch <= 0:
        return None
    return (rows + batch - 1) // batch


def render_fragment(data: dict, language: str) -> str:
    bench = data.get("benchmark", {})
    volume = data.get("data_volume", {})
    cases = volume.get("cases", [])
    success_cases = [c for c in cases if c.get("mode") == "success"]
    failure_cases = [c for c in cases if c.get("mode") == "failure"]

    if language == "zh":
        lines = [
            "## 最新 k6 Performance Snapshot",
            "",
            "| Metric | Latest CI value |",
            "|---|---:|",
            f"| Execute latency p50 | **{fmt_ms(bench.get('execute_latency_p50_ms'))}** |",
            f"| Execute latency p95 | **{fmt_ms(bench.get('execute_latency_p95_ms'))}** |",
            f"| Execute latency p99 | **{fmt_ms(bench.get('execute_latency_p99_ms'))}** |",
            f"| API latency p50 | **{fmt_ms(bench.get('api_latency_p50_ms'))}** |",
            f"| API latency p95 | **{fmt_ms(bench.get('api_latency_p95_ms'))}** |",
            f"| HTTP throughput | **{bench.get('throughput_rps', '—')} req/s** |",
            "",
            "來源：`quarto/performance-results.json`，由 `k6 Benchmark` GitHub Actions workflow 更新。",
            "",
            "::: {.callout-note}",
            "這些數字是 GitHub Actions CI runner 上的可重複 benchmark，用於 regression tracking 與技術展示，不是 production capacity claim。",
            ":::",
            "",
            "---",
            "",
            "## 大筆資料 Atomic JOB / CHUNK Benchmark",
            "",
        ]
        if success_cases:
            lines += [
                "| DB path | Atomicity | Rows | 每批筆數 | 交易群組 | Duration | Throughput |",
                "|---|---|---:|---:|---:|---:|---:|",
            ]
            for c in success_cases:
                groups = transaction_groups(c)
                groups_text = "-" if groups is None else f"{groups:,}"
                batch = int(c.get("batch_size") or 0)
                batch_text = "-" if batch <= 0 else f"{batch:,}"
                lines.append(
                    f"| {db_label(c['db_pair'])} | {c['atomic_level']} | {c['row_count']:,} | "
                    f"{batch_text} | {groups_text} | {fmt_ms(c.get('duration_ms'))} | {fmt_rps(c.get('rows_per_second'))} |"
                )
        else:
            lines.append("尚未產生 data-volume benchmark 結果。")

        lines += [
            "",
            "此矩陣比較不同資料量下 JOB（整個 Job 單一交易）與 CHUNK（逐批提交）的 CI runner 表現。",
            "",
            "### 大筆資料失敗語意驗證",
            "",
        ]
        if failure_cases:
            lines += [
                "| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |",
                "|---|---|---:|---:|---:|---:|",
            ]
            for c in failure_cases:
                result = "PASS" if c.get("status") == "pass" else "FAIL"
                lines.append(
                    f"| {db_label(c['db_pair'])} | {c['atomic_level']} | {c['row_count']:,} | "
                    f"{c['expected_destination_rows']:,} | {int(c['actual_destination_rows']):,} | **{result}** |"
                )
        else:
            lines.append("尚未產生 large-volume failure semantics 結果。")

        lines += [
            "",
            "失敗案例會在最後一筆製造 duplicate key：JOB 應回滾整個 Job；CHUNK 應保留先前已提交的 chunks，並只回滾失敗 chunk。",
        ]
    else:
        lines = [
            "## Latest k6 Performance Snapshot",
            "",
            "| Metric | Latest CI value |",
            "|---|---:|",
            f"| Execute latency p50 | **{fmt_ms(bench.get('execute_latency_p50_ms'))}** |",
            f"| Execute latency p95 | **{fmt_ms(bench.get('execute_latency_p95_ms'))}** |",
            f"| Execute latency p99 | **{fmt_ms(bench.get('execute_latency_p99_ms'))}** |",
            f"| API latency p50 | **{fmt_ms(bench.get('api_latency_p50_ms'))}** |",
            f"| API latency p95 | **{fmt_ms(bench.get('api_latency_p95_ms'))}** |",
            f"| HTTP throughput | **{bench.get('throughput_rps', '—')} req/s** |",
            "",
            "_Source: `quarto/performance-results.json`, updated by the `k6 Benchmark` GitHub Actions workflow._",
            "",
            "::: {.callout-note}",
            "These are repeatable GitHub Actions CI-runner benchmark results for regression tracking and technical demonstration, not a production-capacity claim.",
            ":::",
            "",
            "---",
            "",
            "## Large-volume Atomic JOB / CHUNK Benchmark",
            "",
        ]
        if success_cases:
            lines += [
                "| DB path | Atomicity | Rows | Batch | Txn groups | Duration | Throughput |",
                "|---|---|---:|---:|---:|---:|---:|",
            ]
            for c in success_cases:
                groups = transaction_groups(c)
                groups_text = "-" if groups is None else f"{groups:,}"
                batch = int(c.get("batch_size") or 0)
                batch_text = "-" if batch <= 0 else f"{batch:,}"
                lines.append(
                    f"| {db_label(c['db_pair'])} | {c['atomic_level']} | {c['row_count']:,} | "
                    f"{batch_text} | {groups_text} | {fmt_ms(c.get('duration_ms'))} | {fmt_rps(c.get('rows_per_second'))} |"
                )
        else:
            lines.append("No data-volume benchmark result has been published yet.")

        lines += [
            "",
            "The matrix compares JOB (one destination transaction for the whole job) and CHUNK (commit per batch) across multiple row counts on the same CI-runner class.",
            "",
            "### Large-volume failure-semantics verification",
            "",
        ]
        if failure_cases:
            lines += [
                "| DB path | Atomicity | Source rows | Expected dest rows | Actual dest rows | Result |",
                "|---|---|---:|---:|---:|---:|",
            ]
            for c in failure_cases:
                result = "PASS" if c.get("status") == "pass" else "FAIL"
                lines.append(
                    f"| {db_label(c['db_pair'])} | {c['atomic_level']} | {c['row_count']:,} | "
                    f"{c['expected_destination_rows']:,} | {int(c['actual_destination_rows']):,} | **{result}** |"
                )
        else:
            lines.append("No large-volume failure-semantics result has been published yet.")

        lines += [
            "",
            "The failure case injects a duplicate key on the final row: JOB must roll back the whole job; CHUNK must preserve previously committed chunks and roll back only the failing chunk.",
        ]

    return "\n".join(lines) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--results", default="quarto/performance-results.json")
    parser.add_argument("--api-report")
    parser.add_argument("--reports-dir")
    parser.add_argument("--run-url")
    parser.add_argument("--commit-sha")
    args = parser.parse_args()

    results_path = Path(args.results)
    data = load_json(results_path)
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")

    if args.api_report:
        api = load_json(Path(args.api_report))
        data.setdefault("benchmark", {}).update(api)
        data["benchmark"]["note"] = f"Last updated {now} by GitHub Actions"

    if args.reports_dir:
        reports = []
        for path in sorted(Path(args.reports_dir).rglob("*.json")):
            report = load_json(path)
            if {"db_pair", "atomic_level", "mode", "row_count"}.issubset(report):
                reports.append(report)
        reports.sort(key=lambda c: (c["db_pair"], c["mode"], c["atomic_level"], c["row_count"]))
        data["data_volume"] = {
            "updated_at": now,
            "run_url": args.run_url,
            "commit_sha": args.commit_sha,
            "cases": reports,
        }

    if args.api_report or args.reports_dir:
        data.setdefault("_meta", {})["generated_at"] = now
    results_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    generated = results_path.parent / "_generated"
    generated.mkdir(parents=True, exist_ok=True)
    (generated / "performance-results-zh.md").write_text(render_fragment(data, "zh"), encoding="utf-8")
    (generated / "performance-results-en.md").write_text(render_fragment(data, "en"), encoding="utf-8")


if __name__ == "__main__":
    main()
