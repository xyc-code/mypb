<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- ControllerPath = "ztree/ztreemenu/ztreeMenuController/toZtreeMenuManage" -->
<title>管理</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/component/common/EasyUIJsInclude.jsp"></jsp:include>
<script src="avicit/ztree/ztreemenu/js/ZtreeMenu.js" type="text/javascript"></script>
<script type="text/javascript">
	var ztreeMenu;
	$(function(){
		ztreeMenu = new ZtreeMenu('tree','${url}','searchWord');
		ztreeMenu.setOnLoadSuccess(function(){
		});
		ztreeMenu.setOnSelect(function(_tree,node){
		});
		ztreeMenu.init();
	});
	
   document.ready = function () {
	document.body.style.visibility = 'visible';
   }
</script>
</head>
<body class="easyui-layout" fit="true" style="visibility:hidden;">
<div data-options="region:'west',split:true,title:''" style="width:250px;padding:0px;">
	 <div id="toolbar" class="datagrid-toolbar">
	 	<table width="100%">
	 		<tr>
	 			<td width="100%"><input type="text"  name="searchWord" id="searchWord"></input></td>
	 		</tr>
	 	</table>
	 </div>
	<ul id="tree">正在加载数据...</ul>
</div>
<div data-options="region:'center',split:true,title:'操作'" style="padding:0px;overflow:auto;">
	<div id="toolbarImportResult" class='datagrid-toolbar'>
			<table>
			<tr>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_ztreeMenu_insert_" permissionDes="添加平级节点">
					<td><a class="easyui-linkbutton" iconCls="icon-add" plain="true" onclick="ztreeMenu.insert();" href="javascript:void(0);">添加平级节点</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_ztreeMenu_insertsub_" permissionDes="添加子节点">
					<td><a class="easyui-linkbutton" iconCls="icon-add_other" plain="true" onclick="ztreeMenu.insertsub();" href="javascript:void(0);">添加子节点</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_ztreeMenu_modify_" permissionDes="编辑">
					<td><a class="easyui-linkbutton" iconCls="icon-edit" plain="true" onclick="ztreeMenu.modify();" href="javascript:void(0);">编辑</a></td>
				</sec:accesscontrollist>
				<sec:accesscontrollist hasPermission="3" domainObject="formdialog_ztreeMenu_del_" permissionDes="删除">
					<td><a class="easyui-linkbutton" iconCls="icon-remove" plain="true" onclick="ztreeMenu.del();" href="javascript:void(0);">删除</a></td>
				</sec:accesscontrollist>
			</tr>
		</table>
	</div>
</div>
</body>
</html>