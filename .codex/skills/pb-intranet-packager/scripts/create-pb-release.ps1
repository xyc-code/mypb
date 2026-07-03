param(
  [string]$ProjectRoot = (Resolve-Path ".").Path,
  [string]$BaselinePath = "D:\pb-release\baseline\pb-baseline.json",
  [string]$ReleaseRoot = "D:\pb-release"
)

$ErrorActionPreference = "Stop"

function Convert-ToRelativePath([string]$Base, [string]$Path) {
  $baseFull = [System.IO.Path]::GetFullPath($Base).TrimEnd('\') + '\'
  $pathFull = [System.IO.Path]::GetFullPath($Path)
  $baseUri = [System.Uri]::new($baseFull)
  $pathUri = [System.Uri]::new($pathFull)
  return [System.Uri]::UnescapeDataString($baseUri.MakeRelativeUri($pathUri).ToString()).Replace('/', '\')
}

function Test-ExcludedPath([string]$RelativePath) {
  $p = $RelativePath -replace '/', '\'
  $lower = $p.ToLowerInvariant()
  if ($p -like ".codex\skills\pb-intranet-packager\*") { return $true }
  if ($p -like ".git\*") { return $true }
  if ($p -like "target\*") { return $true }
  if ($p -like "build\*") { return $true }
  if ($p -like "logs\*") { return $true }
  if ($p -like "temp\*") { return $true }
  if ($p -like "tmp\*") { return $true }
  if ($lower -like "webroot\web-inf\classes\*.class" -or $lower -like "webroot\web-inf\classes\*\*.class") { return $true }
  if ($p -ieq "WebRoot\static\js\platform\sysmessage\js\messageDialog.js") { return $true }
  return $false
}

function Get-ModuleFolderName([string]$RelativePath) {
  $p = ($RelativePath -replace '/', '\').ToLowerInvariant()
  if ($p -like "*excelexportconfig*" -or $p -like "*excel-export-config*" -or $p -like "*multisubtableexcelexporter*" -or $p -like "*pb_excel_export_config.sql") {
    return "Excel多子表导出"
  }
  if ($p -like "*dwworkplan3*" -or $p -like "*dw_work_plan_3*") {
    return "党委计划3.0"
  }
  if ($p -like "*portalbusinesstodo*" -or $p -like "*portaltaskdao*" -or $p -like "*portaltaskmapper.xml" -or $p -like "*portaltaskservice*" -or $p -like "*portaluniontaskcontroller*" -or $p -like "*portal_business_todo.sql") {
    return "门户待办推送"
  }
  return "其他变更"
}

function Get-FileKind([string]$RelativePath) {
  $p = $RelativePath -replace '/', '\'
  $lower = $p.ToLowerInvariant()
  if ($lower -like "webroot\web-inf\classes\jdbc.properties") { return "blocked-config" }
  if ($lower -like "webroot\web-inf\classes\platform6.properties") { return "blocked-config" }
  if ($lower -like "webroot\web-inf\classes\rest-client.xml") { return "blocked-config" }
  if ($lower -like "webroot\web-inf\classes\spring-redis.xml") { return "blocked-config" }
  if ($lower -like "webroot\web-inf\classes\spring-product-mq.xml") { return "blocked-config" }
  if ($lower -like "webroot\web-inf\classes\spring-consumer-mq.xml") { return "blocked-config" }
  if ($lower -like "webroot\web-inf\classes\service\application-service.xml") { return "blocked-config" }
  if ($lower -eq "db\imp_exp.dmp") { return "blocked-dump" }
  if ($lower -like "webroot\web-inf\classes\*.properties" -or $lower -like "webroot\web-inf\classes\*\*.properties") { return "risk-config" }
  if ($lower -like "webroot\web-inf\lib\*.jar") { return "risk-jar" }
  if ($lower -like "src\*.java" -or $lower -like "src\*\*.java" -or $lower -like "src\*.xml" -or $lower -like "src\*\*.xml") { return "package-file" }
  if ($lower -like "src\*") { return "source-reference" }
  if ($lower -like "webroot\*.jsp" -or $lower -like "webroot\*\*.jsp") { return "package-file" }
  if ($lower -like "webroot\*.js" -or $lower -like "webroot\*\*.js") { return "package-file" }
  if ($lower -like "webroot\*.css" -or $lower -like "webroot\*\*.css") { return "package-file" }
  if ($lower -like "webroot\web-inf\classes\*mapper.xml" -or $lower -like "webroot\web-inf\classes\*\*mapper.xml") { return "mapper-xml" }
  if ($lower -like "*.sql") { return "sql-review" }
  return "review"
}

function Get-CurrentSnapshot([string]$Project) {
  Get-ChildItem -LiteralPath $Project -Recurse -File -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
      $rel = Convert-ToRelativePath $Project $_.FullName
      if (-not (Test-ExcludedPath $rel)) {
        [pscustomobject]@{
          path = $rel
          hash = (Get-FileHash -Algorithm SHA256 -LiteralPath $_.FullName).Hash
          size = $_.Length
          lastWriteTime = $_.LastWriteTime.ToString("s")
          fullName = $_.FullName
          kind = Get-FileKind $rel
        }
      }
    } |
    Sort-Object path
}

function Copy-WithRelativePath([string]$SourceFullName, [string]$BaseOutput, [string]$RelativePath) {
  $dest = Join-Path $BaseOutput $RelativePath
  $destDir = Split-Path -Parent $dest
  New-Item -ItemType Directory -Force -Path $destDir | Out-Null
  Copy-Item -LiteralPath $SourceFullName -Destination $dest -Force
}

$project = (Resolve-Path -LiteralPath $ProjectRoot).Path
if (-not (Test-Path -LiteralPath $BaselinePath)) {
  throw "Baseline not found: $BaselinePath. Run update-baseline.ps1 after confirming the current state represents the intranet baseline."
}

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$releaseDir = Join-Path $ReleaseRoot $timestamp
$filesDir = Join-Path $releaseDir "按模块分开"
New-Item -ItemType Directory -Force -Path $filesDir | Out-Null

$baseline = Get-Content -LiteralPath $BaselinePath -Raw | ConvertFrom-Json
$baselineMap = @{}
foreach ($file in @($baseline.files)) { $baselineMap[$file.path] = $file }

$current = @(Get-CurrentSnapshot $project)
$currentMap = @{}
foreach ($file in $current) { $currentMap[$file.path] = $file }

$changes = New-Object System.Collections.Generic.List[object]
foreach ($file in $current) {
  if (-not $baselineMap.ContainsKey($file.path)) {
    $status = "added"
  } elseif ($baselineMap[$file.path].hash -ne $file.hash) {
    $status = "modified"
  } else {
    continue
  }
  $changes.Add([pscustomobject]@{
    status = $status
    path = $file.path
    kind = $file.kind
    hash = $file.hash
    size = $file.size
    lastWriteTime = $file.lastWriteTime
  })
}

foreach ($old in @($baseline.files)) {
  if (-not $currentMap.ContainsKey($old.path)) {
    $changes.Add([pscustomobject]@{
      status = "deleted"
      path = $old.path
      kind = Get-FileKind $old.path
      hash = $old.hash
      size = $old.size
      lastWriteTime = $old.lastWriteTime
    })
  }
}

$changesSorted = @($changes | Sort-Object path)
$packaged = @()
$risk = @()
$blocked = @()
$deleted = @()
$sql = @()

foreach ($change in $changesSorted) {
  if ($change.status -eq "deleted") {
    $deleted += $change
    continue
  }
  $file = $currentMap[$change.path]
  switch ($change.kind) {
    "package-file" {
      Copy-WithRelativePath $file.fullName (Join-Path $filesDir (Get-ModuleFolderName $change.path)) $change.path
      $packaged += $change
    }
    "mapper-xml" {
      Copy-WithRelativePath $file.fullName (Join-Path $filesDir (Get-ModuleFolderName $change.path)) $change.path
      $packaged += $change
    }
    "sql-review" {
      Copy-WithRelativePath $file.fullName (Join-Path $filesDir (Get-ModuleFolderName $change.path)) $change.path
      $sql += $change
    }
    "blocked-config" {
      $blocked += $change
    }
    "blocked-dump" {
      $blocked += $change
    }
    default {
      $risk += $change
    }
  }
}

$javaWarnings = @()

$dbKeywords = "create table|alter table|drop table|create view|replace view|sys_menu|sys_resource|sys_lookup|sys_permission|bpm_|eform_|qrtz_|sys_job|doccenter|attachment"
$dbSuspects = @($changesSorted | Where-Object { $_.path -match $dbKeywords -or $_.path.ToLowerInvariant().EndsWith(".sql") })

$manifest = [pscustomobject]@{
  releaseDir = $releaseDir
  projectRoot = $project
  baselinePath = $BaselinePath
  generatedAt = (Get-Date).ToString("s")
  counts = [pscustomobject]@{
    changes = $changesSorted.Count
    packaged = @($packaged).Count
    risk = @($risk).Count
    blocked = @($blocked).Count
    deleted = @($deleted).Count
    sql = @($sql).Count
  }
  changes = @($changesSorted)
  packaged = @($packaged)
  risk = @($risk)
  blocked = @($blocked)
  deleted = @($deleted)
  sql = @($sql)
  javaWarnings = @($javaWarnings)
  dbSuspects = @($dbSuspects)
}
$manifest | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $releaseDir "manifest.json") -Encoding UTF8

$bt = [char]96
$manifestMd = @()
$manifestMd += "# PB Intranet Release Manifest"
$manifestMd += ""
$manifestMd += "- Release: $bt$releaseDir$bt"
$manifestMd += "- Project: $bt$project$bt"
$manifestMd += "- Baseline: $bt$BaselinePath$bt"
$manifestMd += "- Generated: $(Get-Date -Format s)"
$manifestMd += ""
$manifestMd += "## Counts"
$manifestMd += ""
$manifestMd += "- Changed files: $($changesSorted.Count)"
$manifestMd += "- Packaged files: $(@($packaged).Count)"
$manifestMd += "- Risk/review files: $(@($risk).Count)"
$manifestMd += "- Blocked/excluded files: $(@($blocked).Count)"
$manifestMd += "- Deleted files: $(@($deleted).Count)"
$manifestMd += "- SQL review files: $(@($sql).Count)"
$manifestMd += ""
$manifestMd += "## Files To Copy"
$manifestMd += ""
if (@($packaged).Count -eq 0) { $manifestMd += "- None" } else { foreach ($item in $packaged) { $manifestMd += "- [$($item.status)] $bt$($item.path)$bt" } }
$manifestMd += ""
$manifestMd += "## SQL Files For Review"
$manifestMd += ""
if (@($sql).Count -eq 0) { $manifestMd += "- None" } else { foreach ($item in $sql) { $manifestMd += "- [$($item.status)] $bt$($item.path)$bt" } }
$manifestMd += ""
$manifestMd += "## Risk / Manual Review"
$manifestMd += ""
if (@($risk).Count -eq 0) { $manifestMd += "- None" } else { foreach ($item in $risk) { $manifestMd += "- [$($item.status)] $bt$($item.path)$bt ($($item.kind))" } }
$manifestMd += ""
$manifestMd += "## Deleted Files"
$manifestMd += ""
if (@($deleted).Count -eq 0) { $manifestMd += "- None" } else { foreach ($item in $deleted) { $manifestMd += "- [$($item.status)] $bt$($item.path)$bt" } }
$manifestMd += ""
$manifestMd += "## Intranet Copy Instructions"
$manifestMd += ""
$manifestMd += "1. Open $bt" + "按模块分开\" + "$bt, choose the required Chinese module folder, then copy that folder's contents into the intranet PB application root, preserving relative paths."
$manifestMd += "2. Review $bt" + "warnings.md" + "$bt before copying anything."
$manifestMd += "3. Apply SQL or platform configuration manually only after confirmation."
$manifestMd += "4. Do not copy blocked environment files or $bt" + ".class" + "$bt files. Java changes are delivered as source for intranet compilation."
$manifestMd += "5. After intranet sync succeeds, run $bt" + "update-baseline.ps1" + "$bt in the test project to accept this state as the new baseline."
$manifestMd -join "`r`n" | Set-Content -LiteralPath (Join-Path $releaseDir "manifest.md") -Encoding UTF8

$warnings = @()
$warnings += "# PB Intranet Release Warnings"
$warnings += ""
if (@($blocked).Count -gt 0) {
  $warnings += "## Blocked / Excluded Environment Files"
  $warnings += ""
  foreach ($item in $blocked) { $warnings += "- [$($item.status)] $bt$($item.path)$bt ($($item.kind))" }
  $warnings += ""
}
if (@($javaWarnings).Count -gt 0) {
  $warnings += "## Blocking Java Compile Warnings"
  $warnings += ""
  foreach ($w in $javaWarnings) { $warnings += "- $w" }
  $warnings += ""
}
if (@($risk).Count -gt 0) {
  $warnings += "## Manual Review Files"
  $warnings += ""
  foreach ($item in $risk) { $warnings += "- [$($item.status)] $bt$($item.path)$bt ($($item.kind))" }
  $warnings += ""
}
$warnings += "## Database / Platform Migration"
$warnings += ""
if (@($sql).Count -gt 0 -or @($dbSuspects).Count -gt 0) {
  $warnings += "- SQL/platform migration likely needs manual confirmation."
  foreach ($item in @($dbSuspects | Select-Object -First 80)) { $warnings += "- Suspect: $bt$($item.path)$bt" }
} else {
  $warnings += "- No SQL files or obvious DB/platform migration files detected. Still manually confirm menus, permissions, forms, workflows, dictionaries, attachments, and scheduled jobs for the feature."
}
$warnings += ""
$warnings += "## Default Exclusions Reminder"
$warnings += ""
$warnings += "- $bt" + ".class" + "$bt files are not packaged. Java changes are delivered as $bt" + "src" + "$bt files for intranet compilation."
$warnings += "- $bt" + "jdbc.properties" + "$bt, $bt" + "platform6.properties" + "$bt, $bt" + "rest-client.xml" + "$bt, $bt" + "spring-redis.xml" + "$bt, MQ configs, $bt" + "service/application-service.xml" + "$bt, and $bt" + "db\imp_exp.dmp" + "$bt are not packaged by default."
$warnings -join "`r`n" | Set-Content -LiteralPath (Join-Path $releaseDir "warnings.md") -Encoding UTF8

Write-Host "Release package created: $releaseDir"
Write-Host "Changed files: $($changesSorted.Count)"
Write-Host "Packaged files: $(@($packaged).Count)"
Write-Host "Risk/review files: $(@($risk).Count)"
Write-Host "Blocked/excluded files: $(@($blocked).Count)"
Write-Host "Warnings: $(Join-Path $releaseDir 'warnings.md')"

