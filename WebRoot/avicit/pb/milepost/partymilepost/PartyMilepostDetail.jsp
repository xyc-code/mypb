<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload,table";
	String formId = request.getParameter("id");
	String businessId = request.getParameter("businessId");
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
						<label for="userIdAlias">申请人:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="userId" name="userId">
							<input class="form-control" type="text" id="userIdAlias" name="userIdAlias" readonly="readonly">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
					</td>
					<th width="15%">
						<label for="deptIdAlias">申请部门:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId">
							<input class="form-control" type="text" id="deptIdAlias" name="deptIdAlias" readonly="readonly">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="taskStatus">任务状态:</label></th>
					<td>
						<pt6:h5select css_class="form-control input-sm" name="taskStatus" id="taskStatus" title="" isNull="true" lookupCode="PC_M_COMPLETE_STATUS" defaultValue="${partyMilepostDTO.taskStatus}" />
					</td>
				<th>
						<label for="completionDate">计划完成时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="completionDate" id="completionDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
				</tr>
    			<tr>
					<th>
						<label for="partyId">负责人所在党支部:</label></th>
					<td>
						<input  name="partyId"  id="partyId" type="hidden">
							<input class="form-control input-sm" type="text" name="partyIdAlias"  id="partyIdAlias">
					</td>
					<th>
						<label for="milepostPlan">里程碑计划:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="milepostPlan"  id="milepostPlan">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attribute01">文档密级:</label></th>
					<td>
						
						<!--  <input class="form-control input-sm" type="text" name="attribute01"  id="attribute01">-->
							<pt6:h5select css_class="form-control input-sm" name="attribute01" id="attribute01" title="" isNull="true" lookupCode="PC_SECRET_LEVEL" defaultValue="${partyMilepostDTO.attribute01}" />
					</td>
				</tr>
					<tr>
				
					<th>
							<label for="taskCompletion">完成情况描述:</label></th>
					<td colspan="3">
			
						<textarea class="form-control input-sm " style="resize:none;" rows="6" id="taskCompletion" name="taskCompletion" title="完成情况描述" maxlength="4000"></textarea>
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
	<script src="avicit/pb/milepost/partymilepost/js/PartyMilepostDetail.js" type="text/javascript"></script>
	<script type="text/javascript">
		var businessId = "<%=businessId%>";
		//console.log(businessId);
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
			if(businessId != null){
				 avicAjax.ajax({
					 url:'platform/avicit/pb/milepost/partyMilepost/partyMilepostController/operation/initFormData.json',
					 data:	businessId,
					 contentType : 'application/json',
					 type : 'post',
					 dataType : 'json',
					 success : function(r){
						 if (r.flag == "success") {
							    var rowData = r.partyMilepostDTO;
								$("#userIdAlias").val(rowData.userIdAlias);
								$("#userId").val(rowData.userId);
								$("#deptIdAlias").val(rowData.deptIdAlias);
								$("#deptId").val(rowData.deptId);
								$("#partyId").val(rowData.partyId);
								$("#partyIdAlias").val(rowData.partyIdAlias);
								$("#milepostPlan").val(rowData.milepostPlan);
								$("#completionDate").val(rowData.completionDate);
								$("#id").val(rowData.id);
								$("#version").val(rowData.version);
								$("#attribute01").val(rowData.attribute01);
						}else{
						
						}
					 }
				 });
			}
			var partyMilepostDetail = new PartyMilepostDetail('form');
			var flowEditor = new FlowEditor(partyMilepostDetail);
			flowEditor.init();
			//初始化附件上传组件
			$('#attachment').uploaderExt({
				formId : $("#id").val(),
				secretLevel : 'PLATFORM_FILE_SECRET_LEVEL',
				formSecret: 'attribute01',
				afterUpload : function() {
					return afterUploadEvent();
				}
			});
			initDateSelect();
			//绑定表单验证规则
			partyMilepostDetail.formValidate($('#form'));
			
			$('#userIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'userId',textFiled:'userIdAlias'});
				this.blur();
				nullInput(e);
			});
			$('#deptIdAlias').on('focus',function(e){
				new H5CommonSelect({type:'deptSelect', idFiled:'deptId',textFiled:'deptIdAlias'});
				this.blur();
				nullInput(e);
			});
		});
	</script>
</body>
</html>

