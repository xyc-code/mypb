# Module Memory: 统一月度考核结果收集

## Identity

- Module name: 统一月度考核结果收集
- Memory file: `references/modules/monthly-assessment.md`
- Status: local-verified
- Last updated: 2026-10-12
- 用户在实施计划中明确同意建立独立模块记忆；详细说明见 `docs/monthly-assessment.md`。

## Business

- 汇集党、工会、团委各模块自然月成绩，按部门、年、月向平衡积分卡提供查询；后续通过 Provider 增量接入。
- 首期正式 Provider 仅 `TWSHYK`，板块 `LEAGUE`，规则版本 `1`，只收集支部委员会当月考核：至少一次、缺会扣 0.2，保存为 `ADJUSTMENT=-0.2`，达标保存 0 和空原因数组。
- 不收集季度、年度考核，不计算部门总分，不修改原实时页面年度口径。
- 只生成上海时间已结束月份。后台全量包含无会议的非根组织，不依赖页面年份或分页，不新增成立时间、有效标志免考条件。
- 联合团支部支持多个部门，用户确认每个部门均扣完整分值、不分摊。每个组织/月/模块仍只计算保存一条成绩，部门归属另存关联快照。
- 缺少部门照常保存；历史首次非空部门整组（ID＋名称）保留，原整组为空可补齐，之后组织关联增减不改写旧月份。已删除组织保留旧结果并记录日志。
- 每月只生成上月；补录、漏跑、规则更正通过指定月重算，不自动回填全部历史。

## PB Low-Code Surface

- 新增独立只读“月度考核结果”页面，样式参考团委“三会一课”；入口 `platform/avicit/pb/assessment/toManage`，按年份、月份、板块、模块、部门筛选并分页查看成绩及原因详情，默认服务器上海时区上个月。
- 联合团支部在列表换行显示多个部门，详情显示完整部门组和成绩不分摊说明；选择任一关联部门均可查到该成绩，入口不变。
- 不新增低代码表单、审批、菜单、角色或部门权限规则；查询沿用平台登录和当前会话组织域。成绩重算仍在原 Quartz 页面操作。
- 复用 Quartz 管理页 `console/quartz/toSysJobManage`。
- 月度 SpringBean 程序 `monthlyAssessmentJob#collectPreviousMonth`，cron `0 0 2 1 * ?`；补算 `monthlyAssessmentJob#rebuildMonth`，始终保持暂停并手工“立即执行”。
- 补算 Map 参数 `moduleCode/year/month` 必填，`orgIdentity` 可选，省略则全部来源组织域。
- 月度方法兼容无参和空 Map。平台 SpringJobExecutorImpl 按 `getJobVariables()!=null` 选择 Map 签名，即使 Map 为空。

## Data

- 新表 `PB_ASSESS_MONTH_RESULT`，21 列，前 8 列严格遵循 `pb-table-audit-fields` 类型、顺序和英文注释。
- Required audit fields checked: yes，2026-10-08 运行 `check-table-audit-fields.ps1`，8 项均为 OK。
- DDL: 主成绩 `db/monthly_assessment_schema.sql`；部门快照 `db/monthly_assessment_department_schema.sql`。
- 主成绩唯一键：组织域＋模块＋被考核组织＋年＋月；部门不在唯一键。原查询索引保留，部门查询改用关联表 `EXISTS`，不重复结果行和分页计数。
- `PB_ASSESS_RESULT_DEPT` 共 11 列，前 8 列同一审计规范，另有 `RESULT_ID/DEPT_ID/DEPT_NAME`；唯一键为组织域＋结果＋部门，索引为组织域＋部门＋结果，结果外键 `ON DELETE CASCADE`。2026-10-09 审计字段 8/8 通过。此表为完整归属来源；主表单部门列仅兼容保留，多部门时不能拼多个 ID 写回该列。
- `REASON_DETAIL` 为 CLOB JSON 数组，元素 `itemCode/itemName/scoreChange/reason`；使用已有 Jackson/MyBatis，不要求数据库 JSON 功能。
- `RULE_VERSION` 独立规则版本，`VERSION` 保留平台用途，`LAST_UPDATE_DATE` 为最近成功生成日期；本地 DM `COMPATIBLE_MODE=0` 下的 `DATE` 不保存时分秒，不增加历史修订流水表。
- 团委组织部门来自 `LEAGUE_ORGANIZATION.ATTRIBUTE_02`（ID 列表）和 `ATTRIBUTE_01`（同序名称列表），标准英文分号分隔、兼容旧英文逗号；trim、空 ID 忽略、ID 去重，名称空槽不移位，缺名称不拒绝。会议为 `DYN_TWSHYK.HYRQ`，区间左闭右开。
- 平台已有 `SYS_JOB/SYS_JOB_VARIABLES/SYS_JOB_HISTORY` 继续由现有平台接口管理，不直接写入来绕过 Quartz。

