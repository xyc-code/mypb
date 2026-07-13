# Module Memory: party-committee-work-plan-3

## Identity

- Module name: 党委计划 3.0
- Memory file: `.codex/skills/pb-module-memory/references/modules/party-committee-work-plan-3.md`
- Status: local-verified
- Owner/requester: xyc
- Last updated: 2026-07-13
- Non-negotiable isolation rule: 党委计划 3.0 是全新的独立模块，必须始终与之前做的党委计划下发模块没有任何关系；运行期不得复用旧 `avicit/pb/dwworkplan` 后端命名空间、旧接口、旧表 `DYN_DW_PLAN_*`、旧菜单或旧业务闭环；允许在 3.0 自有 JSP/JS/CSS/Service/SQL 中复刻旧版页面形态、交互和表结构。

## Business

- Goal: 将 `index.html` OpenDesign 原型落地为一个独立的党委计划 3.0 单页 JSP 模块。
- Users/roles: 党委计划下发者、部长、室主任、科员。
- Main workflow: 党委创建季度批次和根任务；党委下发给部长；部长接收后下发给室主任；室主任接收后下发给科员；科员提交反馈；上级逐级确认或退回；统计看板按状态、层级、逾期实时汇总。
- Important rules:
  - 与旧 `avicit/pb/dwworkplan` 和 `DYN_DW_PLAN_*` 完全隔离。
  - 不自动关联菜单，用户自己关联菜单。
  - 逾期按截止时间实时计算，不落单独逾期状态。
  - 党委根任务可以直接下发；部门和科室任务需先接收再继续下发；科员不能继续下发。
  - 未接收的下级任务允许发送方拿回。
- Out of scope:
  - 不修改旧党委计划模块。
  - 不使用 BPM。
  - 不接平台附件接口，首版使用本模块附件表。

## PB Low-Code Surface

- Forms: 单页自定义 JSP。
- Views:
  - `platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex`
- Workflows: 不使用 BPM 流程。
- Menus: 不自动创建或修改菜单。
- Permissions: 菜单权限由平台配置；数据权限由 `DYN_DW_PLAN3_PERSON_TREE` 决定。
- Dictionaries/config: 角色、层级、状态在 `DwWorkPlan3Constants` 中维护。
- Manual platform steps: 将菜单 URL 指向 `platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex`。

## Data

- Tables:
  - `DYN_DW_PLAN3_BATCH`
  - `DYN_DW_PLAN3_PERSON_TREE`
  - `DYN_DW_PLAN3_TASK`
  - `DYN_DW_PLAN3_FEEDBACK`
  - `DYN_DW_PLAN3_ATTACHMENT`
  - `DYN_DW_PLAN3_GRASSROOT_DISPATCH`
- Required audit fields checked: yes
- SQL/migration notes: SQL 文件为 `db/dw_work_plan_3.sql`。
- Data backfill or cleanup: 无，旧模块不迁移。
- Risky DB assumptions: Dameng/Oracle 兼容语法；索引名使用 `PLAN3` 前缀避免与旧模块冲突。

## Files

- JSP/JS/CSS:
  - `WebRoot/avicit/pb/dwworkplan3/index.jsp`
  - `WebRoot/static/pb-modern/dwworkplan3/opendesign-index.html`
  - `WebRoot/static/pb-modern/dwworkplan3/opendesign-api-bridge.js`
  - `WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.css`
  - `WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js`
- Java/classes:
  - `src/avicit/pb/dwworkplan3/controller/DwWorkPlan3Controller.java`
  - `src/avicit/pb/dwworkplan3/service/DwWorkPlan3Service.java`
  - `src/avicit/pb/dwworkplan3/dto/DwWorkPlan3Constants.java`
- Mapper XML: 无，首版沿用 `JdbcTemplate`。
- Properties/config touched: 无。
- Generated or uploaded assets: 无。

## Pitfalls And Decisions

- Pitfalls:
  - 旧模块仍在 `avicit/pb/dwworkplan`，不要误改。
  - 3.0 是单页入口，验证脚本只检查 `index.jsp`。
  - 页面使用 PB H5 include 和本地 ECharts，不引入 CDN。
- Debug notes:
  - 本地 URL: `http://127.0.0.1:8080/pb/platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex`
- 2026-06-30 correction:
  - 用户明确要求：党委计划 3.0 页面必须按当前项目根目录 `index.html` 的 OpenDesign 原型实现，不能做成之前党委计划下发模块的工作台样式。
  - 3.0 的前端文件仍只允许使用 `WebRoot/avicit/pb/dwworkplan3/index.jsp` 与 `WebRoot/static/pb-modern/dwworkplan3/*`，后端只允许使用 `src/avicit/pb/dwworkplan3/*` 和 `DYN_DW_PLAN3_*`。
- 2026-06-30 page revision:
  - 用户明确要求：页面不需要任务编号；角色名称必须显示中文；新增、编辑、详情、反馈、人员维护用当前 JSP 内二级弹出页面；统计看板必须用本地 ECharts；人员配置改为 zTree + 右侧详情，不再使用自绘人员树。
  - 3.0 继续是独立模块，和之前党委计划下发没有任何关系；不得因本次 UI 修正复用旧模块页面、旧后端或旧表。
- 2026-06-30 OpenDesign reset:
  - 用户明确否定重做后的 JSP 视觉效果，要求“就用我给你的 index.html，不用整 JSP，直接用它对接接口”。
  - 决策：`toIndex` 仍保留为唯一菜单入口，但 `index.jsp` 只作为全屏 iframe 容器；真实视觉页面放在 `opendesign-index.html`，内容由项目根目录 `index.html` 机械生成，并追加 `opendesign-api-bridge.js` 对接 3.0 API。
  - 原型 `index.html` 自带全局 `body/button/table/.modal/.btn` 样式；为了既保持原型效果又避免污染 PB 平台，必须通过 iframe 隔离承载，不要再把整份原型 CSS 直接塞进平台 JSP。
  - `opendesign-api-bridge.js` 只允许调用 `dwworkplan3` Controller API，仍不得引用旧 `avicit/pb/dwworkplan` 或旧 `DYN_DW_PLAN_*`。
- 2026-06-30 confirmed requirements:
  - 模块名称继续叫“党委计划 3.0”，页面风格和布局继续使用项目根目录 `index.html`。
  - 每个季度可以创建多个党委根任务；季度批次只是分组，不限制任务数量。
  - 最新规则覆盖旧规则：所有层级同一任务只要已经下发过一次，就不能再次下发；室主任也不能再把同一任务拆分给第二个科员。
  - 反馈上级必须支持确认和退回；退回时必须填写退回意见。
  - 人员树新增节点必须维护平台用户 ID/登录账号，否则不能作为真实任务接收人。
- Rejected approaches:
  - 复用旧模块表和旧菜单。
  - 三页拆分入口。
  - 接平台附件接口作为首版。
- User preferences:
  - 做好后只提供 JSP 地址，由用户自己关联菜单。

## Verification

- Local URL/menu path: `platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex`
- Test data: `scripts/seed-verify-dwworkplan3.ps1` creates repeatable DW3-prefixed personnel, batch, task, and feedback rows.
- Superseded 2026-06-30 bugfix memory: earlier behavior auto-created a party root for a login user without a 3.0 personnel node. This is no longer valid; see 2026-07-03 root-node rule below.
- Checks performed:
  - `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed.
  - `scripts/verify-dwworkplan3.ps1` passed.
  - PB audit-field checker passed for `db/dw_work_plan_3.sql`.
  - PB frontend guardrail scan checked 3 files; 2026-06-30 rerun returned 0 warnings.
  - 2026-06-30 `DWWORKPLAN3_PAGE_CONTRACT_OK`: JSP DOM IDs and JS API calls match the OpenDesign-style 3.0 page contract.
  - 2026-06-30 scan found no old `avicit/pb/dwworkplan` or old `DYN_DW_PLAN_*` references inside 3.0 files.
  - 2026-06-30 layout update added `planOverview`, `viewSubtitle`, and `list-toolbar`; page contract check returned `DWWORKPLAN3_PAGE_LAYOUT_CONTRACT_OK`.
  - 2026-06-30 `scripts/seed-verify-dwworkplan3.ps1` returned `DWWORKPLAN3_BUSINESS_OK`, leaving 7 DW3 test tasks and 3 confirmed feedback rows for page testing.
  - 2026-06-30 local Tomcat `toIndex` returned login redirect `302`, 3.0 CSS/JS returned `200`, startup log mapped 25 dwworkplan3 routes and had no `ERROR`/`SEVERE` lines.
  - 2026-06-30 page revision verification: removed task number UI and `taskCode`; local ECharts asset returns 200; zTree plugin is loaded on demand from local PB assets; frontend guardrail scan of 3 JSP/JS/CSS files returned 0 warnings.
  - 2026-06-30 runtime check after page revision: local Tomcat restarted; login page returned 200; 3.0 entry returned 302 login redirect and 200 after following redirect; 3.0 JS/CSS/ECharts/zTree resources returned 200; startup log mapped all 3.0 routes and had no new `ERROR`/`SEVERE` level lines.
  - 2026-06-30 OpenDesign reset verification: `index.jsp` is now a thin iframe wrapper; `opendesign-index.html` is generated from root `index.html`; `opendesign-api-bridge.js` maps the prototype data/actions to 3.0 APIs. Inline JS syntax check and bridge `node --check` passed; PB frontend guardrail scan of iframe JSP + bridge returned 0 warnings; browser harness loaded the OpenDesign page and opened the create-task modal with no console errors.
  - Superseded 2026-06-30 verification note: the old “office director can split to two staff tasks” behavior is no longer valid. Latest verification requires second dispatch from the same task to fail for every role.
  - JDK 8 `javac` compile passed for `DwWorkPlan3Constants`, `DwWorkPlan3Service`, and `DwWorkPlan3Controller`.
  - Local DM SQL executed successfully; all five `DYN_DW_PLAN3_*` tables are accessible.
  - Tomcat restarted; login page returns 200; 3.0 static JS/CSS return 200; unauthenticated `toIndex` returns 302 rather than 404.
  - Spring startup log maps `toIndex` and all planned 3.0 APIs, including `api/task/delete`.
- Known gaps: 首版无自动菜单配置；未做登录后人工全流程点击验收。

## Intranet Handoff

- Package path:
- Files to copy:
- SQL/platform config to migrate:
- Files/config not to copy:
- Intranet sync date:
- Baseline update status:

## Next Time

- Read first: 本文件。
- Likely change points: `DwWorkPlan3Service`、`dwworkplan3.js`、`index.jsp`、`db/dw_work_plan_3.sql`。
- Do not touch without confirmation: 旧 `src/avicit/pb/dwworkplan`、旧 `WebRoot/avicit/pb/dwworkplan`、旧 `DYN_DW_PLAN_*`。

## 2026-06-30 UI Borrowing Rule And Implementation

- 党委计划 3.0 remains an independent module. Runtime code and data must stay under `dwworkplan3` and `DYN_DW_PLAN3_*`; do not call old `avicit/pb/dwworkplan` controllers or use old `DYN_DW_PLAN_*` tables at runtime.
- The user clarified that "unrelated to the previous version" means no shared runtime code/data. It is allowed to borrow UI structure and interaction ideas from the old personnel tree and stats pages.
- Implemented the page as a PB JSP single-page module again, not the old iframe prototype: `WebRoot/avicit/pb/dwworkplan3/index.jsp` includes PB H5 resources, local ECharts, and scoped 3.0 CSS/JS.
- Personnel tree now follows the old table-tree + right detail form structure, with red 3.0 styling and platform `H5CommonSelect` for users.
- Stats now follows the old KPI + ECharts layout: status pie, level progress bar, overdue bar, and recent task table.
- New task creation is restricted to role `PARTY_SENDER`; the modal supports one department receiver, `保存草稿`, and `直接下发`.
- Added draft receiver fields on `DYN_DW_PLAN3_TASK`: `DRAFT_DEPT_NODE_ID`, `DRAFT_DEPT_USER_ID`, `DRAFT_DEPT_NAME`.
- Added `api/task/directDispatchRoot`; it saves/updates the root draft then dispatches through the existing 3.0 child-dispatch validation.
- Added SQL files: `db/dw_work_plan_3_patch_20260630.sql` and `db/dw_work_plan_3_import_person_tree.sql`.
- Local DB patch was executed on 2026-06-30. Old personnel tree was copied once into 3.0 with `CREATED_BY='DW_PLAN3_IMPORT'`; the old tables are not used after the import.
- Verification on 2026-06-30: JS syntax OK, PB frontend guardrail scan 0 warnings, PB audit field check passed, JDK 8 compile passed, `scripts/verify-dwworkplan3.ps1` passed, `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK`, temporary direct-dispatch verifier returned `DWWORKPLAN3_DIRECT_DISPATCH_OK`, Tomcat restarted, 3.0 entry returned 302 login intercept, 3.0 CSS/JS/ECharts returned 200, Spring mapped `api/task/directDispatchRoot`.
## 2026-06-30 Detail Fixes

- Applied user-requested detail fixes for 党委计划 3.0 only; old `avicit/pb/dwworkplan` runtime code and old `DYN_DW_PLAN_*` data remain untouched.
- Personnel tree behavior changed: row action buttons are shown only for the selected node; row edit button removed; right-side form is the edit surface; selected rows show add-child/delete actions.
- Personnel tree delete is now physical delete with protection: leaf-only and no task references through `PERSON_NODE_ID` or `DRAFT_DEPT_NODE_ID`.
- Work-plan query changed to year + quarter + status + keyword with a Search button. Default page load selects the latest batch's year/quarter and loads that data.
- New-task button is visible only on the work-plan tab and only for `PARTY_SENDER`.
- Task delete now returns a friendly missing-data message when the task no longer exists; batch delete filters selected rows to currently deletable tasks before calling the API.
- Header layout was adjusted: center module tabs remain, right actions are grouped, and tree hierarchy styling was strengthened with red role pills and hierarchy lines.
- Verification: `node --check` passed; JDK 8 compile passed; frontend guardrail scan returned 0 warnings; `scripts/verify-dwworkplan3.ps1` passed; PB audit-field check passed; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK`; temporary verifier returned `DWWORKPLAN3_DETAIL_FIX_OK`; Tomcat restarted; `toIndex` returned 302 and 3.0 JS/CSS returned 200.
## 2026-06-30 Personnel Tree Clarification

