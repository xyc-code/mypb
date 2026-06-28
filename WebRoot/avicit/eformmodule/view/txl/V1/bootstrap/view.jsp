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
<div class="easyui-layout" fit="true" id="948e83e38ec23597018ec5f682d43225"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;">
 <div class="easyui-layout" fit="true" id="948e83e38ec23597018ec6116583345d">
  <div style="height: 100%" class="tabs_div " addheight="40"> 
   <ul id="tabl_list" class="nav nav-tabs" role="tablist" data-tabstyle="1" data-tabalign="1" data-fontsize="12"> 
    <li role="presentation" class="active" onclick="$(window).trigger('resize');"><a href="#dcaf145e7575b0429829e6dbdae80f89d4f7" aria-controls="dcaf145e7575b0429829e6dbdae80f89d4f7" role="tab" data-toggle="tab" style="font-size:12px" title="党组织通讯录" tabicon="glyphicon glyphicon-th-list noneBolder" aria-expanded="true">党组织通讯录</a></li> 
    <li role="presentation" onclick="$(window).trigger('resize');" class=""><a href="#5e6829e2442fff478f6a506489cecec93afe" aria-controls="5e6829e2442fff478f6a506489cecec93afe" role="tab" data-toggle="tab" style="font-size:12px" title="工会通讯录" tabicon="glyphicon glyphicon-th-list noneBolder" aria-expanded="false">工会通讯录</a></li> 
   </ul> 
   <div class="tab-content" style="height:100%;padding-bottom: 40px"> 
    <div role="tabpanel" class="tab-pane active fixheight" id="dcaf145e7575b0429829e6dbdae80f89d4f7" style="height: 100%;"> 
     <div class="easyui-layout" fit="true" id="948e83e38ec23597018ec6116583345e"> 
      <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;"><div style="height:100%;">
<iframe id="iframeiframe14c907981c85684fe458fa24c7543ba953fd" class="eform_component" scrolling="auto"  src="" frameborder="0" style="width:100%;height:100%;border:0px;padding:0;"></iframe></div>
</div> 
     </div> 
    </div> 
    <div role="tabpanel" class="tab-pane fixheight" id="5e6829e2442fff478f6a506489cecec93afe" style="height: 100%;"> 
     <div class="easyui-layout" fit="true" id="948e83e38ec23597018ec6116583345f"> 
      <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;"><div style="height:100%;">
<iframe id="iframeiframecff14127a75f7b4186e8326dd1f3e1956793" class="eform_component" scrolling="auto"  src="" frameborder="0" style="width:100%;height:100%;border:0px;padding:0;"></iframe></div>
</div> 
     </div> 
    </div> 
   </div> 
  </div>
 </div>
</div> <div class="contextMenu" id="eform-tab-menu">
	<ul>
		<li id="eform-refresh">刷新</li>
	</ul>
</div>
</div></body>
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
<script src="avicit/eformmodule/view/txl/V1/bootstrap/view.js?_=1712720012800"></script>
</html> 
