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
<div class="easyui-layout" fit="true" id="948e83e38bdb834a018bfb746be043f7"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table1e26d4e0d781f540d8b822ef092be0143a10').setGridHeight(getJgridTableHeight($('#table1e26d4e0d781f540d8b822ef092be0143a10_div')));$('#table1e26d4e0d781f540d8b822ef092be0143a10').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table1e26d4e0d781f540d8b822ef092be0143a10_div"><div style="overflow:auto"> <div id="tableToolbartable1e26d4e0d781f540d8b822ef092be0143a10" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton535b9d530f2a8d46fd68a123c7a937175d41" permissionDes="添加"><a id="tableToolbarButton535b9d530f2a8d46fd68a123c7a937175d41" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2a37968921218e4dcb1bf5a133b1b0c38e47" permissionDes="编辑"><a id="tableToolbarButton2a37968921218e4dcb1bf5a133b1b0c38e47" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton542ab60f6c08c74ed6c8e8a2b2fd052b23f5" permissionDes="删除"><a id="tableToolbarButton542ab60f6c08c74ed6c8e8a2b2fd052b23f5" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton225bdf7606906140b22882171977bcb03ca3" permissionDes="导入"><a id="tableToolbarButton225bdf7606906140b22882171977bcb03ca3" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtone13e9ed1ccf2bc48208896a59563b6cac1dd" permissionDes="行编辑保存"><a id="tableToolbarButtone13e9ed1ccf2bc48208896a59563b6cac1dd" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="行编辑保存"><i class=""></i> 行编辑保存</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable1e26d4e0d781f540d8b822ef092be0143a10" id="keyWordtable1e26d4e0d781f540d8b822ef092be0143a10" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable1e26d4e0d781f540d8b822ef092be0143a10" class="icon icon-search form-tool-searchicon"></label>
</div>
</div></div><div id="Pagertable1e26d4e0d781f540d8b822ef092be0143a10"></div><table id="table1e26d4e0d781f540d8b822ef092be0143a10" datapermission="table1e26d4e0d781f540d8b822ef092be0143a10" class="eform_component" ></table></div></div></div></body>
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
<script src="avicit/eformmodule/view/dzzdysj/V1/bootstrap/view1726118161000.js?_=1728524032771"></script>
</html> 