## Files

- Backend: `src/avicit/pb/assessment/` 的 dto/provider/dao/service/job/controller；部署到 `WebRoot/WEB-INF/classes/avicit/pb/assessment/`。
- 复用并最小修改 `src/avicit/pb/twshyk/` 计算器、DTO 和 Mapper 查询支持自然月收集，原页面保持兼容。
- API: `GET platform/avicit/pb/assessment/results`，`year/month` 必填，`departmentId/categoryCode/moduleCode` 可选，`page` 默认 1，`pageSize` 默认 20、最大 100。
- Page: `WebRoot/avicit/pb/assessment/MonthlyAssessmentManage.jsp`，Controller `toManage` 提供 `defaultYear/defaultMonth`，按 `Asia/Shanghai` 计算上月。
- 页面静态资源：`WebRoot/static/pb-modern/assessment/monthly-assessment.js`、`monthly-assessment.css`，保持团委“三会一课”的布局和视觉风格，复用平台 jQuery/jqGrid/layer。
- 筛选项 API: `GET platform/avicit/pb/assessment/options`，返回当前登录域全部已保存月份的 `categories[{code,name}]/modules[{code,name,categoryCode}]/departments[{id,name}]`。部门来自关联表，模块编码和部门 ID 去重、采用最近生成名称，不依赖页面分页，新模块有已保存结果即自动出现。
- 返回 `flag/rows/total/page/pageSize`；包含分值、原因数组、规则版本、`calculatedAt` 及部门关联标识。只读已保存结果，无记录不作零分。`calculatedAt` 保持原 ISO 带时区格式，本地数据的零点来自 DATE 存储精度，页面按“生成日期”仅展示年月日。
- 每条结果新增 `departments[{id,name}]` 始终返回完整组，`departmentLinked` 看数组是否非空。指定部门筛选时，标量 `departmentId/departmentName` 返回匹配项；不筛选时仅单部门返回标量，多部门或未关联为 null。调用方按部门展开时每项都取完整分值，按“成绩标识＋部门 ID”区分，不分摊。
- Documentation: `docs/monthly-assessment.md`。
- Build/test: `scripts/monthly-assessment.ps1 -Action build/install/test`、`scripts/MonthlyAssessmentTest.java`；凭据仅从当前进程 `PB_TEST_DB_PASSWORD` 读取。
- `install` 分别跳过已存在的两表并自动执行 `scripts/MonthlyAssessmentDepartmentMigration.java`。迁移仅拆旧成绩主表的已保存部门快照，已有关系整组跳过、事务回滚、可重复执行；不读当前源组织，不改主成绩 ID/分值/原因/规则/生成日期。迁移 main 固定本地，内网另做受控同逻辑迁移。
- HTTP/Quartz acceptance: `scripts/monthly-assessment-runtime-check.js`，凭据来自 `PB_TEST_LOGIN/PB_TEST_LOGIN_PASSWORD`，Cookie 不落盘。不带参数只查接口；`--setup-jobs` 创建/复用并执行两任务，最后启用月度、暂停补算。
- Properties/config: 不新增外部配置依赖，不改 Quartz 全局时区。

## Pitfalls And Decisions

