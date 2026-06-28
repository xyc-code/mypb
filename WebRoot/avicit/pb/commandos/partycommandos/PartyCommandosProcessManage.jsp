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
<!-- ControllerPath = "platform/avicit/pb/commandos/partyCommandos/partyCommandosController/toPartyCommandosManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',onResize:function(a,b){resizeSouth(a,b);}">
		<div id="partyCommandosTableToolbar" class="toolbar">
			<div class="toolbar-left">
            <!--   <sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyCommandos_button_add" permissionDes="发起流程">
                    <a id="partyCommandos_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-plus"></i>发起流程</a>
                </sec:accesscontrollist> --> 
                <sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyCommandos_button_delete" permissionDes="删除">
                    <a id="partyCommandos_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i>删除</a>
                </sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyCommandos_button_export" permissionDes="导出">
					<a id="partyCommandos_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
		    <div class="toolbar-right">
                <select id="workFlowSelect" class="form-control input-sm workflow-select">
                   <option value="all" selected="selected">全部</option>
                    <option value="start">拟稿中</option>
                    <option value="active">流转中</option>
                    <option value="ended"  >已完成</option>
                </select>
			    <div class="input-group form-tool-search">
		     		<input type="text" name="partyCommandos_keyWord" id="partyCommandos_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="partyCommandos_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="partyCommandos_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="partyCommandosJqGrid"></table>
		<div id="partyCommandosJqGridPager"></div>
	</div>
<div data-options="region:'south',split:true,height:fixheight(.5)">
		<div id="partyMilepostTableToolbar" class="toolbar">
		
			<div class="toolbar-left">
			 <sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyCommandos_button_add" permissionDes="发起流程">
                    <a id="partyMilepost_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-plus"></i>发起流程</a>
                </sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_partyMilepost_button_export" permissionDes="导出">
					<a id="partyMilepost_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
		    <div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="partyMilepost_keyWord" id="partyMilepost_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="partyMilepost_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="partyMilepost_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="partyMilepostJqGrid"></table>
		<div id="partyMilepostJqGridPager"></div>
	</div>
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
					<label for="commandosName">突击队名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="commandosName"  id="commandosName" />
				</td>
				<th>
					<label for="commandosType">突击队类型:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="commandosType" id="commandosType" title="" isNull="true" lookupCode="PC_TYPE" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="setupTimeBegin">组建时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="setupTimeBegin" id="setupTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="setupTimeEnd">组建时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="setupTimeEnd" id="setupTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="inPartyorg">负责人所在党组织:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="inPartyorg"  id="inPartyorg" />
				</td>
				<th>
					<label for="chargerPost">负责人党内职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="chargerPost"  id="chargerPost" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="adminortech">负责人行政或技术职务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="adminortech"  id="adminortech" />
				</td>
				<th>
					<label for="partyNum">涉及党支部数:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="partyNum" id="partyNum" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="pmNum">参与党员数:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="pmNum" id="pmNum" data-min="-9999999999999999999999" data-max="9999999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="uniondeptsYn">是否跨单位联合:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="uniondeptsYn" id="uniondeptsYn" title="" isNull="true" lookupCode="PC_DPET_UNION" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="keyProblems">攻关任务简介:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="keyProblems"  id="keyProblems" />
				</td>
				<th>
					<label for="pcSecretLevel">密级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="pcSecretLevel"  id="pcSecretLevel" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="autoCode">自动编码:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
				</td>
				<th>
					<label for="tel">联系电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="tel"  id="tel" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<!-- 子表高级查询begin -->
<div id="partyMilepostSearchDialog" style="overflow: auto;display: none">
	<form id="partyMilepostForm" style="padding: 10px;">
		<input type="hidden" name="commandosId" id="commandosIdPartyMilepost" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAliasPartyMilepost">上报人:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="userIdPartyMilepost" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text" id="userIdAliasPartyMilepost" name="userIdAlias">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				<th width="10%">
					<label for="deptIdAliasPartyMilepost">申请部门:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="deptIdPartyMilepost" name="deptId">
						<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAliasPartyMilepost" name="deptIdAlias" >
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="taskStatusPartyMilepost">任务状态:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="taskStatus" id="taskStatusPartyMilepost" title="" isNull="true" lookupCode="PC_M_COMPLETE_STATUS" />
				</td>
				<th>
					<label for="taskCompletionPartyMilepost">完成情况:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="taskCompletion"  id="taskCompletionPartyMilepost" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="partyIdPartyMilepost">上报人所在党支部:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyId"  id="partyIdPartyMilepost" />
				</td>
				<th>
					<label for="milepostPlanPartyMilepost">里程碑计划:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="milepostPlan"  id="milepostPlanPartyMilepost" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="completionDateBeginPartyMilepost">计划完成时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="completionDateBegin" id="completionDateBeginPartyMilepost" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="completionDateEndPartyMilepost">计划完成时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="completionDateEnd" id="completionDateEndPartyMilepost" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
    	</table>
	</form>
