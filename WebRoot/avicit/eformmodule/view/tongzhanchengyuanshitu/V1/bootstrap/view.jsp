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
<div class="easyui-layout" fit="true" id="2c908c5a89520e1701895214578a0640"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tableed75d0fb43868e450b090efd8e459dadbc42').setGridHeight(getJgridTableHeight($('#tableed75d0fb43868e450b090efd8e459dadbc42_div')));$('#tableed75d0fb43868e450b090efd8e459dadbc42').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tableed75d0fb43868e450b090efd8e459dadbc42_div"><div style="overflow:auto"> <div id="tableToolbartableed75d0fb43868e450b090efd8e459dadbc42" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtableed75d0fb43868e450b090efd8e459dadbc42" id="keyWordtableed75d0fb43868e450b090efd8e459dadbc42" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttableed75d0fb43868e450b090efd8e459dadbc42" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltableed75d0fb43868e450b090efd8e459dadbc42" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton1928b8a08942bf41f3b9600e7ae319ef7632" permissionDes="导入"><a id="tableToolbarButton1928b8a08942bf41f3b9600e7ae319ef7632" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class="fa fa-fw fa-arrows-v"></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton5dc1f4b52d56144ee6985f2e6322ef1b5bc8" permissionDes="导出"><a id="tableToolbarButton5dc1f4b52d56144ee6985f2e6322ef1b5bc8" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class="fa fa-fw fa-arrows-h"></i> 导出</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc650a86fff5ff74835e8538e5b05f1c50188" permissionDes="添加流程"><a id="tableToolbarButtonc650a86fff5ff74835e8538e5b05f1c50188" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="添加流程"><i class=""></i> 添加流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtona8e4df9cea491d4610784aaf69538716587f" permissionDes="删除流程"><a id="tableToolbarButtona8e4df9cea491d4610784aaf69538716587f" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除流程"><i class=""></i> 删除流程</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton3ef6c48117c95841f0081e6c985ac8697a7d" permissionDes="修改流程"><a id="tableToolbarButton3ef6c48117c95841f0081e6c985ac8697a7d" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="修改流程"><i class=""></i> 修改流程</a></sec:accesscontrollist>
</div></div><div id="Pagertableed75d0fb43868e450b090efd8e459dadbc42"></div><table id="tableed75d0fb43868e450b090efd8e459dadbc42" datapermission="tableed75d0fb43868e450b090efd8e459dadbc42" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtableed75d0fb43868e450b090efd8e459dadbc42" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtableed75d0fb43868e450b090efd8e459dadbc42" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="编号">编号</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="NEMBER" name="NEMBER"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="姓名">姓名</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="UFMNAME" name="UFMNAME"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="性别">性别</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="GENDER" name="GENDER" title="性别" isNull="true" lookupCode="PLATFORM_SEX" />
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
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="在民主党派、人大、政协等任职情况">在民主党派、人大、政协等任职情况</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="PARTY_REPRE_POSITIONS" name="PARTY_REPRE_POSITIONS"
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
<script src="avicit/eformmodule/view/tongzhanchengyuanshitu/V1/bootstrap/view1697701311000.js?_=1697701346953"></script>
</html> 
