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
    # Health checks and DB clients all succeed; DB clients capture stdin.
    if [[ " $* " == *" psql "* || " $* " == *" mysql "* || " $* " == *" mariadb "* ]]; then
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
