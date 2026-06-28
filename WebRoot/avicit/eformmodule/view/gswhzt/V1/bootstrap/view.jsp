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
<div class="easyui-layout" fit="true" id="2c908c528e79da22018e7d7a910b27de"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table02ce457f30c6bf4a9c59ee2efab2036a258d').setGridHeight(getJgridTableHeight($('#table02ce457f30c6bf4a9c59ee2efab2036a258d_div')));$('#table02ce457f30c6bf4a9c59ee2efab2036a258d').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table02ce457f30c6bf4a9c59ee2efab2036a258d_div"><div style="overflow:auto"> <div id="tableToolbartable02ce457f30c6bf4a9c59ee2efab2036a258d" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton785a3941d9e88e4673188fa009345052113c" permissionDes="发起流程"><a id="tableToolbarButton785a3941d9e88e4673188fa009345052113c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton6f2958f1383f59472f887d5a0b94375c9242" permissionDes="删除"><a id="tableToolbarButton6f2958f1383f59472f887d5a0b94375c9242" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonbe924549e6eb5d40c57ba900da42a0b45d45" permissionDes="发起流程"><a id="tableToolbarButtonbe924549e6eb5d40c57ba900da42a0b45d45" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d" id="keyWordtable02ce457f30c6bf4a9c59ee2efab2036a258d" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable02ce457f30c6bf4a9c59ee2efab2036a258d" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable02ce457f30c6bf4a9c59ee2efab2036a258d" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table02ce457f30c6bf4a9c59ee2efab2036a258dworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div></div><div id="Pagertable02ce457f30c6bf4a9c59ee2efab2036a258d"></div><table id="table02ce457f30c6bf4a9c59ee2efab2036a258d" datapermission="table02ce457f30c6bf4a9c59ee2efab2036a258d" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable02ce457f30c6bf4a9c59ee2efab2036a258d" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable02ce457f30c6bf4a9c59ee2efab2036a258d" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="企业文化推进员姓名">企业文化推进员姓名</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_NAME" name="USER_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="管理归口单位">管理归口单位</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANAGER_UNIT" name="MANAGER_UNIT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="载体类型">载体类型</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ZT_TYPE" name="ZT_TYPE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="应用VI要素">应用VI要素</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="YS" name="YS"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="使用周期">使用周期</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="SYZQ" name="SYZQ"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="规格型号">规格型号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="GG_MODE" name="GG_MODE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司文化载体类型">公司文化载体类型</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="WH_ZT_TYPE" name="WH_ZT_TYPE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="基层单位文化载体类型">基层单位文化载体类型</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="JCDW_ZT_TYPE" name="JCDW_ZT_TYPE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="使用单位名称">使用单位名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DRAF_UNIT" name="DRAF_UNIT"
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
<script src="avicit/eformmodule/view/gswhzt/V1/bootstrap/view1731982299000.js?_=1731985525076"></script>
</html> 
