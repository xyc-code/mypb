# 书记胜任力模块

本模块使用 Spring MVC、JSP、原生 JavaScript、达梦数据库，以及项目原有 POI 3.9、iText 库。保留认可原型的队伍总览、成绩录入、个人画像及批次操作栏。前端不使用模拟数据、localStorage、CDN或额外构建依赖。

## 入口与菜单

- 菜单地址：`platform/avicit/pb/competency/manage`
- 本地完整地址：`http://127.0.0.1:8080/pb/platform/avicit/pb/competency/manage`
- JSP：`WebRoot/avicit/pb/competency/CompetencyManage.jsp`
- 菜单由用户手动配置，本次不插入菜单和真实角色授权。
- 登录平台后访问；退出登录时接口沿用平台登录拦截。

## 门户嵌入布局

入口地址不变。页面在iframe内将“队伍总览／成绩录入／个人画像”移入测评批次卡片下半行，随后优化为桌面紧凑同排：左侧批次和管理，中间页面切换、右侧当前页操作，窄屏自动换行；取消原独立导航行、侧栏及重复面包屑，内容占满平台右侧容器。单独打开时保留独立页面样式。不修改平台外层菜单或全局资源。

2026-11-11已通过本机iframe容器四种宽度的17项布局检查；加载实际页面结构和局部资源，空名单接口作为布局测试替身。该检查与前述真实数据库业务检查分开记录。更新涉及JSP与模块CSS，CSS版本为20261111-portal1；浏览器关闭模块标签后重进，或Ctrl＋F5刷新即可加载。

## Word 表格可读性（2026-11-11）

队伍报告两张表改为A4正文全宽：固定9640twips（482磅）、明确每列与单元格宽度、12磅文字、加大行高和内边距。能力维度列和党组织列按内容分配宽度，保留浅蓝表头及隔行底色，跨页重复表头、同一行不拆开。修复Word自动按内容收窄至174磅的问题。PDF导出保持原样。

已完成JDK8编译及本地Tomcat＋Redis重启。实际Word打开渲染确认：10条样例报告3页，Test1的15条名单报告4页，后续页有重复表头、文字未缺失。旧下载文件不会更新，需重新导出。前端CSS当前版本20261111-compact1；桌面批次栏高度约78px，三页操作同排，窄屏自动换行。

## 按钮与弹窗细节（2026-11-11）

继续使用原生JSP／JS和本地资源，样式限定在.pb-competency。导入确认、放弃草稿确认及批次表单使用紧凑弹窗；结果展示成功/失败计数及逐行原因，长列表在窗内滚动。支持键盘焦点循环、ESC关闭和关闭后焦点恢复；导入或保存处理中显示加载反馈并防重复操作。保存失败保留输入，无修改时保存/取消按钮置灰；报告格式选择在数据刷新后保留。

本次34项界面交互检查使用实际页面资源、Test1数据库快照及受控接口替身，另独立确认运行中的PB提供新资源。没有改后端Java或共享依赖，不需要重启；浏览器Ctrl＋F5加载20261111-polish1版本即可。

按用户要求，Test1批次15条测评记录已补入75项演示成绩。仅补空白项、保留非空值，均分88.27、等次3／9／3；提交后复查缺项为0。该演示批次保留供看效果，不属于自动清理的专用验收数据。修改前快照仅存在本地temp/competency-polish/test1-before.json，不作为部署文件。

## 业务口径

1. 有效任职来自 `PARTY_ORGAN_MEMBER`，`NVL(VALID_FLAG,'1')='1'`；通过 `SYS_LOOKUP_V` 的 `PARTY_POST` 职务名称识别书记，包括支部、党委、党总支字典中使用的全称和简称，不按包含“书记”模糊匹配，排除副书记、纪委书记。
2. 每条记录以批次、`USER_ID`、`PARTY_ID` 唯一。兼职在各党组织分别测评；记录保留当次姓名、工号、组织和职务快照。
3. 新建批次生成当前可见名单。刷新人员只补入当前有效新任职，不更新已有快照，不删除原记录，不覆盖成绩。
4. 五项最终百分制成绩手工录入，范围0—100、最多两位小数。空白为缺项，0为有效分数；允许暂存。只有五项齐全才生成综合分、等次、画像和正式报告。
5. 综合分＝理论×30%＋业务×40%＋面试×30%，BigDecimal十进制运算，四舍五入保留两位后定等：≥95胜任，≥85且＜95基本胜任，＜85不胜任。
6. 九维顺序为懂政策、懂党建、懂理论、会思想工作、会解决实际问题、会带队伍、政治过硬、本领过硬、作风过硬，分别映射理论、业务、理论、面试、业务、特色活动、满意度、业务、满意度。每连续三维组成一个板块并取均值。
7. 队伍统计仅纳入完整记录，兼职记录分别计入；区分去重人数、测评记录数和完成数。无完整成绩时为空态。个人最高三项、最低项同分时使用九维既定顺序。共性短板按低于90分的维度均值升序取前三；建议由固定模板产生，不调用外部AI，不作公开个人排名。
8. 成绩随时修改，当前批次实时重算；不同批次相互独立。无提交、审批、锁定、权重配置、统一月度考核接入。

