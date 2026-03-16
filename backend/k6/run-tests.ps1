param(
    [string[]]$Suite = @("all"),
    [switch]$ListSuites
)

Write-Host "=========================================="
Write-Host "      Starting IrisPipe K6 E2E Tests       "
Write-Host "=========================================="

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$testCatalog = [ordered]@{
    "config-validation" = @{ Name = "Config API Validation"; Path = "config/sync-config-validation.test.js" }
    "config-crud" = @{ Name = "Config API CRUD"; Path = "config/sync-config.test.js" }
    "pipeline-api" = @{ Name = "Sync Pipeline API"; Path = "pipeline/sync-pipeline-api.test.js" }
    "pipeline-async-trigger" = @{ Name = "Sync Pipeline Async Trigger"; Path = "pipeline/sync-pipeline-async.test.js" }
    "pipeline-resume-job" = @{ Name = "Sync Pipeline Resume"; Path = "pipeline/sync-pipeline-resume.test.js" }
    "pipeline-resume-chunk" = @{ Name = "Sync Pipeline Chunk Resume"; Path = "pipeline/sync-pipeline-resume-chunk.test.js" }
    "pipeline-resume-async" = @{ Name = "Sync Pipeline Async Resume"; Path = "pipeline/sync-pipeline-resume-async.test.js" }
    "pipeline-resume-mixed" = @{ Name = "Sync Pipeline Mixed Resume"; Path = "pipeline/sync-pipeline-resume-mixed.test.js" }
    "pipeline-stop-sync-chunk" = @{ Name = "Sync Pipeline Sync Stop Chunk"; Path = "pipeline/sync-pipeline-stop-chunk-sync.test.js" }
    "pipeline-stop-sync-job" = @{ Name = "Sync Pipeline Sync Stop Job"; Path = "pipeline/sync-pipeline-stop-job-sync.test.js" }
    "pipeline-stop-sync-mixed" = @{ Name = "Sync Pipeline Sync Stop Mixed"; Path = "pipeline/sync-pipeline-stop-mixed-sync.test.js" }
    "pipeline-stop-async-chunk" = @{ Name = "Sync Pipeline Async Stop Chunk"; Path = "pipeline/sync-pipeline-stop-chunk-async.test.js" }
    "pipeline-stop-async-job" = @{ Name = "Sync Pipeline Async Stop Job"; Path = "pipeline/sync-pipeline-stop-job-async.test.js" }
    "pipeline-stop-async-mixed" = @{ Name = "Sync Pipeline Async Stop Mixed"; Path = "pipeline/sync-pipeline-stop-mixed-async.test.js" }
    "pipeline-delete-guard" = @{ Name = "Sync Pipeline Delete Guard"; Path = "pipeline/sync-pipeline-delete-guard-async.test.js" }
    "pipeline-observe-timeline" = @{ Name = "Sync Pipeline Attempt Timeline"; Path = "pipeline/sync-pipeline-observe-timeline.test.js" }
    "pipeline-observability-smoke" = @{ Name = "Sync Pipeline Observability Smoke"; Path = "pipeline/sync-pipeline-observability-smoke.test.js" }
    "pipeline-rerun-sync" = @{ Name = "Sync Pipeline Rerun"; Path = "pipeline/sync-pipeline-rerun.test.js" }
    "pipeline-rerun-async" = @{ Name = "Sync Pipeline Async Rerun"; Path = "pipeline/sync-pipeline-rerun-async.test.js" }
    "pipeline-control-flow" = @{ Name = "Sync Pipeline Async Control Flow"; Path = "pipeline/sync-pipeline-control-flow-async.test.js" }
    "runtime-success" = @{ Name = "Sync Pipeline Success"; Path = "runtime/sync-job-success.test.js" }
    "runtime-fail-atomic" = @{ Name = "Sync Pipeline Fail/Atomic"; Path = "runtime/sync-job-fail.test.js" }
    "runtime-chunk-commit" = @{ Name = "Sync Pipeline Chunk Commit"; Path = "runtime/sync-job-chunk-fail.test.js" }
    "runtime-no-watermark" = @{ Name = "Sync Pipeline No Watermark"; Path = "runtime/sync-job-no-watermark.test.js" }
    "runtime-multi-step" = @{ Name = "Sync Pipeline Multi-step Operations"; Path = "runtime/sync-job-multi-step.test.js" }
    "runtime-composite-pk" = @{ Name = "Sync Pipeline Composite PK"; Path = "runtime/sync-upsert-composite.test.js" }
    "runtime-system-variables" = @{ Name = "Sync Pipeline System Variables"; Path = "runtime/sync-system-variable.test.js" }
}

