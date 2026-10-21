param([ValidateSet('build','test','install','seed','clean','verify')][string]$Action = 'verify')
$ErrorActionPreference = 'Stop'
Push-Location (Split-Path $PSScriptRoot -Parent)
try {
    $classpath = 'WebRoot/WEB-INF/classes;WebRoot/WEB-INF/lib/*'
    if ($Action -eq 'build') {
        $summarySources = @(Get-ChildItem src/avicit/pb/yzbyts/summary -Recurse -Filter '*.java' | ForEach-Object FullName)
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $classpath -d WebRoot/WEB-INF/classes $summarySources
        if ($LASTEXITCODE -ne 0) { throw 'YZBYTS summary compilation failed' }
        return
    }
    if (-not $env:PB_TEST_DB_PASSWORD) { throw 'Set PB_TEST_DB_PASSWORD for the local DM schema first.' }
    if ($Action -eq 'test') {
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $classpath -d scripts scripts/YzbytsSummaryTest.java
        if ($LASTEXITCODE -ne 0) { throw 'YZBYTS summary test compilation failed' }
        & D:/jdk1.8/bin/java.exe '-Dfile.encoding=UTF-8' -cp "scripts;$classpath" YzbytsSummaryTest test
        if ($LASTEXITCODE -ne 0) { throw 'YZBYTS summary tests failed' }
        return
    }
    & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $classpath -d scripts scripts/YzbytsSummaryFixture.java
    if ($LASTEXITCODE -ne 0) { throw 'YZBYTS summary fixture compilation failed' }
    & D:/jdk1.8/bin/java.exe '-Dfile.encoding=UTF-8' -cp "scripts;$classpath" YzbytsSummaryFixture $Action
    if ($LASTEXITCODE -ne 0) { throw "YZBYTS summary fixture failed: $Action" }
} finally { Pop-Location }
