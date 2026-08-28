# Module Memory: sync-group-data

## Identity

- Module name: 同步集团数据
- Memory file: `.codex/skills/pb-module-memory/references/modules/sync-group-data.md`
- Status: developing (local verification complete; external transport and platform Quartz/menu registration remain manual)
- Owner/requester: user
- Last updated: 2026-08-20

## Business

- Goal: 将 `PARTY_MEMBER`、`PARTY_ORGANIZATION` 映射为集团党建数据标准表，首期只维护本地镜像，不实现集团推送或跨库访问。
- Users/roles: 党建平台管理员、集团数据维护人员。
- Main workflow: 首次全量同步或页面手动同步 -> 组织按层级 Upsert -> 党员 Upsert -> 缺失/失效源记录逻辑删除 -> 记录批次结果与异常。
- Important rules:
  - 源表是唯一准源，人工修改镜像表会在下一次同步被覆盖。
  - 目标 `ID` 首次生成 32 位无连字符 UUID，并永久保留；`SYNC_SOURCE_ID` 用于匹配源表记录。
  - 有效行入库，问题行隔离；组织父级缺失、必填字段缺失和员工编码格式错误写入批次异常。
  - 页面删除为逻辑删除；同步恢复时重新置为有效。
- Out of scope: 集团接口、文件交换、跨库访问、集团标准码表转换。

## PB Low-Code Surface

- Forms: `WebRoot/avicit/pb/groupsync/GroupDataSyncManage.jsp`，表单字段由前端白名单动态生成。
- Views: `platform/avicit/pb/groupsync/groupSyncController/toManage`。
- Workflows: none。
- Menus: 不自动创建，平台管理员手工关联 JSP 地址。
- Permissions: 首期沿用模块访问权限；后续可为 `api/save`、`api/delete`、`api/sync` 单独配置权限。
- Dictionaries/config: 党组织职务使用 `PARTY_POST`，公司名称取平台根党组织名称；集团码表尚未接入。
- Manual platform steps: 执行 `db/group_data_sync.sql`；注册 Bean `groupDataSyncJob` 为 Quartz 每日 `02:00` 任务；配置菜单指向 `toManage`。

## Data

- Tables:
  - `DYN_DY_PARTY_MEMBER`
  - `DYN_DZZ_PARTY_ORGANIZATION`
  - `DYN_GROUP_SYNC_LOG`
  - Sources: `PARTY_MEMBER`, `PARTY_ORGANIZATION`, `PARTY_ORGAN_MEMBER`, `SYS_USER`, `SYS_LOOKUP_V`
- Required audit fields checked: yes (all three new tables use the required eight columns first)
- SQL/migration notes: `db/group_data_sync.sql` uses Dameng/Oracle-compatible `VARCHAR2`/`DATE`/`NUMBER`; `DATETIME` display fields are stored as `DATE`.
- Data backfill or cleanup: first manual sync is full; no physical cleanup.
- Risky DB assumptions:
  - `PARTY_MEMBER.STATUS='1'` and `PARTY_ORGANIZATION.VALID_FLAG='1'` are treated as active.
  - `SYS_USER.MOBILE` exists in the current platform schema.
  - `PARTY_POST` lookup names contain `书记`/`副书记`; codes `0/1/2` are fallback matches.

## Files

- JSP/JS/CSS: `WebRoot/avicit/pb/groupsync/GroupDataSyncManage.jsp`.
- Java/classes:
  - `src/avicit/pb/groupsync/service/GroupDataSyncService.java`
  - `src/avicit/pb/groupsync/controller/GroupDataSyncController.java`
  - `src/avicit/pb/groupsync/job/GroupDataSyncJob.java`
- Mapper XML: none; service uses whitelisted `JdbcTemplate` SQL.
- Properties/config touched: none; Quartz registration is a platform manual step.
- Generated or uploaded assets: none.

## Pitfalls And Decisions

- Pitfalls:
  - Do not use target generated UUID as a new value on every run; it must remain stable.
  - Do not allow arbitrary table/column names from HTTP parameters; controller passes a type and service resolves a fixed whitelist.
  - Do not physically delete rows because the group standard needs deletion state and source recovery.
