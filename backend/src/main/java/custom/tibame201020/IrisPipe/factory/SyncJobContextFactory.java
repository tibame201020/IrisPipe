package custom.tibame201020.IrisPipe.factory;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import com.zaxxer.hikari.HikariDataSource;

import custom.tibame201020.IrisPipe.context.DatabaseContext;
import custom.tibame201020.IrisPipe.context.SyncJobContext;
import custom.tibame201020.IrisPipe.data.SimpleEnum;
import custom.tibame201020.IrisPipe.data.SummaryInfo;
import custom.tibame201020.IrisPipe.data.SyncJob;
import custom.tibame201020.IrisPipe.data.SyncJobProp;
import custom.tibame201020.IrisPipe.data.SimpleEnum.SystemProvideVariable;
import custom.tibame201020.IrisPipe.service.ExecutionRecordService;

@Service
public class SyncJobContextFactory {

    public SyncJobContext initialSyncJobContext(SyncJob syncJob, ExecutionRecordService executionRecordService) {
        int fetchSize = Objects.nonNull(syncJob.getSetting()) ? syncJob.getSetting().fetchSize() : Integer.MAX_VALUE;
        DatabaseContext sourceContext = generDatabaseContext(syncJob.getDatabase().source(), fetchSize);
        DatabaseContext destContext = generDatabaseContext(syncJob.getDatabase().dest(), fetchSize);
        DatabaseContext recordContext = generDatabaseContext(syncJob.getDatabase().record(), fetchSize);

        List<SyncJobProp.Execution> updatedExecutions = syncJob.getExecutions()
                .stream()
                .map(originalExecution -> {
                    String executionName = Objects.isNull(originalExecution.name())
                            ? syncJob.getJobName() + "_" + originalExecution.type()
                            : originalExecution.name();

                    SummaryInfo executionSummaryInfo = new SummaryInfo(executionName, SimpleEnum.SummaryInfoLayer.STEP);

                    List<SyncJobProp.Parameter> parameters = renderSystemProvoderVariable(
                            originalExecution,
                            executionRecordService,
                            Objects.nonNull(recordContext) ? recordContext.getNamedParameterJdbcTemplate() : null,
                            executionName,
                            Objects.nonNull(syncJob.getSetting()) ? syncJob.getSetting().recordTable() : "");

                    return new SyncJobProp.Execution(
                            originalExecution.type(),
                            executionName,
                            originalExecution.sql(),
                            originalExecution.destTable(),
                            parameters,
                            originalExecution.watermarkColumn(),
                            executionSummaryInfo,
                            new HashMap<>());

                }).toList();

        syncJob.setExecutions(updatedExecutions);
        SummaryInfo summaryInfo = new SummaryInfo(syncJob.getJobName(), SimpleEnum.SummaryInfoLayer.JOB);

        return new SyncJobContext(sourceContext, destContext, recordContext, syncJob, summaryInfo);
    }

    private List<SyncJobProp.Parameter> renderSystemProvoderVariable(SyncJobProp.Execution execution,
            ExecutionRecordService executionRecordService, NamedParameterJdbcTemplate namedParameterJdbcTemplate,
            String executionName, String recordTable) {
        List<String> dyamicParameters = Arrays.stream(SimpleEnum.SystemProvideVariable.values()).map(Enum::name)
                .toList();
        return execution.parameters().stream().map(parameter -> {
            if (dyamicParameters.contains(parameter.param())) {
                Object value = executionRecordService.fetchValue(
                        namedParameterJdbcTemplate,
                        recordTable,
                        executionName,
                        executionName,
                        recordTable,
                        SystemProvideVariable.valueOf(parameter.param()));

                if (Objects.nonNull(value)) {
                    return new SyncJobProp.Parameter(parameter.param(), value, parameter.type());
                }
            }
            return parameter;
        })
                .toList();

    }

    private DatabaseContext generDatabaseContext(SyncJobProp.ConnectionInfo connectionInfo, int fetchSize) {
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
