package irispipe.batch.writer;

import java.util.Arrays;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterUtils;
import org.springframework.jdbc.core.namedparam.ParsedSql;

import irispipe.model.SummaryInfo;

/**
 * Writes update batches and derives affected-row counters from JDBC update
 * counts.
 */
public class BatchUpdateWriter extends JdbcBatchItemWriter<Map<String, Object>> {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final String destTable;
    private final SummaryInfo summaryInfo;

    /**
     * Creates the update writer.
     *
     * @param destTable destination table name
     * @param summaryInfo mutable summary counters
     * @param dataSource destination data source
     * @param updateSql update SQL with named parameters
     */
    public BatchUpdateWriter(String destTable, SummaryInfo summaryInfo, DataSource dataSource, String updateSql) {
        this.destTable = destTable;
        this.summaryInfo = summaryInfo;

        super.setDataSource(dataSource);
        ParsedSql parsedSql = NamedParameterUtils.parseSqlStatement(updateSql);
        String sql = NamedParameterUtils.substituteNamedParameters(parsedSql, null);
        super.setSql(sql);
        super.setItemPreparedStatementSetter((item, ps) -> {
            MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
            Object[] args = NamedParameterUtils.buildValueArray(parsedSql, mapSqlParameterSource, null);
            for (int i = 0; i < args.length; i++) {
                Object arg = args[i];
                ps.setObject(i + 1, arg);
            }
        });

        super.setAssertUpdates(false);
        super.afterPropertiesSet();
    }

    /**
     * Writes one update chunk.
     *
     * @param chunk chunk payload
     * @throws Exception when writing fails
     */
    @Override
    public void write(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        super.write(chunk);
    }

    /**
     * Updates summary counters from JDBC update counts.
     *
     * @param updateCounts JDBC update counts
     */
    @Override
    protected void processUpdateCounts(int[] updateCounts) {
        summaryInfo.processed.addAndGet(updateCounts.length);
        long affectedRows = Arrays.stream(updateCounts).filter(count -> count != 0).count();
        summaryInfo.updated.addAndGet(affectedRows);

        logger.info("[BatchUpdateWriter] (processed: {}, updated: {}) for table: {}", summaryInfo.processed.get(),
                summaryInfo.updated.get(), destTable);
    }

}
