package irispipe.infrastructure.repo.config;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.config.PipelineExecutionParameter;

/**
 * JPA repository for persisted execution parameter rows.
 */
@Repository
public interface PipelineExecutionParameterRepo extends JpaRepository<PipelineExecutionParameter, Long> {

    List<PipelineExecutionParameter> findByExecutionIdInOrderByExecutionIdAscSequenceOrderAsc(List<Long> executionIds);
}