- Debug notes: page status and batch log expose total/success/error/deleted counts; row errors are capped before writing to the CLOB.
- Rejected approaches: group push/API integration in the first release; daily full-table drop/rebuild; using source IDs as group IDs.
- User preferences: provide the JSP address and let the user link the menu manually; do not auto-create menus.

## Verification

- Local URL/menu path: `platform/avicit/pb/groupsync/groupSyncController/toManage` (requires login and menu association).
- Test data: existing `PARTY_MEMBER` / `PARTY_ORGANIZATION`; add one invalid source row for isolation testing.
- Checks performed: `db/group_data_sync.sql` executed successfully in local DM8 `DJ` schema; PB audit-field checker passed; JDK 8 compilation passed into `WebRoot/WEB-INF/classes`; Tomcat and Redis restarted; `/pb/login` returned HTTP 200; unauthenticated module access returned HTTP 302 to the login page; authenticated browser smoke test loaded the JSP tabs and API data.
- Runtime verification: manual sync completed twice with `success=176`, `errors=12`, `deleted=0`; target counts remained `DYN_DY_PARTY_MEMBER=173` (173 distinct group IDs) and `DYN_DZZ_PARTY_ORGANIZATION=3` (3 distinct group IDs), proving repeat sync did not duplicate rows. The 12 isolated errors were recorded in `DYN_GROUP_SYNC_LOG.ERROR_MESSAGE`: 5 target-column string truncation rows, 6 rows missing organization `ID`/`PARTY_CODE`/`PARTY_NAME`, and 1 row whose parent organization was not synchronized.
- Runtime fix: corrected the sync-log insert placeholder count from 17 to 16 to match its 16 columns; recompiled and restarted Tomcat before the successful rerun.
- Schema comments: added table and column comments for all 46 columns of `DYN_DY_PARTY_MEMBER` and all 35 columns of `DYN_DZZ_PARTY_ORGANIZATION`; verified the comments in DM8 data dictionary views. DM8 local comment execution must use its expected GBK input encoding even though the source SQL file remains UTF-8.
- Known gaps: exact group code dictionaries and formal external table names are not yet integrated.

## Recent UI Change

- The member and organization lists now use row checkboxes with a header select-all checkbox.
- The edit action requires exactly one selected row; the delete action submits all selected IDs to `api/deleteBatch`.
- Batch deletion remains logical deletion and is restricted by the fixed `member`/`organization` table whitelist and the current `ORG_IDENTITY`.
- Fixed the apparent batch-delete failure: deletion succeeded, but the original list query included `*_DELETE_FLAG=1` rows. `api/list` now defaults to `status=active`, and also supports `deleted` and `all`; logically deleted rows therefore disappear from the default list while remaining auditable.
- The page now provides active/deleted/all filters, selected-row counts, summary counts, sticky headers, scrollable table viewports, responsive toolbars, and a module-local workbench style. No frontend framework or shared platform asset was added, and global/login/eform/BPM styles remain untouched.
- Real browser verification (authenticated Playwright): selected all 173 member rows, batch response reported `deleted=173`, active list became 0, and deleted filter returned 173; selected all 3 organization rows, UI displayed `已选择 3 条`, and active list became 0 after deletion. The final recovery sync reported `success=176`, `errors=12`, `deleted=0`, restoring 173 active members and 3 active organizations. Browser console contained no errors or warnings; desktop and 390x844 mobile layouts had no overlapping controls.
- Static/runtime verification: JDK 8 compilation passed for the controller/service, JSP inline JavaScript parsed with Node.js, `git diff --check` passed, frontend conflict scan returned zero warnings, Tomcat/Redis/DM8 health checks passed, and `/pb/login` returned HTTP 200.
- Log-detail verification: the authenticated browser opened the `同步批次` tab and clicked `查看详情`; the modal displayed batch metadata, a readable failure-cause summary, and the complete escaped raw exception text. The latest local partial batch has 12 isolated organization errors: 5 target-column string truncation errors (the target organization encoding column is `VARCHAR2(12)`), 6 rows missing `ID`/`PARTY_CODE`/`PARTY_NAME`, and 1 row whose parent organization was not synchronized. Browser console reported 0 errors and 0 warnings.

