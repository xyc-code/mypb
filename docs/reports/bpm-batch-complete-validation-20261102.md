# 流程批量办理本地验收（2026-11-02）

## 范围和结论

JDK 8、Tomcat 7.0.109、达梦 DM8、Redis、PB 6.3.4.3；使用原生 jQuery、jqGrid、layer 和真实批量接口。完成 24 项断言，包括重复验证按钮挂载；流程状态来自数据库查询，不依赖成功弹窗。独立验收页与正式视图使用相同组件，未直接访问内网具体页面。

## 已复现并修复

1. 首次公开包的 JS 丢失 avicAjax 接收者，报 `this._ is not a function`，未发请求。隔离回归使用项目真实 Ajax 封装证明旧版失败、当前版正常 POST。
2. Controller 多写 `/platform`，正常登录请求 HTTP 404；改为 `/pb/bpm/batchComplete` 后，外部 `POST /pb/platform/pb/bpm/batchComplete/operation` 正常命中。
3. 部分成功后页面不刷新；现在后台 `completed > 0` 时刷新列表，移除已经处理的记录。
4. 累计补丁同时携带已有的多 BLOB XML 读取修复，避免旧公开包或仅覆盖某次补丁导致遗漏。

## 真实流程结果

| 场景 | 接口与数据库预期 / 实测结果 |
| --- | --- |
| 浏览器单条 | success、completed=1；task4 已完成，实例 ended、END_ 有值、end1，无有效待办，页面移除该行 |
| 浏览器两条 | success、completed=2；两实例均 ended |
| XML + PNG BLOB | definitionBlobCount=2；正确读取 XML 并办理 |
| 唯一出口到 task5 | success、completed=1；实例 active，真实下一待办 task5 |
| 混选非 task4 | failure；两条前后状态相同 |
| 多出口 / 无出口 | failure；对应实例前后状态相同 |
| 其他用户待办 | failure；实例前后状态相同 |
| 已完成记录重试 | failure；实例前后状态相同 |
| 空选 | API 返回业务错误；页面空选不发 POST |
| 重复 ID | success、completed=1；只执行一次 |
| 真实引擎部分失败 | 第一条结束，第二条由本地故障监听器抛异常并回滚，第三条未执行；failure、completed=1；列表刷新移除第一条 |
| 路由 / 会话 / 浏览器 | 既有匿名过滤有效；浏览器业务请求为正常单前缀 POST、HTTP 200 JSON；无页面脚本异常 |
| 清理 | 删除测试实例及部署后查询数据库，剩余测试实例、部署均为 0；finally 删除临时 JSP |

## 复验和交付证据

- `scripts/test-bpm-batch-ajax.cjs`：旧公开包回归。
- `scripts/test-bpm-batch-browser.cjs`：真实浏览器与 BPM、数据库交叉验收；仅本地使用。
- 运行前按部署说明编译生产两个 Java，并编译本地故障监听器 `scripts/BpmBatchFixtureFailure.java`，重启 Tomcat/Redis。验收完成后删除该监听器 class。
- `output/bpm-batch-complete/runtime-results.json`：逐条前后状态、返回值、请求路径、源文件 SHA256、清理结果。
- 交付目录 `D:\pb-release\内网补丁-BPM批量办理累计修复-20261102` 保存最终从包内源码编译、重启后产生的复验结果，以及包内 SHA256 和覆盖率报告；以该目录最终报告为交付门槛。

不新增业务权限、组织范围、SQL 或配置依赖。内网 JDK、PB 依赖版本、实际部署目录、目标视图引用及实际流程定义需按部署说明核对；本地通过不等于已经在内网验收。多出口流程仍按原规则拒绝，不擅自选择分支或强制结束。
