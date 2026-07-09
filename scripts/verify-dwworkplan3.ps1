param(
  [string]$Root = (Get-Location).Path
)

$ErrorActionPreference = 'Stop'

$requiredFiles = @(
  'db/dw_work_plan_3.sql',
  'src/avicit/pb/dwworkplan3/controller/DwWorkPlan3Controller.java',
  'src/avicit/pb/dwworkplan3/service/DwWorkPlan3Service.java',
  'src/avicit/pb/dwworkplan3/dto/DwWorkPlan3Constants.java',
  'WebRoot/avicit/pb/dwworkplan3/index.jsp',
  'WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.css',
  'WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js',
  '.codex/skills/pb-module-memory/references/modules/party-committee-work-plan-3.md'
)

$missing = foreach ($file in $requiredFiles) {
  $path = Join-Path $Root $file
  if (-not (Test-Path -LiteralPath $path)) { $file }
}

if ($missing.Count -gt 0) {
  throw "Missing required files: $($missing -join ', ')"
}

$sqlPath = Join-Path $Root 'db/dw_work_plan_3.sql'
$sql = Get-Content -Raw -LiteralPath $sqlPath
$tables = @('DYN_DW_PLAN3_BATCH','DYN_DW_PLAN3_TASK','DYN_DW_PLAN3_FEEDBACK','DYN_DW_PLAN3_PERSON_TREE','DYN_DW_PLAN3_ATTACHMENT')
$auditColumns = @(
  'ID VARCHAR2(50)',
  'CREATED_BY VARCHAR2(50)',
  'CREATION_DATE DATE',
  'LAST_UPDATED_BY VARCHAR2(50)',
  'LAST_UPDATE_DATE DATE',
  'LAST_UPDATE_IP VARCHAR2(50)',
  'VERSION NUMBER(16)',
  'ORG_IDENTITY VARCHAR2(32)'
)

foreach ($table in $tables) {
  if ($sql -notmatch "CREATE TABLE\s+$table") {
    throw "Missing CREATE TABLE for $table"
  }
  foreach ($column in $auditColumns) {
    if ($sql -notmatch [regex]::Escape($column)) {
      throw "Missing required audit column declaration '$column'"
    }
  }
}

$jsPath = Join-Path $Root 'WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js'
$jspPath = Join-Path $Root 'WebRoot/avicit/pb/dwworkplan3/index.jsp'
$js = Get-Content -Raw -LiteralPath $jsPath
$jsp = Get-Content -Raw -LiteralPath $jspPath

if ($js -match 'rows\.slice\(\)\.reverse\(\)') {
  throw 'Feedback chain must render in API timeline order, not reverse the list in the browser.'
}

$staleReceiverTexts = @('接收部门', '选中部门', '接收对象')
foreach ($text in $staleReceiverTexts) {
  if ($js.Contains($text) -or $jsp.Contains($text)) {
    throw "Stale office dispatch receiver label remains: $text"
  }
}

$servicePath = Join-Path $Root 'src/avicit/pb/dwworkplan3/service/DwWorkPlan3Service.java'
$service = Get-Content -Raw -LiteralPath $servicePath
$removedImportColumns = @(
  ([string][char]25509 + [char]25910 + [char]20154 + [char]22995 + [char]21517),
  ([string][char]25509 + [char]25910 + [char]20154 + [char]30331 + [char]24405 + [char]21517)
)
foreach ($text in $removedImportColumns) {
  if ($js.Contains($text) -or $jsp.Contains($text) -or $service.Contains($text)) {
    throw "Removed import template column remains: $text"
  }
}
if ($js -match 'receiverLogin' -or $js -match 'row\.receiverName' -or $service -match 'receiverLogin') {
  throw 'Removed import receiver-name/login fields still exist in import code.'
}

if ($js -notmatch 'dw-feedback-reviewer' -or $js -notmatch 'CONFIRM_USER_NAME' -or $js -notmatch 'CONFIRM_TIME') {
  throw 'Feedback chain must display reviewer name and review time.'
}

Write-Host 'DW work plan 3 module file and audit-field checks passed.'