- 现有团委 `monthlyDeduction` 是年度各月累计值，`totalDeduction` 还含季度年度，不能直接落入单月成绩。
- 统一事务经独立 Spring Bean 的公开方法生效，指定 `transactionManagerMybatis`；同类自调用可能绕过代理。
- 每个组织域/模块/月整批事务：锁定旧行、计算、更新；首批并发由唯一键冲突整批回滚。分值、原因、规则版本和生成日期一起更新。
- 当前 `calculatedAt` 不能辨识同一天内多次补算更新。调用方应在补算成功后重拉对应范围并替换旧结果，不能用该字段是否改变判断是否更新；实际执行时刻查看平台任务历史。多部门改造保持生成日期现状。
- 某范围失败不阻塞其余范围，但任务最终必须抛出汇总失败，让平台历史显示失败；不能吞异常并显示成功。
- 重算用执行时规则，调整计算规则需增加模块规则版本；零分必须保存才能覆盖旧扣分。
- 首次部门缺失并不要求用户先维护部门；是否关联由接口 `departmentLinked` 表达。
- 格式最短证据：`WebRoot/avicit/platform6/h5component/common/deptselect.jsp` 的 `getDeptList()` 同序生成分号 ID/名称，初始化兼容逗号；`CommonSelect.js` 将二者直接回填团组织 `ATTRIBUTE_02/01`。团组织维护页 `selectModel:""` 实际进入 multi，别按过时的单选注释擅自改页面。
- Quartz `JobUtils` 未显式指定时区，cron 使用 JVM 默认时区；生成年月另行固定 `Asia/Shanghai`，启用前核验触发器实际时区和下一次执行时间。
- Quartz 管理接口返回 `ModelAndView`，脚本需 `Accept: application/json` 或平台支持的 `.json` 后缀，避免写入后视图协商返回 HTML/404；出现异常响应先查列表，不盲目重建。save 不返回 ID，列表 `rows[].id` 取 ID；更新 `variables` 全量替换并重新生成变量 ID。
- 用户长期偏好：不能自行增加角色授权、部门范围、审批、必填业务条件或额外配置依赖。

## Verification

- 2026-10-09：部门关联表本地安装，审计字段 8/8 通过，Java/Mapper 已编译部署；首次旧快照迁移插入 0 条（原 7 条页面可见成绩无部门）。以下 2026-10-08 验收记录为既有功能历史。
- 2026-10-08：新表本地已安装；核心 Java 编译及 Mapper 部署通过，重启后 HTTP/Quartz 运行验收完成。
- 新模块真实 DM＋MyBatis＋Spring 事务代理测试 198 项断言通过，日志 `logs/monthly-assessment-test.log`。覆盖日期边界、112 个非根组织全量与分页、无会议年份、补录清零、归属保留/补齐、组织域与模块隔离、失效组织保留、超过 32KB CLOB、真实事务回滚和并发冲突/加锁，以及第二个测试 Provider。
- 专用测试组织域结果最终清理为 0；旧团委 DM/MyBatis/业务回归 213 项断言通过，日志 `logs/twshyk-assessment-regression.log`。
- HTTP/平台 51 项断言通过，见 `logs/monthly-assessment-runtime-report.json`，含结果字段、原因、分页、部门筛选、空结果，以及缺失/非法/溢出/超上限参数 HTTP 400 JSON。
- 平台历史 `S/F/S/S` 实测：补算成功、未结束月份拒绝、恢复成功、月度成功。补算参数最终恢复 `TWSHYK/2026/9`，不限定来源组织域，状态 S。
- 当前登录域保留 2026-09 的 7 条既有团委夹具组织成绩，由平台任务实际产生；专用集成测试域已清理，不混淆两者。
- 月度任务 ID `40288085a11a8f1f01a11a9745d80cdd` 状态 R；补算 ID `40288085a11a8f1f01a11a99138c0ce0` 状态 S。只读核对两个程序各仅 1 条，无重复。
- Tomcat JVM `user.timezone=Asia/Shanghai`，实际 `QRTZ_TRIGGERS/QRTZ_CRON_TRIGGERS` 月度触发器 WAITING、Asia/Shanghai、下一次 2026-11-01 02:00:00+08:00；补算暂停无定时触发器。核查日志 `logs/monthly-assessment-quartz-inspection.log`。
- Quartz 已静态核验：管理 `console/quartz/toSysJobManage`；保存 `console/quartz/operation/save`；启动/暂停/立即执行 `platform/jobSchedulerController/executeStartJob|executeStopJob|executeRunRightNow`；历史 `sysJobHistoryController/operation/getSysJobHistorysByPage`。
- 历史字段 `END_STATUS_='S'` 成功、`'F'` 失败，任务 `STATUS_='S'` 则表示已暂停，勿混淆。
- 本地正常登录使用已有具访问权限账号；不记录凭据，不为验收修改账号权限。
- 2026-10-08 追加结果查询页：编译 Java/Mapper 并重启 Tomcat/Redis后，只读实库 options/default-month 核对 21 项通过（2 个有结果域＋1 个空域），日志 `logs/monthly-assessment-options-check.log`；正常登录后的页面路由、JSP 默认值、options 与原 results/400/空结果共 13 项 HTTP 检查通过，报告 `logs/monthly-assessment-page-http-report.json`。原 7 条本地成绩均未关联部门，当前部门选项只有全部部门符合数据现状，未为页面测试改动源组织或成绩。
- 时间精度只读核查：Mapper 入参/结果均为 `jdbcType=TIMESTAMP`；数据库 `TO_CHAR(LAST_UPDATE_DATE, 'YYYY-MM-DD HH24:MI:SS')` 与 `CAST(CURRENT_TIMESTAMP AS DATE)` 均为零点，原因是本地 DM 的 DATE 类型，非前端或 MyBatis 截断。日志 `logs/monthly-assessment-time-inspection.log`；页面改为生成日期显示，未改表、重启或重算。

