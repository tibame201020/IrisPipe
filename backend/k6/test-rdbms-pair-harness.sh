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
    # Health checks and DB clients all succeed; DB clients consume stdin.
    if [[ " $* " == *" psql "* || " $* " == *" mysql "* || " $* " == *" mariadb "* ]]; then
      cat >/dev/null || true
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

for source in postgres mysql mariadb; do
  output="$(bash "$ROOT/rdbms-pair-harness.sh" start-pair "$source" h2 100000)"
  grep -q 'SOURCE_JDBC_DRIVER' <<<"$output"
  bash "$ROOT/rdbms-pair-harness.sh" stop-pair "$source" h2
  echo "source-only role succeeds: $source -> h2"
done
