package custom.tibame201020.IrisPipe.context;

import java.util.Objects;

import custom.tibame201020.IrisPipe.data.SummaryInfo;
import custom.tibame201020.IrisPipe.data.SyncJob;

public record SyncJobContext(
        DatabaseContext sourceContext,
        DatabaseContext destContext,
        SyncJob syncJob,
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
