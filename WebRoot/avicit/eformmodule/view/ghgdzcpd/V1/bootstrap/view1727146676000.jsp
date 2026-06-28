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
<div class="easyui-layout" fit="true" id="948e83e38fa41ec6018fb88f06a67f82"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table3dd6af8c68bd214fed99bf5a898f951bdf73').setGridHeight(getJgridTableHeight($('#table3dd6af8c68bd214fed99bf5a898f951bdf73_div')));$('#table3dd6af8c68bd214fed99bf5a898f951bdf73').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table3dd6af8c68bd214fed99bf5a898f951bdf73_div"><div style="overflow:auto"> <div id="tableToolbartable3dd6af8c68bd214fed99bf5a898f951bdf73" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73" id="keyWordtable3dd6af8c68bd214fed99bf5a898f951bdf73" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable3dd6af8c68bd214fed99bf5a898f951bdf73" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable3dd6af8c68bd214fed99bf5a898f951bdf73" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonf0b443e49b1e3841f2f8cd0fdd0409a29f54" permissionDes="添加"><a id="tableToolbarButtonf0b443e49b1e3841f2f8cd0fdd0409a29f54" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb3d7dc0f81e3b44e33d8a3ed2010d917ad15" permissionDes="编辑"><a id="tableToolbarButtonb3d7dc0f81e3b44e33d8a3ed2010d917ad15" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton6f73846d2c41d5495628972e7f9e19451973" permissionDes="删除"><a id="tableToolbarButton6f73846d2c41d5495628972e7f9e19451973" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable3dd6af8c68bd214fed99bf5a898f951bdf73"></div><table id="table3dd6af8c68bd214fed99bf5a898f951bdf73" datapermission="table3dd6af8c68bd214fed99bf5a898f951bdf73" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').setGridHeight(getJgridTableHeight($('#table773b3ea170ba114acd280fd9cbb77cc08f2f_div')));$('#table773b3ea170ba114acd280fd9cbb77cc08f2f').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table773b3ea170ba114acd280fd9cbb77cc08f2f_div"><div style="overflow:auto"> <div id="tableToolbartable773b3ea170ba114acd280fd9cbb77cc08f2f" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtona569f30512ab05498f08f207993832984e3a" permissionDes="行编辑保存"><a id="tableToolbarButtona569f30512ab05498f08f207993832984e3a" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="行编辑保存"><i class=""></i> 行编辑保存</a></sec:accesscontrollist>
</div></div><div id="Pagertable773b3ea170ba114acd280fd9cbb77cc08f2f"></div><table id="table773b3ea170ba114acd280fd9cbb77cc08f2f" datapermission="table773b3ea170ba114acd280fd9cbb77cc08f2f" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable3dd6af8c68bd214fed99bf5a898f951bdf73" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable3dd6af8c68bd214fed99bf5a898f951bdf73" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="开始时间">开始时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="S_DATE_START" name="S_DATE_START" >
<span id="S_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="开始时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="S_DATE_END" name="S_DATE_END" >
<span id="S_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="盘点部门">盘点部门</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PD_DEPT" name="PD_DEPT"
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
<script src="avicit/eformmodule/view/ghgdzcpd/V1/bootstrap/view1727146676000.js?_=1727248162920"></script>
</html> 
