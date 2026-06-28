<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%
	String importlibs = "common,table,form,excel";
%>
<!DOCTYPE html>
<html>
<head>
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include
	page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<jsp:include
		page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs" />
</jsp:include>
<script src="static/js/platform/component/jQuery/jquery-easyui-1.3.5/jquery.easyui.min.js" type="text/javascript"></script>
</head>
<body class="easyui-layout">
		<div  id="centerDiv1" data-options="region:'center',onResize:function(a){$('#sysExpTemplatejqGrid').setGridWidth(a);$(window).trigger('resize');}">
			<div id="tableToolbar" class="toolbar">
				<div class="toolbar-left">
					<sec:accesscontrollist hasPermission="3"
						domainObject="formdialog_sysExpTemplate_button_add"
						permissionDes="添加">
						<a id="sysExpTemplate_insert" href="javascript:;"
							class="btn btn-primary form-tool-btn btn-sm btn-point" role="button"
							title="添加"><i class="fa fa-plus"></i> 添加</a>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3"
						domainObject="formdialog_sysExpTemplate_button_edit"
						permissionDes="编辑">
						<a id="sysExpTemplate_modify" href="javascript:;"
							class="btn btn-primary form-tool-btn btn-sm" role="button"
							title="编辑"><i class="fa fa-file-text-o"></i> 编辑</a>
					</sec:accesscontrollist>
					<sec:accesscontrollist hasPermission="3"
						domainObject="formdialog_sysExpTemplate_button_delete"
						permissionDes="删除">
						<a id="sysExpTemplate_del" href="javascript:;"
							class="btn btn-primary form-tool-btn btn-sm" role="button"
							title="删除"><i class="fa fa-trash-o"></i> 删除</a>
					</sec:accesscontrollist>
				</div>
				<div class="toolbar-right">
					<div class="input-group form-tool-search">
						<input type="text" name="sysExpTemplate_keyWord"
							id="sysExpTemplate_keyWord" style="width: 240px;"
							class="form-control input-sm" placeholder="请输入查询条件"> <label
							id="sysExpTemplate_searchPart"
							class="icon icon-search form-tool-searchicon"></label>
					</div>
				</div>
			</div>
			<table id="sysExpTemplatejqGrid"></table>
			<div id="jqGridPager"></div>
		</div>
</body>
<!-- 高级查询 -->
<div id="searchDialog" style="overflow: auto; display: none">
	<form id="form" style="padding: 10px;">
		<input type="hidden" name="type" value="1">
		<table class="form_commonTable">
			<tr>
				<th width="10%">编码:</th>
				<td width="39%"><input title="编码" class="form-control input-sm"
					type="text" name="code" id="code" /></td>
				<th width="10%">名称:</th>
				<td width="39%"><input title="名称" class="form-control input-sm"
					type="text" name="name" id="name" /></td>
			</tr>
			<tr>
				<th width="10%">配置方式:</th>
				<td width="39%"><input title="配置方式"
				   class="form-control input-sm" type="text" name="manageStyle"
				   id="manageStyle" /></td>
			</tr>
			<tr>
				<th width="10%">事务控制方式:</th>
				<td width="39%"><input
					title="事务控制方式"
					class="form-control input-sm" type="text" name="swfl" id="swfl" />
				</td>
				<th width="10%">描述:</th>
				<td width="39%"><input title="描述" class="form-control input-sm"
					type="text" name="bz" id="bz" /></td>
			</tr>
			<tr>
				<th width="10%">用户自定义处理类:</th>
				<td width="39%"><input title="用户自定义处理类"
					class="form-control input-sm" type="text" name="userClass"
					id="userClass" /></td>
			</tr>
		</table>
	</form>
</div>

<script src="avicit/platform6/console/excel/sysexceltemplatesheetmanage/exp/js/SysExpExcelTemplate.js" type="text/javascript"></script>
<script src="static/js/platform/component/common/CommonDialog.js" type="text/javascript"></script>
<script type="text/javascript">
	var sysExpTemplate;

	function formatValue(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="sysExpTemplate.detail(\''
				+ rowObject.id + '\');">' + cellvalue + '</a>';
	}


	function formatOperation(cellvalue, options, rowObject) {
		return '<a href="javascript:void(0);" onclick="sysExpTemplate.config(\''
				+ rowObject.id + '\');">导出配置</a>';
	}

	function formatIsShowTitle(cellvalue, options, rowObject){
		if(cellvalue == "0"){
			return "否";
		}else if(cellvalue == "1"){
			return "是";
		}
	}

	$(document).ready(function(){
		var dataGridColModel = [
			{label : 'id',name : 'id',key : true,width : 75,hidden : true},
			{label : '编码',name : 'code',width : 80,formatter : formatValue},
			{label : '名称',name : 'name',width : 80},
            {label : '用户自定义处理类',name : 'dtoClazz',width : 240},
			{label : '是否显示导出标题',name : 'isShowTitle',width : 80,formatter:formatIsShowTitle},
            {label : '导出标题',name : 'title',width : 80},
			{label : '描述',name : 'bz',width : 80},
            {label : '属性设置',name : 'options',width : 80,formatter:formatOperation}
		];

		var searchNames = new Array();
		var searchTips = new Array();
		searchNames.push("code");
		searchTips.push("编码");
		searchNames.push("name");
		searchTips.push("名称");
		var searchC = searchTips.length == 2 ? '或'+ searchTips[1] : "";
		$('#sysExpTemplate_keyWord').attr('placeholder','请输入' + searchTips[0] + searchC);
		sysExpTemplate = new SysExpExcelTemplate(
				'sysExpTemplatejqGrid', '${url}',
				'searchDialog', 'form',
				'sysExpTemplate_keyWord', searchNames,
				dataGridColModel);
		//添加按钮绑定事件
		$('#sysExpTemplate_insert').bind('click', function() {
            sysExpTemplate.insert();
		});
		//编辑按钮绑定事件
		$('#sysExpTemplate_modify').bind('click', function() {
            sysExpTemplate.modify();
		});
		//删除按钮绑定事件
		$('#sysExpTemplate_del').bind('click', function() {
            sysExpTemplate.del();
		});
		//查询按钮绑定事件
		$('#sysExpTemplate_searchPart').bind('click',function() {
			sysExpTemplate.searchByKeyWord();
		});
		//查询框回车事件
		$('#sysExpTemplate_keyWord').bind('keyup', function(e) {
			if (e.keyCode == 13) {
				sysExpTemplate.searchByKeyWord();
			}
		});
		//打开高级查询框
		$('#sysExpTemplate_searchAll').bind('click',function() {
			sysExpTemplate.openSearchForm(this);
		});
	});
</script>
</html>