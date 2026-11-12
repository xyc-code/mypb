# 书记胜任力、党员发送阅知内网首次安装

日期：2026-11-12。两个模块的记忆均记录尚未同步内网，本次按首次安装交付；部署完成前不更新内网基线。

## 文件复制

先备份内网 PB 项目和相关数据库。停止内网 Tomcat，把包内 `按模块分开/书记胜任力/` 和 `按模块分开/党员发送阅知/` **各自的内容**复制到内网 PB 项目根目录，保留 `src`、`WebRoot`、`db`、`config`、`scripts` 等相对路径。

包内没有 `.class`、新 jar、环境配置、数据库导出、测试桥接 JSP、测试账号、测试授权或本地 Test1 演示成绩。已有的 JDK 8、平台 jar、POI、中文 PDF 字体库、DM、Redis 和 Tomcat 继续使用内网配置。

## 编译源码

在内网 PB 项目根目录打开 PowerShell。下列三个路径换成内网实际路径，不能照抄外网机器路径：

```powershell
$pbJdk = 'D:\实际JDK8目录'
$pbTomcat = 'D:\实际Tomcat目录'
Set-Location 'D:\实际PB项目目录'
$pbClasspath = "WebRoot/WEB-INF/classes;WebRoot/WEB-INF/lib/*;$pbTomcat/lib/servlet-api.jar"
$pbSources = Get-ChildItem src/avicit/pb/competency,src/avicit/pb/membernotice -Recurse -Filter *.java | Select-Object -ExpandProperty FullName
& "$pbJdk/bin/javac.exe" -encoding UTF-8 -cp $pbClasspath -d WebRoot/WEB-INF/classes $pbSources
if ($LASTEXITCODE -ne 0) { throw '模块源码编译失败，请停止部署并检查错误' }
```

确认两个权限 Mapper 位于运行目录：

- `WebRoot/WEB-INF/classes/avicit/pb/competency/dao/CompetencyPermissionMapper.xml`
- `WebRoot/WEB-INF/classes/avicit/pb/membernotice/dao/NoticePermissionMapper.xml`

包中已包含这两份 XML，且与 `src` 中同名文件一致。没有 DAO Java 接口遗漏：两个模块通过 JdbcTemplate 执行业务查询、通过 SqlSessionFactory 读取权限 Mapper，未声明独立 DAO Java 接口。

## 数据库和平台初始化

在同一个 PowerShell、PB 项目根目录执行。安装器支持 JDBC 地址、库账号参数，密码只通过临时环境变量输入，不修改项目配置或写进脚本。

```powershell
New-Item -ItemType Directory -Force temp/pb-module-install | Out-Null
& "$pbJdk/bin/javac.exe" -encoding UTF-8 -cp $pbClasspath -d temp/pb-module-install scripts/CompetencyInstall.java scripts/MemberNoticeInstall.java
if ($LASTEXITCODE -ne 0) { throw '安装器编译失败' }
$pbDbUrl = 'jdbc:dm://实际数据库地址:5236'
$pbDbUser = '实际业务库账号'
$pbDbSecret = Read-Host '内网业务库密码' -AsSecureString
$pbDbCredential = New-Object System.Management.Automation.PSCredential($pbDbUser, $pbDbSecret)
$env:PB_TEST_DB_PASSWORD = $pbDbCredential.GetNetworkCredential().Password
try {
    & "$pbJdk/bin/java.exe" '-Dfile.encoding=UTF-8' -cp "temp/pb-module-install;$pbClasspath" CompetencyInstall $pbDbUrl $pbDbUser
    if ($LASTEXITCODE -ne 0) { throw '书记胜任力初始化失败' }
    & "$pbJdk/bin/java.exe" '-Dfile.encoding=UTF-8' -cp "temp/pb-module-install;$pbClasspath" MemberNoticeInstall $pbDbUrl $pbDbUser
    if ($LASTEXITCODE -ne 0) { throw '党员发送阅知初始化失败' }
} finally {
    Remove-Item Env:/PB_TEST_DB_PASSWORD -ErrorAction SilentlyContinue
    $pbDbCredential = $null
    $pbDbSecret = $null
}
```

`PB_TEST_DB_PASSWORD` 是现有安装器的变量名；虽然含 TEST，本步骤必须输入内网目标业务库密码。地址和账号已显式传入，不使用安装器默认的本机数据库。

