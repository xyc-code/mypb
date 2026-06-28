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
			<input type="hidden" name="id" value="<c:out value='${dynPointsDTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynPointsDTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="draftsmanAlias">拟稿人:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input type="hidden"  id="draftsman" name="draftsman" value="<c:out value='${dynPointsDTO.draftsman}'/>">
							<input class="form-control" placeholder="请选择用户" type="text" id="draftsmanAlias" name="draftsmanAlias" value="<c:out value='${dynPointsDTO.draftsmanAlias}'/>">
							<span class="input-group-addon">
								<i class="glyphicon glyphicon-user"></i>
							</span>
						</div>
   					</td>
					<th width="15%">
						<label for="draftingTime">拟稿时间:</label></th>
					<td width="34%">
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="draftingTime" id="draftingTime" value="<fmt:formatDate pattern='yyyy-MM-dd' value='${dynPointsDTO.draftingTime}'/>">
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="deptIdAlias">拟稿人部门:</label></th>
					<td>
						<div class="input-group input-group-sm">
							<input type="hidden"  id="deptId" name="deptId" value="<c:out value='${dynPointsDTO.deptId}'/>">
							<input class="form-control" placeholder="请选择部门" type="text" id="deptIdAlias" name="deptIdAlias" value="<c:out value='${dynPointsDTO.deptIdAlias}'/>">
							<span class="input-group-addon">
							<i class="glyphicon glyphicon-equalizer"></i>
							</span>
						</div>
   					</td>
					<th>
						<label for="quarter">当前季度:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="quarter"  id="quarter" value="<c:out value='${dynPointsDTO.quarter}'/>">
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynPoints_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynPoints_closeForm">返回</a>
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
			parent.dynPoints.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            //表单字段较多时，直接定位到当前字段
	            $(isValidate.errorList[0].element).focus();
	            return false;
	        }
  		 	$('#dynPoints_saveForm').addClass('disabled').unbind("click");	
			parent.dynPoints.save($('#form'),"edit");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynPoints.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynPoints_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#dynPoints_closeForm').bind('click', function(){
				closeForm();
			});
			
			$('#draftsmanAlias').on('focus',function(e){
				new H5CommonSelect({type:'userSelect', idFiled:'draftsman',textFiled:'draftsmanAlias'});
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