- User clarified: the 3.0 personnel tree should replicate the old version's page, JS interaction, and table design, but must not directly use the old module at runtime.
- Implementation boundary: `DYN_DW_PLAN3_PERSON_TREE` mirrors old `DYN_DW_PLAN_PERSON_TREE` columns while remaining a separate 3.0 table; one-time copy/import from old data is allowed, runtime reads/writes only `DYN_DW_PLAN3_*`.
- Root personnel node `党委` was updated in local DB to `USER_ID=1`, `USER_NAME=管理员`.
- Task delete rule changed per user: only `党委计划下发者` can see/use delete; deletion directly removes the selected task subtree and related 3.0 feedback/attachments.
- Personnel tree UI now follows the old table-tree + right-side detail form pattern: selected row shows only add-child, row has no edit/delete button, editing and deletion are handled from the right detail area. Styling keeps the old structure but uses red 3.0 colors.
- Verification: `node --check` passed, JDK 8 compile passed, PB frontend guardrail scan returned 0 warnings, seed verification returned `DWWORKPLAN3_BUSINESS_OK`, and temporary delete verifier returned `DWWORKPLAN3_DELETE_RULE_OK`.
- Cleanup note: DW3-prefixed verifier personnel/tasks/batches/feedback were removed from local DB after verification. Root-level PARTY_SENDER nodes were corrected through JDBC UTF-8 to USER_ID=1 and USER_NAME=管理员.
## 2026-06-30 Task Tree, Attachment, And Feedback Chain Fixes

- Independence remains mandatory: 党委计划 3.0 runtime must only use `dwworkplan3` code and `DYN_DW_PLAN3_*` tables. Old `avicit/pb/dwworkplan` code and old `DYN_DW_PLAN_*` tables may be studied or one-time imported from, but must not be runtime dependencies.
- Work-plan list now uses one top delete button only. Row-level delete is removed. Delete is visible/usable only for the 党委计划下发者 role and deletes the selected task subtree plus 3.0 feedback/legacy attachment records.
- Year and quarter query UI is combined into one period selector such as `2026/一季度`; internally it maps to `year` + `quarter`.
- Task list is rendered as a hierarchy using `PARENT_ID`, `ROOT_ID`, `TASK_LEVEL`, `CHILD_COUNT`, and `CHILD_OPEN_COUNT`. 党委计划下发者 sees all levels; other roles see their personnel-tree subtree.
- Work-plan tab shows a pending badge from `NOTICE_FLAG`. Rows display pending/overdue prompts and status colors: DRAFT gray, TODO orange, DOING red, WAIT_CHILD blue-gray, PENDING_CONFIRM purple, COMPLETED green, RETURNED/OVERDUE red.
- Attachments switched to PB platform `fileupload/uploaderExt` in the JSP (`importlibs=common,form,fileupload`). New task/dispatch/feedback uploads bind to task or feedback business IDs. The old 3.0 attachment table/API remains only for legacy compatibility.
- Take-back rule: sender may take back only an unaccepted child task (`TODO`). Take-back deletes that child. If the parent is the party root it returns to `DRAFT`; if the parent is department/office level it returns to `DOING`; accepted children cannot be taken back.
- Feedback rule: staff can only receive/complete/feedback. Department and office tasks may submit feedback directly after accept when they have no child tasks; if they have child tasks, all children must be completed first.
- Feedback chain remains layered upward. Submit/return/confirm use platform layer prompts. Return requires a reason. Confirmed child feedback is aggregated back into the parent feedback draft for the next-level submission.
- Verification on 2026-06-30: `node --check` passed; PB frontend conflict scan returned 0 warnings; JDK 8 compile passed; `scripts/verify-dwworkplan3.ps1` passed; enhanced `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` and now covers take-back recovery status, accepted-task take-back rejection, department/office direct feedback, tree-list fields, and pending notice fields.
- Runtime check on 2026-06-30: Tomcat was restarted; login page returned 200; unauthenticated `toIndex` returned 302 to login, not 404; 3.0 JS/CSS/ECharts/uploader resources returned 200; Spring startup log mapped the 3.0 page and API routes including `api/task/list`, `api/task/takeBack`, `api/task/delete`, `api/feedback/submit`, `api/feedback/confirm`, and `api/feedback/return`.

## 2026-06-30 Permission, Attachment, And Feedback Detail Polish

- Independence still applies: 党委计划 3.0 runtime only uses `dwworkplan3` and `DYN_DW_PLAN3_*`; old module code/tables remain non-runtime references only.
- Personnel tree API now filters by current personnel node: party sees all, department/office see their own subtree, staff sees no personnel maintenance data.
- Stats API now filters by the same personnel subtree instead of loose sender/receiver matching; stats page defaults to the latest batch.
- Task dispatch rejects the same parent task being sent repeatedly to the same receiver. Office directors may still split to multiple different staff.
- Platform uploader options now disable preview and save-to-online-disk. Existing task/feedback files are shown through readonly uploader containers in edit/detail/dispatch/feedback views.
- Feedback page is now a full secondary page: task detail, task attachment, completion content, feedback attachment, and feedback chain are shown together.
- Feedback chain preserves history. Returned feedback is not overwritten; resubmission creates a new pending row while the returned row, reason, and feedback time stay visible.
- Feedback records show feedback time, return reason, attachments, styled status badges, and action buttons labelled 通过/退回. Return uses a larger platform layer textarea and no extra confirm dialog.
- Staff action label changed to 去完成; parent tasks with confirmed children show 向上级反馈. Task row notices, action buttons, row density, role selector width, and tree expand buttons were polished in scoped 3.0 CSS.
- Personnel tree rows now show explicit level tags: 党委、部门、科室、科员.
- Verification on 2026-06-30: `node --check` passed; PB frontend conflict scan returned 0 warnings; JDK 8 compile passed; `scripts/verify-dwworkplan3.ps1` passed; enhanced `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` and covers subtree person/stats visibility, duplicate dispatch rejection, returned-feedback preservation, feedback time/reason fields, and existing task/feedback flow.
- Runtime check on 2026-06-30: Tomcat restarted; login page returned 200; unauthenticated `toIndex` returned 302 to login; 3.0 JS/CSS/ECharts/uploader resources returned 200; Spring log mapped 3.0 routes including the request-aware `api/person/list`.

## 2026-06-30 Second Permission, Attachment, And Feedback Revision

- Independence remains mandatory: 党委计划 3.0 is a standalone module. Runtime code must stay under `dwworkplan3`; runtime data must stay under `DYN_DW_PLAN3_*`. Do not call old `avicit/pb/dwworkplan` controllers or read/write old `DYN_DW_PLAN_*` tables at runtime.
- Current user corrections: child users must see parent dispatch attachments; staff must see office attachments; feedback attachments should be presented compactly as download links/list entries; returned feedback must preserve history and allow a new upload on resubmission.
- Personnel tree UI requirement tightened: tree table shows only node name, user, and sort order. Department and office users see their own node as the current view root plus descendants. Staff users see only the work-plan tab.
- Stats visibility requirement tightened: party sees all; department and office users see current personnel node and descendants only; staff users do not enter stats. Stats defaults to the latest batch.
- Dispatch rule changed again: once any task already has a child task, the dispatch button must disappear and backend `api/task/dispatch` must reject all repeat dispatch attempts, including office-to-second-staff cases.
- Feedback list requirement tightened: `api/feedback/list` must return feedback for the full task subtree, not just the current task and direct children, so party can see the complete lower-level feedback chain.
- Test data rule: verification may create only `DW3_*`/`DW3 test%` marked rows and must clean only those marked rows. Never delete user data without those DW3 test markers.

