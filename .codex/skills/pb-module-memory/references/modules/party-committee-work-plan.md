# Module Memory: party-committee-work-plan

## Identity

- Module name: 党委工作计划（新）
- Memory file: `.codex/skills/pb-module-memory/references/modules/party-committee-work-plan.md`
- Status: developing
- Owner/requester: xyc
- Last updated: 2026-06-27

## Business

- Goal: 新建党委工作计划线上模块，替代线下逐级发文、逐级反馈流程。
- Users/roles: 党委计划下发者、部长、室主任、科员。
- Main workflow: 党委按年度季度创建批次并下发给部长；部长必须下发给室主任；室主任必须下发给科员；科员执行并反馈；上级逐级确认或退回；父级全部子任务完成后才能向上汇总反馈。
- Important rules:
  - 不复用旧 `DYN_WORK_PLAN / partyorgplan` 模块。
  - 流转采用任务树状态模型，不走 BPM。
  - 不拆分也必须指定一个下级接收人，等同原样转派。
  - 科员是末级执行人，任务必须流到科员后才允许最终执行反馈。
  - 逾期按截止时间实时计算，不落单独逾期状态。
  - 数据权限、角色、下发范围均由本模块独立人员树决定。
- Out of scope:
  - 不改旧党委工作计划模块。
  - 不全局替换平台前端框架。

## PB Low-Code Surface

- Forms: 全定制 JSP，不用低代码主页面。
- Views:
  - 任务工作台：`platform/avicit/pb/dwworkplan/dwWorkPlanController/toWorkbench`
  - 统计分析：`platform/avicit/pb/dwworkplan/dwWorkPlanController/toStats`
  - 人员树维护：`platform/avicit/pb/dwworkplan/dwWorkPlanController/toPersonTree`
- Workflows: 不使用 BPM 流程。
- Menus: 用户已在主页面菜单“其他工作”下创建“党委工作计划（新）”。
- Permissions: 菜单权限由平台配置，数据权限由 `DYN_DW_PLAN_PERSON_TREE` 决定。
- Dictionaries/config: 角色和状态先在代码常量中维护。
- Manual platform steps: 菜单 URL 需指向上述三个入口之一，或在菜单下建三个子菜单。

## Data

- Tables:
  - `DYN_DW_PLAN_BATCH`
  - `DYN_DW_PLAN_TASK`
  - `DYN_DW_PLAN_FEEDBACK`
  - `DYN_DW_PLAN_PERSON_TREE`
- Required audit fields checked: yes
- SQL/migration notes: SQL 文件计划放在 `db/dw_work_plan_new.sql`。
- Data backfill or cleanup: 无，旧模块不迁移。
- Risky DB assumptions: Dameng/Oracle 兼容语法，主键为 `VARCHAR2(50)`。

## Files

- JSP/JS/CSS:
  - `WebRoot/avicit/pb/dwworkplan/workbench.jsp`
  - `WebRoot/avicit/pb/dwworkplan/stats.jsp`
  - `WebRoot/avicit/pb/dwworkplan/personTree.jsp`
  - `WebRoot/static/pb-modern/dwworkplan/dwworkplan.css`
  - `WebRoot/static/pb-modern/dwworkplan/dwworkplan.js`
- Java/classes:
  - `src/avicit/pb/dwworkplan/controller/DwWorkPlanController.java`
  - `src/avicit/pb/dwworkplan/service/DwWorkPlanService.java`
  - `src/avicit/pb/dwworkplan/dto/DwWorkPlanConstants.java`
- Mapper XML: 暂不新增 MyBatis Mapper，首版用 `JdbcTemplate` 降低生成成本。
- Properties/config touched: 无。
- Generated or uploaded assets: 无。

## Pitfalls And Decisions

- Pitfalls:
  - 当前目录不是 git 仓库，无法用分支/工作树隔离。
  - 旧模块同名概念较多，不要误改旧文件。
  - 页面必须 scoped CSS，不能影响平台全局样式。
- Debug notes:
  - Tomcat 7 + JDK 8。
  - 本地登录 URL：`http://127.0.0.1:8080/pb/login`。
- Rejected approaches:
  - 复用旧 `DYN_WORK_PLAN` 模块。
  - 使用 BPM 流程承载动态拆分。
  - 全低代码页面。
- User preferences:
  - 三个页面分开，避免拥挤。
  - 全定制页面，JSP + jQuery + ECharts。
  - 平台附件优先。

## Verification

- Local URL/menu path: 主页面“其他工作” -> “党委工作计划（新）”。
- Test data: 待创建。
- Checks performed: 待更新。
- Known gaps: 附件和平台消息可先预留入口，主闭环优先。

## Intranet Handoff

- Package path:
- Files to copy:
- SQL/platform config to migrate:
- Files/config not to copy:
- Intranet sync date:
- Baseline update status:

## Next Time

