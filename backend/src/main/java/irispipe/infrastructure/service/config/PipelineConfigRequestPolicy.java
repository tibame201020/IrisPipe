package irispipe.infrastructure.service.config;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import irispipe.model.PipelineStageDefinition;
import irispipe.model.SyncJobDefinition;

/**
 * Applies request-level normalization and shallow config policy for pipeline
 * config operations.
 */
@Service
public class PipelineConfigRequestPolicy {
    public static final String DEFAULT_STAGE_NAME = "default";
    private static final String IMPLICIT_STAGE_PREFIX = "__implicit_stage_";

    /**
     * Validates that the job payload exists and each job definition is valid.
     *
     * @param stages incoming stage ordering payload
     * @param syncJobs incoming job payload
     * @return the same job payload after validation
     */
    public List<SyncJobDefinition> validateSyncJobs(List<String> stages, List<SyncJobDefinition> syncJobs) {
        if (syncJobs == null || syncJobs.isEmpty()) {
            throw new IllegalArgumentException("jobs can not be empty");
        }

        boolean useImplicitLinearStages = (stages == null || stages.isEmpty())
                && syncJobs.stream().noneMatch(this::hasExplicitStageName);
        LinkedHashMap<String, Integer> stageOrderByName = resolveStageOrder(stages, syncJobs);
        List<SyncJobDefinition> normalizedSyncJobs = new ArrayList<>(syncJobs.size());
        for (int index = 0; index < syncJobs.size(); index++) {
            normalizedSyncJobs.add(normalizeSyncJob(
                    syncJobs.get(index),
                    stageOrderByName,
                    useImplicitLinearStages ? index : null));
        }

        validateStageOrdering(normalizedSyncJobs);
        normalizedSyncJobs.forEach(SyncJobDefinition::validate);
        return normalizedSyncJobs;
    }

    /**
     * Renders the ordered stage names from normalized job payload.
     *
     * @param syncJobs normalized job payload
     * @return ordered distinct stage names
     */
    public List<String> renderStageNames(List<SyncJobDefinition> syncJobs) {
        List<String> stageNames = renderStages(syncJobs).stream()
                .map(PipelineStageDefinition::stageName)
                .toList();

        if (stageNames.stream().allMatch(stageName -> stageName.startsWith(IMPLICIT_STAGE_PREFIX))) {
            return List.of();
        }
        return stageNames;
    }

    /**
     * Groups normalized jobs into stage-first domain projections.
     *
     * @param syncJobs normalized job payload
     * @return ordered stage projections
     */
    public List<PipelineStageDefinition> renderStages(List<SyncJobDefinition> syncJobs) {
        return syncJobs.stream()
                .collect(Collectors.toMap(
                        SyncJobDefinition::getStageName,
                        syncJob -> new PipelineStageDefinition(
                                syncJob.getStageName(),
                                syncJob.getStageSequenceOrder(),
                                new ArrayList<>(List.of(syncJob))),
                        (left, right) -> new PipelineStageDefinition(
                                left.stageName(),
                                left.stageSequenceOrder(),
                                mergeStageJobs(left.jobs(), right.jobs())),
                        LinkedHashMap::new))
                .values()
                .stream()
                .sorted(java.util.Comparator.comparing(PipelineStageDefinition::stageSequenceOrder))
                .peek(PipelineStageDefinition::validate)
                .toList();
    }

    /**
     * Validates and trims a user-facing pipeline name.
     *
     * @param pipelineName incoming pipeline name
     * @return normalized pipeline name
     */
    public String normalizePipelineName(String pipelineName) {
        if (pipelineName == null || pipelineName.isBlank()) {
            throw new IllegalArgumentException("pipelineName can not be blank");
        }
        if (pipelineName.contains("/") || pipelineName.contains("\\")) {
            throw new IllegalArgumentException("pipelineName contains unsupported characters");
        }
        return pipelineName.trim();
    }

    /**
     * Resolves the import format from the explicit request value or file name.
     *
     * @param format optional explicit format
     * @param file uploaded config file
     * @return normalized import format
     */
    public String resolveImportFormat(String format, MultipartFile file) {
        if (format != null && !format.isBlank()) {
            return normalizeImportFormat(format);
        }

        String originalFilename = file.getOriginalFilename();
        if (originalFilename != null && !originalFilename.isBlank()) {
            return normalizeImportFormat(FilenameUtils.getExtension(originalFilename));
        }

        throw new IllegalArgumentException("format is required when file name has no extension");
    }

