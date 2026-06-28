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
<div class="easyui-layout" fit="true" id="402811817f241b5d017f2ebac61206da"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tableafaf7602a9b50849bc688537830a1a60ac21').setGridHeight(getJgridTableHeight($('#tableafaf7602a9b50849bc688537830a1a60ac21_div')));$('#tableafaf7602a9b50849bc688537830a1a60ac21').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tableafaf7602a9b50849bc688537830a1a60ac21_div"><div style="overflow:auto"> <div id="tableToolbartableafaf7602a9b50849bc688537830a1a60ac21" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtoneea9a95578db7b4e9698abb512af103abd7a" permissionDes="发起流程"><a id="tableToolbarButtoneea9a95578db7b4e9698abb512af103abd7a" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtone09ed603b54b3e44d4e907ac9bdea15b3710" permissionDes="删除"><a id="tableToolbarButtone09ed603b54b3e44d4e907ac9bdea15b3710" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><select id="tableafaf7602a9b50849bc688537830a1a60ac21workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtableafaf7602a9b50849bc688537830a1a60ac21" id="keyWordtableafaf7602a9b50849bc688537830a1a60ac21" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttableafaf7602a9b50849bc688537830a1a60ac21" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltableafaf7602a9b50849bc688537830a1a60ac21" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertableafaf7602a9b50849bc688537830a1a60ac21"></div><table id="tableafaf7602a9b50849bc688537830a1a60ac21" datapermission="tableafaf7602a9b50849bc688537830a1a60ac21" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tablef6ab1b986bbef34e8af8ac51e021114e6a17').setGridHeight(getJgridTableHeight($('#tablef6ab1b986bbef34e8af8ac51e021114e6a17_div')));$('#tablef6ab1b986bbef34e8af8ac51e021114e6a17').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablef6ab1b986bbef34e8af8ac51e021114e6a17_div"><div style="overflow:auto"> <div id="tableToolbartablef6ab1b986bbef34e8af8ac51e021114e6a17" class="toolbar" style="height:38px;"></div><div id="Pagertablef6ab1b986bbef34e8af8ac51e021114e6a17"></div><table id="tablef6ab1b986bbef34e8af8ac51e021114e6a17" datapermission="tablef6ab1b986bbef34e8af8ac51e021114e6a17" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtableafaf7602a9b50849bc688537830a1a60ac21" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtableafaf7602a9b50849bc688537830a1a60ac21" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="上报人">上报人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="REQUEST_USER" name="REQUEST_USER">
  <input class="form-control input-sm cellinput-addon" type="text" id="REQUEST_USERAlias" name="REQUEST_USERAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
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
<script src="avicit/eformmodule/view/partyOrganRelationTransfer/V1/bootstrap/view1695804360000.js?_=1698828558397"></script>
</html> 
