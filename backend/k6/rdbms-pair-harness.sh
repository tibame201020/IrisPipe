#!/usr/bin/env bash
set -euo pipefail

action="${1:?action required}"
source_engine="${2:?source engine required}"
dest_engine="${3:?destination engine required}"
rows="${4:-0}"
ROLE_COUNT=16
USER_ROWS=0
USER_ROLE_ROWS=0

valid_engine() {
  case "$1" in
    h2|postgres|mysql|mariadb|sqlserver|oracle) return 0 ;;
    *) return 1 ;;
  esac
}

valid_engine "$source_engine" || { echo "Unsupported source engine: $source_engine" >&2; exit 2; }
valid_engine "$dest_engine" || { echo "Unsupported destination engine: $dest_engine" >&2; exit 2; }

calculate_workload() {
  local total="$1" remainder
  [[ "$total" =~ ^[0-9]+$ ]] && (( total > ROLE_COUNT )) || {
    echo "rows must be an integer greater than ${ROLE_COUNT}" >&2
    exit 2
  }
  remainder=$((total - ROLE_COUNT))
  (( remainder % 4 == 0 )) || {
    echo "rows - ${ROLE_COUNT} must be divisible by 4" >&2
    exit 2
  }
  USER_ROWS=$((remainder / 4))
  USER_ROLE_ROWS=$((remainder - USER_ROWS))
}

container_name() {
  local engine="$1" role="$2"
  printf 'irispipe-bench-%s-%s' "$role" "$engine"
}

mapped_host_port() {
  local engine="$1" role="$2" container cport mapping
  container="$(container_name "$engine" "$role")"
  cport="$(container_port "$engine")"
  mapping="$(docker port "$container" "${cport}/tcp" | head -n 1)"
  [[ "$mapping" =~ :([0-9]+)$ ]] || {
    echo "Unable to resolve published host port for ${container}:${cport}" >&2
    return 1
  }
  printf '%s\n' "${BASH_REMATCH[1]}"
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
    docker exec "$container" /opt/mssql-tools18/bin/sqlcmd -C -b "$@"
  else
    docker exec "$container" /opt/mssql-tools/bin/sqlcmd -b "$@"
  fi
}

mysql_number_source() {
  cat <<'SQL'
  SELECT 1 + a.n + 10*b.n + 100*c.n + 1000*d.n + 10000*e.n + 100000*f.n + 1000000*g.n + 10000000*h.n AS n
  FROM (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) c
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) d
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) e
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) f
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) g
  CROSS JOIN (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) h
SQL
}

start_engine() {
  local engine="$1" role="$2" seed_rows="$3"
  [[ "$engine" == "h2" ]] && return 0
  calculate_workload "$seed_rows"
  local container cport
  container="$(container_name "$engine" "$role")"
  cport="$(container_port "$engine")"
  docker rm -f "$container" >/dev/null 2>&1 || true

  case "$engine" in
    postgres)
      docker run -d --name "$container" -p "127.0.0.1::${cport}" \
        -e POSTGRES_DB=irispipe_bench -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres \
        postgres:16 >/dev/null
      wait_for "$container" 'PostgreSQL target database' \
        docker exec "$container" psql -h 127.0.0.1 -U postgres -d irispipe_bench -Atqc 'SELECT 1'
      {
        if [[ "$role" == "source" || "$role" == "both" ]]; then cat <<SQL
DROP TABLE IF EXISTS benchmark_src_user_roles;
DROP TABLE IF EXISTS benchmark_src_users;
DROP TABLE IF EXISTS benchmark_src_roles;
CREATE TABLE benchmark_src_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL);
CREATE TABLE benchmark_src_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL);
CREATE TABLE benchmark_src_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL, PRIMARY KEY (user_id, role_id));
INSERT INTO benchmark_src_roles
SELECT g, 'ROLE_' || g, 'Role ' || g, TIMESTAMP '2025-01-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00' FROM generate_series(1, ${ROLE_COUNT}) AS g;
INSERT INTO benchmark_src_users
SELECT g,
       'user_' || g,
       'user' || g || '@example.test',
       'User ' || g,
       CASE WHEN g % 10 = 0 THEN 'SUSPENDED' WHEN g % 10 = 1 THEN 'INVITED' ELSE 'ACTIVE' END,
       CASE g % 3 WHEN 0 THEN 'zh-TW' WHEN 1 THEN 'en-US' ELSE 'ja-JP' END,
       TIMESTAMP '2025-01-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00'
