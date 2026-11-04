# 统一月度考核：按 DEPT_ID 配置行数据权限

2026-11-04，本地已完成配置、编译部署、Tomcat/Redis 重启及验证。页面入口为“考核收集”：`platform/avicit/pb/assessment/toManage`。

## 先部署代码

已有版本需要更新以下源码，并在目标环境用 JDK 8 编译到 `WEB-INF/classes`：

- `src/avicit/pb/assessment/controller/MonthlyAssessmentController.java`
- `src/avicit/pb/assessment/dao/MonthlyAssessmentDAO.java`
- `src/avicit/pb/assessment/service/MonthlyAssessmentService.java`
- 新增 `src/avicit/pb/assessment/service/MonthlyAssessmentDataPermission.java`

以下 Mapper 同步到 `WEB-INF/classes/avicit/pb/assessment/dao/`，然后重启应用：

- `src/avicit/pb/assessment/dao/MonthlyAssessmentMapper.xml`
- 新增 `src/avicit/pb/assessment/dao/MonthlyAssessmentPermissionMapper.xml`

本次不需要新增表、字段、配置文件或前端资源。已有联合组织的完整部门归属在 `PB_ASSESS_RESULT_DEPT`，因此权限配置选择该表的 `DEPT_ID`，不要选择成绩主表的单部门兼容列。

## 平台配置步骤

1. 打开“行数据权限维护”，在前台菜单树选择“考核收集”（内网按实际菜单名称选择对应入口）。
2. 添加方法，类型选择“普通模块”，按下表填写并保存。

| 配置项 | 值 |
| --- | --- |
| 表名称 | `PB_ASSESS_RESULT_DEPT` |
| 表说明 | 月度考核部门快照 |
| Mapper 名称 | `MonthlyAssessmentPermissionMapper.xml` |
| Mapper 说明 | 统一月度考核部门行权限 |
| 执行方法 | `selectVisibleResultIds` |
| 方法说明 | 按 DEPT_ID 过滤可见成绩 |

Mapper 通过平台选择器选择。当前本地平台实际返回上述文件名，方法选择器实际可发现 `avicit.pb.assessment.dao.MonthlyAssessmentPermissionMapper.selectVisibleResultIds`。如果目标版本返回含目录的 `file [...]` 资源名称，保留平台返回值；代码兼容文件名及 Windows/Linux 部署路径，不填写 Java namespace。

3. 选中刚建立的方法，在下方添加规则“本部门”：状态“有效”，规则类型“配置字段”，字段 `DEPT_ID`，运算符“等于”，值类型“登录人部门ID”。过滤条件 SQL 应为：

```sql
#{t}.DEPT_ID=#{loginDeptId}
```

不要自行给变量添加引号，平台负责替换。原 SQL 预览应为：

```sql
SELECT PB_ASSESS_RESULT_DEPT.RESULT_ID FROM PB_ASSESS_RESULT_DEPT
```

4. 打开“行数据权限分配”，选择需要限制的现有角色，再选择“考核收集”下的上述方法，勾选“本部门”规则并保存公式。若该规则编号为 `1`，单条公式为 `1`；以平台实际生成编号为准。
5. 使用该角色的账号重新登录，查询已收集的月份。需确认相关成绩已保存正确的部门快照；只配置规则不会生成部门归属或成绩。

如实际需要指定部门，可另建规则，字段仍为 `DEPT_ID`，运算符“等于”，值类型“输入值”，填写实际部门 ID。是否采用本部门、指定部门或组合规则由平台配置决定，代码不固定范围。

## 生效行为

- 列表、分页总数、板块/模块及部门筛选选项统一按角色规则过滤，直接调用 `results/options` 也执行相同过滤。
- 联合组织任一关联部门命中规则即可看到一条完整成绩，分页不重复；详情继续显示完整部门组、完整分值，不分摊。
- 部门选项来自可见成绩的完整部门快照，因此可见联合组织的另一个关联部门也会出现在选项中。切换该选项不能读出原本不可见的独立成绩。
- 配置为部门范围后，无部门快照的成绩不能命中该规则。没有分配公式的角色沿用平台原有“不附加行过滤”行为，不自动改为无权查看。
- 本次权限作用于结果页面查询；后台收集、重算及已有平衡积分卡接口不读取页面用户的角色范围。

## 本地已保存的示例

方法 ID 为 `MONTH_DEPT_LOCAL_METHOD`，登记在已有“考核收集”菜单下，仅配置到两个已有测试角色：

| 账号 | 角色 | 公式 | 本地规则 |
| --- | --- | --- | --- |
| `jsbg_test_start` | `JSBG_AWARD_START` | `1` | `DEPT_ID` 等于登录人部门 ID |
| `jsbg_test_receiver` | `JSBG_AWARD_RECEIVER` | `2` | `DEPT_ID` 等于另一个本地部门 ID，供不同范围验证 |

共保留 1 个方法、2 条规则、2 条角色公式。账号、原角色成员关系和密码均未修改。第二条是本地测试示例，不应照搬本地部门 ID 到内网。

临时 4 条成绩和 4 条部门快照已清理，临时浏览器会话入口已删除；已有业务成绩保留。正式部署时在目标平台按业务角色重新配置，不复制本地测试授权。

## 验证依据

| 检查 | 结果 | 记录 |
| --- | --- | --- |
| 真实 DM/MyBatis、平台角色公式引擎 | 77 项通过；临时事务回滚 | `logs/monthly-assessment-data-permission-test.log` |
| 团委起点及原查询回归 | 143 项通过；临时事务回滚 | `logs/monthly-assessment-row-permission-restart-regression.log` |
| 真实页面及 HTTP 控制器 | 32 项通过；2 个受限角色及 1 个无规则角色 | `logs/monthly-assessment-data-permission-browser-report.json` |
| 管理员正常登录后的 HTTP 检查 | 421 项通过（含临时成绩）；仅查询，无任务执行 | `logs/monthly-assessment-runtime-report.json` |

角色差异页面测试复用项目现有的 localhost 临时会话方式，使用已有测试账号的真实用户资料、角色及原生规则引擎，未模拟业务响应；这些账号没有可用的测试密码，因此没有声称它们经过密码登录。管理员账号另行通过正常登录完成 HTTP 验收，并在真实浏览器正常登录查看“行数据权限维护”和结果页。

清理后，管理员保持正常登录的浏览器再次查询 2026/10，确认原有 61 条成绩保留，临时成绩为 0。

截图：`output/playwright/monthly-permission-config.png`、`monthly-permission-A.png`、`monthly-permission-B.png`。权限和回归测试脚本分别为 `scripts/MonthlyAssessmentDataPermissionTest.java`、`scripts/MonthlyAssessmentRestartTest.java`。

## 本次权限增量交付边界

本补丁只加入 DEPT_ID 页面权限。月度 collect 和 findAllForBsc 保持发布父版本原文，不混入其他本地未发布的起点调整、工会收集修复或原因展示改动。如内网另有手工改动，先对比包内月度权限专用差异再合并，保留内网已有业务规则。
