package irispipe.batch.builder;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import javax.sql.DataSource;

import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.JdbcCursorItemReader;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.database.builder.JdbcCursorItemReaderBuilder;
import org.springframework.jdbc.core.ColumnMapRowMapper;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterUtils;
import org.springframework.jdbc.core.namedparam.ParsedSql;
import org.springframework.stereotype.Component;

import irispipe.model.JobParameter;
import irispipe.core.utility.CollectionHelper;

/**
 * Builds Spring Batch reader and writer beans from runtime execution metadata.
 */
@Component
public class BatchBeanBuilder {

    /**
     * Builds a cursor reader for one SQL statement and parameter set.
     *
     * @param dataSource source data source
     * @param readerName logical reader name
     * @param querySql query SQL
     * @param parameters SQL parameters
     * @param fetchSize JDBC fetch size
     * @return configured cursor reader
     */
    public JdbcCursorItemReader<Map<String, Object>> creatJdbcCursorItemReader(DataSource dataSource, String readerName,
            String querySql, List<JobParameter> parameters, int fetchSize) {
        ParsedSql parsedSql = NamedParameterUtils.parseSqlStatement(querySql);
        MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
        parameters
                .forEach(parameter -> mapSqlParameterSource.addValue(parameter.param(), parameter.getRenderedValue()));
        Object[] params = NamedParameterUtils.buildValueArray(parsedSql, mapSqlParameterSource, null);
        List<Object> flattenParams = CollectionHelper.flatternArray(params);
        String sql = NamedParameterUtils.substituteNamedParameters(parsedSql, mapSqlParameterSource);

        PreparedStatementSetter preparedStatementSetter = ps -> {
            AtomicInteger atomicInteger = new AtomicInteger(0);
            flattenParams.forEach(param -> {
                try {
                    ps.setObject(atomicInteger.incrementAndGet(), param);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        };

        return new JdbcCursorItemReaderBuilder<Map<String, Object>>()
                .name("reader-" + readerName)
                .dataSource(dataSource)
                .sql(sql)
                .preparedStatementSetter(preparedStatementSetter)
                .fetchSize(fetchSize)
                .rowMapper(new ColumnMapRowMapper())
                .verifyCursorPosition(false)
                .build();
    }

    /**
     * Builds a batch writer for one insert or update SQL statement.
     *
     * @param dataSource destination data source
     * @param insertOrUpdateSql SQL statement with named parameters
     * @return configured batch writer
     */
    public JdbcBatchItemWriter<Map<String, Object>> createJdbcBatchItemWriter(DataSource dataSource,
            String insertOrUpdateSql) {
        ParsedSql parsedSql = NamedParameterUtils.parseSqlStatement(insertOrUpdateSql);
        String sql = NamedParameterUtils.substituteNamedParameters(parsedSql, null);

        return new JdbcBatchItemWriterBuilder<Map<String, Object>>()
                .dataSource(dataSource)
                .sql(sql)
                .itemPreparedStatementSetter((item, ps) -> {
                    MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource().addValues(item);
                    Object[] args = NamedParameterUtils.buildValueArray(parsedSql, mapSqlParameterSource, null);
                    for (int i = 0; i < args.length; i++) {
                        Object arg = args[i];
                        ps.setObject(i + 1, arg);
                    }
                })
                .build();
    }

}
