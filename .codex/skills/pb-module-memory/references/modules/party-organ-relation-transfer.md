# Module Memory: party-organ-relation-transfer

## Identity

- Module name: 党组织关系转移
- Memory file: party-organ-relation-transfer.md
- Status: developing
- Owner/requester: user
- Last updated: 2026-07-13

## Business

- Goal: 流程办结后，根据转出类别同步党员、党组织人员和系统用户信息。
- Main workflow: `DYN_PARTY_TRANSFER` 主表关联 `DYN_POT_MEMBER` 子表，流程结束触发 `PartyOrgTransferEventListener`。
- Important rules: `P_TRANSFER_TYPE='0'` 是内部调动，`P_TRANSFER_TYPE='1'` 是外部转出。
- Important rules: 内部调动时，子表 `USER_POST` 有值则同步或补建 `PARTY_ORGAN_MEMBER`；为空则删除该用户原党组织人员记录。
- Important rules: 外部转出时，`PARTY_MEMBER.STATUS='0'`，删除 `PARTY_ORGAN_MEMBER`，`SYS_USER.STATUS='3'`。

## PB Low-Code Surface

- Forms: `WebRoot/avicit/eformmodule/form/partyOrganRelationTransfer/V1/bootstrap/`
- Dictionaries/config: 子表党内职务字段使用 `PARTY_POST` 字典。
- Manual platform steps: 目标环境需要在低代码表 `DYN_POT_MEMBER` 增加 `USER_POST` 字段，并在表单子表列中配置“党内职务”。

## Data

- Tables: `DYN_PARTY_TRANSFER`, `DYN_POT_MEMBER`, `PARTY_MEMBER`, `PARTY_ORGAN_MEMBER`, `SYS_USER`
- Required audit fields checked: n/a
- SQL/migration notes: `db/party_org_transfer_patch_20260706.sql` 只给既有子表增加 `USER_POST VARCHAR2(255)`。
- Risky DB assumptions: `PARTY_MEMBER.STATUS='0'` 表示无效党员，`SYS_USER.STATUS='3'` 表示无效用户，沿用既有代码口径。

## Files

- Java/classes: `src/avicit/pb/utils/event/PartyOrgTransferEventListener.java`
- Mapper XML: none
- Properties/config touched: none

## Verification

- Checks performed: pending
- Known gaps: 需要目标库完成 `DYN_POT_MEMBER.USER_POST` 字段和表单列配置后，才能完整跑流程验证。

## Next Time

- Read first: `src/avicit/pb/utils/event/PartyOrgTransferEventListener.java`
- Likely change points: 表单子表列配置、`DYN_POT_MEMBER.USER_POST` 字段、流程结束事件绑定。
- Do not touch without confirmation: `partyOrganRelationTransfer2` 和历史时间戳表单快照。

## 2026-07-13 Intranet Handoff Scope

- User explicitly restricted this release to one source file: `src/avicit/pb/utils/event/PartyOrgTransferEventListener.java`.
- Do not include the `DYN_POT_MEMBER.USER_POST` SQL patch, low-code form/view files, dictionaries, workflow configuration, test data, or any other party-organization-transfer files in this package.
- JDK 8 compilation of the listener passed together with the 3.0 source closure before packaging.
