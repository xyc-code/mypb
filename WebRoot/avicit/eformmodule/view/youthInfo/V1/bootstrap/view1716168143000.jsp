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
<div class="easyui-layout" fit="true" id="2c908c1d8a62d88d018a6319232c08e3"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table5c236e59576f4c431e285913ecaab2448a21').setGridHeight(getJgridTableHeight($('#table5c236e59576f4c431e285913ecaab2448a21_div')));$('#table5c236e59576f4c431e285913ecaab2448a21').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table5c236e59576f4c431e285913ecaab2448a21_div"><div style="overflow:auto"> <div id="tableToolbartable5c236e59576f4c431e285913ecaab2448a21" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable5c236e59576f4c431e285913ecaab2448a21" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8d1bdf7fd018e740dfb8ab921ec622f66b13" permissionDes="添加"><a id="tableToolbarButton8d1bdf7fd018e740dfb8ab921ec622f66b13" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class=""></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton89c24dadee86fc499a083da2d49ec81b33e7" permissionDes="编辑"><a id="tableToolbarButton89c24dadee86fc499a083da2d49ec81b33e7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton805fc120d16d3147461910e8c2ea986b1347" permissionDes="删除"><a id="tableToolbarButton805fc120d16d3147461910e8c2ea986b1347" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton38816e0cf8cbfb4713484a9b3603773d6a20" permissionDes="导入"><a id="tableToolbarButton38816e0cf8cbfb4713484a9b3603773d6a20" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton959e400dd41e244afc98618d24f95adbb5da" permissionDes="导出"><a id="tableToolbarButton959e400dd41e244afc98618d24f95adbb5da" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertable5c236e59576f4c431e285913ecaab2448a21"></div><table id="table5c236e59576f4c431e285913ecaab2448a21" datapermission="table5c236e59576f4c431e285913ecaab2448a21" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable5c236e59576f4c431e285913ecaab2448a21" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable5c236e59576f4c431e285913ecaab2448a21" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="一级部门">一级部门</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DPET_ONT" name="DPET_ONT">
  <input class="form-control input-sm cellinput-addon" type="text" id="DPET_ONTAlias" name="DPET_ONTAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="部门名称">部门名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DEPT_ID" name="DEPT_ID"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="USER_ID" name="USER_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="USER_IDAlias" name="USER_IDAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生日期">出生日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="NEW_DATE_START" name="NEW_DATE_START" >
<span id="NEW_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="NEW_DATE_END" name="NEW_DATE_END" >
<span id="NEW_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="SEX" name="SEX"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="民族">民族</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NATION" name="NATION"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="身份证号码">身份证号码</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ID_NUMBER" name="ID_NUMBER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="岗位名称">岗位名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ORG_ID" name="ORG_ID"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="第一学历">第一学历</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="POTICALOA" name="POTICALOA"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="最高学历">最高学历</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="POTICALOA_END" name="POTICALOA_END"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="身份">身份</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="STATUS" name="STATUS"
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
<script src="avicit/eformmodule/view/youthInfo/V1/bootstrap/view1716168143000.js?_=1716170407136"></script>
</html> 
