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
<!-- ControllerPath = "platform/avicit/test/test/testController/toTestManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',onResize:function(a,b){resizeSouth(a,b);}">
		<div id="testTableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test_button_add" permissionDes="添加">
			  		<a id="test_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test_button_edit" permissionDes="编辑">
					<a id="test_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test_button_delete" permissionDes="删除">
					<a id="test_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test_button_export" permissionDes="导出">
					<a id="test_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
		    <div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="test_keyWord" id="test_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="test_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="test_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="testJqGrid"></table>
		<div id="testJqGridPager"></div>
	</div>
	<div data-options="region:'south',split:true,height:fixheight(.5)">
		<div id="test1TableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_test1_button_export" permissionDes="导出">
					<a id="test1_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
			<div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="test1_keyWord" id="test1_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="test1_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="test1_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="test1JqGrid"></table>
		<div id="test1JqGridPager"></div>
	</div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="test1">TEST1:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="test1"  id="test1" />
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<!-- 子表高级查询begin -->
<div id="test1SearchDialog" style="overflow: auto;display: none">
	<form id="test1Form" style="padding: 10px;">
		<input type="hidden" name="testId" id="testIdTest1" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="test2Test1">TEST2:</label>
				</th>
				<td width="39%">
					<pt6:h5select css_class="form-control input-sm" name="test2" id="test2Test1" title="" isNull="true" lookupCode="PA_MERITS" />
				</td>
				<th width="10%">
					<label for="test3BeginTest1">TEST3起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="test3Begin" id="test3BeginTest1" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="test3EndTest1">TEST3止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="test3End" id="test3EndTest1" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
    	</table>
	</form>
</div>
<!-- 子表高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/test/test/js/Test.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/test/test1/js/Test1.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var test;
var test1;
function formatValueTest1(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="test1.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHrefTest1(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="test1.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="test.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="test.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}

$(document).ready(function () {
	var test1DataGridColModel =  [
			{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
			{ label : 'TEST2', name : 'test2Name',formatter:formatValueTest1,width: 150,align: 'center'},
			{ label : 'TEST3', name : 'test3', formatter : format,width: 150,align: 'center'}
	];
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : 'TEST1', name : 'test1', width: 150,align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("test1");
	searchTips.push("TEST1");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	$('#test_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	var test1SearchNames = new Array();
	var test1SearchTips = new Array();
	var test1SearchC = test1SearchTips.length == 2 ? '或' + test1SearchTips[1] : "";
	$('#test1_keyWord').attr('placeholder','请输入' + test1SearchTips[0] + test1SearchC);
	//查询按钮绑定事件
	$('#test1_searchPart').bind('click', function(){
		test1.searchByKeyWord();
	});
	//打开高级查询框
	$('#test1_searchAll').bind('click', function(){
		test1.openSearchForm(this);
	});
	//导出Excel
	$('#test1_export').bind('click',function(){
		var ids = $("#test1JqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#test1JqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#test1Form")));
		new SysExcelExport("testTest1",true,"${test1Url}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	//实例化主表对象
	test = new Test('testJqGrid','${url}','searchDialog','form','test_keyWord',searchNames,dataGridColModel);
	test.setOnLoadSuccess(function(pid) {
		if(test1 == null){
			test1 = new Test1('test1JqGrid','${test1Url}','test1SearchDialog','test1Form','test1_keyWord',test1SearchNames,test1DataGridColModel,pid);
		}else{
			test1.loadByPid(pid);
		}
	});
	test.setOnSelectRow(function(pid) {
		test1.loadByPid(pid);
	});
	//添加按钮绑定事件
	$('#test_insert').bind('click', function(){
		test.insert();
	});
	//编辑按钮绑定事件
	$('#test_modify').bind('click', function(){
		test.modify();
	});
	//删除按钮绑定事件
	$('#test_del').bind('click', function(){  
		test.del();
	});
	//查询按钮绑定事件
	$('#test_searchPart').bind('click', function(){
		test.searchByKeyWord();
	});
	//打开高级查询框
	$('#test_searchAll').bind('click', function(){
		test.openSearchForm(this);
	});
	//导出Excel
	$('#test_export').bind('click',function(){
		var ids = $("#testJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#testJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("testTest",true,"${url}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
});
//南侧拖拽修改改变时修改表格自适应
function resizeSouth(width,height) {
	var windowHeight = $(window).height();
	var topTableHeight = windowHeight - height
	$('#testJqGrid').setGridHeight(height - 120);
	$('#test1JqGrid').setGridHeight(topTableHeight - 120);
}
</script>
</html>

