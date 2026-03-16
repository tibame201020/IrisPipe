package irispipe.infrastructure.repo;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineRun;
import irispipe.model.PipelineRunStatus;

@Repository
public interface PipelineRunRepo extends JpaRepository<PipelineRun, Long> {
    List<PipelineRun> findAllByOrderByIdAsc();

    long countByStatusIn(Collection<PipelineRunStatus> statuses);

    long countByPipelineId(Long pipelineId);
}
