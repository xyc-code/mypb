<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>修改</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value='${demosharddateorderDTO.id}' />
			<table class="form_commonTable">
				<tr>
					<th width="10%">订单编号:</th>
					<td width="40%"><input title="订单编号" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 180px;" type="text" name="orderNo" id="orderNo" value='<c:out value='${demosharddateorderDTO.orderNo}'/>' /></td>
					<th width="10%">订单名称:</th>
					<td width="40%"><input title="订单名称" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 180px;" type="text" name="orderName" id="orderName" value='<c:out value='${demosharddateorderDTO.orderName}'/>' /></td>
				</tr>
				<tr>
					<th width="10%">订单归属地:</th>
					<td width="40%"><input title="订单归属地" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 180px;" type="text" name="orderBelong" id="orderBelong" value='<c:out value='${demosharddateorderDTO.orderBelong}'/>' /></td>
					<th width="10%">客户姓名:</th>
					<td width="40%"><input title="客户姓名" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 180px;" type="text" name="customerName" id="customerName" value='<c:out value='${demosharddateorderDTO.customerName}'/>' /></td>
				</tr>
				<tr>
					<th width="10%">客户地址:</th>
					<td width="40%"><input title="客户地址" class="inputbox easyui-validatebox" data-options="validType:'maxLength[50]'" style="width: 180px;" type="text" name="customerAddress" id="customerAddress" value='<c:out value='${demosharddateorderDTO.customerAddress}'/>' /></td>
					<th width="10%"><span class="remind">*</span>订单创建时间:</th>
					<td width="40%"><input title="订单创建时间" class="easyui-datebox" style="width: 182px;" type="text" name="orderCreateTime" id="orderCreateTime" value='${demosharddateorderDTO.orderCreateTime}' editable="false" readonly="readonly"/></td>
				</tr>
				<tr>
				</tr>
			</table>
		</form>
		<div id="toolbar" class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" border="0" cellspacing="1" width='100%'>
				<tr>
					<td width="50%" align="right"><a title="保存" id="saveButton" class="easyui-linkbutton primary-btn" onclick="saveForm();" href="javascript:void(0);">保存</a> <a title="返回" id="returnButton" class="easyui-linkbutton" onclick="closeForm();" href="javascript:void(0);">返回</a></td>
				</tr>
			</table>
		</div>
	</div>
	<script type="text/javascript">
		$.extend($.fn.validatebox.defaults.rules, {
			maxLength : {
				validator : function(value, param) {
					return param[0] >= value.length;

				},
				message : '请输入最多 {0} 字符.'
			}
		});
		$(function() {
			if (!"${demosharddateorderDTO.orderCreateTime}" == "") {
				$('#orderCreateTime').datebox('setValue', parserColumnTime("${demosharddateorderDTO.orderCreateTime}").format("yyyy-MM-dd"));
			}
		})
		function closeForm() {
			parent.demosharddateorder.closeDialog("#edit");
		}
		function saveForm() {
			if ($('#form').form('validate') == false) {
				return;
			}
			parent.demosharddateorder.save(serializeObject($('#form')), "#edit");
		}
	</script>
</body>
</html>