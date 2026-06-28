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
<!-- ControllerPath = "platform/avicit/lc/youth/leagueYouth/leagueYouthController/toLeagueYouthManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueYouth_button_add" permissionDes="添加">
	  		<a id="leagueYouth_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm btn-point" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueYouth_button_edit" permissionDes="编辑">
			<a id="leagueYouth_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueYouth_button_delete" permissionDes="删除">
			<a id="leagueYouth_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueYouth_button_export" permissionDes="导出">
			<a id="leagueYouth_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
		</sec:accesscontrollist>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="leagueYouth_keyWord" id="leagueYouth_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="leagueYouth_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="leagueYouth_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>					
<table id="leagueYouthjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询begin -->
<div id="searchDialog" style="overflow: auto;display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAlias">姓名:</label>
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
					<label for="deptIdAlias">所在单位:</label>
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
					<label for="sex">性别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="sex" id="sex" title="" isNull="true" lookupCode="PLATFORM_SEX" />
				</td>
				<th>
					<label for="nation">民族:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="nation"  id="nation" />
				</td>
			</tr>
			<tr>
				<th>
					<label for="political">政治面貌:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="political"  id="political" />
				</td>
				<th>
						<label for="validFlag">是否有效:</label>
					</th>
					<td>
					<pt6:h5select css_class="form-control input-sm" name="validFlag"  id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" />
			
   					</td>
			</tr>
			<tr>
				<th>
					<label for="birthdayBegin">出生年月起:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayBegin" id="birthdayBegin" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
				<th>
					<label for="birthdayEnd">出生年月止:</label>
				</th>
				<td>
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text" name="birthdayEnd" id="birthdayEnd" />
						<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
					</div>
				</td>
			</tr>
			
    	</table>
	</form>
</div>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/lc/youth/leagueyouth/js/LeagueYouth.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var leagueYouth;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="leagueYouth.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="leagueYouth.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
		
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '姓名', name : 'userIdAlias',formatter:formatValue, width: 150, align: 'right'},
		{ label : '所在单位', name : 'deptIdAlias', width: 150, align: 'right'},
		{ label : '性别', name : 'sexName', width: 150, align: 'center'},
		{ label : '民族', name : 'nation', width: 150, align: 'left'},
		{ label : '政治面貌', name : 'political', width: 150, align: 'left'},
		{ label : '出生年月', name : 'birthday', formatter : format, width: 150, align: 'center'},
		{ label : '是否有效', name : 'validFlagName', width: 150, align: 'center'}
	];

	var searchNames = new Array();
	var searchTips = new Array();
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#leagueYouth_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	leagueYouth= new LeagueYouth('leagueYouthjqGrid','${url}','searchDialog','form','leagueYouth_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#leagueYouth_insert').bind('click', function(){
		leagueYouth.insert();
	});
	//编辑按钮绑定事件
	$('#leagueYouth_modify').bind('click', function(){
		leagueYouth.modify();
	});
	//删除按钮绑定事件
	$('#leagueYouth_del').bind('click', function(){  
		leagueYouth.del();
	});
	//查询按钮绑定事件
	$('#leagueYouth_searchPart').bind('click', function(){
		leagueYouth.searchByKeyWord();
	});
	//打开高级查询框
	$('#leagueYouth_searchAll').bind('click', function(){
		leagueYouth.openSearchForm(this);
	});
	//导出Excel
	$('#leagueYouth_export').bind('click',function(){
		var ids = $("#leagueYouthjqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#leagueYouthjqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#form")));
		new SysExcelExport("leagueYouth",true,"${url}/exportExcel",JSON.stringify(selectIds),selectConditions);
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
});
</script>
</html>

