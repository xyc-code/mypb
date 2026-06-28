<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,tree,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform/avicit/lc/organize/leagueOrganization/leagueOrganizationController/toLeagueOrganizationManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<style type="text/css">  
    div#rMenu {position:absolute; visibility:hidden; top:0; background-color: #555;text-align: left;padding: 2px;}  
    div#rMenu a{  
        cursor: pointer;  
        list-style: none outside none;  
    }  
    .ztree-submenu {
	border: 1px solid #959595;
    position: fixed!important;
    background: #FFF!important;
	z-index: 5;
	}
	.ztree-submenu:before {
		position: absolute;
		width:36px;
		height: 100%;
		left: 0;
		top:0;
		background-color:#e7e8e8;
		z-index: 5;
		display: block;
		content:' ';
	}
	.ztree-submenu a {
		color:#454545;
		font-size:14px;
		border:0;
		background: none;
		line-height: 14px;
		padding:8px 15px 8px 45px;
		z-index: 5;
	}
	.ztree-submenu a:hover {
		background-color:#cbeef5;
	}
</style>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'west',split:true,width:fixwidth(.2),onResize:function(a){$('#leagueOrganization').setGridWidth(a);$(window).trigger('resize');}">
		<div class="row" style="margin: 5px;">
				<div class="input-group  input-group-sm">
			      <input  class="form-control" placeholder="回车查询" type="text" id="txt" name="txt">
			      <span class="input-group-btn">
			        <button id="searchbtns" class="btn btn-default ztree-search" type="button"><span class="glyphicon glyphicon-search"></span></button>
			      </span>
			    </div>
			    <!-- 快捷菜单start -->
				<div id="rMenu" class="ztree-submenu"> 
					<sec:accesscontrollist hasPermission="3"  
  						domainObject="formdialog_leagueOrganization_button_add"  
  						permissionDes="添加平级节点">   
				    <a id="leagueOrganization_insert" href="javascript:void(0)" class="list-group-item" >添加平级节点</a>  
				    </sec:accesscontrollist>
				    <sec:accesscontrollist hasPermission="3"  
						domainObject="formdialog_leagueOrganization_button_add_sub"  
  						permissionDes="添加子节点">  
				    <a id="leagueOrganization_insertsub" href="javascript:void(0)" class="list-group-item" >添加子节点</a>  
				    </sec:accesscontrollist>
				    <sec:accesscontrollist hasPermission="3"  
  						domainObject="formdialog_leagueOrganization_button_edit"  
  						permissionDes="树编辑">  
				    <a id="leagueOrganization_modify" href="javascript:void(0)" class="list-group-item" >编辑节点</a>  
				    </sec:accesscontrollist>
				    <sec:accesscontrollist hasPermission="3"  
  						domainObject="formdialog_leagueOrganization_button_delete"  
						permissionDes="树删除">  
				    <a id="leagueOrganization_del" href="javascript:void(0)" class="list-group-item" >删除</a>  
				    </sec:accesscontrollist>
				</div> 
				<!-- 快捷菜单end -->
				<div>
					<ul id="treeDemo" class="ztree"></ul>
				</div>
		</div>
    </div>
	<div data-options="region:'center',onResize:function(a){$('#leagueOrganMemberJqGrid').setGridWidth(a);$(window).trigger('resize');}">
		<div class="card">
		<div class="card-body " >
				<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="partyCode">团支部编号:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
					
							<input class="form-control" type="text" id="leagueCode" name="leagueCode" readonly="readonly" >
							
						</div>
   					</td>
					<th width="15%">
						<label for="userPost">团支部名称:</label></th>
					<td width="34%">
							<input class="form-control" type="text" id="leagueName" name="leagueName" readonly="readonly" >
   					</td>
				</tr>
						<tr>
					<th width="15%">
						<label for="startDate">起始日期:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
					
							<input class="form-control" type="text" id="startDate" name="startDate" readonly="readonly" >
							
						</div>
   					</td>
					<th width="15%">
						<label for="finishDate">届满日期:</label></th>
					<td width="34%">
							<input class="form-control" type="text" id="finishDate" name="finishDate" readonly="readonly" >
   					</td>
				</tr>
				<tr>
				<th width="15%">
						<label for="attribute01">关联部门:</label></th>
					<td width="34%">
							<input class="form-control" type="text" id="attribute01" name="attribute01" readonly="readonly" >
   					</td>
				</tr>
				
			</table>
		
		</div>
		
		</div>
		<div id="toolbar_leagueOrganMemberJqGrid" class="toolbar">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueOrganMember_button_add" permissionDes="添加">
					<a id="leagueOrganMember_insert" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueOrganMember_button_edit" permissionDes="编辑">
					<a id="leagueOrganMember_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueOrganMember_button_delete" permissionDes="删除">
					<a id="leagueOrganMember_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_leagueOrganMember_button_export" permissionDes="导出">
					<a id="leagueOrganMember_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="fa fa-trash-o"></i> 导出</a>
				</sec:accesscontrollist>
			</div>
	   <div class="toolbar-right">
			    <div class="input-group form-tool-search">
		     		<input type="text" name="leagueOrganMember_keyWord" id="leagueOrganMember_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
		     		<label id="leagueOrganMember_searchPart" class="icon icon-search form-tool-searchicon"></label>
		   		</div>
		   		<div class="input-group-btn form-tool-searchbtn">
		   			<a id="leagueOrganMember_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
		   		</div>
		    </div>
		</div>					
		<table id="leagueOrganMemberJqGrid"></table>
		<div id="leagueOrganMemberJqGridPager"></div>
	</div>
