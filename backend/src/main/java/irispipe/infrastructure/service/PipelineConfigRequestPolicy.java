package irispipe.infrastructure.service;

import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import irispipe.model.SyncJobDefinition;

@Service
/**
 * Applies request-level normalization and shallow config policy for pipeline config operations.
 */
public class PipelineConfigRequestPolicy {

    /**
     * Validates that the job payload exists and each job definition is valid.
     *
     * @param syncJobs incoming job payload
     * @return the same job payload after validation
     */
    public List<SyncJobDefinition> validateSyncJobs(List<SyncJobDefinition> syncJobs) {
        if (syncJobs == null || syncJobs.isEmpty()) {
            throw new IllegalArgumentException("jobs can not be empty");
        }
        syncJobs.forEach(SyncJobDefinition::validate);
        return syncJobs;
    }

    /**
     * Validates and trims a user-facing pipeline name.
     *
     * @param pipelineName incoming pipeline name
     * @return normalized pipeline name
     */
    public String normalizePipelineName(String pipelineName) {
        if (pipelineName == null || pipelineName.isBlank()) {
            throw new IllegalArgumentException("pipelineName can not be blank");
        }
        if (pipelineName.contains("/") || pipelineName.contains("\\")) {
            throw new IllegalArgumentException("pipelineName contains unsupported characters");
        }
        return pipelineName.trim();
    }

    /**
     * Resolves the import format from the explicit request value or file name.
     *
     * @param format optional explicit format
     * @param file uploaded config file
     * @return normalized import format
     */
    public String resolveImportFormat(String format, MultipartFile file) {
        if (format != null && !format.isBlank()) {
            return normalizeImportFormat(format);
        }

        String originalFilename = file.getOriginalFilename();
        if (originalFilename != null && !originalFilename.isBlank()) {
            return normalizeImportFormat(FilenameUtils.getExtension(originalFilename));
        }

        throw new IllegalArgumentException("format is required when file name has no extension");
    }

    private String normalizeImportFormat(String format) {
        String normalizedFormat = format.trim().toLowerCase();
        return switch (normalizedFormat) {
            case "yaml", "yml" -> "yaml";
            case "json" -> "json";
            default -> throw new IllegalArgumentException("Unsupported import format: " + format);
        };
    }
}
