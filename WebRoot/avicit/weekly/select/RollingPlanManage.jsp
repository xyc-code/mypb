<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "rollingplan/rollingPlanController/toRollingPlanManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<div id="tableToolbar" class="toolbar">		
		<div class="toolbar-right">
			<div class="input-group form-tool-search">
				<input type="text" name="rollingPlan_keyWord"
					id="rollingPlan_keyWord" style="width: 240px;"
					class="form-control input-sm" placeholder="请输入查询条件"> <label
					id="rollingPlan_searchPart"
					class="icon icon-search form-tool-searchicon"></label>
			</div>
			<div class="input-group-btn form-tool-searchbtn">
				<a id="rollingPlan_searchAll" href="javascript:void(0)"
					class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span
					class="caret"></span></a>
			</div>
		</div>
	</div>
	<table id="rollingPlanjqGrid"></table>
	<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto; display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">备注:</th>
				<td width="88%"><input title="备注" class="form-control input-sm"
					type="text" name="rollingPlanContent" id="rollingPlanContent" /></td>
			</tr>
			<tr>
				<th width="10%">工作任务:</th>
				<td width="88%"><input title="工作任务"
					class="form-control input-sm" type="text"
					name="rollingPlanAssignment" id="rollingPlanAssignment" /></td>
			</tr>
			<tr>
				<th width="10%">月份(从):</th>
				<td width="88%">
					<div class="input-group input-group-sm">
			   <input type="text" class="form-control " id="month" name="rollingPlanDateBegin" onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年MM月'})" class="Wdate"/> <span
							class="input-group-addon">
							<i
							class="glyphicon glyphicon-calendar">
							</i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th width="10%">月份(至):</th>
				<td width="88%">
					<div class="input-group input-group-sm">
					<input type="text" class="form-control " id="month" name="rollingPlanDateEnd" onclick="WdatePicker({skin:'whyGreen',dateFmt:'yyyy年MM月'})" class="Wdate"/> <span
							class="input-group-addon"><i
							class="glyphicon glyphicon-calendar"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th width="10%">完成目标:</th>
				<td width="88%"><input title="完成目标"
					class="form-control input-sm" type="text" name="rollingPlanTarget"
					id="rollingPlanTarget" /></td>
			</tr>
			<tr>
			</tr>
		</table>
	</form>
</div>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="avicit/weekly/js/RollingPlan.js"
	type="text/javascript"></script>
<script type="text/javascript">	
	var rollingPlan;
	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="rollingPlan.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHref(cellvalue, options, rowObject) {
		var thisDate = format(cellvalue);
		return '<a href="javascript:void(0);" onclick="rollingPlan.detail(\''
				+ rowObject.id + '\');">' + thisDate + '</a>';
	}

	$(document)
			.ready(
					function() {
						var dataGridColModel = [ {
							label : 'id',
							name : 'id',
							key : true,
							width : 75,
							hidden : true
						},  {
							label : '月份',
							name : 'rollingPlandate',
							width : 150
						}  , {
							label : '工作任务',
							name : 'rollingPlanAssignment',
							width : 150
						}, {
							label : '完成目标',
							name : 'rollingPlanTarget',
							width : 150
						}, {
							label : '备注',
							name : 'rollingPlanContent',
							width : 150
						}];
						var searchNames = new Array();
						var searchTips = new Array();
						searchNames.push("rollingPlanAssignment");
						searchTips.push("工作任务");
						var searchC = searchTips.length == 2 ? '或'
								+ searchTips[1] : "";
						$('#rollingPlan_keyWord').attr('placeholder',
								'请输入' + searchTips[0] + searchC);
						rollingPlan = new RollingPlan('rollingPlanjqGrid',
								'${url}', 'searchDialog', 'form',
								'rollingPlan_keyWord', searchNames,
								dataGridColModel);
						//添加按钮绑定事件
						$('#rollingPlan_insert').bind('click', function() {
							rollingPlan.insert();
						});
						//编辑按钮绑定事件
						$('#rollingPlan_modify').bind('click', function() {
							rollingPlan.modify();
						});
						//删除按钮绑定事件
						$('#rollingPlan_del').bind('click', function() {
							rollingPlan.del();
						});
						//查询按钮绑定事件
						$('#rollingPlan_searchPart').bind('click', function() {
							rollingPlan.searchByKeyWord();
						});
						//打开高级查询框
						$('#rollingPlan_searchAll').bind('click', function() {
							rollingPlan.openSearchForm(this);
						});
					

					});
</script>
</html>