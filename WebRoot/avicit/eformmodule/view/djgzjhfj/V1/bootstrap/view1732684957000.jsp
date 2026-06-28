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
<div class="easyui-layout" fit="true" id="2c908c5290b4c15f0190b556391b0d19"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').setGridHeight(getJgridTableHeight($('#tablee00d137a3d55d04613f8fd976ef9e342d0dc_div')));$('#tablee00d137a3d55d04613f8fd976ef9e342d0dc').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablee00d137a3d55d04613f8fd976ef9e342d0dc_div"><div style="overflow:auto"> <div id="tableToolbartablee00d137a3d55d04613f8fd976ef9e342d0dc" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc" id="keyWordtablee00d137a3d55d04613f8fd976ef9e342d0dc" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablee00d137a3d55d04613f8fd976ef9e342d0dc" class="icon icon-search form-tool-searchicon"></label>
</div>
<select id="tablee00d137a3d55d04613f8fd976ef9e342d0dcworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton84533f9ca70feb4c191b2ae56ed7eea3cfeb" permissionDes="上报"><a id="tableToolbarButton84533f9ca70feb4c191b2ae56ed7eea3cfeb" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="上报"><i class=""></i> 上报</a></sec:accesscontrollist>
</div></div><div id="Pagertablee00d137a3d55d04613f8fd976ef9e342d0dc"></div><table id="tablee00d137a3d55d04613f8fd976ef9e342d0dc" datapermission="tablee00d137a3d55d04613f8fd976ef9e342d0dc" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').setGridHeight(getJgridTableHeight($('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65_div')));$('#table7c0e0e285ce33e4906b9cd0f1bd8eb691e65').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table7c0e0e285ce33e4906b9cd0f1bd8eb691e65_div"><div style="overflow:auto"> <div id="tableToolbartable7c0e0e285ce33e4906b9cd0f1bd8eb691e65" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc5ea6934cc825d408ab845e9aa7578638632" permissionDes="反馈"><a id="tableToolbarButtonc5ea6934cc825d408ab845e9aa7578638632" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="反馈"><i class=""></i> 反馈</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton354f5fd52c4893414cb8b8ed5f8ef7870fc7" permissionDes="编辑"><a id="tableToolbarButton354f5fd52c4893414cb8b8ed5f8ef7870fc7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonf97d52edb09ae542c908412f83fcab52ffc2" permissionDes="删除"><a id="tableToolbarButtonf97d52edb09ae542c908412f83fcab52ffc2" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable7c0e0e285ce33e4906b9cd0f1bd8eb691e65"></div><table id="table7c0e0e285ce33e4906b9cd0f1bd8eb691e65" datapermission="table7c0e0e285ce33e4906b9cd0f1bd8eb691e65" class="eform_component" ></table></div></div></div></body>
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
<script src="avicit/eformmodule/view/djgzjhfj/V1/bootstrap/view1732684957000.js?_=1732685268549"></script>
</html> 