## Intranet Handoff

- 2026-10-09 多部门最终验收：真实 DM/MyBatis/Spring **284** 项、旧团委回归 **213** 项、真实 HTTP **21** 项通过，日志分别 `logs/monthly-assessment-joint-department-test.log`、`logs/twshyk-assessment-joint-department-regression.log`、`logs/monthly-assessment-joint-http-report.json`。已编译/部署并重启 Tomcat 和 Redis。
- 浏览器验证两部门分别查到同一条完整 -0.2、总列表一条联合组织、完整部门列表和原因详情、无控制台错误；前端冲突检查 0 警告。截图 `output/monthly-assessment/joint-department-detail.jpg` 为临时验收数据，随后主结果和关联全部清理，DB/HTTP确认原7条结果保留且临时部门选项移除（`logs/monthly-assessment-joint-cleanup-report.json`）；未改原组织、任务、角色及原有成绩。

- 结果页浏览器验收：默认上海上月、板块/模块筛选、5＋2 分页、扣分原因、零分空原因、空月份及重置均正常。1440px/390px 布局检查通过，窄屏文档宽度等于视口、表格独立横向滚动；控制台 0 错误、JS 语法通过、前端冲突扫描 0 警告。预览 `output/monthly-assessment/results-page.jpg`。页面仅复用平台 jQuery/jqGrid/layer，样式命名空间 `.pb-monthly-assessment-page`，独立资源在 `WebRoot/static/pb-modern/assessment/`。

- 本期未发布内网；本地验证不代表平衡积分卡实际调用已联调。
- 内网按部署现状需要主成绩表和部门关联表 DDL；已有旧成绩需按已保存部门快照受控迁移，再部署统一模块源码与 Mapper、团委共用计算改动、查询页 JSP 与 `static/pb-modern/assessment/` 资源、编译/重启及两条现有 Quartz 任务配置。本次未在内网执行上述操作。
- 不复制本地凭据、夹具、测试清理数据，不自动回填全部历史，不改现有业务表的生产定义。
- 未建立内网部署基线；后续用户要求打包时再使用 `pb-intranet-packager`。

## Next Time

- 2026-10-20 增加平衡积分卡只读聚合接口 `GET /api/avicit/pb/member/partyMember/rest/monthAssessment/{year}/{month}`。固定查询 `ORG_ROOT` 已保存结果，按部门 ID 汇总所有模块和被考核组织分值；多部门每个部门取完整分值，`reason` 为全部原因文本按换行拼接，`totalScore` 为分值合计。无部门关联的结果保留为 `deptName: null`，无数据返回空数组。实现文件为 `MonthlyAssessmentBscService`、`MonthlyAssessmentRest` 及 DAO/Mapper 的全量查询；待本地 Tomcat 重启后做 HTTP 联调。

