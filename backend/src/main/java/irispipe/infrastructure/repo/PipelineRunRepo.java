package irispipe.infrastructure.repo;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineRun;
import irispipe.model.PipelineRunStatus;

@Repository
public interface PipelineRunRepo extends JpaRepository<PipelineRun, Long> {
    List<PipelineRun> findAllByOrderByIdAsc();

    List<PipelineRun> findAllByOrderByIdDesc(Pageable pageable);

    List<PipelineRun> findByIdLessThanOrderByIdDesc(Long beforeRunId, Pageable pageable);

    List<PipelineRun> findByPipelineIdOrderByIdDesc(Long pipelineId, Pageable pageable);

    List<PipelineRun> findByPipelineIdAndIdLessThanOrderByIdDesc(Long pipelineId, Long beforeRunId, Pageable pageable);

    long countByStatusIn(Collection<PipelineRunStatus> statuses);

    long countByPipelineId(Long pipelineId);

    @Query("select distinct pipelineRun.pipelineId from PipelineRun pipelineRun where pipelineRun.pipelineId in :pipelineIds")
    List<Long> findPipelineIdsWithRunHistory(@Param("pipelineIds") Collection<Long> pipelineIds);
}
