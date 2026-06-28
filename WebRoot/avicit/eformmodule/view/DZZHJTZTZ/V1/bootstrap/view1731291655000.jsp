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
<div class="easyui-layout" fit="true" id="948e83e3828f72f301828fbca4cb1729"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').setGridHeight(getJgridTableHeight($('#tablebb5cddee1c773944c5f8e8bccc339da1e0af_div')));$('#tablebb5cddee1c773944c5f8e8bccc339da1e0af').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablebb5cddee1c773944c5f8e8bccc339da1e0af_div"><div style="overflow:auto"> <div id="tableToolbartablebb5cddee1c773944c5f8e8bccc339da1e0af" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtondfb899af5047d94cf8196110d97dfc1b1edb" permissionDes="发起流程"><a id="tableToolbarButtondfb899af5047d94cf8196110d97dfc1b1edb" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861" permissionDes="删除"><a id="tableToolbarButton73174a29bb328c41e3fb2f9a72d5d68ed861" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><select id="tablebb5cddee1c773944c5f8e8bccc339da1e0afworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablebb5cddee1c773944c5f8e8bccc339da1e0af" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertablebb5cddee1c773944c5f8e8bccc339da1e0af"></div><table id="tablebb5cddee1c773944c5f8e8bccc339da1e0af" datapermission="tablebb5cddee1c773944c5f8e8bccc339da1e0af" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablebb5cddee1c773944c5f8e8bccc339da1e0af" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablebb5cddee1c773944c5f8e8bccc339da1e0af" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="AUTO_CODE" name="AUTO_CODE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请日期">申请日期</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="REQUST_DATE" name="REQUST_DATE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_NAME" name="USER_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="换届党支部名称">换届党支部名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
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
<script src="avicit/eformmodule/view/DZZHJTZTZ/V1/bootstrap/view1731291655000.js?_=1782453561294"></script>
</html> 
