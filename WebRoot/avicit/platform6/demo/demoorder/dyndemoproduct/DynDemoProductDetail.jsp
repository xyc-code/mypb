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
<!-- ControllerPath = "demoorder/dyndemoproduct/dynDemoProductController/operation/Edit/id" -->
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
				value="<c:out  value='${dynDemoProductDTO.version}'/>" /> <input
				type="hidden" name="id"
				value="<c:out  value='${dynDemoProductDTO.id}'/>" />
			<table class="form_commonTable">
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="name">商品名称:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="name" id="name" readonly="readonly"
						value="<c:out  value='${dynDemoProductDTO.name}'/>" /></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="price">商品价格:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="price" id="price" readonly="readonly"
						value="<c:out  value='${dynDemoProductDTO.price}'/>" /></td>
				</tr>
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="description">商品描述:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="description" id="description"
						readonly="readonly"
						value="<c:out  value='${dynDemoProductDTO.description}'/>" /></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="productVersion">商品型号:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="productVersion" id="productVersion"
						readonly="readonly"
						value="<c:out  value='${dynDemoProductDTO.productVersion}'/>" /></td>
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
		parent.dynDemoProduct.formValidate($('#form'));
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