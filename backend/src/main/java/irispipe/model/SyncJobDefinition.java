package irispipe.model;

import io.micrometer.common.util.StringUtils;
import irispipe.infrastructure.error.exception.ConfigValidationException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * User-facing job definition that groups execution steps, settings, and
 * database config.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SyncJobDefinition {
    String stageName;
    Integer stageSequenceOrder;
    String jobName;
    List<ExecutionStep> executions;
    JobSetting setting;
    DatabaseConfig database;

    public SyncJobDefinition(String jobName, List<ExecutionStep> executions, JobSetting setting, DatabaseConfig database) {
        this(null, null, jobName, executions, setting, database);
    }

    /**
     * Validates this job definition and wraps nested execution errors with job and
     * execution context.
     */
    public void validate() {
        if (StringUtils.isBlank(jobName)) {
            throw new ConfigValidationException("", "", "jobName can not be blank");
        }

        if (StringUtils.isBlank(stageName)) {
            throw new ConfigValidationException(jobName, "", "stageName can not be blank");
        }

        if (stageSequenceOrder == null || stageSequenceOrder < 0) {
            throw new ConfigValidationException(jobName, "", "stageSequenceOrder must be >= 0");
        }

        if (executions == null || executions.isEmpty()) {
            throw new ConfigValidationException(jobName, "", "executions list can not be null or empty");
        }

        if (setting.atomicLevel() == null) {
            throw new ConfigValidationException(jobName, "", "atomicLevel should be JOB|CHUNK.");
        }

        executions.forEach(execution -> {
            try {
                execution.validate(setting, database);
            } catch (Exception e) {
                String name = execution.name();
                String executionName = StringUtils.isBlank(name) ? "on type " + execution.type() : name;
                throw new ConfigValidationException(jobName, executionName, e.getMessage());
            }
        });
    }
}
