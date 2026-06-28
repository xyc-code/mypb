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
<!-- ControllerPath = "platform/avicit/pb/scoring/dynPoints/dynPointsController/toDynPointsManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPoints_button_add" permissionDes="图形统计">
	  		<a id="dynPoints_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="柱状统计"><i class="fa fa-plus"></i> 图形统计</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynPoints_keyWord" id="dynPoints_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynPoints_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynPoints_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynPointsjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="draftingTimeBegin">拟稿时间起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="draftingTimeBegin" id="draftingTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="draftingTimeEnd">拟稿时间止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="draftingTimeEnd" id="draftingTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="deptIdAlias">拟稿人部门:</label>
				</th>
				<td>
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="deptId" name="deptId">
						<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" >
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
				</td>
				<th>
					<label for="quarter">当前季度:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="quarter"  id="quarter" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/scoring/dynpoints/js/DynPoints.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/pb/scoring/integral/js/Integral.js"></script>
<script type="text/javascript">
var dynPoints;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynPoints.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynPoints.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '一级部门', name : 'draftsmanAlias',formatter:formatValue, width: 150, align: 'center', sortable:false},
		{ label : '姓名', name : 'draftingTime', formatter : format, width: 150, align: 'center'},
		{ label : '性别', name : 'deptIdAlias', width: 150, align: 'center'},
		{ label : '员工编号', name : 'quarter', width: 150, align: 'center'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("quarter");
	searchTips.push("季度");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynPoints_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynPoints= new Integral('dynPointsjqGrid','${url}','searchDialog','form','dynPoints_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynPoints_insert').bind('click', function(){
		dynPoints.insert();
	});
	//编辑按钮绑定事件
	$('#dynPoints_modify').bind('click', function(){
		dynPoints.modify();
	});
	//删除按钮绑定事件
	$('#dynPoints_del').bind('click', function(){  
		dynPoints.del();
	});
	//查询按钮绑定事件
	$('#dynPoints_searchPart').bind('click', function(){
		dynPoints.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynPoints_searchAll').bind('click', function(){
		dynPoints.openSearchForm(this);
	});
	//导出Excel
	$('#dynPoints_export').bind('click',function(){
		var ids = $("#dynPointsjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynPointsjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynPoints",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

	$('#draftsmanAlias').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'draftsman',textFiled:'draftsmanAlias'});
		this.blur();
		nullInput(e);
	});
	$('#deptIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
		this.blur();
		nullInput(e);
	});
});
</script>
</html>

