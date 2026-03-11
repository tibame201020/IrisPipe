package custom.tibame201020.IrisPipe.data;

import java.io.Serializable;
import java.time.LocalDateTime;

public record StepExecutionRecord(
    String executionName,
    String tableName,
    String watermarkColumn,
    Object value,
    LocalDateTime startTime,
    LocalDateTime endTime,
    LocalDateTime updateTime
) implements Serializable {
    public static String contextKey() {
        return "StepExecutionRecordForWatermark";
    }
}