## Intranet Handoff

- Package path: pending.
- Files to copy: SQL script, compiled classes, controller/service/job classes, JSP, module memory.
- SQL/platform config to migrate: execute `db/group_data_sync.sql`; create Quartz job `groupDataSyncJob` with cron `0 0 2 * * ?`; link menu to `toManage`.
- Files/config not to copy: local test data, logs, screenshots, `.playwright-cli` artifacts.
- Intranet sync date: pending.
- Baseline update status: developing.

## Formal FINEDB Refactor (2026-08-25)

- Formal targets from screenshots: `FINEDB.PULL_D12_PTY_MBR_BASIC_INFO` (PK `RYJBXX_GROUP_EMPLOYEE_COPE`, `VARCHAR(8)`) and `FINEDB.PULL_D12_PTY_ORG_BASIC_INFO` (PK `DZZ_PARTY_ORGANIZATION_UNIQUE_ID`, `VARCHAR(32)`). Formal columns retain screenshot lengths and NOT NULL rules; no PB audit fields are added to formal tables.
- PB metadata tables are `DYN_GROUP_SYNC_ID_MAP`, `DYN_GROUP_SYNC_REJECT`, and `DYN_GROUP_SYNC_LOG`; all new PB tables begin with the eight mandatory audit columns.
- New service: `GroupFormalDataSyncService`; organization rows are processed before members, source IDs map to stable target UIDs, root parent uses `00000000000000000000000000000000`, and child parents resolve through ID_MAP. Same-JVM sync lock is enabled.
- REST: `api/rest/page`, `api/rest/sync`, `api/rest/logs`, `api/rest/health`; page size is clamped to 200, fixed ordering is update timestamp plus formal PK, and caller IP is logged. `formalSync` requires administrator role. The original maintenance endpoints remain available and are backed by the formal tables; import/export now read/write formal column names rather than the retired DYN business tables.
- Validation rejects null/overlong values and missing parent/member organization with explicit `DYN_GROUP_SYNC_REJECT` rows. Full-batch deletion is intentionally not enabled until production ID_MAP comparison and complete-batch proof are confirmed; incremental/partial/system-failure batches never delete.
- Verification: JDK8 compile passed for formal service/controller/job; formal SQL audit check passed; local DM8 formal tables are installed and the fixture sync/negative cases passed. Authenticated REST list/get/logs/health/page, formal ZIP export (HTTP 200/application/zip) and re-import (HTTP 200, imported=1) were verified after the latest Tomcat restart. Upgrade SQL is a manual backup/rename/rollback guide and is not a table DDL input to the audit checker.
- External acceptance prerequisites: local DM8 has no `FINEDB` user/schema and therefore cannot install the screenshot-defined formal tables under the service's production-qualified names; the production DBA must create/authorize `FINEDB` and execute the fresh/upgrade SQL. Local Shiro dynamically loads filter chains and unauthenticated health/page/logs requests redirect to login; the intranet gateway/platform administrator must whitelist the three paths for approved source IPs (no Token) before JSON/IP-log acceptance.

## Original Maintenance Surface Restored (2026-08-25)

- Baseline from the parent of `c2225b5` is authoritative: query, pagination, view/detail, add, edit, single/batch physical delete, organization ZIP export/import, manual sync, batch log/detail, and platform permission checks remain in the JSP/controller.
- `GroupFormalDataSyncService` is now the storage adapter for list/get/save/delete/sync/logs/export/import. The formal tables are strict mirrors, so the adapter maps the historical employee-code alias `DY_JBXX_GROUP_EMPLOYEE_CODE` to formal `RYJBXX_GROUP_EMPLOYEE_COPE` and validates every formal NOT NULL/length rule before writes.
- The old `GroupDataSyncService` class remains in the source tree for unrelated historical helpers, but the controller no longer calls its DYN business-table list/save/delete/export/import methods.
- Browser verification: `admin/cape` authenticated after the latest restart; the restored maintenance URL returned HTTP 200 with title `同步集团数据` and the original CRUD/import/export/sync controls. Account `910001` remains an API-only account because its Shiro menu permission is intentionally absent.