- Read first: 本文件。
- Likely change points: SQL、`DwWorkPlanService`、三个 JSP 和 `dwworkplan.js`。
- Do not touch without confirmation: 旧 `src/avicit/pb/partyorgplan`、旧 `DYN_WORK_PLAN` 相关页面。
## 2026-06-27 Implementation Checkpoint

- Implemented first runnable version of the new module.
- SQL executed successfully against local DM schema `DJ`:
  - `DYN_DW_PLAN_BATCH`
  - `DYN_DW_PLAN_PERSON_TREE`
  - `DYN_DW_PLAN_TASK`
  - `DYN_DW_PLAN_FEEDBACK`
  - related indexes in `db/dw_work_plan_new.sql`
- Verified table access with `SELECT ID ... WHERE 1=0` for all four new tables.
- Java source compiled with JDK 8 and deployed to `WebRoot/WEB-INF/classes`:
  - `DwWorkPlanConstants`
  - `DwWorkPlanService`
  - `DwWorkPlanController`
- Tomcat was restarted after compiling. Login page returned 200 after startup.
- Spring startup log confirms mappings for all new controller routes, including:
  - `/avicit/pb/dwworkplan/dwWorkPlanController/toWorkbench`
  - `/avicit/pb/dwworkplan/dwWorkPlanController/toStats`
  - `/avicit/pb/dwworkplan/dwWorkPlanController/toPersonTree`
  - task, feedback, person, batch, stats APIs.
- Verification commands passed:
  - `scripts/verify-dwworkplan.ps1`
  - `pb-table-audit-fields` checker for `db/dw_work_plan_new.sql`
  - `pb-frontend-guardrails` checker on 5 frontend files, 0 warnings
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js`
  - `javac` compile for the three new Java classes
- Frontend pages added:
  - Workbench: batch creation, root task save, task list, dispatch, receive, feedback submit/confirm/return.
  - Person tree: add/update/disable hierarchy nodes.
  - Stats: status pie, level stacked bar, overdue chart, recent task list.
- Attachment handling is currently a reserved attachment ID field on dispatch/root/feedback forms. It does not yet open the platform upload dialog.
- Message reminder is best-effort through `SYS_MSG` insert and is intentionally soft-fail.
- Manual menu notes:
  - Workbench URL: `platform/avicit/pb/dwworkplan/dwWorkPlanController/toWorkbench`
  - Stats URL: `platform/avicit/pb/dwworkplan/dwWorkPlanController/toStats`
  - Person tree URL: `platform/avicit/pb/dwworkplan/dwWorkPlanController/toPersonTree`
  - If only one menu exists now, point it to Workbench first; add Stats and Person Tree as submenus when ready.

## 2026-06-27 Pause Checkpoint

- User asked to pause because quota is exhausted. Do not continue implementation until user resumes.
- Important: attachment support is currently in the middle of implementation and must be finished before claiming the module complete.
- Completed just before pause:
  - Encoding hardening: rewrote the three JSP pages using HTML entities and rewrote `dwworkplan.js` with Unicode escapes so Chinese text no longer corrupts closing tags or JS strings.
  - Added stats data permission filtering in `DwWorkPlanService.stats`: party role sees global data; non-party users only see tasks they receive or send.
  - Recompiled Java into `WebRoot/WEB-INF/classes` and restarted Tomcat successfully before starting attachment work.
  - Verified after encoding/stats changes: `node --check`, frontend guardrails, audit-field checker, Java compile, Tomcat login page 200, JS/CSS static assets 200, controller mappings present.
- Attachment work in progress:
  - `db/dw_work_plan_new.sql` now includes `DYN_DW_PLAN_ATTACHMENT` plus `IDX_DW_PLAN_ATTACH_BIZ`.
  - `scripts/verify-dwworkplan.ps1` now expects `DYN_DW_PLAN_ATTACHMENT`.
  - `DwWorkPlanService` has partial methods/logic for `uploadAttachment`, `getAttachment`, and `bindAttachment`.
  - `DwWorkPlanController` has partial upload/download endpoints and BLOB reading logic.
- Still required after resume:
  - Compile the partial attachment Java changes and fix any compile errors.
  - Execute/migrate the new `DYN_DW_PLAN_ATTACHMENT` table in the local DM database; existing DB currently may not have this new table.
  - Add file input/upload buttons to `workbench.jsp` and wire `dwworkplan.js` to call `api/attachment/upload`.
  - Display uploaded attachment names and download links for root task, dispatch task, and feedback.
  - Rerun all checks and restart Tomcat after final compile.
  - Re-test controller mappings and static assets.

## 2026-06-27 Final Runtime Checkpoint

- Resumed after user said to continue.
- Finished custom attachment support for the new module:
  - Added table `DYN_DW_PLAN_ATTACHMENT` and index `IDX_DW_PLAN_ATTACH_BIZ` to `db/dw_work_plan_new.sql`.
  - Migrated the local DM database; `SELECT ID FROM DYN_DW_PLAN_ATTACHMENT WHERE 1=0` verified successfully.
  - Added backend upload/download endpoints:
    - `api/attachment/upload`
    - `api/attachment/download`
  - Root task save, child dispatch, and feedback submit now bind uploaded attachment IDs to task/feedback business rows.
  - Workbench now uses file inputs instead of manual attachment ID fields.
  - Workbench JS uploads selected files before save/dispatch/feedback and renders download links for task and feedback attachments.
- Recompiled Java with JDK 8 and deployed classes to `WebRoot/WEB-INF/classes`.
- Restarted Tomcat with `pb-stop-tomcat-local` then `pb-start-local`.
- Runtime verification:
  - Login page returned 200.
  - Static assets returned 200:
    - `static/pb-modern/dwworkplan/dwworkplan.js`
    - `static/pb-modern/dwworkplan/dwworkplan.css`
  - Unauthenticated workbench/API requests returned 302, proving platform auth intercepts them instead of missing routes.
  - Spring startup log mapped all dwworkplan routes, including the three pages, task APIs, feedback APIs, person tree APIs, stats API, and attachment upload/download APIs.
- Checks passed:
  - `scripts/verify-dwworkplan.ps1`
  - `pb-table-audit-fields` checker for `db/dw_work_plan_new.sql`
  - `pb-frontend-guardrails` checker, 0 warnings
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js`
  - mojibake scan for the new JSP/JS/CSS folders returned no matches.
