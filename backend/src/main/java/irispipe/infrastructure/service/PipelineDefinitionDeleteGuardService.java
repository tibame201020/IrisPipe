package irispipe.infrastructure.service;

import org.springframework.stereotype.Service;

import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.repo.PipelineRunRepo;

@Service
public class PipelineDefinitionDeleteGuardService {
    private final PipelineRunRepo pipelineRunRepo;

    public PipelineDefinitionDeleteGuardService(PipelineRunRepo pipelineRunRepo) {
        this.pipelineRunRepo = pipelineRunRepo;
    }

    public void validateConfigDeleteAllowed(Long pipelineId) {
        if (pipelineRunRepo.countByPipelineId(pipelineId) > 0) {
            throw new ConflictException("Pipeline has run history and can not be deleted");
        }
    }
}
