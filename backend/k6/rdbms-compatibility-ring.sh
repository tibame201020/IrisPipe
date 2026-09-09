#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HARNESS="$ROOT/rdbms-pair-harness.sh"
FINALIZER="$ROOT/finalize-external-benchmark.py"

# One cycle gives every engine one source hop and one destination hop while
# deliberately avoiding a MySQL<->MariaDB edge so the smoke test covers more
# heterogeneous JDBC/type boundaries.
ROUTES=(
  "h2 postgres JOB"
  "postgres oracle CHUNK"
  "oracle mysql JOB"
  "mysql sqlserver CHUNK"
  "sqlserver mariadb JOB"
  "mariadb h2 CHUNK"
)

if [[ "${1:-}" == "--plan" ]]; then
  printf '%s\n' "${ROUTES[@]}"
  exit 0
fi

ROWS="${RING_ROW_COUNT:-10000}"
FETCH_SIZE="${RING_FETCH_SIZE:-1000}"
BATCH_SIZE="${RING_BATCH_SIZE:-1000}"
REPORT_DIR="${RING_REPORT_DIR:-$ROOT/.compat-ring-results}"
ROLE_COUNT=16

[[ "$ROWS" =~ ^[0-9]+$ ]] && (( ROWS > ROLE_COUNT )) || {
  echo "RING_ROW_COUNT must be an integer greater than $ROLE_COUNT" >&2
  exit 2
}
remainder=$((ROWS - ROLE_COUNT))
(( remainder % 4 == 0 )) || {
  echo "RING_ROW_COUNT - $ROLE_COUNT must be divisible by 4" >&2
  exit 2
}
users=$((remainder / 4))
user_roles=$((remainder - users))
expected_counts="$ROLE_COUNT,$users,$user_roles"

mkdir -p "$REPORT_DIR"

for route in "${ROUTES[@]}"; do
  read -r source dest atomic <<<"$route"
  echo "=== compatibility hop: $source -> $dest ($atomic, $ROWS total rows) ==="

  # emit-shared-pair prints shell exports when GITHUB_ENV is blank. Evaluating
  # those exports switches the JDBC endpoints without restarting any DB.
  pair_env="$(GITHUB_ENV= bash "$HARNESS" emit-shared-pair "$source" "$dest")"
  eval "$pair_env"

  if [[ "$source" != "h2" ]]; then
    actual_source="$(bash "$HARNESS" count-shared-source "$source" "$dest")"
    if [[ "$actual_source" != "$expected_counts" ]]; then
      echo "source seed mismatch for $source: expected=$expected_counts actual=$actual_source" >&2
      exit 1
    fi
  fi

  report="$REPORT_DIR/${source}-${dest}-${atomic}.json"
  rm -f "$report"
  (
    cd "$ROOT"
    ATOMIC_LEVEL="$atomic" \
    ROW_COUNT="$ROWS" \
    FETCH_SIZE="$FETCH_SIZE" \
    BATCH_SIZE="$BATCH_SIZE" \
    BENCHMARK_MODE=success \
    BENCHMARK_PROFILE=identity-relations-v2-compat-ring \
    DB_PAIR="${source}-${dest}" \
    K6_SETUP_TIMEOUT="10m" \
    K6_MAX_DURATION="5m" \
    PIPELINE_HTTP_TIMEOUT="5m" \
    BENCHMARK_REPORT="$report" \
    SOURCE_JDBC_DRIVER="${SOURCE_JDBC_DRIVER:-}" \
    SOURCE_JDBC_URL="${SOURCE_JDBC_URL:-}" \
    SOURCE_DB_USER="${SOURCE_DB_USER:-}" \
    SOURCE_DB_PASSWORD="${SOURCE_DB_PASSWORD:-}" \
    DEST_JDBC_DRIVER="${DEST_JDBC_DRIVER:-}" \
    DEST_JDBC_URL="${DEST_JDBC_URL:-}" \
    DEST_DB_USER="${DEST_DB_USER:-}" \
    DEST_DB_PASSWORD="${DEST_DB_PASSWORD:-}" \
    k6 run data-volume-benchmark.js
  )

  if [[ "$dest" != "h2" ]]; then
    actual_dest="$(bash "$HARNESS" count-shared-dest "$source" "$dest")"
    python "$FINALIZER" --report "$report" --actual-counts "$actual_dest"
  fi

  python - "$report" "$source" "$dest" "$atomic" <<'PY'
import json
import sys
from pathlib import Path

report = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
source, dest, atomic = sys.argv[2:5]
if report.get("status") != "pass":
    raise SystemExit(f"compatibility hop failed: {source}->{dest} {atomic}: {report}")
print(
    f"PASS {source}->{dest} {atomic}: "
    f"{report['expected_destination_rows']} rows, "
    f"fetch={report['fetch_size']}, batch={report['batch_size']}"
)
PY
done

echo "RDBMS compatibility ring PASS: ${#ROUTES[@]} hops, $ROWS rows per hop"