## 安装和编译

两张业务表为 `DYN_SJ_COMP_BATCH`、`DYN_SJ_COMP_SCORE`，均按顺序包含九项审计字段：`ID`、`CREATED_BY`、`CREATION_DATE`、`LAST_UPDATED_BY`、`LAST_UPDATE_DATE`、`LAST_UPDATE_IP`、`VERSION`、`ORG_IDENTITY`、`CREATED_DEPT`。字段中文名与英文名一致，创建部门只在新增时写入。

首次安装可在目标库依次执行：

1. `db/secretary_competency.sql`：建表、唯一性、分数范围、索引和字段注释。只在两张表尚不存在时执行建表。
2. `db/secretary_competency_metadata.sql`：幂等注册 `DB_TABLE`、`DB_TABLE_COL`、`SYS_DATA_PERMISSIONS_METHOD`，不创建角色公式和菜单。

也可使用幂等安装器，在当前PowerShell会话通过环境变量 `PB_TEST_DB_PASSWORD` 提供连接密码后执行：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/secretary-competency.ps1 -Action Install
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/secretary-competency.ps1 -Action Compile
```

安装器默认连接本机5236的DJ库，可直接运行 `CompetencyInstall` 并传入 JDBC URL、用户名。密码不写入源码和本说明。

Compile使用现有JDK8及项目jar，将六个Java类编译进 `WebRoot/WEB-INF/classes/avicit/pb/competency/`，并复制 `dao/CompetencyPermissionMapper.xml`。编译后重启本地Tomcat和Redis；内网部署沿用平台现有的启动和数据源设置，无新增配置文件。

## 行数据权限

注册方法：`SJCOMP_PERMISSION`，表 `DYN_SJ_COMP_SCORE`，mapper `CompetencyPermissionMapper.xml`，方法 `selectVisiblePartyIds`。在平台行数据权限中对 `PARTY_ID` 设置规则并给相应角色选择公式。示例规则条件为 `#{t}.PARTY_ID='实际党组织ID'`，或平台已有的组织集合表达式；本次不替真实角色配置。

尚未给任何角色配置非空公式时全部可见；配置后按当前用户角色解析，没有匹配公式返回零行。列表、详情、保存、导入、汇总、人员刷新、模板、台账和报告共用同一个可见党组织查询，不附加本人、部门或下级组织范围。

原生 `splicingSql` 会递归进入子查询，不适用于新批次的组织投影；模块使用平台原生 `splicingSelectSql`，将同一公式作用于外层 `PARTY_ID`。投影来自党组织表和历史成绩的PARTY_ID并集，因此还没有成绩记录时也能正确生成允许加入的名单，组织后续被删除也不会令已有历史快照消失。规则应针对已确认的 `PARTY_ID` 配置。

## 导入、粘贴和导出

- 模板下载当前批次可见名单，隐藏人员ID、`PARTY_ID`、版本列，五项成绩默认空白；所有识别文本保留前导零。
- 优先使用人员ID＋`PARTY_ID`定位。两列均为空时，按平台工号（现有平台使用 `SYS_USER.LOGIN_NAME`）＋唯一党组织名称匹配，并核对姓名；不猜测重复组织、缺失组织或人员不符。
- 导入前弹出覆盖提示。每行独立事务，成功行覆盖五项成绩，包括空白清空；同文件后续重复组合报错，弹窗显示成功数、失败数、Excel行号及原因。识别失败不创建额外名单。
- 模板版本过期逐行失败；手工文件无版本时，以本次导入读取到的版本校验并发。表格保存为一个事务，任一冲突整批回滚并保留未保存输入。
- 表格支持从任意成绩单元格粘贴连续Excel区域；超出本页或五个成绩列时提示调整区域。翻页和切换内部页面保留草稿，切换批次或取消修改时提示放弃草稿。
- 正式分数、等次、板块、建议由后端生成。未保存的行显示“待保存”，不在前端重新计算正式结果。
- 台账为真实 `.xlsx`；报告为真实 `.docx` / `.pdf`，包含中文、得分、雷达图和建议。个人报告只允许完整的当前批次记录；队伍报告使用当前批次可见完整记录，另说明未完成数量。

