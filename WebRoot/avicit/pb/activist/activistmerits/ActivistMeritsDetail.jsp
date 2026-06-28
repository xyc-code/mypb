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
			<input type="hidden" name="id" value="<c:out value='${activistMeritsDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${activistMeritsDTO.version}'/>"/>
			<input type="hidden" name="paId" value="<c:out  value='${activistMeritsDTO.paId}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="year">年份:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="year" id="year" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${activistMeritsDTO.year}'/>" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="merits">绩效:</label></th>
					<td width="34%">
						<pt6:h5select css_class="form-control input-sm" name="merits" id="merits" title="" isNull="true" lookupCode="PA_MERITS" defaultValue="${activistMeritsDTO.merits}" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="type">类别:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="type" id="type" title="" isNull="true" lookupCode="PA_PARTY_TYPE" defaultValue="${activistMeritsDTO.type}" />
   					</td>
					<th>
						<label for="position">排名:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="position" id="position"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0" value="<c:out value='${activistMeritsDTO.position}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
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
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="activistMerits_closeForm">返回</a>
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
			parent.activistMerits.closeDialog("detail");
		}

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

		$(document).ready(function (){
			//返回按钮绑定事件
			$('#activistMerits_closeForm').bind('click', function(){
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

