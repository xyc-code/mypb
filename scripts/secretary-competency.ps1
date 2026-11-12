param([ValidateSet('Compile','Install','Test')][string]$Action='Compile')
$ErrorActionPreference='Stop'
$compRoot=Split-Path -Parent $PSScriptRoot
Push-Location $compRoot
try {
    $compClasspath='WebRoot/WEB-INF/classes;WebRoot/WEB-INF/lib/*;D:/Tomcat/apache-tomcat-7.0.109/lib/servlet-api.jar'
    if ($Action -eq 'Compile') {
        $compSources=Get-ChildItem src/avicit/pb/competency -Recurse -Filter *.java | Select-Object -ExpandProperty FullName
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $compClasspath -d WebRoot/WEB-INF/classes $compSources
        if ($LASTEXITCODE -ne 0) {throw 'Competency Java compilation failed'}
        New-Item -ItemType Directory -Force WebRoot/WEB-INF/classes/avicit/pb/competency/dao | Out-Null
        Copy-Item src/avicit/pb/competency/dao/CompetencyPermissionMapper.xml WebRoot/WEB-INF/classes/avicit/pb/competency/dao/
        Write-Host 'Competency classes compiled. Restart Tomcat and Redis before runtime verification.'
    } else {
        New-Item -ItemType Directory -Force temp/competency-tests | Out-Null
        $compMain=if($Action -eq 'Install'){'CompetencyInstall'}else{'CompetencyRulesTest'}
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $compClasspath -d temp/competency-tests "scripts/$compMain.java"
        if ($LASTEXITCODE -ne 0) {throw 'Competency utility compilation failed'}
        & D:/jdk1.8/bin/java.exe '-Dfile.encoding=UTF-8' -cp "temp/competency-tests;$compClasspath" $compMain
        if ($LASTEXITCODE -ne 0) {throw "Competency $Action failed"}
    }
} finally {Pop-Location}
