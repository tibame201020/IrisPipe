#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
import json
import math
from datetime import datetime, timezone
from pathlib import Path

ENGINES = ["h2", "postgres", "mysql", "mariadb", "sqlserver", "oracle"]
DISPLAY = {
    "h2": "H2",
    "postgres": "PostgreSQL",
    "mysql": "MySQL",
    "mariadb": "MariaDB",
    "sqlserver": "SQL Server",
    "oracle": "Oracle",
}
ROW_STEPS = [1_000_000, 10_000_000, 50_000_000]
PALETTE = ["#0d6efd", "#198754", "#dc3545", "#6f42c1", "#fd7e14", "#20c997"]


def load_reports(root: Path, *, run_url: str, commit_sha: str, measured_at: str):
    cases = []
    if not root.exists():
        return cases
    for path in sorted(root.rglob("*.json")):
        try:
            data = json.loads(path.read_text(encoding="utf-8-sig"))
        except Exception:
            continue
        if {"db_pair", "atomic_level", "mode", "row_count"}.issubset(data):
            data["run_url"] = run_url
            data["commit_sha"] = commit_sha
            data["measured_at"] = measured_at
            cases.append(data)
    return cases


def load_existing(path: Path):
    if not path.exists():
        return {"cases": []}
    try:
        return json.loads(path.read_text(encoding="utf-8-sig"))
    except Exception:
        return {"cases": []}


def case_key(case):
    return (
        str(case.get("db_pair", "")),
        str(case.get("atomic_level", "")),
        str(case.get("mode", "")),
        int(case.get("row_count") or 0),
        int(case.get("batch_size") or 0),
    )


def enrich_legacy_case(case, existing):
    result = dict(case)
    result.setdefault("run_url", existing.get("run_url"))
    result.setdefault("commit_sha", existing.get("commit_sha"))
    result.setdefault("measured_at", existing.get("updated_at"))
    return result


def merge_cases(existing, incoming):
    merged = {
        case_key(case): enrich_legacy_case(case, existing)
        for case in existing.get("cases", [])
        if isinstance(case, dict)
    }
    for case in incoming:
        merged[case_key(case)] = case
    cases = list(merged.values())
    cases.sort(key=lambda x: (
        str(x.get("db_pair", "")),
        str(x.get("atomic_level", "")),
        int(x.get("row_count") or 0),
    ))
    return cases


def fmt_rows(n):
    n = int(n)
    if n >= 1_000_000:
        return f"{n/1_000_000:g}M"
    if n >= 1_000:
        return f"{n/1_000:g}K"
    return str(n)


def fmt_duration(ms):
    if ms is None:
        return "?"
    return f"{float(ms)/1000:.2f}s"


def fmt_rps(value):
    if value is None:
        return "?"
    return f"{float(value):,.1f}"


def transaction_groups(case):
    rows = int(case.get("row_count") or 0)
    batch = int(case.get("batch_size") or 0)
    if case.get("atomic_level") == "JOB":
        return 1
    if batch <= 0:
        return None
    return (rows + batch - 1) // batch


def split_pair(pair):
    parts = str(pair).split("-", 1)
    if len(parts) != 2:
        return str(pair), ""
    return parts[0], parts[1]


def standard_cases(cases, source, atomic):
    result = []
    for case in cases:
        src, dst = split_pair(case.get("db_pair"))
        if src != source or dst not in ENGINES:
            continue
        if case.get("atomic_level") != atomic or case.get("mode") != "success":
            continue
        if int(case.get("row_count") or 0) not in ROW_STEPS:
            continue
        result.append(case)
    result.sort(key=lambda c: (ENGINES.index(split_pair(c["db_pair"])[1]), int(c["row_count"])))
    return result