## 2026-07-01 Attachment Chain Fix

- Fixed 党委计划 3.0 attachment-chain issues while preserving the independent-module rule: runtime code remains under `dwworkplan3`, runtime data remains under `DYN_DW_PLAN3_*`, and no old `avicit/pb/dwworkplan` controller or old `DYN_DW_PLAN_*` table is used.
- Platform attachment logical IDs are now fixed and shared across upload/read-only views: task attachments use `dwTaskAttachment`, feedback attachments use `dwFeedbackAttachment`; DOM container IDs are no longer used as platform attachment business element IDs.
- `DwWorkPlan3Service.listTasks` enriches rows with `TASK_ATTACHMENT_COUNT`, `PARENT_ATTACHMENT_COUNT`, and `HAS_PARENT_ATTACHMENT` using PB `SwfUploadService.getFileListByFormId(formId, elementId)` plus legacy 3.0 attachment ID compatibility.
- `DwWorkPlan3Service.listFeedback` enriches rows with `FEEDBACK_ATTACHMENT_COUNT` and `HAS_ATTACHMENT`, so the UI can hide empty feedback attachment cells.
- Feedback submission now waits for platform uploader `afterUpload` before closing the modal and refreshing. If upload fails, the modal stays open for retry. Returned feedback resubmission binds uploads to the new feedback ID.
- Feedback-chain attachments no longer render inline uploader controls in table cells. Rows with attachments show a compact `查看附件` button, which opens a platform layer read-only attachment viewer with preview/save-to-online-disk disabled.
- Staff and child task pages read direct task and direct-parent task attachments with the stable task logical element ID, so staff can see office-dispatched files and child levels can see direct parent attachments.
- Verification on 2026-07-01: `node --check` passed; duplicate JS function scan confirmed one active definition each for `openFeedback`, `showTaskDetail`, `feedbackHtml`, `initPlatformUploader`, `openDispatchTask`, and `resetTaskModal`; no inline feedback uploader remained in JS; 3.0 old-module reference scan returned no matches; JDK 8 compile passed; frontend conflict scan covered the 3 JSP/JS/CSS files and returned 0 warnings; `scripts/verify-dwworkplan3.ps1` passed; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` with `testDataCleanup=OK`.
- Runtime on 2026-07-01: Tomcat `/pb` context was updated to the current workspace `C:\Users\xyc\Desktop\codeXPorject\pb\pb\WebRoot`, Tomcat was restarted with JDK 8 and `-Xss16m`, login returned 200, 3.0 unauthenticated `toIndex` returned 302 login intercept, 3.0 JS/CSS/uploader resources returned 200, Spring mapped 3.0 routes, and no startup `ERROR`/`SEVERE` log entries were found.
- Follow-up on 2026-07-01: user screenshot still showed inline platform uploader in the feedback-chain attachment column. Server-side JS already had the compact `查看附件` button and no `dw-feedback-attachment-view`, so the cause was browser cache keeping the old `dwworkplan3.js?v=${jsversion}` resource. `index.jsp` was changed to force module-local cache busting with `?v=20260701_attachment_chain_2` for both `dwworkplan3.js` and `dwworkplan3.css`.
- Follow-up on 2026-07-01: user screenshot showed feedback-chain columns overlapping after switching to the compact attachment button. Fixed by rendering a `colgroup` for the feedback table, wrapping feedback content and return reason in `.dw-feedback-cell-text`, forcing fixed table layout, long-text breaking, and horizontal overflow for narrow modal widths. The attachment popup now initializes PB `uploaderExt` in read-only `showType:"table"` mode with `allowDownload:true`, `allowAdd:false`, `allowDelete:false`, `allowPreview:false`, and `allowSaveOnlineDisk:false`. Resource version was bumped to `?v=20260701_feedback_table_3`.
- Follow-up on 2026-07-01: user rejected the bottom horizontal scrollbar because the approval buttons were not visible at first glance. Detail modal width was increased to `min(1480px, calc(100vw - 24px))`, feedback table horizontal overflow was removed, the old `min-width:1080px` was removed, and the action column was kept wide enough for `通过/退回`. Resource version was bumped to `?v=20260701_feedback_wide_4`.
- Follow-up on 2026-07-01: user requested automatic wrapping for feedback content. `.dw-feedback-cell-text` now uses `white-space: pre-wrap`, `overflow-wrap:anywhere`, `word-break:break-all`, `max-height:none`, and `overflow:visible` so feedback content wraps naturally and expands the row instead of showing an inner scrollbar. Resource version was bumped to `?v=20260701_feedback_wrap_5`.
- Follow-up on 2026-07-01: user clarified that the task-detail feedback chain must show the feedback content clearly. The active `feedbackHtml` renderer now uses a compact metadata row for level/person/time/attachment/status/return/actions and a full-width second row labelled `反馈内容`, so long feedback text is visible and wraps instead of being squeezed into a narrow table column. Resource version was bumped to `?v=20260701_feedback_content_6`.
- Follow-up on 2026-07-01: user clarified that department and office personnel nodes may be associated with multiple platform users. 3.0 still stores one task receiver per task, but `DYN_DW_PLAN3_PERSON_TREE.USER_ID/USER_NAME` may now hold comma-separated user IDs/names for department and office nodes. The frontend uses platform `H5CommonSelect` with `selectModel:'multi'` for department/office nodes, expands receiver dropdown options by user, and keeps party/staff nodes single-user. Backend current-user role lookup, top-node lookup, role check, and direct-child receiver validation now match against comma-separated personnel-node user lists. Added SQL patch `db/dw_work_plan_3_patch_20260701_multi_person.sql` and updated base DDL to enlarge `USER_ID`/`USER_NAME` to `VARCHAR2(1000)`.
- Local note on 2026-07-01: Java compiled and Tomcat restarted successfully for the multi-person personnel-node change. The local DB patch was not applied because the available `dj` login hit the DM login-failure limit after a failed `disql` attempt using the non-plaintext configured password, and an admin login attempt also failed. Execute `db/dw_work_plan_3_patch_20260701_multi_person.sql` with a valid DB account before testing multi-user personnel nodes in this local database.
- Follow-up on 2026-07-01: user reported three polish issues: period search should not show year/quarter values with no tasks, multi-user personnel-node save still failed, and the top-right role/refresh area looked poor. `api/batch/list` now receives the request and returns only batches that have visible tasks for the current personnel subtree, with `TASK_COUNT`; the frontend period and stats dropdowns are built only from `TASK_COUNT > 0` batches and show an empty state instead of falling back to the current quarter. `savePerson` now calls a guarded schema check that enlarges `DYN_DW_PLAN3_PERSON_TREE.USER_ID/USER_NAME` to `VARCHAR2(1000)` through the app `JdbcTemplate` before saving, so existing local databases can self-heal when a department/office node saves multiple platform users. The top-right header action styling was simplified: no outer grey frame, compact role selector, and a small blue refresh button. Resource version was bumped to `?v=20260701_multi_person_fix_8`.
- Follow-up on 2026-07-01: user requested that the personnel tree table show only the node name. The 3.0 JSP and active JS renderer now render a single `节点名称` column for `dwPersonTable`; user and sort remain available only in the right-side node maintenance form. Resource version was bumped to `?v=20260701_person_tree_name_only_9`.
- Risk note on 2026-07-01: user observed that one person can be both staff and department minister. Current 3.0 supports multiple personnel nodes for the same platform user, but several backend APIs still infer the active authority through `topUserNode(loginUser)` and choose the shallowest node. This means a user with both department and staff nodes may be treated as the higher-level node for visible data/person tree/stats/receiver lists even if the frontend role selector shows another node. Decide whether to forbid cross-level duplicate users or pass an explicit current personnel-node ID into all data APIs before relying on this as a supported workflow.
- Follow-up on 2026-07-01: user chose the low-risk rule for duplicate personnel binding. `savePerson` now blocks the same platform user from being bound to enabled personnel-tree nodes across different hierarchy roles. Department/office nodes may still bind multiple users, but any selected user cannot already be active under another level such as party, office, or staff.
- Follow-up on 2026-07-01: work-plan filtering no longer uses a manual search button. Period and status changes trigger task loading immediately; keyword input triggers task loading after a short debounce. Personnel-tree role pills are visually separated and color-coded by level (party/dept/office/staff), and KPI cards were restyled with colored accents and clearer numbers.

## 2026-07-01 Portal Business Todo Phase 1

- Scope: solve the non-BPM portal reminder gap for 3.0 through the existing portal endpoint `/ims/oa/todo/uniontask/pendingWork` only. Do not add `/pendWork`; that path was a user typo.
- Added generic business todo table `PB_PORTAL_BUSINESS_TODO` in `db/portal_business_todo.sql`. The 8 mandatory PB audit fields remain unchanged and passed the audit checker. `SEND_TIME` is `TIMESTAMP` because local DM `DATE` columns truncated inserted times to `00:00:00`.
- Added `PortalBusinessTodoService` as the reusable no-op-when-table-missing todo writer/closer. This keeps existing BPM portal behavior working even before the new table is migrated.
- Extended `PortalTaskMapper.xml` and `PortalTaskService` so `pendingWork` unions `BPM_HIST_TASK_V` with active rows from `PB_PORTAL_BUSINESS_TODO` only when the new table exists.
- Extended `PortalUnionTaskController` URL handling so business todos use their configured `TARGET_URL`; BPM todos keep the original business-detail URL behavior.
- Added `DwWorkPlan3PortalTodoService` and wired 3.0 task status transitions in `DwWorkPlan3Service`: `TODO`/`DOING`/`RETURNED` create receiver `HANDLE` todos; `PENDING_CONFIRM` creates sender `CONFIRM` todos; `DRAFT`/`WAIT_CHILD`/`COMPLETED` leave no active portal business todo.
- 3.0 integration points: dispatch creates child todo and closes parent todo; accept refreshes receiver handle todo; submit feedback switches to sender confirm todo; return switches back to receiver handle todo; confirm, take-back, task delete, and batch delete close related business todos.
- Local verification on 2026-07-01: JDK 8 compile passed; `db/portal_business_todo.sql` passed PB audit-field check; lifecycle verifier passed dispatch -> accept -> submit -> return -> resubmit -> confirm; Tomcat restarted with current C-workspace `pb.xml`; HTTP POST to `/pb/ims/oa/todo/uniontask/pendingWork` for user `cs` returned `success=true`, `totalnumber=1`, task type `党委计划3.0`, URL to the 3.0 `toIndex?taskId=...`, and `sendTime` with seconds (`2026-07-01 16:57:35` in the local run). DW3 Portal Todo/Lifecycle test rows were cleaned back to zero.
- Intranet note: when the user explicitly asks to deploy/package, include the new SQL/table migration, Java classes, and `PortalTaskMapper.xml`. Do not package this automatically unless the user says to deploy to the intranet.

## 2026-07-01 Detail Layout Compact Polish

- User screenshot showed task detail and feedback detail task-summary fields using oversized two-column cards. Short fields such as level, status, deadline, sender, and receiver should not occupy half the modal width.
- Frontend-only change: `taskSummaryHtml` now renders title as a full-width row, short fields in a compact wrapping metadata row, and task content/target requirement as full-width text blocks.
- This shared summary is used by both the task detail modal and feedback modal, so both pages get the compact layout.
- Resource cache busting updated to `?v=20260701_detail_compact_11`.
- No backend, SQL, workflow, permission, or attachment behavior changed.

## 2026-07-01 Feedback Chain Timeline Polish

- User asked for the feedback chain to be clear at first glance.
- Frontend-only change: `feedbackHtml` no longer renders the chain as a dense table. It now renders a vertical card timeline with sequence number, level, feedback user, feedback time, status badge, attachment button, feedback content, optional return reason, and approval actions.
- Return reasons are highlighted in a light red block; feedback content remains the main visible body text.
- Added narrow-screen wrapping rules so metadata, status, attachment, and approval buttons do not overlap in smaller modals.
- Resource cache busting updated to `?v=20260701_feedback_chain_cards_12`.
- No backend, SQL, workflow, permission, portal todo, or attachment behavior changed.
- Follow-up: user clarified the chain numbering direction was reversed because feedback flows upward from staff. The frontend now reverses the displayed feedback rows before numbering, so the first visible node is the lowest-level feedback and numbering proceeds upward. Resource cache busting updated to `?v=20260701_feedback_chain_order_13`.

## 2026-07-01 Real User Acceptance

- Real personnel-tree acceptance was run with these login users and password `cape`: party `admin`, department `69700327`, office `zhangsan`, and staff `28000185`.
- Initial blocker: staff user `28000185` could log in to PB but was redirected to `loginFailed.jsp` when opening the 3.0 URL. The cause was platform resource authorization, not 3.0 business logic. The 3.0 resource existed in `SYS_RESOURCE` as `8af444529f1797c6019f179c4a4f0cd3`, but `SYS_ACCESSCONTROL` had no grant for non-platform-manager users.
- Local acceptance configuration added one platform authorization row: `SYS_ACCESSCONTROL`, `TARGET_TYPE='R'`, `TARGET_ID='402809815822d545015822d9d0dc0072'` (`comm_user`), `RESOURE_ID='8af444529f1797c6019f179c4a4f0cd3'`, `ACCESSIBILITY=1`, `OPERABILITY=1`. Tomcat restart was required before staff access worked. A failed exploratory `SYS_PERMISSION_ACCESS` row was removed.
- End-to-end flow passed with test title `DW3UX-FLOW-20260701-REAL-1782923057894`: party direct dispatch -> department accept -> department dispatch -> office accept -> office dispatch -> staff accept -> staff feedback -> office return -> staff resubmit -> office confirm -> office feedback -> department confirm -> department feedback -> party final confirm.
- Final statuses before cleanup were all `COMPLETED`: PARTY root, DEPT child, OFFICE child, and STAFF child. Feedback history preserved the returned staff feedback row with return reason and the later confirmed staff feedback row.
- Cleanup was verified in local DM: exact test title had `DYN_DW_PLAN3_TASK=0`, related `DYN_DW_PLAN3_FEEDBACK=0`, related `PB_PORTAL_BUSINESS_TODO=0`, and legacy `DYN_DW_PLAN3_ATTACHMENT=0`. Redis `_SESSION` keys were also cleared after testing to avoid the platform online-user limit.
- UX/platform issues observed during acceptance: stale Redis `_SESSION` keys can cause the platform online-user-limit error across browser-close and Tomcat restart; every 3.0 page load requested `/pb/azure` and returned 404; the login page emits a browser warning about multiple forms; current local data still has cross-level duplicate binding risk around `muzi`, so the non-duplicate chain `admin -> 69700327 -> zhangsan -> 28000185` was used.

## 2026-07-02 Excel Batch Import

- Scope: added Party-side Excel batch import for 党委计划 3.0 only. Runtime code remains under `dwworkplan3`, data remains in `DYN_DW_PLAN3_*`, and no old `avicit/pb/dwworkplan` controller or old `DYN_DW_PLAN_*` table is used.
- UI: `index.jsp` now exposes `下载导入模板` and `批量导入` only for the party sender on the work-plan tab. The import modal carries its own year/quarter fields so an empty quarter can be imported before any batch appears in the period selector.
- Template: `api/import/template` generates an `.xlsx` workbook with `任务填写` and `接收部门参考` sheets. The reference sheet lists the current party sender's direct department nodes, node IDs, bound users, and login names.
- Preview: `api/import/preview` parses Excel through existing Apache POI dependencies, validates rows without writing to the database, and returns row-level OK/WARN/ERROR status plus total/importable/error/warning counts.
- Validation rules implemented: title, deadline, and department are required; deadline is normalized to `yyyy-MM-dd`; department must match the current party sender's direct department node by name or node ID; single-user departments auto-fill receiver login with a warning; multi-user departments require receiver login; receiver login must belong to that department node.
- Persistence: `api/import/saveDrafts` creates validated root tasks as `DRAFT`; `api/import/directDispatch` reuses `directDispatchRoot`, so root status, department child status, messages, and portal business todo generation follow the existing 3.0 rules. Import preview data is not stored in a new table; valid normalized rows are posted back for the final action and revalidated before insert.
- Data decision: no new table or column was added. The optional Excel `备注` value is appended into task content as `备注：...` when saving/importing because `DYN_DW_PLAN3_TASK` has no remark column.
- Verification: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; JDK compile passed for `DwWorkPlan3Constants`, `DwWorkPlan3PortalTodoService`, `DwWorkPlan3Service`, and `DwWorkPlan3Controller`; `scripts/verify-dwworkplan3.ps1` passed; scan of 3.0 files found no old-module runtime reference.

## 2026-07-02 Import Template And Work Category

- Scope remains 党委计划 3.0 only: runtime code stays under `dwworkplan3`, runtime data stays in `DYN_DW_PLAN3_*`, and old module code/tables remain non-runtime references only.
- Import template changed from login-name-only receiver clarity to include `接收人姓名` in the main task sheet and `姓名` in the `接收部门参考` sheet. The reference sheet expands multi-user department nodes to one row per user with department, node ID, name, and login name.
- Receiver validation still matches by login name, not by name, to avoid同名人员误匹配. `接收人姓名` is for display/readability and the normalized preview result.
- Task wording changed on the frontend and template: `任务内容` is now displayed as `工作内容`; `目标要求` is now displayed as `工作目标`. The underlying database fields remain `CONTENT` and `TARGET_DESC`.
- Added task work-category support through `DYN_DW_PLAN3_TASK.WORK_CATEGORY VARCHAR2(100)`. Base DDL was updated and incremental patch `db/dw_work_plan_3_patch_20260702_work_category.sql` was added for existing environments.
- Backend save/edit/direct-dispatch/import flows now read and persist `workCategory`. Child dispatch inherits the parent `WORK_CATEGORY` unless a value is explicitly submitted.
- Frontend shows `工作分类` in the task list, task modal, task detail summary, stats recent table, import template, and import preview. Keyword search includes `WORK_CATEGORY`.

## 2026-07-02 List Batch Dispatch

- Scope remains 党委计划 3.0 only. Runtime code/data stay under `dwworkplan3` and `DYN_DW_PLAN3_*`; no old module runtime dependency was added.
- Added a work-plan toolbar `批量下发` button immediately to the right of `批量导入`. It is visible only for `PARTY_SENDER` on the work-plan tab.
- The toolbar button works on checked list rows, not on import-preview rows. It targets saved party root draft tasks, which is the common flow after importing many rows as drafts.
- Frontend filters selected rows to dispatchable drafts: `TASK_LEVEL=PARTY`, `STATUS=DRAFT`, current receiver is the logged-in party user, no child task exists, and draft department receiver fields are present. The confirmation text tells the user when non-dispatchable selected rows will be skipped.
- Added backend API `api/task/batchDirectDispatch`. It revalidates every submitted task before writing and reuses `dispatchChild`, so child task creation, root `WAIT_CHILD` status, messages, and portal business todo generation stay consistent with single-task direct dispatch.
- Backend validation is all-or-nothing for submitted IDs: if any selected task is missing, no longer draft, already dispatched, missing draft receiver data, or not a direct department receiver, the batch is rejected before dispatching.
- No SQL/table change was added for this feature.

## 2026-07-02 Personnel Tree Add Button Fix

- User noticed the 3.0 personnel tree add button was missing after the tree was simplified to one visible `节点名称` column.
- Frontend-only final behavior: `新增下级` lives on the personnel tree selected row, not in the right-side node detail form. It appears only after selecting a node that can have children; `STAFF` rows do not show the button.
- The selected-row button reuses the existing personnel save flow and `NEXT_ROLE` hierarchy mapping. The active personnel-tree renderer was updated because a later duplicate `personTreeCell` definition was the function actually used by the page.
- Button styling was polished as a scoped pill action aligned to the right side of the selected tree row, with node names protected from overlap through ellipsis.
- Resource cache version was bumped to `?v=20260702_person_tree_add_18`.
- Verification: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; PB frontend conflict scan checked the touched JSP/JS/CSS files and returned 0 warnings.

## 2026-07-02 Intranet Deadline Timestamp Fix

- User reported that after intranet deployment the work-plan list showed `PLAN_DEADLINE` as a number such as `1785945600`.
- Cause: the intranet JSON serializer can return Java/DB `DATE` values as Unix timestamps in seconds, while the previous frontend formatter only handled date strings and displayed 10-digit values unchanged.
- Frontend-only fix: `dateOnly` and `dateTime` now recognize 10-digit Unix seconds, 13-digit Unix milliseconds, and `/Date(...)` values, then format them as local `yyyy-MM-dd` or `yyyy-MM-dd HH:mm:ss`.
- Resource cache version was bumped to `?v=20260702_deadline_timestamp_19`.
- Verification: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; a Node timestamp check confirmed `1785945600` renders as `2026-08-06`; `scripts/verify-dwworkplan3.ps1` passed; PB frontend conflict scan checked the touched JSP/JS files and returned 0 warnings.

## 2026-07-03 Single Personnel Root Rule

- User clarified that 3.0 does not need automatic root-node completion. The personnel tree root must always be a single configured `PARTY_SENDER` root node.
- Removed the backend auto-bootstrap behavior from `DwWorkPlan3Service`: `currentUser`, `listPersonTree`, `listBatches`, `listTasks`, and import-template download no longer call `ensureBootstrapRoot`, and the helper was removed.
- `currentUser` now simply returns an empty `roles` list for users not configured in `DYN_DW_PLAN3_PERSON_TREE`; the frontend already shows “当前用户未配置 3.0 人员节点”.
- `savePerson` now rejects creating another enabled `PARTY_SENDER` root when one already exists, so the backend enforces “党委计划下发者根节点只能有一个”.
- `scripts/seed-verify-dwworkplan3.ps1` was updated so `DW3_STRANGER` verifies that unconfigured users are not inserted into `DYN_DW_PLAN3_PERSON_TREE`.
- Intranet cleanup note: duplicate auto-created roots can be identified by `ROLE_CODE='PARTY_SENDER'`, `PARENT_ID is null`, and `REMARK='当前用户首次访问 3.0 自动初始化根节点'`; only delete them after confirming they have no related tasks.

## 2026-07-03 Platform Role Readonly Viewer Rule

- User chose platform role based read-only access for leaders who are not in the 3.0 personnel tree.
- Permission precedence: if the current user exists in `DYN_DW_PLAN3_PERSON_TREE`, the module must ignore the platform viewer role and use the personnel-tree identity and data scope only.
- Fallback rule: only users who are not in the personnel tree and have platform role name `党委一级管理员` get global read-only access to 3.0 tasks, statistics, personnel tree, feedback chain, and attachments.
- Read-only viewer users can open and inspect the personnel tree, but must not create, edit, delete, dispatch, accept, feedback, confirm, return, import, batch-dispatch, or maintain the personnel tree.
- Runtime role lookup uses platform tables `sys_user_role` and `sys_role` by `sys_role.role_name='党委一级管理员'`; no 3.0 business table is added for this rule.

## 2026-07-03 Multi-Role And Self-Created Tasks

- User confirmed two new business rules for 党委计划 3.0:
  - The same platform user may appear in multiple personnel-tree roles, for example both department minister and office director.
  - Departments, offices, and staff may create their own tasks. Department and office tasks can be dispatched down one level. Staff-created tasks default to the staff user themself.
- Implementation decision: task data scope and operation identity now use the frontend-selected `currentNodeId`, not the old `topUserNode(loginUser)` fallback. Party still sees all tasks; department/office see their selected subtree; staff sees only tasks under the selected staff node; platform readonly viewer still sees all and cannot edit.
- Personnel-tree duplicate binding rule was relaxed: cross-level duplicate platform users are allowed. The single party-root rule remains enforced by `validatePersonHierarchy`.
- `saveRootTask` now creates a root task at the selected identity level:
  - PARTY/DEPT/OFFICE root tasks are saved as `DRAFT` and can later be directly dispatched to their next-level receiver.
  - STAFF root tasks are saved as `DOING`, use the selected staff node as `PERSON_NODE_ID`, and sync a self handle todo.
- `dispatchChild`, receiver lists, task lists, batch lists, statistics, import template, import preview, import persistence, and batch direct dispatch now all honor `currentNodeId`.
- Portal business todo target URLs now include `personNodeId` when available. HANDLE todos select the task receiver node; CONFIRM todos select the parent task node so a multi-role user lands in the role that must confirm.
- Frontend role switching reloads batches, personnel scope, receiver list, tasks, and stats. Operation buttons are shown only when the task's `PERSON_NODE_ID` matches the selected role; legacy party tasks with blank `PERSON_NODE_ID` remain compatible for party users.
- Verification on 2026-07-03: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; JDK 8 compile passed for `DwWorkPlan3Service` and `DwWorkPlan3PortalTodoService`; `scripts/verify-dwworkplan3.ps1` passed; local Tomcat restarted; `/pb/login` returned 200, unauthenticated 3.0 `toIndex` returned 302, and 3.0 JS returned 200.

## 2026-07-03 Self-Created Task Completion Rule

- User clarified the new completion boundary for self-created tasks:
  - Staff-created root tasks do not need feedback. Staff complete them directly.
  - For tasks created and dispatched by department or office users, once the lower-level feedback is confirmed, the creator's parent task is completed directly.
  - The chain stops at the person who issued that task; the creator does not need to submit another feedback upward for their own self-created root task.
- Implementation:
  - Added `api/task/complete` for staff self-created root tasks only. It requires current `PERSON_NODE_ID`, `RECEIVER_ID`, root task, `TASK_LEVEL=STAFF`, and status `DOING` or `RETURNED`.
  - Frontend shows a direct `完成` action for staff self-created root tasks and suppresses the feedback action for that case.
  - `syncParentAfterChildDone` now marks the parent task `COMPLETED` when all child tasks are completed, then recursively syncs the parent's parent. It no longer forces department/office parent tasks back to `DOING` just to make them submit another feedback.
  - Portal business todos are synced when direct completion or automatic parent completion occurs, so active todos close as status becomes completed.
- Verification: JS syntax passed; JDK 8 compile passed for `DwWorkPlan3Service` and `DwWorkPlan3Controller`; `scripts/verify-dwworkplan3.ps1` passed; temporary `DwWorkPlan3MultiRoleVerifier` covered staff direct complete, staff feedback confirmed by office, office root auto-completion, and todo closure.

## 2026-07-03 Staff Self-Created Completion Modal

- User clarified that when staff complete their own self-created task, clicking `完成` must open a page/modal instead of completing from a simple confirmation.
- Frontend behavior: the active task action `complete` opens the existing feedback modal in completion mode, titled `任务完成`, with submit button `确认完成`, completion-content validation, and an editable platform attachment uploader.
- Backend behavior: `api/task/complete` now accepts `content` and optional `attachmentId`, stores the content in `COMPLETE_DETAIL`, preserves/binds the attachment, marks the staff root task completed, and syncs portal todo closure.
- Verification on 2026-07-03: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; JDK 8 compile passed for `DwWorkPlan3Service` and `DwWorkPlan3Controller`; `scripts/verify-dwworkplan3.ps1` passed; temporary `DwWorkPlan3MultiRoleVerifier` returned `DWWORKPLAN3_MULTI_ROLE_TODO_OK`; Tomcat restarted; `/pb/login` returned 200, unauthenticated 3.0 `toIndex` returned 302, and 3.0 JS returned 200.

## 2026-07-03 Full Regression After Completion Modal

- `scripts/seed-verify-dwworkplan3.ps1` was updated to match current business rules:
  - Because automatic root-node creation is forbidden, the verifier seeds only its own `DW3_NODE_PARTY` test root directly and still creates lower-level nodes through the service API.
  - Because self-created department/office chains now stop at the creator, the verifier expects child-feedback confirmation to auto-complete the parent chain and rejects extra upward feedback.
- Full local regression passed on 2026-07-03: JS syntax check, 3.0 module verifier, old-module runtime-reference scan, JDK 8 compile, `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returning `DWWORKPLAN3_BUSINESS_OK`, and `DwWorkPlan3MultiRoleVerifier` returning `DWWORKPLAN3_MULTI_ROLE_TODO_OK`.
- Test cleanup was explicitly checked after the run: `DYN_DW_PLAN3_TASK`, `DYN_DW_PLAN3_PERSON_TREE`, `DYN_DW_PLAN3_FEEDBACK`, and `PB_PORTAL_BUSINESS_TODO` all had zero `DW3`/`DW3MR` verifier rows.
- Follow-up cleanup: the stale earlier `taskActions`/`actionBtn` definitions in `dwworkplan3.js` were removed, leaving only the active styled action renderer. Regression rerun passed: JS syntax check, `scripts/verify-dwworkplan3.ps1`, `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` with `testDataCleanup=OK`, `DwWorkPlan3MultiRoleVerifier` with `DWWORKPLAN3_MULTI_ROLE_TODO_OK`, and final DW3/DW3MR cleanup check returned all zero.

