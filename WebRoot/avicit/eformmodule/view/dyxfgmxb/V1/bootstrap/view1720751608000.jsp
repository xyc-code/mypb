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
<div class="easyui-layout" fit="true" id="2c908c1d8e83bd5c018e8400fc980c0c"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').setGridHeight(getJgridTableHeight($('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9_div')));$('#table3054d44ce4dbe4453acbd439ccd8d6a0f6e9').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table3054d44ce4dbe4453acbd439ccd8d6a0f6e9_div"><div style="overflow:auto"> <div id="tableToolbartable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" id="keyWordtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton42c926be2966fb442428af285f90f49f2361" permissionDes="导出"><a id="tableToolbarButton42c926be2966fb442428af285f90f49f2361" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb240fdbc4cac294bed4b73ae5d882211bb3b" permissionDes="删除"><a id="tableToolbarButtonb240fdbc4cac294bed4b73ae5d882211bb3b" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable3054d44ce4dbe4453acbd439ccd8d6a0f6e9"></div><table id="table3054d44ce4dbe4453acbd439ccd8d6a0f6e9" datapermission="table3054d44ce4dbe4453acbd439ccd8d6a0f6e9" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable3054d44ce4dbe4453acbd439ccd8d6a0f6e9" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_NAME" name="USER_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_SEX" name="USER_SEX"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年龄">年龄</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_AGE" name="USER_AGE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="职务">职务</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_POST" name="USER_POST"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度绩效">年度绩效</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="USER_JX" name="USER_JX" title="年度绩效" isNull="true" lookupCode="party_xfg_jx" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="干部级别">干部级别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="USER_GBJB" name="USER_GBJB" title="干部级别" isNull="true" lookupCode="party_xfg_jb" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="部门类别">部门类别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="USER_DEPT_TYPE" name="USER_DEPT_TYPE" title="部门类别" isNull="true" lookupCode="party_xfg_bmfl" />
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
<script src="avicit/eformmodule/view/dyxfgmxb/V1/bootstrap/view1720751608000.js?_=1721194504092"></script>
</html> 
