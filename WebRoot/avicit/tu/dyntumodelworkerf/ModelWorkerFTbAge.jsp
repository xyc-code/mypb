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
<!-- ControllerPath = "platform/avicit/tu/dynTuModelWorkerF/dynTuModelWorkerFController/toDynTuModelWorkerFManage" -->
<title>详细表格导出</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<%
String psu1=request.getParameter("name1");
%>
<%
String psu2=request.getParameter("name2");
%>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynTuModelWorkerF_button_export" permissionDes="导出">
			<a id="dynTuModelWorkerF_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right"  style="display: none">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynTuModelWorkerF_keyWord" id="dynTuModelWorkerF_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynTuModelWorkerF_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynTuModelWorkerF_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynTuModelWorkerFjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="requestUserId">申请人_ID:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="requestUserId"  id="requestUserId" />
				</td>
				<th width="10%">
					<label for="deptName">申请单位:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="deptName"  id="deptName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data11">DATA_11:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="data11" id="data11" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="data10Begin">DATA_10起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="data10Begin" id="data10Begin"  value=<%=psu1%> />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="data10End">DATA_10止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="data10End" id="data10End"  value=<%=psu2%> />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
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
					<label for="requestUser">申请人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="requestUser"  id="requestUser" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="annex">荣誉颁发文件及证书照片附件:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="annex"  id="annex" />
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
					<label for="data1">劳模姓名ID:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data1"  id="data1" />
				</td>
				<th>
					<label for="data2">字段_2:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data2"  id="data2" />
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
					<label for="data3">字段_3:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data3"  id="data3" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data4">DATA_4:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data4"  id="data4" />
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
					<label for="data9">DATA_9:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data9"  id="data9" />
				</td>
				<th>
					<label for="modelName">劳模姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelName"  id="modelName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data5">DATA_5:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data5"  id="data5" />
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
					<label for="data6">DATA_6:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data6"  id="data6" />
				</td>
				<th>
					<label for="data7">DATA_7:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data7"  id="data7" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="data8">DATA_8:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="data8"  id="data8" />
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
				<th>
					<label for="requestDate">申请日期:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="requestDate"  id="requestDate" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="modelLevel">新增荣誉层级:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="modelLevel" id="modelLevel" title="" isNull="true" lookupCode="MODELNAMELEVEL" />
				</td>
				<th>
					<label for="tel">联系方式:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="tel" id="tel" data-min="-99999999999999999999" data-max="99999999999999999999" data-step="1" data-precision="0">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="modelCity">地市级荣誉:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelCity"  id="modelCity" />
				</td>
				<th>
					<label for="modelCompany">公司级荣誉:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="modelCompany"  id="modelCompany" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/tu/dyntumodelworkerf/js/DynTuModelWorkerF2.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynTuModelWorkerF;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynTuModelWorkerF.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynTuModelWorkerF.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		                 		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		                		{ label : '申请单位', name : 'deptName', width: 150, align: 'left'},
		                		{ label : '申请人', name : 'requestUser', width: 150, align: 'left'},
		                		{ label : '劳模姓名', name : 'modelName', width: 150, align: 'left'},
		                		{ label : '联系方式', name : 'tel', width: 150, align: 'right'},
		                		{ label : '新增荣誉层级', name : 'modelLevelName', width: 150, align: 'left'},
		                		{ label : '荣誉名称', name : 'honorName', width: 150, align: 'left'},
		                		{ label : '出生日期', name : 'data10', width: 150, align: 'left'},
		                		{ label : '学历', name : 'data9', width: 150, align: 'left'},
		                		{ label : '职称', name : 'data8', width: 150, align: 'left'},
		                		{ label : '分类', name : 'data7', width: 150, align: 'left'},
		                		{ label : '性别', name : 'data6', width: 150, align: 'left'},

		                		{ label : '申请日期', name : 'requestDate', width: 150, align: 'left'},
		                		{ label : '获奖年月', name : 'honorDate', formatter : format, width: 150, align: 'center'},

		                		{ label : '荣誉颁发机构', name : 'honorOrgan', width: 150, align: 'left'},
		                		{ label : '荣誉颁发文件名', name : 'honorFileName', width: 150, align: 'left'},
		                		{ label : '人员编码', name : 'userCode', width: 150, align: 'left'},
		                		{ label : '表单编号', name : 'autoCode', width: 150, align: 'left', hidden : true}	                		
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("modelName");
	searchTips.push("劳模姓名");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynTuModelWorkerF_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}
	dynTuModelWorkerF= new DynTuModelWorkerF('dynTuModelWorkerFjqGrid','platform/avicit/tu/dynTuModelWorkerF/dynTuModelWorkerFController/operation/','searchDialog','form','dynTuModelWorkerF_keyWord',searchNames,dataGridColModel);
	
		//添加按钮绑定事件
	$('#dynTuModelWorkerF_insert').bind('click', function(){
		dynTuModelWorkerF.insert();
	});
	//编辑按钮绑定事件
	$('#dynTuModelWorkerF_modify').bind('click', function(){
		dynTuModelWorkerF.modify();
	});
	//删除按钮绑定事件
	$('#dynTuModelWorkerF_del').bind('click', function(){  
		dynTuModelWorkerF.del();
	});
	//查询按钮绑定事件
	$('#dynTuModelWorkerF_searchPart').bind('click', function(){
		dynTuModelWorkerF.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynTuModelWorkerF_searchAll').bind('click', function(){
		dynTuModelWorkerF.openSearchForm(this);
	});
	//导出Excel
	$('#dynTuModelWorkerF_export').bind('click',function(){
		var ids = $("#dynTuModelWorkerFjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynTuModelWorkerFjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("modelInfoExport",true,"platform/avicit/tu/dynTuModelWorkerF/dynTuModelWorkerFController/operation/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

