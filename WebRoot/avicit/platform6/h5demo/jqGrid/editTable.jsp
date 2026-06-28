<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html>
<head>
	<title>表格编辑例子</title>
	<base href="<%=ViewUtil.getRequestPath(request)%>">
	<!-- 公用的 -->
	<link href="static/h5/bootstrap/3.3.4/css_default/bootstrap.min.css" type="text/css" rel="stylesheet">
	<script src="static/h5/jquery/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="static/h5/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
	<!-- 图标 -->
	<link rel="stylesheet" href="static/h5/font-awesome-4.7.0/css/font-awesome.min.css">
	<!-- jqgrid -->
	<link href="static/h5/jqGrid-5.2.0/css/ui.jqgrid-bootstrap.css" rel="stylesheet">
	<script src="static/h5/jqGrid-5.2.0/js/i18n/grid.locale-cn.js"  type="text/javascript"></script>
	<script src="static/h5/jqGrid-5.2.0/js/jquery.jqGrid.custom.js"  type="text/javascript"></script>
</head>
<body>
<!-- 表格工具栏 -->
<div id="tableToolbar" style="margin-bottom:5px;">
	<button class="btn btn-white btn-sm" onclick="addRow()" title="添加"><i class="fa fa-plus"></i> 添加</button>
	<button class="btn btn-white btn-sm" onclick="save()" title="保存"><i class="fa fa-file-text-o"></i> 保存</button>
	<button class="btn btn-white btn-sm" onclick="deleteRows()" title="删除"><i class="fa fa-trash-o"></i> 删除</button>
</div>

<div>
	<table id="jqGrid"></table>
	<div id="jqGridPager"></div>
</div>
</body>
<script>
var lastEditRowID;
$(document).ready(function () {
	// master grid
    $("#jqGrid").jqGrid({
        url: 'platform/h5demo/table/1/1/zh_CN/getLookupTypeByPage.json',
        mtype: 'POST',
        datatype: "json",
        toolbar: [true,'top'],
        colModel: [
            { label: 'id', name: 'id', key: true, width: 75, hidden:true },
            { label: '系统代码类型', name: 'lookupType', width: 150, editable : true, editrules:{required:true}, editoptions : {maxlength : "30"}},
            { label: '系统代码类型名称', name: 'lookupTypeName', width: 150, editable : true, editrules:{required:true}, edittype:'custom', editoptions:{custom_element: myelem, custom_value:myvalue}},
            { label: '使用级别', name: 'systemFlagDesc', width: 150,editable : true, edittype: "select", editrules:{required:true}, editoptions: {value : "0:公共使用;1:私有使用"}},
            { label: '有效标识', name: 'validFlagDesc', width: 150, editable : true, edittype: "checkbox", editoptions : {value : "有效:无效"}},
            { label: '描述', name: 'description', width: 150, editable : true, edittype:"textarea", editoptions :{rows : "2"} }
        ],
        height:$(window).height()-140,
        rowNum: 10,
        styleUI : 'Bootstrap',
		viewrecords: true,
		multiselect: true,
		autowidth: true,
        onSelectRow: function(rowid, selected) {
        	if (rowid && rowid !== lastEditRowID) {
        		$("#jqGrid").jqGrid('saveRow', lastEditRowID, false, 'clientArray');
                //$('#jqGrid').jqGrid('restoreRow', lastEditRowID);
                $('#jqGrid').jqGrid('editRow', rowid, {  
		            keys : true,        //这里按[enter]保存  
		            url: 'platform/h5demo/table/1/1/zh_CN/operation/saveSysLookupType',  
		            mtype : "POST",  
		            restoreAfterError: true,  
		            extraparam: {  
		               
		            },
		            //当变为编辑模式是触发，可以扩展编辑类型，如日期
		            oneditfunc: function(rowid){  
		                //console.log(rowid);  
		            },
		            //后台方法调用成功回调方法(和返回结果是否true和false无关)
		            aftersavefunc: function(rowid, response, data, parameters){
		                //alert("save success!");
		                //response.responseText 为方法的返回结果
		               // console.log(response.responseText);  
		                lastEditRowID = null;
		            },
		            //后台方法调用异常回调方法
		            afterrestorefunc: function(rowid){
		            	//alert("save fail!");
		            	//console.log(rowid);
		            	lastEditRowID = null;
		            }  
		        });  
                //$('#jqGrid').jqGrid('editRow', rowid, true, pickdates);
                lastEditRowID = rowid;
            }
		}, 
        pager: "#jqGridPager"
    });
	
    $("#t_jqGrid").append($("#tableToolbar"));
});

function myelem (value, options) {
	var el = document.createElement("input");
	el.type="text";
	el.value = value;
	return el;
}
 
function myvalue(elem, operation, value) {
    if(operation === 'get') {
       return $(elem).val();
    } else if(operation === 'set') {
       $('input',elem).val(value);
    }
}

function pickdates(id) {
   
}

var newRowIndex = 0;
function addRow(){
	var newRowId = "new_row" + newRowIndex;
	var parameters = {
		rowID : newRowId,
		initdata : {},
		position :"first",
		useDefValues : true,
		useFormatter : true,
		addRowParams : {extraparam:{}}
	}
	$("#jqGrid").jqGrid('addRow', parameters);
	newRowIndex++;
	
}

function save(){
	
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

</script>
</html>