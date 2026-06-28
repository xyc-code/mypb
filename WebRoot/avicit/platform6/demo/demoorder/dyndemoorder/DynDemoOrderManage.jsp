<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "demoorder/dyndemoorder/dynDemoOrderController/toDynDemoOrderManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div
		data-options="region:'center',onResize:function(a){$('#dynDemoOrder').setGridWidth(a);$(window).trigger('resize');}">
		<div id="toolbar_dynDemoOrder" class="toolbar">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_dynDemoOrder_button_add"
					permissionDes="主表添加">
					<a id="dynDemoOrder_insert" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_dynDemoOrder_button_edit"
					permissionDes="主表编辑">
					<a id="dynDemoOrder_modify" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_dynDemoOrder_button_delete"
					permissionDes="主表删除">
					<a id="dynDemoOrder_del" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
			</div>
			<div class="toolbar-right">
				<div class="input-group form-tool-search" style="width: 125px">
					<input type="text" name="dynDemoOrder_keyWord"
						id="dynDemoOrder_keyWord" style="width: 125px;"
						class="form-control input-sm" placeholder="请输入查询条件"> <label
						id="dynDemoOrder_searchPart"
						class="icon icon-search form-tool-searchicon"></label>
				</div>
				<div class="input-group-btn form-tool-searchbtn">
					<a id="dynDemoOrder_searchAll" href="javascript:void(0)"
						class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询
						<span class="caret"></span>
					</a>
				</div>
			</div>
		</div>
		<table id="dynDemoOrder"></table>
		<div id="dynDemoOrderPager"></div>
	</div>
	<div
		data-options="region:'east',split:true,width:fixwidth(.5),onResize:function(a){$('#dynDemoOrderDetail').setGridWidth(a);$(window).trigger('resize');}">
		<div id="toolbar_dynDemoOrderDetail" class="toolbar">
			<div class="toolbar-left">
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_dynDemoOrderDetail_button_add"
					permissionDes="子表添加">
					<a id="dynDemoOrderDetail_insert" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="添加"><i class="fa fa-plus"></i> 添加</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_dynDemoOrderDetail_button_edit"
					permissionDes="子表编辑">
					<a id="dynDemoOrderDetail_modify" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3"
					domainObject="formdialog_dynDemoOrderDetail_button_delete"
					permissionDes="子表删除">
					<a id="dynDemoOrderDetail_del" href="javascript:void(0)"
						class="btn btn-default form-tool-btn btn-sm" role="button"
						title="删除"><i class="fa fa-trash-o"></i> 删除</a>
				</sec:accesscontrollist>
			</div>
			<div class="toolbar-right">
				<div class="input-group form-tool-search" style="width: 125px">
					<input type="text" name="dynDemoOrderDetail_keyWord"
						id="dynDemoOrderDetail_keyWord" style="width: 125px;"
						class="form-control input-sm" placeholder="请输入查询条件"> <label
						id="dynDemoOrderDetail_searchPart"
						class="icon icon-search form-tool-searchicon"></label>
				</div>
				<div class="input-group-btn form-tool-searchbtn">
					<a id="dynDemoOrderDetail_searchAll" href="javascript:void(0)"
						class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询
						<span class="caret"></span>
					</a>
				</div>
			</div>
		</div>
		<table id="dynDemoOrderDetail"></table>
		<div id="dynDemoOrderDetailPager"></div>
	</div>
</body>
<!-- 主表高级查询 -->
<div id="searchDialog" style="overflow: auto; display: none">
	<form id="form">
		<table class="form_commonTable">
			<tr>
				<th width="10%">ORDER_DATE(从):</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text"
							name="orderDateBegin" id="orderDateBegin" /> <span
							class="input-group-addon"><i
							class="glyphicon glyphicon-calendar"></i></span>
					</div>
				</td>
				<th width="10%">ORDER_DATE(至):</th>
				<td width="39%">
					<div class="input-group input-group-sm">
						<input class="form-control date-picker" type="text"
							name="orderDateEnd" id="orderDateEnd" /> <span
							class="input-group-addon"><i
							class="glyphicon glyphicon-calendar"></i></span>
					</div>
				</td>
			</tr>
			<tr>
				<th width="10%">PERSION:</th>
				<td width="39%"><input title="订单人"
					class="form-control input-sm" type="text" name="persion"
					id="persion" /></td>
				<th width="10%">TOTAL_PRICE:</th>
				<td width="39%"><input title="订单总价"
					class="form-control input-sm" type="text" name="totalPrice"
					id="totalPrice" /></td>
			</tr>
			<tr>
				<th width="10%">STATE:</th>
				<td width="39%"><input title="订单状态"
					class="form-control input-sm" type="text" name="state" id="state" />
				</td>
			</tr>
		</table>
	</form>
