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
						<label for="fiveDate">提出时间:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="fiveDate" id="fiveDate">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</td>
					<th width="15%">
						<label for="fiveNo">申请编号:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="fiveNo"  id="fiveNo">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr9">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr9"  id="attr9">
					</td>
					<th>
						<label for="attr4">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr4"  id="attr4">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fiveName">提出人姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveName"  id="fiveName">
					</td>
					<th>
						<label for="attr3">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr3"  id="attr3">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr2">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr2"  id="attr2">
					</td>
					<th>
						<label for="attr1">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr1"  id="attr1">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fiveSituation">评选情况:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveSituation"  id="fiveSituation">
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
						<label for="attr6">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr6"  id="attr6">
					</td>
					<th>
						<label for="attr5">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr5"  id="attr5">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr12">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr12"  id="attr12">
					</td>
					<th>
						<label for="attr13">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr13"  id="attr13">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr10">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr10"  id="attr10">
					</td>
					<th>
						<label for="posenTel">联系人电话:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="posenTel"  id="posenTel">
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
						<input class="form-control input-sm" type="text" name="attr16"  id="attr16">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="attr17">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="attr17"  id="attr17">
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
						<label for="fiveEffect">改善效果:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveEffect"  id="fiveEffect">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fiveDept">单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveDept"  id="fiveDept">
					</td>
					<th>
						<label for="fivePosition">职位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fivePosition"  id="fivePosition">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fiveProspects">应用前景:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveProspects"  id="fiveProspects">
					</td>
					<th>
						<label for="posenName">联系人姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="posenName"  id="posenName">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fvieAge">年龄:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fvieAge"  id="fvieAge">
					</td>
					<th>
						<label for="fiveDeclarations">申报补充:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveDeclarations"  id="fiveDeclarations">
					</td>
				</tr>
    			<tr>
					<th>
						<label for="fiveProblem">问题描述:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveProblem"  id="fiveProblem">
					</td>
					<th>
						<label for="fiveMeasures">改善措施:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fiveMeasures"  id="fiveMeasures">
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
	<script src="avicit/pb/milepost/dynfiveof/js/DynFiveOfDetail.js" type="text/javascript"></script>
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
			var dynFiveOfDetail = new DynFiveOfDetail('form');
			var flowEditor = new FlowEditor(dynFiveOfDetail);
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
			dynFiveOfDetail.formValidate($('#form'));
			
		});
	</script>
</body>
</html>

