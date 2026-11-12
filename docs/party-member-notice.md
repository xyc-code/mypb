# 党员发送阅知

入口：党员管理 → 党员发送阅知；本地地址：`http://127.0.0.1:8080/pb/platform/avicit/pb/membernotice/manage`。

## 使用与业务规则

下载模板，填写并导入；在列表逐条勾选拟稿后点击“批量发起”，弹窗显示成功、失败和失败原因。也可点击“手动发起”直接进入完整表单页，通过姓名用户选择框录入单条通知，选择“保存”或“保存并发起”。每条记录创建一个独立流程，自动提交拟稿任务并确定接收书记。直属党支部送本支部书记；其他组织从直接上级开始，沿组织层级查找最近有书记的上级，不查组织树根节点；均未找到时送本组织书记。书记通过平台待办点击“阅知”，正常办结后更新党员库。

列表显示流程状态、当前处理人和流程详情。状态查询使用平台的拟稿中、流转中、已完成、挂起及终止状态。点击“查看流程”进入平台原生流程页面。删除仅适用于当前数据范围内尚未生成流程的拟稿。

“下载模板”菜单分别提供预备党员和正式党员模板，系统按表头识别类别，不需要在分类模板填写党员类别。旧通用和分类模板仍可导入，末尾的文件编号列会被忽略。模板姓名供核对，保存时仍取工号匹配的党员库姓名，并自动生成标题。

| 模板 | 列顺序 |
| --- | --- |
| 预备党员 | 工号、姓名、接收党组织、党委会讨论日期、党委会届次／会议名称、预备期开始日期、预备期结束日期 |
| 正式党员 | 工号、姓名、接收党组织、党委会讨论日期、党委会届次／会议名称、转正日期 |

字段规则如下：

| 列 | 规则 |
| --- | --- |
| 工号 | 按文本填写，保留前导零；匹配 `PARTY_MEMBER.USER_CODE` |
| 姓名 | 供核对；实际保存工号匹配的党员库姓名 |
| 接收党组织 | 系统党组织完整名称，匹配并保存组织 ID |
| 党员类别 | `PM_PARTY_TYPE` 中的“预备党员”或“正式党员” |
| 党委会讨论日期 | 可空 |
| 党委会届次／会议名称 | 可空 |
| 预备期开始日期、预备期结束日期 | 保存在通知，不回写党员库 |
| 转正日期 | 正式党员用于更新日期和计算党龄 |

手动录入页面为 `/add`，不再使用表单弹窗。姓名复用平台 `H5CommonSelect` 单选用户，`/member?userId=` 按 `PARTY_MEMBER.USER_ID` 关联并带出姓名、工号和所属党组织（作为可修改的接收组织默认值）；保存时后端重新按用户 ID 获取党员记录和工号，不信任客户端姓名或工号。Excel 仍按工号匹配。标题位于表单顶部，28px 居中显示并随姓名、类别实时生成；切换类别只显示对应日期字段。已保存但发起失败的通知保留在列表，重新发起复用该记录。列表使用平台 `common,table,form` 的按钮、jqGrid 和分页，支持原生翻页、跳页和每页条数；不引入新框架或修改全局样式。

日期支持 `yyyy-MM-dd`、`yyyy/M/d`、中文年月日文本、Excel 原生日期及带日期格式的数字公式结果。工号、组织匹配不到或不唯一时逐行提示，其他成功行正常导入，不创建党员或组织。

预备党员标题为“关于批准发展{姓名}同志为中共预备党员的审批意见”；正式党员标题为“关于同意{姓名}同志转为中共正式党员的审批意见”。流程实例标题同步使用此标题。

书记通过 `PARTY_ORGAN_MEMBER` 和现有 `PARTY_POST` 字典定位，排除副书记和纪委书记。从接收组织的 `PARENT_ID` 沿上级查找最近的书记，在组织树根节点前停止；无上级书记时回退接收组织本身。直属党支部因此直接送本支部书记。目标组织没有书记或匹配多名书记时，该条发起失败，其他记录继续；多名上级书记时显示对应组织名称。通知 `PARTY_ID` 保留模板匹配的组织，`SECRETARY_ID` 保存本次发起确定的书记；已发起记录重试复用原流程。