## Final Verification (2026-08-18)

- Seed verification remains 15 organizations, one root, no invalid or orphan parent rows, and every organization has secretary/deputy test personnel.
- Recompiled touched classes with JDK 8, restarted Tomcat/Redis, and `/pb/login` returned HTTP 200.
- Manual full sync after restart returned `total=188`, `success=188`, `errors=0`, `deleted=0`; repeat sync kept the same mirror row counts.
- Fresh authenticated exports: organization ZIP contains 15 workbooks; member ZIP contains 5 workbooks grouped by organization. Workbooks have Chinese visible headers, hidden dictionary/technical columns, Chinese dictionary validation lists, and `yyyy-mm-dd` Excel date cells including locked timestamps.
- Valid member import with Chinese gender and date imported 35 rows, stored platform code `2`, and stored the edited date. A subsequent full sync retained the imported override. Invalid Chinese dictionary input returned an error report with filename and row number. A legacy English-header workbook imported successfully.
- Browser smoke checks passed at desktop and 390x844 mobile viewports with zero console errors/warnings; frontend conflict scan remained zero warnings.
- Import/export UX is unified: only the organization tab exposes ZIP import/export; each workbook still contains the read-only organization sheet and editable member sheet. The old member-tab buttons were removed from the JSP. The backend keeps the fixed member export branch only for backward compatibility and does not expose it in the page.

## Pre-Intranet Bug Audit (2026-08-20)

- Rechecked the groupsync controller/service/job with JDK 8 compilation, `git diff --check`, JSP inline JavaScript parsing, frontend conflict scanning, and PB runtime health checks.
- Fixed ZIP export filename collisions: duplicate or blank organization short names now receive deterministic numeric suffixes instead of duplicate ZIP entry names.
- Restarted the project with the PB Tomcat 7 starter after the service recompilation; DM8, Redis, Tomcat 7 and `/pb/login` returned healthy results. Unauthenticated module access still redirects to login.
- Existing authenticated browser regression evidence remains valid: full sync twice (`total=188`, `success=188`, `errors=0`, `deleted=0`), 15 organizations, 173 members, no duplicate mirror rows, unified organization ZIP import/export, strict date validation, permissions, and zero browser console warnings/errors.
- No code-level blocker found in the audited module. Intranet deployment still requires executing the schema SQL once, copying the compiled groupsync classes/JSP, linking the menu, registering the `groupDataSyncJob` Quartz cron, and confirming the group's official table names, dictionaries, governance fields, and collection frequency.

## 2026-08-21 Intranet Delivery Preparation

- Source-only release closure: `WebRoot/avicit/pb/groupsync/GroupDataSyncManage.jsp`, the groupsync controller/service/Quartz job under `src/avicit/pb/groupsync/`, and `db/group_data_sync.sql` plus `db/group_sync_override_patch.sql`.
- Do not deliver `scripts/SeedGroupSyncTestData.java` or `scripts/seed-group-sync-test-data.ps1`; they are local verification tools only.
- Before enabling the module in intranet, execute the schema SQL in order, configure the menu URL `platform/avicit/pb/groupsync/groupSyncController/toManage`, and register Quartz bean `groupDataSyncJob` with cron `0 0 2 * * ?`. Confirm the official group table/dictionary/governance contract before any external transport is added.
- Delivery package: `D:\pb-release\内网部署-党委计划3.0-集团数据同步-通用消息接口-20260821-082500` and its same-name ZIP. Both coverage checks matched all 11 deployment candidates; no `.class` files were included.

## Next Time

- Read first: this file, `db/group_data_sync.sql`, `GroupDataSyncService.java`。
- Likely change points: field mapping in `GroupDataSyncService`, group code conversion, Quartz job parameters, JSP field metadata。
- Do not touch without confirmation: source `PARTY_MEMBER`/`PARTY_ORGANIZATION` schemas, external group transport, physical deletion behavior。

