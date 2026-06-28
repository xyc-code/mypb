<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "demoorder/dyndemoorder/dynDemoOrderController/operation/Edit/id" -->
<title>详细</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="version"
				value="<c:out  value='${dynDemoOrderDTO.version}'/>" /> <input
				type="hidden" name="id"
				value="<c:out  value='${dynDemoOrderDTO.id}'/>" />
			<table class="form_commonTable">
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="orderDate">订单日期:</label></th>
					<td width="39%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text"
								name="orderDate" id="orderDate" readonly="readonly"
								value="<fmt:formatDate pattern="yyyy-MM-dd" value='${dynDemoOrderDTO.orderDate}'/>" /><span
								class="input-group-addon"><i
								class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="persion">订单人:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="persion" id="persion" readonly="readonly"
						value="<c:out  value='${dynDemoOrderDTO.persion}'/>" /></td>
				</tr>
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="totalPrice">总价:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="totalPrice" id="totalPrice" readonly="readonly"
						value="<c:out  value='${dynDemoOrderDTO.totalPrice}'/>" /></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="state">订单状态:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="state" id="state" readonly="readonly"
						value="<c:out  value='${dynDemoOrderDTO.state}'/>" /></td>
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
	<script type="text/javascript">
			document.ready = function () {
			parent.dynDemoOrder.formValidate($('#form'));
		};
	//form控件禁用
	setFormDisabled();
	$(document).keydown(function(event){  
		event.returnValue = false;
		return false;
	});  
	</script>
</body>
</html>