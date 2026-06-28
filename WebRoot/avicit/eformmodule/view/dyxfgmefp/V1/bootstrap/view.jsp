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
<div class="easyui-layout" fit="true" id="2c908c1d8e78612f018e7933c0e419bf"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tabled722ccc49afb23421c68b17138688aeaea62').setGridHeight(getJgridTableHeight($('#tabled722ccc49afb23421c68b17138688aeaea62_div')));$('#tabled722ccc49afb23421c68b17138688aeaea62').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tabled722ccc49afb23421c68b17138688aeaea62_div"><div style="overflow:auto"> <div id="tableToolbartabled722ccc49afb23421c68b17138688aeaea62" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtabled722ccc49afb23421c68b17138688aeaea62" id="keyWordtabled722ccc49afb23421c68b17138688aeaea62" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttabled722ccc49afb23421c68b17138688aeaea62" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltabled722ccc49afb23421c68b17138688aeaea62" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonad1bd9c102e1994b8398e785889094dae554" permissionDes="添加"><a id="tableToolbarButtonad1bd9c102e1994b8398e785889094dae554" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc19334bdefe4694b79186df3b82fc2add05c" permissionDes="编辑"><a id="tableToolbarButtonc19334bdefe4694b79186df3b82fc2add05c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton75cbf6a3597a3449f57841a0e04cc02976bb" permissionDes="删除"><a id="tableToolbarButton75cbf6a3597a3449f57841a0e04cc02976bb" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertabled722ccc49afb23421c68b17138688aeaea62"></div><table id="tabled722ccc49afb23421c68b17138688aeaea62" datapermission="tabled722ccc49afb23421c68b17138688aeaea62" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtabled722ccc49afb23421c68b17138688aeaea62" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtabled722ccc49afb23421c68b17138688aeaea62" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织名称">党组织名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织人数">党组织人数</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="PARTY_COUNT_START" name="PARTY_COUNT_START" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织人数">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="PARTY_COUNT_END" name="PARTY_COUNT_END" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="名额">名额</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="PARTY_ME_START" name="PARTY_ME_START" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="名额">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="PARTY_ME_END" name="PARTY_ME_END" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度名额">年度名额</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="ND_ME_START" name="ND_ME_START" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度名额">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="ND_ME_END" name="ND_ME_END" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="总计">总计</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="COUNT_START" name="COUNT_START" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="总计">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="COUNT_END" name="COUNT_END" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度">年度</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="YEAR" name="YEAR"
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
<script src="avicit/eformmodule/view/dyxfgmefp/V1/bootstrap/view1721106817000.js?_=1721106825863"></script>
</html> 
