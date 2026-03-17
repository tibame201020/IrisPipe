package irispipe.infrastructure.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import irispipe.infrastructure.entity.PipelineConnectionRole;
import irispipe.infrastructure.entity.PipelineDefinition;
import irispipe.infrastructure.entity.PipelineExecutionDefinition;
import irispipe.infrastructure.entity.PipelineExecutionParameter;
import irispipe.infrastructure.entity.PipelineJobConnection;
import irispipe.infrastructure.entity.PipelineJobDefinition;
import irispipe.infrastructure.error.exception.ConflictException;
import irispipe.infrastructure.error.exception.ResourceNotFoundException;
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
/**
 * Provides workspace-scoped pipeline config query, CRUD, and import operations.
 */
public class JobConfigService {
    private final PipelineDefinitionRepo pipelineDefinitionRepo;
    private final PipelineJobDefinitionRepo pipelineJobDefinitionRepo;
    private final PipelineJobConnectionRepo pipelineJobConnectionRepo;
    private final PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo;
    private final PipelineExecutionParameterRepo pipelineExecutionParameterRepo;
    private final ObjectMapper objectMapper;
    private final PipelineFolderService pipelineFolderService;
    private final PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService;
    private final WorkspaceContextService workspaceContextService;
    private final PipelineConfigRequestPolicy pipelineConfigRequestPolicy;
    private final PipelineConfigImportService pipelineConfigImportService;

    /**
     * Creates the config service with persistence, parsing, and workspace helpers.
     *
     * @param pipelineDefinitionRepo pipeline definition repository
     * @param pipelineJobDefinitionRepo pipeline job repository
     * @param pipelineJobConnectionRepo pipeline job connection repository
     * @param pipelineExecutionDefinitionRepo pipeline execution repository
     * @param pipelineExecutionParameterRepo pipeline execution parameter repository
     * @param pipelineFolderService folder and folder-path helper service
     * @param pipelineDefinitionPersistenceService pipeline persistence helper service
     * @param workspaceContextService current workspace resolver
     * @param pipelineConfigRequestPolicy request normalization and validation policy
     * @param pipelineConfigImportService import parsing and content hashing helper
     * @param objectMapper JSON serializer for execution parameter values
     */
    public JobConfigService(PipelineDefinitionRepo pipelineDefinitionRepo,
            PipelineJobDefinitionRepo pipelineJobDefinitionRepo,
            PipelineJobConnectionRepo pipelineJobConnectionRepo,
            PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo,
            PipelineExecutionParameterRepo pipelineExecutionParameterRepo,
            PipelineFolderService pipelineFolderService,
            PipelineDefinitionPersistenceService pipelineDefinitionPersistenceService,
            WorkspaceContextService workspaceContextService,
            PipelineConfigRequestPolicy pipelineConfigRequestPolicy,
            PipelineConfigImportService pipelineConfigImportService,
            @Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.pipelineDefinitionRepo = pipelineDefinitionRepo;
        this.pipelineJobDefinitionRepo = pipelineJobDefinitionRepo;
        this.pipelineJobConnectionRepo = pipelineJobConnectionRepo;
        this.pipelineExecutionDefinitionRepo = pipelineExecutionDefinitionRepo;
        this.pipelineExecutionParameterRepo = pipelineExecutionParameterRepo;
        this.pipelineFolderService = pipelineFolderService;
        this.pipelineDefinitionPersistenceService = pipelineDefinitionPersistenceService;
        this.workspaceContextService = workspaceContextService;
        this.pipelineConfigRequestPolicy = pipelineConfigRequestPolicy;
        this.pipelineConfigImportService = pipelineConfigImportService;
        this.objectMapper = objectMapper;
    }

    /**
     * Lists pipeline configs visible in the current workspace.
     *
     * @return folder-aware pipeline summaries ordered by pipeline id
     */
    public List<SyncConfigDTO.ConfigPipelineSummary> listSyncConfig() {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findAllByWorkspaceIdOrderByIdAsc(workspaceId).stream()
                .map(pipelineFolderService::toConfigPipelineSummary)
                .toList();
    }

    /**
     * Loads the normalized job definitions for one pipeline.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return normalized job definitions used by execution and editor flows
     */
    public List<SyncJobDefinition> getSyncJobs(Long pipelineId) {
        getPipelineDefinition(pipelineId);
        return renderSyncJobs(pipelineId);
    }

