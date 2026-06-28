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
<!-- ControllerPath = "platform6/demo/createsingle/createSingleController/operation/Edit/id" -->
<title>详细</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
						<input type="hidden" name="version" value="<c:out  value='${createSingleDTO.version}'/>"/>
															<input type="hidden" name="id" value="<c:out  value='${createSingleDTO.id}'/>"/>
																																																																																																																																																																																																																																																																																																																																																	 <table class="form_commonTable">
				<tr>
																																											 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								    <label for="applyUseridAlias">申请人:</label></th>
								    									<td width="39%">
																			<div class="input-group  input-group-sm">
										   	  <input type="hidden"  id="applyUserid" name="applyUserid" value="<c:out  value='${createSingleDTO.applyUserid}'/>">
										      <input class="form-control" placeholder="请选择用户" type="text" id="applyUseridAlias" name="applyUseridAlias" readonly="readonly" value="<c:out  value='${createSingleDTO.applyUseridAlias}'/>">
										      <span class="input-group-addon">
												 <i class="glyphicon glyphicon-user"></i>
											  </span>
								    	</div>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								    <label for="applyDeptidAlias">部门:</label></th>
								    									<td width="39%">
																			<div class="input-group  input-group-sm">
									   	  <input type="hidden"  id="applyDeptid" name="applyDeptid" value="<c:out  value='${createSingleDTO.applyDeptid}'/>">
									      <input class="form-control" placeholder="请选择部门" type="text" id="applyDeptidAlias" name="applyDeptidAlias" readonly="readonly" value="<c:out  value='${createSingleDTO.applyDeptidAlias}'/>">
									      <span class="input-group-addon">
									        <i class="glyphicon glyphicon-equalizer"></i>
								          </span>
								        </div>
																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="applyDate">申请日期:</label></th>
								    									<td width="39%">
																		    <div class="input-group input-group-sm">
				                	      <input class="form-control date-picker" type="text" name="applyDate" id="applyDate" readonly="readonly" value="<fmt:formatDate pattern="yyyy-MM-dd" value='${createSingleDTO.applyDate}'/>"/><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
				              	        </div>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="place">地点:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="place"  id="place" readonly="readonly" value="<c:out  value='${createSingleDTO.place}'/>"/>
																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="guestNum">GUEST_NUM:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="guestNum" id="guestNum" readonly="readonly" value="<c:out  value='${createSingleDTO.guestNum}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="receptionDate">接待日期:</label></th>
								    									<td width="39%">
																		    <div class="input-group input-group-sm">
				                	      <input class="form-control date-picker" type="text" name="receptionDate" id="receptionDate" readonly="readonly" value="<fmt:formatDate pattern="yyyy-MM-dd" value='${createSingleDTO.receptionDate}'/>"/><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
				              	        </div>
																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="receptionTime">接待时间:</label></th>
								    									<td width="39%">
																		  	<div class="input-group input-group-sm">
					                	  <input class="form-control time-picker" type="text" name="receptionTime" id="receptionTime" readonly="readonly" value="<fmt:formatDate pattern="yyyy-MM-dd HH:mm" value='${createSingleDTO.receptionTime}'/>"/><span class="input-group-addon">
					                	  <i class="glyphicon glyphicon-time"></i></span>
					              	    </div>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="cigaretteRzh">香烟-软中华 数量:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="cigaretteRzh" id="cigaretteRzh" readonly="readonly" value="<c:out  value='${createSingleDTO.cigaretteRzh}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="cigaretteYzh">香烟-硬中华 数量:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="cigaretteYzh" id="cigaretteYzh" readonly="readonly" value="<c:out  value='${createSingleDTO.cigaretteYzh}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="cigaretteQt">香烟-其他 数量:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="cigaretteQt" id="cigaretteQt" readonly="readonly" value="<c:out  value='${createSingleDTO.cigaretteQt}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="cigaretteRequire">接待要求 :</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="cigaretteRequire"  id="cigaretteRequire" readonly="readonly" value="<c:out  value='${createSingleDTO.cigaretteRequire}'/>"/>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="wine">酒水-红酒 数量:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="wine" id="wine" readonly="readonly" value="<c:out  value='${createSingleDTO.wine}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="liquor">酒水-白酒 数量:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="liquor" id="liquor" readonly="readonly" value="<c:out  value='${createSingleDTO.liquor}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="otherDrink">酒水-其他 数量:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="otherDrink" id="otherDrink" readonly="readonly" value="<c:out  value='${createSingleDTO.otherDrink}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="dinner">用餐:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="dinner"  id="dinner" readonly="readonly" value="<c:out  value='${createSingleDTO.dinner}'/>"/>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="hotel">住宿费:</label></th>
								    									<td width="39%">
																		  										  	<div class="input-group input-group-sm spinner" data-trigger="spinner">
										  <input  class="form-control"  type="text" name="hotel" id="hotel" readonly="readonly" value="<c:out  value='${createSingleDTO.hotel}'/>" data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
										  <span class="input-group-addon">
										    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
										    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
										  </span>
										</div>
									 																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="remark">其他:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="remark"  id="remark" readonly="readonly" value="<c:out  value='${createSingleDTO.remark}'/>"/>
																	   </td>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="deptType">部门类型:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="deptType"  id="deptType" readonly="readonly" value="<c:out  value='${createSingleDTO.deptType}'/>"/>
																	   </td>
																			</tr>
										<tr>
																																								   													 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="satisfactionSurvey">满意度调查:</label></th>
								    									<td width="39%">
																		    <input class="form-control input-sm" type="text" name="satisfactionSurvey"  id="satisfactionSurvey" readonly="readonly" value="<c:out  value='${createSingleDTO.satisfactionSurvey}'/>"/>
																	   </td>
																																								   													 												 												 												 												 												 												 																			    																	<th width="10%" style="word-break:break-all;word-warp:break-word;">
								    								  	<label for="deptLevel">DEPT_LEVEL:</label></th>
								    									<td width="39%">
																		  										 										 		<div class="input-group input-group-sm spinner" data-trigger="spinner">
											  <input  class="form-control"  type="text" name="deptLevel" id="deptLevel" readonly="readonly" value="<c:out  value='${createSingleDTO.deptLevel}'/>" data-min="-<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-max="<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-step="1" data-precision="0">
											  <span class="input-group-addon">
											    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
											    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
											  </span>
											</div>
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
		parent.createSingle.formValidate($('#form'));
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