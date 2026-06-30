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

Write-Host 'DW work plan 3 module file and audit-field checks passed.'