    /**
     * Returns pipeline metadata and its full job payload.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return folder-aware pipeline detail for editor and inspection screens
     */
    public SyncConfigDTO.ConfigPipelineInfo getConfigFileInfo(Long pipelineId) {
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        List<SyncJobDefinition> jobs = renderSyncJobs(pipelineId);
        return renderConfigPipelineInfo(pipeline, jobs);
    }

    /**
     * Deletes a pipeline config in the current workspace.
     *
     * @param pipelineId pipeline id in the current workspace
     */
    @Transactional
    public void deleteSyncConfig(Long pipelineId) {
        getPipelineDefinition(pipelineId);
        pipelineDefinitionPersistenceService.deletePipelineDefinition(pipelineId);
    }

    /**
     * Creates a new pipeline config in the target folder.
     *
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name
     * @param syncJobs full job payload for the new pipeline
     * @return persisted folder-aware pipeline detail
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo createSyncConfig(Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        String normalizedPipelineName = pipelineConfigRequestPolicy.normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = pipelineConfigRequestPolicy.validateSyncJobs(syncJobs);
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
        pipeline.setContentHash(pipelineConfigImportService.renderContentHash(validatedSyncJobs));
        pipeline.setCreatedAt(now);
        pipeline.setUpdatedAt(now);

        PipelineDefinition savedPipeline = pipelineDefinitionRepo.save(pipeline);
        pipelineDefinitionPersistenceService.persistJobs(savedPipeline.getId(), validatedSyncJobs);
        return getConfigFileInfo(savedPipeline.getId());
    }

    /**
     * Fully replaces an existing pipeline config and may rename or move it.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name after replacement
     * @param syncJobs full replacement job payload
     * @return persisted folder-aware pipeline detail after replacement
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo updateSyncConfig(Long pipelineId, Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        String normalizedPipelineName = pipelineConfigRequestPolicy.normalizePipelineName(pipelineName);
        List<SyncJobDefinition> validatedSyncJobs = pipelineConfigRequestPolicy.validateSyncJobs(syncJobs);
        Long targetFolderId = pipelineFolderService.resolveFolderIdOrRoot(folderId);
        pipelineDefinitionRepo.findByWorkspaceIdAndFolderIdAndPipelineName(workspaceId, targetFolderId, normalizedPipelineName)
                .filter(existingPipeline -> !Objects.equals(existingPipeline.getId(), pipelineId))
                .ifPresent(existingPipeline -> {
                    throw new ConflictException("Pipeline already exists in target folder");
                });

        pipeline.setWorkspaceId(workspaceId);
        pipeline.setFolderId(targetFolderId);
        pipeline.setPipelineName(normalizedPipelineName);
        pipeline.setContentHash(pipelineConfigImportService.renderContentHash(validatedSyncJobs));
        pipeline.setUpdatedAt(LocalDateTime.now());
        pipelineDefinitionRepo.save(pipeline);

        pipelineDefinitionPersistenceService.replacePipelineJobs(pipelineId, validatedSyncJobs);
        return getConfigFileInfo(pipelineId);
    }

    /**
     * Applies the current PATCH contract for pipeline config updates.
     *
     * <p>The current PATCH behavior is intentionally aligned with full-replace update.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name after patch
     * @param syncJobs full replacement job payload
     * @return persisted folder-aware pipeline detail after patch
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo patchSyncConfig(Long pipelineId, Long folderId, String pipelineName,
            List<SyncJobDefinition> syncJobs) {
        return updateSyncConfig(pipelineId, folderId, pipelineName, syncJobs);
    }

    /**
     * Creates a new pipeline from an imported YAML or JSON file.
     *
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return persisted folder-aware pipeline detail
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo importSyncConfig(Long folderId, String pipelineName, String format,
            MultipartFile file) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineConfigImportService.ParsedConfig persistedConfig = pipelineConfigImportService.parseImportConfig(
                folderId,
                pipelineName,
                format,
                file);

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

    /**
     * Replaces an existing pipeline from an imported YAML or JSON file.
     *
     * @param pipelineId pipeline id in the current workspace
     * @param folderId target folder id, or {@code null} for workspace root
     * @param pipelineName user-facing pipeline name after replacement
     * @param format optional explicit import format
     * @param file uploaded config file
     * @return persisted folder-aware pipeline detail after import replacement
     */
    @Transactional
    public SyncConfigDTO.ConfigPipelineInfo importSyncConfig(Long pipelineId, Long folderId, String pipelineName, String format,
            MultipartFile file) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        PipelineDefinition pipeline = getPipelineDefinition(pipelineId);
        PipelineConfigImportService.ParsedConfig persistedConfig = pipelineConfigImportService.parseImportConfig(
                folderId,
                pipelineName,
                format,
                file);

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

