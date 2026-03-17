package irispipe.infrastructure.service.config;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.repo.config.PipelineDefinitionRepo;
import irispipe.model.SyncJobDefinition;

/**
 * Coordinates pipeline definition deletion and child-row persistence.
 */
@Service
public class PipelineDefinitionPersistenceService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineDefinitionDeleteGuardService pipelineDefinitionDeleteGuardService;
    private final PipelineDefinitionAggregatePersistenceService pipelineDefinitionAggregatePersistenceService;

    /**
     * Creates the pipeline definition persistence facade.
     *
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineDefinitionDeleteGuardService config delete guard
     * @param pipelineDefinitionAggregatePersistenceService child aggregate persistence
     * helper
     */
    public PipelineDefinitionPersistenceService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineDefinitionDeleteGuardService pipelineDefinitionDeleteGuardService,
            PipelineDefinitionAggregatePersistenceService pipelineDefinitionAggregatePersistenceService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineDefinitionDeleteGuardService = pipelineDefinitionDeleteGuardService;
        this.pipelineDefinitionAggregatePersistenceService = pipelineDefinitionAggregatePersistenceService;
    }

    /**
     * Replaces all child rows for one pipeline definition.
     *
     * @param pipelineId target pipeline id
     * @param syncJobs replacement job payload
     */
    @Transactional
    public void replacePipelineJobs(Long pipelineId, List<SyncJobDefinition> syncJobs) {
        pipelineDefinitionAggregatePersistenceService.replacePipelineJobs(pipelineId, syncJobs);
    }

    /**
     * Deletes one pipeline definition after applying delete guards and child-row
     * cleanup.
     *
     * @param pipelineId target pipeline id
     */
    @Transactional
    public void deletePipelineDefinition(Long pipelineId) {
        pipelineDefinitionDeleteGuardService.validateConfigDeleteAllowed(pipelineId);
        pipelineDefinitionAggregatePersistenceService.deletePipelineChildren(pipelineId);
        pipelineDefinitionRepo.deleteById(pipelineId);
    }

    /**
     * Verifies that a pipeline config can be deleted.
     *
     * @param pipelineId target pipeline id
     */
    public void validateConfigDeleteAllowed(Long pipelineId) {
        pipelineDefinitionDeleteGuardService.validateConfigDeleteAllowed(pipelineId);
    }

    /**
     * Persists child rows for one pipeline definition.
     *
     * @param pipelineId target pipeline id
     * @param syncJobs normalized job payload
     */
    public void persistJobs(Long pipelineId, List<SyncJobDefinition> syncJobs) {
        pipelineDefinitionAggregatePersistenceService.persistJobs(pipelineId, syncJobs);
    }

    /**
     * Deletes child rows for one pipeline definition.
     *
     * @param pipelineId target pipeline id
     */
    public void deletePipelineChildren(Long pipelineId) {
        pipelineDefinitionAggregatePersistenceService.deletePipelineChildren(pipelineId);
    }
}
