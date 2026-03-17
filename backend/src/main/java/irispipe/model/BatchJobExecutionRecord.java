package irispipe.model;

import java.sql.Timestamp;

import lombok.Data;

/**
 * Value object representing the persisted watermark snapshot for one execution.
 */
@Data
public class BatchJobExecutionRecord {
    private String executionName;
    private String tableName;
    private String watermarkColumn;
    private String lastValue;
    private Timestamp lastStartTime;
    private Timestamp lastEndTime;
    private Timestamp lastUpdateTime;
}
