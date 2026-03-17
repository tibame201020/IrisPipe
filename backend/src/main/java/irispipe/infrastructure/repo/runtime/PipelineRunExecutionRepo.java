package irispipe.infrastructure.repo.runtime;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.runtime.PipelineRunExecution;
import irispipe.model.PipelineRunStatus;

/**
 * JPA repository for pipeline run execution-attempt rows.
 */
@Repository
public interface PipelineRunExecutionRepo extends JpaRepository<PipelineRunExecution, Long> {
    List<PipelineRunExecution> findByPipelineRunIdOrderByExecutionNoAsc(Long pipelineRunId);

    Optional<PipelineRunExecution> findTopByPipelineRunIdOrderByExecutionNoDesc(Long pipelineRunId);

    long countByStatusIn(Collection<PipelineRunStatus> statuses);
}
