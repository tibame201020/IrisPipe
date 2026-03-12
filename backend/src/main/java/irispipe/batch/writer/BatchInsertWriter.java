package irispipe.batch.writer;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.database.JdbcBatchItemWriter;

import irispipe.model.SummaryInfo;

public class BatchInsertWriter implements ItemWriter<Map<String, Object>> {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final JdbcBatchItemWriter<Map<String, Object>> writer;
    private final String destTable;
    private final SummaryInfo summaryInfo;

    public BatchInsertWriter(JdbcBatchItemWriter<Map<String, Object>> writer, String destTable, SummaryInfo summaryInfo) {
        writer.afterPropertiesSet();
        this.writer = writer;
        this.destTable = destTable;
        this.summaryInfo = summaryInfo;
    }

    @Override
    public void write(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        writer.write(chunk);
        summaryInfo.inserted.addAndGet(chunk.size());
        logger.info("[BatchInsertWriter] processed: {} insert for table: {}", summaryInfo.inserted.get(), destTable);
    }

}
