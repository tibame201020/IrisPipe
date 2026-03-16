package irispipe.infrastructure.service;

import java.time.LocalDateTime;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.PipelineDefinition;
import irispipe.infrastructure.entity.PipelineFolder;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.repo.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.PipelineFolderRepo;
import irispipe.infrastructure.repo.PipelineRunRepo;
import irispipe.model.dto.SyncConfigDTO;

@Service
public class PipelineFolderService {
    private static final String ROOT_FOLDER_NAME = "__root__";
    private static final int DEFAULT_DELETE_PREVIEW_LIMIT = 100;
    private static final int MAX_DELETE_PREVIEW_LIMIT = 200;

    private final PipelineFolderRepo pipelineFolderRepo;
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineRunRepo pipelineRunRepo;
    private final PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService;

    public PipelineFolderService(PipelineFolderRepo pipelineFolderRepo,
            PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineRunRepo pipelineRunRepo,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService) {
        this.pipelineFolderRepo = pipelineFolderRepo;
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineRunRepo = pipelineRunRepo;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.PipelineTreeInfo getPipelineTree() {
        PipelineFolder rootFolder = getRootFolder();
        List<PipelineFolder> folders = pipelineFolderRepo.findAllByOrderByIdAsc();
        List<PipelineDefinition> pipelines = pipelineDefinitionRepo.findAllByOrderByIdAsc();
        Map<Long, List<PipelineFolder>> foldersByParentId = new HashMap<>();
        Map<Long, List<PipelineDefinition>> pipelinesByFolderId = new HashMap<>();

        for (PipelineFolder folder : folders) {
            foldersByParentId.computeIfAbsent(folder.getParentId(), key -> new ArrayList<>()).add(folder);
        }
        for (PipelineDefinition pipelineDefinition : pipelines) {
            pipelinesByFolderId.computeIfAbsent(pipelineDefinition.getFolderId(), key -> new ArrayList<>()).add(pipelineDefinition);
        }

        List<SyncConfigDTO.FolderTreeNodeInfo> rootFolders = foldersByParentId.getOrDefault(rootFolder.getId(), List.of()).stream()
                .filter(folder -> !Boolean.TRUE.equals(folder.getSystemRoot()))
                .sorted(Comparator.comparing(PipelineFolder::getFolderName))
                .map(folder -> buildFolderTreeNode(folder, foldersByParentId, pipelinesByFolderId))
                .toList();
        List<SyncConfigDTO.ConfigPipelineSummary> rootPipelines = pipelinesByFolderId.getOrDefault(rootFolder.getId(), List.of()).stream()
                .sorted(Comparator.comparing(PipelineDefinition::getPipelineName))
                .map(this::toConfigPipelineSummary)
                .toList();

        return new SyncConfigDTO.PipelineTreeInfo(rootFolders, rootPipelines);
    }

    @Transactional
    public SyncConfigDTO.FolderInfo createFolder(Long parentFolderId, String folderName) {
        String normalizedFolderName = normalizeFolderName(folderName);
        PipelineFolder parentFolder = resolveFolderOrRoot(parentFolderId);
        if (pipelineFolderRepo.existsByParentIdAndFolderName(parentFolder.getId(), normalizedFolderName)) {
            throw new ConflictException("Folder already exists in target parent");
        }

        LocalDateTime now = LocalDateTime.now();
        PipelineFolder folder = new PipelineFolder();
        folder.setParentId(parentFolder.getId());
        folder.setFolderName(normalizedFolderName);
        folder.setSystemRoot(false);
        folder.setCreatedAt(now);
        folder.setUpdatedAt(now);
        return toFolderInfo(pipelineFolderRepo.save(folder));
    }

    @Transactional
    public SyncConfigDTO.FolderInfo updateFolder(Long folderId, Long parentFolderId, String folderName) {
        PipelineFolder folder = getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            throw new IllegalArgumentException("Root folder can not be updated");
        }

        String normalizedFolderName = normalizeFolderName(folderName);
        PipelineFolder targetParent = resolveFolderOrRoot(parentFolderId);
        validateFolderMove(folder, targetParent.getId());

        pipelineFolderRepo.findByParentIdAndFolderName(targetParent.getId(), normalizedFolderName)
                .filter(existingFolder -> !Objects.equals(existingFolder.getId(), folderId))
                .ifPresent(existingFolder -> {
                    throw new ConflictException("Folder already exists in target parent");
                });

        folder.setParentId(targetParent.getId());
        folder.setFolderName(normalizedFolderName);
        folder.setUpdatedAt(LocalDateTime.now());
        return toFolderInfo(pipelineFolderRepo.save(folder));
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.FolderDeletePreviewInfo getDeletePreview(Long folderId, Integer limit) {
        PipelineFolder folder = getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            throw new IllegalArgumentException("Root folder can not be deleted");
        }

        int normalizedLimit = normalizeDeletePreviewLimit(limit);
        List<PipelineFolder> allFolders = pipelineFolderRepo.findAllByOrderByIdAsc();
        Set<Long> subtreeFolderIds = collectSubtreeFolderIds(folder.getId(), allFolders);
        List<PipelineFolder> subtreeFolders = allFolders.stream()
                .filter(existingFolder -> subtreeFolderIds.contains(existingFolder.getId()))
                .filter(existingFolder -> !Boolean.TRUE.equals(existingFolder.getSystemRoot()))
                .sorted(Comparator.comparing(existingFolder -> buildFolderPath(existingFolder.getId())))
                .toList();
        List<PipelineDefinition> subtreePipelines = pipelineDefinitionRepo.findAllByOrderByIdAsc().stream()
                .filter(pipelineDefinition -> subtreeFolderIds.contains(pipelineDefinition.getFolderId()))
                .sorted(Comparator
                        .comparing((PipelineDefinition pipelineDefinition) -> buildFolderPath(pipelineDefinition.getFolderId()))
                        .thenComparing(PipelineDefinition::getPipelineName))
                .toList();
        Set<Long> pipelineIdsWithRunHistory = subtreePipelines.isEmpty()
                ? Set.of()
                : new HashSet<>(pipelineRunRepo.findPipelineIdsWithRunHistory(
                        subtreePipelines.stream().map(PipelineDefinition::getId).toList()));
        List<SyncConfigDTO.FolderDeletePreviewFolderInfo> folderPreviewItems = subtreeFolders.stream()
                .limit(normalizedLimit)
                .map(this::toDeletePreviewFolderInfo)
                .toList();
        List<SyncConfigDTO.FolderDeletePreviewPipelineInfo> pipelinePreviewItems = subtreePipelines.stream()
                .limit(normalizedLimit)
                .map(pipelineDefinition -> toDeletePreviewPipelineInfo(
                        pipelineDefinition,
                        pipelineIdsWithRunHistory.contains(pipelineDefinition.getId())))
                .toList();
        List<SyncConfigDTO.FolderDeletePreviewPipelineInfo> blockingPipelineItems = subtreePipelines.stream()
                .filter(pipelineDefinition -> pipelineIdsWithRunHistory.contains(pipelineDefinition.getId()))
                .limit(normalizedLimit)
                .map(pipelineDefinition -> toDeletePreviewPipelineInfo(pipelineDefinition, true))
                .toList();
        int pipelinesWithRunHistory = pipelineIdsWithRunHistory.size();
        boolean truncated = subtreeFolders.size() > normalizedLimit
                || subtreePipelines.size() > normalizedLimit
                || pipelinesWithRunHistory > normalizedLimit;

        return new SyncConfigDTO.FolderDeletePreviewInfo(
                folder.getId(),
                folder.getFolderName(),
                buildFolderPath(folder.getId()),
                subtreeFolders.size(),
                subtreePipelines.size(),
                pipelinesWithRunHistory,
                pipelinesWithRunHistory > 0,
                folderPreviewItems,
                pipelinePreviewItems,
                blockingPipelineItems,
                truncated);
    }

