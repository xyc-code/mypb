<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload,table";
	String formId = request.getParameter("id");
%>
<!DOCTYPE html>
<html>
<head>
<title>详情</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
<!-- 框架样式 -->
<link rel="stylesheet" type="text/css" href="avicit/platform6/bpmreform/bpmbusiness/include2/common/css/style.css">
<!-- 时间轴 样式 -->
<link rel="stylesheet" type="text/css" href="static/h5/timeliner/css/timeliner.css?v=${jsversion}">
</head>
<body>
	<%@ include file="/avicit/platform6/bpmreform/bpmbusiness/include2/buttons.jsp"%>
	<div id="formTab">
		<form id='form'>
			<input type="hidden" id="id" name="id" value="<%=formId%>">
			<input type="hidden" id="version" name="version">
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="commandoesTheme">主题:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="commandoesTheme"  id="commandoesTheme">
					</td>
					<th width="15%">
						<label for="commandoesType">突击队类型:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="commandoesType"  id="commandoesType">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="commandoesCaptains">突击队队长:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesCaptains"  id="commandoesCaptains">
					</td>
					<th>
						<label for="commandoesDate">成立时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="commandoesDate" id="commandoesDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr9">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr9"  id="attr9">
					</td>
					<th>
						<label for="commandoesTaskDate">计划完成任务时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="commandoesTaskDate" id="commandoesTaskDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="commandoesTeamTask">突击队队员负责任务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesTeamTask"  id="commandoesTeamTask">
					</td>
					<th>
						<label for="attr4">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr4"  id="attr4">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="applicationUnit">申请单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="applicationUnit"  id="applicationUnit">
					</td>
					<th>
						<label for="attr3">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr3"  id="attr3">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="commandoesName">突击队名称:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesName"  id="commandoesName">
					</td>
					<th>
						<label for="attr2">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr2"  id="attr2">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr1">申请人:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr1"  id="attr1">
					</td>
					<th>
						<label for="attr8">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr8"  id="attr8">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr7">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr7"  id="attr7">
					</td>
					<th>
						<label for="attr20">预留字段:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr20" id="attr20">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="commandoesTeamDept">突击队队员单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesTeamDept"  id="commandoesTeamDept">
					</td>
					<th>
						<label for="attr6">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr6"  id="attr6">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr5">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr5"  id="attr5">
					</td>
					<th>
						<label for="attr12">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr12"  id="attr12">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr13">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr13"  id="attr13">
					</td>
					<th>
						<label for="attr10">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr10"  id="attr10">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr11">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr11"  id="attr11">
					</td>
					<th>
						<label for="attr16">预留字段:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr16" id="attr16">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr17">预留字段:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr17" id="attr17">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th>
						<label for="attr14">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr14"  id="attr14">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr15">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr15"  id="attr15">
					</td>
					<th>
						<label for="attr18">预留字段:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr18" id="attr18">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr19">预留字段:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="attr19" id="attr19">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th>
						<label for="commandoesTeamName">突击队队员:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesTeamName"  id="commandoesTeamName">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="commandoesTeamCount">队员人数:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesTeamCount"  id="commandoesTeamCount">
					</td>
					<th>
						<label for="commandoesTeamAge">突击队队员年龄:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="commandoesTeamAge"  id="commandoesTeamAge">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="applicationNumber">申请编号:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="applicationNumber"  id="applicationNumber">
					</td>
					<th>
						<label for="expectedIncome">预期收益:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="expectedIncome"  id="expectedIncome">
					</td>
				</tr>
			</table>
		</form>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
		<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<!-- 框架js -->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/jquery.dragsort-0.5.2.min.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/nav.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/common/js/main.js"></script>
    <!-- 时间轴组件 timeliner.js-->
    <script type="text/javascript" src="static/h5/timeliner/js/timeliner.js?v=${jsversion}"></script>
	<!-- 流程js -->
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmcommon/flowUtils.js"></script>
	<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/CommonActor.js"></script>
	<script src="avicit/platform6/bpmreform/bpmbusiness/include2/src/buttons/BpmActor.js"></script>
	<script type="text/javascript" src="avicit/platform6/bpmreform/bpmbusiness/include2/src/FlowEditor.js"></script>
	<!-- 业务js -->
	<script src="avicit/pb/milepost/dynyouthrecord/js/DynYouthRecordDetail.js" type="text/javascript"></script>
	<script type="text/javascript">
		var afterUploadEvent = null;
		//初始化时间控件
		function initDateSelect(){
			$('.date-picker').datepicker({
				beforeShow: function(selectedDate) {
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
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
					setTimeout(function () {
						$('#ui-datepicker-div').css("z-index", 99999999);
					}, 100);
				}
			});
			$('.date-picker').on('keydown',nullInput);
			$('.time-picker').on('keydown',nullInput);
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function (){
			var dynYouthRecordDetail = new DynYouthRecordDetail('form');
			var flowEditor = new FlowEditor(dynYouthRecordDetail);
			flowEditor.init();
			initDateSelect();
			//绑定表单验证规则
			dynYouthRecordDetail.formValidate($('#form'));
			
		});
	</script>
</body>
</html>

