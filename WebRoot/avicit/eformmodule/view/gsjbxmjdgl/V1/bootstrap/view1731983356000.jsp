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
<div class="easyui-layout" fit="true" id="948e83e39319e8fe01933de7433e7bf6"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table5fbaa2786649cf4807885d63184c78d6e937').setGridHeight(getJgridTableHeight($('#table5fbaa2786649cf4807885d63184c78d6e937_div')));$('#table5fbaa2786649cf4807885d63184c78d6e937').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table5fbaa2786649cf4807885d63184c78d6e937_div"><div style="overflow:auto"> <div id="tableToolbartable5fbaa2786649cf4807885d63184c78d6e937" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable5fbaa2786649cf4807885d63184c78d6e937" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable5fbaa2786649cf4807885d63184c78d6e937"></div><table id="table5fbaa2786649cf4807885d63184c78d6e937" datapermission="table5fbaa2786649cf4807885d63184c78d6e937" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table5afd1347b931db4bb2084a311bb9a8c97f38').setGridHeight(getJgridTableHeight($('#table5afd1347b931db4bb2084a311bb9a8c97f38_div')));$('#table5afd1347b931db4bb2084a311bb9a8c97f38').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table5afd1347b931db4bb2084a311bb9a8c97f38_div"><div style="overflow:auto"> <div id="tableToolbartable5afd1347b931db4bb2084a311bb9a8c97f38" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton618ad19b2dae5d4e76b8f2c9f6b0f3674c43" permissionDes="发起流程"><a id="tableToolbarButton618ad19b2dae5d4e76b8f2c9f6b0f3674c43" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-fw fa-plus"></i> 发起流程</a></sec:accesscontrollist>
</div></div><div id="Pagertable5afd1347b931db4bb2084a311bb9a8c97f38"></div><table id="table5afd1347b931db4bb2084a311bb9a8c97f38" datapermission="table5afd1347b931db4bb2084a311bb9a8c97f38" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable5fbaa2786649cf4807885d63184c78d6e937" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable5fbaa2786649cf4807885d63184c78d6e937" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="BDBH" name="BDBH"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="SQR" name="SQR"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="承接课题名称">承接课题名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="CJKTMC" name="CJKTMC"
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
<script src="avicit/eformmodule/view/gsjbxmjdgl/V1/bootstrap/view1731983356000.js?_=1731997779931"></script>
<script src="avicit/pb/commandos/partycommandos/js/PartyCommandos.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js"></script>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/pb/commandos/partymilepost/js/PartyMilepost.js"></script>
</html> 
