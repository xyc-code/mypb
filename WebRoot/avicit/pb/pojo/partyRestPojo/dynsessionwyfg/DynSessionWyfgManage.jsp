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
<!-- ControllerPath = "platform/avicit/pb/pojo/partyRestPojo/dynSessionWyfg/dynSessionWyfgController/toDynSessionWyfgManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSessionWyfg_button_add" permissionDes="添加">
	  		<a id="dynSessionWyfg_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSessionWyfg_button_edit" permissionDes="编辑">
			<a id="dynSessionWyfg_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSessionWyfg_button_delete" permissionDes="删除">
			<a id="dynSessionWyfg_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynSessionWyfg_button_export" permissionDes="导出">
			<a id="dynSessionWyfg_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynSessionWyfg_keyWord" id="dynSessionWyfg_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynSessionWyfg_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynSessionWyfg_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynSessionWyfgjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userPost">职务:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="userPost"  id="userPost" />
				</td>
				<th width="10%">
					<label for="sessionName">届次:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="sessionName"  id="sessionName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userPartyTime">入党时间:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userPartyTime"  id="userPartyTime" />
				</td>
				<th>
					<label for="userSex">性别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userSex"  id="userSex" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="sessionTimeBegin">选举时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="sessionTimeBegin" id="sessionTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="sessionTimeEnd">选举时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="sessionTimeEnd" id="sessionTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr9">预留字段9:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr9"  id="attr9" />
				</td>
				<th>
					<label for="userAddTime">出生日期:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userAddTime"  id="userAddTime" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr4">预留字段4:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr4"  id="attr4" />
				</td>
				<th>
					<label for="partyName">党组织名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyName"  id="partyName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="sessionType">选举类型:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="sessionType"  id="sessionType" />
				</td>
				<th>
					<label for="attr3">预留字段3:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr3"  id="attr3" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr2">预留字段2:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr2"  id="attr2" />
				</td>
				<th>
					<label for="attr1">预留字段1:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr1"  id="attr1" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr8">预留字段8:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr8"  id="attr8" />
				</td>
				<th>
					<label for="attr7">预留字段7:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr7"  id="attr7" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr6">预留字段6:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr6"  id="attr6" />
				</td>
				<th>
					<label for="attr5">预留字段5:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr5"  id="attr5" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userNumberVotes">得票数:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userNumberVotes"  id="userNumberVotes" />
				</td>
				<th>
					<label for="attr12">预留字段12:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr12"  id="attr12" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr13">预留字段13:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr13"  id="attr13" />
				</td>
				<th>
					<label for="attr10">预留字段10:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr10"  id="attr10" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr11">预留字段11:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr11"  id="attr11" />
				</td>
				<th>
					<label for="attr16">预留字段16:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr16"  id="attr16" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr17">预留字段17:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr17"  id="attr17" />
				</td>
				<th>
					<label for="attr14">预留字段14:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr14"  id="attr14" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr15">预留字段15:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr15"  id="attr15" />
				</td>
				<th>
					<label for="attr18Begin">预留字段18起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr18Begin" id="attr18Begin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr18End">预留字段18止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr18End" id="attr18End" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="attr19Begin">预留字段19起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr19Begin" id="attr19Begin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr19End">预留字段19止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr19End" id="attr19End" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="userName">委员姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userName"  id="userName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userRanks">职称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userRanks"  id="userRanks" />
				</td>
				<th>
					<label for="userType">委员分工:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userType"  id="userType" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="sessionId">届次:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="sessionId" id="sessionId" data-min="-99999" data-max="99999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="partyId">党组织id:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyId"  id="partyId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userWorkDate">参加工作时间:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userWorkDate"  id="userWorkDate" />
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/pojo/partyRestPojo/dynsessionwyfg/js/DynSessionWyfg.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynSessionWyfg;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynSessionWyfg.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynSessionWyfg.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '职务', name : 'userPost',formatter:formatValue, width: 150, align: 'left'},
		{ label : '届次', name : 'sessionName', width: 150, align: 'left'},
		{ label : '入党时间', name : 'userPartyTime', width: 150, align: 'left'},
		{ label : '性别', name : 'userSex', width: 150, align: 'left'},
		{ label : '选举时间', name : 'sessionTime', formatter : format, width: 150, align: 'center'},
		{ label : '预留字段9', name : 'attr9', width: 150, align: 'left'},
		{ label : '出生日期', name : 'userAddTime', width: 150, align: 'left'},
		{ label : '预留字段4', name : 'attr4', width: 150, align: 'left'},
		{ label : '党组织名称', name : 'partyName', width: 150, align: 'left'},
		{ label : '选举类型', name : 'sessionType', width: 150, align: 'left'},
		{ label : '预留字段3', name : 'attr3', width: 150, align: 'left'},
		{ label : '预留字段2', name : 'attr2', width: 150, align: 'left'},
		{ label : '预留字段1', name : 'attr1', width: 150, align: 'left'},
		{ label : '预留字段8', name : 'attr8', width: 150, align: 'left'},
		{ label : '预留字段7', name : 'attr7', width: 150, align: 'left'},
		{ label : '预留字段6', name : 'attr6', width: 150, align: 'left'},
		{ label : '预留字段5', name : 'attr5', width: 150, align: 'left'},
		{ label : '得票数', name : 'userNumberVotes', width: 150, align: 'left'},
		{ label : '预留字段12', name : 'attr12', width: 150, align: 'left'},
		{ label : '预留字段13', name : 'attr13', width: 150, align: 'left'},
		{ label : '预留字段10', name : 'attr10', width: 150, align: 'left'},
		{ label : '预留字段11', name : 'attr11', width: 150, align: 'left'},
		{ label : '预留字段16', name : 'attr16', width: 150, align: 'left'},
		{ label : '预留字段17', name : 'attr17', width: 150, align: 'left'},
		{ label : '预留字段14', name : 'attr14', width: 150, align: 'left'},
		{ label : '预留字段15', name : 'attr15', width: 150, align: 'left'},
		{ label : '预留字段18', name : 'attr18', formatter : format, width: 150, align: 'center'},
		{ label : '预留字段19', name : 'attr19', formatter : format, width: 150, align: 'center'},
		{ label : '委员姓名', name : 'userName', width: 150, align: 'left'},
		{ label : '职称', name : 'userRanks', width: 150, align: 'left'},
		{ label : '委员分工', name : 'userType', width: 150, align: 'left'},
		{ label : '届次', name : 'sessionId', width: 150, align: 'right'},
		{ label : '党组织id', name : 'partyId', width: 150, align: 'left'},
		{ label : '参加工作时间', name : 'userWorkDate', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("userPost");
	searchTips.push("职务");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynSessionWyfg_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynSessionWyfg= new DynSessionWyfg('dynSessionWyfgjqGrid','${url}','searchDialog','form','dynSessionWyfg_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynSessionWyfg_insert').bind('click', function(){
		dynSessionWyfg.insert();
	});
	//编辑按钮绑定事件
	$('#dynSessionWyfg_modify').bind('click', function(){
		dynSessionWyfg.modify();
	});
	//删除按钮绑定事件
	$('#dynSessionWyfg_del').bind('click', function(){  
		dynSessionWyfg.del();
	});
	//查询按钮绑定事件
	$('#dynSessionWyfg_searchPart').bind('click', function(){
		dynSessionWyfg.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynSessionWyfg_searchAll').bind('click', function(){
		dynSessionWyfg.openSearchForm(this);
	});
	//导出Excel
	$('#dynSessionWyfg_export').bind('click',function(){
		var ids = $("#dynSessionWyfgjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynSessionWyfgjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynSessionWyfg",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

