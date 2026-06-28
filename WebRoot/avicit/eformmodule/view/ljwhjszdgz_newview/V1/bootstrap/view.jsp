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
<div class="easyui-layout" fit="true" id="948e83e3938bb70a019394507ac7559a"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').setGridHeight(getJgridTableHeight($('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0_div')));$('#table5a574f3b8e21794fd0cbbf98d7105eaec8b0').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table5a574f3b8e21794fd0cbbf98d7105eaec8b0_div"><div style="overflow:auto"> <div id="tableToolbartable5a574f3b8e21794fd0cbbf98d7105eaec8b0" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0" id="keyWordtable5a574f3b8e21794fd0cbbf98d7105eaec8b0" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable5a574f3b8e21794fd0cbbf98d7105eaec8b0" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable5a574f3b8e21794fd0cbbf98d7105eaec8b0" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table5a574f3b8e21794fd0cbbf98d7105eaec8b0workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtone2bc0545488b694699c850c6317ad5f625d8" permissionDes="发起流程"><a id="tableToolbarButtone2bc0545488b694699c850c6317ad5f625d8" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton9944c3dac4f7c04bd32bf8a06cd12105673c" permissionDes="删除"><a id="tableToolbarButton9944c3dac4f7c04bd32bf8a06cd12105673c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton91bbd8963df1c1490c6b4af3665e3f462ce2" permissionDes="维护重点工作"><a id="tableToolbarButton91bbd8963df1c1490c6b4af3665e3f462ce2" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="维护重点工作"><i class=""></i> 维护重点工作</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton71d93cf7cdede241daa875029031a973b346" permissionDes="年度廉洁文化建设重点工作"><a id="tableToolbarButton71d93cf7cdede241daa875029031a973b346" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="年度廉洁文化建设重点工作"><i class=""></i> 年度廉洁文化建设重点工作</a></sec:accesscontrollist>
</div></div><div id="Pagertable5a574f3b8e21794fd0cbbf98d7105eaec8b0"></div><table id="table5a574f3b8e21794fd0cbbf98d7105eaec8b0" datapermission="table5a574f3b8e21794fd0cbbf98d7105eaec8b0" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table6be390419ea36d4cb41b80ceffba6333f032').setGridHeight(getJgridTableHeight($('#table6be390419ea36d4cb41b80ceffba6333f032_div')));$('#table6be390419ea36d4cb41b80ceffba6333f032').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table6be390419ea36d4cb41b80ceffba6333f032_div"><div style="overflow:auto"> <div id="tableToolbartable6be390419ea36d4cb41b80ceffba6333f032" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable6be390419ea36d4cb41b80ceffba6333f032" id="keyWordtable6be390419ea36d4cb41b80ceffba6333f032" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable6be390419ea36d4cb41b80ceffba6333f032" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable6be390419ea36d4cb41b80ceffba6333f032" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable6be390419ea36d4cb41b80ceffba6333f032"></div><table id="table6be390419ea36d4cb41b80ceffba6333f032" datapermission="table6be390419ea36d4cb41b80ceffba6333f032" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable6be390419ea36d4cb41b80ceffba6333f032" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable6be390419ea36d4cb41b80ceffba6333f032" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="工作分类">工作分类</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="WORK_TYPE" name="WORK_TYPE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="主要内容">主要内容</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MAIN_CONTENT" name="MAIN_CONTENT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="内容分解">内容分解</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="CONTENT_LIST" name="CONTENT_LIST"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="时间节点">时间节点</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DATE_CHECK_START" name="DATE_CHECK_START" >
<span id="DATE_CHECK_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="时间节点">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DATE_CHECK_END" name="DATE_CHECK_END" >
<span id="DATE_CHECK_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="完成情况">完成情况</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="WORK_STATUS" name="WORK_STATUS" title="完成情况" isNull="true" lookupCode="JW_FIISH_STSTUS" />
</div></div>
</form></div>
<div id="searchDialogtable5a574f3b8e21794fd0cbbf98d7105eaec8b0" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable5a574f3b8e21794fd0cbbf98d7105eaec8b0" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="自动编码">自动编码</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="AUTO_CODE" name="AUTO_CODE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请单位">申请单位</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DEPT_NAME" name="DEPT_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_NAME" name="USER_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请日期">申请日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_START" name="REQUEST_DATE_START" >
<span id="REQUEST_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_END" name="REQUEST_DATE_END" >
<span id="REQUEST_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
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
<script src="avicit/eformmodule/view/ljwhjszdgz_newview/V1/bootstrap/view1733365423000.js?_=1733365426194"></script>
</html> 
