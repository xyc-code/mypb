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
<div class="easyui-layout" fit="true" id="948e83e3881da2180188278d70666c6e"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').setGridHeight(getJgridTableHeight($('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10_div')));$('#tabled0598a703899cd4c45c8ff7af3c6f4d23c10').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tabled0598a703899cd4c45c8ff7af3c6f4d23c10_div"><div style="overflow:auto"> <div id="tableToolbartabled0598a703899cd4c45c8ff7af3c6f4d23c10" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10" id="keyWordtabled0598a703899cd4c45c8ff7af3c6f4d23c10" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttabled0598a703899cd4c45c8ff7af3c6f4d23c10" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltabled0598a703899cd4c45c8ff7af3c6f4d23c10" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="tabled0598a703899cd4c45c8ff7af3c6f4d23c10workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton5ad4e3dff92f5f413d39d580f29fbbf836d1" permissionDes="发起流程"><a id="tableToolbarButton5ad4e3dff92f5f413d39d580f29fbbf836d1" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton4dae522dfa753e49e94a01361ec214883bc1" permissionDes="删除"><a id="tableToolbarButton4dae522dfa753e49e94a01361ec214883bc1" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton83be1ae94b190d44de5a80ae9682da0e4ed4" permissionDes="导入"><a id="tableToolbarButton83be1ae94b190d44de5a80ae9682da0e4ed4" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton844ebdf0c954c04b38583e0f3785882be4d4" permissionDes="导出"><a id="tableToolbarButton844ebdf0c954c04b38583e0f3785882be4d4" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertabled0598a703899cd4c45c8ff7af3c6f4d23c10"></div><table id="tabled0598a703899cd4c45c8ff7af3c6f4d23c10" datapermission="tabled0598a703899cd4c45c8ff7af3c6f4d23c10" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtabled0598a703899cd4c45c8ff7af3c6f4d23c10" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtabled0598a703899cd4c45c8ff7af3c6f4d23c10" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系人姓名">联系人姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="COMMANDOES_POSEN" name="COMMANDOES_POSEN">
  <input class="form-control input-sm cellinput-addon" type="text" id="COMMANDOES_POSENAlias" name="COMMANDOES_POSENAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队长">突击队队长</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_CAPTAINS" name="COMMANDOES_CAPTAINS"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="成立时间">成立时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_DATE_START" name="COMMANDOES_DATE_START" >
<span id="COMMANDOES_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="成立时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_DATE_END" name="COMMANDOES_DATE_END" >
<span id="COMMANDOES_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="计划完成任务时间">计划完成任务时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_TASK_DATE_START" name="COMMANDOES_TASK_DATE_START" >
<span id="COMMANDOES_TASK_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="计划完成任务时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="COMMANDOES_TASK_DATE_END" name="COMMANDOES_TASK_DATE_END" >
<span id="COMMANDOES_TASK_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队员负责任务">突击队队员负责任务</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_TASK" name="COMMANDOES_TEAM_TASK"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请单位">申请单位</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="APPLICATION_UNIT" name="APPLICATION_UNIT">
  <input class="form-control input-sm cellinput-addon" type="text" id="APPLICATION_UNITAlias" name="APPLICATION_UNITAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队名称">突击队名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_NAME" name="COMMANDOES_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="ATTR1" name="ATTR1">
  <input class="form-control input-sm cellinput-addon" type="text" id="ATTR1Alias" name="ATTR1Alias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队队员">突击队队员</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="COMMANDOES_TEAM_NAME" name="COMMANDOES_TEAM_NAME">
  <input class="form-control input-sm cellinput-addon" type="text" id="COMMANDOES_TEAM_NAMEAlias" name="COMMANDOES_TEAM_NAMEAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="队员人数">队员人数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_TEAM_COUNT" name="COMMANDOES_TEAM_COUNT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请编号">申请编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="APPLICATION_NUMBER" name="APPLICATION_NUMBER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="突击队任务完成情况及取得成效">突击队任务完成情况及取得成效</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="EXPECTED_INCOME" name="EXPECTED_INCOME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系人电话">联系人电话</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_POSEN_TEL" name="COMMANDOES_POSEN_TEL"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="评选情况">评选情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="COMMANDOES_PXQK" name="COMMANDOES_PXQK"
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
<script src="avicit/eformmodule/view/ZXBASQ/V1/bootstrap/view1700123808000.js?_=1702971299018"></script>
<script src="avicit/weekly/js/WeeklyS.js"></script>
</html> 