FROM generate_series(1, ${USER_ROWS}) AS g;
INSERT INTO benchmark_src_user_roles
SELECT ((g - 1) / 3) + 1,
       ((((g - 1) / 3) + 1 + ((g - 1) % 3) * 5 - 1) % ${ROLE_COUNT}) + 1,
       TIMESTAMP '2025-02-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00'
FROM generate_series(1, ${USER_ROLE_ROWS}) AS g;
ANALYZE benchmark_src_roles;
ANALYZE benchmark_src_users;
ANALYZE benchmark_src_user_roles;
SQL
        fi
        if [[ "$role" == "dest" || "$role" == "both" ]]; then cat <<'SQL'
DROP TABLE IF EXISTS benchmark_dst_user_roles;
DROP TABLE IF EXISTS benchmark_dst_users;
DROP TABLE IF EXISTS benchmark_dst_roles;
CREATE TABLE benchmark_dst_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL);
CREATE TABLE benchmark_dst_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL);
CREATE TABLE benchmark_dst_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at TIMESTAMP NOT NULL, updated_at TIMESTAMP NOT NULL, PRIMARY KEY (user_id, role_id));
SQL
        fi
        true
      } | docker exec -i "$container" psql -h 127.0.0.1 -v ON_ERROR_STOP=1 -U postgres -d irispipe_bench
      ;;
    mysql|mariadb)
      local image client db_env pass_env numbers
      if [[ "$engine" == "mysql" ]]; then
        image=mysql:8.4; client=mysql; db_env=MYSQL_DATABASE; pass_env=MYSQL_ROOT_PASSWORD
      else
        image=mariadb:11.4; client=mariadb; db_env=MARIADB_DATABASE; pass_env=MARIADB_ROOT_PASSWORD
      fi
      docker run -d --name "$container" -p "127.0.0.1::${cport}" \
        -e "${db_env}=irispipe_bench" -e "${pass_env}=irispipe" "$image" >/dev/null
      wait_for "$container" "$engine target database" \
        docker exec "$container" "$client" -h 127.0.0.1 -uroot -pirispipe -Nse 'SELECT 1' irispipe_bench
      numbers="$(mysql_number_source)"
      {
        if [[ "$role" == "source" || "$role" == "both" ]]; then cat <<SQL
DROP TABLE IF EXISTS benchmark_src_user_roles;
DROP TABLE IF EXISTS benchmark_src_users;
DROP TABLE IF EXISTS benchmark_src_roles;
CREATE TABLE benchmark_src_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at DATETIME(6) NOT NULL, updated_at DATETIME(6) NOT NULL);
CREATE TABLE benchmark_src_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at DATETIME(6) NOT NULL, updated_at DATETIME(6) NOT NULL);
CREATE TABLE benchmark_src_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at DATETIME(6) NOT NULL, updated_at DATETIME(6) NOT NULL, PRIMARY KEY (user_id, role_id));
INSERT INTO benchmark_src_roles VALUES
(1,'ROLE_1','Role 1','2025-01-01 00:00:00','2026-01-01 12:00:00'),(2,'ROLE_2','Role 2','2025-01-01 00:00:00','2026-01-01 12:00:00'),(3,'ROLE_3','Role 3','2025-01-01 00:00:00','2026-01-01 12:00:00'),(4,'ROLE_4','Role 4','2025-01-01 00:00:00','2026-01-01 12:00:00'),(5,'ROLE_5','Role 5','2025-01-01 00:00:00','2026-01-01 12:00:00'),(6,'ROLE_6','Role 6','2025-01-01 00:00:00','2026-01-01 12:00:00'),(7,'ROLE_7','Role 7','2025-01-01 00:00:00','2026-01-01 12:00:00'),(8,'ROLE_8','Role 8','2025-01-01 00:00:00','2026-01-01 12:00:00'),(9,'ROLE_9','Role 9','2025-01-01 00:00:00','2026-01-01 12:00:00'),(10,'ROLE_10','Role 10','2025-01-01 00:00:00','2026-01-01 12:00:00'),(11,'ROLE_11','Role 11','2025-01-01 00:00:00','2026-01-01 12:00:00'),(12,'ROLE_12','Role 12','2025-01-01 00:00:00','2026-01-01 12:00:00'),(13,'ROLE_13','Role 13','2025-01-01 00:00:00','2026-01-01 12:00:00'),(14,'ROLE_14','Role 14','2025-01-01 00:00:00','2026-01-01 12:00:00'),(15,'ROLE_15','Role 15','2025-01-01 00:00:00','2026-01-01 12:00:00'),(16,'ROLE_16','Role 16','2025-01-01 00:00:00','2026-01-01 12:00:00');
INSERT INTO benchmark_src_users (id,username,email,display_name,status,locale,created_at,updated_at)
SELECT n, CONCAT('user_',n), CONCAT('user',n,'@example.test'), CONCAT('User ',n),
       CASE WHEN MOD(n,10)=0 THEN 'SUSPENDED' WHEN MOD(n,10)=1 THEN 'INVITED' ELSE 'ACTIVE' END,
       CASE MOD(n,3) WHEN 0 THEN 'zh-TW' WHEN 1 THEN 'en-US' ELSE 'ja-JP' END,
       '2025-01-01 00:00:00','2026-01-01 12:00:00'
