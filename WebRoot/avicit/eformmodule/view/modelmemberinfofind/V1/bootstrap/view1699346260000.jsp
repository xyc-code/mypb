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
<div class="easyui-layout" fit="true" id="2c908c5a8a15f0bc018a1600761a06c9"> <div data-options="region:'north',split:true,disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table3031ec233f1d6e4befc913cc78ae55b6757f').setGridHeight(getJgridTableHeight($('#table3031ec233f1d6e4befc913cc78ae55b6757f_div')));$('#table3031ec233f1d6e4befc913cc78ae55b6757f').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table3031ec233f1d6e4befc913cc78ae55b6757f_div"><div style="overflow:auto"> <div id="tableToolbartable3031ec233f1d6e4befc913cc78ae55b6757f" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton5ab3fc74c567434777d841a2ad2fe838621e" permissionDes="添加"><a id="tableToolbarButton5ab3fc74c567434777d841a2ad2fe838621e" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8cc6c6d8f89fec4aa618147169ad0aa02a7e" permissionDes="编辑"><a id="tableToolbarButton8cc6c6d8f89fec4aa618147169ad0aa02a7e" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton2b938b1323302e40ccd89b6dcc067bee8725" permissionDes="删除"><a id="tableToolbarButton2b938b1323302e40ccd89b6dcc067bee8725" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton3531a11cbd7cad4f19084b98998042f80ec7" permissionDes="导出"><a id="tableToolbarButton3531a11cbd7cad4f19084b98998042f80ec7" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton781d92ad594b1e434c08ce25ff7859b56671" permissionDes="导入"><a id="tableToolbarButton781d92ad594b1e434c08ce25ff7859b56671" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable3031ec233f1d6e4befc913cc78ae55b6757f" id="keyWordtable3031ec233f1d6e4befc913cc78ae55b6757f" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable3031ec233f1d6e4befc913cc78ae55b6757f" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable3031ec233f1d6e4befc913cc78ae55b6757f" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertable3031ec233f1d6e4befc913cc78ae55b6757f"></div><table id="table3031ec233f1d6e4befc913cc78ae55b6757f" datapermission="table3031ec233f1d6e4befc913cc78ae55b6757f" class="eform_component" ></table></div></div> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(0.5,e),onResize:function(a){$('#table685ba48bd23fb44583ca2e98fb7236706c5f').setGridHeight(getJgridTableHeight($('#table685ba48bd23fb44583ca2e98fb7236706c5f_div')));$('#table685ba48bd23fb44583ca2e98fb7236706c5f').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table685ba48bd23fb44583ca2e98fb7236706c5f_div"><div style="overflow:auto"> <div id="tableToolbartable685ba48bd23fb44583ca2e98fb7236706c5f" class="toolbar" style="height:38px;"></div><div id="Pagertable685ba48bd23fb44583ca2e98fb7236706c5f"></div><table id="table685ba48bd23fb44583ca2e98fb7236706c5f" datapermission="table685ba48bd23fb44583ca2e98fb7236706c5f" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable3031ec233f1d6e4befc913cc78ae55b6757f" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable3031ec233f1d6e4befc913cc78ae55b6757f" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="国家级荣誉">国家级荣誉</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MODEL_COUNTRY" name="MODEL_COUNTRY"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="省部级荣誉">省部级荣誉</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MODEL_ECONOMIZE" name="MODEL_ECONOMIZE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="地市级荣誉">地市级荣誉</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MODEL_CITY" name="MODEL_CITY"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司级荣誉">公司级荣誉</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="MODEL_COMPANY" name="MODEL_COMPANY"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="学历">学历</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="EDUCATION_LEVEL" name="EDUCATION_LEVEL" title="学历" isNull="true" lookupCode="TRADE_UNION_EDUCATION" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发动机分类">发动机分类</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="CATEGORY_TYPE" name="CATEGORY_TYPE" title="发动机分类" isNull="true" lookupCode="PA_CATEGORY" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生日期">出生日期</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="BIRTHDAY_START" name="BIRTHDAY_START" >
<span id="BIRTHDAY_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="出生日期">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon time-picker"  value="" id="BIRTHDAY_END" name="BIRTHDAY_END" >
<span id="BIRTHDAY_END_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="学历">学历</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="EDUCATION_LEVEL" name="EDUCATION_LEVEL" title="学历" isNull="true" lookupCode="TRADE_UNION_EDUCATION" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="职称">职称</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PROFESSIONAL_RANK" name="PROFESSIONAL_RANK" title="职称" isNull="true" lookupCode="PLATFORM_USER_TITLE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="职称">职称</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PROFESSIONAL_RANK" name="PROFESSIONAL_RANK" title="职称" isNull="true" lookupCode="PLATFORM_USER_TITLE" />
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="DATA_1" name="DATA_1" title="性别" isNull="true" lookupCode="PLATFORM_SEX" />
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
<script src="avicit/eformmodule/view/modelmemberinfofind/V1/bootstrap/view1699346260000.js?_=1699501286462"></script>
<script src="avicit/tu/dyntumodelworker/js/divinput.js"></script>
</html> 
