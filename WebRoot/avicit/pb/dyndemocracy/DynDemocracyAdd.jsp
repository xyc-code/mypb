<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form,fileupload";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/lc/youth/dynDemocracy/dynDemocracyController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
</head>
<body class="easyui-layout" fit="true">
	<div data-options="region:'center',split:true,border:false">
		<form id='form'>
			<input type="hidden" name="id" />
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="democracyDate">召开日期报送:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="democracyDate" id="democracyDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th width="15%">
						<label for="democracyEndDate">会后材料报送:</label>
					</th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="democracyEndDate" id="democracyEndDate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="leadName">公司领导姓名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="leadName"  id="leadName" />
   					</td>
					<th>
						<label for="leadJoin">主管公司领导是否参加:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="leadJoin"  id="leadJoin" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="democracyDept">单位:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="democracyDept"  id="democracyDept" />
   					</td>
				</tr>
				<tr>
					<th>
						<label for="attachment">附件</label>
					</th>
					<td colspan="3">
						<div id="attachment"></div>
					</td>
				</tr>
			</table>
		</form>
	</div>
	<div data-options="region:'south',border:false" style="height: 50px;">
		<div id="toolbar"
			class="datagrid-toolbar datagrid-toolbar-extend foot-formopera">
			<table class="tableForm" style="border:0;cellspacing:1;width:100%">
				<tr>
					<td width="50%" style="padding-right:4%;" align="right">
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="启动流程" id="dynDemocracy_saveForm">启动流程</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynDemocracy_closeForm">返回</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
	<jsp:param value="<%=importlibs%>" name="importlibs"/>
	</jsp:include>
	<script type="text/javascript">
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
			parent.dynDemocracy.closeDialog("insert");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
			//验证附件密级
			if($('#attachment').uploaderExt('validateSecret')) {
				$('#dynDemocracy_saveForm').addClass('disabled').unbind("click");
				parent.dynDemocracy.saveFormAndStartFlow($('#form'), window.name, callback);
			}
		}
		//上传附件
		function callback(id) {
			var files = $('#attachment').uploaderExt('getUploadFiles');
			if(files == 0){
				return null;
			}else{
				$("#id").val(id);
				var maskId = layer.load();
				$('#attachment').uploaderExt('doUpload', id);
				return maskId;
			}
		}
		//附件上传完后事件
		function afterUploadEvent(){
			parent.dynDemocracy.openFlowDetail();
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			//初始化附件上传组件
			$('#attachment').uploaderExt({
				secretLevel: 'PLATFORM_FILE_SECRET_LEVEL',
				formSecret: 'secretLevel',
				tableName: 'DYN_DEMOCRACY',
				allowAdd:true,
				allowDelete:true,
				afterUpload: afterUploadEvent
			});
			initDateSelect();
			parent.dynDemocracy.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynDemocracy_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynDemocracy_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

