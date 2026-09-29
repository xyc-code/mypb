# 发展党员批量转党员：接入与验收

## 已实现的行为

选中发展党员视图记录，点击“转党员”，逐条将 `DYN_FZDY` 新增到 `PARTY_MEMBER`。成功记录为有效正式党员；不合格记录跳过；单条数据库错误回滚该条，其他条继续。每次最多 200 条。

仅接收 ID 数组，所有资料与流程状态由后端重新读取。使用源表 `SSZH` 与党员表 `IDCARD` 查重，去除首尾空格、统一大写后比较；身份证号为空时跳过。匹配已有党员时跳过，包括无效党员，不覆盖或激活。缺少入党时间、转正日期、入党单位、身份类别等资料时留空。

## 内网接入步骤

1. 先执行 `db/fzdy_conversion_preflight.sql`（只读）。核对源表字段英文名、日期类型、目标字段长度和非空约束。身份证号按照片实现为 `SSZH`，出生年月为 `CRNY`，参加工作时间为 `CJGZSJ`；若实际不同，先调整映射并复测，不能直接带错字段上线。
2. **无需执行增列 SQL。** 新版本不再使用 `CONVERTED_MEMBER_ID`，原增列脚本已移除。如果之前已经创建该字段，可以保留，新代码不读取、不写入它，无需删除字段或修改其中的数据。
3. 既有业务表保留原审计字段。本次不新增生产表或列，不回写发展党员记录；新增党员仍复用原审计逻辑。源表 `ORG_IDENTITY` 必须与登录组织一致，空值不会自动视作当前组织。
4. 将新增 Java 源文件放入 `src/avicit/pb/fzdy/`，在内网使用现有 JDK 8、平台依赖编译。将 `src/fzdy-conversion.properties` 复制到运行时 `WEB-INF/classes/fzdy-conversion.properties`，把 `viewCode=` 填为发展党员视图的真实**视图编码**，不是表名、视图 ID 或表格 DOM ID。配置为空时拒绝转换。后续更新代码不要用空白模板覆盖已配置文件。
5. 复制 `WebRoot/avicit/pb/fzdy/FzdyConversion.js`。在低代码设计器持久保存脚本引用、按钮与事件配置，再发布，不能只编辑生成的 `view.jsp`。
6. 配置操作授权与数据授权（下文），重启 Tomcat 后，用授权与非授权账号分别验收。先转一条真实合格记录，确认党员列表中“有效”和“正式党员”的显示，再试批量。

本地编译命令：`powershell -File scripts/test-fzdy-conversion.ps1 -Action build`。内网若项目路径或 JDK 路径不同，用其现有编译方式；本地脚本固定使用本机 JDK。源码没有修改现有党员 Service、Mapper、公共流程或公共页面。

## 视图按钮

列表开启多选，保留绑定源表主键的隐藏 `ID` 列。ID 不能用格式化器产生 HTML。引入：

```html
<script src="avicit/pb/fzdy/FzdyConversion.js"></script>
```

在按钮事件中调用（将 `实际表格DOM_ID` 替换为该视图 jqGrid 的 ID，不带 `#`）：

```javascript
fzdyConvertSelected('实际表格DOM_ID', this);
```

页面沿用 PB 的 `<base>` 路径、jQuery、jqGrid、layer 和 `avicAjax`。按钮脚本提交到：

```text
POST /pb/platform/avicit/pb/fzdy/conversion/convert
Content-Type: application/json
["发展党员主键1", "发展党员主键2"]
```

成功接收批次返回 `ok=true`、`success/skipped/failed` 数量及 `results` 数组；每条包含 `id/name/status/message`，成功项另带 `memberId`。`ok=true` 不表示全部转换成功，必须看逐条结果。操作无权限返回 403，批次数量非法返回 400，配置错误返回 500。

断网或超时可能已有部分记录提交，页面会提示刷新核对；可重新点击，已成功的记录会被跳过。不会自动重试，也不将网络失败宣称为全部回滚。

## 权限配置

- 操作资源固定为 `fzdy_convert_party_member`，通过平台资源管理登记并授予需要执行转换的角色。低代码按钮使用相同权限标识；若使用 JSP 权限标签，示例为 `<sec:accesscontrollist hasPermission="3" domainObject="fzdy_convert_party_member" permissionDes="发展党员转党员">...</sec:accesscontrollist>`。该标签要由平台资源扫描登记。即使页面默认展示未登记按钮，后端仍要求登录且 Shiro 显式拥有此资源权限。
- 在平台数据权限中，使用上面配置的视图编码、表名 `DYN_FZDY`、视图类型 `TYPE='1'`，给操作角色配置与该视图一致的数据范围。复用原视图已有有效规则，不把视图中的组织过滤或固定条件遗漏到转换授权中。
- 后端调用平台 `SysDataPermissionsAuthService.checkEform/splicingSql` 解析规则，再按 ID 查询是否可访问，并强制校验登录 `ORG_IDENTITY`。请求不能自带视图编码、授权 SQL 或人员资料。
- 未取得规则、规则为空、解析失败或多个权限方法关联不明确时拒绝转换。管理员同样需要明确的数据授权；确实允许管理全部数据的角色也应配置显式的全范围规则，且仍受登录组织隔离。不要为排错删除后端权限检查。

