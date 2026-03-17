package irispipe.core.utility;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.micrometer.common.util.StringUtils;
import irispipe.model.ExecutionStep;
import irispipe.model.ExecutionType;

/**
 * Renders stable batch job and step identifiers from logical pipeline metadata.
 */
public final class BatchIdentityHelper {
    public static final int BATCH_STEP_NAME_MAX_LENGTH = 100;

    /**
     * Prevents instantiation of the batch identity helper.
     */
    private BatchIdentityHelper() {
    }

    /**
     * Materializes execution names for one job, deriving names for unnamed steps
     * and resolving duplicates.
     *
     * @param jobName logical job name
     * @param executions logical execution steps
     * @return ordered execution names aligned with the input list
     */
    public static List<String> materializeExecutionNames(String jobName, List<ExecutionStep> executions) {
        Map<ExecutionType, Integer> unnamedTypeTotals = new HashMap<>();
        executions.stream()
                .filter(execution -> StringUtils.isBlank(execution.name()))
                .forEach(execution -> unnamedTypeTotals.merge(execution.type(), 1, Integer::sum));

        Map<ExecutionType, Integer> unnamedTypeOrdinals = new HashMap<>();
        List<String> baseNames = java.util.stream.IntStream.range(0, executions.size())
                .mapToObj(executionOrder -> {
                    ExecutionStep execution = executions.get(executionOrder);
                    if (StringUtils.isNotBlank(execution.name())) {
                        return execution.name().trim();
                    }

                    int total = unnamedTypeTotals.getOrDefault(execution.type(), 0);
                    if (total <= 1) {
                        return jobName + "_" + execution.type();
                    }

                    int ordinal = unnamedTypeOrdinals.merge(execution.type(), 1, Integer::sum);
                    return jobName + "_" + execution.type() + "_" + ordinal;
                })
                .toList();

        Map<String, Integer> baseNameTotals = new HashMap<>();
        baseNames.forEach(baseName -> baseNameTotals.merge(baseName, 1, Integer::sum));

        Map<String, Integer> baseNameOrdinals = new HashMap<>();
        return baseNames.stream()
                .map(baseName -> {
                    if (baseNameTotals.getOrDefault(baseName, 0) <= 1) {
                        return baseName;
                    }

                    int ordinal = baseNameOrdinals.merge(baseName, 1, Integer::sum);
                    return baseName + "_" + ordinal;
                })
                .toList();
    }

    /**
     * Renders one bounded Spring Batch step name from an execution name and step
     * suffix.
     *
     * @param executionName materialized execution name
     * @param stepSuffix step type suffix
     * @return bounded step name
     */
    public static String renderStepName(String executionName, String stepSuffix) {
        return boundIdentifier(executionName + "_" + stepSuffix, BATCH_STEP_NAME_MAX_LENGTH);
    }

    /**
     * Bounds one identifier to the requested length and appends a short hash when
     * truncation is required.
     *
     * @param value source identifier
     * @param maxLength maximum identifier length
     * @return bounded identifier
     */
    static String boundIdentifier(String value, int maxLength) {
        if (value.length() <= maxLength) {
            return value;
        }

        String hash = renderShortHash(value);
        int prefixLength = Math.max(1, maxLength - hash.length() - 1);
        return value.substring(0, prefixLength) + "_" + hash;
    }

    /**
     * Renders a short deterministic hash for one identifier value.
     *
     * @param value source identifier
     * @return short lowercase hash string
     */
    private static String renderShortHash(String value) {
        try {
            byte[] digest = MessageDigest.getInstance("SHA-256")
                    .digest(value.getBytes(StandardCharsets.UTF_8));
            return java.util.HexFormat.of().formatHex(digest, 0, 8);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to render identifier hash", e);
        }
    }
}
