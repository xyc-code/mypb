param(
  [string]$ProjectRoot = (Resolve-Path ".").Path,
  [Parameter(Mandatory = $true)]
  [string]$ReleasePath,
  [string]$CandidateFile = "",
  [string]$GitBase = "",
  [string]$GitHead = "HEAD",
  [string[]]$RequiredPath = @(),
  [switch]$AllowMissing
)

$ErrorActionPreference = "Stop"

function Normalize-RelativePath([string]$Path) {
  if ([string]::IsNullOrWhiteSpace($Path)) { return "" }
  $p = $Path.Trim().Trim('"').Trim("'") -replace '/', '\'
  while ($p.StartsWith(".\")) { $p = $p.Substring(2) }
  while ($p.StartsWith("\")) { $p = $p.Substring(1) }
  return $p
}

function Convert-ToRelativePath([string]$Base, [string]$Path) {
  $baseFull = [System.IO.Path]::GetFullPath($Base).TrimEnd('\') + '\'
  $pathFull = [System.IO.Path]::GetFullPath($Path)
  $baseUri = [System.Uri]::new($baseFull)
  $pathUri = [System.Uri]::new($pathFull)
  return [System.Uri]::UnescapeDataString($baseUri.MakeRelativeUri($pathUri).ToString()).Replace('/', '\')
}

function Test-IgnoredCandidate([string]$Path) {
  $p = Normalize-RelativePath $Path
  $lower = $p.ToLowerInvariant()
  if ($p -eq "") { return $true }
  if ($p -like ".codex\*") { return $true }
  if ($p -like ".git\*") { return $true }
  if ($p -like "D:\pb-release\*") { return $true }
  if ($lower -like "*.class") { return $true }
  if ($lower -like "target\*") { return $true }
  if ($lower -like "build\*") { return $true }
  if ($lower -like "logs\*") { return $true }
  if ($lower -like "temp\*") { return $true }
  if ($lower -like "tmp\*") { return $true }
  return $false
}

function Add-Candidate([System.Collections.Generic.HashSet[string]]$Set, [string]$Path) {
  $p = Normalize-RelativePath $Path
  if (-not (Test-IgnoredCandidate $p)) {
    [void]$Set.Add($p)
  }
}

function Get-Candidates {
  $project = (Resolve-Path -LiteralPath $ProjectRoot).Path
  $set = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)

  if ($CandidateFile) {
    if (-not (Test-Path -LiteralPath $CandidateFile -PathType Leaf)) {
      throw "Candidate file not found: $CandidateFile"
    }
    Get-Content -LiteralPath $CandidateFile | ForEach-Object {
      Add-Candidate $set $_
    }
  }

  if ($GitBase) {
    $gitArgs = @("-C", $project, "diff", "--name-only", "--diff-filter=AMCR", $GitBase, $GitHead)
    $gitFiles = & git @gitArgs
    if ($LASTEXITCODE -ne 0) {
      throw "git diff failed for $GitBase $GitHead"
    }
    $gitFiles | ForEach-Object {
      Add-Candidate $set $_
    }
  }

  foreach ($path in $RequiredPath) {
    Add-Candidate $set $path
  }

  if ($set.Count -eq 0) {
    throw "No candidate files supplied. Use -CandidateFile, -GitBase, or -RequiredPath."
  }

  return @($set | Sort-Object)
}

function Get-PackageEntries {
  $release = (Resolve-Path -LiteralPath $ReleasePath).Path
  $entries = New-Object System.Collections.Generic.List[string]
  if (Test-Path -LiteralPath $release -PathType Leaf) {
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $archive = [System.IO.Compression.ZipFile]::OpenRead($release)
    try {
      foreach ($entry in $archive.Entries) {
        if (-not [string]::IsNullOrWhiteSpace($entry.Name)) {
          $entries.Add((Normalize-RelativePath $entry.FullName))
        }
      }
    } finally {
      $archive.Dispose()
    }
  } elseif (Test-Path -LiteralPath $release -PathType Container) {
    Get-ChildItem -LiteralPath $release -Recurse -File -Force | ForEach-Object {
      $entries.Add((Normalize-RelativePath (Convert-ToRelativePath $release $_.FullName)))
    }
  } else {
    throw "Release path not found: $ReleasePath"
  }
  return @($entries | Sort-Object -Unique)
}

function Test-EntryContainsCandidate([string[]]$Entries, [string]$Candidate) {
  $candidate = Normalize-RelativePath $Candidate
  foreach ($entry in $Entries) {
    if ($entry -ieq $candidate) { return $true }
    if ($entry.EndsWith("\" + $candidate, [System.StringComparison]::OrdinalIgnoreCase)) { return $true }
  }
  return $false
}

$candidates = @(Get-Candidates)
$entries = @(Get-PackageEntries)
$missing = New-Object System.Collections.Generic.List[string]
$matched = New-Object System.Collections.Generic.List[string]

foreach ($candidate in $candidates) {
  if (Test-EntryContainsCandidate $entries $candidate) {
    $matched.Add($candidate)
  } else {
    $missing.Add($candidate)
  }
}

$result = [pscustomobject]@{
  releasePath = (Resolve-Path -LiteralPath $ReleasePath).Path
  candidateCount = $candidates.Count
  packageEntryCount = $entries.Count
  matchedCount = $matched.Count
  missingCount = $missing.Count
  missing = @($missing)
}

$result | ConvertTo-Json -Depth 5

if ($missing.Count -gt 0 -and -not $AllowMissing) {
  exit 2
}