FROM (${numbers}) numbers WHERE n <= ${USER_ROWS};
INSERT INTO benchmark_src_user_roles (user_id,role_id,created_at,updated_at)
SELECT FLOOR((n-1)/3)+1,
       MOD(FLOOR((n-1)/3)+1 + MOD(n-1,3)*5 - 1, ${ROLE_COUNT})+1,
       '2025-02-01 00:00:00','2026-01-01 12:00:00'
FROM (${numbers}) numbers WHERE n <= ${USER_ROLE_ROWS};
ANALYZE TABLE benchmark_src_roles, benchmark_src_users, benchmark_src_user_roles;
SQL
        fi
        if [[ "$role" == "dest" || "$role" == "both" ]]; then cat <<'SQL'
DROP TABLE IF EXISTS benchmark_dst_user_roles;
DROP TABLE IF EXISTS benchmark_dst_users;
DROP TABLE IF EXISTS benchmark_dst_roles;
CREATE TABLE benchmark_dst_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at DATETIME(6) NOT NULL, updated_at DATETIME(6) NOT NULL);
CREATE TABLE benchmark_dst_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at DATETIME(6) NOT NULL, updated_at DATETIME(6) NOT NULL);
CREATE TABLE benchmark_dst_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at DATETIME(6) NOT NULL, updated_at DATETIME(6) NOT NULL, PRIMARY KEY (user_id, role_id));
SQL
        fi
        true
      } | docker exec -i "$container" "$client" -h 127.0.0.1 -uroot -pirispipe irispipe_bench
      ;;
    sqlserver)
      local password='IrisPipe!12345'
      docker run -d --name "$container" -p "127.0.0.1::${cport}" \
        -e ACCEPT_EULA=Y -e MSSQL_SA_PASSWORD="$password" \
        mcr.microsoft.com/mssql/server:2022-latest >/dev/null
      wait_for "$container" 'SQL Server' sqlserver_cmd "$container" -S localhost -U sa -P "$password" -Q 'SELECT 1'
      sqlserver_cmd "$container" -S localhost -U sa -P "$password" -Q "IF DB_ID('irispipe_bench') IS NULL CREATE DATABASE irispipe_bench"
      wait_for "$container" 'SQL Server target database' \
        sqlserver_cmd "$container" -S localhost -U sa -P "$password" -d irispipe_bench -Q 'SELECT 1'
      local sql="SET NOCOUNT ON;"
      if [[ "$role" == "source" || "$role" == "both" ]]; then
        sql+=" IF OBJECT_ID('benchmark_src_user_roles','U') IS NOT NULL DROP TABLE benchmark_src_user_roles; IF OBJECT_ID('benchmark_src_users','U') IS NOT NULL DROP TABLE benchmark_src_users; IF OBJECT_ID('benchmark_src_roles','U') IS NOT NULL DROP TABLE benchmark_src_roles;"
        sql+=" CREATE TABLE benchmark_src_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at DATETIME2(6) NOT NULL, updated_at DATETIME2(6) NOT NULL); CREATE TABLE benchmark_src_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at DATETIME2(6) NOT NULL, updated_at DATETIME2(6) NOT NULL); CREATE TABLE benchmark_src_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at DATETIME2(6) NOT NULL, updated_at DATETIME2(6) NOT NULL, PRIMARY KEY (user_id, role_id));"
        sql+=" WITH d(n) AS (SELECT n FROM (VALUES(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) v(n)), nums AS (SELECT TOP (${ROLE_COUNT}) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS id FROM d a CROSS JOIN d b) INSERT INTO benchmark_src_roles SELECT id, CONCAT('ROLE_',id), CONCAT('Role ',id), CAST('2025-01-01T00:00:00' AS DATETIME2(6)), CAST('2026-01-01T12:00:00' AS DATETIME2(6)) FROM nums;"
        sql+=" WITH d(n) AS (SELECT n FROM (VALUES(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) v(n)), nums AS (SELECT TOP (${USER_ROWS}) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS id FROM d a CROSS JOIN d b CROSS JOIN d c CROSS JOIN d e CROSS JOIN d f CROSS JOIN d g CROSS JOIN d h CROSS JOIN d i) INSERT INTO benchmark_src_users SELECT id, CONCAT('user_',id), CONCAT('user',id,'@example.test'), CONCAT('User ',id), CASE WHEN id % 10 = 0 THEN 'SUSPENDED' WHEN id % 10 = 1 THEN 'INVITED' ELSE 'ACTIVE' END, CASE id % 3 WHEN 0 THEN 'zh-TW' WHEN 1 THEN 'en-US' ELSE 'ja-JP' END, CAST('2025-01-01T00:00:00' AS DATETIME2(6)), CAST('2026-01-01T12:00:00' AS DATETIME2(6)) FROM nums;"
        sql+=" WITH d(n) AS (SELECT n FROM (VALUES(0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) v(n)), nums AS (SELECT TOP (${USER_ROLE_ROWS}) ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS n FROM d a CROSS JOIN d b CROSS JOIN d c CROSS JOIN d e CROSS JOIN d f CROSS JOIN d g CROSS JOIN d h CROSS JOIN d i) INSERT INTO benchmark_src_user_roles SELECT ((n-1)/3)+1, ((((n-1)/3) + ((n-1)%3)*5) % ${ROLE_COUNT}) + 1, CAST('2025-02-01T00:00:00' AS DATETIME2(6)), CAST('2026-01-01T12:00:00' AS DATETIME2(6)) FROM nums;"
      fi
      if [[ "$role" == "dest" || "$role" == "both" ]]; then
        sql+=" IF OBJECT_ID('benchmark_dst_user_roles','U') IS NOT NULL DROP TABLE benchmark_dst_user_roles; IF OBJECT_ID('benchmark_dst_users','U') IS NOT NULL DROP TABLE benchmark_dst_users; IF OBJECT_ID('benchmark_dst_roles','U') IS NOT NULL DROP TABLE benchmark_dst_roles; CREATE TABLE benchmark_dst_roles (id INT PRIMARY KEY, code VARCHAR(64) NOT NULL, name VARCHAR(128) NOT NULL, created_at DATETIME2(6) NOT NULL, updated_at DATETIME2(6) NOT NULL); CREATE TABLE benchmark_dst_users (id BIGINT PRIMARY KEY, username VARCHAR(64) NOT NULL, email VARCHAR(160) NOT NULL, display_name VARCHAR(128) NOT NULL, status VARCHAR(16) NOT NULL, locale VARCHAR(16) NOT NULL, created_at DATETIME2(6) NOT NULL, updated_at DATETIME2(6) NOT NULL); CREATE TABLE benchmark_dst_user_roles (user_id BIGINT NOT NULL, role_id INT NOT NULL, created_at DATETIME2(6) NOT NULL, updated_at DATETIME2(6) NOT NULL, PRIMARY KEY (user_id, role_id));"
      fi
      sqlserver_cmd "$container" -S localhost -U sa -P "$password" -d irispipe_bench -Q "$sql"
      ;;
    oracle)
      local oracle_outer_users oracle_outer_user_roles
      oracle_outer_users=$(( (USER_ROWS + 9999) / 10000 ))
      oracle_outer_user_roles=$(( (USER_ROLE_ROWS + 9999) / 10000 ))
      docker run -d --name "$container" -p "127.0.0.1::${cport}" \
        -e ORACLE_PASSWORD=OraclePwd123 -e APP_USER=irispipe -e APP_USER_PASSWORD=IrisPipe123 \
        gvenzl/oracle-free:23-slim-faststart >/dev/null
      wait_for "$container" Oracle docker exec "$container" bash -lc "printf \"WHENEVER SQLERROR EXIT FAILURE\\nSET HEADING OFF FEEDBACK OFF PAGESIZE 0 ECHO OFF\\nSELECT 'READY' FROM dual;\\nEXIT;\\n\" | sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 | grep -q READY"
      if [[ "$role" == "source" || "$role" == "both" ]]; then
        docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<SQL