- Remaining manual/user-side step: use the existing menu under "other work" to open the page while logged in, then configure data in the person tree before exercising the full four-level workflow.

## 2026-06-27 Menu Fix

- User pointed out the new pages were not actually reachable from the created menu.
- Investigation result:
  - The new menu records were not in `SYS_MENU/SYS_MENU_TL`.
  - They were in `SYS_RESOURCE` under front menu tree parent `2`.
  - Parent record: `402882839f06bd04019f06e9db6a0ce0`, key `党委工作计划(新)`, value blank, parent `2`.
  - Child records existed but had blank `VALUE`.
- Fixed `SYS_RESOURCE.VALUE`:
  - `党委工作计划工作台` -> `platform/avicit/pb/dwworkplan/dwWorkPlanController/toWorkbench`
  - `党委工作计划统计分析` -> `platform/avicit/pb/dwworkplan/dwWorkPlanController/toStats`
  - `党委工作计划人员树维护` -> `platform/avicit/pb/dwworkplan/dwWorkPlanController/toPersonTree`
- Restarted Tomcat after the menu update so platform menu/cache state can reload.
- Verification:
  - DB query confirms all three child menu resource URLs are populated.
  - Login page returned 200 after restart.
  - Unauthenticated direct requests to all three URLs returned 302 instead of 404, proving route and auth interception are active.
  - Spring startup log maps all three page routes.

## 2026-06-27 Parent Menu URL Fix

- User reported the menu still could not open and asked to mount the URL in menu management.
- Root cause: the visible/clicked parent resource `党委工作计划(新)` still had blank `SYS_RESOURCE.VALUE`; only the child menu resources had URLs.
- Fixed `SYS_RESOURCE.VALUE` for the parent as well:
  - `党委工作计划(新)` -> `platform/avicit/pb/dwworkplan/dwWorkPlanController/toWorkbench`
- Re-applied child values:
  - `党委工作计划工作台` -> workbench URL
  - `党委工作计划统计分析` -> stats URL
  - `党委工作计划人员树维护` -> person-tree URL
- Called platform cache refresh endpoint:
  - `platform/cache/RefreshCacheController/refresh`, type `other`
  - `platform/cache/RefreshCacheController/refresh`, type `auth`
- Restarted Tomcat after refreshing cache.
- Verification:
  - DB output shows parent and all three child menu resources now have the intended URLs.
  - Workbench direct URL returns 302 to login instead of 404.
  - Spring log maps `toWorkbench`.

## 2026-06-27 API And Workbench Usability Fix

- User reported many API errors and that the workbench layout was hard to understand.
- Root cause for many API errors:
  - Controller string parameters such as `batchId`, `status`, `year`, `quarter`, `feedbackId`, and `id` did not use explicit `@RequestParam`.
  - JDK 8 compilation did not preserve method parameter names, so Spring MVC threw `IllegalArgumentException: Name for argument type [java.lang.String] not available`.
- Fixed `DwWorkPlanController` by adding explicit `@RequestParam(value=..., required=false)` to all direct String request parameters.
- Workbench layout changed from three dense form columns to a clearer operating structure:
  - flow bar: quarterly batch -> task pool -> dispatch/feedback -> confirm completion
  - left panel: batch and party root-task creation
  - center panel: task pool
  - right panel: selected-task processing panel
  - processing controls are disabled until a task is selected
  - root-task creation is hidden for non-`PARTY_SENDER` users
  - selected task detail now shows sender, receiver, status, deadline, target, content, and attachment link
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - frontend guardrails check passed with 0 warnings.
  - mojibake scan returned no matches.
  - Java compiled with JDK 8 and deployed to `WebRoot/WEB-INF/classes`.
  - Tomcat restarted; login returned 200.
  - static JS/CSS returned 200.
  - workbench URL returned 302 to login rather than 404.
  - fresh startup log maps all dwworkplan routes.
  - `scripts/verify-dwworkplan.ps1` passed.
  - PB audit-field checker passed.

