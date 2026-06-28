<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>单表例子</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
	<!-- 图标 -->
	<link rel="stylesheet" href="static/h5/font-awesome-4.7.0/css/font-awesome.min.css">
	<!-- jqgrid -->
	<link href="static-bootstrap3/jqGrid-5.2.0/css/ui.jqgrid-bootstrap.css" rel="stylesheet">
	<script src="static-bootstrap3/jqGrid-5.2.0/js/i18n/grid.locale-cn.js"  type="text/javascript"></script>
	<script src="static-bootstrap3/jqGrid-5.2.0/js/jquery.jqGrid.custom.min.js"  type="text/javascript"></script>
</head>
<body>
<!-- 表格工具栏 -->
<div id="tableToolbar" style="margin-bottom:5px;">
	<table style="width: 100%;">
		<tr>
			<td style="width: 70px;">
				<button class="btn btn-white btn-sm" onclick="javascript:add()" title="添加"><i class="fa fa-plus"></i> 添加</button>
			</td>
			<td style="width: 70px;">
				<button class="btn btn-white btn-sm" onclick="edit()" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</button>
			</td>
			<td style="width: 70px;">
				<button class="btn btn-white btn-sm" onclick="deleteRows()" title="删除"><i class="fa fa-trash-o"></i> 删除</button>
			</td>
			<td align="right">
				<table style="width: 600px;">
					<tr>
					<td>系统代码类型:</td><td><input type="text" style="width:150px;" id="filter-LIKE-LOOKUP_TYPE" class="form-control input-sm" placeholder="系统代码类型"></td>
					<td>系统代码类型名称:</td><td><input type="text" style="width:150px;" id="filter-LIKE-LOOKUP_TYPE_NAME" class="form-control input-sm" placeholder="系统代码类型名称"></td>
					</tr>
				 </table>
			</td>	 	
			<td style="width: 70px;">
				<button class="btn btn-white btn-sm" onclick="search()" title="查询"><i class="fa fa-search"></i> 查询</button>
			</td>
		</tr>	
	</table>
	
</div>

<div>
	<table id="jqGrid"></table>
	<div id="jqGridPager"></div>
</div>
</body>
<script>
$(window).resize(function(){
	// $("#jqGrid").setGridWidth($(window).width() - 5);
	// $("#jqGrid").setGridHeight($(window).height()-120);
});

$(document).ready(function () {
	// master grid
    $("#jqGrid").jqGrid({
        url: 'platform/h5demo/table/1/1/zh_CN/getLookupTypeByPage.json',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: [
            { label: 'id', name: 'id', key: true, width: 75, hidden:true },
            { label: '系统代码类型', name: 'lookupType', width: 150 },
            { label: '系统代码类型名称', name: 'lookupTypeName', width: 150 },
            { label: '使用级别', name: 'systemFlagDesc', width: 150 },
            { label: '有效标识', name: 'validFlagDesc', width: 150 },
            { label: '描述', name: 'description', width: 150 }
        ],
        height:$(window).height()-120,
        scrollOffset: 20, //设置垂直滚动条宽度
        rowNum: 10,
        styleUI : 'Bootstrap', 
		viewrecords: true, //
		multiselect: true,
		autowidth: true,
		responsive:true,//开启自适应
        onSelectRow: function(rowid, selected) {
			if(rowid != null) {
				
			}
		}, 
        pager: "#jqGridPager"
    });
	
    $("#t_jqGrid").append($("#tableToolbar"));
});

function edit(){
	//返回ID数组
	var ids = $('#jqGrid').jqGrid('getGridParam','selarrrow');
	if(ids.length == 0){
		alert('没有选择数据');
		return false;
	}else if(ids.length > 1){
		alert('选择数据多于一条');
		return false;
	}
	var rowData = $("#jqGrid").jqGrid('getRowData', ids[0]);
	alert(rowData.lookupTypeName);
}

function deleteRows(){
	//返回ID数组
	var ids = $('#jqGrid').jqGrid('getGridParam','selarrrow');
	if(ids.length == 0){
		alert('没有选择数据');
		return false;
	}
	alert("确定要删除此" + ids.length + "条数据？");
}

/**
 * 查询
 */
function search() {
	var searchParam = {
		'filter-LIKE-LOOKUP_TYPE': $('#filter-LIKE-LOOKUP_TYPE').val(),
		'filter-LIKE-LOOKUP_TYPE_NAME': $('#filter-LIKE-LOOKUP_TYPE_NAME').val()
	};
	$("#jqGrid").jqGrid('setGridParam',{postData: searchParam}).trigger("reloadGrid");
}
</script>
</html>