WHENEVER SQLERROR EXIT SQL.SQLCODE
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_src_user_roles PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_src_users PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_src_roles PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
CREATE TABLE benchmark_src_roles (id NUMBER(10) PRIMARY KEY, code VARCHAR2(64) NOT NULL, name VARCHAR2(128) NOT NULL, created_at TIMESTAMP(6) NOT NULL, updated_at TIMESTAMP(6) NOT NULL);
CREATE TABLE benchmark_src_users (id NUMBER(19) PRIMARY KEY, username VARCHAR2(64) NOT NULL, email VARCHAR2(160) NOT NULL, display_name VARCHAR2(128) NOT NULL, status VARCHAR2(16) NOT NULL, locale VARCHAR2(16) NOT NULL, created_at TIMESTAMP(6) NOT NULL, updated_at TIMESTAMP(6) NOT NULL);
CREATE TABLE benchmark_src_user_roles (user_id NUMBER(19) NOT NULL, role_id NUMBER(10) NOT NULL, created_at TIMESTAMP(6) NOT NULL, updated_at TIMESTAMP(6) NOT NULL, PRIMARY KEY (user_id, role_id));
INSERT INTO benchmark_src_roles SELECT LEVEL, 'ROLE_' || LEVEL, 'Role ' || LEVEL, TIMESTAMP '2025-01-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00' FROM dual CONNECT BY LEVEL <= ${ROLE_COUNT};
INSERT /*+ APPEND */ INTO benchmark_src_users
SELECT id, 'user_' || id, 'user' || id || '@example.test', 'User ' || id,
       CASE WHEN MOD(id,10)=0 THEN 'SUSPENDED' WHEN MOD(id,10)=1 THEN 'INVITED' ELSE 'ACTIVE' END,
       CASE MOD(id,3) WHEN 0 THEN 'zh-TW' WHEN 1 THEN 'en-US' ELSE 'ja-JP' END,
       TIMESTAMP '2025-01-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00'
