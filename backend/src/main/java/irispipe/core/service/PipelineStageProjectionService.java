package irispipe.core.service;

import com.fasterxml.jackson.annotation.JsonProperty;

import irispipe.model.PipelineRunStageProjection;
import irispipe.model.PipelineRunStatus;
import irispipe.model.PipelineStageDefinition;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncPipelineDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Builds stage-first projections from normalized job payloads and runtime job rows.
 */
@Service
public class PipelineStageProjectionService {

    /**
     * Groups normalized config jobs into stage projections.
     *
     * @param syncJobs normalized job payload
     * @return stage-first config projection
     */
    public List<PipelineStageDefinition> renderConfigStages(List<SyncJobDefinition> syncJobs) {
        Map<Integer, StageBucket<SyncJobDefinition>> buckets = new LinkedHashMap<>();
        for (SyncJobDefinition syncJob : syncJobs) {
            StageBucket<SyncJobDefinition> bucket = buckets.computeIfAbsent(
                    syncJob.getStageSequenceOrder(),
                    ignored -> new StageBucket<>(syncJob.getStageName(), syncJob.getStageSequenceOrder()));
            bucket.jobs().add(syncJob);
        }

        return buckets.values().stream()
                .sorted(Comparator.comparing(StageBucket::stageSequenceOrder))
                .map(bucket -> new PipelineStageDefinition(
                        bucket.stageName(),
                        bucket.stageSequenceOrder(),
                        List.copyOf(bucket.jobs())))
                .toList();
    }

    /**
     * Groups runtime job projections into stage projections.
     *
     * @param pipelineRunJobs runtime job projection
     * @return stage-first runtime projection
     */
    public List<PipelineRunStageProjection> renderRunStages(
            List<SyncPipelineDTO.PipelineRunJobInfo> pipelineRunJobs) {
        Map<Integer, StageBucket<SyncPipelineDTO.PipelineRunJobInfo>> buckets = new LinkedHashMap<>();
        for (SyncPipelineDTO.PipelineRunJobInfo pipelineRunJob : pipelineRunJobs) {
            StageBucket<SyncPipelineDTO.PipelineRunJobInfo> bucket = buckets.computeIfAbsent(
                    pipelineRunJob.stageSequenceOrder(),
                    ignored -> new StageBucket<>(pipelineRunJob.stageName(), pipelineRunJob.stageSequenceOrder()));
            bucket.jobs().add(pipelineRunJob);
        }

        return buckets.values().stream()
                .sorted(Comparator.comparing(StageBucket::stageSequenceOrder))
                .map(bucket -> new PipelineRunStageProjection(
                        bucket.stageName(),
                        bucket.stageSequenceOrder(),
                        aggregateStageStatus(bucket.jobs()),
                        earliestStart(bucket.jobs()),
                        latestEnd(bucket.jobs()),
                        List.copyOf(bucket.jobs())))
                .toList();
    }

    private PipelineRunStatus aggregateStageStatus(List<SyncPipelineDTO.PipelineRunJobInfo> pipelineRunJobs) {
        List<PipelineRunStatus> statuses = pipelineRunJobs.stream()
                .map(SyncPipelineDTO.PipelineRunJobInfo::status)
                .toList();

        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.FAILED)) {
            return PipelineRunStatus.FAILED;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.UNKNOWN)) {
            return PipelineRunStatus.UNKNOWN;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.ABANDONED)) {
            return PipelineRunStatus.ABANDONED;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.STOPPING)) {
            return PipelineRunStatus.STOPPING;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.STOPPED)) {
            return PipelineRunStatus.STOPPED;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.STARTING)) {
            return PipelineRunStatus.STARTING;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.STARTED)) {
            return PipelineRunStatus.STARTED;
        }
        if (statuses.stream().allMatch(status -> status == PipelineRunStatus.NOT_RUN)) {
            return PipelineRunStatus.NOT_RUN;
        }
        if (statuses.stream().allMatch(status -> status == PipelineRunStatus.PENDING)) {
            return PipelineRunStatus.PENDING;
        }
        if (statuses.stream().allMatch(status -> status == PipelineRunStatus.SKIPPED)) {
            return PipelineRunStatus.SKIPPED;
        }
        if (statuses.stream().allMatch(status -> status == PipelineRunStatus.COMPLETED || status == PipelineRunStatus.SKIPPED)) {
            return PipelineRunStatus.COMPLETED;
        }
        if (statuses.stream().anyMatch(status -> status == PipelineRunStatus.PENDING)) {
            return PipelineRunStatus.PENDING;
        }
        return PipelineRunStatus.COMPLETED;
    }

    private LocalDateTime earliestStart(List<SyncPipelineDTO.PipelineRunJobInfo> pipelineRunJobs) {
        return pipelineRunJobs.stream()
                .map(SyncPipelineDTO.PipelineRunJobInfo::startTime)
                .filter(startTime -> startTime != null)
                .min(LocalDateTime::compareTo)
                .orElse(null);
    }

    private LocalDateTime latestEnd(List<SyncPipelineDTO.PipelineRunJobInfo> pipelineRunJobs) {
        return pipelineRunJobs.stream()
                .map(SyncPipelineDTO.PipelineRunJobInfo::endTime)
                .filter(endTime -> endTime != null)
                .max(LocalDateTime::compareTo)
                .orElse(null);
    }

    private record StageBucket<T>(
            @JsonProperty("stage")
            String stageName,
            Integer stageSequenceOrder,
            List<T> jobs) {

        private StageBucket(String stageName, Integer stageSequenceOrder) {
            this(stageName, stageSequenceOrder, new ArrayList<>());
        }
    }
}
