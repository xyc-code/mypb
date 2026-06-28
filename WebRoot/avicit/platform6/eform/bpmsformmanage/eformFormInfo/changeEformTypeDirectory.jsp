<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,tree";
%>
<!DOCTYPE html>
<HTML>

<head>
    <title>切换目录</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
</head>

<body>
<div class="easyui-layout" fit=true>
    <div data-options="region:'center',split:true,border:false">
        <ul id="directoryTree" class="ztree">
        </ul>
    </div>

    <div data-options="region:'south',border:false" style="height: 40px;">
        <div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
            <table class="tableForm" style="border:0;cellspacing:1;width:100%">
                <tr>
                    <td width="50%" align="right">
                        <a href="javascript:void(0)" onclick="saveDialog();" style="margin-right:10px;" class="btn btn-primary
        form-tool-btn typeb btn-sm" role="button" title="保存" id="demoSingle_saveForm">保存</a>
                        <a href="javascript:void(0)" onclick="closeDialog();" class="btn btn-grey form-tool-btn btn-sm" role="button"
                           title="返回" id="demoSingle_closeForm">返回</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>


<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

<script type="text/javascript">
    var eformTypeId = "${param.eformTypeId}";
    var eformComponentId = "${param.eformComponentId}";
    var currentTreeNode = null;
    document.ready = function () {

        var url = "platform/eform/bpmsManageController/getEformTypeTreeExcludSelf?eformTypeId=" + eformTypeId;
        if(eformComponentId != null && eformComponentId != "" && eformComponentId != undefined){
            $("#demoSingle_saveForm").hide();
            $("#demoSingle_closeForm").html('<span  aria-hidden="true">取消</span>')
            url = "platform/eform/bpmsManageController/getEformTypeTreeExcludSelf";
        }


        var setting = {
            async: {
                enable: true,
                url: url,//异步请求树子节点url
                autoParam: ["id"]//父节点id
            },
            data: {
                simpleData: {
                    enable: true,
                    idKey: "id",
                    pIdkey: "pId"
                }
            },
            callback: {
                onClick: function (event, treeId, treeNode) {
                    var id = treeNode.id;
                    var name = treeNode.name;
                    var type = treeNode.type;
                    currentTreeNode = treeNode;

                    if(eformComponentId != null && eformComponentId != "" && eformComponentId != undefined){
                        if(parent.eformTypeTree.selectedNodeId === id) {
                            layer.msg('不能切换到当前分类！',{
                                icon: 2,
                                area: ['250px', ''],
                                closeBtn: 0
                            });
                        }
                        else {
                            layer.confirm('确定要将该模块移动到 '+name+' 分类下吗？', {
                                icon : 3,
                                title : '提示',
                                closeBtn : 0 ,
                                area: ['400px', '']
                            }, function (index) {
                                $.ajax({
                                    url: "platform/eform/bpmsManageController/changeComponentDirectory",
                                    data: {
                                        eformComponentId: eformComponentId,
                                        typeId: id
                                    },
                                    type: "post",
                                    async: false,
                                    dataType: "json",
                                    success: function (backData) {
                                        if (backData.flag == "OK") {
                                            parent.layer.msg('操作成功！',{
                                                icon: 1,
                                                area: ['200px', ''],
                                                closeBtn: 0
                                            });

                                            var formInfo = parent.$('#' + parent.eformComponent.componentDiv).find("#"+eformComponentId);
                                            formInfo.remove();
                                            if(parent.eformComponentModel) {
                                                parent.eformComponentModel.reLoad();
                                            }

                                            parent.eformComponent.closeDialog("changeDirectory");
                                        }
                                        else {
                                            layer.msg('操作失败！',{
                                                icon: 2,
                                                area: ['200px', ''],
                                                closeBtn: 0
                                            });
                                        }
                                    }
                                });
                            });
                        }

                    }

                }
            }
        };
        //手动请求根节点数据
        $.ajax({
            url: url,
            data: "id=-1",
            type: "post",
            async: false,
            dataType: "json",
            success: function (backData) {
                var zNodes = backData;
                $.fn.zTree.init($("#directoryTree"), setting, zNodes);
            }
        });


    };

    //关闭
    function closeDialog(){
        parent.layer.close(parent.layer.index);
    }
    //保存
    function saveDialog(){
        parent.setParentNode(currentTreeNode);
        parent.layer.close(parent.layer.index);
    }
</script>
</body>
</html>
