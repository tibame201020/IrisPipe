#!/usr/bin/env python3
"""Finalize a k6 data-volume report with external destination row counts."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def parse_counts(value: str) -> dict[str, int]:
    parts = [part.strip() for part in value.split(",")]
    if len(parts) != 3:
        raise ValueError("--actual-counts must be roles,users,user_roles")
    roles, users, user_roles = (int(part) for part in parts)
    return {"roles": roles, "users": users, "user_roles": user_roles}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--report", required=True)
    parser.add_argument("--actual-counts", help="comma-separated roles,users,user_roles counts")
    parser.add_argument("--actual-rows", type=int, help="legacy single-table total row count")
    args = parser.parse_args()

    path = Path(args.report)
    report = json.loads(path.read_text(encoding="utf-8"))

    if args.actual_counts:
        actual_by_table = parse_counts(args.actual_counts)
        actual = sum(actual_by_table.values())
        expected_by_table = report.get("expected_destination_rows_by_table") or {}
        expected = int(report["expected_destination_rows"])
        table_match = all(
            int(actual_by_table.get(name, -1)) == int(expected_by_table.get(name, -2))
            for name in ("roles", "users", "user_roles")
        )
        report["actual_destination_rows_by_table"] = actual_by_table
    elif args.actual_rows is not None:
        actual = args.actual_rows
        expected = int(report["expected_destination_rows"])
        table_match = True
    else:
        parser.error("one of --actual-counts or --actual-rows is required")

    report["actual_destination_rows"] = actual
    counts_match = actual == expected and table_match
    report["status"] = "pass" if counts_match and report.get("status") == "pass" else "fail"
    path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    if not counts_match:
        print(
            "external destination row-count mismatch: "
            f"expected_total={expected}, actual_total={actual}, "
            f"expected_by_table={report.get('expected_destination_rows_by_table')}, "
            f"actual_by_table={report.get('actual_destination_rows_by_table')}"
        )
        return 1
    if report["status"] != "pass":
        print("k6 benchmark status was not pass")
        return 1
    print(
        f"external destination verified: total={actual}, "
        f"by_table={report.get('actual_destination_rows_by_table')}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