$suiteCatalog = [ordered]@{
    "config" = @(
        "config-validation",
        "config-crud"
    )
    "pipeline-core" = @(
        "pipeline-api",
        "pipeline-async-trigger"
    )
    "pipeline-resume" = @(
        "pipeline-resume-job",
        "pipeline-resume-chunk",
        "pipeline-resume-async",
        "pipeline-resume-mixed"
    )
    "pipeline-stop" = @(
        "pipeline-stop-sync-chunk",
        "pipeline-stop-sync-job",
        "pipeline-stop-sync-mixed",
        "pipeline-stop-async-chunk",
        "pipeline-stop-async-job",
        "pipeline-stop-async-mixed"
    )
    "pipeline-operator-safety" = @(
        "pipeline-delete-guard"
    )
    "pipeline-observability" = @(
        "pipeline-observe-timeline",
        "pipeline-observability-smoke"
    )
    "pipeline-rerun" = @(
        "pipeline-rerun-sync",
        "pipeline-rerun-async"
    )
    "pipeline-control-loop" = @(
        "pipeline-control-flow"
    )
    "runtime" = @(
        "runtime-success",
        "runtime-fail-atomic",
        "runtime-chunk-commit",
        "runtime-no-watermark",
        "runtime-multi-step",
        "runtime-composite-pk",
        "runtime-system-variables"
    )
}

if ($ListSuites) {
    Write-Host "Available suites:"
    foreach ($suiteName in $suiteCatalog.Keys) {
        $testNames = $suiteCatalog[$suiteName] | ForEach-Object { $testCatalog[$_].Name }
        Write-Host "- $suiteName"
        foreach ($testName in $testNames) {
            Write-Host "  - $testName"
        }
    }
    exit 0
}

$requestedSuites = if ($Suite.Count -eq 0 -or $Suite -contains "all") {
    @($suiteCatalog.Keys)
} else {
    $Suite
}

$unknownSuites = $requestedSuites | Where-Object { -not $suiteCatalog.Contains($_) }
if ($unknownSuites.Count -gt 0) {
    Write-Host "Unknown suite(s): $($unknownSuites -join ', ')" -ForegroundColor Red
    Write-Host "Use -ListSuites to show valid suite names." -ForegroundColor Red
    exit 1
}

$selectedTestKeys = [System.Collections.Generic.List[string]]::new()
foreach ($suiteName in $requestedSuites) {
    foreach ($testKey in $suiteCatalog[$suiteName]) {
        if (-not $selectedTestKeys.Contains($testKey)) {
            $selectedTestKeys.Add($testKey)
        }
    }
}

$tests = foreach ($testKey in $selectedTestKeys) {
    $testCatalog[$testKey]
}

Write-Host "Selected suites: $($requestedSuites -join ', ')"
Write-Host "Selected tests: $($tests.Count)"

$PORT = "8080"
$IRISPIPE_BASE_URL = "http://localhost:$PORT/api/v1"
$env:IRISPIPE_BASE_URL = $IRISPIPE_BASE_URL

Write-Host "[WAITING] Checking if backend is running on $IRISPIPE_BASE_URL ..."
try {
    $response = Invoke-WebRequest -Uri "$IRISPIPE_BASE_URL/sync-config" -Method Get -UseBasicParsing -ErrorAction Stop
    Write-Host "[OK] Backend is reachable!"
} catch {
    Write-Host "[ERROR] Backend is not reachable (on port $PORT). Start Spring Boot first, then rerun this script." -ForegroundColor Red
    exit 1
}

$failedTests = @()

foreach ($test in $tests) {
    Write-Host "`n---> Running $($test.Name) ($($test.Path))"
    & k6 run $test.Path
    if ($LASTEXITCODE -ne 0) {
        $failedTests += $test.Name
    }
}

Write-Host "`n=========================================="
if ($failedTests.Count -eq 0) {
    Write-Host "            Testing Complete!            "
    Write-Host "=========================================="
    exit 0
}

Write-Host " Failed suites: $($failedTests -join ', ')" -ForegroundColor Red
Write-Host "=========================================="
exit 1
