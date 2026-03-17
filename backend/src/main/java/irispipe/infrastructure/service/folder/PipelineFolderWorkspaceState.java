package irispipe.infrastructure.service.folder;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import irispipe.infrastructure.entity.folder.PipelineFolder;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;

/**
 * Immutable in-memory view of one workspace folder tree.
 */
final class PipelineFolderWorkspaceState {
    private final Long workspaceId;
    private final List<PipelineFolder> folders;
    private final Map<Long, PipelineFolder> foldersById;
    private final Map<Long, List<PipelineFolder>> foldersByParentId;
    private final Map<Long, String> folderPathsById;
    private final PipelineFolder rootFolder;

    /**
     * Creates the workspace folder state from the persisted folder rows.
     *
     * @param workspaceId workspace id
     * @param folders persisted folder rows
     */
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

    /**
     * Returns the workspace id represented by this state.
     *
     * @return workspace id
     */
    Long workspaceId() {
        return workspaceId;
    }

    /**
     * Returns the hidden root folder row.
     *
     * @return root folder row
     */
    PipelineFolder rootFolder() {
        return rootFolder;
    }

    /**
     * Returns all folder rows in this workspace.
     *
     * @return immutable folder list
     */
    List<PipelineFolder> folders() {
        return folders;
    }

    /**
     * Resolves a folder by id.
     *
     * @param folderId folder id
     * @return folder row
     */
    PipelineFolder getFolder(Long folderId) {
        PipelineFolder folder = foldersById.get(folderId);
        if (folder == null) {
            throw new ResourceNotFoundException("pipeline folder", "Pipeline folder not found");
        }
        return folder;
    }

    /**
     * Resolves a folder id or the hidden root folder when input is null.
     *
     * @param folderId folder id, or {@code null} for root
     * @return resolved folder row
     */
    PipelineFolder resolveFolderOrRoot(Long folderId) {
        return folderId == null ? rootFolder : getFolder(folderId);
    }

    /**
     * Returns the direct child folders of one parent folder.
     *
     * @param parentId parent folder id
     * @return child folders
     */
    List<PipelineFolder> childFolders(Long parentId) {
        return foldersByParentId.getOrDefault(parentId, List.of());
    }

    /**
     * Builds the public path for one folder or root.
     *
     * @param folderId folder id, or {@code null} for root
     * @return public folder path
     */
    String buildFolderPath(Long folderId) {
        return computeFolderPath(resolveFolderOrRoot(folderId));
    }

    /**
     * Converts an internal folder id into the public API value.
     *
     * @param folderId internal folder id
     * @return public folder id, or {@code null} for root
     */
    Long renderPublicFolderId(Long folderId) {
        PipelineFolder folder = resolveFolderOrRoot(folderId);
        return Boolean.TRUE.equals(folder.getSystemRoot()) ? null : folder.getId();
    }

    /**
     * Collects all folder ids inside one subtree, including the root folder id.
     *
     * @param folderId subtree root folder id
     * @return subtree folder ids
     */
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

    /**
     * Computes and caches the public path for one folder.
     *
     * @param folder folder row
     * @return cached or computed public folder path
     */
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
