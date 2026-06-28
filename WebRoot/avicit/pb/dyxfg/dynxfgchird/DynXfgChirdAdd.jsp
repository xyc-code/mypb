<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<%
	String importlibs = "common,form";
%>
<!DOCTYPE html>
<html>
<head>
<!-- ControllerPath = "avicit/pb/dyxfg/dynXfgChird/dynXfgChirdController/operation/Add/null" -->
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
						<label for="userPost">职务:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="userPost"  id="userPost" />
   					</td>
					<th width="15%">
						<label for="userJx">年度绩效:</label>
					</th>
					<td width="34%">
						<input class="form-control input-sm" type="text" name="userJx"  id="userJx" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userSex">性别:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userSex"  id="userSex" />
   					</td>
					<th>
						<label for="userDeptType">部门类别:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userDeptType"  id="userDeptType" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userSj">先进事迹 :</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userSj"  id="userSj" />
   					</td>
					<th>
						<label for="gwName">申报党员先锋岗名称：:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="gwName"  id="gwName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userGbjb">干部级别:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userGbjb"  id="userGbjb" />
   					</td>
					<th>
						<label for="fkSubId">主表id:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="fkSubId"  id="fkSubId" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="content">备注:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="content"  id="content" />
   					</td>
					<th>
						<label for="userName">姓名:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userName"  id="userName" />
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userPartydate">入党时间:</label>
					</th>
					<td>
						<div class="input-group input-group-sm">
							<input class="form-control date-picker" type="text" name="userPartydate" id="userPartydate" />
							<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							<span class="input-group-addon"  onclick="clearCommonSelectValue(this)"><i class="fa fa-close"></i></span>
						</div>
   					</td>
					<th>
						<label for="userJf">党员积分:</label>
					</th>
					<td>
						<div class="input-group input-group-sm spinner" data-trigger="spinner">
							<input  class="form-control"  type="text" name="userJf" id="userJf" data-min="-99999999.99" data-max="99999999.99" data-step="1" data-precision="2">
							<span class="input-group-addon">
								<a href="javascript:;" class="spin-up" data-spin="up"><i class="glyphicon glyphicon-triangle-top"></i></a>
								<a href="javascript:;" class="spin-down" data-spin="down"><i class="glyphicon glyphicon-triangle-bottom"></i></a>
							</span>
						</div>
   					</td>
				</tr>
    			<tr>
					<th>
						<label for="userJg">民主评议组织评价结果:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userJg"  id="userJg" />
   					</td>
					<th>
						<label for="userAge">年龄:</label>
					</th>
					<td>
						<input class="form-control input-sm" type="text" name="userAge"  id="userAge" />
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
						<a href="javascript:void(0)" class="btn btn-primary form-tool-btn typeb btn-sm" role="button" title="保存" id="dynXfgChird_saveForm">保存</a>
						<a href="javascript:void(0)" class="btn btn-grey form-tool-btn btn-sm" role="button" title="返回" id="dynXfgChird_closeForm">返回</a>
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
			parent.dynXfgChird.closeDialog("insert");
		}
		
		function saveForm(){
			var isValidate = $("#form").validate();
	        if (!isValidate.checkForm()) {
	            isValidate.showErrors();
	            return false;
	        }
	        //限制保存按钮多次点击
  		 	$('#dynXfgChird_saveForm').addClass('disabled').unbind("click");	
			parent.dynXfgChird.save($('#form'),"insert");
		}
		//清空日期值
		function clearCommonSelectValue(element) {
			$(element).siblings("input").val("");
		}
		$(document).ready(function () {
			initDateSelect();
			parent.dynXfgChird.formValidate($('#form'));
			//保存按钮绑定事件
			$('#dynXfgChird_saveForm').bind('click', function(){
				saveForm();
			}); 
			
			//返回按钮绑定事件
			$('#dynXfgChird_closeForm').bind('click', function(){
				closeForm();
			});
			
		});
	</script>
</body>
</html>

