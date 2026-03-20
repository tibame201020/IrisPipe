package irispipe.model;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import irispipe.model.dto.SyncPipelineDTO;

/**
 * Stage-first runtime projection for one execution attempt.
 */
public record PipelineRunStageProjection(
        @JsonProperty("stage")
        String stageName,
        Integer stageSequenceOrder,
        PipelineRunStatus status,
        LocalDateTime startTime,
        LocalDateTime endTime,
        List<SyncPipelineDTO.PipelineRunJobInfo> jobs) {
}
