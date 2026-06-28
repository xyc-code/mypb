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
<div class="easyui-layout" fit="true" id="948e83e390ba1eca0190baa807e9316c"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tabled536516864e73b4ac1f894935606c1704806').setGridHeight(getJgridTableHeight($('#tabled536516864e73b4ac1f894935606c1704806_div')));$('#tabled536516864e73b4ac1f894935606c1704806').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tabled536516864e73b4ac1f894935606c1704806_div"><div style="overflow:auto"> <div id="tableToolbartabled536516864e73b4ac1f894935606c1704806" class="toolbar" style="height:38px;"></div><div id="Pagertabled536516864e73b4ac1f894935606c1704806"></div><table id="tabled536516864e73b4ac1f894935606c1704806" datapermission="tabled536516864e73b4ac1f894935606c1704806" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;">
 <div class="easyui-layout" fit="true" id="8ab9f3529f027989019f027e6cc70cea"> 
  <div data-options="region:'west',split:true,disabled:false ,width:fixwidth(0.5,e),height:fixheight(0.5,e),onResize:function(a){$('#table99a39ad932b85743e70aa99bbde60ebc0f0e').setGridHeight(getJgridTableHeight($('#table99a39ad932b85743e70aa99bbde60ebc0f0e_div')));$('#table99a39ad932b85743e70aa99bbde60ebc0f0e').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table99a39ad932b85743e70aa99bbde60ebc0f0e_div"><div style="overflow:auto"> <div id="tableToolbartable99a39ad932b85743e70aa99bbde60ebc0f0e" class="toolbar" style="height:38px;"></div><div id="Pagertable99a39ad932b85743e70aa99bbde60ebc0f0e"></div><table id="table99a39ad932b85743e70aa99bbde60ebc0f0e" datapermission="table99a39ad932b85743e70aa99bbde60ebc0f0e" class="eform_component" ></table></div></div> 
  <div data-options="region:'center',disabled:false ,width:fixwidth(0.5,e),height:fixheight(0.5,e),onResize:function(a){$('#table656e4f922c10b44c7ac8a87bcb12121d83e4').setGridHeight(getJgridTableHeight($('#table656e4f922c10b44c7ac8a87bcb12121d83e4_div')));$('#table656e4f922c10b44c7ac8a87bcb12121d83e4').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table656e4f922c10b44c7ac8a87bcb12121d83e4_div"><div style="overflow:auto"> <div id="tableToolbartable656e4f922c10b44c7ac8a87bcb12121d83e4" class="toolbar" style="height:38px;"></div><div id="Pagertable656e4f922c10b44c7ac8a87bcb12121d83e4"></div><table id="table656e4f922c10b44c7ac8a87bcb12121d83e4" datapermission="table656e4f922c10b44c7ac8a87bcb12121d83e4" class="eform_component" ></table></div></div> 
 </div>
</div></div></body>
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
<script src="avicit/eformmodule/view/dqbmtj/V1/bootstrap/view1732677317000.js?_=1782453267718"></script>
</html> 
