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
<div class="easyui-layout" fit="true" id="948e83e38ecc57ed018ecfd84b6827ac"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablefb20ab84ea46c146b9eadb523d82e033482a').setGridHeight(getJgridTableHeight($('#tablefb20ab84ea46c146b9eadb523d82e033482a_div')));$('#tablefb20ab84ea46c146b9eadb523d82e033482a').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablefb20ab84ea46c146b9eadb523d82e033482a_div"><div style="overflow:auto"> <div id="tableToolbartablefb20ab84ea46c146b9eadb523d82e033482a" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton6dd8d86fd319e149ababf7788ff86971073f" permissionDes="添加"><a id="tableToolbarButton6dd8d86fd319e149ababf7788ff86971073f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class=""></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton3d5da5c6da8dea48e8b8649427f6c5c6abdf" permissionDes="编辑"><a id="tableToolbarButton3d5da5c6da8dea48e8b8649427f6c5c6abdf" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonbf5bec474a8be74359aa4d92f20ef6f008d6" permissionDes="删除"><a id="tableToolbarButtonbf5bec474a8be74359aa4d92f20ef6f008d6" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton0f293c3424e1bb4cb168560638f10a52db31" permissionDes="信息报送维护"><a id="tableToolbarButton0f293c3424e1bb4cb168560638f10a52db31" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="信息报送维护"><i class=""></i> 信息报送维护</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablefb20ab84ea46c146b9eadb523d82e033482a" id="keyWordtablefb20ab84ea46c146b9eadb523d82e033482a" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablefb20ab84ea46c146b9eadb523d82e033482a" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablefb20ab84ea46c146b9eadb523d82e033482a" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertablefb20ab84ea46c146b9eadb523d82e033482a"></div><table id="tablefb20ab84ea46c146b9eadb523d82e033482a" datapermission="tablefb20ab84ea46c146b9eadb523d82e033482a" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablefb20ab84ea46c146b9eadb523d82e033482a" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablefb20ab84ea46c146b9eadb523d82e033482a" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="视频分类">视频分类</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="VIDEO_TYPE" name="VIDEO_TYPE" title="视频分类" isNull="true" lookupCode="videoType" />
</div></div>
</form></div>
</blockdom>
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
<script src="avicit/eformmodule/view/sxzzsq/V1/bootstrap/view1721784112000.js?_=1724228905118"></script>
</html> 
