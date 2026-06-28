<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@ taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% 
	String importlibs = "common,form,table,fileupload";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "platform6/demo/createsingle/createSingleController/operation/toDetailJsp" -->
<base href="<%=ViewUtil.getRequestPath(request)%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>详细</title>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 当前页 样式 -->
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmcommon/css/editForm.css">
<!-- 定制tab标签样式 -->
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmcommon/css/avictabs.css">
<!-- 流程标签 样式 -->
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmcommon/css/workflow.css">
<!-- 时间轴 样式 -->
<link rel="stylesheet" type="text/css" href="static/h5/timeliner/css/timeliner.css">
</head>
<body>
	<div class="main">
		<!-- 右侧工具栏 Start -->
		<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include/buttons.jsp"%>
		<!-- 右侧工具栏 End -->
		<!-- 正文内容 Start -->
		<div class="content">
			<!-- 简单tab Start -->
			<div class="avic-tab">
				<div class="tab-bar">
					<ul>
						<li class="on">表单信息</li>
						<li>流程跟踪</li>
						<li>引用文档</li>
						<li>关联流程</li>
					</ul>
				</div>
				<div class="btn-bar on">
					<!-- 暂存 关注 正文 等流程代理的按钮 -->
					<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include/buttonBar.jsp" %>
				</div>
				<div class="tab-panel">
					<div class="panel-body on">
						<div class="panel-main">
					<!-- 业务表单 Start -->
					<form id='form'>
						<input type="hidden" name="id" />
						<input type="hidden" name="version"/>
						<table class="form_commonTable">
							<tr>
																																																							 																										 																			<th width="10%">
									    									    <label for="applyUseridAlias">申请人:</label></th>
									    										<td width="39%">
																					 <div class="input-group  input-group-sm">
										   	  <input type="hidden"  id="applyUserid" name="applyUserid">
										      <input class="form-control" placeholder="请选择用户" type="text" id="applyUseridAlias" name="applyUseridAlias">
										      <span class="input-group-addon" >
										        <i class="glyphicon glyphicon-user"></i>
										      </span>
										    </div>
																			   </td>
																																													   															 																										 																			<th width="10%">
									    									    <label for="applyDeptidAlias">部门:</label></th>
									    										<td width="39%">
																				    <div class="input-group  input-group-sm">
										   	  <input type="hidden"  id="applyDeptid" name="applyDeptid">
										      <input class="form-control" placeholder="请选择部门" type="text" id="applyDeptidAlias" name="applyDeptidAlias" >
										      <span class="input-group-addon" >
										        <i class="glyphicon glyphicon-equalizer"></i>
										      </span>
									        </div>
									    									   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="applyDate">申请日期:</label></th>
									    										<td width="39%">
																				    <div class="input-group input-group-sm">
					                	      <input class="form-control date-picker" type="text" name="applyDate" id="applyDate" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
					              	        </div>
																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="place">地点:</label></th>
									    										<td width="39%">
																				    <input class="form-control input-sm" type="text" name="place"  id="place" />
																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="guestNum">GUEST_NUM:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="guestNum" id="guestNum"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="receptionDate">接待日期:</label></th>
									    										<td width="39%">
																				    <div class="input-group input-group-sm">
					                	      <input class="form-control date-picker" type="text" name="receptionDate" id="receptionDate" /><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
					              	        </div>
																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="receptionTime">接待时间:</label></th>
									    										<td width="39%">
																				  	<div class="input-group input-group-sm">
						                	  <input class="form-control time-picker" type="text" name="receptionTime" id="receptionTime" /><span class="input-group-addon">
						                	  <i class="glyphicon glyphicon-time"></i></span>
						              	    </div>
																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="cigaretteRzh">香烟-软中华 数量:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="cigaretteRzh" id="cigaretteRzh"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="cigaretteYzh">香烟-硬中华 数量:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="cigaretteYzh" id="cigaretteYzh"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="cigaretteQt">香烟-其他 数量:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="cigaretteQt" id="cigaretteQt"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="cigaretteRequire">接待要求 :</label></th>
									    										<td width="39%">
																				    <input class="form-control input-sm" type="text" name="cigaretteRequire"  id="cigaretteRequire" />
																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="wine">酒水-红酒 数量:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="wine" id="wine"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="liquor">酒水-白酒 数量:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="liquor" id="liquor"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="otherDrink">酒水-其他 数量:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="otherDrink" id="otherDrink"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="dinner">用餐:</label></th>
									    										<td width="39%">
																				    <input class="form-control input-sm" type="text" name="dinner"  id="dinner" />
																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="hotel">住宿费:</label></th>
									    										<td width="39%">
																				  												    <div class="input-group input-group-sm spinner" data-trigger="spinner">
												  <input  class="form-control"  type="text" name="hotel" id="hotel"  data-min="-999999999999" data-max="999999999999" data-step="1" data-precision="0">
												  <span class="input-group-addon">
												    <a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
												    <a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
												  </span>
												</div>	
											  																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="remark">其他:</label></th>
									    										<td width="39%">
																				    <input class="form-control input-sm" type="text" name="remark"  id="remark" />
																			   </td>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="deptType">部门类型:</label></th>
									    										<td width="39%">
																				    <input class="form-control input-sm" type="text" name="deptType"  id="deptType" />
																			   </td>
																					</tr>
											<tr>
																																													   															 																										 																			<th width="10%">
									    									  	<label for="satisfactionSurvey">满意度调查:</label></th>
									    										<td width="39%">
																				    <input class="form-control input-sm" type="text" name="satisfactionSurvey"  id="satisfactionSurvey" />
																			   </td>
																																													   															 															 															 															 															 															 															 																										 																			<th width="10%">
									    									  	<label for="deptLevel">DEPT_LEVEL:</label></th>
									    										<td width="39%">
																				  												     													<div class="input-group input-group-sm spinner" data-trigger="spinner">
													  <input  class="form-control"  type="text" name="deptLevel" id="deptLevel"  data-min="-<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-max="<%=Math.pow(10,12)-Math.pow(10,-0)%>" data-step="1" data-precision="0">
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
							<!-- 业务表单 End -->
					   </div>
				 </div>
				 <div class="panel-body">
					 <%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include/tracks.jsp"%>
				 </div>
				 <div class="panel-body">
					 <%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include/files.jsp"%>
				 </div>
				 <div class="panel-body">
					<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include/processlevel.jsp"%>
				</div
	  		 </div>
	 	 </div>
		 <!-- 简单tab End -->
   	  </div>
   	  <!-- 正文内容 End -->
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<!-- 页面脚本 avictabs.js-->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/js/avictabs.js"></script>
	<!-- 时间轴组件 timeliner.js-->
	<script type="text/javascript" src="static/h5/timeliner/js/timeliner.js"></script>
	<!-- 页面脚本 editForm.js-->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/js/editForm.js"></script>
	<!-- 流程的js -->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include/src/FlowEditor.js"></script>
	<!-- 业务的js -->
	<script src="avicit/platform6/demo/createsingle/js/CreateSingleDetail.js"></script>
	<script type="text/javascript">
			$(document).ready(function () {
			//创建业务操作JS
			var createSingleDetail = new CreateSingleDetail('form');
			//创建流程操作JS
			new FlowEditor(createSingleDetail);
			
			$('.date-picker').datepicker();
			$('.time-picker').datetimepicker({
				oneLine:true,//单行显示时分秒
				closeText:'确定',//关闭按钮文案
				showButtonPanel:true,//是否展示功能按钮面板
				showSecond:false,//是否可以选择秒，默认否
				beforeShow: function(selectedDate) {
					if($('#'+selectedDate.id).val()==""){
						$(this).datetimepicker("setDate", new Date());
						$('#'+selectedDate.id).val('');
					}
				}
			});
			
			//绑定表单验证规则
			createSingleDetail.formValidate($('#form'));
			
																											$('#applyUseridAlias').on('focus',function(e){
						new H5CommonSelect({type:'userSelect', idFiled:'applyUserid',textFiled:'applyUseridAlias'});
						this.blur();
						nullInput(e);
					}); 
																								$('#applyDeptidAlias').on('focus',function(e){
						new H5CommonSelect({type:'deptSelect', idFiled:'applyDeptid',textFiled:'applyDeptidAlias'});
					    this.blur();
					    nullInput(e);
					});
																																																																																																																																																																																																																																																																																																																																																																																																																			
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		});
	</script>
</body>
</html>