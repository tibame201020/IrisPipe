package irispipe.model;

/**
 * Runtime tuning settings for one logical sync job.
 *
 * @param fetchSize read fetch size
 * @param batchSize write batch size
 * @param deleteThreshold delete threshold
 * @param atomicLevel restart and commit granularity
 */
public record JobSetting(
        Integer fetchSize,
        Integer batchSize,
        Integer deleteThreshold,
        AtomicLevel atomicLevel) {
}
