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
<div class="easyui-layout" fit="true" id="2c908c5a894821f6018948be75880b98"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table9251737cc88840449ae92e9b1e5dfeab72ba').setGridHeight(getJgridTableHeight($('#table9251737cc88840449ae92e9b1e5dfeab72ba_div')));$('#table9251737cc88840449ae92e9b1e5dfeab72ba').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table9251737cc88840449ae92e9b1e5dfeab72ba_div"><div style="overflow:auto"> <div id="tableToolbartable9251737cc88840449ae92e9b1e5dfeab72ba" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable9251737cc88840449ae92e9b1e5dfeab72ba" id="keyWordtable9251737cc88840449ae92e9b1e5dfeab72ba" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable9251737cc88840449ae92e9b1e5dfeab72ba" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable9251737cc88840449ae92e9b1e5dfeab72ba" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonfa0d4a419b12614b95a88a27fa6b92fcbeb1" permissionDes="导出"><a id="tableToolbarButtonfa0d4a419b12614b95a88a27fa6b92fcbeb1" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-arrows-h"></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton53daa85eac9b514970d94d07b9a01c8e84eb" permissionDes="导入"><a id="tableToolbarButton53daa85eac9b514970d94d07b9a01c8e84eb" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class="fa fa-fw fa-arrows-v"></i> 导入</a></sec:accesscontrollist>
</div></div><div id="Pagertable9251737cc88840449ae92e9b1e5dfeab72ba"></div><table id="table9251737cc88840449ae92e9b1e5dfeab72ba" datapermission="table9251737cc88840449ae92e9b1e5dfeab72ba" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable9251737cc88840449ae92e9b1e5dfeab72ba" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable9251737cc88840449ae92e9b1e5dfeab72ba" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="编号">编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NEMBER" name="NEMBER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="员工号">员工号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="EMPLOYEEID" name="EMPLOYEEID"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="部门名称">部门名称</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="DEPT_NAME" name="DEPT_NAME">
  <input class="form-control input-sm cellinput-addon" type="text" id="DEPT_NAMEAlias" name="DEPT_NAMEAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织名称">党组织名称</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="PO_NAME" name="PO_NAME">
  <input class="form-control input-sm cellinput-addon" type="text" id="PO_NAMEAlias" name="PO_NAMEAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="UFMNAME" name="UFMNAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="GENDER" name="GENDER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生年月">出生年月</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="BIRTHDATE_START" name="BIRTHDATE_START" >
<span id="BIRTHDATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生年月">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="BIRTHDATE_END" name="BIRTHDATE_END" >
<span id="BIRTHDATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="民族">民族</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NATION" name="NATION"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="职务">职务</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DUTIES" name="DUTIES"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="全日制学历">全日制学历</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FUL_EDUCATION" name="FUL_EDUCATION"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="政治面貌">政治面貌</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="POLITICAL_OUTLOOK" name="POLITICAL_OUTLOOK" title="政治面貌" isNull="true" lookupCode="PLATFORM_POLITICAL" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否香港、澳门同胞">是否香港、澳门同胞</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="HO_COMPATRIOTS" name="HO_COMPATRIOTS" title="是否香港、澳门同胞" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否香港、澳门眷属">是否香港、澳门眷属</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="HO_DEPENDENTS" name="HO_DEPENDENTS" title="是否香港、澳门眷属" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否台湾同胞">是否台湾同胞</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="TAIWAN_COMPATRIOTS" name="TAIWAN_COMPATRIOTS" title="是否台湾同胞" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否台湾同胞在大陆亲属">是否台湾同胞在大陆亲属</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="TAIWAN_RELATIVES" name="TAIWAN_RELATIVES" title="是否台湾同胞在大陆亲属" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="是否华侨、归侨、侨眷">是否华侨、归侨、侨眷</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="RO_CHINESE" name="RO_CHINESE" title="是否华侨、归侨、侨眷" isNull="true" lookupCode="PLATFORM_YES_NO_FLAG" />
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
<script src="avicit/eformmodule/view/tongzhanchengyuanguanli/V1/bootstrap/view.js?_=1689298592724"></script>
</html> 
