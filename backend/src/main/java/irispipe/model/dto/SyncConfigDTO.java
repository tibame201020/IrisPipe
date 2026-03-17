package irispipe.model.dto;

import static irispipe.api.validation.RequestValidationPatterns.FOLDER_NAME;
import static irispipe.api.validation.RequestValidationPatterns.PIPELINE_NAME;

import irispipe.model.SyncJobDefinition;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

import java.util.List;

public interface SyncConfigDTO {

    record ConfigPipelineUpsertRequest(
            @Positive
            Long folderId,
            @NotBlank(message = "pipelineName can not be blank")
            @Pattern(regexp = PIPELINE_NAME, message = "pipelineName contains unsupported characters")
            String pipelineName,
            @NotEmpty(message = "jobs can not be empty")
            List<SyncJobDefinition> jobs) {
    }

    record FolderUpsertRequest(
            @Positive
            Long parentFolderId,
            @NotBlank(message = "folderName can not be blank")
            @Pattern(regexp = FOLDER_NAME, message = "folderName contains unsupported characters")
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
