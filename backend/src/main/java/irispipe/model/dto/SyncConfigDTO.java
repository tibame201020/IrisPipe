package irispipe.model.dto;

import irispipe.model.SyncJobDefinition;

import java.util.List;

public interface SyncConfigDTO {

    record ConfigPipelineSummary(Long id, String path, String fileName) {
    }

    record ConfigPipelineInfo(Long id, String path, String fileName, List<SyncJobDefinition> jobs) {
    }
}
