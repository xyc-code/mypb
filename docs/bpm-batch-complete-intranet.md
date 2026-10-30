# BPM task4 批量办理内网补丁

## 适配范围

后端接口适配使用 BPM 的流程。它只接受当前用户仍在 `task4` 的有效待办，并从对应流程定义读取 `task4` 的唯一下一条 transition，因此不把 `task4` 固定当作结束节点。

如果某个流程的 `task4` 有多个出口，接口会整批拒绝，要求保留人工选择分支；这类流程不能安全地自动批量办理。

## 视图接入

在目标低代码视图的自定义 JS 中加入：

```html
<script src="static/pb-modern/bpm-batch-complete/bpm-batch-complete.js?v=20261030"></script>
<script>
$(function () {
  PbBpmBatchComplete.attach({
    gridId: '目标视图的 jqGrid ID',
    toolbarId: '目标视图的 toolbar ID'
  });
});
</script>
```

当前本地“固定资产领用”视图的表格 ID 是 `tablef1f0c65863e3da4379c91ae7e130a6a58e75`，toolbar ID 是 `tableToolbartablef1f0c65863e3da4379c91ae7e130a6a58e75`。

当前本地固定资产流程的 `task4` 有 `to task5`、`to task6`、`to end1` 三个出口，属于多分支流程；按安全规则会整批拒绝，不会替用户猜选分支。要办理该流程，需要先明确业务上固定使用哪个出口，再单独增加该流程的规则。

## 手工验证

1. 先复制 JS 和两个 Java 源文件到对应项目路径。
2. 用 JDK 8 编译 Java 源文件并重启 Tomcat。
3. 在目标视图挂载 JS，选中若干行点击“批量办理”。
4. 混选非 `task4` 行时，应整批拒绝且不办理任何一条。
5. 全部为 `task4` 时，流程按自身定义的唯一下一节点流转。

本补丁不修改 BPM 表、业务表、菜单、角色权限或流程定义。
