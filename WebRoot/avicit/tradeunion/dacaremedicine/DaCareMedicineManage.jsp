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
<!-- ControllerPath = "platform/avicit/tradeunion/daCareMedicine/daCareMedicineController/toDaCareMedicineManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_daCareMedicine_button_add" permissionDes="发起流程">
	  		<a id="daCareMedicine_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-plus"></i>发起流程</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_daCareMedicine_button_delete" permissionDes="删除">
			<a id="daCareMedicine_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i>删除</a>
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
     		<input type="text" name="daCareMedicine_keyWord" id="daCareMedicine_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="daCareMedicine_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="daCareMedicine_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="daCareMedicinejqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<input type="hidden" id="bpmState" name="bpmState" value="all">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="autoCode">表单编号:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="autoCode"  id="autoCode" />
				</td>
				<th width="10%">
					<label for="patienterIdAlias">患者姓名:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="patienterId" name="patienterId">
						<input class="form-control" placeholder="请选择用户" type="text" id="patienterIdAlias" name="patienterIdAlias">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="patientSex">患者性别:</label>
				</th>
				<td>
					<pt6:h5radio css_class="radio-inline"  name="patientSex"  title=""  canUse="0" lookupCode="PLATFORM_SEX" />
				</td>
				<th>
					<label for="patientAge">患者年龄:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="patientAge"  id="patientAge" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="patientTel">患者电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="patientTel"  id="patientTel" />
				</td>
				<th>
					<label for="disease">患病名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="disease"  id="disease" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="hospital">治疗医院:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="hospital"  id="hospital" />
				</td>
				<th>
					<label for="inhospDate起">住院日期开始起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="inhospDateBegin" id="inhospDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon" onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="inhospDate止">住院日期开始止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="inhospDateEnd" id="inhospDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon" onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="outhospDate起">住院日期结束起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="outhospDateBegin" id="outhospDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon" onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="outhospDate止">住院日期结束止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="outhospDateEnd" id="outhospDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon" onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="employeeCard">报销职工卡号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="employeeCard"  id="employeeCard" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="depositBank">开户银行:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="depositBank" id="depositBank" title="" isNull="true" lookupCode="DEPOSIT_BANK" />
				</td>
				<th>
					<label for="diseaseType">疾病类型:</label>
				</th>
				<td>
					<pt6:h5radio css_class="radio-inline"  name="diseaseType"  title=""  canUse="0" lookupCode="DISEASE_TYPE" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="healthExpenses">医疗费总金额:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="healthExpenses"  id="healthExpenses" />
				</td>
				<th>
					<label for="overallExpenses">统筹基金支付:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="overallExpenses"  id="overallExpenses" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="personExpenses">个人支付金额:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="personExpenses"  id="personExpenses" />
				</td>
				<th>
					<label for="submitExpenses">申请报销金额:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="submitExpenses"  id="submitExpenses" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js?v=${jsversion}"></script>
<script src="avicit/tradeunion/dacaremedicine/js/DaCareMedicine.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var daCareMedicine;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="daCareMedicine.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="daCareMedicine.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
window.bpm_operator_refresh = function(){
	daCareMedicine.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '表单编号', name : 'autoCode',formatter:formatValue,width: 150},
		{ label : '患者姓名', name : 'patienterIdAlias',width: 150},
		{ label : '患者性别', name : 'patientSexName',width: 150},
		{ label : '患者年龄', name : 'patientAge',width: 150},
		{ label : '患者电话', name : 'patientTel',width: 150},
		{ label : '患病名称', name : 'disease',width: 150},
		{ label : '治疗医院', name : 'hospital',width: 150},
		{ label : '住院日期开始', name : 'inhospDate', formatter : format,width: 150},
		{ label : '住院日期结束', name : 'outhospDate', formatter : format,width: 150},
		{ label : '报销职工卡号', name : 'employeeCard',width: 150},
		{ label : '开户银行', name : 'depositBankName',width: 150},
		{ label : '疾病类型', name : 'diseaseTypeName',width: 150},
		{ label : '医疗费总金额', name : 'healthExpenses',width: 150},
		{ label : '统筹基金支付', name : 'overallExpenses',width: 150},
		{ label : '个人支付金额', name : 'personExpenses',width: 150},
		<sec:accesscontrollist hasPermission="3" domainObject="daCareMedicine_table_activityalias" permissionDes="流程当前步骤">
		{ label: '流程当前步骤', name: 'activityalias_', width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="daCareMedicine_table_businessstate" permissionDes="流程状态">
		{ label: '流程状态',name: 'businessstate_', width: 150}
		</sec:accesscontrollist>
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("autoCode");
	searchTips.push("表单编号");
	searchNames.push("patientAge");
	searchTips.push("患者年龄");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	$('#daCareMedicine_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	
	daCareMedicine= new DaCareMedicine('daCareMedicinejqGrid','${url}','searchDialog','form','daCareMedicine_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#daCareMedicine_insert').bind('click', function(){
		daCareMedicine.insert();
	});
	//删除按钮绑定事件
	$('#daCareMedicine_del').bind('click', function(){  
		daCareMedicine.del();
	});
	//查询按钮绑定事件
	$('#daCareMedicine_searchPart').bind('click', function(){
		daCareMedicine.searchByKeyWord();
	});
	//打开高级查询框
	$('#daCareMedicine_searchAll').bind('click', function(){
		daCareMedicine.openSearchForm(this);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		daCareMedicine.initWorkFlow($(this).val());
	});
	$('#patienterIdAlias').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'patienterId',textFiled:'patienterIdAlias'});
		this.blur();
		nullInput(e);
	}); 
});

</script>
</html>