def chart_svg(cases, source, atomic, lang):
    selected = standard_cases(cases, source, atomic)
    points_by_dest = {engine: [] for engine in ENGINES}
    max_y = 0.0
    for case in selected:
        _, dest = split_pair(case["db_pair"])
        y = case.get("rows_per_second")
        if y is None:
            continue
        y = float(y)
        x = int(case["row_count"])
        points_by_dest[dest].append((x, y))
        max_y = max(max_y, y)

    if max_y <= 0:
        return "_??????????_" if lang == "zh" else "_No retained throughput data yet._"

    width, height = 900, 430
    left, top, plot_w, plot_h = 80, 35, 620, 300
    legend_x = 725
    min_log = math.log10(ROW_STEPS[0])
    max_log = math.log10(ROW_STEPS[-1])
    y_max = max_y * 1.10

    def x_pos(rows):
        return left + (math.log10(rows) - min_log) / (max_log - min_log) * plot_w

    def y_pos(value):
        return top + plot_h - (value / y_max) * plot_h

    title = f"{DISPLAY[source]} source ? {atomic}"
    y_label = "? / ?" if lang == "zh" else "rows / second"
    chunks = [
        f'<svg class="benchmark-throughput-chart" viewBox="0 0 {width} {height}" role="img" aria-label="{html.escape(title)} throughput chart" style="width:100%;height:auto;max-width:900px">',
        '<rect x="0" y="0" width="900" height="430" fill="white"/>',
        f'<text x="{left}" y="20" font-size="16" font-weight="600">{html.escape(title)}</text>',
        f'<text x="16" y="180" font-size="12" transform="rotate(-90 16 180)">{html.escape(y_label)}</text>',
        f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top+plot_h}" stroke="#666"/>',
        f'<line x1="{left}" y1="{top+plot_h}" x2="{left+plot_w}" y2="{top+plot_h}" stroke="#666"/>',
    ]

    for i in range(5):
        value = y_max * i / 4
        y = y_pos(value)
        chunks.append(f'<line x1="{left}" y1="{y:.1f}" x2="{left+plot_w}" y2="{y:.1f}" stroke="#e5e7eb"/>')
        chunks.append(f'<text x="{left-8}" y="{y+4:.1f}" text-anchor="end" font-size="11">{value/1000:,.0f}k</text>')

    for rows in ROW_STEPS:
        x = x_pos(rows)
        chunks.append(f'<line x1="{x:.1f}" y1="{top}" x2="{x:.1f}" y2="{top+plot_h}" stroke="#f2f2f2"/>')
        chunks.append(f'<text x="{x:.1f}" y="{top+plot_h+20}" text-anchor="middle" font-size="11">{fmt_rows(rows)}</text>')
    chunks.append(f'<text x="{left+plot_w/2:.1f}" y="{top+plot_h+44}" text-anchor="middle" font-size="12">Rows (log scale)</text>')

    legend_row = 0
    for dest_index, dest in enumerate(ENGINES):
        pts = sorted(points_by_dest[dest])
        color = PALETTE[dest_index]
        if pts:
            coords = " ".join(f"{x_pos(x):.1f},{y_pos(y):.1f}" for x, y in pts)
            if len(pts) > 1:
                chunks.append(f'<polyline points="{coords}" fill="none" stroke="{color}" stroke-width="2.5"/>')
            for x, y in pts:
                chunks.append(f'<circle cx="{x_pos(x):.1f}" cy="{y_pos(y):.1f}" r="4" fill="{color}"/>')
        ly = 55 + legend_row * 28
        chunks.append(f'<line x1="{legend_x}" y1="{ly}" x2="{legend_x+24}" y2="{ly}" stroke="{color}" stroke-width="3"/>')
        chunks.append(f'<circle cx="{legend_x+12}" cy="{ly}" r="3.5" fill="{color}"/>')
        chunks.append(f'<text x="{legend_x+32}" y="{ly+4}" font-size="12">{html.escape(DISPLAY[dest])}</text>')
        legend_row += 1
    chunks.append('</svg>')
    return '<div class="benchmark-chart-wrap">' + ''.join(chunks) + '</div>'


