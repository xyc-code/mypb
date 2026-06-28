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
<div class="easyui-layout" fit="true" id="2c908c5a898fafbb01898fe3c0ac0a9e"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablefb8de48cbe6d55429888220db6fb5703946f').setGridHeight(getJgridTableHeight($('#tablefb8de48cbe6d55429888220db6fb5703946f_div')));$('#tablefb8de48cbe6d55429888220db6fb5703946f').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablefb8de48cbe6d55429888220db6fb5703946f_div"><div style="overflow:auto"> <div id="tableToolbartablefb8de48cbe6d55429888220db6fb5703946f" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablefb8de48cbe6d55429888220db6fb5703946f" id="keyWordtablefb8de48cbe6d55429888220db6fb5703946f" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablefb8de48cbe6d55429888220db6fb5703946f" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablefb8de48cbe6d55429888220db6fb5703946f" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtond721c741c0c59f4fb408959ba774cbb84e9d" permissionDes="添加"><a id="tableToolbarButtond721c741c0c59f4fb408959ba774cbb84e9d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class=""></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonec0f07d6f1450e4d3298de56eee5611cd8dc" permissionDes="编辑"><a id="tableToolbarButtonec0f07d6f1450e4d3298de56eee5611cd8dc" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton6fe129811d713c41671a8d95734e3f25ba8f" permissionDes="删除"><a id="tableToolbarButton6fe129811d713c41671a8d95734e3f25ba8f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton62d4e51c6ec78a4d8c8838b5e69f9ca48243" permissionDes="导出"><a id="tableToolbarButton62d4e51c6ec78a4d8c8838b5e69f9ca48243" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2503740e5970ce49e5b977a1e87e3e3758b6" permissionDes="导入"><a id="tableToolbarButton2503740e5970ce49e5b977a1e87e3e3758b6" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton92d688d32a911f4f199a318b1ce936b903cb" permissionDes="柱状图统计"><a id="tableToolbarButton92d688d32a911f4f199a318b1ce936b903cb" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="柱状图统计"><i class=""></i> 柱状图统计</a></sec:accesscontrollist>
</div></div><div id="Pagertablefb8de48cbe6d55429888220db6fb5703946f"></div><table id="tablefb8de48cbe6d55429888220db6fb5703946f" datapermission="tablefb8de48cbe6d55429888220db6fb5703946f" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablefb8de48cbe6d55429888220db6fb5703946f" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablefb8de48cbe6d55429888220db6fb5703946f" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="USER_ID" name="USER_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="USER_IDAlias" name="USER_IDAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SEX" name="SEX" title="性别" isNull="true" lookupCode="PLATFORM_SEX" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="民族">民族</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NATION" name="NATION"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生年月">出生年月</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="BIRTHDAY_START" name="BIRTHDAY_START" >
<span id="BIRTHDAY_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生年月">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="BIRTHDAY_END" name="BIRTHDAY_END" >
<span id="BIRTHDAY_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="入会时间">入会时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="JOIN_PARTY_START" name="JOIN_PARTY_START" >
<span id="JOIN_PARTY_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="入会时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="JOIN_PARTY_END" name="JOIN_PARTY_END" >
<span id="JOIN_PARTY_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="籍贯">籍贯</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ORIGN" name="ORIGN"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="政治面貌">政治面貌</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="POLITICAL_OUTLOOK" name="POLITICAL_OUTLOOK" title="政治面貌" isNull="true" lookupCode="PLATFORM_POLITICAL" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="部门">部门</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DEPT_ID" name="DEPT_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="DEPT_IDAlias" name="DEPT_IDAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
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
<script src="avicit/eformmodule/view/tradeunionview/V1/bootstrap/view1703741494000.js?_=1704267552240"></script>
</html> 