## 2026-07-08 Office-Started Workflow

- User and leader changed the 3.0 main workflow: party users no longer create, import, dispatch, confirm, return, or delete tasks; party users remain global read-only viewers for task lists, statistics, details, personnel tree, and feedback chain.
- New task chain: office director creates or Excel-imports root tasks, dispatches directly to staff; staff accepts and submits feedback; office director confirms staff feedback; the office root task then enters department-level pending confirmation; department minister confirms and closes the task. Party users do not receive final confirmation todos.
- Department ministers are read/confirm only: they can see department-scope data and receive final confirmation todos for office-root tasks under their department, but they do not create or dispatch tasks.
- Staff-created root tasks still default to the staff user and complete directly through the completion modal.
- Excel import was moved from party-side to office-side: template and preview now use `接收科员` / `接收科员参考`, and receiver validation is against the current office node's direct staff children.
- Page display order changed everywhere touched by this update: `工作目标` is shown before `工作内容`; database fields are unchanged (`TARGET_DESC` remains goal, `CONTENT` remains content).
- Portal todo behavior changed for department final confirmation: when an office-root task becomes `PENDING_CONFIRM`, `DwWorkPlan3PortalTodoService` sends the confirm todo to the parent department node users and includes that department `personNodeId` in the target URL.
- Regression script `scripts/seed-verify-dwworkplan3.ps1` now verifies the new workflow and no longer asserts the superseded party -> department -> office -> staff dispatch chain.
- Verification on 2026-07-08: JDK 8 compile passed for touched 3.0 Java sources; `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` with `testDataCleanup=OK`.

