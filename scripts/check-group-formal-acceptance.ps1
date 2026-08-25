param(
  [string]$BaseUrl = 'http://127.0.0.1:8080/pb',
  [string]$OutputPath = 'D:\pb-release\group-formal-acceptance.json'
)

$ErrorActionPreference = 'Stop'
$outputDirectory = Split-Path -Parent $OutputPath
if ($outputDirectory -and -not (Test-Path -LiteralPath $outputDirectory)) {
  New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
}
$prefix = "$BaseUrl/platform/avicit/pb/groupsync/groupSyncController/api/rest"
$checks = @(
  @{ name = 'health'; method = 'GET'; url = "$prefix/health" },
  @{ name = 'organization-page'; method = 'GET'; url = "$prefix/page?type=organization&page=1&pageSize=20" },
  @{ name = 'member-page-limit'; method = 'GET'; url = "$prefix/page?type=member&page=1&pageSize=201" },
  @{ name = 'logs'; method = 'GET'; url = "$prefix/logs?limit=20" }
)

$results = @()
Add-Type -AssemblyName System.Net.Http
$handler = New-Object System.Net.Http.HttpClientHandler
$handler.AllowAutoRedirect = $false
$client = New-Object System.Net.Http.HttpClient($handler)
$client.Timeout = [TimeSpan]::FromSeconds(20)
foreach ($check in $checks) {
  $httpStatus = $null
  try {
    $response = $client.GetAsync($check.url).GetAwaiter().GetResult()
    $httpStatus = [int]$response.StatusCode
    $body = $response.Content.ReadAsStringAsync().GetAwaiter().GetResult()
    $isJson = $response.Content.Headers.ContentType.MediaType -match 'json' -or $body.TrimStart().StartsWith('{')
    if ([int]$response.StatusCode -ne 200 -or -not $isJson -or $body -match '<html|top\.location') {
      throw "HTTP $([int]$response.StatusCode), non-JSON or login HTML"
    }
    $json = $body | ConvertFrom-Json
    if ($check.name -eq 'member-page-limit' -and [int]$json.pageSize -gt 200) {
      throw "pageSize exceeded server limit: $($json.pageSize)"
    }
    $results += [pscustomobject]@{ name = $check.name; status = 'PASS'; http = $httpStatus; body = $json }
  } catch {
    if ($null -eq $httpStatus -and $_.Exception.Response) { $httpStatus = [int]$_.Exception.Response.StatusCode }
    $results += [pscustomobject]@{ name = $check.name; status = 'FAIL'; http = $httpStatus; error = $_.Exception.Message }
  }
}

$results | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $OutputPath -Encoding UTF8
$results | Format-Table name,status,http,error -AutoSize
if (@($results | Where-Object status -eq 'FAIL').Count -gt 0) { exit 2 }
