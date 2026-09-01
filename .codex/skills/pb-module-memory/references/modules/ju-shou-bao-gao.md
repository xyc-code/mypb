# Module Memory: ju-shou-bao-gao

## Identity

- Module name: 举手报告
- Memory file: .codex/skills/pb-module-memory/references/modules/ju-shou-bao-gao.md
- Status: developing
- Owner/requester: 用户
- Last updated: 2026-09-01

## Business

- Goal: 为领导提供举手报告流程数据的单页统计总览，直接呈现核心数量、流程状态占比和报告类型分布。
- Users/roles: 领导查看全公司汇总；菜单和权限由用户在内网平台配置。
- Main workflow: 低代码表单 DYN_JSBG 产生报告记录，统计页按流程状态 BUSINESSSTATE_ 汇总。
- Important rules: 默认按当前年份统计；年份筛选使用 FSSJ（发生时间）；发布源码默认使用正式模式并读取 BPM_CLIENT_HIST_PROCINST_V.BUSINESSSTATE_，按 FORMID_=DYN_JSBG.ID 关联并取最新实例；本地测试必须显式设置 `-Dpb.jbg.tempStatusMode=true` 才读取 DYN_JSBG.JBG_TEST_STATUS；报告类型使用 BGLX。
- Out of scope: 不统计附件、密码、测试字段和质量处理环节字段；暂不新增业务统计表。

## PB Low-Code Surface

- Forms: DYN_JSBG（已有低代码表单，未改动）。
- Views: 新增独立统计 JSP，由用户自行挂菜单。
- Workflows: 新增可导入流程草稿 `docs/workflows/ju-shou-bao-gao-responsibility-v2.jpdl`；内网导入后配置参与者、表单权限和责任单位循环变量，不覆盖现有流程。
- Menus: 待用户在内网新增菜单，指向统计 JSP。
- Permissions: 统计接口沿用 PB 登录会话；菜单授权由内网配置。
- Dictionaries/config: BGLX 显示表单实际值；BUSINESSSTATE_ 动态显示数据库原始值。
- Manual platform steps: 新增 JSP 菜单；确认领导角色可访问统计页及接口；内网启动参数不得设置 `-Dpb.jbg.tempStatusMode=true`，可显式设置 `-Dpb.jbg.tempStatusMode=false` 作为部署声明。

## Data

- Tables: DYN_JSBG；内网受理单位子表 DYN_JSBG_YWCL；本地专用受理归属测试表 JBG_TEST_ACCEPT_UNIT。
- Required audit fields checked: JBG_TEST_ACCEPT_UNIT 包含 ID、CREATED_BY、CREATION_DATE、LAST_UPDATED_BY、LAST_UPDATE_DATE、LAST_UPDATE_IP、VERSION、ORG_IDENTITY 八个强制字段。
- SQL/migration notes: 报告单位按 DYN_JSBG.SZDW 汇总；内网受理单位按 DYN_JSBG_YWCL.FK_COL_ID 关联主表，无子表记录时从最新 task21 的 ASSIGNEE_DEPT_ 关联 SYS_DEPT_V；本地只读取 JBG_TEST_ACCEPT_UNIT。
- Data backfill or cleanup: none。
- Risky DB assumptions: FSSJ 为 DATE；紧急类型字段的真实列名为 `DYN_JSBG.JJ_LX`，不得写成 `JJLX`；DYN_JSBG、BGLX 字段名称按平台配置使用大写；`JBG_TEST_STATUS` 仅为本地 fixture 字段，内网不存在且正式 SQL 不得查询；内网正式模式依赖 BPM_CLIENT_HIST_PROCINST_V。

## Files

- JSP/JS/CSS: WebRoot/avicit/pb/jushoubaogao/JuShouBaoGaoStatistics.jsp；WebRoot/static/pb-modern/jushoubaogao/jushoubaogao.js；WebRoot/static/pb-modern/jushoubaogao/jushoubaogao.css。
- Java/classes: src/avicit/pb/jushoubaogao/controller/JuShouBaoGaoController.java。
- Mapper XML: none。
- Properties/config touched: none。
- Generated or uploaded assets: none。
- Local-only test fixture: db/ju_shou_bao_gao_test_data.sql（包含 JBG_TEST_ACCEPT_UNIT，可重复执行，不得复制或运行到内网）。

## Pitfalls And Decisions