- 2026-10-12 新增党委三会一课 Provider `DWSHYK`（`PARTY`，规则版本 `1`），用户已确认接入。全部到期月、季、年项目按周期结束自然月收集：月项归当月、季项归季度末月、年项归考核年9月；去年10月至当年9月的12个月扣分合计等于年度总扣分，`ADJUSTMENT`以扣分负值保存，零分照常输出。补录计记录总数但保留按时缺次扣分，重算不因补录清零。
- 党委接入同库读取 `DYN_THREE_FOUR`、`PARTY_ORGANIZATION`，部门取 `ATTRIBUTE_02/ATTRIBUTE_03`，复用现有结果表、部门快照、Writer事务和月度/补算任务，不新建表或任务。源码 `src/avicit/pb/dwshyk/` 与 `DwshykMonthlyAssessmentProvider.java`；构建脚本已加入该模块。业务详情见 `dwshyk-assessment.md`。
- 2026-10-12 本地党委考核实库测试 **1614** 项、团委回归 **222** 项、统一月度回归 **292** 项通过；本条仅记录已完成的后端验证，页面与内网交付状态见对应模块记录。
- 2026-10-09 新增主题党日 Provider `ZTDR`（`PARTY`），用户明确确认接入。按主表 NF 与 DATA_4 计划自然月归属，创建当月及以前免考；缺计划 0.2，其余缺项逐条每项 0.1，无上限，补齐可恢复。来源只读、目标月覆盖保存、零分清旧原因，复用现有部门快照和任务。详见 `ztdr-assessment.md`。
- 2026-10-09 新增铸心共建 Provider `ZXGJ`（`PARTY`），用户明确确认接入。明细按共建项目，统一月度按申请人党组织合并；里程碑归SJJD次月，总结归BDBH年度11月，仅所属月扣一次。有主表且仍存在的党组织无当月扣分保存0。主子表扣分标记与成绩同事务。详见 `zxgj-assessment.md`。
- 2026-10-09 新增一支部一特色 Provider `YZBYTS`（`PARTY`），用户已明确确认接入；详细规则及验收见 `yzbyts-assessment.md`。仅归属月扣一次，缺项归年度开始月，里程碑归 `max(开始日,计划完成时间+24小时)` 所在月。每项原因编码含业务年度和源ID/缺项序号，不把年度累计重复写入各月。
- 一特色真实里程碑 `KHSFKF=是` 永久保留，缺项补齐可恢复；按运行时现状认定。标记写入加入既有 Writer 事务，失败同时回滚。部门读取党组织 `ATTRIBUTE_02/ATTRIBUTE_03`。不增加结果表列、生产表、任务或公共 Provider 接口，构建脚本增加新模块源码/Mapper扫描。

- 用户长期偏好（2026-10-09）：开发新的考核模块时，先问是否需要接入统一月度考核收集，不能默认接入；用户已明确要求或确认过该模块接入时，不重复询问。
- 先读 `docs/monthly-assessment.md`、本记忆和团委 `twshyk-assessment.md`。
- 用户确认接入后，新模块实现 `MonthlyAssessmentProvider`，复用其已有业务公式和组织范围，补充月度结果及原因测试；不要为新模块给结果表增加专属列。
- 新业务规则和内网登录接入另行按用户明确需求处理，不把通用最佳实践当新增业务限制。

## 2026-10-09 内网部署前联合检查

- 完整记录：`docs/assessment-deployment-check-20261009.md`；依赖核对清单59项，`db/assessment_intranet_preflight.sql`只有SELECT，本地30条通过。没有正式打包或更新内网基线。
- 修复Mapper可空assessmentOrgName的Oracle JDBC类型（insert/update显式VARCHAR），增加8项实际MyBatis参数绑定检查。四Provider共同干净编译31源码通过；5个Mapper源码/运行目录一致。
- 本轮真实DM/Spring回归：月度292、团委222、一特色150、共建141、主题党日494，共1299；四业务HTTP757通过。Tomcat/Redis重启后实际月度任务2026-10-09 16:05:48成功，当前域仍55条，月度R/补算S不变。
- 月度HTTP脚本修正为多模块检查；真实中文部门GET筛选仍失败（28/2条应匹配均返回0，浏览器亦复现），不能宣称该脚本全通过。当前Tomcat7 8080 Connector未配置URIEncoding，但根因尚待配置验证；未擅自改容器全局配置或用猜测解码绕过请求过滤器。
- 本地党组织部门字段含中文测试值，不能替代内网真实部门ID映射验证。内网数据库/JDK/字段/部署基线待确认，首次表安装与旧快照迁移按真实部署现状选择。

