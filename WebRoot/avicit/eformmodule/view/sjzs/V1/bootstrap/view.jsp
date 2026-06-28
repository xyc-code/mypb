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
<div class="easyui-layout" fit="true" id="948e83e38acecb42018b270b4c150581"> <div data-options="region:'center',disabled:false ,width:fixwidth(1.0,e),height:fixheight(1.0,e),onResize:function(a){$('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').setGridHeight(getJgridTableHeight($('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a_div')));$('#table0e4ec0df3b0c02444ab8b83393f7199ffa9a').jqGrid('resizeGrid');} " style="background: #ffffff; height: 0px; padding: 0px; overflow: hidden;" id="table0e4ec0df3b0c02444ab8b83393f7199ffa9a_div"><div style="overflow:auto"> <div id="tableToolbartable0e4ec0df3b0c02444ab8b83393f7199ffa9a" class="toolbar" style="height:38px;"><div class="toolbar-right"><div class="input-group form-tool-search"  style="width:200px;"> <input type="text" name="keyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a" id="keyWordtable0e4ec0df3b0c02444ab8b83393f7199ffa9a" style="width:238px;" class="form-control input-sm" placeholder="请输入查询条件"><label id="keyWordBttable0e4ec0df3b0c02444ab8b83393f7199ffa9a" class="icon icon-search form-tool-searchicon"></label>
</div>
<div class="input-group-btn form-tool-searchbtn"><a id="searchAlltable0e4ec0df3b0c02444ab8b83393f7199ffa9a" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span class="caret"></span></a>
</div>
</div><div class="toolbar-left" ><sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton8892d56a413c974aab8b678283fa25cb5cb4" permissionDes="添加"><a id="tableToolbarButton8892d56a413c974aab8b678283fa25cb5cb4" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButtondeec86bd5e6c01405388426b865b235db7f5" permissionDes="编辑"><a id="tableToolbarButtondeec86bd5e6c01405388426b865b235db7f5" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a></sec:accesscontrollist>
<sec:accesscontrollist hasPermission="3" domainObject="tableToolbarButton7383fa0179ca1441de78fca29ce19d7b8117" permissionDes="删除"><a id="tableToolbarButton7383fa0179ca1441de78fca29ce19d7b8117" href="javascript:void(0)" style="float:left;" class="btn btn-primary form-tool-btn btn-sm " role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a></sec:accesscontrollist>
</div></div><div id="Pagertable0e4ec0df3b0c02444ab8b83393f7199ffa9a"></div><table id="table0e4ec0df3b0c02444ab8b83393f7199ffa9a" datapermission="table0e4ec0df3b0c02444ab8b83393f7199ffa9a" class="eform_component" ></table></div></div> </div></body>
<blockdom>
<div id="searchDialogtable0e4ec0df3b0c02444ab8b83393f7199ffa9a" style="width:100%;overflow: auto;display: none" class="form-inline"> <form id="searchformtable0e4ec0df3b0c02444ab8b83393f7199ffa9a" > <div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="ID">ID</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="ID" name="ID"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="干部人才总人数">干部人才总人数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_5" name="DATA_5"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="干部在岗总数">干部在岗总数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_6" name="DATA_6"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="在岗员工总数">在岗员工总数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_7" name="DATA_7"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="技术人员总数">技术人员总数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_8" name="DATA_8"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="管理人员总数">管理人员总数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_9" name="DATA_9"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="技能人员总数">技能人员总数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_10" name="DATA_10"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织选举到期换届">党组织选举到期换届</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_1" name="DATA_1"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织选举到期换届已完成">党组织选举到期换届已完成</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_2" name="DATA_2"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织选举到期换届进行中">党组织选举到期换届进行中</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_3" name="DATA_3"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织选举到期换届未到期">党组织选举到期换届未到期</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_4" name="DATA_4"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织设置党委">党组织设置党委</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_11" name="DATA_11"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="重点监督项数已完成">重点监督项数已完成</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_28" name="DATA_28"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="重点监督项数进行中">重点监督项数进行中</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_29" name="DATA_29"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织设置党总支部">党组织设置党总支部</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_12" name="DATA_12"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织设置直属党支部">党组织设置直属党支部</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_13" name="DATA_13"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党组织设置下属党支部">党组织设置下属党支部</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_14" name="DATA_14"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员队伍发展党员人数">党员队伍发展党员人数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_15" name="DATA_15"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员队伍新发展党员35岁以下">党员队伍新发展党员35岁以下</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_16" name="DATA_16"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员队伍新发展女党员">党员队伍新发展女党员</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_17" name="DATA_17"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="党员队伍新发展大专以上党历">党员队伍新发展大专以上党历</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_18" name="DATA_18"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="公司巡视整改巡视整改措施数">公司巡视整改巡视整改措施数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_19" name="DATA_19"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡视整改措施数已完成">巡视整改措施数已完成</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_20" name="DATA_20"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡视整改措施数进行中">巡视整改措施数进行中</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_21" name="DATA_21"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="巡视整改措施数超期未完">巡视整改措施数超期未完</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_22" name="DATA_22"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="被巡察单位巡察整改整改措施数">被巡察单位巡察整改整改措施数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_23" name="DATA_23"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="被巡察单位巡察整改整改措施数已完成">被巡察单位巡察整改整改措施数已完成</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_24" name="DATA_24"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="被巡察单位巡察整改整改措施数进行中">被巡察单位巡察整改整改措施数进行中</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_25" name="DATA_25"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="被巡察单位巡察整改整改措施数超期未完">被巡察单位巡察整改整改措施数超期未完</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_26" name="DATA_26"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="重点监督工作重点监督项数">重点监督工作重点监督项数</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_27" name="DATA_27"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="重点监督项数超期未完">重点监督项数超期未完</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_30" name="DATA_30"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="廉洁文化建设工作廉洁文化建设项数量">廉洁文化建设工作廉洁文化建设项数量</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_31" name="DATA_31"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="廉洁文化建设工作廉洁文化建设项数量已完成">廉洁文化建设工作廉洁文化建设项数量已完成</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_32" name="DATA_32"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="廉洁文化建设工作廉洁文化建设项数量进行中">廉洁文化建设工作廉洁文化建设项数量进行中</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_33" name="DATA_33"
	class="form-control input-sm cellinput">
</div></div>
<div class="col-xs-6 formcell">
<div class="col-xs-3 celllabel" title="廉洁文化建设工作廉洁文化建设项数量超期未完">廉洁文化建设工作廉洁文化建设项数量超期未完</div><div class="input-group-sm col-xs-9 cellcontrol"><input type="text" value="" id="DATA_34" name="DATA_34"
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
<script src="avicit/eformmodule/view/sjzs/V1/bootstrap/view1697167279000.js?_=1697167293610"></script>
</html> 
