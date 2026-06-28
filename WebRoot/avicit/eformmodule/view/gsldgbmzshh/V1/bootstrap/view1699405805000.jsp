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
<div class="easyui-layout" fit="true" id="2c908c1d89cef9c70189cf10be7d06be"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').setGridHeight(getJgridTableHeight($('#tablecc1d3123e0feb64706383d3b0eecf01fcec1_div')));$('#tablecc1d3123e0feb64706383d3b0eecf01fcec1').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablecc1d3123e0feb64706383d3b0eecf01fcec1_div"><div style="overflow:auto"> <div id="tableToolbartablecc1d3123e0feb64706383d3b0eecf01fcec1" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1" id="keyWordtablecc1d3123e0feb64706383d3b0eecf01fcec1" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablecc1d3123e0feb64706383d3b0eecf01fcec1" class="icon icon-search form-tool-searchicon"></label>
</div>
<select id="tablecc1d3123e0feb64706383d3b0eecf01fcec1workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablecc1d3123e0feb64706383d3b0eecf01fcec1" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonfb469ee7c1cd4348cd298c80df17f01defbd" permissionDes="发起流程"><a id="tableToolbarButtonfb469ee7c1cd4348cd298c80df17f01defbd" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonde59ac34c855d14ae18857a4654d9dd27c88" permissionDes="导出"><a id="tableToolbarButtonde59ac34c855d14ae18857a4654d9dd27c88" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton654d3a13915bc946e0dbb5da04a93e983565" permissionDes="删除"><a id="tableToolbarButton654d3a13915bc946e0dbb5da04a93e983565" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertablecc1d3123e0feb64706383d3b0eecf01fcec1"></div><table id="tablecc1d3123e0feb64706383d3b0eecf01fcec1" datapermission="tablecc1d3123e0feb64706383d3b0eecf01fcec1" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablecc1d3123e0feb64706383d3b0eecf01fcec1" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablecc1d3123e0feb64706383d3b0eecf01fcec1" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="单位">单位</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DEMOCRACY_DEPT" name="DEMOCRACY_DEPT">
  <input class="form-control input-sm cellinput-addon" type="text" id="DEMOCRACY_DEPTAlias" name="DEMOCRACY_DEPTAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="主管公司领导是否参加">主管公司领导是否参加</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="LEAD_JOIN" name="LEAD_JOIN" title="主管公司领导是否参加" isNull="true" lookupCode="IS_COMPLETION" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司领导姓名">公司领导姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="LEAD_NAME" name="LEAD_NAME">
  <input class="form-control input-sm cellinput-addon" type="text" id="LEAD_NAMEAlias" name="LEAD_NAMEAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="召开日期报送">召开日期报送</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DEMOCRACY_DATE_START" name="DEMOCRACY_DATE_START" >
<span id="DEMOCRACY_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="召开日期报送">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DEMOCRACY_DATE_END" name="DEMOCRACY_DATE_END" >
<span id="DEMOCRACY_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="会后材料报送">会后材料报送</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DEMOCRACY_END_DATE_START" name="DEMOCRACY_END_DATE_START" >
<span id="DEMOCRACY_END_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="会后材料报送">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="DEMOCRACY_END_DATE_END" name="DEMOCRACY_END_DATE_END" >
<span id="DEMOCRACY_END_DATE_END_button" class="input-group-addon data-box-act">
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
<script src="avicit/eformmodule/view/gsldgbmzshh/V1/bootstrap/view1699405805000.js?_=1699405808059"></script>
</html> 
