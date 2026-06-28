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
						<label for="democracyDate">召开日期报送:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="democracyDate" id="democracyDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th width="15%">
						<label for="democracyEndDate">会后材料报送:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="democracyEndDate" id="democracyEndDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="leadName">公司领导姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="leadName"  id="leadName">
					</td>
					<th>
						<label for="leadJoin">主管公司领导是否参加:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="leadJoin"  id="leadJoin">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="democracyDept">单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="democracyDept"  id="democracyDept">
					</td>
				</tr>
				<tr>
					<th>
						<label for="attachment">附件</label>
					</th>
					<td colspan="3">
						<div id="attachment" title="附件" class="attachment_div eform_mutiattach_auth"></div>
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
	<script src="avicit/lc/youth/dyndemocracy/js/DynDemocracyDetail.js" type="text/javascript"></script>
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
			var dynDemocracyDetail = new DynDemocracyDetail('form');
			var flowEditor = new FlowEditor(dynDemocracyDetail);
			flowEditor.init();
			//初始化附件上传组件
			$('#attachment').uploaderExt({
				formId : $("#id").val(),
				secretLevel : 'PLATFORM_FILE_SECRET_LEVEL',
				formSecret: 'secretLevel',
				afterUpload : function() {
					return afterUploadEvent();
				}
			});
			initDateSelect();
			//绑定表单验证规则
			dynDemocracyDetail.formValidate($('#form'));
			
		});
	</script>
</body>
</html>