## 2026-06-28 Root Task Save Fix

- User reported saving a party committee task failed.
- Root cause:
  - `DwWorkPlanService.saveRootTask` inserted into `DYN_DW_PLAN_TASK` with 24 target columns.
  - Four values are literals (`sysdate`, `sysdate`, `0`, final `sysdate`), so the SQL needs 20 `?` placeholders.
  - The insert SQL only had 19 placeholders, causing the save to fail at JDBC/SQL execution.
  - The same placeholder bug existed in `dispatchChild`, so downward task dispatch would have failed next.
- Fixed:
  - Updated both `saveRootTask` and `dispatchChild` insert SQL value lists to use 20 placeholders.
  - Recompiled `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - Deployed classes into `WebRoot/WEB-INF/classes`.
  - Restarted Tomcat with local PB start/stop skills.
- Verification:
  - Placeholder count check now shows both task inserts have 20 `?`.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Login page returned 200 after restart.

## 2026-06-28 Person Tree User Selector Fix

- User pointed out that adding users in the person tree should call the platform user picker instead of manually typing user ID/name.
- Fixed:
  - `personTree.jsp` now hides `dwPersonUserId` and shows a read-only user name picker field plus a select button.
  - `dwworkplan.js` binds the picker to platform `H5CommonSelect`.
  - Selector config:
    - `type: 'userSelect'`
    - `idFiled: 'dwPersonUserId'`
    - `textFiled: 'dwPersonUserName'`
    - `viewScope: 'currentOrg'`
  - `common,form` h5 include already loads `static/h5/common-ext/CommonSelect.js`, so no new global script or dependency was added.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Static JS/CSS returned 200 from local Tomcat.
  - Full frontend guardrail scan warnings were unrelated existing platform/eform/login files, not the changed dwworkplan files.

## 2026-06-28 Collapsible Person Tree UI

- User suggested the person tree should be truly hierarchical: click a parent node to expand child nodes.
- Fixed:
  - Left-side person list now renders as a collapsible tree table instead of a flat indented table.
  - Parent nodes show an expand/collapse control and child-count badge.
  - Added "expand all" and "collapse all" buttons above the tree.
  - Clicking the expand icon only toggles children; clicking the row still loads the node into the edit form.
  - Parent dropdown now excludes the current node and its descendants, preventing circular hierarchy selection.
- Files changed:
  - `WebRoot/avicit/pb/dwworkplan/personTree.jsp`
  - `WebRoot/static/pb-modern/dwworkplan/dwworkplan.js`
  - `WebRoot/static/pb-modern/dwworkplan/dwworkplan.css`
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Static JS/CSS returned 200 from local Tomcat.

## 2026-06-28 Local-Only System Message Suppression

- User asked to close the platform system-message popup because it keeps interrupting local testing.
- Local-only change:
  - `WebRoot/static/js/platform/sysmessage/js/messageDialog.js`
  - `loadMessage(...)` returns immediately and removes any existing `msg_win` popup.
- Important intranet handoff rule:
  - Do not deploy this file to intranet.
  - It has been added to `pb-intranet-packager` exclusions so generated release packages skip it.

## 2026-06-28 Person Tree Toggle Button Polish

- User asked to combine "expand all" and "collapse all" into one button and improve the icon.
- Fixed:
  - Replaced two header buttons with one `dwPersonToggleAllBtn`.
  - Button switches between expand/collapse based on current tree state.
  - Final style uses a compact white system-tool button with a small CSS plus/minus icon, not a pill-style button.
  - JS no longer mutates icon HTML; it only toggles classes, title, disabled state, and button text.
  - Empty trees and trees with only leaf nodes disable the button instead of trying to toggle nothing.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - PB frontend guardrail full scan only reported unrelated existing eform/portal/login warnings, not changed dwworkplan files.

## 2026-06-28 Workbench Batch And Tab Layout Update

- User requested four workbench changes: party-only batch creation, latest batch selected by default with labels such as `2026/3季度`, clickable top headings to reduce clutter, and a batch delete button.
- Fixed:
  - `DwWorkPlanService.createBatch` now checks `PARTY_SENDER` server-side before creating or selecting a batch.
  - Added `DwWorkPlanController.api/batch/delete` and `DwWorkPlanService.deleteBatch`; delete also checks `PARTY_SENDER`.
  - Batch delete removes the batch plus related tasks, feedback, and bound attachments.
  - `listBatches` orders by `PLAN_YEAR desc, QUARTER desc, CREATION_DATE desc`; frontend selects the first batch by default.
  - `dwworkplan.js` renders batch labels from fields as `year/quarter季度`.
  - `workbench.jsp` changed the four top flow titles into clickable tab buttons: batch, task pool, dispatch/feedback, and completion confirmation.
  - Batch create/delete and root task form are hidden by default and only shown after current user roles include `PARTY_SENDER`.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - JDK 8 `javac` compile passed for `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - Local Tomcat was started outside the sandbox because it must write to `D:\Tomcat\apache-tomcat-7.0.109\logs`.
  - Login page returned 200; workbench direct URL returned 302 to login instead of 404.
  - Static JS and CSS returned 200.
  - Tomcat startup log mapped `api/batch/delete`.
  - Full frontend guardrail scan reported only unrelated existing eform/portal/login warnings, not dwworkplan files.

