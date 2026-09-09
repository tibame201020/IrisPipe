#!/usr/bin/env bash
set -euo pipefail

action="${1:?action required}"
source_engine="${2:?source engine required}"
dest_engine="${3:?destination engine required}"
rows="${4:-0}"

valid_engine() {
  case "$1" in
    h2|postgres|mysql|mariadb|sqlserver|oracle) return 0 ;;
    *) return 1 ;;
  esac
}

valid_engine "$source_engine" || { echo "Unsupported source engine: $source_engine" >&2; exit 2; }
valid_engine "$dest_engine" || { echo "Unsupported destination engine: $dest_engine" >&2; exit 2; }

container_name() {
  local engine="$1" role="$2"
  printf 'irispipe-bench-%s-%s' "$role" "$engine"
}

host_port() {
  local engine="$1" role="$2"
  case "$engine:$role" in
    postgres:source|postgres:both) echo 55432 ;;
    postgres:dest) echo 55433 ;;
    mysql:source|mysql:both) echo 53306 ;;
    mysql:dest) echo 53307 ;;
    mariadb:source|mariadb:both) echo 53316 ;;
    mariadb:dest) echo 53317 ;;
    sqlserver:source|sqlserver:both) echo 51433 ;;
    sqlserver:dest) echo 51434 ;;
    oracle:source|oracle:both) echo 51521 ;;
    oracle:dest) echo 51522 ;;
    *) return 2 ;;
  esac
}

container_port() {
  case "$1" in
    postgres) echo 5432 ;;
    mysql|mariadb) echo 3306 ;;
    sqlserver) echo 1433 ;;
    oracle) echo 1521 ;;
    *) return 2 ;;
  esac
}

emit_env() {
  if [[ -n "${GITHUB_ENV:-}" ]]; then
    printf '%s=%s\n' "$1" "$2" >> "$GITHUB_ENV"
  else
    printf 'export %s=%q\n' "$1" "$2"
  fi
}

wait_for() {
  local container="$1" description="$2"
  shift 2
  for _ in $(seq 1 180); do
    if "$@" >/dev/null 2>&1; then
      return 0
    fi
    sleep 2
  done
  echo "Timed out waiting for ${description}" >&2
  docker logs "$container" 2>&1 | tail -n 200 || true
  return 1
}

emit_role_env() {
  local role="$1" engine="$2" port="$3"
  local prefix
  [[ "$role" == "dest" ]] && prefix=DEST || prefix=SOURCE
  case "$engine" in
    postgres)
      emit_env "${prefix}_JDBC_DRIVER" org.postgresql.Driver
      emit_env "${prefix}_JDBC_URL" "jdbc:postgresql://127.0.0.1:${port}/irispipe_bench"
      emit_env "${prefix}_DB_USER" postgres
      emit_env "${prefix}_DB_PASSWORD" postgres
      ;;
    mysql)
      emit_env "${prefix}_JDBC_DRIVER" com.mysql.cj.jdbc.Driver
      emit_env "${prefix}_JDBC_URL" "jdbc:mysql://127.0.0.1:${port}/irispipe_bench?useSSL=false&allowPublicKeyRetrieval=true&useCursorFetch=true&rewriteBatchedStatements=true"
      emit_env "${prefix}_DB_USER" root
      emit_env "${prefix}_DB_PASSWORD" irispipe
      ;;
    mariadb)
      emit_env "${prefix}_JDBC_DRIVER" org.mariadb.jdbc.Driver
      emit_env "${prefix}_JDBC_URL" "jdbc:mariadb://127.0.0.1:${port}/irispipe_bench"
      emit_env "${prefix}_DB_USER" root
      emit_env "${prefix}_DB_PASSWORD" irispipe
      ;;
    sqlserver)
      emit_env "${prefix}_JDBC_DRIVER" com.microsoft.sqlserver.jdbc.SQLServerDriver
      emit_env "${prefix}_JDBC_URL" "jdbc:sqlserver://127.0.0.1:${port};databaseName=irispipe_bench;encrypt=false;trustServerCertificate=true"
      emit_env "${prefix}_DB_USER" sa
      emit_env "${prefix}_DB_PASSWORD" 'IrisPipe!12345'
      ;;
    oracle)
      emit_env "${prefix}_JDBC_DRIVER" oracle.jdbc.OracleDriver
      emit_env "${prefix}_JDBC_URL" "jdbc:oracle:thin:@//127.0.0.1:${port}/FREEPDB1"
      emit_env "${prefix}_DB_USER" irispipe
      emit_env "${prefix}_DB_PASSWORD" IrisPipe123
      ;;
  esac
}

sqlserver_cmd() {
  local container="$1"; shift
  if docker exec "$container" test -x /opt/mssql-tools18/bin/sqlcmd; then
    docker exec "$container" /opt/mssql-tools18/bin/sqlcmd -C "$@"
  else
    docker exec "$container" /opt/mssql-tools/bin/sqlcmd "$@"
  fi
}