正式党员办结定向更新 `PARTY_TYPE`、`REGULAR_DATE`、`ATTRIBUTE_05`，党龄使用办结当天与转正日期之间的完整周年数，最低为 0。预备党员只更新 `PARTY_TYPE`，保留原转正日期和党龄。导入、发起、撤销或终止均不回写。回写和流程完成共用事务，异常时待办保留。通知加锁及回写完成时间防止重复发起、重复回写。

## 行数据权限

接入平台可配置公式：表 `DYN_DYFSYZ`，Mapper `NoticePermissionMapper.xml`，方法 `selectVisibleNoticeIds`，方法配置 ID `DYFSYZ_PERMISSION`。预置公式为全部数据、本人创建、本部门创建；安装不会给真实角色自动授权。

模块没有给任何角色配置授权公式时，能访问模块的用户均可查看和发起通知。配置了角色授权公式后才按公式过滤，当前用户所有角色均未匹配时返回零行。列表、详情、删除和发起均核验相同范围；发起和删除接口重新验证所选 ID。书记通过已有待办参与者机制访问所分配流程的表单。

## 数据与平台配置

- 业务表：`DYN_DYFSYZ`；DDL：`db/party_member_notice.sql`。
- 九项审计字段按项目顺序保留：`ID`、`CREATED_BY`、`CREATION_DATE`、`LAST_UPDATED_BY`、`LAST_UPDATE_DATE`、`LAST_UPDATE_IP`、`VERSION`、`ORG_IDENTITY`、`CREATED_DEPT`。`CREATED_DEPT` 插入时取当前部门。
- 保存党员 ID、接收组织 ID（`PARTY_ID`，对应 `PARTY_ORGANIZATION.ID`）、书记 ID、流程实例 ID、状态、回写完成时间；流程实例列有唯一索引。
- 普通表单代码 `DYFSYZ`，URL `platform/avicit/pb/membernotice/form`。
- 流程模型 `DYFSYZ_MODEL`，key `dyfsyz`；`start1 → taskDraft → taskSecretary → end1`。
- `NoticeActors` 提供书记；`NoticeWriteback` 只挂在正常 `end1` 的 `start` 事件。
- 菜单代码 `DYFSYZ`，菜单 ID `DYFSYZ_MENU`，父菜单为现有“党员管理”。

## 本地安装与验证

依赖现有 JDK 8、POI 3.9、Spring、BPM、DM、Redis 和 Tomcat；不新增前端框架或运行配置文件。

1. `scripts/member-notice.ps1 -Action Compile`：编译 `src/avicit/pb/membernotice` 到 `WebRoot/WEB-INF/classes`，复制权限 Mapper。
2. 将本地数据库密码通过临时环境变量 `PB_TEST_DB_PASSWORD` 提供，执行 `scripts/member-notice.ps1 -Action Install`。安装器创建本模块表、索引、存储元数据、普通表单、流程模型、菜单和公式；已安装的旧库会把 `RECEIVER_ORG_ID` 原地改名为 `PARTY_ID` 并同步存储元数据，原有值保留。可重复执行，不授权真实角色。
3. 重启 PB Tomcat 和 Redis；在平台发布流程模型 `DYFSYZ_MODEL`，确认 key 为 `dyfsyz`。流程源和导入文件位于 `config/bpm/DYFSYZ.xml`、`DYFSYZ.jpdlx2`，配图为 `DYFSYZ.png`。
4. 如需限制数据范围，在平台配置实际使用角色的行数据公式，刷新平台相关缓存或重新登录。
5. `scripts/member-notice.ps1 -Action Test` 运行日期、标题和 POI 检查。真实联调脚本为 `scripts/test-member-notice-runtime.py`，使用 `MemberNoticeLocalFixture` 的专用测试身份，勿用真实党员测试异常回写。

本地集成测试辅助 JSP 仅限回环访问、随机路径与令牌，完成后必须运行 `python scripts/test-member-notice-runtime.py --cleanup` 删除。测试流程先由辅助入口 `cleanupProcesses` 调用 BPM 级联清理，再运行 `MemberNoticeLocalFixture cleanup` 清理专用测试数据。测试辅助 JSP 和临时令牌不属于部署文件。

