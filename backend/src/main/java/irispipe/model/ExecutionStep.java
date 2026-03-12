package irispipe.model;

import io.micrometer.common.util.StringUtils;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterUtils;
import org.springframework.jdbc.core.namedparam.ParsedSql;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public record ExecutionStep(
        ExecutionType type,
        String name,
        String sql,
        String destTable,
        List<JobParameter> parameters,
        String watermarkColumn,
        SummaryInfo summaryInfo,
        Map<String, Object> executionContext) {
    public List<JobParameter> parameters() {
        if (null == parameters) {
            return new ArrayList<>();
        }
        return parameters;
    }

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