start_engine() {
  local engine="$1" role="$2" seed_rows="$3"
  [[ "$engine" == "h2" ]] && return 0
  local container port cport
  container="$(container_name "$engine" "$role")"
  port="$(host_port "$engine" "$role")"
  cport="$(container_port "$engine")"
  docker rm -f "$container" >/dev/null 2>&1 || true

  case "$engine" in
    postgres)
      docker run -d --name "$container" -p "${port}:${cport}" \
        -e POSTGRES_DB=irispipe_bench -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres \
        postgres:16 >/dev/null
      wait_for "$container" PostgreSQL docker exec "$container" pg_isready -U postgres -d irispipe_bench
      {
        [[ "$role" == "source" || "$role" == "both" ]] && cat <<SQL
DROP TABLE IF EXISTS benchmark_source;
CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255));
INSERT INTO benchmark_source (id, name)
SELECT g, 'row-' || g FROM generate_series(1, ${seed_rows}) AS g;
ANALYZE benchmark_source;
SQL
        [[ "$role" == "dest" || "$role" == "both" ]] && cat <<'SQL'
DROP TABLE IF EXISTS benchmark_dest;
CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255));
SQL
      } | docker exec -i "$container" psql -v ON_ERROR_STOP=1 -U postgres -d irispipe_bench
      ;;
    mysql|mariadb)
      local image admin client db_env pass_env
      if [[ "$engine" == "mysql" ]]; then
        image=mysql:8.4; admin=mysqladmin; client=mysql; db_env=MYSQL_DATABASE; pass_env=MYSQL_ROOT_PASSWORD
      else
        image=mariadb:11.4; admin=mariadb-admin; client=mariadb; db_env=MARIADB_DATABASE; pass_env=MARIADB_ROOT_PASSWORD
      fi
      docker run -d --name "$container" -p "${port}:${cport}" \
        -e "${db_env}=irispipe_bench" -e "${pass_env}=irispipe" "$image" >/dev/null
      wait_for "$container" "$engine" docker exec "$container" "$admin" ping -h 127.0.0.1 -uroot -pirispipe --silent
      {
        [[ "$role" == "source" || "$role" == "both" ]] && cat <<SQL
DROP TABLE IF EXISTS benchmark_source;
CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255));
INSERT INTO benchmark_source (id, name)
SELECT n, CONCAT('row-', n)
FROM (
  SELECT 1 + a.n + 10*b.n + 100*c.n + 1000*d.n + 10000*e.n + 100000*f.n + 1000000*g.n + 10000000*h.n AS n
  FROM (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) c
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) d
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) e
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) f
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) g
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) h
) numbers
WHERE n <= ${seed_rows};
ANALYZE TABLE benchmark_source;
SQL
        [[ "$role" == "dest" || "$role" == "both" ]] && cat <<'SQL'
DROP TABLE IF EXISTS benchmark_dest;
CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255));
SQL
      } | docker exec -i "$container" "$client" -uroot -pirispipe irispipe_bench
      ;;
    sqlserver)
      local password='IrisPipe!12345'
      docker run -d --name "$container" -p "${port}:${cport}" \
        -e ACCEPT_EULA=Y -e MSSQL_SA_PASSWORD="$password" \
        mcr.microsoft.com/mssql/server:2022-latest >/dev/null
      wait_for "$container" 'SQL Server' sqlserver_cmd "$container" -S localhost -U sa -P "$password" -Q 'SELECT 1'
      sqlserver_cmd "$container" -S localhost -U sa -P "$password" -Q "IF DB_ID('irispipe_bench') IS NULL CREATE DATABASE irispipe_bench"
      local sql="SET NOCOUNT ON;"
      if [[ "$role" == "source" || "$role" == "both" ]]; then
        sql+=" IF OBJECT_ID('benchmark_source','U') IS NOT NULL DROP TABLE benchmark_source; CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255)); WITH d(n) AS (SELECT n FROM (VALUES(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) v(n)), nums AS (SELECT TOP (${seed_rows}) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS id FROM d a CROSS JOIN d b CROSS JOIN d c CROSS JOIN d e CROSS JOIN d f CROSS JOIN d g CROSS JOIN d h CROSS JOIN d i) INSERT INTO benchmark_source(id,name) SELECT id, CONCAT('row-',id) FROM nums;"
      fi
      if [[ "$role" == "dest" || "$role" == "both" ]]; then
        sql+=" IF OBJECT_ID('benchmark_dest','U') IS NOT NULL DROP TABLE benchmark_dest; CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255));"
      fi
      sqlserver_cmd "$container" -S localhost -U sa -P "$password" -d irispipe_bench -Q "$sql"
      ;;
    oracle)
      local oracle_outer=$(( (seed_rows + 9999) / 10000 ))
      docker run -d --name "$container" -p "${port}:${cport}" \
        -e ORACLE_PASSWORD=OraclePwd123 -e APP_USER=irispipe -e APP_USER_PASSWORD=IrisPipe123 \
        gvenzl/oracle-free:23-slim-faststart >/dev/null
      wait_for "$container" Oracle docker exec "$container" bash -lc "printf \"WHENEVER SQLERROR EXIT FAILURE\\nSET HEADING OFF FEEDBACK OFF PAGESIZE 0 ECHO OFF\\nSELECT 'READY' FROM dual;\\nEXIT;\\n\" | sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 | grep -q READY"
      if [[ "$role" == "source" || "$role" == "both" ]]; then
        docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<SQL
