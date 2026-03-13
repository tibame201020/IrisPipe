Write-Host "=========================================="
Write-Host "      Starting IrisPipe K6 E2E Tests       "
Write-Host "=========================================="

$ErrorActionPreference = "Stop"

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
    @{ Name = "Config API Validation"; Path = "sync-config-validation.test.js" },
    @{ Name = "Config API CRUD"; Path = "sync-config.test.js" },
    @{ Name = "Sync Pipeline API"; Path = "sync-pipeline-api.test.js" },
    @{ Name = "Sync Pipeline Async Trigger"; Path = "sync-pipeline-async.test.js" },
    @{ Name = "Sync Pipeline Success"; Path = "sync-job-success.test.js" },
    @{ Name = "Sync Pipeline Fail/Atomic"; Path = "sync-job-fail.test.js" },
    @{ Name = "Sync Pipeline Chunk Commit"; Path = "sync-job-chunk-fail.test.js" },
    @{ Name = "Sync Pipeline No Watermark"; Path = "sync-job-no-watermark.test.js" },
    @{ Name = "Sync Pipeline Multi-step Operations"; Path = "sync-job-multi-step.test.js" },
    @{ Name = "Sync Pipeline Composite PK"; Path = "sync-upsert-composite.test.js" },
    @{ Name = "Sync Pipeline System Variables"; Path = "sync-system-variable.test.js" }
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