</div>
<!-- 子表高级查询 -->
<div id="searchDialogSub" style="overflow: auto; display: none">
	<form id="formSub">
		<input type="hidden" name="deptid" id="deptid" />
		<table class="form_commonTable">
			<tr>
				<th width="10%">PRODUCT_ID:</th>
				<td width="39%"><input title="商品ID"
					class="form-control input-sm" type="text" name="productId"
					id="productId" /></td>
				<th width="10%">PRODUCT_NUM:</th>
				<td width="39%"><input title="商品数量"
					class="form-control input-sm" type="text" name="productNum"
					id="productNum" /></td>
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
<script src="avicit/platform6/demo/demoorder/dyndemoorder/js/DynDemoOrder.js"
	type="text/javascript"></script>
<script src="avicit/platform6/demo/demoorder/dyndemoorder/js/DynDemoOrderDetail.js"
	type="text/javascript"></script>
<script type="text/javascript">
	var dynDemoOrder;
	var dynDemoOrderDetail;
	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynDemoOrder.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHref(cellvalue, options, rowObject) {
		var thisDate = format(cellvalue);
		return '<a href="javascript:void(0);" onclick="dynDemoOrder.detail(\''
				+ rowObject.id + '\');">' + thisDate + '</a>';
	}

	$(document).ready(
			function() {
				var searchMainNames = new Array();
				var searchMainTips = new Array();
				searchMainNames.push("persion");
				searchMainTips.push("PERSION");
				searchMainNames.push("totalPrice");
				searchMainTips.push("TOTAL_PRICE");
				var searchMainC = searchMainTips.length == 2 ? '或'
						+ searchMainTips[1] : "";
				$('#dynDemoOrder_keyWord').attr('placeholder',
						'请输入' + searchMainTips[0] + searchMainC);
				var searchSubNames = new Array();
				var searchSubTips = new Array();
				searchSubNames.push("productId");
				searchSubTips.push("PRODUCT_ID");
				searchSubNames.push("productNum");
				searchSubTips.push("PRODUCT_NUM");
				var searchSubC = searchSubTips.length == 2 ? '或'
						+ searchSubTips[1] : "";
				$('#dynDemoOrderDetail_keyWord').attr('placeholder',
						'请输入' + searchSubTips[0] + searchSubC);
				var dynDemoOrderGridColModel = [ {
					label : 'id',
					name : 'id',
					key : true,
					width : 75,
					hidden : true
				}, {
					label : '订单日期',
					name : 'orderDate',
					width : 150,
					formatter : formatDateForHref
				}, {
					label : '订单人',
					name : 'persion',
					width : 150
				}, {
					label : '订单总价',
					name : 'totalPrice',
					width : 150
				}, {
					label : '状态',
					name : 'state',
					width : 150
				} ];
				var dynDemoOrderDetailGridColModel = [ {
					label : 'id',
					name : 'id',
					key : true,
					width : 75,
					hidden : true
				}, {
					label : '产品名称',
					name : 'productName',
					width : 150
				}, {
					label : '产品数量',
					name : 'productNum',
					width : 150
				} ];

				dynDemoOrder = new DynDemoOrder('dynDemoOrder', '${url}',
						'form', dynDemoOrderGridColModel, 'searchDialog',
						function(pid) {
							dynDemoOrderDetail = new DynDemoOrderDetail(
									'dynDemoOrderDetail', '${surl}', "formSub",
									dynDemoOrderDetailGridColModel,
									'searchDialogSub', pid, searchSubNames,
									"dynDemoOrderDetail_keyWord");
						}, function(pid) {
							dynDemoOrderDetail.reLoad(pid);
						}, searchMainNames, "dynDemoOrder_keyWord");
				//主表操作
				//添加按钮绑定事件
				$('#dynDemoOrder_insert').bind('click', function() {
					dynDemoOrder.insert();
				});
				//编辑按钮绑定事件
				$('#dynDemoOrder_modify').bind('click', function() {
					dynDemoOrder.modify();
				});
				//删除按钮绑定事件
				$('#dynDemoOrder_del').bind('click', function() {
					dynDemoOrder.del();
				});
				//打开高级查询框
				$('#dynDemoOrder_searchAll').bind('click', function() {
					dynDemoOrder.openSearchForm(this, $('#dynDemoOrder'));
				});
				//关键字段查询按钮绑定事件
				$('#dynDemoOrder_searchPart').bind('click', function() {
					dynDemoOrder.searchByKeyWord();
				});
				//子表操作
				//添加按钮绑定事件
				$('#dynDemoOrderDetail_insert').bind('click', function() {
					dynDemoOrderDetail.insert(dynDemoOrder.getSelectID());
				});
				//编辑按钮绑定事件
				$('#dynDemoOrderDetail_modify').bind('click', function() {
					dynDemoOrderDetail.modify();
				});
				//删除按钮绑定事件
				$('#dynDemoOrderDetail_del').bind('click', function() {
					dynDemoOrderDetail.del();
				});
				//打开高级查询
				$('#dynDemoOrderDetail_searchAll').bind(
						'click',
						function() {
							dynDemoOrderDetail.openSearchForm(this,
									$('#dynDemoOrderDetail'));
						});
				//关键字段查询按钮绑定事件
				$('#dynDemoOrderDetail_searchPart').bind('click', function() {
					dynDemoOrderDetail.searchByKeyWord();
				});

			});
</script>
</html>