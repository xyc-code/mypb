<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "platform6/demo/demosharddateorder/DemosharddateorderController/DemosharddateorderInfo" -->
<title></title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<jsp:include page="/avicit/platform6/modules/system/commonpopup/commonSelectionHead.jsp"></jsp:include>
<script src="static/js/platform/component/common/exteasyui.js" type="text/javascript"></script>
<script src="static/js/platform/component/sfn/SelfDefiningQuery.js" type="text/javascript"></script>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center'" style="background:#ffffff;height:0px;padding:0px;overflow:hidden;">
		<div id="toolbarDemosharddateorder" class="datagrid-toolbar">
			<table>
				<tr>
					<td>
						<select class="easyui-combobox" name="year" id="year" data-options="editable:false,panelHeight:'auto',onShowPanel:comboboxOnShowPanel">   
						    <option value="2016" <c:if test="${year == '2016' }">selected</c:if>>2016</option>
						    <option value="2017" <c:if test="${year == '2017' }">selected</c:if>>2017</option>   
						    <option value="2018" <c:if test="${year == '2018' }">selected</c:if>>2018</option>
							<option value="2019" <c:if test="${year == '2019' }">selected</c:if>>2019</option>
							<option value="2020" <c:if test="${year == '2020' }">selected</c:if>>2020</option>
						</select>年
					</td>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_Demosharddateorder_button_add" permissionDes="添加">
						<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="demosharddateorder.insert();" href="javascript:void(0);">添加</a></td>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_Demosharddateorder_button_edit" permissionDes="编辑">
						<td><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="demosharddateorder.modify();" href="javascript:void(0);">编辑</a></td>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_Demosharddateorder_button_delete" permissionDes="删除">
						<td><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="demosharddateorder.del();" href="javascript:void(0);">删除</a></td>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_Demosharddateorder_button_query" permissionDes="查询">
						<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="demosharddateorder.openSearchForm();" href="javascript:void(0);">查询</a></td>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3" domainObject="formdialog_Demosharddateorder_button_selfDefQuery" permissionDes="高级查询">
						<td><a class="easyui-linkbutton" iconCls="icon-search" plain="true" onclick="selfDefQury.show();" href="javascript:void(0);">高级查询</a></td>
					</sec:accesscontrollist>
				</tr>
			</table>
		</div>
		<table id="dgDemosharddateorder" data-options="
				fit: true,
				border: false,
				rownumbers: true,
				animate: true,
				collapsible: false,
				fitColumns: true,
				autoRowHeight: false,
				toolbar:'#toolbarDemosharddateorder',
				idField :'id',
				singleSelect: true,
				checkOnSelect: true,
				selectOnCheck: false,
				pagination:true,
				pageSize:dataOptions.pageSize,
				pageList:dataOptions.pageList,
				striped:true">
			<thead>
				<tr>
					<th data-options="field:'id', halign:'center',checkbox:true" width="220">主键</th>
					<th data-options="field:'orderNo', halign:'center'" width="220">订单编号</th>
					<th data-options="field:'orderName', halign:'center'" width="220">订单名称</th>
					<th data-options="field:'orderBelong', halign:'center'" width="220">订单归属地</th>
					<th data-options="field:'customerName', halign:'center'" width="220">客户姓名</th>
					<th data-options="field:'customerAddress', halign:'center'" width="220">客户地址</th>
					<th data-options="field:'orderCreateTime', halign:'center',formatter:formateDate" width="220">订单创建时间</th>
				</tr>
			</thead>
		</table>
	</div>
	<!--*****************************搜索*********************************  -->
	<div id="searchDialog" data-options="iconCls:'icon-search',resizable:true,modal:false,buttons:'#searchBtns'" style="width: 904px;height:340px;display:none;">
		<form id="demosharddateorder">
			<table class="form_commonTable">
				<tr>
					<th width="10%">订单编号:</th>
					<td width="40%"><input class="easyui-validatebox" style="width: 151px;" type="text" name="orderNo" /></td>
					<th width="10%">订单名称:</th>
					<td width="40%"><input class="easyui-validatebox" style="width: 151px;" type="text" name="orderName" /></td>
				</tr>
				<tr>
					<th width="10%">订单归属地:</th>
					<td width="40%"><input class="easyui-validatebox" style="width: 151px;" type="text" name="orderBelong" /></td>
					<th width="10%">客户姓名:</th>
					<td width="40%"><input class="easyui-validatebox" style="width: 151px;" type="text" name="customerName" /></td>
				</tr>
				<tr>
					<th width="10%">客户地址:</th>
					<td width="40%"><input class="easyui-validatebox" style="width: 151px;" type="text" name="customerAddress" /></td>
				</tr>
				<tr>
					<th width="10%">订单创建时间从:</th>
					<td width="40%"><input name="orderCreateTimeBegin" id="orderCreateTimeBegin" class="easyui-datebox" editable="false" />
					<th width="10%">订单创建时间(至):</th>
					<td><input name="orderCreateTimeEnd" id="orderCreateTimeEnd" class="easyui-datebox" editable="false" /></td>
				</tr>
				</tr>
			</table>
		</form>
		<div id="searchBtns" class="datagrid-toolbar foot-formopera">
			<table class="tableForm" border="0" cellspacing="1" width='100%'>
				<tr>
					<td align="right"><a class="easyui-linkbutton primary-btn" iconCls="" plain="false" onclick="demosharddateorder.searchData();" href="javascript:void(0);">查询</a> <a class="easyui-linkbutton" iconCls="" plain="false" onclick="demosharddateorder.clearData();" href="javascript:void(0);">清空</a> <a class="easyui-linkbutton" iconCls="" plain="false" onclick="demosharddateorder.hideSearchForm();" href="javascript:void(0);">返回</a></td>
				</tr>
			</table>
		</div>
	</div>
	<script src=" avicit/platform6/demo/demosharddateorder/js/Demosharddateorder.js" type="text/javascript"></script>
	<script type="text/javascript">
		var demosharddateorder;
		$(function() {
			$('#year').combobox({
				onSelect: function(record){
					demosharddateorder.searchData();
				}
			});
			demosharddateorder = new Demosharddateorder('dgDemosharddateorder', '${url}', 'searchDialog', 'demosharddateorder');
			var array = [];
			var searchObject = {
				name : '订单编号',
				field : 'ORDER_NO',
				type : 1,
				dataType : 'string'
			};
			array.push(searchObject);
			var searchObject = {
				name : '订单名称',
				field : 'ORDER_NAME',
				type : 1,
				dataType : 'string'
			};
			array.push(searchObject);
			var searchObject = {
				name : '订单归属地',
				field : 'ORDER_BELONG',
				type : 1,
				dataType : 'string'
			};
			array.push(searchObject);
			var searchObject = {
				name : '客户姓名',
				field : 'CUSTOMER_NAME',
				type : 1,
				dataType : 'string'
			};
			array.push(searchObject);
			var searchObject = {
				name : '客户地址',
				field : 'CUSTOMER_ADDRESS',
				type : 1,
				dataType : 'string'
			};
			array.push(searchObject);
			var searchObject = {
				name : '订单创建时间',
				field : 'ORDER_CREATE_TIME',
				type : 1,
				dataType : 'date'
			};
			array.push(searchObject);
			selfDefQury.init(array);
			selfDefQury.setQuery(function(param) {
				demosharddateorder.searchDataBySfn(param);
			});
		});
		function formateDate(value, row, index) {
			return demosharddateorder.formate(value);
		}
		function formateDateTime(value, row, index) {
			return demosharddateorder.formateTime(value);
		}
		function formateHref(value, row, inde) {
			return '<a href="javascript:void(0);" onclick="demosharddateorder.detail(\'' + row.id + '\');">' + value + '</a>';
		}
	</script>
</body>
</html>