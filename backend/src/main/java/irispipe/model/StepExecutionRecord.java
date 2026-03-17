package irispipe.model;

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
    private static final String CONTEXT_KEY = "StepExecutionRecordForWatermark";

    public static String contextKey() {
        return CONTEXT_KEY;
    }
}
