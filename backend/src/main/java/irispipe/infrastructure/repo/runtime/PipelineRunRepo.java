package irispipe.infrastructure.repo.runtime;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.runtime.PipelineRun;
import irispipe.model.PipelineRunStatus;

/**
 * JPA repository for logical pipeline run rows and run history queries.
 */
@Repository
public interface PipelineRunRepo extends JpaRepository<PipelineRun, Long> {
    List<PipelineRun> findAllByOrderByIdAsc();

    Optional<PipelineRun> findByIdAndWorkspaceId(Long id, Long workspaceId);

    List<PipelineRun> findAllByWorkspaceIdOrderByIdDesc(Long workspaceId, Pageable pageable);

    List<PipelineRun> findByWorkspaceIdAndIdLessThanOrderByIdDesc(Long workspaceId, Long beforeRunId, Pageable pageable);

    List<PipelineRun> findByWorkspaceIdAndPipelineIdOrderByIdDesc(Long workspaceId, Long pipelineId, Pageable pageable);

    List<PipelineRun> findByWorkspaceIdAndPipelineIdAndIdLessThanOrderByIdDesc(
            Long workspaceId,
            Long pipelineId,
            Long beforeRunId,
            Pageable pageable);

    long countByStatusIn(Collection<PipelineRunStatus> statuses);

    long countByPipelineId(Long pipelineId);

    @Query("select distinct pipelineRun.pipelineId from PipelineRun pipelineRun where pipelineRun.pipelineId in :pipelineIds")
    List<Long> findPipelineIdsWithRunHistory(@Param("pipelineIds") Collection<Long> pipelineIds);
}
