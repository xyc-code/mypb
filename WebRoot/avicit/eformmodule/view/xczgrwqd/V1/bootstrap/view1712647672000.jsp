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
<div class="easyui-layout" fit="true" id="2c91008188234d340188238a5aef02f5"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table27dadc6724db894b7a08358c021c94d53c2f').setGridHeight(getJgridTableHeight($('#table27dadc6724db894b7a08358c021c94d53c2f_div')));$('#table27dadc6724db894b7a08358c021c94d53c2f').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table27dadc6724db894b7a08358c021c94d53c2f_div"><div style="overflow:auto"> <div id="tableToolbartable27dadc6724db894b7a08358c021c94d53c2f" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable27dadc6724db894b7a08358c021c94d53c2f" id="keyWordtable27dadc6724db894b7a08358c021c94d53c2f" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable27dadc6724db894b7a08358c021c94d53c2f" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable27dadc6724db894b7a08358c021c94d53c2f" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton6875db8ef3e9ca4778386e4851f3f406e62c" permissionDes="添加"><a id="tableToolbarButton6875db8ef3e9ca4778386e4851f3f406e62c" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-fw fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb82444782fc51f468c5bacec8710a9a70e35" permissionDes="编辑"><a id="tableToolbarButtonb82444782fc51f468c5bacec8710a9a70e35" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-fw fa-edit"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton4254b37b88947645023889efff27da3f4712" permissionDes="删除"><a id="tableToolbarButton4254b37b88947645023889efff27da3f4712" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-fw fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtona4cd20186ef4c341f8b9e317637a26669fb7" permissionDes="导入"><a id="tableToolbarButtona4cd20186ef4c341f8b9e317637a26669fb7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class="fa fa-fw fa-upload"></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton4ab40b85a0dc354465789283244958a78768" permissionDes="一键下发"><a id="tableToolbarButton4ab40b85a0dc354465789283244958a78768" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="一键下发"><i class="fa fa-fw fa-wpforms"></i> 一键下发</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton532448143573084fea6a75eca86386397c63" permissionDes="导出巡察整改归零表"><a id="tableToolbarButton532448143573084fea6a75eca86386397c63" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出巡察整改归零表"><i class="fa fa-fw fa-download"></i> 导出巡察整改归零表</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2c250c1d4255b2464a58c10c84c0ddcd54f0" permissionDes="取回已下发任务"><a id="tableToolbarButton2c250c1d4255b2464a58c10c84c0ddcd54f0" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="取回已下发任务"><i class="fa fa-fw fa-hand-lizard-o"></i> 取回已下发任务</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton82b2be4a33e55441e0989fba86df73ec2e74" permissionDes="任务取消"><a id="tableToolbarButton82b2be4a33e55441e0989fba86df73ec2e74" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="任务取消"><i class="fa fa-fw fa-trash-o"></i> 任务取消</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonb2dfb968a8b85141f588d358787d0f924b9a" permissionDes="更换责任人或责任领导"><a id="tableToolbarButtonb2dfb968a8b85141f588d358787d0f924b9a" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="更换责任人或责任领导"><i class="fa fa-fw fa-wrench"></i> 更换责任人或责任领导</a></sec:accesscontrollist>
</div></div><div id="Pagertable27dadc6724db894b7a08358c021c94d53c2f"></div><table id="table27dadc6724db894b7a08358c021c94d53c2f" datapermission="table27dadc6724db894b7a08358c021c94d53c2f" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table5632ec0cfdae5b45f4f9b6965e2334c9460a').setGridHeight(getJgridTableHeight($('#table5632ec0cfdae5b45f4f9b6965e2334c9460a_div')));$('#table5632ec0cfdae5b45f4f9b6965e2334c9460a').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table5632ec0cfdae5b45f4f9b6965e2334c9460a_div"><div style="overflow:auto"> <div id="tableToolbartable5632ec0cfdae5b45f4f9b6965e2334c9460a" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a" id="keyWordtable5632ec0cfdae5b45f4f9b6965e2334c9460a" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable5632ec0cfdae5b45f4f9b6965e2334c9460a" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable5632ec0cfdae5b45f4f9b6965e2334c9460a" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable5632ec0cfdae5b45f4f9b6965e2334c9460a"></div><table id="table5632ec0cfdae5b45f4f9b6965e2334c9460a" datapermission="table5632ec0cfdae5b45f4f9b6965e2334c9460a" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable5632ec0cfdae5b45f4f9b6965e2334c9460a" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable5632ec0cfdae5b45f4f9b6965e2334c9460a" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="循环审批次数">循环审批次数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ATTRIBUTE_10" name="ATTRIBUTE_10"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="表单编号">表单编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_FROM_ON" name="INSPECTION_FROM_ON"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡察反馈的问题">巡察反馈的问题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_ISSUE" name="INSPECTION_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="举一反三检查情况">举一反三检查情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_ONE_AND" name="INSPECTION_ONE_AND"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="被巡察单位主管领导审核意见">被巡察单位主管领导审核意见</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_OPINION" name="INSPECTION_OPINION"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="被巡察单位巡察整改领导小组审核意见">被巡察单位巡察整改领导小组审核意见</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_OPINION_S" name="INSPECTION_OPINION_S"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司主管业务部门审查意见">公司主管业务部门审查意见</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_OPINION_END" name="INSPECTION_OPINION_END"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="整改措施完成情况">整改措施完成情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_END_ISSUE_QK" name="INSPECTION_END_ISSUE_QK"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="针对根本原因制定的归零措施">针对根本原因制定的归零措施</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="INSPECTION_MEASURE_ISSUE" name="INSPECTION_MEASURE_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
</form></div>
<div id="searchDialogtable27dadc6724db894b7a08358c021c94d53c2f" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable27dadc6724db894b7a08358c021c94d53c2f" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="主要方面">主要方面</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="LIST_MAINLY" name="LIST_MAINLY"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发现的问题">发现的问题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_ISSUE" name="MANIFEST_ISSUE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="问题的具体内容">问题的具体内容</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_ISSUE_CONT" name="MANIFEST_ISSUE_CONT"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="原因分析">原因分析</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_CAUSE" name="MANIFEST_CAUSE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="整改措施具体内容 （含措施分解）">整改措施具体内容 （含措施分解）</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_MEASURE" name="MANIFEST_MEASURE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="责任人">责任人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="MANIFEST_POSEN" name="MANIFEST_POSEN">
  <input class="form-control input-sm cellinput-addon" type="text" id="MANIFEST_POSENAlias" name="MANIFEST_POSENAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="责任领导">责任领导</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="MANIFEST_LEADERSHIP" name="MANIFEST_LEADERSHIP">
  <input class="form-control input-sm cellinput-addon" type="text" id="MANIFEST_LEADERSHIPAlias" name="MANIFEST_LEADERSHIPAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="举一反三情况">举一反三情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_ONE_AND" name="MANIFEST_ONE_AND"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="完成时间">完成时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="MANIFEST_DATE_END_START" name="MANIFEST_DATE_END_START" >
<span id="MANIFEST_DATE_END_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="完成时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="MANIFEST_DATE_END_END" name="MANIFEST_DATE_END_END" >
<span id="MANIFEST_DATE_END_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="业务主管 部门会签">业务主管 部门会签</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MANIFEST_QIAN" name="MANIFEST_QIAN"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="状态">状态</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="ATTRIBUTE_01" name="ATTRIBUTE_01" title="状态" isNull="true" lookupCode="ATTRIBUTE_01" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="下发时间">下发时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="DATE_MANIFEST_START" name="DATE_MANIFEST_START" >
<span id="DATE_MANIFEST_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="下发时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="DATE_MANIFEST_END" name="DATE_MANIFEST_END" >
<span id="DATE_MANIFEST_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="整改周期">整改周期</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="ATTRIBUTE_04" name="ATTRIBUTE_04" title="整改周期" isNull="true" lookupCode="dyn_task_checklist_attr4" />
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
<script src="avicit/eformmodule/view/xczgrwqd/V1/bootstrap/view1712647672000.js?_=1712898694106"></script>
<script src="static/js/platform/pan/download.js"></script>
<script src="avicit/pb/dyntaskchecklist/js/DynTaskChecklist.js"></script>
</html> 
