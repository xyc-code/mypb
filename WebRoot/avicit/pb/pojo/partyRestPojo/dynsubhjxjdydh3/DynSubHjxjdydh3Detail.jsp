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
			<input type="hidden" name="id" value="<c:out value='${dynSubHjxjdydh3DTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynSubHjxjdydh3DTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="fkSubColId">外键:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="fkSubColId"  id="fkSubColId" value="<c:out value='${dynSubHjxjdydh3DTO.fkSubColId}'/>">
   					</td>
					<th width="15%">
						<label for="sn">序号:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="sn"  id="sn" value="<c:out value='${dynSubHjxjdydh3DTO.sn}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="name">姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="name"  id="name" value="<c:out value='${dynSubHjxjdydh3DTO.name}'/>">
   					</td>
					<th>
						<label for="gender">性别:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="gender"  id="gender" value="<c:out value='${dynSubHjxjdydh3DTO.gender}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="divisionLabor">委员分工:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="divisionLabor"  id="divisionLabor" value="<c:out value='${dynSubHjxjdydh3DTO.divisionLabor}'/>">
   					</td>
					<th>
						<label for="numberVotes">得票数:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="numberVotes" id="numberVotes"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynSubHjxjdydh3DTO.numberVotes}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="birthday">出生日期:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="birthday"  id="birthday" value="<c:out value='${dynSubHjxjdydh3DTO.birthday}'/>">
   					</td>
					<th>
						<label for="post">职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="post"  id="post" value="<c:out value='${dynSubHjxjdydh3DTO.post}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="proTitle">职称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="proTitle"  id="proTitle" value="<c:out value='${dynSubHjxjdydh3DTO.proTitle}'/>">
   					</td>
					<th>
						<label for="timeJoin">入党时间:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="timeJoin"  id="timeJoin" value="<c:out value='${dynSubHjxjdydh3DTO.timeJoin}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="timeWork">参加工作时间:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="timeWork"  id="timeWork" value="<c:out value='${dynSubHjxjdydh3DTO.timeWork}'/>">
   					</td>
					<th>
						<label for="tel">联系方式:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tel"  id="tel" value="<c:out value='${dynSubHjxjdydh3DTO.tel}'/>">
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynSubHjxjdydh3_closeForm">返回</a>
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
			parent.dynSubHjxjdydh3.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynSubHjxjdydh3_closeForm').bind('click', function(){
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

