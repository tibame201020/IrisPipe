package irispipe.infrastructure.service;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import irispipe.infrastructure.entity.PipelineConnectionRole;
import irispipe.infrastructure.entity.PipelineDefinition;
import irispipe.infrastructure.entity.PipelineExecutionDefinition;
import irispipe.infrastructure.entity.PipelineExecutionParameter;
import irispipe.infrastructure.entity.PipelineJobConnection;
import irispipe.infrastructure.entity.PipelineJobDefinition;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.error.exception.ConfigFileException;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
import irispipe.infrastructure.provider.FileProvider;
import irispipe.infrastructure.provider.JsonFileProvider;
import irispipe.infrastructure.provider.YamlFileProvider;
import irispipe.infrastructure.repo.PipelineDefinitionRepo;
import irispipe.infrastructure.repo.PipelineExecutionDefinitionRepo;
import irispipe.infrastructure.repo.PipelineExecutionParameterRepo;
import irispipe.infrastructure.repo.PipelineJobConnectionRepo;
import irispipe.infrastructure.repo.PipelineJobDefinitionRepo;
import irispipe.model.ConnectionInfo;
import irispipe.model.DatabaseConfig;
import irispipe.model.ExecutionStep;
import irispipe.model.JobParameter;
import irispipe.model.JobSetting;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncConfigDTO;

@Service
public class JobConfigService {

    private final JsonFileProvider jsonFileProvider;
    private final YamlFileProvider yamlFileProvider;
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineJobDefinitionRepo pipelineJobDefinitionRepo;
    private final PipelineJobConnectionRepo pipelineJobConnectionRepo;
    private final PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo;
    private final PipelineExecutionParameterRepo pipelineExecutionParameterRepo;
    private final ObjectMapper objectMapper;
    private final PipelineFolderService pipelineFolderService;
    private final PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService;
    private final WorkspaceContextService workspaceContextService;

    public JobConfigService(JsonFileProvider jsonFileProvider,
            YamlFileProvider yamlFileProvider,
            PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineJobDefinitionRepo pipelineJobDefinitionRepo,
            PipelineJobConnectionRepo pipelineJobConnectionRepo,
            PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo,
            PipelineExecutionParameterRepo pipelineExecutionParameterRepo,
            PipelineFolderService pipelineFolderService,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService,
            WorkspaceContextService workspaceContextService,
            @Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.jsonFileProvider = jsonFileProvider;
        this.yamlFileProvider = yamlFileProvider;
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineJobDefinitionRepo = pipelineJobDefinitionRepo;
        this.pipelineJobConnectionRepo = pipelineJobConnectionRepo;
        this.pipelineExecutionDefinitionRepo = pipelineExecutionDefinitionRepo;
        this.pipelineExecutionParameterRepo = pipelineExecutionParameterRepo;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
        this.workspaceContextService = workspaceContextService;
        this.objectMapper = objectMapper;
    }

