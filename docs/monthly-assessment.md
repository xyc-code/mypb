# 统一月度考核结果收集

## 用途和首期范围

各考核模块计算指定自然月的成绩及原因，统一收集到 `PB_ASSESS_MONTH_RESULT`，平衡积分卡以后通过查询接口按部门、年月拉取。新增模块实现一个 Provider 即可接入，结果表和调度主流程不为模块增加专属字段。

首期接入团委“三会一课”的支部委员会月度考核：当月至少召开一次，缺会记 `-0.2`，达标记 `0`；不收集季度、年度考核，不计算部门综合分。只生成上海时间已经结束的月份。原有实时考核页面继续按其年度规则查询，补录后实时页面立即反映变化，统一结果表在对应月份重算成功后更新。

无会议的非根团组织也参与；不按成立日期、有效标志新增免考条件。后台收集不依赖页面分页或年份下拉框。缺少部门关联照常保存，不因此阻止收集。

联合团支部可以关联多个部门。组织当月成绩及原因只计算、保存一份，每个关联部门均取该份完整成绩，不分摊；例如联合团支部扣 `-0.2`，部门 A 和部门 B 分别查询时都得到 `-0.2`。

## 结果表

建表和索引见 `db/monthly_assessment_schema.sql`。表为 DM/Oracle 兼容定义，共 21 个字段。前 8 列严格按 PB 规范：

| 顺序 | 字段 | 类型 |
| --- | --- | --- |
| 1 | `ID` | `VARCHAR2(50)` |
| 2 | `CREATED_BY` | `VARCHAR2(50)` |
| 3 | `CREATION_DATE` | `DATE` |
| 4 | `LAST_UPDATED_BY` | `VARCHAR2(50)` |
| 5 | `LAST_UPDATE_DATE` | `DATE` |
| 6 | `LAST_UPDATE_IP` | `VARCHAR2(50)` |
| 7 | `VERSION` | `NUMBER(16)` |
| 8 | `ORG_IDENTITY` | `VARCHAR2(32)` |

业务列：

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| `CATEGORY_CODE` | `VARCHAR2(20)` | 板块，团委为 `LEAGUE` |
| `MODULE_CODE` | `VARCHAR2(100)` | 稳定模块编码，首期为 `TWSHYK` |
| `MODULE_NAME` | `VARCHAR2(200)` | 模块名称 |
| `RULE_VERSION` | `VARCHAR2(50)` | 计算规则版本，首期为 `1` |
| `ASSESS_ORG_ID` | `VARCHAR2(50)` | 被考核组织 ID |
| `ASSESS_ORG_NAME` | `VARCHAR2(200)` | 被考核组织名称 |
| `DEPT_ID` | `VARCHAR2(50)` | 兼容旧结构的单部门 ID，多部门或未关联时为空 |
| `DEPT_NAME` | `VARCHAR2(200)` | 兼容旧结构的单部门名称，可空 |
| `ASSESS_YEAR` | `NUMBER(4)` | 成绩所属自然年 |
| `ASSESS_MONTH` | `NUMBER(2)` | 成绩所属自然月 |
| `RESULT_KIND` | `VARCHAR2(20)` | `ADJUSTMENT` 净加扣分，或 `SCORE` 最终得分 |
| `RESULT_SCORE` | `NUMBER(12,4)` | 模块算好的成绩，使用 `BigDecimal` |
| `REASON_DETAIL` | `CLOB` | 加扣分原因 JSON 数组 |

一行对应“组织域＋模块＋被考核组织＋年＋月”，该组合有唯一约束；部门不参与唯一键。原“组织域＋年＋月＋部门”索引保留，部门精确筛选改用下述关联表。同部门多个组织分别保存，同一组织不同模块分别保存。

部门归属快照统一存到 `PB_ASSESS_RESULT_DEPT`，DDL 见 `db/monthly_assessment_department_schema.sql`。该表也包含上述前 8 个审计字段，另有 `RESULT_ID VARCHAR2(50)`、`DEPT_ID VARCHAR2(50)`、`DEPT_NAME VARCHAR2(200)`，共 11 列。一个成绩可关联多行部门；唯一键为“组织域＋结果 ID＋部门 ID”，查询索引为“组织域＋部门 ID＋结果 ID”。`RESULT_ID` 外键关联主成绩，删除主成绩时级联删除关联。名称允许为空，不因名称缺失丢弃已关联部门。

