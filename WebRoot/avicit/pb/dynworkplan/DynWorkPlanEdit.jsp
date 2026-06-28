<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<title>编辑</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" value="<c:out value='${dynWorkPlanDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynWorkPlanDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="workName">工作名称:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="workName"  id="workName" value="<c:out value='${dynWorkPlanDTO.workName}'/>">
   					</td>
					<th width="15%">
						<label for="responsibleDepa">负责部门:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="responsibleDepa"  id="responsibleDepa" value="<c:out value='${dynWorkPlanDTO.responsibleDepa}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="status">状态:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="status"  id="status" value="<c:out value='${dynWorkPlanDTO.status}'/>">
   					</td>
					<th>
						<label for="quarter">季度:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="quarter"  id="quarter" value="<c:out value='${dynWorkPlanDTO.quarter}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="responsibleDepaId">负责部门ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="responsibleDepaId"  id="responsibleDepaId" value="<c:out value='${dynWorkPlanDTO.responsibleDepaId}'/>">
   					</td>
					<th>
						<label for="partyCommitteeWorkPlan">党委工作计划:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="partyCommitteeWorkPlan"  id="partyCommitteeWorkPlan" value="<c:out value='${dynWorkPlanDTO.partyCommitteeWorkPlan}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="companyId">公司计划ID:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="companyId"  id="companyId" value="<c:out value='${dynWorkPlanDTO.companyId}'/>">
   					</td>
					<th>
						<label for="fileType">文件密级:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="fileType"  id="fileType" value="<c:out value='${dynWorkPlanDTO.fileType}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="planDate">计划结束时间:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="planDate" id="planDate" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynWorkPlanDTO.planDate}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynWorkPlan_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynWorkPlan_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
		//遮罩
		var maskId = null;
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
		
		function closeForm(){
			parent.dynWorkPlan.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
  		 	$('#dynWorkPlan_saveForm').addClass('disabled').unbind("click");	
			parent.dynWorkPlan.save($('#form'),"edit");
		}

        //清空日期值
        function clearCommonSelectValue(element) {
            $(element).siblings("input").val("");
        }

		$(document).ready(function () {
			initDateSelect();
			parent.dynWorkPlan.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynWorkPlan_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#dynWorkPlan_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

