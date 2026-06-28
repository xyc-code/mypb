<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,table";
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${testDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${testDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="test1">TEST1:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="test1"  id="test1" value="<c:out value='${testDTO.test1}'/>">
   					</td>
				</tr>
			</table>
		</form>
				<!-- 子表表格 -->
		<table id="test1JqGrid"></table>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="test_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script src="avicit/test/test1/js/Test1Edit.js" type="text/javascript"></script>
	<script type="text/javascript">
		var test1Edit;
		var test2Data = ${test2Data};
		function closeForm(){
			parent.test.closeDialog("detail");
		}

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

		$(document).ready(function (){
			//返回按钮绑定事件
			$('#test_closeForm').bind('click', function(){
				closeForm();
			});
			
			var test1DataEditGridColModel =  [
				{
					label : 'id',
					name : 'id',
					key : true,
					width : 75,
					hidden : true
				},
				{ 
					label: 'TEST2Id', 
					name: 'test2', 
					width: 150, 
					hidden : true
				},
				{ 
					label: 'TEST2', 
					name: 'test2Name', 
					width: 150, 
					edittype:"custom", 
					editoptions: {
						custom_element:selectElem,
						custom_value:selectValue,
						forId:'test2', 
						value: test2Data
					}
				},
				{
					label : 'TEST3',
					name : 'test3',
					formatter : format,
					edittype:'custom',
					editoptions:{
						custom_element:dateElem,
						custom_value:dateValue
					}
				}
				];
			test1Edit= new Test1Edit('test1JqGrid','${test1EditUrl}',test1DataEditGridColModel,'${testDTO.id}');
		});
		//form控件禁用
		setFormDisabled();
		$(document).keydown(function(event){  
			event.returnValue = false;
			return false;
		});
	</script>
</body>
</html>

