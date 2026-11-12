param([ValidateSet('Compile','Install','Test')][string]$Action='Compile')
$ErrorActionPreference='Stop'
$noticeRoot=Split-Path -Parent $PSScriptRoot
Push-Location $noticeRoot
try {
    $noticeClasspath='WebRoot/WEB-INF/classes;WebRoot/WEB-INF/lib/*;D:/Tomcat/apache-tomcat-7.0.109/lib/servlet-api.jar'
    if ($Action -eq 'Compile') {
        $noticeSources=Get-ChildItem src/avicit/pb/membernotice -Recurse -Filter *.java | Select-Object -ExpandProperty FullName
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $noticeClasspath -d WebRoot/WEB-INF/classes $noticeSources
        if ($LASTEXITCODE -ne 0) {throw 'Member notice Java compilation failed'}
        $noticeMapperDir='WebRoot/WEB-INF/classes/avicit/pb/membernotice/dao'
        New-Item -ItemType Directory -Force $noticeMapperDir | Out-Null
        Copy-Item src/avicit/pb/membernotice/dao/NoticePermissionMapper.xml $noticeMapperDir
        Write-Host 'DYFSYZ classes and mapper compiled. Restart PB before runtime verification.'
    } else {
        New-Item -ItemType Directory -Force temp/membernotice-tests | Out-Null
        $noticeSource=if($Action -eq 'Install'){'scripts/MemberNoticeInstall.java'}else{'scripts/MemberNoticeRulesTest.java'}
        & D:/jdk1.8/bin/javac.exe -encoding UTF-8 -cp $noticeClasspath -d temp/membernotice-tests $noticeSource
        if ($LASTEXITCODE -ne 0) {throw 'Member notice utility compilation failed'}
        $noticeMain=if($Action -eq 'Install'){'MemberNoticeInstall'}else{'MemberNoticeRulesTest'}
        & D:/jdk1.8/bin/java.exe '-Dfile.encoding=UTF-8' -cp "temp/membernotice-tests;$noticeClasspath" $noticeMain
        if ($LASTEXITCODE -ne 0) {throw "Member notice $Action failed"}
    }
} finally {Pop-Location}
