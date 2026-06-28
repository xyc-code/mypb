<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%
    String importlibs = "common,form,table,fileupload";
%>
<!DOCTYPE html>
<html>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<head>
    <title>属性设置</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
<%--    <jsp:include page="/avicit/platform6/console/imp/common/commonSelectionHead.jsp"></jsp:include>--%>
    <script src="static/js/platform/component/jQuery/jquery-easyui-1.3.5/jquery.easyui.min.js" type="text/javascript"></script>
</head>
<body class="easyui-layout card-padding-L-R panel-compact-spacing" fit="true">
<%--<div data-options="region:'center',split:true,onResize:function(a,b){$('#sysImpColumnFiledResjqGrid').setGridWidth(a);$(window).trigger('resize');}">--%>
<%--</div>--%>
<table id="sysImpColumnFiledResjqGrid"></table>
<%--<div id="jqGridPager"></div>--%>
<%--<form id='exportExcelForm' name='exportExcelForm' method="post" action="${exportUrl}" style='display: none;'>
    <input type="hidden" name="templateCode" id="templateCode" value="${templateCode}"/>
    <input type="hidden" name="selectCols" id="selectCols"/>
    <input type="hidden" name="selectIds" id="selectIds"/>
    <input type="hidden" name="selectConditions" id="selectConditions"/>
</form>--%>
</body>
<script type="text/javascript">
    var templateCode = "${templateCode}";
    //column配置关系页页面
    var dataGridColModel = [
        {label: 'id', name: 'id', key: true, width: 75, hidden: true},
        {label: '列序号', name: 'columnIndex', sortable: false, width: 30},
        {label: '字段名称', name: 'columnTitle', sortable: false, width: 150},
        {label: '字段标题', name: 'fieldDesc', sortable: false, width: 150},
        {label: '字段属性', name: 'field', sortable: false, width: 150, hidden: true},
        {label: '字段类型', name: 'fieldtype', sortable: false, width: 150,hidden: true},
        {label: '日期格式', name: 'dateStyle', sortable: false, width: 150,hidden: true}
    ];

    $(function(){
       $("#sysImpColumnFiledResjqGrid").jqGrid({
            url: 'platform6/msystem/excel/column/sysExcelColumnController/operation/getSysImpColumnFiledRessByTemplateCodeByPage.json',
            mtype: 'POST',
            datatype: "json",
            colModel: dataGridColModel,
            postData: {
                templateCode:templateCode
            },
            height: $(window).height() -40,//初始化表格高度
            scrollOffset: 20, //设置垂直滚动条宽度
            rowNum : -1,
            altRows: true,
            pagerpos: 'left',
            styleUI: 'Bootstrap',
            viewrecords: true,
            multiselect: true,
            shrinkToFit: true,
            hasTabExport: false,
            hasColSet: false,
            responsive: true,//开启自适应
            autowidth: true,
            multiboxonly: false
        });
    });

    function getSelectRows() {
        var ids = $("#sysImpColumnFiledResjqGrid").jqGrid('getGridParam', 'selarrrow');
        var rows = new Array();
        for (var i = 0; i < ids.length; i++) {
            rows.push($("#sysImpColumnFiledResjqGrid").jqGrid('getRowData', ids[i]));
        }
        return rows;
    }
</script>
</html>