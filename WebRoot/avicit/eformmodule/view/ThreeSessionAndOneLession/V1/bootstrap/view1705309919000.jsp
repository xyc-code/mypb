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
<div class="easyui-layout" fit="true" id="402811817f4eb25b017f635cd3051a11"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tablee1b6c5024d46264e51cb95aed8c3acdced28').setGridHeight(getJgridTableHeight($('#tablee1b6c5024d46264e51cb95aed8c3acdced28_div')));$('#tablee1b6c5024d46264e51cb95aed8c3acdced28').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablee1b6c5024d46264e51cb95aed8c3acdced28_div"><div style="overflow:auto"> <div id="tableToolbartablee1b6c5024d46264e51cb95aed8c3acdced28" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8f482ffda574be4627099f3c978922e8bbea" permissionDes="添加"><a id="tableToolbarButton8f482ffda574be4627099f3c978922e8bbea" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton5d45fbe8120b514bad199132e7ccd996293d" permissionDes="编辑"><a id="tableToolbarButton5d45fbe8120b514bad199132e7ccd996293d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton51dd5ac427e42144cd28eb7e2fc6409ccf77" permissionDes="删除"><a id="tableToolbarButton51dd5ac427e42144cd28eb7e2fc6409ccf77" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonf5d8c90e489ab94cd6585a2579256b884155" permissionDes="打印"><a id="tableToolbarButtonf5d8c90e489ab94cd6585a2579256b884155" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="打印"><i class="fa fa-fw fa-download"></i> 打印</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablee1b6c5024d46264e51cb95aed8c3acdced28" id="keyWordtablee1b6c5024d46264e51cb95aed8c3acdced28" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablee1b6c5024d46264e51cb95aed8c3acdced28" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablee1b6c5024d46264e51cb95aed8c3acdced28" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertablee1b6c5024d46264e51cb95aed8c3acdced28"></div><table id="tablee1b6c5024d46264e51cb95aed8c3acdced28" datapermission="tablee1b6c5024d46264e51cb95aed8c3acdced28" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtablee1b6c5024d46264e51cb95aed8c3acdced28" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablee1b6c5024d46264e51cb95aed8c3acdced28" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="CREATED_BY" name="CREATED_BY">
  <input class="form-control input-sm cellinput-addon" type="text" id="CREATED_BYAlias" name="CREATED_BYAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
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
<script src="avicit/eformmodule/view/ThreeSessionAndOneLession/V1/bootstrap/view1705309919000.js?_=1705368978084"></script>
</html> 