    @Transactional
    public void deleteFolder(Long folderId, boolean recursive) {
        PipelineFolder folder = getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            throw new IllegalArgumentException("Root folder can not be deleted");
        }

        SyncConfigDTO.FolderDeletePreviewInfo preview = getDeletePreview(folderId, null);
        boolean hasChildren = preview.folderCount() > 1 || preview.pipelineCount() > 0;
        if (!recursive && hasChildren) {
            throw new ConflictException("Folder is not empty; use delete preview and recursive delete");
        }
        if (preview.hasBlockers()) {
            throw new ConflictException("Folder contains pipelines with run history and can not be recursively deleted");
        }

        List<PipelineFolder> allFolders = pipelineFolderRepo.findAllByOrderByIdAsc();
        Set<Long> subtreeFolderIds = collectSubtreeFolderIds(folderId, allFolders);
        List<PipelineDefinition> subtreePipelines = pipelineDefinitionRepo.findAllByOrderByIdAsc().stream()
                .filter(pipelineDefinition -> subtreeFolderIds.contains(pipelineDefinition.getFolderId()))
                .sorted(Comparator.comparing(PipelineDefinition::getId))
                .toList();
        for (PipelineDefinition pipelineDefinition : subtreePipelines) {
            pipelineDefinitionPersistenceService.deletePipelineDefinition(pipelineDefinition.getId());
        }

