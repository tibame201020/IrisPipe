package irispipe.infrastructure.service.folder;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import irispipe.infrastructure.entity.PipelineFolder;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;

final class PipelineFolderWorkspaceState {
    private final Long workspaceId;
    private final List<PipelineFolder> folders;
    private final Map<Long, PipelineFolder> foldersById;
    private final Map<Long, List<PipelineFolder>> foldersByParentId;
    private final Map<Long, String> folderPathsById;
    private final PipelineFolder rootFolder;

    PipelineFolderWorkspaceState(Long workspaceId, List<PipelineFolder> folders) {
        this.workspaceId = workspaceId;
        this.folders = List.copyOf(folders);
        this.foldersById = new HashMap<>();
        this.foldersByParentId = new HashMap<>();
        this.folderPathsById = new HashMap<>();

        PipelineFolder resolvedRootFolder = null;
        for (PipelineFolder folder : folders) {
            foldersById.put(folder.getId(), folder);
            foldersByParentId.computeIfAbsent(folder.getParentId(), key -> new ArrayList<>()).add(folder);
            if (Boolean.TRUE.equals(folder.getSystemRoot())) {
                resolvedRootFolder = folder;
            }
        }

        if (resolvedRootFolder == null) {
            throw new ResourceNotFoundException("pipeline folder", "Root folder not found");
        }
        this.rootFolder = resolvedRootFolder;
        computeFolderPath(rootFolder);
    }

    Long workspaceId() {
        return workspaceId;
    }

    PipelineFolder rootFolder() {
        return rootFolder;
    }

    List<PipelineFolder> folders() {
        return folders;
    }

    PipelineFolder getFolder(Long folderId) {
        PipelineFolder folder = foldersById.get(folderId);
        if (folder == null) {
            throw new ResourceNotFoundException("pipeline folder", "Pipeline folder not found");
        }
        return folder;
    }

    PipelineFolder resolveFolderOrRoot(Long folderId) {
        return folderId == null ? rootFolder : getFolder(folderId);
    }

    List<PipelineFolder> childFolders(Long parentId) {
        return foldersByParentId.getOrDefault(parentId, List.of());
    }

    String buildFolderPath(Long folderId) {
        return computeFolderPath(resolveFolderOrRoot(folderId));
    }

    Long renderPublicFolderId(Long folderId) {
        PipelineFolder folder = resolveFolderOrRoot(folderId);
        return Boolean.TRUE.equals(folder.getSystemRoot()) ? null : folder.getId();
    }

    Set<Long> collectSubtreeFolderIds(Long folderId) {
        Set<Long> subtreeFolderIds = new HashSet<>();
        ArrayDeque<Long> queue = new ArrayDeque<>();
        queue.add(folderId);
        while (!queue.isEmpty()) {
            Long currentFolderId = queue.removeFirst();
            if (!subtreeFolderIds.add(currentFolderId)) {
                continue;
            }
            for (PipelineFolder childFolder : childFolders(currentFolderId)) {
                queue.addLast(childFolder.getId());
            }
        }
        return subtreeFolderIds;
    }

    private String computeFolderPath(PipelineFolder folder) {
        String cachedPath = folderPathsById.get(folder.getId());
        if (cachedPath != null) {
            return cachedPath;
        }
        if (Boolean.TRUE.equals(folder.getSystemRoot())) {
            folderPathsById.put(folder.getId(), "/");
            return "/";
        }

        PipelineFolder parentFolder = folder.getParentId() == null ? null : foldersById.get(folder.getParentId());
        if (parentFolder == null) {
            throw new ResourceNotFoundException("pipeline folder", "Pipeline folder parent not found");
        }

        String parentPath = computeFolderPath(parentFolder);
        String folderPath = Objects.equals(parentPath, "/")
                ? "/" + folder.getFolderName()
                : parentPath + "/" + folder.getFolderName();
        folderPathsById.put(folder.getId(), folderPath);
        return folderPath;
    }
}
