<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% 
 String importlibs = "common,table,form";
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "platform/avicit/platform6/msystem/sysLookupHiberarchy/sysLookupHiberarchyController/toSysLookupHiberarchyManageSelect" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
</head>
<body>
<div id="tableToolbar" class="toolbar">
	<div class="toolbar-right">
		<div class="input-group form-tool-search">
			<input type="text" name="sysLookupHiberarchyParentSelect_keyWord" id="sysLookupHiberarchyParentSelect_keyWord" style="width:240px;"
				   class="form-control input-sm" placeholder="请输入查询条件">
			<label id="sysLookupHiberarchyParentSelect_searchPart" class="icon icon-search form-tool-searchicon"></label>
		</div>
	</div>
</div>
<table id="sysLookupHiberarchyParentSelectJqGrid"></table>

<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<!-- 模块js -->
<script src="avicit/platform6/console/lookuphiberarchy/js/SysLookupHiberarchySelect.js" type="text/javascript"></script>
<script type="text/javascript">
	var sysLookupHiberarchyParentSelect;

	$(document).ready(function(){
		var dataGridColModel =  [
			{label: 'id', name: 'id', key: true, width: 75, hidden: true},
			{label: 'id', name: 'parentId', width: 75, hidden: true},
			{label: 'treePath', name: 'treePath', width: 75, hidden: true},
			{label: 'treeSorts', name: 'treeSorts', width: 75, hidden: true},
			{label: 'treeLeaf',	name: 'treeLeaf', width: 75, hidden: true},
			{label: 'treeLevel', name: 'treeLevel', width: 75, hidden: true},
            {label: '代码名称', name: 'typeValue', 	width: 150,	sortable: false},
			{label: '代码标识', name: 'uniqueKey', align: 'left',	width: 150,	sortable: false},
            /*{label: '系统代码值',	name: 'typeKey', align: 'center', width: 150, sortable: false},*/
            {label: '应用ID', name: 'sysApplicationId', align: 'center',	width: 150,	sortable: false,hidden: true},
           /* {label: '系统代码类型', name: 'lookupType', align: 'center',	width: 150,	sortable: false},*/
            {label: '使用级别', name: 'systemFlag', align: 'center',	width: 150,	sortable: false},
            {label: '有效标识', name: 'validFlag', align: 'center',	width: 150,	sortable: false},
            // {label: '多语言 ', name: 'sysLanguageCode', align: 'center',	width: 150,	sortable: false},
            /*,
            {label: '排序', name: 'treeSort', align: 'center',	width: 150,	sortable: false},
            {label: '备注', name: 'remark', align: 'center',	width: 150,	sortable: false}*/
		];
		var searchNames = new Array();
		var searchTips = new Array();
		searchNames.push("typeValue");
		searchTips.push("代码名称");
		var searchC = searchTips.length == 2 ? '或' + searchTips[1] : "";
		$('#sysLookupHiberarchyParentSelect_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
		sysLookupHiberarchyParentSelect= new SysLookupHiberarchyParentSelect('sysLookupHiberarchyParentSelectJqGrid','${url}','searchDialog','form','sysLookupHiberarchyParentSelect_keyWord',searchNames,dataGridColModel);

	    $('.date-picker').datepicker();
		$('.time-picker').datetimepicker({
		    closeText:'确定',//关闭按钮文案
			oneLine:true,//单行显示时分秒
			showButtonPanel:true,//是否展示功能按钮面板
			showSecond:false,//是否可以选择秒，默认否
			beforeShow: function(selectedDate) {
				if($('#'+selectedDate.id).val()==""){
					$(this).datetimepicker("setDate", new Date());
					$('#'+selectedDate.id).val('');
				}
			}
		});
		//禁止用户手动输入时间绑定事件
		$('.date-picker').on('keydown',nullInput);
		$('.time-picker').on('keydown',nullInput);

		//查询按钮绑定事件
		$('#sysLookupHiberarchyParentSelect_searchPart').bind('click', function () {
			sysLookupHiberarchyParentSelect.searchByKeyWord();
		});
		//回车查询按钮绑定事件
		$('#sysLookupHiberarchyParentSelect_keyWord').bind('keyup', function () {
			if(e.keyCode == 13){
				sysLookupHiberarchyParentSelect.searchByKeyWord();
			}
		});
	});

	//获取当前选中的节点
	function getSelectedNode(){
		return sysLookupHiberarchyParentSelect.getSelectedNode();
	}

	// 重置tree grid 的选择项
	function resetSelection() {
		sysLookupHiberarchyParentSelect.resetSelection();
	}

</script>
</body>
</html>