        List<PipelineFolder> foldersToDelete = allFolders.stream()
                .filter(existingFolder -> subtreeFolderIds.contains(existingFolder.getId()))
                .filter(existingFolder -> !Boolean.TRUE.equals(existingFolder.getSystemRoot()))
                .sorted(Comparator.comparingInt((PipelineFolder folderNode) -> buildFolderPath(folderNode.getId()).length())
                        .reversed())
                .toList();
        for (PipelineFolder folderNode : foldersToDelete) {
            pipelineFolderRepo.delete(folderNode);
        }
    }

    @Transactional(readOnly = true)
    public Long resolveFolderIdOrRoot(Long folderId) {
        return resolveFolderOrRoot(folderId).getId();
    }

    @Transactional(readOnly = true)
    public String buildFolderPath(Long folderId) {
        PipelineFolder folder = getFolder(folderId);
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            return "/";
        }

        ArrayDeque<String> segments = new ArrayDeque<>();
        PipelineFolder current = folder;
        while (current != null && !Boolean.TRUE.equals(current.getSystemRoot())) {
            segments.addFirst(current.getFolderName());
            current = current.getParentId() == null ? null : getFolder(current.getParentId());
        }

        return "/" + String.join("/", segments);
    }

    @Transactional(readOnly = true)
    public Long renderPublicFolderId(Long folderId) {
        PipelineFolder folder = getFolder(folderId);
        return Boolean.TRUE.equals(folder.getSystemRoot()) ? null : folder.getId();
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.ConfigPipelineSummary toConfigPipelineSummary(PipelineDefinition pipelineDefinition) {
        return new SyncConfigDTO.ConfigPipelineSummary(
                pipelineDefinition.getId(),
                renderPublicFolderId(pipelineDefinition.getFolderId()),
                buildFolderPath(pipelineDefinition.getFolderId()),
                pipelineDefinition.getPipelineName());
    }

    @Transactional(readOnly = true)
    public SyncConfigDTO.FolderInfo toFolderInfo(PipelineFolder folder) {
        Long parentFolderId = Boolean.TRUE.equals(folder.getSystemRoot()) ? null : folder.getParentId();
        return new SyncConfigDTO.FolderInfo(
                folder.getId(),
                parentFolderId,
                folder.getFolderName(),
                buildFolderPath(folder.getId()),
                folder.getSystemRoot());
    }

    private SyncConfigDTO.FolderTreeNodeInfo buildFolderTreeNode(PipelineFolder folder,
            Map<Long, List<PipelineFolder>> foldersByParentId,
            Map<Long, List<PipelineDefinition>> pipelinesByFolderId) {
        List<SyncConfigDTO.FolderTreeNodeInfo> childFolders = foldersByParentId.getOrDefault(folder.getId(), List.of()).stream()
                .filter(childFolder -> !Boolean.TRUE.equals(childFolder.getSystemRoot()))
                .sorted(Comparator.comparing(PipelineFolder::getFolderName))
                .map(childFolder -> buildFolderTreeNode(childFolder, foldersByParentId, pipelinesByFolderId))
                .toList();
        List<SyncConfigDTO.ConfigPipelineSummary> childPipelines = pipelinesByFolderId.getOrDefault(folder.getId(), List.of()).stream()
                .sorted(Comparator.comparing(PipelineDefinition::getPipelineName))
                .map(this::toConfigPipelineSummary)
                .toList();
        return new SyncConfigDTO.FolderTreeNodeInfo(
                folder.getId(),
                folder.getFolderName(),
                buildFolderPath(folder.getId()),
                childFolders,
                childPipelines);
    }

    private void validateFolderMove(PipelineFolder folder, Long targetParentId) {
        if (Objects.equals(folder.getId(), targetParentId)) {
            throw new IllegalArgumentException("Folder can not be moved under itself");
        }

        Set<Long> subtreeFolderIds = collectSubtreeFolderIds(folder.getId(), pipelineFolderRepo.findAllByOrderByIdAsc());
        if (subtreeFolderIds.contains(targetParentId)) {
            throw new IllegalArgumentException("Folder can not be moved under its descendant");
        }
    }

    private Set<Long> collectSubtreeFolderIds(Long folderId, List<PipelineFolder> folders) {
        Map<Long, List<PipelineFolder>> foldersByParentId = new HashMap<>();
        for (PipelineFolder folder : folders) {
            foldersByParentId.computeIfAbsent(folder.getParentId(), key -> new ArrayList<>()).add(folder);
        }

        Set<Long> subtreeFolderIds = new HashSet<>();
        ArrayDeque<Long> queue = new ArrayDeque<>();
        queue.add(folderId);
        while (!queue.isEmpty()) {
            Long currentFolderId = queue.removeFirst();
            if (!subtreeFolderIds.add(currentFolderId)) {
                continue;
            }
            for (PipelineFolder childFolder : foldersByParentId.getOrDefault(currentFolderId, List.of())) {
                queue.addLast(childFolder.getId());
            }
        }
        return subtreeFolderIds;
    }

    private SyncConfigDTO.FolderDeletePreviewFolderInfo toDeletePreviewFolderInfo(PipelineFolder folder) {
        return new SyncConfigDTO.FolderDeletePreviewFolderInfo(
                folder.getId(),
                folder.getFolderName(),
                buildFolderPath(folder.getId()));
    }

    private SyncConfigDTO.FolderDeletePreviewPipelineInfo toDeletePreviewPipelineInfo(PipelineDefinition pipelineDefinition,
            boolean hasRunHistory) {
        return new SyncConfigDTO.FolderDeletePreviewPipelineInfo(
                pipelineDefinition.getId(),
                renderPublicFolderId(pipelineDefinition.getFolderId()),
                buildFolderPath(pipelineDefinition.getFolderId()),
                pipelineDefinition.getPipelineName(),
                hasRunHistory);
    }

    private PipelineFolder resolveFolderOrRoot(Long folderId) {
        return folderId == null ? getRootFolder() : getFolder(folderId);
    }

    private PipelineFolder getRootFolder() {
        return pipelineFolderRepo.findBySystemRootTrue()
                .orElseThrow(() -> new ResourceNotFoundException("pipeline folder", "Root folder not found"));
    }

    private PipelineFolder getFolder(Long folderId) {
        return pipelineFolderRepo.findById(folderId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline folder", "Pipeline folder not found"));
    }

    private String normalizeFolderName(String folderName) {
        if (folderName == null || folderName.isBlank()) {
            throw new IllegalArgumentException("folderName can not be blank");
        }
        if (ROOT_FOLDER_NAME.equals(folderName) || folderName.contains("/") || folderName.contains("\\")) {
            throw new IllegalArgumentException("folderName contains unsupported characters");
        }
        return folderName.trim();
    }

    private int normalizeDeletePreviewLimit(Integer limit) {
        if (limit == null) {
            return DEFAULT_DELETE_PREVIEW_LIMIT;
        }
        if (limit <= 0 || limit > MAX_DELETE_PREVIEW_LIMIT) {
            throw new IllegalArgumentException("limit must be between 1 and 200");
        }
        return limit;
    }
}