## 2026-07-08 Display Name Persistence Fix

- Bug found during existing-personnel-tree verification: some feedback and portal todo display-name fields could store platform user IDs such as `LOLUSER...` when the platform user API was unavailable in the verifier/runtime path.
- Fix rule: keep business ID fields unchanged, but write display-name fields from the 3.0 personnel tree node or existing task `RECEIVER_NAME` before falling back to platform user lookup.
- Touched behavior: child-task `SENDER_NAME`, submitted feedback `FEEDBACK_USER_NAME`, and feedback confirm/return `CONFIRM_USER_NAME` now prefer personnel-tree display names.
- Verification on 2026-07-08: JDK 8 compile passed; existing-tree verifier passed with marker `现有人员树测试-20260708-113923`; retained task/feedback/todo rows show names like `狂厄蔷薇(910020)`, `潮汐海灵(910036)`, and `残月之肃(910010)` instead of `LOLUSER...`; Tomcat restarted and `/pb/login` plus 3.0 JS returned 200.

## 2026-07-08 Returned Feedback Attachment And Manual Department Feedback

- User clarified two workflow fixes:
  - When feedback with attachments is returned, the user must be able to reopen feedback and upload attachments again.
  - After an office director confirms all staff feedback, the office-root task must not automatically submit to the department minister. The office director must manually submit feedback upward.
