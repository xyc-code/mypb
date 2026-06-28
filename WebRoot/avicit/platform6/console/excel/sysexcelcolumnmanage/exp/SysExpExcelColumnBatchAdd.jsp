<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld" %>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld" %>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <!-- ControllerPath = "platform6/msystem/imp/sysimpcolumnfiledres/sysImpColumnFiledResController/toSysImpColumnFiledResManage" -->
    <title>管理</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs"/>
    </jsp:include>
</head>
<div id="tableToolbar" class="toolbar">
    <div class="toolbar-right">
        <div class="input-group form-tool-search">
            <input type="text" name="sysImpColumnFiledRes_keyWord"
                   id="sysImpColumnFiledRes_keyWord" style="width: 240px;"
                   class="form-control input-sm" placeholder="请输入查询条件"> <label
                id="sysImpColumnFiledRes_searchPart"
                class="icon icon-search form-tool-searchicon"></label>
        </div>
    </div>
</div>
<table id="sysImpColumnFiledResjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script  src="avicit/platform6/console/excel/sysexcelcolumnmanage/exp/js/SysExpExcelColumnBatchAdd.js" type="text/javascript"></script>
<script type="text/javascript">
    var sysImpColumnFiledRes;
    var templateId = "${sysImpTemplateDTO.id}";
    $(document).ready(function () {
        var dataGridColModel = [{
            label: 'id',
            name: 'id',
            key: true,
            width: 75,
            hidden: true
        }, {
            label: '字段名称',
            name: 'fieldDesc',
            width: 150
        }, {
            label: '字段标题',
            name: 'columnTitle',
            width: 150
        }, {
            label: '字段属性',
            name: 'field',
            width: 150,
            hidden: true
        }, {
            label: '字段类型',
            name: 'fieldtype',
            width: 150
        }, {
            label: '日期格式',
            name: 'dateStyle',
            width: 150,
            hidden:true
        }, {
            label: '列宽',
            name: 'cellWidth',
            width: 150
        }];
        var searchNames = new Array();
        var searchTips = new Array();
        searchNames.push("fieldDesc");
        searchTips.push("字段名称");
        searchNames.push("columnTitle");
        searchTips.push("字段标题");
        var searchC = searchTips.length == 2 ? '或'
            + searchTips[1] : "";
        $('#sysImpColumnFiledRes_keyWord').attr('placeholder',
            '请输入' + searchTips[0] + searchC);
        sysImpColumnFiledRes = new SysExpExcelColumn(
            'sysImpColumnFiledResjqGrid', "platform6/msystem/excel/column/sysExcelColumnController",{'templateId': templateId},
            'sysImpColumnFiledRes_keyWord', searchNames,
            dataGridColModel);

        //查询按钮绑定事件
        $('#sysImpColumnFiledRes_searchPart').bind('click', function () {
            sysImpColumnFiledRes.searchByKeyWord();
        });
    });

    function getSelectRows(){
        return sysImpColumnFiledRes.getSelectRows();
    }
</script>
</html>