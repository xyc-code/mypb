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
<div class="easyui-layout" fit="true" id="402811817e7a67d0017e7ba36f2a0d90"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table4e901df056a243487b98bddc79b062904f97').setGridHeight(getJgridTableHeight($('#table4e901df056a243487b98bddc79b062904f97_div')));$('#table4e901df056a243487b98bddc79b062904f97').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table4e901df056a243487b98bddc79b062904f97_div"><div style="overflow:auto"> <div id="tableToolbartable4e901df056a243487b98bddc79b062904f97" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc813d0bd847fa14823689647ee86bc4d91cc" permissionDes="发起流程"><a id="tableToolbarButtonc813d0bd847fa14823689647ee86bc4d91cc" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb56ca7b89f85984ead888331f2eafaf44967" permissionDes="删除管理员使用"><a id="tableToolbarButtonb56ca7b89f85984ead888331f2eafaf44967" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除管理员使用"><i class=""></i> 删除管理员使用</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2d88d6fe2379144ea478caff7c94b57abb68" permissionDes="编辑"><a id="tableToolbarButton2d88d6fe2379144ea478caff7c94b57abb68" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtona17c5b174e30944eefb8d476a2c0bc5cacda" permissionDes="删除"><a id="tableToolbarButtona17c5b174e30944eefb8d476a2c0bc5cacda" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><select id="table4e901df056a243487b98bddc79b062904f97workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable4e901df056a243487b98bddc79b062904f97" id="keyWordtable4e901df056a243487b98bddc79b062904f97" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable4e901df056a243487b98bddc79b062904f97" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable4e901df056a243487b98bddc79b062904f97" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable4e901df056a243487b98bddc79b062904f97"></div><table id="table4e901df056a243487b98bddc79b062904f97" datapermission="table4e901df056a243487b98bddc79b062904f97" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable4e901df056a243487b98bddc79b062904f97" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable4e901df056a243487b98bddc79b062904f97" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="AUTO_CODE" name="AUTO_CODE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="报送人">报送人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="REQUEST_USER" name="REQUEST_USER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="报送部门">报送部门</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="REQUEST_DEPT" name="REQUEST_DEPT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="报送日期">报送日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_START" name="REQUEST_DATE_START" >
<span id="REQUEST_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="报送日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_END" name="REQUEST_DATE_END" >
<span id="REQUEST_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="标题">标题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="TITLE" name="TITLE"
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
<script src="avicit/eformmodule/view/partyWorkReport/V1/bootstrap/view1721178344000.js?_=1721179104506"></script>
</html> 