- Frontend now calls `api/feedback/prepare` when opening the feedback modal, initializes the platform attachment uploader with that prepared feedback ID, and sends `preparedId` with `api/feedback/submit`.
- Backend `submitFeedback` accepts a safe unused `preparedId` and uses it as the feedback row ID for new feedback submissions, so platform attachments and feedback rows share the same business ID on retry after return.
- `syncParentAfterChildDone` now changes an office-root task to `DOING`, creates/updates a feedback draft from aggregated staff feedback, syncs a handle todo for the office director, and does not create a department confirm todo until the office director manually submits feedback.
- Removed the old automatic department-feedback helper to prevent accidental reintroduction.
- Verification on 2026-07-08: JDK 8 compile passed for `DwWorkPlan3Service` and `DwWorkPlan3Controller`; `node --check dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; `DwWorkPlan3FeedbackManualVerifier` returned `DW3_FEEDBACK_MANUAL_OK` with retained marker `DW3MANUAL-20260708-115952`; Tomcat restarted and `/pb/login` plus versioned 3.0 JS returned 200.

## 2026-07-08 Office Self Task And Returned Attachment Retry Fix

- User clarified that office directors can create tasks for themselves and complete them directly; such tasks do not need to be dispatched to staff.
- Backend rule: when an office director saves a root task without a selected staff receiver, the task is treated as a self task with status `DOING`, receiver/sender as the office director, and a handle todo for the office director. Office and staff root self tasks can use `api/task/complete`.
- Frontend rule: office root tasks with no parent, matching current office identity, and status `DOING`/`RETURNED` show the direct complete action.
- Returned feedback attachment retry fix: keep `preparedId` for the eventual feedback row ID, but initialize the platform upload control with an empty business ID and upload files after `api/feedback/submit` returns the saved feedback ID. This avoids PB uploader issues when initialized against a feedback ID that is not yet persisted.
- Verification on 2026-07-08: JDK 8 compile passed for `DwWorkPlan3Service` and controller; `node --check dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; `DwWorkPlan3FeedbackManualVerifier` returned `DW3_FEEDBACK_MANUAL_OK` with retained marker `DW3MANUAL-20260708-133449`; Tomcat restarted and `/pb/login` plus JS version `20260708_office_self_retry_attach_21` returned 200.

## 2026-07-08 Workflow Logic Regression Fix

- User clarified the intended 3.0 business logic:
  - Office-to-department feedback must notify the department minister through both portal todo and platform message.
  - Every feedback submission and its attachment must remain visible as history; returned feedback and retry feedback must not overwrite each other.
  - After staff feedback is confirmed by the office director, the office director must manually submit feedback to the department minister.
  - Staff self-created tasks and office self-created tasks close directly through completion and do not feed upward.
- Fixed `SYS_MSG` writes: both `DwWorkPlan3Service` and `DwWorkPlan3PortalTodoService` now insert the required PB audit fields (`CREATION_DATE`, `CREATED_BY`, `LAST_UPDATE_DATE`, `LAST_UPDATED_BY`, `LAST_UPDATE_IP`, `VERSION`, etc.) so platform messages are not silently lost.
- `DwWorkPlan3FeedbackManualVerifier` now covers department portal todo, department `SYS_MSG`, returned feedback retry, separate attachment IDs for returned/retry feedback rows, manual office-to-department feedback, department final confirmation, office self-completion, and staff self-completion.
- Verification on 2026-07-08: JDK 8 compile passed for 3.0 service/controller/todo service; `node --check dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; final verifier returned `DW3_FEEDBACK_MANUAL_OK` with retained marker `DW3MANUAL-20260708-135638`; Tomcat restarted and `/pb/login` plus 3.0 JS returned 200.

## 2026-07-02 Three-Module Intranet Package

- User is deploying 党委计划 3.0 together with Excel multi-sub-table export and portal business todos.
- Official baseline release script could not run because `D:\pb-release\baseline\pb-baseline.json` does not exist. Baseline was not updated.
- Superseded class-based focused package:
  - Directory: `D:\pb-release\内网部署-三模块-20260702-105726`
  - Zip: `D:\pb-release\内网部署-三模块-20260702-105726\pb-three-modules-release.zip`
  - Manifest: `manifest.md`
  - Manual steps: `manual-steps.md`
  - Warnings: `warnings.md`
- User clarified they do not need `.class` files and future multi-module packages should be split by Chinese module folders. Created replacement source-only package:
  - Directory: `D:\pb-release\内网部署-三模块-源码版-分模块-20260702-110455`
  - Zip: `D:\pb-release\内网部署-三模块-源码版-分模块-20260702-110455\pb-three-modules-source-by-module.zip`
  - Module folders: `按模块分开\Excel多子表导出`, `按模块分开\党委计划3.0`, `按模块分开\门户待办推送`
  - `.class` count verified as 0.
- Package structure:
  - `按模块分开`: source-friendly copy split into Chinese module folders. Each folder preserves PB project-relative paths.
  - `可选SQL`: contains `db/dw_work_plan_3_import_person_tree.sql`; this is not for default execution because it reads old `DYN_DW_PLAN_PERSON_TREE`.
- 3.0 files included: `WebRoot/avicit/pb/dwworkplan3/index.jsp`, `WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.{js,css}`, all `src/avicit/pb/dwworkplan3` Java sources, and SQL `db/dw_work_plan_3.sql` plus patches `20260630`, `20260701_multi_person`, and `20260702_work_category`.
- Portal todo files included: `PortalBusinessTodoService`, modified `PortalTaskService`, modified `PortalUnionTaskController`, runtime/source `PortalTaskMapper.xml`, `DwWorkPlan3PortalTodoService`, and SQL `db/portal_business_todo.sql`.
- Intranet manual platform steps: configure 3.0 menu URL `platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex`; grant menu/resource access to ordinary users; keep portal todo endpoint as existing `/ims/oa/todo/uniontask/pendingWork`.
- Verification before packaging: 3.0 JS `node --check` passed; all related Java sources compiled into `WebRoot/WEB-INF/classes`; `scripts/verify-dwworkplan3.ps1` passed; `db/dw_work_plan_3.sql` and `db/portal_business_todo.sql` passed PB audit-field checks; frontend guardrail scan for `WebRoot/static/pb-modern/dwworkplan3` returned 0 warnings; 3.0 old-module runtime reference scan returned no matches outside the optional import script.

## 2026-07-08 Feedback Attachment Visibility And Office Upward Feedback Fix

- Root cause found for "office task cannot feedback upward after staff completion": frontend `canDirectComplete(task)` treated office-root tasks with children as directly completable, so `canFeedback(task)` suppressed the upward-feedback action. Direct completion is now allowed only when the root task has no children.
- Backend protection added: `DwWorkPlan3Service.completeSelfTask` rejects root tasks that have child tasks. Dispatched office-root tasks must first process child feedback, then submit feedback upward manually.
- Attachment visibility verification was strengthened in `DwWorkPlan3FeedbackManualVerifier`: staff first feedback keeps its attachment after return, retry feedback keeps a second attachment, and `service.listFeedback(...)` returns both historical feedback rows with `FEEDBACK_ATTACHMENT_COUNT >= 1` and the expected `ATTACHMENT_ID`.
- Verification on 2026-07-08: JDK 8 compile passed for 3.0 service/controller/todo service; `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; final verifier returned `DW3_FEEDBACK_MANUAL_OK` with marker `DW3MANUAL-20260708-141636`; Tomcat restarted and `/pb/login` plus JS version `20260708_logic_regression_22` returned 200.

## 2026-07-08 Department Notice And Feedback Attachment Entry

- Department minister list reminders now include department-confirmation office-root tasks: when an office-root task is `PENDING_CONFIRM` and the current user is bound to the parent department node, `NOTICE_FLAG` returns `Y`.
- Frontend notice labels are clearer: office-root department confirmation rows show `待部长确认`; other pending rows show `待确认`; returned rows show `被退回`.
- Feedback-chain attachment entry is no longer hidden just because attachment counting fails. Every persisted feedback row now shows a `查看附件` entry; the attachment window then displays platform/legacy attachments or an empty state.
- Verification on 2026-07-08: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; JDK 8 compile passed for `DwWorkPlan3Service`; `scripts/verify-dwworkplan3.ps1` passed; `DwWorkPlan3FeedbackManualVerifier` returned `DW3_FEEDBACK_MANUAL_OK` with marker `DW3MANUAL-20260708-143851` and explicitly verified department `NOTICE_FLAG=Y`; Tomcat restarted and `/pb/login` plus JS version `20260708_dept_notice_attachment_23` returned 200.

## 2026-07-08 Attachment Viewer Direct List Fix

- User found that clicking `查看附件` opened the platform uploader dialog but the table could be empty, leaving no visible attachment even when feedback history had an attachment entry.
- Added 3.0-specific `api/attachment/list`, which merges legacy `DYN_DW_PLAN3_ATTACHMENT` rows and platform uploader files from `SwfUploadService.getFileListByFormId(businessId, elementId)`.
- The attachment dialog now renders a direct download list from `api/attachment/list` before the platform read-only uploader. This is the required fallback for feedback-chain attachments, because the platform uploader table can fail to show rows or show an empty table.
- Verification on 2026-07-08: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; JDK 8 compile passed for `DwWorkPlan3Service` and `DwWorkPlan3Controller`; `scripts/verify-dwworkplan3.ps1` passed; `DwWorkPlan3FeedbackManualVerifier` returned `DW3_FEEDBACK_MANUAL_OK` with marker `DW3MANUAL-20260708-150104` and verifies `listAttachmentLinks(...)` returns direct download rows for retained feedback attachments; Tomcat restarted and `/pb/login` plus JS version `20260708_attachment_list_24` returned 200.

## 2026-07-08 Feedback Attachment Binding Fix

