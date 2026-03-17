package irispipe.batch.writer;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterUtils;
import org.springframework.jdbc.core.namedparam.ParsedSql;

import irispipe.model.SummaryInfo;
import irispipe.core.utility.SqlSyntaxHelper;

/**
 * Splits one chunk into update and insert subsets based on destination primary
 * keys.
 */
public class BatchUpsertWriter implements ItemWriter<Map<String, Object>> {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final JdbcBatchItemWriter<Map<String, Object>> insertWriter;
    private final JdbcBatchItemWriter<Map<String, Object>> updateWriter;
    private final SqlSyntaxHelper sqlSyntaxHelper;
    private final JdbcTemplate queryTemplate;
    private final String destTable;
    private final SummaryInfo summaryInfo;

    /**
     * Creates the upsert writer.
     *
     * @param insertWriter insert writer
     * @param updateWriter update writer
     * @param sqlSyntaxHelper SQL helper with primary-key metadata
     * @param queryTemplate JDBC template used to probe existing rows
     * @param destTable destination table name
     * @param summaryInfo mutable summary counters
     */
    public BatchUpsertWriter(JdbcBatchItemWriter<Map<String, Object>> insertWriter,
            JdbcBatchItemWriter<Map<String, Object>> updateWriter, SqlSyntaxHelper sqlSyntaxHelper,
            JdbcTemplate queryTemplate, String destTable, SummaryInfo summaryInfo) {
        insertWriter.afterPropertiesSet();
        updateWriter.afterPropertiesSet();
        this.insertWriter = insertWriter;
        this.updateWriter = updateWriter;
        this.sqlSyntaxHelper = sqlSyntaxHelper;
        this.queryTemplate = queryTemplate;
        this.destTable = destTable;
        this.summaryInfo = summaryInfo;
    }

    /**
     * Writes one chunk through upsert splitting logic.
     *
     * @param chunk chunk payload
     * @throws Exception when writing fails
     */
    @Override
    public void write(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        updateOrInsertChunck(chunk);
        logger.info("[BatchUpsertWriter] (processed: {}, updated: {}, inserted: {}) for upsert table: {}",
                summaryInfo.processed.get(), summaryInfo.updated.get(), summaryInfo.inserted.get(), destTable);
    }

    /**
     * Splits one chunk into update and insert subsets.
     *
     * @param chunk chunk payload
     * @throws Exception when writing fails
     */
    private void updateOrInsertChunck(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        List<String> rowList = queryIdentifierList(chunk);
        int foundCount = rowList.size();

        if (foundCount == chunk.size()) {
            updateChunk(chunk);
            return;
        }

        if (foundCount == 0) {
            insertChunk(chunk);
            return;
        }

        logger.debug("[process] execute upsert -> need find items in chunk need update or insert: {}", chunk.size());

        List<String> primaryKeys = sqlSyntaxHelper.primaryColumns;
        Chunk<Map<String, Object>> updateChunk = new Chunk<>();
        Chunk<Map<String, Object>> insertChunk = new Chunk<>();

        chunk.forEach(item -> {
            String itemIdentifier = generateCompositePkIdentifier(item, primaryKeys);
            if (rowList.contains(itemIdentifier)) {
                updateChunk.add(item);
            } else {
                insertChunk.add(item);
            }
        });

        updateChunk(updateChunk);
        insertChunk(insertChunk);
    }

    /**
     * Queries existing primary-key identifiers for the current chunk.
     *
     * @param chunk chunk payload
     * @return list of identifiers already present in the destination table
     */
    private List<String> queryIdentifierList(Chunk<? extends Map<String, Object>> chunk) {
        List<String> primaryKeys = sqlSyntaxHelper.primaryColumns;
        int querySize = chunk.size();
        String queryExistingPrimaryKeysSql = sqlSyntaxHelper.buildExistsQuery(querySize);
        ParsedSql parsedSql = NamedParameterUtils.parseSqlStatement(queryExistingPrimaryKeysSql);
        String sql = NamedParameterUtils.substituteNamedParameters(parsedSql, null);

        List<Object> checkParams = new ArrayList<>();
        chunk.getItems().forEach(item -> {
            for (String primaryKey : primaryKeys) {
                checkParams.add(item.get(primaryKey));
            }
        });

        RowMapper<String> rowMapper = (rs, rowNum) -> {
            Map<String, Object> row = new HashMap<>();
            for (String primaryKey : primaryKeys) {
                row.put(primaryKey, rs.getObject(primaryKey));
            }
            return generateCompositePkIdentifier(row, primaryKeys);
        };

        return queryTemplate.query(sql, rowMapper, checkParams.toArray());
    }

    /**
     * Builds a stable identifier string from primary-key values.
     *
     * @param item row payload
     * @param primaryKeys primary-key column names
     * @return composite primary-key identifier
     */
    private String generateCompositePkIdentifier(Map<String, Object> item, List<String> primaryKeys) {
        StringBuilder sb = new StringBuilder();
        for (String primaryKey : primaryKeys) {
            sb.append(item.getOrDefault(primaryKey, "NULL")).append("|");
        }
        return sb.toString();
    }

    /**
     * Writes the update subset when it is not empty.
     *
     * @param chunk update subset
     * @throws Exception when writing fails
     */
    private void updateChunk(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        if (chunk.isEmpty()) {
            return;
        }

        logger.debug("[process] executing upsert -> update items: {}", chunk.size());
        updateWriter.write(chunk);
        summaryInfo.processed.addAndGet(chunk.size());
        summaryInfo.updated.addAndGet(chunk.size());
    }

    /**
     * Writes the insert subset when it is not empty.
     *
     * @param chunk insert subset
     * @throws Exception when writing fails
     */
    private void insertChunk(Chunk<? extends Map<String, Object>> chunk) throws Exception {
        if (chunk.isEmpty()) {
            return;
        }

        logger.debug("[process] executing upsert -> insert items: {}", chunk.size());
        insertWriter.write(chunk);
        summaryInfo.processed.addAndGet(chunk.size());
        summaryInfo.inserted.addAndGet(chunk.size());
    }
}