- Pitfalls: 不要把质量处理日期 ZL_FSRQ 误当作所有报告的发生时间；统计年份统一使用 FSSJ；本地测试不要依赖 BPM 流程状态；内网部署必须通过唯一开关切回 BPM 流程状态。
- Delivery gate: 只有进入“打包到内网”阶段才允许把交付源码切为默认读取 `BPM_CLIENT_HIST_PROCINST_V` 流程状态；本地开发、本地测试、本地验收必须显式设置 `-Dpb.jbg.tempStatusMode=true` 使用 `JBG_TEST_STATUS`。
- Debug notes: 无数据年份仍需返回空数组和 0，页面不能因接口无记录报错。
- Debug notes: JSP 页面使用 `<base href>` 时，模块静态资源必须使用 `request.getContextPath()` 绝对路径；相对 `static/...` 会解析到 `/avicit/pb/jushoubaogao/static/...` 并导致 CSS、JS、ECharts 全部 404，页面表现为改动未生效。
- Rejected approaches: 不新增统计表；不引入 Vue/React 或 CDN；不使用 3D 图表。
- User preferences: 一眼看到结论、图表简洁素雅、关键数字标注、标题直指结果、单页主次分明。
- Product review decision (2026-08-24): 领导首屏必须优先回答报告规模、闭环、积压和紧急风险；数据库实际年份来自 FSSJ，不得固定展示近五年；SZDW 空值必须作为数据质量单列，不能成为单位排名第一；流程覆盖率不足时闭环率必须带数据不完整告警；详见 `docs/reports/ju-shou-bao-gao-product-review.md`。
- Business rule update (2026-08-24): SFNM 为必填字段；匿名统计只展示“匿名/非匿名”，不展示数据库原值“是/否”，也不生成“未填写”类别；空值或未知值只进入数据质量告警。
- Business rule update (2026-08-24): 单位排行不使用饼图，改为分页排行榜；字段顺序为排名、申报单位、报告总数、已完成、流转中、拟稿中、待处理、闭环率、紧急未完成，明确移除“未启动”。
- Business rule update (2026-08-31): 首页四卡固定为年度报告总数量、已完成数量、处理中数量、闭环率；“处理中”仅统计状态“流转中”，不等同于全部未完成；闭环率仍为已完成/年度报告总数量。
- Interaction decision (2026-08-31): 工作进展情况和月度报告趋势各显示“总体、质量、安全、生产、技术、其他”标签栏；两组标签分别独立切换，只更新各自图表、摘要和选中状态，互不影响；总体使用全年全部数据，其余按 BGLX 精确值过滤，切换年份时两组均恢复总体。
- Visual decision (2026-08-31): 移除匿名报告占比图，但保留匿名字段异常数据质量指标；报告类型分布横跨两列占满整行。
- Business rule update (2026-08-31): 报告类型分布的悬浮提示固定展示五项：未受理（状态“拟稿中”）、处理中（状态“流转中”）、已完成（状态“已完成”）、报告数（该类型全部报告）、闭环率（已完成/报告数，固定保留两位小数）；其他流程状态只计入报告数，不并入前三项。
- Business rule correction (2026-08-31): “工作进展情况”图本身也必须固定展示上述五项业务指标，不再直接展示未启动、拟稿中、流转中等原始流程状态；切换总体或任一报告类型时均使用相同映射，摘要和单项悬浮提示同步使用业务名称及单位。
- Business rule update (2026-08-31): 月度趋势的每个月份数据同时返回未受理、处理中、已完成、其他状态、报告数和闭环率；悬浮提示固定展示五项业务指标，存在未启动或异常流程状态时额外显示“其他状态”，各状态之和必须等于当月报告数。
- Visual decision (2026-08-31): 报告类型分布改为横向堆叠柱，未受理使用金黄、处理中使用深蓝、已完成使用绿色、其他状态使用灰色；每根柱子的四色段之和严格等于该类型报告数，右侧继续显示该类型总数及其占全年报告数比例。
- Business rule update (2026-08-31): 单位排行榜增加“报告单位、受理单位”两个独立标签，默认报告单位，切换只使用同一次接口返回的数据。报告单位列固定为排名、报告单位、报告总数、质量、安全、生产、技术、其他；只统计 SZDW 非空记录，各类型按 BGLX 精确值计数，“其他”不吸收空值或未知类型。
- Business rule update (2026-08-31): 受理单位列固定为排名、受理部门、受理总数、已完成、处理中、未受理、闭环率；状态分别对应主流程已完成、流转中、拟稿中，闭环率为已完成/受理总数并保留两位小数。DYN_JSBG_YWCL 每一行均计数且不去重，按修剪后的 ZRDWMC 名称归并，不使用子表 STATUS。
- Intranet data decision (2026-08-31): 正式模式仅在报告完全没有 DYN_JSBG_YWCL 子表行时，取 BPM_CLIENT_HIST_TASK_V 中最新 TASK_NAME_='task21' 记录，使用 ASSIGNEE_DEPT_ 关联 SYS_DEPT_V.DEPT_NAME；有子表脏行不回退。真实表或 BPM 查询失败必须明确报错，不得回落到本地测试数据。
- User delivery instruction (2026-08-31): 打包到内网时必须切换为正式模式。打包门禁必须确认内网 Tomcat JVM 参数包含 `-Dpb.jbg.tempStatusMode=false`，部署后完整重启 Tomcat，并通过接口返回的 `statusTemporary=false` 和 `statusBasis=BPM_CLIENT_HIST_PROCINST_V.BUSINESSSTATE_` 验证切换生效；未完成该检查不得交付。
- Display decision (2026-08-31): 所有五项状态展示统一按“报告数、已完成、闭环率、处理中、未受理”排序，适用于顶部指标、工作进展图及摘要、月度悬浮提示和受理单位表；报告单位的业务类型列不属于状态排序。
- Visual decision (2026-08-31): 完整移除“报告类型分布”图及前端 ECharts 初始化/渲染，保留接口 `typeBreakdowns` 供工作进展和月度趋势的类型标签使用；页面主标题改为“全业务域举手报告概览”。
- Visual decisions (2026-08-24): ECharts 4.1.2 使用统一业务色板：深蓝 `#3F5AA9`、绿 `#68A844`、金黄 `#D3A43A`、砖红 `#B3434F`、青蓝 `#4B9BB5`；页头的本地模拟状态使用低干扰状态提示，不使用大块橙色边框。
- Layout decisions (2026-08-24): 首屏突出总量、闭环率、待处理、紧急未完成；状态和月度趋势为主图；单位排行榜全宽放底部，单位列固定约 240px，数字列固定宽度，表格默认每页 10 条并可切换 20/50。
- Delivery priority: P0 数据可信（实际年份、流程覆盖率、对账结果、空值治理）先于 P1 视觉和趋势，P2 再做下钻和导出。