关联表是完整归属的读取来源，不能继续只读主表 `DEPT_ID` 来判断联合团支部归属，也不能把多个 ID 重新拼到主表单部门列。查询通过 `EXISTS` 筛选关联部门，分页和 `total` 始终按成绩条数计，不因关联多个部门重复成绩行。

`LAST_UPDATE_DATE` 记录该行最近一次成功生成日期；本地 DM 使用 `COMPATIBLE_MODE=0`，`DATE` 类型保存时不保留时分秒。`RULE_VERSION` 表示计算规则版本，`VERSION` 保留为平台数据版本。首期只保存各月最新成功结果，没有历史修订流水。

原因结构统一为：

```json
[
  {
    "itemCode": "BRANCH_COMMITTEE",
    "itemName": "支部委员会",
    "scoreChange": -0.2,
    "reason": "2026年9月支部委员会应至少开展1次，实际0次，扣0.2分"
  }
]
```

每条原因的 `scoreChange` 为正表示加分、负表示扣分；没有加扣分保存 `[]`，仍保存零分结果行。最终分直接使用模块计算结果，查询接口不重新累加原因，允许后续模块沿用其已有封顶等计算规则。JSON 由 Jackson 序列化并通过 MyBatis CLOB 映射保存，不依赖数据库 JSON 扩展。

## 计算、事务和历史更正

团委 Provider 从 `LEAGUE_ORGANIZATION` 读取所有非根组织，部门 ID 列表为 `ATTRIBUTE_02`，同序名称列表为 `ATTRIBUTE_01`。平台部门选择器标准输出英文分号 `;` 分隔，读取兼容旧英文逗号 `,` 格式；去除首尾空格、忽略空 ID、按 ID 去重，名称空槽保留位置，不把后一个名称前移。缺名称仍保留部门 ID。格式依据为 `WebRoot/avicit/platform6/h5component/common/deptselect.jsp` 的 `getDeptList()` 和初始化拆分逻辑，团组织维护页无需改造。

会议使用 `DYN_TWSHYK.HYRQ`，范围为月初包含、下月月初不包含。只取支部委员会考核，不把既有页面的年度累计扣分直接入库。

统一收集服务将每个“组织域＋模块＋月份”交给独立 Spring Bean 的公开事务方法处理，使用 `transactionManagerMybatis`，异常整批回滚。锁定已有结果后计算和更新，保留旧行 ID。首批并发插入由唯一约束防止重复；发生冲突时该批回滚，随后可重算。任务可继续其他范围，最后汇总失败并向平台抛出异常。

历史重算遵循以下约定：

- 成绩、原因、规则版本和生成日期一起更新，扣分转为零时清掉旧原因。
- 首次已保存的非空部门归属整组保留，包括组内 ID 和名称；之后组织增减或更换关联部门不会改写旧月份归属。首次整组为空时允许用当前关联整组补齐。
- 已删除、无法重新计算的组织保留旧结果，并在任务日志说明；其生成日期保持原值。
- 重算按执行时的模块规则计算，并保存当次 `RULE_VERSION`。修改业务规则时应更新该模块版本，明确哪些历史月份需要重算。
- 某范围失败保留原成功结果，查询接口不会把失败计算或缺失结果当作零分。

缺部门、失效历史组织和失败范围写入应用日志。平台“显示历史”用于确认整次任务成功或失败；某些范围成功、另一些失败时，任务历史仍为失败，按日志定位需要重算的范围。

## 现有 Quartz 任务配置

使用已有 PB Quartz 管理页，入口为 `console/quartz/toSysJobManage`；本地完整地址为 `http://127.0.0.1:8080/pb/console/quartz/toSysJobManage`。通过正常 PB 登录进入，沿用已有平台权限；月度结果查询使用下述独立只读页面，补算仍在现有 Quartz 页面操作。