    public List<SyncConfigDTO.ConfigPipelineSummary> listSyncConfig() {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId).stream()
                .map(pipelineFolderService::toConfigPipelineSummary)
                .toList();
    }

    public List<SyncJobDefinition> getSyncJobs(Long pipelineId) {
        getPipelineDefinition(pipelineId);
        return renderSyncJobs(pipelineId);
    }

    public SyncConfigDTO.ConfigPipelineInfo getConfigFileInfo(Long pipelineId) {
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> jobs = renderSyncJobs(pipelineId);
        return renderConfigPipelineInfo(pipeline, jobs);
    }

    @Transactional
    public void deleteSyncConfig(Long pipelineId) {
        getPipelineDefinition(pipelineId);
        pipelineDefinitionPersistenceService.deletePipelineDefinition(pipelineId);
    }

    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo createSyncConfig(Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        String normalizedPipelineName = normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = validateAndNormalizeSyncJobs(syncJobs);
        Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
        if (pipelineDefinitionRepo.existsByWorkspaceIdAndFolderIdAndPipelineName(
                workspaceId,
                targetFolderId,
                normalizedPipelineName)) {
            throw new ConflictException("Pipeline already exists in target folder");
        }

        LocalDateTime now = LocalDateTime.now();
        PipelineDefinition pipeline = new PipelineDefinition();
        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(targetFolderId);
        pipeline.setPipelineName(normalizedPipelineName);
        pipeline.setContentHash(renderContentHash(validatedSyncJobs));
        pipeline.setCreatedAt(now);
        pipeline.setUpdatedAt(now);

        PipelineDefinition savedPipeline = pipelineDefinitionRepo.save(pipeline);
        pipelineDefinitionPersistenceService.persistJobs(savedPipeline.getId(), validatedSyncJobs);
        return getConfigFileInfo(savedPipeline.getId());
    }

    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo updateSyncConfig(Long pipelineId, Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        String normalizedPipelineName = normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = validateAndNormalizeSyncJobs(syncJobs);
        Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
        pipelineDefinitionRepo.findByWorkspaceIdAndFolderIdAndPipelineName(workspaceId, targetFolderId, normalizedPipelineName)
                .filter(existingPipeline -> !Objects.equals(existingPipeline.getId(), pipelineId))
                .ifPresent(existingPipeline -> {
                    throw new ConflictException("Pipeline already exists in target folder");
                });

        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(targetFolderId);
        pipeline.setPipelineName(normalizedPipelineName);
        pipeline.setContentHash(renderContentHash(validatedSyncJobs));
        pipeline.setUpdatedAt(LocalDateTime.now());
        pipelineDefinitionRepo.save(pipeline);

        pipelineDefinitionPersistenceService.replacePipelineJobs(pipelineId, validatedSyncJobs);
        return getConfigFileInfo(pipelineId);
    }

    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo patchSyncConfig(Long pipelineId, Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        return updateSyncConfig(pipelineId, folderId, pipelineName, syncJobs);
    }

    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo importSyncConfig(Long folderId, String pipelineName, String format,
            MultipartFile file) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PersistedConfig persistedConfig = parseImportConfig(folderId, pipelineName, format, file);

        if (pipelineDefinitionRepo.existsByWorkspaceIdAndFolderIdAndPipelineName(
                workspaceId,
                persistedConfig.folderId(),
                persistedConfig.pipelineName())) {
            throw new ConflictException("Pipeline already exists in target folder");
        }

        LocalDateTime now = LocalDateTime.now();
        PipelineDefinition pipeline = new PipelineDefinition();
        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(persistedConfig.folderId());
        pipeline.setPipelineName(persistedConfig.pipelineName());
        pipeline.setContentHash(persistedConfig.contentHash());
        pipeline.setCreatedAt(now);
        pipeline.setUpdatedAt(now);

        PipelineDefinition savedPipeline = pipelineDefinitionRepo.save(pipeline);
        pipelineDefinitionPersistenceService.persistJobs(savedPipeline.getId(), persistedConfig.syncJobs());
        return getConfigFileInfo(savedPipeline.getId());
    }

    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo importSyncConfig(Long pipelineId, Long folderId, String pipelineName, String format,
            MultipartFile file) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        PersistedConfig persistedConfig = parseImportConfig(folderId, pipelineName, format, file);

        pipelineDefinitionRepo.findByWorkspaceIdAndFolderIdAndPipelineName(
                workspaceId,
                persistedConfig.folderId(),
                persistedConfig.pipelineName())
                .filter(existingPipeline -> !Objects.equals(existingPipeline.getId(), pipelineId))
                .ifPresent(existingPipeline -> {
                    throw new ConflictException("Pipeline already exists in target folder");
                });

        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(persistedConfig.folderId());
        pipeline.setPipelineName(persistedConfig.pipelineName());
        pipeline.setContentHash(persistedConfig.contentHash());
        pipeline.setUpdatedAt(LocalDateTime.now());
        pipelineDefinitionRepo.save(pipeline);

        pipelineDefinitionPersistenceService.replacePipelineJobs(pipelineId, persistedConfig.syncJobs());
        return getConfigFileInfo(pipelineId);
    }

    private PersistedConfig parseImportConfig(Long folderId, String pipelineName, String format, MultipartFile file) {
        try {
            Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
            String normalizedPipelineName = normalizePipelineName(pipelineName);
            String resolvedFormat = resolveImportFormat(format, file);
            String fileContent = new String(file.getBytes(), StandardCharsets.UTF_8);
            List<SyncJobDefinition> syncJobs = readSyncJobs(fileContent, resolvedFormat);
            syncJobs.forEach(SyncJobDefinition::validate);

            return new PersistedConfig(
                    targetFolderId,
                    normalizedPipelineName,
                    renderContentHash(file.getBytes()),
                    syncJobs);
        } catch (irispipe.infrastructure.error.exception.ConfigValidationException e) {
            throw e;
        } catch (Exception e) {
            throw new ConfigFileException(pipelineName, e.getMessage());
        }
    }

    private void persistJobConnections(Long jobId, DatabaseConfig databaseConfig) {
        if (databaseConfig == null) {
            return;
        }

        saveJobConnection(jobId, PipelineConnectionRole.SOURCE, databaseConfig.source());
        saveJobConnection(jobId, PipelineConnectionRole.DEST, databaseConfig.dest());
    }

    private void saveJobConnection(Long jobId, PipelineConnectionRole connectionRole, ConnectionInfo connectionInfo) {
        if (connectionInfo == null) {
            return;
        }

        PipelineJobConnection pipelineJobConnection = new PipelineJobConnection();
        pipelineJobConnection.setJobId(jobId);
        pipelineJobConnection.setConnectionRole(connectionRole);
        pipelineJobConnection.setDriver(connectionInfo.driver());
        pipelineJobConnection.setUrl(connectionInfo.url());
        pipelineJobConnection.setUsername(connectionInfo.username());
        pipelineJobConnection.setPassword(connectionInfo.password());
        pipelineJobConnectionRepo.save(pipelineJobConnection);
    }

    private void persistExecutions(Long jobId, List<ExecutionStep> executions) {
        for (int executionOrder = 0; executionOrder < executions.size(); executionOrder++) {
            ExecutionStep execution = executions.get(executionOrder);
            PipelineExecutionDefinition executionDefinition = new PipelineExecutionDefinition();
            executionDefinition.setJobId(jobId);
            executionDefinition.setSequenceOrder(executionOrder);
            executionDefinition.setExecutionName(execution.name());
            executionDefinition.setExecutionType(execution.type());
            executionDefinition.setSqlStatement(execution.sql());
            executionDefinition.setDestTable(execution.destTable());
            executionDefinition.setWatermarkColumn(execution.watermarkColumn());
            PipelineExecutionDefinition savedExecution = pipelineExecutionDefinitionRepo.save(executionDefinition);

            persistParameters(savedExecution.getId(), execution.parameters());
        }
    }

    private void persistParameters(Long executionId, List<JobParameter> parameters) {
        for (int parameterOrder = 0; parameterOrder < parameters.size(); parameterOrder++) {
            JobParameter parameter = parameters.get(parameterOrder);
            PipelineExecutionParameter executionParameter = new PipelineExecutionParameter();
            executionParameter.setExecutionId(executionId);
            executionParameter.setSequenceOrder(parameterOrder);
            executionParameter.setParamName(parameter.param());
            executionParameter.setParamValue(renderParameterValue(parameter.value()));
            executionParameter.setParamType(parameter.type());
            pipelineExecutionParameterRepo.save(executionParameter);
        }
    }

    private List<SyncJobDefinition> renderSyncJobs(Long pipelineId) {
        List<PipelineJobDefinition> jobDefinitions = pipelineJobDefinitionRepo.findByPipelineIdOrderBySequenceOrder(pipelineId);
        if (jobDefinitions.isEmpty()) {
            return List.of();
        }

        List<Long> jobIds = jobDefinitions.stream().map(PipelineJobDefinition::getId).toList();
        Map<Long, List<PipelineJobConnection>> jobConnections = pipelineJobConnectionRepo.findByJobIdIn(jobIds).stream()
                .collect(HashMap::new,
                        (map, connection) -> map.computeIfAbsent(connection.getJobId(), key -> new ArrayList<>()).add(connection),
                        HashMap::putAll);

        List<PipelineExecutionDefinition> executionDefinitions = pipelineExecutionDefinitionRepo
                .findByJobIdInOrderByJobIdAscSequenceOrderAsc(jobIds);
        Map<Long, List<PipelineExecutionDefinition>> executionsByJobId = executionDefinitions.stream()
                .collect(HashMap::new,
                        (map, execution) -> map.computeIfAbsent(execution.getJobId(), key -> new ArrayList<>()).add(execution),
                        HashMap::putAll);

        List<Long> executionIds = executionDefinitions.stream().map(PipelineExecutionDefinition::getId).toList();
        Map<Long, List<PipelineExecutionParameter>> parametersByExecutionId = executionIds.isEmpty()
                ? Map.of()
                : pipelineExecutionParameterRepo
                        .findByExecutionIdInOrderByExecutionIdAscSequenceOrderAsc(executionIds)
                        .stream()
                        .collect(HashMap::new,
                                (map, parameter) -> map.computeIfAbsent(parameter.getExecutionId(), key -> new ArrayList<>()).add(parameter),
                                HashMap::putAll);

        return jobDefinitions.stream()
                .map(jobDefinition -> new SyncJobDefinition(
                        jobDefinition.getJobName(),
                        renderExecutions(
                                executionsByJobId.getOrDefault(jobDefinition.getId(), List.of()),
                                parametersByExecutionId),
                        new JobSetting(
                                jobDefinition.getFetchSize(),
                                jobDefinition.getBatchSize(),
                                jobDefinition.getDeleteThreshold(),
                                jobDefinition.getAtomicLevel()),
                        renderDatabaseConfig(jobConnections.getOrDefault(jobDefinition.getId(), List.of()))))
                .toList();
    }

    private List<ExecutionStep> renderExecutions(List<PipelineExecutionDefinition> executionDefinitions,
            Map<Long, List<PipelineExecutionParameter>> parametersByExecutionId) {
        return executionDefinitions.stream()
                .map(executionDefinition -> new ExecutionStep(
                        executionDefinition.getExecutionType(),
                        executionDefinition.getExecutionName(),
                        executionDefinition.getSqlStatement(),
                        executionDefinition.getDestTable(),
                        renderParameters(parametersByExecutionId.getOrDefault(executionDefinition.getId(), List.of())),
                        executionDefinition.getWatermarkColumn(),
                        null,
                        null))
                .toList();
    }

    private List<JobParameter> renderParameters(List<PipelineExecutionParameter> executionParameters) {
        return executionParameters.stream()
                .map(executionParameter -> new JobParameter(
                        executionParameter.getParamName(),
                        parseParameterValue(executionParameter.getParamValue()),
                        executionParameter.getParamType()))
                .toList();
    }

    private DatabaseConfig renderDatabaseConfig(List<PipelineJobConnection> pipelineJobConnections) {
        Map<PipelineConnectionRole, ConnectionInfo> connectionsByRole = new EnumMap<>(PipelineConnectionRole.class);
        pipelineJobConnections.forEach(connection -> connectionsByRole.put(
                connection.getConnectionRole(),
                new ConnectionInfo(
                        connection.getDriver(),
                        connection.getUrl(),
                        connection.getUsername(),
                        connection.getPassword())));

        return new DatabaseConfig(
                connectionsByRole.get(PipelineConnectionRole.SOURCE),
                connectionsByRole.get(PipelineConnectionRole.DEST));
    }

    private String renderParameterValue(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to serialize parameter value", e);
        }
    }

    private Object parseParameterValue(String value) {
        try {
            if (value == null) {
                return null;
            }
            return objectMapper.readValue(value, Object.class);
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to deserialize parameter value", e);
        }
    }

    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findByIdAndWorkspaceId(pipelineId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }

    private SyncConfigDTO.ConfigPipelineInfo renderConfigPipelineInfo(PipelineDefinition pipeline, List<SyncJobDefinition> jobs) {
        return new SyncConfigDTO.ConfigPipelineInfo(
                pipeline.getId(),
                pipelineFolderService.renderPublicFolderId(pipeline.getFolderId()),
                pipelineFolderService.buildFolderPath(pipeline.getFolderId()),
                pipeline.getPipelineName(),
                jobs);
    }

    private List<SyncJobDefinition> readSyncJobs(String content, String format) {
        FileProvider fileProvider = getFileProvider(format);
        return fileProvider.convertContentToClass(content, new TypeReference<List<SyncJobDefinition>>() {
        });
    }

    private String renderContentHash(byte[] fileBytes) {
        try {
            return java.util.HexFormat.of()
                    .formatHex(java.security.MessageDigest.getInstance("SHA-256").digest(fileBytes));
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to hash config content", e);
        }
    }

    private String renderContentHash(List<SyncJobDefinition> syncJobs) {
        try {
            return renderContentHash(objectMapper.writeValueAsBytes(syncJobs));
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to hash config content", e);
        }
    }

    private FileProvider getFileProvider(String format) {
        return switch (format.toLowerCase()) {
            case "json" -> jsonFileProvider;
            case "yaml", "yml" -> yamlFileProvider;
            default -> throw new IllegalArgumentException("Unsupported import format: " + format);
        };
    }

    private List<SyncJobDefinition> validateAndNormalizeSyncJobs(List<SyncJobDefinition> syncJobs) {
        if (syncJobs == null || syncJobs.isEmpty()) {
            throw new IllegalArgumentException("jobs can not be empty");
        }
        syncJobs.forEach(SyncJobDefinition::validate);
        return syncJobs;
    }

    private String normalizePipelineName(String pipelineName) {
        if (pipelineName == null || pipelineName.isBlank()) {
            throw new IllegalArgumentException("pipelineName can not be blank");
        }
        if (pipelineName.contains("/") || pipelineName.contains("\\")) {
            throw new IllegalArgumentException("pipelineName contains unsupported characters");
        }
        return pipelineName.trim();
    }

    private String resolveImportFormat(String format, MultipartFile file) {
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

    private record PersistedConfig(
            Long folderId,
            String pipelineName,
            String contentHash,
            List<SyncJobDefinition> syncJobs) {
    }
}