- Root cause for the repeated empty feedback-attachment dialog: previous fixes made the viewer/list more tolerant, but a feedback submission could still save a `DYN_DW_PLAN3_FEEDBACK` row without reliably binding uploaded file rows to that feedback ID. Once the file is not bound, the viewer correctly returns empty.
- New rule: feedback attachments use the 3.0 direct upload endpoint/table as the primary feedback-upload path. The feedback modal uploads selected files to `DYN_DW_PLAN3_ATTACHMENT`, submits all returned IDs as `attachmentIds`, and `DwWorkPlan3Service.submitFeedback(...)` binds every ID to the saved `DYN_DW_PLAN3_FEEDBACK.ID`.
- Returned-feedback retry rule: a returned feedback is history; retry feedback creates a new feedback row and can bind new attachment rows to the retry feedback ID. It must not overwrite or reuse the returned row.
- Attachment viewer rule: feedback-chain attachment popups render only the 3.0 direct attachment list for feedback rows. Do not show the platform upload/read-only table inside feedback attachment popups, because that table can appear empty or show a misleading `选择文件` control.
- Verification on 2026-07-08: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; JDK 8 compile passed for `DwWorkPlan3Service` and `DwWorkPlan3Controller`; `scripts/verify-dwworkplan3.ps1` passed; `DwWorkPlan3FeedbackManualVerifier` returned `DW3_FEEDBACK_MANUAL_OK` with marker `DW3MANUAL-20260708-154145` and verifies returned feedback history plus retry feedback with two attachments bound to the retry feedback ID; Tomcat and Redis restarted, `/pb/login` returned 200, and JS version `20260708_feedback_direct_attach_25` returned 200.

## 2026-07-08 Feedback Target And Platform Uploader Fix

- User clarified the final expected rule: feedback remains one row per submission, every retry after return creates a new feedback row, and each row's attachments must stay visible and downloadable from that row's feedback-chain entry.
- This entry supersedes the previous "direct upload endpoint as primary" rule for feedback submission. The feedback modal now restores PB platform `uploaderExt` as the primary upload control and rebuilds the uploader DOM every time the feedback modal opens. New feedback uses the prepared feedback ID as the eventual `DYN_DW_PLAN3_FEEDBACK.ID`; office-upward draft feedback uses the existing `FEEDBACK_DRAFT_ID` so platform attachment business ID and final feedback row ID still match.
- Department confirmation target rule: when an office-root task is manually fed back upward to the parent department, the office director can choose one bound department user as the target. Single-user departments default automatically; multi-user departments require a selection.
- New feedback columns: `TARGET_USER_ID`, `TARGET_USER_NAME`, `TARGET_PERSON_NODE_ID`. SQL patch: `db/dw_work_plan_3_patch_20260708_feedback_target.sql`. Old feedback rows without these target fields keep the legacy parent-department-member fallback.
- Department confirm todo/message/list notice/confirm permission now target the selected department user only. Unselected users in the same department can still see scoped data, but cannot confirm or return that targeted feedback.
- Regression script `scripts/seed-verify-dwworkplan3.ps1` now matches the manual office-upward-feedback flow: office confirms staff feedback, root task returns to `DOING`, office manually submits feedback to department, then the department target confirms.
- Verification on 2026-07-08: JS syntax passed; JDK 8 compile passed for touched 3.0 Java sources; `scripts/verify-dwworkplan3.ps1` passed; PB audit-field checker passed for `db/dw_work_plan_3.sql`; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` with cleanup OK; `DwWorkPlan3FeedbackManualVerifier` returned `DW3_FEEDBACK_MANUAL_OK` with marker `DW3MANUAL-20260708-164813`; Tomcat and Redis restarted, `/pb/login` returned 200, and versioned JS/CSS `20260708_feedback_target_platform_26` returned 200.

## 2026-07-08 Feedback Upload Click Layer Fix

- User found the feedback modal's `选择文件` button displayed but clicking it did nothing.
- Root cause: PB platform `uploaderExt`/WebUploader creates a transparent file-input layer over the visible button and positions it during initialization/refresh. Initializing `dwFeedbackAttachment` before `#dwFeedbackModal` is visible can produce a zero-size or misplaced click layer, so the visible button has no working file picker.
- Fix rule: feedback and direct-complete attachment uploaders using `dwFeedbackAttachment` must open the modal first, then initialize the platform uploader and force a WebUploader refresh/window resize after layout.
- Current frontend helper: `initVisiblePlatformUploader(...)` initializes after the modal is visible, then `refreshPlatformUploader(...)` calls uploader refresh and triggers window resize twice.
- JSP cache version bumped to `20260708_feedback_upload_visible_27`.
- Verification on 2026-07-08: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; explicit order check returned `FEEDBACK_UPLOAD_CLICK_LAYER_ORDER_OK`; `scripts/verify-dwworkplan3.ps1` passed; `/pb/login` returned 200; versioned 3.0 JS/CSS returned 200; no Java/backend compile or restart was required for this frontend-only fix.

## 2026-07-08 Feedback Attachment Entry Regression Fix

- User uploaded a feedback attachment but the feedback chain still did not show the `查看附件` button.
- Root cause: frontend `feedbackAttachmentButton(...)` had regressed to hiding the entry when `FEEDBACK_ATTACHMENT_COUNT`/`HAS_ATTACHMENT` said no attachment. That is unsafe because platform attachment counting can miss rows; every persisted feedback row must keep a visible attachment entry.
- Restored rule: if a feedback row has an `ID`, show `查看附件`. The attachment dialog then shows the row's platform/legacy/direct attachments, or an empty state if the row truly has no bound attachment.
- Added a frontend submit guard for selected platform uploader files: after PB `uploaderExt` reports upload completion, 3.0 polls `api/attachment/list` for the feedback/task business ID before calling the business submit API. If the selected attachment cannot be found, submission stops with an error instead of saving a feedback row with missing attachment binding.
- JSP cache version bumped to `20260708_feedback_attachment_visible_28`.
- Verification on 2026-07-08: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; static checks returned `FEEDBACK_ATTACHMENT_BUTTON_ALWAYS_VISIBLE_OK` and `FEEDBACK_UPLOAD_WAIT_OK`; `scripts/verify-dwworkplan3.ps1` passed; `/pb/login`, versioned JS, and versioned CSS returned 200. No Java/backend compile or restart was required for this frontend-only fix.

## 2026-07-08 Feedback Prepared ID DOM Fix

- User found that after selecting a feedback attachment and clicking `提交反馈`, the attachment disappeared and no feedback row was created for the submitted content.
- Root cause: the frontend code used hidden field `dwFeedbackPreparedId` to carry the prepared feedback ID into `uploadPlatformFiles(...)`, but the JSP template did not actually render that hidden input. As a result `preparedId` was empty at submit time, platform upload was skipped, and the backend generated a different feedback ID.
- Fix rule: `dwFeedbackPreparedId` is mandatory in the feedback modal. `index.jsp` now renders it next to `dwFeedbackTaskId`/`dwFeedbackAttachmentId`, and `prepareDynamicDom()` also creates it as a safety net if an older template misses it.
- JSP cache version bumped to `20260708_feedback_prepared_id_29`.
- Verification on 2026-07-08: the red-capable DOM/data-flow check first failed with `PREPARED_ID_DOM_MISSING`, then passed with `PREPARED_ID_DOM_OK` and `PREPARED_ID_FLOW_OK`; `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` with `testDataCleanup=OK`; `/pb/login` and versioned JS/CSS returned 200. No Java/backend compile or restart was required for this JSP/JS-only fix.

## 2026-07-08 Feedback Timeline And Office Import Scope Fix

