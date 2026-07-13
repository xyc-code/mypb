# Error Log

## [ERR-20260710-004] pb-restart-without-skill

**Logged**: 2026-07-10T12:00:00+08:00
**Priority**: high
**Status**: resolved
**Area**: infra

### Summary
PB restart bypassed the dedicated startup skill and initially launched with an incorrect Tomcat environment and insufficient thread stack.

### Error
```text
Generic startup inherited Tomcat 9 environment variables, then the corrected Tomcat 7 startup stalled with a Spring MapperFactoryBean StackOverflowError before the known-good -Xss16m startup path was used.
```

### Context
- The request was a routine PB restart.
- `pb-start-local` and `pb-stop-tomcat-local` existed in the user-level skill directory.
- The agent acted before matching the request against the complete available skill list.

### Suggested Fix
Always route PB runtime operations through the dedicated skills before executing commands. Search both project-level and user-level skill locations only when discovery is necessary.

### Metadata
- Reproducible: yes
- Related Files: C:/Users/xyc/.codex/skills/pb-start-local/SKILL.md
- See Also: LRN-20260710-001

### Resolution
- **Resolved**: 2026-07-10T12:00:00+08:00
- **Notes**: Restarted with the dedicated skills; Tomcat 7, JDK 8, Redis, DM8, and `/pb/login` were verified healthy.

---

## [ERR-20260713-001] audit-checker-comma-separated-paths

**Logged**: 2026-07-13T00:00:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary
The PB audit checker first treated comma-separated paths as one filename, then flagged pure `ALTER TABLE ADD` patches because they do not repeat base-table audit columns.

### Error
```text
Mandatory PB table audit field check failed.
```

### Context
- `-Paths file1.sql,file2.sql` was passed through PowerShell as a single path value.
- Individual checks also fail for column-only patches because the checker expects a complete table definition.
- The corresponding base-table scripts pass all eight mandatory audit-field checks.

### Suggested Fix
Invoke the checker once per SQL file, and evaluate column-only migration patches against the already-compliant base table rather than expecting the patch to repeat all audit columns.

### Metadata
- Reproducible: yes
- Related Files: db/dw_work_plan_3_patch_20260708_feedback_target.sql, db/dw_work_plan_3_patch_20260710_grassroot_org_type.sql

### Resolution
- **Resolved**: 2026-07-13T00:00:00+08:00
- **Notes**: Re-ran each file separately, confirmed both are column-only patches, and confirmed the base table definitions contain all mandatory audit fields.

---

## [ERR-20260711-002] powershell-invoke-webrequest-zero-redirect

**Logged**: 2026-07-11T00:00:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary
PowerShell `Invoke-WebRequest` raised `MaximumRedirectExceeded` while checking the unauthenticated DW3 entry with zero redirects.

### Error
```text
MaximumRedirectExceeded
```

### Context
- PB login page had already returned HTTP 200.
- The DW3 entry is expected to redirect unauthenticated users to login.

### Suggested Fix
Use `curl.exe -I` to inspect the expected 302 response without following redirects.

### Metadata
- Reproducible: yes
- Related Files: none

### Resolution
- **Resolved**: 2026-07-11T00:00:00+08:00
- **Notes**: Replaced the PowerShell redirect check with a response-header check using `curl.exe`.

---

## [ERR-20260711-001] codex-read-thread-argument-combination

**Logged**: 2026-07-11T00:00:00+08:00
**Priority**: low
**Status**: resolved
**Area**: config

### Summary
Codex task history rejected a combined `read_thread` argument set while restoring PB project context.

### Error
```text
read_thread received invalid arguments.
```

### Context
- Operation attempted with `threadId`, `hostId`, `turnLimit`, and `includeOutputs`.
- Listing tasks succeeded; reading task details needs a smaller validated argument set.

### Suggested Fix
Retry with only the required `threadId`, then add optional arguments individually if needed.

### Metadata
- Reproducible: unknown
- Related Files: none

### Resolution
- **Resolved**: 2026-07-11T00:00:00+08:00
- **Notes**: Retried with only `threadId`; older turns were then read one page at a time through `nextCursor`. The optional `turnLimit` argument was not used.

---

## [ERR-20260630-001] powershell-rg-quoting

**Logged**: 2026-06-30T15:22:00+08:00
**Priority**: low
**Status**: pending
**Area**: tests

### Summary
Complex `rg` alternation containing escaped double quotes was split incorrectly by PowerShell.

### Error
```text
rg: value=\DEPT\|area:: The filename, directory name, or volume label syntax is incorrect.
```

### Context
- Command attempted to verify multiple code markers with one large regex.
- The pattern included `option value=\"USER\"` and `option value=\"DEPT\"` inside a PowerShell string.

