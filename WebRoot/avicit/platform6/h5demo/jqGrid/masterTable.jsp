<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>主子表例子</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
	<!-- easyui-layout -->
	<link href="static/h5/singleLayOut/themes/easyui-bootstrap.css" type="text/css" rel="stylesheet">
	
	<script type="text/javascript" src="static/h5/jquery-easyui-1.3.5/src/jquery.parser.js"></script>
	<script type="text/javascript" src="static/h5/jquery-easyui-1.3.5/src/jquery.resizable.js"></script>
	<script type="text/javascript" src="static/h5/jquery-easyui-1.3.5/src/jquery.panel.js"></script>
	<script type="text/javascript" src="static/h5/jquery-easyui-1.3.5/src/jquery.layout.js"></script>
	<!-- 图标 -->
	<link rel="stylesheet" href="static/h5/font-awesome-4.7.0/css/font-awesome.min.css">
	<!-- jqgrid -->
	<link href="static-bootstrap3/jqGrid-5.2.0/css/ui.jqgrid-bootstrap.css" rel="stylesheet">
	<script src="static-bootstrap3/jqGrid-5.2.0/js/i18n/grid.locale-cn.js"  type="text/javascript"></script>
	<script src="static-bootstrap3/jqGrid-5.2.0/js/jquery.jqGrid.custom.min.js"  type="text/javascript"></script>
	<!--[if lte IE 9]>
	<script src="static/h5/bootstrap/respond.min.js"></script>
	<script src="static/h5/bootstrap/html5shiv.js"></script>
	<![endif]-->
</head>
<body class="easyui-layout">

<div id="westDiv" data-options="region:'west',split:true" style="width:600px;">
	<!-- 表格工具栏 -->
	<div id="tableToolbar" style="margin-bottom:5px;">
		<button class="btn btn-white btn-sm" onclick="javascript:add()" title="添加"><i class="fa fa-plus"></i> 添加</button>
		<button class="btn btn-white btn-sm" onclick="edit()" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</button>
		<button class="btn btn-white btn-sm" onclick="deleteRows()" title="删除"><i class="fa fa-trash-o"></i> 删除</button>
		<button class="btn btn-white btn-sm" onclick="search()" title="查询"><i class="fa fa-search"></i> 查询</button>
	</div>
	<!-- 主表 -->
	<div id="jqGridDiv">
		<table id="jqGrid"></table>
		<div id="jqGridPager"></div>
	</div>
</div>
<div id="centerDiv" data-options="region:'center'">
	<!-- 子表 -->
	<div id="tableToolbarDetails" style="margin-bottom:5px;">
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:add()" title="添加">
			<i class="fa fa-plus"></i> 添加
		</button>
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:add()" title="编辑">
			<i class="fa fa-file-text-o"></i> 编辑
		</button>
		<button class="btn btn-white btn-sm" data-toggle="tooltip"
			data-placement="left" onclick="javascript:add()" title="删除">
			<i class="fa fa-trash-o"></i> 删除
		</button>
	</div>
	<div>
		<table id="jqGridDetails"></table>
	</div>
</div>

</body>
<script>
$.jgrid.defaults.styleUI = 'Bootstrap';
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
        rownumbers: true, //显示行顺序号
        scrollOffset: 20, //设置垂直滚动条宽度
        scroll: true, //翻页栏被禁用，使用垂直滚动条加载数据
        rowNum: 10,
		viewrecords: true,
		multiselect: true,
		autowidth: true,
		responsive:true,//开启自适应
		responsivePar:$("#westDiv"),//自适应监听窗口，不填则监听window，只监听windows时使用layout的拖动边框无法自适应
        onSelectRow: function(rowid, selected) {
        	if(rowid != null) {
				jQuery("#jqGridDetails").jqGrid('setGridParam',{url: "platform/h5demo/table/1/1/zh_CN/getLookupValue/"+rowid,datatype: 'json'});
				jQuery("#jqGridDetails").trigger("reloadGrid");
			}
		},
		pager: "#jqGridPager"
    });
	
    $("#t_jqGrid").append($("#tableToolbar"));
    
    //设置多级表头
    $("#jqGrid").jqGrid('setGroupHeaders' , {
    	useColSpanStyle :  true ,  // 没有表头的列是否与表头列位置的空单元格合并
    	groupHeaders : [ {
    		startColumnName :  'lookupType' ,  // 对应colModel中的name
    		numberOfColumns : 3,  // 跨越的列数
    		titleText :  '必填基本信息'
    	},{
    		startColumnName :  'validFlagDesc' ,  // 对应colModel中的name
    		numberOfColumns : 2,  // 跨越的列数
    		titleText :  '其他信息'
    	}]
    });
    
    
    
    // detail grid
    $("#jqGridDetails").jqGrid({
        mtype: "GET",
        datatype: "json",
        page: 1,
        toolbar: [true,'top'],
    	colModel: [
    	    {label: 'id', name: 'id', key: true, width: 75, hidden:true },
    	    {label: '系统代码名称', name: 'lookupName', width: 150 },
    	    {label: '系统代码值', name: 'lookupCode', width: 150 },
    	    {label: '有效标识', name: 'validFlagDesc', width: 150 },
    	    {label: '排序', name: 'displayOrder', width: 150 },
    	    {label: '描述', name: 'description', width: 150 }
    	],
    	rownumbers: true, //显示行顺序号
        scrollOffset: 20, //设置垂直滚动条宽度
    	styleUI : 'Bootstrap',
    	multiselect: true,
    	viewrecords: true,
    	responsive:true,//开启自适应
    	responsivePar:$("#centerDiv")//自适应监听窗口，不填则监听window，只监听windows时使用layout的拖动边框无法自适应
    });
    
    $("#t_jqGridDetails").append($("#tableToolbarDetails"));
    
    //设置多级表头
    /* $("#jqGridDetails" ).jqGrid('setGroupHeaders' , {
    	useColSpanStyle :  true ,  // 没有表头的列是否与表头列位置的空单元格合并
    	groupHeaders : [ {
    		startColumnName :  'id' ,  // 对应colModel中的name
    		numberOfColumns : 4,  // 跨越的列数
    		titleText :  '必填基本信息'
    	}]
    }); */

    
    //reSize();
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