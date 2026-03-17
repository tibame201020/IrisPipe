package irispipe.core.factory;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;

import javax.sql.DataSource;

import org.springframework.stereotype.Service;

import com.zaxxer.hikari.HikariDataSource;

import irispipe.core.utility.BatchIdentityHelper;
import irispipe.infrastructure.context.DatabaseContext;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.infrastructure.service.runtime.ExecutionRecordService;
import irispipe.model.ConnectionInfo;
import irispipe.model.ExecutionStep;
import irispipe.model.JobParameter;
import irispipe.model.SummaryInfo;
import irispipe.model.SummaryInfoLayer;
import irispipe.model.SyncJobDefinition;
import irispipe.model.SystemProvidedVariable;

/**
 * Materializes runtime sync job context objects from persisted job definitions.
 */
@Service
public class SyncJobContextFactory {

    /**
     * Creates the initial sync job context for one logical job definition.
     *
     * @param syncJob logical sync job definition
     * @param executionRecordService execution record lookup helper
     * @return runtime sync job context with materialized execution names and system variables
     */
    public SyncJobContext initialSyncJobContext(SyncJobDefinition syncJob, ExecutionRecordService executionRecordService) {
        int fetchSize = Objects.nonNull(syncJob.getSetting()) ? syncJob.getSetting().fetchSize() : Integer.MAX_VALUE;
        DatabaseContext sourceContext = generateDatabaseContext(syncJob.getDatabase().source(), fetchSize);
        DatabaseContext destContext = generateDatabaseContext(syncJob.getDatabase().dest(), fetchSize);

        List<String> executionNames = BatchIdentityHelper.materializeExecutionNames(
                syncJob.getJobName(),
                syncJob.getExecutions());

        List<ExecutionStep> updatedExecutions = IntStream.range(0, syncJob.getExecutions().size())
                .mapToObj(executionOrder -> {
                    ExecutionStep originalExecution = syncJob.getExecutions().get(executionOrder);
                    String executionName = executionNames.get(executionOrder);
                    SummaryInfo executionSummaryInfo = new SummaryInfo(executionName, SummaryInfoLayer.STEP);

                    List<JobParameter> parameters = renderSystemProvidedVariables(
                            originalExecution,
                            executionRecordService,
                            executionName);

                    return new ExecutionStep(
                            originalExecution.type(),
                            executionName,
                            originalExecution.sql(),
                            originalExecution.destTable(),
                            parameters,
                            originalExecution.watermarkColumn(),
                            executionSummaryInfo,
                            new HashMap<>());

                })
                .toList();

        syncJob.setExecutions(updatedExecutions);
        SummaryInfo summaryInfo = new SummaryInfo(syncJob.getJobName(), SummaryInfoLayer.JOB);

        return new SyncJobContext(sourceContext, destContext, syncJob, summaryInfo);
    }

    /**
     * Replaces system-provided variables with concrete runtime values when
     * available.
     *
     * @param execution logical execution step
     * @param executionRecordService execution record lookup helper
     * @param executionName materialized execution name
     * @return execution parameters with resolved system-provided values
     */
    private List<JobParameter> renderSystemProvidedVariables(ExecutionStep execution,
            ExecutionRecordService executionRecordService, String executionName) {
        List<String> dynamicParameters = Arrays.stream(SystemProvidedVariable.values()).map(Enum::name)
                .toList();
        return execution.parameters().stream().map(parameter -> {
            if (dynamicParameters.contains(parameter.param())) {
                Object value = executionRecordService.fetchValue(
                        executionName,
                        execution.destTable(),
                        execution.watermarkColumn(),
                        SystemProvidedVariable.valueOf(parameter.param()));

                if (Objects.nonNull(value)) {
                    return new JobParameter(parameter.param(), value, parameter.type());
                }
            }
            return parameter;
        })
                .toList();

    }

    /**
     * Creates one database context from connection info.
     *
     * @param connectionInfo connection info, or {@code null}
     * @param fetchSize configured fetch size
     * @return database context, or {@code null} when no connection info exists
     */
    private DatabaseContext generateDatabaseContext(ConnectionInfo connectionInfo, int fetchSize) {
        if (null == connectionInfo) {
            return null;
        }

        DataSource dataSource = createDataSource(
                connectionInfo.driver(),
                connectionInfo.url(),
                connectionInfo.username(),
                connectionInfo.password());

        return new DatabaseContext(dataSource, fetchSize);
    }

    /**
     * Creates the runtime data source used by one database context.
     *
     * @param driverClass JDBC driver class name
     * @param url JDBC URL
     * @param username database username
     * @param password database password
     * @return configured data source
     */
    private DataSource createDataSource(String driverClass, String url, String username, String password) {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setJdbcUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);

        return dataSource;
    }

}
