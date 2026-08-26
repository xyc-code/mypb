# 同步集团数据：内网前置与验收 Runbook

本文是当前执行对话的验收清单。内网管理员完成每一步后，把命令输出、时间、操作者和数据库批次号回填到对应 `[回填]` 项。

## 1. 数据库前置

### Fresh

1. 确认 DM8 中存在并可写 `FINEDB` schema，且 PB 账号具备对两张正式表的 `SELECT/INSERT/UPDATE` 权限。
2. 在目标库执行 `db/group_data_sync.sql`。
3. 核对：

```sql
select OWNER,TABLE_NAME from ALL_TABLES
 where OWNER='FINEDB'
   and TABLE_NAME in ('PULL_D12_PTY_MBR_BASIC_INFO','PULL_D12_PTY_ORG_BASIC_INFO');

select COLUMN_NAME,DATA_TYPE,DATA_LENGTH,NULLABLE
  from ALL_TAB_COLUMNS
 where OWNER='FINEDB'
   and TABLE_NAME in ('PULL_D12_PTY_MBR_BASIC_INFO','PULL_D12_PTY_ORG_BASIC_INFO')
 order by TABLE_NAME,COLUMN_ID;
```

`RYJBXX_GROUP_EMPLOYEE_COPE` 必须是 `VARCHAR(8)` 主键；组织编码必须是 `VARCHAR(12)`；不得把截图字段扩展为 200/500 等长度。

### Upgrade

1. 停止 Quartz 调度并备份旧 `DYN_DY_PARTY_MEMBER`、`DYN_DZZ_PARTY_ORGANIZATION`、`DYN_GROUP_SYNC_LOG`。
2. 执行 `db/group_data_sync.sql` 创建正式表和元数据表。
3. 完成全量同步验收后，才允许人工重命名旧 DYN 业务表；不要直接 DROP。
4. 回滚时停止正式同步，恢复备份表名称；正式表保留，不做破坏性删除。

## 2. Shiro / 网关白名单

在网关和平台 Shiro 动态过滤链中，把以下路径配置为内网白名单来源 IP 可匿名访问：

```text
GET  /pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/health
GET  /pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/page
GET  /pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/logs
POST /pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/sync
```

不配置 Token。白名单必须限制来源网段，并记录 `X-Forwarded-For`/实际远端 IP。若平台不能安全配置匿名白名单，则改用已登录服务账号，并在回填中记录账号、调用方式和权限范围；禁止把密码/token写入仓库。

## 3. JSON 接口验收

从白名单机器执行，禁止跟随重定向：

```powershell
curl.exe --fail-with-body --noproxy "*" -i "http://<host>/pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/health"
curl.exe --fail-with-body --noproxy "*" -i "http://<host>/pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/page?type=organization&page=1&pageSize=20"
curl.exe --fail-with-body --noproxy "*" -i "http://<host>/pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/page?type=member&page=1&pageSize=201"
curl.exe --fail-with-body --noproxy "*" -i "http://<host>/pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/logs?limit=20"
```

验收要求：HTTP 200、`Content-Type` 为 JSON、不是登录页 HTML；`pageSize=201` 返回值必须被限制为 200；非法 `type` 或非法 `updatedAfter` 必须返回可读 JSON 错误；分页结果只能包含正式表字段，不得出现 PB 审计/映射字段。

若正式表未安装，四条接口必须返回 `errorCode=FORMAL_SCHEMA_NOT_READY` 和“集团正式表尚未安装，请执行初始化脚本并联系 DBA”，不得出现 DM8 SQL、类名或堆栈；页面统计显示“未就绪”。

## 4. 同步测试

1. 准备一组有效父组织、子组织和党员 fixture，其中员工编码使用带前导零的字符串，例如 `00001234`。
2. 调用管理员同步：

```powershell
curl.exe --fail-with-body --noproxy "*" -X POST -i "http://<host>/pb/platform/avicit/pb/groupsync/groupSyncController/api/rest/sync"
```

3. 记录返回的 `batchId`，查询：

```sql
select * from DYN_GROUP_SYNC_LOG where ID='<batchId>';
select * from DYN_GROUP_SYNC_REJECT where BATCH_ID='<batchId>';
select * from DYN_GROUP_SYNC_ID_MAP where SOURCE_TABLE in ('PARTY_ORGANIZATION','PARTY_MEMBER');
```

4. 重复执行同步，确认正式表行数不增加、ID_MAP 的 `TARGET_KEY` 不漂移、`00001234` 未丢失前导零。
5. 逐一制造空值、超长、非法码值、父级缺失、党员无组织；每行必须进入拒绝明细，不能依赖数据库异常兜底。
6. 使用 `updatedAfter` 做增量同步；确认增量批次、部分批次、系统失败批次均不删除正式表记录。

## 5. 浏览器验收

- 登录态打开 `toManage` 页面。
- 桌面和 390x844 移动视图均能加载正式组织/党员分页。
- 点击“同步批次”调用 `GET api/rest/logs` 并展示成功数、失败数和拒绝原因。
- 原维护面仍提供新增、编辑、单条/批量物理删除及组织 ZIP 导入导出；验收必须使用具备集团同步菜单权限的管理员账号逐项回归。
- 浏览器控制台错误数为 0。

## 6. 回填模板

每个接口必须回填：请求时间、来源 IP、HTTP 状态码、`Content-Type`、完整 JSON 响应（可脱敏）、是否发生登录重定向。同步接口还必须回填 `batchId`，并附 `DYN_GROUP_SYNC_LOG` 与 `DYN_GROUP_SYNC_REJECT` 查询结果。

```text
目标环境：
数据库 schema/版本：
正式表安装时间/操作者：
正式表字段核对结果：
白名单网段与配置位置：
health HTTP/JSON：
page HTTP/JSON：
logs HTTP/JSON：
sync batchId：
首次同步结果：
重复同步结果：
拒绝测试结果：
增量/删除保护结果：
浏览器桌面结果：
浏览器移动结果：
未完成项：
```