## Packaging Incident And Permanent Rule (2026-08-26)

- Incident: the JSP in a package was the newest committed file but still issued the retired `api/list` request. The formal Controller contract used `api/rest/page` (GET), so the intranet page reported a generic service failure when retired DYN-table access was unavailable.
- Permanent packaging rule: “latest commit” is not “latest accepted behavior”. Before every intranet package, run an authenticated browser/network smoke test and compare each observed page request (path, context path, HTTP method, status, and JSON body) with the current Controller contract. Search the package for retired endpoint strings and old DYN-table routes; any reachable mismatch blocks delivery.
- The PB context path is environment-specific (for example `/V6R343`); JSP must derive it from `request.getContextPath()`. Documentation must not substitute `/pb` as a literal production context.
- A source-only Java package must explicitly include JDK8 compilation into `WebRoot/WEB-INF/classes` and a Tomcat restart/health check. Do not call it directly runnable until those steps and the route smoke test pass.

## Group Document Gap Review (2026-08-18)

- The page now exposes one unified import/export entry under the organization tab. Each organization workbook contains both the organization sheet and member sheet; the member tab has no separate import/export buttons.
- The group document also requires source/reference tables to use `PULL`, receiving tables to use `PUSH`, and an `LXX_` domain-group identifier. The current local mirror uses `DYN_*` names because the group-side formal transport/table contract has not been supplied.
- The document requires required fields to be non-null, foreign-key relationships to be valid, and enumerations to transmit both standard code and display value. Local sync validates core required fields and organization hierarchy, but official group dictionaries and a formal code/value transport contract are still pending.
- The document requires every collected table to include `secret_level`, `security_level`, and `important_level`. These three governance fields are not in the current mirror tables and must be confirmed with the group before production integration.
- The organization table is marked as monthly collection in the document, while the current local Quartz design is daily at `02:00`; the production schedule must be confirmed with the group.
- The current release does not implement group API push, file transfer, cross-database access, or data-center ingestion. It is a tested local mirror and maintenance module, not a complete end-to-end group integration.
- Intranet deployment still requires running `db/group_data_sync.sql`, copying the JSP and compiled classes, linking the menu, registering Quartz, and verifying source schema/dictionary/role assumptions. Local seed/test-data scripts must not be deployed to production.

## Import And Export Update (2026-08-17)

- National/group standard code dictionaries are explicitly deferred until the user supplies the official code table. Existing platform codes remain unchanged and no codes are fabricated.
- Added `DYN_GROUP_SYNC_OVERRIDE` with the mandatory eight PB audit fields first. It stores field-level Excel import overrides so source synchronization continues to refresh non-overridden fields without erasing organization-maintained values.
- Export endpoint: `api/exportZip`. Administrators can export all active organizations or a selected subset. Each organization produces one `.xlsx` in the ZIP with `党组织信息` and `党员信息` sheets.
- Import endpoint: `api/import`. It accepts `.xlsx` and `.zip`; each workbook is validated independently so one invalid organization file does not block other files. Invalid files return a generated Excel error report.
- Export workbooks use true Excel date cells with `yyyy-MM-dd`, hidden and locked identity columns, locked computed/system fields, protected sheets, a frozen header row, and 20 editable blank member rows for organizations that need to add members.
- Imported edits and new members are persisted in the mirror tables; existing row edits also write field-level overrides. Excel import never deletes existing rows.
- Backend permission enforcement uses platform roles `党委一级管理员` and `平台管理员`. Other users can only export/import organizations linked through `PARTY_ORGAN_MEMBER.USER_ID -> PARTY_ID`.
- JSP delete and immediate-sync actions now use inline second-click confirmation rather than `window.confirm`. Business date fields use the platform date picker and are read-only for keyboard entry; system timestamps remain read-only.
- Verified with JDK 8 compilation, real authenticated browser login, inline confirmation without mutation, ZIP download, workbook sheet/date/protection inspection, successful ZIP re-import, and an import-override persistence test across a full sync. The temporary override test value was restored afterward.

## Intranet Fixes (2026-08-21)

