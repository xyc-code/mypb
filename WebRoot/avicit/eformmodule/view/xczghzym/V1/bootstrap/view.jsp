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
<div class="easyui-layout" fit="true" id="948e83e38b65360b018b84b608b4707f"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tablee381c507c0a7064b72f8e0044202eedf68be').setGridHeight(getJgridTableHeight($('#tablee381c507c0a7064b72f8e0044202eedf68be_div')));$('#tablee381c507c0a7064b72f8e0044202eedf68be').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablee381c507c0a7064b72f8e0044202eedf68be_div"><div style="overflow:auto"> <div id="tableToolbartablee381c507c0a7064b72f8e0044202eedf68be" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablee381c507c0a7064b72f8e0044202eedf68be" id="keyWordtablee381c507c0a7064b72f8e0044202eedf68be" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablee381c507c0a7064b72f8e0044202eedf68be" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablee381c507c0a7064b72f8e0044202eedf68be" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtoneff73bfbc941de47a7d85901a697b5b0e529" permissionDes="导出巡察整改归零表"><a id="tableToolbarButtoneff73bfbc941de47a7d85901a697b5b0e529" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出巡察整改归零表"><i class="fa fa-fw fa-download"></i> 导出巡察整改归零表</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton3014c5c2523f584a687a8dd3cf91edee39a7" permissionDes="智慧展示"><a id="tableToolbarButton3014c5c2523f584a687a8dd3cf91edee39a7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="智慧展示"><i class=""></i> 智慧展示</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonea65d5ef22431943d6d87a260ace47a31cd6" permissionDes="导出"><a id="tableToolbarButtonea65d5ef22431943d6d87a260ace47a31cd6" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertablee381c507c0a7064b72f8e0044202eedf68be"></div><table id="tablee381c507c0a7064b72f8e0044202eedf68be" datapermission="tablee381c507c0a7064b72f8e0044202eedf68be" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table86131a8b0a9126444729f1d8e6d525900671').setGridHeight(getJgridTableHeight($('#table86131a8b0a9126444729f1d8e6d525900671_div')));$('#table86131a8b0a9126444729f1d8e6d525900671').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table86131a8b0a9126444729f1d8e6d525900671_div"><div style="overflow:auto"> <div id="tableToolbartable86131a8b0a9126444729f1d8e6d525900671" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable86131a8b0a9126444729f1d8e6d525900671" id="keyWordtable86131a8b0a9126444729f1d8e6d525900671" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable86131a8b0a9126444729f1d8e6d525900671" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable86131a8b0a9126444729f1d8e6d525900671" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable86131a8b0a9126444729f1d8e6d525900671"></div><table id="table86131a8b0a9126444729f1d8e6d525900671" datapermission="table86131a8b0a9126444729f1d8e6d525900671" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable86131a8b0a9126444729f1d8e6d525900671" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable86131a8b0a9126444729f1d8e6d525900671" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="举一反三检查情况">举一反三检查情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_ONE_AND" name="INSPECTION_ONE_AND"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="第几次的循环">第几次的循环</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ATTRIBUTE_10" name="ATTRIBUTE_10"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="问题的具体内容">问题的具体内容</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ATTRIBUTE_04" name="ATTRIBUTE_04"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡察问题序号">巡察问题序号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_ON" name="INSPECTION_ON"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请日期">申请日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="INSPECTION_FROM_DATE_START" name="INSPECTION_FROM_DATE_START" >
<span id="INSPECTION_FROM_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="INSPECTION_FROM_DATE_END" name="INSPECTION_FROM_DATE_END" >
<span id="INSPECTION_FROM_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="产生问题的根本原因">产生问题的根本原因</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_END_ISSUE" name="INSPECTION_END_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="责任人">责任人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="INSPECTION_POSEN" name="INSPECTION_POSEN">
  <input class="form-control input-sm cellinput-addon" type="text" id="INSPECTION_POSENAlias" name="INSPECTION_POSENAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="整改措施完成情况">整改措施完成情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_END_ISSUE_QK" name="INSPECTION_END_ISSUE_QK"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="针对根本原因制定的归零措施">针对根本原因制定的归零措施</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_MEASURE_ISSUE" name="INSPECTION_MEASURE_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡察反馈的问题">巡察反馈的问题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_ISSUE" name="INSPECTION_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司主管业务部门审查日期">公司主管业务部门审查日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="INSPECTION_OPINION_END_DATE_START" name="INSPECTION_OPINION_END_DATE_START" >
<span id="INSPECTION_OPINION_END_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司主管业务部门审查日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="INSPECTION_OPINION_END_DATE_END" name="INSPECTION_OPINION_END_DATE_END" >
<span id="INSPECTION_OPINION_END_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="问题主要方面">问题主要方面</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ATTRIBUTE_01" name="ATTRIBUTE_01"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人单位">申请人单位</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="INSPECTION_FROM_POSEN_DEPT" name="INSPECTION_FROM_POSEN_DEPT">
  <input class="form-control input-sm cellinput-addon" type="text" id="INSPECTION_FROM_POSEN_DEPTAlias" name="INSPECTION_FROM_POSEN_DEPTAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人电话">申请人电话</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_FROM_POSEN_TEL" name="INSPECTION_FROM_POSEN_TEL"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_FROM_ON" name="INSPECTION_FROM_ON"
	class="form-control input-sm cellinput">
</div></div>
</form></div>
<div id="searchDialogtablee381c507c0a7064b72f8e0044202eedf68be" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablee381c507c0a7064b72f8e0044202eedf68be" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="主要方面">主要方面</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="LIST_MAINLY" name="LIST_MAINLY"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发现的问题">发现的问题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_ISSUE" name="MANIFEST_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="责任人">责任人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="MANIFEST_POSEN" name="MANIFEST_POSEN">
  <input class="form-control input-sm cellinput-addon" type="text" id="MANIFEST_POSENAlias" name="MANIFEST_POSENAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="问题的具体内容">问题的具体内容</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_ISSUE_CONT" name="MANIFEST_ISSUE_CONT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="整改措施具体内容 （含措施分解）">整改措施具体内容 （含措施分解）</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_MEASURE" name="MANIFEST_MEASURE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="业务主管 部门会签">业务主管 部门会签</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_QIAN" name="MANIFEST_QIAN"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="举一反三情况">举一反三情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_ONE_AND" name="MANIFEST_ONE_AND"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡查问题序号">巡查问题序号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ATTRIBUTE_02" name="ATTRIBUTE_02"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="责任领导">责任领导</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_LEADERSHIP" name="MANIFEST_LEADERSHIP"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="下发时间">下发时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DATE_MANIFEST_START" name="DATE_MANIFEST_START" >
<span id="DATE_MANIFEST_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="下发时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DATE_MANIFEST_END" name="DATE_MANIFEST_END" >
<span id="DATE_MANIFEST_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="清单状态">清单状态</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="ATTRIBUTE_01" name="ATTRIBUTE_01" title="清单状态" isNull="true" lookupCode="ATTRIBUTE_01" />
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
<script src="avicit/eformmodule/view/xczghzym/V1/bootstrap/view1720596439000.js?_=1720596461858"></script>
<script src="static/js/platform/pan/download.js"></script>
<script src="avicit/pb/dyntaskchecklist/js/DynTaskChecklist.js"></script>
</html> 
