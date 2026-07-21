param(
  [string]$Root = (Get-Location).Path
)

$ErrorActionPreference = 'Stop'

$requiredFiles = @(
  'db/dw_work_plan_3.sql',
  'db/dw_work_plan_3_full_rebuild.sql',
  'src/avicit/pb/dwworkplan3/controller/DwWorkPlan3Controller.java',
  'src/avicit/pb/dwworkplan3/service/DwWorkPlan3Service.java',
  'src/avicit/pb/dwworkplan3/dto/DwWorkPlan3Constants.java',
  'WebRoot/avicit/pb/dwworkplan3/index.jsp',
  'WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.css',
  'WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js',
  'scripts/seed-dwworkplan3-grassroot-demo.ps1',
  'db/dw_work_plan_3_patch_20260709_grassroot_dispatch.sql',
  'db/dw_work_plan_3_patch_20260710_grassroot_org_type.sql',
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
$sql = Get-Content -Raw -Encoding UTF8 -LiteralPath $sqlPath
$fullRebuildSql = Get-Content -Raw -Encoding UTF8 -LiteralPath (Join-Path $Root 'db/dw_work_plan_3_full_rebuild.sql')
$tables = @('DYN_DW_PLAN3_BATCH','DYN_DW_PLAN3_TASK','DYN_DW_PLAN3_FEEDBACK','DYN_DW_PLAN3_PERSON_TREE','DYN_DW_PLAN3_ATTACHMENT','DYN_DW_PLAN3_GRASSROOT_DISPATCH')
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
$cssPath = Join-Path $Root 'WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.css'
$grassrootDemoPath = Join-Path $Root 'scripts/seed-dwworkplan3-grassroot-demo.ps1'
$js = Get-Content -Raw -Encoding UTF8 -LiteralPath $jsPath
$jsp = Get-Content -Raw -Encoding UTF8 -LiteralPath $jspPath
$css = Get-Content -Raw -Encoding UTF8 -LiteralPath $cssPath
$grassrootDemo = Get-Content -Raw -Encoding UTF8 -LiteralPath $grassrootDemoPath

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
$service = Get-Content -Raw -Encoding UTF8 -LiteralPath $servicePath
if ($service -match "(?i)nvl\([^\r\n]*,''\)\s*(?:=|<>)\s*''") {
  throw "Dameng empty-string compatibility: use IS NULL/IS NOT NULL instead of comparing NVL(column,'') with ''."
}
if ($service -match 'insert into DYN_ZBRWB\([\s\S]*?YWSJ_ID') {
  throw '3.0 grassroot dispatch must not write DYN_ZBRWB.YWSJ_ID.'
}
if ($service -match "DYN_ZBJHYWS where nvl\(VALID_FLAG" -or $service -match 'WCLX\s+in\s*\(') {
  throw 'Grassroot business search must return every DYN_ZBJHYWS row with a nonblank business name.'
}
if ($service -notmatch 'deptInput\.equals\(receiver\.get\("userName"\)\)' -or
    $service -notmatch 'selfReceiver' -or
    $service -match 'deptInput\.equals\(nodeName\)' -or
    $service -match 'String deptInput\s*=\s*defaultValue\(value\(source, "deptNodeId"\)') {
  throw 'Import receiver validation must match current-office personnel by bound user name and support the office director themself.'
}
if ($service -notmatch 'PLATFORM_ADMIN_ROLE_NAME\s*=' -or
    $service -notmatch 'hasPlatformRole\(userId, LEADER_VIEW_ROLE_NAME\)\s*\|\|\s*hasPlatformRole\(userId, PLATFORM_ADMIN_ROLE_NAME\)' -or
    $service -notmatch 'personTreeEditable' -or
    $service -notmatch 'canMaintainPersonTree') {
  throw 'Both platform administrator roles must have an explicit, backend-enforced person-tree maintenance permission.'
}
if ($service -match 'ensureBootstrapRoot|bootstrapRoot' -or
    $fullRebuildSql -match '(?i)insert\s+into\s+DYN_DW_PLAN3_PERSON_TREE') {
  throw '3.0 must not automatically initialize or seed a personnel-tree root.'
}
$dispatchText = ([string][char]19979 + [char]21457)
if ($jsp -match ('<button[^>]*>[^<]*' + [regex]::Escape($dispatchText) + '[^<]*</button>') -or
    $js -match ('actionBtn\([^\r\n]*["'']' + [regex]::Escape($dispatchText) + '["'']') -or
    $js -match 'actionBtn\([^\r\n]*["'']\\u4e0b\\u53d1["'']') {
  throw 'Visible button labels must use 发送 instead of 下发.'
}
if ($service -notmatch 'for\s*\(Map<String, String> receiver\s*:\s*importReceiverChoices\(request\)\)' -or
    $service -notmatch 'receiver\.get\("userName"\)' -or
    $service -notmatch 'importReceiverName' -or
    $service -match 'put\("loginName"') {
  throw 'Import template receiver reference must contain unique bound user names only, without login names.'
}
if ($js -notmatch 'function canMaintainPersonTree' -or $js -notmatch 'personTreeEditable') {
  throw 'Frontend person-tree controls must use the dedicated personTreeEditable permission.'
}
if ($js -notmatch 'function taskReceiverName' -or
    $js -notmatch 'task\.DRAFT_DEPT_NAME') {
  throw 'Task receiver display must prefer the imported/draft target staff name.'
}
if ($js -notmatch 'expandedPersonIds\[text\(row\.ID\)\]\s*=\s*false' -or
    $js -notmatch 'expandedPersonIds\[id\]\s*===\s*true') {
  throw 'Personnel tree nodes must be collapsed by default and expand only after an explicit user action.'
}
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

$forbiddenOldDispatchRefs = @('DYN_KYFFRW', 'DYN_DWJHRY', 'DynThreeFourController', 'ffTask')
foreach ($text in $forbiddenOldDispatchRefs) {
  if ($js.Contains($text) -or $jsp.Contains($text) -or $service.Contains($text)) {
    throw "党委计划 3.0 基层分发不能复用旧分发模块引用: $text"
  }
}

if ($service -notmatch 'DYN_DW_PLAN3_GRASSROOT_DISPATCH' -or $service -notmatch 'DYN_ZBRWB' -or $service -notmatch 'DYN_ZBJHYWS') {
  throw 'Grassroot dispatch must keep 3.0 dispatch state and write the intranet grassroots task table using the business tree.'
}

if ($js -notmatch 'openGrassrootDispatch' -or $jsp -notmatch 'dwGrassrootModal') {
  throw 'Grassroot dispatch UI is missing.'
}

if ($jsp -notmatch 'dwGrassrootBusinessKeyword' -or
    $jsp -notmatch 'data-grassroot-org-group="d"' -or
    $jsp -notmatch 'data-grassroot-org-group="g"' -or
    $jsp -notmatch 'data-grassroot-org-group="t"' -or
    $jsp -notmatch 'dw-grassroot-org-section is-collapsed') {
  throw 'Grassroot dispatch must provide three independently collapsed party, union, and youth organization selectors.'
}

if ($js -notmatch 'tradeUnionOrgIds' -or $js -notmatch 'leagueOrgIds' -or $js -notmatch 'selectedGrassrootOrgIds') {
  throw 'Grassroot dispatch JS must submit party, union, and youth organization selections independently.'
}

if ($service -notmatch 'TARGET_ORG_TYPE' -or $sql -notmatch 'TARGET_ORG_TYPE') {
  throw 'Grassroot dispatch must persist the target organization type independently from the selected business type.'
}

if ($service -notmatch 'dispatch.get\("TARGET_ORG_TYPE"\)' -or
    $service -notmatch 'dispatch.get\("COMPLETE_TYPE"\)' -or
    $service -notmatch 'dispatch.get\("FORM_ID"\)' -or
    $service -notmatch 'dispatch.get\("VIEW_ID"\)') {
  throw 'Grassroot receive tasks must carry target type, completion type, form, and view data from the selected business.'
}

if ($service -notmatch 'PARTY_ORGAN_MEMBER' -or $service -notmatch 'DYN_TU_ORGAN_MEMBER' -or $service -notmatch 'LEAGUE_ORGAN_MEMBER') {
  throw 'Grassroot dispatch backend must match original party/union/youth organization member resolution logic.'
}

$mustComplete = ([string][char]24517 + [char]39035 + [char]23436 + [char]25104)
if ($js -notmatch 'function grassrootCompleteType' -or
    -not $service.Contains($mustComplete) -or
    $js -match 'completeType ===') {
  throw 'Grassroot dispatch must preserve every completion type and only treat required completion as blocking.'
}

if ($grassrootDemo -match '\\u6708\\u5ea6' -or
    $grassrootDemo -notmatch '\\u5fc5\\u987b\\u5b8c\\u6210' -or
    $grassrootDemo -notmatch '\\u81ea\\u7531\\u5b8c\\u6210') {
  throw 'Grassroot demo businesses must use only the two supported completion types.'
}

if ($js -match 'dw-grassroot-picker-meta[^\r\n]*row\.ID' -or
    -not $js.Contains('name === id') -or
    -not $js.Contains('/^[A-Za-z0-9_-]+$/.test(name)') -or
    $css -notmatch 'grid-template-columns:\s*auto minmax\(0, 1fr\);') {
  throw 'Grassroot organization selectors must show valid organization names without internal IDs.'
}

$hiddenBusinessMeta = @(
  ([string][char]34920 + [char]21333 + [char]32534 + [char]30721),
  ([string][char]35270 + [char]22270 + [char]32534 + [char]30721),
  ([string][char]26159 + [char]21542 + [char]23384 + [char]22312 + [char]34920 + [char]21333)
)
foreach ($text in $hiddenBusinessMeta) {
  if ($js.Contains($text + ([string][char]65306))) {
    throw "Grassroot business summary exposes an unnecessary technical field: $text"
  }
}

$hiddenDispatchColumns = @(
  ([string][char]32452 + [char]32455 + [char]31867 + [char]22411),
  ([string][char]21608 + [char]26399),
  ([string][char]22522 + [char]23618 + [char]20219 + [char]21153),
  ([string][char]35828 + [char]26126)
)
foreach ($text in $hiddenDispatchColumns) {
  if ($jsp.Contains('<th>' + $text + '</th>')) {
    throw "Grassroot dispatch list still exposes an unnecessary column: $text"
  }
}
if ($jsp -notmatch 'colspan="6"') {
  throw 'Grassroot dispatch list must keep the compact six-column layout.'
}

if ($css -notmatch '--dw-grassroot-workspace-height' -or
    $css -notmatch '\.dw-grassroot-editor[\s\S]*?overflow-y:\s*auto' -or
    $css -notmatch '\.dw-grassroot-list[\s\S]*?height:\s*var\(--dw-grassroot-workspace-height\)') {
  throw 'Grassroot editor and dispatch list must use one constrained workspace with independent scrolling.'
}

if ($js -notmatch 'dw-task-title-content' -or
    $css -notmatch '\.dw-task-title-content' -or
    $css -notmatch '\.dw-task-grassroot-progress[\s\S]*?grid-template-columns:\s*1fr') {
  throw 'Task title and grassroot progress must use a readable stacked layout.'
}

if ($js -notmatch 'grassrootDirty' -or
    $js -notmatch 'function closeGrassrootModal' -or
    $js -notmatch 'afterTaskChanged\(\)') {
  throw 'Closing a changed grassroot modal must refresh the parent task list automatically.'
}

Write-Host 'DW work plan 3 module file and audit-field checks passed.'


