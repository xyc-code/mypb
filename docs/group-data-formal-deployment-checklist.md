# 集团正式表内网交付清单

## Fresh

1. 备份并确认 `FINEDB` schema 权限，执行 `db/group_data_sync.sql`。
2. 校验两张正式表字段、长度、主键、NOT NULL 与截图一致。
3. 编译 `GroupFormalDataSyncService`、`GroupDataSyncController`、`GroupDataSyncJob` 到 `WebRoot/WEB-INF/classes`。
4. 配置菜单 `platform/avicit/pb/groupsync/groupSyncController/toManage`、Quartz `groupDataSyncJob`（`0 0 2 * * ?`）和网关 IP 白名单。

## Upgrade

1. 停止调度，按 `db/group_data_sync_upgrade.sql` 备份旧 DYN 表并核对数据。
2. 执行基础正式表/元数据 SQL，完成全量同步和验收后再人工重命名旧 DYN 业务表。
3. 回滚时停止正式同步、恢复备份表名称；正式表保留不删除。

## Acceptance

- `GET api/rest/health` 返回 `flag=success`。
- `GET api/rest/page` 只返回正式表字段，`pageSize>200` 被限制为 200，非法 type/date 返回可读错误。
- `POST api/rest/sync` 仅管理员可调用；验证组织先于党员、重复同步 UID 不变、员工编码前导零不丢失。
- 原“同步集团数据”维护面保持不变：查询/分页、查看、新增、编辑、单条/批量物理删除、组织 ZIP 导入导出、手工同步、批次日志/详情均保留；这些入口统一由正式表适配层提供。
- 空值、超长、非法码值、父级缺失、党员无组织写入拒绝明细；增量/部分/失败批次不得删除。
- 本机 DM8 已创建并核对 FINEDB 两张正式表及三张同步元数据表；已用 `db/group_data_sync_fixture.sql` 验证组织/党员同步、前导零、重复同步和未来时间增量不删除。
- 已用 `db/group_data_sync_negative_fixture.sql` 验证超长、空值、父级缺失、党员无组织四类拒绝，清理脚本执行后源数据恢复。
- 本机未登录 REST 验收脚本返回 302 登录页；必须在内网网关/Shiro 配置白名单或使用登录服务账号后，重新运行 `scripts/check-group-formal-acceptance.ps1`，四项均须 200 JSON 才算通过。
- 本轮 Playwright 登录态已验证页面、分页、批次、同步确认和 390x844 截图；Tomcat 最终重启后需重新登录再执行同样步骤。
- 最新本地重启后：Tomcat PID `5020`，DM8 `5236`、Redis `6479` 均监听，`/pb/login` 返回 200；`admin/cape` 页面入口返回 200，标题为“同步集团数据”，原 CRUD/导入导出控件可见。认证 REST list/logs/health/page 返回 200 JSON，formal ZIP export 返回 200 `application/zip`，回传 `/api/import` 返回 200、`imported=1`。
- 最新管理员回归：新增 `00009992`、编辑姓名为“管理员编辑测试”、单条删除均 PASS；批量新增 `00009993/00009994` 后批删返回 `deleted=2`，关键字查询剩余 `0`。正式表保存会合并未编辑字段并按 DATE/INTEGER/DATETIME 绑定，避免页面字符串导致 DM8 失败。
- 组织 CRUD 也已在同一管理员会话验证：新增 `ORGCRUD...0001`、编辑简称“组织编辑测试”、单条删除均 PASS，测试行已清理。
