# Module Memory: party-committee-work-plan-3

## Identity

- Module name: 党委计划 3.0
- Memory file: `.codex/skills/pb-module-memory/references/modules/party-committee-work-plan-3.md`
- Status: local-verified
- Owner/requester: xyc
- Last updated: 2026-06-30
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
- 2026-06-30 bugfix memory: 页面“新增”打不开的根因是当前登录人没有 3.0 人员节点时 `currentUser.roles` 为空，前端按“非党委计划下发者”禁用新建按钮；`ensureBootstrapRoot` 已改为按当前登录人补齐 3.0 根节点，而不是只在整张人员表为空时初始化。`scripts/seed-verify-dwworkplan3.ps1` 增加 `DW3_STRANGER` 回归检查，覆盖已有人员树但当前用户未配置节点的场景。
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
