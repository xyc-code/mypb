# Module Memory: secretary-competency

## Identity

- Module name: 书记胜任力
- Memory file: secretary-competency.md
- Status: local-verified（用户已挂菜单；已适配嵌入布局并优化按钮、弹窗和交互）
- Owner/requester: 当前用户，明确批准完整正式接入方案
- Last updated: 2026-11-11

## Business

- 三页保留认可原型：队伍总览、成绩录入、个人画像，亮蓝色、图标和彩色指标卡；操作在批次栏，不恢复顶部大标题。
- 书记取PARTY_ORGAN_MEMBER有效任职，关联PARTY_POST字典，排除副书记和纪委书记。人员＋PARTY_ID分开测评。
- 批次快照；刷新只补新增，不删历史、不覆盖任职信息/成绩。
- 五项最终成绩全部人工录入，0—100、最多两位小数，允许缺项暂存；0不等于缺项。只有五项齐全才生成综合分/等次/画像/报告并进入统计。
- 固定综合分理论30%＋业务40%＋面试30%，BigDecimal HALF_UP两位后按95/85定等。九维映射及三板块沿用原型。同分顺序固定。共性短板低于90分取均值最低前三。固定建议，不接外部AI，不作公开排名。
- 用户不允许擅自新增角色限制、数据范围、审批/锁定、必填条件、配置依赖。不接统一月度考核；菜单用户手动配。模块记忆和PARTY_ID行权限均已明确授权，无需再问。

## PB Low-Code Surface

- Forms/views/workflows: 自定义JSP和Spring MVC接口，不创建低代码流程。
- Menus: platform/avicit/pb/competency/manage，用户已手动挂载；2026-11-11反馈门户内重复侧栏，已做iframe嵌入布局适配。
- Permissions: SJCOMP_PERMISSION，DYN_SJ_COMP_SCORE，CompetencyPermissionMapper.xml，selectVisiblePartyIds。
- 无任何角色公式=>全可见；配置后当前用户无匹配=>零行。查询、保存、导入、刷新、模板、统计、报告统一范围；不加本人/部门/下级限制。
- Dictionaries: SYS_LOOKUP_V.PARTY_POST，职务编码来自现有平台，不硬编码猜测数字。
- Manual platform steps: 用户挂菜单，需要时按PARTY_ID配置角色授权公式；未给真实角色授权。

## Data

- Tables: DYN_SJ_COMP_BATCH，DYN_SJ_COMP_SCORE。
- Required audit fields checked: yes，两表规定九字段顺序、类型长度、同名中文注释和存储元数据齐全，CREATED_DEPT新增时写入。
- Unique: BATCH_ID/USER_ID/PARTY_ID；VERSION乐观并发。成绩只保存五项原始值，所有派生值后端统一计算。
- SQL/migration: db/secretary_competency.sql；db/secretary_competency_metadata.sql；Java幂等安装器scripts/CompetencyInstall.java。
- 工号沿用平台SYS_USER.LOGIN_NAME；导入隐藏人员ID/PARTY_ID/version优先；手工无ID按工号＋唯一组织名并核对姓名。组织名重复/未匹配/人员不符逐行失败。
- 导入逐行覆盖五项含空白，不自动加人；表格批量保存原子事务。版本过期提示刷新，输入保留。
- Test data: SJCOMP_IT_专用fixture，已清理专用用户缓存、数据库测试批次/成绩/任职/组织/用户/角色/公式和临时JSP，清理器逐表验证零残留。禁止将临时桥接JSP/测试角色复制内网。

## Files

- JSP/JS/CSS: WebRoot/avicit/pb/competency/CompetencyManage.jsp；WebRoot/static/pb-modern/competency/competency.js、competency.css，全部.pb-competency命名空间。
- Java: src/avicit/pb/competency/CompetencyController、Service、Rules、Permission、Excel、Report.java。
- Mapper: src/avicit/pb/competency/dao/CompetencyPermissionMapper.xml。
- Build: scripts/secretary-competency.ps1 Compile/Install/Test；JDK8编译至WebRoot/WEB-INF/classes/avicit/pb/competency，并复制mapper。
- Checks: CompetencyRulesTest.java、CompetencyLocalFixture.java、CompetencyRuntime.jsp.template、test-competency-runtime.py、competency-browser-check.js。
- Documentation: docs/secretary-competency.md。
- Properties/config touched: 无新增运行配置、jar、CDN或构建依赖。

## Pitfalls And Decisions

