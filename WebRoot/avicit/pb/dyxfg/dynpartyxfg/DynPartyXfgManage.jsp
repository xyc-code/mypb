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
<!-- ControllerPath = "platform/avicit/pb/dyxfg/dynPartyXfg/dynPartyXfgController/toDynPartyXfgManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPartyXfg_button_add" permissionDes="添加">
	  		<a id="dynPartyXfg_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPartyXfg_button_edit" permissionDes="编辑">
			<a id="dynPartyXfg_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPartyXfg_button_delete" permissionDes="删除">
			<a id="dynPartyXfg_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynPartyXfg_button_export" permissionDes="导出">
			<a id="dynPartyXfg_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynPartyXfg_keyWord" id="dynPartyXfg_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynPartyXfg_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynPartyXfg_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynPartyXfgjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="xfgGssjBeginBegin">公示时间起起:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="xfgGssjBeginBegin" id="xfgGssjBeginBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th width="10%">
					<label for="xfgGssjBeginEnd">公示时间起止:</label>
				</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="xfgGssjBeginEnd" id="xfgGssjBeginEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="xfgPartyType">党组织类型:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="xfgPartyType"  id="xfgPartyType" />
				</td>
				<th>
					<label for="xfgFromNo">表单编号:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="xfgFromNo"  id="xfgFromNo" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="xfgCreaDateBegin">申请日期起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="xfgCreaDateBegin" id="xfgCreaDateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="xfgCreaDateEnd">申请日期止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="xfgCreaDateEnd" id="xfgCreaDateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="xfgUser">申请人:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="xfgUser"  id="xfgUser" />
				</td>
				<th>
					<label for="xfgZwhjl">支委会记录:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="xfgZwhjl"  id="xfgZwhjl" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="xfgGssjEndBegin">公示时间止起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="xfgGssjEndBegin" id="xfgGssjEndBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="xfgGssjEndEnd">公示时间止止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="xfgGssjEndEnd" id="xfgGssjEndEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="xfgPartyName">党组织名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="xfgPartyName"  id="xfgPartyName" />
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/dyxfg/dynpartyxfg/js/DynPartyXfg.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynPartyXfg;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynPartyXfg.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynPartyXfg.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '公示时间起', name : 'xfgGssjBegin', formatter : formatDateForHref, width: 150, align: 'center'},
		{ label : '党组织类型', name : 'xfgPartyType', width: 150, align: 'left'},
		{ label : '表单编号', name : 'xfgFromNo', width: 150, align: 'left'},
		{ label : '申请日期', name : 'xfgCreaDate', formatter : format, width: 150, align: 'center'},
		{ label : '申请人', name : 'xfgUser', width: 150, align: 'left'},
		{ label : '支委会记录', name : 'xfgZwhjl', width: 150, align: 'left'},
		{ label : '公示时间止', name : 'xfgGssjEnd', formatter : format, width: 150, align: 'center'},
		{ label : '党组织名称', name : 'xfgPartyName', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("xfgPartyType");
	searchTips.push("党组织类型");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynPartyXfg_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynPartyXfg= new DynPartyXfg('dynPartyXfgjqGrid','${url}','searchDialog','form','dynPartyXfg_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynPartyXfg_insert').bind('click', function(){
		dynPartyXfg.insert();
	});
	//编辑按钮绑定事件
	$('#dynPartyXfg_modify').bind('click', function(){
		dynPartyXfg.modify();
	});
	//删除按钮绑定事件
	$('#dynPartyXfg_del').bind('click', function(){  
		dynPartyXfg.del();
	});
	//查询按钮绑定事件
	$('#dynPartyXfg_searchPart').bind('click', function(){
		dynPartyXfg.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynPartyXfg_searchAll').bind('click', function(){
		dynPartyXfg.openSearchForm(this);
	});
	//导出Excel
	$('#dynPartyXfg_export').bind('click',function(){
		var ids = $("#dynPartyXfgjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynPartyXfgjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynPartyXfg",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

