#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cat > "$TMP/docker" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
cmd="${1:-}"
shift || true
case "$cmd" in
  run)
    echo fake-container
    ;;
  rm|logs)
    ;;
  exec)
    # Health checks and DB clients all succeed; capture SQL payloads/args.
    if [[ " $* " == *" psql "* || " $* " == *" mysql "* || " $* " == *" mariadb "* ]]; then
      cat >> "${DOCKER_STDIN_LOG:?}" || true
    fi
    if [[ " $* " == *"sqlcmd"* ]]; then
      printf '%s
' "$*" >> "${DOCKER_CMD_LOG:?}"
    fi
    ;;
  ps)
    echo fake-container
    ;;
  *)
    ;;
esac
EOF
chmod +x "$TMP/docker"

export PATH="$TMP:$PATH"
export GITHUB_ENV="$TMP/github-env"
export DOCKER_STDIN_LOG="$TMP/docker-stdin"
export DOCKER_CMD_LOG="$TMP/docker-cmd"

for source in postgres mysql mariadb; do
  : > "$GITHUB_ENV"
  : > "$DOCKER_STDIN_LOG"
  bash "$ROOT/rdbms-pair-harness.sh" start-pair "$source" h2 100000
  grep -q '^SOURCE_JDBC_DRIVER=' "$GITHUB_ENV"
  grep -q '^SOURCE_JDBC_URL=' "$GITHUB_ENV"
  grep -q 'benchmark_src_roles' "$DOCKER_STDIN_LOG"
  grep -q 'benchmark_src_users' "$DOCKER_STDIN_LOG"
  grep -q 'benchmark_src_user_roles' "$DOCKER_STDIN_LOG"
  # For 100000 total rows: users=24996, user_roles=74988, roles=16.
  grep -q '24996' "$DOCKER_STDIN_LOG"
  grep -q '74988' "$DOCKER_STDIN_LOG"
  bash "$ROOT/rdbms-pair-harness.sh" stop-pair "$source" h2
  echo "multi-table source-only role succeeds: $source -> h2"
done

: > "$GITHUB_ENV"
: > "$DOCKER_CMD_LOG"
bash "$ROOT/rdbms-pair-harness.sh" start-pair sqlserver h2 100000
grep -q '^SOURCE_JDBC_DRIVER=com.microsoft.sqlserver.jdbc.SQLServerDriver$' "$GITHUB_ENV"
grep -q ' -b ' "$DOCKER_CMD_LOG"
grep -q 'benchmark_src_roles' "$DOCKER_CMD_LOG"
grep -q 'benchmark_src_users' "$DOCKER_CMD_LOG"
grep -q 'benchmark_src_user_roles' "$DOCKER_CMD_LOG"
grep -Fq "((((n-1)/3) + ((n-1)%3)*5) % 16) + 1" "$DOCKER_CMD_LOG"
python - "$DOCKER_CMD_LOG" <<'PY'
from pathlib import Path
import sys
line = next(line for line in Path(sys.argv[1]).read_text().splitlines() if 'benchmark_src_user_roles' in line and 'SELECT ((n-1)/3)+1' in line)
sql = line.split(' -Q ', 1)[1]
depth = 0
for ch in sql:
    if ch == '(': depth += 1
    elif ch == ')':
        depth -= 1
        if depth < 0: raise SystemExit('unbalanced SQL Server seed SQL')
if depth != 0: raise SystemExit(f'unbalanced SQL Server seed SQL: depth={depth}')
PY
bash "$ROOT/rdbms-pair-harness.sh" stop-pair sqlserver h2
echo "multi-table source-only role succeeds: sqlserver -> h2"
