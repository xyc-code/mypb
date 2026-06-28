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

<title>自定义页面</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
	<%--<div id="tableToolbar" class="toolbar">
		<div class="toolbar-right">
			<div class="input-group form-tool-search">
				<input type="text" name="dictionary_keyWord"
					id="dictionary_keyWord" style="width: 240px;"
					class="form-control input-sm" placeholder="请输入！"> <label
					id="dictionary_searchPart"
					class="icon icon-search form-tool-searchicon"></label>
			</div>
		</div>
	</div>--%>
	<table id="dictionaryjqGrid"></table>
	<div id="jqGridPager"></div>
</body>
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<!-- 流程的js -->
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script
	src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js"></script>
<script src="static/h5/base64/base64.js"></script>
<script type="text/javascript">
var mapping;
var querySql;

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

$(document).ready(function () {
	var dataGridColModel =  "";
});

function initGrid(isMuti, rowCnt,queryStatement,dataGridColModel,dataCombox,dataComboxType,callback){
	queryStatement = encodeURIComponent(queryStatement);
    queryStatement = window.btoa(queryStatement);
	querySql = queryStatement;
	var searchdata = {
		sql: queryStatement,
		dataCombox:dataCombox,
		dataComboxType:dataComboxType
	};

	if(isMuti == "0"){
		$("#dictionaryjqGrid").jqGrid({
			url : "eform/plugin/getDictionaryTableInfo",
			mtype : 'POST',
			datatype : "json",
			//toolbar : [ true, 'top' ],//启用toolbar
			colModel : JSON.parse(dataGridColModel), //表格列的属性
			height : $(window).height() - 80, //初始化表格高度
			scrollOffset : 20, //设置垂直滚动条宽度
			rowNum : rowCnt,//每页条数
			rowList : [ 200, 100, 50, 30, 20, 10 ], //每页条数可选列表
			altRows : true,//斑马线
			userDataOnFooter : true,
			pagerpos : 'left',//分页栏位置
			loadComplete : function(xhr) {
				$(this).jqGrid('getColumnByUserIdAndTableName');
				var rows = $(this).jqGrid('getRowData');
				if(rows.length==0){
					$('.ui-jqgrid-bdiv').html('<img style="width: 100px; margin-top: 50px;margin-left:46%;" src="avicit/platform6/console/dashboard/images/no-data.png">')
				}
				$('#jqgh_dictionaryjqGrid_CODE').css('text-align','center');
				//预留扩展
			},
			loadError: function (xhr, status, error) {
				$('#jqgh_dictionaryjqGrid_CODE').css('text-align','center');
				$('.ui-jqgrid-bdiv').html('<img style="width: 100px; margin-top: 50px;margin-left:46%;" src="avicit/platform6/console/dashboard/images/no-data.png">')
			},
			styleUI : 'Bootstrap',//Bootstrap风格
			viewrecords : true, //是否要显示总记录数
			multiselect : false, //可多选
			multiboxonly: true,
			autowidth : true, //列宽度自适应
			shrinkToFit : true,
			responsive : true,//开启自适应
			pager : "#jqGridPager",
			width:"100%",
			postData : searchdata,
			beforeSelectRow: beforeSelectRow,
			hasTabExport:false,
			hasColSet:false,
			ondblClickRow:function(row){
                if (typeof(callback)=='function') {
                	var rowData = $('#dictionaryjqGrid').jqGrid('getRowData',row);
					callback(rowData);
                }
			}
		});
	}else{
		$("#dictionaryjqGrid").jqGrid({
			url : "eform/plugin/getDictionaryTableInfo",
			mtype : 'POST',
			datatype : "json",
			toolbar : [ true, 'top' ],//启用toolbar
			colModel : JSON.parse(dataGridColModel), //表格列的属性
			height : $(window).height() - 80, //初始化表格高度
			scrollOffset : 20, //设置垂直滚动条宽度
			rowNum : rowCnt,//每页条数
			rowList : [ 200, 100, 50, 30, 20, 10 ], //每页条数可选列表
			altRows : true,//斑马线
			userDataOnFooter : true,
			pagerpos : 'left',//分页栏位置
			loadComplete : function(xhr) {
				$(this).jqGrid('getColumnByUserIdAndTableName');
				var rows = $(this).jqGrid('getRowData');
				if(rows.length==0){
					$('.ui-jqgrid-bdiv').html('<img style="width: 100px; margin-top: 50px;margin-left:46%;" src="avicit/platform6/console/dashboard/images/no-data.png">')
				}
				$('#jqgh_dictionaryjqGrid_CODE').css('text-align','center');
				//预留扩展
			},
			loadError: function (xhr, status, error) {
				$('#jqgh_dictionaryjqGrid_CODE').css('text-align','center');
			},
			styleUI : 'Bootstrap',//Bootstrap风格
			viewrecords : true, //是否要显示总记录数
			multiselect : true, //可多选
			autowidth : true, //列宽度自适应
			shrinkToFit : true,
			responsive : true,//开启自适应
			pager : "#jqGridPager",
			width:"100%",
			postData : searchdata,
			hasTabExport:false,
			hasColSet:false
		});
	}

	$("#gbox_dictionaryjqGrid>thead").find("tr").each(function(){
		$(this).find("th").css("text-align","center");
	});

	$("select").css("display","none");

}

/**
 * 单选后除其他选择项
 */
function beforeSelectRow(){
	$("#dictionaryjqGrid").jqGrid("resetSelection");
	return true;
}
</script>
</html>