## Verification

- Local URL/menu path: /pb/platform/avicit/pb/jushoubaogao/juShouBaoGaoController/toStatistics（标准菜单跳转）；直接 JSP 地址 /pb/avicit/pb/jushoubaogao/JuShouBaoGaoStatistics.jsp
- Test data: `db/ju_shou_bao_gao_test_data.sql` 为现有 DYN_JSBG 表提供可重复的 2026 年 72 条 `JSBG_TEST_` fixture，月度数量为 5,6,5,7,5,8,5,5,9,7,5,5 以验证趋势；只删除该前缀，不碰正式记录。正常年度数据 SFNM 仅使用 是/否，分别显示为 匿名/非匿名；异常空值由独立 fixture 验证并只计入 anonymousInvalidCount。
- Local simulation: 显式设置 `-Dpb.jbg.tempStatusMode=true` 后直接使用 `JBG_TEST_STATUS`，统计接口不触发 BPM 视图查询；未设置参数或设置为 `false` 时使用正式内网数据源。
- Checks performed: Java 编译；Node JS 语法检查；前端冲突检查读取模块文件且 0 warnings；Tomcat 和 Redis 重启；PB/Redis/DM/Tomcat 健康检查；2026 fixture 数据库对账为总量 72、已完成 21、流转中 30、闭环率 29.17%；编译后 Controller 反射聚合验证 `processingCount`、5 个 `typeBreakdowns` 和空分类 12 个月零值；浏览器使用真实模块 JS/CSS/ECharts 验证两组分类标签独立切换、切换年份均恢复总体、匿名图移除、报告类型全宽，以及 1366x900、375x812 布局无页面横向溢出。
- Verification note (2026-08-31): Redis 重启后既有浏览器登录态失效，正式受保护统计接口会 302 到登录页；未猜测或修改账号，接口聚合改由编译后 Controller 直接测试，页面改由真实静态资源加同结构数据验收。用户重新登录后仍需做一次受保护接口冒烟检查。
- Verification note (2026-08-31): 使用真实模块 JS、jQuery 1.8.3 和 ECharts 4.1.2 对质量、安全、生产、技术、其他五个类型逐一触发悬浮提示，确认五项顺序、状态映射、报告总数及闭环率两位小数均正确，包含 `0.00%`、`33.33%`、`50.00%`、`100.00%` 场景。
- Verification note (2026-08-31): 工作进展图使用 2026 年 72 条口径验证为未受理 16、处理中 30、已完成 21、报告数 72、闭环率 29.17%；切换质量类验证为 2、8、5、15、33.33%，月度图保持总体未联动；真实 ECharts 选项、摘要、闭环率 tooltip 和 1366px 截图均确认原始状态名称已从工作进展图移除且无文字重叠。
- Verification note (2026-08-31): JDK 8 编译 Controller 后通过反射聚合验证月度 `1+1+1+1=4`、闭环率 25.00% 和类型 12 个月完整性；浏览器验证 3 月 tooltip 为未受理 1、处理中 2、已完成 1、报告数 4、闭环率 25.00%，安全类型堆叠为 `1+1+2+1=5`，四色、图例、总数标签正确；1366px 与 375px 截图无横向溢出或图例遮挡。
- Verification note (2026-08-31): 单位排行榜分类改造通过 Controller + DM8 反射验证：年度报告 72、有效报告单位 4；质量部报告总数 15 且质量列 15；本地受理源为子表模拟记录 72、最新 task21 回退 1、未解析 1，最终受理记录 73；同报告同单位重复行保留，旧 task21 单位被排除。
- Verification note (2026-08-31): JBG_TEST_ACCEPT_UNIT 建表审计字段 8/8 通过检查；fixture 重复执行后数据库恢复为已完成 21、流转中 30、拟稿中 16、未启动 5。执行 UTF-8 fixture 时 disql 会话必须先设置 `CHAR_CODE UTF8` 和 `LOCAL_CODE UTF8`。
- Verification note (2026-08-31): 真实 jQuery 1.8.3、ECharts 4.1.2、模块 JS/CSS 浏览器验收确认报告单位 8 列与受理单位 7 列独立切换、闭环率固定两位小数；1366px 页面宽度与滚动宽度均为 1351，375px 视口下均为 360，表格仅在自身 275px 容器内横向滚动，标题、标签和分页不重叠。前端冲突扫描 3 文件、0 warnings。
- Known gaps: 本地 DM8 没有真实 BPM 业务关联，临时模式只能验证演示聚合；开始打包到内网时才允许移除/改写 `pb.jbg.tempStatusMode` JVM 参数、切回 BPM 关联并做一次真实流程状态核对。单位排行榜需继续用 20+ 单位和 10 字单位名做分页截图验收。

