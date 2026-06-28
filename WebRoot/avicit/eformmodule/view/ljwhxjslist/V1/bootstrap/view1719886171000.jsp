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
<div class="easyui-layout" fit="true" id="948e83e38fa41ec6018fa452c0180cfa"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table1c6db461df80a54910a85517a1992eceb96b').setGridHeight(getJgridTableHeight($('#table1c6db461df80a54910a85517a1992eceb96b_div')));$('#table1c6db461df80a54910a85517a1992eceb96b').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table1c6db461df80a54910a85517a1992eceb96b_div"><div style="overflow:auto"> <div id="tableToolbartable1c6db461df80a54910a85517a1992eceb96b" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable1c6db461df80a54910a85517a1992eceb96b" id="keyWordtable1c6db461df80a54910a85517a1992eceb96b" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable1c6db461df80a54910a85517a1992eceb96b" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable1c6db461df80a54910a85517a1992eceb96b" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table1c6db461df80a54910a85517a1992eceb96bworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton514608b6bd9fe0471438ba38cfea284c20d2" permissionDes="发起流程"><a id="tableToolbarButton514608b6bd9fe0471438ba38cfea284c20d2" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton014df49f447e07429b486a2fce46017de207" permissionDes="删除"><a id="tableToolbarButton014df49f447e07429b486a2fce46017de207" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable1c6db461df80a54910a85517a1992eceb96b"></div><table id="table1c6db461df80a54910a85517a1992eceb96b" datapermission="table1c6db461df80a54910a85517a1992eceb96b" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable1c6db461df80a54910a85517a1992eceb96b" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable1c6db461df80a54910a85517a1992eceb96b" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否需要配合讲解">是否需要配合讲解</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SFPHJJ" name="SFPHJJ" title="是否需要配合讲解" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="使用类型">使用类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SY_TYPE" name="SY_TYPE" title="使用类型" isNull="true" lookupCode="LJWHXJS-TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否使用电脑/投影仪">是否使用电脑/投影仪</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SFSYDN" name="SFSYDN" title="是否使用电脑/投影仪" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
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
<script src="avicit/eformmodule/view/ljwhxjslist/V1/bootstrap/view1719886171000.js?_=1719886183937"></script>
</html> 
