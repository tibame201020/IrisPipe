package irispipe.infrastructure.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineRunExecution;

@Repository
public interface PipelineRunExecutionRepo extends JpaRepository<PipelineRunExecution, Long> {
    List<PipelineRunExecution> findByPipelineRunIdOrderByExecutionNoAsc(Long pipelineRunId);

    Optional<PipelineRunExecution> findTopByPipelineRunIdOrderByExecutionNoDesc(Long pipelineRunId);
}
