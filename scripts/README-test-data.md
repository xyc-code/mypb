# PB 本地测试数据脚本

## 目标

在不能导出真实业务数据的情况下，用脚本稳定生成本地开发测试数据。

当前已脚本化的数据：

- 英雄联盟全英雄系统用户
- 用户主部门岗位关系
- 党员信息
- 5 个测试党支部
- 全部有效党组织的书记、组织委员信息

## 执行命令

在项目根目录执行：

```powershell
.\scripts\pb-test-data.ps1 seed
```

常用动作：

```powershell
.\scripts\pb-test-data.ps1 seed
.\scripts\pb-test-data.ps1 verify
.\scripts\pb-test-data.ps1 clean
```

## 数据约定

- 登录名：从 `910001` 开始连续生成
- 默认密码：`cape`
- 用户状态：正常，`SYS_USER.STATUS = 1`
- 用户主部门：`SYS_USER_DEPT_POSITION.IS_CHIEF_DEPT = 1`
- 党员状态：正常，`PARTY_MEMBER.STATUS = 1`
- 党组织类型：党支部，`PARTY_ORGANIZATION.ATTRIBUTE_01 = 1`
- 测试党组织编码：`LOL_TEST_%`

## 验证标准

`seed` 成功后，输出里应该满足：

- `SYS_USER` 等于 `EXPECTED_CHAMPIONS`
- `SYS_USER_DEPT_POSITION` 等于 `EXPECTED_CHAMPIONS`
- `PARTY_MEMBER` 等于 `EXPECTED_CHAMPIONS`
- 每个有效党组织恰好生成一名书记和一名组织委员
- `PARTY_ORGANIZATION_WITHOUT_REQUIRED_POSTS = 0`
- `PARTY_ORGANIZATION = 5`

`clean` 成功后，上面这些测试数据数量应为 `0`。

## 注意

`seed` 会清空本地库的整张 `PARTY_ORGAN_MEMBER` 表，然后按上述规则重建。脚本只用于本地开发库，不要在生产库执行。
