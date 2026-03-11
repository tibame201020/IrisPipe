package custom.tibame201020.IrisPipe.data;

import io.micrometer.common.util.StringUtils;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterUtils;
import org.springframework.jdbc.core.namedparam.ParsedSql;

import custom.tibame201020.IrisPipe.data.SimpleEnum.AtomicLevel;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface SyncJobProp {

    enum ExecutionType {
        INSERT {
            @Override
            public void validate(Setting setting, Database database, Execution execution) {
                if (StringUtils.isBlank(execution.destTable)) {
                    throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
                }
                if (null == setting.fetchSize || 0 == setting.fetchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting fetchSize must config, and not allow zero");
                }
                if (null == setting.batchSize || 0 == setting.batchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting batchSize must config, and not allow zero");
                }
                if (null == database.source) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.source.validate();
                if (null == database.dest) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.dest.validate();
            }
        },
        UPDATE {
            @Override
            public void validate(Setting setting, Database database, Execution execution) {
                if (StringUtils.isBlank(execution.destTable)) {
                    throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
                }
                if (null == setting.fetchSize || 0 == setting.fetchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting fetchSize must config, and not allow zero");
                }
                if (null == setting.batchSize || 0 == setting.batchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting batchSize must config, and not allow zero");
                }
                if (null == database.source) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.source.validate();
                if (null == database.dest) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.dest.validate();
            }
        },
        UPSERT {
            @Override
            public void validate(Setting setting, Database database, Execution execution) {
                if (StringUtils.isBlank(execution.destTable)) {
                    throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
                }
                if (null == setting.fetchSize || 0 == setting.fetchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting fetchSize must config, and not allow zero");
                }
                if (null == setting.batchSize || 0 == setting.batchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting batchSize must config, and not allow zero");
                }
                if (null == database.source) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.source.validate();
                if (null == database.dest) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.dest.validate();
            }
        },
        DELETE {
            @Override
            public void validate(Setting setting, Database database, Execution execution) {
                if (StringUtils.isBlank(execution.destTable)) {
                    throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
                }
                if (null == setting.batchSize || 0 == setting.batchSize) {
                    throw new IllegalArgumentException(
                            exceptionPrefix() + " setting batchSize must config, and not allow zero");
                }
                if (null == database.dest) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.dest.validate();
            }
        },
        EXECUTE {
            @Override
            public void validate(Setting setting, Database database, Execution execution) {
                if (null == database.dest) {
                    throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
                }
                database.dest.validate();
            }
        };

        public abstract void validate(Setting setting, Database database, Execution execution);

        public final String exceptionPrefix() {
            return "with " + this.name() + " execution";
        }
    }

    enum SupportType {
        general {
            @Override
            public Object renderClass(Object val) {
                return val;
            }
        },

        timestamp {
            @Override
            public Object renderClass(Object val) {
                return Timestamp.valueOf(val.toString());
            }
        };

        public abstract Object renderClass(Object val);
    }

    record Setting(
            Integer fetchSize,
            Integer batchSize,
            Integer deleteThreshold,
            AtomicLevel atomicLevel) {
    }

    record Database(
            ConnectionInfo source,
            ConnectionInfo dest) {
    }

    record ConnectionInfo(
            String driver,
            String url,
            String username,
            String password) {
        public void validate() {
            if (StringUtils.isBlank(driver)) {
                throw new IllegalArgumentException("driver can not be blank");
            }
            if (StringUtils.isBlank(url)) {
                throw new IllegalArgumentException("url can not be blank");
            }
            if (StringUtils.isBlank(username)) {
                throw new IllegalArgumentException("username can not be blank");
            }
            if (StringUtils.isBlank(password)) {
                throw new IllegalArgumentException("password can not be blank");
            }
        }
    }

    record Parameter(
            String param,
            Object value,
            SupportType type) {
        public Object getRenderedValue() {
            if (null == type) {
                return SupportType.general.renderClass(value);
            }
            return type.renderClass(value);
        }
    }

    record Execution(
            ExecutionType type,
            String name,
            String sql,
            String destTable,
            List<Parameter> parameters,
            String watermarkColumn,
            SummaryInfo summaryInfo,
            Map<String, Object> executionContext) {
        public List<Parameter> parameters() {
            if (null == parameters) {
                return new ArrayList<>();
            }
            return parameters;
        }

        public void validate(Setting setting, Database database) {
            if (StringUtils.isBlank(sql)) {
                throw new IllegalArgumentException("sql can not be blank");
            }

            ParsedSql parsedSql = NamedParameterUtils.parseSqlStatement(sql);
            List<SqlParameter> sqlParameters = NamedParameterUtils.buildSqlParameterList(parsedSql,
                    new MapSqlParameterSource());
            List<String> parameterParams = parameters().stream().map(Parameter::param).toList();
            sqlParameters.forEach(sqlParameter -> {
                if (!parameterParams.contains(sqlParameter.getName())) {
                    throw new IllegalArgumentException("lost parameter config: " + sqlParameter.getName());
                }
            });

            if (null == setting.atomicLevel) {
                throw new IllegalArgumentException("atomicLevel must config, either JOB or CHUNK");
            }

            type.validate(setting, database, this);
        }
    }
}
