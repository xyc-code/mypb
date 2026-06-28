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
<!-- ControllerPath = "demoorder/dyndemoproduct/dynDemoProductController/toDynDemoProductManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<div id="tableToolbar" class="toolbar">
		<div class="toolbar-left">
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_dynDemoProduct_button_add"
				permissionDes="添加">
				<a id="dynDemoProduct_insert" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="添加"><i class="fa fa-plus"></i> 添加</a>
			</sec:accesscontrollist>
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_dynDemoProduct_button_edit"
				permissionDes="编辑">
				<a id="dynDemoProduct_modify" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
			</sec:accesscontrollist>
			<sec:accesscontrollist hasPermission="3"
				domainObject="formdialog_dynDemoProduct_button_delete"
				permissionDes="删除">
				<a id="dynDemoProduct_del" href="javascript:void(0)"
					class="btn btn-primary form-tool-btn btn-sm" role="button"
					title="删除"><i class="fa fa-trash-o"></i> 删除</a>
			</sec:accesscontrollist>
		</div>
		<div class="toolbar-right">
			<div class="input-group form-tool-search">
				<input type="text" name="dynDemoProduct_keyWord"
					id="dynDemoProduct_keyWord" style="width: 240px;"
					class="form-control input-sm" placeholder="请输入查询条件"> <label
					id="dynDemoProduct_searchPart"
					class="icon icon-search form-tool-searchicon"></label>
			</div>
			<div class="input-group-btn form-tool-searchbtn">
				<a id="dynDemoProduct_searchAll" href="javascript:void(0)"
					class="btn btn-defaul btn-sm" role="button" title="高级查询">高级查询 <span
					class="caret"></span></a>
			</div>
		</div>
	</div>
	<table id="dynDemoProductjqGrid"></table>
	<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto; display: none">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">
			<tr>
				<th width="10%">NAME:</th>
				<td width="39%"><input title="商品名称"
					class="form-control input-sm" type="text" name="name" id="name" />
				</td>
				<th width="10%">PRICE:</th>
				<td width="39%"><input title="商品价格"
					class="form-control input-sm" type="text" name="price" id="price" />
				</td>
			</tr>
			<tr>
				<th width="10%">DESCRIPTION:</th>
				<td width="39%"><input title="商品描述"
					class="form-control input-sm" type="text" name="description"
					id="description" /></td>
				<th width="10%">PRODUCT_VERSION:</th>
				<td width="39%"><input title="型号"
					class="form-control input-sm" type="text" name="productVersion"
					id="productVersion" /></td>
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
<script src="avicit/platform6/demo/demoorder/dyndemoproduct/js/DynDemoProduct.js"
	type="text/javascript"></script>
<script type="text/javascript">
	var dynDemoProduct;
	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="dynDemoProduct.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}
	function formatDateForHref(cellvalue, options, rowObject) {
		var thisDate = format(cellvalue);
		return '<a href="javascript:void(0);" onclick="dynDemoProduct.detail(\''
				+ rowObject.id + '\');">' + thisDate + '</a>';
	}

	$(document)
			.ready(
					function() {
						var dataGridColModel = [ {
							label : 'id',
							name : 'id',
							key : true,
							width : 75,
							hidden : true
						}, {
							label : '名称',
							name : 'name',
							width : 150,
							formatter : formatValue
						}, {
							label : '单价',
							name : 'price',
							width : 150
						}, {
							label : '商品描述',
							name : 'description',
							width : 150
						}, {
							label : '商品型号',
							name : 'productVersion',
							width : 150
						} ];
						var searchNames = new Array();
						var searchTips = new Array();
						searchNames.push("name");
						searchTips.push("NAME");
						searchNames.push("price");
						searchTips.push("PRICE");
						var searchC = searchTips.length == 2 ? '或'
								+ searchTips[1] : "";
						$('#dynDemoProduct_keyWord').attr('placeholder',
								'请输入' + searchTips[0] + searchC);
						dynDemoProduct = new DynDemoProduct(
								'dynDemoProductjqGrid', '${url}',
								'searchDialog', 'form',
								'dynDemoProduct_keyWord', searchNames,
								dataGridColModel);
						//添加按钮绑定事件
						$('#dynDemoProduct_insert').bind('click', function() {
							dynDemoProduct.insert();
						});
						//编辑按钮绑定事件
						$('#dynDemoProduct_modify').bind('click', function() {
							dynDemoProduct.modify();
						});
						//删除按钮绑定事件
						$('#dynDemoProduct_del').bind('click', function() {
							dynDemoProduct.del();
						});
						//查询按钮绑定事件
						$('#dynDemoProduct_searchPart').bind('click',
								function() {
									dynDemoProduct.searchByKeyWord();
								});
						//打开高级查询框
						$('#dynDemoProduct_searchAll').bind('click',
								function() {
									dynDemoProduct.openSearchForm(this);
								});

					});
</script>
</html>