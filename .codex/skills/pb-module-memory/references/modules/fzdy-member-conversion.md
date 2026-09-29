# Module Memory: fzdy-member-conversion

## Identity

- Module name: 发展党员批量转为有效正式党员
- Status: local-verified（后端隔离集成测试及服务加载完成，内网接入未验证）
- Last updated: 2026-09-29

## Business

- 来源为内网 `DYN_FZDY`，目标 `PARTY_MEMBER`。用户已明确要求实施，并同意建立模块记忆。
- 多选逐条处理，未完成流程或重复记录跳过，单条异常不回滚其他已成功记录。
- `STATUS='1'`；`PARTY_TYPE` 从应用 1 的 `PM_PARTY_TYPE` 中按“正式党员”唯一匹配，不写死编码。
- 入党时间、转正日期、入党单位、身份类别等缺失资料留空。申请入党时间不得冒充入党时间；培养联系人不得直接作为介绍人。
- 用户要求简化为身份证查重：`DYN_FZDY.SSZH` 对 `PARTY_MEMBER.IDCARD`，首尾去空格、统一大写，已存在即跳过（包括无效党员），身份证为空不转换。不再按 USER_ID 查重，不再记录历史转换标记。原源记录不回写。

## PB Low-Code Surface

- 本地应用 schema 没有 `DYN_FZDY`，也没有对应实际内网视图，不伪造本地正式表/视图。
- 按钮脚本：`WebRoot/avicit/pb/fzdy/FzdyConversion.js`，调用 `fzdyConvertSelected('真实jqGrid DOM ID', this)`。
- 通过设计器持久保存脚本引用、按钮、点击事件；隐藏主键列必须叫 `ID`，不能格式化。
- POST `platform/avicit/pb/fzdy/conversion/convert`，JSON 字符串 ID 数组，每次最多 200 项。
- Shiro 操作资源：`fzdy_convert_party_member`，要求显式授权。
- 运行时 `WEB-INF/classes/fzdy-conversion.properties` 的 `viewCode` 必须配置真实视图编码。
- 后端复用 `SysDataPermissionsAuthService.checkEform/splicingSql`，要求显式视图数据授权，并按当前 `ORG_IDENTITY` 隔离。无授权不默认放行管理员。

## Data

- 不新增字段，不依赖 `CONVERTED_MEMBER_ID`；已建立该字段的环境可以保留，新代码不读取或写入，无需 DROP。如果党员记录被删除，身份证已不存在，则允许重新转换。
- 无新增生产业务表。党员新增复用现有 `PartyMemberService.insertPartyMember` 和审计逻辑；本地 `PARTY_MEMBER` 已核对八项审计列存在，缺失业务资料允许空值。
- 源表实际列和审计列须在内网预检，不能宣称已核实。照片身份证号按 `SSZH`、出生年月按 `CRNY`、参加工作时间按 `CJGZSJ` 实现。
- 流程：`BPM_HIST_PROCINST.FORMID_` 对应源 ID，恰好一个实例且 STATE_/BUSINESSSTATE_ 都为 ended、END_ 非空；多实例拒绝，不猜最后一次。
- MyBatis 事务管理器，逐条 REQUIRES_NEW；锁源记录、流程，完成资料校验后短暂锁 PARTY_MEMBER 表，再查身份证并新增。锁在每条提交/回滚时释放，不锁整个批次。其他党员写入短暂等待；使用表锁是为保护“同身份证但不同 USER_ID”且不增加表/列。
- 防并发重复覆盖本接口；未改造其他历史新增、导入入口，未建立全系统身份证唯一约束。

## Files

- Java：`src/avicit/pb/fzdy/controller/FzdyConversionController.java`，`service/FzdyAccessService.java`、`service/FzdyConversionService.java`。
- 配置模板：`src/fzdy-conversion.properties`，默认空白、拒绝转换，更新时保留实际运行配置。
- SQL：`db/fzdy_conversion_preflight.sql`（只读，检查重复/空身份证）。旧 `db/fzdy_conversion_patch.sql` 增列脚本已移除，不再执行增列或同步标记元数据。
- 文档：`docs/fzdy-conversion.md`，含接入、权限、映射、限制和内网验收清单。
- 测试：`scripts/FzdyConversionTest.java`、`scripts/test-fzdy-conversion.ps1`、`scripts/test-fzdy-button.js`。

## Verification

- JDK 8 编译到 `WebRoot/WEB-INF/classes` 成功。
- 身份证查重版达梦隔离 schema 集成测试 119 项断言通过，测试后 schema 已清理。测试源表没有标记列；覆盖批量、完成状态、空值映射、空/重复身份证、首尾空格与大小写 X、已有无效党员、同源/同人/不同账号同证并发、插入后的 checked exception 回滚、数据库约束失败、原生数据授权解析及拒绝未授权/未登录访问。
- 测试以替身执行党员写入和系统用户/字典查询；真实 DM SQL、事务和锁、真实平台数据权限解析。不能宣称内网真实服务及表单闭环已验证。
- Node 执行实际 PB avicAjax 包装器和按钮脚本，选择校验、ID payload、连点、XSS 转义、权限/网络异常、按钮恢复及刷新通过。
- 按运行技能重启 Tomcat 与 Redis，DM 保持运行；登录页 HTTP 200；启动日志已注册新 POST JSON 路由。
- 未登录真实 POST 被平台重定向（HTTP 302），脚本资源 HTTP 200。
- 内网实际按钮、再生成后配置保留、真实字典映射、党员列表回读、审计字段及跨账号页面验收待完成。

## Intranet Handoff

- 2026-09-29 用户要求首次打包，明确“先不推送到 github”。本次仅本地 Git 提交，不推送；未更新内网部署基线。
- 首次源码包目录：`D:/pb-release/20260929-094938-fzdy-idcard/`；模块目录为 `按模块分开/发展党员转党员/`。交付 Java 源码、按钮脚本、空白视图配置模板、只读预检 SQL 和部署说明；不含 class、旧增列 SQL、凭据和其他模块。
- 首次部署无需增列，仍需视图绑定及授权、配置 viewCode、内网编译重启。更新旧版时编译完整 `src/avicit/pb/fzdy/`（包含 AccessService 的 Context 类），不要只替换一份 class。
- 正式打包时使用 pb-intranet-packager，只包含本模块，勿夹带工作区其他已有修改；不打包 class、临时测试 schema、凭据或本机环境配置。

## Next Time

- 先读 `docs/fzdy-conversion.md`；核对内网表、视图编码、字典与流程关联，完成实际接入验收。
- 不删除流程历史来绕过多实例拒绝；不把入党时间填为申请日期或当前时间。旧标记字段保留即可，不主动删列。
