param(
  [string]$Root = (Get-Location).Path
)

$ErrorActionPreference = 'Stop'

$requiredFiles = @(
  'db/dw_work_plan_new.sql',
  'src/avicit/pb/dwworkplan/controller/DwWorkPlanController.java',
  'src/avicit/pb/dwworkplan/service/DwWorkPlanService.java',
  'src/avicit/pb/dwworkplan/dto/DwWorkPlanConstants.java',
  'WebRoot/avicit/pb/dwworkplan/workbench.jsp',
  'WebRoot/avicit/pb/dwworkplan/stats.jsp',
  'WebRoot/avicit/pb/dwworkplan/personTree.jsp',
  'WebRoot/static/pb-modern/dwworkplan/dwworkplan.css',
  'WebRoot/static/pb-modern/dwworkplan/dwworkplan.js',
  '.codex/skills/pb-module-memory/references/modules/party-committee-work-plan.md'
)

$missing = foreach ($file in $requiredFiles) {
  $path = Join-Path $Root $file
  if (-not (Test-Path -LiteralPath $path)) { $file }
}

if ($missing.Count -gt 0) {
  throw "Missing required files: $($missing -join ', ')"
}

$sqlPath = Join-Path $Root 'db/dw_work_plan_new.sql'
$sql = Get-Content -Raw -LiteralPath $sqlPath
$tables = @('DYN_DW_PLAN_BATCH','DYN_DW_PLAN_TASK','DYN_DW_PLAN_FEEDBACK','DYN_DW_PLAN_PERSON_TREE','DYN_DW_PLAN_ATTACHMENT')
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

Write-Host 'DW work plan module file and audit-field checks passed.'
