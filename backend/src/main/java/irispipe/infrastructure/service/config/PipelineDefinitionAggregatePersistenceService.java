package irispipe.infrastructure.service.config;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import irispipe.infrastructure.entity.config.PipelineConnectionRole;
import irispipe.infrastructure.entity.config.PipelineExecutionDefinition;
import irispipe.infrastructure.entity.config.PipelineExecutionParameter;
import irispipe.infrastructure.entity.config.PipelineJobConnection;
import irispipe.infrastructure.entity.config.PipelineJobDefinition;
import irispipe.infrastructure.repo.config.PipelineExecutionDefinitionRepo;
import irispipe.infrastructure.repo.config.PipelineExecutionParameterRepo;
import irispipe.infrastructure.repo.config.PipelineJobConnectionRepo;
import irispipe.infrastructure.repo.config.PipelineJobDefinitionRepo;
import irispipe.model.ConnectionInfo;
import irispipe.model.DatabaseConfig;
import irispipe.model.ExecutionStep;
import irispipe.model.JobParameter;
import irispipe.model.JobSetting;
import irispipe.model.SyncJobDefinition;

/**
 * Persists and removes the child aggregate rows that belong to one pipeline
 * definition.
 */
@Service
public class PipelineDefinitionAggregatePersistenceService {
    private final PipelineJobDefinitionRepo pipelineJobDefinitionRepo;
    private final PipelineJobConnectionRepo pipelineJobConnectionRepo;
    private final PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo;
    private final PipelineExecutionParameterRepo pipelineExecutionParameterRepo;
    private final PipelineParameterValueSerializationService pipelineParameterValueSerializationService;

    /**
     * Creates the aggregate persistence service.
     *
     * @param pipelineJobDefinitionRepo pipeline job repository
     * @param pipelineJobConnectionRepo pipeline job connection repository
     * @param pipelineExecutionDefinitionRepo pipeline execution repository
     * @param pipelineExecutionParameterRepo pipeline execution parameter repository
     * @param pipelineParameterValueSerializationService parameter serialization helper
     */
    public PipelineDefinitionAggregatePersistenceService(PipelineJobDefinitionRepo pipelineJobDefinitionRepo,
            PipelineJobConnectionRepo pipelineJobConnectionRepo,
            PipelineExecutionDefinitionRepo pipelineExecutionDefinitionRepo,
            PipelineExecutionParameterRepo pipelineExecutionParameterRepo,
            PipelineParameterValueSerializationService pipelineParameterValueSerializationService) {
        this.pipelineJobDefinitionRepo = pipelineJobDefinitionRepo;
        this.pipelineJobConnectionRepo = pipelineJobConnectionRepo;
        this.pipelineExecutionDefinitionRepo = pipelineExecutionDefinitionRepo;
        this.pipelineExecutionParameterRepo = pipelineExecutionParameterRepo;
        this.pipelineParameterValueSerializationService = pipelineParameterValueSerializationService;
    }

    /**
     * Replaces all child rows for one pipeline definition.
     *
     * @param pipelineId target pipeline id
     * @param syncJobs replacement job payload
     */
    @Transactional
    public void replacePipelineJobs(Long pipelineId, List<SyncJobDefinition> syncJobs) {
        deletePipelineChildren(pipelineId);
        persistJobs(pipelineId, syncJobs);
    }

    /**
     * Persists job, connection, execution, and parameter rows for one pipeline.
     *
     * @param pipelineId target pipeline id
     * @param syncJobs normalized job payload
     */
    public void persistJobs(Long pipelineId, List<SyncJobDefinition> syncJobs) {
        for (int jobOrder = 0; jobOrder < syncJobs.size(); jobOrder++) {
            SyncJobDefinition syncJob = syncJobs.get(jobOrder);
            JobSetting setting = syncJob.getSetting();

            PipelineJobDefinition jobDefinition = new PipelineJobDefinition();
            jobDefinition.setPipelineId(pipelineId);
            jobDefinition.setSequenceOrder(jobOrder);
            jobDefinition.setStageName(syncJob.getStageName());
            jobDefinition.setStageSequenceOrder(syncJob.getStageSequenceOrder());
            jobDefinition.setJobName(syncJob.getJobName());
            jobDefinition.setFetchSize(setting.fetchSize());
            jobDefinition.setBatchSize(setting.batchSize());
            jobDefinition.setDeleteThreshold(setting.deleteThreshold());
            jobDefinition.setAtomicLevel(setting.atomicLevel());
            PipelineJobDefinition savedJob = pipelineJobDefinitionRepo.save(jobDefinition);

            persistJobConnections(savedJob.getId(), syncJob.getDatabase());
            persistExecutions(savedJob.getId(), syncJob.getExecutions());
        }
    }