| 配置 | 月度收集任务 | 指定月补算任务 |
| --- | --- | --- |
| 建议任务名称 | 统一月度考核结果收集 | 统一月度考核指定月补算 |
| 任务类型 | SpringBean | SpringBean |
| 执行程序 | `monthlyAssessmentJob#collectPreviousMonth` | `monthlyAssessmentJob#rebuildMonth` |
| 表达式 | `0 0 2 1 * ?` | `0 0 2 1 * ?`，保持暂停，仅手工执行 |
| 最终状态 | 启动 | 已暂停 |
| 参数 | 不设置 | 见下表 |

任务分组使用平台现有业务分组，不增加字典。月度方法同时支持无参、空 Map 的平台反射调用。补算任务保存以下参数，修改目标年月后用“立即执行”，不要启动它的周期调度：

| 参数 | 平台数据类型 | 示例 | 要求 |
| --- | --- | --- | --- |
| `moduleCode` | 字符串 `String` | `TWSHYK` | 必填 |
| `year` | 整型 `Integer` | `2026` | 必填 |
| `month` | 整型 `Integer` | `9` | 必填 |
| `orgIdentity` | 字符串 `String` | 当前来源组织域 ID | 可选，不填则处理模块全部来源组织域 |

月份计算和已结束判断固定使用 `Asia/Shanghai`。当前平台 `JobUtils.jobDomain2Trigger` 使用 `CronScheduleBuilder.cronSchedule(String)`，没有单任务时区选项，Quartz 触发器继承 JVM 默认时区；启用前核验实际 `TIME_ZONE_ID`/JVM 时区及下一次触发时间是否对应上海每月 1 日 02:00，不擅自修改平台全局时区配置。

首次上线不自动回填全部历史。每月任务只处理上个月；漏跑、补录或规则调整后通过补算任务逐月生成。补算成功后通知调用方重新拉取对应部门、年月并替换旧结果；包括由负分更正为零的结果。

平台排查入口（供维护定位，使用现有登录会话）：

平台管理接口返回 `ModelAndView`，脚本调用应发送 `Accept: application/json`（现有页面的 jQuery `dataType: 'json'` 会发送该请求头）。部署配置也支持 `.json` 后缀内容协商。缺少 JSON 请求头时可能在完成写入后转向不存在的 HTML 视图，不能仅凭 HTML/404 响应判断保存未发生，应先重新查询任务列表。

| 用途 | 地址及参数 |
| --- | --- |
| 任务列表 | `POST console/quartz/operation/getSysJobsByPage.json`，`page/rows` |
| 保存任务 | `POST console/quartz/operation/save`，表单字段 `job`、`variables` 为 JSON 文本，`jobCalendarIds` 为空 |
| 启动/暂停 | `POST platform/jobSchedulerController/executeStartJob` / `executeStopJob`，`id` |
| 立即执行 | `POST platform/jobSchedulerController/executeRunRightNow`，`id` |
| 显示历史页 | `sysJobHistoryController/toSysJobHistoryManage?jobId=...` |
| 历史列表 | `POST sysJobHistoryController/operation/getSysJobHistorysByPage`，`jobId/page/rows/sidx=startDate/sord=DESC` |

相关平台表为 `SYS_JOB`（`ID_/NAME_/TYPE_/PROGRAM_/CRON_/STATUS_/LAST_STATE_`）、`SYS_JOB_VARIABLES`（`MASTER_ID_/NAME_/DATA_TYPE_/VALUE_`）、`SYS_JOB_HISTORY`（`JOB_ID_/START_DATE_/END_DATE_/END_STATUS_/MESSAGE_`）。任务 `S` 表示已暂停、`R` 表示运行中；执行历史 `S` 表示成功、`F` 表示失败。不要直接改这些表来替代平台调度操作；“立即执行”返回成功后仍需核对执行历史及实际结果。

平台保存接口仅返回 `flag`；新任务 ID 从列表 `rows[].id` 获取。列表字段为 `records/page/total/rows`，其中 `total` 是总页数，`records` 是总记录数。更新既有任务时必须保留 `job.id`；`variables` 是完整目标数组，平台会删除该任务旧参数后重建，空数组会清空参数，不需要传变量 ID。

## 月度考核结果页面