本次仅本地接入；内网包、真实角色授权及内网数据迁移按后续要求处理，不在本次自动执行。

## 验证记录

2026-11-10：JDK 8 / POI 3.9 编译及 19 项规则检查、37 项真实 DM/BPM 检查通过，后端编译后已重启 Tomcat/Redis。验证包含两类回写、完整周年与闰日、异常回滚保留待办、重复回调、并发发起、终止不回写、行数据权限及伪造 ID 拦截。

同日按页面反馈改版后：27 项规则检查、43 项真实 DM/BPM 检查通过；浏览器验证了两类模板实际下载和导入、手动正式党员发起、自动生成书记待办、原生分页每页条数、跨页选择及 27 条批量发起。新截图为 `output/playwright/membernotice-platform-list.png`、`membernotice-platform-select.png`、`membernotice-manual-formal.png`，改版验证报告为 `output/membernotice/ui-revision-results.json`。改版按钮/表格/样式扫描无冲突警告。

页面实际下载模板并上传，验证成功行及错误行提示；跨页全选并发起 27 条，全部生成书记待办；正式通知在原生书记页面点击“阅知”并确认办理后，回读待办已消失、日期已更新、党龄不足一年为 0。页面控制台无错误。前端扫描对 `jquery.dragsort` 的一项重复 jQuery 提示为插件名误报，没有加载第二份 jQuery。

报告为 `output/membernotice/runtime-results.json`、`output/membernotice/browser-results.json`，截图为 `output/playwright/membernotice-{select-all,import,secretary}.png`。44 个专用测试流程已通过引擎级联删除，专用测试通知、党员、用户和临时测试 JSP 已清理；保留正式模块配置和已发布流程。

2026-11-10 手动发起后续调整：新增 `NoticeAdd.jsp`、`notice-add.js`，移除列表内表单弹窗。JDK 8 编译后重启 Tomcat/Redis，27 项规则检查、46 项真实联调检查通过；浏览器分别验证平台用户选择框双击选择、选择后确定、姓名/工号/组织联动、正式和预备字段切换、完整页面标题居中28px、保存后发起及直接保存并发起。两条浏览器创建通知均核对书记待办，并正常办结回读党员库。报告 `output/membernotice/full-page-results.json`，截图 `output/playwright/membernotice-full-page.png`、`membernotice-full-page-probation.png`。新页面及脚本前端冲突扫描零警告，页面控制台无错误。

2026-11-11：列表日期仅显示年月日；批量结果弹窗增加成功/失败统计、状态标签和失败原因，自适应高度并滚动显示多条明细。仅更新模块 JSP/JS/CSS，复用现有 layer，无新增依赖。12 项浏览器模拟接口界面检查和 JS 语法检查通过，未执行真实流程；报告 `output/membernotice/date-popup-results.json`。

2026-11-11 自查：修复查询失败保留旧数据、保存中仍可修改表单两处问题。35 项规则、51 项真实 DM/BPM 检查及浏览器失败恢复/重试检查通过；未配置授权公式时可正常发起。九条专用测试流程和专用数据已清理。详见 `docs/reports/party-member-notice-review-20261111.md`。用户确认忽略通知并行顺序场景，既定回写规则保留。

2026-11-11 书记送达规则调整：直属送本支部；其他组织向上找最近书记并排除树根，无上级书记回退本组织。JDK 8 编译后重启 Tomcat/Redis，35 项规则、71 项真实 DM/BPM 检查通过，包含手动发起和上级书记办结回写。清理 11 条专用流程及全部专用数据，报告 `output/membernotice/hierarchy-routing-results.json`。本次生产代码仅改 `NoticeService.java`，无表结构、流程定义或新增配置变更；已发起流程重试复用原实例，规则用于后续发起。

## 2026-11-12 内网首次安装

两个模块按中文目录分别交付，部署流程见 [内网首次安装说明](secretary-competency-member-notice-intranet.md)。包内不带.class；内网使用JDK8编译，初始化数据库/平台元数据后重启，并发布阅知流程。未迁移外网测试或演示数据；内网部署基线尚未更新。
