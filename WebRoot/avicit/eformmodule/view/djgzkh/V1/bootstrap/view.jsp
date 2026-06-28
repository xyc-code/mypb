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
<div class="easyui-layout" fit="true" id="2c908c1d8e4153a1018e4f55ec973899"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table89ab36fa2dfaf34e81382574899d287fd447').setGridHeight(getJgridTableHeight($('#table89ab36fa2dfaf34e81382574899d287fd447_div')));$('#table89ab36fa2dfaf34e81382574899d287fd447').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table89ab36fa2dfaf34e81382574899d287fd447_div"><div style="overflow:auto"> <div id="tableToolbartable89ab36fa2dfaf34e81382574899d287fd447" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable89ab36fa2dfaf34e81382574899d287fd447" id="keyWordtable89ab36fa2dfaf34e81382574899d287fd447" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable89ab36fa2dfaf34e81382574899d287fd447" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable89ab36fa2dfaf34e81382574899d287fd447" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table89ab36fa2dfaf34e81382574899d287fd447workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton66f07c7797decb45f8c8c5d4a6d5fc6ee818" permissionDes="发起流程"><a id="tableToolbarButton66f07c7797decb45f8c8c5d4a6d5fc6ee818" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b" permissionDes="删除"><a id="tableToolbarButton8ae30f19dd052e4f8258af9204a54e54974b" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb1ea12265d377d4b66ea586891039b37ee1b" permissionDes="查看编辑留痕"><a id="tableToolbarButtonb1ea12265d377d4b66ea586891039b37ee1b" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="查看编辑留痕"><i class=""></i> 查看编辑留痕</a></sec:accesscontrollist>
</div></div><div id="Pagertable89ab36fa2dfaf34e81382574899d287fd447"></div><table id="table89ab36fa2dfaf34e81382574899d287fd447" datapermission="table89ab36fa2dfaf34e81382574899d287fd447" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tableac38c418b559e64d9b0950da20519384f374').setGridHeight(getJgridTableHeight($('#tableac38c418b559e64d9b0950da20519384f374_div')));$('#tableac38c418b559e64d9b0950da20519384f374').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tableac38c418b559e64d9b0950da20519384f374_div"><div style="overflow:auto"> <div id="tableToolbartableac38c418b559e64d9b0950da20519384f374" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtableac38c418b559e64d9b0950da20519384f374" id="keyWordtableac38c418b559e64d9b0950da20519384f374" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttableac38c418b559e64d9b0950da20519384f374" class="icon icon-search form-tool-searchicon"></label>
</div>
</div></div><div id="Pagertableac38c418b559e64d9b0950da20519384f374"></div><table id="tableac38c418b559e64d9b0950da20519384f374" datapermission="tableac38c418b559e64d9b0950da20519384f374" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable89ab36fa2dfaf34e81382574899d287fd447" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable89ab36fa2dfaf34e81382574899d287fd447" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FROM_NO" name="FROM_NO"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="拟稿人">拟稿人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_NAME" name="USER_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人党支部">申请人党支部</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系电话">联系电话</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="TEL" name="TEL"
	class="form-control input-sm cellinput">
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
<script src="avicit/eformmodule/view/djgzkh/V1/bootstrap/view1718266718000.js?_=1718866052471"></script>
</html> 
