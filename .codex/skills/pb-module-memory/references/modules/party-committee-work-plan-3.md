# Module Memory: party-committee-work-plan-3

## Identity

- Module name: 党委计划 3.0
- Memory file: `.codex/skills/pb-module-memory/references/modules/party-committee-work-plan-3.md`
- Status: local-verified
- Owner/requester: xyc
- Last updated: 2026-06-30

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
- Rejected approaches:
  - 复用旧模块表和旧菜单。
  - 三页拆分入口。
  - 接平台附件接口作为首版。
- User preferences:
  - 做好后只提供 JSP 地址，由用户自己关联菜单。

## Verification

- Local URL/menu path: `platform/avicit/pb/dwworkplan3/dwWorkPlan3Controller/toIndex`
- Test data: 待执行 SQL 后由页面创建。
- Checks performed:
  - `node --check WebRoot/static/pb-modern/dwworkplan3/dwworkplan3.js` passed.
  - `scripts/verify-dwworkplan3.ps1` passed.
  - PB audit-field checker passed for `db/dw_work_plan_3.sql`.
  - PB frontend guardrail scan checked 3 files; only INFO for local/scoped CSS keyword.
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
