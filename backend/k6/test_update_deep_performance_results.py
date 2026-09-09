#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
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
                "fetch_size": 5000,
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

    def test_fetch_size_falls_back_to_historical_batch_size(self):
        legacy = {"batch_size": 5000}
        current = {"fetch_size": 2000, "batch_size": 5000}
        self.assertEqual(5000, mod.effective_fetch_size(legacy))
        self.assertEqual(2000, mod.effective_fetch_size(current))
        self.assertNotEqual(mod.case_key({
            "db_pair": "h2-h2", "atomic_level": "JOB", "mode": "success",
            "row_count": 1000000, "fetch_size": 2000, "batch_size": 5000,
        }), mod.case_key({
            "db_pair": "h2-h2", "atomic_level": "JOB", "mode": "success",
            "row_count": 1000000, "fetch_size": 5000, "batch_size": 5000,
        }))

    def test_legacy_row_steps_are_retained_but_not_in_current_ladder(self):
        legacy = {
            "db_pair": "h2-h2",
            "atomic_level": "JOB",
            "mode": "success",
            "row_count": 100000,
            "batch_size": 5000,
            "duration_ms": 1000,
            "rows_per_second": 100000,
            "status": "pass",
        }
        current = dict(legacy, row_count=1000000)
        merged = mod.merge_cases({"cases": [legacy]}, [current])
        self.assertEqual(2, len(merged))
        visible = mod.standard_cases(merged, "h2", "JOB")
        self.assertEqual([1000000], [case["row_count"] for case in visible])

    def test_render_has_fetch_smooth_measured_points_and_no_corruption(self):
        cases = []
        for dest in mod.ENGINES:
            for rows, rps in ((1_000_000, 100000), (10_000_000, 140000), (50_000_000, 130000)):
                cases.append({
                    "db_pair": f"h2-{dest}",
                    "atomic_level": "JOB",
                    "mode": "success",
                    "row_count": rows,
                    "batch_size": 5000,
                    "duration_ms": 1000,
                    "rows_per_second": rps,
                    "status": "pass",
                })
        en = mod.render(cases, "en")
        zh = mod.render(cases, "zh")
        self.assertIn("::: {.panel-tabset}", en)
        self.assertIn("## H2", en)
        self.assertIn("## PostgreSQL", en)
        self.assertIn("Rows (log scale)", en)
        self.assertIn("| Destination | Rows | Fetch | Batch | Txn groups |", en)
        self.assertIn("<path d=", en)
        self.assertIn("<circle", en)
        self.assertNotIn("source ?", en)
        self.assertNotIn("????", zh)
        self.assertIn("每秒筆數", zh)
        self.assertIn("| 目的資料庫 | Rows | Fetch | Batch | 交易組數 |", zh)

    def test_monotone_path_passes_all_measured_points(self):
        pts = [(10.0, 30.0), (20.0, 10.0), (40.0, 20.0)]
        path = mod.monotone_path(pts)
        self.assertTrue(path.startswith("M 10.0,30.0"))
        self.assertIn("20.0,10.0", path)
        self.assertTrue(path.endswith("40.0,20.0"))


if __name__ == "__main__":
    unittest.main()
