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
<!-- ControllerPath = "platform/avicit/platform6/msystem/sysLookupHiberarchy/sysLookupHiberarchyController/toSysLookupHiberarchyManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-left">
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLookupHiberarchy_insert_" permissionDes="添加平级节点">
			<a href="javascript:;" id="sysLookupHiberarchy_insert" class="btn btn-primary form-tool-btn btn-sm btn-point" title="添加平级节点"><i class="fa fa-plus"></i> 添加平级节点</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLookupHiberarchy_insertsub_" permissionDes="添加子节点">
			<a href="javascript:;" id="sysLookupHiberarchy_insertSub" class="btn btn-primary form-tool-btn btn-sm btn-point" title="添加子节点"><i class="fa fa-plus"></i> 添加子节点</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLookupHiberarchy_button_edit" permissionDes="编辑">
			<a id="sysLookupHiberarchy_modify" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLookupHiberarchy_button_delete" permissionDes="删除">
			<a id="sysLookupHiberarchy_del" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="删除"><i class="fa fa-trash-o"></i> 删除</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLookupHiberarchy_button_import" permissionDes="导入">
			<a id="sysLookupHiberarchy_import" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导入"><i class="icon icon-daoru"></i> 导入</a>
		</sec:accesscontrollist>
		<sec:accesscontrollist hasPermission="3" domainObject="formdialog_sysLookupHiberarchy_button_export" permissionDes="导出">
			<a id="sysLookupHiberarchy_export" href="javascript:void(0)" class="btn btn-primary form-tool-btn btn-sm" role="button" title="导出"><i class="icon icon-daochu"></i> 导出</a>
		</sec:accesscontrollist>
		<%--<span class="remind-text">◆ 提示：根节点父ID为-1，导入数据时请勿修改</span>--%>
	</div>
    <div class="toolbar-right">
	    <div class="input-group form-tool-search">
     		<input type="text" name="sysLookupHiberarchy_keyWord" id="sysLookupHiberarchy_keyWord" style="width:240px;" class="form-control input-sm" placeholder="请输入查询条件">
     		<label id="sysLookupHiberarchy_searchPart" class="icon icon-search form-tool-searchicon"></label>
   		</div>
   		<div class="input-group-btn form-tool-searchbtn">
   			<a id="sysLookupHiberarchy_searchAll" href="javascript:void(0)" class="btn btn-defaul btn-sm" role="button" >高级查询 <span class="caret"></span></a>
   		</div>
    </div>
</div>
<table id="sysLookupHiberarchyjqGrid"></table>
<div id="jqGridPager"></div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto;display: none;">
	<form id="form" style="padding: 10px;">
		<table class="form_commonTable">

			<tr>
				<th>
					<label for="typeValue">代码名称:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="typeValue"  id="typeValue" />
				</td>
				<th>
					<label for="uniqueKey">代码标识:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="uniqueKey"  id="uniqueKey" />
				</td>
				<%--<th>
					<label for="typeKey">系统代码值:</label>
				</th>
				<td>
					<input class="form-control input-sm" type="text" name="typeKey"  id="typeKey" />
				</td>--%>
			</tr>
			<tr>
				<th>
					<label for="validFlag">有效标识:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="validFlag" id="validFlag" title="" isNull="true" lookupCode="PLATFORM_VALID_FLAG" />
				</td>
				<th>
					<label for="systemFlag">使用级别:</label>
				</th>
				<td>
					<pt6:h5select css_class="form-control input-sm" name="systemFlag" id="systemFlag" title="" isNull="true" lookupCode="PLATFORM_USAGE_MODIFIER" />
				</td>
			</tr>
    	</table>
	</form>
</div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<script src="avicit/platform6/console/lookuphiberarchy/js/NewSysLookupHiberarchy.js" type="text/javascript"></script>
<script type="text/javascript" src="static/js/platform/component/common/exportData.js"></script>
<script type="text/javascript">
var newSysLookupHiberarchy;

function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="newSysLookupHiberarchy.detail(\''+rowObject.id+'\');">'+cellvalue+'</a>';
 }

