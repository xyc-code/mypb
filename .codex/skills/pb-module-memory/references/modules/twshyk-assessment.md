# Module Memory: 团委三会一课考核

## Identity

- Module name: 团委三会一课考核
- Status: local-verified
- Last updated: 2026-09-17
- 用户已同意建立模块记忆，规则见 `docs/twshyk-assessment.md`。

## Business

- 最新规则（2026-09-17）：Y年所有考核统一为Y−1年11月1日至Y年10月31日。季度为11—1月、2—4月、5—7月、8—10月；支部大会Y年11月1日起考核，替代原自然年口径。
- 支部委员会每月1次、团课每季度1次、支部大会每年1次。已结束周期缺会扣0.2，未结束显示未到考核时间；全部缺会满周期3.4分。
- 仅显示扣分，不设满分；团小组会不考核，多开不抵扣其他周期。
- 按服务器日期及现有会议日期实时重算，补录影响历史扣分；无定时任务，无结果落库。
- 当前组织域所有非根节点均考核，无会议也列出；不汇总下属、不按有效标志/成立日期免考。
- 年份只取会议表HYRQ实际年份，不能从跨年周期推导补充年份。

## PB Low-Code Surface

- 新增手写JSP考核页，保留既有低代码填报。
- 入口：`platform/avicit/pb/twshyk/assessment/toManage`。
- 菜单、角色权限、字典、工作流未修改；将来在平台菜单中绑定入口。

## Data

- `DYN_TWSHYK`: LEAGUE_ID, HYRQ (TIMESTAMP), HYLX（中文类型值）, ORG_IDENTITY。
- `LEAGUE_ORGANIZATION`: ID, LEAGUE_NAME, PARENT_ID, TREE_SORTS, TREE_SORT, ORG_IDENTITY；根PARENT_ID为-1。
- 本地初始无会议表、团组织表为空。新建会议表按用户截图29字段，不套用新表审计长度覆盖内网定义；全部8审计字段和CREATED_DEPT均存在。
- 本地团组织字段长度较内网小，未擅自更改；内网使用其已有表。
- 夹具：9组织、54会议，ORG_ROOT可见7考核组织。清理同时限制专用ID与CREATED_BY，事务回滚保护。

## Files

- Backend: `src/avicit/pb/twshyk/` 的controller/service/dao/dto及部署classes。
- Frontend: `WebRoot/avicit/pb/twshyk/`，jQuery/jqGrid/layer，CSS命名空间 `.pb-twshyk-page`。
- Local SQL: `db/twshyk_assessment_{inspect,local_schema,fixture,fixture_cleanup}.sql`。
- Scripts: `scripts/twshyk-assessment.ps1`, `TwshykAssessmentFixture.java`, `TwshykAssessmentTest.java`。
- Documentation: `docs/twshyk-assessment.md`。

## Pitfalls And Decisions

- 月季与年度统计区间已按用户新要求统一为去年11月1日至今年10月31日，不再沿用原来的不同区间。
- 范围使用>=开始、<下一周期开始，避免月末时间遗漏。
- 精确BigDecimal扣分，不使用浮点累加。
- 不接受客户端考核日期或组织域，SessionHelper取当前组织域。
- 默认年份允许null，避免int与Integer三元运算导致空年份自动拆箱异常。
- 清理前缀 `TWSHYK_TEST_M` 长13，重复seed已验证。
- 不改动用户其他模块工作区修改。
- 用户认为初版样式不好看；2026-09-17改为浅灰底/白色台账区，月季年规则分列，扣分数字与总分状态突出，灰色未到期标记，统一明细按钮/弹窗。只改本模块JSP/JS/CSS，无新增框架，样式继续限制在`.pb-twshyk-page`。
- 用户否决A/B/C三个样式原型，要求删除并直接调整正式页面布局和颜色鲜明度。已删除docs/prototypes/twshyk-styles.html及其NOTES并关闭8766预览服务；不再维护样式选择器。
- 当前正式版：标题与年份筛选合并；规则区改为蓝/月、绿/季、紫/年紧凑卡片，频次与会议名同行；加深表头、正文、行边界和红色扣分。仅改JSP/CSS，版本参数20260917c；未改计算、接口和数据库。

