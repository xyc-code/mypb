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
<div class="easyui-layout" fit="true" id="948e83e38fa41ec6018fa8039910441a"> <div data-options="region:'west',split:true,disabled:false ,width:fixwidth(0.2,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;"><div><div id="tree74aa2aa3f04bb8481f6af1465fa5ecd26213treeTool" class="ztree-submenu rMenu" style="visibility: hidden;">
<sec:accesscontrollist hasPermission="3" domainObject="treeButton79658a0af800ed4bdda86dfe3f7a614f6fb9" permissionDes="添加"><a href="javascript:void(0)" class="list-group-item" id="treeButton79658a0af800ed4bdda86dfe3f7a614f6fb9"><i class="fa fa-plus" style="margin-left: -35px; margin-right: 20px;"></i>添加</a></sec:accesscontrollist><sec:accesscontrollist hasPermission="3" domainObject="treeButton7afb5520bec35d4d8928ea7272eab69fa409" permissionDes="编辑"><a href="javascript:void(0)" class="list-group-item" id="treeButton7afb5520bec35d4d8928ea7272eab69fa409"><i class="fa fa-file-text-o" style="margin-left: -35px; margin-right: 20px;"></i>编辑</a></sec:accesscontrollist><sec:accesscontrollist hasPermission="3" domainObject="treeButtona5ac2535abf4454334da94927d6869102f64" permissionDes="删除"><a href="javascript:void(0)" class="list-group-item" id="treeButtona5ac2535abf4454334da94927d6869102f64"><i class="fa fa-trash-o" style="margin-left: -35px; margin-right: 20px;"></i>删除</a></sec:accesscontrollist></div>
<input type="hidden" id="tree74aa2aa3f04bb8481f6af1465fa5ecd26213searchStatus" value="0"><div class="input-group  input-group-sm"><input  class="form-control" placeholder="回车查询" type="text" id="txt_tree74aa2aa3f04bb8481f6af1465fa5ecd26213" name="txt_tree74aa2aa3f04bb8481f6af1465fa5ecd26213"><span class="input-group-btn"><button id="searchbtns_tree74aa2aa3f04bb8481f6af1465fa5ecd26213" class="btn btn-default ztree-search" type="button"><span class="glyphicon glyphicon-search"></span></button></span></div><ul id="tree74aa2aa3f04bb8481f6af1465fa5ecd26213" class="ztree eform_component"></ul></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(0.8,e),height:fixheight(1.0,e),onResize:function(a){$('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').setGridHeight(getJgridTableHeight($('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3_div')));$('#table92f9acf2ae17794c91c8f1d0ce196a02e7b3').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table92f9acf2ae17794c91c8f1d0ce196a02e7b3_div"><div style="overflow:auto"> <div id="tableToolbartable92f9acf2ae17794c91c8f1d0ce196a02e7b3" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8585dfa696e4f942f458f3c50188380ee44c" permissionDes="添加"><a id="tableToolbarButton8585dfa696e4f942f458f3c50188380ee44c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class=""></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonaec216746169844f57084e233743da1999cd" permissionDes="编辑"><a id="tableToolbarButtonaec216746169844f57084e233743da1999cd" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton46b918f80e00334dd9c85f25eca56733f84d" permissionDes="删除"><a id="tableToolbarButton46b918f80e00334dd9c85f25eca56733f84d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3" id="keyWordtable92f9acf2ae17794c91c8f1d0ce196a02e7b3" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable92f9acf2ae17794c91c8f1d0ce196a02e7b3" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable92f9acf2ae17794c91c8f1d0ce196a02e7b3" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable92f9acf2ae17794c91c8f1d0ce196a02e7b3"></div><table id="table92f9acf2ae17794c91c8f1d0ce196a02e7b3" datapermission="table92f9acf2ae17794c91c8f1d0ce196a02e7b3" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable92f9acf2ae17794c91c8f1d0ce196a02e7b3" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable92f9acf2ae17794c91c8f1d0ce196a02e7b3" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="资产名称">资产名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ZC_NAME" name="ZC_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="管理人">管理人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="ZC_MANAGER_USER" name="ZC_MANAGER_USER">
  <input class="form-control input-sm cellinput-addon" type="text" id="ZC_MANAGER_USERAlias" name="ZC_MANAGER_USERAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="资产管理单位">资产管理单位</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="ZC_MANAGER_NUIT" name="ZC_MANAGER_NUIT">
  <input class="form-control input-sm cellinput-addon" type="text" id="ZC_MANAGER_NUITAlias" name="ZC_MANAGER_NUITAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="购入时间">购入时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="ZC_IN_DATE_START" name="ZC_IN_DATE_START" >
<span id="ZC_IN_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="购入时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="ZC_IN_DATE_END" name="ZC_IN_DATE_END" >
<span id="ZC_IN_DATE_END_button" class="input-group-addon data-box-act">
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
<script src="avicit/eformmodule/view/gdzcgl/V1/bootstrap/view1716786262000.js?_=1716786548526"></script>
</html> 
