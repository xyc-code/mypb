# 集团正式表同步接口

正式表：当前连接模式（内网为 `PT6`）下的 `PULL_D12_PTY_MBR_BASIC_INFO`、`PULL_D12_PTY_ORG_BASIC_INFO`。
PB 只负责从 `PARTY_ORGANIZATION`、`PARTY_MEMBER` 写入正式表，组织先于党员；数据中心通过只读接口分页读取，PB 不主动向数据中心推送。

## 接口

- `GET platform/avicit/pb/groupsync/groupSyncController/api/rest/page?type=organization&page=1&pageSize=20&updatedAfter=2026-08-25%2000:00:00`
- `GET .../api/rest/page?type=member...`
- `POST .../api/rest/sync`，可选 `updatedAfter=yyyy-MM-dd HH:mm:ss`

`pageSize` 服务端限制为 1-200；排序固定为更新时间、正式表主键。返回 `rows`、`total`、`page`、`pageSize`、`updatedAfter`。调用 IP 写入 `DYN_GROUP_SYNC_LOG.CALL_IP`。

正式表未安装或 schema 不可用时，health/page/logs/sync 统一返回 `flag=failure`、`errorCode=FORMAL_SCHEMA_NOT_READY`、`errorMsg=集团正式表尚未安装，请执行初始化脚本并联系 DBA`，不返回 DM8 SQL、类名或堆栈。

## 内网配置

按内网白名单放行 `api/rest/health`、`api/rest/page` 和 `api/rest/logs`；暂不配置 Token。当前 PB 的 Shiro 过滤链由平台数据库动态加载，本地未配置白名单时未登录请求会返回登录页，不能当作 health 成功。内网网关必须先放行白名单来源 IP，并在平台 Shiro 过滤链配置上述路径为 anon；否则改用已登录服务账号调用。注册 `groupDataSyncJob`，建议 cron `0 0 2 * * ?`。执行 `db/group_data_sync.sql` 前备份并核对正式表；旧 DYN 业务镜像表不得继续作为正式目标。

## 数据规则

空值、超长、非法码值、组织父级缺失、党员无组织整行拒绝并写入 `DYN_GROUP_SYNC_REJECT`；员工编码按字符串保留前导零。同步锁保证同一 JVM 内不并发执行；只有成功批次才允许后续实现缺失记录清理，当前正式同步不执行清理。

截图中未提供正式表字段注释以外的集团码表和值域，代码不伪造默认码值；`PARTY_CODE`/源组织 `ID` 到正式组织唯一标识的映射假设需在内网联调时确认。

