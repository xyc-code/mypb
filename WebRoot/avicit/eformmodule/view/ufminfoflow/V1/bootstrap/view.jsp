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
<div class="easyui-layout" fit="true" id="2c908c5a896175160189627afac41cd2"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table57f184cb44b43f4e91f83be4d2aadc648ac5').setGridHeight(getJgridTableHeight($('#table57f184cb44b43f4e91f83be4d2aadc648ac5_div')));$('#table57f184cb44b43f4e91f83be4d2aadc648ac5').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table57f184cb44b43f4e91f83be4d2aadc648ac5_div"><div style="overflow:auto"> <div id="tableToolbartable57f184cb44b43f4e91f83be4d2aadc648ac5" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5" id="keyWordtable57f184cb44b43f4e91f83be4d2aadc648ac5" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable57f184cb44b43f4e91f83be4d2aadc648ac5" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable57f184cb44b43f4e91f83be4d2aadc648ac5" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonab44d58a01f8114848084f49a596c3857f49" permissionDes="删除"><a id="tableToolbarButtonab44d58a01f8114848084f49a596c3857f49" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable57f184cb44b43f4e91f83be4d2aadc648ac5"></div><table id="table57f184cb44b43f4e91f83be4d2aadc648ac5" datapermission="table57f184cb44b43f4e91f83be4d2aadc648ac5" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable57f184cb44b43f4e91f83be4d2aadc648ac5" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable57f184cb44b43f4e91f83be4d2aadc648ac5" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="UFMNAME" name="UFMNAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="GENDER" name="GENDER" title="性别" isNull="true" lookupCode="PLATFORM_SEX" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="编号">编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NEMBER" name="NEMBER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否台湾同胞在大陆亲属">是否台湾同胞在大陆亲属</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="TAIWAN_RELATIVES" name="TAIWAN_RELATIVES" title="是否台湾同胞在大陆亲属" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否香港、澳门同胞">是否香港、澳门同胞</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="HO_COMPATRIOTS" name="HO_COMPATRIOTS" title="是否香港、澳门同胞" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否华侨、归侨、侨眷">是否华侨、归侨、侨眷</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="RO_CHINESE" name="RO_CHINESE" title="是否华侨、归侨、侨眷" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
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
<script src="avicit/eformmodule/view/ufminfoflow/V1/bootstrap/view1697701201000.js?_=1697701277507"></script>
</html> 