页面入口：`platform/avicit/pb/assessment/toManage`；本地完整地址为 `http://127.0.0.1:8080/pb/platform/avicit/pb/assessment/toManage`。需要先正常登录 PB，沿用当前登录组织域，不另加角色或部门权限规则。

页面样式参考团委“三会一课”，提供年份、月份、板块、模块、部门筛选，默认年月由服务器按 `Asia/Shanghai` 取上个月。列表按现有接口分页展示各组织、各模块的已保存成绩，显示成绩类型、生成日期和部门关联状态；多个部门换行展示，选择其中任一部门均可查到同一份成绩。点击原因详情查看整组关联部门、各项加扣分及原因、规则版本，并说明各部门取完整成绩、不分摊。生成日期只显示年月日，与本地数据库实际保存精度一致。未关联部门明确标注，未生成成绩显示空数据，零分结果仍显示。

页面只查询保存结果，不触发实时计算，也不修改分数。补录后先通过原 Quartz 补算任务重算对应年月，再刷新本页核对。

筛选选项接口：`GET platform/avicit/pb/assessment/options`。返回当前登录组织域全部已保存月份中的选项，不局限于当前页或当前年月：

```json
{
  "flag": "success",
  "categories": [{"code": "LEAGUE", "name": "团委"}],
  "modules": [{"code": "TWSHYK", "name": "团委三会一课", "categoryCode": "LEAGUE"}],
  "departments": [{"id": "D001", "name": "示例部门"}]
}
```

模块按模块编码、部门从关联表按部门 ID 去重；同一编码或 ID 有历史名称变化时，选项使用最近生成结果中的名称，成绩行仍显示各自保存的名称。没有关联 ID 的记录不作为部门下拉选项；不指定部门时仍可查未关联成绩。后续新模块保存结果后会自动出现在筛选项，不需修改页面模块列表。无已保存结果时返回空数组。

## 查询接口

```http
GET /pb/platform/avicit/pb/assessment/results?year=2026&month=9&departmentId=D001&moduleCode=TWSHYK&page=1&pageSize=20
```

`/pb` 为本地应用上下文，内网按其部署上下文替换。接口沿用现有 PB 登录及会话中的组织域，不接收外部传入的 `orgIdentity`。首期不增加自定义鉴权或部门授权规则。

GET 查询参数按 UTF-8 编码。2026-10-09 实测本地 Tomcat 7 的 HTTP Connector 缺少 URI 编码配置时，中文部门 ID 会错误查询为空；经用户确认增加 `URIEncoding="UTF-8"` 并重启后，两部门分别正确返回 28/2 条，月度 360 项 HTTP 检查通过。内网核对其实际入口配置即可，已有正确配置不重复修改，也不复制本地 `server.xml`。详情见 `docs/assessment-deployment-check-20261009.md`。

| 参数 | 说明 |
| --- | --- |
| `year`、`month` | 必填，自然年月 |
| `departmentId` | 可选，部门 ID 精确匹配；不填可返回未关联部门的记录 |
| `categoryCode` | 可选，板块编码，团委为 `LEAGUE` |
| `moduleCode` | 可选，模块编码，首期为 `TWSHYK` |
| `page` | 默认 1，从 1 开始 |
| `pageSize` | 默认 20，范围 1—100 |

成功返回 `flag=success`、`rows`、`total`（成绩记录总数）、`page`、`pageSize`。每行包含 `id/orgIdentity/categoryCode/moduleCode/moduleName/assessmentOrgId/assessmentOrgName/departmentId/departmentName/departments/year/month/resultKind/resultScore/reasons/ruleVersion/calculatedAt/departmentLinked`。`calculatedAt` 保持原上海时区 ISO 8601 带偏移格式，例如 `2026-10-01T00:00:00+08:00`；本地 DM 的 `DATE` 已在保存时舍去时分秒，这里的零点不代表任务实际执行时刻。

`departments` 始终返回该成绩完整部门数组 `[{"id":"D001","name":"部门 A"}, ...]`，未关联为 `[]`；`departmentLinked` 根据该数组是否非空生成。旧标量字段 `departmentId/departmentName` 的约定为：指定 `departmentId` 筛选时返回匹配部门；不指定筛选且仅一个部门时返回该部门；不指定筛选且为多部门或未关联时返回 `null`。调用方不能以标量为空判断未关联，应读取 `departmentLinked` 和 `departments`。

