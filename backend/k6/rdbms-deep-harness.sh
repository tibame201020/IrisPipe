#!/usr/bin/env bash
set -euo pipefail

action="${1:?action required}"
engine="${2:?engine required}"
rows="${3:-0}"
container="irispipe-bench-${engine}"

emit_env() {
  if [[ -n "${GITHUB_ENV:-}" ]]; then
    printf '%s=%s\n' "$1" "$2" >> "$GITHUB_ENV"
  else
    printf 'export %s=%q\n' "$1" "$2"
  fi
}

wait_for() {
  local description="$1"
  shift
  for _ in $(seq 1 120); do
    if "$@" >/dev/null 2>&1; then
      return 0
    fi
    sleep 2
  done
  echo "Timed out waiting for ${description}" >&2
  docker logs "$container" 2>&1 | tail -n 200 || true
  return 1
}

sqlserver_cmd() {
  if docker exec "$container" test -x /opt/mssql-tools18/bin/sqlcmd; then
    docker exec "$container" /opt/mssql-tools18/bin/sqlcmd -C "$@"
  else
    docker exec "$container" /opt/mssql-tools/bin/sqlcmd "$@"
  fi
}

start_engine() {
  docker rm -f "$container" >/dev/null 2>&1 || true
  case "$engine" in
    postgres)
      docker run -d --name "$container" -p 5432:5432 \
        -e POSTGRES_DB=irispipe_bench -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres \
        postgres:16 >/dev/null
      wait_for PostgreSQL docker exec "$container" pg_isready -U postgres -d irispipe_bench
      docker exec -i "$container" psql -v ON_ERROR_STOP=1 -U postgres -d irispipe_bench <<SQL
DROP TABLE IF EXISTS benchmark_dest;
DROP TABLE IF EXISTS benchmark_source;
CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255));
CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255));
INSERT INTO benchmark_source (id, name)
SELECT g, 'row-' || g FROM generate_series(1, ${rows}) AS g;
ANALYZE benchmark_source;
SQL
      emit_env SOURCE_JDBC_DRIVER org.postgresql.Driver
      emit_env SOURCE_JDBC_URL jdbc:postgresql://127.0.0.1:5432/irispipe_bench
      emit_env SOURCE_DB_USER postgres
      emit_env SOURCE_DB_PASSWORD postgres
      emit_env DEST_JDBC_DRIVER org.postgresql.Driver
      emit_env DEST_JDBC_URL jdbc:postgresql://127.0.0.1:5432/irispipe_bench
      emit_env DEST_DB_USER postgres
      emit_env DEST_DB_PASSWORD postgres
      ;;
    mysql)
      docker run -d --name "$container" -p 3306:3306 \
        -e MYSQL_DATABASE=irispipe_bench -e MYSQL_ROOT_PASSWORD=irispipe \
        mysql:8.4 >/dev/null
      wait_for MySQL docker exec "$container" mysqladmin ping -h 127.0.0.1 -uroot -pirispipe --silent
      docker exec -i "$container" mysql -uroot -pirispipe irispipe_bench <<SQL
DROP TABLE IF EXISTS benchmark_dest;
DROP TABLE IF EXISTS benchmark_source;
CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255));
CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255));
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
WHERE n <= ${rows};
ANALYZE TABLE benchmark_source;
SQL
      emit_env SOURCE_JDBC_DRIVER com.mysql.cj.jdbc.Driver
      emit_env SOURCE_JDBC_URL 'jdbc:mysql://127.0.0.1:3306/irispipe_bench?useSSL=false&allowPublicKeyRetrieval=true&useCursorFetch=true&rewriteBatchedStatements=true'
      emit_env SOURCE_DB_USER root
      emit_env SOURCE_DB_PASSWORD irispipe
      emit_env DEST_JDBC_DRIVER com.mysql.cj.jdbc.Driver
      emit_env DEST_JDBC_URL 'jdbc:mysql://127.0.0.1:3306/irispipe_bench?useSSL=false&allowPublicKeyRetrieval=true&useCursorFetch=true&rewriteBatchedStatements=true'
      emit_env DEST_DB_USER root
      emit_env DEST_DB_PASSWORD irispipe
      ;;
    mariadb)
      docker run -d --name "$container" -p 3306:3306 \
        -e MARIADB_DATABASE=irispipe_bench -e MARIADB_ROOT_PASSWORD=irispipe \
        mariadb:11.4 >/dev/null
      wait_for MariaDB docker exec "$container" mariadb-admin ping -h 127.0.0.1 -uroot -pirispipe --silent
      docker exec -i "$container" mariadb -uroot -pirispipe irispipe_bench <<SQL
