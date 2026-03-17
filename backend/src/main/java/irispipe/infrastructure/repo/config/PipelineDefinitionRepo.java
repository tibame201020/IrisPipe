package irispipe.infrastructure.repo.config;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.config.PipelineDefinition;

@Repository
public interface PipelineDefinitionRepo extends JpaRepository<PipelineDefinition, Long> {

    Optional<PipelineDefinition> findByIdAndWorkspaceId(Long id, Long workspaceId);

    boolean existsByWorkspaceIdAndFolderIdAndPipelineName(Long workspaceId, Long folderId, String pipelineName);

    Optional<PipelineDefinition> findByWorkspaceIdAndFolderIdAndPipelineName(Long workspaceId, Long folderId, String pipelineName);

    List<PipelineDefinition> findAllByWorkspaceIdOrderByIdAsc(Long workspaceId);

    List<PipelineDefinition> findByWorkspaceIdAndFolderIdOrderByPipelineNameAsc(Long workspaceId, Long folderId);
}
