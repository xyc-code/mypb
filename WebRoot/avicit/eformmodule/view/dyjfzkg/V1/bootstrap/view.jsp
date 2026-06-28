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
<div class="easyui-layout" fit="true" id="948e83e38929709c018995058b8b6024"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table4b0c238251416d43d1ba163b18ec3415d38b').setGridHeight(getJgridTableHeight($('#table4b0c238251416d43d1ba163b18ec3415d38b_div')));$('#table4b0c238251416d43d1ba163b18ec3415d38b').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table4b0c238251416d43d1ba163b18ec3415d38b_div"><div style="overflow:auto"> <div id="tableToolbartable4b0c238251416d43d1ba163b18ec3415d38b" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable4b0c238251416d43d1ba163b18ec3415d38b" id="keyWordtable4b0c238251416d43d1ba163b18ec3415d38b" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable4b0c238251416d43d1ba163b18ec3415d38b" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable4b0c238251416d43d1ba163b18ec3415d38b" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ></div></div><div id="Pagertable4b0c238251416d43d1ba163b18ec3415d38b"></div><table id="table4b0c238251416d43d1ba163b18ec3415d38b" datapermission="table4b0c238251416d43d1ba163b18ec3415d38b" class="eform_component" ></table></div></div> </div></body>
<blockdom>
<div id="searchDialogtable4b0c238251416d43d1ba163b18ec3415d38b" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable4b0c238251416d43d1ba163b18ec3415d38b" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="用户id">用户id</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="USER_ID" name="USER_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="USER_IDAlias" name="USER_IDAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="身份证号">身份证号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="IDCARD" name="IDCARD"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SEX" name="SEX" title="性别" isNull="true" lookupCode="PLATFORM_SEX" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党支部ID">党支部ID</div><div class="input-group-sm col-xs-9 cellcontrol">	<input type="text" value="" id="PARTY_IDName" name="PARTY_IDName"
		class="form-control input-sm cellinput" readonly="readonly">
	<input type="hidden" value="" id="PARTY_ID" name="PARTY_ID">
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
<script src="avicit/eformmodule/view/dyjfzkg/V1/bootstrap/view.js?_=1690422711684"></script>
</html> 