FROM (
  SELECT 1 + a.n + 10000*b.n AS id
  FROM (SELECT LEVEL - 1 AS n FROM dual CONNECT BY LEVEL <= 10000) a
  CROSS JOIN (SELECT LEVEL - 1 AS n FROM dual CONNECT BY LEVEL <= ${oracle_outer_users}) b
) WHERE id <= ${USER_ROWS};
INSERT /*+ APPEND */ INTO benchmark_src_user_roles
SELECT FLOOR((n-1)/3)+1,
       MOD(FLOOR((n-1)/3)+1 + MOD(n-1,3)*5 - 1, ${ROLE_COUNT})+1,
       TIMESTAMP '2025-02-01 00:00:00', TIMESTAMP '2026-01-01 12:00:00'
FROM (
  SELECT 1 + a.n + 10000*b.n AS n
  FROM (SELECT LEVEL - 1 AS n FROM dual CONNECT BY LEVEL <= 10000) a
  CROSS JOIN (SELECT LEVEL - 1 AS n FROM dual CONNECT BY LEVEL <= ${oracle_outer_user_roles}) b
) WHERE n <= ${USER_ROLE_ROWS};
COMMIT;
EXIT;
SQL
      fi
      if [[ "$role" == "dest" || "$role" == "both" ]]; then
        docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<'SQL'
