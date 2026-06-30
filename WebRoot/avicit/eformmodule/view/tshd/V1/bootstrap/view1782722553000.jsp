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
<link rel="stylesheet" href=""/>
</head>
<body>
<div class="easyui-layout" fit="true" id="948e83e390a0fe270190a59f197d26f7"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablee512ca20c2b78d401288181e70164a5d4af2').setGridHeight(getJgridTableHeight($('#tablee512ca20c2b78d401288181e70164a5d4af2_div')));$('#tablee512ca20c2b78d401288181e70164a5d4af2').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablee512ca20c2b78d401288181e70164a5d4af2_div"><div style="overflow:auto"> <div id="tableToolbartablee512ca20c2b78d401288181e70164a5d4af2" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonaccd10ef7df3334be0a922018f07b8bfd54f" permissionDes="添加"><a id="tableToolbarButtonaccd10ef7df3334be0a922018f07b8bfd54f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton28e8e04766a6654c651984bfdd753e5f8f16" permissionDes="编辑"><a id="tableToolbarButton28e8e04766a6654c651984bfdd753e5f8f16" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton4649702b20267f469e29a6ab8fbf71f943f4" permissionDes="删除"><a id="tableToolbarButton4649702b20267f469e29a6ab8fbf71f943f4" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton46fb62d88794444c339855cd0e4aa942ccea" permissionDes="导出excel"><a id="tableToolbarButton46fb62d88794444c339855cd0e4aa942ccea" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出excel"><i class=""></i> 导出excel</a></sec:accesscontrollist>
</div></div><div id="Pagertablee512ca20c2b78d401288181e70164a5d4af2"></div><table id="tablee512ca20c2b78d401288181e70164a5d4af2" datapermission="tablee512ca20c2b78d401288181e70164a5d4af2" class="eform_component" ></table></div></div></div></body>
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
<script src="avicit/eformmodule/view/tshd/V1/bootstrap/view1782722553000.js?_=1782784063704"></script>
<script src=""></script>
</html> 