- User clarified three fixes: feedback chain must display by feedback timeline, office import/dispatch must only target current-office staff, and feedback cards must show who reviewed the feedback.
- Backend `listFeedback(...)` now orders by `nvl(FEEDBACK_TIME, CREATION_DATE), CREATION_DATE, ID` instead of role level. Frontend `feedbackHtml(...)` no longer reverses rows and displays `CONFIRM_USER_NAME` / `CONFIRM_TIME` when present.
- Office dispatch wording is unified to staff-facing labels. User-visible `接收部门`, `选中部门`, and `接收对象` were removed from the 3.0 JSP/JS dispatch/import surfaces; internal `DRAFT_DEPT_*` column names remain unchanged for compatibility.
- Import scope keeps the existing service guards: preview and persist re-run `validateImportRows(...)`, and batch/direct dispatch re-check `validateDirectChildReceiver(...)`. The verifier now covers external-office staff rejection for both draft import and direct-dispatch import, plus valid current-office staff import.
- JSP cache version bumped to `20260708_feedback_timeline_reviewer_30`.
- Verification on 2026-07-08: red checks first failed on browser reverse and service timeline order, then passed after the fix. Final checks passed: JDK 8 compile for `DwWorkPlan3Service`; `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js`; `scripts/verify-dwworkplan3.ps1`; stale-label scan; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` with `DWWORKPLAN3_BUSINESS_OK` and cleanup OK. Tomcat and Redis restarted; `/pb/login` returned 200, 3.0 entry returned 302 to login, and versioned JS/CSS returned 200.

## 2026-07-08 Import Staff Name Only Template Fix

- User clarified the import template should not contain `接收人姓名` or `接收人登录名`. The task sheet now contains only `任务标题`, `工作分类`, `工作目标`, `工作内容`, `截止日期`, `接收科员`, and `备注`.
- Import matching now uses the `接收科员` value to find a direct staff node under the current office. Old `receiverLogin` JSON values are ignored, so stale clients cannot force login-name matching.
- If the current office has duplicate staff node names, or a matched staff node binds multiple platform users, import fails with a clear validation error instead of guessing a receiver.
- The reference sheet is simplified to one `接收科员` column. JSP/JS preview columns were reduced to match the new template, and cache version was bumped to `20260708_import_staff_name_31`.
- Verification on 2026-07-08: red check first failed because a valid staff-name import still used an old wrong `receiverLogin`; after the fix, JDK 8 compile passed for `DwWorkPlan3Service`, `node --check` passed, `scripts/verify-dwworkplan3.ps1` passed, and `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` with cleanup OK. Tomcat and Redis restarted; `/pb/login` returned 200, 3.0 entry returned 302 to login, and versioned JS/CSS returned 200.

## 2026-07-09 Grassroot Dispatch Rebuild

- User decided not to bridge to the old low-code dispatch module. 3.0 owns the dispatch draft/list UI and state in new table `DYN_DW_PLAN3_GRASSROOT_DISPATCH`, while the final receive task rows are still inserted into the intranet original receive-task table `DYN_ZBRWB`.
- Business-tree source is `DYN_ZBJHYWS`; `DYN_DW_PLAN3_GRASSROOT_DISPATCH.BUSINESS_TREE_ID` maps to `DYN_ZBRWB.FK_COL_ID`.
- A staff task can open `基层分发` only when it belongs to the current user/current 3.0 personnel node and is already accepted or completed by the staff. The modal lets the user select one business and multiple基层党组织, save a dispatch list, then push pending rows to `DYN_ZBRWB`.
- Final receive-task mapping writes `YWSJ_ID` as the 3.0 source task id, `RWMC` from business name, form/view/code fields from `DYN_ZBJHYWS`, `DZZID/DZZMC` from the selected基层党组织, `FZR/JSR` from party members, and period/deadline/remark from the 3.0 modal.
- Missing基层负责人 or 接收人 is not silently skipped: that dispatch row becomes `FAILED` with `ERROR_MSG`; valid rows can still be dispatched.
- 3.0 old-module boundary is preserved: no runtime reference to old `DYN_KYFFRW`, `DYN_DWJHRY`, `DynThreeFourController`, or `ffTask`.
- SQL patch: `db/dw_work_plan_3_patch_20260709_grassroot_dispatch.sql`. JSP cache version: `20260709_grassroot_dispatch_32`.
- Verification on 2026-07-09: `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed; `scripts/verify-dwworkplan3.ps1` passed; PB audit-field checker passed for `db/dw_work_plan_3.sql` and the 20260709 patch; JDK 8 compile passed for `DwWorkPlan3Constants`, `DwWorkPlan3Service`, and `DwWorkPlan3Controller`; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK` and covers grassroot business tree, party-org tree, save list, dispatch, duplicate no-pending rejection, `DYN_ZBRWB` field mapping, failure row on missing receiver, and cleanup. Tomcat and Redis restarted; `/pb/login` returned 200, 3.0 entry returned 302 to login, and versioned JS/CSS returned 200.

## 2026-07-09 Grassroot Dispatch Picker And Original Logic Alignment

- User found the grassroot dispatch list header was visually squeezed, especially the `操作` column. The modal now uses a searchable business picker, searchable organization checklist, and a horizontally scrollable dispatch list with fixed minimum table width so operation buttons do not wrap vertically.
- User asked for selectable demo business data. Added local script `scripts/seed-dwworkplan3-grassroot-demo.ps1`, which seeds `DW3_DEMO_BIZ_*` rows into `DYN_ZBJHYWS` and `DW3_DEMO_ORG_*` rows into `PARTY_ORGANIZATION` with member rows. This is local demo data only and keeps `DYN_ZBRWB.FK_COL_ID` pointing at a real `DYN_ZBJHYWS.ID`.
- The picker supports searching by business name/code and party organization name, plus `全选党支部` and `清空`. Switching business clears previously selected organizations to avoid submitting hidden mismatched orgs.
- Original low-code dispatch logic alignment: backend now resolves organization/member rows by type. Party organizations use `PARTY_ORGANIZATION` + `PARTY_ORGAN_MEMBER` posts `0/1/2/7` for负责人 and `4/7` for接收人; trade union uses `DYN_TRADE_UNION_ORGANIZA` + `DYN_TU_ORGAN_MEMBER`; youth league uses `LEAGUE_ORGANIZATION` + `LEAGUE_ORGAN_MEMBER`, with团组织接收人 following the original “执行人=负责人” behavior.
- JSP cache version bumped to `20260709_grassroot_dispatch_33`.
- Verification on 2026-07-09: `node --check` passed; `scripts/verify-dwworkplan3.ps1` passed; frontend guardrail scan for the 3 changed frontend files returned 0 warnings; JDK 8 compile passed for touched 3.0 Java; `scripts/seed-verify-dwworkplan3.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_BUSINESS_OK`; `scripts/seed-dwworkplan3-grassroot-demo.ps1 -DbPassword 12345678aA` returned `DWWORKPLAN3_GRASSROOT_DEMO_OK business=6 partyOrgs=6`; Tomcat and Redis restarted, `/pb/login` returned 200, 3.0 entry returned 302 to login, and versioned JS/CSS `20260709_grassroot_dispatch_33` returned 200.

## 2026-07-10 Three-Type Grassroot Dispatch

- One selected business can now target party organizations, trade unions, and youth-league organizations in the same save operation. The UI has three independent searchable multi-select sections; all three are collapsed by default and keep their selected counts visible while collapsed.
- Business type and target organization type are no longer coupled. `DYN_DW_PLAN3_GRASSROOT_DISPATCH.TARGET_ORG_TYPE` stores `d`, `g`, or `t`; legacy `PARTY_ORG_ID` / `PARTY_ORG_NAME` columns remain as generic target organization ID/name fields for compatibility.
- SQL patch `db/dw_work_plan_3_patch_20260710_grassroot_org_type.sql` adds and backfills `TARGET_ORG_TYPE`. `ensureGrassrootDispatchTable()` also adds/backfills the column at runtime so copying the code to the intranet does not depend on a fresh table rebuild.
- Selecting a business displays its completion type and form/view metadata. The save chain snapshots `DYN_ZBJHYWS.WCLX`, `BD_ID`, `BDBH`, `ST_ID`, `ST_BM`, `SFCZBD`, `YWMC`, and `ID`; dispatch writes them to `DYN_ZBRWB.WCLX`, `RWBDID`, `BDBM`, `STID`, `STBM`, `SFCZBD`, `RWMC`, and `FK_COL_ID`. `YWSJ_ID` remains the 3.0 source task ID.
- Member rules remain aligned with the supplied intranet logic: party uses `PARTY_ORGAN_MEMBER`, union uses `DYN_TU_ORGAN_MEMBER`, and youth uses `LEAGUE_ORGAN_MEMBER`; youth receiver equals its principal.
- JSP cache version is `20260710_grassroot_dispatch_34`. Frontend assets remain page-local under `WebRoot/static/pb-modern/dwworkplan3/`, scoped by `.pb-dwworkplan3-page`; no global platform, login, eform, or BPM assets were changed.
- Verification on 2026-07-10: JS syntax, 3.0 static checks, frontend conflict scans, audit-field checks, scoped diff checks, and JDK 8 service compile passed. The database verifier created one party, union, and youth target in one save, dispatched three `DYN_ZBRWB` rows, verified target member rules and all business/completion fields, then cleaned test data. Tomcat and Redis restarted; login and versioned JS/CSS returned 200, and the unauthenticated 3.0 entry returned the expected 302 login redirect.

## 2026-07-10 Grassroot Completion Type And Display Cleanup

- Grassroot business completion type is now restricted to exactly `必须完成` or `自由完成`. The business-tree API excludes unsupported values, and save validates the selected business again so a crafted request cannot persist an invalid value.
- The local demo businesses alternate between the two supported completion types. The database verifier also seeds a legacy `月度` business and verifies it is absent from the picker and rejected by save.
- Organization selectors no longer render internal IDs. The backend and browser filter blank names, ID-as-name rows, one-character structural roots, and pure alphanumeric codes such as `002001`; direct save uses the same backend filter. Existing historical dispatch rows with an unusable organization name display `名称缺失` rather than exposing the code.
- The selected-business summary only shows completion type. The business picker displays business name plus completion type while retaining name/code search internally.
- The dispatch list was reduced from ten columns to six: `业务`, `完成类型`, `接收组织`, `完成期限`, `分发状态`, and `操作`. Failure details remain available in the status-cell tooltip. Legacy rows with an unsupported stored completion type fall back to the current selected business completion type for display.
- JSP cache version is `20260710_grassroot_display_37`.
- Verification on 2026-07-10: JS syntax and `scripts/verify-dwworkplan3.ps1` passed; JDK 8 compile passed for constants/service/controller; the database verifier returned `DWWORKPLAN3_BUSINESS_OK` and covered invalid completion type plus code-only organization rejection; demo seeding returned `DWWORKPLAN3_GRASSROOT_DEMO_OK business=6 partyOrgs=6`; Tomcat and Redis restarted. Playwright login as staff `910036` verified the modal, two completion types, name-only party organization list, compact six-column table, and no horizontal overflow (`clientWidth=665`, `scrollWidth=665`).

## 2026-07-10 Grassroot Layout And Parent Refresh

- The editable grassroot modal now gives the editor and dispatch list the same responsive workspace height. Each side scrolls independently, so the long selector form no longer leaves a large blank area below the dispatch list.
- Task rows keep the title on the primary line and render `基层 completed/total` plus `必做 completed/total` as a compact secondary block with a full-width progress track. Fixed task-table column widths prevent the progress block from colliding with work category or level.
- Successful grassroot save, delete, or dispatch marks the modal dirty. Closing by the header icon, footer button, or mask runs the existing `afterTaskChanged()` reload once, so task counts and progress update without a manual page refresh.
- Completion behavior remains unchanged and database-verified: unfinished `必须完成` rows block staff completion; unfinished `自由完成` rows are counted but do not block.
- Frontend cache version is `20260710_grassroot_layout_39`. Assets remain under `WebRoot/static/pb-modern/dwworkplan3/`, scoped by `.pb-dwworkplan3-page`; global platform, login, eform, and BPM assets remain untouched.
- Verification: JS syntax and static module checks passed; the database verifier returned `DWWORKPLAN3_BUSINESS_OK`; the frontend guardrail scan checked three files with zero warnings. Playwright login as `910036` verified desktop and 900px layouts. Editable-layout measurement returned equal editor/list heights (`417.59px`) with independent overflow (`editorScroll=870`, `listScroll=567`).

## 2026-07-13 Intranet Handoff Preparation

- Requested release scope: 党委计划 3.0 plus a separately packaged party-organization-transfer listener.
- 3.0 deployment scope includes the complete `src/avicit/pb/dwworkplan3` source closure, the 3.0 JSP/JS/CSS, the base SQL, and incremental SQL patches through `20260710`.
- Java is delivered as source only. No `.class`, local environment configuration, demo data, screenshots, Playwright output, or test-result files belong in the intranet package.
- Pre-package verification passed on 2026-07-13: JS syntax, `scripts/verify-dwworkplan3.ps1`, JDK 8 compilation, base-table audit fields, and `scripts/seed-verify-dwworkplan3.ps1` with `DWWORKPLAN3_BUSINESS_OK` and `testDataCleanup=OK`.
- Existing intranet databases should apply the incremental patches in date order; `db/dw_work_plan_3.sql` is retained for fresh-install/reference use.

## 2026-07-13 Consolidated Full-Rebuild Package

- User chose a destructive clean rebuild for the intranet 3.0 database instead of incremental upgrades.
- Added `db/dw_work_plan_3_full_rebuild.sql` as the only SQL file for the replacement 3.0 package.
- The script conditionally drops the six `DYN_DW_PLAN3_*` tables and `PB_PORTAL_BUSINESS_TODO`, then recreates all seven tables and thirteen indexes with the latest schema.
- The script intentionally does not touch shared tables such as `DYN_ZBRWB`, `DYN_ZBJHYWS`, party, union, or youth organization/member tables, and does not import the old personnel tree.
- Validation: 7 drop blocks, 7 table definitions, and 13 indexes found; every recreated table structure matches the latest base SQL; PB mandatory audit-field check passed.
- Replacement package rule: include only `db/dw_work_plan_3_full_rebuild.sql`; exclude the base SQL, all incremental patch SQL files, and `dw_work_plan_3_import_person_tree.sql` to prevent accidental duplicate execution.