</body>
<!-- 子表高级查询begin -->
<div id="leagueOrganMemberSearchDialog" style="overflow: auto;display: none">
	<form id="leagueOrganMemberForm" style="padding: 10px;">
		<input type="hidden" name="leagueId" id="leagueIdLeagueOrganMember" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">
					<label for="userIdAliasLeagueOrganMember">USER_ID:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="userIdLeagueOrganMember" name="userId">
						<input class="form-control" placeholder="请选择用户" type="text" id="userIdAliasLeagueOrganMember" name="userIdAlias">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
					</div>
				</td>
				<th width="10%">
					<label for="deptIdAliasLeagueOrganMember">DEPT_ID:</label>
				</th>
				<td width="39%">
					<div class="input-group  input-group-sm">
						<input type="hidden"  id="deptIdLeagueOrganMember" name="deptId">
						<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAliasLeagueOrganMember" name="deptIdAlias" >
						<span class="input-group-addon">
						<i class="glyphicon glyphicon-equalizer"></i>
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<th>
					<label for="userPostLeagueOrganMember">USER_POST:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="userPost" id="userPostLeagueOrganMember" title="" isNull="true" lookupCode="LC_ORGAN_POST" />
				</td>
    	</table>
	</form>
</div>
<!-- 子表高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 流程的js -->
<!-- 业务的js -->
<script src="avicit/lc/organize/leagueorganization/js/LeagueOrganization.js?v=${jsversion}" type="text/javascript"></script>
<script src="avicit/lc/organize/leagueorganmember/js/LeagueOrganMember.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var leagueOrganization;
var leagueOrganMember;
function formatValueLeagueOrganMember(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="leagueOrganMember.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHrefLeagueOrganMember(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="leagueOrganMember.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
$(document).ready(function () {
	var leagueOrganMemberDataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '员工姓名', name : 'userIdAlias',formatter:formatValueLeagueOrganMember,width: 150,align: 'center'},
		{ label : '所在部门', name : 'deptIdAlias',width: 150,align: 'center'},
		{ label : '所在支部职务', name : 'userPostName',width: 150,align: 'center'},
	];
	var leagueOrganMemberSearchNames = new Array();
	var leagueOrganMemberSearchTips = new Array();
	var leagueOrganMemberSearchC = leagueOrganMemberSearchTips.length == 2 ? '或' + leagueOrganMemberSearchTips[1] : "";
	if(leagueOrganMemberSearchTips.length > 0){
		$('#leagueOrganMember_keyWord').attr('placeholder','请输入' + leagueOrganMemberSearchTips[0] + leagueOrganMemberSearchC);
	}
	//实例化主表对象
	leagueOrganization = new LeagueOrganization('treeDemo','${url}', "form", "txt", 'searchbtns',
	function(pid){
		    leagueOrganMember = new LeagueOrganMember('leagueOrganMemberJqGrid','${leagueOrganMemberUrl}','leagueOrganMemberForm',leagueOrganMemberDataGridColModel,'leagueOrganMemberSearchDialog', pid,leagueOrganMemberSearchNames,'leagueOrganMember_keyWord');
		},
	function(pid){
			leagueOrganMember.reLoad(pid);
	    }
	);
	//主表操作
	//添加平级节点按钮绑定事件
	$('#leagueOrganization_insert').bind('click', function(){
		leagueOrganization.insert();
	});
	//添加子节点按钮绑定事件
	$('#leagueOrganization_insertsub').bind('click', function(){
		leagueOrganization.insertSub();
	});
	//编辑按钮绑定事件
	$('#leagueOrganization_modify').bind('click', function(){
		leagueOrganization.modify();
	});
	//删除按钮绑定事件
	$('#leagueOrganization_del').bind('click', function(){  
		leagueOrganization.del();
	});
	
	//子表操作
	//添加按钮绑定事件
	$('#leagueOrganMember_insert').bind('click', function(){
		leagueOrganMember.insert();
	});
	//编辑按钮绑定事件
	$('#leagueOrganMember_modify').bind('click', function(){
		leagueOrganMember.modify();
	});
	//删除按钮绑定事件
	$('#leagueOrganMember_del').bind('click', function(){  
		leagueOrganMember.del();
	});
	//查询按钮绑定事件
	$('#leagueOrganMember_searchPart').bind('click', function(){
		leagueOrganMember.searchByKeyWord();
	});
	//打开高级查询框
	$('#leagueOrganMember_searchAll').bind('click', function(){
		leagueOrganMember.openSearchForm(this);
	});	
	//导出Excel
	$('#leagueOrganMember_export').bind('click', function(){
		var ids = $("#leagueOrganMemberJqGrid").jqGrid('getGridParam', 'selarrrow');
		var selectIds = new Array();
		for(var i = 0; i < ids.length; i++){
			var row = $("#leagueOrganMemberJqGrid").jqGrid('getRowData', ids[i]);
			selectIds.push(row.id);
		}
		var selectConditions = JSON.stringify(serializeObject($("#leagueOrganMemberForm")));
		new SysExcelExport("leagueOrganMember",true,"${leagueOrganMemberUrl}/exportExcel",JSON.stringify(selectIds),selectConditions);
	});	
	$('#userIdAliasLeagueOrganMember').on('focus',function(e){
		new H5CommonSelect({type:'userSelect', idFiled:'userIdLeagueOrganMember',textFiled:'userIdAliasLeagueOrganMember'});
		this.blur();
		nullInput(e);
	}); 
	$('#deptIdAliasLeagueOrganMember').on('focus',function(e){
		new H5CommonSelect({type:'deptSelect', idFiled:'deptIdLeagueOrganMember',textFiled:'deptIdAliasLeagueOrganMember'});
		this.blur();
		nullInput(e);
	}); 
});
</script>
</html>