- Intranet timestamps are normalized on read for list/detail/log responses and parsed from 10-digit seconds or 13-digit milliseconds on save/import; this fixes edit forms that previously submitted timestamp values back into date fields.
- Member and organization lists now use server-side pagination with a default page size of 20 and a maximum of 200 per request.
- `db/group_data_sync.sql` uses wider string columns, and `db/group_sync_physical_delete_patch.sql` provides the ALTER TABLE migration for existing installations. The migration first physically removes rows already marked deleted.
- Single and batch deletes now physically delete records. Deleting an organization also physically deletes its mirror members; sync cleanup physically deletes source rows missing from the current batch. The old delete-flag columns remain only for compatibility with existing data and SQL.
- Organization ZIP exports no longer enable worksheet protection; visible exported cells are editable in Excel. Hidden technical columns remain hidden.
- Intranet deployment must execute the base schema for fresh installs or the physical-delete/column-width patch for existing installs. Do not execute the patch without reviewing the destructive DELETE statements against the target database.

## Intranet Education/Degree Lookup (2026-08-27)

- During member sync, `group_user_code` is used to query the intranet HR tables `RLZY.HR_USER@ry` and `RLZY.HR_USER_EDUCATION@ry`.
- The query selects the latest education record by `graduation_date desc`; dictionary IDs are fixed as education `HI000000000000000007` and degree `HI000000000000000008`.
- Missing rows, empty dictionary values, unavailable remote HR tables, or lookup exceptions return empty education/degree values and do not fail the member sync row.
- Updated source: `src/avicit/pb/groupsync/service/GroupFormalDataSyncService.java`; compiled into `WebRoot/WEB-INF/classes` and verified after Tomcat/Redis restart with `/pb/login` HTTP 200.

## Organization Fixed Fields And Establishment Date (2026-08-28)

- Organization sync always writes these fixed values: company `中国航发哈尔滨东安发动机有限公司`, organization encoding `ZGHFDADW`, administrative area `哈尔滨市`, unit situation `中国航发东安`, and approving upper organization full name `中国共产党中国航发哈尔滨发动机有限公司委员会`.
- Establishment date uses the source organization ID to query `select zkdydh from DYN_PARTY_ORG_INFO where party_id=? order by CREATION_DATE limit 1`.
- If `DYN_PARTY_ORG_INFO` is unavailable locally, the query fails, no row exists, or `zkdydh` is null, the formal establishment date stays null and the organization row continues syncing. The old `1970-01-01` fallback was removed.
- Updated `GroupFormalDataSyncService.java`, compiled with JDK8 into `WebRoot/WEB-INF/classes`, restarted DM8/Redis/Tomcat, and verified `/pb/login` HTTP 200.

## Member Fixed Fields, MDM Lookup And Date Display (2026-08-28)

- Member sync always writes company `中国航发哈尔滨东安发动机有限公司`, job position `公有经济控制企业专业技术岗位`, and operating organization `中国航发东安党委`.
- Member unique ID is concatenated without separators as `ZGHFDADW + source party organization name + group employee code`.
- New social stratum type, entry-system operating party ID, and exit-system operating party ID remain empty; they are no longer replaced with `UNKNOWN`.
- `DYN_MDM_RY` is queried by `JTYGBM` for `ZC` and `CJGZRQ`, mapped to professional position and entry-system date. Missing local table, no rows, null values, or query exceptions leave both fields empty and do not fail member sync. Entry-system date is no longer replaced with `1970-01-01`.
- Member unique ID was added to both the list and edit dialog. Frontend/backend epoch conversion now accepts negative Unix seconds and distinguishes 10-digit seconds from 13-digit milliseconds; screenshot sample `-117878400` renders as `1966-04-08`.
- Migrant-worker status is always stored directly as Chinese text `否`; source `ATTRIBUTE_10` is intentionally ignored. Manual/import normalization stores only `是` or `否` in the database.
- Updated `GroupFormalDataSyncService.java` and `GroupDataSyncManage.jsp`; JDK8 compile, JSP JavaScript parse, frontend conflict scan (0 warnings), DM8/Redis/Tomcat restart, and `/pb/login` HTTP 200 all passed.
