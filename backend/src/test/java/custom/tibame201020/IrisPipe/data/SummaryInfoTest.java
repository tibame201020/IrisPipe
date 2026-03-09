package custom.tibame201020.IrisPipe.data;

import org.junit.jupiter.api.Test;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import static org.assertj.core.api.Assertions.assertThat;

class SummaryInfoTest {

    @Test
    void constructor_shouldInitializeAllCountersToZero() {
        SummaryInfo info = new SummaryInfo("test", SimpleEnum.SummaryInfoLayer.STEP);
        assertThat(info.processed.get()).isZero();
        assertThat(info.inserted.get()).isZero();
        assertThat(info.updated.get()).isZero();
        assertThat(info.deleted.get()).isZero();
        assertThat(info.total.get()).isZero();
    }

    @Test
    void constructor_shouldSetNameAndLayer() {
        SummaryInfo info = new SummaryInfo("myJob", SimpleEnum.SummaryInfoLayer.JOB);
        assertThat(info.name).isEqualTo("myJob");
        assertThat(info.layer).isEqualTo(SimpleEnum.SummaryInfoLayer.JOB);
    }

    @Test
    void atomicCounters_shouldSupportConcurrentUpdates() throws InterruptedException {
        SummaryInfo info = new SummaryInfo("test", SimpleEnum.SummaryInfoLayer.STEP);
        int threads = 10;
        int incrementsPerThread = 1000;
        ExecutorService executor = Executors.newFixedThreadPool(threads);

        for (int i = 0; i < threads; i++) {
            executor.submit(() -> {
                for (int j = 0; j < incrementsPerThread; j++) {
                    info.processed.addAndGet(1);
                }
            });
        }

        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);
        assertThat(info.processed.get()).isEqualTo(threads * incrementsPerThread);
    }
}
