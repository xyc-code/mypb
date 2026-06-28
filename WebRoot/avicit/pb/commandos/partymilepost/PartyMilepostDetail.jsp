<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${partyMilepostDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${partyMilepostDTO.version}'/>"/>
			<input type="hidden" name="commandosId" value="<c:out  value='${partyMilepostDTO.commandosId}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="userIdAlias">上报人:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias" readonly="readonly" value="<c:out value='${partyMilepostDTO.userIdAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="deptIdAlias">申请部门:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId">
							<input class="form-control" type="text" id="deptIdAlias" name="deptIdAlias" readonly="readonly" value="<c:out value='${partyMilepostDTO.deptIdAlias}'/>">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="taskStatus">任务状态:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="taskStatus" id="taskStatus" title="" isNull="true" lookupCode="PC_M_COMPLETE_STATUS" defaultValue="${partyMilepostDTO.taskStatus}" />
   					</td>
					<th>
						<label for="taskCompletion">完成情况:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="taskCompletion"  id="taskCompletion" value="<c:out value='${partyMilepostDTO.taskCompletion}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyId">上报人所在党支部:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyId"  id="partyId" value="<c:out value='${partyMilepostDTO.partyId}'/>">
   					</td>
					<th>
						<label for="milepostPlan">里程碑计划:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="milepostPlan"  id="milepostPlan" value="<c:out value='${partyMilepostDTO.milepostPlan}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="completionDate">计划完成时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="completionDate" id="completionDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${partyMilepostDTO.completionDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
				</tr>
			</table>
		</form>	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="partyMilepost_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		function closeForm(){
			parent.partyMilepost.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#partyMilepost_closeForm').bind('click', function(){
				closeForm();
			});
		});
		//form控件禁用
		setFormDisabled();
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});
	</script>
</body>
</html>

