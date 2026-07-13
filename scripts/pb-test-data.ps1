param(
    [ValidateSet("seed", "verify", "clean")]
    [string]$Action = "seed"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$driver = "D:\dm8\dmdbms\drivers\jdbc\DmJdbcDriver8.jar"
$javaFile = Join-Path $PSScriptRoot "SeedLolTestUsers.java"
$classFile = Join-Path $PSScriptRoot "SeedLolTestUsers.class"

if (-not (Test-Path -LiteralPath $driver)) {
    throw "DM JDBC driver not found: $driver"
}

Push-Location $repoRoot
try {
    # Compile before every run so the Java source and class file stay in sync.
    javac -encoding UTF-8 -cp $driver $javaFile
    if ($LASTEXITCODE -ne 0) {
        throw "Test data program compile failed"
    }

    java "-Dfile.encoding=UTF-8" -cp "$PSScriptRoot;$driver" SeedLolTestUsers $Action
    if ($LASTEXITCODE -ne 0) {
        throw "Test data program run failed: $Action"
    }
}
finally {
    Remove-Item -LiteralPath $classFile -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath (Join-Path $PSScriptRoot "SeedLolTestUsers`$Champion.class") -ErrorAction SilentlyContinue
    Pop-Location
}
