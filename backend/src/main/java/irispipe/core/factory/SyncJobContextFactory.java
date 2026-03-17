package irispipe.core.factory;

import com.zaxxer.hikari.HikariDataSource;
import irispipe.core.utility.BatchIdentityHelper;
import irispipe.infrastructure.context.DatabaseContext;
import irispipe.infrastructure.context.SyncJobContext;
import irispipe.infrastructure.service.runtime.ExecutionRecordService;
import irispipe.model.*;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;

@Service
public class SyncJobContextFactory {

    public SyncJobContext initialSyncJobContext(SyncJobDefinition syncJob, ExecutionRecordService executionRecordService) {
        int fetchSize = Objects.nonNull(syncJob.getSetting()) ? syncJob.getSetting().fetchSize() : Integer.MAX_VALUE;
        DatabaseContext sourceContext = generDatabaseContext(syncJob.getDatabase().source(), fetchSize);
        DatabaseContext destContext = generDatabaseContext(syncJob.getDatabase().dest(), fetchSize);

        List<String> executionNames = BatchIdentityHelper.materializeExecutionNames(
                syncJob.getJobName(),
                syncJob.getExecutions());

        List<ExecutionStep> updatedExecutions = IntStream.range(0, syncJob.getExecutions().size())
                .mapToObj(executionOrder -> {
                    ExecutionStep originalExecution = syncJob.getExecutions().get(executionOrder);
                    String executionName = executionNames.get(executionOrder);
                    SummaryInfo executionSummaryInfo = new SummaryInfo(executionName, SummaryInfoLayer.STEP);

                    List<JobParameter> parameters = renderSystemProvoderVariable(
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

    private List<JobParameter> renderSystemProvoderVariable(ExecutionStep execution,
                                                            ExecutionRecordService executionRecordService, String executionName) {
        List<String> dyamicParameters = Arrays.stream(SystemProvideVariable.values()).map(Enum::name)
                .toList();
        return execution.parameters().stream().map(parameter -> {
                    if (dyamicParameters.contains(parameter.param())) {
                        Object value = executionRecordService.fetchValue(
                                executionName,
                                execution.destTable(),
                                execution.watermarkColumn(),
                                SystemProvideVariable.valueOf(parameter.param()));

                        if (Objects.nonNull(value)) {
                            return new JobParameter(parameter.param(), value, parameter.type());
                        }
                    }
                    return parameter;
                })
                .toList();

    }

    private DatabaseContext generDatabaseContext(ConnectionInfo connectionInfo, int fetchSize) {
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

    private DataSource createDataSource(String driverClass, String url, String username, String password) {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setJdbcUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);

        return dataSource;
    }

}
