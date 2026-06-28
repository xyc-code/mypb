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
<!-- ControllerPath = "platform/avicit/pb/milepost/dynFiveOf/dynFiveOfController/toDynFiveOfManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynFiveOf_button_add" permissionDes="发起流程">
	  		<a id="dynFiveOf_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="发起流程"><i class="fa fa-plus"></i>发起流程</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynFiveOf_button_delete" permissionDes="删除">
			<a id="dynFiveOf_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除" style="display:none;"><i class="fa fa-trash-o"></i>删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynFiveOf_button_export" permissionDes="导出">
			<a id="dynFiveOf_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
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
     		<input type="text" name="dynFiveOf_keyWord" id="dynFiveOf_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynFiveOf_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynFiveOf_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynFiveOfjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<input type="hidden" id="bpmState" name="bpmState" value="all">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="fiveDateBegin">提出时间起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fiveDateBegin" id="fiveDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="fiveDateEnd">提出时间止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fiveDateEnd" id="fiveDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fiveNo">申请编号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveNo"  id="fiveNo" />
				</td>
				<th>
					<label for="attr9">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr9"  id="attr9" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr4">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr4"  id="attr4" />
				</td>
				<th>
					<label for="fiveName">提出人姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveName"  id="fiveName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr3">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr3"  id="attr3" />
				</td>
				<th>
					<label for="attr2">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr2"  id="attr2" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr1">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr1"  id="attr1" />
				</td>
				<th>
					<label for="fiveSituation">评选情况:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveSituation"  id="fiveSituation" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr8">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr8"  id="attr8" />
				</td>
				<th>
					<label for="attr7">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr7"  id="attr7" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr20Begin">预留字段起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr20Begin" id="attr20Begin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="attr20End">预留字段止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr20End" id="attr20End" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr6">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr6"  id="attr6" />
				</td>
				<th>
					<label for="attr5">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr5"  id="attr5" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr12">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr12"  id="attr12" />
				</td>
				<th>
					<label for="attr13">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr13"  id="attr13" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr10">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr10"  id="attr10" />
				</td>
				<th>
					<label for="posenTel">联系人电话:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="posenTel"  id="posenTel" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr11">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr11"  id="attr11" />
				</td>
				<th>
					<label for="attr16">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr16"  id="attr16" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr17">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr17"  id="attr17" />
				</td>
				<th>
					<label for="attr14">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr14"  id="attr14" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="attr15">预留字段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="attr15"  id="attr15" />
				</td>
				<th>
					<label for="attr18Begin">预留字段起:</label>
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
					<label for="attr18End">预留字段止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr18End" id="attr18End" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="attr19Begin">预留字段起:</label>
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
					<label for="attr19End">预留字段止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="attr19End" id="attr19End" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fiveEffect">改善效果:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveEffect"  id="fiveEffect" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="fiveDept">单位:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveDept"  id="fiveDept" />
				</td>
				<th>
					<label for="fivePosition">职位:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fivePosition"  id="fivePosition" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="fiveProspects">应用前景:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveProspects"  id="fiveProspects" />
				</td>
				<th>
					<label for="posenName">联系人姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="posenName"  id="posenName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="fvieAge">年龄:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fvieAge"  id="fvieAge" />
				</td>
				<th>
					<label for="fiveDeclarations">申报补充:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fiveDeclarations"  id="fiveDeclarations" />
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
<script src="avicit/pb/milepost/dynfiveof/js/DynFiveOf.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynFiveOf;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynFiveOf.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynFiveOf.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
window.bpm_operator_refresh = function(){
	dynFiveOf.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '提出时间', name : 'fiveDate', formatter : formatDateForHref,width: 150,align: 'center'},
		{ label : '申请编号', name : 'fiveNo',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr9',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr4',width: 150,align: 'left'},
		{ label : '提出人姓名', name : 'fiveName',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr3',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr2',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr1',width: 150,align: 'left'},
		{ label : '评选情况', name : 'fiveSituation',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr8',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr7',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr20', formatter : format,width: 150,align: 'center'},
		{ label : '预留字段', name : 'attr6',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr5',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr12',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr13',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr10',width: 150,align: 'left'},
		{ label : '联系人电话', name : 'posenTel',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr11',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr16',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr17',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr14',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr15',width: 150,align: 'left'},
		{ label : '预留字段', name : 'attr18', formatter : format,width: 150,align: 'center'},
		{ label : '预留字段', name : 'attr19', formatter : format,width: 150,align: 'center'},
		{ label : '改善效果', name : 'fiveEffect',width: 150,align: 'left'},
		{ label : '单位', name : 'fiveDept',width: 150,align: 'left'},
		{ label : '职位', name : 'fivePosition',width: 150,align: 'left'},
		{ label : '应用前景', name : 'fiveProspects',width: 150,align: 'left'},
		{ label : '联系人姓名', name : 'posenName',width: 150,align: 'left'},
		{ label : '年龄', name : 'fvieAge',width: 150,align: 'left'},
		{ label : '申报补充', name : 'fiveDeclarations',width: 150,align: 'left'},
		{ label : '问题描述', name : 'fiveProblem',width: 150,align: 'left', sortable:false},
		{ label : '改善措施', name : 'fiveMeasures',width: 150,align: 'left', sortable:false},
		<sec:accesscontrollist hasPermission="3" domainObject="dynFiveOf_table_activityalias" permissionDes="流程当前步骤">
		{ label: '流程当前步骤', name: 'activityalias_', sortable:false, width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="dynFiveOf_table_businessstate" permissionDes="流程状态">
		{ label: '流程状态',name: 'businessstate_', sortable:false, width: 150},
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="dynFiveOf_table_assigneenames_" permissionDes="当前处理人">
		{ label: '当前处理人',name: 'assigneenames_', sortable:false, width: 150}
		</sec:accesscontrollist>
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("fiveNo");
	searchTips.push("申请编号");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynFiveOf_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynFiveOf= new DynFiveOf('dynFiveOfjqGrid','${url}','searchDialog','form','dynFiveOf_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynFiveOf_insert').bind('click', function(){
		dynFiveOf.insert();
	});
	//删除按钮绑定事件
	$('#dynFiveOf_del').bind('click', function(){  
		dynFiveOf.del();
	});
	//查询按钮绑定事件
	$('#dynFiveOf_searchPart').bind('click', function(){
		dynFiveOf.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynFiveOf_searchAll').bind('click', function(){
		dynFiveOf.openSearchForm(this);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		dynFiveOf.initWorkFlow($(this).val());
	});
	//导出Excel
	$('#dynFiveOf_export').bind('click',function(){
		var ids = $("#dynFiveOfjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynFiveOfjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynFiveOf",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});
	
});
</script>
</html>

