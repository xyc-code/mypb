# 举手报告内网交付检查

1. 只有打包到内网阶段才允许取流程状态；本地开发、测试、验收和打包前检查不得读取 `BPM_CLIENT_HIST_PROCINST_V`。
2. `JBG_TEST_STATUS` 仅用于显式 `-Dpb.jbg.tempStatusMode=true` 的本地 `JSBG_TEST_` fixture，内网表不存在该字段，正式 SQL 不得查询。
3. 交付源码默认进入正式模式；内网 JVM 不得设置 `-Dpb.jbg.tempStatusMode=true`，建议显式设置 `-Dpb.jbg.tempStatusMode=false` 并在交付清单中记录。
4. 切换到内网模式后，统计接口才必须访问 `BPM_CLIENT_HIST_PROCINST_V`，并按 `FORMID_` 取最新流程实例。
5. 内网部署后抽查 `years`、`reconciliation.totalMatchesStatus`、流程覆盖率和未知状态告警；本地测试不得用这些真实流程指标作为验收依据。
6. 核对主表紧急类型字段使用 `DYN_JSBG.JJ_LX`，不得使用不存在的 `JJLX`。
