package irispipe.model;

public record JobSetting(
        Integer fetchSize,
        Integer batchSize,
        Integer deleteThreshold,
        AtomicLevel atomicLevel) {
}
