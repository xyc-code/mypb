<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<% String importlibs = "common,tree,table,form";%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>父级菜单选择</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">

    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
    <style type="text/css">
        .fmt_opt{
            min-width: 8px;

        }
        .jqgrow td a {
            color:#fff;
        }
        .ztree li span.button.switch{
            left: 26px;
        }
        .ui-jqgrid tr.jqgrow{
            height: 30px;
        }
        .ui-th-ltr, .ui-jqgrid .ui-jqgrid-htable th.ui-th-ltr {
            height: 30px;
        }
        .ui-jqgrid .ui-jqgrid-bdiv{
            height: 100%;
        }
    </style>
</head>
<body class="easyui-layout" fit="true">

<div data-options="region:'west',split:true" style="width: 250px;border-top-style: hidden;">
    <div id='div' style="overflow:auto;">
    </div>
    <div id='div1' style="overflow:auto;">
        <ul id="sysLookupHiberarchyZtree1" style="color: deeppink;"><h4>初始化的值</h4></ul>
    </div>
</div>
<div data-options="region:'center',onResize:function(a){$('#jqGrid').setGridWidth(a);$(window).trigger('resize');}">
    <table id="jqGrid"></table>
</div>
</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="avicit/platform6/console/lookuphiberarchy/js/SysLookupHiberarchySelect.js" ></script>

<script type="text/javascript">
    // 初始化为ztree
    var sysLookupHiberarchySelect;
    $(function(){
        var paramObj = {
                        uniqueKey:'00001',
                        expandNodes:'3',
                        type:'1'
        }
        //初始化
        sysLookupHiberarchySelect = new SysLookupHiberarchySelect(paramObj,testFun);

        $('#jqGrid').jqGrid({
            width:930,
            dataType:'local',
            colNames:["ID","PID","TYPEKEY","UNIQUEKEY"],
            colModel: [
                {name:"id",index:"id",align:'center'},
                {name:"pId",index:"pId",align:'center'},
                {name:"typeKey",index:"typeKey",align:'center'},
                {name:"uniqueKey",index:"uniqueKey",align:'center'}
            ],
            viewrecords:true,
            rowNum:15,
            height: 250,
            rowheight: 300,
            //autoHeight:true,
            rowList:[15,20,25,30],
            jsonReader:{
                root: "rows",
                page: "page",
                total: "total",
                records: "records",
                repeatitems: false
            }
        });
    });
    //回调函数
    function testFun(tree) {
        alert('当前树对象');
        $("#jqGrid").jqGrid('clearGridData');
        var data = tree.getSelectedNodes();
        var rows = tree.getNodesByParamFuzzy("pId", data[0].id, null);
        $('#sysLookupHiberarchyZtree1').html("<h3 style='color: green;'>点击了："+ data[0].typeKey +"</h3>");

        for(var i=0;i<rows.length;i++){
            $("#jqGrid").jqGrid('addRowData',i+1,rows[i]);
        }
    }

</script>
</html>