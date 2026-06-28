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
<div class="easyui-layout" fit="true" id="948e83e3881da2180188279818216cf7"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table1eb9e2287549134f1169dc2d101b6595f007').setGridHeight(getJgridTableHeight($('#table1eb9e2287549134f1169dc2d101b6595f007_div')));$('#table1eb9e2287549134f1169dc2d101b6595f007').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table1eb9e2287549134f1169dc2d101b6595f007_div"><div style="overflow:auto"> <div id="tableToolbartable1eb9e2287549134f1169dc2d101b6595f007" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable1eb9e2287549134f1169dc2d101b6595f007" id="keyWordtable1eb9e2287549134f1169dc2d101b6595f007" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable1eb9e2287549134f1169dc2d101b6595f007" class="icon icon-search form-tool-searchicon"></label>
</div>
<select id="table1eb9e2287549134f1169dc2d101b6595f007workFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable1eb9e2287549134f1169dc2d101b6595f007" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton3d0624facc1e5244ee08177b283b527d9c2e" permissionDes="发起流程"><a id="tableToolbarButton3d0624facc1e5244ee08177b283b527d9c2e" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtoncfe571d212196a475e7affdbc96b95e14e93" permissionDes="删除"><a id="tableToolbarButtoncfe571d212196a475e7affdbc96b95e14e93" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton7a4e036cba0a1f40953874804a140309eb61" permissionDes="导入"><a id="tableToolbarButton7a4e036cba0a1f40953874804a140309eb61" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton5f2cb03a508ca1404259785734cf814ef678" permissionDes="导出"><a id="tableToolbarButton5f2cb03a508ca1404259785734cf814ef678" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertable1eb9e2287549134f1169dc2d101b6595f007"></div><table id="table1eb9e2287549134f1169dc2d101b6595f007" datapermission="table1eb9e2287549134f1169dc2d101b6595f007" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable1eb9e2287549134f1169dc2d101b6595f007" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable1eb9e2287549134f1169dc2d101b6595f007" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请编号">申请编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FIVE_NO" name="FIVE_NO"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提出人姓名">提出人姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="FIVE_NAME" name="FIVE_NAME">
  <input class="form-control input-sm cellinput-addon" type="text" id="FIVE_NAMEAlias" name="FIVE_NAMEAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="单位">单位</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="FIVE_DEPT" name="FIVE_DEPT">
  <input class="form-control input-sm cellinput-addon" type="text" id="FIVE_DEPTAlias" name="FIVE_DEPTAlias" >
  <span class="input-group-addon">
    <i class="glyphicon glyphicon-equalizer"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年龄">年龄</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FVIE_AGE" name="FVIE_AGE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="职位">职位</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FIVE_POSITION" name="FIVE_POSITION"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="问题描述">问题描述</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FIVE_PROBLEM" name="FIVE_PROBLEM"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提出时间">提出时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="FIVE_DATE_START" name="FIVE_DATE_START" >
<span id="FIVE_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="提出时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="FIVE_DATE_END" name="FIVE_DATE_END" >
<span id="FIVE_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="改善措施">改善措施</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FIVE_MEASURES" name="FIVE_MEASURES"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="改善效果">改善效果</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FIVE_EFFECT" name="FIVE_EFFECT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="应用前景">应用前景</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="FIVE_PROSPECTS" name="FIVE_PROSPECTS"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系人姓名">联系人姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="POSEN_NAME" name="POSEN_NAME">
  <input class="form-control input-sm cellinput-addon" type="text" id="POSEN_NAMEAlias" name="POSEN_NAMEAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系人电话">联系人电话</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="POSEN_TEL" name="POSEN_TEL"
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
<script src="avicit/eformmodule/view/WXSB/V1/bootstrap/view1700031829000.js?_=1704345400754"></script>
</html> 