WHENEVER SQLERROR EXIT SQL.SQLCODE
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_dst_user_roles PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_dst_users PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
BEGIN EXECUTE IMMEDIATE 'DROP TABLE benchmark_dst_roles PURGE'; EXCEPTION WHEN OTHERS THEN IF SQLCODE != -942 THEN RAISE; END IF; END;
/
CREATE TABLE benchmark_dst_roles (id NUMBER(10) PRIMARY KEY, code VARCHAR2(64) NOT NULL, name VARCHAR2(128) NOT NULL, created_at TIMESTAMP(6) NOT NULL, updated_at TIMESTAMP(6) NOT NULL);
CREATE TABLE benchmark_dst_users (id NUMBER(19) PRIMARY KEY, username VARCHAR2(64) NOT NULL, email VARCHAR2(160) NOT NULL, display_name VARCHAR2(128) NOT NULL, status VARCHAR2(16) NOT NULL, locale VARCHAR2(16) NOT NULL, created_at TIMESTAMP(6) NOT NULL, updated_at TIMESTAMP(6) NOT NULL);
CREATE TABLE benchmark_dst_user_roles (user_id NUMBER(19) NOT NULL, role_id NUMBER(10) NOT NULL, created_at TIMESTAMP(6) NOT NULL, updated_at TIMESTAMP(6) NOT NULL, PRIMARY KEY (user_id, role_id));
EXIT;
SQL
      fi
      ;;
  esac
}

start_pair() {
  calculate_workload "$rows"
  if [[ "$source_engine" == "$dest_engine" && "$source_engine" != "h2" ]]; then
    start_engine "$source_engine" both "$rows"
    local port
    port="$(mapped_host_port "$source_engine" both)"
    emit_role_env source "$source_engine" "$port"
    emit_role_env dest "$dest_engine" "$port"
    return
  fi
  if [[ "$source_engine" != "h2" ]]; then
    start_engine "$source_engine" source "$rows"
    emit_role_env source "$source_engine" "$(mapped_host_port "$source_engine" source)"
  fi
  if [[ "$dest_engine" != "h2" ]]; then
    start_engine "$dest_engine" dest "$rows"
    emit_role_env dest "$dest_engine" "$(mapped_host_port "$dest_engine" dest)"
  fi
}

