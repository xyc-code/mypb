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
			<input type="hidden" name="id" value="<c:out value='${dynXfgFqDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynXfgFqDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="fqCrerDateBegin">时间节点起:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fqCrerDateBegin" id="fqCrerDateBegin" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynXfgFqDTO.fqCrerDateBegin}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="fqCrerDateEnd">时间节点至:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fqCrerDateEnd" id="fqCrerDateEnd" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynXfgFqDTO.fqCrerDateEnd}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqTitle">标题:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqTitle"  id="fqTitle" value="<c:out value='${dynXfgFqDTO.fqTitle}'/>">
   					</td>
					<th>
						<label for="fqTel">发起人联系方式:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqTel"  id="fqTel" value="<c:out value='${dynXfgFqDTO.fqTel}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqHdkzDateBegin">活动开展时间起:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fqHdkzDateBegin" id="fqHdkzDateBegin" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynXfgFqDTO.fqHdkzDateBegin}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="fqCreaTime">发起日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fqCreaTime" id="fqCreaTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynXfgFqDTO.fqCreaTime}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqPxsj">先锋岗评选时间段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqPxsj"  id="fqPxsj" value="<c:out value='${dynXfgFqDTO.fqPxsj}'/>">
   					</td>
					<th>
						<label for="fqFromNo">表单编号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqFromNo"  id="fqFromNo" value="<c:out value='${dynXfgFqDTO.fqFromNo}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqPartyType">党组织类型:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqPartyType"  id="fqPartyType" value="<c:out value='${dynXfgFqDTO.fqPartyType}'/>">
   					</td>
					<th>
						<label for="fqUser">发起人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqUser"  id="fqUser" value="<c:out value='${dynXfgFqDTO.fqUser}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqHdkzDateEnd">活动开展时间止:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fqHdkzDateEnd" id="fqHdkzDateEnd" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynXfgFqDTO.fqHdkzDateEnd}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="fqPartyName">党组织名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqPartyName"  id="fqPartyName" value="<c:out value='${dynXfgFqDTO.fqPartyName}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="fqPartyOrg">发送党组织:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fqPartyOrg"  id="fqPartyOrg" value="<c:out value='${dynXfgFqDTO.fqPartyOrg}'/>">
   					</td>
				</tr>
			</table>
		</form>
			</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynXfgFq_closeForm">返回</a>
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
			parent.dynXfgFq.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynXfgFq_closeForm').bind('click', function(){
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

