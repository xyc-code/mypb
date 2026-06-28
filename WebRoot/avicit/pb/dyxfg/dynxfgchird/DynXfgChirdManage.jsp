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
<!-- ControllerPath = "platform/avicit/pb/dyxfg/dynXfgChird/dynXfgChirdController/toDynXfgChirdManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgChird_button_add" permissionDes="添加">
	  		<a id="dynXfgChird_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgChird_button_edit" permissionDes="编辑">
			<a id="dynXfgChird_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgChird_button_delete" permissionDes="删除">
			<a id="dynXfgChird_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_dynXfgChird_button_export" permissionDes="导出">
			<a id="dynXfgChird_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class=" icon iconfont icon-drawer"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="dynXfgChird_keyWord" id="dynXfgChird_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynXfgChird_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="dynXfgChird_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="dynXfgChirdjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userPost">职务:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="userPost"  id="userPost" />
				</td>
				<th width="10%">
					<label for="userJx">年度绩效:</label>
				</th>
				<td width="39%">
					<input class="form-control input-sm" type="text" name="userJx"  id="userJx" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userSex">性别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userSex"  id="userSex" />
				</td>
				<th>
					<label for="userDeptType">部门类别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userDeptType"  id="userDeptType" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userSj">先进事迹 :</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userSj"  id="userSj" />
				</td>
				<th>
					<label for="gwName">申报党员先锋岗名称：:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="gwName"  id="gwName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userGbjb">干部级别:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userGbjb"  id="userGbjb" />
				</td>
				<th>
					<label for="fkSubId">主表id:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="fkSubId"  id="fkSubId" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="content">备注:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="content"  id="content" />
				</td>
				<th>
					<label for="userName">姓名:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userName"  id="userName" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userPartydateBegin">入党时间起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="userPartydateBegin" id="userPartydateBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="userPartydateEnd">入党时间止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="userPartydateEnd" id="userPartydateEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="userJf">党员积分:</label>
				</th>
				<td>
					<div class="input-group input-group-sm spinner" data-trigger="spinner">
						<input  class="form-control"  type="text" name="userJf" id="userJf" data-min="-99999999.99" data-max="99999999.99" data-step="1" data-precision="2">
						<span class="input-group-addon">
							<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
							<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
						</span>
					</div>
				</td>
				<th>
					<label for="userJg">民主评议组织评价结果:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userJg"  id="userJg" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="userAge">年龄:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="userAge"  id="userAge" />
				</td>
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/pb/dyxfg/dynxfgchird/js/DynXfgChird.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynXfgChird;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynXfgChird.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynXfgChird.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '职务', name : 'userPost',formatter:formatValue, width: 150, align: 'left'},
		{ label : '年度绩效', name : 'userJx', width: 150, align: 'left'},
		{ label : '性别', name : 'userSex', width: 150, align: 'left'},
		{ label : '部门类别', name : 'userDeptType', width: 150, align: 'left'},
		{ label : '先进事迹 ', name : 'userSj', width: 150, align: 'left'},
		{ label : '申报党员先锋岗名称：', name : 'gwName', width: 150, align: 'left'},
		{ label : '干部级别', name : 'userGbjb', width: 150, align: 'left'},
		{ label : '主表id', name : 'fkSubId', width: 150, align: 'left'},
		{ label : '备注', name : 'content', width: 150, align: 'left'},
		{ label : '姓名', name : 'userName', width: 150, align: 'left'},
		{ label : '入党时间', name : 'userPartydate', formatter : format, width: 150, align: 'center'},
		{ label : '党员积分', name : 'userJf', width: 150, align: 'right'},
		{ label : '民主评议组织评价结果', name : 'userJg', width: 150, align: 'left'},
		{ label : '年龄', name : 'userAge', width: 150, align: 'left'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("userPost");
	searchTips.push("职务");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynXfgChird_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynXfgChird= new DynXfgChird('dynXfgChirdjqGrid','${url}','searchDialog','form','dynXfgChird_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynXfgChird_insert').bind('click', function(){
		dynXfgChird.insert();
	});
	//编辑按钮绑定事件
	$('#dynXfgChird_modify').bind('click', function(){
		dynXfgChird.modify();
	});
	//删除按钮绑定事件
	$('#dynXfgChird_del').bind('click', function(){  
		dynXfgChird.del();
	});
	//查询按钮绑定事件
	$('#dynXfgChird_searchPart').bind('click', function(){
		dynXfgChird.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynXfgChird_searchAll').bind('click', function(){
		dynXfgChird.openSearchForm(this);
	});
	//导出Excel
	$('#dynXfgChird_export').bind('click',function(){
		var ids = $("#dynXfgChirdjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#dynXfgChirdjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("dynXfgChird",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});

});
</script>
</html>

