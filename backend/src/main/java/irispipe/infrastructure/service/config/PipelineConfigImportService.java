package irispipe.infrastructure.service.config;

import java.nio.charset.StandardCharsets;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import irispipe.infrastructure.error.exception.ConfigFileException;
import irispipe.infrastructure.provider.FileProvider;
import irispipe.infrastructure.provider.JsonFileProvider;
import irispipe.infrastructure.provider.YamlFileProvider;
import irispipe.infrastructure.service.folder.PipelineFolderService;
import irispipe.model.SyncJobDefinition;

/**
 * Parses imported config files and computes stable config content hashes.
 */
@Service
public class PipelineConfigImportService {
    private final JsonFileProvider jsonFileProvider;
    private final YamlFileProvider yamlFileProvider;
    private final PipelineFolderService pipelineFolderService;
    private final PipelineConfigRequestPolicy pipelineConfigRequestPolicy;
    private final ObjectMapper objectMapper;

    /**
     * Creates the import service with file parsers, folder helpers, and hashing support.
     *
     * @param jsonFileProvider JSON config parser
     * @param yamlFileProvider YAML config parser
     * @param pipelineFolderService folder resolver for imported configs
     * @param pipelineConfigRequestPolicy request normalization policy
     * @param objectMapper JSON serializer used for content hashing
     */
    public PipelineConfigImportService(JsonFileProvider jsonFileProvider,
            YamlFileProvider yamlFileProvider,
            PipelineFolderService pipelineFolderService,
            PipelineConfigRequestPolicy pipelineConfigRequestPolicy,
            @Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.jsonFileProvider = jsonFileProvider;
        this.yamlFileProvider = yamlFileProvider;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineConfigRequestPolicy = pipelineConfigRequestPolicy;
        this.objectMapper = objectMapper;
    }

    /**
     * Parses an uploaded file into a persistence-ready config payload.
     *
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName requested pipeline name
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return normalized folder id, pipeline name, content hash, and parsed job payload
     */
    public ParsedConfig parseImportConfig(Long folderId, String pipelineName, String format, MultipartFile file) {
        try {
            Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
            String normalizedPipelineName = pipelineConfigRequestPolicy.normalizePipelineName(pipelineName);
            String resolvedFormat = pipelineConfigRequestPolicy.resolveImportFormat(format, file);
            byte[] fileBytes = file.getBytes();
            String fileContent = new String(fileBytes, StandardCharsets.UTF_8);
            ImportedConfigPayload importedConfigPayload = readImportedConfigPayload(fileContent, resolvedFormat);
            List<SyncJobDefinition> syncJobs = pipelineConfigRequestPolicy.validateSyncJobs(
                    importedConfigPayload.stages(),
                    importedConfigPayload.jobs());

            return new ParsedConfig(
                    targetFolderId,
                    normalizedPipelineName,
                    renderContentHash(fileBytes),
                    syncJobs);
        } catch (irispipe.infrastructure.error.exception.ConfigValidationException e) {
            throw e;
        } catch (Exception e) {
            throw new ConfigFileException(pipelineName, e.getMessage());
        }
    }

    /**
     * Computes the persisted content hash from normalized job payload.
     *
     * @param syncJobs normalized job definitions
     * @return SHA-256 hex hash
     */
    public String renderContentHash(List<SyncJobDefinition> syncJobs) {
        try {
            return renderContentHash(objectMapper.writeValueAsBytes(syncJobs));
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to hash config content", e);
        }
    }

    /**
     * Parses YAML or JSON text into normalized job definitions.
     *
     * @param content raw config content
     * @param format normalized import format
     * @return parsed job definitions
     */
    private ImportedConfigPayload readImportedConfigPayload(String content, String format) {
        FileProvider fileProvider = getFileProvider(format);
        String trimmedContent = content == null ? "" : content.stripLeading();
        if (trimmedContent.startsWith("[") || trimmedContent.startsWith("-")) {
            return new ImportedConfigPayload(
                    null,
                    fileProvider.convertContentToClass(content, new TypeReference<List<SyncJobDefinition>>() {
                    }));
        }

        try {
            ImportedConfigPayload payload = fileProvider.convertContentToClass(
                    content,
                    new TypeReference<ImportedConfigPayload>() {
                    });
            if (payload != null && payload.jobs() != null) {
                return payload;
            }
        } catch (Exception e) {
            // Fallback to legacy list contract.
        }

        return new ImportedConfigPayload(
                null,
                fileProvider.convertContentToClass(content, new TypeReference<List<SyncJobDefinition>>() {
                }));
    }

    /**
     * Computes the persisted content hash from raw bytes.
     *
     * @param fileBytes raw config bytes
     * @return SHA-256 hex hash
     */
    private String renderContentHash(byte[] fileBytes) {
        try {
            return java.util.HexFormat.of()
                    .formatHex(java.security.MessageDigest.getInstance("SHA-256").digest(fileBytes));
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to hash config content", e);
        }
    }

    /**
     * Selects the file provider used to parse import content.
     *
     * @param format normalized import format
     * @return file provider matching the format
     */
    private FileProvider getFileProvider(String format) {
        return switch (format.toLowerCase()) {
            case "json" -> jsonFileProvider;
            case "yaml", "yml" -> yamlFileProvider;
            default -> throw new IllegalArgumentException("Unsupported import format: " + format);
        };
    }

    /**
     * Holds the normalized config payload generated from an import request.
     *
     * @param folderId resolved target folder id
     * @param pipelineName normalized pipeline name
     * @param contentHash persisted content hash
     * @param syncJobs parsed job payload
     */
    public record ParsedConfig(
            Long folderId,
            String pipelineName,
            String contentHash,
            List<SyncJobDefinition> syncJobs) {
    }

    private record ImportedConfigPayload(
            List<String> stages,
            List<SyncJobDefinition> jobs) {
    }
}
