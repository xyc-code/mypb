<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form";
%>
<!DOCTYPE html>
<HTML>

<head>
    <title>编辑</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>

<body class="easyui-layout" fit="true">
<div data-options="region:'center',split:true,border:false">
    <form id='editForm'>
        <input type="hidden" id="id" name="id" value="${eformType.id}">


        <table class="form_commonTable">
            <tr>
                <th width="15%" style="word-break: break-all; word-warp: break-word;">
                    <label for="name">名称：</label>
                </th>
                <td width="35%">
                    <input title="名称" class="form-control input-sm" type="text" style="width: 99%;" type="text"
                           name="name" id="name" value="${eformType.name}"/>
                </td>
                <th width="15%" style="word-break: break-all; word-warp: break-word;">
                    <label for="code">编码：</label>
                </th>
                <td width="35%">
                    <input title="编码" class="form-control input-sm" type="text" style="width: 99%;" type="text"
                           name="code" id="code" value="${eformType.code}"/>
                </td>
            </tr>
            <tr>
                <th width="15%" style="word-break: break-all; word-warp: break-word;">
                    <label for="sort">排序：</label>
                </th>
                <td width="35%">
                    <input title="排序" class="form-control input-sm" type="text" style="width: 99%;" type="text"
                           name="sort" id="sort" value="${eformType.sort}"/>
                </td>
                <th width="15%" style="word-break: break-all; word-warp: break-word;">
                    <label for="name">上级分类：</label>
                </th>
                <td width="35%">
                    <div id="moveEformTypeSelect" class="input-group input-group-sm avicselect">
                        <input type="hidden" id="parentId" name="parentId" value="${eformType.parentId}">
                        <input type="text" class="form-control" name="moveEformTypeName" id="moveEformTypeName"  value='${menu.movemenuName}' readonly="readonly">
                        <span class="input-group-addon avicselect-act"><i class="glyphicon glyphicon-list"></i></span>
                    </div>
                </td>
            </tr>
            <tr>
            	<th width="15%" style="word-break: break-all; word-warp: break-word;">
                    <label for="description">描述：</label>
                </th>
                <td colspan="3" width="85%">
                    <textarea title="描述" class="form-control input-sm" type="text" style="width: 99%;" type="text"
                           name="description" id="description" >${eformType.description}</textarea>
                </td>
            </tr>
        </table>
    </form>
</div>
<div data-options="region:'south',border:false" style="height: 40px;">
    <div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
        <table class="tableForm" style="border:0;cellspacing:1;width:100%">
            <tr>
                <td width="50%" align="right">
                    <a href="javascript:void(0)" class="btn btn-default form-tool-btn typeb btn-sm" role="button" title="保存" id="saveForm">保存</a>
                    <a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="取消" id="closeForm">取消</a>
                </td>
            </tr>
        </table>
    </div>
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/eform/bpmsformmanage/js/common.js"></script>

<script type="text/javascript">
    var oldParentId = "${eformType.parentId}";
    document.ready = function () {
    	$.validator.addMethod("integer", function (value, element) {
    	    var tel = /^-?\d+$/g;  //正、负 整数 + 0
    	    return this.optional(element) || (tel.test(value));
    	}, "请输入整数");
        parent.eformType.formValidate($('#editForm'));
        $('#saveForm').bind('click', function () {
            var newParentId = $("#parentId").val();
            //判断父节点是否变化。来决定是否局部刷新目录树
            if(newParentId == oldParentId){
                parent.eformType.subEdit($("#editForm"),false);
            }else{
                parent.eformType.subEdit($("#editForm"),true);
            }

        });
        $('#closeForm').bind('click', function () {
            parent.eformType.closeDialog("edit");
        });


        $("#moveEformTypeSelect").bind("click", function() {
            var eformTypeId = $("#id").val();
            var url = "avicit/platform6/eform/bpmsformmanage/eformFormInfo/changeEformTypeDirectory.jsp?eformTypeId="+eformTypeId;
            lay_select_menu =  layer.open({
                type : 2,
                title: '上级分类选择',
                skin: 'index-model-noborder',
                move :'.simple-movetab',
                area: ['60%', '100%'],
                content : url,
                success:function(){
                    //选择父节点树页面加载完成后，会修改树节点图标，IE8下样式无法重绘导致图标丢失
                    parent.redrawTreePseudoEl();
                }
            });
        });

        var node = parent.eformTypeTree.tree.getNodeByParam("id", parent.eformTypeTree.selectedNodeId);
        $("#moveEformTypeName").val(node.getParentNode().name);
    };

    function setParentNode(currentTreeNode){
        $("#parentId").val(currentTreeNode.id);
        $("#moveEformTypeName").val(currentTreeNode.name);
    }
</script>
</body>
</html>
