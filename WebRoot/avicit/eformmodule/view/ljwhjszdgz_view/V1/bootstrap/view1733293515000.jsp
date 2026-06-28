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
<div class="easyui-layout" fit="true" id="948e83e3938bb70a0193903e2a03477a"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tableaaf2f914472161491f69faa073e1bca92be4').setGridHeight(getJgridTableHeight($('#tableaaf2f914472161491f69faa073e1bca92be4_div')));$('#tableaaf2f914472161491f69faa073e1bca92be4').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tableaaf2f914472161491f69faa073e1bca92be4_div"><div style="overflow:auto"> <div id="tableToolbartableaaf2f914472161491f69faa073e1bca92be4" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtableaaf2f914472161491f69faa073e1bca92be4" id="keyWordtableaaf2f914472161491f69faa073e1bca92be4" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttableaaf2f914472161491f69faa073e1bca92be4" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltableaaf2f914472161491f69faa073e1bca92be4" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="tableaaf2f914472161491f69faa073e1bca92be4workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc71c6ff50d76984c7678283207620c887cee" permissionDes="发起流程"><a id="tableToolbarButtonc71c6ff50d76984c7678283207620c887cee" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton37dd9504685fce4eab78bce0f984d444d4ed" permissionDes="删除"><a id="tableToolbarButton37dd9504685fce4eab78bce0f984d444d4ed" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtona7faccc9056bb6484b5b822b5a5ccb828f2f" permissionDes="维护重点工作"><a id="tableToolbarButtona7faccc9056bb6484b5b822b5a5ccb828f2f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="维护重点工作"><i class=""></i> 维护重点工作</a></sec:accesscontrollist>
</div></div><div id="Pagertableaaf2f914472161491f69faa073e1bca92be4"></div><table id="tableaaf2f914472161491f69faa073e1bca92be4" datapermission="tableaaf2f914472161491f69faa073e1bca92be4" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table2a947660ff8a7a4691098a13ab5bbe120620').setGridHeight(getJgridTableHeight($('#table2a947660ff8a7a4691098a13ab5bbe120620_div')));$('#table2a947660ff8a7a4691098a13ab5bbe120620').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table2a947660ff8a7a4691098a13ab5bbe120620_div"><div style="overflow:auto"> <div id="tableToolbartable2a947660ff8a7a4691098a13ab5bbe120620" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable2a947660ff8a7a4691098a13ab5bbe120620" id="keyWordtable2a947660ff8a7a4691098a13ab5bbe120620" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable2a947660ff8a7a4691098a13ab5bbe120620" class="icon icon-search form-tool-searchicon"></label>
</div>
</div></div><div id="Pagertable2a947660ff8a7a4691098a13ab5bbe120620"></div><table id="table2a947660ff8a7a4691098a13ab5bbe120620" datapermission="table2a947660ff8a7a4691098a13ab5bbe120620" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtableaaf2f914472161491f69faa073e1bca92be4" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtableaaf2f914472161491f69faa073e1bca92be4" > <div class="col-xs-6 formcell">
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
<script src="avicit/eformmodule/view/ljwhjszdgz_view/V1/bootstrap/view1733293515000.js?_=1733293519659"></script>
</html> 