## 2026-06-28 Person Tree Error And Button Polish

- User reported the latest person-tree change still showed an error and the style was not good.
- Fixed platform user picker compatibility:
  - `openPersonUserSelect` now matches existing PB pages more closely:
    - `type: 'userSelect'`
    - `idFiled: 'dwPersonUserId'`
    - `textFiled: 'dwPersonUserName'`
    - `selectModel: 'single'`
  - Removed the extra `viewScope: 'currentOrg'` option to reduce component compatibility risk.
- Fixed dispatch button false-disabled cases:
  - `canDispatchTask` compares receiver/user IDs as strings because platform data may return numeric-looking IDs with different JS types.
- Improved business error clarity:
  - Invalid/over-level dispatch receiver validation no longer bubbles generic `Data not found`.
  - It now returns `Receiver must be the direct next-level child of current user node`.
- Refined person tree buttons:
  - Expand/collapse-all button changed to a compact toolbar-style button with CSS plus/minus icon.
  - Selected-row "add child node" button changed from a pill with raw `+` text to a small system-style button with a CSS plus icon.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - JDK 8 `javac` compile passed for `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - Tomcat restarted; port 8080 is listening.
  - Login page returned 200.
  - Static JS and CSS returned 200.
  - Person tree direct URL returned 302 to login instead of 404 when unauthenticated.
  - Full frontend guardrail scan reported only unrelated existing eform/portal/login warnings, not dwworkplan files.

## 2026-06-28 Workbench Task Notice, Feedback Approval, And License Resource

- User requested nine workbench refinements: new-task prompt badge, rebuild/sync `src/license` `.res`, staff cannot dispatch, parent status follows child completion, parent can view/approve/reject child feedback, approved feedback backfills parent, buttons prevent repeat clicks with Chinese polished popups, feedback and completion confirmation share one page with completion detail/time, and workbench title/layout polish.
- Backend changes:
  - `DYN_DW_PLAN_TASK` gained `COMPLETE_DETAIL CLOB`; local DM table was migrated and `db/dw_work_plan_new.sql` was updated.
  - `listTasks` now returns `NOTICE_FLAG=Y` for receiver TODO/RETURNED tasks and sender PENDING_CONFIRM tasks.
  - `submitFeedback` blocks duplicate pending/completed feedback, requires the receiver, and requires child tasks to be completed before upward feedback.
  - `confirmFeedback` is allowed only to the task sender; it marks feedback confirmed, marks task completed, stores `COMPLETE_DETAIL`, and syncs the parent.
  - `returnFeedback` is allowed only to the task sender; it requires a reject reason, marks child task returned, and puts the parent back to waiting-child state.
  - Parent sync aggregates completed child `COMPLETE_DETAIL` into the parent and makes the parent executable again when all children are completed.
- Frontend changes:
  - Workbench title is now `工作计划`.
  - Workbench tabs are now batch, task pool, and `反馈与确认完成`; old separate confirm area was removed.
  - Task pool title/tab show a red count badge for actionable new tasks; rows also show a small `新` badge.
  - Staff level hides the dispatch panel; accept/feedback/dispatch buttons are disabled when the selected task status or user ownership does not allow the action.
  - Accept, root-save, dispatch, feedback submit, confirm, and return buttons lock during API calls to avoid repeat clicks.
  - Feedback list shows task title, feedback user/time, completion time, completion detail, attachment, reject reason, and only shows approve/reject buttons to the task sender.
  - Layer popups/messages use Chinese text and a local style skin.
  - Top-right batch/status/refresh controls are centered horizontally.
- License resource:
  - Runtime `WebRoot/WEB-INF/classes/license` was synced from `src/license`.
  - Old `2026-06-30` `.res` was removed from runtime classes; new `2026-12-31` `.res` is present.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - JDK 8 `javac` compile passed for `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - DM query confirmed `DYN_DW_PLAN_TASK.COMPLETE_DETAIL` exists locally.
  - Tomcat restarted with the PB start skill.
  - `http://127.0.0.1:8080/` returned 200.
  - `http://127.0.0.1:8080/pb/static/pb-modern/dwworkplan/dwworkplan.js` returned 200.

## 2026-06-28 Workbench Dispatch Page Correction

