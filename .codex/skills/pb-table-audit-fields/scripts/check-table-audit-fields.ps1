param(
  [string[]]$Paths = @(),
  [string]$Text = ""
)

$ErrorActionPreference = "Stop"

$required = @(
  [pscustomobject]@{ Name = "ID"; Type = "VARCHAR2"; Length = "50"; Pattern = "\bID\b\s+VARCHAR2\s*\(\s*50\s*\)" },
  [pscustomobject]@{ Name = "CREATED_BY"; Type = "VARCHAR2"; Length = "50"; Pattern = "\bCREATED_BY\b\s+VARCHAR2\s*\(\s*50\s*\)" },
  [pscustomobject]@{ Name = "CREATION_DATE"; Type = "DATE"; Length = "0"; Pattern = "\bCREATION_DATE\b\s+DATE\b" },
  [pscustomobject]@{ Name = "LAST_UPDATED_BY"; Type = "VARCHAR2"; Length = "50"; Pattern = "\bLAST_UPDATED_BY\b\s+VARCHAR2\s*\(\s*50\s*\)" },
  [pscustomobject]@{ Name = "LAST_UPDATE_DATE"; Type = "DATE"; Length = "0"; Pattern = "\bLAST_UPDATE_DATE\b\s+DATE\b" },
  [pscustomobject]@{ Name = "LAST_UPDATE_IP"; Type = "VARCHAR2"; Length = "50"; Pattern = "\bLAST_UPDATE_IP\b\s+VARCHAR2\s*\(\s*50\s*\)" },
  [pscustomobject]@{ Name = "VERSION"; Type = "NUMBER"; Length = "16"; Pattern = "\bVERSION\b\s+NUMBER\s*\(\s*16\s*\)" },
  [pscustomobject]@{ Name = "ORG_IDENTITY"; Type = "VARCHAR2"; Length = "32"; Pattern = "\bORG_IDENTITY\b\s+VARCHAR2\s*\(\s*32\s*\)" }
)

function Test-Content([string]$Label, [string]$Content) {
  $results = foreach ($field in $required) {
    $namePresent = $Content -match ("(?i)\b" + [regex]::Escape($field.Name) + "\b")
    $exactPresent = $Content -match ("(?i)" + $field.Pattern)
    [pscustomobject]@{
      Source = $Label
      Column = $field.Name
      RequiredType = $field.Type
      RequiredLength = $field.Length
      NamePresent = [bool]$namePresent
      ExactTypeAndLength = [bool]$exactPresent
      Status = if ($exactPresent) { "OK" } elseif ($namePresent) { "MISMATCH" } else { "MISSING" }
    }
  }
  return @($results)
}

$allResults = @()

if ($Text -ne "") {
  $allResults += Test-Content "inline-text" $Text
}

foreach ($path in $Paths) {
  if (-not (Test-Path -LiteralPath $path)) {
    $allResults += [pscustomobject]@{
      Source = $path
      Column = ""
      RequiredType = ""
      RequiredLength = ""
      NamePresent = $false
      ExactTypeAndLength = $false
      Status = "FILE_NOT_FOUND"
    }
    continue
  }
  $content = Get-Content -LiteralPath $path -Raw
  $allResults += Test-Content $path $content
}

if ($allResults.Count -eq 0) {
  Write-Host "No input provided. Pass -Paths file.sql or -Text 'CREATE TABLE ...'."
  exit 1
}

$allResults | Format-Table Source,Column,RequiredType,RequiredLength,NamePresent,ExactTypeAndLength,Status -AutoSize

$bad = @($allResults | Where-Object { $_.Status -ne "OK" })
if ($bad.Count -gt 0) {
  Write-Host ""
  Write-Host "Mandatory PB table audit field check failed."
  exit 2
}

Write-Host ""
Write-Host "Mandatory PB table audit field check passed."
