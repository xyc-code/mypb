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
<div class="easyui-layout" fit="true" id="2c908c1d8e74893a018e74944b2c0996"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').setGridHeight(getJgridTableHeight($('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab_div')));$('#table2626f7a281a39e4fe70b4a959e7fbe3ab1ab').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table2626f7a281a39e4fe70b4a959e7fbe3ab1ab_div"><div style="overflow:auto"> <div id="tableToolbartable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" id="keyWordtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table2626f7a281a39e4fe70b4a959e7fbe3ab1abworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton25ff0cc2a396174be4a85fb4d9b285fa52f4" permissionDes="删除"><a id="tableToolbarButton25ff0cc2a396174be4a85fb4d9b285fa52f4" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8a0e4a422dc7a3492a484513b68d1a7814ea" permissionDes="明细表"><a id="tableToolbarButton8a0e4a422dc7a3492a484513b68d1a7814ea" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="明细表"><i class="icon iconfont icon-fuzhi"></i> 明细表</a></sec:accesscontrollist>
</div></div><div id="Pagertable2626f7a281a39e4fe70b4a959e7fbe3ab1ab"></div><table id="table2626f7a281a39e4fe70b4a959e7fbe3ab1ab" datapermission="table2626f7a281a39e4fe70b4a959e7fbe3ab1ab" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table2993030e2cd7ce48b9f8ca3a459ad2effa01').setGridHeight(getJgridTableHeight($('#table2993030e2cd7ce48b9f8ca3a459ad2effa01_div')));$('#table2993030e2cd7ce48b9f8ca3a459ad2effa01').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table2993030e2cd7ce48b9f8ca3a459ad2effa01_div"><div style="overflow:auto"> <div id="tableToolbartable2993030e2cd7ce48b9f8ca3a459ad2effa01" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01" id="keyWordtable2993030e2cd7ce48b9f8ca3a459ad2effa01" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable2993030e2cd7ce48b9f8ca3a459ad2effa01" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable2993030e2cd7ce48b9f8ca3a459ad2effa01" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ></div></div><div id="Pagertable2993030e2cd7ce48b9f8ca3a459ad2effa01"></div><table id="table2993030e2cd7ce48b9f8ca3a459ad2effa01" datapermission="table2993030e2cd7ce48b9f8ca3a459ad2effa01" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable2993030e2cd7ce48b9f8ca3a459ad2effa01" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable2993030e2cd7ce48b9f8ca3a459ad2effa01" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申报党员先锋岗名称">申报党员先锋岗名称</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="GW_NAME" name="GW_NAME" title="申报党员先锋岗名称" isNull="true" lookupCode="party_xfg_gw" />
</div></div>
<div class="col-xs-6 formcell">
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
<div class="col-xs-3 celllabel" title="入党时间">入党时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="USER_PARTYDATE_START" name="USER_PARTYDATE_START" >
<span id="USER_PARTYDATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="入党时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="USER_PARTYDATE_END" name="USER_PARTYDATE_END" >
<span id="USER_PARTYDATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度绩效">年度绩效</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="USER_JX" name="USER_JX" title="年度绩效" isNull="true" lookupCode="party_xfg_jx" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="民主评议组织评价结果">民主评议组织评价结果</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_JG" name="USER_JG"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员积分">党员积分</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="USER_JF_START" name="USER_JF_START" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员积分">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol spinner" data-trigger="spinner">
<input type="text" class="form-control cellinput-addon" value="" id="USER_JF_END" name="USER_JF_END" data-min="0" data-max="999999999999" data-step="1" data-precision="0">
<span class="input-group-addon">
	<a href="javascript:;" class="spin-up" data-spin="up"><i class="fa fa-caret-up"></i></a>
	<a href="javascript:;" class="spin-down" data-spin="down"><i class="fa fa-caret-down"></i></a>
</span>
</div>
</div>
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
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="先进事迹 ">先进事迹 </div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="USER_SJ" name="USER_SJ"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="备注">备注</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="CONTENT" name="CONTENT"
	class="form-control input-sm cellinput">
</div></div>
</form></div>
<div id="searchDialogtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable2626f7a281a39e4fe70b4a959e7fbe3ab1ab" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织类型">党组织类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="XFG_PARTY_TYPE" name="XFG_PARTY_TYPE" title="党组织类型" isNull="true" lookupCode="PARTY_ORG_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人">申请人</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="XFG_USER" name="XFG_USER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请人电话：">申请人电话：</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ATTR1" name="ATTR1"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="XFG_FROM_NO" name="XFG_FROM_NO"
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
<script src="avicit/eformmodule/view/dyxfg/V1/bootstrap/view1723710099000.js?_=1723772143562"></script>
<script src="static/js/platform/pan/download.js"></script>
</html> 