def detail_table(cases, source, atomic, lang):
    selected = standard_cases(cases, source, atomic)
    if not selected:
        return "_???????_" if lang == "zh" else "_No retained results yet._"
    dest_label = "???" if lang == "zh" else "Destination"
    batch_label = "??" if lang == "zh" else "Batch"
    groups_label = "????" if lang == "zh" else "Txn groups"
    lines = [
        f"| {dest_label} | Rows | {batch_label} | {groups_label} | Duration | Rows/s | Status |",
        "|---|---:|---:|---:|---:|---:|---|",
    ]
    for case in selected:
        _, dest = split_pair(case["db_pair"])
        batch = int(case.get("batch_size") or 0)
        groups = transaction_groups(case)
        lines.append(
            f"| {DISPLAY.get(dest, dest)} | {fmt_rows(case['row_count'])} | "
            f"{batch:,} | {groups:,} | {fmt_duration(case.get('duration_ms'))} | "
            f"{fmt_rps(case.get('rows_per_second'))} | {str(case.get('status','')).upper()} |"
        )
    return "\n".join(lines)


def source_last_measured(cases, source):
    values = []
    for case in cases:
        src, _ = split_pair(case.get("db_pair"))
        if src == source and case.get("measured_at"):
            values.append(str(case["measured_at"]))
    return max(values) if values else None


def render(cases, lang):
    zh = lang == "zh"
    title = "## ????? Benchmark" if zh else "## Deep Data-Volume Benchmark"
    note = (
        "????? GitHub-hosted runner ???? regression benchmark?**Duration ???? pipeline execution**?DB/container ???source seed?backend ???pipeline config ?????? destination COUNT ???????"
        if zh else
        "The retained results below are regression benchmarks from GitHub-hosted runners. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded."
    )
    lines = [title, "", note, ""]
    if not cases:
        lines.append("_???? deep benchmark ???_" if zh else "_Deep benchmark results have not been generated yet._")
        return "\n".join(lines) + "\n"

    lines += [
        "::: {.panel-tabset}",
    ]
    for source in ENGINES:
        retained = sum(len(standard_cases(cases, source, atomic)) for atomic in ("JOB", "CHUNK"))
        expected = len(ENGINES) * 2 * len(ROW_STEPS)
        current = [case for atomic in ("JOB", "CHUNK") for case in standard_cases(cases, source, atomic)]
        last = max((str(case["measured_at"]) for case in current if case.get("measured_at")), default=None)
        lines += [
            f"## {DISPLAY[source]}",
            "",
            (f"**?????** {retained}/{expected} cases" if zh else f"**Retained coverage:** {retained}/{expected} cases"),
        ]
        if last:
            lines.append((f"?**?????** `{last}`" if zh else f"  **Latest measurement:** `{last}`"))
        lines += ["", "::: {.panel-tabset}"]
        for atomic in ("JOB", "CHUNK"):
            lines += [
                f"### {atomic}",
                "",
                chart_svg(cases, source, atomic, lang),
                "",
                detail_table(cases, source, atomic, lang),
                "",
            ]
        lines += [":::", ""]
    lines += [":::", ""]
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--reports-dir", required=True)
    ap.add_argument("--results", required=True)
    ap.add_argument("--run-url", required=True)
    ap.add_argument("--commit-sha", required=True)
    args = ap.parse_args()

    out = Path(args.results)
    existing = load_existing(out)
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    incoming = load_reports(Path(args.reports_dir), run_url=args.run_url, commit_sha=args.commit_sha, measured_at=now)
    cases = merge_cases(existing, incoming)

    if incoming:
        updated_at = now
        run_url = args.run_url
        commit_sha = args.commit_sha
    else:
        updated_at = existing.get("updated_at", now)
        run_url = existing.get("run_url", args.run_url)
        commit_sha = existing.get("commit_sha", args.commit_sha)

    result = {
        "updated_at": updated_at,
        "run_url": run_url,
        "commit_sha": commit_sha,
        "case_count": len(cases),
        "retention_policy": "merge-by-db-pair-atomic-mode-row-count-batch-size",
        "cases": cases,
    }
    out.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    gen = out.parent / "_generated"
    gen.mkdir(parents=True, exist_ok=True)
    (gen / "deep-performance-results-en.md").write_text(render(cases, "en"), encoding="utf-8")
    (gen / "deep-performance-results-zh.md").write_text(render(cases, "zh"), encoding="utf-8")


if __name__ == "__main__":
    main()