count_engine_tables() {
  local engine="$1" role="$2" prefix="$3" container
  container="$(container_name "$engine" "$role")"
  case "$engine" in
    postgres)
      docker exec "$container" psql -h 127.0.0.1 -U postgres -d irispipe_bench -Atqc "SELECT (SELECT COUNT(*) FROM benchmark_${prefix}_roles) || ',' || (SELECT COUNT(*) FROM benchmark_${prefix}_users) || ',' || (SELECT COUNT(*) FROM benchmark_${prefix}_user_roles)" | tr -d '[:space:]'
      ;;
    mysql)
      docker exec "$container" mysql -h 127.0.0.1 -uroot -pirispipe -Nse "SELECT CONCAT((SELECT COUNT(*) FROM benchmark_${prefix}_roles),',',(SELECT COUNT(*) FROM benchmark_${prefix}_users),',',(SELECT COUNT(*) FROM benchmark_${prefix}_user_roles))" irispipe_bench 2>/dev/null | tr -d '[:space:]'
      ;;
    mariadb)
      docker exec "$container" mariadb -h 127.0.0.1 -uroot -pirispipe -Nse "SELECT CONCAT((SELECT COUNT(*) FROM benchmark_${prefix}_roles),',',(SELECT COUNT(*) FROM benchmark_${prefix}_users),',',(SELECT COUNT(*) FROM benchmark_${prefix}_user_roles))" irispipe_bench 2>/dev/null | tr -d '[:space:]'
      ;;
    sqlserver)
      sqlserver_cmd "$container" -S localhost -U sa -P 'IrisPipe!12345' -d irispipe_bench -h -1 -W -Q "SET NOCOUNT ON; SELECT CONCAT((SELECT COUNT_BIG(*) FROM benchmark_${prefix}_roles),',',(SELECT COUNT_BIG(*) FROM benchmark_${prefix}_users),',',(SELECT COUNT_BIG(*) FROM benchmark_${prefix}_user_roles))" | tr -d '[:space:]'
      ;;
    oracle)
      docker exec -i "$container" sqlplus -s irispipe/IrisPipe123@//localhost:1521/FREEPDB1 <<SQL | awk 'NF {line=$0} END {gsub(/[[:space:]]/,"",line); print line}'
WHENEVER SQLERROR EXIT FAILURE
SET HEADING OFF FEEDBACK OFF PAGESIZE 0 VERIFY OFF ECHO OFF
SELECT (SELECT COUNT(*) FROM benchmark_${prefix}_roles) || ',' || (SELECT COUNT(*) FROM benchmark_${prefix}_users) || ',' || (SELECT COUNT(*) FROM benchmark_${prefix}_user_roles) FROM dual;
EXIT;
SQL
      ;;
    *) return 2 ;;
  esac
}

count_engine_dest() {
  count_engine_tables "$1" "$2" dst
}

count_engine_source() {
  count_engine_tables "$1" "$2" src
}

count_pair() {
  [[ "$dest_engine" == "h2" ]] && { echo 'H2 destination is verified inside k6' >&2; return 2; }
  local role=dest
  [[ "$source_engine" == "$dest_engine" ]] && role=both
  count_engine_dest "$dest_engine" "$role"
}


clear_role_env() {
  local role="$1" prefix
  [[ "$role" == "dest" ]] && prefix=DEST || prefix=SOURCE
  emit_env "${prefix}_JDBC_DRIVER" ""
  emit_env "${prefix}_JDBC_URL" ""
  emit_env "${prefix}_DB_USER" ""
  emit_env "${prefix}_DB_PASSWORD" ""
}

emit_shared_pair() {
  clear_role_env source
  clear_role_env dest
  if [[ "$source_engine" != "h2" ]]; then
    emit_role_env source "$source_engine" "$(mapped_host_port "$source_engine" both)"
  fi
  if [[ "$dest_engine" != "h2" ]]; then
    emit_role_env dest "$dest_engine" "$(mapped_host_port "$dest_engine" both)"
  fi
}

count_shared_source() {
  [[ "$source_engine" == "h2" ]] && { echo 'H2 source is verified inside k6' >&2; return 2; }
  count_engine_source "$source_engine" both
}

count_shared_dest() {
  [[ "$dest_engine" == "h2" ]] && { echo 'H2 destination is verified inside k6' >&2; return 2; }
  count_engine_dest "$dest_engine" both
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
  emit-shared-pair) emit_shared_pair ;;
  count-shared-source) count_shared_source ;;
  count-shared-dest) count_shared_dest ;;
  *)
    echo "Usage: $0 {start-pair|count-pair|stop-pair|emit-shared-pair|count-shared-source|count-shared-dest} SOURCE DEST [rows]" >&2
    exit 2
    ;;
esac
