# Module Memory: 党员发送阅知

## Identity

- 模块：党员发送阅知；代码 `membernotice`，表单 `DYFSYZ`，流程 key `dyfsyz`。
- 状态：local-verified，本地接入、页面链路及测试数据清理完成。
- 更新：2026-11-11。
- 本轮用户已明确批准建立模块记忆和接入可配置行数据权限，不要重复询问。

## Business

- 模板下载 → 导入 → 逐条勾选拟稿 → 批量发起 → 按接收组织层级确定书记阅知 → 正常结束回写。结果弹窗显示逐条成功和失败原因。
- 一人一条独立流程，工号匹配 `PARTY_MEMBER.USER_CODE`，姓名关联 `SYS_USER`。字段和标题详见 `docs/party-member-notice.md`。
- 正式党员更新类别、转正日期和完整周年党龄；预备党员只改类别。会议信息可空。
- 2026-11-11 移除文件编号业务字段：手动发起、详情和阅知表单不显示，下载模板不含该列，新记录不写入；旧模板末尾编号列忽略。历史数据库列和值保留，无需迁移。
- 书记不能唯一确定时逐条报错，不转副书记。2026-11-11 用户调整送达规则：从接收组织的上级开始，沿 `PARENT_ID` 找最近有书记的组织，排除组织树根节点；无上级书记时回退本组织书记，因此直属党支部直接送本支部书记。不添加额外角色、组织范围、审批步骤。
- 本模块未配置任何角色授权公式时，能访问模块的用户均可查看和发起；配置角色授权公式后，当前用户所有角色均无匹配公式才返回零行。列表/详情/删除/发起范围一致。书记使用平台已有待办机制。
- 本次不做内网包，不改无关模块和已有工作区修改。
- 2026-11-10 页面改版：用户明确要求平台按钮、平台分页、合理布局、区分两类模板、允许手动发起。已采用平台 `common,table,form`、`btn-primary form-tool-btn` 和 jqGrid 原生分页；筛选区/工具栏/表格分开，保留跨页选择。
- 下载菜单提供预备党员模板（预备期起止）和正式党员模板（转正日期），均新增姓名供核对，仍按工号取党员库姓名，按党组织全名匹配 `PARTY_ID`；无法唯一匹配时提示具体行。旧模板仍可导入。
- 列表去掉全选工具条和表头全选，保留单条勾选；显示平台流程状态、当前任务处理人和流程详情。删除按同一行权限范围且仅删除未生成流程的拟稿。流程详情复用 `platform/bpm/business/detail` 和平台 `FlowEditor`，业务表单使用 `form_commonTable`，移除手写流程图 iframe。
- 手动发起现为完整 `/add` 页面（用户明确拒绝小弹窗），`NoticeAdd.jsp` + `notice-add.js`，顶部居中28px动态标题。姓名用平台 `H5CommonSelect` 单选，`/member?userId=` 按党员库 `USER_ID` 带出姓名、工号、所属党组织；接收组织默认带出后可改。后端保存按所选用户 ID 重新定位党员及工号，避免同名、客户端伪造工号和重复工号误关联；Excel 仍按工号匹配。支持切换类别日期、保存、保存并发起；已保存记录重试不重复创建。

## PB Surface And Data

- `DYN_DYFSYZ`，全部九项审计字段已创建并检查，见 `db/party_member_notice.sql`。通知存储匹配时的成员、组织、书记、流程和回写标记。
- 接收党组织 ID 字段改为 `PARTY_ID`，关联 `PARTY_ORGANIZATION.ID`。安装器对旧库原地改名并同步 `DB_TABLE_COL`，保留值和字段元数据 ID。已在本地重复执行安装并校验原有通知的 ID 与组织 ID 未变；重启后已验证按新字段发起并生成书记待办。
- 安装器 `scripts/MemberNoticeInstall.java` 创建存储元数据、普通表单 `DYFSYZ`、模型 `DYFSYZ_MODEL`、菜单 `DYFSYZ_MENU`（父菜单“党员管理”）和 `DYFSYZ_PERMISSION`。
- 权限方法 `NoticePermissionMapper.xml/selectVisibleNoticeIds`；可配置全部、本人、本部门公式；不自动给真实角色授权。
- 预置规则和方法元数据不视为已授权；以该方法是否存在非空角色授权公式判断是否启用范围限制。此默认开放规则只用于党员发送阅知模块。
- 本地复现并修复零授权误拦截：重启后实测零授权时普通用户可查看、全选和发起，管理员也可发起，均生成对应书记待办；临时配置“本人创建”后，未匹配角色为零行且直接传 ID 也无法发起，匹配角色可正常发起本人创建的通知。三条测试流程和测试授权已清理。
- 流程配置 `config/bpm/DYFSYZ.{xml,jpdlx2,png}`：拟稿自动提交，书记任务 `taskSecretary`，正常结束 `end1`。
- Java `src/avicit/pb/membernotice/`；前端 `WebRoot/avicit/pb/membernotice/`；不改公共框架或引入新库。

## Pitfalls And Decisions

