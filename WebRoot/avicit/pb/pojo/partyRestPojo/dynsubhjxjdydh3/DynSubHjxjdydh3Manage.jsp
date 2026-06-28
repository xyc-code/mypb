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
<!-- ControllerPath = "platform/avicit/pb/pojo/partyRestPojo/dynSubHjxjdydh3/dynSubHjxjdydh3Controller/toDynSubHjxjdydh3Manage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubHjxjdydh3_button_add" permissionDes="添加">
	  		<a id="dynSubHjxjdydh3_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubHjxjdydh3_button_edit" permissionDes="编辑">
			<a id="dynSubHjxjdydh3_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubHjxjdydh3_button_delete" permissionDes="删除">
			<a id="dynSubHjxjdydh3_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSubHjxjdydh3_button_export" permissionDes="导出">
			<a id="dynSubHjxjdydh3_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynSubHjxjdydh3_keyWord" id="dynSubHjxjdydh3_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynSubHjxjdydh3_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynSubHjxjdydh3_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynSubHjxjdydh3jqGrid"></table>
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
					<label for="sn">序号:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="sn"  id="sn" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="name">姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="name"  id="name" />
				</td>
				<th>
					<label for="gender">性别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="gender"  id="gender" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="divisionLabor">委员分工:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="divisionLabor"  id="divisionLabor" />
				</td>
				<th>
					<label for="numberVotes">得票数:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="numberVotes" id="numberVotes" data-min="-99999999999999999999999999999999999999" data-max="99999999999999999999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="birthday">出生日期:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="birthday"  id="birthday" />
				</td>
				<th>
					<label for="post">职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="post"  id="post" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="proTitle">职称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="proTitle"  id="proTitle" />
				</td>
				<th>
					<label for="timeJoin">入党时间:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="timeJoin"  id="timeJoin" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="timeWork">参加工作时间:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="timeWork"  id="timeWork" />
				</td>
				<th>
					<label for="tel">联系方式:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tel"  id="tel" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/pojo/partyRestPojo/dynsubhjxjdydh3/js/DynSubHjxjdydh3.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynSubHjxjdydh3;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynSubHjxjdydh3.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynSubHjxjdydh3.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '外键', name : 'fkSubColId',formatter:formatValue, width: 150, align: 'left'},
		{ label : '序号', name : 'sn', width: 150, align: 'left'},
		{ label : '姓名', name : 'name', width: 150, align: 'left'},
		{ label : '性别', name : 'gender', width: 150, align: 'left'},
		{ label : '委员分工', name : 'divisionLabor', width: 150, align: 'left'},
		{ label : '得票数', name : 'numberVotes', width: 150, align: 'right'},
		{ label : '出生日期', name : 'birthday', width: 150, align: 'left'},
		{ label : '职务', name : 'post', width: 150, align: 'left'},
		{ label : '职称', name : 'proTitle', width: 150, align: 'left'},
		{ label : '入党时间', name : 'timeJoin', width: 150, align: 'left'},
		{ label : '参加工作时间', name : 'timeWork', width: 150, align: 'left'},
		{ label : '联系方式', name : 'tel', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("fkSubColId");
	searchTips.push("外键");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynSubHjxjdydh3_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynSubHjxjdydh3= new DynSubHjxjdydh3('dynSubHjxjdydh3jqGrid','${url}','searchDialog','form','dynSubHjxjdydh3_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynSubHjxjdydh3_insert').bind('click', function(){
		dynSubHjxjdydh3.insert();
	});
	//编辑按钮绑定事件
	$('#dynSubHjxjdydh3_modify').bind('click', function(){
		dynSubHjxjdydh3.modify();
	});
	//删除按钮绑定事件
	$('#dynSubHjxjdydh3_del').bind('click', function(){  
		dynSubHjxjdydh3.del();
	});
	//查询按钮绑定事件
	$('#dynSubHjxjdydh3_searchPart').bind('click', function(){
		dynSubHjxjdydh3.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynSubHjxjdydh3_searchAll').bind('click', function(){
		dynSubHjxjdydh3.openSearchForm(this);
	});
	//导出Excel
	$('#dynSubHjxjdydh3_export').bind('click',function(){
		var ids = $("#dynSubHjxjdydh3jqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynSubHjxjdydh3jqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynSubHjxjdydh3",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

