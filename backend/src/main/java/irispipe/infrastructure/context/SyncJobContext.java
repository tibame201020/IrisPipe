package irispipe.infrastructure.context;

import java.util.Objects;

import irispipe.model.SummaryInfo;
import irispipe.model.SyncJobDefinition;

public record SyncJobContext(
        DatabaseContext sourceContext,
        DatabaseContext destContext,
        SyncJobDefinition syncJob,
        SummaryInfo summaryInfo) implements AutoCloseable {

    @Override
    public void close() {
        if (Objects.nonNull(sourceContext)) {
            sourceContext.close();
        }
        if (Objects.nonNull(destContext)) {
            destContext.close();
        }
    }
}
