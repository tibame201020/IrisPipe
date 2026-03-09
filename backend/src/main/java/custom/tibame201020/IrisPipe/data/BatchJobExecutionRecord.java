package custom.tibame201020.IrisPipe.data;

import java.sql.Timestamp;

import lombok.Data;

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
