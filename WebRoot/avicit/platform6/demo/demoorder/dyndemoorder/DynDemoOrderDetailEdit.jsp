<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "demoorder/dyndemoorder/dynDemoOrderController/operation/Edit/id" -->
<title>编辑</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id"
				value="<c:out  value='${dynDemoOrderDetailDTO.id}'/>" /> <input
				type="hidden" name="version"
				value="<c:out  value='${dynDemoOrderDetailDTO.version}'/>" /> <input
				type="hidden" name="orderId"
				value="<c:out  value='${dynDemoOrderDetailDTO.orderId}'/>" />
			<table class="form_commonTable">
				<tr>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="productId">PRODUCT_ID:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="productId" id="productId"
						value="<c:out  value='${dynDemoOrderDetailDTO.productId}'/>" /></td>
					<th width="10%"
						style="word-break: break-all; word-warp: break-word;"><label
						for="productNum">PRODUCT_NUM:</label></th>
					<td width="39%"><input class="form-control input-sm"
						type="text" name="productNum" id="productNum"
						value="<c:out  value='${dynDemoOrderDetailDTO.productNum}'/>" /></td>
				</tr>
				<tr>
				</tr>
			</table>
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm"
				style="border: 0; cellspacing: 1; width: 100%">
				<tr>
					<td width="50%" style="padding-right: 4%;" align="right"><a
						href="javascript:void(0)"
						class="btn btn-primary form-tool-btn btn-sm" role="button"
						title="保存" id="dynDemoOrderDetail_saveForm">保存</a> <a
						href="javascript:void(0)"
						class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回"
						id="dynDemoOrderDetail_closeForm">返回</a></td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs" />
	</jsp:include>
	<script type="text/javascript">
		function closeForm() {
			parent.dynDemoOrderDetail.closeDialog("edit");
		}
		function saveForm() {
			var isValidate = $("#form").validate();
			if (!isValidate.checkForm()) {
				isValidate.showErrors();
				return false;
			}
			$("#orderId").val(parent.dynDemoOrderDetail.pid);
			//限制保存按钮多次点击
			$('#dynDemoOrderDetail_saveForm').addClass('disabled').unbind(
					"click");
			parent.dynDemoOrderDetail.save($('#form'), "eidt");
		}

		document.ready = function() {
			$('.date-picker').datepicker();
			$('.time-picker').datetimepicker({
				oneLine : true,//单行显示时分秒
				closeText : '确定',//关闭按钮文案
				showButtonPanel : true,//是否展示功能按钮面板
				showSecond : false,//是否可以选择秒，默认否
			});

			parent.dynDemoOrderDetail.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynDemoOrderDetail_saveForm').bind('click', function() {
				saveForm();
			});
			//返回按钮绑定事件
			$('#dynDemoOrderDetail_closeForm').bind('click', function() {
				closeForm();
			});

			$('.date-picker').on('keydown', nullInput);
			$('.time-picker').on('keydown', nullInput);
		};
	</script>
</body>
</html>