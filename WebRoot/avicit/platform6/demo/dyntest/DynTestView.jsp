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
<title>详细</title>
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
																		    <input class="form-control input-sm" type="text" name="text01"  id="text01" readonly="readonly" value="<c:out  value='${dynTestDTO.text01}'/>"/>
																	   </td>
																																								   													 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="date01">日期:</label></th>
								    									<td width="39%">
																		    <div class="input-group input-group-sm">
				                	      <input class="form-control date-picker" type="text" name="date01" id="date01" readonly="readonly" value="<fmt:formatDate pattern="yyyy-MM-dd" value='${dynTestDTO.date01}'/>"/><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
				              	        </div>
																	   </td>
																			</tr>
										<tr>
																																								   													 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="name">名称:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="name"  id="name" readonly="readonly" value="<c:out  value='${dynTestDTO.name}'/>"/>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="idea">意见:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="idea"  id="idea" readonly="readonly" value="<c:out  value='${dynTestDTO.idea}'/>"/>
																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="num01">数字:</label></th>
								    									<td width="39%">
																		  										 										 		<div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="num01" id="num01" readonly="readonly" value="<c:out  value='${dynTestDTO.num01}'/>" data-min="-<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-max="<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>
																			 																	   </td>
																																								   													 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="title">标题:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="title"  id="title" readonly="readonly" value="<c:out  value='${dynTestDTO.title}'/>"/>
																	   </td>
																			</tr>
										<tr>
																																								   													 												 												 						</tr>
					</table>
			</form>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		document.ready = function () {
		parent.dynTest.formValidate($('#form'));
	};
	//form控件禁用
	setFormDisabled();
	$(document).keydown(function(event){  
		event.returnValue = false;
		return false;
	});  
	</script>
</body>
</html>