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
<!-- ControllerPath = "platform/avicit/pb/milepost/dynSubZxbasb1/dynSubZxbasb1Controller/toDynSubZxbasb1Manage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubZxbasb1_button_add" permissionDes="添加">
	  		<a id="dynSubZxbasb1_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubZxbasb1_button_edit" permissionDes="编辑">
			<a id="dynSubZxbasb1_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubZxbasb1_button_delete" permissionDes="删除">
			<a id="dynSubZxbasb1_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubZxbasb1_button_export" permissionDes="导出">
			<a id="dynSubZxbasb1_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynSubZxbasb1_keyWord" id="dynSubZxbasb1_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynSubZxbasb1_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynSubZxbasb1_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynSubZxbasb1jqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="fkSubColId">外键:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="fkSubColId"  id="fkSubColId" />
				</td>
				<th width="10%">
					<label for="tjdZhiwu">任务内容:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="tjdZhiwu"  id="tjdZhiwu" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="tjdAge">年龄:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="tjdAge" id="tjdAge" data-min="-99999999999999999999999999999999999999" data-max="99999999999999999999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="tjdDuizhangname">职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tjdDuizhangname"  id="tjdDuizhangname" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="tjdDuiyuanname">突击队队员姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tjdDuiyuanname"  id="tjdDuiyuanname" />
				</td>
				<th>
					<label for="tjdDanwei">所在单位:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tjdDanwei"  id="tjdDanwei" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="tjdFiledUsername">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tjdFiledUsername"  id="tjdFiledUsername" />
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/milepost/dynsubzxbasb1/js/DynSubZxbasb1.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynSubZxbasb1;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynSubZxbasb1.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynSubZxbasb1.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '外键', name : 'fkSubColId',formatter:formatValue, width: 150, align: 'left'},
		{ label : '任务内容', name : 'tjdZhiwu', width: 150, align: 'left'},
		{ label : '年龄', name : 'tjdAge', width: 150, align: 'right'},
		{ label : '职务', name : 'tjdDuizhangname', width: 150, align: 'left'},
		{ label : '突击队队员姓名', name : 'tjdDuiyuanname', width: 150, align: 'left'},
		{ label : '所在单位', name : 'tjdDanwei', width: 150, align: 'left'},
		{ label : '预留字段', name : 'tjdFiledUsername', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("fkSubColId");
	searchTips.push("外键");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynSubZxbasb1_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynSubZxbasb1= new DynSubZxbasb1('dynSubZxbasb1jqGrid','${url}','searchDialog','form','dynSubZxbasb1_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynSubZxbasb1_insert').bind('click', function(){
		dynSubZxbasb1.insert();
	});
	//编辑按钮绑定事件
	$('#dynSubZxbasb1_modify').bind('click', function(){
		dynSubZxbasb1.modify();
	});
	//删除按钮绑定事件
	$('#dynSubZxbasb1_del').bind('click', function(){  
		dynSubZxbasb1.del();
	});
	//查询按钮绑定事件
	$('#dynSubZxbasb1_searchPart').bind('click', function(){
		dynSubZxbasb1.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynSubZxbasb1_searchAll').bind('click', function(){
		dynSubZxbasb1.openSearchForm(this);
	});
	//导出Excel
	$('#dynSubZxbasb1_export').bind('click',function(){
		var ids = $("#dynSubZxbasb1jqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynSubZxbasb1jqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynSubZxbasb1",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

