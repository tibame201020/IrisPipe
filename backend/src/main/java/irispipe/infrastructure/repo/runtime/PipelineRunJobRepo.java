package irispipe.infrastructure.repo.runtime;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.runtime.PipelineRunJob;

/**
 * JPA repository for logical pipeline run job rows.
 */
@Repository
public interface PipelineRunJobRepo extends JpaRepository<PipelineRunJob, Long> {
    List<PipelineRunJob> findByPipelineRunIdOrderByStageSequenceOrderAscJobSequenceOrderAsc(Long pipelineRunId);
}