    /**
     * Normalizes a supported import format value.
     *
     * @param format explicit format or file extension
     * @return normalized import format
     */
    private String normalizeImportFormat(String format) {
        String normalizedFormat = format.trim().toLowerCase();
        return switch (normalizedFormat) {
            case "yaml", "yml" -> "yaml";
            case "json" -> "json";
            default -> throw new IllegalArgumentException("Unsupported import format: " + format);
        };
    }

    private LinkedHashMap<String, Integer> resolveStageOrder(List<String> stages, List<SyncJobDefinition> syncJobs) {
        LinkedHashMap<String, Integer> stageOrderByName = new LinkedHashMap<>();
        if (stages != null && !stages.isEmpty()) {
            for (String stageName : stages) {
                String normalizedStageName = normalizeStageName(stageName);
                if (stageOrderByName.putIfAbsent(normalizedStageName, stageOrderByName.size()) != null) {
                    throw new IllegalArgumentException("stage names can not contain duplicates");
                }
            }
        } else if (syncJobs.stream().anyMatch(this::hasExplicitStageName)) {
            for (SyncJobDefinition syncJob : syncJobs) {
                if (!hasExplicitStageName(syncJob)) {
                    continue;
                }
                String normalizedStageName = normalizeStageName(syncJob.getStageName());
                stageOrderByName.putIfAbsent(normalizedStageName, stageOrderByName.size());
            }
        } else {
            for (int index = 0; index < syncJobs.size(); index++) {
                stageOrderByName.put(renderImplicitStageName(index), index);
            }
        }

        if (stageOrderByName.isEmpty()) {
            stageOrderByName.put(DEFAULT_STAGE_NAME, 0);
        }
        return stageOrderByName;
    }

    private SyncJobDefinition normalizeSyncJob(SyncJobDefinition syncJob, Map<String, Integer> stageOrderByName,
            Integer implicitStageIndex) {
        String normalizedStageName = syncJob.getStageName();
        if (normalizedStageName == null || normalizedStageName.isBlank()) {
            if (implicitStageIndex != null) {
                normalizedStageName = renderImplicitStageName(implicitStageIndex);
            } else if (stageOrderByName.size() == 1) {
                normalizedStageName = stageOrderByName.keySet().iterator().next();
            } else {
                throw new IllegalArgumentException("job stageName is required when multiple stages are declared");
            }
        } else {
            normalizedStageName = normalizeStageName(normalizedStageName);
        }

        Integer stageSequenceOrder = stageOrderByName.get(normalizedStageName);
        if (stageSequenceOrder == null) {
            throw new IllegalArgumentException("job stageName is not declared in stages: " + normalizedStageName);
        }

        return new SyncJobDefinition(
                normalizedStageName,
                stageSequenceOrder,
                syncJob.getJobName(),
                syncJob.getExecutions(),
                syncJob.getSetting(),
                syncJob.getDatabase());
    }

    private void validateStageOrdering(List<SyncJobDefinition> syncJobs) {
        int lastStageSequenceOrder = -1;
        for (SyncJobDefinition syncJob : syncJobs) {
            if (syncJob.getStageSequenceOrder() < lastStageSequenceOrder) {
                throw new IllegalArgumentException("jobs must be grouped by stage order");
            }
            lastStageSequenceOrder = syncJob.getStageSequenceOrder();
        }
    }

    private String normalizeStageName(String stageName) {
        if (stageName == null || stageName.isBlank()) {
            throw new IllegalArgumentException("stageName can not be blank");
        }
        String normalizedStageName = stageName.trim();
        if (normalizedStageName.contains("/") || normalizedStageName.contains("\\")) {
            throw new IllegalArgumentException("stageName contains unsupported characters");
        }
        return normalizedStageName;
    }

    private boolean hasExplicitStageName(SyncJobDefinition syncJob) {
        return syncJob.getStageName() != null && !syncJob.getStageName().isBlank();
    }

    private String renderImplicitStageName(int index) {
        return IMPLICIT_STAGE_PREFIX + (index + 1);
    }

    private List<SyncJobDefinition> mergeStageJobs(List<SyncJobDefinition> left, List<SyncJobDefinition> right) {
        List<SyncJobDefinition> merged = new ArrayList<>(left.size() + right.size());
        merged.addAll(left);
        merged.addAll(right);
        return List.copyOf(merged);
    }
}
