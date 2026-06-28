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
<div class="easyui-layout" fit="true" id="948e83e391927ff30191d4c160ba4024"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tabled0f85460860d5b48808aaf035e80ac1ee102').setGridHeight(getJgridTableHeight($('#tabled0f85460860d5b48808aaf035e80ac1ee102_div')));$('#tabled0f85460860d5b48808aaf035e80ac1ee102').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tabled0f85460860d5b48808aaf035e80ac1ee102_div"><div style="overflow:auto"> <div id="tableToolbartabled0f85460860d5b48808aaf035e80ac1ee102" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtond752dd61ca1bdf439d09719077d7bda850a7" permissionDes="添加"><a id="tableToolbarButtond752dd61ca1bdf439d09719077d7bda850a7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton57fbc4641c4eb84bf8180aec0d4b3d1721aa" permissionDes="编辑"><a id="tableToolbarButton57fbc4641c4eb84bf8180aec0d4b3d1721aa" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtond8b465a6369a3a41cf8898018238f2ba5896" permissionDes="删除"><a id="tableToolbarButtond8b465a6369a3a41cf8898018238f2ba5896" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc462345f5ed56e437549846191bd976f784a" permissionDes="导出"><a id="tableToolbarButtonc462345f5ed56e437549846191bd976f784a" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-upload"></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton0b07de3a44578c4cd848c2333d66229252ba" permissionDes="导入(新)"><a id="tableToolbarButton0b07de3a44578c4cd848c2333d66229252ba" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入(新)"><i class="fa fa-fw fa-download"></i> 导入(新)</a></sec:accesscontrollist>
</div></div><div id="Pagertabled0f85460860d5b48808aaf035e80ac1ee102"></div><table id="tabled0f85460860d5b48808aaf035e80ac1ee102" datapermission="tabled0f85460860d5b48808aaf035e80ac1ee102" class="eform_component" ></table></div></div></div></body>
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
<script src="avicit/eformmodule/view/d_g_xjngzz/V1/bootstrap/view1727244214000.js?_=1727244327694"></script>
</html> 
