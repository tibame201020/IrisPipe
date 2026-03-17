package irispipe.infrastructure.service.config;

import java.util.ArrayList;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import irispipe.infrastructure.entity.config.PipelineConnectionRole;
import irispipe.infrastructure.entity.config.PipelineDefinition;
import irispipe.infrastructure.entity.config.PipelineExecutionDefinition;
import irispipe.infrastructure.entity.config.PipelineExecutionParameter;
import irispipe.infrastructure.entity.config.PipelineJobConnection;
import irispipe.infrastructure.entity.config.PipelineJobDefinition;
import irispipe.infrastructure.repo.config.PipelineExecutionDefinitionRepo;
import irispipe.infrastructure.repo.config.PipelineExecutionParameterRepo;
import irispipe.infrastructure.repo.config.PipelineJobConnectionRepo;
import irispipe.infrastructure.repo.config.PipelineJobDefinitionRepo;
import irispipe.infrastructure.service.folder.PipelineFolderService;
import irispipe.model.ConnectionInfo;
import irispipe.model.DatabaseConfig;
import irispipe.model.ExecutionStep;
import irispipe.model.JobParameter;
import irispipe.model.JobSetting;
import irispipe.model.SyncJobDefinition;
import irispipe.model.dto.SyncConfigDTO;

/**
 * Rebuilds config read models from persisted pipeline rows.
 */
@Service
public class PipelineConfigReadModelService {
    private final PipelineJobDefinitionRepo pipelineJobDefinitionRepo;
    private final PipelineJobConnectionRepo pipelineJobConnectionRepo;
    private final PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo;
    private final PipelineExecutionParameterRepo pipelineExecutionParameterRepo;
    private final PipelineFolderService pipelineFolderService;
    private final ObjectMapper objectMapper;

    /**
     * Creates the read-model service with pipeline repositories and JSON deserialization support.
     *
     * @param pipelineJobDefinitionRepo pipeline job repository
     * @param pipelineJobConnectionRepo pipeline job connection repository
     * @param pipelineExecutionDefinitionRepo pipeline execution repository
     * @param pipelineExecutionParameterRepo pipeline execution parameter repository
     * @param pipelineFolderService folder and folder-path helper service
     * @param objectMapper JSON serializer for persisted parameter values
     */
    public PipelineConfigReadModelService(PipelineJobDefinitionRepo pipelineJobDefinitionRepo,
            PipelineJobConnectionRepo pipelineJobConnectionRepo,
            PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo,
            PipelineExecutionParameterRepo pipelineExecutionParameterRepo,
            PipelineFolderService pipelineFolderService,
            @Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.pipelineJobDefinitionRepo = pipelineJobDefinitionRepo;
        this.pipelineJobConnectionRepo = pipelineJobConnectionRepo;
        this.pipelineExecutionDefinitionRepo = pipelineExecutionDefinitionRepo;
        this.pipelineExecutionParameterRepo = pipelineExecutionParameterRepo;
        this.pipelineFolderService = pipelineFolderService;
        this.objectMapper = objectMapper;
    }

    /**
     * Rebuilds normalized job definitions from persisted pipeline rows.
     *
     * @param pipelineId pipeline id
     * @return normalized job definitions ordered by job sequence
     */
    public List<SyncJobDefinition> renderSyncJobs(Long pipelineId) {
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
     * Builds the public config detail payload from persisted pipeline rows.
     *
     * @param pipeline persisted pipeline definition
     * @param jobs normalized job payload
     * @return folder-aware pipeline detail DTO
     */
    public SyncConfigDTO.ConfigPipelineInfo renderConfigPipelineInfo(PipelineDefinition pipeline, List<SyncJobDefinition> jobs) {
        return new SyncConfigDTO.ConfigPipelineInfo(
                pipeline.getId(),
                pipelineFolderService.renderPublicFolderId(pipeline.getFolderId()),
                pipelineFolderService.buildFolderPath(pipeline.getFolderId()),
                pipeline.getPipelineName(),
                jobs);
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
}