书记胜任力安装器创建两表、索引、存储元数据及 `SJCOMP_PERMISSION`，不创建菜单或真实角色授权。包内 `db/secretary_competency.sql` 和 `db/secretary_competency_metadata.sql` 是 SQL 参考/替代安装材料；采用上述安装器时，不再重复执行建表 SQL。

党员发送阅知安装器创建 `DYN_DYFSYZ`、存储元数据、普通表单 `DYFSYZ`、流程模型 `DYFSYZ_MODEL`、菜单 `DYFSYZ_MENU` 和权限方法 `DYFSYZ_PERMISSION`。父菜单要求目标系统已有“党员管理”，使用平台已有 APP_ID=1、ORG_ROOT 约定。若已有旧字段 `RECEIVER_ORG_ID`，安装器原地更名为 `PARTY_ID` 并同步元数据，保留原值。`db/party_member_notice.sql` 为表结构参考，单独执行它不能代替表单、菜单、流程及权限元数据安装。

安装器对本模块可重复执行；新建 DDL 可能立即提交，初始化失败时先检查已落库的表和错误原因，再修正后重跑。安装器不迁移外网业务数据，不给真实角色自动授予权限。

## 菜单、流程发布与重启

1. 初始化后启动/重启内网 Tomcat，按内网现有运维方式刷新 Redis 平台缓存。
2. 书记胜任力在内网平台手动挂菜单，地址为 `platform/avicit/pb/competency/manage`。外网已配置的菜单不随代码复制自动迁移。
3. 党员发送阅知在流程设计器打开安装器创建的 `DYFSYZ_MODEL`，核对流程 key `dyfsyz`，发布。安装器仅在不存在同 key 模型时创建，已有模型不会被覆盖。若平台已有同 key 的不同模型，先核对，不重复导入创建。
4. 流程源为 `config/bpm/DYFSYZ.xml`，设计器导入文件为 `DYFSYZ.jpdlx2`，配图为 `DYFSYZ.png`。确认流程为开始 → 拟稿 → 书记阅知 → 正常结束；自定义参与者 `avicit.pb.membernotice.NoticeActors`，回写监听 `avicit.pb.membernotice.NoticeWriteback` 仅挂正常结束 `end1` 的 start 事件。必须先编译源码、重启加载类，再发布流程。
5. 两模块沿用各自现有行权限行为：未给任何角色配置非空授权公式时默认可见；配置后按公式过滤，无匹配公式返回零行。需要配置真实角色公式时由内网平台办理，不迁外网测试公式，不新增本次业务限制。
6. 按平台既有菜单可见性设置分配需要的用户，重新登录；浏览器 Ctrl+F5 刷新资源。

## 内网验收

- 书记胜任力：正常登录后进入菜单，新建内网批次、刷新人员；五项成绩可暂存缺项，完整后生成综合分、个人画像；下载台账及个人/队伍 Word、PDF。嵌入门户应显示紧凑批次栏和三页切换。
- 党员发送阅知：两类模板可下载，手动发起为完整页面；用内网认可的测试党员核验导入、逐条勾选、批量结果和原生流程详情。书记应按最近上级（排除根节点）查找，无上级书记回退本组织；多人不唯一时逐条失败，不转副书记。
- 书记正常阅知后核对党员库：正式党员更新类别、转正日期和完整周年党龄，预备党员只更新类别；终止流程不回写。请在内网可回退的专用测试记录上验证。
- 页面接口应位于项目实际 context 下的 `platform/avicit/pb/competency/`、`platform/avicit/pb/membernotice/`，查询返回 JSON 的 `ok:true`，不应跳回登录页或出现 404/500。新增、保存、导入、发起、删除为 POST；查询和下载为 GET。

外网打包前检查：书记胜任力 34 项规则/导出、47 项真实 DM/HTTP/权限；阅知 35 项规则/POI、71 项真实 DM/BPM；当前 JSP/JS 页面请求和 JSON 响应核验通过。浏览器使用临时回环入口和独立测试身份转发至真实 Controller，未模拟模块响应；不把该检查当成内网真实用户菜单验收。专用流程、数据、缓存和临时入口已清理。

包内附文件清单、SHA-256、接口核验及覆盖率记录。源码已先提交推送 Git；具体提交号见包内发布信息。仅在用户明确确认内网同步完成后，才记录对应部署基线。