    /**
     * Persists source and destination connection rows for one job.
     *
     * @param jobId persisted pipeline job id
     * @param databaseConfig source and destination database config
     */
    private void persistJobConnections(Long jobId, DatabaseConfig databaseConfig) {
        if (databaseConfig == null) {
            return;
        }

        saveJobConnection(jobId, PipelineConnectionRole.SOURCE, databaseConfig.source());
        saveJobConnection(jobId, PipelineConnectionRole.DEST, databaseConfig.dest());
    }

    /**
     * Persists one job connection row when the connection exists.
     *
     * @param jobId persisted pipeline job id
     * @param connectionRole source or destination role
     * @param connectionInfo concrete connection settings
     */
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

    /**
     * Persists execution-step rows for one pipeline job.
     *
     * @param jobId persisted pipeline job id
     * @param executions execution-step payloads for the job
     */
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

    /**
     * Persists execution parameter rows for one execution step.
     *
     * @param executionId persisted execution-step id
     * @param parameters execution parameters in order
     */
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

    /**
     * Rebuilds normalized job definitions from persisted pipeline rows.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return normalized job definitions ordered by job sequence
     */
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

    /**
     * Rebuilds execution-step payloads for a single job.
     *
     * @param executionDefinitions persisted execution rows for the job
     * @param parametersByExecutionId execution parameters grouped by execution id
     * @return execution-step payloads in execution order
     */
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

    /**
     * Rebuilds parameter payloads for one execution step.
     *
     * @param executionParameters persisted parameter rows
     * @return deserialized execution parameters in sequence order
     */
    private List<JobParameter> renderParameters(List<PipelineExecutionParameter> executionParameters) {
        return executionParameters.stream()
                .map(executionParameter -> new JobParameter(
                        executionParameter.getParamName(),
                        parseParameterValue(executionParameter.getParamValue()),
                        executionParameter.getParamType()))
                .toList();
    }

    /**
     * Rebuilds source and destination database config for one job.
     *
     * @param pipelineJobConnections persisted connection rows
     * @return database config with source and destination roles mapped
     */
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

    /**
     * Serializes a parameter value for persistence.
     *
     * @param value raw parameter value
     * @return serialized JSON string
     */
    private String renderParameterValue(Object value) {
        try {
            return objectMapper.writeValueAsString(value);
        } catch (Exception e) {
            throw new IllegalArgumentException("Failed to serialize parameter value", e);
        }
    }

    /**
     * Deserializes a persisted parameter value.
     *
     * @param value serialized parameter value
     * @return deserialized parameter object, or {@code null} when input is null
     */
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

    /**
     * Resolves a pipeline in the current workspace.
     *
     * @param pipelineId pipeline id in the current workspace
     * @return persisted pipeline definition
     */
    private PipelineDefinition getPipelineDefinition(Long pipelineId) {
        Long workspaceId = workspaceContextService.getCurrentWorkspaceId();
        return pipelineDefinitionRepo.findByIdAndWorkspaceId(pipelineId, workspaceId)
                .orElseThrow(() -> new ResourceNotFoundException("pipeline", "Pipeline not found"));
    }

    /**
     * Builds the public config detail payload from persisted pipeline rows.
     *
     * @param pipeline persisted pipeline definition
     * @param jobs normalized job payload
     * @return folder-aware pipeline detail DTO
     */
    private SyncConfigDTO.ConfigPipelineInfo renderConfigPipelineInfo(PipelineDefinition pipeline, List<SyncJobDefinition> jobs) {
        return new SyncConfigDTO.ConfigPipelineInfo(
                pipeline.getId(),
                pipelineFolderService.renderPublicFolderId(pipeline.getFolderId()),
                pipelineFolderService.buildFolderPath(pipeline.getFolderId()),
                pipeline.getPipelineName(),
                jobs);
    }

}