- User clarified that dispatch must still exist as its own page; only staff have no dispatch permission. Feedback and completion confirmation must be another page.
- Fixed:
  - `workbench.jsp` now has four workbench tabs: batch, task pool, `下发任务`, and `反馈与确认完成`.
  - Dispatch form moved into its own `dispatch` section with `dwDispatchProcessBox`.
  - Feedback/accept/complete detail/approve-return list stays in its own `process` section with `dwFeedbackProcessBox`.
  - Selected task summary is rendered into both pages.
  - Task pool `处理` button opens the dispatch page for tasks with a next level, and opens feedback/confirmation for staff-level tasks.
  - Staff/no-next-level tasks show a clear no-dispatch-permission message instead of showing the dispatch form.
  - Backend already rejects staff-level dispatch via `DwWorkPlanConstants.nextLevel(...)` returning blank.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Exact source search confirmed separate `data-tab-panel="dispatch"` and `data-tab-panel="process"` sections.
  - Static JS returned 200 from local Tomcat.

## 2026-06-28 Dispatch Must Follow Accept And Take-Back Before Accept

- User clarified two workflow rules:
  - A received task must be accepted before it can be dispatched downward.
  - If a dispatched child task has not been accepted yet, the sender can take it back from the task pool, edit, and dispatch again.
- Backend changes:
  - `DwWorkPlanService.dispatchChild` now rejects dispatch unless the parent task status is `DOING` or `RETURNED`.
  - Added `DwWorkPlanService.takeBackTask`.
  - Added controller route `api/task/takeBack`.
  - Take-back is allowed only when current user is the task `SENDER_ID`, the child task status is `TODO`, and the task has a parent.
  - Take-back deletes the unaccepted child task, deletes its attachment binding, and restores the parent task status to `DOING`.