完整响应示例（以下为演示数据）：

```json
{
  "flag": "success",
  "rows": [{
    "id": "result-id", "orgIdentity": "ORG_ROOT",
    "year": 2026, "month": 9,
    "categoryCode": "LEAGUE", "moduleCode": "TWSHYK", "moduleName": "团委三会一课",
    "assessmentOrgId": "LEAGUE001", "assessmentOrgName": "示例联合团支部",
    "departmentId": "D001", "departmentName": "部门 A", "departmentLinked": true,
    "departments": [{"id": "D001", "name": "部门 A"}, {"id": "D002", "name": "部门 B"}],
    "resultKind": "ADJUSTMENT", "resultScore": -0.2, "ruleVersion": "1",
    "reasons": [{
      "itemCode": "BRANCH_COMMITTEE", "itemName": "支部委员会", "scoreChange": -0.2,
      "reason": "2026年9月支部委员会应至少开展1次，实际0次，扣0.2分"
    }],
    "calculatedAt": "2026-10-01T00:00:00+08:00"
  }],
  "total": 1, "page": 1, "pageSize": 20
}
```

接口只查询已保存结果，不计算、不写库。按 `CATEGORY_CODE、MODULE_CODE、ASSESS_ORG_ID、ID` 稳定排序分页，空数据为 `rows=[]、total=0`；不把无记录解释成零分。参数错误 HTTP 400，服务异常 HTTP 500；未登录按 PB 现有登录机制处理。

调用方应分页取全结果，用“组织域＋模块＋被考核组织＋年月”识别同一成绩；接口返回的是组织、模块分项，不应只用部门、年月覆盖多条结果，也不能将各模块的 `SCORE` 与 `ADJUSTMENT` 直接相加。当前 `calculatedAt` 无法辨识同一天内多次补算的更新，也不提供历史版本查询；补算成功后应重新拉取对应范围并替换旧结果，不能仅凭该字段是否改变决定是否更新。实际任务执行时刻可在平台任务历史中查看。

上例请求筛选 `D001`，所以标量返回部门 A，而数组仍含 A、B。筛选 `D002` 时同一成绩仍为 `-0.2`，标量改为部门 B。若不按部门筛选、由调用方自行展开数组，应为每个部门记录完整 `resultScore`；接收方按部门保存时，在上述成绩标识上加部门 ID 区分归属，不能让 B 覆盖 A，也不能除以部门数量。

## 新模块接入

已接入的主题党日模块编码为 `ZTDR`、板块 `PARTY`，按计划自然月输出扣分；补齐源表后通过指定月份重算恢复已存成绩。业务规则、页面入口和本地验证见 [主题党日考核](ztdr-assessment.md)。该接入复用现有表、Provider 契约与任务。

2026-10-12 新增党委三会一课 `DwshykMonthlyAssessmentProvider`：模块 `DWSHYK`、板块 `PARTY`、规则版本 `1`，输出 `ADJUSTMENT`。月度项目归对应自然月，季度项目归季度末月，年度项目归考核年 9 月；仅收集已到期项目，每项只归属一个月。去年 10 月至当年 9 月的 12 个月扣分合计与该考核年度总扣分一致，成绩以扣分负值保存，零分也保存。补录会议计入记录总数，但扣分仍按截止前的按时次数计算，补录后重算不会消除原按时缺次扣分。

该接入在同一 PB 数据库读取 `DYN_THREE_FOUR`、`PARTY_ORGANIZATION`，复用现有结果表、部门快照、Writer 事务与月度/补算任务；不新增业务表或调度任务。组织部门沿用 `ATTRIBUTE_02/ATTRIBUTE_03`，多部门、缺部门与历史归属保存规则不变。业务说明见 [党委三会一课考核](dwshyk-assessment.md)。本地党委考核实库测试 **1614 项**、团委回归 **222 项**、统一月度回归 **292 项**通过；内网部署状态以模块交付记录为准。

公共接口位于 `src/avicit/pb/assessment/provider/MonthlyAssessmentProvider.java`：

