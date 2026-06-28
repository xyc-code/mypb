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
<div class="easyui-layout" fit="true" id="948e83e390a0fe270190a147e30d15a8"> <div data-options="region:'west',split:true,disabled:false ,width:fixwidth(0.2,e),height:fixheight(1.0,e),onResize:function(a){$('#table22076c1858a895430889b63b5f580836086b').setGridHeight(getJgridTableHeight($('#table22076c1858a895430889b63b5f580836086b_div')));$('#table22076c1858a895430889b63b5f580836086b').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table22076c1858a895430889b63b5f580836086b_div"><div style="overflow:auto"> <div id="tableToolbartable22076c1858a895430889b63b5f580836086b" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable22076c1858a895430889b63b5f580836086b" id="keyWordtable22076c1858a895430889b63b5f580836086b" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable22076c1858a895430889b63b5f580836086b" class="icon icon-search form-tool-searchicon"></label>
</div>
</div></div><div id="Pagertable22076c1858a895430889b63b5f580836086b"></div><table id="table22076c1858a895430889b63b5f580836086b" datapermission="table22076c1858a895430889b63b5f580836086b" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(0.8,e),height:fixheight(1.0,e)" style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;">
 <div class="easyui-layout" fit="true" id="948e83e390ba1eca0190bea87a2474c1">
  <div style="height: 100%" class="tabs_div " addheight="40"> 
   <ul id="tabl_list" class="nav nav-tabs" role="tablist" data-tabstyle="1" data-tabalign="1" data-fontsize="12"> 
    <li role="presentation" class="active" onclick="$(window).trigger('resize');"><a href="#f95d6edda6207d4e55dbf7ab60ecd5a702aa" aria-controls="f95d6edda6207d4e55dbf7ab60ecd5a702aa" role="tab" data-toggle="tab" style="font-size:12px" title="干部" tabicon="glyphicon glyphicon-th-list noneBolder" aria-expanded="true">干部</a></li> 
    <li role="presentation" onclick="$(window).trigger('resize');" class=""><a href="#320c01970fa3eb44eb0a6c9e5be6e2449251" aria-controls="320c01970fa3eb44eb0a6c9e5be6e2449251" role="tab" data-toggle="tab" style="font-size:12px" title="党员" tabicon="glyphicon glyphicon-th-list noneBolder" aria-expanded="false">党员</a></li> 
   </ul> 
   <div class="tab-content" style="height:100%;padding-bottom: 40px"> 
    <div role="tabpanel" class="tab-pane active fixheight" id="f95d6edda6207d4e55dbf7ab60ecd5a702aa" style="height: 100%;"> 
     <div class="easyui-layout" fit="true" id="948e83e390ba1eca0190bea87a2474c2"> 
      <div data-options="region:'center',disabled:false ,width:fixwidth(0.8,e),height:fixheight(1.0,e),onResize:function(a){$('#table1ed0d20aa6fada47f8a8b6e1c5804862fac2').setGridHeight(getJgridTableHeight($('#table1ed0d20aa6fada47f8a8b6e1c5804862fac2_div')));$('#table1ed0d20aa6fada47f8a8b6e1c5804862fac2').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table1ed0d20aa6fada47f8a8b6e1c5804862fac2_div"><div style="overflow:auto"> <div id="tableToolbartable1ed0d20aa6fada47f8a8b6e1c5804862fac2" class="toolbar" style="height:38px;"></div><div id="Pagertable1ed0d20aa6fada47f8a8b6e1c5804862fac2"></div><table id="table1ed0d20aa6fada47f8a8b6e1c5804862fac2" datapermission="table1ed0d20aa6fada47f8a8b6e1c5804862fac2" class="eform_component" ></table></div></div> 
     </div> 
    </div> 
    <div role="tabpanel" class="tab-pane fixheight" id="320c01970fa3eb44eb0a6c9e5be6e2449251" style="height: 100%;"> 
     <div class="easyui-layout" fit="true" id="948e83e390ba1eca0190bea87a2474c3"> 
      <div data-options="region:'center',disabled:false ,width:fixwidth(0.8,e),height:fixheight(1.0,e),onResize:function(a){$('#tablee29a463e62d6854d475838a6e135a2f0bdde').setGridHeight(getJgridTableHeight($('#tablee29a463e62d6854d475838a6e135a2f0bdde_div')));$('#tablee29a463e62d6854d475838a6e135a2f0bdde').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tablee29a463e62d6854d475838a6e135a2f0bdde_div"><div style="overflow:auto"> <div id="tableToolbartablee29a463e62d6854d475838a6e135a2f0bdde" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group-btn form-tool-searchbtn"><a id="searchAlltablee29a463e62d6854d475838a6e135a2f0bdde" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
<div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtablee29a463e62d6854d475838a6e135a2f0bdde" id="keyWordtablee29a463e62d6854d475838a6e135a2f0bdde" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttablee29a463e62d6854d475838a6e135a2f0bdde" class="icon icon-search form-tool-searchicon"></label>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc23771e0f9e0a44c07a85a2d49caa237e9f7" permissionDes="导出"><a id="tableToolbarButtonc23771e0f9e0a44c07a85a2d49caa237e9f7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertablee29a463e62d6854d475838a6e135a2f0bdde"></div><table id="tablee29a463e62d6854d475838a6e135a2f0bdde" datapermission="tablee29a463e62d6854d475838a6e135a2f0bdde" class="eform_component" ></table></div></div> 
     </div> 
    </div> 
   </div> 
  </div>
 </div>
</div><div class="contextMenu" id="eform-tab-menu">
	<ul>
		<li id="eform-refresh">刷新</li>
	</ul>
</div>
</div></body>
<blockdom>
<div id="searchDialogtablee29a463e62d6854d475838a6e135a2f0bdde" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtablee29a463e62d6854d475838a6e135a2f0bdde" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员先锋岗干部非干部">党员先锋岗干部非干部</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="GW_NAME2" name="GW_NAME2" title="党员先锋岗干部非干部" isNull="true" lookupCode="DYXFG_TJ_GW_TYPE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="申报党员先锋岗名称">申报党员先锋岗名称</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="GW_NAME" name="GW_NAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="干部级别">干部级别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="USER_GBJB" name="USER_GBJB" title="干部级别" isNull="true" lookupCode="party_xfg_jb" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="年度绩效">年度绩效</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="USER_JX" name="USER_JX" title="年度绩效" isNull="true" lookupCode="party_xfg_jx" />
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
<script src="avicit/eformmodule/view/xfgtj/V1/bootstrap/view1721033240000.js?_=1721185630866"></script>
</html> 
