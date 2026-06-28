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
<!-- ControllerPath = "platform/avicit/pb/dyxfg/dynXfgFq/dynXfgFqController/toDynXfgFqManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgFq_button_add" permissionDes="添加">
	  		<a id="dynXfgFq_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgFq_button_edit" permissionDes="编辑">
			<a id="dynXfgFq_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgFq_button_delete" permissionDes="删除">
			<a id="dynXfgFq_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgFq_button_export" permissionDes="导出">
			<a id="dynXfgFq_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynXfgFq_keyWord" id="dynXfgFq_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynXfgFq_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynXfgFq_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynXfgFqjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="fqTitle">标题:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="fqTitle"  id="fqTitle" />
				</td>
				<th width="10%">
					<label for="fqTel">发起人联系方式:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="fqTel"  id="fqTel" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="fqHdkzDateBeginBegin">活动开展时间起起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fqHdkzDateBeginBegin" id="fqHdkzDateBeginBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fqHdkzDateBeginEnd">活动开展时间起止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fqHdkzDateBeginEnd" id="fqHdkzDateBeginEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fqCreaTimeBegin">发起日期起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fqCreaTimeBegin" id="fqCreaTimeBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fqCreaTimeEnd">发起日期止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fqCreaTimeEnd" id="fqCreaTimeEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fqPxsj">先锋岗评选时间段:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fqPxsj"  id="fqPxsj" />
				</td>
				<th>
					<label for="fqFromNo">表单编号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fqFromNo"  id="fqFromNo" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="fqPartyType">党组织类型:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fqPartyType"  id="fqPartyType" />
				</td>
				<th>
					<label for="fqUser">发起人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fqUser"  id="fqUser" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="fqHdkzDateEndBegin">活动开展时间止起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fqHdkzDateEndBegin" id="fqHdkzDateEndBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="fqHdkzDateEndEnd">活动开展时间止止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="fqHdkzDateEndEnd" id="fqHdkzDateEndEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="fqPartyName">党组织名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fqPartyName"  id="fqPartyName" />
				</td>
				<th>
					<label for="fqPartyOrg">发送党组织:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fqPartyOrg"  id="fqPartyOrg" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/dyxfg/dynxfgfq/js/DynXfgFq.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynXfgFq;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynXfgFq.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynXfgFq.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '时间节点起', name : 'fqCrerDateBegin', formatter : formatDateForHref, width: 150, align: 'center'},
		{ label : '时间节点至', name : 'fqCrerDateEnd', formatter : format, width: 150, align: 'center'},
		{ label : '标题', name : 'fqTitle', width: 150, align: 'left'},
		{ label : '发起人联系方式', name : 'fqTel', width: 150, align: 'left'},
		{ label : '活动开展时间起', name : 'fqHdkzDateBegin', formatter : format, width: 150, align: 'center'},
		{ label : '发起日期', name : 'fqCreaTime', formatter : format, width: 150, align: 'center'},
		{ label : '先锋岗评选时间段', name : 'fqPxsj', width: 150, align: 'left'},
		{ label : '表单编号', name : 'fqFromNo', width: 150, align: 'left'},
		{ label : '党组织类型', name : 'fqPartyType', width: 150, align: 'left'},
		{ label : '发起人', name : 'fqUser', width: 150, align: 'left'},
		{ label : '活动开展时间止', name : 'fqHdkzDateEnd', formatter : format, width: 150, align: 'center'},
		{ label : '党组织名称', name : 'fqPartyName', width: 150, align: 'left'},
		{ label : '发送党组织', name : 'fqPartyOrg', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("fqTitle");
	searchTips.push("标题");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynXfgFq_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynXfgFq= new DynXfgFq('dynXfgFqjqGrid','${url}','searchDialog','form','dynXfgFq_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynXfgFq_insert').bind('click', function(){
		dynXfgFq.insert();
	});
	//编辑按钮绑定事件
	$('#dynXfgFq_modify').bind('click', function(){
		dynXfgFq.modify();
	});
	//删除按钮绑定事件
	$('#dynXfgFq_del').bind('click', function(){  
		dynXfgFq.del();
	});
	//查询按钮绑定事件
	$('#dynXfgFq_searchPart').bind('click', function(){
		dynXfgFq.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynXfgFq_searchAll').bind('click', function(){
		dynXfgFq.openSearchForm(this);
	});
	//导出Excel
	$('#dynXfgFq_export').bind('click',function(){
		var ids = $("#dynXfgFqjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynXfgFqjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynXfgFq",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

