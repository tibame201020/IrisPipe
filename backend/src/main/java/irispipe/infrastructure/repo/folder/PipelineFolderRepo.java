package irispipe.infrastructure.repo.folder;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import irispipe.infrastructure.entity.folder.PipelineFolder;

/**
 * JPA repository for workspace folder tree rows.
 */
@Repository
public interface PipelineFolderRepo extends JpaRepository<PipelineFolder, Long> {

    Optional<PipelineFolder> findByWorkspaceIdAndSystemRootTrue(Long workspaceId);

    Optional<PipelineFolder> findByIdAndWorkspaceId(Long id, Long workspaceId);

    List<PipelineFolder> findAllByWorkspaceIdOrderByIdAsc(Long workspaceId);

    List<PipelineFolder> findByWorkspaceIdAndParentIdOrderByFolderNameAsc(Long workspaceId, Long parentId);

    Optional<PipelineFolder> findByWorkspaceIdAndParentIdAndFolderName(Long workspaceId, Long parentId, String folderName);

    boolean existsByWorkspaceIdAndParentIdAndFolderName(Long workspaceId, Long parentId, String folderName);
}
