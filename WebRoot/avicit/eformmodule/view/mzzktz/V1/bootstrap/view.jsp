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
<div class="easyui-layout" fit="true" id="4028818e89be73bb0189bef66b5e02dc"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#tableb82fd5534bca644ba728fd706af31cd56ad3').setGridHeight(getJgridTableHeight($('#tableb82fd5534bca644ba728fd706af31cd56ad3_div')));$('#tableb82fd5534bca644ba728fd706af31cd56ad3').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="tableb82fd5534bca644ba728fd706af31cd56ad3_div"><div style="overflow:auto"> <div id="tableToolbartableb82fd5534bca644ba728fd706af31cd56ad3" class="toolbar" style="height:38px;"><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton19ae5d5a1ef3454f25294163105a19dc2fd1" permissionDes="添加"><a id="tableToolbarButton19ae5d5a1ef3454f25294163105a19dc2fd1" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton877a65ab034fb841835b60e7a2a1c3ee147e" permissionDes="编辑"><a id="tableToolbarButton877a65ab034fb841835b60e7a2a1c3ee147e" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class=""></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtonc108849d66af1840326a75c6da355edc4349" permissionDes="删除"><a id="tableToolbarButtonc108849d66af1840326a75c6da355edc4349" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class=""></i> 删除</a></sec:accesscontrollist>
</div><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtableb82fd5534bca644ba728fd706af31cd56ad3" id="keyWordtableb82fd5534bca644ba728fd706af31cd56ad3" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttableb82fd5534bca644ba728fd706af31cd56ad3" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltableb82fd5534bca644ba728fd706af31cd56ad3" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div></div><div id="Pagertableb82fd5534bca644ba728fd706af31cd56ad3"></div><table id="tableb82fd5534bca644ba728fd706af31cd56ad3" datapermission="tableb82fd5534bca644ba728fd706af31cd56ad3" class="eform_component" ></table></div></div> </div></body>
<blockdom>
<div id="searchDialogtableb82fd5534bca644ba728fd706af31cd56ad3" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtableb82fd5534bca644ba728fd706af31cd56ad3" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发起人">发起人</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol"> <input type="hidden"  id="LAUNCH_POSEN" name="LAUNCH_POSEN">
  <input class="form-control input-sm cellinput-addon" type="text" id="LAUNCH_POSENAlias" name="LAUNCH_POSENAlias" >
  <span class="input-group-addon">
   <i class="glyphicon glyphicon-user"></i>
 </span>
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="标题">标题</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="TITLE" name="TITLE"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发起时间">发起时间</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="LANUCH_DATE_START" name="LANUCH_DATE_START" >
<span id="LANUCH_DATE_START_button" class="input-group-addon data-box-act">
	<i class="glyphicon glyphicon-calendar"></i>
</span>
</div>
</div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="发起时间">至</div>
<div class="input-group input-group-sm col-xs-9 cellcontrol ">
<input type="text" class="form-control cellinput-addon date-picker"  value="" id="LANUCH_DATE_END" name="LANUCH_DATE_END" >
<span id="LANUCH_DATE_END_button" class="input-group-addon data-box-act">
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
<script src="avicit/eformmodule/view/mzzktz/V1/bootstrap/view1691126412000.js?_=1691629700725"></script>
</html> 
