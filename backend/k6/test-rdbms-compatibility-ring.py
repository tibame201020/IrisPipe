#!/usr/bin/env python3
from __future__ import annotations

import subprocess
from pathlib import Path

SCRIPT = Path(__file__).with_name("rdbms-compatibility-ring.sh")
ENGINES = {"h2", "postgres", "mysql", "mariadb", "sqlserver", "oracle"}


def main() -> int:
    result = subprocess.run(
        ["bash", str(SCRIPT), "--plan"],
        check=True,
        capture_output=True,
        text=True,
    )
    routes = [line.split() for line in result.stdout.splitlines() if line.strip()]
    assert len(routes) == 6, routes
    assert {source for source, _, _ in routes} == ENGINES, routes
    assert {dest for _, dest, _ in routes} == ENGINES, routes
    assert {atomic for _, _, atomic in routes} == {"JOB", "CHUNK"}, routes
    assert all(source != dest for source, dest, _ in routes), routes
    assert routes[0][:2] == ["h2", "postgres"], routes
    assert routes[-1][:2] == ["mariadb", "h2"], routes
    print("compatibility ring plan covers every engine once as source and destination")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
