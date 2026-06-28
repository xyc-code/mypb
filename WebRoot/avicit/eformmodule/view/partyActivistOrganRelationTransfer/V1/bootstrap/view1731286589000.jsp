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
<div class="easyui-layout" fit="true" id="402811817f4eb25b017f623439000f00"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table92f3ebe4d1b65d4e948886581ea60a1dff99').setGridHeight(getJgridTableHeight($('#table92f3ebe4d1b65d4e948886581ea60a1dff99_div')));$('#table92f3ebe4d1b65d4e948886581ea60a1dff99').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table92f3ebe4d1b65d4e948886581ea60a1dff99_div"><div style="overflow:auto"> <div id="tableToolbartable92f3ebe4d1b65d4e948886581ea60a1dff99" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtond76112dc25eecb4a703802a7da5079a7e9b8" permissionDes="发起流程"><a id="tableToolbarButtond76112dc25eecb4a703802a7da5079a7e9b8" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton38f830defd1420445fe8c5353c47b2e5c6a5" permissionDes="删除"><a id="tableToolbarButton38f830defd1420445fe8c5353c47b2e5c6a5" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><select id="table92f3ebe4d1b65d4e948886581ea60a1dff99workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable92f3ebe4d1b65d4e948886581ea60a1dff99" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable92f3ebe4d1b65d4e948886581ea60a1dff99"></div><table id="table92f3ebe4d1b65d4e948886581ea60a1dff99" datapermission="table92f3ebe4d1b65d4e948886581ea60a1dff99" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tablee5bc894c89678044427842bb476db21478f8').setGridHeight(getJgridTableHeight($('#tablee5bc894c89678044427842bb476db21478f8_div')));$('#tablee5bc894c89678044427842bb476db21478f8').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablee5bc894c89678044427842bb476db21478f8_div"><div style="overflow:auto"> <div id="tableToolbartablee5bc894c89678044427842bb476db21478f8" class="toolbar" style="height:38px;"></div><div id="Pagertablee5bc894c89678044427842bb476db21478f8"></div><table id="tablee5bc894c89678044427842bb476db21478f8" datapermission="tablee5bc894c89678044427842bb476db21478f8" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable92f3ebe4d1b65d4e948886581ea60a1dff99" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable92f3ebe4d1b65d4e948886581ea60a1dff99" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="上报人">上报人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="REQUEST_USER" name="REQUEST_USER">
  <input class="form-control input-sm cellinput-addon" type="text" id="REQUEST_USERAlias" name="REQUEST_USERAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="上报日期">上报日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_START" name="REQUEST_DATE_START" >
<span id="REQUEST_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="上报日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_END" name="REQUEST_DATE_END" >
<span id="REQUEST_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="上报部门">上报部门</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="REQUEST_DEPT" name="REQUEST_DEPT">
  <input class="form-control input-sm cellinput-addon" type="text" id="REQUEST_DEPTAlias" name="REQUEST_DEPTAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="自动编码">自动编码</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="AUTO_CODE" name="AUTO_CODE"
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
<script src="avicit/eformmodule/view/partyActivistOrganRelationTransfer/V1/bootstrap/view1731286589000.js?_=1731289204869"></script>
</html> 