### Suggested Fix
Use simpler `rg` searches or single-quoted PowerShell strings for patterns containing double quotes.

### Metadata
- Reproducible: yes
- Related Files: WebRoot/static/pb-modern/excel-export-config/excel-export-config.js

---

## [ERR-20260710-001] powershell-rg-pattern

**Logged**: 2026-07-10T00:00:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary
PowerShell expanded `$service` and `$js` inside a double-quoted ripgrep pattern, producing an invalid regular expression.

### Error
```text
rg: regex parse error: unclosed group
```

### Context
- Command searched `scripts/verify-dwworkplan3.ps1` for grassroots verification markers.
- The regex was passed through a PowerShell double-quoted string.

### Suggested Fix
Use a PowerShell single-quoted regex whenever the search pattern contains `$` identifiers.

### Metadata
- Reproducible: yes
- Related Files: scripts/verify-dwworkplan3.ps1

### Resolution
- **Resolved**: 2026-07-10T00:00:00+08:00
- **Notes**: Reissued the search with a single-quoted pattern.

---

## [ERR-20260701-002] missing-check-pb-script

**Logged**: 2026-07-01T00:00:00+08:00
**Priority**: low
**Status**: pending
**Area**: tests

### Summary
PB runbook mentions `scripts/check-pb.ps1`, but the current workspace does not contain that script.

### Error
```text
.\scripts\check-pb.ps1 : The term '.\scripts\check-pb.ps1' is not recognized as the name of a cmdlet, function, script file, or operable program.
```

### Context
- Attempted to run the PB quick health check before党委计划 3.0 full-flow testing.
- `rg --files scripts` showed only `verify-dwworkplan3.ps1` and `seed-verify-dwworkplan3.ps1` for this module.
- Manual HTTP checks confirmed Tomcat on port 8080, `/pb/login` returned 200, and the 3.0 entry returned a login redirect.

### Suggested Fix
Either restore `scripts/check-pb.ps1` or update the PB Java Web runbook to reference the available health-check commands.

### Metadata
- Reproducible: yes
- Related Files: C:/Users/xyc/.codex/skills/pb-java-web-runbook/SKILL.md

---

## [ERR-20260701-001] javac-output-dir

**Logged**: 2026-07-01T16:28:43+08:00
**Priority**: low
**Status**: resolved
**Area**: backend

### Summary
`javac -d` failed because the temporary output directory did not exist.

### Error
```text
javac: 找不到目录: C:\Users\xyc\AppData\Local\Temp\pb-todo-compile
```

### Context
- Command attempted to compile the portal business todo and DW work plan 3.0 integration classes.
- The `-d` path was a fresh temp directory that had not been created.

### Suggested Fix
Create the `javac -d` directory first with `New-Item -ItemType Directory -Force`.

### Metadata
- Reproducible: yes
- Related Files: src/avicit/ims/oa/todo/service/PortalBusinessTodoService.java

### Resolution
- **Resolved**: 2026-07-01T16:28:43+08:00
- **Notes**: Created the temp directory before rerunning `javac`; compilation passed.

---

## [ERR-20260710-002] broad-apply-patch-context

**Logged**: 2026-07-10T11:16:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: backend

### Summary
A broad `return rows` patch matched the task-list method before the intended grassroots organization method.

### Error
```text
listTask temporarily returned visibleGrassrootOrganizations(rows).
```

### Context
- The patch introduced a shared grassroots organization display-name filter.
- The changed file contained several identical `return rows` statements.

### Suggested Fix
Anchor patches with the full method context when modifying repeated statements.

### Metadata
- Reproducible: yes
- Related Files: src/avicit/pb/dwworkplan3/service/DwWorkPlan3Service.java

### Resolution
- **Resolved**: 2026-07-10T11:16:00+08:00
- **Notes**: Restored the task-list return immediately, applied the filter only to grassroots organization methods, then compiled and reran the full database verifier.

---

## [ERR-20260710-003] playwright-run-code-powershell-quoting

**Logged**: 2026-07-10T11:24:00+08:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary
PowerShell split a Playwright `run-code` snippet after nested escaped double quotes.

### Error
```text
error: too many arguments: expected 1
```

### Context
- The snippet queried grassroots selector text through Playwright CLI.
- Escaped double quotes were nested inside a PowerShell double-quoted command.

### Suggested Fix
Use JavaScript single-quoted selectors inside one PowerShell double-quoted `run-code` argument.

### Metadata
- Reproducible: yes
- Related Files: WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js

### Resolution
- **Resolved**: 2026-07-10T11:24:00+08:00
- **Notes**: Reissued the Playwright evaluation with single-quoted JavaScript selectors; the table overflow check returned equal client and scroll widths.

---
