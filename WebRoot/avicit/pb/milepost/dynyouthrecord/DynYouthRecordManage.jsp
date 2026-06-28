<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<% 
String importlibs = "common,table,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform/avicit/pb/milepost/dynYouthRecord/dynYouthRecordController/toDynYouthRecordManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
	   <div class="input-group form-tool-search">
     		<input type="text" name="dynYouthRecord_keyWord" id="dynYouthRecord_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="dynYouthRecord_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
	</div>
</div>					
<table id="dynYouthRecordjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询end -->
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
<script src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowListEditor.js?v=${jsversion}"></script>
<script src="avicit/pb/milepost/dynyouthrecord/js/DynYouthRecord.js?v=${jsversion}" type="text/javascript"></script>
<script type="text/javascript">
var dynYouthRecord;
function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" style="color:blue" onclick="dynYouthRecord.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }
function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="dynYouthRecord.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}
//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}
window.bpm_operator_refresh = function(){
	dynYouthRecord.reLoad();
};
$(document).ready(function () {
	var dataGridColModel =  [
		{ label : 'id', name : 'id', key : true, width : 75, hidden : true},
		{ label : '主题', name : 'commandoesTheme',width: 150,align: 'left'},
		{ label : '突击队名称', name : 'commandoesName',formatter:formatValue,width: 150,align: 'left'},
	];

	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("commandoesTheme");
	searchNames.push("commandoesName");
	searchTips.push("主题");
	searchTips.push("名称");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	if(searchTips.length > 0){
		$('#dynYouthRecord_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
	}

	dynYouthRecord= new DynYouthRecord('dynYouthRecordjqGrid','${url}','searchDialog','form','dynYouthRecord_keyWord',searchNames,dataGridColModel);
	//添加按钮绑定事件
	$('#dynYouthRecord_insert').bind('click', function(){
		dynYouthRecord.insert();
	});
	//删除按钮绑定事件
	$('#dynYouthRecord_del').bind('click', function(){  
		dynYouthRecord.del();
	});
	//查询按钮绑定事件
	$('#dynYouthRecord_searchPart').bind('click', function(){
		dynYouthRecord.searchByKeyWord();
	});
	//打开高级查询框
	$('#dynYouthRecord_searchAll').bind('click', function(){
		dynYouthRecord.openSearchForm(this);
	});
	//根据流程状态加载数据
	$('#workFlowSelect').bind('change',function(){
		dynYouthRecord.initWorkFlow($(this).val());
	});
 	
	
});
</script>
</html>

