# 实时考核页：组织名称搜索与组织行数据权限

2026-11-04，本地实现并完成真实达梦、平台公式、业务回归与浏览器验收。

## 页面及配置对应关系

五页使用同一个 `AssessmentOrganizationPermissionMapper.xml`，每个页面单独登记一个方法、单独分配角色公式：

| 页面 | 现有入口（相对 /pb/） | 表 | 字段 | 执行方法 |
| --- | --- | --- | --- | --- |
| 团委三会一课 | `platform/avicit/pb/twshyk/assessment/toManage` | `LEAGUE_ORGANIZATION` | `ID` | `selectTwshykOrganizationIds` |
| 党委三会一课 | `platform/avicit/pb/dwshyk/assessment/toManage` | `PARTY_ORGANIZATION` | `ID` | `selectDwshykOrganizationIds` |
| 一支部一特色 | `platform/avicit/pb/yzbyts/assessment/toManage` | `PARTY_ORGANIZATION` | `ID` | `selectYzbytsOrganizationIds` |
| 主题党日 | `platform/avicit/pb/ztdr/assessment/toManage` | `PARTY_ORGANIZATION` | `ID` | `selectZtdrOrganizationIds` |
| 铸心共建 | `platform/avicit/pb/zxgj/assessment/toManage` | `PARTY_ORGANIZATION` | `ID` | `selectZxgjOrganizationIds` |

统一月度考核沿用已有 `MonthlyAssessmentPermissionMapper.xml/selectVisibleResultIds`，按 `PB_ASSESS_RESULT_DEPT.DEPT_ID` 配置，参见 `monthly-assessment-row-permission.md`。

## 平台逐页配置

先部署下文代码和 Mapper，再操作平台。以下步骤在五个页面各执行一次，表及方法严格按上表选取。

1. 打开“行数据权限维护”，在菜单树选择该考核页的现有菜单。
2. 添加方法，类型选择“普通模块”。表名称选上表的组织表，Mapper 选择 `AssessmentOrganizationPermissionMapper.xml`，执行方法只选该页对应的一项。例如团委只选 `selectTwshykOrganizationIds`，不要把五个方法合并登记。
3. 保存方法，添加有效规则。规则类型选择“配置字段”，字段选择 `ID`，运算符选择“等于”，值类型选择“输入值”，填写真实团组织／党组织 ID。不要填写组织名称或行政部门 ID。
4. 检查 SQL 预览：团委原 SQL 是 `SELECT LEAGUE_ORGANIZATION.ID FROM LEAGUE_ORGANIZATION`，其他四页是 `SELECT PARTY_ORGANIZATION.ID FROM PARTY_ORGANIZATION`。指定组织规则生成的过滤条件类似：

   ```sql
   #{t}.ID='目标组织ID'
   ```

5. 进入“行数据权限分配”，选择需要配置的已有业务角色，展开该页面和刚登记的方法，勾选规则并保存公式。单个组织使用对应规则编号，如 `1`；多个组织分别建立规则后用 `1 or 2` 组合，编号以平台实际生成值为准。
6. 使用该角色账号重新登录。核对列表及分页总数，再直接请求一个范围外组织的详情，应返回原有失败响应。铸心共建详情参数是项目 ID，权限仍按项目 `PARTY_ID` 对应的党组织判断，同组织多个项目各占一行。

平台选择器已实测识别五个完整映射方法，并在执行方法选项中取末段方法名。Mapper 名称保留选择器返回值；本机返回纯 XML 文件名。不要手写 Java namespace 或部署绝对路径。本地平台 Mapper 名称列长度为 50，纯文件名可保存；代码也兼容数据库中可保存的 Windows／Linux `file [...]` 资源形式。

没有分配角色公式时，沿用平台原有查询范围；这不表示空权限。需要空范围时，应配置一个实际匹配不到组织的有效规则。现有考核对象规则仍生效，授权 ID 不会使原本不参与该项考核的组织变成考核对象。组织范围完全由平台规则决定，代码没有新增本人、部门或下级组织条件。

本次没有给正式业务角色分配权限，没有修改账号密码或角色成员关系。验收使用的临时方法、规则、授权和数据已清理。既有统一月度 `MONTH_DEPT_LOCAL` 示例配置保留。

