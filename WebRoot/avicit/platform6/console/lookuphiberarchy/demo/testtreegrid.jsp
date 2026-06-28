<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- ControllerPath = "platform/avicit/platform6/msystem/sysLookupHiberarchy/sysLookupHiberarchyController/toSysLookupHiberarchyManageSelect" -->
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
</head>
<body>
<%--<table id="sysLookupHiberarchyTreeGridJqGrid"></table>--%>
<div id='div' style="overflow:auto;">
</div>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<!-- 模块js -->
<script src="avicit/platform6/console/lookuphiberarchy/js/LookupHiberarchyComponent.js" type="text/javascript"></script>
<script type="text/javascript">
    var lookupHiberarchyComponent;
    //获取当前选中的节点
    var selectedNode=function(rid,type){
        var cc = getSelectedNode();
    };
    $(document).ready(function(){
        var searchNames = new Array();
        var searchTips = new Array();
        searchNames.push("typeKey");
        searchTips.push("代码名称");
        var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
        $('#sysLookupHiberarchyKeyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
        //初始化为treegrid
        var paramObj = {
            uniqueKey:'-1',
            expandNodes:'3',
            style:'0',
            type:'0'
        }
        //treegrid判断dom元素的类型
        //增加issearch属性
        lookupHiberarchyComponent = new LookupHiberarchyComponent('div');
        lookupHiberarchyComponent.setOption(paramObj,testFun);

        //查询按钮绑定事件
        $('#sysLookupHiberarchySearchbtn').bind('click', function () {
            lookupHiberarchyComponent.searchByKeyWordGrid();
        });
    });

    //回调函数
    function testFun(data) {
        alert('行号为：' + data)
        var rowData = $('#sysLookupHiberarchyTreeGridJqGrid').jqGrid('getRowData',data);
    }
    // 重置tree grid 的选择项
    function resetSelectionGrid() {
        lookupHiberarchyComponent.resetSelectionGrid();
    }

</script>
</body>
</html>
