Write-Host "=========================================="
Write-Host "      Starting IrisPipe K6 E2E Tests       "
Write-Host "=========================================="

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

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

$tests = @(
    @{ Name = "Config API Validation"; Path = "config/sync-config-validation.test.js" },
    @{ Name = "Config API CRUD"; Path = "config/sync-config.test.js" },
    @{ Name = "Sync Pipeline API"; Path = "pipeline/sync-pipeline-api.test.js" },
    @{ Name = "Sync Pipeline Async Trigger"; Path = "pipeline/sync-pipeline-async.test.js" },
    @{ Name = "Sync Pipeline Resume"; Path = "pipeline/sync-pipeline-resume.test.js" },
    @{ Name = "Sync Pipeline Chunk Resume"; Path = "pipeline/sync-pipeline-resume-chunk.test.js" },
    @{ Name = "Sync Pipeline Async Resume"; Path = "pipeline/sync-pipeline-resume-async.test.js" },
    @{ Name = "Sync Pipeline Mixed Resume"; Path = "pipeline/sync-pipeline-resume-mixed.test.js" },
    @{ Name = "Sync Pipeline Sync Stop Chunk"; Path = "pipeline/sync-pipeline-stop-chunk-sync.test.js" },
    @{ Name = "Sync Pipeline Sync Stop Job"; Path = "pipeline/sync-pipeline-stop-job-sync.test.js" },
    @{ Name = "Sync Pipeline Sync Stop Mixed"; Path = "pipeline/sync-pipeline-stop-mixed-sync.test.js" },
    @{ Name = "Sync Pipeline Async Stop Chunk"; Path = "pipeline/sync-pipeline-stop-chunk-async.test.js" },
    @{ Name = "Sync Pipeline Async Stop Job"; Path = "pipeline/sync-pipeline-stop-job-async.test.js" },
    @{ Name = "Sync Pipeline Async Stop Mixed"; Path = "pipeline/sync-pipeline-stop-mixed-async.test.js" },
    @{ Name = "Sync Pipeline Rerun"; Path = "pipeline/sync-pipeline-rerun.test.js" },
    @{ Name = "Sync Pipeline Async Rerun"; Path = "pipeline/sync-pipeline-rerun-async.test.js" },
    @{ Name = "Sync Pipeline Async Control Flow"; Path = "pipeline/sync-pipeline-control-flow-async.test.js" },
    @{ Name = "Sync Pipeline Success"; Path = "runtime/sync-job-success.test.js" },
    @{ Name = "Sync Pipeline Fail/Atomic"; Path = "runtime/sync-job-fail.test.js" },
    @{ Name = "Sync Pipeline Chunk Commit"; Path = "runtime/sync-job-chunk-fail.test.js" },
    @{ Name = "Sync Pipeline No Watermark"; Path = "runtime/sync-job-no-watermark.test.js" },
    @{ Name = "Sync Pipeline Multi-step Operations"; Path = "runtime/sync-job-multi-step.test.js" },
    @{ Name = "Sync Pipeline Composite PK"; Path = "runtime/sync-upsert-composite.test.js" },
    @{ Name = "Sync Pipeline System Variables"; Path = "runtime/sync-system-variable.test.js" }
)

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