- 原生splicingSql递归进入组织投影内层，无法正确按外层PARTY_ID过滤；使用平台splicingSelectSql原生视图授权入口，可在尚无成绩记录时过滤名单。不能直接对成绩记录取授权ID再生成人员，否则新批次无法补人。
- POI3.9只在numeric单元格调用DateUtil。识别文本用DataFormatter保留前导零；成绩数字读原始值，不让显示格式把99.999四舍五入后悄悄导入。成绩列不接受日期。
- POI3.9的XWPFRun.addPicture在当前裁剪schemas下会留下空pic节点，需使用完整graphic XML和明确图片关系；XWPFTable缺tblGrid且无CTTblGrid类型，使用DOM在首行前插入grid。不可为此升级共享jar。
- 当前jar缺CTPageSz类型，不新增依赖；使用现有XWPF可用API生成Word，iText5与itext-asian生成中文PDF，Java2D生成雷达PNG，两种报告同一份后端Content。
- 翻页继续编辑需保持原始草稿version，不能以重读的version替换，避免覆盖并发数据。编辑批次元信息保留成绩草稿。
- 本地临时用户需加入平台用户缓存供原生ExpressionUtil解析，测试JSP只缓存SJCOMP_IT_身份，生产模块不改缓存/登录机制。
- Playwright临时身份桥接应使用route.continue，route.fetch对multipart中的二进制文件可能产生损坏。真实Python multipart上传已独立验证。

## Portal Layout Fix（2026-11-11）

- 用户截图显示平台左菜单旁仍有模块独立预览侧栏。复现时1166px iframe内侧栏占218px、全高800px，内容左偏218px。
- JSP在body开头判断window.self!==window.top，增加pb-competency-embedded类；不访问父页DOM，不改平台导航。
- 嵌入时原侧栏改为白底横向三个页签，隐藏品牌/重复面包屑，shell归零边距并占满容器；独立打开保留原样。CSS版本20261111-portal1。
- 只改CompetencyManage.jsp与模块CSS，仍为本地资源与.pb-competency命名空间，无新框架或共享依赖。
- 临时本机iframe容器加载实际JSP静态结构、实际JS/CSS，批次接口为空名单替身；1366/1024/768/375四种外层宽度、三个页面及独立模式共17项布局检查通过。此项是嵌入布局回归，不替代真实门户业务数据验收。
- 运行中的PB已能返回更新CSS，2文件前端冲突检查0警告。无需重编后端或重启。

## UI Polish And Test1 Demo（2026-11-11）

- 用户要求导入提示改小弹窗，细化按钮、所有弹窗和交互，同时给Test1批次书记补成绩；保持已有视觉方向。
- 导入确认与批次表单460px，结果580px、明细最多240px内滚动；统一图标、圆角、按钮层级、成功/失败计数和提示文案。空文件/全部失败不会误提示保存成功。
- 移除页面内原生confirm，放弃草稿改异步小弹窗；保留beforeunload离页提醒。支持ESC/遮罩关闭、焦点恢复/循环、背景inert；导入和表单保存处理中防重复并阻止误关闭。
- 保存/刷新/下载显示转圈与对应文案，无修改时保存/取消置灰；失败保留输入，PDF/Word格式选择在刷新后保留。成绩页底部保存栏sticky。
- 375px发现并修复grid隐式轨道把460px弹窗撑出视口的问题：遮罩显式minmax(0,1fr)，弹窗min-width:0。资源版本20261111-polish1。
- Test1唯一批次ID=75b23530-b734-41ea-b0ca-575481a29b08，15条记录原先五项均空。按用户明确授权补入75项演示成绩，所有记录完成；后端Rules计算均分88.27，胜任3/基本胜任9/不胜任3。
- 仅更新该批次NULL项，保留所有非空成绩（含0），带原VERSION条件和事务，更新审计信息；未动其他批次/任职/角色/公式。原始快照temp/competency-polish/test1-before.json，仅用于回退，不部署。该批次成绩是用户要求保留的演示数据，不是SJCOMP_IT_清理对象。
- 本次34项浏览器界面检查通过，使用真实JSP/JS/CSS与Test1数据库快照；保存失败、导入结果等用本机接口替身控制，不写真实Test1成绩。数据库提交后独立复查15条/缺项0，运行PB返回新JS/CSS。没有后端Java变更，无需重启。
- 更新原浏览器验收脚本以点击新的放弃确认按钮；3文件前端冲突检查0警告、JS语法和diff空白检查通过。临时界面检查服务器已停止。

## Word Tables And Batch Navigation（2026-11-11）

