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
<div class="easyui-layout" fit="true" id="948e83e3828f72f301828fed399121dd"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablea77d329821be034257e8ff70a5eebf51d9c7').setGridHeight(getJgridTableHeight($('#tablea77d329821be034257e8ff70a5eebf51d9c7_div')));$('#tablea77d329821be034257e8ff70a5eebf51d9c7').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablea77d329821be034257e8ff70a5eebf51d9c7_div"><div style="overflow:auto"> <div id="tableToolbartablea77d329821be034257e8ff70a5eebf51d9c7" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton40b8015c815af84ae02b1337ac1a7b2acd04" permissionDes="发起流程"><a id="tableToolbarButton40b8015c815af84ae02b1337ac1a7b2acd04" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc7ba400ca5ba384460d8e0d70562fda86cfc" permissionDes="删除"><a id="tableToolbarButtonc7ba400ca5ba384460d8e0d70562fda86cfc" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton06e5065bf5d34c4d16886094db9286e6eab8" permissionDes="编辑"><a id="tableToolbarButton06e5065bf5d34c4d16886094db9286e6eab8" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
</div><div class="toolbar-right"><select id="tablea77d329821be034257e8ff70a5eebf51d9c7workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablea77d329821be034257e8ff70a5eebf51d9c7" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertablea77d329821be034257e8ff70a5eebf51d9c7"></div><table id="tablea77d329821be034257e8ff70a5eebf51d9c7" datapermission="tablea77d329821be034257e8ff70a5eebf51d9c7" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablea77d329821be034257e8ff70a5eebf51d9c7" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablea77d329821be034257e8ff70a5eebf51d9c7" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="AUTO_CODE" name="AUTO_CODE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_NAME" name="USER_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请日期">申请日期</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="REQUST_DATE" name="REQUST_DATE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人所在党支部">申请人所在党支部</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
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
<script src="avicit/eformmodule/view/HJXJQS/V1/bootstrap/view1731483321000.js?_=1731483346296"></script>
</html> 
