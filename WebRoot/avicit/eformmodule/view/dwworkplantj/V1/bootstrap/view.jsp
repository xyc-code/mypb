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
<div class="easyui-layout" fit="true" id="948e83e390ba1eca0190bea1af8768f4"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tableea1939cd043821443db844dd33daa46772c5').setGridHeight(getJgridTableHeight($('#tableea1939cd043821443db844dd33daa46772c5_div')));$('#tableea1939cd043821443db844dd33daa46772c5').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tableea1939cd043821443db844dd33daa46772c5_div"><div style="overflow:auto"> <div id="tableToolbartableea1939cd043821443db844dd33daa46772c5" class="toolbar" style="height:38px;"></div><div id="Pagertableea1939cd043821443db844dd33daa46772c5"></div><table id="tableea1939cd043821443db844dd33daa46772c5" datapermission="tableea1939cd043821443db844dd33daa46772c5" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;">
 <div class="easyui-layout" fit="true" id="948e83e393677b3c01936ba0031c4e26"> 
  <div data-options="region:'west',split:true,disabled:false ,width:fixwidth(0.5,e),height:fixheight(0.5,e),onResize:function(a){$('#table35c9bb8515b0b1485ba8d8ce85afca71b32a').setGridHeight(getJgridTableHeight($('#table35c9bb8515b0b1485ba8d8ce85afca71b32a_div')));$('#table35c9bb8515b0b1485ba8d8ce85afca71b32a').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table35c9bb8515b0b1485ba8d8ce85afca71b32a_div"><div style="overflow:auto"> <div id="tableToolbartable35c9bb8515b0b1485ba8d8ce85afca71b32a" class="toolbar" style="height:38px;"></div><div id="Pagertable35c9bb8515b0b1485ba8d8ce85afca71b32a"></div><table id="table35c9bb8515b0b1485ba8d8ce85afca71b32a" datapermission="table35c9bb8515b0b1485ba8d8ce85afca71b32a" class="eform_component" ></table></div></div> 
  <div data-options="region:'center',disabled:false ,width:fixwidth(0.5,e),height:fixheight(0.5,e),onResize:function(a){$('#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee').setGridHeight(getJgridTableHeight($('#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee_div')));$('#table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee_div"><div style="overflow:auto"> <div id="tableToolbartable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee" class="toolbar" style="height:38px;"></div><div id="Pagertable0ed4bdc7480cf84f6508f3bb2e4dc002a3ee"></div><table id="table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee" datapermission="table0ed4bdc7480cf84f6508f3bb2e4dc002a3ee" class="eform_component" ></table></div></div> 
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
<script src="avicit/eformmodule/view/dwworkplantj/V1/bootstrap/view1732677259000.js?_=1732677469003"></script>
</html> 