```java
String getModuleCode();
List<String> listOrgIdentities();
List<MonthlyAssessmentResult> calculate(String orgIdentity, YearMonth month);
```

新增 Spring `@Component` 实现即可被统一服务发现，参考同目录的 `TwshykMonthlyAssessmentProvider`。Provider 负责以下内容：

1. 返回全局稳定、唯一的模块编码；`listOrgIdentities` 从该模块数据来源列出应收集的组织域。
2. `calculate` 返回该组织域下所有应考核组织的指定月结果，每个组织一条。包括无业务记录但应考核的组织，不能用页面分页结果代替完整范围。
3. 填充板块、模块、组织域、组织、`departments` 列表、年月、`resultKind`、`BigDecimal resultScore`、`ruleVersion` 与原因数组。每个部门使用 `new MonthlyAssessmentResult.Department(id, name)`，多部门仍只返回一条组织成绩，零分也返回记录。旧单部门 Provider 的标量字段仍可被统一写入服务转换为关联。
4. 重用原模块计算规则，Provider 不自行写结果表，不吞掉会导致结果不完整的异常。缺部门正常返回，组织 ID 不能缺失。
5. 增加该模块月边界、缺业务数据、正常/异常分值及补录更正测试；用统一收集、重算和接口验证，不改公共表及调度主流程。

可直接参考 [MonthlyAssessmentTest.java 中的 SecondProvider](../scripts/MonthlyAssessmentTest.java)：这是已运行验证的第二个 Provider 示例，展示独立模块编码、来源组织域、结果及原因组装。它只在测试 Spring 配置中注册，不是正式考核模块。正式接入参考 [TwshykMonthlyAssessmentProvider.java](../src/avicit/pb/assessment/provider/TwshykMonthlyAssessmentProvider.java)，用该模块自己的查询和既有公式替换示例数据并添加 `@Component`；不在统一服务另建一套公式。

## 本地验证与交付状态

结果查询页已完成浏览器验收：默认上海上月、板块/模块筛选、5＋2 分页、扣分原因与零分明细、未收集月份空状态、重置均正常。1440px 桌面布局及 390px 窄屏检查通过，窄屏表格独立横向滚动，文档无横向溢出。浏览器控制台无错误，JS 语法检查通过，3 个前端文件冲突扫描为 0 警告。页面截图：`output/monthly-assessment/results-page.jpg`。

本地构建、建表和测试入口：

```powershell
./scripts/monthly-assessment.ps1 -Action build
./scripts/monthly-assessment.ps1 -Action install
./scripts/monthly-assessment.ps1 -Action test
```

`build` 将统一考核及已接入业务模块（含党委三会一课）Java 编译到 `WebRoot/WEB-INF/classes` 并复制 Mapper，完成后重启 Tomcat 再验证 HTTP 和平台任务。`install/test` 仅通过当前进程环境变量 `PB_TEST_DB_PASSWORD` 取得本地 DJ 库凭据，脚本不保存密码。`install` 分别检查主成绩表和部门关联表，只创建缺失表，然后自动执行旧部门快照迁移，不修改已有表结构。`test` 使用专用组织域，最终清理本轮测试行；不能针对内网运行。

旧数据迁移由 `scripts/MonthlyAssessmentDepartmentMigration.java` 完成，复用 `parseDepartments`，只将旧成绩主表已保存的 `DEPT_ID/DEPT_NAME` 快照拆到关联表，不读取当前团组织关联。已有任意部门关联的成绩整组跳过，重复执行不重复插入；迁移在事务中执行，失败回滚。主成绩 ID、分值、原因、规则版本、生成日期均不改。其 `main` 固定只连接本地；内网将来升级时应按相同逻辑安排受控迁移，再部署新版查询和收集代码，不能直接把本地脚本指向内网。

HTTP/平台验收脚本通过现有账号正常登录，凭据来自当前进程 `PB_TEST_LOGIN/PB_TEST_LOGIN_PASSWORD`，Cookie 仅在内存中使用：

```powershell
node ./scripts/monthly-assessment-runtime-check.js
node ./scripts/monthly-assessment-runtime-check.js --setup-jobs
```

