#!/usr/bin/env python3
"""Finalize a k6 data-volume report with an external destination row count."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--report", required=True)
    parser.add_argument("--actual-rows", required=True, type=int)
    args = parser.parse_args()

    path = Path(args.report)
    report = json.loads(path.read_text(encoding="utf-8"))
    expected = int(report["expected_destination_rows"])
    actual = args.actual_rows
    report["actual_destination_rows"] = actual
    report["status"] = "pass" if actual == expected and report.get("status") == "pass" else "fail"
    path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")

    if actual != expected:
        print(f"external destination row-count mismatch: expected={expected}, actual={actual}")
        return 1
    if report["status"] != "pass":
        print("k6 benchmark status was not pass")
        return 1
    print(f"external destination verified: {actual} rows")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