- 必须使用本地 `avicit.platform6.bpm.web.service.BpmOperateService` 让流程与 JDBC 回写共用 Spring 事务；不要使用 REST bpmclient 版本。
- 自动完成拟稿后先 `SessionFactory.getCurrentSession().flush()` 再通过 JDBC 检查新待办；否则未刷新的旧拟稿记录会造成误判并回滚。
- 流程标题通过平台 `HistoryService.updateHisInstanceTitleCmd` 写入；仅 XML 的 processInstanceTitle meta 未使本地历史实例生成标题。
- 回写监听只挂正常 end1/start 事件，不挂全局 end；目标 PARTY_MEMBER 定向更新，避免通用服务把未传 REGULAR_DATE 清空。
- `PARTY_POST` 书记名称精确匹配，兼容党支部书记/支部书记、党总支部书记/党总支书记/总支书记、党委书记及书记；排除副书记、纪委书记。类别从 `PM_PARTY_TYPE` 字典解析。
- BPM_TASK 有 EXT1–8 分表。平台终止和级联删除接口需要 execution ID（历史表 ID_，dyfsyz.实例ID），不是历史实例 DBID。历史表 KEY_ 本地为空，按 PROCDEFID_ 识别已发布定义。
- `BPM_PROCESS_DEF.PNG_` 非空，安装器需要存入流程图。自定义参与者用 relation/customfunction 结构。
- POI 3.9 必须先判断单元格类型，再调用日期 API；文本、原生日期和数字公式日期统一。异常公式按行处理。
- 新建测试用户要加载 SysUserAPI 缓存；缺缓存会使平台权限表达式解析失败，不应因此绕过生产权限。
- 前端扫描 duplicate-jquery 警告来自平台 `jquery.dragsort` 插件引用，并非第二份 jQuery；实际页面控制台零错误。不要为消除误报删除原生 BPM 依赖。
- 静态 include 的 buttons.jsp 声明 `charset=utf-8`；NoticeForm 必须使用完全相同的 contentType，大小写不同也会导致 Tomcat 7 JSP 编译失败。
- 浏览器测试转发上传时使用 route.continue 保留原始 multipart；route.fetch/postDataBuffer 会丢弃 Chromium 未暴露的文件内容，造成零字节上传，不能据此改生产导入代码。

## Verification And Handoff

- 地址：`http://127.0.0.1:8080/pb/platform/avicit/pb/membernotice/manage`。
- 19 项 Java/POI 规则检查、37 项真实 DM/BPM 联调通过；最终报告 `output/membernotice/runtime-results.json`。
- 页面改版后更新为 27 项规则检查、43 项真实联调检查，已编译并重启 Tomcat/Redis。浏览器下载并导入两类模板均成功，手动正式通知已生成对应书记待办且未提前回写，原生翻页/每页10条及跨页28条选择通过，新列表批量27条发起全部成功。
- 改版截图 `output/playwright/membernotice-platform-list.png`、`membernotice-platform-select.png`、`membernotice-manual-formal.png`；改版报告 `output/membernotice/ui-revision-results.json`。新列表前端冲突检查零警告，未引入新库或修改全局样式。
- 实际页面下载模板并上传：1 行成功、1 行错误且显示第 3 行原因；跨页全选 27 条，两批 HTTP 请求全部成功；正式通知通过原生书记“阅知”及平台确认办理，回读待办零条、转正日期 2026-06-16、党龄 0。证据 `output/membernotice/browser-results.json` 及 `output/playwright/membernotice-{select-all,import,secretary}.png`。
- JDK 8 编译后已重启本地 Tomcat/Redis，并用新运行时完成最终后台和浏览器验证。九项审计字段检查、JS 语法检查通过。
- 专用测试身份/组织/党员统一 `DYFSYZ_IT_` 前缀，无真实党员被测试修改。先用引擎级联删除测试流程，再清理 fixture，最后删除随机测试 JSP 和令牌。
- 已级联清理 44 个专用测试流程；回读通知、测试党员、测试用户、测试流程均为零。随机测试 JSP 已删除；保留模块正式表、配置和发布的流程定义。
- 页面改版本轮另清理 34 个测试流程，专用通知、用户及流程回读为零，随机 JSP、令牌和浏览器测试桥已删除。手动正式通知正常办结的日期及党龄也已回读验证。
- 编译命令 `scripts/member-notice.ps1 -Action Compile`，安装 `-Action Install`，规则检查 `-Action Test`；后端改动后必须重启本地 Tomcat/Redis。
- 部署与字段说明：`docs/party-member-notice.md`。内网打包尚未执行。

