package irispipe.infrastructure.context;

import java.util.Objects;

import irispipe.model.SummaryInfo;
import irispipe.model.SyncJobDefinition;

/**
 * Holds the runtime contexts and summary metadata required to execute one sync
 * job.
 *
 * @param sourceContext source database context
 * @param destContext destination database context
 * @param syncJob logical sync job definition
 * @param summaryInfo summary metadata for the job
 */
public record SyncJobContext(
        DatabaseContext sourceContext,
        DatabaseContext destContext,
        SyncJobDefinition syncJob,
        SummaryInfo summaryInfo) implements AutoCloseable {

    /**
     * Closes any opened source and destination database contexts.
     */
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
