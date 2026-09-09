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


def current_case(**overrides):
    case = {
        "benchmark_profile": mod.CURRENT_PROFILE,
        "workload": "users-roles-user_roles",
        "db_pair": "h2-h2",
        "atomic_level": "JOB",
        "mode": "success",
        "row_count": 1_000_000,
        "table_rows": {"roles": 16, "users": 249_996, "user_roles": 749_988},
        "fetch_size": 5_000,
        "batch_size": 5_000,
        "duration_ms": 5_000,
        "rows_per_second": 200_000,
        "status": "pass",
    }
    case.update(overrides)
    return case


class DeepResultMergeTest(unittest.TestCase):
    def test_legacy_case_is_retained_but_does_not_replace_current_profile(self):
        legacy = {
            "db_pair": "h2-h2",
            "atomic_level": "JOB",
            "mode": "success",
            "row_count": 1_000_000,
            "batch_size": 5_000,
            "duration_ms": 8_000,
            "rows_per_second": 125_000,
            "status": "pass",
        }
        merged = mod.merge_cases({"cases": [legacy]}, [current_case()])
        self.assertEqual(2, len(merged))
        self.assertEqual({mod.LEGACY_PROFILE, mod.CURRENT_PROFILE}, {mod.profile_of(c) for c in merged})
        visible = mod.standard_cases(merged, "h2", "JOB")
        self.assertEqual(1, len(visible))
        self.assertEqual(mod.CURRENT_PROFILE, mod.profile_of(visible[0]))

    def test_source_update_preserves_unrelated_cases(self):
        existing = {
            "updated_at": "2026-09-08T00:00:00Z",
            "cases": [current_case(db_pair="mysql-oracle", atomic_level="CHUNK", row_count=50_000_000)],
        }
        incoming = [current_case(db_pair="h2-h2", duration_ms=4_000)]
        merged = mod.merge_cases(existing, incoming)
        self.assertEqual(2, len(merged))
        self.assertTrue(any(c["db_pair"] == "mysql-oracle" for c in merged))

    def test_chunk_transaction_groups_sum_three_execution_boundaries(self):
        case = current_case(atomic_level="CHUNK")
        # roles: 1 chunk, users: 50 chunks, user_roles: 150 chunks
        self.assertEqual(201, mod.transaction_groups(case))
        self.assertEqual(1, mod.transaction_groups(current_case(atomic_level="JOB")))

    def test_chart_uses_straight_segments_and_measured_markers(self):
        cases = []
        for rows, rps in ((1_000_000, 100_000), (10_000_000, 150_000), (50_000_000, 140_000)):
            cases.append(current_case(row_count=rows, rows_per_second=rps))
        rendered = mod.chart_svg(cases, "h2", "JOB", "en")
        self.assertIn("<polyline", rendered)
        self.assertNotIn("<path d=", rendered)
        self.assertEqual(3, rendered.count('r="4"'))

    def test_render_exposes_current_profile_and_no_smoothing_claim(self):
        rendered = mod.render([current_case()], "en")
        self.assertIn("identity-relations-v2", rendered)
        self.assertIn("no smoothing, regression, or interpolation", rendered)
        self.assertIn("Current-schema coverage:", rendered)


if __name__ == "__main__":
    unittest.main()
