package irispipe.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.micrometer.common.util.StringUtils;

/**
 * Stage-first pipeline config domain projection.
 */
public record PipelineStageDefinition(
        @JsonProperty("stage")
        String stageName,
        Integer stageSequenceOrder,
        List<SyncJobDefinition> jobs) {

    /**
     * Validates the grouped stage payload and its jobs.
     */
    public void validate() {
        if (StringUtils.isBlank(stageName)) {
            throw new IllegalArgumentException("stageName can not be blank");
        }
        if (stageSequenceOrder == null || stageSequenceOrder < 0) {
            throw new IllegalArgumentException("stageSequenceOrder must be >= 0");
        }
        if (jobs == null || jobs.isEmpty()) {
            throw new IllegalArgumentException("stage jobs can not be empty");
        }

        jobs.forEach(syncJob -> {
            if (!stageName.equals(syncJob.getStageName())) {
                throw new IllegalArgumentException("job stageName must match grouped stage: " + syncJob.getJobName());
            }
            if (!stageSequenceOrder.equals(syncJob.getStageSequenceOrder())) {
                throw new IllegalArgumentException(
                        "job stageSequenceOrder must match grouped stage: " + syncJob.getJobName());
            }
            syncJob.validate();
        });
    }
}
