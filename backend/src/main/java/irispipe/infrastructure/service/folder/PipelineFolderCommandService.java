package irispipe.infrastructure.service.folder;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.folder.PipelineFolder;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.repo.config.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.folder.PipelineFolderRepo;
import irispipe.infrastructure.service.config.PipelineDefinitionPersistenceService;
import irispipe.model.dto.SyncConfigDTO;

/**
 * Applies folder create, rename, move, and delete operations within the
 * current workspace.
 */
@Service
public class PipelineFolderCommandService {
    private final PipelineFolderRepo pipelineFolderRepo;
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService;
    private final PipelineFolderStructureService pipelineFolderStructureService;
    private final PipelineFolderReadModelService pipelineFolderReadModelService;

    /**
     * Creates the folder command service.
     *
     * @param pipelineFolderRepo folder repository
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineDefinitionPersistenceService pipeline delete and child-row
     * persistence facade
     * @param pipelineFolderStructureService workspace folder structure resolver
     * @param pipelineFolderReadModelService folder read-model mapper
     */
    public PipelineFolderCommandService(PipelineFolderRepo pipelineFolderRepo,
            PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService,
            PipelineFolderStructureService pipelineFolderStructureService,
            PipelineFolderReadModelService pipelineFolderReadModelService) {
        this.pipelineFolderRepo = pipelineFolderRepo;
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
        this.pipelineFolderStructureService = pipelineFolderStructureService;
        this.pipelineFolderReadModelService = pipelineFolderReadModelService;
    }

    /**
     * Creates a folder under the requested parent or root.
     *
     * @param parentFolderId parent folder id, or {@code null} for root
     * @param folderName user-facing folder name
     * @return created folder info
     */
    @Transactional
    public SyncConfigDTO.FolderInfo createFolder(Long parentFolderId, String folderName) {
        PipelineFolderWorkspaceState workspaceState = pipelineFolderStructureService.getCurrentWorkspaceState();
        String normalizedFolderName = normalizeFolderName(folderName);
        PipelineFolder parentFolder = workspaceState.resolveFolderOrRoot(parentFolderId);
        if (pipelineFolderRepo.existsByWorkspaceIdAndParentIdAndFolderName(
                workspaceState.workspaceId(),
                parentFolder.getId(),
                normalizedFolderName)) {
            throw new ConflictException("Folder already exists in target parent");
        }

        LocalDateTime now = LocalDateTime.now();
        PipelineFolder folder = new PipelineFolder();
        folder.setWorkspaceId(workspaceState.workspaceId());
        folder.setParentId(parentFolder.getId());
        folder.setFolderName(normalizedFolderName);
        folder.setSystemRoot(false);
        folder.setCreatedAt(now);
        folder.setUpdatedAt(now);
        return pipelineFolderReadModelService.toFolderInfo(pipelineFolderRepo.save(folder));
    }

    /**
     * Renames or moves an existing folder.
     *
     * @param folderId folder id in the current workspace
     * @param parentFolderId target parent folder id, or {@code null} for root
     * @param folderName target folder name
     * @return updated folder info
     */
    @Transactional
    public SyncConfigDTO.FolderInfo updateFolder(Long folderId, Long parentFolderId, String folderName) {
        PipelineFolderWorkspaceState workspaceState = pipelineFolderStructureService.getCurrentWorkspaceState();
        PipelineFolder folder = workspaceState.getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            throw new IllegalArgumentException("Root folder can not be updated");
        }

        String normalizedFolderName = normalizeFolderName(folderName);
        PipelineFolder targetParent = workspaceState.resolveFolderOrRoot(parentFolderId);
        validateFolderMove(folder, targetParent.getId(), workspaceState);

        pipelineFolderRepo.findByWorkspaceIdAndParentIdAndFolderName(
                workspaceState.workspaceId(),
                targetParent.getId(),
                normalizedFolderName)
                .filter(existingFolder -> !Objects.equals(existingFolder.getId(), folderId))
                .ifPresent(existingFolder -> {
                    throw new ConflictException("Folder already exists in target parent");
                });

