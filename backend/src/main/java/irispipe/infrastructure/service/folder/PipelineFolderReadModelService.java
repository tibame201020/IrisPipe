package irispipe.infrastructure.service.folder;

import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.folder.PipelineFolder;
import irispipe.infrastructure.repo.config.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.runtime.PipelineRunRepo;
import irispipe.model.dto.SyncConfigDTO;

@Service
public class PipelineFolderReadModelService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineFolderStructureService pipelineFolderStructureService;

    public PipelineFolderReadModelService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineRunRepo pipelineRunRepo,
            PipelineFolderStructureService pipelineFolderStructureService) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineFolderStructureService = pipelineFolderStructureService;
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.PipelineTreeInfo getPipelineTree() {
        PipelineFolderWorkspaceState workspaceState = pipelineFolderStructureService.getCurrentWorkspaceState();
        List<PipelineDefinition> pipelines = pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(
                workspaceState.workspaceId());
        Map<Long, List<PipelineDefinition>> pipelinesByFolderId = new HashMap<>();
        for (PipelineDefinition pipelineDefinition : pipelines) {
            Long resolvedFolderId = workspaceState.resolveFolderOrRoot(pipelineDefinition.getFolderId()).getId();
            pipelinesByFolderId.computeIfAbsent(resolvedFolderId, key -> new java.util.ArrayList<>())
                    .add(pipelineDefinition);
        }

        List<SyncConfigDTO.FolderTreeNodeInfo> rootFolders = workspaceState.childFolders(workspaceState.rootFolder().getId()).stream()
                .filter(folder -> !Boolean.TRUE.equals(folder.getSystemRoot()))
                .sorted(Comparator.comparing(PipelineFolder::getFolderName))
                .map(folder -> buildFolderTreeNode(folder, workspaceState, pipelinesByFolderId))
                .toList();
        List<SyncConfigDTO.ConfigPipelineSummary> rootPipelines = pipelinesByFolderId.getOrDefault(
                workspaceState.rootFolder().getId(),
                List.of()).stream()
                .sorted(Comparator.comparing(PipelineDefinition::getPipelineName))
                .map(pipelineDefinition -> toConfigPipelineSummary(pipelineDefinition, workspaceState))
                .toList();

        return new SyncConfigDTO.PipelineTreeInfo(rootFolders, rootPipelines);
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.FolderDeletePreviewInfo getDeletePreview(Long folderId, Integer limit) {
        PipelineFolderWorkspaceState workspaceState = pipelineFolderStructureService.getCurrentWorkspaceState();
        PipelineFolder folder = workspaceState.getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            throw new IllegalArgumentException("Root folder can not be deleted");
        }

        int normalizedLimit = normalizeDeletePreviewLimit(limit);
        Set<Long> subtreeFolderIds = workspaceState.collectSubtreeFolderIds(folder.getId());
        List<PipelineFolder> subtreeFolders = workspaceState.folders().stream()
                .filter(existingFolder -> subtreeFolderIds.contains(existingFolder.getId()))
                .filter(existingFolder -> !Boolean.TRUE.equals(existingFolder.getSystemRoot()))
                .sorted(Comparator.comparing(existingFolder -> workspaceState.buildFolderPath(existingFolder.getId())))
                .toList();
        List<PipelineDefinition> subtreePipelines = pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(
                workspaceState.workspaceId()).stream()
                .filter(pipelineDefinition -> subtreeFolderIds.contains(
                        workspaceState.resolveFolderOrRoot(pipelineDefinition.getFolderId()).getId()))
                .sorted(Comparator
                        .comparing((PipelineDefinition pipelineDefinition) -> workspaceState.buildFolderPath(
                                pipelineDefinition.getFolderId()))
                        .thenComparing(PipelineDefinition::getPipelineName))
                .toList();
        Set<Long> pipelineIdsWithRunHistory = subtreePipelines.isEmpty()
                ? Set.of()
                : new HashSet<>(pipelineRunRepo.findPipelineIdsWithRunHistory(
                        subtreePipelines.stream().map(PipelineDefinition::getId).toList()));
        List<SyncConfigDTO.FolderDeletePreviewFolderInfo> folderPreviewItems = subtreeFolders.stream()
                .limit(normalizedLimit)
                .map(existingFolder -> toDeletePreviewFolderInfo(existingFolder, workspaceState))
                .toList();
        List<SyncConfigDTO.FolderDeletePreviewPipelineInfo> pipelinePreviewItems = subtreePipelines.stream()
                .limit(normalizedLimit)
                .map(pipelineDefinition -> toDeletePreviewPipelineInfo(
                        pipelineDefinition,
                        pipelineIdsWithRunHistory.contains(pipelineDefinition.getId()),
                        workspaceState))
                .toList();
        List<SyncConfigDTO.FolderDeletePreviewPipelineInfo> blockingPipelineItems = subtreePipelines.stream()
                .filter(pipelineDefinition -> pipelineIdsWithRunHistory.contains(pipelineDefinition.getId()))
                .limit(normalizedLimit)
                .map(pipelineDefinition -> toDeletePreviewPipelineInfo(pipelineDefinition, true, workspaceState))
                .toList();
        int pipelinesWithRunHistory = pipelineIdsWithRunHistory.size();
        boolean truncated = subtreeFolders.size() > normalizedLimit
                || subtreePipelines.size() > normalizedLimit
                || pipelinesWithRunHistory > normalizedLimit;

        return new SyncConfigDTO.FolderDeletePreviewInfo(
                folder.getId(),
                folder.getFolderName(),
                workspaceState.buildFolderPath(folder.getId()),
                subtreeFolders.size(),
                subtreePipelines.size(),
                pipelinesWithRunHistory,
                pipelinesWithRunHistory > 0,
                folderPreviewItems,
                pipelinePreviewItems,
                blockingPipelineItems,
                truncated);
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.ConfigPipelineSummary toConfigPipelineSummary(PipelineDefinition pipelineDefinition) {
        return toConfigPipelineSummary(
                pipelineDefinition,
                pipelineFolderStructureService.getCurrentWorkspaceState());
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.FolderInfo toFolderInfo(PipelineFolder folder) {
        return toFolderInfo(folder, pipelineFolderStructureService.getCurrentWorkspaceState());
    }

    private SyncConfigDTO.FolderTreeNodeInfo buildFolderTreeNode(PipelineFolder folder,
            PipelineFolderWorkspaceState workspaceState,
            Map<Long, List<PipelineDefinition>> pipelinesByFolderId) {
        List<SyncConfigDTO.FolderTreeNodeInfo> childFolders = workspaceState.childFolders(folder.getId()).stream()
                .filter(childFolder -> !Boolean.TRUE.equals(childFolder.getSystemRoot()))
                .sorted(Comparator.comparing(PipelineFolder::getFolderName))
                .map(childFolder -> buildFolderTreeNode(childFolder, workspaceState, pipelinesByFolderId))
                .toList();
        List<SyncConfigDTO.ConfigPipelineSummary> childPipelines = pipelinesByFolderId.getOrDefault(folder.getId(), List.of()).stream()
                .sorted(Comparator.comparing(PipelineDefinition::getPipelineName))
                .map(pipelineDefinition -> toConfigPipelineSummary(pipelineDefinition, workspaceState))
                .toList();
        return new SyncConfigDTO.FolderTreeNodeInfo(
                folder.getId(),
                folder.getFolderName(),
                workspaceState.buildFolderPath(folder.getId()),
                childFolders,
                childPipelines);
    }

    private SyncConfigDTO.ConfigPipelineSummary toConfigPipelineSummary(PipelineDefinition pipelineDefinition,
            PipelineFolderWorkspaceState workspaceState) {
        PipelineFolder folder = workspaceState.resolveFolderOrRoot(pipelineDefinition.getFolderId());
        return new SyncConfigDTO.ConfigPipelineSummary(
                pipelineDefinition.getId(),
                workspaceState.renderPublicFolderId(folder.getId()),
                workspaceState.buildFolderPath(folder.getId()),
                pipelineDefinition.getPipelineName());
    }

    private SyncConfigDTO.FolderInfo toFolderInfo(PipelineFolder folder, PipelineFolderWorkspaceState workspaceState) {
        Long parentFolderId = null;
        if (!Boolean.TRUE.equals(folder.getSystemRoot()) && folder.getParentId() != null) {
            parentFolderId = workspaceState.renderPublicFolderId(folder.getParentId());
        }
        return new SyncConfigDTO.FolderInfo(
                folder.getId(),
                parentFolderId,
                folder.getFolderName(),
                workspaceState.buildFolderPath(folder.getId()),
                folder.getSystemRoot());
    }

    private SyncConfigDTO.FolderDeletePreviewFolderInfo toDeletePreviewFolderInfo(PipelineFolder folder,
            PipelineFolderWorkspaceState workspaceState) {
        return new SyncConfigDTO.FolderDeletePreviewFolderInfo(
                folder.getId(),
                folder.getFolderName(),
                workspaceState.buildFolderPath(folder.getId()));
    }

    private SyncConfigDTO.FolderDeletePreviewPipelineInfo toDeletePreviewPipelineInfo(PipelineDefinition pipelineDefinition,
            boolean hasRunHistory,
            PipelineFolderWorkspaceState workspaceState) {
        PipelineFolder folder = workspaceState.resolveFolderOrRoot(pipelineDefinition.getFolderId());
        return new SyncConfigDTO.FolderDeletePreviewPipelineInfo(
                pipelineDefinition.getId(),
                workspaceState.renderPublicFolderId(folder.getId()),
                workspaceState.buildFolderPath(folder.getId()),
                pipelineDefinition.getPipelineName(),
                hasRunHistory);
    }

    private int normalizeDeletePreviewLimit(Integer limit) {
        if (limit == null) {
            return PipelineFolderConstants.DEFAULT_DELETE_PREVIEW_LIMIT;
        }
        if (limit <= 0 || limit > PipelineFolderConstants.MAX_DELETE_PREVIEW_LIMIT) {
            throw new IllegalArgumentException(PipelineFolderConstants.DELETE_PREVIEW_LIMIT_VALIDATION_MESSAGE);
        }
        return limit;
    }
}
