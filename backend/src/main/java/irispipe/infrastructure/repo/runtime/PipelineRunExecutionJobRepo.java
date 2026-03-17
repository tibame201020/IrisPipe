package irispipe.infrastructure.repo.runtime;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.runtime.PipelineRunExecutionJob;

/**
 * JPA repository for execution-scoped pipeline run job rows.
 */
@Repository
public interface PipelineRunExecutionJobRepo extends JpaRepository<PipelineRunExecutionJob, Long> {
    List<PipelineRunExecutionJob> findByPipelineRunExecutionId(Long pipelineRunExecutionId);

    List<PipelineRunExecutionJob> findByPipelineRunExecutionIdIn(List<Long> pipelineRunExecutionIds);
}
