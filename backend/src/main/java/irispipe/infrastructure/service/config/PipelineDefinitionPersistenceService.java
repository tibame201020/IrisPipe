package irispipe.infrastructure.service.config;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.repo.PipelineDefinitionRepo;
import irispipe.model.SyncJobDefinition;

@Service
public class PipelineDefinitionPersistenceService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineDefinitionDeleteGuardService pipelineDefinitionDeleteGuardService;
    private final PipelineDefinitionAggregatePersistenceService pipelineDefinitionAggregatePersistenceService;

    public PipelineDefinitionPersistenceService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineDefinitionDeleteGuardService pipelineDefinitionDeleteGuardService,
            PipelineDefinitionAggregatePersistenceService pipelineDefinitionAggregatePersistenceService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineDefinitionDeleteGuardService = pipelineDefinitionDeleteGuardService;
        this.pipelineDefinitionAggregatePersistenceService = pipelineDefinitionAggregatePersistenceService;
    }

    @Transactional
    public void replacePipelineJobs(Long pipelineId, List<SyncJobDefinition> syncJobs) {
        pipelineDefinitionAggregatePersistenceService.replacePipelineJobs(pipelineId, syncJobs);
    }

    @Transactional
    public void deletePipelineDefinition(Long pipelineId) {
        pipelineDefinitionDeleteGuardService.validateConfigDeleteAllowed(pipelineId);
        pipelineDefinitionAggregatePersistenceService.deletePipelineChildren(pipelineId);
        pipelineDefinitionRepo.deleteById(pipelineId);
    }

    public void validateConfigDeleteAllowed(Long pipelineId) {
        pipelineDefinitionDeleteGuardService.validateConfigDeleteAllowed(pipelineId);
    }

    public void persistJobs(Long pipelineId, List<SyncJobDefinition> syncJobs) {
        pipelineDefinitionAggregatePersistenceService.persistJobs(pipelineId, syncJobs);
    }

    public void deletePipelineChildren(Long pipelineId) {
        pipelineDefinitionAggregatePersistenceService.deletePipelineChildren(pipelineId);
    }
}
