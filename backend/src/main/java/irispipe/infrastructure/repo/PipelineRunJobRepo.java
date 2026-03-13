package irispipe.infrastructure.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineRunJob;

@Repository
public interface PipelineRunJobRepo extends JpaRepository<PipelineRunJob, Long> {
    List<PipelineRunJob> findByPipelineRunIdOrderByJobSequenceOrder(Long pipelineRunId);
}
