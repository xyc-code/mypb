param(
  [string]$ProjectRoot = (Resolve-Path ".").Path,
  [string[]]$Paths = @(),
  [string]$BaselinePath = "D:\pb-release\baseline\pb-baseline.json"
)

$ErrorActionPreference = "Stop"

function Convert-ToRelativePath([string]$Base, [string]$Path) {
  $baseFull = [System.IO.Path]::GetFullPath($Base).TrimEnd('\') + '\'
  $pathFull = [System.IO.Path]::GetFullPath($Path)
  $baseUri = [System.Uri]::new($baseFull)
  $pathUri = [System.Uri]::new($pathFull)
  return [System.Uri]::UnescapeDataString($baseUri.MakeRelativeUri($pathUri).ToString()).Replace('/', '\')
}

function Test-FrontendFile([string]$Path) {
  $lower = $Path.ToLowerInvariant()
  return $lower.EndsWith(".jsp") -or $lower.EndsWith(".html") -or $lower.EndsWith(".js") -or $lower.EndsWith(".css") -or $lower.EndsWith(".vue") -or $lower.EndsWith(".ts") -or $lower.EndsWith(".tsx") -or $lower.EndsWith(".jsx")
}

function Add-Warning([System.Collections.Generic.List[object]]$Warnings, [string]$Severity, [string]$Path, [string]$Rule, [string]$Detail) {
  $Warnings.Add([pscustomobject]@{
    severity = $Severity
    path = $Path
    rule = $Rule
    detail = $Detail
  })
}

$project = (Resolve-Path -LiteralPath $ProjectRoot).Path
$targetFiles = New-Object System.Collections.Generic.List[string]

if ($Paths.Count -gt 0) {
  foreach ($p in $Paths) {
    $full = if ([System.IO.Path]::IsPathRooted($p)) { $p } else { Join-Path $project $p }
    if (Test-Path -LiteralPath $full -PathType Leaf) {
      if (Test-FrontendFile $full) { $targetFiles.Add((Resolve-Path -LiteralPath $full).Path) }
    } elseif (Test-Path -LiteralPath $full -PathType Container) {
      Get-ChildItem -LiteralPath $full -Recurse -File -Force -ErrorAction SilentlyContinue |
        Where-Object { Test-FrontendFile $_.FullName } |
        ForEach-Object { $targetFiles.Add($_.FullName) }
    }
  }
} elseif (Test-Path -LiteralPath $BaselinePath) {
  $baseline = Get-Content -LiteralPath $BaselinePath -Raw | ConvertFrom-Json
  $baselineMap = @{}
  foreach ($file in @($baseline.files)) { $baselineMap[$file.path] = $file.hash }
  Get-ChildItem -LiteralPath $project -Recurse -File -Force -ErrorAction SilentlyContinue |
    Where-Object { Test-FrontendFile $_.FullName -and $_.FullName -notlike "*\.codex\skills\*" } |
    ForEach-Object {
      $rel = Convert-ToRelativePath $project $_.FullName
      $hash = (Get-FileHash -Algorithm SHA256 -LiteralPath $_.FullName).Hash
      if (-not $baselineMap.ContainsKey($rel) -or $baselineMap[$rel] -ne $hash) {
        $targetFiles.Add($_.FullName)
      }
    }
} else {
  Get-ChildItem -LiteralPath $project -Recurse -File -Force -ErrorAction SilentlyContinue |
    Where-Object { Test-FrontendFile $_.FullName -and $_.FullName -notlike "*\.codex\skills\*" } |
    ForEach-Object { $targetFiles.Add($_.FullName) }
}

$warnings = New-Object System.Collections.Generic.List[object]
$files = @($targetFiles | Sort-Object -Unique)

foreach ($file in $files) {
  $rel = Convert-ToRelativePath $project $file
  $text = Get-Content -LiteralPath $file -Raw -ErrorAction SilentlyContinue
  if ($null -eq $text) { continue }
  $lowerRel = $rel.ToLowerInvariant()

  if ($text -match '(?i)(https?:)?//(cdn|unpkg|cdn\.jsdelivr|bootcdn|googleapis|gstatic|cdnjs|fontawesome)') {
    Add-Warning $warnings "BLOCKING" $rel "external-assets" "External CDN or web-hosted assets detected. PB intranet packages must use local static assets."
  }
  if ($text -match '(?i)<script[^>]+jquery[^>]+>' -and $lowerRel -notlike "*login*") {
    Add-Warning $warnings "HIGH" $rel "duplicate-jquery" "This page imports jQuery directly. Do not load a second jQuery on platform pages unless isolated and verified."
  }
  if ($text -match '(?i)<script[^>]+jquery\.easyui|easyui\.min\.js') {
    Add-Warning $warnings "HIGH" $rel "duplicate-easyui" "This page imports EasyUI directly. Avoid duplicate EasyUI versions."
  }
  if ($text -match '(?i)(vue|react|angular|element-ui|element-plus|antd|layui|tailwind|vite|webpack)') {
    Add-Warning $warnings "INFO" $rel "framework-detected" "Frontend framework/build keyword detected. Confirm assets are local, scoped, and do not require intranet npm build."
  }
  if ($text -match '(?m)^\s*(html|body|\*)\s*\{' -or $text -match '(?m)^\s*(input|button|table|td|th|a|ul|li)\s*\{') {
    Add-Warning $warnings "HIGH" $rel "global-css-selector" "Global CSS selector detected. Scope styles under .pb-modern-page or a feature wrapper."
  }
  if ($text -match '(?m)^\s*(\.panel|\.tabs|\.window|\.dialog|\.datagrid|\.easyui-|\.layui-|\.modal|\.btn)\b') {
    Add-Warning $warnings "HIGH" $rel "platform-css-selector" "Selector may affect EasyUI/platform components. Scope it under the feature wrapper."
  }
  if ($text -match '\b(window\.\$|window\.jQuery|\$\.fn\.|jQuery\.fn\.|Object\.prototype|Array\.prototype|Date\.prototype)\b') {
    Add-Warning $warnings "BLOCKING" $rel "global-js-mutation" "Global JS or prototype mutation detected. This can break platform modules."
  }
  if ($text -match '(?i)node_modules|localhost:\d+|127\.0\.0\.1:\d+|npm run|vite dev|webpack-dev-server') {
    Add-Warning $warnings "BLOCKING" $rel "dev-build-reference" "Development server, node_modules, or local port reference detected. Intranet must use built local assets."
  }
  if ($lowerRel -like "webroot\avicit\eformmodule\*" -or $lowerRel -like "webroot\avicit\platform6\*" -or $lowerRel -like "webroot\login\*") {
    Add-Warning $warnings "INFO" $rel "sensitive-platform-area" "Sensitive platform/login/eform area. Changes need extra regression testing."
  }
}

$warningArray = @($warnings.ToArray())
$report = [pscustomobject]@{
  projectRoot = $project
  scannedAt = (Get-Date).ToString("s")
  fileCount = $files.Count
  warningCount = $warningArray.Count
  warnings = $warningArray
}

$report | ConvertTo-Json -Depth 6

if ($warningArray.Count -gt 0) {
  Write-Host ""
  Write-Host "Frontend conflict warnings:"
  $warningArray | Sort-Object severity,path,rule | Format-Table severity,path,rule,detail -AutoSize
} else {
  Write-Host "No frontend conflict warnings found."
}
