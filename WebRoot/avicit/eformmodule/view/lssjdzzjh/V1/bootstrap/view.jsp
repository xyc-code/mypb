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
<div class="easyui-layout" fit="true" id="2c908c5290b915650190b97129fa2d90"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table47b76c9ca78a56416ee8e53c30a960ebf735').setGridHeight(getJgridTableHeight($('#table47b76c9ca78a56416ee8e53c30a960ebf735_div')));$('#table47b76c9ca78a56416ee8e53c30a960ebf735').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table47b76c9ca78a56416ee8e53c30a960ebf735_div"><div style="overflow:auto"> <div id="tableToolbartable47b76c9ca78a56416ee8e53c30a960ebf735" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2a8b2f80da1ada4c6608462f71325620415d" permissionDes="上报（完成）"><a id="tableToolbarButton2a8b2f80da1ada4c6608462f71325620415d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="上报（完成）"><i class=""></i> 上报（完成）</a></sec:accesscontrollist>
</div></div><div id="Pagertable47b76c9ca78a56416ee8e53c30a960ebf735"></div><table id="table47b76c9ca78a56416ee8e53c30a960ebf735" datapermission="table47b76c9ca78a56416ee8e53c30a960ebf735" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').setGridHeight(getJgridTableHeight($('#table51de396a6f3fbc4f2a98d3689bc2d9df7450_div')));$('#table51de396a6f3fbc4f2a98d3689bc2d9df7450').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table51de396a6f3fbc4f2a98d3689bc2d9df7450_div"><div style="overflow:auto"> <div id="tableToolbartable51de396a6f3fbc4f2a98d3689bc2d9df7450" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton1f3b043e6ad92f48a908f10871ca0c7a21dd" permissionDes="反馈"><a id="tableToolbarButton1f3b043e6ad92f48a908f10871ca0c7a21dd" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="反馈"><i class=""></i> 反馈</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton416532f33d4cb04a8ef89c15420a6ad54860" permissionDes="编辑"><a id="tableToolbarButton416532f33d4cb04a8ef89c15420a6ad54860" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton06d99b547250e84194d8660ba852619778cf" permissionDes="删除"><a id="tableToolbarButton06d99b547250e84194d8660ba852619778cf" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable51de396a6f3fbc4f2a98d3689bc2d9df7450"></div><table id="table51de396a6f3fbc4f2a98d3689bc2d9df7450" datapermission="table51de396a6f3fbc4f2a98d3689bc2d9df7450" class="eform_component" ></table></div></div></div></body>
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
<script src="avicit/eformmodule/view/lssjdzzjh/V1/bootstrap/view1732756603000.js?_=1782488934601"></script>
</html> 
