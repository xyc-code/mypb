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
<!-- ControllerPath = "weekly/weeklyController/toWeeklyManage" -->
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
				<input type="text" name="weekly_keyWord" id="weekly_keyWord"
					style="width: 240px;" class="form-control input-sm"
					placeholder="请输入查询条件"> <label id="weekly_searchPart"
					class="icon icon-search form-tool-searchicon"></label>
			</div>
			<div class="input-group-btn form-tool-searchbtn">
				<a id="weekly_searchAll" href="javascript:void(0)"
					class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span
					class="caret"></span></a>
			</div>
		</div>
	</div>
	<table id="weeklyjqGrid"></table>
	<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto; display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">工作任务:</th>
				<td width="88%"><input title="工作任务"
					class="form-control input-sm" type="text" name="workTasks"
					id="workTasks" /></td>
			</tr>
			<tr>		
						<th width="15%"><label for="userIdAlias">责任人:</label></th>
		<td width="34%">
		   <div class="input-group  input-group-sm">
			  <input type="hidden"  id="userIdLeagueOrganMember" name="personLiable">
			  <input class="form-control" placeholder="请选择用户" type="text" id="userIdAliasLeagueOrganMember" name="userIdAlias">
		      <span class="input-group-addon"> <i class="glyphicon glyphicon-user"></i></span>
		   </div>
 	    </td>	
			</tr>			
			<%-- <tr>
				<th width="10%">是否完成:</th>
				<td width="88%"><pt6:h5select css_class="form-control input-sm" name="isCompletion" id="isCompletion" title="部门类型"
				  isNull="true" lookupCode="IS_COMPLETION"  defaultValue='1'/></td>
			</tr> --%>
			<tr>
				<th width="10%">上周进展:</th>
				<td width="88%"><input title="上周进展"
					class="form-control input-sm" type="text" name="topDateEvolve"
					id="topDateEvolve" /></td>
			</tr>
			<tr>
				<th width="10%">完成节点(从):</th>
				<td width="88%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text"
							name="completionNodeBegin" id="completionNodeBegin" /> <span
							class="input-group-addon"><i
							class="glyphicon glyphicon-calendar"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th width="10%">完成节点(至):</th>
				<td width="88%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text"
							name="completionNodeEnd" id="completionNodeEnd" /> <span
							class="input-group-addon"><i
							class="glyphicon glyphicon-calendar"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th width="10%">本周计划:</th>
				<td width="88%"><input title="本周计划"
					class="form-control input-sm" type="text" name="dateEvolve"
					id="dateEvolve" /></td>
			</tr>
			<tr>
				<th width="10%">类别:</th>
				<td width="88%"> <pt6:h5select css_class="form-control input-sm" name="workClass" id="workClass" title="类别"
				  isNull="true" lookupCode="WORK_CLASS"  /></td>
					
			</tr>	
			<tr>
				<th width="10%">备注:</th>
				<td width="88%"><input title="备注" class="form-control input-sm"
					type="text" name="content" id="content" /></td>
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
<script src="avicit/weekly/js/WeeklySelect.js" type="text/javascript"></script>
<script type="text/javascript">
	var weekly;
	$(document)
			.ready(
					function() {
						var dataGridColModel = [ {
							label : 'id',
							name : 'id',
							key : true,
							width : 75,
							hidden : true
						},{
							label : '类别',
							name : 'workClass',
							width : 150
						}, {
							label : '工作任务',
							name : 'workTasks',
							width : 150
						}, {
						label : '上周进展',
						name : 'topDateEvolve',
						width : 150
					},{
						label : '本周计划',
						name : 'dateEvolve',
						width : 150
					},{
							label : '责任人',
							name : 'personLiable',
							width : 150
						}, {
							label : '完成节点',
							name : 'completionNode',
							width : 150,
							formatter : format
						},  /* {
							label : '是否完成',
							name : 'isCompletion',
							width : 150,
						}, */     {
							label : '备注',
							name : 'content',
							width : 150
						} ];
						var searchNames = new Array();
						var searchTips = new Array();
						searchNames.push("workTasks");
						searchTips.push("工作任务");
						var searchC = searchTips.length == 2 ? '或'
								+ searchTips[1] : "";
						$('#weekly_keyWord').attr('placeholder',
								'请输入' + searchTips[0] + searchC);
						weekly = new Weekly('weeklyjqGrid', '${url}',
								'searchDialog', 'form', 'weekly_keyWord',
								searchNames, dataGridColModel);
						//添加按钮绑定事件
						$('#weekly_insert').bind('click', function() {
							weekly.insert();
						});
						$('#userIdAliasLeagueOrganMember').on('focus',function(e){
							new H5CommonSelect({type:'userSelect', idFiled:'userIdLeagueOrganMember',textFiled:'userIdAliasLeagueOrganMember',selectModel:'multi',});
							this.blur();
							nullInput(e);
						});
						//编辑按钮绑定事件
						$('#weekly_modify').bind('click', function() {
							weekly.modify();
						});
						//删除按钮绑定事件
						$('#weekly_del').bind('click', function() {
							weekly.del();
						});
						//查询按钮绑定事件
						$('#weekly_searchPart').bind('click', function() {
							weekly.searchByKeyWord();
						});
						//打开高级查询框
						$('#weekly_searchAll').bind('click', function() {
							weekly.openSearchForm(this);
						});

					});
</script>
</html>