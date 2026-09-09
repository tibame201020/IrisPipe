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
    printf '%s\n' "$*" >> "${DOCKER_RUN_LOG:?}"
    echo fake-container
    ;;
  port)
    # Docker-assigned ephemeral host port used by the harness after startup.
    echo '127.0.0.1:49152'
    ;;
  rm|logs)
    ;;
  exec)
    # Health checks and DB clients all succeed. Capture every exec command so
    # target-database readiness probes can be asserted independently from seed SQL.
    printf '%s\n' "$*" >> "${DOCKER_CMD_LOG:?}"
    if [[ " $* " == *" psql "* && " $* " != *" -Atqc "* ]]; then
      cat >> "${DOCKER_STDIN_LOG:?}" || true
    elif [[ " $* " == *" mysql "* && " $* " != *" -Nse "* ]]; then
      cat >> "${DOCKER_STDIN_LOG:?}" || true
    elif [[ " $* " == *" mariadb "* && " $* " != *" -Nse "* ]]; then
      cat >> "${DOCKER_STDIN_LOG:?}" || true
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
export DOCKER_RUN_LOG="$TMP/docker-run"

for source in postgres mysql mariadb; do
  : > "$GITHUB_ENV"
  : > "$DOCKER_STDIN_LOG"
  : > "$DOCKER_CMD_LOG"
  : > "$DOCKER_RUN_LOG"
  bash "$ROOT/rdbms-pair-harness.sh" start-pair "$source" h2 100000
  grep -q '^SOURCE_JDBC_DRIVER=' "$GITHUB_ENV"
  grep -q '^SOURCE_JDBC_URL=' "$GITHUB_ENV"
  grep -q 'benchmark_src_roles' "$DOCKER_STDIN_LOG"
  grep -q 'benchmark_src_users' "$DOCKER_STDIN_LOG"
  grep -q 'benchmark_src_user_roles' "$DOCKER_STDIN_LOG"
  # For 100000 total rows: users=24996, user_roles=74988, roles=16.
  grep -q '24996' "$DOCKER_STDIN_LOG"
  grep -q '74988' "$DOCKER_STDIN_LOG"
  grep -Fq -- '-p 127.0.0.1::' "$DOCKER_RUN_LOG"
  grep -q '^SOURCE_JDBC_URL=.*127.0.0.1:49152' "$GITHUB_ENV"
  case "$source" in
    postgres)
      grep -Fq 'psql -h 127.0.0.1 -U postgres -d irispipe_bench -Atqc SELECT 1' "$DOCKER_CMD_LOG"
      ! grep -q 'pg_isready' "$DOCKER_CMD_LOG"
      ;;
    mysql)
      grep -Fq 'mysql -h 127.0.0.1 -uroot -pirispipe -Nse SELECT 1 irispipe_bench' "$DOCKER_CMD_LOG"
      ! grep -q 'mysqladmin.* ping ' "$DOCKER_CMD_LOG"
      ;;
    mariadb)
      grep -Fq 'mariadb -h 127.0.0.1 -uroot -pirispipe -Nse SELECT 1 irispipe_bench' "$DOCKER_CMD_LOG"
      ! grep -q 'mariadb-admin.* ping ' "$DOCKER_CMD_LOG"
      ;;
  esac
  bash "$ROOT/rdbms-pair-harness.sh" stop-pair "$source" h2
  echo "target-database readiness + multi-table source setup succeeds: $source -> h2"
done

: > "$GITHUB_ENV"
: > "$DOCKER_CMD_LOG"
: > "$DOCKER_RUN_LOG"
bash "$ROOT/rdbms-pair-harness.sh" start-pair sqlserver h2 100000
grep -q '^SOURCE_JDBC_DRIVER=com.microsoft.sqlserver.jdbc.SQLServerDriver$' "$GITHUB_ENV"
grep -q ' -b ' "$DOCKER_CMD_LOG"
grep -q 'benchmark_src_roles' "$DOCKER_CMD_LOG"
grep -q 'benchmark_src_users' "$DOCKER_CMD_LOG"
grep -q 'benchmark_src_user_roles' "$DOCKER_CMD_LOG"
grep -Fq -- "-d irispipe_bench -Q SELECT 1" "$DOCKER_CMD_LOG"
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

: > "$GITHUB_ENV"
bash "$ROOT/rdbms-pair-harness.sh" emit-shared-pair h2 postgres
grep -q '^SOURCE_JDBC_DRIVER=$' "$GITHUB_ENV"
grep -q '^DEST_JDBC_DRIVER=org.postgresql.Driver$' "$GITHUB_ENV"
grep -q '^DEST_JDBC_URL=jdbc:postgresql://127.0.0.1:49152/irispipe_bench$' "$GITHUB_ENV"

: > "$GITHUB_ENV"
bash "$ROOT/rdbms-pair-harness.sh" emit-shared-pair sqlserver h2
grep -q '^SOURCE_JDBC_DRIVER=com.microsoft.sqlserver.jdbc.SQLServerDriver$' "$GITHUB_ENV"
grep -q 'SOURCE_JDBC_URL=.*127.0.0.1:49152' "$GITHUB_ENV"
grep -q '^DEST_JDBC_DRIVER=$' "$GITHUB_ENV"
echo "shared compatibility pair endpoints use the reusable :both containers"

! grep -Eq '55432|55433|53306|53307|53316|53317|51433|51434|51521|51522' "$ROOT/rdbms-pair-harness.sh"
echo "external RDBMS containers use Docker-assigned host ports"
