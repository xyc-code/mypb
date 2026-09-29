param([ValidateSet('build', 'test')][string]$Action = 'test')
$ErrorActionPreference = 'Stop'
Push-Location (Split-Path $PSScriptRoot -Parent)
try {
    $fzClasspath = 'WebRoot/WEB-INF/classes;WebRoot/WEB-INF/lib/*'
    $fzSources = @(Get-ChildItem src/avicit/pb/fzdy -Recurse -Filter '*.java' | ForEach-Object FullName)
    & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $fzClasspath -d WebRoot/WEB-INF/classes $fzSources
    if ($LASTEXITCODE -ne 0) { throw 'FZDY compilation failed' }
    $fzConfig = 'WebRoot/WEB-INF/classes/fzdy-conversion.properties'
    if (-not (Test-Path $fzConfig)) { Copy-Item src/fzdy-conversion.properties $fzConfig }
    if ($Action -eq 'test') {
        if (-not $env:PB_TEST_DB_PASSWORD) { throw 'Set PB_TEST_DB_PASSWORD for the local DJ schema.' }
        New-Item -ItemType Directory -Force temp/fzdy-tests | Out-Null
        Set-Content temp/fzdy-tests/fzdy-conversion.properties 'viewCode=TEST_FZDY' -Encoding ASCII
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $fzClasspath -d temp/fzdy-tests scripts/FzdyConversionTest.java
        if ($LASTEXITCODE -ne 0) { throw 'FZDY test compilation failed' }
        & D:/jdk1.8/bin/java.exe '-Dfile.encoding=UTF-8' -cp "temp/fzdy-tests;$fzClasspath" FzdyConversionTest
        if ($LASTEXITCODE -ne 0) { throw 'FZDY tests failed' }
    }
} finally { Pop-Location }
