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
<!-- ControllerPath = "platform/avicit/pb/pojo/partyRestPojo/dynDetail/dynDetailController/toDynDetailManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">

	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynDetail_keyWord" id="dynDetail_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynDetail_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
<%--   		<div class="input-group-btn form-tool-searchbtn">--%>
<%--   			<a id="dynDetail_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>--%>
<%--   		</div>--%>
    </div>
</div>					
<table id="dynDetailjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userId">用户id:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="userId"  id="userId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="content">信息:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="content"  id="content" />
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/pojo/partyRestPojo/dyndetail/js/DynDetail.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynDetail;
var skId = '${skId}'
function formatValue(cellvalue, options, rowObject) {
		return format(new Date(cellvalue))
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynDetail.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '用户', name : 'userId', width: 150, align: 'left'},
		{ label : '信息', name : 'content', width: 150, align: 'left'},
		{label:"时间",name:"creationDate",formatter:formatValue, width: 150,align: 'centent'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("userId");
	searchTips.push("用户名称");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynDetail_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynDetail= new DynDetail('dynDetailjqGrid','${url}','searchDialog','form','dynDetail_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynDetail_insert').bind('click', function(){
		dynDetail.insert();
	});
	//编辑按钮绑定事件
	$('#dynDetail_modify').bind('click', function(){
		dynDetail.modify();
	});
	//删除按钮绑定事件
	$('#dynDetail_del').bind('click', function(){  
		dynDetail.del();
	});
	//查询按钮绑定事件
	$('#dynDetail_searchPart').bind('click', function(){
		dynDetail.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynDetail_searchAll').bind('click', function(){
		dynDetail.openSearchForm(this);
	});
	//导出Excel
	$('#dynDetail_export').bind('click',function(){
		var ids = $("#dynDetailjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynDetailjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynDetail",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

