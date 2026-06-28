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
			<input type="hidden" name="id" value="<c:out value='${dynSubZxbasb1DTO.id}'/>" />
			<input type="hidden" name="version" value="<c:out  value='${dynSubZxbasb1DTO.version}'/>"/>
			<table class="form_commonTable">
				<tr>
					<th width="15%">
						<label for="fkSubColId">外键:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="fkSubColId"  id="fkSubColId" value="<c:out value='${dynSubZxbasb1DTO.fkSubColId}'/>">
   					</td>
					<th width="15%">
						<label for="tjdZhiwu">任务内容:</label></th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="tjdZhiwu"  id="tjdZhiwu" value="<c:out value='${dynSubZxbasb1DTO.tjdZhiwu}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tjdAge">年龄:</label></th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="tjdAge" id="tjdAge" data-min="-99999999999999999999999999999999999999" data-max="99999999999999999999999999999999999999" data-step="1" data-precision="0" value="<c:out value='${dynSubZxbasb1DTO.tjdAge}'/>">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
					<th>
						<label for="tjdDuizhangname">职务:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdDuizhangname"  id="tjdDuizhangname" value="<c:out value='${dynSubZxbasb1DTO.tjdDuizhangname}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tjdDuiyuanname">突击队队员姓名:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdDuiyuanname"  id="tjdDuiyuanname" value="<c:out value='${dynSubZxbasb1DTO.tjdDuiyuanname}'/>">
   					</td>
					<th>
						<label for="tjdDanwei">所在单位:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdDanwei"  id="tjdDanwei" value="<c:out value='${dynSubZxbasb1DTO.tjdDanwei}'/>">
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="tjdFiledUsername">预留字段:</label></th>
					<td>
						<input class="form-control input-sm" type="text" name="tjdFiledUsername"  id="tjdFiledUsername" value="<c:out value='${dynSubZxbasb1DTO.tjdFiledUsername}'/>">
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynSubZxbasb1_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynSubZxbasb1_closeForm">返回</a>
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
			parent.dynSubZxbasb1.closeDialog("edit");
		}
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            //表单字段较多时，直接定位到当前字段
	            $(isValidate.errorList[0].element).focus();
	            return false;
	        }
  		 	$('#dynSubZxbasb1_saveForm').addClass('disabled').unbind("click");	
			parent.dynSubZxbasb1.save($('#form'),"edit");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynSubZxbasb1.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynSubZxbasb1_saveForm').bind('click', function(){
				saveForm();
			}); 
			//返回按钮绑定事件
			$('#dynSubZxbasb1_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

