#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

MODULE_PATH = Path(__file__).with_name("update-deep-performance-results.py")
spec = importlib.util.spec_from_file_location("deep_results", MODULE_PATH)
mod = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(mod)


class DeepResultMergeTest(unittest.TestCase):
    def test_source_update_preserves_unrelated_cases(self):
        existing = {
            "updated_at": "2026-09-08T00:00:00Z",
            "run_url": "old-run",
            "commit_sha": "old-sha",
            "cases": [
                {
                    "db_pair": "h2-h2",
                    "atomic_level": "JOB",
                    "mode": "success",
                    "row_count": 100000,
                    "batch_size": 5000,
                    "duration_ms": 1000,
                    "rows_per_second": 100000,
                    "status": "pass",
                },
                {
                    "db_pair": "mysql-oracle",
                    "atomic_level": "CHUNK",
                    "mode": "success",
                    "row_count": 50000000,
                    "batch_size": 5000,
                    "duration_ms": 250000,
                    "rows_per_second": 200000,
                    "status": "pass",
                },
            ],
        }
        incoming = [
            {
                "db_pair": "h2-h2",
                "atomic_level": "JOB",
                "mode": "success",
                "row_count": 100000,
                "batch_size": 5000,
                "duration_ms": 500,
                "rows_per_second": 200000,
                "status": "pass",
                "run_url": "new-run",
                "commit_sha": "new-sha",
                "measured_at": "2026-09-09T00:00:00Z",
            }
        ]
        merged = mod.merge_cases(existing, incoming)
        self.assertEqual(2, len(merged))
        mysql_oracle = next(c for c in merged if c["db_pair"] == "mysql-oracle")
        self.assertEqual(50000000, mysql_oracle["row_count"])
        h2 = next(c for c in merged if c["db_pair"] == "h2-h2")
        self.assertEqual(500, h2["duration_ms"])
        self.assertEqual("new-run", h2["run_url"])

    def test_render_exposes_source_tabs_and_log_scale_chart(self):
        cases = []
        for dest in mod.ENGINES:
            cases.append({
                "db_pair": f"h2-{dest}",
                "atomic_level": "JOB",
                "mode": "success",
                "row_count": 100000,
                "batch_size": 5000,
                "duration_ms": 1000,
                "rows_per_second": 100000,
                "status": "pass",
            })
        rendered = mod.render(cases, "en")
        self.assertIn("::: {.panel-tabset}", rendered)
        self.assertIn("## H2", rendered)
        self.assertIn("## PostgreSQL", rendered)
        self.assertIn("Rows (log scale)", rendered)
        self.assertIn("sync", "sync")


if __name__ == "__main__":
    unittest.main()
