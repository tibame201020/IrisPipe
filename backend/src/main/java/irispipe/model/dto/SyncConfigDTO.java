package irispipe.model.dto;

import irispipe.model.SyncJobDefinition;

import java.util.List;

public interface SyncConfigDTO {

    record ConfigPipelineUpsertRequest(
            Long folderId,
            String pipelineName,
            List<SyncJobDefinition> jobs) {
    }

    record FolderUpsertRequest(
            Long parentFolderId,
            String folderName) {
    }

    record ConfigPipelineSummary(
            Long id,
            String path,
            String fileName,
            Long folderId,
            String folderPath,
            String pipelineName) {
    }

    record ConfigPipelineInfo(
            Long id,
            String path,
            String fileName,
            Long folderId,
            String folderPath,
            String pipelineName,
            List<SyncJobDefinition> jobs) {
    }

    record FolderInfo(
            Long id,
            Long parentFolderId,
            String folderName,
            String folderPath,
            Boolean systemRoot) {
    }

    record FolderTreeNodeInfo(
            Long id,
            String folderName,
            String folderPath,
            List<FolderTreeNodeInfo> folders,
            List<ConfigPipelineSummary> pipelines) {
    }

    record FolderDeletePreviewInfo(
            Long folderId,
            String folderName,
            String folderPath,
            Integer folderCount,
            Integer pipelineCount,
            Integer pipelinesWithRunHistory,
            Boolean hasBlockers) {
    }

    record PipelineTreeInfo(
            List<FolderTreeNodeInfo> folders,
            List<ConfigPipelineSummary> pipelines) {
    }
}
