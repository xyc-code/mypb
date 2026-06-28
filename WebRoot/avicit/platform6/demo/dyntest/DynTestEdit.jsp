<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<% 
String importlibs = "common,form";	
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform6/demo/dyntest/dynTestController/operation/Edit/id" -->
<title>编辑</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
						<input type="hidden" name="version" value="<c:out  value='${dynTestDTO.version}'/>"/>
															<input type="hidden" name="id" value="<c:out  value='${dynTestDTO.id}'/>"/>
																																																																																																																																		 <table class="form_commonTable">
				<tr>
																																											 												 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="text01">文本:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="text01"  id="text01" value="<c:out  value='${dynTestDTO.text01}'/>"/>
																	   </td>
																																								   													 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="date01">日期:</label></th>
								    									<td width="39%">
																		    <div class="input-group input-group-sm">
				                	      <input class="form-control date-picker" type="text" name="date01" id="date01" value="<fmt:formatDate pattern="yyyy-MM-dd" value='${dynTestDTO.date01}'/>"/><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
				              	        </div>
																	   </td>
																			</tr>
										<tr>
																																								   													 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="name">名称:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="name"  id="name" value="<c:out  value='${dynTestDTO.name}'/>"/>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="idea">意见:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="idea"  id="idea" value="<c:out  value='${dynTestDTO.idea}'/>"/>
																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="num01">数字:</label></th>
								    									<td width="39%">
																		  	 									 										 		<div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="num01" id="num01" value="<c:out  value='${dynTestDTO.num01}'/>" data-min="-<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-max="<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>
																			 																	   </td>
																																								   													 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="title">标题:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="title"  id="title" value="<c:out  value='${dynTestDTO.title}'/>"/>
																	   </td>
																			</tr>
										<tr>
																																								   													 												 												 						</tr>
					</table>
			</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 60px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynTest_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynTest_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
			function closeForm(){
			parent.dynTest.closeDialog(window.name);
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	       	//限制保存按钮多次点击
   			$('#dynTest_saveForm').addClass('disabled').unbind("click"); 
		    parent.dynTest.save($('#form'),window.name);
		}
	
		$(document).ready(function () {
			$('.date-picker').datepicker();
			$('.time-picker').datetimepicker({
				oneLine:true,//单行显示时分秒
				closeText:'确定',//关闭按钮文案
				showButtonPanel:true,//是否展示功能按钮面板
				showSecond:false,//是否可以选择秒，默认否
			});
			
			parent.dynTest.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynTest_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#dynTest_closeForm').bind('click', function(){
				closeForm();
			});
			
																																																																																																																																																							
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		});
	</script>
</body>
</html>