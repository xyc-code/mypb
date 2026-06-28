<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform/avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController/toDynThreeFourManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPoints_button_export" permissionDes="导出">
			<a id="dynPoints_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
		<span style="color: red">	*选完年份后点击右侧的搜索图标或按下回车即可查询</span>
	    <div class="input-group form-tool-search">
			<input type="text" id="year"  onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年'})"class="Wdate form-control input-sm"/>
			<label id="dynPoints_searchWdate" class="icon icon-search form-tool-searchicon"></label>

   		</div>

   		<div class="input-group form-tool-search" >
			<input type="text" name="integral_keyWord" id="integral_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入党支部名称">
			<label id="dynPoints_searchPart" class="icon icon-search form-tool-searchicon"></label>
<%--   			<a id="dynThreeFour_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>--%>
   		</div>
    </div>
</div>					
<table id="dynThreeFourjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/dynThreeFour/dynthreefour/js/DynThreeFour.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynThreeFour;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="layerOpen(\''+rowObject.PARTY_NAME+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynThreeFour.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}

$(document).ready(function () {
	var dataGridColModel =  [

		 { label : 'ID', name : 'ID', key : true, width : 75, hidden : true},
		{ label : '党组织类别', name : 'ATTRIBUTE_01Alias',  width: 150, align: 'center'},
		{ label : '党组织名称', name : 'PARTY_NAME',formatter:formatValue,  width: 300, align: 'center'},
		{ label : '党委会', name : 'DWH',formatter:dyhFormat,  width: 150, align: 'center'},
		{ label : '总支委员会', name : 'ZZWYH',formatter:dzzFormat,  width: 150, align: 'center'},
		{ label : '支部委员会', name : 'ZBWYH', formatter:zbFormat, width: 150, align: 'center'},
		{ label : '党员大会', name : 'DYDH',formatter:dydhFormat,  width: 150, align: 'center'},
		{ label : '党小组会', name : 'DXZH', formatter:dxzhFormat,  width: 150, align: 'center'},
		{ label : '纪律检查委员会', name : 'JLJCWYH',formatter:jwFormat,   width: 150, align: 'center'},
		{ label : '党课', name : 'DK',  width: 150, formatter:dkFormat,align: 'center'},
		{ label : '党委会完成率', name : 'DWHWCL',formatter:numberFormat,  width: 150,align: 'center'},
		{ label : '总支委员会完成率', name : 'ZZWYHWCL',formatter:numberFormat,  width: 150,align: 'center'},
		{ label : '支部委员会完成率', name : 'ZBWYHWCl',formatter:numberFormat,  width: 150,align: 'center'},
		{ label : '党员大会完成率', name : 'DYDHWCL', formatter:numberFormat, width: 150,align: 'center'},
		{ label : '党小组会完成率', name : 'DXZHWCL',formatter:numberFormat,  width: 150,align: 'center'},
		{ label : '纪律检查委员会完成率', name : 'JLJCWYHWCL',formatter:numberFormat,  width: 150,align: 'center'},
		{ label : '党课完成率', name : 'DKWCL',formatter:numberFormat,  width: 150,align: 'center'},

	];

	var searchNames = new Array();
	var searchTips = new Array();
	dynThreeFour= new DynThreeFour('dynThreeFourjqGrid','${url}','searchDialog','form','dynThreeFour_keyWord',searchNames,dataGridColModel);
	$("#year").val("2024年");
	$("#year").on('keydown',function (e) {
		if(e.keyCode == '13'){
			serach()
		}
	})
	$("#dynPoints_searchWdate").bind('click',function () {
		serach();
	})
	$("#dynPoints_searchPart").bind('click',function () {
		serachParty();
	})
	$("#integral_keyWord").on('keydown',function (e) {
		if(e.keyCode == '13'){
			serachParty();
		}
	})
	//导出Excel
	$('#dynPoints_export').bind('click',function(){
		var ids = $("#dynThreeFourjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynThreeFourjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.ID);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		var url = "platform/avicit/pb/dyntaskchecklist/dynThreeFour/dynThreeFourController/exportExcels";
		new SysExcelExport("dynThreeFourTj",true,url,JSON.stringify(selectIds),selectConditions);
		console.log(new SysExcelExport("dynThreeFourTj",true,url,JSON.stringify(selectIds),selectConditions))
	});

});
</script>
</html>

