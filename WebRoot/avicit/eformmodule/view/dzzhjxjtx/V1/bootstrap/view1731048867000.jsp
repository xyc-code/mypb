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
<link rel="stylesheet" href="avicit/platform6/console/demostorage/portal/projectmanage/index/font-awesome-4.7.0/css/font-awesome.css"/>
<link rel="stylesheet" href="avicit/platform6/console/demostorage/portal/projectmanage/index/css/index.css"/>
</head>
<body>
<div class="easyui-layout" fit="true" id="2c908c1d8d632b96018d63339d67089c"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table8064f28b40dbc84b9afb08dd878f4861014b').setGridHeight(getJgridTableHeight($('#table8064f28b40dbc84b9afb08dd878f4861014b_div')));$('#table8064f28b40dbc84b9afb08dd878f4861014b').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table8064f28b40dbc84b9afb08dd878f4861014b_div"><div style="overflow:auto"> <div id="tableToolbartable8064f28b40dbc84b9afb08dd878f4861014b" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable8064f28b40dbc84b9afb08dd878f4861014b" id="keyWordtable8064f28b40dbc84b9afb08dd878f4861014b" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable8064f28b40dbc84b9afb08dd878f4861014b" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable8064f28b40dbc84b9afb08dd878f4861014b" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable8064f28b40dbc84b9afb08dd878f4861014b"></div><table id="table8064f28b40dbc84b9afb08dd878f4861014b" datapermission="table8064f28b40dbc84b9afb08dd878f4861014b" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable8064f28b40dbc84b9afb08dd878f4861014b" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable8064f28b40dbc84b9afb08dd878f4861014b" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="届次">届次</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="SESSION_NAME" name="SESSION_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织名称">党组织名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织类型">党组织类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" isNull="true" lookupCode="PARTY_ORG_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举类型">选举类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" isNull="true" lookupCode="party_xj_type" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举时间">选举时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_START" name="CREA_TIME_START" >
<span id="CREA_TIME_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_END" name="CREA_TIME_END" >
<span id="CREA_TIME_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="换届提醒">换届提醒</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_START" name="CREA_TIME_DATE_START" >
<span id="CREA_TIME_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="换届提醒">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_END" name="CREA_TIME_DATE_END" >
<span id="CREA_TIME_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提交换届选举请示 ">提交换届选举请示 </div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJ_START" name="CREA_TIME_DATE_TJ_START" >
<span id="CREA_TIME_DATE_TJ_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提交换届选举请示 ">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJ_END" name="CREA_TIME_DATE_TJ_END" >
<span id="CREA_TIME_DATE_TJ_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提交候选人预备人选请示 ">提交候选人预备人选请示 </div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJYB_START" name="CREA_TIME_DATE_TJYB_START" >
<span id="CREA_TIME_DATE_TJYB_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提交候选人预备人选请示 ">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJYB_END" name="CREA_TIME_DATE_TJYB_END" >
<span id="CREA_TIME_DATE_TJYB_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="召开党员大会">召开党员大会</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="ZKDYDH_START" name="ZKDYDH_START" >
<span id="ZKDYDH_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="召开党员大会">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="ZKDYDH_END" name="ZKDYDH_END" >
<span id="ZKDYDH_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="纪委一次会 ">纪委一次会 </div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="JWYCH_START" name="JWYCH_START" >
<span id="JWYCH_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="纪委一次会 ">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="JWYCH_END" name="JWYCH_END" >
<span id="JWYCH_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="委员会一次会">委员会一次会</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="WYYCH_START" name="WYYCH_START" >
<span id="WYYCH_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="委员会一次会">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="WYYCH_END" name="WYYCH_END" >
<span id="WYYCH_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="备注">备注</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_ORG_CONTENT" name="PARTY_ORG_CONTENT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举进度">选举进度</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SESSION_JD" name="SESSION_JD" title="选举进度" isNull="true" lookupCode="party_org_type" />
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
<script src="avicit/eformmodule/view/dzzhjxjtx/V1/bootstrap/view1731048867000.js?_=1731289309837"></script>
</html> 