不带参数只查接口。`--setup-jobs` 创建/复用两任务，依次验证补算成功、未结束月份失败、恢复成功和月度任务成功，最后启用月度任务、保持补算暂停；该选项会写本地任务和结果。报告为 `logs/monthly-assessment-runtime-report.json`，脚本固定连接本地，不用于内网部署。

2026-10-08 已完成：

- 新结果表已在本地安装；8 个基础审计字段 checker 全部通过；统一模块及团委核心源码编译和 Mapper 部署通过。
- 新模块真实 DM＋MyBatis＋Spring 事务代理测试 **198 项断言通过**，日志 `logs/monthly-assessment-test.log`。
- 覆盖月初/月末、跨年、闰年、无会议、正常多会、季度年度不参与；无会议年份、112 个非根组织全量收集和分页无重无漏。
- 覆盖重复生成、更正清零与原因同步、缺部门及补齐、历史非空归属保留、不同模块和组织域隔离、失效历史组织保留。
- 覆盖超过 32KB 的 CLOB 原因往返、真实事务中途失败整批回滚、首次并发唯一键冲突、已有结果并发重算、测试用第二个 Provider，以及月度/补算参数和未结束月份拒绝。
- 测试结束后专用组织域结果清理为 0；现有团委回归 **213 项断言通过**，日志 `logs/twshyk-assessment-regression.log`。

- 编译部署并重启 Tomcat 后，真实 HTTP/平台验收 **51 项断言通过**，见 `logs/monthly-assessment-runtime-report.json`。包含结构化原因、部门状态、组织域/规则版本/生成时间、稳定分页、部门精确筛选、空结果，以及缺失/非法/整数溢出/超上限参数 HTTP 400 JSON。
- 平台执行历史依次 `S/F/S/S`：补算成功、故意传入未结束的 2026 年 10 月失败、恢复 9 月成功、月度任务成功。补算参数已恢复 `TWSHYK/2026/9`，不限定来源组织域。当前登录域可查到 2026-09 的 7 条既有本地夹具组织成绩，由平台任务实际生成；不属于已清理的专用集成测试域。
- 月度任务 ID `40288085a11a8f1f01a11a9745d80cdd` 状态 `R`；补算 ID `40288085a11a8f1f01a11a99138c0ce0` 状态 `S`。只读核对各程序仅 1 条、无重复；ID 仅用于本地记录，不复制到内网。
- Tomcat JVM `user.timezone=Asia/Shanghai`；只读查询实际 `QRTZ_TRIGGERS/QRTZ_CRON_TRIGGERS` 确认月度触发器 `WAITING`、`TIME_ZONE_ID=Asia/Shanghai`，下次执行 **2026-11-01 02:00:00+08:00**。补算暂停无定时触发器。核查记录 `logs/monthly-assessment-quartz-inspection.log`。

本地验收完成。平台保存最初的 HTML/404 已通过 `Accept: application/json` 解决，属于既有 `ModelAndView` 内容协商；没有改路由、鉴权或平台全局配置。

## 平衡积分卡聚合接口

为平衡积分卡增加只读接口：

```http
GET /api/avicit/pb/member/partyMember/rest/monthAssessment/{year}/{month}
```

接口固定读取 `ORG_ROOT` 组织域指定年月已经保存的统一月度结果，返回图片所示的 JSON 数组。结果按部门 ID 聚合；一个组织关联多个部门时，每个部门都计入该组织的完整扣分，不分摊。`reason` 将所有扣分原因按换行拼成一个字符串，`totalScore` 为该部门所有模块和被考核组织结果分值之和，`month`、`year` 按字符串返回。没有部门关联的结果也保留一行，`deptName` 为 `null`，避免静默丢失扣分。

示例：

```json
[
  {
    "deptName": "党委办公室",
    "reason": "支部委员会当月未按要求召开，扣0.2分\n主题党日缺少计划，扣0.2分",
    "month": "9",
    "year": "2026",
    "totalScore": -0.4
  }
]
```

该接口只查询已保存结果，不触发计算或写库；无数据时返回空数组。平衡积分卡调用方应在月度补算成功后重新拉取对应年月。

