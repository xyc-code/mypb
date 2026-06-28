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
			<input type="hidden" name="id" value="<c:out value='${dynPartyXfgDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynPartyXfgDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="xfgGssjBegin">公示时间起:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="xfgGssjBegin" id="xfgGssjBegin" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyXfgDTO.xfgGssjBegin}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="xfgPartyType">党组织类型:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="xfgPartyType"  id="xfgPartyType" value="<c:out value='${dynPartyXfgDTO.xfgPartyType}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="xfgFromNo">表单编号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="xfgFromNo"  id="xfgFromNo" value="<c:out value='${dynPartyXfgDTO.xfgFromNo}'/>">
   					</td>
					<th>
						<label for="xfgCreaDate">申请日期:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="xfgCreaDate" id="xfgCreaDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyXfgDTO.xfgCreaDate}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="xfgUser">申请人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="xfgUser"  id="xfgUser" value="<c:out value='${dynPartyXfgDTO.xfgUser}'/>">
   					</td>
					<th>
						<label for="xfgZwhjl">支委会记录:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="xfgZwhjl"  id="xfgZwhjl" value="<c:out value='${dynPartyXfgDTO.xfgZwhjl}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="xfgGssjEnd">公示时间止:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="xfgGssjEnd" id="xfgGssjEnd" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPartyXfgDTO.xfgGssjEnd}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th>
						<label for="xfgPartyName">党组织名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="xfgPartyName"  id="xfgPartyName" value="<c:out value='${dynPartyXfgDTO.xfgPartyName}'/>">
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynPartyXfg_closeForm">返回</a>
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
			parent.dynPartyXfg.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynPartyXfg_closeForm').bind('click', function(){
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