DROP TABLE IF EXISTS benchmark_dest;
DROP TABLE IF EXISTS benchmark_source;
CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255));
CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255));
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
WHERE n <= ${rows};
ANALYZE TABLE benchmark_source;
SQL
      emit_env SOURCE_JDBC_DRIVER org.mariadb.jdbc.Driver
      emit_env SOURCE_JDBC_URL jdbc:mariadb://127.0.0.1:3306/irispipe_bench
      emit_env SOURCE_DB_USER root
      emit_env SOURCE_DB_PASSWORD irispipe
      emit_env DEST_JDBC_DRIVER org.mariadb.jdbc.Driver
      emit_env DEST_JDBC_URL jdbc:mariadb://127.0.0.1:3306/irispipe_bench
      emit_env DEST_DB_USER root
      emit_env DEST_DB_PASSWORD irispipe
      ;;
    sqlserver)
      local_password='IrisPipe!12345'
      docker run -d --name "$container" -p 1433:1433 \
        -e ACCEPT_EULA=Y -e MSSQL_SA_PASSWORD="$local_password" \
        mcr.microsoft.com/mssql/server:2022-latest >/dev/null
      wait_for 'SQL Server' sqlserver_cmd -S localhost -U sa -P "$local_password" -Q 'SELECT 1'
      sqlserver_cmd -S localhost -U sa -P "$local_password" -Q 'IF DB_ID('"'"'irispipe_bench'"'"') IS NULL CREATE DATABASE irispipe_bench'
      sqlserver_cmd -S localhost -U sa -P "$local_password" -d irispipe_bench -Q "SET NOCOUNT ON; IF OBJECT_ID('benchmark_dest','U') IS NOT NULL DROP TABLE benchmark_dest; IF OBJECT_ID('benchmark_source','U') IS NOT NULL DROP TABLE benchmark_source; CREATE TABLE benchmark_source (id INT PRIMARY KEY, name VARCHAR(255)); CREATE TABLE benchmark_dest (id INT PRIMARY KEY, name VARCHAR(255)); WITH d(n) AS (SELECT n FROM (VALUES(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) v(n)), nums AS (SELECT TOP (${rows}) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS id FROM d a CROSS JOIN d b CROSS JOIN d c CROSS JOIN d e CROSS JOIN d f CROSS JOIN d g CROSS JOIN d h CROSS JOIN d i) INSERT INTO benchmark_source(id,name) SELECT id, CONCAT('row-',id) FROM nums;"
      emit_env SOURCE_JDBC_DRIVER com.microsoft.sqlserver.jdbc.SQLServerDriver
      emit_env SOURCE_JDBC_URL 'jdbc:sqlserver://127.0.0.1:1433;databaseName=irispipe_bench;encrypt=false;trustServerCertificate=true'
      emit_env SOURCE_DB_USER sa
      emit_env SOURCE_DB_PASSWORD "$local_password"
      emit_env DEST_JDBC_DRIVER com.microsoft.sqlserver.jdbc.SQLServerDriver
      emit_env DEST_JDBC_URL 'jdbc:sqlserver://127.0.0.1:1433;databaseName=irispipe_bench;encrypt=false;trustServerCertificate=true'
      emit_env DEST_DB_USER sa
      emit_env DEST_DB_PASSWORD "$local_password"
      ;;
    oracle)
      docker run -d --name "$container" -p 1521:1521 \
        -e ORACLE_PASSWORD=OraclePwd123 -e APP_USER=irispipe -e APP_USER_PASSWORD=IrisPipe123 \
        gvenzl/oracle-free:23-slim-faststart >/dev/null
      wait_for Oracle docker exec "$container" bash -lc "printf \"WHENEVER SQLERROR EXIT FAILURE\nSET HEADING OFF FEEDBACK OFF PAGESIZE 0 ECHO OFF\nSELECT 'READY' FROM dual;\nEXIT;\n\" | sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 | grep -q READY"
      docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<SQL
WHENEVER SQLERROR EXIT SQL.SQLCODE
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_dest PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_source PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
CREATE TABLE benchmark_source (id NUMBER(10) PRIMARY KEY, name VARCHAR2(255));
CREATE TABLE benchmark_dest (id NUMBER(10) PRIMARY KEY, name VARCHAR2(255));
INSERT /*+ APPEND */ INTO benchmark_source(id,name)
SELECT LEVEL, 'row-' || LEVEL FROM dual CONNECT BY LEVEL <= ${rows};
COMMIT;
EXIT;
SQL
      emit_env SOURCE_JDBC_DRIVER oracle.jdbc.OracleDriver
      emit_env SOURCE_JDBC_URL jdbc:oracle:thin:@//127.0.0.1:1521/FREEPDB1
      emit_env SOURCE_DB_USER irispipe
      emit_env SOURCE_DB_PASSWORD IrisPipe123
      emit_env DEST_JDBC_DRIVER oracle.jdbc.OracleDriver
      emit_env DEST_JDBC_URL jdbc:oracle:thin:@//127.0.0.1:1521/FREEPDB1
      emit_env DEST_DB_USER irispipe
      emit_env DEST_DB_PASSWORD IrisPipe123
      ;;
    *)
      echo "Unsupported engine: $engine" >&2
      return 2
      ;;
  esac
}

count_dest() {
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
      local_password='IrisPipe!12345'
      sqlserver_cmd -S localhost -U sa -P "$local_password" -d irispipe_bench -h -1 -W -Q 'SET NOCOUNT ON; SELECT COUNT_BIG(*) FROM benchmark_dest' | tr -d '[:space:]'
      ;;
    oracle)
      docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<'SQL' | awk 'NF {line=$0} END {gsub(/[[:space:]]/,"",line); print line}'
WHENEVER SQLERROR EXIT FAILURE
SET HEADING OFF FEEDBACK OFF PAGESIZE 0 VERIFY OFF ECHO OFF
SELECT COUNT(*) FROM benchmark_dest;
EXIT;
SQL
      ;;
    *)
      echo "Unsupported engine: $engine" >&2
      return 2
      ;;
  esac
}

case "$action" in
  start)
    [[ "$rows" =~ ^[0-9]+$ ]] && (( rows > 0 )) || { echo 'rows must be a positive integer' >&2; exit 2; }
    start_engine
    ;;
  count)
    count_dest
    ;;
  stop)
    docker rm -f "$container" >/dev/null 2>&1 || true
    ;;
  *)
    echo "Usage: $0 {start|count|stop} {postgres|mysql|mariadb|sqlserver|oracle} [rows]" >&2
    exit 2
    ;;
esac