2026-10-08 追加结果查询页后，Java/Mapper 已重新编译部署，并按 runbook 重启 Tomcat 和 Redis。只读实库核对 **21 项断言通过**（两个已有结果组织域及一个空域的筛选集合、模块去重、空集合和上海时区默认月份），日志 `logs/monthly-assessment-options-check.log`；正常登录后的页面路由、JSP 默认值、筛选接口、原成绩接口及 HTTP 400/空结果行为 **13 项断言通过**，见 `logs/monthly-assessment-page-http-report.json`。原 7 条本地成绩均未关联部门，当前部门下拉只有“全部部门（含未关联）”符合已保存数据；新增页面不修改这些成绩或源组织。

只读时间核查 `logs/monthly-assessment-time-inspection.log` 确认：Mapper 读写已使用 `jdbcType=TIMESTAMP`，但本地 DM `DATE` 存储本身只保留日期，`TO_CHAR(LAST_UPDATE_DATE, 'YYYY-MM-DD HH24:MI:SS')` 及 `CAST(CURRENT_TIMESTAMP AS DATE)` 均为零点。页面因此使用“生成日期”，本次保持表结构与原接口不变，未为此重算成绩。

2026-10-09 联合团支部多部门改造：本地已安装部门关联表，8 个基础审计字段检查全部通过；Java/Mapper 编译部署通过。首次本地迁移插入 0 条关联，原因是原 7 条页面可见成绩均未保存部门，不代表迁移重新采用了当前组织归属。

本轮真实 DM/MyBatis/Spring 集成测试 **284 项**、原三会一课回归 **213 项**通过，分别见 `logs/monthly-assessment-joint-department-test.log`、`logs/twshyk-assessment-joint-department-regression.log`。覆盖各部门全额分数、精确 ID 匹配、两条 32 位部门 ID、名称空槽/标点、快照冻结/补齐、旧成绩迁移及幂等、补录清零、主表与关系同时回滚、并发；专用测试域数据全部清理。

重启 Tomcat/Redis 后真实 HTTP **21 项**通过，见 `logs/monthly-assessment-joint-http-report.json`。浏览器确认联合组织总列表只出现一次，分别选择两个部门均返回同一条 -0.2，详情列出全部部门、扣分原因及不分摊说明；控制台无错误。验收截图 `output/monthly-assessment/joint-department-detail.jpg` 使用临时测试数据，该条结果及两条关联已清理；数据库和 HTTP 均恢复原 7 条成绩，部门选项不残留临时数据，清理报告 `logs/monthly-assessment-joint-cleanup-report.json`。前端语法检查及 3 文件冲突扫描通过，无新增框架。

本地验证不等于内网部署。本期没有连接或发布内网，没有完成平衡积分卡调用方联调。后续内网交付需按现状安装主成绩表及部门关联表 DDL；已有旧版成绩时先按上述规则迁移其部门快照，再部署统一考核源码及 Mapper、团委计算共用部分，以及 `WebRoot/avicit/pb/assessment/MonthlyAssessmentManage.jsp` 和 `WebRoot/static/pb-modern/assessment/` 页面资源，编译并重启，按上文建立两条平台任务；不要在内网执行本地夹具或测试清理脚本，也不自动回填历史。外部系统的实际登录接入、部门编码映射和拉取更正流程在内网联调时确认。

## 2026-10-21 平衡记分卡接口增量部署

用户确认内网已安装2026-10-15包，Git基线fed02e7。接口补丁只包含MonthlyAssessmentRest、MonthlyAssessmentBscService、MonthlyAssessmentDAO以及源码/运行目录两份MonthlyAssessmentMapper.xml；不重复执行统一月度考核建表或历史迁移SQL。复制后用内网JDK8编译新增/修改Java，核对运行Mapper，重启Tomcat。

应用上下文为/pb时，实际URL为`GET /pb/api/avicit/pb/member/partyMember/rest/monthAssessment/{year}/{month}`，不加platform前缀。真实HTTP正常查询、空结果、非法参数及错误方法共8项检查通过，聚合逻辑5项检查通过。只读ORG_ROOT已保存成绩，无数据返回[]；未完成内网调用方联调。