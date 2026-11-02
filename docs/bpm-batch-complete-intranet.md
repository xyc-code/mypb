# BPM task4 批量办理内网累计补丁（2026-11-02）

## 本次修复

- 旧公开包仍停留在首次试包，本累计补丁包含其后的 Ajax、流程定义多 BLOB 读取修复。
- 修正 Controller 重复的 `platform` 前缀。浏览器请求保持 `POST <应用上下文>/platform/pb/bpm/batchComplete/operation`，不能改成 `platform/platform/...`。Controller 注解为 `/pb/bpm/batchComplete`，外层 `/platform` 由 Servlet 映射提供。
- 部分记录已办理、后续记录失败时，保留后台的真实完成数量，并刷新列表，移除已处理待办。

## 覆盖与编译

本包用于已经安装过该功能、但无法确认叠加到哪个补丁的内网环境。直接按包内相对路径覆盖两个 Java 源文件、一个 JS 和本文档，无须依次安装旧包。两个 Java 文件均需编译：旧 Controller 本身也有路由问题，只覆盖 Service 无法修复。

在内网 PB 项目根目录，使用现有 JDK 8 编译（`javac` 应指向内网 JDK 8）：

```powershell
javac -encoding UTF-8 -source 1.8 -target 1.8 -cp 'WebRoot/WEB-INF/classes;WebRoot/WEB-INF/lib/*' -d WebRoot/WEB-INF/classes src/avicit/pb/bpmbatchcomplete/controller/BpmBatchCompleteController.java src/avicit/pb/bpmbatchcomplete/service/BpmBatchCompleteService.java
```

确认退出码为 0，再重启实际运行该项目的 Tomcat。检查编译输出进入实际部署的 `WEB-INF/classes`，不能仅覆盖源码。内网项目若使用 IDE 编译，也必须包含 Controller 和 Service 两个文件。

保留目标视图现有的 `gridId`、`toolbarId`。JS 引用版本改为 `v=20261102`，清除旧静态资源缓存后刷新。若之前手工改过 `options.url`，恢复为相对应用根目录的 `platform/pb/bpm/batchComplete/operation`，不要添加第二层 `platform`。

本包不包含 `.class`、JAR、数据库连接配置、测试用户、测试 JSP、测试流程或其他模块代码；没有新增 SQL、菜单、角色或配置文件迁移步骤。

## 适配范围

后端接口适配使用 BPM 的流程。它只接受当前用户仍在 `task4` 的有效待办，并从对应流程定义读取 `task4` 的唯一下一条 transition，因此不把 `task4` 固定当作结束节点。

如果某个流程的 `task4` 有多个出口，接口会整批拒绝，要求保留人工选择分支；这类流程不能安全地自动批量办理。

## 视图接入

在目标低代码视图的自定义 JS 中加入：

```html
<script src="static/pb-modern/bpm-batch-complete/bpm-batch-complete.js?v=20261102"></script>
<script>
$(function () {
  PbBpmBatchComplete.attach({
    gridId: '目标视图的 jqGrid ID',
    toolbarId: '目标视图的 toolbar ID'
  });
});
</script>
```

当前本地“固定资产领用”视图的表格 ID 是 `tablef1f0c65863e3da4379c91ae7e130a6a58e75`，toolbar ID 是 `tableToolbartablef1f0c65863e3da4379c91ae7e130a6a58e75`。

当前本地固定资产流程的 `task4` 有 `to task5`、`to task6`、`to end1` 三个出口，属于多分支流程；按安全规则会整批拒绝，不会替用户猜选分支。要办理该流程，需要先明确业务上固定使用哪个出口，再单独增加该流程的规则。

## 本地实测

2026-11-02 使用 JDK 8、Tomcat 7.0.109、达梦 DM8 和现有 PB 6.3.4.3 依赖验证。测试页使用项目原生 jQuery 1.9.1、jqGrid 5.2.0、layer、实际批量 JS，通过本地测试账号会话访问完整过滤器链及真实 Controller，未拦截或模拟业务接口响应。

- 单条与两条浏览器勾选办理成功，逐条核对 `BPM_HIST_TASK_V` 的完成标记、结束时间、出口，以及 `BPM_HIST_PROCINST` 的 `ended`、`END_` 和 `end1`。
- 流程定义同时包含 XML 与 PNG BLOB，正确读取 XML 后办理。
- 唯一出口指向 `task5` 时，流程保留 `active`，真实待办转入 `task5`。
- 空选、混入非 task4、多出口、无出口、其他用户待办、已办理重试均按原规则拒绝，并核对没有改变相应实例。
- 重复 ID 只办理一次。第三组真实测试中，第一条成功、第二条由测试监听器抛错、第三条未执行；接口返回 `completed=1`，数据库状态一致，页面刷新移除第一条。
- 浏览器无 JS 页面异常，所有批量请求均为正常单前缀地址上的 POST、HTTP 200 JSON。

复验入口：`node scripts/test-bpm-batch-ajax.cjs` 和 `node scripts/test-bpm-batch-browser.cjs`。后者仅供本地，先编译 `scripts/BpmBatchFixtureFailure.java` 到本地运行 classes；使用既有本地测试账号及 `JSBG_AWARD` 表单元数据，不是本功能的内网依赖。测试程序在 finally 中删除临时 JSP、实例和流程定义。原始数据库前后状态及请求记录保存在 `output/bpm-batch-complete/runtime-results.json`。

内网实际服务器及目标低代码视图未直接访问。实测使用与正式视图相同组件的独立验收页；不要将它描述为已经验证了内网页面或所有流程定义。需要人工选择下一办理人的流程仍须遵循原流程配置，本接口不替用户指定办理人。

## 内网复核

1. 按上文覆盖、编译两个 Java 源文件并重启 Tomcat，刷新 JS 缓存。
2. 已有按钮的视图保留原挂载；首次接入其他视图时使用上文示例及该视图真实 ID。
3. 登录后选中本人的有效 task4 记录点击“批量办理”，核对网络请求的路径、POST 方法及 JSON 返回。
4. 混选非 `task4` 行时，应整批拒绝且不办理任何一条。
5. 全部为 `task4` 时，流程按自身定义的唯一下一节点流转。

本补丁不修改 BPM 表、业务表、菜单、角色权限或流程定义。
