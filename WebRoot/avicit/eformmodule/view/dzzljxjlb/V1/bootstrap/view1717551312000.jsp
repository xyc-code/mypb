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
<div class="easyui-layout" fit="true" id="2c908c1d8d52d54a018d52f8138c088c"> <div data-options="region:'west',split:true,disabled:false ,width:fixwidth(0.2,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;"><div><input type="hidden" id="treef821d5139287e146e9e945bdbf5e3c2e513asearchStatus" value="0"><div class="input-group  input-group-sm"><input  class="form-control" placeholder="回车查询" type="text" id="txt_treef821d5139287e146e9e945bdbf5e3c2e513a" name="txt_treef821d5139287e146e9e945bdbf5e3c2e513a"><span class="input-group-btn"><button id="searchbtns_treef821d5139287e146e9e945bdbf5e3c2e513a" class="btn btn-default ztree-search" type="button"><span class="glyphicon glyphicon-search"></span></button></span></div><ul id="treef821d5139287e146e9e945bdbf5e3c2e513a" class="ztree eform_component"></ul></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(0.8,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;">
 <div class="easyui-layout" fit="true" id="948e83e38fdcbb9e018fe6f32a7d3b9e"> 
  <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(0.8,e),height:fixheight(0.4,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;"><div style="height:100%;"><div id='form9b2ffe76c9ed1849dfa849a2fe2782f13880formToolbarButtonArea' class="toolbar" style="padding-bottom: 6px;border-bottom: solid 4px #eee; position:absolute"><div class="toolbar-left"><a id="formToolbarButton7c74dabbddcac84d3a4a592d1c5f0013b94c" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="上一个"><i class="glyphicon glyphicon-arrow-up"></i> 上一个</a>
<a id="formToolbarButtona196a0101fcdee4ada9a318b971bc21469db" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="下一个"><i class="glyphicon glyphicon-arrow-down"></i> 下一个</a>
<a id="formToolbarButtonb7cd6cd4c17de74aaadb82e7bb776e1db770" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="党组织选举统计"><i class="fa fa-fw fa-copy"></i> 党组织选举统计</a>
<a id="formToolbarButtond552047ca096414cbcb846d0c39a00cc963e" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="党组织选举进度"><i class="fa fa-fw fa-eye"></i> 党组织选举进度</a>
</div></div><iframe id="form9b2ffe76c9ed1849dfa849a2fe2782f13880" class="eform_component" scrolling="auto"  src="" style="width:100%;height:98%;border:1px;padding:55px 0 0 0;"></iframe></div></div> 
  <div data-options="region:'center',disabled:false ,width:fixwidth(0.8,e),height:fixheight(0.6,e),onResize:function(a){$('#tablebbbbaac739a860421ab856d911abf6a98dd9').setGridHeight(getJgridTableHeight($('#tablebbbbaac739a860421ab856d911abf6a98dd9_div')));$('#tablebbbbaac739a860421ab856d911abf6a98dd9').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablebbbbaac739a860421ab856d911abf6a98dd9_div"><div style="overflow:auto"> <div id="tableToolbartablebbbbaac739a860421ab856d911abf6a98dd9" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablebbbbaac739a860421ab856d911abf6a98dd9" id="keyWordtablebbbbaac739a860421ab856d911abf6a98dd9" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablebbbbaac739a860421ab856d911abf6a98dd9" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablebbbbaac739a860421ab856d911abf6a98dd9" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton140d63cad45fc64f3f39658db0f3ee39e3f0" permissionDes="添加"><a id="tableToolbarButton140d63cad45fc64f3f39658db0f3ee39e3f0" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-fw fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtondb743912c85eac439a183083470f6a01c0bb" permissionDes="编辑"><a id="tableToolbarButtondb743912c85eac439a183083470f6a01c0bb" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="icon iconfont icon-edit-square"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtondbb5293a4c6fac4ce06afbfac932bf753453" permissionDes="删除"><a id="tableToolbarButtondbb5293a4c6fac4ce06afbfac932bf753453" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-fw fa-times-circle"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton920faf544568954fe178381e2eb98dbc64de" permissionDes="导入"><a id="tableToolbarButton920faf544568954fe178381e2eb98dbc64de" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton529df83371825648704802df610dc71016ae" permissionDes="导出"><a id="tableToolbarButton529df83371825648704802df610dc71016ae" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertablebbbbaac739a860421ab856d911abf6a98dd9"></div><table id="tablebbbbaac739a860421ab856d911abf6a98dd9" datapermission="tablebbbbaac739a860421ab856d911abf6a98dd9" class="eform_component" ></table></div></div> 
 </div>
</div></div></body>
<blockdom>
<div id="searchDialogtablebbbbaac739a860421ab856d911abf6a98dd9" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablebbbbaac739a860421ab856d911abf6a98dd9" > <div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="届次">届次</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="SESSION_NAME" name="SESSION_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="党组织名称">党组织名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_NAME" name="PARTY_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="党组织类型">党组织类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" isNull="true" lookupCode="PARTY_ORG_TYPE" />
</div></div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="选举类型">选举类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SESSION_TYPE" name="SESSION_TYPE" title="选举类型" isNull="true" lookupCode="party_xj_type" />
</div></div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="选举时间\调整时间">选举时间\调整时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_START" name="CREA_TIME_START" >
<span id="CREA_TIME_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="选举时间\调整时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_END" name="CREA_TIME_END" >
<span id="CREA_TIME_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="换届提醒 （提前半年）">换届提醒 （提前半年）</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_START" name="CREA_TIME_DATE_START" >
<span id="CREA_TIME_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="换届提醒 （提前半年）">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_END" name="CREA_TIME_DATE_END" >
<span id="CREA_TIME_DATE_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="提交换届选举请示 （提前4个月）">提交换届选举请示 （提前4个月）</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJ_START" name="CREA_TIME_DATE_TJ_START" >
<span id="CREA_TIME_DATE_TJ_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="提交换届选举请示 （提前4个月）">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJ_END" name="CREA_TIME_DATE_TJ_END" >
<span id="CREA_TIME_DATE_TJ_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="提交候选人预备人选请示 （提前2个月）">提交候选人预备人选请示 （提前2个月）</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJYB_START" name="CREA_TIME_DATE_TJYB_START" >
<span id="CREA_TIME_DATE_TJYB_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="提交候选人预备人选请示 （提前2个月）">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="CREA_TIME_DATE_TJYB_END" name="CREA_TIME_DATE_TJYB_END" >
<span id="CREA_TIME_DATE_TJYB_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="召开党员大会 (当月)">召开党员大会 (当月)</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="ZKDYDH_START" name="ZKDYDH_START" >
<span id="ZKDYDH_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="召开党员大会 (当月)">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="ZKDYDH_END" name="ZKDYDH_END" >
<span id="ZKDYDH_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="纪委一次会 （当月）">纪委一次会 （当月）</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="JWYCH_START" name="JWYCH_START" >
<span id="JWYCH_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="纪委一次会 （当月）">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="JWYCH_END" name="JWYCH_END" >
<span id="JWYCH_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="委员会一次会 （当月）">委员会一次会 （当月）</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="WYYCH_START" name="WYYCH_START" >
<span id="WYYCH_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="委员会一次会 （当月）">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="WYYCH_END" name="WYYCH_END" >
<span id="WYYCH_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-3 formcell">
<div class="col-xs-3 celllabel" title="选举进度">选举进度</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="SESSION_JD" name="SESSION_JD" title="选举进度" isNull="true" lookupCode="party_org_type" />
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
<script src="avicit/eformmodule/view/dzzljxjlb/V1/bootstrap/view1717551312000.js?_=1717566647128"></script>
</html> 
