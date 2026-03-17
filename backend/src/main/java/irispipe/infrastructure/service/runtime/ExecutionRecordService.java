package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.entity.runtime.WatermarkRecord;
import irispipe.infrastructure.repo.runtime.WatermarkRecordRepo;
import irispipe.model.SystemProvidedVariable;

@Service
public class ExecutionRecordService {

    private final WatermarkRecordRepo watermarkRecordRepo;

    public ExecutionRecordService(WatermarkRecordRepo watermarkRecordRepo) {
        this.watermarkRecordRepo = watermarkRecordRepo;
    }

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