## 搜索与计算行为

- 团委新增 GET `list` 可选参数 `leagueName`；党委新增 POST `list` 可选参数 `partyName`，响应结构不变。
- 年份旁增加组织名称框，名称包含查询；去除首尾空格，空值查询全部可见组织，`%`、`_`、反斜杠按普通字符匹配。
- 查询按钮、回车和切换年份回第一页；翻页保留已提交的年份及名称，未提交的输入不会改变翻页条件。
- 名称和组织权限同时在分页前生效，列表、总数、详情使用相同组织权限。
- 党委保留完整树参与党小组和纪委归属计算，仅筛选展示组织。一特色、铸心共建先过滤，再锁定源数据、计算和认定扣分；不可见数据不因页面查询被认定扣分。
- 月度收集、重算、积分卡接口及考核规则保持原样，页面权限通过显式参数进入页面查询。

## 平台原理与此前配置不生效的排查依据

平台原生 MyBatis 行权限拦截器已启用，普通模块 Mapper 可以生效。它从请求上下文及会话取得身份，通过 `checkMapper` 查找当前用户角色对应的 Mapper、方法和公式，再由 `splicingSql` 将规则加入 SQL。`checkMapper` 对登记 Mapper 值精确匹配，方法字段按逗号拆分后精确匹配方法名；只登记方法、没有角色公式，不会自动过滤。

原生自动拦截还依赖 `ContextCommonHolder.getCookeMid()` 及 Redis 中的身份上下文。列表、总数、详情走不同查询，党委又先读取完整树再在内存分页；平台不会自动把一个查询的过滤传播到其他查询，也不会推导共建项目到党组织的业务关系。因此仅在某一个业务 Mapper 上配置，不能保证这些页面的列表、总数、详情和计算范围一致。

本次增加明确的组织权限入口：Controller 从当前登录会话解析对应页面公式，使用同一个可见组织子查询约束页面查询；请求参数不能传入权限 SQL。仍复用平台的角色与公式机制，没有另外实现权限规则语言，也没有新增配置文件。

此前失败请求没有完整保留 Cookie、命中方法和执行 SQL 的同次证据，因此不能断言那一次一定是哪一项配置错误；可按上述身份上下文、Mapper 原值、方法名、角色公式和实际查询覆盖范围逐项核对。不能归因为“平台不支持普通 Mapper”或“拦截器未启用”。

## 部署清单

本次源码及页面文件共 28 个，另须同步 6 个运行目录 Mapper 副本，实际拷贝位置共 34 个。精确路径见 `assessment-organization-deployment-files.txt`：

- 新增公共权限解析服务和公共权限 Mapper，共 2 个文件。
- 五个模块各更新 AssessmentController、AssessmentService、AssessmentDAO、AssessmentMapper，共 20 个文件。
- 团委、党委各更新管理 JSP、局部 JS、局部 CSS，共 6 个文件。

目标环境用 JDK 8 将清单内 16 个 Java 源码一起编译到 `WEB-INF/classes`，保留编译生成的全部内部类（包括 `$Page`、`$Source`、`$1`）；六个 Mapper 按包路径同步到运行目录。只覆盖 Java 源码、只复制 Mapper 到 src 或只复制主 class 都不算完成部署。JSP/JS/CSS 按原路径复制，两个 JSP 静态版本号为 `20261104a`。本地已完成编译、Mapper 同步及 Tomcat／Redis 重启。

不需要建表、改字段、新配置文件或业务数据迁移。没有新增框架、CDN、全局脚本或全局样式；继续使用已有 jQuery/jqGrid/layer，样式限定在 `.pb-twshyk-page`、`.pb-dwshyk-page`。登录、eform、BPM 和平台共享依赖未改。内网需复制这六份页面资源；本次没有生成内网发布包。

## 本地测试结果