## Intranet Handoff

- Package path: 待用户要求打包时确定。
- Files to copy: JSP、jushoubaogao.js、jushoubaogao.css、JuShouBaoGaoController.java、模块记忆文件；按当前 PB 内网发布规范不打包 `.class`，由内网测试环境使用 JDK 8 编译源码。
- SQL/platform config to migrate: 不迁移本地测试表 SQL；手工新增菜单并配置访问权限，部署前只读核验 DYN_JSBG_YWCL、task21 和 SYS_DEPT_V 关联。
- Files/config not to copy: db/ju_shou_bao_gao_test_data.sql、JBG_TEST_ACCEPT_UNIT、本地 Tomcat/Redis/DM 配置和测试缓存。
- Mandatory delivery rule: 内网包中的源码必须默认使用真实 BPM 流程状态，且不得包含启用测试模式的环境配置；打包清单记录不得设置 `-Dpb.jbg.tempStatusMode=true`，建议显式设置 `false`，重启后核验 `statusTemporary=false`，否则阻止上线。本地测试必须显式启用测试模式。

## 2026-09-01 Intranet Packaging Mode Gate

- 发布源码的 `pb.jbg.tempStatusMode` 默认值已从 `true` 改为 `false`，防止内网漏配 JVM 参数时访问仅本地存在的 `JBG_TEST_STATUS` 和 `JBG_TEST_ACCEPT_UNIT`。
- 正式查询只允许使用 `BPM_CLIENT_HIST_PROCINST_V`、`BPM_CLIENT_HIST_TASK_V`、`DYN_JSBG_YWCL` 和 `SYS_DEPT_V`。流程视图或真实子表查询失败时接口明确返回错误，不再降级到旧 `BPM_HIST_*` 表，更不会降级到本地测试表。
- 本地回归如需测试数据，必须在本地 Tomcat 启动参数中显式添加 `-Dpb.jbg.tempStatusMode=true`；该本地参数和测试 SQL 不得进入内网包。
- Schema correction (2026-09-01): 紧急类型使用真实字段 `DYN_JSBG.JJ_LX`。正式查询和聚合统一读取 `JJ_LX`；`JBG_TEST_STATUS` 不属于内网 DYN_JSBG 表，仅保留在显式本地测试分支，默认正式模式不会解析或查询该列。
- Workflow design update (2026-08-25): 采用责任单位子表驱动的 foreach/join 结构；1 个主责单位、多个次责单位并行办理，全部完成后统一质量审核，审核退回只回到指定单位；质量分发和业务部门分发共用同一责任清单规则。
- Intranet sync date: pending。
- Baseline update status: pending。

## Next Time

- Read first: 本文件及 JuShouBaoGaoController.java。
- Likely change points: 统计维度、年份筛选、页面图表配置和单位排行榜分页；单位明细通过 unitDetails 返回全部有效单位，前端默认每页 10 条。
- Do not touch without confirmation: DYN_JSBG 表结构、既有低代码表单和流程状态含义。