function formatDateForHref(cellvalue, options, rowObject){
	var thisDate = format(cellvalue);
	return '<a href="javascript:void(0);" onclick="newSysLookupHiberarchy.detail(\''+rowObject.id+'\');">'+thisDate+'</a>';
}

function formatlookupType(cellvalue, options, rowObject){
    if(cellvalue == ''||cellvalue == null || cellvalue == undefined){
        cellvalue = '---';
	}
    return cellvalue;
}

//清空日期值
function clearCommonSelectValue(element) {
	$(element).siblings("input").val("");
}

$(document).ready(function () {
	var dataGridColModel =  [
		{label: 'id', name: 'id', key: true, width: 75, hidden: true},
		{label: 'id', name: 'parentId', width: 75, hidden: true},
		{label: 'treePath', name: 'treePath', width: 75, hidden: true},
		{label: 'treeSorts', name: 'treeSorts', width: 75, hidden: true},
		{label: 'treeLeaf',	name: 'treeLeaf', width: 75, hidden: true},
		{label: 'treeLevel', name: 'treeLevel', width: 75, hidden: true},
		{label: '代码名称',	name: 'typeValue', formatter: formatValue, width: 150, sortable: false},
		{label: '代码标识', name: 'uniqueKey', align: 'left',	width: 150,	sortable: false},
		/*{label: '系统代码值', name: 'typeKey', width: 150,	align: 'left',sortable: false},*/
		{label: '应用ID', name: 'sysApplicationId', align: 'center',	width: 150,	sortable: false,hidden: true},
		/*{label: '系统代码类型', name: 'lookupType', align: 'center',	width: 150,	sortable: false, formatter: formatlookupType},*/
		{label: '使用级别', name: 'systemFlag', align: 'center',	width: 150,	sortable: false},
		{label: '有效标识', name: 'validFlag', align: 'center',	width: 150,	sortable: false},
        {label: '多语言 ', name: 'sysLanguageCode', align: 'center',	width: 150,	sortable: false},
		{label: '排序', name: 'treeSort', align: 'center',	width: 150,	sortable: false},
        {label: '备注', name: 'remark', align: 'left',	width: 150,	sortable: false}
	];
	var searchNames = new Array();
	var searchTips = new Array();
	searchNames.push("typeValue");
	searchTips.push("代码名称");
	searchNames.push("uniqueKey");
	searchTips.push("代码标识");
	var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
	$('#sysLookupHiberarchy_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);

	newSysLookupHiberarchy= new NewSysLookupHiberarchy('sysLookupHiberarchyjqGrid','${url}','searchDialog','form','sysLookupHiberarchy_keyWord',searchNames,dataGridColModel);
	//添加平级节点按钮绑定事件
	$('#sysLookupHiberarchy_insert').bind('click', function(){
		newSysLookupHiberarchy.insert('Add');
	});
	//添加子级节点按钮绑定事件
	$('#sysLookupHiberarchy_insertSub').bind('click', function(){
		newSysLookupHiberarchy.insert('AddSub');
	});
	//编辑按钮绑定事件
	$('#sysLookupHiberarchy_modify').bind('click', function(){
		newSysLookupHiberarchy.modify();
	});
	//删除按钮绑定事件
	$('#sysLookupHiberarchy_del').bind('click', function(){
		newSysLookupHiberarchy.del();
	});
	//查询按钮绑定事件
	$('#sysLookupHiberarchy_searchPart').bind('click', function(){
		newSysLookupHiberarchy.searchByKeyWord();
	});
	//打开高级查询框
	$('#sysLookupHiberarchy_searchAll').bind('click', function(){
		newSysLookupHiberarchy.openSearchForm(this);
	});

	//导入
	$('#sysLookupHiberarchy_import').bind('click', function() {
		newSysLookupHiberarchy.importData();
	});
	//导出
	$('#sysLookupHiberarchy_export').bind('click', function() {
		newSysLookupHiberarchy.exportData();
	});
});

</script>
</html>
