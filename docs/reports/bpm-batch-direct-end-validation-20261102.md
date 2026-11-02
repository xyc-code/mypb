# task4 分支直接结束验收

用户提供内网流程图：task4 分别连“基层团组织书记阅知”与“结束”，并明确要求“直接结束”。原实现只允许唯一出口，因而返回空 outcome；这不是本次截图中的数据库查询失败。

本次仅调整多出口选择：读取当前实例定义，找出 transition 的 `to` 对应 `<end>` 节点的唯一连线，传入既有 completeTask。单出口保留原有行为；多个直接结束出口或无法确定结束线时保留预检拒绝。不新增权限、配置、SQL 或流程定义修改。

## 验证方法

- `BpmBatchOutcomeTest.java` 先在旧实现复现：task4 有阅知和结束两线时，期望 finish，实际空字符串。修复后检查 6 个解析场景，其中刻意用指向 task5 却名为“to end1”的线，证明不会按显示名误判；结束节点使用 done，不依赖固定 end1。
- 真实 BPM 浏览器脚本增加 branchend 定义：task4 → 阅知 task5 / 结束 finishApproved；直接结束线名 approved，阅知线名 to end1。
- 单条和两条浏览器选择，核对 success、completed 数量、BPM_HIST_PROCINST 的 ended / END_ / ENDACTIVITY_=finishApproved，以及历史 task4 OUTCOME_=approved、没有任何 task5 历史记录、无有效待办、页面移除成功行。
- 验证两条直接结束线、没有直接结束线的多分支、空选、混选、他人待办、无出口、重复、重试、部分失败数量与刷新、多 BLOB，以及既有单出口到 task5。
- 从交付候选源码编译、重启 Tomcat/Redis，再运行完整浏览器验收；具体结果和源文件 SHA256 由交付目录中的 runtime-results.json 记录。

测试仅操作本地独立流程与既有本地测试账号，数据库查询确认清理后实例/部署为 0；测试监听器与临时 JSP 不交付内网。内网实际 XML 未提供，测试结构根据截图重建，不能声称已经直接验证内网实例。旧验收报告中的“全部多出口拒绝”为历史规则，由本次用户确认取代。
