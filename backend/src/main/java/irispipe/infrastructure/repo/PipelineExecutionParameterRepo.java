package irispipe.infrastructure.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.PipelineExecutionParameter;

@Repository
public interface PipelineExecutionParameterRepo extends JpaRepository<PipelineExecutionParameter, Long> {

    List<PipelineExecutionParameter> findByExecutionIdInOrderByExecutionIdAscSequenceOrderAsc(List<Long> executionIds);
}
