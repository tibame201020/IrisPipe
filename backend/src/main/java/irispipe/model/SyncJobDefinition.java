package irispipe.model;

import io.micrometer.common.util.StringUtils;
import irispipe.infrastructure.error.exception.ConfigValidationException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SyncJobDefinition {
    String jobName;
    List<ExecutionStep> executions;
    JobSetting setting;
    DatabaseConfig database;

    public void validate() {
        if (StringUtils.isBlank(jobName)) {
            throw new ConfigValidationException("", "", "jobName can not be blank");
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
