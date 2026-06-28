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
<!-- ControllerPath = "platform/avicit/pb/dynWorkPlan/dynWorkPlanController/toDynWorkPlanManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',onResize:function(a,b){resizeSouth(a,b);}">
		<div id="dynWorkPlanTableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkPlan_button_add" permissionDes="添加">
			  		<a id="dynWorkPlan_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkPlan_button_edit" permissionDes="编辑">
					<a id="dynWorkPlan_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkPlan_button_delete" permissionDes="删除">
					<a id="dynWorkPlan_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkPlan_button_export" permissionDes="导出">
					<a id="dynWorkPlan_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
		    <div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="dynWorkPlan_keyWord" id="dynWorkPlan_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="dynWorkPlan_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="dynWorkPlan_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="dynWorkPlanJqGrid"></table>
		<div id="dynWorkPlanJqGridPager"></div>
	</div>
	<div data-options="region:'south',split:true,height:fixheight(.5)">
		<div id="dynWorkCompanyTableToolbar" class="toolbar" style="min-width:580px">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkCompany_button_add" permissionDes="添加">
					<a id="dynWorkCompany_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkCompany_button_edit" permissionDes="编辑">
					<a id="dynWorkCompany_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkCompany_button_delete" permissionDes="删除">
					<a id="dynWorkCompany_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynWorkCompany_button_export" permissionDes="导出">
					<a id="dynWorkCompany_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
		    <div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="dynWorkCompany_keyWord" id="dynWorkCompany_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="dynWorkCompany_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="dynWorkCompany_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="dynWorkCompanyJqGrid"></table>
		<div id="dynWorkCompanyJqGridPager"></div>
	</div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="workName">工作名称:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="workName"  id="workName" />
				</td>
				<th width="10%">
					<label for="responsibleDepa">负责部门:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="responsibleDepa"  id="responsibleDepa" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="status">状态:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="status"  id="status" />
				</td>
				<th>
					<label for="quarter">季度:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="quarter"  id="quarter" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="responsibleDepaId">负责部门ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="responsibleDepaId"  id="responsibleDepaId" />
				</td>
				<th>
					<label for="partyCommitteeWorkPlan">党委工作计划:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="partyCommitteeWorkPlan"  id="partyCommitteeWorkPlan" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="companyId">公司计划ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="companyId"  id="companyId" />
				</td>
				<th>
					<label for="fileType">文件密级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fileType"  id="fileType" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="planDateBegin">计划结束时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="planDateBegin" id="planDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="planDateEnd">计划结束时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="planDateEnd" id="planDateEnd" />
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
<!-- 子表高级查询begin -->
<div id="dynWorkCompanySearchDialog" style="overflow: auto;display: none">
	<form id="dynWorkCompanyForm" style="padding: 10px;">
		<input type="hidden" name="workId" id="workIdDynWorkCompany" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="planDateBeginDynWorkCompany">计划开始时间起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="planDateBegin" id="planDateBeginDynWorkCompany" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="planDateEndDynWorkCompany">计划开始时间止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="planDateEnd" id="planDateEndDynWorkCompany" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="responsibityDeptDynWorkCompany">责任业务科室:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="responsibityDept"  id="responsibityDeptDynWorkCompany" />
				</td>
				<th>
					<label for="businessContactPersonDynWorkCompany">业务联系人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="businessContactPerson"  id="businessContactPersonDynWorkCompany" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="workTasksDynWorkCompany">工作任务:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="workTasks"  id="workTasksDynWorkCompany" />
				</td>
				<th>
					<label for="distributeDateBeginDynWorkCompany">下发计划时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="distributeDateBegin" id="distributeDateBeginDynWorkCompany" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="distributeDateEndDynWorkCompany">下发计划时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="distributeDateEnd" id="distributeDateEndDynWorkCompany" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="workAskDynWorkCompany">工作要点及要求:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="workAsk"  id="workAskDynWorkCompany" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="responsibityUnitDynWorkCompany">责任单位:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="responsibityUnit"  id="responsibityUnitDynWorkCompany" />
				</td>
				<th>
					<label for="classifictionDynWorkCompany">密级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="classifiction"  id="classifictionDynWorkCompany" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="workTypeDynWorkCompany">工作类别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="workType"  id="workTypeDynWorkCompany" />
				</td>
				<th>
					<label for="workStatusDynWorkCompany">工作状态:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="workStatus"  id="workStatusDynWorkCompany" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="workTargetDynWorkCompany">党建工作目标:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="workTarget"  id="workTargetDynWorkCompany" />
				</td>
				<th>
					<label for="workContentDynWorkCompany">党建工作内容:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="workContent"  id="workContentDynWorkCompany" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="typeDynWorkCompany">类别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="type"  id="typeDynWorkCompany" />
				</td>
				<th>
					<label for="fileTypeDynWorkCompany">文件密级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fileType"  id="fileTypeDynWorkCompany" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 子表高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/dynworkplan/js/DynWorkPlan.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/pb/dynworkcompany/js/DynWorkCompany.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynWorkPlan;
