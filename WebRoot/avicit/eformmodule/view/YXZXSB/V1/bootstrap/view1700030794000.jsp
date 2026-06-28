<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<% 
String importlibs = "common,table,form,fileupload,tree";
%>
<!DOCTYPE html>
<html>
<head>
<title>管理</title>
<meta http-equiv="X-UA-Compatible" content="IE=10;IE=9;IE=8;IE=EDGE">
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<link rel="stylesheet" type="text/css" href="static/h5/autoFixedForm/css/autofixedForm-bootstrap.css?v=${jsversion}"/>
<link rel="stylesheet" href="static/css/platform/eform/eformTab.css?v=${jsversion}"/>
<link rel="stylesheet" href="avicit/platform6/eform/bpmsviewdesign/css/view.css?v=${jsversion}"/>
</head>
<body>
<div class="easyui-layout" fit="true" id="948e83e3881da2180188279574e76caa"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table278e1440a4fff84014ab785f7e8034d55b77').setGridHeight(getJgridTableHeight($('#table278e1440a4fff84014ab785f7e8034d55b77_div')));$('#table278e1440a4fff84014ab785f7e8034d55b77').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table278e1440a4fff84014ab785f7e8034d55b77_div"><div style="overflow:auto"> <div id="tableToolbartable278e1440a4fff84014ab785f7e8034d55b77" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable278e1440a4fff84014ab785f7e8034d55b77" id="keyWordtable278e1440a4fff84014ab785f7e8034d55b77" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable278e1440a4fff84014ab785f7e8034d55b77" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable278e1440a4fff84014ab785f7e8034d55b77" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table278e1440a4fff84014ab785f7e8034d55b77workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton994cfd5d74db8c464118d21209cc2610ee53" permissionDes="发起流程"><a id="tableToolbarButton994cfd5d74db8c464118d21209cc2610ee53" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton6c507dcb494a794b7479c9c4d701cd149983" permissionDes="导出"><a id="tableToolbarButton6c507dcb494a794b7479c9c4d701cd149983" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-download"></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton41af8e0df602cc4d4369cf77b8b4fa3a1c2e" permissionDes="删除"><a id="tableToolbarButton41af8e0df602cc4d4369cf77b8b4fa3a1c2e" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable278e1440a4fff84014ab785f7e8034d55b77"></div><table id="table278e1440a4fff84014ab785f7e8034d55b77" datapermission="table278e1440a4fff84014ab785f7e8034d55b77" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable278e1440a4fff84014ab785f7e8034d55b77" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable278e1440a4fff84014ab785f7e8034d55b77" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请编号">申请编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="APPLICATION_NUMBER" name="APPLICATION_NUMBER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请单位">申请单位</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="APPLICATION_UNIT" name="APPLICATION_UNIT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队名称">突击队名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_NAME" name="COMMANDOES_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队长">突击队队长</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_CAPTAINS" name="COMMANDOES_CAPTAINS"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队员">突击队队员</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_NAME" name="COMMANDOES_TEAM_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队员单位">突击队队员单位</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_DEPT" name="COMMANDOES_TEAM_DEPT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队员年龄">突击队队员年龄</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_AGE" name="COMMANDOES_TEAM_AGE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队员负责任务">突击队队员负责任务</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_TASK" name="COMMANDOES_TEAM_TASK"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="队员人数">队员人数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_COUNT" name="COMMANDOES_TEAM_COUNT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队类型">突击队类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="COMMANDOES_TYPE" name="COMMANDOES_TYPE" title="突击队类型" isNull="true" lookupCode="COMMANDOES_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="成立时间">成立时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_DATE_START" name="COMMANDOES_DATE_START" >
<span id="COMMANDOES_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="成立时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_DATE_END" name="COMMANDOES_DATE_END" >
<span id="COMMANDOES_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="计划完成任务时间">计划完成任务时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_TASK_DATE_START" name="COMMANDOES_TASK_DATE_START" >
<span id="COMMANDOES_TASK_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="计划完成任务时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_TASK_DATE_END" name="COMMANDOES_TASK_DATE_END" >
<span id="COMMANDOES_TASK_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="预期收益">预期收益</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="EXPECTED_INCOME" name="EXPECTED_INCOME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="主题">主题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_THEME" name="COMMANDOES_THEME"
	class="form-control input-sm cellinput">
</div></div>
</form></div>
</blockdom>
<script src="static/h5/jqGrid-5.2.0/plugins/jquery.contextmenu.js?v=${jsversion}" ></script>
<script src="static/js/platform/component/common/exportData.js?v=${jsversion}" ></script>
<script src="static/h5/autoFixedForm/js/jquery.autofixedform.js?v=${jsversion}"></script>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js?v=${jsversion}"></script>
<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script><script src="avicit/platform6/eform/formdefine/js/eformCustomDialog.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/common.js?v=${jsversion}"></script>
<script src="static/js/platform/eform/eformTab.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/jqgridValidate.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/bootstrap-pagination-spirit.js?v=${jsversion}"></script>
<script type="text/javascript" src="static/js/platform/eform/eformDataList.js?v=${jsversion}"></script>
<script>
<c:choose>
<c:when test="${not empty session && !(session eq null) }">
	var session = $.parseJSON("${session}");
</c:when>
<c:otherwise>
	var session = {};
</c:otherwise>
</c:choose>
var _eform_base_url = "<%=ViewUtil.getRequestPath(request)%>";
var pageParams = {
        urlParam: getUrlParam(window.location.href),
        session: session,
        baseUrl: "<%=ViewUtil.getRequestPath(request)%>"
};
var filterParams = {};
</script>
<script src="avicit/eformmodule/view/YXZXSB/V1/bootstrap/view1700030794000.js?_=1700035112428"></script>
<script src="avicit/weekly/js/WeeklyS.js"></script>
</html> 
