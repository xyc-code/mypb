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
<div class="easyui-layout" fit="true" id="2c9419a9899a619d01899b1550f60349"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table8044c90df21ddf41f489be57e0db29b5f07d').setGridHeight(getJgridTableHeight($('#table8044c90df21ddf41f489be57e0db29b5f07d_div')));$('#table8044c90df21ddf41f489be57e0db29b5f07d').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table8044c90df21ddf41f489be57e0db29b5f07d_div"><div style="overflow:auto"> <div id="tableToolbartable8044c90df21ddf41f489be57e0db29b5f07d" class="toolbar" style="height:38px;"><div class="toolbar-right"><select id="table8044c90df21ddf41f489be57e0db29b5f07dworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" selected="selected">全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable8044c90df21ddf41f489be57e0db29b5f07d" id="keyWordtable8044c90df21ddf41f489be57e0db29b5f07d" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable8044c90df21ddf41f489be57e0db29b5f07d" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable8044c90df21ddf41f489be57e0db29b5f07d" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192" permissionDes="发起流程"><a id="tableToolbarButton2824c40c629e5d45d1ca7107ef31ab414192" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb390c45823581a488e1b2966a196b28d8b9b" permissionDes="编辑"><a id="tableToolbarButtonb390c45823581a488e1b2966a196b28d8b9b" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton28d30d84eb412d49725a6c916c18838a07c9" permissionDes="删除"><a id="tableToolbarButton28d30d84eb412d49725a6c916c18838a07c9" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtoneee028327d36714b7428455c8f490c664a29" permissionDes="导出"><a id="tableToolbarButtoneee028327d36714b7428455c8f490c664a29" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-copy"></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8501ea51ff99cd49f389de69839c25dc6c1f" permissionDes="统计考核"><a id="tableToolbarButton8501ea51ff99cd49f389de69839c25dc6c1f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="统计考核"><i class="fa fa-fw fa-check"></i> 统计考核</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton572c894477149543a1c8cbe23d5f112df10c" permissionDes="查看明细"><a id="tableToolbarButton572c894477149543a1c8cbe23d5f112df10c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="查看明细"><i class="fa fa-fw fa-eye"></i> 查看明细</a></sec:accesscontrollist>
</div></div><div id="Pagertable8044c90df21ddf41f489be57e0db29b5f07d"></div><table id="table8044c90df21ddf41f489be57e0db29b5f07d" datapermission="table8044c90df21ddf41f489be57e0db29b5f07d" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table3cb0e75fa3419b461948150b19b840339f17').setGridHeight(getJgridTableHeight($('#table3cb0e75fa3419b461948150b19b840339f17_div')));$('#table3cb0e75fa3419b461948150b19b840339f17').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table3cb0e75fa3419b461948150b19b840339f17_div"><div style="overflow:auto"> <div id="tableToolbartable3cb0e75fa3419b461948150b19b840339f17" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable3cb0e75fa3419b461948150b19b840339f17" id="keyWordtable3cb0e75fa3419b461948150b19b840339f17" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable3cb0e75fa3419b461948150b19b840339f17" class="icon icon-search form-tool-searchicon"></label>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton0e57707a77b4c348133afab0a6f50e877278" permissionDes="导出"><a id="tableToolbarButton0e57707a77b4c348133afab0a6f50e877278" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-upload"></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertable3cb0e75fa3419b461948150b19b840339f17"></div><table id="table3cb0e75fa3419b461948150b19b840339f17" datapermission="table3cb0e75fa3419b461948150b19b840339f17" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable8044c90df21ddf41f489be57e0db29b5f07d" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable8044c90df21ddf41f489be57e0db29b5f07d" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="拟稿人">拟稿人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DRAFTSMAN" name="DRAFTSMAN">
  <input class="form-control input-sm cellinput-addon" type="text" id="DRAFTSMANAlias" name="DRAFTSMANAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人党支部">申请人党支部</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="拟稿时间">拟稿时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DRAFTING_TIME_START" name="DRAFTING_TIME_START" >
<span id="DRAFTING_TIME_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="拟稿时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DRAFTING_TIME_END" name="DRAFTING_TIME_END" >
<span id="DRAFTING_TIME_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="拟稿人部门">拟稿人部门</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DEPT_ID" name="DEPT_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="DEPT_IDAlias" name="DEPT_IDAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="当前季度">当前季度</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="QUARTER" name="QUARTER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系电话">联系电话</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="TEL" name="TEL"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="编号">编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NO" name="NO"
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
<script src="avicit/eformmodule/view/DYJFZGL/V1/bootstrap/view1729480763000.js?_=1729480767914"></script>
<script src="avicit/pb/scoring/dynpoints/js/DynCumulativeScoring.js"></script>
</html> 