## 2026-10-09 中文GET筛选修复完成

- 用户在部署检查后明确回复“可以”，授权本地Tomcat 8080 Connector补URIEncoding=UTF-8、备份并重启验证。仅增加这一个属性；备份D:/Tomcat/apache-tomcat-7.0.109/conf/server.xml.assessment-uri-20261009-161446.bak，变更SHA记录logs/assessment-predeploy-20261009/tomcat-uri-encoding-change.json。
- 已重启Tomcat/Redis。此前中文部门GET返回0已恢复为28/2，ID/分值/原因/整组部门快照完全匹配；真实浏览器两个筛选均通过、无console error，重置仍55条。
- 当前月度HTTP360项、四业务HTTP757项全部通过，前文“中文GET未通过/请求编码根因待验证”现已关闭。前后报告分别保留于logs/assessment-predeploy-20261009，部署检查报告已更新。
- 未修改Java、Mapper、权限或业务数据来绕过问题。内网核对实际入口UTF-8参数解码，已有配置不用再改，禁止直接覆盖内网server.xml。内网真实数据库/JDK/表结构和部门ID映射仍须部署时预检，不宣称已在内网发布或联调。

## 2026-10-12 全模块重新收集

- 用户要求重新收集所有考核模块，按既有上月规则执行2026年9月，包含新接入的DWSHYK，共5个正式Provider。
- 平台月度任务于2026-10-12 16:06:57—16:06:58成功，历史ID `2c948a85a12eff8601a12f268ecb0ce9`、endStatus=S；任务配置保持月度R、补算S。
- 当前登录域ORG_ROOT由55条变为68条：党委三会一课13、团委三会一课7、一支部一特色21、主题党日21、铸心共建6。党委模块已实际保存，可在统一页面模块筛选中查询。25条仍无部门，按既有规则正常保存。
- 日志确认6个组织域/模块范围全部成功，另原有TWSHYK_TEST_OTHER域1条，全域本次共69条。未回填其他历史月份。
- 执行及前后结果：`logs/monthly-assessment-collection-20261012.json`；范围日志：`logs/monthly-assessment-collection-20261012-scopes.log`。

## 2026-10-21 平衡记分卡接口增量交付

- 用户确认内网已部署2026-10-15“统一月度考核及考核模块”包，manifest源码基线fed02e7。本次只交付昨天新增的平衡记分卡只读聚合接口增量，不重新带整套月度模块、旧建表DDL或历史迁移SQL。
- 交付5文件：MonthlyAssessmentRest.java、MonthlyAssessmentBscService.java、MonthlyAssessmentDAO.java、src与WebRoot/WEB-INF/classes两份MonthlyAssessmentMapper.xml。新增findAllForBsc(orgIdentity,year,month)调用链声明及映射齐全；DTO及MonthlyAssessmentService与部署基线无变更，作为已有依赖不重复交付。
- 2026-10-21真实GET /pb/api/avicit/pb/member/partyMember/rest/monthAssessment/2026/9返回200 JSON数组；9998/12为空数组；13月/0月/0年/非数字年/溢出年均400 failure JSON；POST返回405，共8项HTTP检查通过。五项部门聚合检查通过，含多部门完整分值及无部门保留。
- 六个待交付Java源码（含总结模块）独立编译成功，生成class与当前Tomcat对应class哈希一致；源码与运行Mapper哈希一致。未改接口业务规则，不新增数据表、定时任务、权限或配置依赖。
- 固定读取ORG_ROOT保存结果，GET接口不触发收集/重算；调用方须在原有月度收集/补算后重新拉取。不宣称平衡记分卡客户端已在内网联调。本次未更新新包部署基线。