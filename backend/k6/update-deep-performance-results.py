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


def effective_fetch_size(case):
    """Historical benchmark reports used fetchSize=batchSize but did not persist it."""
    return int(case.get("fetch_size") or case.get("batch_size") or 0)


def case_key(case):
    return (
        str(case.get("db_pair", "")),
        str(case.get("atomic_level", "")),
        str(case.get("mode", "")),
        int(case.get("row_count") or 0),
        effective_fetch_size(case),
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
        return "n/a"
    return f"{float(ms)/1000:.2f}s"


def fmt_rps(value):
    if value is None:
        return "n/a"
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


def monotone_path(points):
    """Return a shape-preserving cubic path through measured screen-space points."""
    if len(points) < 2:
        return ""
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    h = [xs[i + 1] - xs[i] for i in range(len(points) - 1)]
    delta = [(ys[i + 1] - ys[i]) / h[i] for i in range(len(h))]

    if len(points) == 2:
        slopes = [delta[0], delta[0]]
    else:
        slopes = [0.0] * len(points)
        # PCHIP endpoint slope, constrained to preserve the first segment shape.
        slopes[0] = ((2 * h[0] + h[1]) * delta[0] - h[0] * delta[1]) / (h[0] + h[1])
        if slopes[0] * delta[0] <= 0:
            slopes[0] = 0.0
        elif delta[0] * delta[1] < 0 and abs(slopes[0]) > abs(3 * delta[0]):
            slopes[0] = 3 * delta[0]

        for i in range(1, len(points) - 1):
            if delta[i - 1] * delta[i] <= 0:
                slopes[i] = 0.0
            else:
                w1 = 2 * h[i] + h[i - 1]
                w2 = h[i] + 2 * h[i - 1]
                slopes[i] = (w1 + w2) / (w1 / delta[i - 1] + w2 / delta[i])

        slopes[-1] = ((2 * h[-1] + h[-2]) * delta[-1] - h[-1] * delta[-2]) / (h[-1] + h[-2])
        if slopes[-1] * delta[-1] <= 0:
            slopes[-1] = 0.0
        elif delta[-1] * delta[-2] < 0 and abs(slopes[-1]) > abs(3 * delta[-1]):
            slopes[-1] = 3 * delta[-1]

    commands = [f"M {xs[0]:.1f},{ys[0]:.1f}"]
    for i in range(len(points) - 1):
        dx = h[i] / 3
        c1x = xs[i] + dx
        c1y = ys[i] + slopes[i] * dx
        c2x = xs[i + 1] - dx
        c2y = ys[i + 1] - slopes[i + 1] * dx
        commands.append(
            f"C {c1x:.1f},{c1y:.1f} {c2x:.1f},{c2y:.1f} {xs[i + 1]:.1f},{ys[i + 1]:.1f}"
        )
    return " ".join(commands)


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
        return "_尚無保留的吞吐量資料。_" if lang == "zh" else "_No retained throughput data yet._"

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

    if lang == "zh":
        title = f"{DISPLAY[source]} 來源 / {atomic}"
        y_label = "每秒筆數"
        x_label = "資料筆數（對數刻度）"
    else:
        title = f"{DISPLAY[source]} source / {atomic}"
        y_label = "rows / second"
        x_label = "Rows (log scale)"

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
    chunks.append(f'<text x="{left+plot_w/2:.1f}" y="{top+plot_h+44}" text-anchor="middle" font-size="12">{html.escape(x_label)}</text>')

    legend_row = 0
    for dest_index, dest in enumerate(ENGINES):
        pts = sorted(points_by_dest[dest])
        color = PALETTE[dest_index]
        if pts:
            screen_pts = [(x_pos(x), y_pos(y)) for x, y in pts]
            if len(screen_pts) > 1:
                path = monotone_path(screen_pts)
                chunks.append(f'<path d="{path}" fill="none" stroke="{color}" stroke-width="2.5"/>')
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
        return "_尚無保留結果。_" if lang == "zh" else "_No retained results yet._"
    if lang == "zh":
        dest_label = "目的資料庫"
        fetch_label = "Fetch"
        batch_label = "Batch"
        groups_label = "交易組數"
    else:
        dest_label = "Destination"
        fetch_label = "Fetch"
        batch_label = "Batch"
        groups_label = "Txn groups"
    lines = [
        f"| {dest_label} | Rows | {fetch_label} | {batch_label} | {groups_label} | Duration | Rows/s | Status |",
        "|---|---:|---:|---:|---:|---:|---:|---|",
    ]
    for case in selected:
        _, dest = split_pair(case["db_pair"])
        fetch = effective_fetch_size(case)
        batch = int(case.get("batch_size") or 0)
        groups = transaction_groups(case)
        groups_text = f"{groups:,}" if groups is not None else "n/a"
        lines.append(
            f"| {DISPLAY.get(dest, dest)} | {fmt_rows(case['row_count'])} | "
            f"{fetch:,} | {batch:,} | {groups_text} | {fmt_duration(case.get('duration_ms'))} | "
            f"{fmt_rps(case.get('rows_per_second'))} | {str(case.get('status','')).upper()} |"
        )
    return "\n".join(lines)


def render(cases, lang):
    zh = lang == "zh"
    title = "## 深度資料量 Benchmark" if zh else "## Deep Data-Volume Benchmark"
    note = (
        "以下保留結果來自 GitHub-hosted runner 的回歸基準。**Duration 只量測同步 pipeline execution**；DB/container 啟動、source seed、backend 啟動、pipeline config 建立，以及執行後的 destination COUNT 驗證都排除在計時之外。"
        if zh else
        "The retained results below are regression benchmarks from GitHub-hosted runners. **Duration measures only synchronous pipeline execution**; DB/container startup, source seeding, backend startup, pipeline-config creation, and post-run destination COUNT verification are excluded."
    )
    curve_note = (
        "圖上的圓點是實際量測值；平滑曲線只使用 shape-preserving interpolation 作為視覺導引，不代表額外量測點。"
        if zh else
        "Circles are measured values. The smooth curve is a shape-preserving visual guide through those points, not additional measurements."
    )
    lines = [title, "", note, "", curve_note, ""]
    if not cases:
        lines.append("_尚未產生 deep benchmark 結果。_" if zh else "_Deep benchmark results have not been generated yet._")
        return "\n".join(lines) + "\n"

    lines += ["::: {.panel-tabset}"]
    for source in ENGINES:
        retained = sum(len(standard_cases(cases, source, atomic)) for atomic in ("JOB", "CHUNK"))
        expected = len(ENGINES) * 2 * len(ROW_STEPS)
        current = [case for atomic in ("JOB", "CHUNK") for case in standard_cases(cases, source, atomic)]
        last = max((str(case["measured_at"]) for case in current if case.get("measured_at")), default=None)
        lines += [
            f"## {DISPLAY[source]}",
            "",
            (f"**保留覆蓋率：** {retained}/{expected} cases" if zh else f"**Retained coverage:** {retained}/{expected} cases"),
        ]
        if last:
            lines.append((f"  **最新量測：** `{last}`" if zh else f"  **Latest measurement:** `{last}`"))
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
        "retention_policy": "merge-by-db-pair-atomic-mode-row-count-fetch-size-batch-size",
        "cases": cases,
    }
    out.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    gen = out.parent / "_generated"
    gen.mkdir(parents=True, exist_ok=True)
    (gen / "deep-performance-results-en.md").write_text(render(cases, "en"), encoding="utf-8")
    (gen / "deep-performance-results-zh.md").write_text(render(cases, "zh"), encoding="utf-8")


if __name__ == "__main__":
    main()
