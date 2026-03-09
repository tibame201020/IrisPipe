package custom.tibame201020.IrisPipe.service;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import custom.tibame201020.IrisPipe.data.BatchJobExecutionRecord;
import custom.tibame201020.IrisPipe.data.SimpleEnum.SystemProvideVariable;
import org.springframework.dao.EmptyResultDataAccessException;

@Service
public class ExecutionRecordService {

    public Object fetchValue(NamedParameterJdbcTemplate jdbcTemplate, String recordTable, String executionName,
            String tableName, String watermarkColumn, SystemProvideVariable systemProvideVariable) {
        String sql = this.generateQuerySql(recordTable);
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("executionName", executionName)
                .addValue("tableName", tableName)
                .addValue("watermarkColumn", watermarkColumn);

        RowMapper<BatchJobExecutionRecord> rowMapper = (rs, rowNum) -> {
            BatchJobExecutionRecord record = new BatchJobExecutionRecord();
            record.setExecutionName(rs.getString("execution_name"));
            record.setTableName(rs.getString("table_name"));
            record.setWatermarkColumn(rs.getString("watermark_column"));
            record.setLastValue(rs.getString("last_value"));
            record.setLastStartTime(rs.getTimestamp("last_start_time"));
            record.setLastEndTime(rs.getTimestamp("last_end_time"));
            record.setLastUpdateTime(rs.getTimestamp("last_update_time"));
            return record;
        };

        try {
            BatchJobExecutionRecord record = jdbcTemplate.queryForObject(sql, params, rowMapper);
            return Optional.ofNullable(record)
                    .map(r -> switch (systemProvideVariable) {
                        case _LAST_WATERMARK -> r.getLastValue();
                        case _LAST_START -> r.getLastStartTime();
                        case _LAST_END -> r.getLastEndTime();
                        case _LAST_UPDATE -> r.getLastUpdateTime();
                    }).orElseGet(() -> null);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public void saveWatermark(NamedParameterJdbcTemplate jdbcTemplate, String recordTable, String executionName,
            String tableName, String watermarkColumn, Object value, LocalDateTime startTime, LocalDateTime endTime,
            LocalDateTime updateTime) {
        Object last = fetchValue(jdbcTemplate, recordTable, executionName, tableName, watermarkColumn,
                SystemProvideVariable._LAST_UPDATE);
        String sql = Objects.nonNull(last) ? generateUpdateSql(recordTable) : generateInsertSql(recordTable);

        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("executionName", executionName)
                .addValue("tableName", tableName)
                .addValue("watermarkColumn", watermarkColumn)
                .addValue("lastValue", value)
                .addValue("lastStartTime", startTime)
                .addValue("lastEndTime", endTime)
                .addValue("lastUpdateTime", updateTime);

        jdbcTemplate.update(sql, params);
    }

    private String generateQuerySql(String recordTable) {
        return String.format(
                "SELECT * FROM %s WHERE execution_name = :executionName AND table_name = :tableName AND watermark_column = :watermarkColumn",
                recordTable);
    }

    private String generateUpdateSql(String recordTable) {
        String updateTemeplate = """
                UPDATE %s SET
                last_value = :lastValue
                last_start_time = :lastStartTime
                last_end_time = :lastEndTime
                last_update_time = :lastUpdateTime
                WHERE execution_name = :executionName
                AND table_name = :tableName
                AND watermark_column = :watermarkColumn
                """;
        return String.format(updateTemeplate, recordTable);
    }

    private String generateInsertSql(String recordTable) {
        String insertTemeplate = """
                INSERT INTO %s (execution_name, table_name, watermark_column, last_value, last_start_time, last_end_time, last_update_time)
                VALUES (:executionName, :tableName, :watermarkColumn, :lastValue, :lastStartTime, :lastEndTime, :lastUpdateTime)
                """;
        return String.format(insertTemeplate, recordTable);
    }

}
