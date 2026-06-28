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
<div class="easyui-layout" fit="true" id="2c908c1d8e78612f018e78d660970db6"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablef842434c6be7824e4308ce7ac5de451be903').setGridHeight(getJgridTableHeight($('#tablef842434c6be7824e4308ce7ac5de451be903_div')));$('#tablef842434c6be7824e4308ce7ac5de451be903').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablef842434c6be7824e4308ce7ac5de451be903_div"><div style="overflow:auto"> <div id="tableToolbartablef842434c6be7824e4308ce7ac5de451be903" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablef842434c6be7824e4308ce7ac5de451be903" id="keyWordtablef842434c6be7824e4308ce7ac5de451be903" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablef842434c6be7824e4308ce7ac5de451be903" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablef842434c6be7824e4308ce7ac5de451be903" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="tablef842434c6be7824e4308ce7ac5de451be903workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtone4abe39f03bd954d05f8f39d3ef06e2c5dcc" permissionDes="发起流程"><a id="tableToolbarButtone4abe39f03bd954d05f8f39d3ef06e2c5dcc" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton64ca557ea2936c4a315927d03576edc0edcd" permissionDes="删除"><a id="tableToolbarButton64ca557ea2936c4a315927d03576edc0edcd" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-fw fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8e89099711396a4d98182ac85a5ab47efae1" permissionDes="自定义"><a id="tableToolbarButton8e89099711396a4d98182ac85a5ab47efae1" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="自定义"><i class=""></i> 自定义</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtone77bf40f4af2b64db349cf9fd63f7681faf4" permissionDes="接口"><a id="tableToolbarButtone77bf40f4af2b64db349cf9fd63f7681faf4" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="接口"><i class=""></i> 接口</a></sec:accesscontrollist>
</div></div><div id="Pagertablef842434c6be7824e4308ce7ac5de451be903"></div><table id="tablef842434c6be7824e4308ce7ac5de451be903" datapermission="tablef842434c6be7824e4308ce7ac5de451be903" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablef842434c6be7824e4308ce7ac5de451be903" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablef842434c6be7824e4308ce7ac5de451be903" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FQ_FROM_NO" name="FQ_FROM_NO"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发起人">发起人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FQ_USER" name="FQ_USER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发起人联系方式">发起人联系方式</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FQ_TEL" name="FQ_TEL"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织名称">党组织名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FQ_PARTY_NAME" name="FQ_PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织类型">党组织类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="FQ_PARTY_TYPE" name="FQ_PARTY_TYPE" title="党组织类型" isNull="true" lookupCode="PARTY_ORG_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="标题">标题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FQ_TITLE" name="FQ_TITLE"
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
<script src="avicit/eformmodule/view/dyxfgfq/V1/bootstrap/view1721197086000.js?_=1721203035369"></script>
</html> 
