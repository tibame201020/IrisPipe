package irispipe.infrastructure.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineRunExecutionJob;

@Repository
public interface PipelineRunExecutionJobRepo extends JpaRepository<PipelineRunExecutionJob, Long> {
    List<PipelineRunExecutionJob> findByPipelineRunExecutionId(Long pipelineRunExecutionId);

    List<PipelineRunExecutionJob> findByPipelineRunExecutionIdIn(List<Long> pipelineRunExecutionIds);
}
