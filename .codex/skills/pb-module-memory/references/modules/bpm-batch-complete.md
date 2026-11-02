# BPM task4 批量办理

- 状态：local-verified；最后更新：2026-11-02。用户要求先真实本地实测，再提供可直接覆盖的内网累计补丁。
- 业务：仅当前用户有效 task4 待办，沿当前定义的唯一出口办理；多出口、无出口和混选非 task4 保持原有整批预检拒绝。不是强制结束流程。不得扩大权限、组织范围、必填和部署配置要求。
- 入口：POST `platform/pb/bpm/batchComplete/operation`，参数 `ids`；响应沿用 `flag`、`completed`、`errorMsg`。
- 关键文件：`src/avicit/pb/bpmbatchcomplete/{controller/BpmBatchCompleteController.java,service/BpmBatchCompleteService.java}`、`WebRoot/static/pb-modern/bpm-batch-complete/bpm-batch-complete.js`。交付步骤见 `docs/bpm-batch-complete-intranet.md`。
- 真实问题：首次公开包 0201780 中 JS 抽取 avicAjax.ajax 后丢失 this；后续 Ajax 补丁包仍旧于仓库直接 $.ajax 版本。Service c078c38 已修复只读第一个 BLOB；原 Controller 多写 `/platform`，导致已登录正常路径 404、双前缀才命中。2026-11-02 改注解为 `/pb/bpm/batchComplete`，外部地址不变。
- 本次前端修复：部分成功后也 reloadGrid，避免成功记录残留待办列表。后台已逐条事务处理，真实失败案例完成 1 条、第二条回滚、第三条未办理；不新增整批事务。
- 数据：只读既有 BPM 视图/定义，再调用平台 completeTask；不新增表、SQL、角色、菜单或配置依赖。
- 验收：JDK 8 编译，Tomcat 7/Redis 重启；原生 jqGrid/layer 浏览器真实接口与 DM8 历史状态交叉验证单条、多条、唯一后续节点、多 BLOB、空选、混选、多出口、无出口、其他用户、重复 ID、重试、部分失败刷新。
- 回归脚本：`scripts/test-bpm-batch-ajax.cjs`（旧代码红、新代码绿）、`scripts/test-bpm-batch-browser.cjs`；JSP 模板与故障监听器仅供本地验收，不发内网。临时 JSP 和测试实例/定义必须清理。
- 证据：`output/bpm-batch-complete/runtime-results.json`，含逐条前后数据库状态和浏览器真实路由；独立验收页使用正式视图同组件，不等于验证过内网具体视图。
- 交付：从最早试包 0201780 起生成本模块累计最小补丁，包含 Controller、Service、JS、部署文档 4 个文件；对已部署版本未知的环境一次覆盖。先提交推送，再打包、覆盖率和哈希校验，再从候选源码编译重启复验。公开包入口必须同步更新。
- 内网同步尚未确认，不更新部署基线。`.class`、JAR、环境配置、测试数据和无关改动不得入包。
- 本次交付目录：`D:\pb-release\内网补丁-BPM批量办理累计修复-20261102`；公开入口 `D:\pb-release\流程通用批量办结（公开）.zip`。最终从包内源码复验结果、覆盖率及哈希在交付目录留档，全部通过后才能更新公开入口。验收说明见 `docs/reports/bpm-batch-complete-validation-20261102.md`。