| 验证 | 结果 | 记录 |
| --- | --- | --- |
| 新组织权限、搜索、全树归属、隐藏标记及收集隔离 | 285 项通过；真实 DM/MyBatis/平台公式，事务回滚 | `logs/assessment-organization-permission-test.log` |
| 党委业务及 Provider/Writer 回归 | 1614 项通过 | `logs/organization-permission-DwshykAssessmentTest.log` |
| 一特色业务及事务回归 | 150 项通过 | `logs/organization-permission-YzbytsAssessmentTest.log` |
| 主题党日业务及收集回归 | 494 项通过 | `logs/organization-permission-ZtdrAssessmentTest.log` |
| 铸心共建业务及收集回归 | 141 项通过 | `logs/organization-permission-ZxgjAssessmentTest.log` |
| 统一月度收集边界 | 143 项通过 | `logs/organization-permission-MonthlyAssessmentRestartTest.log` |
| 统一月度 DEPT_ID 权限 | 77 项通过 | `logs/organization-permission-MonthlyAssessmentDataPermissionTest.log` |
| 实际浏览器、角色 HTTP、详情弹窗及窄屏 | 77 项通过，无浏览器错误 | `logs/assessment-organization-browser-report.json`、`logs/assessment-organization-browser-detail-report.json` |
| 管理员正常密码登录后的五页入口及两个搜索框 | 7 项通过 | `logs/assessment-organization-admin-entry.log` |
| Java 编译、两份 JS 语法、前端冲突检查 | 通过，6 个前端文件 0 警告 | 本地命令输出 |

权限测试脚本为 `scripts/AssessmentOrganizationPermissionTest.java`，与 `MonthlyAssessmentDataPermissionTest.java` 及三个已有 Fixture 类一起编译；复用的 HTTP 会话及用户资料辅助代码是测试替身，数据库、Mapper、业务服务及平台公式是真实实现。补充验证了父组织有权限而小组／纪委无展示权限时仍计入其真实会议，以及年份与名称组合。

角色浏览器验收复用已有 `JSBG_TEST_START`、`JSBG_TEST_RECEIVER`、`JSBG_TEST_OFFICE` 资料和真实角色，使用仅 loopback、随机令牌保护的临时会话入口，转发到实际页面和 Controller，没有模拟业务响应；这些角色会话未宣称经过密码登录。管理员另行正常密码登录验证入口。临时入口及令牌已删除，浏览器专用数据和授权已清理，原业务演示数据保留。

团委旧 `TwshykAssessmentTest` 的完整用例仍使用 2025/2026 页面年度，与本任务开始前已有“页面最早 2027 年”规则不符，因此本轮只修正它因新增可选参数而变化的 Controller 调用并编译，不将旧完整套件报告为通过。团委本次搜索／权限／分页由新专项和浏览器覆盖，已有起点由月度边界回归覆盖，未为旧测试改业务规则。

截图位于 `output/playwright/`，前缀为 `twshyk-organization-permission-`、`dwshyk-organization-permission-`，五页另有各自 `*-organization-permission-detail.png`。

## 2026-11-04 内网部署前补充核查

- 按清单显式编译全部 16 个 Java 源码，使用 JDK 8、source/target 1.8，输出到独立空目录；生成 23 个 class，逐个 SHA256 与已通过浏览器验收的运行 class 一致。六个源码 Mapper 与运行 Mapper 字节一致。记录：`logs/assessment-organization-intranet-readiness.json`。
- 实际拷贝清单补齐六个 `WebRoot/WEB-INF/classes/.../*Mapper.xml` 副本，共 34 个拷贝位置；其中源码/页面 28 个，运行 Mapper 副本 6 个。内网仍自行编译 Java，不复制本地 class。
- 新权限服务和 Mapper 无本地测试账号、测试组织 ID、回环地址或临时会话桥依赖；Mapper 位于平台既有扫描路径 `classpath*:avicit/**/dao/*Mapper.xml`。无需修改平台扫描配置。
- 部署顺序：备份并按清单同步文件 → 一起编译 16 个 Java 到运行 classes（含全部内部类）→ 核对六个运行 Mapper → 重启应用 → 在内网平台逐页登记方法、按内网真实组织 ID 分配角色公式 → 对受限账号验证列表、总数、可见详情、越权详情。现有环境若仍有旧业务 Mapper 的同页权限配置，也应核对是否与本次规则叠加；不要未经确认删除已有权限。
- 上述是本地兼容性及部署闭合检查，未在内网服务器执行。内网平台依赖版本及表结构是否与已验收环境一致，须由内网部署后的实机检查确认；本地通过不能记为内网验收通过。
