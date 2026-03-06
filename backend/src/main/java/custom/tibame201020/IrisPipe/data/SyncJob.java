package custom.tibame201020.IrisPipe.data;

import custom.tibame201020.IrisPipe.error.exception.ConfigValidationException;
import io.micrometer.common.util.StringUtils;
import lombok.Data;

import java.util.List;

@Data
public class SyncJob {
    String jobName;
    List<SyncJobProp.Execution> executions;
    SyncJobProp.Setting setting;
    SyncJobProp.Database database;

    public void validate() {
        if (StringUtils.isBlank(jobName)) {
            throw new ConfigValidationException("", "", "jobName can not be blank");
        }

        executions.forEach(execution -> {
            try {
                execution.validate(setting, database);
            } catch (Exception e) {
                String name = execution.name();
                String executionName = StringUtils.isBlank(name) ? "on type " + execution.type() : name;
            }
        });
    }
}