        folder.setParentId(targetParent.getId());
        folder.setFolderName(normalizedFolderName);
        folder.setUpdatedAt(LocalDateTime.now());
        return pipelineFolderReadModelService.toFolderInfo(pipelineFolderRepo.save(folder));
    }

    /**
     * Deletes a folder, optionally traversing its subtree when recursive delete is
     * explicitly requested.
     *
     * @param folderId folder id in the current workspace
     * @param recursive whether subtree deletion is allowed
     */
    @Transactional
    public void deleteFolder(Long folderId, boolean recursive) {
        PipelineFolderWorkspaceState workspaceState = pipelineFolderStructureService.getCurrentWorkspaceState();
        PipelineFolder folder = workspaceState.getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            throw new IllegalArgumentException("Root folder can not be deleted");
        }

        SyncConfigDTO.FolderDeletePreviewInfo preview = pipelineFolderReadModelService.getDeletePreview(folderId, null);
        boolean hasChildren = preview.folderCount() > 1 || preview.pipelineCount() > 0;
        if (!recursive && hasChildren) {
            throw new ConflictException("Folder is not empty; use delete preview and recursive delete");
        }
        if (preview.hasBlockers()) {
            throw new ConflictException("Folder contains pipelines with run history and can not be recursively deleted");
        }

        PipelineFolderWorkspaceState deleteWorkspaceState = pipelineFolderStructureService.getCurrentWorkspaceState();
        Set<Long> subtreeFolderIds = deleteWorkspaceState.collectSubtreeFolderIds(folderId);
        List<PipelineDefinition> subtreePipelines = pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(
                deleteWorkspaceState.workspaceId()).stream()
                .filter(pipelineDefinition -> subtreeFolderIds.contains(pipelineDefinition.getFolderId()))
                .sorted(Comparator.comparing(PipelineDefinition::getId))
                .toList();
        for (PipelineDefinition pipelineDefinition : subtreePipelines) {
            pipelineDefinitionPersistenceService.deletePipelineDefinition(pipelineDefinition.getId());
        }

        List<PipelineFolder> foldersToDelete = deleteWorkspaceState.folders().stream()
                .filter(existingFolder -> subtreeFolderIds.contains(existingFolder.getId()))
                .filter(existingFolder -> !Boolean.TRUE.equals(existingFolder.getSystemRoot()))
                .sorted(Comparator.comparingInt((PipelineFolder folderNode) -> deleteWorkspaceState.buildFolderPath(
                        folderNode.getId()).length())
                        .reversed())
                .toList();
        for (PipelineFolder folderNode : foldersToDelete) {
            pipelineFolderRepo.delete(folderNode);
        }
    }

    /**
     * Verifies that a folder move does not create a cycle.
     *
     * @param folder folder being moved
     * @param targetParentId target parent folder id
     * @param workspaceState current workspace folder state
     */
    private void validateFolderMove(PipelineFolder folder, Long targetParentId, PipelineFolderWorkspaceState workspaceState) {
        if (Objects.equals(folder.getId(), targetParentId)) {
            throw new IllegalArgumentException("Folder can not be moved under itself");
        }

        if (workspaceState.collectSubtreeFolderIds(folder.getId()).contains(targetParentId)) {
            throw new IllegalArgumentException("Folder can not be moved under its descendant");
        }
    }

    /**
     * Normalizes and validates a folder name.
     *
     * @param folderName user-facing folder name
     * @return normalized folder name
     */
    private String normalizeFolderName(String folderName) {
        if (folderName == null || folderName.isBlank()) {
            throw new IllegalArgumentException("folderName can not be blank");
        }
        if (PipelineFolderConstants.ROOT_FOLDER_NAME.equals(folderName) || folderName.contains("/") || folderName.contains("\\")) {
            throw new IllegalArgumentException("folderName contains unsupported characters");
        }
        return folderName.trim();
    }
}
