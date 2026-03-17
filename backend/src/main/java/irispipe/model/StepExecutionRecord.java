package irispipe.model;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * Serializable watermark payload stored in step execution context.
 *
 * @param executionName execution name
 * @param tableName target table name
 * @param watermarkColumn watermark column name
 * @param value watermark value
 * @param startTime execution start time
 * @param endTime execution end time
 * @param updateTime watermark update time
 */
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

    /**
     * Returns the execution-context key used to store this payload.
     *
     * @return execution-context key
     */
    public static String contextKey() {
        return CONTEXT_KEY;
    }
}