</div>
<!-- 子表高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js?v=${jsversion}"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js?v=${jsversion}"></script>
<script src="avicit/pb/commandos/partycommandos/js/PartyCommandos.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/pb/commandos/partymilepost/js/PartyMilepost.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var partyCommandos;
var partyMilepost;
function formatFlowValue(cellvalue, options, rowObject) {

	if(rowObject != null){
		if(rowObject.businessstate_ != ''){
			return '<a href="javascript:void(0);" onclick="partyMilepost.flowDetail(\''+rowObject.id+'\');">详细</a>';
		
		}else{
			return '';
		}
	}
	
}
function formatValuePartyMilepost(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="partyMilepost.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHrefPartyMilepost(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="partyMilepost.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
function formatValue(cellvalue, options, rowObject) {
	if(rowObject != null){
		if(rowObject.businessstate_ != ''){
			return '<a href="javascript:void(0);" onclick="partyCommandos.detail(\''+rowObject.id+'\');">详细</a>';
		
		}else{
			return '';
		}
	}
		
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="partyCommandos.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
//刷新列表页面
window.bpm_operator_refresh = function(){
	partyCommandos.reLoad();
};
$(document).ready(function () {
	var partyMilepostDataGridColModel =  [
	    { label : '里程碑计划', name : 'milepostPlan',width: 150,align: 'left'},
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : 'version', name : 'version',  width : 75, hidden : true},
		{ label : '上报人', name : 'userId',width: 150,align: 'right', hidden : true},
		{ label : '上报人', name : 'userIdAlias',width: 150,align: 'right'},
		{ label : '申请部门', name : 'deptId',width: 150,align: 'right', hidden : true},
		{ label : '申请部门', name : 'deptIdAlias',width: 150,align: 'right'},
		{ label : '任务状态', name : 'taskStatusName',width: 150,align: 'center'},
		{ label : '完成情况', name : 'taskCompletion',width: 150,align: 'left'},
		{ label : '上报人所在党支部', name : 'partyId',width: 150,align: 'left', hidden : true},
		{ label : '上报人所在党支部', name : 'partyIdAlias',width: 150,align: 'left'},
		{ label : '计划完成时间', name : 'completionDate', formatter : format,width: 150,align: 'center'},
		<sec:accesscontrollist hasPermission="3" domainObject="partyMilepost_table_activityalias" permissionDes="流程当前步骤">
		{ label: '流程当前步骤', name: 'activityalias_', sortable:false, width: 150,align: 'center'},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="partyMilepost_table_businessstate" permissionDes="流程状态">
		{ label: '流程状态',name: 'businessstate_', sortable:false, width: 150,align: 'center'},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="partyMilepost_table_assigneenames_" permissionDes="当前处理人">
		{ label: '当前处理人',name: 'assigneenames_', sortable:false, width: 150,align: 'center'},
		</sec:accesscontrollist>
		{ label: '详细',name: 'detail',formatter : formatFlowValue, sortable:false, width: 150,align:'center'}
		
		
		
	];


	var dataGridColModel =  [
	                     	{ label : '自动编码', name : 'autoCode',width: 150,align: 'left'},
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '申请人', name : 'userIdAlias',width: 150,align: 'right'},
		{ label : '申请部门', name : 'deptIdAlias',width: 150,align: 'right'},
		{ label : '突击队名称', name : 'commandosName',width: 150,align: 'left'},
		{ label : '突击队类型', name : 'commandosTypeName',width: 150,align: 'center'},
		{ label : '组建时间', name : 'setupTime', formatter : format,width: 150,align: 'center'},
		{ label : '突击队负责人', name : 'commandosChargerAlias',width: 150,align: 'right', sortable:false},
		{ label : '负责人所在党组织', name : 'inPartyOrgAlias',width: 150,align: 'left'},
		{ label : '负责人党内职务', name : 'chargerPost',width: 150,align: 'left'},
		{ label : '负责人行政或技术职务', name : 'adminortech',width: 150,align: 'left'},
		{ label : '涉及党支部数', name : 'partyNum',width: 150,align: 'right'},
		{ label : '参与党员数', name : 'pmNum',width: 150,align: 'right'},
		{ label : '是否跨单位联合', name : 'uniondeptsYnName',width: 150,align: 'center'},
		{ label : '联合单位', name : 'unionDeptsAlias',width: 150,align: 'right', sortable:false},
		//{ label : '公关任务简介', name : 'keyProblems',width: 150,align: 'left'},
		{ label : '密级', name : 'pcSecretLevel',width: 150,align: 'left'},
	
    	{ label : '联系电话', name : 'tel',width: 150,align: 'left'},
		//<sec:accesscontrollist hasPermission="3" domainObject="partyCommandos_table_activityalias" permissionDes="流程当前步骤">
	//	{ label: '流程当前步骤', name: 'activityalias_', sortable:false, width: 150,align: 'center'},
		//</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="partyCommandos_table_businessstate" permissionDes="流程状态">
		{ label: '流程状态',name: 'businessstate_', sortable:false, width: 150,align: 'center'},
		</sec:accesscontrollist>
		//<sec:accesscontrollist hasPermission="3" domainObject="partyCommandos_table_assigneenames_" permissionDes="当前处理人">
		//{ label: '当前处理人',name: 'assigneenames_', sortable:false, width: 150,align: 'center'},
		//</sec:accesscontrollist>
		{ label: '详细',name: 'detail',formatter:formatValue, sortable:false, width: 150,align:'center'}
];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("commandosName");
	searchTips.push("突击队名称");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	$('#partyCommandos_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	var partyMilepostSearchNames = new Array();
	var partyMilepostSearchTips = new Array();
	partyMilepostSearchNames.push("taskCompletion");
	partyMilepostSearchTips.push("完成情况");
	var partyMilepostSearchC = partyMilepostSearchTips.length == 2 ? '或' + partyMilepostSearchTips[1] : "";
	$('#partyMilepost_keyWord').attr('placeholder','请输入' + partyMilepostSearchTips[0] + partyMilepostSearchC);
	//查询按钮绑定事件
	$('#partyMilepost_searchPart').bind('click', function(){
		partyMilepost.searchByKeyWord();
	});
	//打开高级查询框
	$('#partyMilepost_searchAll').bind('click', function(){
		partyMilepost.openSearchForm(this);
	});
	//导出Excel
	$('#partyMilepost_export').bind('click',function(){
		var ids = $("#partyMilepostJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#partyMilepostJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#partyMilepostForm")));
		new SysExcelExport("testPartyMilepost",true,"${partyMilepostUrl}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	$('#userIdAliasPartyMilepost').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'userIdPartyMilepost',textFiled:'userIdAliasPartyMilepost'});
		this.blur();
		nullInput(e);
	});
	$('#deptIdAliasPartyMilepost').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'deptIdPartyMilepost',textFiled:'deptIdAliasPartyMilepost'});
		this.blur();
		nullInput(e);
	});
	//实例化主表对象
	partyCommandos = new PartyCommandos('partyCommandosJqGrid','${url}','searchDialog','form','partyCommandos_keyWord',searchNames,dataGridColModel,'y');
	partyCommandos.setOnLoadSuccess(function(pid) {
		if(partyMilepost == null){
			partyMilepost = new PartyMilepost('partyMilepostJqGrid','${partyMilepostUrl}','partyMilepostSearchDialog','partyMilepostForm','partyMilepost_keyWord',partyMilepostSearchNames,partyMilepostDataGridColModel,pid);
		}else{
			partyMilepost.loadByPid(pid);
		}
	});
	partyCommandos.setOnSelectRow(function(pid) {
		partyMilepost.loadByPid(pid);
	});
	//添加按钮绑定事件
	$('#partyCommandos_insert').bind('click', function(){
		partyCommandos.insert();
	});
	//编辑按钮绑定事件
	$('#partyCommandos_modify').bind('click', function(){
		partyCommandos.modify();
	});
	//删除按钮绑定事件
	$('#partyCommandos_del').bind('click', function(){  
		partyCommandos.del();
	});
	//查询按钮绑定事件
	$('#partyCommandos_searchPart').bind('click', function(){
		partyCommandos.searchByKeyWord();
	});
	//打开高级查询框
	$('#partyCommandos_searchAll').bind('click', function(){
		partyCommandos.openSearchForm(this);
	});
	//导出Excel
	$('#partyCommandos_export').bind('click',function(){
		var ids = $("#partyCommandosJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#partyCommandosJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("testPartyCommandos",true,"${url}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		partyCommandos.initWorkFlow($(this).val());
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
	$('#commandosChargerAlias').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'commandosCharger',textFiled:'commandosChargerAlias'});
		this.blur();
		nullInput(e);
	});
	$('#unionDeptsAlias').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'unionDepts',textFiled:'unionDeptsAlias'});
		this.blur();
		nullInput(e);
	});
	$('#partyMilepost_insert').bind('click', function(){
		partyMilepost.insertFlow();
	});
	partyCommandos.searchData();

});
//南侧拖拽修改改变时修改表格自适应
function resizeSouth(width,height){
	var windowHeight = $(window).height();
	var topTableHeight = windowHeight - height
	$('#partyCommandosJqGrid').setGridHeight(height-120);
	$('#partyMilepostJqGrid').setGridHeight(topTableHeight-120);
}
</script>
</html>

