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
<!-- ControllerPath = "platform/avicit/lc/youth/dynDemocracy/dynDemocracyController/toDynDemocracyManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynDemocracy_button_add" permissionDes="发起流程">
	  		<a id="dynDemocracy_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-plus"></i>发起流程</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynDemocracy_button_delete" permissionDes="删除">
			<a id="dynDemocracy_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i>删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynDemocracy_button_export" permissionDes="导出">
			<a id="dynDemocracy_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
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
     		<input type="text" name="dynDemocracy_keyWord" id="dynDemocracy_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynDemocracy_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynDemocracy_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynDemocracyjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<input type="hidden" id="bpmState" name="bpmState" value="all">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="democracyDateBegin">召开日期报送起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="democracyDateBegin" id="democracyDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="democracyDateEnd">召开日期报送止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="democracyDateEnd" id="democracyDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="democracyEndDateBegin">会后材料报送起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="democracyEndDateBegin" id="democracyEndDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="democracyEndDateEnd">会后材料报送止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="democracyEndDateEnd" id="democracyEndDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="leadJoin">主管公司领导是否参加:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="leadJoin"  id="leadJoin" />
				</td>
				<th>
					<label for="democracyDept">单位:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="democracyDept"  id="democracyDept" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditorBySec.js?v=${jsversion}"></script>
<script src="avicit/lc/youth/dyndemocracy/js/DynDemocracy.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynDemocracy;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynDemocracy.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynDemocracy.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
window.bpm_operator_refresh = function(){
	dynDemocracy.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '召开日期报送', name : 'democracyDate', formatter : formatDateForHref,width: 150,align: 'center'},
		{ label : '会后材料报送', name : 'democracyEndDate', formatter : format,width: 150,align: 'center'},
		{ label : '公司领导姓名', name : 'leadName',width: 150,align: 'left', sortable:false},
		{ label : '主管公司领导是否参加', name : 'leadJoin',width: 150,align: 'left'},
		{ label : '单位', name : 'democracyDept',width: 150,align: 'left'},
		<sec:accesscontrollist hasPermission="3" domainObject="dynDemocracy_table_activityalias" permissionDes="流程当前步骤">
		{ label: '流程当前步骤', name: 'activityalias_', sortable:false, width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="dynDemocracy_table_businessstate" permissionDes="流程状态">
		{ label: '流程状态',name: 'businessstate_', sortable:false, width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="dynDemocracy_table_assigneenames_" permissionDes="当前处理人">
		{ label: '当前处理人',name: 'assigneenames_', sortable:false, width: 150}
		</sec:accesscontrollist>
	];

	var searchNames = new Array();
	var searchTips = new Array();
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynDemocracy_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynDemocracy= new DynDemocracy('dynDemocracyjqGrid','${url}','searchDialog','form','dynDemocracy_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynDemocracy_insert').bind('click', function(){
		dynDemocracy.insert();
	});
	//删除按钮绑定事件
	$('#dynDemocracy_del').bind('click', function(){  
		dynDemocracy.del();
	});
	//查询按钮绑定事件
	$('#dynDemocracy_searchPart').bind('click', function(){
		dynDemocracy.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynDemocracy_searchAll').bind('click', function(){
		dynDemocracy.openSearchForm(this);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		dynDemocracy.initWorkFlow($(this).val());
	});
	//导出Excel
	$('#dynDemocracy_export').bind('click',function(){
		var ids = $("#dynDemocracyjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynDemocracyjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynDemocracy",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});
	
});
</script>
</html>

