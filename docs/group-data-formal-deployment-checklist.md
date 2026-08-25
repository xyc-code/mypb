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
- 空值、超长、非法码值、父级缺失、党员无组织写入拒绝明细；增量/部分/失败批次不得删除。
- 本机当前 DM8 尚未创建 FINEDB 正式表，真实数据同步、REST 返回字段和正式页面浏览器验收待内网/本地安装 schema 后执行。
