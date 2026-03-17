package irispipe.model;

import io.micrometer.common.util.StringUtils;

/**
 * Supported execution step types in a sync job definition.
 */
public enum ExecutionType {
    INSERT {
        @Override
        public void validate(JobSetting setting, DatabaseConfig database, ExecutionStep execution) {
            if (StringUtils.isBlank(execution.destTable())) {
                throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
            }
            if (null == setting.fetchSize() || 0 == setting.fetchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting fetchSize must config, and not allow zero");
            }
            if (null == setting.batchSize() || 0 == setting.batchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting batchSize must config, and not allow zero");
            }
            if (null == database.source()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.source().validate();
            if (null == database.dest()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.dest().validate();
        }
    },
    UPDATE {
        @Override
        public void validate(JobSetting setting, DatabaseConfig database, ExecutionStep execution) {
            if (StringUtils.isBlank(execution.destTable())) {
                throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
            }
            if (null == setting.fetchSize() || 0 == setting.fetchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting fetchSize must config, and not allow zero");
            }
            if (null == setting.batchSize() || 0 == setting.batchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting batchSize must config, and not allow zero");
            }
            if (null == database.source()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.source().validate();
            if (null == database.dest()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.dest().validate();
        }
    },
    UPSERT {
        @Override
        public void validate(JobSetting setting, DatabaseConfig database, ExecutionStep execution) {
            if (StringUtils.isBlank(execution.destTable())) {
                throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
            }
            if (null == setting.fetchSize() || 0 == setting.fetchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting fetchSize must config, and not allow zero");
            }
            if (null == setting.batchSize() || 0 == setting.batchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting batchSize must config, and not allow zero");
            }
            if (null == database.source()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.source().validate();
            if (null == database.dest()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.dest().validate();
        }
    },
    DELETE {
        @Override
        public void validate(JobSetting setting, DatabaseConfig database, ExecutionStep execution) {
            if (StringUtils.isBlank(execution.destTable())) {
                throw new IllegalArgumentException(exceptionPrefix() + " must config destTable");
            }
            if (null == setting.batchSize() || 0 == setting.batchSize()) {
                throw new IllegalArgumentException(
                        exceptionPrefix() + " setting batchSize must config, and not allow zero");
            }
            if (null == database.dest()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.dest().validate();
        }
    },
    EXECUTE {
        @Override
        public void validate(JobSetting setting, DatabaseConfig database, ExecutionStep execution) {
            if (null == database.dest()) {
                throw new IllegalArgumentException(exceptionPrefix() + "database source must config");
            }
            database.dest().validate();
        }
    };

    public abstract void validate(JobSetting setting, DatabaseConfig database, ExecutionStep execution);

    /**
     * Returns the common validation error prefix for this execution type.
     *
     * @return validation error prefix
     */
    public final String exceptionPrefix() {
        return "with " + this.name() + " execution";
    }
}
