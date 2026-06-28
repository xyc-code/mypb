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
<div class="easyui-layout" fit="true" id="2c908c528ea146fb018ea18f5e181757"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').setGridHeight(getJgridTableHeight($('#table7b1c681cef4c974bb108d5cb7f01b46b83ef_div')));$('#table7b1c681cef4c974bb108d5cb7f01b46b83ef').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table7b1c681cef4c974bb108d5cb7f01b46b83ef_div"><div style="overflow:auto"> <div id="tableToolbartable7b1c681cef4c974bb108d5cb7f01b46b83ef" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef" id="keyWordtable7b1c681cef4c974bb108d5cb7f01b46b83ef" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable7b1c681cef4c974bb108d5cb7f01b46b83ef" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable7b1c681cef4c974bb108d5cb7f01b46b83ef" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<select id="table7b1c681cef4c974bb108d5cb7f01b46b83efworkFlowSelect" class="form-control input-sm workflow-select"><option value="all" >全部</option><option value="nostart" >未发起</option><option value="start" >拟稿中</option><option value="active" >流转中</option><option value="ended" >已完成</option></select></div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton394beb7ae5d3c540b079bc7055d39e1c67e3" permissionDes="发起流程"><a id="tableToolbarButton394beb7ae5d3c540b079bc7055d39e1c67e3" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class=""></i> 发起流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton4f55d0185a8aef47c8189e529558d2dcf87f" permissionDes="删除"><a id="tableToolbarButton4f55d0185a8aef47c8189e529558d2dcf87f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton08b6e518bf3a3b40eca86db29df026c8c15d" permissionDes="日历配置"><a id="tableToolbarButton08b6e518bf3a3b40eca86db29df026c8c15d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="日历配置"><i class=""></i> 日历配置</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton31be7261020c834f0029dc87ae410e895ba9" permissionDes="人员配置"><a id="tableToolbarButton31be7261020c834f0029dc87ae410e895ba9" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="人员配置"><i class=""></i> 人员配置</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonca182f7ed694ff40c11891b19b9eb0c431e0" permissionDes="导出"><a id="tableToolbarButtonca182f7ed694ff40c11891b19b9eb0c431e0" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertable7b1c681cef4c974bb108d5cb7f01b46b83ef"></div><table id="table7b1c681cef4c974bb108d5cb7f01b46b83ef" datapermission="table7b1c681cef4c974bb108d5cb7f01b46b83ef" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table0fdd446f579a7c42c928008b27481201f656').setGridHeight(getJgridTableHeight($('#table0fdd446f579a7c42c928008b27481201f656_div')));$('#table0fdd446f579a7c42c928008b27481201f656').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table0fdd446f579a7c42c928008b27481201f656_div"><div style="overflow:auto"> <div id="tableToolbartable0fdd446f579a7c42c928008b27481201f656" class="toolbar" style="height:38px;"></div><div id="Pagertable0fdd446f579a7c42c928008b27481201f656"></div><table id="table0fdd446f579a7c42c928008b27481201f656" datapermission="table0fdd446f579a7c42c928008b27481201f656" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable7b1c681cef4c974bb108d5cb7f01b46b83ef" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable7b1c681cef4c974bb108d5cb7f01b46b83ef" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="患者姓名">患者姓名</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="PATIENTER_ID" name="PATIENTER_ID">
  <input class="form-control input-sm cellinput-addon" type="text" id="PATIENTER_IDAlias" name="PATIENTER_IDAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="患者性别">患者性别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PATIENT_SEX" name="PATIENT_SEX" title="患者性别" isNull="true" lookupCode="PLATFORM_SEX" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="患者年龄">患者年龄</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PATIENT_AGE" name="PATIENT_AGE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="联系方式">联系方式</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PATIENT_TEL" name="PATIENT_TEL"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="开户银行">开户银行</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="DEPOSIT_BANK" name="DEPOSIT_BANK" title="开户银行" isNull="true" lookupCode="DEPOSIT_BANK" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="疾病类型">疾病类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="DISEASE_TYPE" name="DISEASE_TYPE" title="疾病类型" isNull="true" lookupCode="DISEASE_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度">年度</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DRAF_YEAR" name="DRAF_YEAR"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请时间">申请时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREATION_DATE_START" name="CREATION_DATE_START" >
<span id="CREATION_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申请时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREATION_DATE_END" name="CREATION_DATE_END" >
<span id="CREATION_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
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
<script src="avicit/eformmodule/view/daaxyl/V1/bootstrap/view1724221934000.js?_=1724222821201"></script>
</html> 
