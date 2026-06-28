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
			<input type="hidden" name="id" value="<c:out value='${dynSubZxbasb1DTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynSubZxbasb1DTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="fkSubColId">外键:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="fkSubColId"  id="fkSubColId" value="<c:out value='${dynSubZxbasb1DTO.fkSubColId}'/>">
   					</td>
					<th width="15%">
						<label for="tjdZhiwu">任务内容:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="tjdZhiwu"  id="tjdZhiwu" value="<c:out value='${dynSubZxbasb1DTO.tjdZhiwu}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tjdAge">年龄:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="tjdAge" id="tjdAge"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${dynSubZxbasb1DTO.tjdAge}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="tjdDuizhangname">职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdDuizhangname"  id="tjdDuizhangname" value="<c:out value='${dynSubZxbasb1DTO.tjdDuizhangname}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tjdDuiyuanname">突击队队员姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdDuiyuanname"  id="tjdDuiyuanname" value="<c:out value='${dynSubZxbasb1DTO.tjdDuiyuanname}'/>">
   					</td>
					<th>
						<label for="tjdDanwei">所在单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdDanwei"  id="tjdDanwei" value="<c:out value='${dynSubZxbasb1DTO.tjdDanwei}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tjdFiledUsername">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdFiledUsername"  id="tjdFiledUsername" value="<c:out value='${dynSubZxbasb1DTO.tjdFiledUsername}'/>">
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynSubZxbasb1_closeForm">返回</a>
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
			parent.dynSubZxbasb1.closeDialog("detail");
		}
		$(document).ready(function (){
			//返回按钮绑定事件
			$('#dynSubZxbasb1_closeForm').bind('click', function(){
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

