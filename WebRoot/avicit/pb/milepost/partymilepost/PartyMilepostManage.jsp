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
<!-- ControllerPath = "platform/avicit/pb/milepost/partyMilepost/partyMilepostController/toPartyMilepostManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMilepost_button_add" permissionDes="发起流程">
	  		<a id="partyMilepost_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-plus"></i>发起流程</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMilepost_button_delete" permissionDes="删除">
			<a id="partyMilepost_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i>删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMilepost_button_export" permissionDes="导出">
			<a id="partyMilepost_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
    	<select id="workFlowSelect" class="form-control input-sm workflow-select">
    		<option value="all" selected="selected">全部</option>
    		<option value="start">拟稿中</option>
    		<option value="active">流转中</option>
    		<option value="ended">已完成</option>
    	</select>
	    <div class="input-group form-tool-search">
     		<input type="text" name="partyMilepost_keyWord" id="partyMilepost_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="partyMilepost_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="partyMilepost_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="partyMilepostjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<input type="hidden" id="bpmState" name="bpmState" value="all">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAlias">联络员:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="userId" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text" id="userIdAlias" name="userIdAlias">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				<th width="10%">
					<label for="deptIdAlias">申请部门:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="deptId" name="deptId">
						<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" >
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="taskStatus">任务状态:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="taskStatus" id="taskStatus" title="" isNull="true" lookupCode="PC_M_COMPLETE_STATUS" />
				</td>
				<th>
					<label for="taskCompletion">完成情况:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="taskCompletion"  id="taskCompletion" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="partyId">所在党支部:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyId"  id="partyId" />
				</td>
				<th>
					<label for="milepostPlan">里程碑计划:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="milepostPlan"  id="milepostPlan" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="completionDateBegin">计划完成时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="completionDateBegin" id="completionDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="completionDateEnd">计划完成时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="completionDateEnd" id="completionDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js?v=${jsversion}"></script>
<script src="avicit/pb/milepost/partymilepost/js/PartyMilepost.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var partyMilepost;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="partyMilepost.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="partyMilepost.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
window.bpm_operator_refresh = function(){
	partyMilepost.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '联络员', name : 'userIdAlias',formatter:formatValue,width: 150,align: 'right'},
		{ label : '申请部门', name : 'deptIdAlias',width: 150,align: 'right'},
		{ label : '任务状态', name : 'taskStatusName',width: 150,align: 'center'},
		{ label : '完成情况', name : 'taskCompletion',width: 150,align: 'left'},
		{ label : '所在党支部', name : 'partyId',width: 150,align: 'left'},
		{ label : '里程碑计划', name : 'milepostPlan',width: 150,align: 'left'},
		{ label : '计划完成时间', name : 'completionDate',width: 150,align: 'center'},
		<sec:accesscontrollist hasPermission="3" domainObject="partyMilepost_table_activityalias" permissionDes="流程当前步骤">
		{ label: '流程当前步骤', name: 'activityalias_', sortable:false, width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="partyMilepost_table_businessstate" permissionDes="流程状态">
		{ label: '流程状态',name: 'businessstate_', sortable:false, width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="partyMilepost_table_assigneenames_" permissionDes="当前处理人">
		{ label: '当前处理人',name: 'assigneenames_', sortable:false, width: 150}
		</sec:accesscontrollist>
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("taskCompletion");
	searchTips.push("完成情况");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#partyMilepost_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	partyMilepost= new PartyMilepost('partyMilepostjqGrid','${url}','searchDialog','form','partyMilepost_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#partyMilepost_insert').bind('click', function(){
		partyMilepost.insert();
	});
	//删除按钮绑定事件
	$('#partyMilepost_del').bind('click', function(){  
		partyMilepost.del();
	});
	//查询按钮绑定事件
	$('#partyMilepost_searchPart').bind('click', function(){
		partyMilepost.searchByKeyWord();
	});
	//打开高级查询框
	$('#partyMilepost_searchAll').bind('click', function(){
		partyMilepost.openSearchForm(this);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		partyMilepost.initWorkFlow($(this).val());
	});
	//导出Excel
	$('#partyMilepost_export').bind('click',function(){
		var ids = $("#partyMilepostjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#partyMilepostjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("partyMilepost",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});
	
	$('#userIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
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