- 用户反馈队伍Word后两张表格太小、三个导航按钮应移到第二栏。只改报告Word格式与模块局部前端。
- 根因：原tblW虽写9000但type=auto，单元格无tcW，Microsoft Word将表缩至174pt。现固定A4、四侧约2cm页边距，正文/表格宽9640twips（482pt）；tblW=dxa、固定布局、grid与每个tcW一致。
- 两表字体10→12pt、行高至少560twips、上下内边距100twips、表头浅蓝/隔行底色、跨页重复表头、行不拆分。能力表维度列加宽，名单表党组织列加宽。使用DOM兼容项目裁剪schemas，无新增jar。PDF不变。
- 门户内将唯一.nav移动到批次卡片的.batch-toolbar，下半行左侧为三页切换、右侧为导入/导出/报告操作；隐藏原独立导航行。单独打开仍保留原侧栏。资源版本20261111-layout2。
- JDK8编译、34项既有规则与导出检查、规则生成个人/队伍docx schema均通过。实际Word对比表宽174→482pt，字号10→12pt；样例队伍仍3页。
- Tomcat＋Redis已重启。临时仅127.0.0.1随机令牌只读检查入口从数据库读当前Test1并调用运行中CompetencyReport生成docx，随后删除；未改登录/角色/批次/成绩。该报告schema通过、Word打开导出PDF通过；15条名单正常延续至第4页且重复表头，均分88.27保留。
- 浏览器42项布局/切页/弹窗检查通过，使用实际JSP/JS/CSS、Test1快照和只读接口替身。1440/1024/768/375宽度覆盖；3文件样式冲突0警告、JS语法/diff检查通过。临时UI服务器已停止。
- 需要浏览器Ctrl＋F5刷新后重新下载Word，旧已下载文件不会自动变更。

## Compact Batch Toolbar（2026-11-11）

- 用户要求批次栏更窄、按钮合理放一行。嵌入模式改为flex同排：左侧批次与管理，中间三个页签，右侧当前页操作；批次说明留在左侧下方小字。
- 减小卡片上下内边距、日期图标、页签与按钮尺寸，取消下半行分隔线。使用batch-toolbar的display:contents保留DOM/事件/焦点结构；独立模式不改。
- 1800/1440/1186三种内容宽度的三个页面均单排、高78px；1100px以下按空间换行。1024/768/375布局无横向溢出。浏览器27项检查通过，实际资源＋Test1快照及只读接口替身。
- 只改JSP的CSS版本和模块CSS，版本20261111-compact1；2文件前端冲突0警告，运行PB可获取新资源，无后端/数据改动、无需重启。临时验证服务器已停止。

## Verification

- Local URL: http://127.0.0.1:8080/pb/platform/avicit/pb/competency/manage，需平台正常登录。
- Rules/import/export: 34项通过，样例98.90、88.08、2/6/2。
- DM/HTTP/native permissions: 47项通过，覆盖无配置/匹配/不匹配、隐藏写入及导出、新批次范围和历史保留。
- Playwright: 15项完整流程通过，补验个人未选择时禁用报告下载（检查脚本合计16项），真实粘贴、缺项保存、错误保留、版本冲突、multipart部分成功弹窗、实际xlsx/pdf下载及375px三页无整体横向溢出。
- PDF个人1页、队伍3页，实际渲染检查中文与雷达；Word个人1页、队伍3页，实际Microsoft Word隐藏打开并导出PDF成功；两份docx（规则生成和HTTP下载）均通过OOXML schema校验。Excel用openpyxl重读隐藏列和数据。独立平台注册SQL执行两遍幂等验证通过。前端3文件冲突扫描0警告、两表九审计字段及元数据通过。
- Known gaps: 用户已手动挂菜单；自主浏览器未登录真实门户，嵌入布局使用本机容器回归。本地桥接/接口替身不替代真实用户门户验收；未变更平台登录机制。

## Intranet Handoff

- Package path: D:/pb-release/内网安装-书记胜任力及党员发送阅知-20261112-094750.zip（2026-11-12首次安装包；打包流程完成后交付）。
- Files to copy: 按模块分开/书记胜任力下的src Java、源/运行Mapper、JSP、JS/CSS、两份SQL及安装器；不交付.class，内网JDK8编译。
- SQL/platform config to migrate: 建表＋存储元数据和权限方法；不迁测试公式或测试数据。
- Files/config not to copy: temp、output、WebRoot/login/competency-test-*.jsp、SJCOMP_IT_数据。
- Intranet sync date: 未同步。
- Baseline update status: 未变更内网基线。

## Next Time

- Read first: 本记忆、docs/secretary-competency.md、pb-excel-import-guardrails.md。
- Likely change points: CompetencyRules评分/建议、CompetencyService批次/导入、局部前端文件。
- Do not touch without confirmation: 权重、等次、九维映射、额外权限/组织限制、审批锁定、月度考核接入、真实角色公式、菜单自动创建。

## 2026-11-12 首次内网交付

- 根据本记忆未同步状态及未有历史模块包，按首次完整安装交付，与党员发送阅知分中文目录；Git提交推送后从该提交取文件。
- 部署步骤见 docs/secretary-competency-member-notice-intranet.md；安装器显式传内网JDBC地址、账号，临时输入密码；菜单仍手动挂载，不迁外网演示数据或测试授权。
- 本次重跑34项规则/导出、47项真实DM/HTTP/权限检查，当前页面三页导航及JSON路由检查通过；使用独立测试身份临时回环转发，不替代内网正常登录菜单验收。
- 临时数据、身份缓存及桥接入口已清理。内网尚未同步，未更新部署基线。
