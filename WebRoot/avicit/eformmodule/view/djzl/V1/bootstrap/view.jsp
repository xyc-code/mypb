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
<div class="easyui-layout" fit="true" id="948e83e39222228601923185b0dc7ba3"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table23fbf5a045ef8e43993a46939b282975abaa').setGridHeight(getJgridTableHeight($('#table23fbf5a045ef8e43993a46939b282975abaa_div')));$('#table23fbf5a045ef8e43993a46939b282975abaa').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table23fbf5a045ef8e43993a46939b282975abaa_div"><div style="overflow:auto"> <div id="tableToolbartable23fbf5a045ef8e43993a46939b282975abaa" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonee2ad35a19fde34d34bac18defb412ac2f03" permissionDes="添加"><a id="tableToolbarButtonee2ad35a19fde34d34bac18defb412ac2f03" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton924d2054f535f24c8e1990a390d6811461a6" permissionDes="编辑"><a id="tableToolbarButton924d2054f535f24c8e1990a390d6811461a6" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton11edee4979425d446fd8a863f4297e8dd72c" permissionDes="删除"><a id="tableToolbarButton11edee4979425d446fd8a863f4297e8dd72c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtond407872dc390f2456b48aa4e2f13832ebd7d" permissionDes="导入(新)"><a id="tableToolbarButtond407872dc390f2456b48aa4e2f13832ebd7d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入(新)"><i class="fa fa-fw fa-download"></i> 导入(新)</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton3d0617f1937c114012dadd3579161942561c" permissionDes="导出"><a id="tableToolbarButton3d0617f1937c114012dadd3579161942561c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-upload"></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertable23fbf5a045ef8e43993a46939b282975abaa"></div><table id="table23fbf5a045ef8e43993a46939b282975abaa" datapermission="table23fbf5a045ef8e43993a46939b282975abaa" class="eform_component" ></table></div></div> </div></body>
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
<script src="avicit/eformmodule/view/djzl/V1/bootstrap/view1727407747000.js?_=1727407752589"></script>
</html> 
