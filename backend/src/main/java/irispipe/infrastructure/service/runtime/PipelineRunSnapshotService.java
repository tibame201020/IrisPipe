package irispipe.infrastructure.service.runtime;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import irispipe.core.utility.BatchIdentityHelper;
import irispipe.infrastructure.entity.runtime.PipelineRunSnapshot;
import irispipe.infrastructure.repo.runtime.PipelineRunSnapshotRepo;
import irispipe.model.ConnectionInfo;
import irispipe.model.DatabaseConfig;
import irispipe.model.ExecutionStep;
import irispipe.model.JobParameter;
import irispipe.model.JobSetting;
import irispipe.model.SyncJobDefinition;

/**
 * Materializes, persists, and reloads pipeline run snapshots.
 */
@Service
public class PipelineRunSnapshotService {
    private static final int SNAPSHOT_SCHEMA_VERSION = 1;

    private final PipelineRunSnapshotRepo pipelineRunSnapshotRepo;
    private final ObjectMapper objectMapper;

    /**
     * Creates the snapshot service.
     *
     * @param pipelineRunSnapshotRepo snapshot repository
     * @param objectMapper JSON object mapper
     */
    public PipelineRunSnapshotService(PipelineRunSnapshotRepo pipelineRunSnapshotRepo,
            @Qualifier("objectMapper") ObjectMapper objectMapper) {
        this.pipelineRunSnapshotRepo = pipelineRunSnapshotRepo;
        this.objectMapper = objectMapper;
    }

    /**
     * Creates and persists a snapshot for one logical run.
     *
     * @param pipelineRunId logical run id
     * @param pipelineContentHash current pipeline content hash
     * @param syncJobs normalized job payload
     * @return materialized snapshot payload
     */
    public List<SyncJobDefinition> createSnapshot(Long pipelineRunId, String pipelineContentHash, List<SyncJobDefinition> syncJobs) {
        List<SyncJobDefinition> materializedSyncJobs = materializeSyncJobs(syncJobs);
        saveSnapshot(pipelineRunId, SNAPSHOT_SCHEMA_VERSION, pipelineContentHash, serialize(materializedSyncJobs));
        return materializedSyncJobs;
    }

    /**
     * Loads snapshot jobs for one logical run.
     *
     * @param pipelineRunId logical run id
     * @return materialized snapshot payload
     */
    public List<SyncJobDefinition> getSnapshotSyncJobs(Long pipelineRunId) {
        PipelineRunSnapshot snapshot = getSnapshot(pipelineRunId);
        return deserialize(snapshot.getMaterializedJobJson());
    }

    /**
     * Copies one persisted snapshot onto another logical run.
     *
     * @param sourcePipelineRunId source logical run id
     * @param targetPipelineRunId target logical run id
     * @return copied snapshot payload
     */
    public List<SyncJobDefinition> copySnapshot(Long sourcePipelineRunId, Long targetPipelineRunId) {
        PipelineRunSnapshot sourceSnapshot = getSnapshot(sourcePipelineRunId);
        saveSnapshot(
                targetPipelineRunId,
                sourceSnapshot.getSnapshotSchemaVersion(),
                sourceSnapshot.getPipelineContentHash(),
                sourceSnapshot.getMaterializedJobJson());
        return deserialize(sourceSnapshot.getMaterializedJobJson());
    }

    /**
     * Deletes the snapshot row for one logical run when it exists.
     *
     * @param pipelineRunId logical run id
     */
    public void deleteSnapshot(Long pipelineRunId) {
        pipelineRunSnapshotRepo.findByPipelineRunId(pipelineRunId)
                .ifPresent(pipelineRunSnapshotRepo::delete);
    }

    private PipelineRunSnapshot getSnapshot(Long pipelineRunId) {
        return pipelineRunSnapshotRepo.findByPipelineRunId(pipelineRunId)
                .orElseThrow(() -> new IllegalArgumentException("Pipeline run snapshot not found: " + pipelineRunId));
    }

    private void saveSnapshot(Long pipelineRunId, Integer snapshotSchemaVersion, String pipelineContentHash,
            String materializedJobJson) {
        PipelineRunSnapshot snapshot = new PipelineRunSnapshot();
        snapshot.setPipelineRunId(pipelineRunId);
        snapshot.setSnapshotSchemaVersion(snapshotSchemaVersion);
        snapshot.setPipelineContentHash(pipelineContentHash);
        snapshot.setMaterializedJobJson(materializedJobJson);
        snapshot.setCreatedAt(LocalDateTime.now());
        pipelineRunSnapshotRepo.save(snapshot);
    }

    private List<SyncJobDefinition> materializeSyncJobs(List<SyncJobDefinition> syncJobs) {
        return syncJobs.stream()
                .map(this::materializeSyncJob)
                .toList();
    }

    private SyncJobDefinition materializeSyncJob(SyncJobDefinition syncJob) {
        List<String> executionNames = BatchIdentityHelper.materializeExecutionNames(
                syncJob.getJobName(),
                syncJob.getExecutions());

        List<ExecutionStep> materializedExecutions = IntStream.range(0, syncJob.getExecutions().size())
                .mapToObj(executionOrder -> {
                    ExecutionStep execution = syncJob.getExecutions().get(executionOrder);
                    return new ExecutionStep(
                            execution.type(),
                            executionNames.get(executionOrder),
                            execution.sql(),
                            execution.destTable(),
                            copyParameters(execution.parameters()),
                            execution.watermarkColumn(),
                            null,
                            null);
                })
                .toList();

        return new SyncJobDefinition(
                syncJob.getJobName(),
                materializedExecutions,
                copySetting(syncJob.getSetting()),
                copyDatabaseConfig(syncJob.getDatabase()));
    }

    private List<JobParameter> copyParameters(List<JobParameter> parameters) {
        return parameters.stream()
                .map(parameter -> new JobParameter(
                        parameter.param(),
                        parameter.value(),
                        parameter.type()))
                .toList();
    }

    private JobSetting copySetting(JobSetting setting) {
        return new JobSetting(
                setting.fetchSize(),
                setting.batchSize(),
                setting.deleteThreshold(),
                setting.atomicLevel());
    }

    private DatabaseConfig copyDatabaseConfig(DatabaseConfig databaseConfig) {
        if (databaseConfig == null) {
            return null;
        }

        return new DatabaseConfig(
                copyConnectionInfo(databaseConfig.source()),
                copyConnectionInfo(databaseConfig.dest()));
    }

    private ConnectionInfo copyConnectionInfo(ConnectionInfo connectionInfo) {
        if (connectionInfo == null) {
            return null;
        }

        return new ConnectionInfo(
                connectionInfo.driver(),
                connectionInfo.url(),
                connectionInfo.username(),
                connectionInfo.password());
    }

    private String serialize(List<SyncJobDefinition> syncJobs) {
        try {
            return objectMapper.writeValueAsString(syncJobs);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to serialize pipeline run snapshot", e);
        }
    }

    private List<SyncJobDefinition> deserialize(String materializedJobJson) {
        try {
            return objectMapper.readValue(materializedJobJson, new TypeReference<List<SyncJobDefinition>>() {
            });
        } catch (Exception e) {
            throw new IllegalStateException("Failed to deserialize pipeline run snapshot", e);
        }
    }
}
