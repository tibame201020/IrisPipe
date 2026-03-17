package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.runtime.WatermarkRecord;
import irispipe.infrastructure.repo.runtime.WatermarkRecordRepo;
import irispipe.model.SystemProvidedVariable;

/**
 * Reads and persists execution watermark state.
 */
@Service
public class ExecutionRecordService {

    private final WatermarkRecordRepo watermarkRecordRepo;

    /**
     * Creates the execution record service.
     *
     * @param watermarkRecordRepo watermark repository
     */
    public ExecutionRecordService(WatermarkRecordRepo watermarkRecordRepo) {
        this.watermarkRecordRepo = watermarkRecordRepo;
    }

    /**
     * Loads one persisted system-provided execution value.
     *
     * @param executionName execution name
     * @param tableName target table name
     * @param watermarkColumn watermark column name
     * @param systemProvidedVariable requested system variable
     * @return persisted watermark value, or {@code null} when none exists
     */
    public Object fetchValue(String executionName, String tableName, String watermarkColumn,
            SystemProvidedVariable systemProvidedVariable) {
        WatermarkRecord record = watermarkRecordRepo
                .findByExecutionNameAndTableNameAndWatermarkColumn(executionName, tableName, watermarkColumn);
        return Optional.ofNullable(record).map(r -> switch (systemProvidedVariable) {
            case _LAST_WATERMARK -> r.getLastValue();
            case _LAST_START -> r.getLastStartTime();
            case _LAST_END -> r.getLastEndTime();
            case _LAST_UPDATE -> r.getLastUpdateTime();
        }).orElse(null);
    }

    /**
     * Persists the latest watermark and execution timestamps for one execution.
     *
     * @param executionName execution name
     * @param tableName target table name
     * @param watermarkColumn watermark column name
     * @param value latest watermark value
     * @param startTime last execution start time
     * @param endTime last execution end time
     * @param updateTime last update time
     */
    public void saveWatermark(String executionName, String tableName, String watermarkColumn, Object value,
            LocalDateTime startTime, LocalDateTime endTime, LocalDateTime updateTime) {
        WatermarkRecord record = watermarkRecordRepo
                .findByExecutionNameAndTableNameAndWatermarkColumn(executionName, tableName, watermarkColumn);
        if (record == null) {
            record = new WatermarkRecord();
            record.setExecutionName(executionName);
            record.setTableName(tableName);
            record.setWatermarkColumn(watermarkColumn);
        }

        record.setLastValue(value == null ? null : value.toString());
        record.setLastStartTime(startTime);
        record.setLastEndTime(endTime);
        record.setLastUpdateTime(updateTime);

        watermarkRecordRepo.save(record);
    }
}
