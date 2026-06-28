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
<div class="easyui-layout" fit="true" id="948e83e3843b68c40184565eefb50d10"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table19e737a0d2c3af41f32a976a6fb7844a53fa').setGridHeight(getJgridTableHeight($('#table19e737a0d2c3af41f32a976a6fb7844a53fa_div')));$('#table19e737a0d2c3af41f32a976a6fb7844a53fa').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table19e737a0d2c3af41f32a976a6fb7844a53fa_div"><div style="overflow:auto"> <div id="tableToolbartable19e737a0d2c3af41f32a976a6fb7844a53fa" class="toolbar" style="height:38px;"><div class="toolbar-left" ><div class="dropdown" id="tableToolbarButtonGroupeb84f75e2c555d4fd7ba07ffd6c4a7cd4e18" style="float:left">
	<a class="btn btn-primary form-tool-btn btn-sm" role="button" href="javascript:void(0);" data-toggle="dropdown"><i class=""></i>全部公告 <span class="caret"></span></a>
	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu"><li  role="presentation" id="treeGridToolbarButtondc983478446de74290f89b89e6458c7bbba3"><a href="javascript:void(0);"><i class=""></i> 流转公告</a></li>
<li  role="presentation" id="treeGridToolbarButtonf80a0751b95a6f4fd0099157bdf90926b3fe"><a href="javascript:void(0);"><i class=""></i> 过期公告</a></li>
	</ul>
</div>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa" id="keyWordtable19e737a0d2c3af41f32a976a6fb7844a53fa" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable19e737a0d2c3af41f32a976a6fb7844a53fa" class="icon icon-search form-tool-searchicon"></label>
</div>
</div></div><div id="Pagertable19e737a0d2c3af41f32a976a6fb7844a53fa"></div><table id="table19e737a0d2c3af41f32a976a6fb7844a53fa" datapermission="table19e737a0d2c3af41f32a976a6fb7844a53fa" class="eform_component" ></table></div></div></div></body>
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
<script src="avicit/eformmodule/view/tzggzs/V1/bootstrap/view1712640045000.js?_=1712653828361"></script>
</html> 
