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
<div class="easyui-layout" fit="true" id="2c908c1d8dc9acdd018dcfb627621d92"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table63aefc0b7127d643f7e85eb888ce5fb52204').setGridHeight(getJgridTableHeight($('#table63aefc0b7127d643f7e85eb888ce5fb52204_div')));$('#table63aefc0b7127d643f7e85eb888ce5fb52204').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table63aefc0b7127d643f7e85eb888ce5fb52204_div"><div style="overflow:auto"> <div id="tableToolbartable63aefc0b7127d643f7e85eb888ce5fb52204" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable63aefc0b7127d643f7e85eb888ce5fb52204" id="keyWordtable63aefc0b7127d643f7e85eb888ce5fb52204" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable63aefc0b7127d643f7e85eb888ce5fb52204" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable63aefc0b7127d643f7e85eb888ce5fb52204" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtond2c85c21e456d74f4239ceb2e5cfd5e6ab67" permissionDes="添加"><a id="tableToolbarButtond2c85c21e456d74f4239ceb2e5cfd5e6ab67" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class=""></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtona014369950b669446269d10f83bb78724ec2" permissionDes="编辑"><a id="tableToolbarButtona014369950b669446269d10f83bb78724ec2" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton9a0925cc8df97a4c7898443fdbb75472009b" permissionDes="删除"><a id="tableToolbarButton9a0925cc8df97a4c7898443fdbb75472009b" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton9753ecdf944a634caae844f22332878c1c5e" permissionDes="导入"><a id="tableToolbarButton9753ecdf944a634caae844f22332878c1c5e" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导入"><i class=""></i> 导入</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtone37d2a8436c45a45c2c9182c383d65e6021a" permissionDes="导出"><a id="tableToolbarButtone37d2a8436c45a45c2c9182c383d65e6021a" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="导出"><i class=""></i> 导出</a></sec:accesscontrollist>
</div></div><div id="Pagertable63aefc0b7127d643f7e85eb888ce5fb52204"></div><table id="table63aefc0b7127d643f7e85eb888ce5fb52204" datapermission="table63aefc0b7127d643f7e85eb888ce5fb52204" class="eform_component" ></table></div></div></div></body>
<blockdom>
<div id="searchDialogtable63aefc0b7127d643f7e85eb888ce5fb52204" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable63aefc0b7127d643f7e85eb888ce5fb52204" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织类型">党组织类型</div>
<div class="input-group-sm col-xs-9 cellcontrol">
 <pt6:h5select css_class="form-control input-sm cellinput" defaultValue="" id="PARTY_TYPE" name="PARTY_TYPE" title="党组织类型" isNull="true" lookupCode="PARTY_ORG_TYPE" />
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
<script src="avicit/eformmodule/view/cxdzz/V1/bootstrap/view1709108221000.js?_=1782458088946"></script>
</html> 
