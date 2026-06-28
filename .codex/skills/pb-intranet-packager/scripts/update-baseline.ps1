param(
  [string]$ProjectRoot = (Resolve-Path ".").Path,
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

function Test-ExcludedPath([string]$RelativePath) {
  $p = $RelativePath -replace '/', '\'
  if ($p -like ".codex\skills\pb-intranet-packager\*") { return $true }
  if ($p -like ".git\*") { return $true }
  if ($p -like "target\*") { return $true }
  if ($p -like "build\*") { return $true }
  if ($p -like "logs\*") { return $true }
  if ($p -like "temp\*") { return $true }
  if ($p -like "tmp\*") { return $true }
  if ($p -like "D:\pb-release\*") { return $true }
  return $false
}

$project = (Resolve-Path -LiteralPath $ProjectRoot).Path
$baselineDir = Split-Path -Parent $BaselinePath
New-Item -ItemType Directory -Force -Path $baselineDir | Out-Null

$files = Get-ChildItem -LiteralPath $project -Recurse -File -Force -ErrorAction SilentlyContinue |
  ForEach-Object {
    $rel = Convert-ToRelativePath $project $_.FullName
    if (-not (Test-ExcludedPath $rel)) {
      [pscustomobject]@{
        path = $rel
        hash = (Get-FileHash -Algorithm SHA256 -LiteralPath $_.FullName).Hash
        size = $_.Length
        lastWriteTime = $_.LastWriteTime.ToString("s")
      }
    }
  } |
  Sort-Object path

$baseline = [pscustomobject]@{
  projectRoot = $project
  generatedAt = (Get-Date).ToString("s")
  fileCount = @($files).Count
  files = @($files)
}

$baseline | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $BaselinePath -Encoding UTF8
Write-Host "Baseline updated: $BaselinePath"
Write-Host "File count: $(@($files).Count)"