    /**
     * Deletes all child rows that belong to one pipeline definition.
     *
     * @param pipelineId target pipeline id
     */
    public void deletePipelineChildren(Long pipelineId) {
        List<PipelineJobDefinition> jobDefinitions = pipelineJobDefinitionRepo
                .findByPipelineIdOrderByStageSequenceOrderAscSequenceOrderAsc(pipelineId);
        if (jobDefinitions.isEmpty()) {
            return;
        }

        List<Long> jobIds = jobDefinitions.stream().map(PipelineJobDefinition::getId).toList();
        List<PipelineExecutionDefinition> executionDefinitions = pipelineExecutionDefinitionRepo
                .findByJobIdInOrderByJobIdAscSequenceOrderAsc(jobIds);
        if (!executionDefinitions.isEmpty()) {
            List<Long> executionIds = executionDefinitions.stream().map(PipelineExecutionDefinition::getId).toList();
            List<PipelineExecutionParameter> executionParameters = pipelineExecutionParameterRepo
                    .findByExecutionIdInOrderByExecutionIdAscSequenceOrderAsc(executionIds);
            if (!executionParameters.isEmpty()) {
                pipelineExecutionParameterRepo.deleteAllInBatch(executionParameters);
            }
            pipelineExecutionDefinitionRepo.deleteAllInBatch(executionDefinitions);
        }

        List<PipelineJobConnection> pipelineJobConnections = pipelineJobConnectionRepo.findByJobIdIn(jobIds);
        if (!pipelineJobConnections.isEmpty()) {
            pipelineJobConnectionRepo.deleteAllInBatch(pipelineJobConnections);
        }

        pipelineJobDefinitionRepo.deleteAllInBatch(jobDefinitions);
    }

    /**
     * Persists source and destination connection rows for one job.
     *
     * @param jobId target job id
     * @param databaseConfig database config payload
     */
    private void persistJobConnections(Long jobId, DatabaseConfig databaseConfig) {
        if (databaseConfig == null) {
            return;
        }

        saveJobConnection(jobId, PipelineConnectionRole.SOURCE, databaseConfig.source());
        saveJobConnection(jobId, PipelineConnectionRole.DEST, databaseConfig.dest());
    }

    /**
     * Persists one connection row when the connection payload exists.
     *
     * @param jobId target job id
     * @param connectionRole source or destination role
     * @param connectionInfo connection payload
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
     * Persists execution rows for one job.
     *
     * @param jobId target job id
     * @param executions normalized execution payload
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
     * Persists parameter rows for one execution step.
     *
     * @param executionId target execution id
     * @param parameters normalized parameter payload
     */
    private void persistParameters(Long executionId, List<JobParameter> parameters) {
        for (int parameterOrder = 0; parameterOrder < parameters.size(); parameterOrder++) {
            JobParameter parameter = parameters.get(parameterOrder);
            PipelineExecutionParameter executionParameter = new PipelineExecutionParameter();
            executionParameter.setExecutionId(executionId);
            executionParameter.setSequenceOrder(parameterOrder);
            executionParameter.setParamName(parameter.param());
            executionParameter.setParamValue(
                    pipelineParameterValueSerializationService.renderParameterValue(parameter.value()));
            executionParameter.setParamType(parameter.type());
            pipelineExecutionParameterRepo.save(executionParameter);
        }
    }
}
