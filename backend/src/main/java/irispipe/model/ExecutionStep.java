package irispipe.model;

import io.micrometer.common.util.StringUtils;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterUtils;
import org.springframework.jdbc.core.namedparam.ParsedSql;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * One execution step inside a logical sync job.
 *
 * @param type execution type
 * @param name execution name
 * @param sql SQL statement
 * @param destTable destination table name
 * @param parameters execution parameters
 * @param watermarkColumn watermark column name
 * @param summaryInfo runtime summary info
 * @param executionContext runtime execution context
 */
public record ExecutionStep(
        ExecutionType type,
        String name,
        String sql,
        String destTable,
        List<JobParameter> parameters,
        String watermarkColumn,
        SummaryInfo summaryInfo,
        Map<String, Object> executionContext) {
    /**
     * Returns execution parameters, defaulting to an empty list when the payload
     * is null.
     *
     * @return execution parameters
     */
    public List<JobParameter> parameters() {
        if (null == parameters) {
            return new ArrayList<>();
        }
        return parameters;
    }

    /**
     * Validates this execution step against its job setting and database config.
     *
     * @param setting job setting
     * @param database database config
     */
    public void validate(JobSetting setting, DatabaseConfig database) {
        if (StringUtils.isBlank(sql)) {
            throw new IllegalArgumentException("sql can not be blank");
        }

        ParsedSql parsedSql = NamedParameterUtils.parseSqlStatement(sql);
        List<SqlParameter> sqlParameters = NamedParameterUtils.buildSqlParameterList(parsedSql,
                new MapSqlParameterSource());
        List<String> parameterParams = parameters().stream().map(JobParameter::param).toList();
        sqlParameters.forEach(sqlParameter -> {
            if (!parameterParams.contains(sqlParameter.getName())) {
                throw new IllegalArgumentException("lost parameter config: " + sqlParameter.getName());
            }
        });

        if (null == setting.atomicLevel()) {
            throw new IllegalArgumentException("atomicLevel must config, either JOB or CHUNK");
        }

        type.validate(setting, database, this);
    }
}