- Frontend changes:
  - `canDispatchTask` now requires selected task status `DOING` or `RETURNED`.
  - Dispatch page shows an explicit accept-first message for `TODO` parent tasks.
  - Task pool operation column now renders `处理` plus `拿回` when the current user is the sender and the task is still `TODO`.
  - After take-back succeeds, the page reloads tasks, selects the parent task, and opens the dispatch page so the user can edit and dispatch again.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - JDK 8 `javac` compile passed for `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.

## 2026-06-28 Root Party Task Created From Batch Can Dispatch Directly

- User clarified the disabled dispatch case was the root party task created from the batch page via the save party-task button.
- Root cause:
  - `saveRootTask` created root PARTY tasks with `STATUS=DRAFT`.
  - Frontend direct-dispatch logic allowed PARTY tasks only in `TODO/DOING/RETURNED`, so root PARTY/DRAFT tasks showed a disabled dispatch button.
  - Backend already skipped the accept-first status check for PARTY tasks, but frontend blocked before the request.
- Fixed:
  - New root PARTY tasks are now created with `STATUS=TODO`.
  - Frontend also allows PARTY/DRAFT to dispatch for compatibility with already-created root tasks.
  - Local existing root task `402882839f0c4348019f0c47909e0cd6` was migrated from `DRAFT` to `TODO`.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - JDK 8 `javac` compile passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Frontend guardrail scan on changed JS returned no warnings.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.

## 2026-06-28 Feedback Chain Propagation And Party Task Pool Scope

- User requested:
  - Department receives a message when office submits feedback upward.
  - When staff feedback is approved, its content and attachment copy to the office task feedback data.
  - Department must also approve/reject office feedback.
  - Department can submit feedback to party; party receives a message.
  - Party dispatcher task pool should only show PARTY and DEPT level tasks.
- Existing behavior confirmed:
  - `submitFeedback` already calls `notifyParent`, so office-to-department and department-to-party submissions both send parent receiver messages.
  - `listFeedback` shows direct child feedback and sets `CAN_CONFIRM=Y` for the task sender, so department can approve/reject office feedback.
- Backend changes:
  - `confirmFeedback` now calls `syncParentAfterChildDone(taskId, feedbackAttachmentId, request)`.
  - Approved child feedback content is aggregated into parent task `COMPLETE_DETAIL`.
  - Approved child feedback attachment is copied into a new `DYN_DW_PLAN_ATTACHMENT` row bound to the parent task as `TASK_COMPLETE`.
  - Parent task `ATTACHMENT_ID` is updated to the copied completion attachment when available.
  - When all children are complete, parent receiver gets a message that child feedback passed and the parent can continue upward processing.
  - `submitFeedback` defaults blank feedback content from task `COMPLETE_DETAIL`.
  - `submitFeedback` defaults blank attachment from the task's latest `TASK_COMPLETE` attachment.
  - `listTasks` now exposes `ATTACHMENT_BIZ_TYPE`.
  - Historical rule at this checkpoint: party dispatcher task pool filtered to `TASK_LEVEL in (PARTY, DEPT)`.
  - Superseded on 2026-06-28 by the later "Party Dispatcher Full-Level Task Pool" rule below.
- Frontend changes:
  - Selecting a task pre-fills feedback content from `COMPLETE_DETAIL`.
  - If the selected task has a `TASK_COMPLETE` attachment, feedback attachment hidden value and status are prefilled.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - JDK 8 `javac` compile passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Frontend guardrail scan on changed JS returned no warnings.
  - DM query confirmed current task levels include PARTY/DEPT/OFFICE/STAFF, so the then-current party filtering was meaningful.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.
  - Task list and feedback confirm URLs returned platform login redirect instead of 404 when unauthenticated.

## 2026-06-28 Feedback Backfill Must Use Feedback Draft

- User corrected the feedback backfill rule:
  - Lower-level approved feedback must backfill into the parent task's feedback form/data, not into the parent task completion-detail field.
  - Attachments must follow the same rule and backfill into feedback attachment data.
- Backend changes:
  - Added `FEEDBACK_DRAFT = DRAFT` as an internal feedback status.
  - When child feedback is approved, `syncParentAfterChildDone` now creates/updates a parent-task feedback draft in `DYN_DW_PLAN_FEEDBACK`.
  - Approved child feedback attachment is copied to a new attachment row and bound to the feedback draft as `FEEDBACK_DRAFT`.
  - Parent task `COMPLETE_DETAIL` and `ATTACHMENT_ID` are no longer used as the upward-feedback backfill target.
  - `submitFeedback` now reuses an existing feedback draft by converting it to `PENDING`; if the user leaves content/attachment blank, it submits the draft content/attachment.
  - `listTasks` now returns `FEEDBACK_DRAFT_CONTENT` and `FEEDBACK_DRAFT_ATTACHMENT_ID`.
  - `listFeedback` hides `FEEDBACK_DRAFT` rows so draft data does not appear in approval history.
- Frontend changes:
  - Feedback textarea now pre-fills from `FEEDBACK_DRAFT_CONTENT`.
  - Feedback attachment hidden value now pre-fills from `FEEDBACK_DRAFT_ATTACHMENT_ID`.
  - Removed the previous prefill dependency on task `COMPLETE_DETAIL` / task attachment business type.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - JDK 8 `javac` compile passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - DM query confirmed the task-list draft subqueries are valid.
  - Frontend guardrail scan on changed JS returned no warnings.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.
  - Task list and feedback submit URLs returned platform login redirect instead of 404 when unauthenticated.
  - Follow-up audit removed the remaining parent `COMPLETE_DETAIL` write from `syncParentAfterChildReturned`; feedback backfill now only uses feedback draft rows.
  - Follow-up runtime check found feedback draft rows were created correctly, but task-list draft content was selected as a CLOB. Changed `FEEDBACK_DRAFT_CONTENT` task-list subquery to `dbms_lob.substr(...,4000,1)` so the frontend receives a string.

## 2026-06-28 Party Completion Sync And Task Pool Level Display

- User requested:
  - In the party dispatcher role, when all department-level child tasks are completed, the corresponding party-level root task should also become completed.
  - Task pool should show task levels more clearly because the flat list is hard to read.
- Backend changes:
  - `syncParentAfterChildDone` now checks parent `TASK_LEVEL`.
  - If parent is `PARTY` and all child department tasks are completed, parent status becomes `COMPLETED` and `COMPLETE_TIME` is set.
  - Non-party parents still return to `DOING` when all children complete so they can submit upward feedback.
  - `listTasks` now orders by root task creation time, root id, level order (`PARTY`, `DEPT`, `OFFICE`, `STAFF`), then creation time, so parent/child levels display together.
  - Local existing data with completed department child and non-completed party parent was migrated to `PARTY/COMPLETED`.
- Frontend changes:
  - Task pool level column now renders a visual level cell with indentation, branch mark, colored dot, and level text.
  - `PARTY` depth 0, `DEPT` depth 1, `OFFICE` depth 2, `STAFF` depth 3.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - JDK 8 `javac` compile passed.
  - DM query verified the new task ordering SQL.
  - DM update verified local party task became `COMPLETED`.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Frontend guardrail scan on changed JS returned no warnings; CSS only has INFO for existing local layer keyword.
  - Tomcat restarted.
  - Static JS/CSS returned 200 from local Tomcat.
  - Task list URL returned platform login redirect instead of 404 when unauthenticated.
  - DM query confirmed the existing root PARTY task is now `TODO`.

## 2026-06-28 Explicit Staff Receiver Selection

- User clarified that when an office director dispatches to staff, the office can have multiple staff users, so the director must be able to specify exactly one person.
- Current backend already supports this:
  - `listReceivers` returns direct next-role children from `DYN_DW_PLAN_PERSON_TREE`.
  - `validateDirectChildReceiver` validates selected `personNodeId` and `receiverId` against the current user's direct child node.
- Frontend fix:
  - `dwReceiverSelect` now always starts with `请选择接收人` instead of auto-selecting the first returned user.
  - Dispatch remains disabled until the user explicitly selects a receiver.
  - Receiver option labels now include both node name and user name when available, e.g. `科员 - 张三`.
  - Dispatch page shows `请选择接收人` when the task is otherwise dispatchable but no receiver is selected.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Frontend guardrail scan on changed JS returned no warnings.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.
  - Static CSS returned 200 from local Tomcat.
  - `api/task/takeBack` POST returned platform login redirect instead of 404 when unauthenticated, confirming the URL is present in the app route chain.
  - PB frontend guardrail scans on changed frontend files had no HIGH/BLOCKING warnings; CSS only reports INFO because it references the existing local `layui` layer skin.

## 2026-06-28 Party Dispatch Does Not Require Accept

- User clarified the accept-before-dispatch rule has one exception:
  - Party/committee dispatching to departments can dispatch directly and does not need to accept first.
  - Other levels still need to accept before dispatching downward.
  - The dispatch page must not show an accept button.
  - Other levels show the accept button only before accepting; after accepting it should disappear.
- Backend changes:
  - `DwWorkPlanService.dispatchChild` now skips the `DOING/RETURNED` status requirement when parent task level is `PARTY`.
  - Non-party dispatch still rejects `TODO` parent tasks with the accept-first message.
- Frontend changes:
  - `canDispatchTask` now allows `PARTY` tasks in `TODO/DOING/RETURNED` status to dispatch.
  - Non-party `TODO` tasks still show the accept-first message on the dispatch page.
  - `dwAcceptBtn` now uses `.toggle(canAcceptTask(task))`; after accepting, the button is hidden instead of disabled.
  - `workbench.jsp` already keeps the accept button only in the feedback/confirmation page, not the dispatch page.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - JDK 8 `javac` compile passed for `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Frontend guardrail scans for changed JSP/JS returned no warnings.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.
  - Workbench direct JSP and dispatch API URLs returned platform login redirect instead of 404 when unauthenticated.

