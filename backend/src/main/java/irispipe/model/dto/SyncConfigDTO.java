package irispipe.model.dto;

import static irispipe.api.validation.RequestValidationPatterns.FOLDER_NAME;
import static irispipe.api.validation.RequestValidationPatterns.PIPELINE_NAME;

import com.fasterxml.jackson.annotation.JsonProperty;
import irispipe.model.SyncJobDefinition;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

import java.util.List;

/**
 * Request and response DTOs for folder-aware pipeline config APIs.
 */
public interface SyncConfigDTO {

    /**
     * Request body for pipeline create and replace operations.
     *
     * @param folderId target folder id, or {@code null} for root
     * @param pipelineName user-facing pipeline name
     * @param jobs full pipeline job payload
     */
    record ConfigPipelineUpsertRequest(
            @Positive
            Long folderId,
            @NotBlank(message = "pipelineName can not be blank")
            @Pattern(regexp = PIPELINE_NAME, message = "pipelineName contains unsupported characters")
            String pipelineName,
            List<String> stages,
            @NotEmpty(message = "jobs can not be empty")
            List<SyncJobDefinition> jobs) {
    }

    /**
     * Request body for folder create and update operations.
     *
     * @param parentFolderId parent folder id, or {@code null} for root
     * @param folderName user-facing folder name
     */
    record FolderUpsertRequest(
            @Positive
            Long parentFolderId,
            @NotBlank(message = "folderName can not be blank")
            @Pattern(regexp = FOLDER_NAME, message = "folderName contains unsupported characters")
            String folderName) {
    }

    /**
     * Summary shape for one persisted pipeline config.
     *
     * @param id pipeline id
     * @param folderId public folder id, or {@code null} for root
     * @param folderPath public folder path
     * @param pipelineName user-facing pipeline name
     */
    record ConfigPipelineSummary(
            Long id,
            Long folderId,
            String folderPath,
            String pipelineName) {
    }

    /**
     * Detail shape for one persisted pipeline config.
     *
     * @param id pipeline id
     * @param folderId public folder id, or {@code null} for root
     * @param folderPath public folder path
     * @param pipelineName user-facing pipeline name
     * @param jobs full pipeline job payload
     */
    record ConfigPipelineInfo(
            Long id,
            Long folderId,
            String folderPath,
            String pipelineName,
            List<String> stages,
            List<ConfigPipelineStageInfo> stageInfos,
            List<SyncJobDefinition> jobs) {
    }

    /**
     * Stage-first projection for one persisted pipeline config.
     *
     * @param stageName stage name
     * @param stageSequenceOrder stage order inside the pipeline
     * @param jobs jobs that belong to the stage
     */
    record ConfigPipelineStageInfo(
            @JsonProperty("stage")
            String stageName,
            Integer stageSequenceOrder,
            List<SyncJobDefinition> jobs) {
    }

    /**
     * Public folder info payload.
     *
     * @param id folder id
     * @param parentFolderId parent folder id, or {@code null} for root
     * @param folderName user-facing folder name
     * @param folderPath public folder path
     * @param systemRoot whether this row is the hidden root folder
     */
    record FolderInfo(
            Long id,
            Long parentFolderId,
            String folderName,
            String folderPath,
            Boolean systemRoot) {
    }

    /**
     * Tree node payload for one folder and its nested children.
     *
     * @param id folder id
     * @param folderName user-facing folder name
     * @param folderPath public folder path
     * @param folders child folder nodes
     * @param pipelines child pipeline summaries
     */
    record FolderTreeNodeInfo(
            Long id,
            String folderName,
            String folderPath,
            List<FolderTreeNodeInfo> folders,
            List<ConfigPipelineSummary> pipelines) {
    }

    /**
     * Recursive delete preview payload for one folder subtree.
     *
     * @param folderId preview target folder id
     * @param folderName preview target folder name
     * @param folderPath preview target folder path
     * @param folderCount number of folders in subtree
     * @param pipelineCount number of pipelines in subtree
     * @param pipelinesWithRunHistory number of pipelines blocked by run history
     * @param hasBlockers whether recursive delete is blocked
     * @param folders preview folder items
     * @param pipelines preview pipeline items
     * @param blockingPipelines preview pipeline blockers
     * @param truncated whether preview lists were truncated
     */
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

    /**
     * Folder item inside recursive delete preview.
     *
     * @param id folder id
     * @param folderName folder name
     * @param folderPath folder path
     */
    record FolderDeletePreviewFolderInfo(
            Long id,
            String folderName,
            String folderPath) {
    }

    /**
     * Pipeline item inside recursive delete preview.
     *
     * @param id pipeline id
     * @param folderId public folder id, or {@code null} for root
     * @param folderPath folder path
     * @param pipelineName user-facing pipeline name
     * @param hasRunHistory whether the pipeline has runtime lineage
     */
    record FolderDeletePreviewPipelineInfo(
            Long id,
            Long folderId,
            String folderPath,
            String pipelineName,
            Boolean hasRunHistory) {
    }

    /**
     * Top-level folder tree payload.
     *
     * @param folders root child folders
     * @param pipelines root-level pipelines
     */
    record PipelineTreeInfo(
            List<FolderTreeNodeInfo> folders,
            List<ConfigPipelineSummary> pipelines) {
    }
}