## 字段与流程口径

| DYN_FZDY / 来源 | PARTY_MEMBER |
|---|---|
| USER_ID / PARTY_ID | USER_ID / PARTY_ID |
| 系统用户 NO / 用户 API 的部门 | USER_CODE / DEPT_ID |
| XB | SEX，匹配 PLATFORM_SEX 的编码或名称 |
| WHCD | EDUCATION_LEVEL，匹配 PM_EDUCATION_LEVEL 的编码或名称 |
| MZ / CRNY | NATION / BIRTHDAY |
| JG / CSD | ORIGN / BIRTH_PLACE |
| CJGZSJ / XRZW / ZC | WORK_TIME / POST / PROFESSIONAL_RANK |
| SSZH / JTZZ | IDCARD / ADDRESS |
| 固定有效 | STATUS='1' |
| PM_PARTY_TYPE 中名称“正式党员”的唯一有效字典项 | PARTY_TYPE，动态取得编码 |

字典读取沿用本项目应用 ID `1`。如果源性别/文化程度使用其他字典的编码，必须在接入前确认语义一致；不能因为两个字典都有同一个数字就判定语义相同。值无法唯一匹配时跳过。民族、职称沿用党员表的普通文本字段。

`XM` 只作提示，不按姓名找用户。系统用户必须存在且状态为 `1`，人员编码和部门必须完整；党组织必须属于当前组织。不搬运证件照、审批意见等没有明确目标字段的内容。“申请入党时间”不作“入党时间”，“培养联系人”不作“入党介绍人”。

流程通过 `BPM_HIST_PROCINST.FORMID_` 与源记录关联，只接受**恰好一个**实例且 `STATE_='ended'`、`BUSINESSSTATE_='ended'`、`END_` 非空。无流程、多实例、草稿、进行中、撤销、终止均拒绝。存在重新发起或父子流程造成多个实例时，先核对真实关联，当前版本不会猜“最后一次”，也不要删除历史记录来绕过校验。

每条独立 `REQUIRES_NEW` 事务，明确使用 `transactionManagerMybatis`。读取并锁定源记录与流程记录，完成资料校验后，通过 `LOCK TABLE PARTY_MEMBER IN EXCLUSIVE MODE` 串行执行最终的身份证查重和新增，调用已有 `PartyMemberService.insertPartyMember`。锁在该条事务提交或回滚时释放；其他党员写入在此期间需等待。不回写发展党员记录，不再要求转换标记字段。若党员表中对应身份证记录已被删除，则允许重新转换。

并发防重覆盖本转换接口的重复点击、不同应用实例、不同源记录及不同 USER_ID 使用相同身份证的情况。不依赖单机 Java 锁或新增数据库对象。党员表未增加身份证唯一约束，其他历史新增/导入接口也未改造查重逻辑，不能将其理解为全系统永久唯一约束。批量按每条提交，不持有整个批次的党员表锁。

## 测试与上线验收

2026-09-29 身份证查重版本：JDK 8 编译、119 项 DM8 集成断言及按钮脚本测试通过。测试表不含转换标记列，覆盖空身份证、已有有效/无效党员、首尾空格与大小写 X、同身份证不同账号的并发转换、删除党员后重新转换、单条失败回滚和原生数据权限。

本地自动检查：

```powershell
# 凭据仅从本机受控环境变量读取，不写入文件。
scripts/test-fzdy-conversion.ps1 -Action test
node scripts/test-fzdy-button.js
```

Java 测试只连接本机 DM8，创建独立临时 schema，使用真实事务、SQL 和行锁，结束后删除该 schema。测试用的党员写入器与用户/字典查询是替身；平台原生数据权限解析使用真实实现。测试不会把照片表伪造到应用 schema，也不会写正式人员记录。临时 schema 创建需要本地测试账号权限。

必须在内网实际页面补验：

1. 已完成记录转换后，党员列表显示有效正式党员，人员、党组织及资料正确，缺失日期仍为空。
2. 未完成、撤销、终止、空身份证及身份证已存在的记录（包括无效党员）被跳过；两个不同账号的流程使用同一身份证同时转换，只新增一条。
3. 混合批次结果逐条准确；字段超长、非空约束或插入后异常不会留下半成品党员记录。
4. 无操作权限、无数据权限、跨组织和未登录请求不能转换；结果不泄露无权记录的姓名。
5. 保存、发布、重新生成视图后，按钮仍能提交上述 POST 地址，且只传业务主键。
6. 已提交的党员记录属于业务数据，代码回退不会删除；不要用删除列或批量删除党员来回退。回退到旧版本会重新依赖旧标记字段，不能只回退 Java 而忽略表结构。

本地无内网发展党员视图和 `DYN_FZDY` 实表，因此内网发布后的按钮、实际字段/字典、真实新增服务审计及完整页面流程仍须按以上步骤验收。本次交付为首次源码部署包，需要在内网编译、配置和重启，不代表内网运行验收已完成；尚未修改内网部署基线。
