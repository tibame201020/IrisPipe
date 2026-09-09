#!/usr/bin/env python3
from __future__ import annotations

import json
import subprocess
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("finalize-external-benchmark.py")


class FinalizeExternalBenchmarkTest(unittest.TestCase):
    def write_report(self, root: Path) -> Path:
        path = root / "report.json"
        path.write_text(json.dumps({
            "status": "pass",
            "benchmark_profile": "identity-relations-v2",
            "expected_destination_rows": 1_000_000,
            "expected_destination_rows_by_table": {
                "roles": 16,
                "users": 249_996,
                "user_roles": 749_988,
            },
            "actual_destination_rows": None,
            "actual_destination_rows_by_table": None,
        }), encoding="utf-8")
        return path

    def test_three_table_counts_are_persisted_and_pass(self):
        with tempfile.TemporaryDirectory() as tmp:
            report = self.write_report(Path(tmp))
            result = subprocess.run([
                "python", str(SCRIPT), "--report", str(report),
                "--actual-counts", "16,249996,749988",
            ], capture_output=True, text=True)
            self.assertEqual(0, result.returncode, result.stderr)
            data = json.loads(report.read_text(encoding="utf-8"))
            self.assertEqual("pass", data["status"])
            self.assertEqual(1_000_000, data["actual_destination_rows"])
            self.assertEqual(249_996, data["actual_destination_rows_by_table"]["users"])

    def test_per_table_mismatch_fails_even_when_total_matches(self):
        with tempfile.TemporaryDirectory() as tmp:
            report = self.write_report(Path(tmp))
            result = subprocess.run([
                "python", str(SCRIPT), "--report", str(report),
                "--actual-counts", "16,249997,749987",
            ], capture_output=True, text=True)
            self.assertEqual(1, result.returncode)
            data = json.loads(report.read_text(encoding="utf-8"))
            self.assertEqual("fail", data["status"])


if __name__ == "__main__":
    unittest.main()