- 手动发起完整页后续验证：27 项规则、46 项 DM/BPM 检查通过，已编译并重启 Tomcat/Redis。浏览器真实平台选人双击及选择后确定均通过；姓名/工号/组织联动、两类标题和日期、标题居中28px、保存后发起及直接保存并发起通过。两条浏览器新建通知核对唯一书记待办并正常办结，正式日期2026-06-16/党龄0，预备保留原日期党龄。证据 `output/membernotice/full-page-results.json` 与 `output/playwright/membernotice-full-page{,-probation}.png`。页面和脚本冲突扫描零警告。
- 文件编号移除验证：JDK 8 编译和 27 项 POI/规则检查通过，已重启 Tomcat/Redis。实际下载两类模板并验证新旧模板导入、日期兼容、错误行提示、手动保存及详情页面；新记录编号为空。证据 `output/membernotice/remove-document-number-results.json`，专用测试数据和临时入口已清理。
- 列表与详情调整后通过 31 项规则及 51 项 DM/BPM 联调。实测新版两类模板的姓名列及组织匹配失败行号、浏览器逐条勾选后的混合结果弹窗、拟稿删除和“查看流程”打开平台原生页面。截图 `output/playwright/membernotice-{flow-list,batch-result,native-flow}.png`。已清理七条测试流程及专用数据、临时入口。

- 2026-11-11 日期与结果弹窗：列表讨论日期、录入日期统一 YYYY-MM-DD，录入时间列改名录入日期。批量发起结果复用平台 layer，使用 notice-result-dialog 局部皮肤，增加成功/失败统计、状态标签和失败原因；按内容自适应高度，多条明细内部滚动。JS/CSS 缓存版本更新为 20261111-5。浏览器模拟接口完成 12 项界面检查（含中断未确认提示、原因文本转义），JS 语法通过；扫描唯一 INFO 为局部 layui 选择器命中，无新增框架、全局样式或后端改动。本轮未重新发起真实流程。报告 output/membernotice/date-popup-results.json，截图 output/playwright/membernotice-result-{single,mixed,many}-styled.png。

- 2026-11-11 自查：复现并修复查询失败保留旧列表/旧选择，以及保存期间仍可修改表单两处页面问题；失败后恢复编辑、已保存记录重试不重复创建、提交参数及两类日期禁用状态均通过浏览器检查。35 项规则/POI 检查、51 项真实 DM/BPM 检查、无授权公式正常发起补查通过；改动前端扫描零警告。清理九条专用流程及专用通知/党员/用户/授权，回读均为零；随机入口已清理。报告 docs/reports/party-member-notice-review-20261111.md、output/membernotice/review-results.json。仅修改模块 JS/JSP 和规则测试，无生产后端改动。
- 自查业务确认：针对同一党员多条通知并行、正式通知先办结后又办结旧预备通知的覆盖场景，用户明确“这个情况没有，忽略掉”；保留现有回写规则，不新增类别回退或顺序限制。

- 2026-11-11 书记层级送达：用户明确最近上级、排除组织树根节点，找不到上级书记回退本组织。`NoticeService.secretary` 按 `PARENT_ID` 查找并用访问集合避免坏层级循环；根节点通过自身 `PARENT_ID` 为空或 -1 判断，复用平台树结构，不写死本地根 ID。只有上级候选唯一时送达，候选多名逐条报错并带组织名。通知原 `PARTY_ID` 保留，发起时保存目标 `SECRETARY_ID`；手动与批量共用，既有已发起记录重试仍复用流程。无新表、字段、配置或流程定义变更。
- 层级规则验证：已按 JDK 8 编译并重启 Tomcat/Redis，35 项规则/POI、71 项真实 DM/BPM 检查通过，覆盖直属、最近上级、无本级书记有上级、跨级、跳过根、无上级回退、排除副书记、多名上级报错、循环层级、真实待办、上级书记办结回写及手动发起/待办访问。报告 `output/membernotice/hierarchy-routing-results.json`。11 条专用流程经引擎级联清理，专用通知/党员/组织/任职/用户/授权/流程均回读为零，随机入口已清理。内网包尚未执行。

- 2026-11-11 列表列顺序调整：业务列依次为姓名、工号、党员类别、党委会讨论日期、接收党组织等；录入日期设置 hidden:true。只改 notice-manage.js 和 Manage JSP 缓存版本 20261111-7，JS 语法、列配置核对及前端冲突扫描通过。

## 2026-11-12 首次内网交付

- 首次完整安装包：D:/pb-release/内网安装-书记胜任力及党员发送阅知-20261112-094750.zip，与书记胜任力分目录，运行源码和平台配置均从已推送Git提交取件。
- 包含7类Java、源/运行权限Mapper、全部模块JSP/JS/CSS、DDL、MemberNoticeInstall.java、DYFSYZ.xml/jpdlx2/png；不带.class、环境配置、测试身份/授权/业务数据。
- 详细编译、初始化、流程发布及验收步骤：docs/secretary-competency-member-notice-intranet.md。必须先编译重启再发布dyfsyz；安装器创建模型但不发布，不覆盖已有同key模型，不自动授权真实角色。
- 本次35项规则/POI、71项真实DM/BPM及当前列表/手动页、JSON路由检查通过。测试账号需要平台用户和主部门关系缓存；初次复查的缓存缺失仅在临时测试入口补齐，生产代码无改动。
- 已经引擎级联清理11条专用测试流程，再清理测试数据、缓存和随机入口；最终数据库零残留检查随包记录。
- 内网尚未同步，不更新部署基线。