var dynWorkCompany;
function formatValueDynWorkCompany(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynWorkCompany.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHrefDynWorkCompany(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynWorkCompany.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynWorkPlan.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynWorkPlan.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}

$(document).ready(function () {
	var dynWorkCompanyDataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '计划开始时间', name : 'planDate', formatter : formatDateForHrefDynWorkCompany,width: 150,align: 'center'},
		{ label : '责任业务科室', name : 'responsibityDept',width: 150,align: 'left'},
		{ label : '业务联系人', name : 'businessContactPerson',width: 150,align: 'left'},
		{ label : '工作任务', name : 'workTasks',width: 150,align: 'left'},
		{ label : '下发计划时间', name : 'distributeDate', formatter : format,width: 150,align: 'center'},
		{ label : '工作要点及要求', name : 'workAsk',width: 150,align: 'left'},
		{ label : '责任单位', name : 'responsibityUnit',width: 150,align: 'left'},
		{ label : '密级', name : 'classifiction',width: 150,align: 'left'},
		{ label : '工作类别', name : 'workType',width: 150,align: 'left'},
		{ label : '工作状态', name : 'workStatus',width: 150,align: 'left'},
		{ label : '党建工作目标', name : 'workTarget',width: 150,align: 'left'},
		{ label : '党建工作内容', name : 'workContent',width: 150,align: 'left'},
		{ label : '类别', name : 'type',width: 150,align: 'left'},
        { label : '文件密级', name : 'fileType', width: 150,align: 'left'},
	];

	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '工作名称', name : 'workName',formatter:formatValue,width: 150,align: 'left'},
		{ label : '负责部门', name : 'responsibleDepa',width: 150,align: 'left'},
		{ label : '状态', name : 'status',width: 150,align: 'left'},
		{ label : '季度', name : 'quarter',width: 150,align: 'left'},
		{ label : '负责部门ID', name : 'responsibleDepaId',width: 150,align: 'left'},
		{ label : '党委工作计划', name : 'partyCommitteeWorkPlan',width: 150,align: 'left'},
		{ label : '公司计划ID', name : 'companyId',width: 150,align: 'left'},
		{ label : '文件密级', name : 'fileType',width: 150,align: 'left'},
		{ label : '计划结束时间', name : 'planDate', formatter : format,width: 150,align: 'center'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("workName");
	searchTips.push("工作名称");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynWorkPlan_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}
	var dynWorkCompanySearchNames = new Array();
	var dynWorkCompanySearchTips = new Array();
	dynWorkCompanySearchNames.push("responsibityDept");
	dynWorkCompanySearchTips.push("责任业务科室");
	var dynWorkCompanySearchC = dynWorkCompanySearchTips.length == 2 ? '或' + dynWorkCompanySearchTips[1] : "";
    if(dynWorkCompanySearchTips.length > 0){
        $('#dynWorkCompany_keyWord').attr('placeholder','请输入' + dynWorkCompanySearchTips[0] + dynWorkCompanySearchC);
    }
	//添加按钮绑定事件
	$('#dynWorkCompany_insert').bind('click', function(){
		dynWorkCompany.insert(dynWorkPlan.getSelectID());
	});
	//编辑按钮绑定事件
	$('#dynWorkCompany_modify').bind('click', function(){
		dynWorkCompany.modify();
	});
	//删除按钮绑定事件
	$('#dynWorkCompany_del').bind('click', function(){  
		dynWorkCompany.del();
	});
	//查询按钮绑定事件
	$('#dynWorkCompany_searchPart').bind('click', function(){
		dynWorkCompany.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynWorkCompany_searchAll').bind('click', function(){
		dynWorkCompany.openSearchForm(this);
	});
	//导出Excel
	$('#dynWorkCompany_export').bind('click',function(){
		var ids = $("#dynWorkCompanyJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynWorkCompanyJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#dynWorkCompanyForm")));
		new SysExcelExport("testDynWorkCompany",true,"${dynWorkCompanyUrl}exportExcel",JSON.stringify(selectIds),selectConditions);
	})
	//实例化主表对象
	dynWorkPlan = new DynWorkPlan('dynWorkPlanJqGrid','${url}','searchDialog','form','dynWorkPlan_keyWord',searchNames,dataGridColModel);
	dynWorkPlan.setOnLoadSuccess(function(pid) {
		if(dynWorkCompany == null){
			dynWorkCompany = new DynWorkCompany('dynWorkCompanyJqGrid','${dynWorkCompanyUrl}','dynWorkCompanySearchDialog','dynWorkCompanyForm','dynWorkCompany_keyWord',dynWorkCompanySearchNames,dynWorkCompanyDataGridColModel,pid);
		}else{
			dynWorkCompany.loadByPid(pid);
		}
	});
	dynWorkPlan.setOnSelectRow(function(pid) {
		dynWorkCompany.loadByPid(pid);
	});
	//添加按钮绑定事件
	$('#dynWorkPlan_insert').bind('click', function(){
		dynWorkPlan.insert();
	});
	//编辑按钮绑定事件
	$('#dynWorkPlan_modify').bind('click', function(){
		dynWorkPlan.modify();
	});
	//删除按钮绑定事件
	$('#dynWorkPlan_del').bind('click', function(){  
		dynWorkPlan.del();
	});
	//查询按钮绑定事件
	$('#dynWorkPlan_searchPart').bind('click', function(){
		dynWorkPlan.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynWorkPlan_searchAll').bind('click', function(){
		dynWorkPlan.openSearchForm(this);
	});
	//导出Excel
	$('#dynWorkPlan_export').bind('click',function(){
		var ids = $("#dynWorkPlanJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynWorkPlanJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("testDynWorkPlan",true,"${url}exportExcel",JSON.stringify(selectIds),selectConditions);
	})

});
//南侧拖拽修改改变时修改表格自适应
function resizeSouth(width,height){
	var windowHeight = $(window).height();
	var topTableHeight = windowHeight - height
	$('#dynWorkPlanJqGrid').setGridHeight(height-120);
	$('#dynWorkCompanyJqGrid').setGridHeight(topTableHeight-120);
}
</script>
</html>