## 接口

统一前缀 `platform/avicit/pb/competency/`，JSON返回 `ok`，错误含明确原因；下载失败返回JSON错误，不产生伪文件。

| 方法 | 路径 | 主要参数 |
|---|---|---|
| GET | `batches` | 无 |
| POST | `batch/save` | `id`（新增为空）、`name`、`year`、`date`、`version`（修改） |
| POST | `refresh` | `batchId` |
| GET | `overview` | `batchId` |
| GET | `scores` | `batchId`、`keyword`、`level`、`page`、`size` |
| GET | `detail` | 成绩记录 `id` |
| POST | `scores/save` | `batchId`、`rows` JSON，包含id、version和五个成绩字段 |
| GET | `template` / `ledger` | `batchId` |
| POST | `import` | multipart `batchId`、`file` |
| GET | `report` | `batchId`、`format=docx/pdf`，个人另传成绩记录 `id` |

## 本地验收

可重复运行规则和文件生成检查：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/secretary-competency.ps1 -Action Test
```

真实数据库测试由 `CompetencyLocalFixture.java`、`CompetencyRuntime.jsp.template`、`test-competency-runtime.py` 组成，仅使用 `SJCOMP_IT_` 专用用户、角色、任职和批次。临时JSP仅接受本机随机令牌，测试结束必须删除；不部署到内网。脚本默认清理专用身份缓存并删除JSP，`--prepare`仅用于紧接着进行浏览器验收，完成后运行 `--cleanup`，并运行 `CompetencyLocalFixture cleanup` 清理数据库。

验收覆盖：有效书记和反例、兼职、只增刷新、历史快照、批次隔离、0/空白、85/95边界、舍入、样例98.90/88.08/2-6-2、原生角色权限的三种状态、越权详情/保存/导入/导出、覆盖导入、重复组合、匹配失败、部分成功、版本冲突及事务回滚。

浏览器使用 `competency-browser-check.js` 检查真实请求、粘贴、缺项保存、失败保留、并发冲突、multipart导入弹窗、实际下载以及375px三个页面。为使用隔离测试身份，请求通过临时桥接JSP进入原控制器；转发使用 `route.continue` 保留原始上传二进制，不能使用会改变上传字节的 `route.fetch`。不替换生产登录机制。

截图放在 `output/playwright/competency/`；导出检查文件在 `temp/competency-tests/`。正式菜单尚需用户挂载，真实登录后的门户菜单嵌入验收留待挂载后进行；本次未把隔离身份桥接验证表述为真实门户验收。测试桥接、临时文件和测试身份不属于交付运行依赖。

## 本次验证结果（2026-11-11）

- JDK8编译成功并已重启Tomcat＋Redis；34项规则、导入和文件生成检查通过。
- 47项真实达梦、HTTP和平台原生行权限检查通过；样例个人98.90、队伍88.08、等次2／6／2。
- Playwright 15项完整操作流程通过，另已补验无人员选择时禁用个人报告下载；检查脚本现包含16项。375px三个页面无整页横向溢出。
- 规则生成与真实接口下载的Word／PDF／Excel内容检查通过；两套Word均通过OOXML结构校验，实际Microsoft Word可打开并导出PDF，个人1页、队伍3页。PDF中文、图表、得分均已检查。
- 平台元数据SQL连续执行两遍幂等验证通过；两表九审计字段、业务字段元数据、五项成绩小数精度均已检查。前端3文件冲突检查0警告。
- 已删除本次专用测试数据、测试身份缓存、临时桥接JSP及令牌状态文件；清理器逐表确认零残留。截图和文件验证产物仅保存在output／temp，不作为部署依赖。
- 真实门户菜单按约定由用户手动挂载，挂载后还需从正常登录的门户菜单进入核验；当前代码、数据库和隔离身份页面联调已完成。

## 交付范围

运行文件为 `src/avicit/pb/competency/`、对应编译classes/mapper、`CompetencyManage.jsp`、`static/pb-modern/competency/`；数据库脚本、安装/编译脚本及本说明一并交付。CSS全部限定在 `.pb-competency`；不改平台登录、eform、BPM、全局样式或共享前端依赖。本次仅完成本地接入，内网补丁包另行安排。

## 2026-11-12 内网首次安装

两个模块按中文目录分别交付，部署流程见 [内网首次安装说明](secretary-competency-member-notice-intranet.md)。包内不带.class；内网使用JDK8编译，初始化数据库/平台元数据后重启，并发布阅知流程。未迁移外网测试或演示数据；内网部署基线尚未更新。
