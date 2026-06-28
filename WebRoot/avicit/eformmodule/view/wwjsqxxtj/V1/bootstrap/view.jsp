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
<div class="easyui-layout" fit="true" id="2c908c528e988f79018e9c5a94c5124f"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablebc37e95583090642c9fb0f88dde810b595b7').setGridHeight(getJgridTableHeight($('#tablebc37e95583090642c9fb0f88dde810b595b7_div')));$('#tablebc37e95583090642c9fb0f88dde810b595b7').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablebc37e95583090642c9fb0f88dde810b595b7_div"><div style="overflow:auto"> <div id="tableToolbartablebc37e95583090642c9fb0f88dde810b595b7" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablebc37e95583090642c9fb0f88dde810b595b7" id="keyWordtablebc37e95583090642c9fb0f88dde810b595b7" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablebc37e95583090642c9fb0f88dde810b595b7" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablebc37e95583090642c9fb0f88dde810b595b7" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton1aa94d1d742861497068ba943e6025d8c1de" permissionDes="导出"><a id="tableToolbarButton1aa94d1d742861497068ba943e6025d8c1de" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertablebc37e95583090642c9fb0f88dde810b595b7"></div><table id="tablebc37e95583090642c9fb0f88dde810b595b7" datapermission="tablebc37e95583090642c9fb0f88dde810b595b7" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablebc37e95583090642c9fb0f88dde810b595b7" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablebc37e95583090642c9fb0f88dde810b595b7" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="慰问时间">慰问时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="SALUTE_DATE_START" name="SALUTE_DATE_START" >
<span id="SALUTE_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="慰问时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="SALUTE_DATE_END" name="SALUTE_DATE_END" >
<span id="SALUTE_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="填报日期">填报日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_START" name="REQUEST_DATE_START" >
<span id="REQUEST_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="填报日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="REQUEST_DATE_END" name="REQUEST_DATE_END" >
<span id="REQUEST_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="慰问种类">慰问种类</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SALUTE_TYPE" name="SALUTE_TYPE" title="慰问种类" isNull="true" lookupCode="SALUTE_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="流程状态">流程状态</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="DATA_2" name="DATA_2" title="流程状态" isNull="true" lookupCode="flowStatus" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="打印状态">打印状态</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PRINT_STATUS" name="PRINT_STATUS" title="打印状态" isNull="true" lookupCode="PRINT_TYPE" />
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
<script src="avicit/eformmodule/view/wwjsqxxtj/V1/bootstrap/view1719208849000.js?_=1719208857806"></script>
</html> 
