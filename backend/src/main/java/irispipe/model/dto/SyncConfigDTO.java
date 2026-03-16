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
            Long folderId,
            String folderPath,
            String pipelineName) {
    }

    record ConfigPipelineInfo(
            Long id,
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
            Boolean hasBlockers,
            List<FolderDeletePreviewFolderInfo> folders,
            List<FolderDeletePreviewPipelineInfo> pipelines,
            List<FolderDeletePreviewPipelineInfo> blockingPipelines,
            Boolean truncated) {
    }

    record FolderDeletePreviewFolderInfo(
            Long id,
            String folderName,
            String folderPath) {
    }

    record FolderDeletePreviewPipelineInfo(
            Long id,
            Long folderId,
            String folderPath,
            String pipelineName,
            Boolean hasRunHistory) {
    }

    record PipelineTreeInfo(
            List<FolderTreeNodeInfo> folders,
            List<ConfigPipelineSummary> pipelines) {
    }
}
