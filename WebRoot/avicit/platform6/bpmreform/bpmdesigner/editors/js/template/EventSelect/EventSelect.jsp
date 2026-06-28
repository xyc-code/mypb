<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
    String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
    <title>流程事件选择</title>
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <jsp:include
            page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
        <jsp:param value="<%=importlibs%>" name="importlibs" />
    </jsp:include>
</head>
<body>
    <div id="toolbar_bpmEvent" class="toolbar">
        <div class="toolbar-right">
            <div class="input-group form-tool-search" style="width:200px">
                <input type="text" name="bpmEvent_keyWord" id="bpmEvent_keyWord" style="width:200px;" class="form-control input-sm" placeholder="请输入事件名称">
                <label id="bpmEvent_searchPart" class="icon icon-search form-tool-searchicon"></label>
            </div>
        </div>
    </div>
    <table id="bpmEvent"></table>
    <div id="bpmEventPager"></div>
</body>
<jsp:include
        page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
    <jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmdesigner/editors/js/template/EventSelect/BpmEvent.js"
        type="text/javascript"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script type="text/javascript">
    var bpmEvent;
    $(document).ready(function() {
        var type = decodeURIComponent(flowUtils.getUrlQuery("type"));
        var searchMainNames = [];
        var searchMainTips = [];
        searchMainNames.push("name");
        searchMainTips.push("事件名称");
        searchMainNames.push("path");
        searchMainTips.push("事件类路径");
        var searchMainC = searchMainTips.length==2?'或' + searchMainTips[1] : "";
        $('#bpmEvent_keyWord').attr('placeholder','请输入' + searchMainTips[0] + searchMainC);

        var eventGridColModel = [ {
            label : 'dbid',
            name : 'dbid',
            key : true,
            width : 75,
            hidden : true
        }, {
            label : '事件名称',
            name : 'name',
            width : 100,
            sortable : false
        }, {
            label : '事件类路径',
            name : 'path',
            width : 300,
            sortable : false
        },
        ];

        bpmEvent = new BpmEvent('bpmEvent', 'platform/bpm/bpmEventController/operation/',
            '', eventGridColModel, '',searchMainNames, 'bpmEvent_keyWord',type);
        //关键字段查询按钮绑定事件
        $('#bpmEvent_searchPart').bind('click', function() {
            bpmEvent.searchByKeyWord();
        });

    });

    function getSelectEvent(){
        return bpmEvent.getSeletedRowData();
    }
</script>
</html>
