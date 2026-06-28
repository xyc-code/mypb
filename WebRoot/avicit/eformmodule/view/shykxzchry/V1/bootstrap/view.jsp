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
<div class="easyui-layout" fit="true" id="948e83e38e120a84018e12ce70ef18ff"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table828032850fb66c4a71fb16dfeadc8df13c6d').setGridHeight(getJgridTableHeight($('#table828032850fb66c4a71fb16dfeadc8df13c6d_div')));$('#table828032850fb66c4a71fb16dfeadc8df13c6d').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table828032850fb66c4a71fb16dfeadc8df13c6d_div"><div style="overflow:auto"> <div id="tableToolbartable828032850fb66c4a71fb16dfeadc8df13c6d" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable828032850fb66c4a71fb16dfeadc8df13c6d" id="keyWordtable828032850fb66c4a71fb16dfeadc8df13c6d" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable828032850fb66c4a71fb16dfeadc8df13c6d" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable828032850fb66c4a71fb16dfeadc8df13c6d" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable828032850fb66c4a71fb16dfeadc8df13c6d"></div><table id="table828032850fb66c4a71fb16dfeadc8df13c6d" datapermission="table828032850fb66c4a71fb16dfeadc8df13c6d" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table443c278b13cade4b7ee890434193440dd017').setGridHeight(getJgridTableHeight($('#table443c278b13cade4b7ee890434193440dd017_div')));$('#table443c278b13cade4b7ee890434193440dd017').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table443c278b13cade4b7ee890434193440dd017_div"><div style="overflow:auto"> <div id="tableToolbartable443c278b13cade4b7ee890434193440dd017" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable443c278b13cade4b7ee890434193440dd017" id="keyWordtable443c278b13cade4b7ee890434193440dd017" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable443c278b13cade4b7ee890434193440dd017" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable443c278b13cade4b7ee890434193440dd017" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable443c278b13cade4b7ee890434193440dd017"></div><table id="table443c278b13cade4b7ee890434193440dd017" datapermission="table443c278b13cade4b7ee890434193440dd017" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable828032850fb66c4a71fb16dfeadc8df13c6d" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable828032850fb66c4a71fb16dfeadc8df13c6d" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="USER_ID" name="USER_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="USER_IDAlias" name="USER_IDAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="部门">部门</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DEPT_ID" name="DEPT_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="DEPT_IDAlias" name="DEPT_IDAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党支部名称">党支部名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_ID" name="PARTY_ID"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="类别">类别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PARTY_TYPE" name="PARTY_TYPE" title="类别" isNull="true" lookupCode="PM_PARTY_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="人员编码">人员编码</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_CODE" name="USER_CODE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党支部职务">党支部职务</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="BRANCH_POST" name="BRANCH_POST" title="党支部职务" isNull="true" lookupCode="PM_BRANCH_POST_TYPE" />
</div></div>
</form></div>
<div id="searchDialogtable443c278b13cade4b7ee890434193440dd017" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable443c278b13cade4b7ee890434193440dd017" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2" name="tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2">
  <input class="form-control input-sm cellinput-addon" type="text" id="tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2Alias" name="tableColumn7d27e401f4beb04c60d849ddaf78cb1032f2Alias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="部门">部门</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="tableColumn317ed4d51a52a14a1ada61a706d35951f151" name="tableColumn317ed4d51a52a14a1ada61a706d35951f151">
  <input class="form-control input-sm cellinput-addon" type="text" id="tableColumn317ed4d51a52a14a1ada61a706d35951f151Alias" name="tableColumn317ed4d51a52a14a1ada61a706d35951f151Alias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党支部名称">党支部名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="tableColumn4f0bf1502e1454450eb8d767749d0911e452" name="tableColumn4f0bf1502e1454450eb8d767749d0911e452"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="人员编码">人员编码</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="tableColumn1b61512985043a4010288a244ac6003f3395" name="tableColumn1b61512985043a4010288a244ac6003f3395"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="类别">类别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="tableColumn7afc6262e7ebb84c924b5dee25d6cfb3afde" name="tableColumn7afc6262e7ebb84c924b5dee25d6cfb3afde" title="类别" isNull="true" lookupCode="PA_PARTY_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="职务">职务</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="tableColumnb2e6a3df3260b0472c680ce74f59ca06571b" name="tableColumnb2e6a3df3260b0472c680ce74f59ca06571b"
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
<script src="avicit/eformmodule/view/shykxzchry/V1/bootstrap/view.js?_=1709773669438"></script>
</html> 
