<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<% String importlibs = "common,tree,table,form";%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>测试多维通用代码</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">

    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <link rel="stylesheet" type="text/css" href="static/h5/jquery-ztree/3.5.12/css/treeViewStyle/treeview.css"/>
    <link rel="stylesheet" type="text/css" href="static/h5/skin/common.css"/>
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
<body>

<div>
    <div style="margin-left: 200px;margin-top: 100px;">
        <table>
            <tr>
                <td>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;局部树：</label>
                </td>
                <td>
                    <input id="targetId" type="hidden" name="targetId" placeholder="节点ID">
                    <input id="targetName" type="text" name="targetName" placeholder="节点名称" class="form-control">
                </td>
            </tr>
            <tr>
                <td>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全部树：</label>
                </td>
                <td>
                    <input id="targetId1" type="hidden" name="targetId1" placeholder="节点ID">
                    <input id="targetName1" type="text" name="targetName1" placeholder="节点名称" class="form-control">
                </td>
            </tr>
        </table>
    </div>
    <hr/>
    <div style="margin-left: 200px;">
        <table>
            <tr>
                <td>
                    <label>局部树表格：</label>
                </td>
                <td>
                    <input id="parentId" type="hidden" name="parentId" placeholder="节点ID">
                    <input id="parentName" type="text" name="parentName" placeholder="节点名称" class="form-control">
                </td>
            </tr>
            <tr>
                <td>
                    <label>全部树表格：</label>
                </td>
                <td>
                    <input id="parentId1" type="hidden" name="parentId1" placeholder="节点ID">
                    <input id="parentName1" type="text" name="parentName1" placeholder="节点名称" class="form-control">
                </td>
            </tr>
        </table>
    </div>

</div>

</body>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script type="text/javascript" src="avicit/platform6/console/lookuphiberarchy/js/LookupHiberarchySelect.js" ></script>

<script type="text/javascript">

    var lookupHiberarchySelect;
    $(function(){
        //弹出页-局部树形结构
        var paramObj = {
            uniqueKey: '00002',         //节点标识，-1标识查询全部数据
            targetId:'targetId',        //回填元素id
            targetName:'targetName',    //回填元素name
            type: 1,                    //0：treegrid形式展示 1：ztree形式展示
            expandNodes: 5              //展开的层级数
        }
        $('input[name=targetName]').bind('click',function () {
            lookupHiberarchySelect = new LookupHiberarchySelect(paramObj,testFun);
        });
        //弹出页-全部树形结构
        var paramObj1 = {
            uniqueKey: '-1',
            targetId:'targetId1',
            targetName:'targetName1',
            type: 1,
            expandNodes: 5
        }
        $('input[name=targetName1]').bind('click',function () {
            lookupHiberarchySelect = new LookupHiberarchySelect(paramObj1,testFun);
        });

        //弹出页-局部表格树结构
        var paramObj3 = {
            uniqueKey: '00002',
            targetId:'parentId',
            targetName:'parentName',
            type: 0,
            expandNodes: 5
        }
        $('input[name=parentName]').bind('click',function () {
            lookupHiberarchySelect = new LookupHiberarchySelect(paramObj3,testFun);
        });
        //弹出页-全部表格树结构
        var paramObj4 = {
            uniqueKey: '-1',
            targetId:'parentId1',
            targetName:'parentName1',
            type: 0,
            expandNodes: 5
        }
        $('input[name=parentName1]').bind('click',function () {
            lookupHiberarchySelect = new LookupHiberarchySelect(paramObj4,testFun);
        });
    })
    //回调函数
    function testFun(data) {
        var rowData = $('#sysLookupHiberarchyTreeGridJqGrid').jqGrid('getRowData',data);
    }
</script>
</html>