WHENEVER SQLERROR EXIT SQL.SQLCODE
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_source PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
CREATE TABLE benchmark_source (id NUMBER(10) PRIMARY KEY, name VARCHAR2(255));
INSERT /*+ APPEND */ INTO benchmark_source(id,name)
SELECT id, 'row-' || id
FROM (
  SELECT 1 + a.n + 10000 * b.n AS id
  FROM (SELECT LEVEL - 1 AS n FROM dual CONNECT BY LEVEL <= 10000) a
  CROSS JOIN (SELECT LEVEL - 1 AS n FROM dual CONNECT BY LEVEL <= ${oracle_outer}) b
)
WHERE id <= ${seed_rows};
COMMIT;
EXIT;
SQL
      fi
      if [[ "$role" == "dest" || "$role" == "both" ]]; then
        docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<'SQL'
WHENEVER SQLERROR EXIT SQL.SQLCODE
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_dest PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
CREATE TABLE benchmark_dest (id NUMBER(10) PRIMARY KEY, name VARCHAR2(255));
EXIT;
SQL
      fi
      ;;
  esac
}

start_pair() {
  [[ "$rows" =~ ^[0-9]+$ ]] && (( rows > 0 )) || { echo 'rows must be a positive integer' >&2; exit 2; }
  if [[ "$source_engine" == "$dest_engine" && "$source_engine" != "h2" ]]; then
    start_engine "$source_engine" both "$rows"
    local port
    port="$(host_port "$source_engine" both)"
    emit_role_env source "$source_engine" "$port"
    emit_role_env dest "$dest_engine" "$port"
    return
  fi
  if [[ "$source_engine" != "h2" ]]; then
    start_engine "$source_engine" source "$rows"
    emit_role_env source "$source_engine" "$(host_port "$source_engine" source)"
  fi
  if [[ "$dest_engine" != "h2" ]]; then
    start_engine "$dest_engine" dest "$rows"
    emit_role_env dest "$dest_engine" "$(host_port "$dest_engine" dest)"
  fi
}

count_engine_dest() {
  local engine="$1" role="$2" container
  container="$(container_name "$engine" "$role")"
  case "$engine" in
    postgres)
      docker exec "$container" psql -U postgres -d irispipe_bench -Atqc 'SELECT COUNT(*) FROM benchmark_dest' | tr -d '[:space:]'
      ;;
    mysql)
      docker exec "$container" mysql -uroot -pirispipe -Nse 'SELECT COUNT(*) FROM benchmark_dest' irispipe_bench 2>/dev/null | tr -d '[:space:]'
      ;;
    mariadb)
      docker exec "$container" mariadb -uroot -pirispipe -Nse 'SELECT COUNT(*) FROM benchmark_dest' irispipe_bench 2>/dev/null | tr -d '[:space:]'
      ;;
    sqlserver)
      sqlserver_cmd "$container" -S localhost -U sa -P 'IrisPipe!12345' -d irispipe_bench -h -1 -W -Q 'SET NOCOUNT ON; SELECT COUNT_BIG(*) FROM benchmark_dest' | tr -d '[:space:]'
      ;;
    oracle)
      docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<'SQL' | awk 'NF {line=$0} END {gsub(/[[:space:]]/,"",line); print line}'
WHENEVER SQLERROR EXIT FAILURE
SET HEADING OFF FEEDBACK OFF PAGESIZE 0 VERIFY OFF ECHO OFF
SELECT COUNT(*) FROM benchmark_dest;
EXIT;
SQL
      ;;
    *) return 2 ;;
  esac
}

count_pair() {
  [[ "$dest_engine" == "h2" ]] && { echo 'H2 destination is verified inside k6' >&2; return 2; }
  local role=dest
  [[ "$source_engine" == "$dest_engine" ]] && role=both
  count_engine_dest "$dest_engine" "$role"
}

stop_pair() {
  if [[ "$source_engine" == "$dest_engine" && "$source_engine" != "h2" ]]; then
    docker rm -f "$(container_name "$source_engine" both)" >/dev/null 2>&1 || true
    return
  fi
  [[ "$source_engine" == "h2" ]] || docker rm -f "$(container_name "$source_engine" source)" >/dev/null 2>&1 || true
  [[ "$dest_engine" == "h2" ]] || docker rm -f "$(container_name "$dest_engine" dest)" >/dev/null 2>&1 || true
}

case "$action" in
  start-pair) start_pair ;;
  count-pair) count_pair ;;
  stop-pair) stop_pair ;;
  *)
    echo "Usage: $0 {start-pair|count-pair|stop-pair} SOURCE DEST [rows]" >&2
    exit 2
    ;;
esac
