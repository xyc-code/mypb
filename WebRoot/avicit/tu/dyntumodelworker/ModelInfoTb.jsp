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
<!-- ControllerPath = "platform/avicit/tu/dynTuModelWorker/dynTuModelWorkerController/toDynTuModelWorkerManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTuModelWorker_button_add" permissionDes="添加">
	  		<a id="dynTuModelWorker_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTuModelWorker_button_edit" permissionDes="编辑">
			<a id="dynTuModelWorker_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTuModelWorker_button_delete" permissionDes="删除">
			<a id="dynTuModelWorker_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTuModelWorker_button_export" permissionDes="导出">
			<a id="dynTuModelWorker_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynTuModelWorker_keyWord" id="dynTuModelWorker_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynTuModelWorker_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynTuModelWorker_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynTuModelWorkerjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="data11Begin">DATA_11起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="data11Begin" id="data11Begin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="data11End">DATA_11止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="data11End" id="data11End" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="data10">流程ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data10"  id="data10" />
				</td>
				<th>
					<label for="data12">DATA_12:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="data12" id="data12" data-min="-99999" data-max="99999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="requestUser">申请人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="requestUser"  id="requestUser" />
				</td>
				<th>
					<label for="annex">荣誉颁发文件及证书照片附件:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="annex"  id="annex" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="deptTwoName">二级部门名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptTwoName"  id="deptTwoName" />
				</td>
				<th>
					<label for="honorOrgan">荣誉颁发机构:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="honorOrgan"  id="honorOrgan" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="nation">民族:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="nation"  id="nation" />
				</td>
				<th>
					<label for="deptOneId">一级部门ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptOneId"  id="deptOneId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="deptThreeId">三级部门ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptThreeId"  id="deptThreeId" />
				</td>
				<th>
					<label for="data1">性别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="data1" id="data1" title="" isNull="true" lookupCode="PLATFORM_SEX" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data2">DATA_2:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data2"  id="data2" />
				</td>
				<th>
					<label for="data3">DATA_3:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data3"  id="data3" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="skillLevel">技能等级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="skillLevel"  id="skillLevel" />
				</td>
				<th>
					<label for="data4">DATA_4:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data4"  id="data4" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="birthdayBegin">出生日期起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayBegin" id="birthdayBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="birthdayEnd">出生日期止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayEnd" id="birthdayEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="data9">DATA_9:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data9"  id="data9" />
				</td>
				<th>
					<label for="deptId">申请单位ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptId"  id="deptId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data5">字段_5:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data5"  id="data5" />
				</td>
				<th>
					<label for="educationLevel">学历:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="educationLevel"  id="educationLevel" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data6">DATA_6:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data6"  id="data6" />
				</td>
				<th>
					<label for="autoCode">表单编号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data7">DATA_7:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data7"  id="data7" />
				</td>
				<th>
					<label for="data8">DATA_8:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data8"  id="data8" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="deptThreeName">三级部门名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptThreeName"  id="deptThreeName" />
				</td>
				<th>
					<label for="professionalRank">职称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="professionalRank"  id="professionalRank" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="politicalOutlook">政治面貌:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="politicalOutlook"  id="politicalOutlook" />
				</td>
				<th>
					<label for="modelLevel">新增荣誉层级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelLevel"  id="modelLevel" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="speciality">专业:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="speciality"  id="speciality" />
				</td>
				<th>
					<label for="modelCompany">公司级荣誉:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelCompany"  id="modelCompany" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="requestUserId">申请人_ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="requestUserId"  id="requestUserId" />
				</td>
				<th>
					<label for="deptName">申请单位:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptName"  id="deptName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="sex">年龄:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="sex"  id="sex" />
				</td>
				<th>
					<label for="modelCountry">国家级荣誉:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelCountry"  id="modelCountry" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="modelEconomize">省部级荣誉:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelEconomize"  id="modelEconomize" />
				</td>
				<th>
					<label for="deptTwoId">二级部门ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptTwoId"  id="deptTwoId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="workDateBegin">参加工作日期起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="workDateBegin" id="workDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="workDateEnd">参加工作日期止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="workDateEnd" id="workDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="honorName">荣誉名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="honorName"  id="honorName" />
				</td>
				<th>
					<label for="categoryType">发动机分类:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="categoryType"  id="categoryType" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="postName">岗位名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="postName"  id="postName" />
				</td>
				<th>
					<label for="userCode">人员编码:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userCode"  id="userCode" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="honorFileName">荣誉颁发文件名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="honorFileName"  id="honorFileName" />
				</td>
				<th>
					<label for="requestDate">申请日期:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="requestDate"  id="requestDate" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="appointmentLevel">聘任职级:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="appointmentLevel"  id="appointmentLevel" />
				</td>
				<th>
					<label for="tel">联系方式:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="tel" id="tel" data-min="-99999" data-max="99999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="deptOneName">一级部门名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="deptOneName"  id="deptOneName" />
				</td>
				<th>
					<label for="modelCity">地市级荣誉:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelCity"  id="modelCity" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="modelName">劳模姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelName"  id="modelName" />
				</td>
				<th>
					<label for="honorDateBegin">获奖年月起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="honorDateBegin" id="honorDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="honorDateEnd">获奖年月止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="honorDateEnd" id="honorDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/tu/dyntumodelworker/js/DynTuModelWorker.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynTuModelWorker;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynTuModelWorker.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynTuModelWorker.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '流程ID', name : 'data10', width: 150, align: 'left'},
		{ label : '申请人', name : 'requestUser', width: 150, align: 'left'},
		{ label : '荣誉颁发文件及证书照片附件', name : 'annex', width: 150, align: 'left'},
		{ label : '二级部门名称', name : 'deptTwoName', width: 150, align: 'left'},
		{ label : '荣誉颁发机构', name : 'honorOrgan', width: 150, align: 'left'},
		{ label : '民族', name : 'nation', width: 150, align: 'left'},
		{ label : '一级部门ID', name : 'deptOneId', width: 150, align: 'left'},
		{ label : '三级部门ID', name : 'deptThreeId', width: 150, align: 'left'},
		{ label : '性别', name : 'data1Name', width: 150, align: 'center'},
		{ label : '技能等级', name : 'skillLevel', width: 150, align: 'left'},
		{ label : '出生日期', name : 'birthday', formatter : format, width: 150, align: 'center'},
		{ label : '申请单位ID', name : 'deptId', width: 150, align: 'left'},
		{ label : '字段_5', name : 'data5', width: 150, align: 'left'},
		{ label : '学历', name : 'educationLevel', width: 150, align: 'left'},
		{ label : '表单编号', name : 'autoCode', width: 150, align: 'left'},
		{ label : '三级部门名称', name : 'deptThreeName', width: 150, align: 'left'},
		{ label : '职称', name : 'professionalRank', width: 150, align: 'left'},
		{ label : '政治面貌', name : 'politicalOutlook', width: 150, align: 'left'},
		{ label : '新增荣誉层级', name : 'modelLevel', width: 150, align: 'left'},
		{ label : '专业', name : 'speciality', width: 150, align: 'left'},
		{ label : '公司级荣誉', name : 'modelCompany', width: 150, align: 'left'},
		{ label : '申请人_ID', name : 'requestUserId', width: 150, align: 'left'},
		{ label : '申请单位', name : 'deptName', width: 150, align: 'left'},
		{ label : '年龄', name : 'sex', width: 150, align: 'left'},
		{ label : '国家级荣誉', name : 'modelCountry', width: 150, align: 'left'},
		{ label : '省部级荣誉', name : 'modelEconomize', width: 150, align: 'left'},
		{ label : '二级部门ID', name : 'deptTwoId', width: 150, align: 'left'},
		{ label : '参加工作日期', name : 'workDate', formatter : format, width: 150, align: 'center'},
		{ label : '荣誉名称', name : 'honorName', width: 150, align: 'left'},
		{ label : '发动机分类', name : 'categoryType', width: 150, align: 'left'},
		{ label : '岗位名称', name : 'postName', width: 150, align: 'left'},
		{ label : '人员编码', name : 'userCode', width: 150, align: 'left'},
		{ label : '荣誉颁发文件名', name : 'honorFileName', width: 150, align: 'left'},
		{ label : '申请日期', name : 'requestDate', width: 150, align: 'left'},
		{ label : '聘任职级', name : 'appointmentLevel', width: 150, align: 'left'},
		{ label : '联系方式', name : 'tel', width: 150, align: 'right'},
		{ label : '一级部门名称', name : 'deptOneName', width: 150, align: 'left'},
		{ label : '地市级荣誉', name : 'modelCity', width: 150, align: 'left'},
		{ label : '劳模姓名', name : 'modelName', width: 150, align: 'left'},
		{ label : '获奖年月', name : 'honorDate', formatter : format, width: 150, align: 'center'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("data10");
	searchTips.push("流程ID");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynTuModelWorker_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynTuModelWorker= new DynTuModelWorker('dynTuModelWorkerjqGrid','${url}','searchDialog','form','dynTuModelWorker_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynTuModelWorker_insert').bind('click', function(){
		dynTuModelWorker.insert();
	});
	//编辑按钮绑定事件
	$('#dynTuModelWorker_modify').bind('click', function(){
		dynTuModelWorker.modify();
	});
	//删除按钮绑定事件
	$('#dynTuModelWorker_del').bind('click', function(){  
		dynTuModelWorker.del();
	});
	//查询按钮绑定事件
	$('#dynTuModelWorker_searchPart').bind('click', function(){
		dynTuModelWorker.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynTuModelWorker_searchAll').bind('click', function(){
		dynTuModelWorker.openSearchForm(this);
	});
	//导出Excel
	$('#dynTuModelWorker_export').bind('click',function(){
		var ids = $("#dynTuModelWorkerjqGrid").jqGrid('getGridParam', 'selarrrow');
		debugger;
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynTuModelWorkerjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		//new SysExcelExport("dynTuModelWorker",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
		var urlpsu='avicit/tu/dynTuModelWorkerF/dynTuModelWorkerFController/operation/exportExcel';
		new SysExcelExport("modelInfoLevelExport",false,urlpsu,JSON.stringify(selectIds),selectConditions);
		
	});

});
</script>
</html>

