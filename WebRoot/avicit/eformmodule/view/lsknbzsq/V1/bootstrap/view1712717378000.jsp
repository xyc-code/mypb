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
<div class="easyui-layout" fit="true" id="948e83e38ec23597018ec5e5f28a2772"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table8e5b89da5b83d64fec88a8a8a77655834b04').setGridHeight(getJgridTableHeight($('#table8e5b89da5b83d64fec88a8a8a77655834b04_div')));$('#table8e5b89da5b83d64fec88a8a8a77655834b04').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table8e5b89da5b83d64fec88a8a8a77655834b04_div"><div style="overflow:auto"> <div id="tableToolbartable8e5b89da5b83d64fec88a8a8a77655834b04" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton351df4a8e3a23f42486bf09e4fe95a000986" permissionDes="发起流程"><a id="tableToolbarButton351df4a8e3a23f42486bf09e4fe95a000986" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton9db3b540f8c92345fe3830da2f672aa6d9f6" permissionDes="删除"><a id="tableToolbarButton9db3b540f8c92345fe3830da2f672aa6d9f6" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable8e5b89da5b83d64fec88a8a8a77655834b04" id="keyWordtable8e5b89da5b83d64fec88a8a8a77655834b04" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable8e5b89da5b83d64fec88a8a8a77655834b04" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable8e5b89da5b83d64fec88a8a8a77655834b04" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table8e5b89da5b83d64fec88a8a8a77655834b04workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div></div><div id="Pagertable8e5b89da5b83d64fec88a8a8a77655834b04"></div><table id="table8e5b89da5b83d64fec88a8a8a77655834b04" datapermission="table8e5b89da5b83d64fec88a8a8a77655834b04" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#tablead76bbf49c86804842385e269fc52b070a01').setGridHeight(getJgridTableHeight($('#tablead76bbf49c86804842385e269fc52b070a01_div')));$('#tablead76bbf49c86804842385e269fc52b070a01').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablead76bbf49c86804842385e269fc52b070a01_div"><div style="overflow:auto"> <div id="tableToolbartablead76bbf49c86804842385e269fc52b070a01" class="toolbar" style="height:38px;"></div><div id="Pagertablead76bbf49c86804842385e269fc52b070a01"></div><table id="tablead76bbf49c86804842385e269fc52b070a01" datapermission="tablead76bbf49c86804842385e269fc52b070a01" class="eform_component" ></table></div></div> </div></body>
<blockdom>
<div id="searchDialogtable8e5b89da5b83d64fec88a8a8a77655834b04" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable8e5b89da5b83d64fec88a8a8a77655834b04" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="USER_ID" name="USER_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="USER_IDAlias" name="USER_IDAlias" >
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
<script src="avicit/eformmodule/view/lsknbzsq/V1/bootstrap/view1712717378000.js?_=1712717384371"></script>
</html> 