## 2026-06-28 Department Task Dispatch Button Disabled Root Cause

- User reported a task sent to a department could not click the dispatch button.
- Root cause:
  - Department tasks (`TASK_LEVEL=DEPT`) still need to be accepted before dispatching to offices.
  - The dispatch page showed only a disabled dispatch button/message and did not provide an accept action on that page.
  - The accept button existed only in the feedback/confirmation page, so the dispatch page workflow was blocked/confusing.
- Fixed:
  - Added `dwDispatchAcceptBtn` to the dispatch page unavailable/accept-first area.
  - `dwDispatchAcceptBtn` and `dwAcceptBtn` share `acceptSelectedTask`.
  - For non-party `TODO` tasks with a next level, dispatch page shows the accept-first message plus the accept button.
  - After accept succeeds, tasks reload, the same task is selected, and dispatch page/form is shown.
  - For `PARTY` tasks, direct dispatch remains allowed and no accept button is shown.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - JDK 8 `javac` compile passed.
  - Frontend guardrail scans on changed JSP/JS returned no warnings.
  - Tomcat restarted.
  - Static JS returned 200 from local Tomcat.

## 2026-06-28 Collapsible Task Pool Tree

- User requested the workbench task pool to become a collapsible tree structure similar to the person tree.
- Frontend changes:
  - `dwworkplan.js` now builds the task pool from `DYN_DW_PLAN_TASK.PARENT_ID` instead of rendering a flat list.
  - Added `state.taskExpanded` to preserve expand/collapse state across task re-renders.
  - Root tasks whose parent is not present in the current filtered result render as roots; this also supports any future role-filtered result set.
  - Parent task rows show the existing tree toggle control, child count badge, and collapse/expand descendants in place.
  - Existing task action behavior is unchanged: the `处理` and `拿回` buttons still select/process the row; clicking the tree toggle only expands or collapses.
  - `dwworkplan.css` adds scoped task-tree column sizing and reuses the existing `.dw-tree-toggle` and `.dw-tree-count` styles.
- No backend or database changes were needed.
- Verification:
  - `node --check WebRoot/static/pb-modern/dwworkplan/dwworkplan.js` passed.
  - `scripts/verify-dwworkplan.ps1` passed.
  - PB frontend guardrail scan on changed JS/CSS scanned 2 files; only one INFO warning for an existing local CSS framework keyword.
  - Local Tomcat served updated JS and CSS with HTTP 200.

## 2026-06-28 Party Dispatcher Full-Level Task Pool

- User changed the task-pool visibility rule: party committee plan dispatchers should behave like department ministers for visibility and can see all task levels.
- Backend change:
  - `DwWorkPlanService.listTasks` no longer adds `TASK_LEVEL in (PARTY, DEPT)` for `PARTY_SENDER`.
  - If the current user has no person-tree node, task list still returns no rows.
  - Non-party roles still use `PERSON_NODE_ID in (subtree)` to keep their received/sent task scope under their person-tree node.
- Frontend impact:
  - No page change was needed. The existing collapsible task tree now receives PARTY, DEPT, OFFICE, and STAFF rows for party dispatchers and displays them as one tree.
- Verification:
  - JDK 8 `javac` compile passed for `DwWorkPlanConstants`, `DwWorkPlanService`, and `DwWorkPlanController`.
  - `scripts/verify-dwworkplan.ps1` passed.
  - Tomcat restarted; port 8080 is listening and login page returned 200.
  - Task-list API returned platform login redirect 302 when unauthenticated, proving the route is active rather than missing.