## Verification

- 最新周期调整：213项DM/MyBatis/服务断言通过。覆盖11月起始、月/季结束后一天、年度10月31日/11月1日，以及支部大会开始/结束时间戳包含与排除。2026-09-17完全缺会扣2.6，2026-11-01扣3.4。以下旧周期验收分数仅为历史记录。
- 标题改为团委“三会一课”考核，卡片顺序支部大会/支部委员会/团小组会/团课；团小组会随时开展、不参与考核。CSS/JS版本20260917e，现有分页保留，未新增框架或改公共样式。
- 新周期已编译并重启本地Tomcat/Redis，浏览器确认四卡片顺序、统一日期、团小组会说明、完全缺会2.6分及17周期明细正确；四卡片内容无横向溢出。前端冲突扫描0警告，git diff --check通过。

- 实际DM + MyBatis + 服务114断言通过，补录测试回滚。
- Browser验证列表/明细、默认年份、扣分2.8、3个待考核周期；无浏览器错误。
- Java已编译，Tomcat/Redis已重启；前端冲突扫描0警告。
- 空状态已实测：暂无会议年份，禁用年份框，无错误；恢复seed后点击查询正常加载。
- clean实测清理至0组织/0会议，seed恢复9组织/54会议，最终114断言再次通过。
- 浏览器年份切换：2025完全缺会3.4分，2027未开始0分，2026为2.8分；最后停留2026页。
- 上述浏览器验收是初版功能验收。新版样式完成JS语法及前端冲突检查（0警告）；再次浏览器验收时测试账号910001被平台重定向到loginFailed.jsp，提示无权访问，返回登录入口仍是已登录状态。未修改角色/权限；新版视觉和交互需由具有页面访问权限的账号继续验收。
- 最新版已完成实际浏览器视觉验收：改用项目已有本地admin验证账号，正式页成功渲染；2026完全缺会2.8分、17个明细周期、控制台0错误。910001为无菜单权限测试账号，后续UI验收使用已有有权限账号，不调整权限。
- 390px窄屏检查通过：文档滚动宽度等于视口宽度，表格容器独立横向滚动；CSS冲突检查0警告，JS语法与git diff --check通过。仅前端更新，无需重启后端。

## Intranet Handoff

- 本次未发布；内网两表已有，无生产DDL。
- 交付按最新打包规范仅含5个Java源码、源码及运行目录Mapper XML、JSP/JS/CSS，共10个部署文件；不打包.class，内网使用JDK8编译后重启Tomcat。测试SQL/脚本不在内网执行。
- 2026-09-18首次安装包范围仅本考核模块，既有会议填报和数据库表不变；需配置页面菜单及角色权限。打包前提交推送本模块源码，其他工作区修改不纳入。
- 内网日期按服务器日期，不在生产接口开放测试日期。

## Next Time

- 2026-09-17新增后端分页：list接收page/rows，默认1/20，返回data/page/total/records；rows限1—100，越界回最后一页。DM ROW_NUMBER按TREE_SORTS/TREE_SORT/ID稳定分页，仅聚合当前页ID会议，汇总与明细共用计算规则。
- 页面5/10/20/50/100条可选，翻页/跳页，查询和切年回第一页；禁用表头局部排序。jqGrid定制源码硬编码隐藏pager中心区，模块JS初始化后单独show恢复，并关闭无关列设置/导出按钮；未改平台公共组件。
- 最新验证192断言，包括事务内追加30组织后37条分20+17、无重复遗漏、越界与非法参数。追加数据全回滚，夹具仍9组织54会议；已编译重启Tomcat/Redis，浏览器验证5+2分页、跳页、年份重置及第二页明细17条。JS版本20260917d。

- 先读本文和操作文档，按需运行build/seed/test。
- 不将党组织三会一课的频次规则套用到本模块。
