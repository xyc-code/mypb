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
<div class="easyui-layout" fit="true" id="2c908c1d8d58fbc3018d5938b7150a12"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table16575016801889486278bd04c137062c1b0e').setGridHeight(getJgridTableHeight($('#table16575016801889486278bd04c137062c1b0e_div')));$('#table16575016801889486278bd04c137062c1b0e').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table16575016801889486278bd04c137062c1b0e_div"><div style="overflow:auto"> <div id="tableToolbartable16575016801889486278bd04c137062c1b0e" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton7c5efc4581ce44494f89be257ffa3bd5fbc3" permissionDes="添加"><a id="tableToolbarButton7c5efc4581ce44494f89be257ffa3bd5fbc3" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton0e8f6a44bbef6c4472e8de101ac5996b5536" permissionDes="编辑"><a id="tableToolbarButton0e8f6a44bbef6c4472e8de101ac5996b5536" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton34b572771c88be4266c84dfc667fae34e554" permissionDes="删除"><a id="tableToolbarButton34b572771c88be4266c84dfc667fae34e554" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton41f6f5a3a8826446008a8e5e44a08e3b1502" permissionDes="导入"><a id="tableToolbarButton41f6f5a3a8826446008a8e5e44a08e3b1502" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton51968597749ed848d859f123ae4cab84005a" permissionDes="导出"><a id="tableToolbarButton51968597749ed848d859f123ae4cab84005a" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable16575016801889486278bd04c137062c1b0e" id="keyWordtable16575016801889486278bd04c137062c1b0e" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable16575016801889486278bd04c137062c1b0e" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable16575016801889486278bd04c137062c1b0e" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable16575016801889486278bd04c137062c1b0e"></div><table id="table16575016801889486278bd04c137062c1b0e" datapermission="table16575016801889486278bd04c137062c1b0e" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable16575016801889486278bd04c137062c1b0e" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable16575016801889486278bd04c137062c1b0e" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="届次">届次</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="SESSION_NAME" name="SESSION_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织名称">党组织名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举类型">选举类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" isNull="true" lookupCode="party_xj_type" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举时间">选举时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="SESSION_TIME_START" name="SESSION_TIME_START" >
<span id="SESSION_TIME_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="选举时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="SESSION_TIME_END" name="SESSION_TIME_END" >
<span id="SESSION_TIME_END_button" class="input-group-addon data-box-act">
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
<script src="avicit/eformmodule/view/dzzljwyfgBa/V1/bootstrap/view1731483229000.js?_=1731485125536"></script>
</html> 
