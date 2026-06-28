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
<!-- ControllerPath = "platform/avicit/pb/pojo/partyRestPojo/dynHuanjieDydh/dynHuanjieDydhController/toDynHuanjieDydhManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynHuanjieDydh_button_add" permissionDes="添加">
	  		<a id="dynHuanjieDydh_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynHuanjieDydh_button_edit" permissionDes="编辑">
			<a id="dynHuanjieDydh_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynHuanjieDydh_button_delete" permissionDes="删除">
			<a id="dynHuanjieDydh_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynHuanjieDydh_button_export" permissionDes="导出">
			<a id="dynHuanjieDydh_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynHuanjieDydh_keyWord" id="dynHuanjieDydh_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynHuanjieDydh_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynHuanjieDydh_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynHuanjieDydhjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="deptName">申请人所在单位:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="deptName"  id="deptName" />
				</td>
				<th width="10%">
					<label for="autoCode">表单编号:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userName">申请人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userName"  id="userName" />
				</td>
				<th>
					<label for="partyName">申请人所在党支部:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyName"  id="partyName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="requstDate">申请日期:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="requstDate"  id="requstDate" />
				</td>
				<th>
					<label for="partyId">党支部ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyId"  id="partyId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="electionTimeBegin">召开党员大会时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="electionTimeBegin" id="electionTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="electionTimeEnd">召开党员大会时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="electionTimeEnd" id="electionTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="partyYinggai">应参加有选举权人数:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="partyYinggai" id="partyYinggai" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="partyShiji">实际参加有选举权人数:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="partyShiji" id="partyShiji" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="threeFourName">三会一课名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="threeFourName"  id="threeFourName" />
				</td>
				<th>
					<label for="threeFourId">三会一课ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="threeFourId"  id="threeFourId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="threeFourName1">三会一课名称1:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="threeFourName1"  id="threeFourName1" />
				</td>
				<th>
					<label for="threeFourId1">三会一课ID1:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="threeFourId1"  id="threeFourId1" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="partyNameNew">选举党组织名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyNameNew"  id="partyNameNew" />
				</td>
				<th>
					<label for="partyType">选举类型:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyType"  id="partyType" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userTel">申请人电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userTel"  id="userTel" />
				</td>
				<th>
					<label for="sfjw">是否显示纪委字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="sfjw"  id="sfjw" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="jwTimeBegin">纪律检查委员会一次会议时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="jwTimeBegin" id="jwTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="jwTimeEnd">纪律检查委员会一次会议时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="jwTimeEnd" id="jwTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="jwYingga">纪律检查委员会一次会议应参加人数::</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="jwYingga" id="jwYingga" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="jwShiji">纪律检查委员会一次会议实际参加人数：:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="jwShiji" id="jwShiji" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="jwCyl">纪律检查委员会一次会议参与率:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="jwCyl" id="jwCyl" data-min="-999999999999999999.99" data-max="999999999999999999.99" data-step="1" data-precision="2">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="jwThree">纪律检查委员会一次会议记录::</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="jwThree"  id="jwThree" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="jwThreeId">纪委三会一课记录id:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="jwThreeId"  id="jwThreeId" />
				</td>
				<th>
					<label for="partyNewId">选举党支部id:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyNewId"  id="partyNewId" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/pojo/partyRestPojo/dynhuanjiedydh/js/DynHuanjieDydh.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynHuanjieDydh;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynHuanjieDydh.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynHuanjieDydh.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '申请人所在单位', name : 'deptName',formatter:formatValue, width: 150, align: 'left'},
		{ label : '表单编号', name : 'autoCode', width: 150, align: 'left'},
		{ label : '申请人', name : 'userName', width: 150, align: 'left'},
		{ label : '申请人所在党支部', name : 'partyName', width: 150, align: 'left'},
		{ label : '申请日期', name : 'requstDate', width: 150, align: 'left'},
		{ label : '党支部ID', name : 'partyId', width: 150, align: 'left'},
		{ label : '召开党员大会时间', name : 'electionTime', formatter : format, width: 150, align: 'center'},
		{ label : '应参加有选举权人数', name : 'partyYinggai', width: 150, align: 'right'},
		{ label : '实际参加有选举权人数', name : 'partyShiji', width: 150, align: 'right'},
		{ label : '三会一课名称', name : 'threeFourName', width: 150, align: 'left'},
		{ label : '三会一课ID', name : 'threeFourId', width: 150, align: 'left'},
		{ label : '三会一课名称1', name : 'threeFourName1', width: 150, align: 'left'},
		{ label : '三会一课ID1', name : 'threeFourId1', width: 150, align: 'left'},
		{ label : '选举党组织名称', name : 'partyNameNew', width: 150, align: 'left'},
		{ label : '选举类型', name : 'partyType', width: 150, align: 'left'},
		{ label : '申请人电话', name : 'userTel', width: 150, align: 'left'},
		{ label : '是否显示纪委字段', name : 'sfjw', width: 150, align: 'left'},
		{ label : '纪律检查委员会一次会议时间', name : 'jwTime', formatter : format, width: 150, align: 'center'},
		{ label : '纪律检查委员会一次会议应参加人数:', name : 'jwYingga', width: 150, align: 'right'},
		{ label : '纪律检查委员会一次会议实际参加人数：', name : 'jwShiji', width: 150, align: 'right'},
		{ label : '纪律检查委员会一次会议参与率', name : 'jwCyl', width: 150, align: 'right'},
		{ label : '纪律检查委员会一次会议记录:', name : 'jwThree', width: 150, align: 'left'},
		{ label : '纪委三会一课记录id', name : 'jwThreeId', width: 150, align: 'left'},
		{ label : '选举党支部id', name : 'partyNewId', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("deptName");
	searchTips.push("申请人所在单位");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynHuanjieDydh_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynHuanjieDydh= new DynHuanjieDydh('dynHuanjieDydhjqGrid','${url}','searchDialog','form','dynHuanjieDydh_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynHuanjieDydh_insert').bind('click', function(){
		dynHuanjieDydh.insert();
	});
	//编辑按钮绑定事件
	$('#dynHuanjieDydh_modify').bind('click', function(){
		dynHuanjieDydh.modify();
	});
	//删除按钮绑定事件
	$('#dynHuanjieDydh_del').bind('click', function(){  
		dynHuanjieDydh.del();
	});
	//查询按钮绑定事件
	$('#dynHuanjieDydh_searchPart').bind('click', function(){
		dynHuanjieDydh.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynHuanjieDydh_searchAll').bind('click', function(){
		dynHuanjieDydh.openSearchForm(this);
	});
	//导出Excel
	$('#dynHuanjieDydh_export').bind('click',function(){
		var ids = $("#dynHuanjieDydhjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynHuanjieDydhjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynHuanjieDydh",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

