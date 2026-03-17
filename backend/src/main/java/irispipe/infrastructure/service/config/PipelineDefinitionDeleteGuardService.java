package irispipe.infrastructure.service.config;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.repo.runtime.PipelineRunRepo;

/**
 * Prevents config deletion when runtime lineage already exists.
 */
@Service
public class PipelineDefinitionDeleteGuardService {
    private final PipelineRunRepo pipelineRunRepo;

    /**
     * Creates the delete guard service.
     *
     * @param pipelineRunRepo pipeline run repository
     */
    public PipelineDefinitionDeleteGuardService(PipelineRunRepo pipelineRunRepo) {
        this.pipelineRunRepo = pipelineRunRepo;
    }

    /**
     * Verifies that a pipeline config can be deleted without orphaning runtime
     * lineage.
     *
     * @param pipelineId target pipeline id
     */
    public void validateConfigDeleteAllowed(Long pipelineId) {
        if (pipelineRunRepo.countByPipelineId(pipelineId) > 0) {
            throw new ConflictException("Pipeline has run history and can not be deleted");
        }
    }
}
